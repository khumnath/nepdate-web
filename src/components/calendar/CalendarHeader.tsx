import React, { useState } from 'react';
import { Sun, Moon, X, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { toDevanagari, getNepaliPeriod } from '../../lib/utils/lib';
import {
	NEPALI_LABELS,
	NEPALI_BS_MONTHS,
	GREGORIAN_MONTHS,
	GREGORIAN_MONTHS_SHORT
} from '../../constants/constants';

import type { TodayDetails } from './TodayWidget';

interface CalendarHeaderProps {
	activeSystem: 'bs' | 'ad';
	bsYear: number | null;
	bsMonth: number;
	adYear: number | null;
	adMonth: number;
	onSystemChange: (system: 'bs' | 'ad') => void;
	onTodayClick: () => void;
	theme: 'light' | 'dark';
	onThemeToggle: () => void;
	todayDetails: TodayDetails | null;
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
	activeSystem,
	bsYear,
	bsMonth,
	adYear,
	adMonth,
	onSystemChange,
	onTodayClick,
	theme,
	onThemeToggle,
	todayDetails
}) => {
	const [isBhadraModalOpen, setBhadraModalOpen] = useState(false);

	const formatTimeNepali = (iso?: string | null) => {
		if (!iso) return null;
		const d = new Date(iso);
		if (isNaN(d.getTime())) return null;

		const parts = new Intl.DateTimeFormat('en-US', {
			timeZone: 'Asia/Kathmandu',
			hour12: false,
			hour: '2-digit',
			minute: '2-digit'
		}).formatToParts(d);

		const get = (type: string) => parts.find(p => p.type === type)?.value || '00';
		let hh = parseInt(get('hour'), 10);
		const mm = parseInt(get('minute'), 10);
		if (!isFinite(hh) || !isFinite(mm)) return null;

		const period = getNepaliPeriod(hh);
		const hour12 = hh % 12 === 0 ? 12 : hh % 12;
		return `${toDevanagari(hour12)}:${toDevanagari(String(mm).padStart(2, '0'))} ${period}`;
	};

	const getBhadraTimeDisplay = () => {
		if (!todayDetails) return null;
		const timings = (todayDetails as any).bhadraTiming as Array<{ startTime: string | null, endTime: string | null }>;

		if (!timings || timings.length === 0) return null;

		return timings.map(t => {
			const start = formatTimeNepali(t.startTime);
			const end = formatTimeNepali(t.endTime);

			if (start && end) return `${start} देखि ${end} सम्म`;
			if (start) return `${start} देखि सुरु`;
			if (end) return `${end} सम्म`;
			return null;
		}).filter(Boolean).join(', ');
	};


	const bsDisplay = bsYear !== null
		? (
			<>
				<span className="max-[400px]:hidden">{toDevanagari(bsYear)} {NEPALI_BS_MONTHS[bsMonth]}</span>
				<span className="hidden max-[400px]:inline">{toDevanagari(bsYear)} {NEPALI_BS_MONTHS[bsMonth]}</span>
			</>
		)
		: '—';

	const adDisplay = adYear !== null
		? (
			<>
				<span className="max-[400px]:hidden">{adYear} {GREGORIAN_MONTHS[adMonth]}</span>
				<span className="hidden max-[400px]:inline">{adYear} {GREGORIAN_MONTHS_SHORT[adMonth]}</span>
			</>
		)
		: '—';


	const bikramDesktopLabel = activeSystem === 'bs' ? NEPALI_LABELS.bikramsambat : 'Bikram Sambat';
	const bikramMobileLabel = activeSystem === 'bs' ? NEPALI_LABELS.bs : 'BS';
	const gregorianDesktopLabel = activeSystem === 'bs' ? NEPALI_LABELS.gregorian : 'Gregorian';
	const gregorianMobileLabel = activeSystem === 'bs' ? NEPALI_LABELS.ad : 'AD';

	// TODAY LUNAR SUMMARY FORMATTER
	const renderLunarSummary = () => {
		if (!todayDetails) return "—";
		const bhadra = todayDetails.bhadra;

		// formatElements to return ReactNode array
		const formatElements = (
			arr: Array<{ name: string; startTime?: string | null; endTime?: string | null }> | undefined,
			isKarana: boolean = false
		) => {
			if (!arr || arr.length === 0) return '—';

			const elements: React.ReactNode[] = [];
			const first = arr[0];
			const firstEndIso = first.endTime || null;
			const firstEnd = formatTimeNepali(firstEndIso);

			const nextSunriseIso = (todayDetails as any).nextSunriseIso as string | null | undefined;
			const nextSunriseDate = nextSunriseIso ? new Date(nextSunriseIso) : null;

			// Helper to render a single item's content
			const renderItemContent = (name: string, timeStr: string | null, prefix: string = "") => {
				const isVishti = name.includes('विष्टि') || name.includes('Vishti');
				const showBhadraBtn = isKarana && isVishti && bhadra && bhadra.isActive;

				return (
					<>
						{prefix}
						{name}
						{showBhadraBtn && (
							<button
								onClick={(e) => {
									e.stopPropagation();
									setBhadraModalOpen(true);
								}}
								className={`inline-flex items-center mx-1 px-1 py-0 rounded text-[10px] font-bold cursor-pointer hover:opacity-80 align-baseline transition-colors ${bhadra.isHarmful
										? 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300'
										: 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300'
									}`}
								title="भद्रा विवरण"
							>
								( भद्रा )
							</button>
						)}
						{timeStr ? ` ${timeStr} सम्म` : ''}
					</>
				);
			};

			elements.push(
				<span key="first">
					{renderItemContent(first.name, firstEnd)}
				</span>
			);

			if (arr.length > 1) {
				for (let i = 1; i < arr.length; i++) {
					const el = arr[i];
					const isLast = i === arr.length - 1;
					const endIso = el.endTime || null;
					const endDate = endIso ? new Date(endIso) : null;

					let showEnd = false;
					if (endDate && nextSunriseDate) {
						showEnd = endDate.getTime() < nextSunriseDate.getTime();
					} else if (endDate) {
						// Fallback if nextSunriseDate is missing
						const firstRefIso = first.endTime || first.startTime || null;
						const firstRefDate = firstRefIso ? new Date(firstRefIso) : null;
						if (firstRefDate) {
							showEnd = endDate.getUTCDate() === firstRefDate.getUTCDate();
						} else {
							showEnd = true;
						}
					}

					const formattedEnd = formatTimeNepali(endIso);
					const timeStr = showEnd ? formattedEnd : null;
					const prefix = isLast ? "उपरान्त " : "";

					elements.push(
						<span key={i}>
							, {renderItemContent(el.name, timeStr, prefix)}
						</span>
					);
				}
			}

			return elements;
		};

		// Get BS month, day and weekday
		const bsDay = todayDetails.bsDay ? toDevanagari(todayDetails.bsDay) : '';
		const bsWeekday = todayDetails.weekday || '';
		const bsMonthName = typeof todayDetails.bsMonthIndex === 'number' ? NEPALI_BS_MONTHS[todayDetails.bsMonthIndex] : '';

		return (
			<div className="text-center">
				<strong className="font-bold text-green-600 text-base">आज</strong>
				<span className="text-gray-600 dark:text-gray-300 text-sm" style={{ textWrap: 'auto' }}>
					,&nbsp;
					<strong className="font-bold">{bsMonthName} {bsDay} गते {bsWeekday}, तिथि:</strong> {formatElements(todayDetails.tithis)}。
					<strong className="font-bold">नक्षत्र:</strong> {formatElements(todayDetails.nakshatras)}。
					<strong className="font-bold">योग:</strong> {formatElements(todayDetails.yogas)}。
					<strong className="font-bold">करण:</strong> {formatElements(todayDetails.karanas, true)}
				</span>
			</div>
		);
	};

	return (
		<>
			<header className="w-full mb-2 bg-gradient-to-r from-[#0968e7] via-[#5068c8] to-[#0589c6]
      dark:from-[#183051] dark:via-[#3a3d4a] dark:to-[#1f292e]
  backdrop-blur-sm border-b border-[#a5b4fc] dark:border-[#6d6e6f] rounded-lg">
				<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
					{/* Left Controls */}
					<div className="flex items-center gap-3">

						{/* DATE SYSTEM SWITCH */}
						<div className="flex bg-slate-200 dark:bg-gray-700 rounded-lg p-1">
							<button
								className={`px-4 py-2 rounded-md transition-all duration-200 text-sm sm:text-base font-medium ${activeSystem === 'bs'
									? 'bg-blue-600 dark:bg-slate-600 text-white shadow-sm'
									: 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
									}`}
								onClick={() => onSystemChange('bs')}
							>
								<span className="hidden md:inline">{bikramDesktopLabel}</span>
								<span className="md:hidden">{bikramMobileLabel}</span>
							</button>

							<button
								className={`px-4 py-2 rounded-md transition-all duration-200 text-sm sm:text-base font-medium ${activeSystem === 'ad'
									? 'bg-blue-600 dark:bg-slate-600 text-white shadow-sm'
									: 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
									}`}
								onClick={() => onSystemChange('ad')}
							>
								<span className="hidden md:inline">{gregorianDesktopLabel}</span>
								<span className="md:hidden">{gregorianMobileLabel}</span>
							</button>
						</div>

						{/* TODAY BUTTON */}
						<button
							onClick={onTodayClick}
							className="px-4 sm:px-5 py-2 bg-slate-200 text-blue-600 rounded-lg hover:bg-blue-200 hover:text-blue-700 dark:text-slate-200 dark:bg-slate-600 dark:hover:bg-blue-700 transition-colors duration-200 font-medium text-sm sm:text-base"
							style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
						>
							आज
						</button>
					</div>

					{/* RIGHT SIDE: DATE INFO + THEME TOGGLE */}
					<div className="flex items-center gap-4">
						<div className="text-xs sm:text-sm text-white/90 dark:text-gray-300 text-center">
							<div className="font-medium">
								<span className="hidden sm:inline">AD: </span>{adDisplay}
							</div>
							<div className="font-semibold" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
								<span className="hidden sm:inline">BS: </span>{bsDisplay}
							</div>
						</div>

						{/* THEME TOGGLE */}
						<button
							onClick={onThemeToggle}
							className="p-2.5 rounded-lg bg-slate-200 dark:bg-gray-700 text-blue-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200"
						>
							{theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
						</button>
					</div>
				</div>

				{/* TODAY LUNAR INFO STRIP */}
				<div className="
        w-full text-center py-2 text-[11px] sm:text-xs md:text-sm
        bg-gray-50/85 dark:bg-gray-800/85
        text-gray-800 dark:text-gray-200
        border-t border-white/40 dark:border-gray-700
        rounded-b-lg
        px-2
        overflow-x-auto
        block md:hidden
      ">
					{renderLunarSummary()}
				</div>
			</header>

			{/* BHADRA POPUP MODAL */}
			{isBhadraModalOpen && todayDetails && (
				<div
					className="fixed inset-0 bg-black/60 z-[999] flex items-center justify-center p-4 backdrop-blur-sm"
					onClick={() => setBhadraModalOpen(false)}
				>
					{(() => {
						const bhadra = todayDetails.bhadra;
						if (!bhadra) return null;
						const bhadraTimeStr = getBhadraTimeDisplay();

						return (
							<div
								className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-sm w-full p-5 relative animate-in fade-in zoom-in duration-200"
								onClick={(e) => e.stopPropagation()}
							>
								<button
									onClick={() => setBhadraModalOpen(false)}
									className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
								>
									<X size={20} />
								</button>

								<div className="flex items-center gap-3 mb-4">
									{bhadra.isHarmful
										? <AlertTriangle className="text-red-500 w-6 h-6" />
										: <CheckCircle className="text-green-500 w-6 h-6" />
									}
									<h3 className="text-lg font-bold text-gray-900 dark:text-white" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
										भद्रा (विष्टि करण)
									</h3>
								</div>

								<div className={`p-4 rounded-lg border ${bhadra.isHarmful
									? 'bg-red-50 border-red-100 dark:bg-red-900/20 dark:border-red-800'
									: 'bg-green-50 border-green-100 dark:bg-green-900/20 dark:border-green-800'
									}`}>

									{/* TIME SECTION */}
									{bhadraTimeStr && (
										<div className="mb-3 pb-3 border-b border-black/5 dark:border-white/10">
											<span className="flex items-center gap-1.5 text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold mb-1">
												<Clock size={12} /> समय (Time)
											</span>
											<p className="text-base font-bold text-gray-800 dark:text-gray-200" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
												{bhadraTimeStr}
											</p>
										</div>
									)}

									<div className="mb-3">
										<span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold block mb-1">
											वास (Residence)
										</span>
										<p className="text-base font-medium text-gray-800 dark:text-gray-200" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
											{bhadra.residence}
										</p>
									</div>

									<div>
										<span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-semibold block mb-1">
											फल (Effect)
										</span>
										<p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
											{bhadra.status}
										</p>
									</div>
								</div>

								<div className="mt-4 text-center">
									<button
										onClick={() => setBhadraModalOpen(false)}
										className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium transition-colors"
									>
										बन्द गर्नुहोस्
									</button>
								</div>
							</div>
						);
					})()}
				</div>
			)}
		</>
	);
};

export default CalendarHeader;
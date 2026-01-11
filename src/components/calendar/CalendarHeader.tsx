import React, { useState } from 'react';
import { Sun, Moon, X, AlertTriangle, CheckCircle, Clock, Sunrise, Sunset } from 'lucide-react';
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

		// formatElements to return ReactNode array

		// Get BS month, day and weekday
		const bsDay = todayDetails.bsDay ? toDevanagari(todayDetails.bsDay) : '';
		const bsWeekday = todayDetails.weekday || '';
		const bsMonthName = typeof todayDetails.bsMonthIndex === 'number' ? NEPALI_BS_MONTHS[todayDetails.bsMonthIndex] : '';

		// Get AD Date for the card (Assuming today)
		const todayAd = new Date();
		const adDay = todayAd.getDate();
		const adMonth = GREGORIAN_MONTHS[todayAd.getMonth()];
		const adYear = todayAd.getFullYear();

		const sunrise = todayDetails.sunrise;
		const sunset = todayDetails.sunset;

		return (
			<div className="flex items-center text-left px-2 py-1.5">
				{/* Left: Compact Orange Date Box (Fixed Size) */}
				<div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex flex-col items-center justify-center text-white shadow-sm mr-3 relative overflow-hidden">
					<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
					<div className="text-xl font-bold leading-none mb-0.5 z-10 font-sans">
						{bsDay}
					</div>
					<div className="text-[9px] font-medium opacity-95 z-10 leading-none">
						{bsMonthName}
					</div>
				</div>

				{/* Right: Compact Details */}
				<div className="flex-grow min-w-0 flex flex-col justify-center">

					{/* Header Row */}
					<div className="flex items-center gap-2 mb-0.5">
						<span className="text-sm font-bold text-red-600 dark:text-red-400 leading-none">
							{bsWeekday}
						</span>
						<span className="bg-amber-400 text-white text-[9px] px-1.5 py-[1px] rounded-full font-bold shadow-sm leading-none">
							आज
						</span>
						<span className="text-[10px] font-medium text-gray-500 dark:text-gray-400 ml-auto leading-none">
							{adMonth} {adDay}, {adYear}
						</span>
					</div>

					{/* Grid Data: Compact Label: Value */}
					<div className="grid grid-cols-2 gap-x-2 gap-y-0 text-[10px] leading-snug">
						<div className="flex items-baseline gap-1 overflow-hidden">
							<span className="text-gray-500 font-medium whitespace-nowrap">तिथि:</span>
							<span className="font-bold text-gray-800 dark:text-gray-200 truncate">
								{todayDetails.tithis?.[0]?.name.split(' ')[0] || '-'}
							</span>
						</div>
						<div className="flex items-baseline gap-1 overflow-hidden">
							<span className="text-gray-500 font-medium whitespace-nowrap">नक्षत्र:</span>
							<span className="font-bold text-gray-800 dark:text-gray-200 truncate">
								{todayDetails.nakshatras?.[0]?.name.split(' ')[0] || '-'}
							</span>
						</div>
						<div className="flex items-baseline gap-1 overflow-hidden">
							<span className="text-gray-500 font-medium whitespace-nowrap">योग:</span>
							<span className="font-bold text-gray-800 dark:text-gray-200 truncate">
								{todayDetails.yogas?.[0]?.name.split(' ')[0] || '-'}
							</span>
						</div>
						<div className="flex items-baseline gap-1 overflow-hidden">
							<span className="text-gray-500 font-medium whitespace-nowrap">करण:</span>
							<span className="font-bold text-gray-800 dark:text-gray-200 truncate">
								{todayDetails.karanas?.[0]?.name.split(' ')[0] || '-'}
							</span>
						</div>
					</div>

					{/* Sun Times (Ultra Compact) */}
					<div className="flex items-center gap-3 mt-0.5 pt-0.5 border-t border-amber-100 dark:border-gray-700/50">
						<div className="flex items-center gap-1">
							<Sunrise className="w-2.5 h-2.5 text-orange-400" />
							<span className="text-[9px] font-bold text-gray-600 dark:text-gray-300 leading-none">
								{sunrise}
							</span>
						</div>
						<div className="flex items-center gap-1">
							<Sunset className="w-2.5 h-2.5 text-orange-400" />
							<span className="text-[9px] font-bold text-gray-600 dark:text-gray-300 leading-none">
								{sunset}
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<>
			{/* TODAY LUNAR INFO STRIP (MOBILE TOP) */}
			<div className="
				w-full text-center py-0
				bg-[#FEF7ED] dark:bg-gray-800
				text-gray-800 dark:text-gray-200
				border-b border-amber-100 dark:border-gray-700
				block md:hidden
			">
				{renderLunarSummary()}
			</div>

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
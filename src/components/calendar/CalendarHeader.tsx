import React, { useState } from 'react';
import { Sun, Moon, X, AlertTriangle, CheckCircle, Clock, Sunrise, Sunset } from 'lucide-react';
import { toDevanagari, getNepaliPeriod, toBikramSambat } from '../../lib/utils/lib';
import {
	NEPALI_LABELS,
	NEPALI_BS_MONTHS,
	GREGORIAN_MONTHS,
	GREGORIAN_MONTHS_SHORT,
	GREGORIAN_WEEKDAYS
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

	// TODAY LUNAR SUMMARY FORMATTER (UPDATED: Supports AD/BS & Shows Year)
	const renderLunarSummary = () => {
		if (!todayDetails) return "—";

		// Data Source: Today's AD Date
		const todayAd = new Date();

		// VARIABLES FOR DISPLAY
		let mainDay = '';
		let mainMonth = '';
		let mainYear = '';
		let mainWeekday = '';

		if (activeSystem === 'bs') {
			// BS MODE
			mainDay = todayDetails.bsDay ? toDevanagari(todayDetails.bsDay) : '';
			mainMonth = typeof todayDetails.bsMonthIndex === 'number' ? NEPALI_BS_MONTHS[todayDetails.bsMonthIndex] : '';

			// Recalculate today's BS date to be safe
			const calculatedBS = toBikramSambat(todayAd);
			mainYear = toDevanagari(calculatedBS.year);
			// Ensure day/month matches calculation
			mainWeekday = todayDetails.weekday || '';

		} else {
			// AD MODE
			mainDay = todayAd.getDate().toString();
			mainMonth = GREGORIAN_MONTHS_SHORT[todayAd.getMonth()];
			mainYear = todayAd.getFullYear().toString();
			mainWeekday = GREGORIAN_WEEKDAYS[todayAd.getDay()] || '';
		}

		const sunrise = todayDetails.sunrise;
		const sunset = todayDetails.sunset;

		return (
			<div className="flex items-stretch justify-between px-2 py-2 gap-2 bg-white dark:bg-gray-800 mt-2 rounded-xl border border-slate-100 dark:border-gray-700" style={{ boxShadow: '0 4px 12px -2px rgb(53 96 151 / 50%)', marginLeft: '-0.10rem', marginRight: '-0.1rem', marginBottom: '.5rem' }}>

				{/* 1. LEFT: Date Box (Day + Month + Year) */}
				<div
					className="flex-shrink-0 w-[75px] bg-gradient-to-br from-indigo-500 to-[#0cf568f5] dark:from-indigo-900 dark:to-green-900 rounded-xl flex flex-col items-center justify-center text-white shadow-sm relative overflow-hidden"
					style={{ fontFamily: activeSystem === 'bs' ? "'Noto Sans Devanagari', sans-serif" : 'inherit' }}
				>
					<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
					<div className="text-[32px] font-bold leading-none mb-0.5 z-10 tracking-tight mt-1">
						{mainDay}
					</div>
					<div className="text-[11px] font-medium opacity-95 z-10 leading-none mb-0.5">
						{mainMonth}
					</div>
					<div className="text-[11px] font-medium opacity-90 z-10 leading-none">
						{mainYear}
					</div>
				</div>

				{/* 2. MIDDLE: Details Grid */}
				<div className="flex-grow flex flex-col justify-center min-w-0">
					{/* Header: Weekday | Badge */}
					<div className="flex items-center flex-wrap gap-x-2 gap-y-0.5 mb-1.5 leading-none">
						<span
							className="text-base font-bold text-indigo-600 dark:text-indigo-400"
							style={{ fontFamily: activeSystem === 'bs' ? "'Noto Sans Devanagari', sans-serif" : 'inherit' }}
						>
							{mainWeekday}
						</span>
						<span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300 text-[9px] px-1.5 py-0.5 rounded-md font-bold shadow-sm">
							{activeSystem === 'bs' ? 'आज' : 'Today'}
						</span>
						{todayDetails.bhadra && (
							<button
								onClick={() => setBhadraModalOpen(true)}
								className={`text-[9px] px-1.5 py-0.5 rounded-md font-bold shadow-sm flex items-center gap-0.5 transition-colors animate-pulse ${(() => {
									const res = todayDetails.bhadra?.residence || '';
									if (res.includes('स्वर्ग')) return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-900/60';
									if (res.includes('पाताल')) return 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/60';
									return 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/60';
								})()}`}
								title="भद्रा विवरण हेर्नुहोस्"
							>
								{todayDetails.bhadra?.residence.includes('पाताल') ? (
									<CheckCircle size={10} className="stroke-2" />
								) : (
									<AlertTriangle size={10} className="stroke-2" />
								)}
								{activeSystem === 'bs' ? 'भद्रा' : 'Bhadra'}
							</button>
						)}

						{/* Removed the AD Date text from top right here as per 'only date box shows info' or keep it? 
                            User said 'header ma bs ad botom same today /aaja botom same and dark mand light mode botom same othere remove'.
                            This probably refers to the main header. 
                            In this card, user said 'today datails card ma ... year show hune banau'.
                            I will remove the secondary date on right to be cleaner ? 
                            Actually previously it showed 'AD Month Day, Year'. 
                            If I switch this card to AD, showing AD again on right is redundant.
                            I will hide it.
                        */}
					</div>

					{/* Grid Details */}
					<div className="grid grid-cols-2 gap-x-2 gap-y-1.5 mt-0.5 text-[10px] leading-tight">
						{(() => {
							const getItemSummary = (items: any[]) => {
								if (!items || items.length === 0) return { main: '-', sub: '' };

								// Get Main Name
								const mainItem = items[0];
								const currentName = mainItem.name.trim();

								// Build Chain of Events
								if (items.length === 1) {
									return { main: currentName, sub: '' };
								}

								const parts: string[] = [];

								for (let i = 0; i < items.length - 1; i++) {
									const item = items[i];
									const timeStr = formatTimeNepali(item.endTime);
									const name = item.name.trim();

									if (i === 0) {
										if (timeStr) parts.push(`${timeStr} सम्म`);
									} else {
										if (timeStr) parts.push(`${name} ${timeStr} सम्म`);
									}
								}

								const lastItem = items[items.length - 1];
								parts.push(`उपरान्त ${lastItem.name.trim()}`);

								return { main: currentName, sub: parts.join(', ') };
							};

							const renderItem = (label: string, items: any[]) => {
								const { main, sub } = getItemSummary(items);
								return (
									<div className="flex flex-col">
										<div className="flex items-baseline">
											<span className="text-gray-500 font-bold mr-1 text-[9px]">{label}:</span>
											<span className="text-gray-900 dark:text-gray-100 font-bold">
												{main}
											</span>
										</div>
										{sub && (
											<div className="text-[8px] text-gray-500 dark:text-gray-400 font-medium leading-tight">
												{sub}
											</div>
										)}
									</div>
								);
							};

							return (
								<>
									{renderItem("तिथि", todayDetails.tithis)}
									{renderItem("नक्षत्र", todayDetails.nakshatras)}
									{renderItem("योग", todayDetails.yogas)}
									{renderItem("करण", todayDetails.karanas)}
								</>
							);
						})()}
					</div>
				</div>

				{/* 3. RIGHT: Location & Sun (Vertical Box) */}
				<div className="flex-shrink-0 flex flex-col justify-between bg-white dark:bg-gray-700/50 rounded-lg border border-slate-100 dark:border-gray-600 px-2 py-1.5 shadow-sm min-w-[60px] h-[72px]">
					<div className="flex items-center justify-center gap-1 mb-1 border-b border-gray-100 dark:border-gray-600 pb-1">
						<span className="text-[10px] font-bold text-gray-700 dark:text-gray-300">
							{activeSystem === 'bs' ? 'काठमाण्डौं' : 'KTM'}
						</span>
					</div>

					<div className="flex flex-col gap-1 items-center justify-center flex-grow">
						<div className="flex items-center gap-1">
							<Sunrise className="w-3 h-3 text-indigo-500" />
							<span className="text-[10px] font-bold text-gray-600 dark:text-gray-300 leading-none">
								{sunrise}
							</span>
						</div>
						<div className="flex items-center gap-1">
							<Sunset className="w-3 h-3 text-indigo-500" />
							<span className="text-[10px] font-bold text-gray-600 dark:text-gray-300 leading-none">
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
			<div className="block md:hidden">
				{renderLunarSummary()}
			</div>

			<header className="w-full mb-2 bg-gradient-to-r from-[#16b5ff] via-indigo-600 to-[#16b5ff]
      dark:from-[#183051] dark:via-[#3a3d4a] dark:to-[#1f292e]
  backdrop-blur-sm border-b border-[#a5b4fc] dark:border-[#6d6e6f] rounded-lg">
				<div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
					{/* Left Controls */}
					<div className="flex items-center gap-3">

						{/* DATE SYSTEM SWITCH */}
						<div className="flex bg-slate-200 dark:bg-gray-700 rounded-lg p-1">
							<button
								className={`px-4 py-2 rounded-md transition-all duration-200 text-sm sm:text-base font-medium ${activeSystem === 'bs'
									? 'bg-[rgb(25_33_148)] dark:bg-slate-600 text-white shadow-sm'
									: 'text-gray-600 dark:text-gray-400 hover:text-[rgb(25_33_148)] dark:hover:text-blue-400'
									}`}
								onClick={() => onSystemChange('bs')}
							>
								<span className="hidden md:inline">{bikramDesktopLabel}</span>
								<span className="md:hidden">{bikramMobileLabel}</span>
							</button>

							<button
								className={`px-4 py-2 rounded-md transition-all duration-200 text-sm sm:text-base font-medium ${activeSystem === 'ad'
									? 'bg-[rgb(25_33_148)] dark:bg-slate-600 text-white shadow-sm'
									: 'text-gray-600 dark:text-gray-400 hover:text-[rgb(25_33_148)] dark:hover:text-blue-400'
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
							className="px-4 sm:px-5 py-2 bg-slate-200 text-[rgb(25_33_148)] rounded-lg hover:bg-blue-200 hover:text-[rgb(25_33_148)] dark:text-slate-200 dark:bg-slate-600 dark:hover:bg-blue-700 transition-colors duration-200 font-medium text-sm sm:text-base"
							style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
						>
							आज
						</button>
					</div>

					{/* RIGHT SIDE: THEME TOGGLE ONLY (Date Text Removed) */}
					<div className="flex items-center gap-4">
						{/* THEME TOGGLE */}
						<button
							onClick={onThemeToggle}
							className="p-2.5 rounded-lg bg-slate-200 dark:bg-gray-700 text-[rgb(25_33_148)] dark:text-gray-300 hover:text-[rgb(25_33_148)] dark:hover:text-blue-400 transition-colors duration-200"
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
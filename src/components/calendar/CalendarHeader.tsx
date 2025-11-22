import React from 'react';
import { Sun, Moon } from 'lucide-react';
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

	const bsDisplay = bsYear !== null
		? (
			<>
				<span className="max-[400px]:hidden">{toDevanagari(bsYear)} {NEPALI_BS_MONTHS[bsMonth]}</span>
				<span className="hidden max-[400px]:inline">{toDevanagari(bsYear)} {NEPALI_BS_MONTHS[bsMonth]}</span> {/* display full month name */}
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

		const formatElements = (arr?: Array<{ name: string; startTime?: string | null; endTime?: string | null }>) => {
			if (!arr || arr.length === 0) return '—';

			const parts: string[] = [];
			const first = arr[0];
			const firstEndIso = first.endTime || null;
			const firstEnd = formatTimeNepali(firstEndIso);
			parts.push(firstEnd ? `${first.name} ${firstEnd} सम्म` : first.name);

			const nextSunriseIso = (todayDetails as any).nextSunriseIso as string | null | undefined;
			const nextSunriseDate = nextSunriseIso ? new Date(nextSunriseIso) : null;

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
						const firstRefIso = first.endTime || first.startTime || null;
						const firstRefDate = firstRefIso ? new Date(firstRefIso) : null;
						if (firstRefDate) {
							showEnd = endDate.getUTCDate() === firstRefDate.getUTCDate() && endDate.getUTCMonth() === firstRefDate.getUTCMonth() && endDate.getUTCFullYear() === firstRefDate.getUTCFullYear();
						} else {
							showEnd = true;
						}
					}

					const formattedEnd = formatTimeNepali(endIso);
					const content = (showEnd && formattedEnd) ? `${el.name} ${formattedEnd} सम्म` : el.name;
					if (isLast) {
						parts.push(`उपरान्त ${content}`);
					} else {
						parts.push(content);
					}
				}
			}

			return parts.join(', ');
		};

		// Get BS month, day and weekday
		const bsDay = todayDetails.bsDay ? toDevanagari(todayDetails.bsDay) : '';
		const bsWeekday = todayDetails.weekday || '';
		const bsMonthName = typeof todayDetails.bsMonthIndex === 'number' ? NEPALI_BS_MONTHS[todayDetails.bsMonthIndex] : '';

		const tithisStr = formatElements(todayDetails.tithis);
		const nakshatraStr = formatElements(todayDetails.nakshatras);
		const yogaStr = formatElements(todayDetails.yogas);
		const karanaStr = formatElements(todayDetails.karanas);

		return (
			<div className="text-center">
				<strong className="font-bold text-green-600 text-lg">आज</strong>
				<span className="align-middle ml-1 text-[1.08rem] sm:text-base text-black dark:text-gray-100" style={{ textWrap: 'auto' }}>
					{bsMonthName} {bsDay} गते {bsWeekday}
				</span>
				<span className="text-gray-600 dark:text-gray-300" style={{ textWrap: 'auto' }}>
					,&nbsp;<strong className="font-bold">तिथि:</strong> {tithisStr}。
					<strong className="font-bold">नक्षत्र:</strong> {nakshatraStr}。
					<strong className="font-bold">योग:</strong> {yogaStr}。
					<strong className="font-bold">करण:</strong> {karanaStr}
				</span>
			</div>
		);
	};

	return (
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
	);
};

export default CalendarHeader;

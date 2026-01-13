import React, { JSX, useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown } from 'lucide-react';
import { NEPALI_BS_MONTHS } from '../../constants/constants';
import { toBikramSambat, fromBikramSambat, getBikramMonthInfo, calculate, toDevanagari } from '../../lib/utils/lib';
import MonthlyMuhurta from './Muhurtas';

interface MonthlyEventsProps {
	activeSystem: 'bs' | 'ad';
	currentYear: number | null;
	currentMonth: number;
}

interface UpcomingEvent {
	name: string;
	daysRemaining: number;
	holiday: boolean;
	adDate: Date;
	bsDate: any;
}

const MonthlyEvents: React.FC<MonthlyEventsProps> = ({
	activeSystem,
	currentYear,
	currentMonth
}) => {
	// STATE FOR UPCOMING EVENTS
	const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>([]);
	const [hasMore, setHasMore] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	// Use a Ref to track the date cursor so we can resume scanning without re-renders
	const scanCursor = useRef<Date | null>(null);
	// Keep track of total days scanned to prevent infinite loops
	const totalDaysScanned = useRef(0);

	// Initialize cursor on first load
	useEffect(() => {
		const today = new Date();
		// UTC 00:00:00 to avoid timezone issues
		scanCursor.current = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));

		// Initial load: Find first 10 events
		loadMoreEvents(10);
	}, []);

	// SCANNING LOGIC
	const loadMoreEvents = useCallback((limit: number) => {
		if (!scanCursor.current || !hasMore) return;

		setIsLoading(true);
		const newEvents: UpcomingEvent[] = [];

		// Safety: Don't look further than 1 year (365 days) total
		const MAX_LOOKAHEAD = 365;

		let itemsFound = 0;

		// Scan day by day until we find 'limit' events or hit the safety wall
		while (itemsFound < limit && totalDaysScanned.current < MAX_LOOKAHEAD) {
			// Current date to check
			const dateToCheck = new Date(scanCursor.current);

			// Check events for this date
			const bsDate = toBikramSambat(dateToCheck);
			// Use calculate() to get scanned tithis for Kshaya detection
			const calcData = calculate(dateToCheck);
			const dayEvents = calcData.events || [];

			if (dayEvents.length > 0) {
				dayEvents.forEach(e => {
					newEvents.push({
						name: e.name,
						daysRemaining: totalDaysScanned.current, // Use the tracked index
						holiday: e.holiday || false,
						adDate: new Date(dateToCheck),
						bsDate: bsDate
					});
				});
				itemsFound++;
			}

			// Advance cursor to next day
			scanCursor.current.setUTCDate(scanCursor.current.getUTCDate() + 1);
			totalDaysScanned.current++;
		}

		if (totalDaysScanned.current >= MAX_LOOKAHEAD) {
			setHasMore(false);
		}

		setUpcomingEvents(prev => [...prev, ...newEvents]);
		setIsLoading(false);
	}, [hasMore]);


	// MONTHLY EVENTS LOGIC
	const getMonthlyEvents = () => {
		const eventsMap = new Map<number, Array<{ name: string, holiday: boolean }>>();

		if (activeSystem === 'bs') {
			if (currentYear === null) return eventsMap;
			const monthInfo = getBikramMonthInfo(currentYear, currentMonth);
			if (!monthInfo) return eventsMap;

			for (let day = 1; day <= monthInfo.totalDays; day++) {
				const date = fromBikramSambat(currentYear, currentMonth, day);
				const calcData = calculate(date);
				const dayEvents = calcData.events || [];
				if (dayEvents.length > 0) {
					eventsMap.set(day, dayEvents.map(e => ({ name: e.name, holiday: e.holiday || false })));
				}
			}
		} else {
			if (currentYear === null) return eventsMap;
			const lastDay = new Date(Date.UTC(currentYear, currentMonth + 1, 0));

			for (let day = 1; day <= lastDay.getUTCDate(); day++) {
				const date = new Date(Date.UTC(currentYear, currentMonth, day));
				// const bsDate = toBikramSambat(date);
				const calcData = calculate(date);
				const dayEvents = calcData.events || [];
				if (dayEvents.length > 0) {
					eventsMap.set(day, dayEvents.map(e => ({ name: e.name, holiday: e.holiday || false })));
				}
			}
		}

		return eventsMap;
	};

	const monthlyEventsMap = getMonthlyEvents();

	if (monthlyEventsMap.size === 0 && upcomingEvents.length === 0 && !isLoading) {
		return null;
	}

	// Helper to format date parts with leading zero
	const pad = (n: number) => n.toString().padStart(2, '0');

	const cardStyle = "w-full bg-white dark:bg-slate-900 rounded-xl shadow-card-custom shadow-blue-50/50 dark:shadow-slate-900/50 border border-gray-300 dark:border-slate-600 overflow-hidden";

	// RENDERERS
	const renderMonthlyList = () => {
		if (monthlyEventsMap.size === 0) return null;

		const eventItems: JSX.Element[] = [];
		monthlyEventsMap.forEach((events, day) => {
			// Deduplicate events based on name
			const uniqueEventsMap = new Map();
			events.forEach(e => {
				if (!uniqueEventsMap.has(e.name)) {
					uniqueEventsMap.set(e.name, e);
				}
			});
			const uniqueEvents = Array.from(uniqueEventsMap.values());

			if (uniqueEvents.length === 0) return;

			const dayNumber = activeSystem === 'bs' ? toDevanagari(day) : day.toString();
			const dayLabel = activeSystem === 'bs' ? 'गते' : '';

			// Generate Link for Monthly Items
			let href = '#';
			if (currentYear !== null) {
				if (activeSystem === 'bs') {
					// currentMonth is 0-indexed index passed from parent
					href = `/bs?${currentYear}-${pad(currentMonth + 1)}-${pad(day)}`;
				} else {
					href = `/ad?${currentYear}-${pad(currentMonth + 1)}-${pad(day)}`;
				}
			}

			eventItems.push(
				<span key={`${day}`} className="inline-flex items-baseline gap-1">
					<span
						className="font-bold text-blue-600 dark:text-blue-400"
						style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
					>
						{dayNumber} {dayLabel}
					</span>
					<a
						href={href}
						className="hover:underline transition-colors"
						style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
					>
						{uniqueEvents.map((event, i) => (
							<span key={i} className={event.holiday ? "text-[#e11d48] dark:text-rose-400 font-medium" : "text-gray-700 dark:text-gray-300 font-medium"}>
								{event.name}{i < uniqueEvents.length - 1 ? ' / ' : ''}
							</span>
						))}
					</a>
				</span>
			);
		});

		return (
			<div className={cardStyle}>
				<div className="px-5 py-4">
					<div
						className="text-[13px] leading-relaxed flex flex-wrap gap-x-3 gap-y-1.5"
						style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
					>
						{eventItems.map((item, index) => (
							<React.Fragment key={index}>
								{item}
								{index < eventItems.length - 1 && <span className="text-gray-400 font-bold">•</span>}
							</React.Fragment>
						))}
					</div>
				</div>
			</div>
		);
	};

	const renderUpcomingList = () => {
		if (upcomingEvents.length === 0 && !isLoading) return null;

		const isBs = activeSystem === 'bs';
		const title = isBs ? 'आगामी कार्यक्रमहरू' : 'Upcoming Events';

		// Calculate current years for comparison
		const today = new Date();
		const currentAdYear = today.getFullYear();
		const currentBsYear = toBikramSambat(today).year;

		return (
			<div className={cardStyle}>
				{/* Header */}
				<div className="bg-blue-50 dark:bg-slate-800 px-5 py-4 border-b border-gray-200 dark:border-slate-700 flex items-center">
					<div className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-3 shadow-sm shadow-blue-300 dark:shadow-blue-900"></div>
					<h2
						className="text-xl font-bold text-blue-900 dark:text-blue-100"
						style={{ fontFamily: isBs ? "'Noto Sans Devanagari', sans-serif" : 'inherit' }}
					>
						{title}
					</h2>
				</div>

				{/* Events List Body */}
				<div className="flex flex-col gap-3 pb-5">
					{upcomingEvents.map((event, idx) => {
						// Determine time remaining text
						let timeText = '';
						if (event.daysRemaining === 0) timeText = isBs ? 'आज' : 'Today';
						else if (event.daysRemaining === 1) timeText = isBs ? 'भोलि' : 'Tomorrow';
						else if (event.daysRemaining === 2) timeText = isBs ? 'पर्सि' : 'Day After Tomorrow';
						else timeText = isBs ? `${toDevanagari(event.daysRemaining)} दिन बाँकी` : `${event.daysRemaining} days left`;

						// Determine date text
						const isDifferentYear = isBs
							? event.bsDate.year !== currentBsYear
							: event.adDate.getFullYear() !== currentAdYear;

						let dateText = '';
						let href = '#';

						if (isBs) {
							dateText = `${NEPALI_BS_MONTHS[event.bsDate.monthIndex]} ${toDevanagari(event.bsDate.day)}`;
							if (isDifferentYear) dateText += `, ${toDevanagari(event.bsDate.year)}`;

							// BS Link: host/bs?YYYY-MM-DD
							href = `/bs?${event.bsDate.year}-${pad(event.bsDate.monthIndex + 1)}-${pad(event.bsDate.day)}`;
						} else {
							dateText = event.adDate.toLocaleDateString('en-US', {
								month: 'short',
								day: 'numeric',
								year: isDifferentYear ? 'numeric' : undefined
							});

							// AD Link: host/ad?YYYY-MM-DD
							href = `/ad?${event.adDate.getFullYear()}-${pad(event.adDate.getMonth() + 1)}-${pad(event.adDate.getDate())}`;
						}

						return (
							<a
								key={idx}
								href={href}
								className={`relative flex justify-between items-center p-3 bg-white dark:bg-slate-800 rounded-lg shadow-card-custom shadow-blue-50/50 border border-l-4 border-gray-200 dark:border-slate-700 hover:shadow-md transition-shadow ${event.holiday ? 'border-l-red-500' : 'border-l-green-500'
									}`}
							>
								{/* Left Side: Event Name */}
								<div className={`flex flex-col flex-1`}>
									<span
										className={`text-[15px] leading-snug font-medium ${event.holiday
											? 'text-red-700 dark:text-red-400'
											: 'text-slate-700 dark:text-slate-200'
											}`}
										style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
									>
										{event.name}
									</span>
								</div>

								{/* Right Side: Date Info */}
								<div className="flex flex-col items-end pl-2 min-w-[80px] text-right">
									<span
										className="text-[#1e293b] dark:text-slate-100 font-bold text-sm leading-tight"
										style={{ fontFamily: isBs ? "'Noto Sans Devanagari', sans-serif" : 'inherit' }}
									>
										{dateText}
									</span>
									<span
										className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5 font-light"
										style={{ fontFamily: isBs ? "'Noto Sans Devanagari', sans-serif" : 'inherit' }}
									>
										{timeText}
									</span>
								</div>
							</a>
						);
					})}
				</div>

				{/* Load More Button */}
				{hasMore && (
					<div className="px-5 pb-5">
						<button
							onClick={() => loadMoreEvents(5)}
							disabled={isLoading}
							className="w-full flex items-center justify-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 bg-gray-50 dark:bg-slate-800/50 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800"
							style={{ fontFamily: isBs ? "'Noto Sans Devanagari', sans-serif" : 'inherit' }}
						>
							{isLoading
								? (isBs ? 'लोड हुँदैछ...' : 'Loading...')
								: (
									<div className="flex items-center text-blue-400 dark:text-blue-300 gap-1.5">
										<span>{isBs ? 'थप हेर्नुहोस्' : 'Load More'}</span>
										<ChevronDown className="w-4 h-4" />
									</div>
								)
							}
						</button>
					</div>
				)}
			</div>
		);
	};

	return (
		<div className="flex flex-col gap-5 w-full">
			{/* Monthly List Section */}
			{renderMonthlyList()}

			{/* Muhurta Section */}
			<div className={cardStyle}>
				<MonthlyMuhurta activeSystem={activeSystem} currentYear={currentYear} currentMonth={currentMonth} />
			</div>

			{/* Upcoming Events Section */}
			{renderUpcomingList()}
		</div>
	);
};

export default MonthlyEvents;
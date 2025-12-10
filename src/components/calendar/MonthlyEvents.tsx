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

	// --- SCANNING LOGIC ---
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

	// RENDERERS
	const renderMonthlyList = () => {
		if (monthlyEventsMap.size === 0) return null;

		const eventItems: JSX.Element[] = [];
		monthlyEventsMap.forEach((events, day) => {
			events.forEach((event, index) => {
				const dayNumber = activeSystem === 'bs' ? toDevanagari(day) : day.toString();
				eventItems.push(
					<span key={`${day}-${index}`} className="inline-flex items-center">
						<span
							className="font-medium"
							style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
						>
							{dayNumber}
						</span>
						<span className="mx-1">:</span>
						<span
							style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
						>
							{event.name}
						</span>
					</span>
				);
			});
		});

		return (
			<div className="bg-alabaster dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-gray-700 px-3 py-2 flex-shrink-0 pb-3">
				<div
					className="text-xs text-blue-800 dark:text-gray-300 flex flex-wrap gap-x-3 gap-y-1"
					style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
				>
					{eventItems.map((item, index) => (
						<React.Fragment key={index}>
							{item}
							{index < eventItems.length - 1 && <span className="text-gray-400">•</span>}
						</React.Fragment>
					))}
				</div>
			</div>
		);
	};

	const renderUpcomingList = () => {
		if (upcomingEvents.length === 0 && !isLoading) return null;

		const isBs = activeSystem === 'bs';
		const title = isBs ? 'आगामी कार्यक्रम हरु' : 'Upcoming Events';

		// Calculate current years for comparison
		const today = new Date();
		const currentAdYear = today.getFullYear();
		const currentBsYear = toBikramSambat(today).year;

		return (
			<div className="bg-alabaster dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-gray-700 px-3 py-2 flex-shrink-0">
				<h4 className="text-xs font-bold text-blue-900 dark:text-gray-100 mb-2 border-b border-blue-100 dark:border-gray-700 pb-1" style={{ fontFamily: isBs ? "'Noto Sans Devanagari', sans-serif" : 'inherit' }}>
					{title}
				</h4>
				<div className="flex flex-col gap-1.5">
					{upcomingEvents.map((event, idx) => {
						let timeText = '';
						if (event.daysRemaining === 0) timeText = isBs ? 'आज' : 'Today';
						else if (event.daysRemaining === 1) timeText = isBs ? 'भोलि' : 'Tomorrow';
						else timeText = isBs ? `${toDevanagari(event.daysRemaining)} दिन बाँकी` : `${event.daysRemaining} days left`;

						// Determine if we need to show the year
						const isDifferentYear = isBs
							? event.bsDate.year !== currentBsYear
							: event.adDate.getFullYear() !== currentAdYear;

						let dateText = '';
						if (isBs) {
							dateText = `${NEPALI_BS_MONTHS[event.bsDate.monthIndex]} ${toDevanagari(event.bsDate.day)}`;
							if (isDifferentYear) {
								dateText += `, ${toDevanagari(event.bsDate.year)}`;
							}
						} else {
							dateText = event.adDate.toLocaleDateString('en-US', {
								month: 'short',
								day: 'numeric',
								year: isDifferentYear ? 'numeric' : undefined
							});
						}

						return (
							<div key={idx} className="flex justify-between items-start text-xs">
								<span
									className={`${event.holiday ? 'text-red-600 dark:text-red-400' : 'text-blue-800 dark:text-gray-300'}`}
									style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
								>
									{event.name}
								</span>
								<div className="flex flex-col items-end">
									<span className="text-gray-700 dark:text-gray-300 font-medium text-[10px]" style={{ fontFamily: isBs ? "'Noto Sans Devanagari', sans-serif" : 'inherit' }}>
										{dateText}
									</span>
									<span className="text-gray-500 dark:text-gray-400 text-[10px] whitespace-nowrap" style={{ fontFamily: isBs ? "'Noto Sans Devanagari', sans-serif" : 'inherit' }}>
										{timeText}
									</span>
								</div>
							</div>
						);
					})}
				</div>

				{/* Load More Button */}
				{hasMore && (
					<button
						onClick={() => loadMoreEvents(5)}
						disabled={isLoading}
						className="w-full mt-2 py-1 text-[10px] text-blue-600 dark:text-blue-400 hover:bg-blue-300 hover:text-black dark:hover:bg-gray-700 dark:hover:text-gray-400 rounded transition-colors flex items-center justify-center gap-1 font-medium disabled:opacity-50"
					>
						{isLoading
							? (isBs ? 'लोड हुँदैछ...' : 'Loading...')
							: (
								<>
									{isBs ? 'थप हेर्नुहोस्' : 'Load More'}
									<ChevronDown className="w-3 h-3" />
								</>
							)
						}
					</button>
				)}
			</div>
		);
	};

	return (
		<div className="flex flex-col gap-3 w-full">
			{renderMonthlyList()}
			{/* Muhurats */}
			<MonthlyMuhurta activeSystem={activeSystem} currentYear={currentYear} currentMonth={currentMonth} />
			{renderUpcomingList()}
		</div>
	);
};

export default MonthlyEvents;
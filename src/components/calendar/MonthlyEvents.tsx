import React, { JSX } from 'react';
import { toBikramSambat, fromBikramSambat, getBikramMonthInfo, getEventsForDate, toDevanagari } from '../../lib/utils/lib';

interface MonthlyEventsProps {
    activeSystem: 'bs' | 'ad';
    currentYear: number | null;
    currentMonth: number;
}

const NEPALI_MONTHS = [
    'बैशाख', 'जेठ', 'असार', 'साउन', 'भदौ', 'असोज',
    'कार्तिक', 'मंसिर', 'पुष', 'माघ', 'फाल्गुन', 'चैत्र'
];

const MonthlyEvents: React.FC<MonthlyEventsProps> = ({
    activeSystem,
    currentYear,
    currentMonth
}) => {
    // 1. Logic for Monthly Events (Existing)
    const getMonthlyEvents = () => {
        const eventsMap = new Map<number, Array<{name: string, holiday: boolean}>>();

        if (activeSystem === 'bs') {
            if (currentYear === null) return eventsMap;
            const monthInfo = getBikramMonthInfo(currentYear, currentMonth);
            if (!monthInfo) return eventsMap;

            for (let day = 1; day <= monthInfo.totalDays; day++) {
                const date = fromBikramSambat(currentYear, currentMonth, day);
                const dayEvents = getEventsForDate(date, currentYear, currentMonth, day);
                if (dayEvents.length > 0) {
                    eventsMap.set(day, dayEvents.map(e => ({ name: e.name, holiday: e.holiday || false })));
                }
            }
        } else {
            if (currentYear === null) return eventsMap;
            const lastDay = new Date(Date.UTC(currentYear, currentMonth + 1, 0));

            for (let day = 1; day <= lastDay.getUTCDate(); day++) {
                const date = new Date(Date.UTC(currentYear, currentMonth, day));
                const bsDate = toBikramSambat(date);
                const dayEvents = getEventsForDate(date, bsDate.year, bsDate.monthIndex, bsDate.day);
                if (dayEvents.length > 0) {
                    eventsMap.set(day, dayEvents.map(e => ({ name: e.name, holiday: e.holiday || false })));
                }
            }
        }

        return eventsMap;
    };

    // 2. Logic for Upcoming Events (New)
    const getUpcomingEvents = () => {
        const upcoming: Array<{
            name: string;
            daysRemaining: number;
            holiday: boolean;
            adDate: Date;
            bsDate: any;
        }> = [];
        const today = new Date();

        // Create a UTC date for "Today" at 00:00:00 to avoid timezone shifts
        const start = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));

        // Check the next 150 days for upcoming events
        for (let i = 0; i < 150; i++) {
            const date = new Date(start);
            // Use setUTCDate to safely increment days in UTC
            date.setUTCDate(start.getUTCDate() + i);

            // Convert to BS to check for events
            const bsDate = toBikramSambat(date);
            const dayEvents = getEventsForDate(date, bsDate.year, bsDate.monthIndex, bsDate.day);

            if (dayEvents.length > 0) {
                dayEvents.forEach(e => {
                    upcoming.push({
                        name: e.name,
                        daysRemaining: i,
                        holiday: e.holiday || false,
                        adDate: new Date(date),
                        bsDate: bsDate
                    });
                });
            }
            // Limit to 10 upcoming events
            if (upcoming.length >= 10) break;
        }
        return upcoming;
    };

    const monthlyEventsMap = getMonthlyEvents();
    const upcomingEvents = getUpcomingEvents();

    if (monthlyEventsMap.size === 0 && upcomingEvents.length === 0) {
        return null;
    }

    // Render Function for Monthly List
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
            <div className="bg-alabaster dark:bg-gray-800 rounded-lg border border-blue-200 dark:border-gray-700 px-3 py-2 flex-shrink-0">
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

    // Render Function for Upcoming Events
    const renderUpcomingList = () => {
        if (upcomingEvents.length === 0) return null;

        const isBs = activeSystem === 'bs';
        const title = isBs ? 'आगामी कार्यक्रम' : 'Upcoming Events';

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
                            dateText = `${NEPALI_MONTHS[event.bsDate.monthIndex]} ${toDevanagari(event.bsDate.day)}`;
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
            </div>
        );
    };

    return (
        <div className="flex flex-col gap-3 w-full">
            {renderMonthlyList()}
            {renderUpcomingList()}
        </div>
    );
};

export default MonthlyEvents;
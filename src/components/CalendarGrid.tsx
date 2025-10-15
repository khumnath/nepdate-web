import React from 'react';
import { toBikramSambat, fromBikramSambat, getBikramMonthInfo, _getPanchangaBasics as _getPanchangaBasics, getEventsForDate, toDevanagari } from '../lib/lib';

interface CalendarGridProps {
    activeSystem: 'bs' | 'ad';
    currentYear: number | null;
    currentMonth: number;
    onDayClick: (date: Date) => void;
}

const WEEKDAYS_NEPALI = ["आइत", "सोम", "मङ्गल", "बुध", "बिही", "शुक्र", "शनि"];
const WEEKDAYS_ENGLISH = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Timezone Helper to get current date in Nepal
function getNepalDate(): Date {
    const now = new Date();
    // This creates an ISO-like string for the current time in Nepal, e.g., "2025-10-15T14:21:00"
    const nepalISOString = new Intl.DateTimeFormat('en-CA', {
        timeZone: 'Asia/Kathmandu',
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
    }).format(now).replace(', ', 'T');
    // We append 'Z' to treat this local Nepal time as a UTC time, which simplifies date comparisons.
    return new Date(nepalISOString + 'Z');
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
    activeSystem,
    currentYear,
    currentMonth,
    onDayClick
}) => {
    // Use the timezone-aware helper function to get today's date in Nepal
    const today = getNepalDate();
    const todayBs = toBikramSambat(today);

    const weekdays = activeSystem === 'bs' ? WEEKDAYS_NEPALI : WEEKDAYS_ENGLISH;

    const renderBikramSambatCalendar = () => {
        if (currentYear === null) {
            return (
                <div className="col-span-7 p-8 text-center text-gray-500">Please enter a Bikram Sambat year</div>
            );
        }
        const monthInfo = getBikramMonthInfo(currentYear, currentMonth);
        if (!monthInfo) {
            return (
                <div className="col-span-7 p-8 text-center text-red-500">
                    Data unavailable for this date range
                </div>
            );
        }

        const cells = [];

        // Empty cells at the beginning
        for (let i = 0; i < monthInfo.startDayOfWeek; i++) {
            cells.push(
                <div key={`empty-${i}`} className="h-full bg-transparent" />
            );
        }

        // Days of the month
        for (let day = 1; day <= monthInfo.totalDays; day++) {
            const date = fromBikramSambat(currentYear, currentMonth, day);
            const panchanga = _getPanchangaBasics(date);
            const bsFullDate = toBikramSambat(date);
            const events = getEventsForDate(date, bsFullDate.year, bsFullDate.monthIndex, bsFullDate.day);

            // Correctly determine if the current cell is 'today' using Nepal's date
            const isToday = currentYear === todayBs.year &&
                            currentMonth === todayBs.monthIndex &&
                            day === todayBs.day;

            let classes = 'calendar-day';
            if (date.getUTCDay() === 6) classes += ' saturday'; // Use UTC day for consistency
            if (isToday) classes += ' today';

            const isHoliday = events.some(event => event.holiday);
            if (isHoliday) classes += ' holiday';

            let tithiClass = 'tithi-display';

            if (panchanga.tithiName === "पूर्णिमा") {
                tithiClass += ' special purnima';
            } else if (panchanga.tithiName === "अमावस्या") {
                tithiClass += ' special amavasya';
            }

            const isPurnima = panchanga.tithiName === "पूर्णिमा";
            const isAmavasya = panchanga.tithiName === "अमावस्या";

            cells.push(
                <div
                    key={day}
                    className={classes + ' relative group'}
                    onClick={() => onDayClick(date)}
                >
                    <span className="main-number transform transition-transform duration-150 ease-out inline-block group-hover:scale-110" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                        {toDevanagari(day)}
                    </span>
                    <span className="sub-number">
                        {date.getUTCDate()}
                    </span>
                    {isPurnima && (
                        <svg className="icon absolute top-1 left-1 w-5 h-5 sm:w-4 sm:h-4 xs:w-2 xs:h-2" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" className="fill-yellow-400 dark:fill-yellow-300 stroke-yellow-600 dark:stroke-yellow-500" strokeWidth="1" />
                        </svg>
                    )}
                    {isAmavasya && (
                        <svg className="icon absolute top-2 left-2 w-5 h-5 sm:w-4 sm:h-4 xs:w-3 xs:h-3" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" className="fill-gray-800 dark:fill-gray-600 stroke-gray-900 dark:stroke-gray-500" strokeWidth="1" />
                        </svg>
                    )}

                    <span className={tithiClass} style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                        {panchanga.tithiName}
                    </span>
                    {events.length > 0 && <div className="event-dot" />}
                </div>
            );
        }

        return cells;
    };

    const renderGregorianCalendar = () => {
        if (currentYear === null) {
            return (
                <div className="col-span-7 p-8 text-center text-gray-500">Please enter a Gregorian year</div>
            );
        }
        const firstDay = new Date(Date.UTC(currentYear, currentMonth, 1));
        const lastDay = new Date(Date.UTC(currentYear, currentMonth + 1, 0));
        const cells = [];

        // Empty cells at the beginning
        for (let i = 0; i < firstDay.getUTCDay(); i++) {
            cells.push(
                <div key={`empty-${i}`} className="h-full bg-transparent" />
            );
        }

        // Days of the month
        for (let day = 1; day <= lastDay.getUTCDate(); day++) {
            const date = new Date(Date.UTC(currentYear, currentMonth, day));
            const bsDate = toBikramSambat(date);
            const panchanga = _getPanchangaBasics(date);
            const events = getEventsForDate(date, bsDate.year, bsDate.monthIndex, bsDate.day);

            // Correctly determine if the current cell is 'today' using Nepal's date
            const isToday = currentYear === today.getUTCFullYear() &&
                            currentMonth === today.getUTCMonth() &&
                            day === today.getUTCDate();

            let classes = 'calendar-day';
            if (date.getUTCDay() === 6) classes += ' saturday';
            if (isToday) classes += ' today';

            const isHoliday = events.some(event => event.holiday);
            if (isHoliday) classes += ' holiday';

            let tithiClass = 'tithi-display';

            if (panchanga.tithiName === "पूर्णिमा") {
                tithiClass += ' special purnima';
            } else if (panchanga.tithiName === "अमावस्या") {
                tithiClass += ' special amavasya';
            }

            const isPurnima = panchanga.tithiName === "पूर्णिमा";
            const isAmavasya = panchanga.tithiName === "अमावस्या";

            cells.push(
                <div
                    key={day}
                    className={classes + ' relative group'}
                    onClick={() => onDayClick(date)}
                >
                    <span className="main-number transform transition-transform duration-150 ease-out inline-block group-hover:scale-110">
                        {day}
                    </span>
                    <span className="sub-number" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                        {toDevanagari(bsDate.day)}
                    </span>
                    {isPurnima && (
                        <svg className="icon absolute top-2 left-2 w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" className="fill-yellow-400 dark:fill-yellow-300 stroke-yellow-600 dark:stroke-yellow-500" strokeWidth="1" />
                        </svg>
                    )}
                    {isAmavasya && (
                        <svg className="icon absolute top-2 left-2 w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" className="fill-gray-800 dark:fill-gray-600 stroke-gray-900 dark:stroke-gray-500" strokeWidth="1" />
                        </svg>
                    )}
                    <span className={tithiClass} style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                        {panchanga.tithiName}
                    </span>
                    {events.length > 0 && <div className="event-dot" />}
                </div>
            );
        }

        return cells;
    };

    return (
        <div className="flex flex-col min-h-0">
            {/* Weekdays Header */}
            <div className="grid grid-cols-7 gap-1 mb-1 flex-shrink-0">
                {weekdays.map((day, index) => (
                    <div
                        key={day}
                        className={`weekday ${index === 6 ? 'bg-red-600 dark:bg-red-800' : 'bg-blue-600 dark:bg-gray-700'
                            }`}
                        style={activeSystem === 'bs' ? { fontFamily: "'Noto Sans Devanagari', sans-serif" } : {}}
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 calendar-grid">
                {activeSystem === 'bs' ? renderBikramSambatCalendar() : renderGregorianCalendar()}
            </div>
        </div>
    );
};

export default CalendarGrid;

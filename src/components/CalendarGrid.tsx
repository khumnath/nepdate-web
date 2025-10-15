import React from 'react';
import { fromBikramSambat, getBikramMonthInfo, toDevanagari, calculate } from '../lib/lib';

interface CalendarGridProps {
    activeSystem: 'bs' | 'ad';
    currentYear: number | null;
    currentMonth: number;
    onDayClick: (date: Date) => void;
}

const WEEKDAYS_NEPALI = ["आइत", "सोम", "मङ्गल", "बुध", "बिही", "शुक्र", "शनि"];
const WEEKDAYS_ENGLISH = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarGrid: React.FC<CalendarGridProps> = ({
    activeSystem,
    currentYear,
    currentMonth,
    onDayClick
}) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const weekdays = activeSystem === 'bs' ? WEEKDAYS_NEPALI : WEEKDAYS_ENGLISH;

    // Use consistent calculation for both display and events
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
            
            // Use the main calculate function for consistency
            const panchanga = calculate(date);
            
            if (!panchanga || panchanga.error) {
                // Fallback if calculation fails
                cells.push(
                    <div
                        key={day}
                        className="calendar-day relative group"
                        onClick={() => onDayClick(date)}
                    >
                        <span className="main-number transform transition-transform duration-150 ease-out inline-block group-hover:scale-110" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                            {toDevanagari(day)}
                        </span>
                        <span className="sub-number">
                            {date.getDate()}
                        </span>
                        <span className="tithi-display text-gray-400" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                            गणना त्रुटि
                        </span>
                    </div>
                );
                continue;
            }

            let classes = 'calendar-day';
            if (date.getDay() === 6) classes += ' saturday';
            if (date.toDateString() === today.toDateString()) classes += ' today';

            // Handle possibly undefined events
            const isHoliday = panchanga.events?.some(event => event.holiday) ?? false;
            if (isHoliday) classes += ' holiday';

            let tithiClass = 'tithi-display';

            if (panchanga.tithi === "पूर्णिमा") {
                tithiClass += ' special purnima';
            } else if (panchanga.tithi === "अमावस्या") {
                tithiClass += ' special amavasya';
            }

            const isPurnima = panchanga.tithi === "पूर्णिमा";
            const isAmavasya = panchanga.tithi === "अमावस्या";

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
                        {date.getDate()}
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
                        {panchanga.tithi}
                    </span>
                    {/* Handle possibly undefined events */}
                    {panchanga.events && panchanga.events.length > 0 && <div className="event-dot" />}
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
            
            // Use the main calculate function for consistency
            const panchanga = calculate(date);
            
            if (!panchanga || panchanga.error) {
                // Fallback if calculation fails
                cells.push(
                    <div
                        key={day}
                        className="calendar-day relative group"
                        onClick={() => onDayClick(date)}
                    >
                        <span className="main-number transform transition-transform duration-150 ease-out inline-block group-hover:scale-110">
                            {day}
                        </span>
                        <span className="sub-number" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                            {toDevanagari(day)}
                        </span>
                        <span className="tithi-display text-gray-400" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                            Calculation Error
                        </span>
                    </div>
                );
                continue;
            }

            let classes = 'calendar-day';
            if (date.getUTCDay() === 6) classes += ' saturday';
            if (date.toDateString() === today.toDateString()) classes += ' today';

            // Handle possibly undefined events
            const isHoliday = panchanga.events?.some(event => event.holiday) ?? false;
            if (isHoliday) classes += ' holiday';

            let tithiClass = 'tithi-display';

            if (panchanga.tithi === "पूर्णिमा") {
                tithiClass += ' special purnima';
            } else if (panchanga.tithi === "अमावस्या") {
                tithiClass += ' special amavasya';
            }

            const isPurnima = panchanga.tithi === "पूर्णिमा";
            const isAmavasya = panchanga.tithi === "अमावस्या";

            cells.push(
                <div
                    key={day}
                    className={classes + ' relative group'}
                    onClick={() => onDayClick(date)}
                >
                    <span className="main-number transform transition-transform duration-150 ease-out inline-block group-hover:scale-110">
                        {day}
                    </span>
                    {/* Handle possibly undefined bsDay */}
                    <span className="sub-number" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                        {toDevanagari(panchanga.bsDay?.toString() ?? day.toString())}
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
                        {panchanga.tithi}
                    </span>
                    {/* Handle possibly undefined events */}
                    {panchanga.events && panchanga.events.length > 0 && <div className="event-dot" />}
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
import React from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { toDevanagari, fromDevanagari, getMonthWarning } from '../../lib/utils/lib';
import { NEPALI_BS_MONTHS, GREGORIAN_MONTHS } from '../../constants/constants';
import { TimezoneWarning } from '../common/TimezoneWarning';

interface CalendarControlsProps {
    activeSystem: 'bs' | 'ad';
    currentYear: number | null;
    currentMonth: number;
    onYearChange: (year: number | null) => void;
    onMonthChange: (month: number) => void;
    onPrevMonth: () => void;
    onNextMonth: () => void;
    onPrevYear: () => void;
    onNextYear: () => void;
}

const CalendarControls: React.FC<CalendarControlsProps> = ({
    activeSystem,
    currentYear,
    currentMonth,
    onYearChange,
    onMonthChange,
    onPrevMonth,
    onNextMonth,
    onPrevYear,
    onNextYear,
}) => {
    const months = activeSystem === 'bs' ? NEPALI_BS_MONTHS : GREGORIAN_MONTHS;

    const warning = React.useMemo(() => {
        if (currentYear === null) return { showWarning: false, message: '' };
        return getMonthWarning(activeSystem, currentYear, currentMonth);
    }, [activeSystem, currentYear, currentMonth]);

    const handleYearInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (activeSystem === 'bs') {
            const devanagariValue = e.target.value;
            const englishValue = fromDevanagari(devanagariValue);
            const sanitizedEnglish = englishValue.replace(/[^0-9]/g, '');
            const year = sanitizedEnglish === '' ? null : parseInt(sanitizedEnglish);
            onYearChange(year as any);
        } else {
            const raw = e.target.value.replace(/[^0-9]/g, '');
            const year = raw === '' ? null : parseInt(raw);
            onYearChange(year as any);
        }
    };

    return (
        <div className="flex flex-col items-center justify-between px-2 pt-2  bg-slate-100 dark:bg-gray-700/50 flex-shrink-0 w-full">
            {/* Navigation row with equal distributed spacing */}
            <div
                className="flex w-full items-center justify-between flex-nowrap"
            >
                {/* Prev Year */}
                <button
                    onClick={onPrevYear}
                    aria-label="Previous year"
                    className="sm:flex-none h-9 sm:h-10 w-9 sm:w-8 rounded-lg bg-blue-500 dark:bg-gray-700 shadow-sm hover:shadow-md
                     transition-all duration-200 text-white dark:text-gray-300 hover:bg-blue-600
                     dark:hover:text-blue-400 flex items-center justify-center"
                >
                    <ChevronsLeft size={16} />
                </button>

                {/* Prev Month */}
                <button
                    onClick={onPrevMonth}
                    aria-label="Previous month"
                    className="sm:flex-none h-9 sm:h-10 w-9 sm:w-8 rounded-lg bg-blue-500 dark:bg-gray-700 shadow-sm hover:shadow-md
                     transition-all duration-200 text-white dark:text-gray-300 hover:bg-blue-600
                     dark:hover:text-blue-400 flex items-center justify-center"
                >
                    <ChevronLeft size={16} />
                </button>

                {/* Month Select */}
                <select
                    value={currentMonth}
                    onChange={(e) => onMonthChange(parseInt(e.target.value))}
                    className=" sm:flex-none h-9 sm:h-10 w-24 sm:w-32 px-2 bg-slate-200 dark:bg-gray-700 border border-blue-300 dark:border-gray-600
                     rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base
                     text-blue-900 dark:text-gray-100"
                >
                    {months.map((month, index) => (
                        <option key={index} value={index}>
                            {month}
                        </option>
                    ))}
                </select>

                {/* Year Input */}
                <input
                    type="text"
                    value={
                        activeSystem === 'bs'
                            ? toDevanagari(currentYear || '')
                            : currentYear === null
                                ? ''
                                : String(currentYear)
                    }
                    onChange={handleYearInputChange}
                    className="sm:flex-none h-9 sm:h-10 w-16 sm:w-20 px-2 text-center bg-slate-200 dark:bg-gray-700 border border-blue-300
                     dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent
                     text-sm sm:text-base text-blue-900 dark:text-gray-100"
                    style={
                        activeSystem === 'bs'
                            ? { fontFamily: "'Noto Sans Devanagari', sans-serif" }
                            : {}
                    }
                />

                {/* Next Month */}
                <button
                    onClick={onNextMonth}
                    aria-label="Next month"
                    className="sm:flex-none h-9 sm:h-10 w-9 sm:w-8 rounded-lg bg-blue-500 dark:bg-gray-700 shadow-sm hover:shadow-md
                     transition-all duration-200 text-white dark:text-gray-300 hover:bg-blue-600
                     dark:hover:text-blue-400 flex items-center justify-center"
                >
                    <ChevronRight size={16} />
                </button>

                {/* Next Year */}
                <button
                    onClick={onNextYear}
                    aria-label="Next year"
                    className="sm:flex-none h-9 sm:h-10 w-9 sm:w-8 rounded-lg bg-blue-500 dark:bg-gray-700 shadow-sm hover:shadow-md
                     transition-all duration-200 text-white dark:text-gray-300 hover:bg-blue-600
                     dark:hover:text-blue-400 flex items-center justify-center"
                >
                    <ChevronsRight size={16} />
                </button>
            </div>

            {/* Warning message */}
            {warning.showWarning && (
                <div
                    className="mt-2 text-xs text-orange-600 dark:text-orange-400 text-center px-2"
                    style={
                        activeSystem === 'bs'
                            ? { fontFamily: "'Noto Sans Devanagari', sans-serif" }
                            : {}
                    }
                >
                    {warning.message}
                </div>
            )}
                <TimezoneWarning activeSystem={activeSystem} closable={false} compact={true} className="mt-2" />
        </div>
    );
};

export default CalendarControls;

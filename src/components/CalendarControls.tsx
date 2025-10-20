import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { toDevanagari, fromDevanagari, getMonthWarning } from '../lib/lib';
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

const BIKRAM_SAMBAT_MONTHS = ["वैशाख", "जेठ", "असार", "साउन", "भदौ", "असोज", "कार्तिक", "मंसिर", "पुष", "माघ", "फाल्गुन", "चैत"];
const GREGORIAN_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const CalendarControls: React.FC<CalendarControlsProps> = ({
    activeSystem,
    currentYear,
    currentMonth,
    onYearChange,
    onMonthChange,
    onPrevMonth,
    onNextMonth,
    onPrevYear,
    onNextYear
}) => {
    const months = activeSystem === 'bs' ? BIKRAM_SAMBAT_MONTHS : GREGORIAN_MONTHS;

    // Compute warning only if year is valid
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
        <div className="flex flex-col items-center justify-between p-2 bg-white dark:bg-gray-700/50 flex-shrink-0 w-full">
            {/* Navigation and controls row */}
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2 sm:gap-3">
                    <button
                        onClick={onPrevYear}
                        aria-label="Previous year"
                        className="px-3 py-2 rounded-lg bg-blue-500 dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-200 text-white dark:text-gray-300 hover:bg-blue-600 dark:hover:text-blue-400 text-sm font-medium"
                    >
                        {"<<"}
                    </button>
                    <button
                        onClick={onPrevMonth}
                        aria-label="Previous month"
                        className="p-2 rounded-lg bg-blue-500 dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-200 text-white dark:text-gray-300 hover:bg-blue-600 dark:hover:text-blue-400"
                    >
                        <ChevronLeft size={16} />
                    </button>
                </div>

                <div className="flex items-center gap-3 sm:gap-4">
                    <select
                        value={currentMonth}
                        onChange={(e) => onMonthChange(parseInt(e.target.value))}
                        className="px-3 py-2 bg-white dark:bg-gray-700 border border-blue-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-blue-900 dark:text-gray-100"
                        style={activeSystem === 'bs' ? { fontFamily: "'Noto Sans Devanagari', sans-serif" } : {}}
                    >
                        {months.map((month, index) => (
                            <option key={index} value={index}>
                                {month}
                            </option>
                        ))}
                    </select>
                    
                    <input
                        type="text"
                        value={activeSystem === 'bs' ? toDevanagari(currentYear || '') : (currentYear === null ? '' : String(currentYear))}
                        onChange={handleYearInputChange}
                        className="w-20 px-3 py-2 text-center bg-white dark:bg-gray-700 border border-blue-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm text-blue-900 dark:text-gray-100"
                        style={activeSystem === 'bs' ? { fontFamily: "'Noto Sans Devanagari', sans-serif" } : {}}
                    />
                </div>

                <div className="flex items-center gap-2 sm:gap-3">
                    <button
                        onClick={onNextMonth}
                        aria-label="Next month"
                        className="p-2 rounded-lg bg-blue-500 dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-200 text-white dark:text-gray-300 hover:bg-blue-600 dark:hover:text-blue-400"
                    >
                        <ChevronRight size={16} />
                    </button>
                    <button
                        onClick={onNextYear}
                        aria-label="Next year"
                        className="px-3 py-2 rounded-lg bg-blue-500 dark:bg-gray-700 shadow-sm hover:shadow-md transition-all duration-200 text-white dark:text-gray-300 hover:bg-blue-600 dark:hover:text-blue-400 text-sm font-medium"
                    >
                        {">>"}
                    </button>
                </div>
            </div>

            {/* Warning message below controls */}
            {warning.showWarning && (
                <div
                    className="mt-2 text-xs text-orange-600 dark:text-orange-400 text-center px-2"
                    style={activeSystem === 'bs' ? { fontFamily: "'Noto Sans Devanagari', sans-serif" } : {}}
                >
                    {warning.message}
                </div>
            )}
        </div>
    );
};

export default CalendarControls;
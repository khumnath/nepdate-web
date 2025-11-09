import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { toDevanagari } from '../../lib/utils/lib';
import { NEPALI_LABELS, NEPALI_BS_MONTHS, GREGORIAN_MONTHS, GREGORIAN_MONTHS_SHORT } from '../../constants/constants';

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
  onThemeToggle
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

  return (
    <header className="w-full bg-gradient-to-r from-[#0968e7] via-[#5068c8] to-[#0589c6] 
  backdrop-blur-sm border-b border-[#a5b4fc] rounded-lg">
 <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Controls */}
        <div className="flex items-center gap-3">
          <div className="flex bg-slate-200 dark:bg-gray-700 rounded-lg p-1">
            <button
              className={`px-4 py-2 rounded-md transition-all duration-200 text-sm sm:text-base font-medium ${
                activeSystem === 'bs'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              onClick={() => onSystemChange('bs')}
            >
              <span className="hidden md:inline">{bikramDesktopLabel}</span>
              <span className="md:hidden">{bikramMobileLabel}</span>
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all duration-200 text-sm sm:text-base font-medium ${
                activeSystem === 'ad'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
              onClick={() => onSystemChange('ad')}
            >
              <span className="hidden md:inline">{gregorianDesktopLabel}</span>
              <span className="md:hidden">{gregorianMobileLabel}</span>
            </button>
          </div>

          <button
            onClick={onTodayClick}
            className="px-4 sm:px-5 py-2 bg-slate-200 text-blue-600 rounded-lg hover:bg-blue-200 hover:text-blue-700 dark:text-slate-200 dark:bg-blue-500 dark:hover:bg-blue-700 transition-colors duration-200 font-medium text-sm sm:text-base"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            आज
          </button>
        </div>

        {/* Right Display */}
        <div className="flex items-center gap-4">
          <div className="text-xs sm:text-sm text-white/90 dark:text-gray-300 text-center">
            <div className="font-medium">
              <span className="hidden sm:inline">AD: </span>{adDisplay}
            </div>
            <div className="font-semibold" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
              <span className="hidden sm:inline">BS: </span>{bsDisplay}
            </div>
          </div>
          <button
            onClick={onThemeToggle}
            className="p-2.5 rounded-lg bg-slate-200 dark:bg-gray-700 text-blue-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default CalendarHeader;

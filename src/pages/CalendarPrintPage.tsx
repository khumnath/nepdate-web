import React, { useState, useEffect } from 'react';
import { ChevronLeft, Printer } from 'lucide-react';
import CalendarGrid from '../components/calendar/CalendarGrid';
import MonthlyEvents from '../components/calendar/MonthlyEvents';
import { NEPALI_BS_MONTHS, GREGORIAN_MONTHS, NEPALI_LABELS } from '../constants/constants';
import { toDevanagari, toBikramSambat } from '../lib/utils/lib';
import { getNepalDate, handlePrint } from '../lib/utils/appUtils'; // Corrected import
import { HeaderLogo } from '../components/calendar/HeaderLogo';
import { PrintAdDialog } from '../components/shared/PrintAdDialog';

interface CalendarPrintPageProps {
  onBack: () => void;
  activeSystem: 'bs' | 'ad';
}

const CalendarPrintPage: React.FC<CalendarPrintPageProps> = ({ onBack, activeSystem: initialSystem }) => {
  const today = getNepalDate();
  const todayBs = toBikramSambat(today);

  const [system, setSystem] = useState<'bs' | 'ad'>(initialSystem);
  const [year, setYear] = useState<number>(initialSystem === 'bs' ? todayBs.year : today.getFullYear());
  const [targetMonth, setTargetMonth] = useState<number | 'all'>(initialSystem === 'bs' ? todayBs.monthIndex : today.getMonth());
  const [showPrintDialog, setShowPrintDialog] = useState(false);

  // Ensure year is valid on mount
  useEffect(() => {
    if (system === 'bs' && year < 1970) setYear(todayBs.year);
    if (system === 'ad' && year > 2100) setYear(today.getFullYear());
  }, [system]);

  const monthsToRender = targetMonth === 'all'
    ? Array.from({ length: 12 }, (_, i) => i)
    : [targetMonth];

  const getMonthName = (monthIndex: number) => {
    return system === 'bs' ? NEPALI_BS_MONTHS[monthIndex] : GREGORIAN_MONTHS[monthIndex];
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* --- Screen Controls (Hidden on Print) --- */}
      <div className="print:hidden sticky top-0 z-50 bg-white border-b shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium"
            >
              <ChevronLeft size={20} />
              {NEPALI_LABELS.back || 'Back'}
            </button>
            <h1 className="text-xl font-bold flex items-center gap-2">
              <Printer size={24} className="text-blue-600" />
              Calendar Print
            </h1>
          </div>

          <div className="grid grid-cols-[auto_1fr] sm:flex sm:flex-wrap items-center gap-2 w-full md:w-auto justify-end">
            {/* System Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setSystem('bs')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${system === 'bs' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                BS
              </button>
              <button
                onClick={() => setSystem('ad')}
                className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${system === 'ad' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
              >
                AD
              </button>
            </div>

            {/* Year Input */}
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(parseInt(e.target.value))}
              className="border rounded px-3 py-1.5 w-full sm:w-24 text-center font-medium focus:ring-2 focus:ring-blue-500 outline-none"
            />

            {/* Month Select */}
            <select
              value={targetMonth}
              onChange={(e) => setTargetMonth(e.target.value === 'all' ? 'all' : parseInt(e.target.value))}
              className="border rounded px-3 py-1.5 font-medium focus:ring-2 focus:ring-blue-500 outline-none w-full sm:w-auto flex-1 sm:flex-none"
            >
              <option value="all">{NEPALI_LABELS.allMonths || 'All Months'}</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i}>
                  {getMonthName(i)}
                </option>
              ))}
            </select>

            {/* Print Button */}
            <button
              onClick={() => {
                 if (window.Android) {
                     setShowPrintDialog(true);
                 } else {
                     handlePrint();
                 }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 font-medium shadow-sm transition-colors whitespace-nowrap col-span-2 sm:col-span-1"
            >
              <Printer size={18} />
              {NEPALI_LABELS.print || 'Print'}
            </button>
          </div>
        </div>

        <PrintAdDialog
            isOpen={showPrintDialog}
            onClose={() => setShowPrintDialog(false)}
            onPrint={handlePrint}
        />
      </div>

      {/* --- Print Content --- */}
      <div className="mx-auto print:mx-0 print:w-full">
        {monthsToRender.map((monthIndex, index) => (
          <div
            key={`${year}-${monthIndex}`}
            className="print-page flex flex-col bg-white h-auto min-h-screen relative print:h-screen print:max-h-screen print:overflow-hidden"
            style={{
              pageBreakAfter: index === monthsToRender.length - 1 ? 'auto' : 'always',
              breakAfter: index === monthsToRender.length - 1 ? 'auto' : 'page',
            }}
          >
             <div className="flex flex-col min-h-full print:h-full p-8 print:p-8">
                {/* Header per page */}
                <div className="flex flex-shrink-0 items-center justify-between border-b-2 border-blue-500 pb-2 mb-2">
                  <div className="flex items-center gap-2">
                    <HeaderLogo activeSystem={system} />
                  </div>
                  <div className="text-right">
                      <h2 className="text-2xl font-bold text-gray-800">
                        {getMonthName(monthIndex)} {system === 'bs' ? toDevanagari(year) : year}
                      </h2>
                      <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                        {system === 'bs' ? 'Bikram Sambat' : 'Gregorian Calendar'}
                      </p>
                  </div>
                </div>

                {/* Content Area with Scaling */}
                <div className="w-full flex flex-col relative print:flex-1 print:min-h-0 print:overflow-hidden">
                    {/* Apply scale to fit content if it's too tall. Origin top to keep alignment */}
                    <div className="flex flex-col w-full print:flex-1 print:h-full">
                        {/* Calendar Grid - Allow it to take natural space */}
                        <div className="flex-shrink-0 mb-2 print:px-24">
                          <CalendarGrid
                            activeSystem={system}
                            currentYear={year}
                            currentMonth={monthIndex}
                            onDayClick={() => {}}
                          />
                        </div>

                        {/* Events List - Take remaining space but do not overflow page */}
                        <div className="relative flex flex-col items-center justify-center mt-4 print:flex-1 print:min-h-0 print:mt-2 print:overflow-hidden">
                           <div className="w-full px-8 print:px-12 text-center">
                               <MonthlyEvents
                                 activeSystem={system}
                                 currentYear={year}
                                 currentMonth={monthIndex}
                               />
                           </div>
                        </div>
                    </div>
                </div>

                {/* Footer - Fixed at bottom of the 290mm container */}
                <div className="flex-shrink-0 mt-2 border-t pt-2 text-center text-xs text-gray-500">
                    Printed from nepdate web/android application.
                    <br />
                    <a href="https://play.google.com/store/apps/details?id=com.khumnath.nepdate" target="_blank" rel="noopener noreferrer">play.google.com/store/apps/details?id=com.khumnath.nepdate</a>
                    <br />
                    © {new Date().getFullYear()} {NEPALI_LABELS.project}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarPrintPage;

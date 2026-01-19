import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown, RotateCcw } from 'lucide-react';
import { NEPALI_BS_MONTHS } from '../../constants/constants';
import { toBikramSambat, calculate, toDevanagari } from '../../lib/utils/lib';
import { getNepalDate } from '../../lib/utils/appUtils';

interface UpcomingEventsProps {
  activeSystem: 'bs' | 'ad';
}

interface UpcomingEvent {
  name: string;
  daysRemaining: number;
  holiday: boolean;
  adDate: Date;
  bsDate: any;
}

const INITIAL_LOAD_COUNT = 10;

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({
  activeSystem
}) => {
  // STATE FOR UPCOMING EVENTS
  const [upcomingEvents, setUpcomingEvents] = useState<UpcomingEvent[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Use a Ref to track the date cursor so we can resume scanning without re-renders
  const scanCursor = useRef<Date | null>(null);
  // Keep track of total days scanned to prevent infinite loops
  const totalDaysScanned = useRef(0);
  const listRef = useRef<HTMLDivElement>(null);
  const componentRef = useRef<HTMLDivElement>(null);

  // Helper to init cursor
  const initCursor = () => {
    const today = getNepalDate();
    scanCursor.current = new Date(Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()));
    totalDaysScanned.current = 0;
  };

  // Initialize cursor on first load
  useEffect(() => {
    initCursor();
    loadMoreEvents(INITIAL_LOAD_COUNT);
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

    // Smooth scroll down to indicate new items loaded
    if (newEvents.length > 0) {
      setTimeout(() => {
        if (listRef.current) {
           listRef.current.scrollBy({ top: 150, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hasMore, upcomingEvents.length]);

  const handleReset = () => {
      setUpcomingEvents([]); // Clear list
      setHasMore(true);
      setIsExpanded(false);
      initCursor(); // Reset cursor to today

      setTimeout(() => {
          loadMoreEvents(INITIAL_LOAD_COUNT);
          if (listRef.current) listRef.current.scrollTop = 0;

           setTimeout(() => {
              if (componentRef.current) {
                  componentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
           }, 100);
      }, 50);
  };

  if (upcomingEvents.length === 0 && !isLoading) return null;

  const isBs = activeSystem === 'bs';
  const title = isBs ? 'आगामी कार्यक्रमहरू' : 'Upcoming Events';

  // Helper to format date parts with leading zero
  const pad = (n: number) => n.toString().padStart(2, '0');

  // Calculate current years for comparison
  const today = getNepalDate();
  const currentAdYear = today.getFullYear();
  const currentBsYear = toBikramSambat(today).year;

  const showReset = upcomingEvents.length > INITIAL_LOAD_COUNT && isExpanded;

  return (
    <div ref={componentRef} className="w-full bg-white dark:bg-slate-900 rounded-xl shadow-card-custom shadow-blue-50/50 dark:shadow-slate-900/50 border border-gray-300 dark:border-slate-600 overflow-hidden flex flex-col flex-1 min-h-[400px]">
      {/* Header */}
      <div className="bg-sky-500 dark:bg-slate-800 px-5 py-4 border-b border-sky-600 dark:border-slate-700 flex items-center">
        <div className="w-2.5 h-2.5 rounded-full bg-blue-300 mr-3 shadow-sm shadow-blue-300/50 animate-pulse"></div>
        <h2
          className="text-lg sm:text-xl font-bold text-white dark:text-blue-100"
          style={{ fontFamily: isBs ? "'Noto Sans Devanagari', sans-serif" : 'inherit' }}
        >
          {title}
        </h2>
      </div>

      {/* Events List Body */}
      <div ref={listRef} className={`flex flex-col gap-3 p-4 flex-1 ${isExpanded ? 'overflow-y-auto' : 'overflow-hidden'}`}>
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
            href = `bs?${event.bsDate.year}-${pad(event.bsDate.monthIndex + 1)}-${pad(event.bsDate.day)}`;
          } else {
            dateText = event.adDate.toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: isDifferentYear ? 'numeric' : undefined
            });

            // AD Link: host/ad?YYYY-MM-DD
            href = `ad?${event.adDate.getFullYear()}-${pad(event.adDate.getMonth() + 1)}-${pad(event.adDate.getDate())}`;
          }

          return (
            <a
              key={idx}
              href={href}
              className={`relative flex justify-between items-center p-3.5 bg-indigo-50/30 dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-slate-700 group`}
            >
              {/* Left Side: Event Name with Blinking Dot */}
              <div className={`flex items-center gap-3 flex-1`}>
                <span className={`w-1.5 h-1.5 rounded-full animate-pulse flex-shrink-0 ${event.holiday ? 'bg-red-500 shadow-sm shadow-red-300' : 'bg-green-500 shadow-sm shadow-green-300'}`}></span>
                <span
                  className={`text-[15px] leading-snug font-semibold ${event.holiday
                    ? 'text-red-700 dark:text-red-400'
                    : 'text-slate-700 dark:text-slate-200'
                    }`}
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  {event.name}
                </span>
              </div>

              {/* Right Side: Date Info */}
              <div className="flex flex-col items-end pl-2 min-w-[90px] text-right">
                <span
                  className={`${event.holiday ? 'text-red-700 dark:text-red-400' : 'text-gray-800 dark:text-gray-200'} font-bold text-sm leading-tight`}
                  style={{ fontFamily: isBs ? "'Noto Sans Devanagari', sans-serif" : 'inherit' }}
                >
                  {dateText}
                </span>
                <span
                  className={`${event.holiday ? 'text-red-600/80 dark:text-red-400/80' : 'text-slate-500 dark:text-slate-400'} text-[11px] mt-0.5 font-medium`}
                  style={{ fontFamily: isBs ? "'Noto Sans Devanagari', sans-serif" : 'inherit' }}
                >
                  {timeText}
                </span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Footer Buttons */}
      <div className="px-5 pb-5 pt-0 mt-auto bg-inherit z-10 flex flex-col gap-2">
         {/* Load More Button - Always visible if hasMore */}
         {hasMore && (
          <button
            onClick={() => {
                setIsExpanded(true);
                loadMoreEvents(5);
            }}
            disabled={isLoading}
            className="w-full flex items-center justify-center text-sm font-medium text-white dark:text-slate-300 hover:bg-sky-600 transition-colors py-2.5 bg-sky-500 dark:bg-slate-800/50 rounded-lg group"
            style={{ fontFamily: isBs ? "'Noto Sans Devanagari', sans-serif" : 'inherit' }}
          >
            {isLoading
              ? (isBs ? 'लोड हुँदैछ...' : 'Loading...')
              : (
                <div className="flex items-center gap-1.5 text-white dark:text-blue-400">
                  <span>{isBs ? 'थप हेर्नुहोस्' : 'Load More'}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300`} />
                </div>
              )
            }
          </button>
         )}

         {/* Reset Button - Visible only if expanded beyond initial */}
         {showReset && (
            <button
                onClick={handleReset}
                className="w-full flex items-center justify-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-blue-400 hover:bg-indigo-50 dark:hover:bg-slate-800 transition-all py-2 rounded-lg border border-transparent hover:border-indigo-100 dark:hover:border-slate-700"
                style={{ fontFamily: isBs ? "'Noto Sans Devanagari', sans-serif" : 'inherit' }}
            >
                <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
                <span>{isBs ? 'सूची रिसेट' : 'Reset View'}</span>
            </button>
         )}
      </div>

    </div>
  );
};

export default UpcomingEvents;

import React, { JSX } from 'react';
import { fromBikramSambat, getBikramMonthInfo, calculate, toDevanagari } from '../../lib/utils/lib';

interface MonthlyEventsProps {
  activeSystem: 'bs' | 'ad';
  currentYear: number | null;
  currentMonth: number;
}

const MonthlyEvents: React.FC<MonthlyEventsProps> = ({
  activeSystem,
  currentYear,
  currentMonth
}) => {

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

  if (monthlyEventsMap.size === 0) {
    return null;
  }

  // Helper to format date parts with leading zero
  const pad = (n: number) => n.toString().padStart(2, '0');

  const cardStyle = "w-full bg-indigo-50/30 dark:bg-slate-900 rounded-xl shadow-card-custom shadow-blue-50/50 dark:shadow-slate-900/50 border border-gray-300 dark:border-slate-600 overflow-hidden";

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
          href = `bs?${currentYear}-${pad(currentMonth + 1)}-${pad(day)}`;
        } else {
          href = `ad?${currentYear}-${pad(currentMonth + 1)}-${pad(day)}`;
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

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Monthly List Section */}
      {renderMonthlyList()}
    </div>
  );
};

export default MonthlyEvents;
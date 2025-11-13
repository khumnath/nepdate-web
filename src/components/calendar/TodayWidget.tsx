import React from 'react';
import { NEPALI_LABELS, GREGORIAN_MONTHS, GREGORIAN_WEEKDAYS } from '../../constants/constants';
import {
  toDevanagari,
  toBikramSambat,
  weekdays,
  calculate,
} from '../../lib/utils/lib';
import { Sunrise, Sunset, ArrowRight } from 'lucide-react';

type BikramSambatDate = ReturnType<typeof toBikramSambat>;
type CalculateResult = ReturnType<typeof calculate>;
type TodayDetails = Exclude<CalculateResult, { error: string }>;
type CalendarEvent = TodayDetails extends { events: (infer E)[] } ? E : never;

interface TodayWidgetProps {
  todayAd: Date;
  todayBs: BikramSambatDate;
  todayDetails: TodayDetails | null;
  onShowDetailsClick: () => void;
}

const PanchangaRow: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => (
  <li className="flex justify-between items-center text-sm py-1.5 border-b border-gray-200 dark:border-gray-600 last:border-b-0">
    <span className="text-gray-500 dark:text-gray-400">{label}:</span>
    <span className="font-medium text-gray-800 dark:text-gray-200 text-right">
      {value}
    </span>
  </li>
);

const EventRow: React.FC<{ event: CalendarEvent }> = ({ event }) => (
  <li className="flex items-start text-sm py-1.5">
    <span
      className={`w-2 h-2 rounded-full mr-2.5 mt-1.5 flex-shrink-0 ${event.holiday ? 'bg-red-500' : 'bg-blue-500'
        }`}
    ></span>
    <span className="text-gray-800 dark:text-gray-200">{event.name}</span>
  </li>
);

export const TodayWidget: React.FC<TodayWidgetProps> = ({
  todayAd,
  todayBs,
  todayDetails,
  onShowDetailsClick,
}) => {
  const adDay = todayAd.getDate();
  const adWeekday = GREGORIAN_WEEKDAYS[todayAd.getDay()];
  const adMonth = GREGORIAN_MONTHS[todayAd.getMonth()];
  const adYear = todayAd.getFullYear();

  const bsWeekday = weekdays[todayAd.getDay()];
  const bsDayNep = toDevanagari(todayBs.day);
  const bsYearNep = toDevanagari(todayBs.year);
  const tithi = todayDetails?.tithis?.[0];
  const nakshatra = todayDetails?.nakshatras?.[0];
  const yoga = todayDetails?.yogas?.[0];
  const karana = todayDetails?.karanas?.[0];
  const sunrise = todayDetails?.sunrise;
  const sunset = todayDetails?.sunset;
  const todayEvents = todayDetails?.events;

  return (
    <div className="p-4 bg-azure dark:bg-gray-700 rounded-lg shadow-md border dark:border-gray-600">
      <h3 className="text-lg text-center font-semibold text-blue-600 dark:text-blue-400 mb-3">
        {NEPALI_LABELS.today || 'Today'}
      </h3>
      <div className="text-center">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
          {bsWeekday}
        </div>
        <div className="text-6xl text-gray-800 dark:text-gray-100 my-1">
          {bsDayNep}
        </div>
        <div className="text-lg font-medium text-gray-500 dark:text-gray-400">
          {todayBs.monthName}, {bsYearNep}
        </div>
      </div>
      <hr className="my-4 border-gray-200 dark:border-gray-600" />
      <div className="text-center">
        <div className="text-base font-semibold text-gray-800 dark:text-gray-100">
          {adDay} {adMonth} {adYear}
        </div>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {adWeekday}
        </div>
      </div>

      {todayDetails && (
        <>
          <hr className="my-4 border-gray-200 dark:border-gray-600" />
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
            पञ्चाङ्ग (सुर्योदयकालीन)
          </h4>
          <ul className="divide-y divide-gray-200 dark:divide-gray-600">
            {tithi && <PanchangaRow label="तिथि" value={tithi.name} />}
            {nakshatra && <PanchangaRow label="नक्षत्र" value={nakshatra.name} />}
            {yoga && <PanchangaRow label="योग" value={yoga.name} />}
            {karana && <PanchangaRow label="करण" value={karana.name} />}
          </ul>
          <div className="flex justify-between text-sm mt-3 gap-3">
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Sunrise className="w-4 h-4 mr-1.5 text-orange-500" />
              <span>{sunrise}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-gray-300">
              <Sunset className="w-4 h-4 mr-1.5 text-orange-500" />
              <span>{sunset}</span>
            </div>
          </div>
        </>
      )}

      {todayEvents && todayEvents.length > 0 && (
        <>
          <hr className="my-4 border-gray-200 dark:border-gray-600" />
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
            {NEPALI_LABELS.events || 'Events'}
          </h4>
          <ul className="space-y-1">
            {todayEvents.map((event, index) => (
              <EventRow key={index} event={event} />
            ))}
          </ul>
        </>
      )}

      <hr className="my-4 border-gray-200 dark:border-gray-600" />
      <button
        onClick={onShowDetailsClick}
        className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        अन्य विवरण हेर्नुहोस्
        <ArrowRight size={18} />
      </button>

    </div>
  );
};
import React from 'react';
import { NEPALI_LABELS, GREGORIAN_MONTHS, GREGORIAN_WEEKDAYS } from '../../constants/constants';
import {
  toDevanagari,
  toBikramSambat,
  weekdays,
  calculate,
  getNepaliPeriod
} from '../../lib/utils/lib';

import { Sunrise, Sunset, ArrowRight, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

type BikramSambatDate = ReturnType<typeof toBikramSambat>;
type CalculateResult = ReturnType<typeof calculate>;
export type TodayDetails = Exclude<CalculateResult, { error: string }>;
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
  <li className="flex justify-between items-center text-sm py-1.5 border-b border-gray-200 dark:border-gray-600 last:border-b-0 px-2">
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

  // Get Bhadra info from the calculate result
  const bhadra = todayDetails?.bhadra;

  // Helpers for Time Formatting
  const formatTimeNepali = (iso?: string | null) => {
    if (!iso) return null;
    const d = new Date(iso);
    if (isNaN(d.getTime())) return null;

    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Kathmandu',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit'
    }).formatToParts(d);

    const get = (type: string) => parts.find(p => p.type === type)?.value || '00';
    let hh = parseInt(get('hour'), 10);
    const mm = parseInt(get('minute'), 10);
    if (!isFinite(hh) || !isFinite(mm)) return null;

    const period = getNepaliPeriod(hh);
    const hour12 = hh % 12 === 0 ? 12 : hh % 12;
    return `${toDevanagari(hour12)}:${toDevanagari(String(mm).padStart(2, '0'))} ${period}`;
  };

  const getBhadraTimeDisplay = () => {
    if (!todayDetails) return null;
    const timings = (todayDetails as any).bhadraTiming as Array<{ startTime: string | null, endTime: string | null }>;

    if (!timings || timings.length === 0) return null;

    return timings.map(t => {
      const start = formatTimeNepali(t.startTime);
      const end = formatTimeNepali(t.endTime);

      if (start && end) return `${start}-${end}`;
      if (start) return `${start} देखि`;
      if (end) return `${end} सम्म`;
      return null;
    }).filter(Boolean).join(', ');
  };

  const bhadraTimeStr = getBhadraTimeDisplay();

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
      <hr className="border-gray-200 dark:border-gray-600" />
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
          <hr className="my-2 border-gray-200 dark:border-gray-600" />
          <h4 className="font-semibold text-center text-gray-800 dark:text-gray-200 mb-2">
            पञ्चाङ्ग (सुर्योदयकालीन)
          </h4>
          <ul className="text-center text-gray-200 dark:text-gray-600">
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

          {/* BHADRA DISPLAY LOGIC */}
          {bhadra && bhadra.isActive && (
            <div className={`mt-3 p-2 rounded-md text-sm border flex items-center justify-center gap-2 ${bhadra.isHarmful
              ? 'bg-red-50 dark:bg-red-900/20 border-red-200 text-red-700 dark:text-red-300'
              : 'bg-green-50 dark:bg-green-900/20 border-green-200 text-green-700 dark:text-green-300'
              }`}>
              {bhadra.isHarmful ? (
                <AlertTriangle size={16} className="shrink-0" />
              ) : (
                <CheckCircle size={16} className="shrink-0" />
              )}
              <div className="flex flex-col">
                <p className="font-medium">भद्रा: {bhadra.residence}</p>
                {bhadraTimeStr && (
                  <p className="text-xs font-semibold mt-0.5 flex items-center gap-1 opacity-90">
                    <Clock size={12} /> {bhadraTimeStr}
                  </p>
                )}
                <p className="text-xs mt-0.5 opacity-80">{bhadra.status}</p>
              </div>
            </div>
          )}
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
        className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-opacity-50"
      >
        अन्य विवरण हेर्नुहोस्
        <ArrowRight size={18} />
      </button>

    </div>
  );
};
import React, { useState, useEffect } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { RashifalWidget } from '../components/calendar/RashifalWidget';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { calculate, toBikramSambat, toDevanagari, localizeTimeStr } from '../lib/utils/lib';
import { NEPALI_BS_MONTHS } from '../constants/constants';

interface RashifalPageProps {
  onBack: () => void;
  // Optional initial params, though component will primarily manage its own state
  param?: string;
  // Previously passed props are optional now as we verify/re-calculate
  date?: string;
}

const RashifalPage: React.FC<RashifalPageProps> = ({ onBack, param }) => {
  // Initialize with today's date
  const [viewDate, setViewDate] = useState<Date>(new Date());

  // State to hold the calculated data formatted for the widget
  const [pageData, setPageData] = useState<any>(null);

  useEffect(() => {

    const details = calculate(viewDate);
    const bsDate = toBikramSambat(viewDate);


    const monthName = bsDate.monthName || NEPALI_BS_MONTHS[bsDate.monthIndex];
    const dateStr = `${toDevanagari(bsDate.year)} ${monthName} ${toDevanagari(bsDate.day)}`;
    const dateKey = `${bsDate.year}-${bsDate.monthIndex + 1}-${bsDate.day}`;

    // Nakshatra Transition Logic (similar to App.tsx)
    let nextNakshatraName: string | undefined;
    let nakshatraTransition: string | undefined;

    if (details.nakshatras && details.nakshatras.length > 1) {
        const nextNk = details.nakshatras[1];
        if (nextNk && nextNk.startTime) {
            nextNakshatraName = nextNk.name;
            try {
                const dateObj = new Date(nextNk.startTime);
                const dateStrRaw = dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
                nakshatraTransition = localizeTimeStr(dateStrRaw);
            } catch (e) {

            }
        }
    }

    // Moon Rashi Transition Formatting
    let moonTransitionTimeFormatted: string | undefined;
    if (details.moonRashiTransition?.time) {
        try {
            const dateObj = new Date(details.moonRashiTransition.time);
            const dateStrRaw = dateObj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
            moonTransitionTimeFormatted = localizeTimeStr(dateStrRaw);
        } catch(e) {}
    }



    // Construct Header Info Strings
    const moonInfoString = (details.moonRashiTransition?.nextRashi && moonTransitionTimeFormatted)
        ? `${details.moonRashi} ➝ ${details.moonRashiTransition.nextRashi} (${moonTransitionTimeFormatted})`
        : `${details.moonRashi} राशि`;

    const nakshatraInfoString = (nextNakshatraName && nakshatraTransition)
        ? `${details.nakshatra} ➝ ${nextNakshatraName} (${nakshatraTransition})`
        : details.nakshatra;

    setPageData({
        date: dateStr,
        dateKey: dateKey,
        tithi: details.tithi, // Or details.tithis[0].name
        nakshatra: details.nakshatra, // Or details.nakshatras[0].name
        moonRashi: details.moonRashi,
        nextMoonRashi: details.moonRashiTransition?.nextRashi,
        transitionTime: moonTransitionTimeFormatted,
        nextNakshatra: nextNakshatraName,
        nakshatraTransitionTime: nakshatraTransition,
        sunriseTime: localizeTimeStr(details.sunrise), // Localized "6:45 AM"
        moonInfoString,
        nakshatraInfoString
    });

  }, [viewDate]);

  const handlePrevDay = () => {
      const d = new Date(viewDate);
      d.setDate(d.getDate() - 1);
      setViewDate(d);
  };

  const handleNextDay = () => {
    const d = new Date(viewDate);
    d.setDate(d.getDate() + 1);
    setViewDate(d);
  };

  const handleToday = () => {
      setViewDate(new Date());
  };

  return (
    <div className="h-full bg-slate-100 dark:bg-gray-900 flex flex-col overflow-hidden">
      <PageHeader title="राशिफल" onBack={onBack} />

      {/* Date Navigation Bar */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-100 dark:border-gray-700">
         <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
            <button
                onClick={handlePrevDay}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
                aria-label="Previous Day"
            >
                <ChevronLeft size={20} />
            </button>

            <div className="flex flex-col items-center">
                 <div className="flex items-center gap-2 cursor-pointer" onClick={handleToday}>
                    <Calendar size={14} className="text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {pageData ? pageData.date : 'Loading...'}
                    </span>
                 </div>
                 <div className="text-xs text-gray-500 dark:text-gray-400">
                     {viewDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}
                 </div>

            </div>

            <button
                onClick={handleNextDay}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
                aria-label="Next Day"
            >
                <ChevronRight size={20} />
            </button>
         </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-20 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Disclaimer */}
          <div className="bg-blue-50 dark:bg-gray-800/50 border border-blue-100 dark:border-gray-700 rounded-xl p-4 mb-6 shadow-sm">
            <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed italic">
              यो राशिफल परम्परागत ज्योतिषीय गणना (ग्रह र चन्द्रमाको स्थिति) मा आधारित छ। राशिफलमा जे लेखिए तापनि कडा परिश्रम, सावधानी र सकारात्मकताले जुनसुकै दिनलाई पनि फलदायी बनाउन सकिन्छ। यी भविष्यवाणीहरूलाई अनुशरण गर्दा हुने कुनै पनि परिणामका लागि हामी जिम्मेवार हुने छैनौं।
            </p>
          </div>

          {pageData && (
              <RashifalWidget
                date={pageData.date}
                dateKey={pageData.dateKey}
                tithi={pageData.tithi}
                nakshatra={pageData.nakshatra}
                moonRashi={pageData.moonRashi}
                nextMoonRashi={pageData.nextMoonRashi}
                transitionTime={pageData.transitionTime}
                nextNakshatra={pageData.nextNakshatra}
                nakshatraTransitionTime={pageData.nakshatraTransitionTime}
                sunriseTime={pageData.sunriseTime}
                moonInfoString={pageData.moonInfoString}
                nakshatraInfoString={pageData.nakshatraInfoString}
                selectedRashi={param}
              />
          )}
        </div>
      </div>
    </div>
  );
};

export default RashifalPage;

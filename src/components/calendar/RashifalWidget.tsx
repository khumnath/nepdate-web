import React, { useMemo } from 'react';
import { HeaderLogo } from './HeaderLogo';
import { Star } from 'lucide-react';
import { generateDailyRashifal } from '../../lib/utils/rashifalLogic';

import RashiImages from '../../assets/rashiImages';

const RASHI_IMAGES: Record<string, string> = {
  'mesh.png': RashiImages.mesh,
  'vrish.png': RashiImages.vrish,
  'mithun.png': RashiImages.mithun,
  'karkat.png': RashiImages.karkat,
  'simha.png': RashiImages.simha,
  'kanya.png': RashiImages.kanya,
  'tula.png': RashiImages.tula,
  'vrishchik.png': RashiImages.vrishchik,
  'dhanu.png': RashiImages.dhanu,
  'makar.png': RashiImages.makar,
  'kumbha.png': RashiImages.kumbha,
  'meen.png': RashiImages.meen
};

interface RashifalWidgetProps {
  date: string;
  dateKey: string;
  tithi?: string;
  nakshatra?: string;
  moonRashi?: string;
  nextMoonRashi?: string;
  transitionTime?: string;
  nextNakshatra?: string;
  nakshatraTransitionTime?: string;
  selectedRashi?: string;
  className?: string;
  onViewAll?: () => void;
}

const RASHI_KEY_MAP: Record<string, number> = {
  'mesh': 0, 'brish': 1, 'mithun': 2, 'karkat': 3,
  'simha': 4, 'kanya': 5, 'tula': 6, 'brishchik': 7,
  'dhanu': 8, 'makar': 9, 'kumbha': 10, 'meen': 11
};

const RashiCard: React.FC<{ data: ReturnType<typeof generateDailyRashifal>[0], index: number, isSelected?: boolean }> = ({ data, index, isSelected }) => {
  const [isReasonExpanded, setIsReasonExpanded] = React.useState(false);

  return (
    <div
      id={`rashi-card-${index}`}
      className={`bg-white dark:bg-gray-700/50 rounded-xl p-4 shadow-sm border flex flex-col transition-all duration-500 ${isSelected ? 'border-blue-500 ring-2 ring-blue-200 dark:ring-blue-900 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-100 dark:border-gray-600'}`}
    >
      <div className="flex gap-4 items-start">
        {/* Left Side: Icon & Name */}
        <div className="flex flex-col items-center justify-center w-24 flex-shrink-0 border-r border-gray-100 dark:border-gray-600 pr-3">
          <img
            src={RASHI_IMAGES[data.img] || data.img}
            alt={data.name}
            className="w-12 h-12 object-contain mb-2 drop-shadow-sm"
          />

          <h3 className="text-lg font-bold text-red-600 dark:text-red-400 leading-none mb-1">
            {data.name}
          </h3>

          <p className="text-[9px] text-gray-500 dark:text-gray-400 text-center leading-tight mt-1">
            {data.syllables}
          </p>

          <div className="mt-3 flex flex-col items-center">
            <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-tighter mb-0.5">समग्र फल</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={10}
                  className={`${i < data.rating ? "fill-red-500 text-red-500" : "fill-gray-200 text-gray-200 dark:text-gray-600"}`}
                />
              ))}
            </div>
            <span className="text-[9px] font-bold text-red-500 mt-1">
              {data.rating === 5 ? "उत्तम" : data.rating === 4 ? "राम्रो" : data.rating === 2 ? "सामान्य" : "प्रतिकूल"}
            </span>
          </div>
        </div>

        <div className="flex-grow pt-1 overflow-hidden">
          <p
            className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-medium"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            dangerouslySetInnerHTML={{ __html: data.prediction }}
          />

          {data.technicalReason && (
            <div className="mt-4">
              <button
                onClick={() => setIsReasonExpanded(!isReasonExpanded)}
                className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors uppercase tracking-wider"
              >
                {isReasonExpanded ? "लुकाउनुहोस्" : "ज्योतिषीय कारण"}
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${isReasonExpanded ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isReasonExpanded && (
                <div className="mt-2 p-3 bg-blue-50/50 dark:bg-blue-900/10 rounded-lg border border-blue-100/50 dark:border-blue-900/20 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p
                    className="text-[11px] text-blue-800 dark:text-blue-300 leading-relaxed italic"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: data.technicalReason }}
                  />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export const RashifalWidget: React.FC<RashifalWidgetProps> = ({ date, dateKey, tithi, nakshatra, moonRashi, nextMoonRashi, transitionTime, nextNakshatra, nakshatraTransitionTime, selectedRashi, className, onViewAll }) => {

  // Generate data based on props
  const rashiData = useMemo(() => {
    return generateDailyRashifal(dateKey, tithi, nakshatra, moonRashi || "मेष", nextMoonRashi, transitionTime, nextNakshatra, nakshatraTransitionTime);
  }, [dateKey, tithi, nakshatra, moonRashi, nextMoonRashi, transitionTime, nextNakshatra, nakshatraTransitionTime]);

  React.useEffect(() => {
    if (selectedRashi && RASHI_KEY_MAP[selectedRashi] !== undefined) {
      const index = RASHI_KEY_MAP[selectedRashi];
      const element = document.getElementById(`rashi-card-${index}`);
      if (element) {
        // Determine offset (e.g. sticky header height)
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  }, [selectedRashi]);

  return (
    <div className={`w-full mt-6 flex flex-col ${className || ''}`}>
      {/* Header Section */}
      <div className="bg-white dark:bg-gray-800 rounded-t-xl border border-gray-200 dark:border-gray-700 p-4 pb-6 relative overflow-hidden shrink-0">
        <div className="flex items-center justify-between relative z-10">
          <div>
            <span className="text-sm font-bold text-gray-500 dark:text-gray-400 block mb-0.5">
              {date}
            </span>
            <h2 className="text-3xl font-bold text-[#e15720] drop-shadow-sm" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
              दैनिक राशिफल
            </h2>
          </div>
          <div className="scale-90 origin-right">
            <HeaderLogo activeSystem="bs" />
          </div>
        </div>

        {/* Decorative Background lines resembling the image */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-400 to-transparent"></div>
      </div>

      {/* List of Cards - Fixed Height on Dashboard, Auto on Page */}
      <div className={`bg-[#fef8f6] dark:bg-gray-800 border-x border-b border-gray-200 dark:border-gray-700 rounded-b-xl p-4 relative overflow-hidden ${onViewAll ? 'h-[600px]' : ''}`}>

        <div className="space-y-3">
          {rashiData.map((rashi, index) => (
            <RashiCard
              key={rashi.id}
              data={rashi}
              index={index}
              isSelected={selectedRashi ? RASHI_KEY_MAP[selectedRashi] === index : false}
            />
          ))}
        </div>

        {/* Fade Overlay & Button */}
        {onViewAll && (
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fef8f6] via-[#fef8f6]/90 to-transparent dark:from-gray-800 dark:via-gray-800/90 dark:to-transparent flex items-end justify-center pb-8 z-10">
            <button
              onClick={onViewAll}
              className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-all text-sm flex items-center gap-2"
            >
              पूरा राशिफल हेर्नुहोस्
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

import React from 'react';
import { Sparkles, BookOpen } from 'lucide-react';

import { Blog } from '../../data/blogs';
import { BlogCard } from './BlogCard';
import { getAllBlogs } from '../../lib/blogContent';
import { getNepalDate } from '../../lib/utils/appUtils';
import {
  toBikramSambat,
  fromBikramSambat,
  getDaysInADMonth,
  getBikramMonthInfo,
  calculate
} from '../../lib/utils/lib';

interface BlogWidgetProps {
  activeSystem: 'bs' | 'ad';
  currentYear: number;
  currentMonth: number;
  onBlogClick: (blog: Blog) => void;
  onViewAll?: () => void;
  enableLoadMore?: boolean;
  initialCount?: number;
  filterTag?: string;
  onClearFilter?: () => void;
  onTagClick?: (tag: string) => void;
  compactMode?: boolean;
  className?: string;
}

export const BlogWidget: React.FC<BlogWidgetProps> = ({
  activeSystem,
  currentYear,
  currentMonth,
  onBlogClick,
  onViewAll,
  enableLoadMore = false,
  initialCount = 12,
  filterTag,
  onClearFilter,
  onTagClick,
  compactMode = false,
  className = ''
}) => {
  // State for pagination
  const [visibleCount, setVisibleCount] = React.useState(initialCount);
  const allContent: Blog[] = React.useMemo(() => getAllBlogs(), []);

  // CALCULATE VIEW DATE RANGE (AD)
  const { startAd, endAd } = React.useMemo(() => {
    let start: Date, end: Date;

    if (activeSystem === 'bs') {
      // BS View: Whole BS Month
      start = fromBikramSambat(currentYear, currentMonth, 1);
      const { totalDays } = getBikramMonthInfo(currentYear, currentMonth);
      end = fromBikramSambat(currentYear, currentMonth, totalDays);
    } else {
      // AD View: Whole AD Month
      start = new Date(currentYear, currentMonth, 1);
      const daysInMonth = getDaysInADMonth(currentYear, currentMonth + 1);
      end = new Date(currentYear, currentMonth, daysInMonth);
    }
    // Set times to boundary to ensure inclusive comparison
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
    return { startAd: start, endAd: end };
  }, [activeSystem, currentYear, currentMonth]);

  // FILTERING HELPERS
  const sortBlogsByDate = (blogs: Blog[]) => {
    return blogs.sort((a, b) => {
      // Helper to get AD timestamp
      const getTimestamp = (blog: Blog) => {
        if (!blog.eventDate?.day) return 0;
        // Construct approximate AD date for sorting
        // We use current BS year context if available
        const viewStartBs = toBikramSambat(startAd);
        const year = viewStartBs.year;
        try {
            return fromBikramSambat(year, blog.eventDate.month - 1, blog.eventDate.day).getTime();
        } catch { return 0; }
      };
      return getTimestamp(a) - getTimestamp(b);
    });
  };

  // Helper to check if a Lunar event matches a specific day's Panchanga
  // We need mappings from numeric EventDate to Nepali strings returned by calculate()
  const LUNAR_MONTHS = ["वैशाख", "ज्येष्ठ", "आषाढ", "श्रावण", "भाद्र", "आश्विन", "कार्तिक", "मार्गशीर्ष", "पौष", "माघ", "फाल्गुन", "चैत्र"];
  const TITHI_NAMES = [
    "प्रतिपदा", "द्वितीया", "तृतीया", "चतुर्थी", "पञ्चमी", "षष्ठी", "सप्तमी", "अष्टमी", "नवमी", "दशमी",
    "एकादशी", "द्वादशी", "त्रयोदशी", "चतुर्दशी", "पूर्णिमा", "अमावस्या"
  ];

  const getCategorizedItems = () => {
    const currentView: Blog[] = [];
    const upcoming: Blog[] = [];

    // Pre-calculate Panchanga for all days in the current View (startAd to endAd)
    // This allows O(1) checking or simplified range checking without re-calculating per blog
    type DailyInfo = { date: Date; lunarMonth: string; paksha: string; tithi: string };
    const viewDays: DailyInfo[] = [];

    const viewStartBs = toBikramSambat(startAd);

    // Only calculate if we have LUNAR events to filter, OR effectively just do it once (30 days is fast)
    let iter = new Date(startAd);
    while (iter <= endAd) {
      // Calculate Panchanga
      // We use calculate(iter). Note: calculate() is somewhat heavy, but 30 calls is acceptable.
      // Optimization: If needed, we could cache results.
      try {
        const p = calculate(iter);
        if (p && p.lunarMonth && p.paksha && p.tithi) {
            // Strip "अधिक " prefix if present to match standard names?
            // Usually events in Adhika masa are specific. Let's keep strict for now.
            // But Map "अधिक श्रावण" -> "shrawan" might be needed if user just put "shrawan".
            // For now, strict match.
            viewDays.push({
                date: new Date(iter),
                lunarMonth: p.lunarMonth.replace('अधिक ', ''), // Normalize for simpler matching
                paksha: p.paksha === 'शुक्ल पक्ष' ? 'shukla' : 'krishna',
                tithi: p.tithi
            });
        }
      } catch (e) {}
      iter.setDate(iter.getDate() + 1);
    }

    allContent.forEach(item => {
      if (!item.eventDate) return;

      const { type, month, day, tithi, paksha, endDate } = item.eventDate;
      let isCurrent = false;

      // STRATEGY: Check if ANY day in the view matches the Event

      if (type === 'BS') {
          // BS Logic: Check if month/day falls in view
          // The view is defined by startAd/endAd.
          // Since the View corresponds to a specific BS Month (in BS view) or AD Month (in AD view),
          // We can just check overlap.

          // Construct Event Date for current Year context
          // Note: Multi-year edge cases exist (e.g. End of Poush is Next AD Year).
          // We check year of startAd and endAd.
          const years = new Set([toBikramSambat(startAd).year, toBikramSambat(endAd).year]);
          for (const y of years) {
             try {
                if (!day) continue;
                const adDate = fromBikramSambat(y, month - 1, day);
                adDate.setHours(12,0,0,0);

                // Single Date Check
                if (adDate >= startAd && adDate <= endAd) {
                    isCurrent = true;
                    break;
                }

                // Range Check (if endDate exists)
                if (endDate && endDate.type === 'BS' && endDate.day) {
                    const adEnd = fromBikramSambat(y, endDate.month - 1, endDate.day);
                    adEnd.setHours(12,0,0,0);
                    // Check Overlap: (StartA <= EndB) and (EndA >= StartB)
                    if (adDate <= endAd && adEnd >= startAd) {
                        isCurrent = true;
                        break;
                    }
                }
             } catch {}
          }

      } else if (type === 'AD') {
          // AD Logic
          const years = new Set([startAd.getFullYear(), endAd.getFullYear()]);
           for (const y of years) {
             try {
                if (!day) continue;
                const adDate = new Date(y, month - 1, day); // month is 1-12 in EventDate
                adDate.setHours(12,0,0,0);

                // Single Check
                if (adDate >= startAd && adDate <= endAd) {
                    isCurrent = true; break;
                }

                 // Range Check
                if (endDate && endDate.type === 'AD' && endDate.day) {
                    const adEnd = new Date(y, endDate.month - 1, endDate.day);
                     adEnd.setHours(12,0,0,0);
                     if (adDate <= endAd && adEnd >= startAd) {
                        isCurrent = true; break;
                    }
                }
             } catch {}
           }

      } else if (type === 'LUNAR') {
           // Lunar Logic: Scan pre-calculated viewDays
           const targetMonthName = LUNAR_MONTHS[month - 1]; // 1-based -> 0-based

           // Tithi Name Mapping

           const getTithiName = (t: number, p: 'shukla'|'krishna') => {
                if (t <= 14) return TITHI_NAMES[t-1];
                if (t === 15) return p === 'shukla' ? 'पूर्णिमा' : 'अमावस्या';
                return '';
           };

           // SINGLE LUNAR EVENT CHECK
           for (const dayInfo of viewDays) {
              // Basic Matching
               // Note: dayInfo.tithi is the Tithi Name from calculate().
               // dayInfo.paksha is 'shukla' or 'krishna'.
               // dayInfo.lunarMonth is normalized string.

               // Check Start Date Match
               const name = getTithiName(tithi || 1, paksha || 'shukla');
               const startMatch = (dayInfo.lunarMonth === targetMonthName) &&
                                  (dayInfo.paksha === (paksha || 'shukla')) &&
                                  (dayInfo.tithi === name);

               if (startMatch && !endDate) {
                   isCurrent = true;
                   break;
               }

               // RANGE CHECK (For events like Swasthani)

               if (endDate && endDate.type === 'LUNAR') {
                   const getVal = (mIndex: number, p: 'shukla'|'krishna', tName: string) => {
                       // Resolve Index from Name more robustly
                       let ti = 0;
                       if (tName === 'पूर्णिमा') ti = 15;
                       else if (tName === 'अमावस्या') ti = 15;
                       else ti = TITHI_NAMES.indexOf(tName) + 1;

                       // Purnimanta: Krishna (1-15 Amavasya), Shukla (16-30 Purnima).
                       const isShukla = p === 'shukla';
                       const base = isShukla ? 15 : 0;

                       return mIndex * 100 + base + ti;
                   };

                   const targetName = getTithiName(tithi||1, paksha||'shukla');
                   const endName = getTithiName(endDate.tithi||1, endDate.paksha||'shukla');

                   const startVal = getVal(month-1, paksha||'shukla', targetName);
                   const endVal = getVal(endDate.month-1, endDate.paksha||'shukla', endName);

                   // Check Current Day
                   const mIdx = LUNAR_MONTHS.indexOf(dayInfo.lunarMonth);
                   if (mIdx >= 0) { // Valid month
                       const dayVal = getVal(mIdx, dayInfo.paksha as 'shukla'|'krishna', dayInfo.tithi);

                       // Handle Year Wrap (Event starts in Chaitra, ends in Baisakh?)
                       // If endVal < startVal (e.g. year wrap), we treat as valid if dayVal >= startVal OR dayVal <= endVal.
                       // Assuming simplistic non-wrapping for now unless needed.
                       if (dayVal >= startVal && dayVal <= endVal) {
                           isCurrent = true;
                           break;
                       }
                   }
               } else if (startMatch) {
                   isCurrent = true; break;
               }
           }
      }

      // Upcoming Logic (Simple Check)
       if (!isCurrent) {
         // Using approxBsDay helps here if we don't want strict calc.
         try {
            const eventAd = fromBikramSambat(viewStartBs.year, month - 1, day || 1);
            eventAd.setHours(12, 0, 0, 0);
            if (eventAd > endAd) {
                upcoming.push(item);
            }
         } catch { }
      } else {
        currentView.push(item);
      }
    });

    return {
        currentView: sortBlogsByDate(currentView),
        upcoming: sortBlogsByDate(upcoming)
    };
  };

  const { currentView, upcoming } = getCategorizedItems();

  // General Items (No eventDate, No month tags)
  const allMonthTags = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  let generalItems = allContent.filter(item => {
    if (item.eventDate) return false;
    if (item.tags && item.tags.some(t => allMonthTags.includes(t))) return false;
    return true;
  });

  // Shuffle general items
  const todayStr = getNepalDate().toISOString().split('T')[0];
  let seed = 0;
  for (let i = 0; i < todayStr.length; i++) {
    seed = ((seed << 5) - seed) + todayStr.charCodeAt(i);
    seed |= 0;
  }
  const seededRandom = () => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };
  for (let i = generalItems.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom() * (i + 1));
    [generalItems[i], generalItems[j]] = [generalItems[j], generalItems[i]];
  }

  // COMBINE: Current -> Upcoming -> General
  let displayBlogs = [...currentView, ...upcoming];
  const generalUnique = generalItems.filter(b => !displayBlogs.some(existing => existing.id === b.id));
  displayBlogs = [...displayBlogs, ...generalUnique];

  if (filterTag) {
    displayBlogs = displayBlogs.filter(blog => blog.tags && blog.tags.some(t => t.toLowerCase() === filterTag.toLowerCase()));
  }

  const totalItems = displayBlogs.length;
  const slicedBlogs = displayBlogs.slice(0, visibleCount);

  if (slicedBlogs.length === 0) return null;

  // Render Helpers
  const renderHeader = () => (
    <div className="flex items-center justify-between mb-4 px-1 shrink-0">
      <div className="flex items-center gap-2">
        {filterTag ? (
          <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-3 py-1.5 rounded-lg border border-blue-100 dark:border-blue-800">
            <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
              विषय: {filterTag}
            </span>
            <button onClick={onClearFilter} className="text-blue-500 hover:text-blue-700 dark:text-blue-400">
              ✕
            </button>
          </div>
        ) : (
          <>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg shadow-sm">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 leading-none">
                आलेखहरू
              </h2>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5 block">
                धर्म, संस्कृति, चाडपर्व, रीतिथिति र जानकारीहरू
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );

  // Grid Helper
  const renderGrid = () => (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-5 ${compactMode ? 'pb-24' : ''}`}>
      {slicedBlogs.map((blog, idx) => (
        <div key={blog.id} className={compactMode && idx >= 4 ? 'hidden md:block' : ''}>
          <BlogCard
            blog={blog}
            onClick={onBlogClick}
            onTagClick={onTagClick}
          />
        </div>
      ))}
    </div>
  );

  // Footer Helper
  const renderFooter = () => {
    return (
      <>
        {/* OVERLAY FOOTER - Desktop Only (Visible when compactMode is on) */}
        {compactMode && onViewAll && !enableLoadMore && (
          <div className="hidden md:flex absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100 via-slate-100/95 to-transparent dark:from-gray-800 dark:via-gray-800/95 dark:to-transparent items-end justify-center pb-6 z-10 pointer-events-none">
            <button
              onClick={onViewAll}
              className="pointer-events-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-lg transform hover:scale-105 transition-all text-sm flex items-center gap-2"
            >
              सबै लेखहरू हेर्नुहोस्
            </button>
          </div>
        )}

        {/* STANDARD FOOTER - Visible on Mobile, or always if not compactMode */}
        <div className={`${compactMode && onViewAll && !enableLoadMore ? 'md:hidden' : ''} mt-6 p-4 rounded-xl bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-slate-800 dark:to-slate-800 border border-indigo-100 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-4 shrink-0`}>
          <div className="flex items-center gap-3">
            <Sparkles className="text-amber-500 w-5 h-5 animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {enableLoadMore
                ? (totalItems > visibleCount ? "अझै थप लेखहरू पढ्नुहोस्" : "सबै लेखहरू देखाइएको छ")
                : "थप धार्मिक जानकारी र लेखहरूको लागि"}
            </span>
          </div>

          {enableLoadMore ? (
            totalItems > visibleCount && (
              <button
                onClick={() => setVisibleCount(prev => prev + 12)}
                className="px-6 py-2 bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-300 text-sm font-bold rounded-full shadow-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                थप लोड गर्नुहोस् (Load More)
              </button>
            )
          ) : (
            onViewAll && (
              <button
                onClick={onViewAll}
                className="px-6 py-2 bg-white dark:bg-gray-700 text-indigo-600 dark:text-indigo-300 text-sm font-bold rounded-full shadow-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
              >
                धर्म र संस्कृति पेज हेर्नुहोस्
              </button>
            )
          )}
        </div>
      </>
    );
  };

  return (
    <div className={`mt-6 ${compactMode ? 'md:h-full md:flex md:flex-col md:relative' : ''} ${className}`}>
      {renderHeader()}

      {/* Grid Container */}
      <div className={`${compactMode ? 'md:flex-1 md:overflow-hidden md:relative' : ''}`}>
        {renderGrid()}
      </div>

      {renderFooter()}
    </div>
  );
};

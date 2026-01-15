import React, { useMemo } from 'react';
import { NEPALI_BS_MONTHS } from '../../constants/constants';
import { toDevanagari, toBikramSambat } from '../../lib/utils/lib';
import { MUHURTA_DATA } from '../../data/static/muhurtaData';

interface MonthlyMuhurtaProps {
    activeSystem: 'bs' | 'ad';
    currentYear: number | null;
    currentMonth: number;
}

interface MuhurtaCategory {
    id: string;
    titleAd: string;
    titleBs: string;
    dates: number[];
}

const EVENT_CATEGORIES: Record<string, { titleAd: string, titleBs: string }> = {
    marriage: { titleAd: 'Marriage (Bibaha)', titleBs: 'विवाह' },
    bratabandha: { titleAd: 'Bratabandha', titleBs: 'ब्रतबन्ध' },
    pasni: { titleAd: 'Rice Feeding (Pasni)', titleBs: 'पास्नी' },
    grihapravesh: { titleAd: 'House Warming', titleBs: 'गृहप्रवेश' },
    shradh: { titleAd: 'Shradh', titleBs: 'श्राद्ध' }
};

const ENGLISH_MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const MonthlyMuhurta: React.FC<MonthlyMuhurtaProps> = ({
    activeSystem,
    currentYear,
    currentMonth
}) => {

    const getMuhurtasFromData = (year: number, month: number, isBs: boolean): MuhurtaCategory[] => {
        const results: MuhurtaCategory[] = [];

        if (!year) return [];

        // DEBUG LOGGING START
        // console.group('MonthlyMuhurta Debug');
        // console.log(`Checking Muhurtas for: ${isBs ? 'BS' : 'AD'} Year: ${year}, Month Index: ${month}`);
        // DEBUG LOGGING END

        Object.keys(MUHURTA_DATA).forEach(categoryId => {
            const categoryData = MUHURTA_DATA[categoryId];
            const datesSet = new Set<number>();

            if (isBs) {
                const yearData = categoryData[year];

                // Debug specific category
                // if (categoryId === 'marriage') {
                //      console.log(`Marriage Data for Year ${year}:`, yearData ? 'Found' : 'Missing');
                //      if (yearData) console.log(`Marriage Data for Month ${month}:`, yearData[month]);
                // }

                if (yearData) {
                    const monthDates = yearData[month];
                    if (monthDates && Array.isArray(monthDates)) {
                        monthDates.forEach(d => datesSet.add(d));
                    }
                }
            } else {
                const lastDay = new Date(Date.UTC(year, month + 1, 0));

                for (let day = 1; day <= lastDay.getUTCDate(); day++) {
                    const date = new Date(Date.UTC(year, month, day));
                    const bsDate = toBikramSambat(date);

                    const bsYearData = categoryData[bsDate.year];
                    if (bsYearData) {
                        const bsMonthDates = bsYearData[bsDate.monthIndex];
                        if (bsMonthDates && bsMonthDates.includes(bsDate.day)) {
                            datesSet.add(day);
                        }
                    }
                }
            }

            if (datesSet.size > 0) {
                const info = EVENT_CATEGORIES[categoryId] || { titleAd: categoryId, titleBs: categoryId };
                results.push({
                    id: categoryId,
                    titleAd: info.titleAd,
                    titleBs: info.titleBs,
                    dates: Array.from(datesSet).sort((a, b) => a - b)
                });
            }
        });

        // console.log('Final Results found:', results.length);
        // console.groupEnd();

        return results;
    };

    const muhurtaData = useMemo(() => {
        if (currentYear === null) return [];
        return getMuhurtasFromData(currentYear, currentMonth, activeSystem === 'bs');
    }, [activeSystem, currentYear, currentMonth]);

    const isBs = activeSystem === 'bs';
    const currentMonthName = isBs
        ? NEPALI_BS_MONTHS[currentMonth]
        : ENGLISH_MONTHS[currentMonth];

    const headerTitle = isBs
        ? `${currentMonthName} महिनाको शुभ साइत / मुहुर्तहरु`
        : `Auspicous Muhurats for ${currentMonthName}`;

    if (muhurtaData.length === 0) {
        return (
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 text-center">
                <h4 className="font-bold text-gray-400 text-xs mb-1">{headerTitle}</h4>
                <p className="text-gray-500 dark:text-gray-400 text-xs" style={{ fontFamily: isBs ? "'Noto Sans Devanagari', sans-serif" : 'inherit' }}>
                    {isBs ? `यो महिना (${currentMonthName}) कुनै विशेष मुहुर्त फेला परेन।` : `No specific muhurats found for ${currentMonthName}.`}
                </p>
            </div>
        );
    }

    return (
        <div className="bg-indigo-50/30 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden shadow-card-custom shadow-blue-50/50">
            <div className="bg-[rgb(37_99_235)] dark:bg-gray-700/50 px-5 py-3 border-b border-blue-800 dark:border-gray-700">
                <h2
                    className="text-lg sm:text-xl font-bold text-white dark:text-gray-100"
                    style={{ fontFamily: isBs ? "'Noto Sans Devanagari', sans-serif" : 'inherit' }}
                >
                    {headerTitle}
                </h2>
            </div>

            <div className="flex flex-col gap-2 p-4">
                {muhurtaData.map((category) => (
                    <div key={category.id} className="p-4 bg-indigo-50 dark:bg-gray-700/30 rounded-lg border border-blue-200 dark:border-gray-700 shadow-sm shadow-blue-100 dark:shadow-none hover:shadow-md transition-all">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-red-500 dark:bg-red-400"></span>
                                <span
                                    className="font-bold text-red-600 dark:text-red-400 text-base"
                                    style={{ fontFamily: isBs ? "'Noto Sans Devanagari', sans-serif" : 'inherit' }}
                                >
                                    {isBs ? category.titleBs : category.titleAd}
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-2 pl-4">
                                {category.dates.map((day) => (
                                    <span
                                        key={day}
                                        className="inline-flex items-center px-2.5 py-1 rounded-full text-[14px] font-semibold bg-green-50 text-green-700 border border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800 shadow-sm"
                                        style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                                    >
                                        {isBs ? toDevanagari(day) : day}
                                        <span className="ml-1 opacity-70 text-[13px] font-normal">
                                            {isBs ? 'गते' : ':'}
                                        </span>
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default MonthlyMuhurta;

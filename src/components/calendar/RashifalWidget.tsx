import React, { useMemo } from 'react';
import { HeaderLogo } from './HeaderLogo';
import { Star } from 'lucide-react';
import { generateDailyRashifal } from '../../lib/utils/rashifalLogic';

interface RashifalWidgetProps {
    date: string; // Display string e.g. "२०८२ पौष २७"
    dateKey: string; // Unique key for seeding e.g. "2082-9-27"
    tithi?: string;
    nakshatra?: string;
}


const RashiCard: React.FC<{ data: ReturnType<typeof generateDailyRashifal>[0] }> = ({ data }) => {
    return (
        <div className="bg-white dark:bg-gray-700/50 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-600 flex gap-4 items-start">
            {/* Left Side: Icon & Name */}
            <div className="flex flex-col items-center justify-center w-24 flex-shrink-0 border-r border-gray-100 dark:border-gray-600 pr-3">
                <img
                    src={`/img/rashi/${data.img}`}
                    alt={data.name}
                    className="w-12 h-12 object-contain mb-2 drop-shadow-sm"
                />

                <h3 className="text-lg font-bold text-red-600 dark:text-red-400 leading-none mb-1">
                    {data.name}
                </h3>

                <p className="text-[9px] text-gray-500 dark:text-gray-400 text-center leading-tight mt-1">
                    {data.syllables}
                </p>

                <div className="flex gap-0.5 mt-2">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={10}
                            className={`${i < data.rating ? "fill-red-500 text-red-500" : "fill-gray-200 text-gray-200 dark:text-gray-600"}`}
                        />
                    ))}
                </div>
            </div>

            {/* Right Side: Prediction */}
            <div className="flex-grow pt-1">
                <p className="text-sm text-gray-800 dark:text-gray-200 leading-relaxed font-medium" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                    {data.prediction}
                </p>
            </div>
        </div>
    );
};

export const RashifalWidget: React.FC<RashifalWidgetProps> = ({ date, dateKey, tithi, nakshatra }) => {

    // Generate data based on props
    const rashiData = useMemo(() => {
        return generateDailyRashifal(dateKey, tithi, nakshatra);
    }, [dateKey, tithi, nakshatra]);

    return (
        <div className="w-full mt-6">
            {/* Header Section */}
            <div className="bg-white dark:bg-gray-800 rounded-t-xl border border-gray-200 dark:border-gray-700 p-4 pb-6 relative overflow-hidden">
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

            {/* List of Cards */}
            <div className="bg-[#fef8f6] dark:bg-gray-800 border-x border-b border-gray-200 dark:border-gray-700 rounded-b-xl p-4 space-y-3">
                {rashiData.map((rashi) => (
                    <RashiCard key={rashi.id} data={rashi} />
                ))}
            </div>
        </div>
    );
};

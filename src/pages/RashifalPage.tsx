import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { RashifalWidget } from '../components/calendar/RashifalWidget';

interface RashifalPageProps {
    onBack: () => void;
    date: string;
    dateKey: string;
    tithi?: string;
    nakshatra?: string;
    moonRashi?: string;
}

const RashifalPage: React.FC<RashifalPageProps> = ({ onBack, date, dateKey, tithi, nakshatra, moonRashi }) => {
    return (
        <div className="min-h-screen bg-slate-100 dark:bg-gray-900 pb-20">
            {/* Header with Back Button */}
            <div className="bg-white dark:bg-gray-800 sticky top-0 z-10 px-4 py-3 border-b border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-3">
                <button
                    onClick={onBack}
                    className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    राशिफल
                </h1>
            </div>

            {/* Content */}
            <div className="p-4 max-w-2xl mx-auto">
                <RashifalWidget
                    date={date}
                    dateKey={dateKey}
                    tithi={tithi}
                    nakshatra={nakshatra}
                // moonRashi={moonRashi} // RashifalWidget might not accept moonRashi based on my read of it? 
                // Let me check the file content of RashifalWidget in previous turns. 
                // Step 26: interface RashifalWidgetProps { date: string; dateKey: string; tithi?: string; nakshatra?: string; }
                // It doesn't seem to take moonRashi in the interface, but line 207 in App.tsx passes it. 
                // "moonRashi={todayDetails?.moonRashi}" 
                // Check Step 26 again. YES, line 54: export const RashifalWidget: React.FC<RashifalWidgetProps> = ({ date, dateKey, tithi, nakshatra }) => { 
                // It DOES NOT take moonRashi. So it's unused in the component but passed in App.tsx. 
                // I will omit it here effectively or pass it if I want to match App.tsx (but it won't do anything).
                // I'll stick to the interface.
                />
            </div>
        </div>
    );
};

export default RashifalPage;

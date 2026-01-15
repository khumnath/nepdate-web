import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { SocialMedia } from '../components/calendar/SocialMedia';

interface FacebookPageProps {
    onBack: () => void;
}

const FacebookPage: React.FC<FacebookPageProps> = ({ onBack }) => {
    return (
        <div className="min-h-screen bg-slate-100 dark:bg-gray-900 pb-20">
            {/* Header */}
            <div className="bg-white dark:bg-gray-800 sticky top-0 z-10 px-4 py-3 border-b border-gray-200 dark:border-gray-700 shadow-sm flex items-center gap-3">
                <button
                    onClick={onBack}
                    className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
                >
                    <ArrowLeft className="w-6 h-6" />
                </button>
                <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
                    हाम्रो फेसबुक पेज
                </h1>
            </div>

            {/* Content */}
            <div className="p-4 max-w-2xl mx-auto flex flex-col gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 text-center">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        हाम्रो फेसबुक पेज लाइक गरेर अपडेट रहनुहोस्।
                    </p>
                    <SocialMedia />
                </div>
            </div>
        </div>
    );
};

export default FacebookPage;

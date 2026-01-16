import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Converter from '../components/calendar/Converter';
import { NEPALI_LABELS } from '../constants/constants';

interface ConverterPageProps {
  onBack: () => void;
}

const ConverterPage: React.FC<ConverterPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-gray-900 pb-20">
      {/* Header with Back Button */}
      <div className="bg-[rgb(37_99_235)] dark:bg-gray-800 sticky top-0 z-10 px-4 py-3 border-b border-blue-800 dark:border-gray-700 shadow-sm flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 -ml-2 rounded-full hover:bg-blue-700 dark:hover:bg-gray-700 text-white dark:text-gray-300 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-white dark:text-gray-100">
          {NEPALI_LABELS.converter}
        </h1>
      </div>

      {/* Content */}
      <div className="w-full max-w-3xl mx-auto px-2 sm:px-4 py-4">
        <Converter onBack={onBack} />
      </div>
    </div>
  );
};

export default ConverterPage;

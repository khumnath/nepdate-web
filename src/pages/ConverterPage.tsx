import React from 'react';
import Converter from '../components/calendar/Converter';
import { NEPALI_LABELS } from '../constants/constants';

interface ConverterPageProps {
  onBack: () => void;
}

const ConverterPage: React.FC<ConverterPageProps> = ({ onBack }) => {
  return (
    <main className="flex-1 flex flex-col overflow-hidden px-2 sm:px-4 md:px-6 lg:px-40 max-w-7xl mx-auto w-full">
      <div className="min-h-screen p-4 sm:p-6 md:p-8">
        <div className="flex items-center mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-3 py-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {NEPALI_LABELS.returnTomain}
          </button>
        </div>
        <Converter onBack={onBack} />
      </div>
    </main>
  );
};

export default ConverterPage;
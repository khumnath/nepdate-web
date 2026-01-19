import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import Converter from '../components/calendar/Converter';
import { NEPALI_LABELS } from '../constants/constants';

interface ConverterPageProps {
  onBack: () => void;
}

const ConverterPage: React.FC<ConverterPageProps> = ({ onBack }) => {
  return (
    <div className="h-full bg-slate-100 dark:bg-gray-900 flex flex-col overflow-hidden">
      <PageHeader title={NEPALI_LABELS.converter} onBack={onBack} />

      {/* Content */}
      <div className="flex-1 overflow-y-auto w-full">
        <div className="max-w-3xl mx-auto px-2 sm:px-4 py-4 pb-20">
          <Converter/>
        </div>
      </div>
    </div>
  );
};

export default ConverterPage;

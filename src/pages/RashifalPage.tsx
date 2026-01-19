import React from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { RashifalWidget } from '../components/calendar/RashifalWidget';

interface RashifalPageProps {
  onBack: () => void;
  date: string;
  dateKey: string;
  tithi?: string;
  nakshatra?: string;
  moonRashi?: string;
  param?: string; // e.g. 'mesh', 'brish'
}

const RashifalPage: React.FC<RashifalPageProps> = ({ onBack, date, dateKey, tithi, nakshatra, param }) => {
  return (
    <div className="h-full bg-slate-100 dark:bg-gray-900 flex flex-col overflow-hidden">
      <PageHeader title="राशिफल" onBack={onBack} />

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-20 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Disclaimer */}
          <div className="bg-blue-50 dark:bg-gray-800/50 border border-blue-100 dark:border-gray-700 rounded-xl p-4 mb-6 shadow-sm">
            <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed italic">
              यो राशिफल परम्परागत ज्योतिषीय गणना (ग्रह र चन्द्रमाको स्थिति) मा आधारित छ। राशिफलमा जे लेखिए तापनि कडा परिश्रम, सावधानी र सकारात्मकताले जुनसुकै दिनलाई पनि फलदायी बनाउन सकिन्छ। यी भविष्यवाणीहरूलाई अनुशरण गर्दा हुने कुनै पनि परिणामका लागि हामी जिम्मेवार हुने छैनौं।
            </p>
          </div>

          <RashifalWidget
            date={date}
            dateKey={dateKey}
            tithi={tithi}
            nakshatra={nakshatra}
            selectedRashi={param}
          />
        </div>
      </div>
    </div>
  );
};

export default RashifalPage;

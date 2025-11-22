import React from 'react';
import Converter from '../components/calendar/Converter';

interface ConverterPageProps {
  onBack: () => void;
}

const ConverterPage: React.FC<ConverterPageProps> = ({ onBack }) => {
  return (
    <main className="w-full max-w-3xl mx-auto flex-1 flex flex-col px-2 sm:px-4 pt-3 pb-6">
      <Converter onBack={onBack} />
    </main>
  );
};

export default ConverterPage;

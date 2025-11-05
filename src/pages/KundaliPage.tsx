import React, { useState, useCallback, useEffect } from 'react';
import { KundaliForm } from '../components/kundali/KundaliForm';
import { KundaliDisplay } from '../components/kundali/KundaliDisplay';
import { ComparisonForm } from '../components/kundali/ComparisonForm';
import { ComparisonDisplay } from '../components/kundali/ComparisonDisplay';
import { kundaliService } from '../../services/kundaliService';
import type { KundaliResponse, ComparisonResult } from '../../types/types';
import { NEPALI_LABELS } from '../constants/constants';
import type { KundaliRequest } from '../../types/types';


type AppMode = 'individual' | 'comparison';

type KundaliPageProps = {
  onBack: () => void;
};

// Toggle switcher for individual/comparison mode
const ModeSwitcher: React.FC<{ mode: AppMode; onModeChange: (mode: AppMode) => void }> = ({ mode, onModeChange }) => {
  return (
    <div className="relative flex w-full max-w-sm mx-auto p-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-6">
      <span
        className="absolute inset-0 w-1/2 bg-blue-500 rounded-full shadow-md transition-transform duration-300 ease-in-out"
        style={{ transform: mode === 'individual' ? 'translateX(0%)' : 'translateX(100%)' }}
      />
      <button
        type="button"
        onClick={() => onModeChange('individual')}
        className={`relative w-1/2 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${mode === 'individual' ? 'text-white' : 'text-gray-600 dark:text-gray-300'
          }`}
      >
        {NEPALI_LABELS.individual}
      </button>
      <button
        type="button"
        onClick={() => onModeChange('comparison')}
        className={`relative w-1/2 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${mode === 'comparison' ? 'text-white' : 'text-gray-600 dark:text-gray-300'
          }`}
      >
        {NEPALI_LABELS.comparison}
      </button>
    </div>
  );
};

export const KundaliPage: React.FC<KundaliPageProps> = ({ onBack }) => {
  const [mode, setMode] = useState<AppMode>('individual');
  const [kundaliData, setKundaliData] = useState<KundaliResponse | null>(null);
  const [comparisonData, setComparisonData] = useState<ComparisonResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleReturnToForm = useCallback(() => {
    setKundaliData(null);
    setComparisonData(null);
    setIsLoading(false);
    setError(null);
  }, []); // Removed onBack from dependency array

  // Handle browser back button
  useEffect(() => {
    const onPopState = () => {
      // Check if we are showing results
      if (kundaliData || comparisonData || error) {
        // If so, popstate should return to form
        handleReturnToForm();
      } else {
        // If we are on the form, popstate should go back to calendar
        onBack();
      }
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [handleReturnToForm, onBack, kundaliData, comparisonData, error]);

  // Push history state when showing results
  useEffect(() => {
    const hasResult = kundaliData || comparisonData || error;
    if (hasResult && window.history.state?.appState !== 'result') {
      window.history.pushState({ appState: 'result' }, '');
    }
  }, [kundaliData, comparisonData, error]);

  const handleReturnClick = () => {
    if (window.history.state?.appState === 'result') {
      window.history.back();
    } else {
      handleReturnToForm();
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[300px]">
          <svg className="animate-spin h-10 w-10 text-amber-800 dark:text-amber-400 mb-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
          </svg>
          <div className="text-lg font-semibold text-amber-800 dark:text-amber-400">
            {NEPALI_LABELS.calculating}
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="mt-4 bg-red-50 dark:bg-red-900/30 rounded-lg text-center p-4">
          <div className="flex flex-col items-center justify-center">
            <svg
              className="w-16 h-16 text-red-500 dark:text-red-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <p className="mt-4 text-xl text-red-700 dark:text-red-400">{error}</p>
            <button
              className="mt-4 text-blue-600 dark:text-blue-400 underline"
              onClick={handleReturnClick}
            >
              {NEPALI_LABELS.returnToForm}
            </button>
          </div>
        </div>
      );
    }

    if (kundaliData) {
      return <KundaliDisplay data={kundaliData} onReturnToForm={handleReturnClick} />;
    }

    if (comparisonData) {
      return <ComparisonDisplay result={comparisonData} onReturnToForm={handleReturnClick} />;
    }

    // Default: show forms
    return (
      <>
        <ModeSwitcher mode={mode} onModeChange={setMode} />
        {mode === 'comparison' ? (
          <ComparisonForm
            onCalculate={async (groomData, brideData) => {
              setIsLoading(true);
              setError(null);
              const delayPromise = new Promise(resolve => setTimeout(resolve, 3000));
              const calculationPromise = kundaliService.getComparison(groomData, brideData);
              const [, response] = await Promise.all([delayPromise, calculationPromise]);

              if ('error' in response) {
                setError(response.error);
              } else {
                setComparisonData(response);
              }
              setIsLoading(false);
            }}
            isLoading={isLoading}
          />
        ) : (
          // In KundaliPage
<KundaliForm
  onCalculate={async (data: KundaliRequest | null) => {
    if (!data) return; // guard against null
    setIsLoading(true);
    setError(null);
    const delayPromise = new Promise(resolve => setTimeout(resolve, 2000));
    const calculationPromise = kundaliService.getKundali(data);
    const [, response] = await Promise.all([delayPromise, calculationPromise]);

    if ('error' in response) {
      setError(response.error);
    } else {
      setKundaliData(response);
    }
    setIsLoading(false);
  }}
  isLoading={isLoading}
/>

        )}
      </>
    );
  };

  return (
    <main className="flex-1 flex flex-col overflow-hidden px-2 md:px-3 max-w-7xl mx-auto w-full bg-slate-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100 transition-colors">
      <div className="min-h-max sm:p-6 md:p-6 lg:p-8">
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

        <div className="flex justify-center text-base mb-4 font-bold text-gray-500 dark:text-gray-400">
          {NEPALI_LABELS.Software_name}: {NEPALI_LABELS.Software_version}
        </div>

        {renderContent()}
      </div>
    </main>
  );
};

export default KundaliPage;

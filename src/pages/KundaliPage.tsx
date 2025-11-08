import React, { useState, useCallback, useEffect } from 'react';
import { KundaliForm } from '../components/kundali/KundaliForm';
import { KundaliDisplay } from '../components/kundali/KundaliDisplay';
import { ComparisonForm } from '../components/kundali/ComparisonForm';
import { ComparisonDisplay } from '../components/kundali/ComparisonDisplay';
import { SavedKundalisModal } from '../components/kundali/SavedKundalisModel';
import { kundaliService } from '../../services/kundaliService';
import type { KundaliResponse, ComparisonResult, KundaliRequest, SavedKundaliEntry, DefaultFormValues, Location } from '../types/types';
import { NEPALI_LABELS } from '../constants/constants';
import { toBikramSambat } from '../lib/utils/lib';
import { nepaliLocations } from '../data/timezone';


type AppMode = 'individual' | 'comparison' | 'saved';

// Helper to find location object from coordinates
const findLocation = (lat: number, lon: number): Location | undefined => {
    return nepaliLocations.find(loc => loc.latitude === lat && loc.longitude === lon);
};

// Helper to convert request data back to form default values
const convertRequestToDefaults = (req: KundaliRequest): DefaultFormValues => {
    const date = new Date(req.datetime);
    const bsDate = toBikramSambat(date);
    const hour24 = date.getHours();
    const period = hour24 >= 12 ? 'PM' : 'AM';
    let hour12 = hour24 % 12;
    if (hour12 === 0) hour12 = 12;
    
    const location = findLocation(req.latitude, req.longitude) || {
        name: `${req.latitude.toFixed(4)}, ${req.longitude.toFixed(4)}`,
        romanization: 'Manual Selection',
        latitude: req.latitude,
        longitude: req.longitude,
        zoneId: req.zoneId,
        offset: req.offset
    };

    return {
        name: req.name,
        dateSystem: 'BS', // Default to BS on load
        bsYear: bsDate.year,
        bsMonth: bsDate.monthIndex + 1,
        bsDay: bsDate.day,
        hour: hour12,
        minute: date.getMinutes(),
        second: date.getSeconds(),
        period: period,
        location: location
    };
};

const ModeSwitcher: React.FC<{ mode: AppMode; onModeChange: (mode: AppMode) => void }> = ({ mode, onModeChange }) => {
  const getTransform = () => {
    if (mode === 'individual') return 'translateX(0%)';
    if (mode === 'comparison') return 'translateX(100%)';
    return 'translateX(200%)';
  };
  return (
    <div className="relative flex w-full max-w-md mx-auto p-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-6">
      <span
        className="absolute inset-y-0 w-1/3 bg-blue-500 rounded-full shadow-md transition-transform duration-300 ease-in-out"
        style={{ transform: getTransform() }}
      />
      <button
        type="button"
        onClick={() => onModeChange('individual')}
        className={`relative w-1/3 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${mode === 'individual' ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}
      >
        {NEPALI_LABELS.individual}
      </button>
      <button
        type="button"
        onClick={() => onModeChange('comparison')}
        className={`relative w-1/3 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${mode === 'comparison' ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}
      >
        {NEPALI_LABELS.comparison}
      </button>
      <button
        type="button"
        onClick={() => onModeChange('saved')}
        className={`relative w-1/3 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${mode === 'saved' ? 'text-white' : 'text-gray-600 dark:text-gray-300'}`}
      >
        {NEPALI_LABELS.saved}
      </button>
    </div>
  );
};

type KundaliPageProps = {
  onBack: () => void;
  setIsKundaliResultsVisible: (isVisible: boolean) => void;
  setKundaliBackAction: (action: () => void) => void;
};

export const KundaliPage: React.FC<KundaliPageProps> = ({ onBack, setIsKundaliResultsVisible, setKundaliBackAction }) => { 
  const [mode, setMode] = useState<AppMode>('individual');
  const [kundaliData, setKundaliData] = useState<KundaliResponse | null>(null);
  const [comparisonData, setComparisonData] = useState<ComparisonResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSavedModal, setShowSavedModal] = useState(false);
  
  const [defaultFormData, setDefaultFormData] = useState<any>(null);
  const [formKey, setFormKey] = useState(Date.now());

  // Sync KundaliPage's internal state with parent navigation hook
  useEffect(() => {
    const areResultsOrSubViewVisible = kundaliData !== null || comparisonData !== null || error !== null || showSavedModal;
    setIsKundaliResultsVisible(areResultsOrSubViewVisible);
  }, [kundaliData, comparisonData, error, showSavedModal, setIsKundaliResultsVisible]);

  // Callback to return to form, memoized
  const handleReturnToForm = useCallback(() => {
    setKundaliData(null);
    setComparisonData(null);
    setIsLoading(false);
    setError(null);
    setDefaultFormData(null);
  }, []);

  useEffect(() => {
    setKundaliBackAction(handleReturnToForm);
    return () => setKundaliBackAction(() => {});
  }, [setKundaliBackAction, handleReturnToForm]);

  useEffect(() => {
    if (mode === 'saved') {
      setShowSavedModal(true);
    } else {
      setShowSavedModal(false);
    }
  }, [mode]);

  const handleBackClick = () => {
    if (kundaliData || comparisonData || error || showSavedModal) {
      handleReturnToForm();
    } else {
      onBack();
    }
  };

  const handleSaveData = (type: 'individual' | 'comparison', data: any) => {
    try {
        let saved: SavedKundaliEntry[] = JSON.parse(localStorage.getItem('savedKundalis') || '[]');
        let newEntry: SavedKundaliEntry;
        let existingIndex = -1;

        if (type === 'individual') {
            const req = data as KundaliRequest;
            existingIndex = saved.findIndex(entry => entry.type === 'individual' && entry.name === req.name);
            newEntry = {
                id: existingIndex !== -1 ? saved[existingIndex].id : Date.now(),
                type: 'individual', name: req.name, timestamp: new Date().toISOString(),
                data: req, defaultValues: convertRequestToDefaults(req)
            };
        } else {
            const { groom, bride } = data as { groom: KundaliRequest, bride: KundaliRequest };
            existingIndex = saved.findIndex(entry => 
                entry.type === 'comparison' && entry.groomName === groom.name && entry.brideName === bride.name);
            newEntry = {
                id: existingIndex !== -1 ? saved[existingIndex].id : Date.now(),
                type: 'comparison', groomName: groom.name, brideName: bride.name, timestamp: new Date().toISOString(),
                data: { groom, bride }, defaultValues: { groom: convertRequestToDefaults(groom), bride: convertRequestToDefaults(bride) }
            };
        }

        if (existingIndex !== -1) saved.splice(existingIndex, 1);
        
        const updatedSaved = [newEntry, ...saved].slice(0, 10);
        localStorage.setItem('savedKundalis', JSON.stringify(updatedSaved));
    } catch (e) { console.error("Failed to save data:", e); }
  };

  const handleEditEntry = (entry: SavedKundaliEntry) => {
    if (entry.type === 'individual') {
        setDefaultFormData({ individual: entry.defaultValues });
        setMode('individual');
    } else {
        setDefaultFormData({ groom: entry.defaultValues.groom, bride: entry.defaultValues.bride });
        setMode('comparison');
    }
    setFormKey(Date.now());
    setShowSavedModal(false);
  };

  const handleViewEntry = async (entry: SavedKundaliEntry) => {
    setShowSavedModal(false);
    setIsLoading(true);
    setError(null);
    
    const delay = new Promise(res => setTimeout(res, 1000));
    
    try {
      if (entry.type === 'individual') {
        const calculation = kundaliService.getKundali(entry.data);
        const [_, response] = await Promise.all([delay, calculation]);
        if ('error' in response) {
          setError(response.error);
        } else {
          setKundaliData(response);
          handleSaveData('individual', entry.data);
        }
      } else { // comparison
        const calculation = kundaliService.getComparison(entry.data.groom, entry.data.bride);
        const [_, response] = await Promise.all([delay, calculation]);
        if ('error' in response) {
          setError(response.error);
        } else {
          setComparisonData(response);
          handleSaveData('comparison', entry.data);
        }
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An unexpected error occurred.');
    } finally {
      setIsLoading(false);
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
          <div className="text-lg font-semibold text-amber-800 dark:text-amber-400">{NEPALI_LABELS.calculating}</div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="mt-4 bg-red-50 dark:bg-red-900/30 rounded-lg text-center p-4">
          <div className="flex flex-col items-center justify-center">
            <svg className="w-16 h-16 text-red-500 dark:text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <p className="mt-4 text-xl text-red-700 dark:text-red-400">{error}</p>
            <button className="mt-4 text-blue-600 dark:text-blue-400 underline" onClick={handleBackClick}>{NEPALI_LABELS.returnToForm}</button>
          </div>
        </div>
      );
    }

    if (kundaliData) {
      return <KundaliDisplay data={kundaliData} onReturnToForm={handleBackClick} />;
    }

    if (comparisonData) {
      return <ComparisonDisplay result={comparisonData} onReturnToForm={handleBackClick} />;
    }

    return (
      <>
        <ModeSwitcher mode={mode} onModeChange={(newMode) => {
            if (newMode === 'saved') { setShowSavedModal(true); } 
            else { setMode(newMode); }
        }} />
        {mode === 'comparison' ? (
          <ComparisonForm
            key={formKey}
            onCalculate={async (groomData, brideData) => {
              setIsLoading(true); setError(null);
              const delay = new Promise(res => setTimeout(res, 1000));
              const calculation = kundaliService.getComparison(groomData, brideData);
              const [_, response] = await Promise.all([delay, calculation]);

              if ('error' in response) { setError(response.error); } 
              else {
                handleSaveData('comparison', { groom: groomData, bride: brideData });
                setComparisonData(response);
              }
              setIsLoading(false);
            }}
            isLoading={isLoading}
            defaultValues={defaultFormData || {}}
          />
        ) : (
          <KundaliForm
            key={formKey}
            onCalculate={async (data: KundaliRequest) => {
              setIsLoading(true); setError(null);
              const delay = new Promise(res => setTimeout(res, 1000));
              const calculation = kundaliService.getKundali(data);
              const [_, response] = await Promise.all([delay, calculation]);

              if ('error' in response) { setError(response.error); } 
              else {
                handleSaveData('individual', data);
                setKundaliData(response);
              }
              setIsLoading(false);
            }}
            isLoading={isLoading}
            defaultValues={defaultFormData?.individual}
          />
        )}
        {showSavedModal && <SavedKundalisModal onClose={() => { setShowSavedModal(false); setMode('individual'); }} onEdit={handleEditEntry} onView={handleViewEntry} />}
      </>
    );
  };

  return (
    <main className="flex-1 flex flex-col overflow-hidden px-2 md:px-3 max-w-7xl mx-auto w-full bg-slate-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100 transition-colors">
      <div className="min-h-3 sm:p-6 md:p-6 lg:p-8">
        <div className="flex overflow-hidden print:hidden print:h-0 items-center mb-4">
          <button
            onClick={handleBackClick}
            className="flex return-to-main items-center gap-2 px-3 py-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
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

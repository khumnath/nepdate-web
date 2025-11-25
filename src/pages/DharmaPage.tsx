import React, { useState, useEffect, useCallback } from 'react';
import { Sunrise, Sunset } from 'lucide-react';
import { getSunriseSunset } from '../lib/utils/lib';
// Kathmandu coordinates and timezone
const KATHMANDU = { lat: 27.7172, lon: 85.3240, tz: 5.75 };

import { BookOpen, Calendar, Flame, Music, ChevronLeft, Wind, Sparkles } from 'lucide-react';
import { PujaSection } from '../components/dharma/PujaSection';
import { MantraSection } from '../components/dharma/MantraSection';
import { ChadparbaSection } from '../components/dharma/ChadparbaSection';

type DharmaPageProps = {
  onBack: () => void;
  setDharmaBackAction: (handler: (() => boolean) | null) => void;
};

type PageType = 'MENU' | 'PUJA' | 'MANTRA' | 'CHADPARBA';


const DharmaPage: React.FC<DharmaPageProps> = ({ onBack, setDharmaBackAction }) => {
  const [currentPage, setCurrentPage] = useState<PageType>('MENU');

  // Sunrise/sunset state
  const [sunrise, setSunrise] = useState<string | null>(null);
  const [sunset, setSunset] = useState<string | null>(null);

  useEffect(() => {
    // Get current date in UTC, but use Kathmandu's date (not local system date)
    const now = new Date();
    // Convert to Kathmandu date (YYYY-MM-DD in Kathmandu)
    const kathmanduOffset = KATHMANDU.tz * 60; // in minutes
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const kathmanduTime = new Date(utc + kathmanduOffset * 60000);
    // Use only the date part (midnight in Kathmandu)
    const kathmanduDate = new Date(kathmanduTime.getFullYear(), kathmanduTime.getMonth(), kathmanduTime.getDate());
    const sun = getSunriseSunset(kathmanduDate, KATHMANDU.lat, KATHMANDU.lon, KATHMANDU.tz);
    setSunrise(sun.sunriseFormatted || sun.sunrise || null);
    setSunset(sun.sunsetFormatted || sun.sunset || null);
  }, []);

  // Stable back handler
  const handleInternalBack = useCallback((): boolean => {
    if (currentPage !== 'MENU') {
      setCurrentPage('MENU');
      return true; // handled internally
    }
    onBack(); // go back to calendar
    return true;
  }, [currentPage, onBack]);

  // Set back action once and always use the stable function
  useEffect(() => {
    setDharmaBackAction(handleInternalBack);
    return () => setDharmaBackAction(null);
  }, [handleInternalBack, setDharmaBackAction]);

  if (currentPage === 'PUJA') return <PujaSection onBack={() => setCurrentPage('MENU')} />;
  if (currentPage === 'MANTRA') return <MantraSection onBack={() => setCurrentPage('MENU')} />;
  if (currentPage === 'CHADPARBA') return <ChadparbaSection onBack={() => setCurrentPage('MENU')} />;

  return (
    <div className="flex-1 flex flex-col w-full h-full bg-slate-100 dark:bg-gray-900 transition-colors">
      <div className="bg-white dark:bg-gray-800 px-4 py-3 shadow-sm flex items-center gap-3 sticky top-0 z-10 border-b border-gray-100 dark:border-gray-700">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
        </button>
        <h1 className="font-bold text-lg text-gray-800 dark:text-gray-100">धर्म र संस्कृति</h1>
      </div>

  <div className="flex-1 overflow-y-auto p-4 md:p-6 pb-[8.5rem]">
        <div className="max-w-4xl mx-auto w-full">
          <div className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="absolute right-[-10px] top-[-10px] opacity-10"><Wind size={100} /></div>
            <div className="relative z-10">
              <h2 className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2 flex items-center gap-1">
                <Sparkles size={12} /> सुविचार
              </h2>
              <p className="font-serif text-lg leading-relaxed italic">
                "धर्म भनेको मन्दिरमा गएर पूजा गर्नु मात्र होइन, आफ्नो कर्तव्य इमान्दारीपूर्वक पूरा गर्नु हो।"
              </p>
            </div>
          </div>

          <h2 className="font-bold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5" /> अध्ययन सामाग्री
          </h2>

          <div className="grid grid-cols-2 gap-4">
            <div
              onClick={() => setCurrentPage('PUJA')}
              className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center gap-3 cursor-pointer hover:shadow-md hover:border-orange-200 transition-all active:scale-95 group"
            >
              <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/20 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform">
                <Flame size={28} />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-gray-100">पूजा विधि</h3>
            </div>

            <div
              onClick={() => setCurrentPage('MANTRA')}
              className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center gap-3 cursor-pointer hover:shadow-md hover:border-purple-200 transition-all active:scale-95 group"
            >
              <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform">
                <Music size={28} />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-gray-100">मन्त्र</h3>
            </div>

            <div
              onClick={() => setCurrentPage('CHADPARBA')}
              className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center gap-3 cursor-pointer hover:shadow-md hover:border-red-200 transition-all active:scale-95 group"
            >
              <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform">
                <Calendar size={28} />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-gray-100">चाडपर्व</h3>
            </div>
          </div>
        </div>
        {/* Sunrise/Sunset at bottom */}
  <div className="fixed left-0 right-0 w-full bg-white/90 dark:bg-gray-900/90 border-t border-gray-200 dark:border-gray-700 py-3 px-4 flex justify-center gap-8 z-20 shadow-lg" style={{ bottom: '4rem' }}>
          <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
            <Sunrise className="w-5 h-5" />
            <span className="font-semibold">सुर्य उदय:</span>
            <span>{sunrise || '--'}</span>
          </div>
          <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400">
            <Sunset className="w-5 h-5" />
            <span className="font-semibold">सुर्य अस्त:</span>
            <span>{sunset || '--'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DharmaPage;

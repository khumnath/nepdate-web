import React, { useState, useEffect, useCallback } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Sunrise, Sunset, BookOpen, Calendar, Flame, Music, Wind, Sparkles } from 'lucide-react';
import { BlogWidget } from '../components/blog/BlogWidget';
import { getSunriseSunset } from '../lib/utils/lib';
import { getNepalDate } from '../lib/utils/appUtils';
import { PujaSection } from '../components/dharma/PujaSection';
import { MantraSection } from '../components/dharma/MantraSection';
import { ChadparbaSection } from '../components/dharma/ChadparbaSection';

const KATHMANDU = { lat: 27.7172, lon: 85.3240, tz: 5.75 };
type PageType = 'MENU' | 'PUJA' | 'MANTRA' | 'CHADPARBA';

type DharmaPageProps = {
  onBack: () => void;
  setIsDharmaResultsVisible: (isVisible: boolean) => void;
  setDharmaBackAction: (action: () => void) => void;
  onNavigate?: (view: string, params?: any) => void;
  activeSystem?: 'bs' | 'ad';
  currentYear?: number;
  currentMonth?: number;
  tag?: string;
};

export const DharmaPage: React.FC<DharmaPageProps> = ({
  onBack,
  setIsDharmaResultsVisible,
  setDharmaBackAction,
  onNavigate,
  activeSystem = 'bs',
  currentYear = 2081,
  currentMonth = 0,
  tag
}) => {
  const [currentPage, setCurrentPage] = useState<PageType>('MENU');
  const [sunrise, setSunrise] = useState<string | null>(null);
  const [sunset, setSunset] = useState<string | null>(null);

  // Initial Data Load
  useEffect(() => {
    const ktmDate = getNepalDate();
    const sun = getSunriseSunset(ktmDate, KATHMANDU.lat, KATHMANDU.lon, KATHMANDU.tz);
    setSunrise(sun.sunriseFormatted || sun.sunrise || null);
    setSunset(sun.sunsetFormatted || sun.sunset || null);
  }, []);

  // Sync Visibility with Parent
  // If currentPage is NOT 'MENU', we consider "Results" to be visible
  useEffect(() => {
    setIsDharmaResultsVisible(currentPage !== 'MENU');
  }, [currentPage, setIsDharmaResultsVisible]);

  // Define Internal Back Action
  const handleReturnToMenu = useCallback(() => {
    setCurrentPage('MENU');
  }, []);

  // Register Back Action with Parent
  useEffect(() => {
    setDharmaBackAction(handleReturnToMenu);
    return () => setDharmaBackAction(() => { });
  }, [handleReturnToMenu, setDharmaBackAction]);

  // UI Back Button Handler
  const handleBackClick = () => {
    if (currentPage !== 'MENU') {
      handleReturnToMenu();
    } else {
      onBack();
    }
  };

  const renderContent = () => {
    // Child Pages
    if (currentPage === 'PUJA') return <PujaSection onBack={handleBackClick} />;
    if (currentPage === 'MANTRA') return <MantraSection onBack={handleBackClick} />;
    if (currentPage === 'CHADPARBA') return <ChadparbaSection onBack={handleBackClick} />;

    // Menu Page
    return (
      <div className="h-full bg-slate-100 dark:bg-gray-900 flex flex-col overflow-hidden">
        <PageHeader title="धर्म र संस्कृति" onBack={onBack} />

        <div className="flex-1 overflow-y-auto pb-[6rem] p-4 md:p-6">
          <div className="max-w-4xl mx-auto w-full">
            {/* Quote Box */}
            <div className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
              <div className="absolute right-[-10px] top-[-10px] opacity-10">
                <Wind size={100} />
              </div>
              <div className="relative z-10">
                <h2 className="text-xs font-bold text-blue-200 uppercase tracking-wider mb-2 flex items-center gap-1"><Sparkles size={12} /> सुविचार</h2>
                <p className="font-serif text-lg leading-relaxed italic">"धर्म भनेको मन्दिरमा गएर पूजा गर्नु मात्र होइन, आफ्नो कर्तव्य इमान्दारीपूर्वक पूरा गर्नु हो।"</p>
              </div>
            </div>

            {/* Menu Buttons */}
            <h2 className="font-bold text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2"><BookOpen className="w-5 h-5" /> अध्ययन सामाग्री</h2>

            <div className="grid grid-cols-2 gap-4">
              <div onClick={() => setCurrentPage('PUJA')} className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center gap-3 cursor-pointer hover:shadow-md hover:border-orange-200 transition-all active:scale-95 group">
                <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/20 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 group-hover:scale-110 transition-transform"><Flame size={28} /></div>
                <h3 className="font-bold text-gray-800 dark:text-gray-100">पूजा विधि</h3>
              </div>
              <div onClick={() => setCurrentPage('MANTRA')} className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center gap-3 cursor-pointer hover:shadow-md hover:border-purple-200 transition-all active:scale-95 group">
                <div className="w-14 h-14 bg-purple-50 dark:bg-purple-900/20 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform"><Music size={28} /></div>
                <h3 className="font-bold text-gray-800 dark:text-gray-100">मन्त्र/स्तोत्र</h3>
              </div>
              <div onClick={() => setCurrentPage('CHADPARBA')} className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center gap-3 cursor-pointer hover:shadow-md hover:border-red-200 transition-all active:scale-95 group">
                <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform"><Calendar size={28} /></div>
                <h3 className="font-bold text-gray-800 dark:text-gray-100">चाडपर्व</h3>
              </div>
            </div>

            {/* Blog Section */}
            <div className="mt-8 mb-6">
              <BlogWidget
                activeSystem={activeSystem}
                currentYear={currentYear}
                currentMonth={currentMonth}
                enableLoadMore={true}
                initialCount={12}
                filterTag={tag}
                onClearFilter={() => {
                  if (onNavigate) {
                    onNavigate('dharma', { tag: undefined });
                  }
                }}
                onTagClick={(newTag) => {
                  if (onNavigate) {
                    onNavigate('dharma', { tag: newTag });
                  }
                }}
                onBlogClick={(blog) => {
                  if (onNavigate) {
                    onNavigate('blog-detail', blog);
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div className="absolute lg:fixed left-0 right-0 max-w-7xl mx-auto w-full bg-white/90 dark:bg-gray-900/90 border-t border-gray-200 dark:border-gray-700 py-3 px-4 flex justify-center gap-8 z-20 shadow-lg bottom-[4rem] lg:bottom-0">
          <div className="flex items-center text-sm gap-2 text-orange-600 dark:text-orange-400"><Sunrise className="w-5 h-5" /><span className="font-semibold">सूर्योदय:</span><span>{sunrise || '--'}</span></div>
          <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400"><Sunset className="w-5 h-5" /><span className="font-semibold">सूर्यास्त:</span><span>{sunset || '--'}</span></div>
        </div>
      </div>
    );
  };

  return (
    <main className="h-full w-full flex flex-col overflow-hidden bg-slate-100 dark:bg-gray-900">
      <div className="h-full w-full flex flex-col">{renderContent()}</div>
    </main>
  );
};

export default DharmaPage;
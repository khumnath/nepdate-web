import React, { useEffect, useState } from 'react';
import CalendarHeader from './components/CalendarHeader';
import CalendarControls from './components/CalendarControls';
import CalendarGrid from './components/CalendarGrid';
import DayDetailsModal from './components/DayDetailsModal';
import MonthlyEvents from './components/MonthlyEvents';
import Footer from './components/Footer';
import AboutPopup from './AboutPopup';
import { toBikramSambat, fromBikramSambat, fromJulianDay, toJulianDay } from './lib/lib';
import Converter from './components/Converter';
import { Menu, X, Download, Info, Home, SwitchCamera } from 'lucide-react';
import { registerSW } from 'virtual:pwa-register';


const App: React.FC = () => {
  // PWA Service Worker Registration
  useEffect(() => {
    registerSW({ immediate: true });
  }, []);

  // View State
  const [activeView, setActiveView] = useState<'calendar' | 'converter'>('calendar');

  // Theme and UI State
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeSystem, setActiveSystem] = useState<'bs' | 'ad'>('bs');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // PWA Install / App State
  const [canInstall, setCanInstall] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isInstalled, setIsInstalled] = useState(() => localStorage.getItem('pwa_installed') === 'true');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone;
    setIsStandalone(!!standalone);

    if (standalone) {
        setIsInstalled(true);
        return;
    }

    const handleAppInstalled = () => {
      localStorage.setItem('pwa_installed', 'true');
      setIsInstalled(true);
      setCanInstall(false);
    };
    window.addEventListener('appinstalled', handleAppInstalled);

    if ('getInstalledRelatedApps' in navigator) {
      (navigator as any).getInstalledRelatedApps().then((apps: any[]) => {
        if (apps.length > 0) {
          if (localStorage.getItem('pwa_installed') !== 'true') {
            localStorage.setItem('pwa_installed', 'true');
          }
          setIsInstalled(true);
        }
      });
    }

    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      localStorage.removeItem('pwa_installed');
      setIsInstalled(false);
      setDeferredPrompt(e);
      setCanInstall(true);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    
    return () => {
      window.removeEventListener('appinstalled', handleAppInstalled);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);


  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      await deferredPrompt.userChoice;
      setDeferredPrompt(null);
      setCanInstall(false);
    }
  };

  // Calendar Core State
  const [initialToday] = useState(new Date());
  const [initialTodayBs] = useState(() => toBikramSambat(initialToday));

  const [currentBsYear, setCurrentBsYear] = useState<number | null>(initialTodayBs.year);
  const [currentBsMonth, setCurrentBsMonth] = useState<number>(initialTodayBs.monthIndex);
  const [currentAdYear, setCurrentAdYear] = useState<number | null>(initialToday.getFullYear());
  const [currentAdMonth, setCurrentAdMonth] = useState<number>(initialToday.getMonth());

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const initialTheme = savedTheme || 'light';
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  const switchSystem = (sys: 'bs' | 'ad') => {
    if (sys === activeSystem) return;

    const isCurrentAdMonth = currentAdYear === initialToday.getFullYear() && currentAdMonth === initialToday.getMonth();
    const isCurrentBsMonth = currentBsYear === initialTodayBs.year && currentBsMonth === initialTodayBs.monthIndex;

    if ((sys === 'bs' && isCurrentAdMonth) || (sys === 'ad' && isCurrentBsMonth)) {
        goToToday();
    } else if (sys === 'bs') {
    const year = currentAdYear ?? initialToday.getFullYear();
    const month = currentAdMonth; 
    const jd = toJulianDay(year, month, 12);
    const adDate = fromJulianDay(jd);
    const bs = toBikramSambat(adDate);
    if (bs.year === 0 || !bs.year) {
        goToToday();
    } else {
        setCurrentBsYear(bs.year);
        setCurrentBsMonth(bs.monthIndex);
    }
    } else { // Switching to AD
        if (currentBsYear === null ) { // Handles crash from invalid/out-of-range state
            goToToday();
        } else {
            const adDate = fromBikramSambat(currentBsYear, currentBsMonth, 18);
            setCurrentAdYear(adDate.getUTCFullYear());
            setCurrentAdMonth(adDate.getUTCMonth());
        }
    }
    setActiveSystem(sys);
  };

  const goToToday = () => {
    setCurrentBsYear(initialTodayBs.year);
    setCurrentBsMonth(initialTodayBs.monthIndex);
    setCurrentAdYear(initialToday.getFullYear());
    setCurrentAdMonth(initialToday.getMonth());
  };

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const changeMonth = (dir: 'prev' | 'next') => {
    if (activeSystem === 'bs') {
      const nm = dir === 'prev' ? currentBsMonth - 1 : currentBsMonth + 1;
      if (nm < 0) {
        setCurrentBsMonth(11);
        setCurrentBsYear((p) => (p ?? initialTodayBs.year) - 1);
      } else if (nm > 11) {
        setCurrentBsMonth(0);
        setCurrentBsYear((p) => (p ?? initialTodayBs.year) + 1);
      } else setCurrentBsMonth(nm);
    } else {
      const nm = dir === 'prev' ? currentAdMonth - 1 : currentAdMonth + 1;
      if (nm < 0) {
        setCurrentAdMonth(11);
        setCurrentAdYear((p) => (p ?? initialToday.getFullYear()) - 1);
      } else if (nm > 11) {
        setCurrentAdMonth(0);
        setCurrentAdYear((p) => (p ?? initialToday.getFullYear()) + 1);
      } else setCurrentAdMonth(nm);
    }
  };

  const changeYear = (dir: 'prev' | 'next') => {
    if (activeSystem === 'bs') setCurrentBsYear((p) => (p ?? initialTodayBs.year) + (dir === 'next' ? 1 : -1));
    else setCurrentAdYear((p) => (p ?? initialToday.getFullYear()) + (dir === 'next' ? 1 : -1));
  };

  const currentYear = activeSystem === 'bs' ? currentBsYear : currentAdYear;
  const currentMonth = activeSystem === 'bs' ? currentBsMonth : currentAdMonth;

  // Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchEndX(null);
  };
  const handleTouchMove = (e: React.TouchEvent) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const diff = touchEndX - touchStartX;
    if (diff > 60 && touchStartX < 50) setIsMenuOpen(true);
    else if (diff < -60 && isMenuOpen) setIsMenuOpen(false);
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors overflow-hidden relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* HEADER */}
      <header className="px-4 py-2 border-b dark:border-gray-700 bg-white dark:bg-gray-900 z-30">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
              Bikram Calendar
            </h1>
          </div>
        </div>

        {activeView === 'calendar' && (
            <div className="flex justify-center sm:justify-end">
            <CalendarHeader
                activeSystem={activeSystem}
                bsYear={currentBsYear}
                bsMonth={currentBsMonth}
                adYear={currentAdYear}
                adMonth={currentAdMonth}
                onSystemChange={switchSystem}
                onTodayClick={goToToday}
                theme={theme}
                onThemeToggle={toggleTheme}
            />
            </div>
        )}
      </header>

      {/* BACKDROP */}
      {isMenuOpen && <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setIsMenuOpen(false)}></div>}

      {/* SIDE MENU */}
      <aside
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col space-y-3 text-gray-800 dark:text-gray-200">
            <button
              onClick={() => { setActiveView('calendar'); setIsMenuOpen(false); }}
              className="px-3 py-2 text-left rounded hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center gap-2"
            >
              <Home className="w-4 h-4" /> Home
            </button>
            <button
              onClick={() => { setActiveView('converter'); setIsMenuOpen(false); }}
              className="px-3 py-2 text-left rounded hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center gap-2"
            >
              <SwitchCamera className="w-4 h-4" /> Converter
            </button>
            <a
              href="https://github.com/khumnath/nepdate/tree/page"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 text-left rounded hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center gap-2"
            >
              <Menu className="w-4 h-4" /> Source Code
            </a>
            <button
              onClick={() => {
                setIsAboutOpen(true);
                setIsMenuOpen(false);
              }}
              className="px-3 py-2 text-left rounded hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center gap-2"
            >
              <Info className="w-4 h-4" /> About
            </button>

            {!isStandalone && canInstall && (
              <button
                onClick={() => {
                  handleInstallClick();
                  setIsMenuOpen(false);
                }}
                className="px-3 py-2 text-left rounded bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Install App
              </button>
            )}

            {!isStandalone && isInstalled && !canInstall && (
              <a
                href="web+nepdate://open"
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2 text-left rounded bg-green-600 text-white hover:bg-green-700 flex items-center gap-2"
              >
                <Info className="w-4 h-4" /> Open App
              </a>
            )}
          </nav>

          <div className="mt-auto text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
            © {new Date().getFullYear()} Nepdate Calendar Project
          </div>
        </div>
      </aside>

      {isAboutOpen && <AboutPopup setIsAboutOpen={setIsAboutOpen} />}

      {activeView === 'calendar' ? (
        <main className="flex-1 flex flex-col overflow-hidden px-2 sm:px-4 md:px-6 lg:px-40 max-w-7xl mx-auto w-full">
            <section className="py-2 sm:py-3">
            <CalendarControls
                activeSystem={activeSystem}
                currentYear={currentYear}
                currentMonth={currentMonth}
                onYearChange={(y) => (activeSystem === 'bs' ? setCurrentBsYear(y) : setCurrentAdYear(y))}
                onMonthChange={(m) => (activeSystem === 'bs' ? setCurrentBsMonth(m) : setCurrentAdMonth(m))}
                onPrevMonth={() => changeMonth('prev')}
                onNextMonth={() => changeMonth('next')}
                onPrevYear={() => changeYear('prev')}
                onNextYear={() => changeYear('next')}
            />
            </section>

            <section className="flex-1 overflow-auto p-2 sm:p-3 md:p-4">
            <CalendarGrid
                activeSystem={activeSystem}
                currentYear={currentYear}
                currentMonth={currentMonth}
                onDayClick={handleDayClick}
            />
            

            <section className=" events mt-3 sm:mt-4">
            <MonthlyEvents activeSystem={activeSystem} currentYear={currentYear} currentMonth={currentMonth} />
            </section>
            </section>


           <div className="fixed bottom-0 left-0 right-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <Footer />
      </div>
        </main>
      ) : (
        <Converter onBack={() => setActiveView('calendar')} />
      )}


      <DayDetailsModal date={selectedDate} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default App;


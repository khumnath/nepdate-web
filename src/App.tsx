import { useEffect, useState, useRef, lazy, Suspense } from 'react';
import { BottomTabBar } from './components/calendar/BottomTabBar';
import { DesktopTopNav } from './components/calendar/DesktopTopNav';
import CalendarHeader from './components/calendar/CalendarHeader';
import CalendarControls from './components/calendar/CalendarControls';
import CalendarGrid from './components/calendar/CalendarGrid';
import DayDetailsModal from './components/calendar/DayDetailsModal';
import MonthlyEvents from './components/calendar/MonthlyEvents';
import Footer from './components/calendar/Footer';
import AboutPopup from './pages/AboutPopup';
import { toBikramSambat, fromBikramSambat, fromJulianDay, toJulianDay } from './lib/lib';
import { Menu, X, Download, Info, Home, SwitchCamera, Moon, Sun, Settings } from 'lucide-react';
import { registerSW } from 'virtual:pwa-register';
import { NEPALI_LABELS } from './constants/constants';

// Lazy load SettingsPage
const KundaliPage = lazy(() => import('./pages/KundaliPage'));
const ConverterPage = lazy(() => import('./pages/ConverterPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));

// Reusable Toast Component
const ExitToast: React.FC<{ message: string; visible: boolean }> = ({ message, visible }) => (
  <div
    className={`fixed bottom-16 left-1/2 -translate-x-1/2 px-4 py-2 rounded shadow z-50 text-sm text-white bg-black transition-opacity duration-500 ${
      visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
  >
    {message}
  </div>
);

// Define the menu style type
type MenuStyle = 'slide' | 'tabs';
type DesktopLayoutStyle = 'topbar' | 'sidebar';

const App: React.FC = () => {
  useEffect(() => {
    registerSW({ immediate: true });
  }, []);

  const [activeView, setActiveView] = useState<'calendar' | 'converter' | 'kundali' | 'settings'>('calendar');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeSystem, setActiveSystem] = useState<'bs' | 'ad'>('bs');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const [canInstall, setCanInstall] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isInstalled, setIsInstalled] = useState(() => localStorage.getItem('pwa_installed') === 'true');
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  const [backPressedOnce, setBackPressedOnce] = useState(false);
  const [showExitToast, setShowExitToast] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  // State for menu style
  const [menuStyle, setMenuStyle] = useState<MenuStyle>('tabs');
  const [desktopLayoutStyle, setDesktopLayoutStyle] = useState<DesktopLayoutStyle>('topbar');

  // Detect standalone, install events
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
    
    // Load Mobile Menu Style
const savedMenuStyle = localStorage.getItem('menuStyle') as MenuStyle | null;
setMenuStyle(savedMenuStyle || 'tabs');
// Load desktop Menu Style
    const savedDesktopLayout = localStorage.getItem('desktopLayoutStyle') as DesktopLayoutStyle | null;
    setDesktopLayoutStyle(savedDesktopLayout || 'topbar');
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.classList.toggle('dark', next === 'dark');
  };

  // Handler to save menu style
  const handleSetMenuStyle = (style: MenuStyle) => {
    setMenuStyle(style);
    localStorage.setItem('menuStyle', style);
  };

  const handleSetDesktopLayoutStyle = (style: DesktopLayoutStyle) => {
    setDesktopLayoutStyle(style);
    localStorage.setItem('desktopLayoutStyle', style);
  };


  const handleResetSettings = () => {
    localStorage.removeItem('theme');
    localStorage.removeItem('menuStyle');
    localStorage.removeItem('desktopLayoutStyle');

    const defaultTheme = 'light';
    setTheme(defaultTheme);
    document.documentElement.classList.toggle('dark', false);

    const defaultMenuStyle = 'tabs'; 
    setMenuStyle(defaultMenuStyle);

    const defaultDesktopLayout = 'topbar'; 
    setDesktopLayoutStyle(defaultDesktopLayout);
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

  // Backspace closes menu when open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isMenuOpen) return;
      if (e.key === 'Backspace') {
        e.preventDefault();
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  // Back button and settings handling
  useEffect(() => {
    if (!isStandalone) return;

    const handlePopState = () => {
      if (isModalOpen) {
        setIsModalOpen(false);
        window.history.pushState(null, '', window.location.href);
        return;
      }
      if (isAboutOpen) {
        setIsAboutOpen(false);
        window.history.pushState(null, '', window.location.href);
        return;
      }
      if (isMenuOpen) {
        setIsMenuOpen(false);
        window.history.pushState(null, '', window.location.href);
        return;
      }
      if (activeView === 'kundali') {
        // Let KundaliPage's own popstate listener handle the event.
        return;
      }

      // Handle 'converter' and 'settings' views)
      if (activeView === 'converter' || activeView === 'settings') {
        setActiveView('calendar');
        window.history.pushState(null, '', window.location.href);
        return;
      }

      if (backPressedOnce) {
        window.history.go(-2);
      } else {
        setBackPressedOnce(true);
        setShowExitToast(true);
        if (navigator.vibrate) {
          navigator.vibrate(50);
        }
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(() => {
          setBackPressedOnce(false);
          setShowExitToast(false);
          timeoutRef.current = null;
        }, 2000);
        window.history.pushState(null, '', window.location.href);
      }
    };

    window.history.pushState(null, '', window.location.href);
    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isStandalone, backPressedOnce, isMenuOpen, isModalOpen, isAboutOpen, activeView]);

  return (
    <div
      className={`min-h-screen flex flex-col bg-slate-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors relative ${
        desktopLayoutStyle === 'sidebar' ? 'lg:flex-row' : ''
      }`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {desktopLayoutStyle === 'topbar' && (
        <DesktopTopNav
          activeView={activeView}
          onNavigate={(view) => setActiveView(view as 'calendar' | 'converter' | 'kundali' | 'settings')}
        />
      )}

      <header className="px-4 print:hidden py-2 border-b dark:border-gray-700 bg-slate-200 dark:bg-gray-800 z-30 lg:hidden">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            
            {menuStyle === 'slide' && (
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}

            <h1 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
              {NEPALI_LABELS.Nepdate_calendar}
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

      {isMenuOpen && <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setIsMenuOpen(false)}></div>}

      {/* The Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 w-64 h-full bg-slate-200 dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        ${menuStyle === 'tabs' ? 'hidden lg:block' : 'block'} 
        ${desktopLayoutStyle === 'sidebar' 
          ? 'lg:sticky lg:h-screen lg:translate-x-0 lg:shadow-md' 
          : 'lg:hidden'
        }
        `}
        inert-hidden={!isMenuOpen}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              <span className="hidden lg:inline">{NEPALI_LABELS.Nepdate_calendar}</span>
              <span className="lg:hidden">Menu</span>
            </h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 lg:hidden"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col space-y-3 text-gray-800 dark:text-gray-200">
            <button
              onClick={() => { setActiveView('calendar'); setIsMenuOpen(false); }}
              className="px-3 py-2 text-left rounded hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center gap-2"
            >
              <Home className="w-4 h-4" /> {NEPALI_LABELS.home}
            </button>
            <button
              onClick={() => { setActiveView('converter'); setIsMenuOpen(false); }}
              className="px-3 py-2 text-left rounded hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center gap-2"
            >
              <SwitchCamera className="w-4 h-4" /> {NEPALI_LABELS.converter}
            </button>
            <button
              onClick={() => { setActiveView('kundali'); setIsMenuOpen(false); }}
              className="px-3 py-2 text-left rounded hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2v20M2 12h20"/>
              </svg> {NEPALI_LABELS.kundali}
            </button>
            
            <button
              onClick={() => { setActiveView('settings'); setIsMenuOpen(false); }}
              className="px-3 py-2 text-left rounded hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center gap-2"
            >
              <Settings className="w-4 h-4" /> {NEPALI_LABELS.settings || 'Settings'}
            </button>

            <a
              href="https://github.com/khumnath/nepdate/tree/page"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="px-3 py-2 text-left rounded hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center gap-2"
            >
              <Menu className="w-4 h-4" />  {NEPALI_LABELS.sourceCode}
            </a>
            <button
              onClick={() => {
                setIsAboutOpen(true);
                setIsMenuOpen(false);
              }}
              className="px-3 py-2 text-left rounded hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center gap-2"
            >
              <Info className="w-4 h-4" /> {NEPALI_LABELS.about}
            </button>

            {!isStandalone && canInstall && (
              <button
                onClick={() => {
                  handleInstallClick();
                  setIsMenuOpen(false);
                }}
                className="px-3 py-2 text-left rounded bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> {NEPALI_LABELS.installApp}
              </button>
            )}

            {!isStandalone && isInstalled && !canInstall && (
              <a
                href="web+nepdate://open"
                onClick={() => setIsMenuOpen(false)}
                className="px-3 py-2 text-left rounded bg-green-600 text-white hover:bg-green-700 flex items-center gap-2"
              >
                <Info className="w-4 h-4" /> {NEPALI_LABELS.openApp}
              </a>
            )}
            
            <button
              onClick={() => { toggleTheme(); setIsMenuOpen(false); }}
              className="px-3 py-2 text-left rounded hover:bg-gray-200 dark:hover:bg-gray-800 flex items-center gap-2"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              <span>{theme === 'light' ? NEPALI_LABELS.darkMode : NEPALI_LABELS.lightMode}</span>
            </button>
          </nav>

          <div className="mt-auto text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
            © {new Date().getFullYear()} {NEPALI_LABELS.project}
          </div>
        </div>
      </aside>

      {isAboutOpen && <AboutPopup setIsAboutOpen={setIsAboutOpen} />}

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 overflow-hidden">
        <div className={`h-full overflow-auto px-2 sm:px-4 md:px-6 max-w-7xl mx-auto w-full ${menuStyle === 'tabs' ? 'pb-24 lg:pb-6' : 'pb-20 lg:pb-6'}`}>
          
          {activeView === 'kundali' ? (
            <Suspense fallback={ <div className="flex items-center justify-center min-h-[60vh]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div> }>
              <KundaliPage onBack={() => setActiveView('calendar')} />
            </Suspense>
          ) : activeView === 'calendar' ? (
            <main className="flex flex-col min-h-[60vh]">
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

                <section className="events mt-3 sm:mt-4">
                  <MonthlyEvents activeSystem={activeSystem} currentYear={currentYear} currentMonth={currentMonth} />
                </section>
              </section>
            </main>
          ) : activeView === 'converter' ? (
            <Suspense fallback={ <div className="flex items-center justify-center min-h-[60vh]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div> }>
              <ConverterPage onBack={() => setActiveView('calendar')} />
            </Suspense>
          ) : activeView === 'settings' ? (
            <Suspense fallback={ <div className="flex items-center justify-center min-h-[60vh]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div></div> }>
              <SettingsPage
                onBack={() => setActiveView('calendar')}
                currentTheme={theme}
                onThemeChange={toggleTheme}
                currentMenuStyle={menuStyle}
                onMenuStyleChange={handleSetMenuStyle}
                currentDesktopLayoutStyle={desktopLayoutStyle}
                onDesktopLayoutStyleChange={handleSetDesktopLayoutStyle}
                onResetSettings={handleResetSettings}
              />
            </Suspense>
          ) : null}
        </div>
      </div>

      {menuStyle === 'slide' && (
        <div className="fixed bottom-0 left-0 right-0 w-full bg-slate-200 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-50 print:hidden lg:hidden">
          <Footer />
        </div>
      )}

      {menuStyle === 'tabs' && (
        <BottomTabBar
          activeView={activeView}
          onNavigate={(view) => {
            if (view === 'about') {
              setIsAboutOpen(true);
            } else {
              setActiveView(view as 'calendar' | 'converter' | 'kundali' | 'settings');
            }
          }}
        />
      )}

      <DayDetailsModal date={selectedDate} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Toast for double back to exit */}
      <ExitToast
        message={
          activeSystem === 'bs'
            ? 'बन्द गर्नको लागि फेरि थिच्नुहोस्'
            : 'Press back again to exit'
        }
        visible={showExitToast}
      />
    </div>
  );
};

export default App;
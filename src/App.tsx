import React, { Suspense, useEffect } from 'react';
import { BottomTabBar } from './components/calendar/BottomTabBar';
import { DesktopTopNav } from './components/calendar/DesktopTopNav';
import CalendarHeader from './components/calendar/CalendarHeader';
import CalendarControls from './components/calendar/CalendarControls';
import CalendarGrid from './components/calendar/CalendarGrid';
import DayDetailsModal from './components/calendar/DayDetailsModal';
import MonthlyEvents from './components/calendar/MonthlyEvents';
import Footer from './components/calendar/Footer';
import DesktopFooter from './components/layout/DesktopFooter';
import AboutPopup from './pages/AboutPopup';
import { Menu, X, Download, RefreshCcw, Moon, Sun } from 'lucide-react';
import { MENU_ITEMS } from './constants/menu';
import { NEPALI_LABELS } from './constants/constants';
import { toast, ToastContainer } from './components/shared/toast';
import { TodayWidget } from './components/calendar/TodayWidget';
import { HeaderLogo } from './components/calendar/HeaderLogo';

import { useTheme } from './hooks/useTheme';
import { useLayout } from './hooks/useLayout';
import { usePWA } from './hooks/usePWA';
import { useCalendarLogic } from './hooks/useCalendarLogic';
import { useAppNavigation } from './hooks/useAppNavigation';
import { usePlatform } from './hooks/usePlatform';
import { handleReloadApp, getAppBaseUrl } from './lib/utils/appUtils';
import { createSlug, toDevanagari } from './lib/utils/lib';
import { RashifalWidget } from './components/calendar/RashifalWidget';
import { SocialMedia } from './components/calendar/SocialMedia';
import { AdsBanner } from './components/calendar/AdsBanner';
import MonthlyMuhurta from './components/calendar/Muhurtas';
import UpcomingEvents from './components/calendar/UpcomingEvents';


// Lazy load pages for menu items are handled in MENU_ITEMS
// DayDetailPage only loaded here
import DayDetailPage from './pages/DayDetailPage';
import { BlogWidget } from './components/blog/BlogWidget';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { Blog } from './data/blogs';
import { getAllBlogs } from './lib/blogContent';

const App: React.FC = () => {
  const { theme, toggleTheme, resetTheme } = useTheme();
  const { menuStyle, desktopLayoutStyle, handleSetMenuStyle, handleSetDesktopLayoutStyle, resetLayoutSettings } = useLayout();
  const { isStandalone, canInstall, handleInstallClick } = usePWA();

  const {
    activeView,
    setActiveView,
    selectedDate,
    isModalOpen,
    setIsModalOpen,
    isMenuOpen,
    setIsMenuOpen,
    isAboutOpen,
    setIsAboutOpen,
    handleDayClick,
    setIsKundaliResultsVisible,
    setKundaliBackAction,
    setIsDharmaResultsVisible,
    setDharmaBackAction,
    showExitToast,
    postParams,
    setPostParams
  } = useAppNavigation();

  const {
    activeSystem,
    currentYear,
    currentMonth,
    switchSystem,
    goToToday,
    changeMonth,
    changeYear,
    setCurrentBsYear,
    setCurrentAdYear,
    setCurrentBsMonth,
    setCurrentAdMonth,
    initialToday,
    initialTodayBs,
    todayDetails,
  } = useCalendarLogic();

  const { isAndroidApp, handleTouchStart, handleTouchMove, handleTouchEnd } = usePlatform(isMenuOpen, setIsMenuOpen);

  // State for view parameters (e.g. selected rashi for deep linking)
  const [viewParams, setViewParams] = React.useState<any>(null);
  const [activeBlog, setActiveBlog] = React.useState<Blog | null>(null);

  const handleResetSettings = () => {
    resetTheme();
    resetLayoutSettings();
    toast.info('Settings reset to default', 2000);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const viewParam = params.get('activeView');

    if (viewParam) {
      setActiveView(viewParam as any);
      window.history.replaceState({}, '', getAppBaseUrl());
    } else if (
      (window.location.hash && (window.location.hash.startsWith('#bs?') || window.location.hash.startsWith('#ad?'))) ||
      window.location.pathname.endsWith('/bs') || window.location.pathname.endsWith('/bs.html') ||
      window.location.pathname.endsWith('/ad') || window.location.pathname.endsWith('/ad.html')
    ) {
      setActiveView('day-detail' as any);
    }
  }, [setActiveView]);

  useEffect(() => {
    if (showExitToast) {
      toast.info('Press back again to exit', 2000);
    }
  }, [showExitToast]);

  const handleShowDetailsClick = () => handleDayClick(initialToday);

  // Sync postParams to activeBlog
  useEffect(() => {
    if (activeView === 'blog-detail' && postParams) {
       const allBlogs = getAllBlogs();
       const blog = allBlogs.find(b => createSlug(b.title) === postParams.slug);
       if (blog) {
         setActiveBlog(blog);
         // Note: we rely on postParams.source for back navigation now
       }
    }
  }, [activeView, postParams]);

  // Handle Back from Blog Detail
  const handleBlogBack = () => {
    if (postParams?.source) {
      setActiveView(postParams.source as any);
      setPostParams(null);
    } else {
      setActiveView('calendar');
    }
  };

  return (
    <div
      className={`fixed inset-0 h-[100dvh] w-full flex flex-col bg-slate-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors overflow-hidden ${desktopLayoutStyle === 'sidebar' ? 'md:flex-row' : ''} ${theme === 'dark' ? 'dark' : ''}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Desktop TopNav */}
      {desktopLayoutStyle === 'topbar' && (
        <div className="w-full sticky top-0 z-30 print:hidden hidden md:block border-b border-gray-200 dark:border-gray-700">
          <DesktopTopNav
            activeView={activeView}
            activeSystem={activeSystem}
            onNavigate={(key) => {
              if (key === 'about') setIsAboutOpen(true);
              else setActiveView(key);
            }}
            showInstall={!isStandalone && canInstall}
            onInstallClick={handleInstallClick}
            theme={theme}
            onThemeToggle={toggleTheme}
          />
        </div>
      )}

      {/* Mobile Header - Only visible on Home/Calendar View */}
      {activeView === 'calendar' && (
      <header className="sticky top-0 px-4 pt-2 bg-transparent z-30 md:hidden">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {menuStyle === 'slide' && (
              <button onClick={() => setIsMenuOpen(true)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                <Menu className="w-5 h-5" />
              </button>
            )}
            <HeaderLogo activeSystem={activeSystem} />
          </div>
          {menuStyle === 'tabs' && !isStandalone && canInstall && (
            <button onClick={handleInstallClick} className="px-3 py-2 text-left text-xs rounded bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2">
              <Download className="w-5 h-5" /> <span>{NEPALI_LABELS.installApp}</span>
            </button>
          )}
        </div>
      </header>
      )}

      {/* Mobile Overlay */}
      {isMenuOpen && <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setIsMenuOpen(false)} />}

      {/* Slide Menu / Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full bg-slate-200 dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          ${desktopLayoutStyle === 'sidebar' ? 'md:translate-x-0 md:sticky md:h-screen md:w-56' : 'md:hidden w-64'}`}
      >
        <div className="flex flex-col h-full p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Menu</h2>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 md:hidden">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col space-y-3 text-gray-800 dark:text-gray-200">
            {MENU_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  if (item.key === 'about') setIsAboutOpen(true);
                  else setActiveView(item.key as any);
                  setIsMenuOpen(false);
                }}
                className={`px-3 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700 ${activeView === item.key ? 'bg-gray-300 dark:bg-gray-700 font-medium' : ''}`}
              >
                {item.icon} {item.label}
              </button>
            ))}
            {!isStandalone && canInstall && <button onClick={() => { handleInstallClick(); setIsMenuOpen(false); }} className="px-3 py-2 flex items-center gap-2 rounded bg-blue-600 text-white hover:bg-blue-700"><Download className="w-4 h-4" /> {NEPALI_LABELS.installApp}</button>}
            <button onClick={() => { toggleTheme(); setIsMenuOpen(false); }} className="px-3 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700">{theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />} {theme === 'light' ? NEPALI_LABELS.darkMode : NEPALI_LABELS.lightMode}</button>
            <hr className="border-gray-300 dark:border-gray-600 my-2" />
            <button onClick={() => { handleReloadApp(); setIsMenuOpen(false); }} className="px-3 py-2 flex items-center gap-2 rounded text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/50"><RefreshCcw className="w-4 h-4" /> Clear Cache & Reload</button>
          </nav>

          <div className="mt-auto text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
            © {new Date().getFullYear()} {NEPALI_LABELS.project}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div id="app-scroll-container" className={`h-full mx-auto w-full max-w-7xl xl:max-w-6xl ${activeView === 'calendar' ? 'overflow-auto px-4 md:px-6 pb-20 md:pb-6' : 'overflow-hidden p-0'}`}>
          {activeView === 'calendar' ? (
            <>
              <CalendarHeader activeSystem={activeSystem} onSystemChange={switchSystem} onTodayClick={goToToday} theme={theme} onThemeToggle={toggleTheme} todayDetails={todayDetails} />
              <main className="min-h-[80vh] pb-20 flex flex-col">
                {/* --- TOP SECTION: Calendar Area + Sidebar (Today Details) --- */}
                {/* Split top section to avoid stretched calendar */}
                <div className="w-full md:grid md:grid-cols-12 md:gap-x-8">

                  {/* Top Left Sidebar: Today Widget (Desktop Only) */}
                  <aside className="hidden md:flex md:col-span-5 xl:col-span-4 flex-col gap-4 h-full">
                    <TodayWidget
                      todayAd={initialToday}
                      todayBs={initialTodayBs}
                      todayDetails={todayDetails}
                      onShowDetailsClick={handleShowDetailsClick}
                    />
                    <SocialMedia theme={theme} />

                    <AdsBanner className="mt-2 min-h-[150px]" />
                  </aside>

                  {/* Main Calendar Area */}
                  <div id="main-calendar-grid" className="md:col-span-7 xl:col-span-8 flex flex-col gap-2 h-full scroll-mt-4">
                      <CalendarControls activeSystem={activeSystem} currentYear={currentYear} currentMonth={currentMonth} onYearChange={(y) => activeSystem === 'bs' ? setCurrentBsYear(y) : setCurrentAdYear(y)} onMonthChange={(m) => activeSystem === 'bs' ? setCurrentBsMonth(m) : setCurrentAdMonth(m)} onPrevMonth={() => changeMonth('prev')} onNextMonth={() => changeMonth('next')} onPrevYear={() => changeYear('prev')} onNextYear={() => changeYear('next')} />
                      <CalendarGrid activeSystem={activeSystem} currentYear={currentYear} currentMonth={currentMonth} onDayClick={handleDayClick} />
                      <MonthlyEvents activeSystem={activeSystem} currentYear={currentYear} currentMonth={currentMonth} />
                      <MonthlyMuhurta
                         activeSystem={activeSystem}
                         currentYear={currentYear}
                         currentMonth={currentMonth}
                       />
                       <AdsBanner className="mt-4 md:hidden" />
                  </div>

                </div>

                 {/* --- Bottom Section: Upcoming Events (Full Width) --- */}
                 <div className="mt-8">
                   <UpcomingEvents activeSystem={activeSystem} />
                 </div>

                 {/* Mobile Facebook Widget */}
                 <div className="mt-8 md:hidden px-4">
                    <SocialMedia theme={theme} showTimeline={true} height={500} width="100%" />
                </div>



                {/* --- BOTTOM SECTION: Content Widgets --- */}
                <div className="md:grid md:grid-cols-12 md:gap-x-8 relative mt-8">
                    {/* Left Column: Rashifal Only (Height Reference) */}
                    <aside className="hidden md:flex md:col-span-5 xl:col-span-4 flex-col h-full">
                      {/* TodayWidget moved to top, so only Rashifal remains here to set height */}
                      <RashifalWidget
                          date={`${toDevanagari(initialTodayBs.year)} ${initialTodayBs.monthName} ${toDevanagari(initialTodayBs.day)}`}
                          dateKey={`${initialTodayBs.year}-${initialTodayBs.monthIndex + 1}-${initialTodayBs.day}`}
                          tithi={todayDetails?.tithis?.[0]?.name}
                          nakshatra={todayDetails?.nakshatras?.[0]?.name}
                          className="flex-1" // Allow it to fill the flex container
                          onViewAll={() => setActiveView('rashifal')}
                      />
                    </aside>

                    {/* Right Column: Blog Grid */}
                    <div className="md:col-span-7 xl:col-span-8 relative">
                       {/* Absolute positioning trick to match Height of Sidebar */}
                       <div className="-mt-6 md:mt-0 md:absolute md:inset-0 md:overflow-hidden">
                          <BlogWidget
                            activeSystem={activeSystem}
                            currentYear={currentYear || 2081}
                            currentMonth={currentMonth}
                            compactMode={true}
                            onBlogClick={(blog) => {
                              setPostParams({ source: 'calendar', slug: createSlug(blog.title) });
                              setActiveView('blog-detail');
                            }}
                            onViewAll={() => setActiveView('dharma')}
                            onTagClick={(tag) => {
                              setViewParams({ tag });
                              setActiveView('dharma');
                            }}
                          />
                        </div>
                    </div>
                </div>
              </main>
            </>
          ) : activeView === 'day-detail' ? (
            <DayDetailPage onBack={() => {
              window.history.pushState({}, '', getAppBaseUrl());
              setActiveView('calendar');
            }} />
          ) : activeView === 'blog-detail' && activeBlog ? (
            <BlogDetailPage
              blog={activeBlog}
              onBack={handleBlogBack}
              onNavigate={(blog) => {
                 setPostParams({ source: postParams?.source || 'calendar', slug: createSlug(blog.title) });
                 window.scrollTo(0, 0);
              }}
            />
          ) : (
            (() => {
              const activeItem = MENU_ITEMS.find(item => item.key === activeView);
              if (activeItem && activeItem.page) {
                const PageComponent = activeItem.page;
                const commonProps = { onBack: () => setActiveView('calendar'), theme, activeSystem };
                let pageProps: any = { ...commonProps, ...viewParams };

                if (activeView === 'settings') {
                  pageProps = {
                    ...commonProps,
                    currentTheme: theme,
                    onThemeChange: toggleTheme,
                    currentMenuStyle: menuStyle,
                    onMenuStyleChange: handleSetMenuStyle,
                    currentDesktopLayoutStyle: desktopLayoutStyle,
                    onDesktopLayoutStyleChange: handleSetDesktopLayoutStyle,
                    onResetSettings: handleResetSettings,
                    isAndroidApp,
                    onReloadApp: handleReloadApp
                  };
                } else if (activeView === 'kundali') {
                  pageProps = {
                    ...commonProps,
                    setIsKundaliResultsVisible,
                    setKundaliBackAction
                  };
                } else if (activeView === 'dharma') {
                  pageProps = {
                    ...commonProps,
                    activeSystem,
                    currentYear: currentYear || 2081,
                    currentMonth: currentMonth,
                    tag: viewParams?.tag,
                    onNavigate: (view: string, params?: any) => {
                      if (view === 'blog-detail') {
                         setPostParams({ source: 'dharma', slug: createSlug(params.title) });
                         setActiveView('blog-detail');
                      } else if (view === 'dharma') {
                         setViewParams(params);
                         setActiveView('dharma');
                      }
                    },
                    setIsDharmaResultsVisible,
                    setDharmaBackAction
                  };
                } else if (activeView === 'rashifal') {
                  pageProps = {
                    ...commonProps,
                    date: `${toDevanagari(initialTodayBs.year)} ${initialTodayBs.monthName} ${toDevanagari(initialTodayBs.day)}`,
                    dateKey: `${initialTodayBs.year}-${initialTodayBs.monthIndex + 1}-${initialTodayBs.day}`,
                    tithi: todayDetails?.tithis?.[0]?.name,
                    nakshatra: todayDetails?.nakshatras?.[0]?.name
                  };
                }

                return (
                  <Suspense fallback={<div className="flex justify-center items-center pb-20 min-h-[60vh]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" /></div>}>
                    <PageComponent {...pageProps} />
                  </Suspense>
                );
              }
              return null;
            })()
          )}
          {/* Desktop Footer inside scrollable area to prevent layout breakage - Only on Home Page */}
          {activeView === 'calendar' && (
            <DesktopFooter onNavigate={(view, params) => {
              setActiveView(view as any);
              setViewParams(params || null);
              if (view === 'calendar' && params && typeof params.month === 'number') {
                if (activeSystem === 'bs') setCurrentBsMonth(params.month);
                else setCurrentAdMonth(params.month);
              }
            }} />
          )}
        </div>
      </div>

      {/* Bottom menus */}
      {menuStyle === 'slide' && <div className="fixed bottom-0 left-0 right-0 w-full bg-slate-200 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-50 print:hidden md:hidden"><Footer /></div>}

      {/* Floating Bottom Tab Bar for Mobile */}
      {menuStyle === 'tabs' && (
        <div className="md:hidden print:hidden fixed bottom-0 left-0 right-0 z-[1000]">
          <BottomTabBar
            activeView={activeView}
            onNavigate={(view) => { if (view === 'about') setIsAboutOpen(true); else setActiveView(view); }}
            theme={theme}
            onThemeToggle={toggleTheme}
            themeLabel={theme === 'light' ? NEPALI_LABELS.darkMode : NEPALI_LABELS.lightMode}
          />
        </div>
      )}

      <DayDetailsModal date={selectedDate} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} activeSystem={activeSystem} />
      {isAboutOpen && <AboutPopup setIsAboutOpen={setIsAboutOpen} />}
      <ToastContainer />
    </div>
  );
};

export default App;
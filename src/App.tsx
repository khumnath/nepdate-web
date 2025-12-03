import React, { lazy, Suspense, useEffect } from 'react';
import { BottomTabBar } from './components/calendar/BottomTabBar';
import { DesktopTopNav } from './components/calendar/DesktopTopNav';
import CalendarHeader from './components/calendar/CalendarHeader';
import CalendarControls from './components/calendar/CalendarControls';
import CalendarGrid from './components/calendar/CalendarGrid';
import DayDetailsModal from './components/calendar/DayDetailsModal';
import MonthlyEvents from './components/calendar/MonthlyEvents';
import Footer from './components/calendar/Footer';
import AboutPopup from './pages/AboutPopup';
import { Menu, X, Download, Info, Home, SwitchCamera, RadioIcon, Settings, RefreshCcw, Moon, Sun, BookOpen } from 'lucide-react';
import { NEPALI_LABELS } from './constants/constants';
import { toast, ToastContainer } from './components/shared/toast';
import { TodayWidget } from './components/calendar/TodayWidget';

import { useTheme } from './hooks/useTheme';
import { useLayout } from './hooks/useLayout';
import { usePWA } from './hooks/usePWA';
import { useCalendarLogic } from './hooks/useCalendarLogic';
import { useAppNavigation } from './hooks/useAppNavigation';
import { usePlatform } from './hooks/usePlatform';
import { handleReloadApp } from './lib/utils/appUtils';

// Lazy load pages
const KundaliPage = lazy(() => import('./pages/KundaliPage'));
const ConverterPage = lazy(() => import('./pages/ConverterPage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const RadioPage = lazy(() => import('./pages/radioPage'));
const DharmaPage = lazy(() => import('./pages/DharmaPage'));

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
	} = useAppNavigation();

	const {
		activeSystem,
		currentYear,
		currentMonth,
		currentBsYear,
		currentBsMonth,
		currentAdYear,
		currentAdMonth,
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
			window.history.replaceState({}, '', '/');
		}
	}, [setActiveView]);

	useEffect(() => {
		if (showExitToast) {
			toast.info('Press back again to exit', 2000);
		}
	}, [showExitToast]);

	const handleShowDetailsClick = () => handleDayClick(initialToday);

	return (
		<div
			className={`min-h-screen flex flex-col bg-slate-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors relative ${desktopLayoutStyle === 'sidebar' ? 'md:flex-row' : ''} ${theme === 'dark' ? 'dark' : ''}`}
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			{/* Desktop TopNav */}
			{desktopLayoutStyle === 'topbar' && (
				<div className="w-full flex items-center justify-between px-4 py-2 bg-slate-200 dark:bg-gray-800 z-30 print:hidden">
					<DesktopTopNav
						activeView={activeView}
						onNavigate={(key) => {
							if (key === 'about') setIsAboutOpen(true);
							else setActiveView(key);
						}}
					/>
					{!isStandalone && canInstall && (
						<button onClick={handleInstallClick} className="hidden md:flex ml-4 p-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 items-center gap-2 text-sm">
							<Download className="w-4 h-4" /> <span>{NEPALI_LABELS.installApp}</span>
						</button>
					)}
				</div>
			)}

			{/* Mobile Header */}
			<header className="px-4 py-2 dark:border-gray-700 bg-slate-200 dark:bg-gray-800 z-30 md:hidden">
				<div className="flex items-center justify-between mb-2">
					<div className="flex items-center gap-2">
						{menuStyle === 'slide' && (
							<button onClick={() => setIsMenuOpen(true)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
								<Menu className="w-5 h-5" />
							</button>
						)}
						<h1 className="text-lg sm:text-xl font-semibold">{NEPALI_LABELS.Nepdate_calendar}</h1>
					</div>
					{menuStyle === 'tabs' && !isStandalone && canInstall && (
						<button onClick={handleInstallClick} className="px-3 py-2 text-left text-xs rounded bg-blue-600 text-white hover:bg-blue-700 flex items-center gap-2">
							<Download className="w-5 h-5" /> <span>{NEPALI_LABELS.installApp}</span>
						</button>
					)}
				</div>
			</header>

			{/* Mobile Overlay */}
			{isMenuOpen && <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setIsMenuOpen(false)} />}

			{/* Slide Menu / Sidebar */}
			<aside
				className={`fixed top-0 left-0 z-50 h-full bg-slate-200 dark:bg-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          ${desktopLayoutStyle === 'sidebar' ? 'md:translate-x-0 md:sticky md:h-screen md:w-56' : 'md:hidden w-64'}`}
			>
				<div className="flex flex-col h-full p-4">
					<div className="flex justify-between items-center mb-4">
						<h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Menu</h2>
						<button onClick={() => setIsMenuOpen(false)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 md:hidden">
							<X className="w-5 h-5" />
						</button>
					</div>

					<nav className="flex flex-col space-y-3 text-gray-800 dark:text-gray-200">
						<button onClick={() => { setActiveView('calendar'); setIsMenuOpen(false); }} className="px-3 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700"><Home className="w-4 h-4" /> {NEPALI_LABELS.home}</button>
						<button onClick={() => { setActiveView('converter'); setIsMenuOpen(false); }} className="px-3 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700"><SwitchCamera className="w-4 h-4" /> {NEPALI_LABELS.converter}</button>
						<button onClick={() => { setActiveView('kundali'); setIsMenuOpen(false); }} className="px-3 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700">🔯 {NEPALI_LABELS.kundali}</button>
						<button onClick={() => { setActiveView('radio'); setIsMenuOpen(false); }} className="px-3 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700"><RadioIcon className="w-4 h-4" /> {NEPALI_LABELS.radio}</button>
						<button onClick={() => { setActiveView('dharma'); setIsMenuOpen(false); }} className="px-3 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700"><BookOpen className="w-4 h-4" /> {NEPALI_LABELS.dharma}</button>
						<button onClick={() => { setActiveView('settings'); setIsMenuOpen(false); }} className="px-3 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700"><Settings className="w-4 h-4" /> {NEPALI_LABELS.settings}</button>
						<button onClick={() => { setActiveView('privacy'); setIsMenuOpen(false); }} className="px-3 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700"><Info className="w-4 h-4" /> {NEPALI_LABELS.privacyPolicy}</button>
						<button onClick={() => { setIsAboutOpen(true); setIsMenuOpen(false); }} className="px-3 py-2 flex items-center gap-2 rounded hover:bg-gray-300 dark:hover:bg-gray-700"><Info className="w-4 h-4" /> {NEPALI_LABELS.about}</button>
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
				<div className={`h-full overflow-auto px-4 md:px-6 max-w-7xl xl:max-w-6xl mx-auto w-full ${menuStyle === 'tabs' ? 'pb-2 md:pb-6' : 'pb-20 md:pb-6'}`}>
					{activeView === 'kundali' && (
						<Suspense fallback={<div className="flex justify-center items-center min-h-[60vh]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" /></div>}>
							<KundaliPage onBack={() => setActiveView('calendar')} setIsKundaliResultsVisible={setIsKundaliResultsVisible} setKundaliBackAction={setKundaliBackAction} />
						</Suspense>
					)}

					{activeView === 'calendar' && (
						<>
							<CalendarHeader activeSystem={activeSystem} bsYear={currentBsYear} bsMonth={currentBsMonth} adYear={currentAdYear} adMonth={currentAdMonth} onSystemChange={switchSystem} onTodayClick={goToToday} theme={theme} onThemeToggle={toggleTheme} todayDetails={todayDetails} />
							<main className="min-h-[60vh] pb-20 md:grid md:grid-cols-12 md:gap-x-6">
								<aside className="hidden md:block md:col-span-4">
									<TodayWidget todayAd={initialToday} todayBs={initialTodayBs} todayDetails={todayDetails} onShowDetailsClick={handleShowDetailsClick} />
								</aside>
								<div className="md:col-span-8 flex flex-col">
									<CalendarControls activeSystem={activeSystem} currentYear={currentYear} currentMonth={currentMonth} onYearChange={(y) => activeSystem === 'bs' ? setCurrentBsYear(y) : setCurrentAdYear(y)} onMonthChange={(m) => activeSystem === 'bs' ? setCurrentBsMonth(m) : setCurrentAdMonth(m)} onPrevMonth={() => changeMonth('prev')} onNextMonth={() => changeMonth('next')} onPrevYear={() => changeYear('prev')} onNextYear={() => changeYear('next')} />
									<CalendarGrid activeSystem={activeSystem} currentYear={currentYear} currentMonth={currentMonth} onDayClick={handleDayClick} />
									<MonthlyEvents activeSystem={activeSystem} currentYear={currentYear} currentMonth={currentMonth} />
								</div>
							</main>
						</>
					)}

					{activeView === 'dharma' && (
						<Suspense fallback={<div className="flex justify-center items-center pb-20 min-h-[60vh]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" /></div>}>
							<DharmaPage onBack={() => setActiveView('calendar')} setIsDharmaResultsVisible={setIsDharmaResultsVisible} setDharmaBackAction={setDharmaBackAction} />
						</Suspense>
					)}

					{activeView === 'converter' && (
						<Suspense fallback={<div className="flex justify-center items-center min-h-[60vh]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" /></div>}>
							<ConverterPage onBack={() => setActiveView('calendar')} />
						</Suspense>
					)}

					{activeView === 'settings' && (
						<Suspense fallback={<div className="flex justify-center items-center pb-20 min-h-[60vh]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" /></div>}>
							<SettingsPage onBack={() => setActiveView('calendar')} currentTheme={theme} onThemeChange={toggleTheme} currentMenuStyle={menuStyle} onMenuStyleChange={handleSetMenuStyle} currentDesktopLayoutStyle={desktopLayoutStyle} onDesktopLayoutStyleChange={handleSetDesktopLayoutStyle} onResetSettings={handleResetSettings} isAndroidApp={isAndroidApp} onReloadApp={handleReloadApp} />
						</Suspense>
					)}

					{activeView === 'privacy' && (
						<Suspense fallback={<div className="flex justify-center items-center pb-20 min-h-[60vh]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" /></div>}>
							<PrivacyPage />
						</Suspense>
					)}

					{activeView === 'radio' && (
						<Suspense fallback={<div className="flex justify-center items-center pb-20 min-h-[60vh]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500" /></div>}>
							<RadioPage />
						</Suspense>
					)}
				</div>
			</div>

			{/* Bottom menus */}
			{menuStyle === 'slide' && <div className="fixed bottom-0 left-0 right-0 w-full bg-slate-200 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 z-50 print:hidden md:hidden"><Footer /></div>}
			{menuStyle === 'tabs' && (
				<div className="md:hidden print:hidden">
					<BottomTabBar
						activeView={activeView}
						onNavigate={(view) => { if (view === 'about') setIsAboutOpen(true); else setActiveView(view); }}
						theme={theme}
						onThemeToggle={toggleTheme}
						themeLabel={theme === 'light' ? NEPALI_LABELS.darkMode : NEPALI_LABELS.lightMode}
					/>
				</div>
			)}

			<DayDetailsModal date={selectedDate} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
			{isAboutOpen && <AboutPopup setIsAboutOpen={setIsAboutOpen} />}
			<ToastContainer />
		</div>
	);
};

export default App;
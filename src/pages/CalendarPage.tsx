import React, { useState } from 'react';
import CalendarHeader from '../components/calendar/CalendarHeader';
import CalendarControls from '../components/calendar/CalendarControls';
import CalendarGrid from '../components/calendar/CalendarGrid';
import MonthlyEvents from '../components/calendar/MonthlyEvents';
import { TodayWidget } from '../components/calendar/TodayWidget';
import { SocialMedia as SimpleSocialMedia } from '../components/calendar/SocialMedia';
import { AdsBanner } from '../components/calendar/AdsBanner';
import MonthlyMuhurta from '../components/calendar/Muhurtas';
import UpcomingEvents from '../components/calendar/UpcomingEvents';
import { useCalendarLogic } from '../hooks/useCalendarLogic';
import { TimezoneWarning } from '../components/common/TimezoneWarning';

interface CalendarPageProps {
  onDayClick?: (date: Date) => void;
}

const CalendarPage: React.FC<CalendarPageProps> = ({ onDayClick }) => {
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

  // Theme state for CalendarHeader
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const handleThemeToggle = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const handleDayClick = onDayClick ?? (() => { });

  const handleShowDetailsClick = () => {
    handleDayClick(initialToday);
  };

  return (
    <div className="min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 mb-2">
         <TimezoneWarning activeSystem={'bs'} />
      </div>
      {/* Calendar Header */}
      <div className="flex justify-center sm:justify-end mb-2">
        <CalendarHeader
          activeSystem={activeSystem}
          onSystemChange={switchSystem}
          onTodayClick={goToToday}
          theme={theme}
          onThemeToggle={handleThemeToggle}
          todayDetails={todayDetails}
        />
      </div>

      <main className="md:grid md:grid-cols-12 md:gap-x-6">

        {/* Today Widget (Sidebar) */}
        <aside className="hidden md:flex flex-col md:col-span-4 space-y-4 h-full">
          <TodayWidget
            todayAd={initialToday}
            todayBs={initialTodayBs}
            todayDetails={todayDetails}
            onShowDetailsClick={handleShowDetailsClick}
          />
          <SimpleSocialMedia theme={theme} />

           <AdsBanner className="flex-1 min-h-[150px]" />
        </aside>

        {/* Main Content: Controls + Grid */}
        <div className="md:col-span-8 flex flex-col">

          {/* Calendar Controls */}
          <section className="py-2 sm:py-3">
            <CalendarControls
              activeSystem={activeSystem}
              currentYear={currentYear}
              currentMonth={currentMonth}
              onYearChange={(y) => activeSystem === 'bs' ? setCurrentBsYear(y) : setCurrentAdYear(y)}
              onMonthChange={(m) => activeSystem === 'bs' ? setCurrentBsMonth(m) : setCurrentAdMonth(m)}
              onPrevMonth={() => changeMonth('prev')}
              onNextMonth={() => changeMonth('next')}
              onPrevYear={() => changeYear('prev')}
              onNextYear={() => changeYear('next')}
            />
          </section>

            <section className="flex flex-col flex-1 p-2 sm:p-3 md:p-4">
              <CalendarGrid
                activeSystem={activeSystem}
                currentYear={currentYear}
                currentMonth={currentMonth}
                onDayClick={handleDayClick} // ✅ guaranteed defined
              />
              <div className="mt-4">
                 <MonthlyEvents activeSystem={activeSystem} currentYear={currentYear} currentMonth={currentMonth} />
              </div>
              <div className="mt-4">
                <MonthlyMuhurta
                   activeSystem={activeSystem}
                   currentYear={currentYear}
                   currentMonth={currentMonth}
                 />
                 <AdsBanner className="mt-4 md:hidden" />
              </div>
            </section>

        </div>
      </main>

      {/* --- Bottom Section: Upcoming Events (Full Width) --- */}
      <div className="mt-8">
         <UpcomingEvents activeSystem={activeSystem} />
      </div>
    </div>
  );
};

export default CalendarPage;

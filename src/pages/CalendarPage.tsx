import React, { useState } from 'react';
import CalendarHeader from '../components/calendar/CalendarHeader';
import CalendarControls from '../components/calendar/CalendarControls';
import CalendarGrid from '../components/calendar/CalendarGrid';
import MonthlyEvents from '../components/calendar/MonthlyEvents';
import { TodayWidget } from '../components/calendar/TodayWidget';
import { useCalendarLogic } from '../hooks/useCalendarLogic';

interface CalendarPageProps {
  onDayClick?: (date: Date) => void;
}

const CalendarPage: React.FC<CalendarPageProps> = ({ onDayClick }) => {
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

  // Theme state for CalendarHeader
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const handleThemeToggle = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const handleDayClick = onDayClick ?? (() => {});

  const handleShowDetailsClick = () => {
    handleDayClick(initialToday);
  };

  return (
    <div className="min-h-[60vh]">
      {/* Calendar Header */}
      <div className="flex justify-center sm:justify-end mb-2">
        <CalendarHeader
          activeSystem={activeSystem}
          bsYear={currentBsYear}
          bsMonth={currentBsMonth}
          adYear={currentAdYear}
          adMonth={currentAdMonth}
          onSystemChange={switchSystem}
          onTodayClick={goToToday}
            theme={theme}
            onThemeToggle={handleThemeToggle}
            todayDetails={todayDetails}
        />
      </div>

      <main className="md:grid md:grid-cols-12 md:gap-x-6">

        {/* Today Widget (Sidebar) */}
        <aside className="hidden md:block md:col-span-4">
          <TodayWidget
            todayAd={initialToday}
            todayBs={initialTodayBs}
            todayDetails={todayDetails}
            onShowDetailsClick={handleShowDetailsClick}
          />
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

          {/* Calendar Grid & Monthly Events */}
          <section className="flex flex-col flex-1 p-2 sm:p-3 md:p-4">
            <CalendarGrid
              activeSystem={activeSystem}
              currentYear={currentYear}
              currentMonth={currentMonth}
              onDayClick={handleDayClick} // ✅ guaranteed defined
            />

            <section className="events mt-3 sm:mt-4">
              <MonthlyEvents
                activeSystem={activeSystem}
                currentYear={currentYear}
                currentMonth={currentMonth}
              />
            </section>
          </section>

        </div>
      </main>
    </div>
  );
};

export default CalendarPage;

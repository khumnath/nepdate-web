import { useState, useEffect, useMemo, useCallback } from 'react';
import { getNepalDate } from '../lib/utils/appUtils';

import {
  toBikramSambat,
  fromBikramSambat,
  fromJulianDay,
  toJulianDay,
  calculate,
} from '../lib/utils/lib';
import { toast } from '../components/shared/toast';

type CalculateResult = ReturnType<typeof calculate>;
type TodayDetails = Exclude<CalculateResult, { error: string }>;

export const useCalendarLogic = () => {
  const [initialToday] = useState(getNepalDate());
  const [initialTodayBs] = useState(() => toBikramSambat(initialToday));
  const [todayDetails, setTodayDetails] = useState<TodayDetails | null>(null);

  useEffect(() => {
    const lat = 27.7172;
    const lon = 85.3240;
    const tz = 5.75;

    try {
      // Normalize to midnight to get "Day" values (Udaya Tithi etc) consistently
      // instead of time-specific values that might change mid-day.
      const calcDate = new Date(initialToday);
      calcDate.setUTCHours(0, 0, 0, 0);

      const details = calculate(calcDate, lat, lon, tz);

      if ('error' in details) {
        toast(`Error from calculate:'${details.error}`, "error", 2000 );
      } else {
        setTodayDetails(details);
      }
    } catch (e) {
      toast(`Error calculating today details:${e}`, "error", 2000);
    }
  }, []);

  const [activeSystem, setActiveSystem] = useState<'bs' | 'ad'>('bs');
  const [currentBsYear, setCurrentBsYear] = useState<number | null>(
    initialTodayBs.year
  );
  const [currentBsMonth, setCurrentBsMonth] = useState<number>(
    initialTodayBs.monthIndex
  );
  const [currentAdYear, setCurrentAdYear] = useState<number | null>(
    initialToday.getFullYear()
  );
  const [currentAdMonth, setCurrentAdMonth] = useState<number>(
    initialToday.getMonth()
  );

  const currentYear = useMemo(
    () => (activeSystem === 'bs' ? currentBsYear : currentAdYear),
    [activeSystem, currentBsYear, currentAdYear]
  );
  const currentMonth = useMemo(
    () => (activeSystem === 'bs' ? currentBsMonth : currentAdMonth),
    [activeSystem, currentBsMonth, currentAdMonth]
  );

  // Memoized Callbacks for Navigation
  const goToToday = useCallback(() => {
    setCurrentBsYear(initialTodayBs.year);
    setCurrentBsMonth(initialTodayBs.monthIndex);
    setCurrentAdYear(initialToday.getFullYear());
    setCurrentAdMonth(initialToday.getMonth());
  }, [initialToday, initialTodayBs]);

  const switchSystem = useCallback(
    (sys: 'bs' | 'ad') => {
      if (sys === activeSystem) return;

      const isCurrentAdMonth =
        currentAdYear === initialToday.getFullYear() &&
        currentAdMonth === initialToday.getMonth();
      const isCurrentBsMonth =
        currentBsYear === initialTodayBs.year &&
        currentBsMonth === initialTodayBs.monthIndex;

      if (
        (sys === 'bs' && isCurrentAdMonth) ||
        (sys === 'ad' && isCurrentBsMonth)
      ) {
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
      } else {
        // Switching to AD
        if (currentBsYear === null) {
          goToToday();
        } else {
          const adDate = fromBikramSambat(currentBsYear, currentBsMonth, 18);
          setCurrentAdYear(adDate.getUTCFullYear());
          setCurrentAdMonth(adDate.getUTCMonth());
        }
      }
      setActiveSystem(sys);
    },
    [
      activeSystem,
      currentAdYear,
      currentAdMonth,
      currentBsYear,
      currentBsMonth,
      initialToday,
      initialTodayBs,
      goToToday,
    ]
  );

  const changeMonth = useCallback(
    (dir: 'prev' | 'next') => {
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
    },
    [
      activeSystem,
      currentBsMonth,
      currentAdMonth,
      initialToday,
      initialTodayBs,
    ]
  );

  const changeYear = useCallback(
    (dir: 'prev' | 'next') => {
      if (activeSystem === 'bs')
        setCurrentBsYear((p) => (p ?? initialTodayBs.year) + (dir === 'next' ? 1 : -1));
      else
        setCurrentAdYear(
          (p) => (p ?? initialToday.getFullYear()) + (dir === 'next' ? 1 : -1)
        );
    },
    [activeSystem, initialToday, initialTodayBs]
  );

  return {
    activeSystem,
    currentBsYear,
    currentBsMonth,
    currentAdYear,
    currentAdMonth,
    currentYear,
    currentMonth,
    switchSystem,
    goToToday,
    changeMonth,
    changeYear,
    setCurrentBsYear,
    setCurrentBsMonth,
    setCurrentAdYear,
    setCurrentAdMonth,
    initialToday,
    initialTodayBs,
    todayDetails,
  };
};
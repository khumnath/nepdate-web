import { useState, useEffect, useRef, useCallback } from 'react';
import { ActiveView } from '../types/types';

export const useAppNavigation = () => {
  const [activeView, setActiveView] = useState<ActiveView>('calendar');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isKundaliResultsVisible, setIsKundaliResultsVisible] = useState(false);

  // --- Refs for internal back handlers ---
  const kundaliBackActionRef = useRef<(() => void) | null>(null);
  const dharmaBackActionRef = useRef<(() => boolean) | null>(null);

  const [showExitToast, setShowExitToast] = useState(false);
  const backPressedTimerRef = useRef<number | null>(null);
  const backPressedCounterRef = useRef(0);

  const [isAndroidWebView, setIsAndroidWebView] = useState(false);

  // Detect Android WebView
  useEffect(() => {
    let intervalId: number | null = null;
    let attempts = 0;
    const MAX_ATTEMPTS = 25;

    const checkIfAndroidApp = () => {
      attempts++;
      if (typeof window.Android !== 'undefined' && typeof window.Android.isAndroidApp === 'function') {
        setIsAndroidWebView(true);
        if (intervalId) clearInterval(intervalId);
      } else if (attempts >= MAX_ATTEMPTS && intervalId) {
        clearInterval(intervalId);
      }
    };

    checkIfAndroidApp();
    if (!isAndroidWebView) intervalId = window.setInterval(checkIfAndroidApp, 2000);

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  // Backspace closes menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isMenuOpen) return;
      if (e.key === 'Backspace') {
        e.preventDefault();
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // --- Internal navigation logic ---
  const handleInternalBackNavigation = useCallback((): boolean => {
    // 1. Close modals/overlays first
    if (isModalOpen) {
      setIsModalOpen(false);
      return true;
    }
    if (isAboutOpen) {
      setIsAboutOpen(false);
      return true;
    }
    if (isMenuOpen) {
      setIsMenuOpen(false);
      return true;
    }

    // 2. Handle Kundali back
    if (activeView === 'kundali') {
      if (isKundaliResultsVisible && kundaliBackActionRef.current) {
        kundaliBackActionRef.current();
        return true;
      } else {
        setActiveView('calendar');
        return true;
      }
    }

    // 3. Handle Dharma back
    if (activeView === 'dharma' && dharmaBackActionRef.current) {
      const handled = dharmaBackActionRef.current();
      if (handled) return true;
    }

    // 4. Handle simple pages
    if (['converter', 'settings', 'privacy', 'radio'].includes(activeView)) {
      setActiveView('calendar');
      return true;
    }

    // 5. Default: allow system back
    return false;
  }, [activeView, isModalOpen, isAboutOpen, isMenuOpen, isKundaliResultsVisible]);

  // --- Back press handling ---
  useEffect(() => {
    const resetBackPress = () => {
      backPressedCounterRef.current = 0;
      setShowExitToast(false);
      if (backPressedTimerRef.current) {
        clearTimeout(backPressedTimerRef.current);
        backPressedTimerRef.current = null;
      }
    };

    window.handleBackPress = (): boolean => {
      const handledInternal = handleInternalBackNavigation();
      if (handledInternal) {
        resetBackPress();
        return true;
      }

      backPressedCounterRef.current += 1;
      if (backPressedCounterRef.current === 1) {
        setShowExitToast(true);
        if (navigator.vibrate) navigator.vibrate(50);
        if (backPressedTimerRef.current) clearTimeout(backPressedTimerRef.current);
        backPressedTimerRef.current = window.setTimeout(() => resetBackPress(), 2000);
        return true;
      } else {
        resetBackPress();
        const androidInterface = window.Android as any;
        if (androidInterface?.exitApp) {
          androidInterface.exitApp();
          return true;
        }
        return false;
      }
    };

    // PWA back button handling
    if (!isAndroidWebView) {
      const pushDummyState = () => {
        const url = new URL(window.location.href);
        url.hash = `#${Date.now()}`;
        window.history.pushState({ dummy: true }, '', url.toString());
      };

      pushDummyState();
      const handlePopState = () => {
        const handledInternal = handleInternalBackNavigation();
        if (handledInternal) {
          pushDummyState();
          return;
        }

        backPressedCounterRef.current += 1;
        if (backPressedCounterRef.current === 1) {
          setShowExitToast(true);
          if (navigator.vibrate) navigator.vibrate(50);
          if (backPressedTimerRef.current) clearTimeout(backPressedTimerRef.current);
          backPressedTimerRef.current = window.setTimeout(() => {
            backPressedCounterRef.current = 0;
            setShowExitToast(false);
          }, 2000);
          pushDummyState();
        } else {
          window.history.go(-2);
          backPressedCounterRef.current = 0;
          setShowExitToast(false);
        }
      };

      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    }

    return () => {
      if (isAndroidWebView) {
        backPressedCounterRef.current = 0;
        setShowExitToast(false);
      }
    };
  }, [isAndroidWebView, handleInternalBackNavigation]);

  // --- Day click ---
  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  // --- Set back actions for complex pages ---
  const setKundaliBackAction = useCallback((action: () => void) => {
    kundaliBackActionRef.current = action;
  }, []);

  const setDharmaBackAction = useCallback((action: (() => boolean) | null) => {
    dharmaBackActionRef.current = action;
  }, []);

  return {
    activeView,
    setActiveView,
    selectedDate,
    isModalOpen,
    setIsModalOpen,
    isMenuOpen,
    setIsMenuOpen,
    isAboutOpen,
    setIsAboutOpen,
    isKundaliResultsVisible,
    setIsKundaliResultsVisible,
    showExitToast,
    handleDayClick,
    isAndroidWebView,
    setKundaliBackAction,
    setDharmaBackAction,
  };
};

import { useState, useEffect, useRef, useCallback } from 'react';
import { ActiveView } from '../types/types'; // Adjust path if needed

// Extend the Window interface for TypeScript
declare global {
  interface Window {
    Android?: {
      isAndroidApp: () => boolean;
    };
    handleBackPress?: () => boolean;
  }
}

export const useAppNavigation = () => {
  const [activeView, setActiveView] = useState<ActiveView>('calendar');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isKundaliResultsVisible, setIsKundaliResultsVisible] = useState(false);

  const kundaliBackActionRef = useRef<(() => void) | null>(null);

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
      } else if (attempts >= MAX_ATTEMPTS) {
        if (intervalId) clearInterval(intervalId);
      }
    };

    checkIfAndroidApp();

    if (!isAndroidWebView) {
      intervalId = window.setInterval(checkIfAndroidApp, 200);
    }

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
    if (isMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  // Internal navigation logic
  const handleInternalBackNavigation = useCallback((): boolean => {
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
    if (activeView === 'kundali') {
      if (isKundaliResultsVisible && kundaliBackActionRef.current) {
        kundaliBackActionRef.current();
        return true;
      } else {
        setActiveView('calendar');
        return true;
      }
    }
    if (activeView === 'converter' || activeView === 'settings') {
      setActiveView('calendar');
      return true;
    }
    return false;
  }, [isModalOpen, isAboutOpen, isMenuOpen, activeView, isKundaliResultsVisible]);

  // Back press handling
  useEffect(() => {
    const resetBackPress = () => {
      backPressedCounterRef.current = 0;
      setShowExitToast(false);
      if (backPressedTimerRef.current) {
        clearTimeout(backPressedTimerRef.current);
        backPressedTimerRef.current = null;
      }
    };

    // Android WebView handler
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
          backPressedTimerRef.current = window.setTimeout(() => resetBackPress(), 2000);
          pushDummyState();
        } else {
          resetBackPress();
          window.history.go(-2);
        }
      };

      window.addEventListener('popstate', handlePopState);

      return () => {
        window.removeEventListener('popstate', handlePopState);
        resetBackPress();
        window.handleBackPress = undefined;
      };
    }

    // Android WebView cleanup
    return () => {
      if (isAndroidWebView) resetBackPress();
    };
  }, [isAndroidWebView, handleInternalBackNavigation]);

  // Day click
  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  // Set Kundali back action
  const setKundaliBackAction = useCallback((action: () => void) => {
    kundaliBackActionRef.current = action;
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
  };
};

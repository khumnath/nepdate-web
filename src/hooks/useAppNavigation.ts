// useAppNavigation.ts
import { useState, useEffect, useRef, useCallback } from 'react';
import { ActiveView } from '../types/types'; // Assuming this path is correct

// Extend the Window interface to include our injected Android object
// and the global handleBackPress function for TypeScript
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

  // Callback for KundaliPage to handle its internal back navigation
  const kundaliBackActionRef = useRef<(() => void) | null>(null);

  // Keep track of the 'show exit toast' state for rendering
  const [showExitToast, setShowExitToast] = useState(false);

  // Use refs for the actual back press logic to avoid stale closures
  const backPressedTimerRef = useRef<number | null>(null);
  const backPressedCounterRef = useRef(0); // 0: no press, 1: pressed once, 2: pressed twice

  const [isAndroidWebView, setIsAndroidWebView] = useState(false);

  useEffect(() => {
    if (typeof window.Android !== 'undefined' && typeof window.Android.isAndroidApp === 'function') {
      setIsAndroidWebView(window.Android.isAndroidApp());
    }
  }, []);

  // Backspace closes menu when open (existing logic)
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

  // This function encapsulates the PWA's internal navigation logic
  // It returns true if an internal state was handled, false otherwise.
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
      if (isKundaliResultsVisible) {
        if (kundaliBackActionRef.current) {
          kundaliBackActionRef.current(); // Tell KundaliPage to go back to its form
          return true;
        }
      } else {
        setActiveView('calendar'); // Go back to main app (calendar)
        return true;
      }
    }

    if (activeView === 'converter' || activeView === 'settings') {
      setActiveView('calendar');
      return true;
    }
    return false;
  }, [isModalOpen, isAboutOpen, isMenuOpen, activeView, isKundaliResultsVisible]);

  // Back button and navigation handling (for both Android WebView and browser)
  useEffect(() => {
    // Helper to reset the back press state
    const resetBackPress = () => {
      backPressedCounterRef.current = 0;
      setShowExitToast(false); // Hide the toast
      if (backPressedTimerRef.current) {
        clearTimeout(backPressedTimerRef.current);
        backPressedTimerRef.current = null;
      }
    };

    // Define the global handleBackPress function for Android WebView
    window.handleBackPress = (): boolean => {
      const handledInternal = handleInternalBackNavigation();
      if (handledInternal) {
        resetBackPress(); // Reset if internal navigation occurred
        return true; // Tell Android that JS handled an internal navigation
      }

      // No internal navigation handled, proceed with app exit logic
      backPressedCounterRef.current += 1;

      if (backPressedCounterRef.current === 1) {
        // First back press: show toast, start timer
        setShowExitToast(true);
        if (navigator.vibrate) {
          navigator.vibrate(50);
        }
        if (backPressedTimerRef.current) clearTimeout(backPressedTimerRef.current); // Clear any old timer
        backPressedTimerRef.current = window.setTimeout(() => {
          resetBackPress(); // Reset after 2 seconds if no second press
        }, 2000);
        return true; // Tell Android that JS handled the first back press (showing toast)
      } else {
        // Second back press within the timeout: exit app
        resetBackPress(); // Reset immediately before exiting
        return false; // Tell Android to exit the app
      }
    };

    // This handles standard browser popstate events (for non-Android WebView environments)
    const handlePopState = () => {
      const handledInternal = handleInternalBackNavigation();
      if (!handledInternal) {
        backPressedCounterRef.current += 1;

        if (backPressedCounterRef.current === 1) {
          setShowExitToast(true);
          if (navigator.vibrate) {
            navigator.vibrate(50);
          }
          if (backPressedTimerRef.current) clearTimeout(backPressedTimerRef.current);
          backPressedTimerRef.current = window.setTimeout(() => {
            resetBackPress();
          }, 2000);
          window.history.pushState(null, '', window.location.href); // Keep browser on current page for first press
        } else {
          resetBackPress(); // Reset before allowing browser to navigate
          window.history.go(-2); // Allow browser to actually go back/exit
        }
      } else {
        window.history.pushState(null, '', window.location.href);
      }
    };

    if (!isAndroidWebView) {
      // For browser, initially push state to ensure popstate works reliably
      window.history.pushState(null, '', window.location.href);
      window.addEventListener('popstate', handlePopState);
    }

    return () => {
      if (!isAndroidWebView) {
        window.removeEventListener('popstate', handlePopState);
      }
      resetBackPress(); // Clear any pending state/timers on unmount
      window.handleBackPress = undefined; // Clean up the global function
    };
    // Dependencies: handleInternalBackNavigation is a useCallback, so it's stable unless its own deps change.
    // isAndroidWebView is also a stable state. No other states need to be in deps because we use refs.
  }, [isAndroidWebView, handleInternalBackNavigation]);

  const handleDayClick = (date: Date) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  // Setter for KundaliPage's back action, memoized
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
    showExitToast, // This state is now solely for triggering the toast UI
    handleDayClick,
    isAndroidWebView,
    setKundaliBackAction,
  };
};

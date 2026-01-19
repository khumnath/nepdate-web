import { useState, useEffect, useRef, useCallback } from 'react';
import { ActiveView } from '../types/types';

export const useAppNavigation = () => {
  // State for Post Params (Source + Slug)
  const [postParams, setPostParams] = useState<{ source: string, slug: string } | null>(() => {
    if (typeof window === 'undefined') return null;
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('post/')) {
        const parts = hash.split('/');
        // #post/source/slug
        if (parts.length >= 3) {
            return { source: parts[1], slug: decodeURIComponent(parts.slice(2).join('/')) };
        }
    }
    return null;
  });

  // Initialize Active View from URL Hash or Path
  const [activeView, setActiveView] = useState<ActiveView>(() => {
    if (typeof window === 'undefined') return 'calendar';

    // Check for Deep Link Paths /bs or /ad
    const pathname = window.location.pathname;
    if (pathname.includes('/bs') || pathname.includes('/ad')) {
       return 'day-detail' as ActiveView;
    }

    // Check for Hash
    const hash = window.location.hash.replace('#', '');
    if (!hash) {
      // Check for Legacy Query Params (?activeView=radio)
      const searchParams = new URLSearchParams(window.location.search);
      const activeViewParam = searchParams.get('activeView');
      if (activeViewParam) {
          return activeViewParam as ActiveView;
      }
      return 'calendar';
    }

    // Handle deep link hashes #bs?...
    if (hash.startsWith('bs?') || hash.startsWith('ad?')) {
        return 'day-detail' as ActiveView;
    }

    // Smart Blog URL: #post/source/slug
    if (hash.startsWith('post/')) {
       return 'blog-detail' as ActiveView;
    }

    // Handle standard view hashes (e.g. #converter)
    // Basic validation: split by / for sub-routes (e.g. #dharma/section)
    const baseView = hash.split('/')[0];
    return (baseView || 'calendar') as ActiveView;
  });

  const previousViewRef = useRef<ActiveView>('calendar');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Page States
  const [isKundaliResultsVisible, setIsKundaliResultsVisible] = useState(false);
  const [isDharmaResultsVisible, setIsDharmaResultsVisible] = useState(false);

  // Back Action Refs
  const kundaliBackActionRef = useRef<(() => void) | null>(null);
  const dharmaBackActionRef = useRef<(() => void) | null>(null);

  const [showExitToast, setShowExitToast] = useState(false);

  const backPressedTimerRef = useRef<number | null>(null);
  const backPressedCounterRef = useRef(0);

  const [isAndroidWebView, setIsAndroidWebView] = useState(false);

  // Android Detection
  useEffect(() => {
    let intervalId: number | null = null;
    let attempts = 0;
    const MAX_ATTEMPTS = 25;

    const checkIfAndroidApp = () => {
      attempts++;
      if (typeof window.Android !== 'undefined') {
        setIsAndroidWebView(true);
        if (intervalId) clearInterval(intervalId);
      } else if (attempts >= MAX_ATTEMPTS) {
        if (intervalId) clearInterval(intervalId);
      }
    };

    checkIfAndroidApp();
    if (!isAndroidWebView) {
      intervalId = window.setInterval(checkIfAndroidApp, 2000);
    }
    return () => { if (intervalId) clearInterval(intervalId); };
  }, []);

  // Parse Initial/Current Hash for Post Params
  useEffect(() => {
     const hash = window.location.hash.replace('#', '');
     if (activeView === 'blog-detail') {
        if (hash.startsWith('post/')) {
           const parts = hash.split('/');
           // #post/source/slug
           if (parts.length >= 3) {
             setPostParams({ source: parts[1], slug: decodeURIComponent(parts.slice(2).join('/')) });
           }
        }
     }
  }, [activeView]);

  // Browser History Sync (PWA/Desktop)
  useEffect(() => {
    if (isAndroidWebView) return; // Android handles its own back stack

    // Determine the target Hash based on View + Child State
    let targetHash = '';

    if (activeView !== 'calendar') {
      if ((activeView as any) === 'day-detail') {
          // Do not update URL for deep link view, to preserve the ?query
          return;
      }

      // Special Construction for Blog Detail
      if (activeView === 'blog-detail' && postParams) {
          targetHash = `post/${postParams.source}/${postParams.slug}`;
      } else {
          targetHash = activeView;
          if (activeView === 'kundali' && isKundaliResultsVisible) {
            targetHash += '/result';
          } else if (activeView === 'dharma' && isDharmaResultsVisible) {
            targetHash += '/section';
          }
      }
    }

    const currentHash = window.location.hash.replace('#', '');
    const isDeepLinkPath = window.location.pathname.includes('/bs') || window.location.pathname.includes('/ad');
    const isPathDirty = isDeepLinkPath && (activeView as any) !== 'day-detail';

    // If the URL doesn't match the current State OR we are on a dirty path, push a new State
    if (currentHash !== targetHash || isPathDirty) {
      let newUrl = targetHash ? `#${targetHash}` : window.location.pathname;

      if (isPathDirty) {
          // Force reset to root if path is dirty
          newUrl = `/${targetHash ? '#' + targetHash : ''}`;
      } else if (activeView === 'calendar') {
          // Normal calendar view on root
          newUrl = window.location.pathname;
      }

      // History Logic
      const isViewChange = previousViewRef.current !== activeView;
      // Treat blog-detail as a child view, not a sibling (always PUSH)
      const isDetailsView = activeView === 'blog-detail';
      const isSibling = previousViewRef.current !== 'calendar' && activeView !== 'calendar' && !isDetailsView;
      const isDeepening = currentHash === '' || (targetHash.startsWith(currentHash) && targetHash !== currentHash);

      if (isViewChange && isSibling) {
         window.history.replaceState({ view: activeView }, '', newUrl);
      }
      // If we are NOT changing views (internal nav) and we are NOT deepening (so we are going up), REPLACE.
      else if (!isViewChange && !isDeepening) {
         window.history.replaceState({ view: activeView }, '', newUrl);
      }
      // Default: PUSH (Deepening or Root -> Page)
      else {
         window.history.pushState({ view: activeView }, '', newUrl);
      }
    }
    previousViewRef.current = activeView;
  }, [activeView, isKundaliResultsVisible, isDharmaResultsVisible, isAndroidWebView, postParams]);

  // Handle Backspace for Menu
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

  // Internal Navigation Logic (The Decision Maker)
  const handleInternalBackNavigation = useCallback((): boolean => {
    if (isModalOpen) { setIsModalOpen(false); return true; }
    if (isAboutOpen) { setIsAboutOpen(false); return true; }
    if (isMenuOpen) { setIsMenuOpen(false); return true; }

    // Handle Kundali Child Pages
    if (activeView === 'kundali' && isKundaliResultsVisible && kundaliBackActionRef.current) {
      kundaliBackActionRef.current(); // Close results, stay on Kundali
      return true;
    }

    // Handle Dharma Child Pages
    if (activeView === 'dharma' && isDharmaResultsVisible && dharmaBackActionRef.current) {
      dharmaBackActionRef.current(); // Close child section, stay on Dharma
      return true;
    }

    if (isAndroidWebView) {
      // Smart Back for Blog Detail (Android)
      if (activeView === 'blog-detail' && postParams?.source) {
          setActiveView(postParams.source as ActiveView);
          setPostParams(null);
          return true;
      }

      // Android explicit navigation - Always go back to calendar if not there
      if (activeView !== 'calendar') {
        setActiveView('calendar');
        return true;
      }
    }

    return false;
  }, [
    isModalOpen, isAboutOpen, isMenuOpen, activeView,
    isKundaliResultsVisible, isDharmaResultsVisible, isAndroidWebView,
    postParams
  ]);

  // Ref to always hold latest handler
  const latestInternalHandlerRef = useRef(handleInternalBackNavigation);
  useEffect(() => { latestInternalHandlerRef.current = handleInternalBackNavigation; }, [handleInternalBackNavigation]);

  //  Back Press Handlers (Platform Specific)
  useEffect(() => {
    const resetBackPress = () => {
      backPressedCounterRef.current = 0;
      setShowExitToast(false);
      if (backPressedTimerRef.current) {
        clearTimeout(backPressedTimerRef.current);
        backPressedTimerRef.current = null;
      }
    };

    // Android WebView
    if (isAndroidWebView) {
      window.handleBackPress = (): boolean => {
        const handled = latestInternalHandlerRef.current();
        if (handled) { resetBackPress(); return true; }

        // Double press exit logic
        backPressedCounterRef.current += 1;
        if (backPressedCounterRef.current === 1) {
          setShowExitToast(true);
          if (navigator.vibrate) navigator.vibrate(50);
          backPressedTimerRef.current = window.setTimeout(resetBackPress, 2000);
          return true;
        }
        // Exit
        if (typeof window.Android?.exitApp === 'function') window.Android.exitApp();
        return false;
      };
      return () => { resetBackPress(); };
    }

    // PWA / Browser
    else {
      const handlePopState = () => {
        const handledInternal = latestInternalHandlerRef.current();

        if (handledInternal) {
          const hash = window.location.hash.replace('#', '');
          const expectedParentHash = activeView;

          if (hash === expectedParentHash) {
             return;
          }

          const currentHash = window.location.hash.replace('#', '');
          const targetHash = activeView === 'calendar' ? '' : activeView;

          if (currentHash !== targetHash) {
             const targetUrl = activeView === 'calendar' ? window.location.pathname : `#${activeView}`;
             setTimeout(() => {
                window.history.replaceState({ view: activeView }, '', targetUrl);
             }, 10);
          }
          return;
        }

        const hash = window.location.hash.replace('#', '');

        // Handle Blog Detail PopState
        if (hash.startsWith('post/')) {
           const parts = hash.split('/');
           // #post/source/slug
           if (parts.length >= 3) {
             setPostParams({ source: parts[1], slug: parts.slice(2).join('/') });
             setActiveView('blog-detail');
           }
           return;
        }

        const baseView = hash.split('/')[0];
        const newView = (baseView === '' ? 'calendar' : baseView) as ActiveView;

        setActiveView(newView);
      };

      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    }
  }, [isAndroidWebView, activeView]);

  // Day click
  const handleDayClick = (date: Date) => { setSelectedDate(date); setIsModalOpen(true); };

  // Set Back Actions
  const setKundaliBackAction = useCallback((action: () => void) => { kundaliBackActionRef.current = action; }, []);
  const setDharmaBackAction = useCallback((action: () => void) => { dharmaBackActionRef.current = action; }, []);

  return {
    activeView, setActiveView, selectedDate, isModalOpen, setIsModalOpen,
    isMenuOpen, setIsMenuOpen, isAboutOpen, setIsAboutOpen,
    isKundaliResultsVisible, setIsKundaliResultsVisible, setKundaliBackAction,
    isDharmaResultsVisible, setIsDharmaResultsVisible, setDharmaBackAction,
    showExitToast, handleDayClick, isAndroidWebView,
    postParams, setPostParams
  };
};
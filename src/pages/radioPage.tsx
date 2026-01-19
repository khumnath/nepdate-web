import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  RefreshCw,
  WifiOff,
} from "lucide-react";
import { radioStations } from "../data/static/radioPlaylist";
import darkLeather from "../../public/img/dark-leather.png";
import { getAppBaseUrl } from "../lib/utils/appUtils";

// TYPES
type StreamStatus = "pending" | "checking" | "connecting" | "online" | "offline" | "reconnecting";
type StabilityMode = "standard" | "high";

// CONFIG
const CONFIG = {
  PROBE_TIMEOUT_MS: 10000,
  CRAWL_DELAY_MS: 800,
  PLAY_GRACE_MS: 7000,
  RECONNECT_BASE_MS: 6000,
  MAX_RETRIES: 4,
  HEARTBEAT_MS: 15000,
  STABILITY_MS: 5000,
  PING_TIMEOUT_MS: 3000,
  BUFFERING_DEBOUNCE_MS: 500,
};

const RadioPage: React.FC = () => {
  // ENVIRONMENT CHECK
  const isAndroid = typeof window !== 'undefined' && !!window.Android;

  // STATE & REFS
  const [currentStationIndex, setCurrentStationIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Global Connectivity
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [isCheckingNet, setIsCheckingNet] = useState<boolean>(false);

  const [volume, setVolume] = useState<number>(() => {
    const saved = localStorage.getItem("nepali_fm_volume");
    return saved ? parseFloat(saved) : 1;
  });

  const [stabilityMode, setStabilityMode] = useState<StabilityMode>("standard");

  // Statuses
  const [stationStatuses, setStationStatuses] = useState<Record<number, StreamStatus>>({});
  const stationStatusesRef = useRef<Record<number, StreamStatus>>({});
  const [mainPlayerStatus, setMainPlayerStatus] = useState<StreamStatus>("pending");
  const [retryCount, setRetryCount] = useState<number>(0);

  // Refs
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const playbackStabilityTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const playGraceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const heartbeatIntervalRef = useRef<number | null>(null);
  const bufferingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const probeCancelFns = useRef<Record<number, () => void>>({});
  const crawlerActiveRef = useRef<boolean>(true);

  const currentStation = radioStations[currentStationIndex];

  // Sync ref for crawler
  useEffect(() => {
    stationStatusesRef.current = stationStatuses;
  }, [stationStatuses]);


  // CONNECTIVITY LOGIC
  const checkGlobalConnectivity = useCallback(async () => {
    setIsCheckingNet(true);

    if (!navigator.onLine) {
      setIsOnline(false);
      setIsCheckingNet(false);
      if (isPlaying) setIsPlaying(false);
      setMainPlayerStatus("offline");
      return;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), CONFIG.PING_TIMEOUT_MS);

      await fetch(`${getAppBaseUrl()}favicon.svg?t=${Date.now()}`, {
        method: "HEAD",
        cache: "no-store",
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      setIsOnline(true);
    } catch (err) {
      setIsOnline(false);
      if (isPlaying) setIsPlaying(false);
      setMainPlayerStatus("offline");
    } finally {
      setIsCheckingNet(false);
    }
  }, [isPlaying]);

  useEffect(() => {
    checkGlobalConnectivity();
    const handleOnline = () => checkGlobalConnectivity();
    const handleOffline = () => {
      setIsOnline(false);
      setMainPlayerStatus("offline");
      if (isPlaying) setIsPlaying(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    heartbeatIntervalRef.current = window.setInterval(checkGlobalConnectivity, CONFIG.HEARTBEAT_MS);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      if (heartbeatIntervalRef.current) window.clearInterval(heartbeatIntervalRef.current);
    };
  }, [checkGlobalConnectivity, isPlaying]);


  // HELPERS
  const setStationStatusById = useCallback((id: number, status: StreamStatus) => {
    setStationStatuses(prev => ({ ...prev, [id]: status }));
  }, []);

  const nextIndex = useCallback((index: number) => (index + 1) % radioStations.length, []);
  const prevIndex = useCallback((index: number) => (index === 0 ? radioStations.length - 1 : index - 1), []);

  const getStatusColor = (status: StreamStatus) => {
    switch (status) {
      case "online": return "bg-green-500";
      case "connecting": return "bg-blue-500";
      case "reconnecting": return "bg-orange-500";
      case "checking": return "bg-yellow-400";
      case "offline": return "bg-red-500";
      default: return "bg-gray-300";
    }
  };


  // PROBE & CRAWLER LOGIC
  const probeStation = useCallback(async (
    station: typeof radioStations[number],
    options: { updateUi?: boolean; force?: boolean } = {}
  ): Promise<StreamStatus> => {
    const { updateUi = true, force = false } = options;
    const id = station.id;

    if (!isOnline) {
      if (updateUi) setStationStatusById(id, "offline");
      return "offline";
    }
    if (!id) return "offline";

    if (!force && station.id === currentStation.id) {
      if (isPlaying || mainPlayerStatus === 'connecting' || mainPlayerStatus === 'online') {
        return 'online';
      }
    }

    if (!force && stationStatusesRef.current[id] === "online") return "online";

    if (updateUi) setStationStatusById(id, "checking");
    if (probeCancelFns.current[id]) {
      probeCancelFns.current[id]();
      delete probeCancelFns.current[id];
    }

    return new Promise<StreamStatus>((resolve) => {
      const audio = new Audio();
      audio.muted = true;
      audio.preload = "metadata";

      const cleanup = () => {
        audio.onloadedmetadata = null;
        audio.oncanplay = null;
        audio.onerror = null;
        try {
          audio.src = "";
          audio.remove();
        } catch { }
        if (probeCancelFns.current[id]) delete probeCancelFns.current[id];
      };

      const timer = setTimeout(() => {
        cleanup();
        if (updateUi) setStationStatusById(id, "offline");
        resolve("offline");
      }, CONFIG.PROBE_TIMEOUT_MS);

      const onSuccess = () => {
        clearTimeout(timer);
        cleanup();
        if (updateUi) setStationStatusById(id, "online");
        resolve("online");
      };

      const onError = () => {
        clearTimeout(timer);
        cleanup();
        if (updateUi) setStationStatusById(id, "offline");
        resolve("offline");
      };

      probeCancelFns.current[id] = () => {
        clearTimeout(timer);
        cleanup();
        resolve("checking");
      };

      audio.oncanplay = onSuccess;
      audio.onerror = onError;
      try {
        audio.src = station.src;
        audio.load();
      } catch { onError(); }
    });
  }, [isOnline, currentStation.id, isPlaying, mainPlayerStatus, setStationStatusById]);

  useEffect(() => {
    if (!isOnline) return;
    let isMounted = true;
    crawlerActiveRef.current = true;

    const run = async () => {
      const BATCH_SIZE = 3;
      let batch: typeof radioStations = [];

      for (let i = 0; i < radioStations.length; i++) {
        if (!isMounted || !isOnline || !crawlerActiveRef.current) break;
        const station = radioStations[i];
        if (station.id === currentStation.id && isPlaying) continue;

        if (stationStatusesRef.current[station.id] !== "online") batch.push(station);

        if (batch.length >= BATCH_SIZE) {
          await Promise.all(batch.map(s => probeStation(s)));
          batch = [];
          await new Promise(res => setTimeout(res, CONFIG.CRAWL_DELAY_MS));
        }
      }
      if (batch.length > 0 && isMounted && isOnline) {
        await Promise.all(batch.map(s => probeStation(s)));
      }

      const curStatus = stationStatusesRef.current[currentStation.id];
      if (isMounted && isPlaying && isOnline && curStatus === "offline") {
        skipToNextAndPlay();
      }
    };

    run();
    const interval = window.setInterval(run, 60000);
    return () => {
      isMounted = false;
      crawlerActiveRef.current = false;
      clearInterval(interval);
      Object.values(probeCancelFns.current).forEach(c => c());
    };
  }, [isOnline, currentStationIndex, isPlaying, probeStation]);


  // PLAYBACK CONTROLS

  const skipToNextAndPlay = useCallback((triesLeft = radioStations.length) => {
    if (!isOnline || triesLeft <= 0) {
      setIsPlaying(false);
      setMainPlayerStatus("offline");
      return;
    }

    const idx = nextIndex(currentStationIndex);
    setCurrentStationIndex(idx);
    const id = radioStations[idx].id;
    const status = stationStatusesRef.current[id];

    if (status === "offline") {
      skipToNextAndPlay(triesLeft - 1);
    } else {
      setIsPlaying(true);
      setMainPlayerStatus(status === "online" ? "connecting" : "checking");
    }
  }, [currentStationIndex, isOnline, nextIndex]);

  const handlePlayError = useCallback((skipImmediately = false) => {
    if (!isOnline) {
      setMainPlayerStatus("offline");
      setIsPlaying(false);
      return;
    }
    setStationStatusById(currentStation.id, "checking");

    // RETRY ONCE
    if (!skipImmediately && retryCount === 0) {
      setMainPlayerStatus("reconnecting");
      setRetryCount(1);

      if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current);

      retryTimeoutRef.current = setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.load();
          const p = audioRef.current.play();
          if (p !== undefined) p.catch(() => handlePlayError(true));
        }
      }, 2000);
      return;
    }

    if (retryCount < CONFIG.MAX_RETRIES) {
      setRetryCount(prev => prev + 1);
      setMainPlayerStatus("reconnecting");
      if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = setTimeout(() => {
        // Direct retry without probe first (Trust Player)
        if (audioRef.current && isOnline) {
          audioRef.current.load();
          audioRef.current.play().catch(() => handlePlayError(true));
        }
      }, CONFIG.RECONNECT_BASE_MS * Math.pow(1.5, retryCount));
      return;
    }
    setStationStatusById(currentStation.id, "offline");
    skipToNextAndPlay();
  }, [isOnline, currentStation, retryCount, skipToNextAndPlay, probeStation, setStationStatusById]);


  // AUDIO HANDLERS

  const onAudioPlaying = () => {
    setIsPlaying(true);
    if (bufferingTimeoutRef.current) clearTimeout(bufferingTimeoutRef.current);
    if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current);

    // LOCK STATUS TO ONLINE
    if (retryCount === 0) {
      setMainPlayerStatus("online");
      setStationStatusById(currentStation.id, "online");
    }
    if (playbackStabilityTimeoutRef.current) clearTimeout(playbackStabilityTimeoutRef.current);
    playbackStabilityTimeoutRef.current = setTimeout(() => {
      setRetryCount(0);
    }, CONFIG.STABILITY_MS);
  };

  const onAudioPause = () => {
    if (mainPlayerStatus === 'connecting' || mainPlayerStatus === 'reconnecting') return;
    if (audioRef.current && audioRef.current.paused) {
      setIsPlaying(false);
    }
  };

  const onAudioWaiting = () => {
    if (isPlaying && mainPlayerStatus !== "offline") {
      if (bufferingTimeoutRef.current) clearTimeout(bufferingTimeoutRef.current);
      bufferingTimeoutRef.current = setTimeout(() => setMainPlayerStatus("connecting"), CONFIG.BUFFERING_DEBOUNCE_MS);
    }
  };

  const onAudioTimeUpdate = () => {
    if (audioRef.current && audioRef.current.currentTime > 0 && !audioRef.current.paused) {
      if (!isPlaying) setIsPlaying(true);
      if (mainPlayerStatus !== "online" && retryCount === 0) {
        setMainPlayerStatus("online");
        setStationStatusById(currentStation.id, "online");
      }
      if (bufferingTimeoutRef.current) clearTimeout(bufferingTimeoutRef.current);
    }
  };

  const onAudioError = () => handlePlayError(false);


  // Volume Sync
  useEffect(() => {
    if (audioRef.current) {
      if (isAndroid) {
        // Force silence on Android
        audioRef.current.volume = 0;
        audioRef.current.muted = true;
      } else {
        // Standard web behavior
        audioRef.current.volume = isMuted ? 0 : volume;
        audioRef.current.muted = false;
      }
    }
  }, [volume, isMuted, isAndroid]); // Added isAndroid dep

  // AUDIO INITIALIZATION (PROGRAMMATIC)
  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio();
      audio.preload = "auto";
      if (isAndroid) {
        audio.volume = 0;
        audio.muted = true;
      } else {
        audio.volume = isMuted ? 0 : volume;
      }
      audioRef.current = audio;
    }
  }, []); // Logic handled inside on creation, subsequent updates handled by Volume Sync effect

  // AUDIO EVENT BINDING
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.addEventListener('playing', onAudioPlaying);
    audio.addEventListener('pause', onAudioPause);
    audio.addEventListener('waiting', onAudioWaiting);
    audio.addEventListener('error', onAudioError);
    audio.addEventListener('timeupdate', onAudioTimeUpdate);

    return () => {
      audio.removeEventListener('playing', onAudioPlaying);
      audio.removeEventListener('pause', onAudioPause);
      audio.removeEventListener('waiting', onAudioWaiting);
      audio.removeEventListener('error', onAudioError);
      audio.removeEventListener('timeupdate', onAudioTimeUpdate);
    };
  }, [onAudioPlaying, onAudioPause, onAudioWaiting, onAudioError, onAudioTimeUpdate]);


  // MAIN PLAYBACK LOOP
  useEffect(() => {
    if (!audioRef.current) return;
    setRetryCount(0);
    if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current);
    if (playGraceTimeoutRef.current) clearTimeout(playGraceTimeoutRef.current);

    const knownStatus = stationStatuses[currentStation.id];
    if (!isOnline) {
      setMainPlayerStatus("offline");
    } else {
      if (isPlaying) {
        setMainPlayerStatus(knownStatus === "online" ? "connecting" : "checking");
      } else {
        if (knownStatus === "online") setMainPlayerStatus("online");
        else if (knownStatus === "offline") setMainPlayerStatus("offline");
        else setMainPlayerStatus("checking");
      }
    }

    if (audioRef.current.src !== currentStation.src) {
      audioRef.current.src = currentStation.src;
      audioRef.current.load();
    }

    if (isPlaying && isOnline) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((e) => {
          if (e.name === 'NotAllowedError') {
            setIsPlaying(false);
          } else if (e.name !== 'AbortError') {
            handlePlayError(true);
          }
        });
      }
    } else {
      if (!audioRef.current.paused) audioRef.current.pause();
    }
  }, [currentStationIndex, isOnline]);

  /* ANDROID INTERFACE */
  useEffect(() => {
    if (window.Android && window.Android.onHtml5AudioEvent) {
      const cover = currentStation.cover.startsWith('http')
        ? currentStation.cover
        : `${getAppBaseUrl()}${currentStation.cover}`;

      window.Android.onHtml5AudioEvent(
        currentStation.src,
        isPlaying,
        currentStation.name || "Unknown",
        currentStation.author || "Radio",
        cover
      );
    }
  }, [isPlaying, currentStation]);

  useEffect(() => {
    const controlPlayer = (command: 'play' | 'pause' | 'stop') => {
      if (command === 'pause' || command === 'stop') {
        setIsPlaying(false);
        setMainPlayerStatus(isOnline ? 'online' : 'offline');
        if (audioRef.current && !audioRef.current.paused) {
          audioRef.current.pause();
        }
      }
      else if (command === 'play') {
        if (audioRef.current && audioRef.current.paused) {
          setMainPlayerStatus('connecting');
          audioRef.current.play().catch(() => handlePlayError(true));
        } else if (!isPlaying) {
          setIsPlaying(true);
        }
      }
    };

    window.controlPlayer = controlPlayer;
    return () => { delete window.controlPlayer; };
  }, [handlePlayError, isPlaying, isOnline]);

  /* ===========================
     UI HANDLERS
     =========================== */
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current);
    setRetryCount(0);

    if (!isOnline) {
      checkGlobalConnectivity();
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      const status = stationStatusesRef.current[currentStation.id];
      if (status === 'offline') {
        skipToNextAndPlay();
        return;
      }
      setIsPlaying(true);
      setMainPlayerStatus(status === 'online' ? 'connecting' : 'checking');
      audioRef.current.play().catch(() => handlePlayError(true));
    }
  };

  const handleNext = () => {
    setCurrentStationIndex(prev => nextIndex(prev));
    if (isOnline) setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentStationIndex(prev => prevIndex(prev));
    if (isOnline) setIsPlaying(true);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    localStorage.setItem("nepali_fm_volume", newVol.toString());
    if (newVol > 0) setIsMuted(false);
  };

  /* ===========================
     RENDER
     =========================== */
  return (
    <div className="w-full h-full flex flex-col bg-gray-100 dark:bg-black select-none font-sans overflow-hidden">


      {/* CHASSIS HEADER */}
      <div className="shrink-0 relative z-20 transition-colors duration-300 bg-zinc-300 dark:bg-[#222] shadow-2xl border-b-[6px] border-zinc-400 dark:border-[#151515]">
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none" style={{ backgroundImage: `url(${darkLeather})` }}></div>

        <div className="p-3 pb-5 flex flex-col gap-3 relative">
          {/* Top Row */}
          <div className="flex justify-between items-center px-1">
            <div className="flex gap-1">
              {[...Array(6)].map((_, i) => <div key={i} className="w-1 h-6 bg-zinc-400 dark:bg-black/60 rounded-full shadow-[inset_0_0_2px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_0_2px_rgba(255,255,255,0.1)]"></div>)}
            </div>
            <div className="text-zinc-500 dark:text-gray-600 font-bold text-[10px] tracking-[0.3em] uppercase drop-shadow-sm">NEPDATE RADIO</div>
            <div className="flex gap-1">
              {[...Array(6)].map((_, i) => <div key={i} className="w-1 h-6 bg-zinc-400 dark:bg-black/60 rounded-full shadow-[inset_0_0_2px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_0_2px_rgba(255,255,255,0.1)]"></div>)}
            </div>
          </div>

          {/* Middle Row */}
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative h-20 bg-[#bcc5b3] dark:bg-[#9ea792] rounded shadow-[inset_0_0_15px_rgba(0,0,0,0.4)] dark:shadow-[inset_0_0_15px_rgba(0,0,0,0.6)] border-[3px] border-zinc-400 dark:border-[#444] flex items-center px-3 overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.2)_45%,transparent_60%)]"></div>
              <div className="w-full font-mono text-[#282f2c] z-10 flex flex-col justify-center">
                <div className="flex justify-between text-[9px] font-bold opacity-70 mb-0.5">
                  <span>{isOnline ? (mainPlayerStatus === 'offline' ? 'NO SIGNAL' : 'STEREO') : 'OFFLINE'}</span>
                  <span>FM 90-108</span>
                </div>
                <div className="text-lg leading-tight font-black uppercase truncate tracking-tighter opacity-90 w-full">
                  {currentStation.name}
                </div>
                <div className="text-[10px] uppercase truncate opacity-80 mt-0.5 font-semibold">
                  {mainPlayerStatus === 'reconnecting' ? '>>> SCANNING' :
                    mainPlayerStatus === 'connecting' ? '>>> LOADING' :
                      mainPlayerStatus === 'checking' ? '>>> TUNING' :
                        mainPlayerStatus === 'offline' || !isOnline ? '' :
                          isPlaying ? `>>> PLAYING` : 'PAUSED'}
                </div>
              </div>
            </div>

            <div className={`shrink-0 w-28 h-28 rounded-full bg-zinc-800 dark:bg-[#111] border-[3px] border-zinc-400 dark:border-[#333] shadow-lg flex items-center justify-center relative overflow-hidden ${isPlaying ? 'animate-[spin_4s_linear_infinite]' : ''}`}>
              <img src={currentStation.cover} className="absolute inset-0 w-full h-full object-fill opacity-80" alt="" />
              <div className="w-5 h-5 bg-[#e5e5e5] rounded-full border-4 border-[#333] z-10 shadow-md"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-between mt-1 px-1">

            {/* VOLUME CONTROL HIDDEN ON ANDROID */}
            {!isAndroid ? (
              <div className="flex flex-col items-center gap-1 group">
                <div className="relative w-16 h-6">
                  <input type="range" min="0" max="1" step="0.01" value={isMuted ? 0 : volume} onChange={handleVolumeChange} className="absolute w-full h-full opacity-0 cursor-pointer z-20" />
                  <div className="w-full h-1.5 bg-zinc-400/50 dark:bg-gray-800 rounded-full mt-2.5 overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,1)]">
                    <div className="h-full bg-orange-600" style={{ width: `${(isMuted ? 0 : volume) * 100}%` }}></div>
                  </div>
                  <div className="absolute top-1/2 left-0 w-2 h-2 bg-zinc-500 dark:bg-gray-400 rounded-full -translate-y-1/2 pointer-events-none shadow-md" style={{ left: `calc(${(isMuted ? 0 : volume) * 100}% - 4px)` }}></div>
                </div>
                <span className="text-[8px] text-zinc-500 dark:text-gray-500 font-bold uppercase tracking-wider">Vol</span>
              </div>
            ) : (
              <div className="w-16"></div>
            )}

            <div className="flex items-center gap-3 bg-zinc-400/20 dark:bg-[#181818] p-1.5 px-3 rounded-full border-t border-zinc-400/30 dark:border-gray-700 shadow-[0_4px_6px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.4)] dark:shadow-[0_4px_6px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)]">
              <button onClick={handlePrev} className="w-8 h-8 rounded-full bg-gradient-to-b from-zinc-100 to-zinc-300 dark:from-[#444] dark:to-[#222] shadow-[0_2px_2px_rgba(0,0,0,0.2)] dark:shadow-[0_2px_2px_rgba(0,0,0,0.5)] flex items-center justify-center text-zinc-600 dark:text-gray-400 active:scale-95 active:shadow-inner border border-zinc-400 dark:border-[#444]">
                <SkipBack size={14} fill="currentColor" />
              </button>
              <button onClick={togglePlay} className={`w-12 h-12 -my-2 rounded-full flex items-center justify-center text-white shadow-[0_3px_5px_rgba(0,0,0,0.3)] dark:shadow-[0_3px_5px_rgba(0,0,0,0.6)] active:scale-95 active:shadow-inner border-2 border-zinc-400 dark:border-[#555] transition-all ${isPlaying ? 'bg-gradient-to-b from-orange-500 to-orange-700' : 'bg-gradient-to-b from-blue-500 to-blue-700'}`}>
                {mainPlayerStatus === 'connecting' || mainPlayerStatus === 'reconnecting' ? (
                  <RefreshCw size={18} className="animate-spin" />
                ) : isPlaying ? (
                  <Pause size={18} fill="currentColor" />
                ) : (
                  <Play size={18} fill="currentColor" className="ml-0.5" />
                )}
              </button>
              <button onClick={handleNext} className="w-8 h-8 rounded-full bg-gradient-to-b from-zinc-100 to-zinc-300 dark:from-[#444] dark:to-[#222] shadow-[0_2px_2px_rgba(0,0,0,0.2)] dark:shadow-[0_2px_2px_rgba(0,0,0,0.5)] flex items-center justify-center text-zinc-600 dark:text-gray-400 active:scale-95 active:shadow-inner border border-zinc-400 dark:border-[#444]">
                <SkipForward size={14} fill="currentColor" />
              </button>
            </div>

            <div className="flex flex-col items-center gap-1">
              <button onClick={() => setStabilityMode(m => m === 'standard' ? 'high' : 'standard')} className={`w-8 h-4 rounded-full border border-zinc-400 dark:border-gray-700 shadow-inner flex items-center px-0.5 transition-colors ${stabilityMode === 'high' ? 'bg-green-700 dark:bg-green-900 justify-end' : 'bg-zinc-300 dark:bg-gray-800 justify-start'}`}>
                <div className={`w-3 h-3 rounded-full shadow-md ${stabilityMode === 'high' ? 'bg-green-400' : 'bg-zinc-500 dark:bg-gray-500'}`}></div>
              </button>
              <span className="text-[8px] text-zinc-500 dark:text-gray-500 font-bold uppercase tracking-wider">{stabilityMode === 'high' ? 'Auto' : 'Std'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLLABLE LIST */}
      <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-[#0a0a0a] scroll-smooth">
        {/* OFFLINE BANNER */}
        {!isOnline && (
          <div className="bg-red-600 text-white text-xs font-bold p-2 text-center shadow-inner flex items-center justify-center gap-2 sticky top-0 z-10">
            <WifiOff size={14} />
            <span>CONNECTION LOST</span>
            <button
              onClick={checkGlobalConnectivity}
              disabled={isCheckingNet}
              className={`bg-white/20 px-3 py-0.5 rounded ml-2 flex items-center gap-2 transition-all ${isCheckingNet ? 'opacity-70 cursor-wait' : 'hover:bg-white/30 active:scale-95'}`}
            >
              {isCheckingNet && <RefreshCw size={10} className="animate-spin" />}
              {isCheckingNet ? 'TRYING...' : 'RETRY'}
            </button>
          </div>
        )}

        <div className="divide-y divide-gray-200 dark:divide-gray-800">
          {radioStations.map((station, index) => {
            const isCurrent = index === currentStationIndex;
            const status = isCurrent && isPlaying ? 'online' : stationStatuses[station.id] || 'pending';
            const visualStatus: StreamStatus = !isOnline ? 'offline' : (isCurrent ? mainPlayerStatus : status);

            return (
              <div
                key={station.id}
                onClick={() => {
                  if (isCurrent && isPlaying) togglePlay();
                  else {
                    setCurrentStationIndex(index);
                    if (isOnline) setIsPlaying(true);
                  }
                }}
                className={`p-3 flex items-center gap-3 cursor-pointer hover:bg-zinc-200 dark:hover:bg-[#1a1a1a] transition active:bg-zinc-300 dark:active:bg-[#222] ${isCurrent ? 'bg-orange-50 dark:bg-[#151515]' : ''}`}
              >
                <div className="relative w-3 h-3 shrink-0 flex items-center justify-center">
                  <div className={`w-2 h-2 rounded-full shadow-sm ${getStatusColor(visualStatus)}`}></div>
                  {['online', 'connecting', 'reconnecting'].includes(visualStatus) && <div className={`absolute inset-0 rounded-full animate-ping opacity-50 ${getStatusColor(visualStatus)}`}></div>}
                </div>

                <div className="flex-1 min-w-0">
                  <div className={`text-sm font-bold truncate ${isCurrent ? 'text-orange-700 dark:text-orange-500' : 'text-zinc-800 dark:text-gray-300'}`}>{station.name}</div>
                  <div className="text-[10px] text-zinc-500 dark:text-gray-500 uppercase font-semibold truncate tracking-wide">
                    {visualStatus === 'offline' ? 'OFFLINE' :
                      visualStatus === 'reconnecting' ? 'RETRYING...' :
                        visualStatus === 'connecting' ? 'BUFFERING...' :
                          station.author}
                  </div>
                </div>

                {isCurrent && isPlaying && (
                  <div className="flex gap-0.5 items-end h-3 ml-2 shrink-0">
                    <div className="w-1 bg-orange-500 animate-[bounce_0.8s_infinite] h-2"></div>
                    <div className="w-1 bg-orange-500 animate-[bounce_1.1s_infinite] h-full"></div>
                    <div className="w-1 bg-orange-500 animate-[bounce_0.9s_infinite] h-1.5"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default RadioPage;
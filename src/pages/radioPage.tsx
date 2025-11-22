import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Zap, ShieldCheck, Signal, RefreshCw, WifiOff } from 'lucide-react';
import { radioStations } from '../data/static/radioPlaylist';

type StreamStatus = 'pending' | 'checking' | 'connecting' | 'online' | 'offline' | 'reconnecting';
type StabilityMode = 'standard' | 'high';

const RadioPage: React.FC = () => {
	const [currentStationIndex, setCurrentStationIndex] = useState<number>(0);
	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [isMuted, setIsMuted] = useState<boolean>(false);

	// --- GLOBAL CONNECTIVITY STATE ---
	// We trust navigator.onLine initially, but verify with ping immediately
	const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
	const [isCheckingNet, setIsCheckingNet] = useState<boolean>(false);

	const [volume, setVolume] = useState<number>(() => {
		const saved = localStorage.getItem('nepali_fm_volume');
		return saved ? parseFloat(saved) : 1;
	});

	const [stabilityMode, setStabilityMode] = useState<StabilityMode>('standard');
	const [retryCount, setRetryCount] = useState<number>(0);
	const [mainPlayerStatus, setMainPlayerStatus] = useState<StreamStatus>('pending');
	const [stationStatuses, setStationStatuses] = useState<Record<number, StreamStatus>>({});

	const audioRef = useRef<HTMLAudioElement>(null);
	const retryTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const currentStation = radioStations[currentStationIndex];

	// --- 1. ROBUST CONNECTIVITY CHECK (Bypasses Service Worker) ---
	const checkGlobalConnectivity = useCallback(async () => {
		setIsCheckingNet(true);

		// Step 1: Quick Navigator Check
		if (!navigator.onLine) {
			setIsOnline(false);
			setIsCheckingNet(false);
			if (isPlaying) setIsPlaying(false); // Stop player if OS says offline
			return;
		}

		// Step 2: Real Network Ping (Bypassing Cache)
		try {
			const controller = new AbortController();
			const timeoutId = setTimeout(() => controller.abort(), 3000); // 3s timeout

			// CACHE BUSTING: ?t=Date.now() forces the browser & SW to fetch from network
			await fetch(`${window.location.origin}/favicon.svg?t=${Date.now()}`, {
				method: 'HEAD',
				cache: 'no-store',
				signal: controller.signal
			});

			clearTimeout(timeoutId);
			setIsOnline(true);
		} catch (error) {
			console.log("Network Ping Failed: Offline");
			setIsOnline(false);
			if (isPlaying) setIsPlaying(false);
		} finally {
			setIsCheckingNet(false);
		}
	}, [isPlaying]);

	// Initial Check & Listeners
	useEffect(() => {
		checkGlobalConnectivity();

		const handleOnline = () => checkGlobalConnectivity();
		const handleOffline = () => setIsOnline(false);

		window.addEventListener('online', handleOnline);
		window.addEventListener('offline', handleOffline);

		// Periodic heartbeat (every 15s) to ensure we don't get stuck in offline state
		const interval = setInterval(checkGlobalConnectivity, 15000);

		return () => {
			window.removeEventListener('online', handleOnline);
			window.removeEventListener('offline', handleOffline);
			clearInterval(interval);
		};
	}, [checkGlobalConnectivity]);


	// --- PLAYER LOGIC ---

	const getStationStatus = (index: number): StreamStatus | undefined => {
		const id = radioStations[index]?.id;
		return id != null ? stationStatuses[id] : undefined;
	};

	const nextIndex = (index: number) => (index + 1) % radioStations.length;
	const prevIndex = (index: number) => (index === 0 ? radioStations.length - 1 : index - 1);

	// --- 2. CIRCUIT BREAKER: Prevent Loop if Offline ---
	const skipToNextAndPlay = (triesLeft = radioStations.length) => {
		// STOP: If global internet is down, do not skip. Just stop.
		if (!isOnline) {
			setIsPlaying(false);
			setMainPlayerStatus('offline');
			return;
		}

		if (triesLeft <= 0) {
			setIsPlaying(false);
			setMainPlayerStatus('offline');
			return;
		}
		const idx = nextIndex(currentStationIndex);
		const status = getStationStatus(idx);

		setCurrentStationIndex(idx);

		// If known offline, keep skipping immediately
		if (status === 'offline') {
			skipToNextAndPlay(triesLeft - 1);
			return;
		}

		setIsPlaying(true);
		setMainPlayerStatus(status === 'online' ? 'connecting' : 'checking');
	};

	// BACKGROUND CRAWLER
	useEffect(() => {
		if (!isOnline) return; // Don't crawl if offline

		let isMounted = true;
		const checkQueue = async () => {
			for (const station of radioStations) {
				if (!isMounted || !isOnline) break;
				if (stationStatuses[station.id] && stationStatuses[station.id] !== 'pending') continue;

				setStationStatuses(prev => ({ ...prev, [station.id]: 'checking' }));

				try {
					const controller = new AbortController();
					const timeoutId = setTimeout(() => controller.abort(), 3000);
					await fetch(station.src, { method: 'HEAD', mode: 'no-cors', signal: controller.signal });
					clearTimeout(timeoutId);
					if (isMounted) setStationStatuses(prev => ({ ...prev, [station.id]: 'online' }));
				} catch {
					if (isMounted) setStationStatuses(prev => ({ ...prev, [station.id]: 'offline' }));
				}
				await new Promise(resolve => setTimeout(resolve, 200));
			}

			if (isMounted && isPlaying && stationStatuses[currentStation.id] === 'offline' && isOnline) {
				skipToNextAndPlay();
			}
		};
		checkQueue();
		return () => { isMounted = false; };
	}, [isOnline]);

	// PLAYER EFFECT
	useEffect(() => {
		if (!audioRef.current) return;

		setRetryCount(0);
		if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current);

		const knownStatus = stationStatuses[currentStation.id];

		if (!isOnline) {
			setMainPlayerStatus('offline');
		} else {
			setMainPlayerStatus(knownStatus === 'online' ? 'connecting' : 'checking');
		}

		audioRef.current.src = currentStation.src;
		audioRef.current.load();

		if (isPlaying) {
			if (!isOnline) {
				setIsPlaying(false);
				setMainPlayerStatus('offline');
				return;
			}

			const playPromise = audioRef.current.play();
			if (playPromise !== undefined) {
				playPromise.catch((_e) => handlePlayError(true));
			}
		}
	}, [currentStationIndex, isOnline]);

	// VOLUME SYNC
	useEffect(() => {
		if (audioRef.current) {
			audioRef.current.volume = isMuted ? 0 : volume;
		}
	}, [volume, isMuted]);

	// ANDROID INTERFACE
	useEffect(() => {
		if (window.Android && window.Android.onHtml5AudioEvent) {
			const name = currentStation.name || "Unknown Station";
			const author = currentStation.author || "Live Radio";
			const cover = currentStation.cover.startsWith('http')
				? currentStation.cover
				: `${window.location.origin}/${currentStation.cover}`;

			window.Android.onHtml5AudioEvent(
				currentStation.src,
				isPlaying,
				name,
				author,
				cover
			);
		}
	}, [isPlaying, currentStation]);

	useEffect(() => {
		const controlPlayer = (command: 'play' | 'pause' | 'stop') => {
			if (command === 'pause' || command === 'stop') {
				if (audioRef.current && !audioRef.current.paused) {
					audioRef.current.pause();
				} else {
					setIsPlaying(false);
				}
			} else if (command === 'play') {
				if (audioRef.current && audioRef.current.paused) {
					setMainPlayerStatus('connecting');
					audioRef.current.play().catch(() => handlePlayError(true));
				}
			}
		};
		window.controlPlayer = controlPlayer;
		return () => { delete window.controlPlayer; };
	}, []);

	// HANDLERS
	const handlePlayError = (skipImmediately = false) => {
		// GUARD: If device is offline, do NOT skip. Just fail.
		if (!isOnline) {
			setMainPlayerStatus('offline');
			setIsPlaying(false);
			return;
		}

		setStationStatuses(prev => ({ ...prev, [currentStation.id]: 'offline' }));

		if (stabilityMode === 'high' && retryCount < 5 && !skipImmediately) {
			setMainPlayerStatus('reconnecting');
			setRetryCount(prev => prev + 1);

			retryTimeoutRef.current = setTimeout(() => {
				if (audioRef.current && isPlaying && isOnline) {
					audioRef.current.load();
					audioRef.current.play().catch(() => {
						skipToNextAndPlay();
					});
				}
			}, 1500);
		} else {
			skipToNextAndPlay();
		}
	};

	const onAudioError = () => handlePlayError();
	const onAudioStalled = () => { if (isPlaying && stabilityMode === 'high') handlePlayError(); };
	const onAudioPlaying = () => {
		setIsPlaying(true);
		setRetryCount(0);
		setMainPlayerStatus('online');
		setStationStatuses(prev => ({ ...prev, [currentStation.id]: 'online' }));
	};
	const onAudioPause = () => setIsPlaying(false);
	const onAudioWaiting = () => {
		if (mainPlayerStatus !== 'offline' && mainPlayerStatus !== 'reconnecting') {
			setMainPlayerStatus('connecting');
		}
	};

	const togglePlay = () => {
		if (!audioRef.current) return;
		if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current);
		setRetryCount(0);

		if (!isOnline) {
			// If offline when clicking play, trigger a manual check immediately
			checkGlobalConnectivity();
			return;
		}

		if (isPlaying) {
			audioRef.current.pause();
		} else {
			const status = stationStatuses[currentStation.id];
			if (status === 'offline') {
				skipToNextAndPlay();
				return;
			}
			setIsPlaying(true);
			setMainPlayerStatus(status === 'online' ? 'connecting' : 'checking');
			const playPromise = audioRef.current.play();
			if (playPromise !== undefined) {
				playPromise.catch(() => handlePlayError(true));
			}
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
		localStorage.setItem('nepali_fm_volume', newVol.toString());
		if (newVol > 0) setIsMuted(false);
	};

	const getStatusColor = (status: StreamStatus) => {
		switch (status) {
			case 'online': return 'bg-green-500';
			case 'connecting': return 'bg-blue-500';
			case 'reconnecting': return 'bg-orange-500';
			case 'checking': return 'bg-yellow-400';
			case 'offline': return 'bg-red-500';
			default: return 'bg-gray-300';
		}
	};

	return (
		<div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4 select-none">
			<audio
				ref={audioRef}
				onError={onAudioError}
				onPlaying={onAudioPlaying}
				onPause={onAudioPause}
				onWaiting={onAudioWaiting}
				onStalled={onAudioStalled}
				crossOrigin="anonymous"
			/>

			<div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl w-full max-w-md overflow-hidden relative flex flex-col max-h-[90vh]">

				{/* --- 3. OFFLINE BANNER WITH RELOAD BUTTON --- */}
				{!isOnline && (
					<div className="bg-red-500 text-white p-3 flex flex-col items-center justify-center gap-2">
						<div className="flex items-center gap-2 text-sm font-bold">
							<WifiOff size={16} />
							<span>No Internet Connection</span>
						</div>

						<button
							onClick={checkGlobalConnectivity}
							disabled={isCheckingNet}
							className="bg-white text-red-600 px-4 py-1 rounded-full text-xs font-bold active:scale-95 transition-transform flex items-center gap-2 hover:bg-gray-100"
						>
							{isCheckingNet ? <RefreshCw size={12} className="animate-spin" /> : <RefreshCw size={12} />}
							{isCheckingNet ? "Checking..." : "Retry Connection"}
						</button>
					</div>
				)}

				<header className="text-center py-4 sm:py-6 bg-gradient-to-r from-sky-500 to-indigo-500 dark:from-gray-800 dark:to-gray-950 text-white font-bold text-xl sm:text-3xl shadow">
					नेपडेट रेडियो प्लेयर
			</header>

				{/* HEADER / COVER AREA */}
				<div className="p-4 pt-6 flex flex-col items-center shrink-0">

					{/* ROTATING LOGO */}
					<div
						className={`relative w-32 h-32 rounded-full border-4 border-gray-100 dark:border-gray-700 shadow-inner overflow-hidden mb-4 transition-transform duration-[10000ms] linear ${isPlaying ? 'rotate-slow' : ''
							}`}
					>
						<img
							src={currentStation.cover}
							alt={currentStation.name}
							className="w-full h-full object-cover"
						/>
						<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white dark:bg-gray-700 rounded-full border border-gray-200 dark:border-gray-600 z-10"></div>
					</div>

					{/* INFO */}
					<div className="text-center mb-4 w-full">
						<h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 line-clamp-1 px-2">
							{currentStation.name}
						</h2>
						<div className="flex items-center justify-center gap-2 mt-1 h-5">
							{!isOnline ? (
								<span className="text-red-500 text-xs font-medium flex items-center gap-1">
									<WifiOff size={12} /> Device Offline
								</span>
							) : mainPlayerStatus === 'offline' ? (
								<span className="text-red-500 text-xs font-medium flex items-center gap-1">
									<Signal size={12} /> Stream Offline
								</span>
							) : mainPlayerStatus === 'reconnecting' ? (
								<span className="text-orange-500 text-xs font-medium animate-pulse flex items-center gap-1">
									<RefreshCw size={12} className="animate-spin" /> Reconnecting...
								</span>
							) : mainPlayerStatus === 'connecting' ? (
								<span className="text-blue-500 text-xs font-medium animate-pulse">
									Buffering...
								</span>
							) : mainPlayerStatus === 'checking' ? (
								<span className="text-yellow-500 text-xs font-medium animate-pulse">
									Checking...
								</span>
							) : (
								<span className="text-gray-500 dark:text-gray-400 text-xs font-mono tracking-wide">
									{currentStation.author}
								</span>
							)}
						</div>
					</div>

					{/* CONTROLS */}
					<div className="flex items-center justify-center gap-8 mb-6 w-full">
						<button onClick={handlePrev} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition"><SkipBack className="w-8 h-8" fill="currentColor" /></button>

						<button
							onClick={togglePlay}
							disabled={!isOnline}
							className={`w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg transition transform active:scale-95 hover:scale-105 ${mainPlayerStatus === 'offline' || !isOnline
									? 'bg-gray-300 dark:bg-gray-600'
									: 'bg-blue-600 hover:bg-blue-700'
								}`}
						>
							{mainPlayerStatus === 'connecting' || mainPlayerStatus === 'checking' || mainPlayerStatus === 'reconnecting' ? (
								<div className="w-7 h-7 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
							) : isPlaying ? (
								<Pause className="w-7 h-7" fill="currentColor" />
							) : (
								<Play className="w-7 h-7 ml-1" fill="currentColor" />
							)}
						</button>

						<button onClick={handleNext} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition"><SkipForward className="w-8 h-8" fill="currentColor" /></button>
					</div>

					{/* VOLUME */}
					<div className="w-full flex items-center gap-3 px-6 mb-4">
						<button onClick={() => setIsMuted(!isMuted)} className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
							{isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
						</button>
						<input type="range" min="0" max="1" step="0.01" value={isMuted ? 0 : volume} onChange={handleVolumeChange} className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-600" />
					</div>

					<div className="w-full px-4 flex justify-center">
						<div className="bg-gray-100 dark:bg-gray-700 p-1 rounded-lg flex gap-1">
							<button onClick={() => setStabilityMode('standard')} className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-[10px] font-medium transition-all ${stabilityMode === 'standard' ? 'bg-white dark:bg-gray-800 text-blue-600 shadow-sm' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'}`}><Zap size={12} /> Standard</button>
							<button onClick={() => setStabilityMode('high')} className={`flex items-center gap-1 px-3 py-1.5 rounded-md text-[10px] font-medium transition-all ${stabilityMode === 'high' ? 'bg-white dark:bg-gray-800 text-orange-600 shadow-sm' : 'text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300'}`}><ShieldCheck size={12} /> Auto-Retry</button>
						</div>
					</div>

				</div>

				{/* PLAYLIST */}
				<div className="bg-gray-50 dark:bg-gray-900 border-t dark:border-gray-700 overflow-y-auto flex-1">
					{radioStations.map((station, index) => {
						const isCurrent = index === currentStationIndex;
						const status = isCurrent && isPlaying ? 'online' : stationStatuses[station.id] || 'pending';
						const visualStatus: StreamStatus = !isOnline ? 'offline' : (isCurrent ? mainPlayerStatus : status);

						return (
							<div
								key={station.id}
								onClick={() => {
									if (isCurrent && isPlaying) {
										togglePlay();
									} else {
										setCurrentStationIndex(index);
										if (isOnline) {
											setIsPlaying(true);
											setMainPlayerStatus(stationStatuses[station.id] === 'online' ? 'connecting' : 'checking');
										}
									}
								}}
								className={`p-3 px-4 flex items-center border-b dark:border-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition ${isCurrent ? 'bg-blue-50 dark:bg-blue-900 border-l-4 border-blue-500' : ''
									}`}
							>
								<div className="mr-3 relative flex items-center justify-center w-3 h-3">
									<span className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${getStatusColor(visualStatus)}`}></span>
									{['online', 'checking', 'connecting', 'reconnecting'].includes(visualStatus) && (
										<span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${visualStatus === 'reconnecting' ? 'bg-orange-400' : visualStatus === 'online' ? 'bg-green-400' : 'bg-blue-400'}`}></span>
									)}
								</div>
								<div className="flex-1 min-w-0">
									<h4 className={`text-sm font-medium truncate ${isCurrent ? 'text-blue-700' : 'text-gray-700'}`}>{station.name}</h4>
									<p className={`text-[10px] truncate ${visualStatus === 'offline' ? 'text-red-400' : 'text-gray-400'}`}>
										{isCurrent
											? (visualStatus === 'reconnecting' ? 'Reconnecting...' :
												visualStatus === 'connecting' ? 'Connecting...' :
													visualStatus === 'offline' ? 'Offline' : station.author)
											: (visualStatus === 'offline' ? 'Offline' :
												visualStatus === 'checking' ? 'Checking...' : station.author)}
									</p>
								</div>
								{isCurrent && isPlaying && mainPlayerStatus === 'online' && (
									<div className="flex space-x-0.5 items-end h-3 ml-2">
										<div className="w-0.5 bg-blue-500 animate-bounce h-2"></div>
										<div className="w-0.5 bg-blue-500 animate-bounce h-3 delay-75"></div>
										<div className="w-0.5 bg-blue-500 animate-bounce h-1 delay-150"></div>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default RadioPage;
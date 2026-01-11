/// <reference types="vite-plugin-pwa/client" />

declare module 'virtual:pwa-register' {
	export function registerSW(options?: {
		immediate?: boolean;
		onNeedRefresh?: () => void;
		onOfflineReady?: () => void;
	}): (reloadPage?: boolean) => Promise<void>;
}

declare module '*.svg' {
	const value: string;
	export default value;
}

declare module '*.jpg' {
	const value: string;
	export default value;
}
declare module '*.png' {
	const value: string;
	export default value;
}

declare global {
	interface Window {
		Android?: {
			isAndroidApp: () => boolean;
			onWebViewGoBack?: () => void;
			exitApp?: () => void;

			//  Radio / Media Service
			//onHtml5AudioEvent(url, isPlaying, title, artist, art)
			onHtml5AudioEvent: (
				audioUrl: string,
				isPlaying: boolean,
				stationName: string,
				author: string,
				coverUrl: string
			) => void;

			// Ads & Utilities
			openWidgetSettings?: () => void;
			printPage?: () => void;
			triggerNativeAd?: () => void;
			triggerFullScreenAd?: () => void;
            share?: (title: string, message: string, url: string) => void;
		};

		controlPlayer?: (command: 'play' | 'pause' | 'stop') => void;
		handleBackPress?: () => boolean;
	}
}

declare module 'virtual:pwa-register';

export { };
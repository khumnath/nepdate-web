import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import markerShadowPng from 'leaflet/dist/images/marker-shadow.png';
import markerIcon2xPng from 'leaflet/dist/images/marker-icon-2x.png';
Icon.Default.mergeOptions({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconRetinaUrl: markerIcon2xPng,
});

// Register the PWA service worker (virtual module provided by vite-plugin-pwa)
import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  onNeedRefresh() {
    //  dispatch a custom event for the UI to handle
    const event = new CustomEvent('pwa-update-available');
    window.dispatchEvent(event);
  },
  onOfflineReady() {
    console.log('App ready to work offline');
  }
});

// Expose updateSW to our global trigger function
(window as any).refreshPWA = updateSW;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

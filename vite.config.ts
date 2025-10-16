import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { version } from './package.json';

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(version),
  },
  base: './',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'robots.txt',
        'icons/icon-72x72.png',
        'icons/icon-96x96.png',
        'icons/icon-128x128.png',
        'icons/icon-144x144.png',
        'icons/icon-152x152.png',
        'icons/icon-384x384.png',
        'icons/android-chrome-192x192.png',
        'icons/android-chrome-512x512.png',
        'icons/maskable-icon.png'
      ],
      manifest: {
        name: 'Nepdate Bikram calendar',
        short_name: 'Nepdate',
        description: 'Bikram/Gregorian calendar with panchanga',
        theme_color: '#2563eb',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait',
        scope: './',
        start_url: './',
        icons: [
          { src: 'icons/icon-72x72.png', sizes: '72x72', type: 'image/png' },
          { src: 'icons/icon-96x96.png', sizes: '96x96', type: 'image/png' },
          { src: 'icons/icon-128x128.png', sizes: '128x128', type: 'image/png' },
          { src: 'icons/icon-144x144.png', sizes: '144x144', type: 'image/png' },
          { src: 'icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
          { src: 'icons/icon-384x384.png', sizes: '384x384', type: 'image/png' },
          { src: 'icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/maskable-icon.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' }
        ],
        protocol_handlers: [
          {
            protocol: 'web+nepdate',
            url: '/?openFromProtocol=true&url=%s',
          },
        ],
      },
      workbox: {
        navigateFallback: './index.html'
      }
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'docs',
  },
});

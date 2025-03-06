import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';
import path from 'path';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env.GITHUB_SHA': process.env.GITHUB_SHA || '"main"',
  },
  build: {
    target: 'esnext',
  },
  server: {
    port: 3030,
    hmr: true,
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  },
  test: {
    environment: 'happy-dom',
    coverage: {
      reporter: ['text', 'lcovonly'],
    },
  },
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://zelda.ribbonstudios.com',
    }),
  ],
});

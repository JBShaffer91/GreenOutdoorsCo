import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  cacheDir: '../.vite-cache',
  plugins: [react()],
  server: { host: true },
  build: { outDir: 'dist', emptyOutDir: true }
});

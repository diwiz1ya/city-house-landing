import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? '/city-house-landing/',
  server: {
    host: '0.0.0.0',
    allowedHosts: [
      '84f6ef2d143c.ngrok-free.app',
      '2aaf36b2c551.ngrok-free.app',
      '.ngrok-free.app',
    ],
  },
});

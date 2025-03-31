import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/coachserenite/', // Ajoute le nom EXACT de ton repo ici
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

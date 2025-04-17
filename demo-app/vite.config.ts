import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'], // Avoid duplicate React instances
  },
  css: {
    postcss: "./postcss.config.cjs", // Ensure correct PostCSS config path
  },
});


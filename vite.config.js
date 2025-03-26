import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/ip3ula.github.io/',  // Ensure correct paths on GitHub Pages
  server: {
    host: true,
    port: 5173,
  },
  build: {
    outDir: 'dist', 
  }
});

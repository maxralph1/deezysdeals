import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()], 
  server: {
    port: parseInt(process.env.VITE_PORT) || 5174, 
    // https: false, 
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  }, 
  build: {
    outDir: 'dist', 
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id?.includes('node_modules')) {
            return id?.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  }
})
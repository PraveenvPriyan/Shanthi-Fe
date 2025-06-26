import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),        
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // @ts-ignore - This is handled by middleware (optional)
    historyApiFallback: {
      rewrites: [      
        { from: /./, to: '/index.html' },
      ],
    },
  },
})

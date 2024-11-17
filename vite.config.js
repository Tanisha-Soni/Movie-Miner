import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHtmlPlugin } from 'vite-plugin-html'
import history from 'connect-history-api-fallback'
import { createServer } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createHtmlPlugin()],
  base: '/',
  server: {
    middlewareMode: true,
    setupMiddlewares: (middlewares, devServer) => {
      middlewares.use(history())
      return middlewares
    }
  }
})
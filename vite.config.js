import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { handleSocialMetricsHttpRequest } from './server/socialMetricsHttp.mjs'

const socialMetricsApiPlugin = () => {
  const handleRequest = (req, res, next) => {
    const requestPath = req.url?.split('?')[0]
    if (requestPath !== '/api/social-metrics') {
      next()
      return
    }

    handleSocialMetricsHttpRequest(req, res).catch((error) => {
      res.statusCode = 500
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
      res.end(JSON.stringify({ error: error instanceof Error ? error.message : 'Unexpected metrics error.' }))
    })
  }

  return {
    name: 'social-metrics-api',
    configureServer(server) {
      server.middlewares.use(handleRequest)
    },
    configurePreviewServer(server) {
      server.middlewares.use(handleRequest)
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), socialMetricsApiPlugin()],
})

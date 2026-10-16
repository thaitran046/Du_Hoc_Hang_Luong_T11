import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function apiLeadPlugin() {
  const handlerMiddleware = (req, res, next) => {
    const url = req.url?.split('?')[0];
    if (url === '/api/lead' && req.method === 'POST') {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', async () => {
        try {
          req.body = body ? JSON.parse(body) : {};
        } catch {
          req.body = {};
        }
        res.status = (code) => {
          res.statusCode = code;
          return res;
        };
        res.json = (data) => {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(data));
          return res;
        };
        try {
          const { default: handler } = await import('./api/lead.js');
          await handler(req, res);
        } catch (err) {
          console.error('API lead handler error:', err);
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: false, message: err?.message || 'Server error' }));
        }
      });
    } else {
      next();
    }
  };

  return {
    name: 'api-lead-middleware',
    configureServer(server) {
      server.middlewares.use(handlerMiddleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(handlerMiddleware);
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), apiLeadPlugin()],
  appType: 'spa',
  server: {
    host: true,
  },
})

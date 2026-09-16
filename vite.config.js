import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import applyHandler from './api/apply.js'
import warehouseApplyHandler from './api/warehouse-apply.js'

function apiPlugin() {
  return {
    name: 'api-server',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const url = (req.url || '').split('?')[0];
        if (url === '/api/apply' || url === '/api/apply.php') {
          return handleApi(applyHandler, req, res);
        }
        if (url === '/api/warehouse-apply' || url === '/api/warehouse-apply.php') {
          return handleApi(warehouseApplyHandler, req, res);
        }
        next();
      });
    }
  };
}

function handleApi(handler, req, res) {
  let body = '';
  req.on('data', chunk => {
    body += chunk;
  });
  req.on('end', async () => {
    try {
      req.body = body ? JSON.parse(body) : {};
    } catch {
      req.body = {};
    }
    
    res.status = function (code) {
      res.statusCode = code;
      return res;
    };
    res.json = function (data) {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
      return res;
    };

    try {
      await handler(req, res);
    } catch (err) {
      console.error('API execution error:', err);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: false, message: err.message }));
    }
  });
}

export default defineConfig({
  plugins: [react(), apiPlugin()],
})

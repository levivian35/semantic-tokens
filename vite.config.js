// vite.config.js — BUILD CONFIGURATION
// Vite is the build tool that bundles our app. Plugins extend what it can do.
// We add two plugins:
//   1. react()       — lets Vite understand JSX syntax
//   2. tailwindcss() — processes Tailwind classes and generates the final CSS

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),   // Scans your JSX for Tailwind classes and builds only the CSS you actually use
    {
      name: 'cursor-debug-log-proxy',
      configureServer(server) {
        server.middlewares.use('/__cursor_debug_log', (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405;
            res.end('Method Not Allowed');
            return;
          }

          let body = '';
          req.on('data', (c) => (body += c));
          req.on('end', async () => {
            try {
              const r = await fetch('http://127.0.0.1:7927/ingest/5720d723-e2b8-4268-8935-df8b8d265eea', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '694fba' },
                body,
              });
              res.statusCode = r.status || 204;
              res.end('');
            } catch {
              res.statusCode = 500;
              res.end('');
            }
          });
        });
      },
    },
  ],
  root: 'src',
});

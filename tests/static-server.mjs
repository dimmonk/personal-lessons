// Minimal static server for public/, used by the browser tests.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('../public/', import.meta.url));
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/manifest+json', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2'
};

export function startServer() {
  const server = createServer(async (req, res) => {
    const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    const rel = normalize(path === '/' ? '/index.html' : path);
    if (rel.includes('..')) { res.writeHead(400).end(); return; }
    try {
      const body = await readFile(join(ROOT, rel));
      res.writeHead(200, { 'Content-Type': TYPES[extname(rel)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
      res.end(body);
    } catch {
      res.writeHead(404).end('not found');
    }
  });
  return new Promise(resolve => server.listen(0, '127.0.0.1', () => resolve({
    url: `http://localhost:${server.address().port}/`,
    close: () => new Promise(r => server.close(r))
  })));
}

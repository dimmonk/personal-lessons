// Minimal static server for public/, used by the browser tests and (without options) by tools/serve.mjs.
//   fixture: true     the test subject (tests/fixtures/fixture-subject) is served under /__fixture/ and loaded by the page as a real subject
//   transform(path, body, type)   change a file on its way out: how a seeded fault is put into the app for one run
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FIXTURE_FILES } from './fixtures/fixture-subject/design.mjs';

const ROOT = fileURLToPath(new URL('../public/', import.meta.url));
const FIXTURE_ROOT = fileURLToPath(new URL('./fixtures/fixture-subject/', import.meta.url));
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/manifest+json', '.png': 'image/png', '.svg': 'image/svg+xml', '.woff2': 'font/woff2'
};

// the page with the test subject's scripts right after the registry, so it is registered before the app builds its list of subjects
const withFixture = html => html.replace('<script src="app/registry.js"></script>',
  `<script src="app/registry.js"></script>\n${FIXTURE_FILES.map(f => `<script src="__fixture/${f}"></script>`).join('\n')}`);

export function startServer({ port = 0, fixture = false, transform = null } = {}) {
  const server = createServer(async (req, res) => {
    const path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    const rel = normalize(path === '/' ? '/index.html' : path);
    if (rel.includes('..')) { res.writeHead(400).end(); return; }
    try {
      const fromFixture = fixture && rel.startsWith('/__fixture/');
      let body = await readFile(fromFixture ? join(FIXTURE_ROOT, rel.slice('/__fixture/'.length)) : join(ROOT, rel));
      if (fixture && rel === '/index.html') body = Buffer.from(withFixture(body.toString()));
      if (transform && /\.(js|css|html)$/.test(rel)) body = Buffer.from(transform(rel.replace(/^\//, ''), body.toString()));
      res.writeHead(200, { 'Content-Type': TYPES[extname(rel)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
      res.end(body);
    } catch {
      res.writeHead(404).end('not found');
    }
  });
  return new Promise(resolve => server.listen(port, '127.0.0.1', () => resolve({
    url: `http://localhost:${server.address().port}/`,
    close: () => new Promise(r => server.close(r))
  })));
}

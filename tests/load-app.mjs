// Loads the subject data and key helpers for headless checks: reads the <script src> list out of
// public/index.html and evaluates the same files in the same order in one isolated context.
// The boot file is left out because it renders and needs a browser.
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const PUBLIC = new URL('../public/', import.meta.url);
const BOOT_SCRIPT = 'app/init.js';
const EXPORTS = ['SUBJECTS', 'detActiveSteps', 'detCandidates', 'detReady', 'nameOptions', 'correctSteps', 'answerOf'];

// Every script the page loads, in load order. The page must not carry inline scripts.
export async function scriptList() {
  const html = await readFile(new URL('index.html', PUBLIC), 'utf8');
  const tags = [...html.matchAll(/<script\b([^>]*)>/g)].map(m => m[1]);
  const srcs = tags.map(attrs => (attrs.match(/\bsrc="([^"]+)"/) || [])[1]);
  if (srcs.some(src => !src)) throw new Error('public/index.html has an inline <script>; scripts must be files');
  if (!srcs.includes(BOOT_SCRIPT)) throw new Error(`public/index.html does not load ${BOOT_SCRIPT}`);
  return srcs;
}

export async function loadApp() {
  const files = (await scriptList()).filter(src => src !== BOOT_SCRIPT);
  const parts = await Promise.all(files.map(async src =>
    `/* ${src} */\n` + await readFile(new URL(src, PUBLIC), 'utf8')));
  const source = parts.join('\n') + `\nglobalThis.__app = { ${EXPORTS.join(', ')} };`;
  // the app reads and writes localStorage; headless it gets an empty in-memory one, so nothing is read or kept
  const memory = new Map();
  const localStorage = { getItem: key => memory.has(key) ? memory.get(key) : null, setItem: (key, value) => memory.set(key, String(value)), removeItem: key => memory.delete(key) };
  const context = vm.createContext({ console, localStorage });
  vm.runInContext(source, context, { filename: 'public (scripts in load order)' });
  return context.__app;
}

// Loads standard-1 lesson data headlessly: evaluates classic script files, in order, in one vm context,
// and returns what the registry (public/app/registry.js) holds. Engine files need a browser and are never evaluated.
//
//   loadFromPublic(publicDirUrl)         the file list is the <script src> list of that directory's index.html
//                                        (the rule of tests/load-app.mjs), keeping only the registry and subjects/ data;
//                                        a directory with no index.html gets the documented order (deriveFileList).
//   loadFromFiles(publicDirUrl, files)   an explicit list, evaluated in order.
//
// Result: { standard, subjects: { [id]: { meta, key, units, cards, cases, specimens } } }.
// A list with no registry (the app before the lesson standard lands) loads as { standard: null, subjects: {} }.
import { readFile, readdir } from 'node:fs/promises';
import vm from 'node:vm';

export const REGISTRY_FILE = 'app/registry.js';
export const isDataFile = src => src === REGISTRY_FILE || src.startsWith('subjects/');

export const asDirUrl = dir => dir instanceof URL ? new URL(dir.href.replace(/\/?$/, '/')) : new URL(`file://${dir.replace(/\/?$/, '/')}`);

async function readIfPresent(url) {
  try { return await readFile(url, 'utf8'); }
  catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

// Every script src of an index.html, in load order. The page must not carry inline scripts (as in tests/load-app.mjs).
export function scriptSources(html, where = 'index.html') {
  const tags = [...html.matchAll(/<script\b([^>]*)>/g)].map(m => m[1]);
  const srcs = tags.map(attrs => (attrs.match(/\bsrc="([^"]+)"/) || [])[1]);
  if (srcs.some(src => !src)) throw new Error(`${where} has an inline <script>; scripts must be files`);
  return srcs;
}

const unitFileKey = name => {
  const m = name.match(/^u(\d+)\.(unit|cards|cases)(?:[-.](.+))?\.js$/);
  if (!m) return null;
  const part = { unit: 0, cards: 1, cases: 2 }[m[2]];
  return [Number(m[1]), part, m[3] || ''];
};
const compareKeys = (a, b) => a[0] - b[0] || a[1] - b[1] || a[2].localeCompare(b[2], 'en', { numeric: true });

// The documented order for a directory with no index.html: registry, then per subject subject.js, key.js,
// each unit's unit, cards and cases files in unit order, then specimens.js.
export async function deriveFileList(publicDirUrl) {
  const root = asDirUrl(publicDirUrl);
  const subjectDirs = (await readdir(new URL('subjects/', root), { withFileTypes: true }))
    .filter(e => e.isDirectory()).map(e => e.name).sort();
  const perSubject = await Promise.all(subjectDirs.map(async id => {
    const names = (await readdir(new URL(`subjects/${id}/`, root))).filter(n => n.endsWith('.js'));
    const unitFiles = names.filter(n => unitFileKey(n)).sort((a, b) => compareKeys(unitFileKey(a), unitFileKey(b)));
    const fixed = new Set(['subject.js', 'key.js', 'specimens.js']);
    const unknown = names.filter(n => !fixed.has(n) && !unitFileKey(n));
    if (unknown.length) throw new Error(`subjects/${id}: file name not in the layout of F1: ${unknown.join(', ')}`);
    const ordered = [...['subject.js', 'key.js'].filter(n => names.includes(n)), ...unitFiles, ...names.filter(n => n === 'specimens.js')];
    return ordered.map(n => `subjects/${id}/${n}`);
  }));
  return [REGISTRY_FILE, ...perSubject.flat()];
}

export async function loadFromFiles(publicDirUrl, files) {
  const root = asDirUrl(publicDirUrl);
  const dataFiles = files.filter(isDataFile);
  if (!dataFiles.includes(REGISTRY_FILE)) return { standard: null, subjects: {} };
  const context = vm.createContext({ console });
  for (const file of dataFiles) {
    const source = await readFile(new URL(file, root), 'utf8');
    try { vm.runInContext(source, context, { filename: file }); }
    catch (error) { throw new Error(`${file}: ${error.message}`); }
  }
  const FC = context.FC;
  if (!FC || typeof FC.ids !== 'function') throw new Error(`${REGISTRY_FILE} did not define FC.ids()`);
  return { standard: FC.STANDARD, subjects: Object.fromEntries(FC.ids().map(id => [id, FC.get(id)])) };
}

export async function fileListFor(publicDirUrl) {
  const root = asDirUrl(publicDirUrl);
  const html = await readIfPresent(new URL('index.html', root));
  return html === null ? deriveFileList(root) : scriptSources(html, `${root.pathname}index.html`).filter(isDataFile);
}

export async function loadFromPublic(publicDirUrl) {
  return loadFromFiles(publicDirUrl, await fileListFor(publicDirUrl));
}

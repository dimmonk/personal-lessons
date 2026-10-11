// What V47 reads from disk: the script files under public/app/ and public/subjects/, index.html's script tags and sw.js's SHELL.
// Collected once and passed to the rules as plain data.
import { readFile, readdir } from 'node:fs/promises';
import { scriptSources, asDirUrl } from './load.mjs';

const isLessonScript = path => /^(app|subjects)\/.+\.js$/.test(path);
const clean = path => path.replace(/^\.?\//, '');

async function readIfPresent(url) {
  try { return await readFile(url, 'utf8'); }
  catch (error) {
    if (error.code === 'ENOENT') return null;
    throw error;
  }
}

async function walk(dirUrl, prefix) {
  const entries = await readdir(dirUrl, { withFileTypes: true }).catch(error => {
    if (error.code === 'ENOENT') return [];
    throw error;
  });
  const nested = await Promise.all(entries.map(e => e.isDirectory()
    ? walk(new URL(`${e.name}/`, dirUrl), `${prefix}${e.name}/`)
    : [`${prefix}${e.name}`]));
  return nested.flat();
}

// The quoted paths of `const SHELL = [ ... ];`.
export function shellEntries(source) {
  const m = source.match(/\bSHELL\s*=\s*\[([\s\S]*?)\]/);
  if (!m) throw new Error('sw.js has no SHELL list');
  return [...m[1].matchAll(/'([^']*)'|"([^"]*)"/g)].map(x => x[1] ?? x[2]);
}

export async function collectSite(publicDir) {
  const root = asDirUrl(publicDir);
  const paths = [...await walk(new URL('app/', root), 'app/'), ...await walk(new URL('subjects/', root), 'subjects/')].filter(isLessonScript).sort();
  const files = await Promise.all(paths.map(async path => ({ path, lines: (await readFile(new URL(path, root), 'utf8')).split('\n').length })));
  const html = await readIfPresent(new URL('index.html', root));
  const sw = await readIfPresent(new URL('sw.js', root));
  return {
    files,
    indexScripts: html === null ? null : scriptSources(html).map(clean).filter(isLessonScript),
    swShell: sw === null ? null : shellEntries(sw).map(clean).filter(isLessonScript)
  };
}

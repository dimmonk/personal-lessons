// What V47 and V29 read from disk: the script files under public/app/ and public/subjects/, index.html's script tags,
// sw.js's SHELL, and the validator's own source. Collected once and passed to the rules as plain data.
import { readFile, readdir } from 'node:fs/promises';
import { scriptSources, asDirUrl } from './load.mjs';
import { REPO } from './paths.mjs';

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

// The validator's own source: every module under tests/lessons and the CLI that runs them.
export async function collectValidatorSources() {
  const dir = new URL('tests/lessons/', REPO);
  const names = (await readdir(dir)).filter(n => n.endsWith('.mjs')).sort();
  const sources = await Promise.all(names.map(async n => [`tests/lessons/${n}`, await readFile(new URL(n, dir), 'utf8')]));
  const cli = await readIfPresent(new URL('tests/validate-lessons.mjs', REPO));
  return Object.fromEntries([...sources, ...(cli === null ? [] : [['tests/validate-lessons.mjs', cli]])]);
}

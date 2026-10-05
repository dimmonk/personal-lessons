// Command-line paths for the lesson tools: --public <dir>, --lock <file>, --standard0 <file>.
import { pathToFileURL } from 'node:url';
import { resolve, dirname, basename } from 'node:path';

export const REPO = new URL('../../', import.meta.url);
export const DEFAULTS = {
  publicDir: new URL('public/', REPO),
  lockFile: new URL('tests/lessons.lock.json', REPO),
  standard0File: new URL('tests/lessons/standard0-units.json', REPO)
};

const toUrl = (p, trailingSlash) => {
  const abs = resolve(process.cwd(), p);
  return pathToFileURL(trailingSlash ? `${abs}/` : abs);
};

// Returns { publicDir, lockFile, standard0File, rest }. A target other than the app's own has no standard-0 list unless one is named.
export function parseTargetArgs(argv) {
  const options = {};
  const rest = [];
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (['--public', '--lock', '--standard0'].includes(arg)) {
      if (i + 1 >= argv.length) throw new Error(`${arg} needs a value`);
      options[arg.slice(2)] = argv[i + 1];
      i += 1;
    } else rest.push(arg);
  }
  const publicDir = options.public ? toUrl(options.public, true) : DEFAULTS.publicDir;
  const lockFile = options.lock ? toUrl(options.lock, false) : DEFAULTS.lockFile;
  const own = !options.public;
  const standard0File = options.standard0 ? toUrl(options.standard0, false) : own ? DEFAULTS.standard0File : null;
  return { publicDir, lockFile, standard0File, rest };
}

export const dirOf = fileUrl => dirname(fileUrl.pathname);
export const nameOf = fileUrl => basename(fileUrl.pathname);

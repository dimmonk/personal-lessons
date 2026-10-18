/**
 * The `--only` vocabulary, derived from firebase.json and .firebaserc and never configured (design 2.4).
 *
 * Accepted: `hosting` (only when firebase.json's hosting is one object with no target), `hosting:<name>` (mapped under
 * the default project in .firebaserc, with a block in firebase.json: a RELEASE LINE when deploy.config.mjs has one for it,
 * otherwise a PLAIN hosting deploy that cuts, builds and checks nothing, like a redirect site), `functions:<name>`,
 * `firestore`, `firestore:rules`, `firestore:indexes`, `storage`. At most one hosting target per list, of either kind.
 * Refused: no `--only`, an empty list, bare `functions`, bare `hosting` where targets exist, two hosting targets, any other
 * word, a second `--only`, any other flag. A refusal prints the usage generated from what this project accepts.
 */
export const FUNCTION_NAME = /^[A-Za-z0-9_$-]+$/;
export const PLAIN_TARGETS = Object.freeze(['firestore', 'firestore:rules', 'firestore:indexes', 'storage']);
export const BARE_HOSTING = 'hosting';
const HOSTING_PREFIX = 'hosting:';
const FUNCTIONS_PREFIX = 'functions:';

/** A refused deploy line: the message is what the user reads, exit code 1. */
export class TargetError extends Error {
  constructor(message) {
    super(message);
    this.name = 'TargetError';
  }
}

/** firebase.json's hosting blocks as an array, whatever shape it was written in. */
export function hostingBlocks(firebaseJson) {
  const { hosting } = firebaseJson;
  if (!hosting) return [];
  return Array.isArray(hosting) ? hosting : [hosting];
}

/** The hosting block a release key (`hosting` or `hosting:<name>`) deploys, or null. */
export function hostingBlockFor(firebaseJson, key) {
  const blocks = hostingBlocks(firebaseJson);
  if (key === BARE_HOSTING) return blocks.length === 1 && !blocks[0].target ? blocks[0] : null;
  const name = key.slice(HOSTING_PREFIX.length);
  return blocks.find((b) => b.target === name) ?? null;
}

/** The hosting target names .firebaserc maps under its default project. */
export function mappedHostingTargets(firebaserc) {
  const project = firebaserc?.projects?.default;
  return Object.keys(firebaserc?.targets?.[project]?.hosting ?? {});
}

/** The hosting words this project accepts: bare `hosting`, or the mapped `hosting:<name>` that have a release line. */
export function acceptedHosting(firebaseJson, firebaserc, releaseKeys) {
  const bare = hostingBlockFor(firebaseJson, BARE_HOSTING) && releaseKeys.includes(BARE_HOSTING) ? [BARE_HOSTING] : [];
  const named = mappedHostingTargets(firebaserc).map((n) => `${HOSTING_PREFIX}${n}`).filter((k) => releaseKeys.includes(k));
  return [...bare, ...named];
}

/**
 * The hosting words that are not release lines: mapped in .firebaserc, with a block in firebase.json, and no release line.
 * They deploy as they are, from origin/main: nothing is counted, committed, tagged or checked.
 */
export function plainHosting(firebaseJson, firebaserc, releaseKeys) {
  return mappedHostingTargets(firebaserc).map((n) => `${HOSTING_PREFIX}${n}`).filter((k) => !releaseKeys.includes(k) && hostingBlockFor(firebaseJson, k));
}

/** The usage text, generated from what this project accepts. */
export function usage(accepted, plain = []) {
  const releases = accepted.length > 0 ? accepted : ['(this project has no release line)'];
  return [
    ...releases.map((w) => `  npm run deploy -- --only ${w.padEnd(24)} a release: counted, committed, tagged, pushed, deployed, checked`),
    ...plain.map((w) => `  npm run deploy -- --only ${w.padEnd(24)} plain hosting: deployed as it is on main, nothing counted or checked`),
    '  npm run deploy -- --only functions:foo,functions:bar | firestore | firestore:rules | firestore:indexes | storage',
    '  One hosting target at most per run; named functions, rules, indexes and storage can share its list.',
  ].join('\n');
}

/**
 * The words of a command line, or a TargetError. Syntax only: it knows nothing of the project.
 * @param {string[]} argv
 * @returns {string[]}
 */
export function parseOnly(argv) {
  const refuse = (why) => new TargetError(`${why} Usage: npm run deploy -- --only <target>[,<target>...]`);
  const first = argv[0] ?? '';
  const inline = first.startsWith('--only=');
  const expected = inline ? 1 : 2;
  if (argv.length === 0) throw refuse('this takes exactly one --only <target> (a deploy with no --only would redeploy everything).');
  if (argv.length !== expected || (!inline && first !== '--only')) {
    const only = argv.filter((a) => a === '--only' || a.startsWith('--only=')).length;
    throw refuse(only > 1 ? 'a second --only is refused: put every target in one list.' : `"${argv.join(' ')}": this takes exactly one --only <target> and no other argument.`);
  }
  const list = inline ? first.slice('--only='.length) : argv[1];
  const words = list.split(',');
  if (words.some((w) => w.trim() === '')) throw refuse(`--only "${list}" has an empty target.`);
  if (words.includes('functions')) throw refuse("bare 'functions' would redeploy every function; name them one by one (functions:foo).");
  return words;
}

function refuseWord(word, { accepted, plain, firebaserc }) {
  if (word === BARE_HOSTING) {
    return `'${BARE_HOSTING}' is refused: ${accepted.length > 0 ? `name the hosting target (${[...accepted, ...plain].join(', ')})` : 'this project has no bare hosting release'}; a bare hosting deploy would upload every target.`;
  }
  if (word.startsWith(HOSTING_PREFIX)) {
    const name = word.slice(HOSTING_PREFIX.length);
    if (mappedHostingTargets(firebaserc).includes(name)) return `'${word}' is mapped in .firebaserc but firebase.json has no hosting block with target "${name}".`;
    return `'${word}' is not a hosting target of this project (releases: ${accepted.join(', ') || 'none'}; plain: ${plain.join(', ') || 'none'}).`;
  }
  return `'${word}' is not a target this deploys.`;
}

/**
 * Validate a parsed list against the project and classify it. `hosting` is the release line named (or null); `plainHosting`
 * the plain hosting target named (or null); a list names at most one hosting target of either kind.
 * @param {string[]} words @param {{ firebaseJson: object, firebaserc: object, releaseKeys: string[] }} project
 * @returns {{ words: string[], hosting: string | null, plainHosting: string | null, functions: string[], others: string[] }}
 */
export function resolveTargets(words, { firebaseJson, firebaserc, releaseKeys }) {
  const accepted = acceptedHosting(firebaseJson, firebaserc, releaseKeys);
  const plain = plainHosting(firebaseJson, firebaserc, releaseKeys);
  const fail = (why) => new TargetError(`${why}\n\n${usage(accepted, plain)}`);
  const hosting = [];
  const plainNamed = [];
  const functions = [];
  const others = [];
  for (const word of words) {
    if (accepted.includes(word)) hosting.push(word);
    else if (plain.includes(word)) plainNamed.push(word);
    else if (word.startsWith(FUNCTIONS_PREFIX) && FUNCTION_NAME.test(word.slice(FUNCTIONS_PREFIX.length))) functions.push(word);
    else if (PLAIN_TARGETS.includes(word)) others.push(word);
    else throw fail(refuseWord(word, { accepted, plain, firebaserc }));
  }
  const named = [...hosting, ...plainNamed];
  if (named.length > 1) throw fail(`'${named.join(',')}': a run deploys one hosting target; run them one after the other.`);
  return { words, hosting: hosting[0] ?? null, plainHosting: plainNamed[0] ?? null, functions, others };
}

// Loads the app's scripts for headless checks: reads the <script src> list out of public/index.html and evaluates the same files in the
// same order in one isolated context. The boot file is left out because it renders and needs a browser. A test can also add the
// fixture subject (tests/fixtures/fixture-subject), registered as a real subject would be, so the engine runs on known data.
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import { FIXTURE_FILES } from './fixtures/fixture-subject/design.mjs';

const PUBLIC = new URL('../public/', import.meta.url);
const FIXTURE = new URL('./fixtures/fixture-subject/', import.meta.url);
const BOOT_SCRIPT = 'app/init.js';
// the names a test reads out of the app's global scope
export const EXPORTS = ['SUBJECTS', 'buildSubject', 'FC', 'esc', 'SAY', 'ASK_KINDS', 'BLOCK_KINDS', 'RETURN_GAPS',
  'chooseOptions', 'scoreChoose', 'scoreItem', 'askApplies', 'askedAsks', 'openAsks', 'itemAnswered', 'shownStepIds', 'ruleCounts', 'ruleMet',
  'ruleText', 'checkResult', 'supportWeight', 'flatRefs', 'checkSize', 'checkIsDrawn', 'flowSets', 'refId', 'refCount', 'whereMatches',
  'seededRandom', 'hashSeed', 'shuffled', 'isRangeParam', 'drawParam', 'genValues', 'itemFromGen', 'slotsIn', 'fillSlots', 'instanceOf',
  'definitionOf', 'addDays', 'weekEnd', 'dayOf', 'itemsOf', 'recordTry', 'firstTries', 'checkRuns', 'completeRuns', 'lessonDone', 'lastCheck',
  'lessonsInOrder', 'usedIds', 'strandDefs', 'checkStrands', 'lessonsCovering', 'strandSchedules', 'dueStrands', 'retestDays', 'retestsDue',
  'strandInstance', 'retestInstances', 'drawInstances', 'buildSet', 'freshSeed', 'blockHtml', 'segmentsOf', 'itemHtml', 'feedbackHtml',
  'paras', 'lessonFail', 'storageRead'];

// Every script the page loads, in load order. The page must not carry inline scripts.
export async function scriptList() {
  const html = await readFile(new URL('index.html', PUBLIC), 'utf8');
  const tags = [...html.matchAll(/<script\b([^>]*)>/g)].map(m => m[1]);
  const srcs = tags.map(attrs => (attrs.match(/\bsrc="([^"]+)"/) || [])[1]);
  if (srcs.some(src => !src)) throw new Error('public/index.html has an inline <script>; scripts must be files');
  if (!srcs.includes(BOOT_SCRIPT)) throw new Error(`public/index.html does not load ${BOOT_SCRIPT}`);
  return srcs;
}

export async function loadApp({ fixture = false, seed = null } = {}) {
  const files = (await scriptList()).filter(src => src !== BOOT_SCRIPT);
  const parts = await Promise.all(files.map(async src => {
    const text = await readFile(new URL(src, PUBLIC), 'utf8');
    return `/* ${src} */\n` + (seed ? seed(src, text) : text);
  }));
  const fixtureParts = fixture ? await Promise.all(FIXTURE_FILES.map(async f => `/* fixture/${f} */\n` + await readFile(new URL(f, FIXTURE), 'utf8'))) : [];
  const add = fixture ? `\nSUBJECTS.push(buildSubject('fixture', SUBJECTS.length));` : '';
  const source = parts.join('\n') + '\n' + fixtureParts.join('\n') + add + `\nglobalThis.__app = { ${EXPORTS.join(', ')} };`;
  // the app reads and writes localStorage; headless it gets an empty in-memory one, so nothing is read or kept
  const memory = new Map();
  const localStorage = { getItem: key => memory.has(key) ? memory.get(key) : null, setItem: (key, value) => memory.set(key, String(value)), removeItem: key => memory.delete(key) };
  const context = vm.createContext({ console, localStorage });
  vm.runInContext(source, context, { filename: 'public (scripts in load order)' });
  return { ...context.__app, storage: memory, context };
}

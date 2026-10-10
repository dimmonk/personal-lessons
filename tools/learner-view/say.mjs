// The app's own wording for sound, read from SAY in public/app/lessons/view.js, its one copy: this tool never types a sentence the
// app prints. SAY is a plain object literal at the top level of a classic script, so it is cut out of the source and evaluated
// alone; its functions only run when called. A key that is missing stops the tool with its name (lesson standard section 21 item 6).
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import { ROOT } from './load.mjs';

const VIEW = 'app/lessons/view.js';
const START = 'const SAY = {';
const AUDIO_KEYS = ['audioHear', 'audioPlaying', 'audioStop', 'audioTry', 'notePick', 'noteSing', 'noteAnyRange', 'micStart', 'micStop', 'micListening', 'micWait',
  'micPickFirst', 'micDenied', 'micMissing', 'micPrivate'];

let cached = null;
export async function loadSay() {
  if (cached) return cached;
  const source = await readFile(new URL(VIEW, ROOT), 'utf8');
  const from = source.indexOf(START);
  if (from < 0) throw new Error(`${VIEW} has no "${START}"; the learner view reads the app's wording from it`);
  const to = source.indexOf('\n};', from);
  if (to < 0) throw new Error(`${VIEW}: the end of SAY was not found`);
  cached = vm.runInNewContext(`(${source.slice(from + START.length - 1, to + 2)})`, {}, { filename: VIEW });
  return cached;
}

// The app's sentences for sound, every one required: line('micStart') is the sentence, and a function key is called with the arguments given.
export async function audioLines() {
  const say = await loadSay();
  const missing = AUDIO_KEYS.filter(k => !(k in say));
  if (missing.length) throw new Error(`SAY in ${VIEW} has no key for sound: ${missing.join(', ')}. The engine adds them; run the learner view again after that`);
  return (key, ...args) => typeof say[key] === 'function' ? say[key](...args) : say[key];
}

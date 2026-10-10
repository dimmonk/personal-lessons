// The limits of an audio block (lesson standard section 21 item 2) live in one place, the app's own `public/app/lessons/audio-notes.js`,
// which is pure and loads headlessly. The sound rules (rules-audio.mjs) read them from there, so the validator and the app can never
// hold two sets of numbers. The file is a classic script, so it is evaluated alone and the two names are read out of it.
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
import { REPO } from './paths.mjs';

const FILE = 'public/app/lessons/audio-notes.js';
const NAMES = ['AUDIO_LIMITS', 'AUDIO_NOTE_PATTERN'];

async function readLimits() {
  const source = await readFile(new URL(FILE, REPO), 'utf8');
  try {
    const found = vm.runInNewContext(`${source}\n;({ ${NAMES.join(', ')} })`, {}, { filename: FILE });
    NAMES.forEach(n => { if (found[n] === undefined) throw new Error(`${n} is missing`); });
    return found;
  } catch (error) {
    throw new Error(`the sound rules could not read ${NAMES.join(' and ')} from ${FILE}: ${error.message}`);
  }
}

export const { AUDIO_LIMITS, AUDIO_NOTE_PATTERN } = await readLimits();

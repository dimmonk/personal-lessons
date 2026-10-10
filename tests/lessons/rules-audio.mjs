// Section 21 (sound): V64 to V68. A card may carry one optional `audio` block, a few buttons that play made-up sounds (`tones`) or a
// tool that listens to the learner sing a note (`notecheck`). The shape (V0) owns "is it present and of the right type"; these rules
// own where the block may sit and every limit of section 21 item 2. `says` and every `label` are prose, so the plain-words, token-order
// (V5), key-wording (V2), words-to-avoid (V50), abstract-word (V62) and American-English (V60) rules read them as they read any card text.
// Note names, numbers, `kind`, `notes` and `answers` are structural (text.mjs), so a note named D4 never raises a false finding.
import { unitRule, checkEach } from './rule.mjs';
import { paras, sentenceCount, duplicatesOf } from './text.mjs';
import { AUDIO_LIMITS, AUDIO_NOTE_PATTERN } from './audio-limits.mjs';

export const AUDIO_CARD_KINDS = ['term', 'meet', 'question'];   // a card that waits for an answer would give it away (X2)

// V65: what `says` may hold. The limits of the rest (examples, tones, milliseconds, cents, the note pattern) are the app's own
// (audio-limits.mjs), so there is one set of numbers.
const LIMIT_SAYS_SENTENCES = 3;
const { examples: LIMIT_EXAMPLES, tones: LIMIT_TONES, toneMs: LIMIT_TONE_MS, exampleMs: LIMIT_EXAMPLE_MS, centsMax: LIMIT_CENTS } = AUDIO_LIMITS;
const MIN_PATH_POINTS = 2;

const audioCards = u => u.cardRecords.filter(c => c.audio);
const isNumber = x => Number.isFinite(x);

/* ---------- V64: where audio may sit ---------- */
export const V64 = unitRule('V64', (u, check) => {
  audioCards(u).forEach(c => check(AUDIO_CARD_KINDS.includes(c.kind),
    `card ${c.id}: a ${c.kind} card cannot carry audio; only ${AUDIO_CARD_KINDS.join(', ')} cards can, because sound on a card that waits for an answer gives it away`));
});

/* ---------- V65: says ---------- */
export const V65 = unitRule('V65', (u, check) => {
  audioCards(u).forEach(c => {
    const sentences = paras(c.audio.says).reduce((sum, p) => sum + sentenceCount(p), 0);
    check(sentences >= 1, `card ${c.id}: audio.says is empty`);
    check(sentences <= LIMIT_SAYS_SENTENCES, `card ${c.id}: audio.says is ${sentences} sentences; it is at most ${LIMIT_SAYS_SENTENCES}`);
  });
});

/* ---------- V66: labels and counts ---------- */
function countProblems(audio) {
  if (audio.kind !== 'tones') return [];
  const examples = audio.examples;
  return [
    ...(examples.length > LIMIT_EXAMPLES ? [`${examples.length} examples; at most ${LIMIT_EXAMPLES}`] : []),
    ...examples.flatMap((e, i) => e.play.length > LIMIT_TONES ? [`example ${i + 1} has ${e.play.length} tones; at most ${LIMIT_TONES}`] : []),
    ...examples.flatMap((e, i) => String(e.label).trim() === '' ? [`example ${i + 1} has an empty label`] : []),
    ...duplicatesOf(examples.map(e => e.label)).map(l => `two examples share the label "${l}"`)
  ];
}
export const V66 = unitRule('V66', (u, check) => audioCards(u).forEach(c => checkEach(check, `card ${c.id}`, countProblems(c.audio))));

/* ---------- V67: note names and numbers ---------- */
const noteProblem = (note, where) => AUDIO_NOTE_PATTERN.test(note) ? []
  : [`${where}: "${note}" is not a note (a letter A to G, an optional # or b, and an octave from 2 to 6)`];
const centsProblem = (cents, where) => isNumber(cents) && Math.abs(cents) <= LIMIT_CENTS ? [] : [`${where}: ${cents} cents is outside -${LIMIT_CENTS} to ${LIMIT_CENTS}`];

// the milliseconds a tone lasts, from its own start
const lengthOf = tone => tone.path ? Math.max(0, ...tone.path.map(p => p[0])) : tone.ms;
const startOf = tone => tone.at === undefined ? 0 : tone.at;

function pathProblems(path, where) {
  const shape = path.flatMap((p, i) => Array.isArray(p) && p.length === 2 && p.every(isNumber) ? [] : [`${where}: point ${i + 1} must be [milliseconds, cents]`]);
  if (shape.length) return shape;
  return [
    ...(path.length >= MIN_PATH_POINTS ? [] : [`${where}: a path needs at least ${MIN_PATH_POINTS} points`]),
    ...(path[0][0] === 0 ? [] : [`${where}: a path starts at time 0`]),
    ...path.flatMap((p, i) => i > 0 && p[0] <= path[i - 1][0] ? [`${where}: path times must rise (point ${i + 1})`] : []),
    ...path.flatMap((p, i) => centsProblem(p[1], `${where} point ${i + 1}`))
  ];
}

function toneProblems(tone, where) {
  const own = tone.path ? pathProblems(tone.path, where) : centsProblem(tone.cents === undefined ? 0 : tone.cents, where);
  const timing = [
    ...(tone.at === undefined || (isNumber(tone.at) && tone.at >= 0) ? [] : [`${where}: at must be 0 or more`]),
    ...(tone.ms === undefined || (isNumber(tone.ms) && tone.ms > 0) ? [] : [`${where}: ms must be more than 0`]),
    ...(own.length === 0 && lengthOf(tone) > LIMIT_TONE_MS ? [`${where}: lasts ${lengthOf(tone)} ms; at most ${LIMIT_TONE_MS}`] : [])
  ];
  return [...noteProblem(tone.note, where), ...own, ...timing];
}

function exampleProblems(example, i) {
  const where = `example ${i + 1}`;
  const tones = example.play.flatMap((t, k) => toneProblems(t, `${where} tone ${k + 1}`));
  const end = Math.max(0, ...example.play.map(t => startOf(t) + lengthOf(t)));
  return [...tones, ...(tones.length === 0 && end > LIMIT_EXAMPLE_MS ? [`${where}: ends ${end} ms after the tap; at most ${LIMIT_EXAMPLE_MS}`] : [])];
}

function numberProblems(audio) {
  if (audio.kind === 'tones') return audio.examples.flatMap(exampleProblems);
  const notes = audio.notes || [];
  return [...notes.flatMap(n => noteProblem(n, `notes "${n}"`)), ...duplicatesOf(notes).map(n => `notes lists "${n}" twice`)];
}
export const V67 = unitRule('V67', (u, check) => audioCards(u).forEach(c => checkEach(check, `card ${c.id}`, numberProblems(c.audio))));

/* ---------- V68: a note check names three different answers of a step the unit teaches ---------- */
const ANSWER_KEYS = ['under', 'on', 'over'];
function answerProblems(u, audio) {
  const refs = ANSWER_KEYS.map(k => audio.answers[k]);
  const known = refs.flatMap((ref, i) => {
    const [code, id] = String(ref).split('.');
    const step = u.unit.teaches.steps.includes(code) ? u.steps.find(s => s.code === code) : null;
    if (!step) return [`answers.${ANSWER_KEYS[i]} "${ref}": the unit does not teach step "${code}"`];
    return step.options.some(o => o.id === id) ? [] : [`answers.${ANSWER_KEYS[i]} "${ref}": the step has no answer "${id}"`];
  });
  const steps = new Set(refs.map(r => String(r).split('.')[0]));
  return [
    ...known,
    ...duplicatesOf(refs).map(r => `"${r}" is named for two of the three answers`),
    ...(steps.size > 1 ? ['the three answers must belong to one question'] : [])
  ];
}
export const V68 = unitRule('V68', (u, check) => {
  audioCards(u).filter(c => c.audio.kind === 'notecheck').forEach(c => checkEach(check, `card ${c.id}`, answerProblems(u, c.audio)));
});

export const RULES_AUDIO = [V64, V65, V66, V67, V68];

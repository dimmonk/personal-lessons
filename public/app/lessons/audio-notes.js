/* ===================== SOUND: NOTES, CENTS AND THE VERDICT (pure) ===================== */
// Lesson standard section 21. Nothing here touches the page, the sound system or the microphone, so it loads headlessly.
// A note is a letter A to G, an optional # or b, and an octave from 2 to 6; A4 is 440 Hz, equal temperament.
// A "cent" is a hundredth of a half-step: 1200 cents make an octave, and positive is higher.

const ON_NOTE_CENTS = 30;        // within this far of the note counts as on it
const NEEDLE_FULL_CENTS = 100;   // the needle is all the way over at this distance
const RANGE_LOW_HZ = 70;         // the voice range the pitch finder listens to
const RANGE_HIGH_HZ = 1100;
const DEFAULT_NOTES = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4'];

const AUDIO_A4_HZ = 440;
const AUDIO_NOTE_SEMITONES = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
const AUDIO_NOTE_PATTERN = /^([A-G])(#|b)?([2-6])$/;
// The limits of an audio block (section 21, item 2). One place, read by the checker below and by the validator.
const AUDIO_LIMITS = { examples: 4, tones: 4, toneMs: 4000, exampleMs: 6000, centsMax: 1200 };

function noteToHz(note){
  const m = AUDIO_NOTE_PATTERN.exec(String(note));
  if(!m) throw new Error(`Sound: "${note}" is not a note (a letter A to G, an optional # or b, and an octave from 2 to 6)`);
  const accidental = m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0;
  const midi = 12 * (Number(m[3]) + 1) + AUDIO_NOTE_SEMITONES[m[1]] + accidental;
  return AUDIO_A4_HZ * Math.pow(2, (midi - 69) / 12);
}
// how far above (positive) or below the second sound the first is, in cents
const centsBetween = (hz, refHz) => 1200 * Math.log2(hz / refHz);
function centsToHz(hz, cents){ return hz * Math.pow(2, cents / 1200); }
// A difference in cents, folded to the nearest octave into [-600, 600): a note sung an octave away reads as on the note.
const foldCents = cents => ((((cents + 600) % 1200) + 1200) % 1200) - 600;
// how far a sung pitch is from the picked note, to the nearest octave of it
function centsToNote(hz, note){ return foldCents(centsBetween(hz, noteToHz(note))); }
// 'under' | 'on' | 'over'
function noteVerdict(cents){
  if(Math.abs(cents) <= ON_NOTE_CENTS) return 'on';
  return cents < 0 ? 'under' : 'over';
}
// where the needle sits, in percent of its track: 0 is full under, 50 is on the note, 100 is full over
const needlePercent = cents => 50 + 50 * Math.max(-1, Math.min(1, cents / NEEDLE_FULL_CENTS));
// the middle zone of the needle, in percent of its track
const onNoteZone = () => ({ from: needlePercent(-ON_NOTE_CENTS), to: needlePercent(ON_NOTE_CENTS) });

/* ---------- a tone's length, and the check of a block's numbers ---------- */
const audioToneLengthMs = tone => tone.path ? tone.path[tone.path.length - 1][0] : tone.ms;
const audioToneEndMs = tone => (tone.at || 0) + audioToneLengthMs(tone);

const audioIsNumber = x => typeof x === 'number' && Number.isFinite(x);
const audioCentsOk = x => audioIsNumber(x) && Math.abs(x) <= AUDIO_LIMITS.centsMax;
const audioNoteOk = note => typeof note === 'string' && AUDIO_NOTE_PATTERN.test(note);

function audioPathProblems(path, where){
  if(!Array.isArray(path) || path.length < 2) return [`${where}: a path needs at least two [ms, cents] points`];
  const bad = path.filter(p => !Array.isArray(p) || p.length !== 2 || !audioIsNumber(p[0]) || !audioCentsOk(p[1]));
  if(bad.length) return [`${where}: every path point is [ms, cents], with cents between -${AUDIO_LIMITS.centsMax} and ${AUDIO_LIMITS.centsMax}`];
  const problems = [];
  if(path[0][0] !== 0) problems.push(`${where}: a path starts at time 0`);
  if(path.some((p, i) => i > 0 && p[0] <= path[i - 1][0])) problems.push(`${where}: path times must rise`);
  return problems;
}
// The problems with one tone: [] when it is fine.
function audioToneProblems(tone, where){
  if(!tone || typeof tone !== 'object') return [`${where}: a tone is an object`];
  const problems = [];
  if(!audioNoteOk(tone.note)) problems.push(`${where}: "${tone.note}" is not a note (a letter A to G, an optional # or b, and an octave from 2 to 6)`);
  if(tone.at !== undefined && !(audioIsNumber(tone.at) && tone.at >= 0)) problems.push(`${where}: "at" is a number of milliseconds, 0 or more`);
  const steady = tone.ms !== undefined, moving = tone.path !== undefined;
  if(steady === moving) return [...problems, `${where}: a tone has either ms (steady) or path (moving), not both and not neither`];
  if(tone.cents !== undefined && !audioCentsOk(tone.cents)) problems.push(`${where}: cents are between -${AUDIO_LIMITS.centsMax} and ${AUDIO_LIMITS.centsMax}`);
  if(steady && !(audioIsNumber(tone.ms) && tone.ms > 0)) problems.push(`${where}: ms is a number above 0`);
  if(moving){
    const pathProblems = audioPathProblems(tone.path, where);
    if(pathProblems.length) return [...problems, ...pathProblems];
  }
  if(problems.length) return problems;
  const length = audioToneLengthMs(tone);
  return length > AUDIO_LIMITS.toneMs ? [`${where}: a tone lasts at most ${AUDIO_LIMITS.toneMs} ms, this one ${length}`] : [];
}
function audioExampleProblems(example, where){
  if(!example || !Array.isArray(example.play) || example.play.length === 0) return [`${where}: an example has a play list of at least one tone`];
  const problems = [];
  if(example.play.length > AUDIO_LIMITS.tones) problems.push(`${where}: at most ${AUDIO_LIMITS.tones} tones, this one has ${example.play.length}`);
  const tones = example.play.flatMap((tone, i) => audioToneProblems(tone, `${where}, tone ${i + 1}`));
  if(tones.length) return [...problems, ...tones];
  const end = Math.max(...example.play.map(audioToneEndMs));
  return end > AUDIO_LIMITS.exampleMs ? [...problems, `${where}: an example ends at most ${AUDIO_LIMITS.exampleMs} ms after the tap, this one at ${end}`] : problems;
}
// The problems with an audio block's notes and numbers (the limits of section 21, item 2): [] when it is fine.
// The words of a block (says, labels, answers) are checked by the lesson validator, not here.
function audioBlockProblems(block){
  if(!block || typeof block !== 'object') return ['audio is not a block'];
  if(block.kind === 'tones'){
    if(!Array.isArray(block.examples) || block.examples.length === 0) return ['audio: a tones block has at least one example'];
    const count = block.examples.length > AUDIO_LIMITS.examples ? [`audio: at most ${AUDIO_LIMITS.examples} examples, this block has ${block.examples.length}`] : [];
    return [...count, ...block.examples.flatMap((ex, i) => audioExampleProblems(ex, `example ${i + 1}`))];
  }
  if(block.kind === 'notecheck'){
    if(block.notes === undefined) return [];
    if(!Array.isArray(block.notes) || block.notes.length === 0) return ['audio: notes is a list of at least one note'];
    return block.notes.filter(n => !audioNoteOk(n)).map(n => `audio: "${n}" is not a note (a letter A to G, an optional # or b, and an octave from 2 to 6)`);
  }
  return [`audio: kind "${block.kind}" is neither tones nor notecheck`];
}

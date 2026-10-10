// The pure half of the sound engine (lesson standard section 21): note names, cents, folding, the verdict, the checker of an
// audio block's numbers, and the pitch finder measured on made-up signals. No browser. Run: node tests/audio-pure.mjs
// Loads public/app/lessons/audio-notes.js and audio-pitch.js the way tests/load-app.mjs loads the page's scripts: as plain
// scripts in one isolated context, so a script that touched the page or the sound system at load would fail here.
//
// Negative controls: each seeded fault is a change to the loaded source that must turn exactly its own checks red.
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const FILES = ['app/lessons/audio-notes.js', 'app/lessons/audio-pitch.js'];
const NAMES = ['ON_NOTE_CENTS', 'NEEDLE_FULL_CENTS', 'RANGE_LOW_HZ', 'RANGE_HIGH_HZ', 'DEFAULT_NOTES', 'AUDIO_LIMITS', 'noteToHz', 'centsBetween',
  'centsToHz', 'foldCents', 'centsToNote', 'noteVerdict', 'needlePercent', 'onNoteZone', 'audioBlockProblems', 'audioToneEndMs', 'detectPitch',
  'medianOf', 'pitchHistory', 'steadyReading', 'PITCH_CLARITY_MIN', 'PITCH_MIN_READINGS'];
const sources = await Promise.all(FILES.map(async f => `/* ${f} */\n` + await readFile(new URL(`../public/${f}`, import.meta.url), 'utf8')));

function load(seed) {
  const source = sources.map(s => seed ? seed(s) : s).join('\n') + `\nglobalThis.__audio = { ${NAMES.join(', ')} };`;
  const context = vm.createContext({ console });
  vm.runInContext(source, context, { filename: 'public/app/lessons (audio scripts)' });
  return context.__audio;
}

/* ---------- made-up signals ---------- */
// a small seeded random source, so a run is the same every time
function random(seed) { let s = seed >>> 0; return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; }; }
const SIZE = 4096;
// harmonics: [[multiple of the fundamental, amplitude], ...]
function signal(hz, rate, { harmonics = [[1, 1]], level = 0.5, noise = 0, seed = 1, size = SIZE, endHz = hz } = {}) {
  const rnd = random(seed), out = new Float32Array(size), norm = harmonics.reduce((m, [, a]) => m + a, 0);
  let phase = 0;
  for (let i = 0; i < size; i++) {
    const f = hz + (endHz - hz) * i / size;
    phase += 2 * Math.PI * f / rate;
    let v = 0;
    for (const [k, a] of harmonics) v += a * Math.sin(k * phase);
    out[i] = level * v / norm + noise * (rnd() * 2 - 1);
  }
  return out;
}
const whiteNoise = (rate, level, seed) => { const rnd = random(seed), out = new Float32Array(SIZE); for (let i = 0; i < SIZE; i++) out[i] = level * (rnd() * 2 - 1); return out; };
const VOICE = [[1, 0.6], [2, 1.0], [3, 0.5], [4, 0.3], [5, 0.15]];   // the second harmonic stronger than the first

const failures = [];
let checks = 0;
const check = (ok, msg) => { checks++; if (!ok) failures.push(msg); };
const near = (got, want, tol) => typeof got === 'number' && Math.abs(got - want) <= tol;

/* ---------- the groups of checks, each over one loaded copy ---------- */
function notesChecks(A, tag) {
  const hz = n => A.noteToHz(n);
  check(near(hz('A4'), 440, 1e-9), `${tag}: A4 is not 440 Hz (${hz('A4')})`);
  check(near(hz('C4'), 261.6256, 0.001), `${tag}: C4 is ${hz('C4')}`);
  check(near(hz('D4'), 293.6648, 0.001), `${tag}: D4 is ${hz('D4')}`);
  check(near(hz('A2'), 110, 1e-9) && near(hz('A6'), 1760, 1e-9), `${tag}: A2 or A6 is wrong`);
  check(near(hz('F#4'), 369.9944, 0.001) && near(hz('Bb3'), 233.0819, 0.001), `${tag}: F#4 or Bb3 is wrong`);
  check(near(hz('Gb4'), hz('F#4'), 1e-9) && near(hz('C2'), 65.4064, 0.001) && near(hz('B6'), 1975.533, 0.01), `${tag}: Gb4 or the ends of the range are wrong`);
  for (const bad of ['H4', 'C1', 'C7', 'D', '', 'c4', 'C##4', 'D-4']) {
    let threw = false;
    try { hz(bad); } catch (err) { threw = /is not a note/.test(err.message); }
    check(threw, `${tag}: "${bad}" is not refused with an explicit error`);
  }
  for (const c of [-1200, -300, -30, 0, 17.5, 100, 600]) check(near(A.centsBetween(A.centsToHz(440, c), 440), c, 1e-9), `${tag}: cents ${c} do not round trip`);
  check(near(A.centsBetween(880, 440), 1200, 1e-9), `${tag}: an octave is not 1200 cents`);
  check(near(A.centsToHz(440, 100), hz('A#4'), 1e-9), `${tag}: 100 cents up from A4 is not A#4`);
  // folding: a note an octave away reads as on the note, and the fold lands in [-600, 600)
  const folds = [[0, 0], [1200, 0], [-1200, 0], [2400, 0], [1230, 30], [-1170, 30], [-30, -30], [599, 599], [600, -600], [-600, -600], [601, -599], [-601, 599]];
  for (const [c, want] of folds) check(near(A.foldCents(c), want, 1e-9), `${tag}: fold(${c}) is ${A.foldCents(c)}, not ${want}`);
  check(near(A.centsToNote(hz('D3'), 'D4'), 0, 1e-9) && near(A.centsToNote(hz('D5'), 'D4'), 0, 1e-9), `${tag}: a note an octave away does not read on`);
  check(near(A.centsToNote(A.centsToHz(hz('D3'), -35), 'D4'), -35, 1e-9), `${tag}: D3 35 cents flat does not read -35 against D4`);
  // the verdict, just inside and just outside the named distance
  const on = A.ON_NOTE_CENTS;
  check(on === 30 && A.NEEDLE_FULL_CENTS === 100 && A.RANGE_LOW_HZ === 70 && A.RANGE_HIGH_HZ === 1100, `${tag}: a named constant has the wrong value`);
  const v = A.noteVerdict;
  check(v(0) === 'on' && v(on - 0.01) === 'on' && v(-(on - 0.01)) === 'on' && v(on) === 'on' && v(-on) === 'on', `${tag}: a note just inside ${on} cents is not on`);
  check(v(on + 0.01) === 'over' && v(-(on + 0.01)) === 'under' && v(50) === 'over' && v(-50) === 'under' && v(599) === 'over' && v(-600) === 'under', `${tag}: just outside ${on} cents the verdict is wrong`);
  check(A.needlePercent(0) === 50 && A.needlePercent(-100) === 0 && A.needlePercent(100) === 100 && A.needlePercent(-500) === 0 && A.needlePercent(25) === 62.5, `${tag}: the needle is placed wrongly`);
  const zone = A.onNoteZone();
  check(near(zone.from, 35, 1e-9) && near(zone.to, 65, 1e-9), `${tag}: the middle zone is ${zone.from} to ${zone.to}, not 35 to 65`);
  check(JSON.stringify(A.DEFAULT_NOTES) === JSON.stringify(['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4']), `${tag}: the default notes are wrong`);
}

function limitsChecks(A, tag) {
  const flat = { kind: 'tones', says: 'x', examples: [{ label: 'a', play: [{ note: 'D4', ms: 4000 }, { note: 'D4', path: [[0, -30], [1800, -30], [2800, 0], [4000, 0]] }] }] };
  check(A.audioBlockProblems(flat).length === 0, `${tag}: a block inside the limits is refused: ${A.audioBlockProblems(flat)}`);
  const scoop = { kind: 'tones', says: 'x', examples: [{ label: 'a', play: [{ note: 'D4', path: [[0, -300], [400, 0], [1500, 0]] }, { note: 'F4', at: 1800, path: [[0, -300], [400, 0], [1500, 0]] }] }] };
  check(A.audioBlockProblems(scoop).length === 0, `${tag}: the scooping design is refused: ${A.audioBlockProblems(scoop)}`);
  check(A.audioBlockProblems({ kind: 'notecheck', says: 'x', answers: {} }).length === 0, `${tag}: a note check with the default notes is refused`);
  check(A.audioBlockProblems({ kind: 'notecheck', notes: ['C4', 'F#4', 'Bb3'] }).length === 0, `${tag}: a note check with its own notes is refused`);
  const one = tone => A.audioBlockProblems({ kind: 'tones', examples: [{ label: 'a', play: [tone] }] });
  const ex = list => A.audioBlockProblems({ kind: 'tones', examples: list });
  const t = { label: 'a', play: [{ note: 'D4', ms: 1000 }] };
  const faults = [
    ['five examples', ex([t, t, t, t, t])],
    ['five tones', ex([{ label: 'a', play: Array.from({ length: 5 }, () => ({ note: 'D4', ms: 500 })) }])],
    ['a steady tone over 4000 ms', one({ note: 'D4', ms: 4001 })],
    ['a path over 4000 ms', one({ note: 'D4', path: [[0, 0], [4001, 0]] })],
    ['an example ending after 6000 ms', one({ note: 'D4', at: 2500, ms: 3600 })],
    ['a note with octave 7', one({ note: 'C7', ms: 500 })],
    ['a note with octave 1', one({ note: 'C1', ms: 500 })],
    ['a note that is not a note', one({ note: 'H4', ms: 500 })],
    ['cents above 1200', one({ note: 'D4', ms: 500, cents: 1201 })],
    ['cents below -1200', one({ note: 'D4', path: [[0, -1201], [500, 0]] })],
    ['a path not starting at 0', one({ note: 'D4', path: [[100, 0], [500, 0]] })],
    ['path times that do not rise', one({ note: 'D4', path: [[0, 0], [500, 0], [500, 10]] })],
    ['a path of one point', one({ note: 'D4', path: [[0, 0]] })],
    ['both ms and a path', one({ note: 'D4', ms: 500, path: [[0, 0], [500, 0]] })],
    ['neither ms nor a path', one({ note: 'D4' })],
    ['a negative start time', one({ note: 'D4', at: -1, ms: 500 })],
    ['no examples', ex([])],
    ['an unknown kind', A.audioBlockProblems({ kind: 'clip' })],
    ['a note check with a bad note', A.audioBlockProblems({ kind: 'notecheck', notes: ['C4', 'K4'] })],
    ['a note check with an empty list of notes', A.audioBlockProblems({ kind: 'notecheck', notes: [] })]
  ];
  for (const [what, problems] of faults) check(problems.length > 0, `${tag}: ${what} is not reported`);
  check(one({ note: 'D4', ms: 4000 }).length === 0 && one({ note: 'D4', at: 2000, ms: 4000 }).length === 0, `${tag}: a tone of exactly 4000 ms, or one ending at exactly 6000 ms, is refused`);
  check(A.audioToneEndMs({ note: 'F4', at: 1800, path: [[0, -300], [1500, 0]] }) === 3300, `${tag}: the end of a tone is wrong`);
}

function pitchChecks(A, tag) {
  const cents = (got, want) => 1200 * Math.log2(got / want);
  for (const rate of [44100, 48000]) {
    // sines across the range of a voice, to a few hundredths of a half-step
    for (const hz of [90, 147, 220, 294, 440, 880]) {
      const got = A.detectPitch(signal(hz, rate), rate);
      check(got !== null && Math.abs(cents(got.hz, hz)) <= 3, `${tag}: a ${hz} Hz sine at ${rate} reads ${got ? got.hz.toFixed(2) : null} (${got ? cents(got.hz, hz).toFixed(2) : '-'} cents)`);
      check(got !== null && got.clarity > 0.95, `${tag}: a ${hz} Hz sine at ${rate} has clarity ${got && got.clarity}`);
    }
    // a voice: the second harmonic stronger than the first must not read an octave off
    for (const hz of [196, 330]) {
      const got = A.detectPitch(signal(hz, rate, { harmonics: VOICE }), rate);
      check(got !== null && Math.abs(cents(got.hz, hz)) <= 10, `${tag}: a voice-like ${hz} Hz at ${rate} reads ${got ? got.hz.toFixed(2) : null}, not ${hz} (an octave error?)`);
    }
    // a note 35 cents flat of D4 reads about -35 against D4
    const d4 = A.noteToHz('D4'), flat = A.detectPitch(signal(A.centsToHz(d4, -35), rate, { harmonics: VOICE }), rate);
    check(flat !== null && near(cents(flat.hz, d4), -35, 3), `${tag}: a note 35 cents flat of D4 at ${rate} reads ${flat ? cents(flat.hz, d4).toFixed(1) : null}`);
    check(flat !== null && A.noteVerdict(A.centsToNote(flat.hz, 'D4')) === 'under', `${tag}: 35 cents flat of D4 is not under`);
    // a sine with a little noise, and with a good deal of it
    const noisy = A.detectPitch(signal(220, rate, { noise: 0.05, seed: 7 }), rate);
    check(noisy !== null && Math.abs(cents(noisy.hz, 220)) <= 5, `${tag}: a 220 Hz sine with a little noise at ${rate} reads ${noisy && noisy.hz}`);
    // silence and noise are nothing; so is a sound too quiet to be a voice
    check(A.detectPitch(new Float32Array(SIZE), rate) === null, `${tag}: silence at ${rate} reads as a pitch`);
    for (const seed of [1, 2, 3, 4, 5]) check(A.detectPitch(whiteNoise(rate, 0.3, seed), rate) === null, `${tag}: white noise (seed ${seed}) at ${rate} reads as a pitch`);
    check(A.detectPitch(signal(220, rate, { level: 0.004 }), rate) === null, `${tag}: a sine quieter than the gate at ${rate} reads as a pitch`);
    // outside the range: below 70 Hz and above 1100 Hz are refused, not read an octave off
    check(A.detectPitch(signal(50, rate), rate) === null, `${tag}: a 50 Hz sine at ${rate} reads as a pitch`);
    check(A.detectPitch(signal(1500, rate), rate) === null, `${tag}: a 1500 Hz sine at ${rate} reads as a pitch`);
    check(A.detectPitch(signal(2000, rate), rate) === null, `${tag}: a 2000 Hz sine at ${rate} reads as a pitch`);
    check(near(A.RANGE_LOW_HZ, 70, 0) && A.detectPitch(signal(72, rate), rate) !== null && A.detectPitch(signal(1050, rate), rate) !== null, `${tag}: a note just inside the range (72 Hz, 1050 Hz) at ${rate} is refused`);
    // a slide is read near where it ends up, not refused
    const slide = A.detectPitch(signal(A.centsToHz(d4, -300), rate, { endHz: d4 }), rate);
    check(slide !== null && cents(slide.hz, d4) > -300 && cents(slide.hz, d4) < 0, `${tag}: a slide up to D4 at ${rate} reads ${slide ? cents(slide.hz, d4).toFixed(0) : null} cents`);
  }
  // a window too short to hold two repeats of the lowest note is refused loudly, not read wrongly
  let threw = false;
  try { A.detectPitch(new Float32Array(512), 44100); } catch (err) { threw = err instanceof RangeError || /too few/.test(err.message); }
  check(threw, `${tag}: a window that is too short is not refused with an explicit error`);
  // the middle of the last five
  check(A.medianOf([3, 1, 2]) === 2 && A.medianOf([4, 1, 3, 2]) === 2.5 && A.medianOf([9]) === 9, `${tag}: the middle of a list is wrong`);
  let h = [];
  for (const r of [10, 12, null, 11, 400]) h = A.pitchHistory(h, r);
  check(h.length === 5 && A.steadyReading(h) === 11.5, `${tag}: five readings with one wild one give ${A.steadyReading(h)}, not 11.5`);
  h = A.pitchHistory(h, 12);
  check(h.length === 5 && h[0] === 12 && A.steadyReading(h) === 12, `${tag}: the history keeps more than five readings or the wrong ones`);
  check(A.steadyReading([null, null, 10, 11, null]) === null && A.steadyReading([10, 11, null, 12, null]) === 11, `${tag}: fewer than ${A.PITCH_MIN_READINGS} clear readings give a verdict`);
  const before = [1, 2, 3];
  A.pitchHistory(before, 4);
  check(before.length === 3, `${tag}: the history was changed in place`);
}

/* ---------- the run, with the negative controls ---------- */
const GROUPS = [notesChecks, limitsChecks, pitchChecks];
// the failures one group reports on one loaded copy, taken out of the list
function reportOf(fn, seed, tag) {
  const before = failures.length;
  try { fn(load(seed), tag); } catch (err) { failures.push(`${tag}: crashed: ${err.message}`); }
  return failures.splice(before);
}
GROUPS.forEach(fn => failures.push(...reportOf(fn, null, 'run')));
const baseFailures = failures.length;

// each seeded fault is a change to the source that must turn red the group it belongs to
const controls = [
  { name: 'the verdict reversed for under and over', group: 0, seed: s => s.replace("return cents < 0 ? 'under' : 'over';", "return cents < 0 ? 'over' : 'under';") },
  { name: 'a note that is not folded to the octave', group: 0, seed: s => s.replace('const foldCents = cents => ((((cents + 600) % 1200) + 1200) % 1200) - 600;', 'const foldCents = cents => cents;') },
  { name: 'a verdict that counts 31 cents as on', group: 0, seed: s => s.replace('const ON_NOTE_CENTS = 30;', 'const ON_NOTE_CENTS = 31;') },
  { name: 'a limit on tone length that is not kept', group: 1, seed: s => s.replace('toneMs: 4000', 'toneMs: 9000') },
  { name: 'a note name check that lets octave 7 through', group: 1, seed: s => s.replace('([2-6])', '([2-7])') },
  { name: 'a pitch finder with no volume gate', group: 2, seed: s => s.replace('if(pitchRms(samples) < PITCH_RMS_MIN) return null;', '') },
  { name: 'a pitch finder that takes the highest peak, not the first', group: 2, seed: s => s.replace('const chosen = peaks.find(p => nsdf[p] >= PITCH_PEAK_RATIO * highest);', 'const chosen = peaks.find(p => nsdf[p] >= highest);') },
  { name: 'a pitch finder that takes the first peak at all', group: 2, seed: s => s.replace('const chosen = peaks.find(p => nsdf[p] >= PITCH_PEAK_RATIO * highest);', 'const chosen = peaks[0];') },
  { name: 'a pitch finder that accepts any clarity', group: 2, seed: s => s.replace('const PITCH_CLARITY_MIN = 0.85;', 'const PITCH_CLARITY_MIN = -1;') }
];
for (const c of controls) {
  checks++;
  if (!sources.some(s => c.seed(s) !== s)) { failures.push(`control "${c.name}": the seed did not change the source, so it proves nothing`); continue; }
  const red = reportOf(GROUPS[c.group], c.seed, `control "${c.name}"`);
  if (process.env.AUDIO_VERBOSE) console.log(`control "${c.name}": ${red.length} red; first: ${red[0]}`);
  if (!red.length) failures.push(`control "${c.name}": group ${c.group} stayed green on the seeded fault`);
}

if (failures.length) {
  console.error(`✗ ${failures.length} of ${checks} audio checks failed:`);
  failures.slice(0, 60).forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${checks} audio checks passed, and each of ${controls.length} seeded faults turned its own group red`);

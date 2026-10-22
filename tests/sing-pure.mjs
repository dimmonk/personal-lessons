// The pure half of the sung questions (lesson standard 3.8, section 3.8): how a task becomes targets inside the learner's range, how the readings
// of a try become the numbers it stores, what those numbers mean, and the words and strip drawn from them. No browser: the app's scripts are loaded
// as in tests/load-app.mjs. Made-up readings stand in for the microphone, so every case is known by construction.
// Negative controls: each seeded fault is a change to one of the app's files that must turn exactly its own group red.
// Run: node tests/sing-pure.mjs
import { loadApp } from './load-app.mjs';

const near = (got, want, tol) => typeof got === 'number' && Math.abs(got - want) <= tol;
const GROUPS = ['tasks', 'plans', 'scoring', 'range', 'meaning', 'words'];

/* ---------- made-up readings: one every 50 ms, a pitch at each time; or, with NOISE set, as a phone's microphone gives them ---------- */
// pitch: seconds from the window start -> cents above the target (null for not clear); level: loudness. NOISE (set by the words checks that
// run under every condition) makes the track realistic: readings every 50 ms, every 66.7 ms (a 60 Hz screen, iOS Low Power Mode) or a mix
// of both; a wobble of 5 to 7 a second up to +-50 cents (a natural vibrato); jitter; slips of the pitch finder to a fifth above; dropped
// readings. Each track draws its own wobble from the condition's seeded random numbers. opts.still: no wobble (a track that has its own).
let NOISE = null;
const lcg = seed => () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296;
const normal = r => { let u = 0; for (let k = 0; k < 6; k++) u += r(); return (u - 3) * Math.SQRT2; };
function readings(startS, seconds, hzAt, level = 0.2, opts = {}) {
  const out = [];
  if (!NOISE) {
    for (let k = 0; k * 0.05 < seconds; k++) out.push({ t: startS + k * 0.05, hz: hzAt(k * 0.05), level });
    return out;
  }
  const r = NOISE.rnd, rate = 5 + 2 * r(), depth = opts.still ? 0 : 50 * r(), phase = 2 * Math.PI * r();
  for (let u = 0; u < seconds; u += NOISE.mix ? (r() < 0.5 ? 0.05 : 1 / 15) : NOISE.step) {
    let hz = hzAt(u);
    if (hz !== null && hz !== undefined) {
      hz *= 2 ** ((depth * Math.sin(2 * Math.PI * rate * u + phase) + 4 * normal(r)) / 1200);
      const x = r();
      if (x < NOISE.glitch) hz *= 1.5; else if (x < NOISE.glitch + NOISE.drop) hz = null;
    }
    out.push({ t: startS + u, hz, level });
  }
  return out;
}
const NOISES = [{ name: 'clean, every 50 ms' }, { name: 'every 50 ms', step: 0.05 }, { name: 'every 66.7 ms', step: 1 / 15 }, { name: 'a mix of 50 and 66.7 ms', mix: true }]
  .map((c, i) => ({ ...c, make: () => c.step || c.mix ? { ...c, rnd: lcg(1000 + i), glitch: 0.03, drop: 0.03 } : null }));
const centsHz = (hz, cents) => hz * 2 ** (cents / 1200);

async function run(seed) {
  const app = await loadApp({ fixture: true, seed });
  const failures = [], checks = {};
  const check = (group, ok, msg) => { checks[group] = (checks[group] || 0) + 1; if (!ok) failures.push({ group, msg }); }, CHECK = check;
  const A = app, range = { low: 'A2', high: 'E4' };   // 45 to 64 half-steps
  const lo = A.noteToMidi(range.low), hi = A.noteToMidi(range.high);

  /* ---------- the tasks and their limits ---------- */
  check('tasks', A.noteToMidi('A4') === 69 && A.noteToMidi('C2') === 36 && A.noteToMidi('F#3') === 54 && A.noteToMidi('Bb3') === 58, 'note numbers: A4 is 69, C2 36, F#3 54, Bb3 58');
  check('tasks', A.midiToNote(69) === 'A4' && A.midiToNote(36) === 'C2' && A.midiToNote(54) === 'F#3' && A.midiToNote(95) === 'B6', 'a number back to its note');
  check('tasks', [36, 95].every(m => A.noteToMidi(A.midiToNote(m)) === m) && near(A.hzToMidi(440), 69, 1e-9) && near(A.hzToMidi(261.6256), 60, 1e-3), 'notes and numbers agree');
  let threw = 0;
  for (const bad of [35, 96, 60.5]) { try { A.midiToNote(bad); } catch { threw++; } }
  check('tasks', threw === 3, 'a number outside C2 to B6, or between two notes, is refused');
  const ok = t => A.singTaskProblems(t).length === 0;
  check('tasks', ['warmup', 'range', 'match', 'light'].every(task => ok({ task })), 'the tasks without numbers are fine bare');
  check('tasks', ok({ task: 'hold', seconds: 2 }) && ok({ task: 'hold', seconds: 6 }) && !ok({ task: 'hold', seconds: 1 }) && !ok({ task: 'hold', seconds: 7 }) && !ok({ task: 'hold', seconds: 9 }) && !ok({ task: 'hold' }), 'a hold is 2 to 6 seconds');
  check('tasks', ok({ task: 'melody', notes: 3, maxStep: 3 }) && ok({ task: 'melody', notes: 5, maxStep: 7 }) && !ok({ task: 'melody', notes: 2, maxStep: 3 }) && !ok({ task: 'melody', notes: 6, maxStep: 3 }) && !ok({ task: 'melody', notes: 4 }), 'a melody is 3 to 5 notes with a step');
  check('tasks', ok({ task: 'interval', minSemitones: 2, maxSemitones: 5 }) && !ok({ task: 'interval', minSemitones: 6, maxSemitones: 5 }) && !ok({ task: 'slide' }) && ok({ task: 'slide', maxSemitones: 5 }), 'an interval and a slide carry their steps');
  check('tasks', !ok({ task: 'whistle' }) && !ok({ task: 'match', seconds: 3 }) && !ok(null) && !ok({ task: 'warmup', cents: 20 }) && ok({ task: 'match', cents: 20 }) && !ok({ task: 'match', cents: 2 }), 'an unknown task, a setting it does not have and a cents it may not take are refused');
  check('tasks', ok({ task: 'melody', notes: 3, maxStep: 3, noteMs: 800 }) && ok({ task: 'melody', notes: 3, maxStep: 3, noteMs: 1600 }) && !ok({ task: 'melody', notes: 3, maxStep: 3, noteMs: 700 }) && !ok({ task: 'melody', notes: 3, maxStep: 3, noteMs: 1700 }) && !ok({ task: 'melody', notes: 3, maxStep: 3, noteMs: 1000.5 }) && !ok({ task: 'match', noteMs: 1000 }), 'a melody may be slowed to 0.8 to 1.6 seconds a note; no other task has the setting');
  check('tasks', A.singKey({ task: 'match' }) === 'sing-match' && A.isSingKey('sing-hold') && !A.isSingKey('sing-whistle') && !A.isSingKey('c-1'), 'a task has one stored name');
  check('tasks', A.SING_NEEDS_RANGE.every(t => !A.SING_FREE.includes(t)) && A.SING_TASKS.length === 8, 'free tasks need no range, the rest do');
  const inst = A.instanceOf({ items: {}, gens: {} }, { sing: { task: 'match' }, n: 2 }, 7);
  check('tasks', inst.key === 'sing-match' && inst.seed === 7 && inst.ref.n === 2 && inst.item.asks[0].kind === 'sing' && inst.item.blocks[0].kind === 'pitch' && inst.item.strand === 'match', 'a sung question has its key, seed, a pitch block and a sing ask');
  check('tasks', A.refId({ sing: { task: 'hold', seconds: 3 }, n: 2 }) === 'sing-hold' && A.refCount({ sing: { task: 'hold', seconds: 3 }, n: 2 }) === 2, 'a sung reference has a name and a count');
  check('tasks', A.definitionOf({ items: {}, gens: {} }, 'sing-light').strand === 'light' && A.definitionOf({ items: {}, gens: {} }, 'sing-nothing') === null, 'a stored sung name finds its definition, an unknown one finds none');

  const chorus = A.FC.get('chorus'), l1 = chorus.lessons.l1, built = A.buildSet(chorus, 'chorus', l1, l1.flow[2].set, 'run1');
  check('tasks', built.length === 4 && built.every(i => i.key === 'sing-match' && i.ref.sing.task === 'match') && new Set(built.map(i => i.seed)).size === 4 && A.checkSize(l1.check) === 2, 'a group of sung questions is built with a seed each, and the check counts its tries');
  check('tasks', A.usedIds(chorus).has('sing-hold') && A.usedIds(chorus).has('sing-light'), 'the sung names a lesson uses are known to the engine');

  /* ---------- plans: targets inside the range ---------- */
  const notesOf = plan => [...plan.hear, ...plan.bars, ...plan.windows.filter(w => w.note)].map(x => A.noteToMidi(x.note));
  const ranges = [{ low: 'C3', high: 'G3' }, range, { low: 'E2', high: 'A5' }, { low: 'C2', high: 'G2' }, { low: 'E6', high: 'B6' }];
  const tasks = [{ task: 'match' }, { task: 'hold', seconds: 4 }, { task: 'slide', maxSemitones: 7 }, { task: 'interval', minSemitones: 2, maxSemitones: 6 },
    { task: 'melody', notes: 5, maxStep: 4 }, { task: 'light' }];
  let outside = 0, made = 0;
  for (const r of ranges) for (const task of tasks) for (let seed = 1; seed <= 100; seed++) {
    const [a, b] = [A.noteToMidi(r.low), A.noteToMidi(r.high)], plan = A.singPlan({ id: 'sing', kind: 'sing', ...task }, r, seed);
    made++;
    outside += notesOf(plan).filter(m => m < a || m > b).length;
  }
  check('plans', made === 3000 && outside === 0, `every target of every task lies inside the range (${outside} notes outside in ${made} plans)`);
  const plan = (task, seed = 3, r = range) => A.singPlan({ id: 'sing', kind: 'sing', ...task }, r, seed);
  check('plans', JSON.stringify(plan({ task: 'match' })) === JSON.stringify(plan({ task: 'match' })) && JSON.stringify(plan({ task: 'match' }, 3)) !== JSON.stringify(plan({ task: 'match' }, 4)), 'the same seed makes the same plan, another seed another');
  const [midLo, midHi] = A.singMiddle(range), [topLo, topHi] = A.singTop(range);
  check('plans', midLo === lo + 3 && midHi === hi - 3 && topHi === hi && topLo === hi - 3, 'the middle of the range leaves a fifth at each end; the top is the top fifth');
  const matches = Array.from({ length: 200 }, (_, i) => A.noteToMidi(plan({ task: 'match' }, i + 1).hear[0].note));
  check('plans', Math.min(...matches) >= midLo && Math.max(...matches) <= midHi && new Set(matches).size >= 6, 'matches come from the middle of the range and vary');
  const lights = Array.from({ length: 200 }, (_, i) => A.noteToMidi(plan({ task: 'light' }, i + 1).hear[0].note));
  check('plans', Math.min(...lights) >= topLo && Math.max(...lights) <= topHi, 'light notes come from the top fifth');
  const m = plan({ task: 'match' });
  check('plans', m.hear.length === 1 && m.hear[0].ms === 1500 && m.windows[0].ms === 1900 && m.windows[0].fromMs === 0 && m.bars[0].ms === 1900 && m.totalMs === 1900, 'a match: the note sounds 1.5 s and the window is the note plus 0.4 s');
  const h = plan({ task: 'hold', seconds: 4 });
  check('plans', h.windows[0].ms === 5000 && h.holdNeedMs === 4000 && h.hear[0].ms === 1500, 'a hold: the window is its seconds plus 1 s and it needs its seconds');
  const iv = Array.from({ length: 100 }, (_, i) => plan({ task: 'interval', minSemitones: 2, maxSemitones: 6 }, i + 1));
  check('plans', iv.every(p => { const [x, y] = p.hear.map(n => A.noteToMidi(n.note)); return Math.abs(x - y) >= 2 && Math.abs(x - y) <= 6; }) && iv.every(p => p.windows.length === 2 && p.windows[0].ms === 1400 && p.windows[1].fromMs === 1400), 'an interval: two notes 2 to 6 half-steps apart, one window each of the note plus 0.4 s');
  const ml = Array.from({ length: 100 }, (_, i) => plan({ task: 'melody', notes: 5, maxStep: 4 }, i + 1));
  check('plans', ml.every(p => { const n = p.hear.map(x => A.noteToMidi(x.note)); return n.length === 5 && n.slice(1).every((x, i) => Math.abs(x - n[i]) >= 1 && Math.abs(x - n[i]) <= 4); }), 'a melody: the right number of notes, each a step of 1 to 4 from the last');
  // the last window: the note plus 0.4 s, and long enough for a singer 1.5 times slower than played to come in (0.4 s) and hold it
  const slowEnough = p => { const k = p.hear.length - 1, w = p.windows[k]; return w.ms >= p.hear[k].ms + 400 && w.fromMs + w.ms >= p.hear[k].atMs * 1.5 + 400 + p.holdNeedMs + 400 && w.fromMs + w.ms <= Math.max(w.fromMs + p.hear[k].ms + 400, p.hear[k].atMs * 1.5 + 800 + p.holdNeedMs) + 1; };
  check('plans', ml[0].hear[4].ms === 3000 && slowEnough(ml[0]) && ml[0].holdNeedMs === 2000 && ml[0].hear[1].atMs === 800 + 120, 'a melody: the last note is long and must be held (listened to long enough for a singer 1.5 times slower), the notes are heard one after another');
  const slow = plan({ task: 'melody', notes: 4, maxStep: 3, noteMs: 1400 });
  check('plans', slow.hear.slice(0, 3).every(h => h.ms === 1400) && slow.hear[3].ms === 3000 && slow.windows[0].ms === 1800 && slowEnough(slow) && slow.hear[1].atMs === 1400 + 120, 'a slow melody: each note but the last is as long as its setting, and so is its window');
  check('plans', A.singExample(slow).play.every(t => t.voice === true), 'the target is played in the hum-like tone');
  const sl = plan({ task: 'slide', maxSemitones: 7 });
  check('plans', sl.hear.length === 2 && sl.windows.length === 1 && sl.windows[0].lastMs === 400 && sl.windows[0].note === sl.hear[1].note && sl.bars.length === 2, 'a slide: two notes heard, one window scored on its last 0.4 s against the second');
  const w = plan({ task: 'warmup' }), r = plan({ task: 'range' });
  check('plans', w.hear.length === 0 && w.bars.length === 0 && w.windows.length === 1 && w.windows[0].free && r.windows.length === 2 && r.windows[0].label === 'up' && r.windows[1].label === 'down' && r.totalMs === 14000, 'a warm-up is one free hum; the range is a slide up then a slide down');
  let noRange = false;
  try { A.singPlan({ id: 'sing', kind: 'sing', task: 'match' }, null, 1); } catch { noRange = true; }
  check('plans', noRange, 'a target is never made without a range');
  const ex = A.singExample(plan({ task: 'interval', minSemitones: 2, maxSemitones: 6 }));
  check('plans', ex.play.length === 2 && ex.play[1].at === 1120 && ex.play.every(t => A.noteToHz(t.note) > 0), 'the heard part is a sound for the sound system');

  /* ---------- scoring: made-up readings ---------- */
  const tHz = A.noteToHz('D4'), cents = (start, secs, c, level) => readings(start, secs, () => centsHz(tHz, c), level);
  const win = { windows: [{ note: 'D4', fromMs: 0, ms: 1900 }], cents: 25 };
  const sc = (c, secs = 1.4) => A.singNoteCents(cents(0.4, secs, c), tHz);
  check('scoring', near(sc(0), 0, 1) && near(sc(20), 20, 1) && near(sc(-35), -35, 1), 'a steady note scores its own distance, in whole cents');
  check('scoring', near(sc(-1200), 0, 1) && near(sc(1200), 0, 1) && near(sc(-1200 + 40), 40, 1), 'a note an octave away folds onto the target');
  const attack = [...cents(0, 0.4, 300), ...cents(0.4, 1.0, 5), ...cents(1.4, 0.4, -300)];
  check('scoring', near(A.singNoteCents(attack, tHz), 5, 1), 'a short attack and release do not move the score');
  check('scoring', A.middleOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).join() === '3,4,5,6,7,8' && A.middleOf([1]).join() === '1' && A.middleOf([1, 2, 3, 4, 5]).join() === '2,3,4', 'a note is judged on the middle 60% of its readings, in time order');
  check('scoring', A.singNoteCents(cents(0, 0.2, 0), tHz) === null && A.singNoteCents([], tHz) === null, 'too few clear readings is not a note');
  check('scoring', A.singNoteCents(readings(0, 1.5, () => null), tHz) === null, 'readings that were not clear are not a note');
  const ans = A.singAnswer(win, cents(0.4, 1.4, 12), 0.25);
  check('scoring', ans && ans.cents.length === 1 && near(ans.cents[0], 12, 1), 'a try inside its window scores');
  check('scoring', A.singAnswer(win, cents(5, 1.4, 12), 0.25) === null && A.singAnswer(win, [], 0) === null, 'readings outside the window, or none, are nothing heard');
  const run1 = (c, secs, gapAt) => readings(0, secs, t => gapAt && t > gapAt[0] && t < gapAt[1] ? centsHz(tHz, 80) : centsHz(tHz, c));
  check('scoring', near(A.singHoldMs(run1(0, 3), tHz, 25), 3000, 60), 'a hold counts the longest unbroken stretch on the note');
  check('scoring', near(A.singHoldMs(run1(0, 3, [1.0, 1.3]), tHz, 25), 1700, 120), 'a break in the hold ends the stretch: the longer side counts');
  check('scoring', A.singHoldMs(run1(60, 3), tHz, 25) === 0 && A.singHoldMs(run1(24, 1), tHz, 25) > 900, 'a hold off the note counts nothing; just inside the tolerance counts');
  const holdPlan = { windows: [{ note: 'D4', fromMs: 0, ms: 3000 }], cents: 25, holdNeedMs: 2000 };
  const held = A.singAnswer(holdPlan, run1(5, 2.9), 0);
  check('scoring', held.holdMs >= 2000 && A.singOk({ task: 'hold', seconds: 2 }, held), 'a note held for its seconds is a pass');
  const dropped = A.singAnswer(holdPlan, run1(5, 2.9, [1.0, 2.9]), 0);
  check('scoring', dropped.holdMs < 1200 && !A.singOk({ task: 'hold', seconds: 2 }, dropped), 'a note that drifts away is not held');
  const slide = { windows: [{ note: 'D4', fromMs: 0, ms: 2800, lastMs: 400 }], cents: 25 };
  const slid = readings(0, 2.8, t => centsHz(tHz, t < 1 ? -500 : t < 2 ? -500 + (t - 1) * 500 : 0));
  check('scoring', near(A.singAnswer(slide, slid, 0).cents[0], 0, 2), 'a slide is scored on its last 0.4 s, where it landed');
  const missed = readings(0, 2.8, t => centsHz(tHz, t < 2.2 ? -500 + t * 200 : 60));
  check('scoring', near(A.singAnswer(slide, missed, 0).cents[0], 60, 2), 'a slide that lands off the note scores where it landed');
  const two = { windows: [{ note: 'D4', fromMs: 0, ms: 1400 }, { note: 'F4', fromMs: 1400, ms: 1400 }], cents: 25 };
  const fHz = A.noteToHz('F4'), pair = [...readings(0.2, 1.0, () => centsHz(tHz, 10)), ...readings(1.6, 1.0, () => centsHz(fHz, -40))];
  const pa = A.singAnswer(two, pair, 0);
  check('scoring', pa.cents.length === 2 && near(pa.cents[0], 10, 1) && near(pa.cents[1], -40, 1), 'a run scores each note in its own window');
  const half = A.singAnswer(two, readings(0.2, 1.0, () => centsHz(tHz, 10)), 0);
  check('scoring', half.cents[1] === A.SING_MISSED && near(half.cents[0], 10, 1), 'a note not sung counts as missed, the others still score');
  const loud = (lv, talk) => A.singAnswer({ windows: [{ note: 'D4', fromMs: 0, ms: 1900 }], cents: 25, level: true }, cents(0.4, 1.4, 0, lv), 0, talk);
  check('scoring', loud(0.2, 0.2).loud === 1 && loud(0.4, 0.2).loud === 2 && loud(0.1, 0.2).loud === 0.5, 'loudness is compared with the learner\'s own talking note');
  // how a single note starts (a match or a light note) and how a hold ends
  const onsetPlan = { windows: [{ note: 'D4', fromMs: 0, ms: 1900 }], cents: 50, onset: true };
  const scoop = A.singAnswer(onsetPlan, readings(0.2, 1.5, t => centsHz(tHz, t < 0.4 ? -300 + t / 0.4 * 300 : 0)), 0);
  const clean = A.singAnswer(onsetPlan, cents(0.2, 1.5, 5), 0);
  check('scoring', scoop.start < -100 && near(scoop.cents[0], 0, 2) && near(clean.start, 5, 1) && !('end' in clean), 'a match keeps how its note started: a scoop starts well under, a clean start on');
  const driftPlan = { windows: [{ note: 'D4', fromMs: 0, ms: 3000 }], cents: 50, holdNeedMs: 2000, drift: true };
  const sank = A.singAnswer(driftPlan, readings(0, 2.9, t => centsHz(tHz, t < 0.7 ? 0 : -Math.min(100, (t - 0.7) / 1.5 * 100))), 0);
  check('scoring', sank.end <= -90 && sank.holdMs < 2000 && !('start' in sank), 'a hold keeps how it ended: one that sank ends under');
  // the example sounds of lessons 3 and 4, as the app would hear them sung (a path is straight in cents, as the sound system plays it)
  const along = path => t => { const ms = t * 1000, k = path.findIndex(([at]) => at >= ms); if(k <= 0) return k === 0 ? path[0][1] : path[path.length - 1][1];
    const [a, ca] = path[k - 1], [b, cb] = path[k]; return ca + (cb - ca) * (ms - a) / (b - a); };
  const sung = (planOf, path, secs) => A.singAnswer(planOf, readings(0.2, secs, t => centsHz(tHz, along(path)(t))), 0);
  const huntPlan = { windows: [{ note: 'D4', fromMs: 0, ms: 3700 }], cents: 50, onset: true, turns: true };
  const hunt = sung(huntPlan, [[0, -250], [500, 130], [1000, -100], [1500, 70], [2000, -30], [2500, 0], [3500, 0]], 3.5);
  const scoopEx = sung(huntPlan, [[0, -300], [400, 0], [1500, 0]], 1.5);
  check('scoring', hunt.turns >= 2 && scoopEx.turns === 0 && A.singNoteCents(cents(0, 1.4, 20), tHz) !== null, `lesson 3's hunting sound turns ${hunt.turns} times, its slide ${scoopEx.turns}`);
  const sinkPlan = { windows: [{ note: 'D4', fromMs: 0, ms: 3000 }], cents: 50, holdNeedMs: 2000, onset: true, drift: true };
  const sinkEx = sung(sinkPlan, [[0, 0], [700, 0], [2200, -100], [3000, -100]], 2.8);
  check('scoring', near(sinkEx.start, 0, 5) && sinkEx.end <= -90 && sinkEx.holdMs < 2000, 'lesson 4\'s sinking sound starts on the note and ends under it');
  // round 3 of the reviews (2026-10-22): a held note is named one way, from its start and its end
  const hold2 = { windows: [{ note: 'D4', fromMs: 0, ms: 3000 }], cents: 50, holdNeedMs: 2000, onset: true, drift: true };
  const onsetHold = A.singAnswer(hold2, readings(0.1, 2.8, t => centsHz(tHz, t < 0.25 ? -150 + t / 0.25 * 150 : 0)), 0);
  const scoopSink = A.singAnswer(hold2, readings(0.1, 2.8, t => centsHz(tHz, t < 0.3 ? -300 + t / 0.3 * 300 : t < 1.6 ? 0 : -Math.min(120, (t - 1.6) / 0.6 * 120))), 0);
  const melPlan = { windows: [{ note: 'D4', fromMs: 0, ms: 1200 }, { note: 'D4', fromMs: 1200, ms: 1200 }, { note: 'D4', fromMs: 2400, ms: 3400 }], cents: 50, holdNeedMs: 2000, onset: true, drift: true };
  const lowTune = A.singAnswer(melPlan, readings(0.1, 5.6, () => centsHz(tHz, -70)), 0);
  const lateSink = A.singAnswer(melPlan, readings(0.1, 5.6, t => centsHz(tHz, t < 2.4 + 2.3 ? 0 : -120)), 0);
  check('scoring', onsetHold.holdMs >= 2000 && Number.isFinite(onsetHold.start) && scoopSink.start < -100 && scoopSink.end < -50 && lowTune.start <= -60 && lowTune.end <= -60 && lateSink.holdMs >= 2000 && lateSink.end <= -100, 'the reviewer\'s tries are scored with a start and an end');
  check('scoring', A.singLevel(cents(0, 0.1, 0)) === null && near(A.singLevel(cents(0, 1, 0, 0.3)), 0.3, 1e-9), 'loudness needs enough clear sound');

  /* ---------- the range ---------- */
  const rplan = A.singPlan({ id: 'sing', kind: 'sing', task: 'range' }, null, 1);
  const hz = midi => 440 * 2 ** ((midi - 69) / 12);
  // up: hold 45, slide to 64, hold 64; down: slide to 47, hold 47
  const slideUp = readings(0.4, 7, t => t < 1 ? hz(45) : t < 4 ? hz(45 + (t - 1) / 3 * 19) : hz(64));
  const slideDown = readings(7.4, 7, t => t < 3 ? hz(64 - t / 3 * 17) : hz(47));
  const found = A.singFindRange(rplan, [...slideUp, ...slideDown], 0);
  check('range', found && found.low === 45 && found.high === 64 && found.span === 19 && found.steady >= 2, 'the range is the lowest and highest steady notes: a slide on its own is not a note');
  const upOnly = A.singFindRange(rplan, readings(0.4, 3, () => hz(60)), 0);
  check('range', upOnly && upOnly.span === 0, 'one steady note is a span of nothing');
  check('range', A.singFindRange(rplan, readings(0.4, 5, t => hz(40 + t * 8)), 0) === null, 'a slide with no steady note finds nothing');
  check('range', A.singFindRange(rplan, [], 0) === null, 'silence finds nothing');
  const sharp = A.singFindRange(rplan, [...readings(0.4, 1, () => hz(45.3)), ...readings(2, 1, () => hz(63.8))], 0);
  check('range', sharp.low === 45 && sharp.high === 64, 'each end of the range is the nearest note to the steady note sung there');
  check('range', A.steadyNotes(readings(0, 1, () => hz(50))).length === 1 && A.steadyNotes(readings(0, 0.2, () => hz(50))).length === 0, 'a steady note lasts at least 0.3 s');
  check('range', A.SING_RANGE_MIN_SPAN === 7, 'a range narrower than a fifth is not a range');

  /* ---------- what an answer means ---------- */
  const T = (task, extra = {}) => ({ id: 'sing', kind: 'sing', task, ...extra });
  check('meaning', A.singOk(T('match'), { cents: [25] }) && A.singOk(T('match'), { cents: [-25] }) && !A.singOk(T('match'), { cents: [26] }) && !A.singOk(T('match'), { cents: [] }), 'a match is on the note within 25 cents either way');
  check('meaning', A.singOk(T('match', { cents: 40 }), { cents: [40] }) && !A.singOk(T('match', { cents: 10 }), { cents: [11] }), 'a task may set its own cents');
  check('meaning', A.singOk(T('hold', { seconds: 3 }), { cents: [4], holdMs: 3000 }) && !A.singOk(T('hold', { seconds: 3 }), { cents: [4], holdMs: 2999 }), 'a hold passes when it lasted its seconds');
  check('meaning', A.singOk(T('slide', { maxSemitones: 5 }), { cents: [-10] }) && !A.singOk(T('slide', { maxSemitones: 5 }), { cents: [40] }), 'a slide passes when it landed');
  check('meaning', A.singOk(T('interval'), { cents: [5, -20] }) && !A.singOk(T('interval'), { cents: [5, 30] }) && !A.singOk(T('interval'), { cents: [5] }), 'an interval needs both notes on');
  const mel = T('melody', { notes: 5 });
  check('meaning', A.singOk(mel, { cents: [0, 0, 0, 0, 90], holdMs: 2000 }) && !A.singOk(mel, { cents: [0, 0, 0, 90, 90], holdMs: 2000 }) && !A.singOk(mel, { cents: [0, 0, 0, 0, 0], holdMs: 1900 }), 'a melody needs 4 of 5 notes on and the long note held for 2 seconds');
  check('meaning', A.singOk(T('melody', { notes: 3 }), { cents: [0, 0, 0], holdMs: 2500 }) && !A.singOk(T('melody', { notes: 3 }), { cents: [0, 0, 60], holdMs: 2500 }), 'a shorter melody scales the same way');
  check('meaning', A.singOk(T('light'), { cents: [3], loud: 1.15 }) && !A.singOk(T('light'), { cents: [3], loud: 1.16 }) && !A.singOk(T('light'), { cents: [30], loud: 1 }), 'a light note is on the note and no more than 15% louder than talking');
  check('meaning', A.singOk(T('range'), { span: 7, steady: 3 }) && !A.singOk(T('range'), { span: 6, steady: 3 }) && A.singOk(T('warmup'), { cents: [] }), 'a range of a fifth or more is set; a warm-up always passes');
  check('meaning', A.scoreSing(null, T('match'), { cents: [0] }) === 'ok' && A.scoreSing(null, T('match'), { cents: [99] }) === 'no', 'the engine scores a sung answer ok or no');
  check('meaning', A.scoreItem(A.FC.get('chorus'), A.singItem({ task: 'match' }), null, { sing: { cents: [3] } }).ok === true, 'a sung question is right when its one ask is');
  check('meaning', A.singGuessValue('under') === -1 && A.singGuessValue('on') === 0 && A.singGuessValue('over') === 1 && A.singGuessWord(-1) === 'under' && A.singGuessWord(1) === 'over', 'what you heard is kept as -1, 0 or 1');
  check('words', A.singMeasuredSide(T('match'), { cents: [-60] }) === -1 && A.singMeasuredSide(T('match'), { cents: [10] }) === 0 && A.singMeasuredSide(T('match', { cents: 50 }), { cents: [45] }) === 0 && A.singMeasuredSide(T('match'), { cents: [80] }) === 1 && A.singMeasuredSide(T('match'), { cents: [1200] }) === null, 'the side measured follows the task\'s own tolerance; a note not heard has none');
  check('words', A.singMeasuredSide(T('interval'), { cents: [-200, 5] }) === 0 && A.singGuessAgrees(T('melody', { notes: 3 }), { cents: [0, 0, 70], holdMs: 2000, guess: 1 }) && !A.singGuessAgrees(T('match'), { cents: [0], guess: -1 }) && !A.singGuessAgrees(T('match'), { cents: [0] }), 'a run is judged on its last note; no guess never agrees');
  check('meaning', A.singOk(T('match'), { cents: [0], guess: 1 }) && !A.singOk(T('match'), { cents: [60], guess: 1 }) && A.SING_GUESS_TASKS.every(t => !A.SING_FREE.includes(t)), 'what you heard is never scored');
  check('meaning', A.singSlid({ cents: [0], start: -250 }) === 1 && A.singSlid({ cents: [0], start: 250 }) === -1 && A.singSlid({ cents: [0], start: -60 }) === 0 && A.singSlid({ cents: [-150], start: -160 }) === 0 && A.singSlid({ cents: [0] }) === 0 && A.singSlid({ cents: [1200], start: -300 }) === 0, 'a note slid onto its note when it started more than a shade off and moved more than a shade');
  check('meaning', !A.singOk(T('match', { cents: 50 }), { cents: [0], start: -250 }) && A.singOk(T('match', { cents: 50 }), { cents: [0], start: -40 }) && !A.singOk(T('light'), { cents: [0], start: -250, loud: 1 }) && A.singOk(T('slide', { maxSemitones: 4 }), { cents: [0] }), 'a match or a light note that slid into the note is not on it; a slide is judged on its landing');
  check('meaning', !A.singOk(T('match', { cents: 50 }), { cents: [10], start: -90, turns: 2 }) && A.singOk(T('match', { cents: 50 }), { cents: [10], start: 0, turns: 1 }), 'a note that changed direction twice by more than a shade hunted, and is not on the note');
  check('words', A.singMeasuredSide(T('match', { cents: 50 }), { cents: [0], start: -250 }) === -1 && !A.singGuessAgrees(T('match', { cents: 50 }), { cents: [0], start: -250, guess: 0 }) && A.singGuessAgrees(T('match', { cents: 50 }), { cents: [0], start: -250, guess: -1 }) && A.singMeasuredSide(T('match', { cents: 50 }), { cents: [0], turns: 3 }) === null, 'what was measured follows the note\'s own mark: a slide up started under; a hunt has no one side');
  check('words', A.singMeasuredSide(T('hold', { seconds: 2, cents: 50 }), { cents: [-52], start: 0, end: -100, holdMs: 1500 }) === -1 && A.singMeasuredSide(T('hold', { seconds: 2, cents: 50 }), { cents: [0], start: 0, end: 0, holdMs: 2500 }) === 0 && A.singMeasuredSide(T('hold', { seconds: 2, cents: 50 }), { cents: [80], start: 80, end: 80, holdMs: 0 }) === 1, 'a hold is measured where it ended, or where it started when it was off from the start');
  check('meaning', A.singDrift(T('hold', { seconds: 2, cents: 50 }), { cents: [0], end: -80 }) === -1 && A.singDrift(T('hold', { seconds: 2, cents: 50 }), { cents: [0], end: 70 }) === 1 && A.singDrift(T('hold', { seconds: 2, cents: 50 }), { cents: [0], end: 10 }) === 0 && A.singDrift(T('hold', { seconds: 2 }), { cents: [0] }) === null, 'a hold ended under, on or over');
  check('meaning', A.singHalfSteps(60) === 1 && A.singHalfSteps(-240) === 2 && A.singHalfSteps(150) === 2 && A.singHalfSteps(0) === 1, 'how far off, in whole half-steps, at least one');
  const ids = [[0, 'on'], [25, 'on'], [-25, 'on'], [26, 'littleOver'], [-26, 'littleUnder'], [50, 'littleOver'], [51, 'shadeOver'], [100, 'shadeOver'], [101, 'wellOver'], [-300, 'wellUnder'], [1200, 'missed']];
  check('meaning', ids.every(([c, key]) => A.singWordKey(T('match'), c) === key), `the words follow the cents: ${ids.map(([c]) => c).join(', ')}`);
  check('meaning', A.singWordKey(T('match', { cents: 40 }), 40) === 'on' && A.singWordKey(T('match', { cents: 40 }), 41) === 'littleOver' && A.singWordKey(T('match', { cents: 50 }), 51) === 'shadeOver', 'the words follow a task\'s own cents; a shade is never less than half a half-step');

  /* ---------- words and the strip ---------- */
  const marks = (ask, answer, good) => A.singMarksHtml(ask, answer, good), miss = (ask, answer) => A.singMissHtml(ask, answer);
  check('words', marks(T('match'), { cents: [4] }, true).includes('On the note') && !marks(T('match'), { cents: [4] }, true).includes('mark no'), 'a match on the note says so');
  check('words', marks(T('match'), { cents: [-60] }, false).includes('A shade under') && marks(T('match'), { cents: [-60] }, false).includes('mark no') && marks(T('match'), { cents: [200] }, false).includes('Well over'), 'a match off the note says a shade or well, under or over');
  check('words', miss(T('match'), { cents: [-60] }).includes('Your voice sat a shade under the note: sing a little higher, less than a half-step.') && miss(T('match'), { cents: [5] }) === '', 'one line after a miss, with which way to move and how far; none after a hit');
  check('words', miss(T('match'), { cents: [240] }).includes('about two half-steps: sing that much lower') && miss(T('match'), { cents: [-130] }).includes('about one half-step: sing that much higher'), 'a note well off says about how many half-steps, and which way');
  check('words', marks(T('match', { cents: 50 }), { cents: [0], start: -250 }, false).includes('Sliding up into it') && marks(T('match', { cents: 50 }), { cents: [0], start: -250 }, false).includes('mark no') && miss(T('match', { cents: 50 }), { cents: [0], start: -250 }).includes('slid up into it'), 'a note that slid into its note is named for the slide');
  const sinkWords = miss(T('hold', { seconds: 2, cents: 50 }), { cents: [-52], start: 0, end: -100, holdMs: 1500 });
  check('words', sinkWords.includes('Then it sank under the note') && !sinkWords.includes('sat a shade under'), 'a hold that started on and sank says it sank, whatever its middle');
  check('words', marks(T('hold', { seconds: 2, cents: 50 }), { cents: [0], start: 0, end: -80, holdMs: 1500, guess: 0 }, false).includes('You said: On') && marks(T('hold', { seconds: 2, cents: 50 }), { cents: [0], start: 0, end: -80, holdMs: 1500, guess: 0 }, false).includes('The app measured: sank under. Your note ended lower'), 'a hold shows what was said beside where it ended');
  const huntMarks = marks(T('match', { cents: 50 }), { cents: [10], start: -150, turns: 2, guess: -1 }, false);
  check('words', huntMarks.includes('Hunting for the note') && huntMarks.includes('neither under nor over') && miss(T('match', { cents: 50 }), { cents: [10], start: -150, turns: 2 }).includes('wandered up and down'), 'a hunt is named, with its own fix and its own line after a guess');
  const slidSaid = marks(T('match', { cents: 50 }), { cents: [0], start: -250, guess: 0 }, false);
  check('words', slidSaid.includes('Sliding up into it') && slidSaid.includes('The app measured: sliding up into it. Your note started lower than it sounded to you.') && !slidSaid.includes('the same way'), 'the line after a guess never contradicts the slide mark');
  check('words', miss(T('melody', { notes: 3, cents: 50 }), { cents: [0, 0, 0], holdMs: 900, start: 0, end: -90 }).includes('Then it sank under the note'), 'a melody\'s long last note that sank says so');
  const R = { hold: T('hold', { seconds: 2, cents: 50 }), mel: T('melody', { notes: 3, cents: 50 }) };
  const lowTuneMiss = miss(R.mel, { ...lowTune, guess: -1 });
  check('words', !lowTuneMiss.includes('sank') && marks(R.mel, { ...lowTune, guess: -1 }, false).includes('The app measured it the same way.'), `R1: a tune a shade under from its first note is not told its last note sank (${lowTuneMiss.replace(/<[^>]+>/g, ' ')})`);
  check('words', A.singGuessAgrees(R.hold, { ...onsetHold, guess: 0 }) && marks(R.hold, { ...onsetHold, guess: 0 }, true).includes('Steady for 2 seconds') && miss(R.hold, onsetHold) === '', 'R2: an ordinary start into a hold is not "off from the start", and a guess of On agrees');
  const scoopSinkMiss = miss(R.hold, scoopSink);
  check('words', scoopSinkMiss.includes('slid up into it') && scoopSinkMiss.includes('sank under the note') && !scoopSinkMiss.includes('half-steps: sing that much higher') && !scoopSinkMiss.includes('From the first moment'), `R2: a scoop into a hold that then sinks says slide and sank (${scoopSinkMiss.replace(/<[^>]+>/g, ' ')})`);
  check('words', marks(R.mel, { ...lateSink, guess: -1 }, true).includes('Sank under') && A.singGuessAgrees(R.mel, { ...lateSink, guess: -1 }), 'R3: a last note held 2 seconds and then sinking is reported as sinking, and a guess of Under agrees');
  // the final review's cases (2026-10-22): a held note that starts off on one side and ends on the other is off from the start, named from its
  // start, then where it went; "From the first moment" reads the start; a tune's last note is named and measured by one reading
  const text = h => h.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  const overThenUnder = { cents: [-38], start: 70, end: -80, holdMs: 500 }, underThenOver = { cents: [10], start: -70, end: 70, holdMs: 500 };
  const e1 = text(miss(R.hold, overThenUnder)), e1b = text(miss(R.hold, underThenOver));
  check('words', e1.includes('From the first moment your voice sat a shade over the note') && e1.includes('Then it sank under the note') && marks(R.hold, overThenUnder, false).includes('off the note from the start'),
    `E1: a hold +70 then -80 is off from the start (over), then sank under (${e1})`);
  check('words', e1b.includes('From the first moment your voice sat a shade under the note') && e1b.includes('Then it rose over the note'), `E1: a hold -70 then +70 is off from the start (under), then rose over (${e1b})`);
  const tuneCross = { cents: [0, 0, -38], start: 70, end: -80, holdMs: 500 }, tuneMarks = text(marks(R.mel, { ...tuneCross, guess: -1 }, false));
  check('words', !/Note 3 On the note/.test(tuneMarks) && tuneMarks.includes('Note 3 A shade over') && tuneMarks.includes('then sank under') && A.singGuessAgrees(R.mel, { ...tuneCross, guess: -1 }) && !A.singGuessAgrees(R.mel, { ...tuneCross, guess: 1 }),
    `E1: a tune's last note +70 then -80 is not "On the note"; it is said to end under, and the guess is checked where it ended (${tuneMarks})`);
  const e2 = text(miss(R.hold, { cents: [-100], start: -70, end: -144, holdMs: 0 }));
  check('words', e2.includes('From the first moment your voice sat a shade under the note') && e2.includes('sank further under') && !e2.includes('about one half-step'),
    `E2: "From the first moment" reads the start (-70), and the end is said as sinking further (${e2})`);
  const lateLow = { cents: [0, 0, -100], start: -70, end: -145, holdMs: 0 };
  const e3 = text(marks(R.mel, { ...lateLow, guess: 0 }, false));
  check('words', e3.includes('Note 3 A shade under') && e3.includes('then sank further') && e3.includes('Your note ended lower') && A.singGuessAgrees(R.mel, { ...lateLow, guess: -1 }),
    `E3: a tune's last note -70 sinking to -145 is named and measured by one reading (${e3})`);
  for (const COND of NOISES) {
    NOISE = COND.make();
    const check = (g, ok, msg) => CHECK(g, ok, `[${COND.name}] ${msg}`);
  // the confirmation review's cases: a start off the note that then finds it is off from the start, then found (E4), and a tune's last note is
  // named and measured by one reading (E5)
  const e4 = A.singAnswer(hold2, readings(0.1, 2.8, t => centsHz(tHz, t < 1.0 ? -70 : 0)), 0), e4t = text(miss(R.hold, e4));
  check('words', A.singJudge(R.hold, e4).last.id === 'offStart' && e4t.includes('From the first moment your voice sat a shade under') && e4t.includes('Then you found the note') && !e4t.includes('wandered off'),
    `E4: a hold -70 for a second and then on is off from the start, then found (${e4t})`);
  const hold6 = { ...hold2, windows: [{ note: 'D4', fromMs: 0, ms: 7000 }], holdNeedMs: 6000 }, R6 = T('hold', { seconds: 6, cents: 50 });
  const e4b = A.singAnswer(hold6, readings(0.1, 6.9, t => centsHz(tHz, t < 1.5 ? -70 : 0)), 0);
  check('words', A.singJudge(R6, e4b).last.id === 'offStart' && !text(miss(R6, e4b)).includes('wandered off'), 'E4: a 6-second hold -70 for 1.5 s and then on is off from the start');
  const e5 = A.singAnswer(melPlan, readings(0, 4.8, t => centsHz(tHz, t < 2.4 ? 0 : t < 3.6 ? -70 : 0)), 0);
  for (const g of [0, -1]) {
    const m = text(marks(R.mel, { ...e5, guess: g }, false)), j = A.singJudge(R.mel, e5).last;
    check('words', /Note 3 A shade under/.test(m) && m.includes('then found it') && A.singGuessAgrees(R.mel, { ...e5, guess: g }) === (g === 0) && (g === 0 || m.includes('Your note ended higher')),
      `E5: a tune's last note -70 then on, guessed ${g}: the mark and the measured line agree (${m})`);
  }

  // A generator of composite sung contours, each with what the lessons' definitions say about it, run through singJudge: a scoop that lands on,
  // off or past the note; a start off the note that finds it late; a note that stops early or breaks for a breath; drift each way; a note
  // that wanders and comes back; off throughout, crossing, or going further; steady; short and long holds, and a tune's long last note.
  // (a) the three parts (how it began, what it did, where it ended) are the ones the contour has; (b) the mark, the reading a guess is checked
  // against (where a hold ended; how a tune's last note is named) and the lines that say which way to move never disagree, and a hold that
  // was short never shows the seconds it needed.
  const sideOf = c => Math.abs(c) <= 50 ? 0 : c < 0 ? -1 : 1;
  const sideOfKey = key => key === 'on' || key === 'stopped' ? 0 : /Under$|^sank$|^slidUp$/.test(key) ? -1 : /Over$|^rose$|^slidDown$/.test(key) ? 1 : null;
  // a contour: segments [cents, seconds, ramp?] (cents null: no sound); `at` the time the held note's window opens
  const contourAt = segs => t => { let from = 0, prev = segs[0][0];
    for (const [c, d, ramp] of segs) { if (t < from + d) return c === null ? null : ramp && prev !== null ? prev + (c - prev) * (t - from) / d : c; from += d; prev = c; }
    return null; };
  const kinds = [];
  for (const s0 of [-250, 250]) for (const land of [-70, 0, 70, -Math.sign(s0) * 130]) kinds.push({ name: `scoop ${s0} to ${land}`, segs: [[s0, 0.2], [land, 0.1, true], [land, 9]] });
  for (const s0 of [-250, 250]) for (const e of [-90, 90]) kinds.push({ name: `scoop ${s0} on, then to ${e}`, segs: [[s0, 0.2], [0, 0.1, true], [0, 1.0], [e, 0.4, true], [e, 9]] });
  for (const d of [0.6, 1.0, 1.5, 1.95, 4.5]) kinds.push({ name: `on, stopped at ${d}`, segs: [[0, d]] });
  for (const a of [0.8, 1.2, 3]) kinds.push({ name: `on ${a}, breath, on`, segs: [[0, a], [null, 0.3], [0, 9]] });
  for (const [o, d] of [[-130, 0.25], [130, 0.25], [-70, 0.4], [70, 0.4], [-70, 1.2], [70, 1.2]]) kinds.push({ name: `${o} for ${d}, then on`, segs: [[o, d], [0, 0.1, true], [0, 9]] });
  for (const e of [-150, -80, 80, 150]) kinds.push({ name: `on, drifting to ${e}`, segs: [[0, 0.8], [e, 0.5, true], [e, 9]] });
  for (const w of [-150, -80, 80, 150]) kinds.push({ name: `on, out to ${w} and back`, segs: [[0, 0.6], [w, 0.1, true], [w, 0.5], [0, 0.1, true], [0, 9]] });
  for (const o of [-70, 70]) for (const e of [-o, 2.5 * o, o]) kinds.push({ name: `${o}, then to ${e}`, segs: [[o, 0.8], [e, 0.4, true], [e, 9]] });
  kinds.push({ name: 'steady', segs: [[0, 9]] });
  const heldCases = [[R.hold, hold2, 0, 2.9, 0], [R6, hold6, 0, 6.9, 0], [R.mel, melPlan, 2.4, 5.7, 2]];
  let contours = 0;
  const wrong = [];
  for (const [ask, plan, t0, t1, at] of heldCases) for (const kind of kinds) {
    const shape = contourAt(kind.segs);
    const answer = A.singAnswer(plan, readings(0, t1, t => { const c = t < t0 ? 0 : shape(t - t0); return c === null ? null : centsHz(tHz, c); }), 0);
    if (!answer) continue;
    contours++;
    const label = `${ask.task}${ask.seconds || ''}: ${kind.name}`, judged = A.singJudge(ask, answer), j = judged.last, p = j.parts, need = p.need;
    // what the contour is, by the lessons' definitions
    const s0 = [0, 0.05, 0.1, 0.15, 0.2].map(u => shape(u)).filter(c => c !== null).sort((x, y) => x - y)[2] ?? kind.segs[0][0], note = answer.cents[at], ends = kind.segs.filter(x => x[0] !== null && t0 + kind.segs.slice(0, kind.segs.indexOf(x)).reduce((n, y) => n + y[1], 0) < t1);
    const endC = ends[ends.length - 1][0], passed = answer.holdMs >= need;
    // a slide is told by where the voice went within a moment: its contour 0.5 to 0.75 s in (lesson 3)
    const landC = [0.5, 0.55, 0.6, 0.65, 0.7, 0.75].map(u => shape(u)).filter(c => c !== null).sort((x, y) => x - y)[2] ?? note;
    const slid = Math.abs(s0) > 100 && Math.abs(s0 - landC) > 100;
    // a held note that did not slide began where its first half second sat: the middle of its start and where it went
    const began = Math.abs(landC - s0) <= 100 ? (s0 + landC) / 2 : s0;
    const begin = slid ? 'slid' : sideOf(began) ? 'off' : 'on', beginSide = slid ? sideOf(landC) : sideOf(began), endSide = sideOf(endC);
    const left = kind.name.includes(' and back') && Math.abs(kind.segs[2][0]) > 50 && !passed;
    const middle = passed ? (endSide ? 'drift' : 'steady') : beginSide ? (endSide === 0 ? 'found' : endSide !== beginSide ? 'crossed' : Math.abs(endC) - Math.abs(slid ? landC : began) > 50 ? 'further' : 'stayed')
      : endSide ? 'drift' : left ? 'wander' : 'stopped';
    const got = `${p.begin && p.begin.kind}/${p.begin && p.begin.side}, ${p.middle && p.middle.kind}, ${p.endSide}`, want = `${begin}/${beginSide}, ${middle}, ${endSide}`;
    if (got !== want) { wrong.push(`${label}: parts ${got}, the definitions say ${want}`); continue; }
    const mk = text(marks(ask, { ...answer, guess: 0 }, passed)), ms = text(miss(ask, answer));
    if (judged.asked.side !== endSide) wrong.push(`${label}: the guess is checked against ${judged.asked.side}, not where the note ended (${endSide})`);
    if (/both ways/.test(mk)) wrong.push(`${label}: told it went both ways (${mk})`);
    if (ask.task === 'melody') {
      if (!mk.includes(`Note 3 ${A.SAY.singWord[j.key]}`)) wrong.push(`${label}: note 3 is not marked ${A.SAY.singWord[j.key]} (${mk})`);
    }
    for (const g of [-1, 0, 1]) if (judged.asked.side !== null && A.singGuessAgrees(ask, { ...answer, guess: g }) !== (g === judged.asked.side)) wrong.push(`${label}: a guess of ${g} is judged against another reading`);
    const all = `${mk} ${ms}`;
    if (/sank/.test(all) && endSide !== -1) wrong.push(`${label}: told it sank, though it ended ${endSide} (${all})`);
    if (/rose/.test(all) && endSide !== 1) wrong.push(`${label}: told it rose, though it ended ${endSide} (${all})`);
    if (/wandered off/.test(all) && middle !== 'wander') wrong.push(`${label}: told it wandered off and back (${all})`);
    if (/found/.test(all) && middle !== 'found') wrong.push(`${label}: told it found the note (${all})`);
    if (/Sliding (up into|down onto) it/.test(all) && !(slid && sideOf(note) === 0)) wrong.push(`${label}: called a slide onto the note (${all})`);
    if (answer.holdMs < need && (mk.includes(`Steady for ${need / 1000} seconds`) || new RegExp(`for ${need / 1000} seconds\\. This`).test(ms))) wrong.push(`${label}: ${answer.holdMs} ms shows the ${need / 1000} seconds it needed (${all})`);
    const dir = j.lines.find(([k]) => ['voice', 'start'].includes(k));
    if (dir && sideOf(dir[1]) !== beginSide && middle !== 'steady' && begin !== 'on') wrong.push(`${label}: the first direction line (${dir}) points away from where it began (${beginSide})`);
  }
  check('words', contours >= 120 && wrong.length === 0, `the composite contours (${contours}): ${wrong.slice(0, 5).join(' | ')}${wrong.length > 5 ? ` and ${wrong.length - 5} more` : ''}`);
  // the third confirmation review's cases: a brief slip off the note is leaving it, not stopping (Y23, Z11); a regular wobble is judged by its
  // middle (Y2); and simulated beginner holds whose sound never stops are never told it stopped, while ones whose sound stops always are
  const y23 = A.singAnswer(hold2, readings(0, 2.9, t => centsHz(tHz, t >= 1.2 && t < 1.4 ? -80 : 0), 0.2, { still: true }), 0), y23j = A.singJudge(R.hold, y23).last;
  // a slip shorter than about 0.3 s is judged by the held note's center over 0.4 s, the same as a vibrato; it is never told it stopped
  check('words', ['steady', 'wander'].includes(y23j.id) && !text(miss(R.hold, y23)).includes('stopped'), `Y23: a 0.2 s dip off the note is not told it stopped (${y23j.id})`);
  const y23long = A.singAnswer(hold2, readings(0, 2.9, t => centsHz(tHz, t >= 1.2 && t < 1.6 ? -90 : 0), 0.2, { still: true }), 0);
  check('words', A.singJudge(R.hold, y23long).last.id === 'wander', `a 0.4 s slip of -90 off the note and back is "wandered off and back" (${A.singJudge(R.hold, y23long).last.id})`);
  const y2 = A.singAnswer(hold2, readings(0, 2.9, t => centsHz(tHz, 55 * Math.sin(2 * Math.PI * 5.5 * t)), 0.2, { still: true }), 0);
  check('words', A.singOk(R.hold, y2) && A.singJudge(R.hold, y2).last.id === 'steady', `Y2: a wobble of +-55 at 5.5 a second around the note holds, judged by its middle (${y2.holdMs} ms)`);
  const z11 = A.singAnswer(melPlan, readings(0, 5.7, t => centsHz(tHz, t >= 3.6 && t < 3.8 ? -80 : 0), 0.2, { still: true }), 0), z11j = A.singJudge(R.mel, z11).last;
  check('words', z11j.id !== 'stopped' && !text(miss(R.mel, z11)).includes('stopped'), `Z11: a tune's last note with a 0.2 s dip is not told it stopped (${z11j.id})`);
  check('words', A.singGuessAgrees(R.mel, { ...z11, guess: 0 }) && !text(marks(R.mel, { ...z11, guess: 0 }, false)).includes('both ways'), 'Z11: a tune\'s last note that dipped and came back agrees with a guess of On');
  const rnd = A.seededRandom(20261022), gauss = () => { let u = 0; for (let k = 0; k < 6; k++) u += rnd(); return (u - 3) * Math.SQRT2; };
  const beginner = (secs, sd, stopAt) => { let w = 0; return readings(0, stopAt || secs, t => { w = w * 0.97 + gauss() * sd * 0.25; return centsHz(tHz, w + gauss() * 10); }); };
  const told = [];
  for (const [ask, plan, secs] of [[R.hold, hold2, 2.9], [R6, hold6, 6.9]]) for (let k = 0; k < 150; k++) {
    for (const sd of [20, 30]) {
      const cont = A.singAnswer(plan, beginner(secs, sd), 0), j = A.singJudge(ask, cont).last;
      if (j.id === 'stopped' || text(miss(ask, cont)).includes('the sound stopped')) told.push(`${ask.seconds}s, wander ${sd}, never stopped: told stopped`);
    }
    const stopAt = 0.8 + rnd() * (secs - 2), early = A.singAnswer(plan, readings(0, stopAt, () => centsHz(tHz, gauss() * 8)), 0);
    if (early && early.holdMs < ask.seconds * 1000 && A.singJudge(ask, early).last.id !== 'stopped') told.push(`${ask.seconds}s, on the note and stopped at ${stopAt.toFixed(2)}: ${A.singJudge(ask, early).last.id}`);
  }
  // simulated beginner tunes: the long last note with a brief dip and return, a dip at its very end, or a drift; the guess is checked where it
  // ended and the words never say it went both ways
  const tuneWrong = [];
  for (let k = 0; k < 150; k++) {
    const dipAt = 2.6 + rnd() * 2.2, dip = (rnd() < 0.5 ? -1 : 1) * (90 + rnd() * 60), kind = k % 3;
    const dipFor = 0.15 + rnd() * 0.25, f = t => t < 2.4 ? 0 : kind === 0 ? (t >= dipAt && t < dipAt + dipFor ? dip : 0) : kind === 1 ? (t > 5.0 ? dip : 0) : (t - 2.4) / 3.3 * dip;
    const ans = A.singAnswer(melPlan, readings(0, 5.7, t => centsHz(tHz, f(t))), 0);
    if (!ans) continue;
    const endTrue = sideOf(f(5.45)), asked = A.singJudge(R.mel, ans).asked;
    for (const g of [-1, 0, 1]) {
      const mk = text(marks(R.mel, { ...ans, guess: g }, false));
      if (A.singGuessAgrees(R.mel, { ...ans, guess: g }) !== (g === endTrue) || /both ways/.test(mk)) { tuneWrong.push(`${['dip', 'end dip', 'drift'][kind]} ${dip.toFixed(0)} at ${dipAt.toFixed(2)}, guess ${g}: ended ${endTrue}, checked ${asked && asked.side} (${mk})`); break; }
    }
  }
  check('words', tuneWrong.length === 0, `simulated beginner tunes: ${tuneWrong.slice(0, 3).join(' | ')}${tuneWrong.length > 3 ? ` and ${tuneWrong.length - 3} more` : ''}`);
  check('words', told.length === 0, `simulated beginner holds: ${told.slice(0, 4).join(' | ')}${told.length > 4 ? ` and ${told.length - 4} more` : ''}`);
  // the second confirmation review's cases, fixed: single notes that slid and stayed off or went past, and the guess on each
  const matchPlan = { windows: [{ note: 'D4', fromMs: 0, ms: 1900 }], cents: 50, onset: true, turns: true }, M = T('match', { cents: 50 });
  const scoopTo = land => A.singAnswer(matchPlan, readings(0, 1.8, t => centsHz(tHz, t < 0.25 ? -250 : t < 0.4 ? -250 + (land + 250) * (t - 0.25) / 0.15 : land)), 0);
  for (const [name, land, word, guess] of [['M4', -70, 'A shade under', -1], ['M6', 80, 'A shade over', 1], ['M5', -130, 'Well under', -1]]) {
    const ans = scoopTo(land), mk = text(marks(M, { ...ans, guess }, false)), ms = text(miss(M, ans));
    check('words', mk.includes(word) && !mk.includes('Sliding up into it') && A.singGuessAgrees(M, { ...ans, guess }) && ms.includes('did not settle on it') && ms.includes(land > 0 ? 'sing a little lower' : 'higher'),
      `${name}: a scoop that ended at ${land} is named where it sat, with the way to move (${mk} / ${ms})`);
  }
  const m7 = A.singAnswer(matchPlan, readings(0, 1.8, t => centsHz(tHz, t < 0.25 ? 250 : t < 0.4 ? 250 - 180 * (t - 0.25) / 0.15 : 70)), 0);
  check('words', text(marks(M, m7, false)).includes('A shade over') && text(miss(M, m7)).includes('slid down, but did not settle on it'), `M7: a scoop down from 250 to 70 is a shade over (${text(marks(M, m7, false))} / ${text(miss(M, m7))} / ${JSON.stringify(m7)})`);
  const b1 = A.singAnswer(hold6, readings(0, 4.5, () => centsHz(tHz, 0)), 0), b1m = text(marks(R6, b1, false)) + text(miss(R6, b1));
  check('words', A.singJudge(R6, b1).last.id === 'stopped' && /the sound stopped or broke after 4\.[2-5] seconds/.test(b1m) && !b1m.includes('wandered') && A.singGuessAgrees(R6, { ...b1, guess: 0 }),
    `B1: a 6-second hold on the note until the air ran out is told it stopped, not that it wandered (${b1m})`);
  const b5 = A.singAnswer(hold2, readings(0, 1.95, () => centsHz(tHz, 0)), 0);
  check('words', b5.holdMs < 2000 && !text(marks(R.hold, b5, false)).includes('Steady for 2 seconds'), `B5: a hold of ${b5.holdMs} ms never shows "Steady for 2 seconds"`);
  const h4 = A.singAnswer(hold2, readings(0, 2.9, t => centsHz(tHz, t < 1.2 ? -70 : 0)), 0);
  check('words', A.singGuessAgrees(R.hold, { ...h4, guess: 0 }) && text(marks(R.hold, { ...h4, guess: 0 }, false)).includes('off the note from the start, then found it'), 'H4: a hold that ended on the note agrees with a guess of On, since the lesson asks where it ended');
  // D3 (the fifth confirmation review): a steady match with a natural wobble or slips of the pitch finder is never hunting, at any reading
  // rate; lesson 3's hunting sound and a real search (legs of 0.3 s and more) still are
  if (NOISE) {
    const steadyHunts = Array.from({ length: 60 }, () => A.singAnswer(matchPlan, readings(0, 1.8, () => centsHz(tHz, 0)), 0)).filter(a => a && A.singJudge(M, a).last.id === 'hunt').length;
    check('scoring', steadyHunts === 0, `a steady match with a wobble and slips of the pitch finder read as hunting ${steadyHunts} times in 60`);
    for (const leg of [0.3, 0.35]) {
      const search = A.singAnswer(matchPlan, readings(0, 1.8, t => centsHz(tHz, t < 6 * leg ? (Math.floor(t / leg) % 2 ? 180 : -180) : 0), 0.2, { still: true }), 0);
      check('scoring', A.singJudge(M, search).last.id === 'hunt', `a search in legs of ${leg} s is hunting`);
    }
  }
  }
  NOISE = null;
  check('words', marks(T('hold', { seconds: 4, cents: 25 }), { cents: [-40], start: -40, end: -40, holdMs: 0 }, false).includes('A little under') === false && miss(T('hold', { seconds: 4, cents: 25 }), { cents: [-40], start: -40, end: -40, holdMs: 0 }).includes('a little under the note, within half a half-step'), 'a closer target calls 26 to 50 off "a little", not "a shade"');
  check('words', miss(T('hold', { seconds: 2, cents: 50 }), { cents: [0], holdMs: 1400, end: -80 }).includes('sank under the note') && miss(T('hold', { seconds: 2, cents: 50 }), { cents: [-80], start: -80, holdMs: 0, end: -80 }).includes('From the first moment your voice sat a shade under the note: sing a little higher'), 'a hold that broke says where it went: sank, or off from the start');
  const mtune = miss(T('melody', { notes: 3, cents: 50 }), { cents: [0, -70, 200], holdMs: 2500 });
  check('words', mtune.includes('Note 2') && mtune.includes('Note 3') && mtune.includes('a little higher') && mtune.includes('sing that much lower'), 'a run says which way to move on each note that was off, not only the last');
  check('words', marks(T('hold', { seconds: 3 }), { cents: [0], holdMs: 3000 }, true).includes('Steady for 3 seconds') && marks(T('hold', { seconds: 3 }), { cents: [0], holdMs: 1400 }, false).includes('Steady for 1.4 of 3 seconds'), 'a hold says how long it was steady');
  const mk = marks(T('melody', { notes: 3 }), { cents: [0, 60, 1200], holdMs: 500 }, false);
  check('words', mk.includes('Note 1') && mk.includes('Note 2') && mk.includes('A shade over') && mk.includes('Not heard') && mk.includes('Steady for 0.5 of 2 seconds'), 'a melody says how each note sat and the long note');
  check('words', marks(T('light'), { cents: [0], loud: 1.4 }, false).includes('Louder than you talk') && miss(T('light'), { cents: [0], loud: 1.4 }).includes('louder than your talking voice'), 'a light note that was loud says so');
  check('words', marks(T('range'), { span: 19, steady: 3 }, true).includes('Your range is saved') && marks(T('warmup'), { cents: [] }, true).includes('Warm-up done'), 'the range and the warm-up have a mark of their own');
  const everyText = [JSON.stringify(A.SAY.singWord), ...Object.values(A.SAY.singVoice).map(f => f(2)), A.SAY.singSlidLine(1), A.SAY.singSlidLine(-1), A.SAY.singDriftLine(-1), A.SAY.singDriftLine(0), A.SAY.singDriftLine(1), JSON.stringify(A.SAY.singPrompt.match()), JSON.stringify(A.SAY.singPrompt.hold({ seconds: 3 })), JSON.stringify(A.SAY.singPrompt.melody({ notes: 4 })),
    JSON.stringify(A.SAY.singReason), A.SAY.singHeld(1, 2), A.SAY.micPrivate, A.SAY.micDenied, A.SAY.singNothing, A.SAY.singNarrow, A.SAY.stripHidden, A.SAY.stripLabel].join(' ');
  // "half-step" is the one measure the learner is told, defined in Singing's lesson 2 with a tune everyone knows; no other music word
  const banned = /\b(cents?|hertz|hz|semitones?|octaves?|pitch|frequency|larynx|diaphragm)\b/i;
  check('words', !banned.test(everyText), `a screen word is a music word: ${(everyText.match(banned) || [])[0]}`);
  const said = (answer, task = T('match')) => marks(task, answer, true);
  check('words', said({ cents: [-60], guess: -1 }).includes('You said: Under') && said({ cents: [-60], guess: -1 }).includes('The app measured it the same way.') && said({ cents: [0], guess: 1 }).includes('You said: Over') && said({ cents: [0], guess: 1 }).includes('The app measured: on the note. Your note was lower than it sounded to you.') && said({ cents: [80], guess: -1 }).includes('Your note was higher than it sounded to you.') && !said({ cents: [0] }).includes('You said'), 'the result shows what you said beside what was measured');
  const guessing = A.singControlsHtml({ prompt: A.SAY.singGuessAsk('match'), status: '', button: null, skip: false, micLine: '', guess: true });
  check('words', (guessing.match(/data-guess="/g) || []).length === 3 && ['under', 'on', 'over'].every(w => guessing.includes(`data-guess="${w}"`)) && !guessing.includes('singGo') && guessing.includes('was your note under, on or over'), 'the screen asks under, on or over, with no button to sing');
  const tones = { kind: 'tones', says: 'Two notes that start together.', examples: [{ label: 'A match', play: [{ note: 'D4', ms: 2000 }, { note: 'D4', ms: 2000 }] }, { label: 'A shade under', play: [{ note: 'D4', ms: 2000 }, { note: 'D4', ms: 2000, cents: -30 }] }] };
  const tonesShown = A.tonesHtml(tones);
  check('words', (tonesShown.match(/data-tone="/g) || []).length === 2 && tonesShown.includes('A shade under') && tonesShown.includes('Two notes that start together.') && tonesShown.includes('Hear it') && tonesShown.includes('aria-pressed="false"'), 'example sounds are a button each under what to listen for');
  let badTones = false;
  try { A.tonesHtml({ ...tones, examples: [{ label: 'Too long', play: [{ note: 'D4', ms: 9000 }] }] }); } catch { badTones = true; }
  check('words', badTones, 'an example sound outside the limits is refused when it is drawn');
  const guessWords = [A.SAY.singGuessAsk('melody'), A.SAY.singGuessAsk('match'), A.SAY.singGuessAsk('hold'), A.SAY.singGuessNeither('hunting for the note'), A.SAY.singHuntLine, JSON.stringify(A.SAY.singGuessWord), A.SAY.singGuessSaid('Under'), A.SAY.singGuessSame, A.SAY.singGuessOther('a shade over', 1), A.SAY.singGuessUnheard, A.SAY.tonesHeading, A.SAY.tonesPlaying].join(' ');
  check('words', !banned.test(guessWords), `a new screen word is a music word: ${(guessWords.match(banned) || [])[0]}`);
  const planA = plan({ task: 'match' });
  const view = (extra = {}) => ({ plan: planA, showLine: true, bars: true, path: '', hidden: false, ...extra });
  const svg = A.stripHtml(view({ path: A.voicePath(planA, [{ ms: 100, midi: 62 }, { ms: 150, midi: 62.2 }]) }));
  check('words', (svg.match(/class="bar"/g) || []).length === 1 && /<path class="voice" d="M[\d.]+ [\d.]+ L/.test(svg) && svg.includes('data-line="on"'), 'the strip draws the bar and the line');
  const hidden = A.stripHtml(view({ showLine: false, bars: false, hidden: true }));
  check('words', !hidden.includes('class="bar"') && hidden.includes('<path class="voice" d=""') && hidden.includes('data-line="off"') && hidden.includes('No line this time'), 'a hidden strip has no bar and no line');
  const [axLo, axHi] = A.stripAxis(planA), mid = A.noteToMidi(planA.bars[0].note);
  check('words', near((axLo + axHi) / 2, mid, 1e-9) && axHi - axLo >= 10, 'the strip is drawn around the target, so the line\'s distance from it is what shows');
  const folded = A.stripMidi(planA, 100, A.noteToHz(planA.bars[0].note) / 2);
  check('words', near(folded, mid, 0.01), 'a voice an octave away is drawn on the bar, as it is scored');
  const path = A.voicePath(planA, [{ ms: 0, midi: mid }, { ms: 50, midi: mid }, { ms: 900, midi: mid }]);
  check('words', (path.match(/M/g) || []).length === 2 && (path.match(/L/g) || []).length === 1, 'a gap in the reading starts a new stretch of the line');
  const mixed = { items: ['k-1', 'k-2', { sing: { task: 'match' }, n: 5 }] };
  check('words', !A.checkIsSung(mixed) && A.checkHasSung(mixed) && A.rightWord(mixed) === 'right' && A.checkParts(mixed).written === 2 && A.checkParts(mixed).sung === 5 && A.ruleText(null, { ask: 'sing', right: { min: 4 }, of: 'the sung notes' }, 'right') === 'At least 4 on the note (the sung notes)' && A.SAY.checkIntroMixed(2, 5) === 'Two new questions with no help, then five new tries with no line. To pass:', 'a check with stories and sung tries counts each by its own rule');
  check('words', A.checkIsSung({ items: [{ sing: { task: 'match' }, n: 5 }] }) && !A.checkIsSung({ items: ['k-1'] }) && A.rightWord({ items: [{ sing: { task: 'match' }, n: 5 }] }) === 'on the note' && A.SAY.checkPassed(4, 5, true) === '4 of 5 on the note: passed' && A.SAY.checkNotYet(3, 5) === '3 of 5: not yet', 'a sung check says "on the note"');

  return { failures, checks };
}

/* ---------- the seeded faults ---------- */
const edit = (file, from, to) => (src, text) => {
  if (src !== file) return text;
  if (!text.includes(from)) throw new Error(`the seeded fault does not apply: ${file} has no "${from.slice(0, 50)}"`);
  return text.replace(from, to);
};
const FAULTS = [
  { group: 'tasks', name: 'a hold of 9 seconds is allowed', seed: edit('app/lessons/sing-task.js', 'hold: { seconds: [2, 6] }', 'hold: { seconds: [2, 9] }') },
  { group: 'plans', name: 'a match drawn from the whole of the range, ends included', seed: edit('app/lessons/sing-task.js', 'const SING_MIDDLE_PAD = 0.2;', 'const SING_MIDDLE_PAD = 0;') },
  { group: 'scoring', name: 'octaves not folded', seed: edit('app/lessons/audio-notes.js', 'const foldCents = cents => ((((cents + 600) % 1200) + 1200) % 1200) - 600;', 'const foldCents = cents => cents;') },
  { group: 'scoring', name: 'the attack counted with the rest', seed: edit('app/lessons/sing-score.js', 'const SING_MIDDLE_SHARE = 0.6;', 'const SING_MIDDLE_SHARE = 1;') },
  { group: 'range', name: 'a slide read as a steady note', seed: edit('app/lessons/sing-score.js', 'const SING_STEADY_HALFSTEPS = 0.5;', 'const SING_STEADY_HALFSTEPS = 50;') },
  { group: 'meaning', name: 'a match on the note within 40 cents', seed: edit('app/lessons/sing-task.js', 'const SING_CENTS = 25; ', 'const SING_CENTS = 40; ') },
  { group: 'meaning', name: 'a melody needs only one note', seed: edit('app/lessons/sing-task.js', 'cents.filter(on).length >= Math.ceil(0.8 * ask.notes)', 'cents.filter(on).length >= 1') },
  { group: 'words', name: 'a hidden strip that still draws its bar', seed: edit('app/lessons/sing-strip.js', "const bars = view.bars ? barsSvg(view.plan) : '';", 'const bars = barsSvg(view.plan);') },
  { group: 'tasks', name: 'a melody slowed past its limit', seed: edit('app/lessons/sing-task.js', 'melody: { noteMs: [800, 1600] }', 'melody: { noteMs: [800, 1800] }') },
  { group: 'words', name: 'what you heard judged on the first note of a run', seed: edit('app/lessons/sing-judge.js', '  const last = notes[n - 1] || null;', '  const last = notes[0] || null;') },
  { group: 'words', name: 'a hold that stopped early or broke for a breath called wandered off and back', seed: edit('app/lessons/sing-judge.js', "(answer.left || 0) > 0 ? 'wander' : 'stopped'", "'wander'") },
  { group: 'words', name: 'what you said always shown as agreeing', seed: edit('app/lessons/sing-strip.js', 'singGuessAgrees(ask, answer) ? SAY.singGuessSame : singGuessOtherText(ask, answer)', 'SAY.singGuessSame') },
  { group: 'meaning', name: 'a scoop counted as on the note', seed: edit('app/lessons/sing-task.js', "case 'match': return cents.length === 1 && on(cents[0]) && !singSlid(answer) && !singHunted(answer);", "case 'match': return cents.length === 1 && on(cents[0]) && !singHunted(answer);") },
  { group: 'scoring', name: 'the turns of a wandering note not counted', seed: edit('app/lessons/sing-score.js', '    if(plan.turns) turns = singTurns(list, hz);', '') },
  { group: 'words', name: 'a miss that says which way but not how far', seed: edit('app/lessons/view.js', "shadeUnder: () => 'Your voice sat a shade under the note: sing a little higher, less than a half-step.',", "shadeUnder: () => 'Your voice sat a shade under the note.',") },
  { group: 'words', name: 'a screen that says cents', seed: edit('app/lessons/view.js', "shadeUnder: 'A shade under', shadeOver: 'A shade over'", "shadeUnder: 'About 40 cents under', shadeOver: 'A shade over'") }
];

const clean = await run(null);
const failures = [...clean.failures.map(f => `${f.group}: ${f.msg}`)];
let total = Object.values(clean.checks).reduce((a, b) => a + b, 0);
for (const group of GROUPS) if (!clean.checks[group]) failures.push(`no checks ran in the group "${group}"`);
for (const fault of FAULTS) {
  let result;
  try { result = await run(fault.seed); } catch (error) { failures.push(`the seeded fault "${fault.name}" could not run: ${error.message}`); continue; }
  const red = [...new Set(result.failures.map(f => f.group))];
  if (red.length !== 1 || red[0] !== fault.group) failures.push(`the seeded fault "${fault.name}" should turn only "${fault.group}" red, and turned [${red.join(', ')}] red`);
}
if (failures.length) {
  console.error(`✗ ${failures.length} sung-question checks failed:`);
  failures.forEach(f => console.error('  - ' + f));
  process.exit(1);
}
console.log(`✓ ${total} sung-question checks passed, and each of ${FAULTS.length} seeded faults turned its own group red`);

// The pure half of the sung questions (lesson standard 26.1.1, section 25): how a task becomes targets inside the learner's range, how the readings
// of a try become the numbers it stores, what those numbers mean, and the words and strip drawn from them. No browser: the app's scripts are loaded
// as in tests/load-app.mjs. Made-up readings stand in for the microphone, so every case is known by construction.
// Negative controls: each seeded fault is a change to one of the app's files that must turn exactly its own group red.
// Run: node tests/sing-pure.mjs
import { loadApp } from './load-app.mjs';

const near = (got, want, tol) => typeof got === 'number' && Math.abs(got - want) <= tol;
const GROUPS = ['tasks', 'plans', 'scoring', 'range', 'meaning', 'words'];

/* ---------- made-up readings: one every 50 ms, a pitch at each time ---------- */
// pitch: seconds from the window start -> cents above the target (null for not clear); level: loudness
function readings(startS, seconds, hzAt, level = 0.2) {
  const out = [];
  for (let k = 0; k * 0.05 < seconds; k++) {
    const t = startS + k * 0.05, hz = hzAt(k * 0.05);
    out.push({ t, hz, level });
  }
  return out;
}
const centsHz = (hz, cents) => hz * 2 ** (cents / 1200);

async function run(seed) {
  const app = await loadApp({ fixture: true, seed });
  const failures = [], checks = {};
  const check = (group, ok, msg) => { checks[group] = (checks[group] || 0) + 1; if (!ok) failures.push({ group, msg }); };
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
  check('plans', ml[0].hear[4].ms === 3000 && ml[0].windows[4].ms === 3400 && ml[0].holdNeedMs === 2000 && ml[0].hear[1].atMs === 800 + 120, 'a melody: the last note is long and must be held, the notes are heard one after another');
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
  const ids = [[0, 'on'], [25, 'on'], [-25, 'on'], [26, 'shadeOver'], [-26, 'shadeUnder'], [100, 'shadeOver'], [101, 'wellOver'], [-300, 'wellUnder'], [1200, 'missed']];
  check('meaning', ids.every(([c, key]) => A.singWordKey(T('match'), c) === key), `the words follow the cents: ${ids.map(([c]) => c).join(', ')}`);
  check('meaning', A.singWordKey(T('match', { cents: 40 }), 40) === 'on' && A.singWordKey(T('match', { cents: 40 }), 41) === 'shadeOver', 'the words follow a task\'s own cents');

  /* ---------- words and the strip ---------- */
  const marks = (ask, answer, good) => A.singMarksHtml(ask, answer, good), miss = (ask, answer) => A.singMissHtml(ask, answer);
  check('words', marks(T('match'), { cents: [4] }, true).includes('On the note') && !marks(T('match'), { cents: [4] }, true).includes('mark no'), 'a match on the note says so');
  check('words', marks(T('match'), { cents: [-60] }, false).includes('A shade under') && marks(T('match'), { cents: [-60] }, false).includes('mark no') && marks(T('match'), { cents: [200] }, false).includes('Well over'), 'a match off the note says a shade or well, under or over');
  check('words', miss(T('match'), { cents: [-60] }).includes('Your voice sat a shade under the note.') && miss(T('match'), { cents: [5] }) === '', 'one line after a miss, none after a hit');
  check('words', marks(T('hold', { seconds: 3 }), { cents: [0], holdMs: 3000 }, true).includes('Steady for 3 seconds') && marks(T('hold', { seconds: 3 }), { cents: [0], holdMs: 1400 }, false).includes('Steady for 1.4 of 3 seconds'), 'a hold says how long it was steady');
  const mk = marks(T('melody', { notes: 3 }), { cents: [0, 60, 1200], holdMs: 500 }, false);
  check('words', mk.includes('Note 1') && mk.includes('Note 2') && mk.includes('A shade over') && mk.includes('Not heard') && mk.includes('Steady for 0.5 of 2 seconds'), 'a melody says how each note sat and the long note');
  check('words', marks(T('light'), { cents: [0], loud: 1.4 }, false).includes('Louder than you talk') && miss(T('light'), { cents: [0], loud: 1.4 }).includes('louder than your talking voice'), 'a light note that was loud says so');
  check('words', marks(T('range'), { span: 19, steady: 3 }, true).includes('Your range is saved') && marks(T('warmup'), { cents: [] }, true).includes('Warm-up done'), 'the range and the warm-up have a mark of their own');
  const everyText = [JSON.stringify(A.SAY.singWord), JSON.stringify(A.SAY.singVoice), JSON.stringify(A.SAY.singPrompt.match()), JSON.stringify(A.SAY.singPrompt.hold({ seconds: 3 })), JSON.stringify(A.SAY.singPrompt.melody({ notes: 4 })),
    JSON.stringify(A.SAY.singReason), A.SAY.singHeld(1, 2), A.SAY.micPrivate, A.SAY.micDenied, A.SAY.singNothing, A.SAY.singNarrow, A.SAY.stripHidden, A.SAY.stripLabel].join(' ');
  const banned = /\b(cents?|hertz|hz|semitones?|half-steps?|octaves?|pitch|frequency|larynx|diaphragm)\b/i;
  check('words', !banned.test(everyText), `a screen word is a music word: ${(everyText.match(banned) || [])[0]}`);
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

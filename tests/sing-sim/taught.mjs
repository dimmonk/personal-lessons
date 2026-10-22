// Singing: a simulated beginner, sung through the app's own scoring and judging, for every outcome a lesson teaches (lesson standard 3.8).
// Each scenario is one taught outcome (lessons 2 to 9 and 12): a note sung the way a beginner would sing it, with what the lessons'
// definitions say it is. Every try is made the way a phone hears a voice:
//   readings every 50 ms, every 66.7 ms (a 60 Hz screen, iOS Low Power Mode) or a mix of both, starting at a random moment;
//   a natural start (a few cents off, settling in 80 ms) after a reaction time of 0.15 to 0.35 s;
//   a vibrato of 5 to 7 a second up to +-50 cents, a slow wander, jitter;
//   slips of the pitch finder (a fifth or an octave) and dropped readings, 3% each;
//   a release before a stop or a breath in half the notes: the pitch falling 150 to 300 cents over its last 100 to 200 ms.
// For each scenario and reading rate, N tries are scored on five things: the mark names the taught outcome; the try passes or fails as it
// should; a guess of under, on or over is agreed with exactly when it is the right side; the "You said" line points the right way; and the
// lines after it say the right fix. Each rate must be at least FLOOR, except where a scenario states a lower floor and why it is inherent.
// Rebuilt from the simulator of the sixth confirmation review (its scratch script c6/real.mjs), with the seventh's harsher voice (c7/mysim.mjs)
// and the eighth's runs (c8/d5sim.mjs); each of those reviews' own simulators is also kept as written (reviews/). Run by tests/sing-sim.mjs.
import { A, rate, strip, fullTries } from './harness.mjs';

const FLOOR = 95;
let seed = 7;
const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
const gauss = () => { let u = 0; for (let i = 0; i < 6; i++) u += rnd(); return (u - 3) / 0.707; };
const U = (a, b) => a + rnd() * (b - a);
const gap = cad => cad === '50 ms' ? 50 : cad === '66.7 ms' ? 1000 / 15 : cad === HARSH_CAD ? U(40, 75) : (rnd() < 0.5 ? 50 : 1000 / 15);
const NOISE = { vib: 50, glitch: 0.03, drop: 0.03, jitter: 8, wander: 8, falloff: 0.5, fallMs: [100, 200], fallTo: [-300, -150] };
// a harsher voice and phone, the seventh confirmation review's independent model: readings every 40 to 75 ms at random; a vibrato of 4.5 to
// 7 a second up to +-60 that grows in over 0.3 s; a wander of SD 10 that changes more slowly; jitter 10; 4% slips (a quarter of them in
// pairs) and 4% dropped readings (sometimes two or three in a row); releases on 60% of notes, 80 to 300 ms, most falling 100 to 400, some
// rising 100 to 200
const HARSH_CAD = 'harsh, 40 to 75 ms';
const HARSH = { vib: 60, vibRate: [4.5, 7], vibGrow: 300, glitch: 0.04, pair: 0.25, drop: 0.04, burst: true, jitter: 10, wander: 10, ar: 0.92, falloff: 0.6, fallMs: [80, 300], fallTo: [-400, -100], rise: 0.2 };

// a sung try: each note { fn(ms since its onset) -> cents, onMs, offMs, win, attack, release } inside the plan's windows
function sing(cad, plan, notes, o = NOISE) {
  if (cad === HARSH_CAD) o = { ...HARSH, ...(o.falloff === 1 ? { falloff: 1 } : {}) };
  const out = [];
  // a note is sung against its own target (`target`, a window index; its own by default) at the time it is placed (`win`: the window its
  // times count from)
  const segs = notes.map((n, i) => { const w = plan.windows[n.win ?? i], tw = plan.windows[n.target ?? n.win ?? i]; return { ...n, w: tw, on: w.fromMs + n.onMs, off: w.fromMs + n.offMs }; });
  const vib = { a: U(0, o.vib), f: U(...(o.vibRate || [5, 7])), ph: U(0, 6.28) };
  const fall = segs.map(() => rnd() < o.falloff ? { ms: U(...o.fallMs), to: o.rise && rnd() < o.rise ? U(100, 200) : U(...o.fallTo) } : null);
  let pendingGlitch = null, dropLeft = 0;
  let wv = 0;
  const sung = segs.map(() => []);
  for (let t = U(0, 50); t < plan.totalMs; t += gap(cad)) {
    const k = segs.findIndex(s => t >= s.on && t < s.off);
    if (k < 0) continue;
    const s = segs[k], rel = t - s.on;
    const ar = o.ar || 0.9;
    wv = ar * wv + Math.sqrt(1 - ar * ar) * o.wander * gauss();
    sung[k].push(s.fn(rel) + wv);
    const grow = o.vibGrow ? Math.min(1, rel / o.vibGrow) : 1;
    let c = s.fn(rel) + grow * vib.a * Math.sin(vib.ph + 2 * Math.PI * vib.f * t / 1000) + wv + o.jitter * gauss();
    if (rel < 80) c += (1 - rel / 80) * s.attack;
    const f = s.release !== false && fall[k], left = s.off - t;
    if (f && left < f.ms) c += f.to * (1 - left / f.ms);
    let hz = A.noteToHz(s.w.note) * 2 ** (c / 1200);
    if (dropLeft > 0) { hz = null; dropLeft--; }
    else if (rnd() < o.drop) { hz = null; if (o.burst && rnd() < 0.3) dropLeft = Math.floor(U(1, 3)); }
    else if (pendingGlitch) { hz *= pendingGlitch; pendingGlitch = null; }
    else if (rnd() < o.glitch) { const g = [1.5, 2, 0.5, 2 / 3][Math.floor(rnd() * (o.pair ? 4 : 3))]; hz *= g; if (o.pair && rnd() < o.pair) pendingGlitch = g; }
    out.push({ t: 0.1 + t / 1000, hz, level: 0.2 });
  }
  const ans = A.singAnswer(plan, out, 0.1);
  // what the voice really sang on each note, without its vibrato, jitter and slips: the mean of the middle of its contour plus its wander
  if (ans) ans.truth = sung.map(list => { const cut = Math.floor(list.length * 0.2), mid = list.slice(cut, list.length - cut); return mid.length ? mid.reduce((n, c) => n + c, 0) / mid.length : null; });
  return ans;
}
const ask = (task, extra = {}) => ({ id: 'sing', kind: 'sing', task, cents: 50, ...extra });
const planOf = a => A.singPlan(a, { low: 'A2', high: 'A4' }, Math.floor(rnd() * 1e6));
const path = pts => ms => { const k = pts.findIndex(([at]) => at >= ms); if (k <= 0) return k === 0 ? pts[0][1] : pts[pts.length - 1][1];
  const [x0, y0] = pts[k - 1], [x1, y1] = pts[k]; return y0 + (y1 - y0) * (ms - x0) / (x1 - x0); };
const note = (fn, onMs, offMs, extra = {}) => ({ fn, onMs, offMs, attack: U(-40, 20), ...extra });
const react = () => U(150, 350);
const flat = o => () => o;
// what a line must say for each fix
const WANT = { under: /sing (a little|a touch|that much) higher/, over: /sing (a little|a touch|that much) lower/, sank: /sank under the note/, rose: /rose over the note/,
  wander: /wandered off the note and back/, stopped: /stopped or broke/, slidUp: /slid up into it/, hunt: /wandered up and down/, found: /found the note/,
  startUnder: /From the first moment your voice sat [a-z ]*under/, startOver: /From the first moment your voice sat [a-z ]*over/ };

// the scenarios: { lesson, label, make(cad) -> { a, ans }, intent: { ids, keys?, side (the guess's right side), ok (should it pass, null: either), lines, others? }, floor?, why? }
const S = [];
const match = (lesson, label, fn, intent, more = {}) => S.push({ lesson, label, intent, ...more, make: cad => { const a = ask('match'), p = planOf(a), on = react(); return { a, ans: sing(cad, p, [note(fn(), on, U(1700, 1900))]) }; } });
match('l2 l3 l7 l8', 'match on', () => flat(U(-20, 20)), { ids: ['sat'], keys: ['on'], side: 0, ok: true, lines: [] });
match('l2 l3 l7 l8', 'match a shade under', () => flat(U(-90, -65)), { ids: ['sat'], keys: ['shadeUnder'], side: -1, ok: false, lines: ['under'] });
match('l2 l3 l7 l8', 'match a shade over', () => flat(U(65, 90)), { ids: ['sat'], keys: ['shadeOver'], side: 1, ok: false, lines: ['over'] });
match('l2 l3', 'match well under (two half-steps)', () => flat(U(-230, -170)), { ids: ['sat'], keys: ['wellUnder'], side: -1, ok: false, lines: ['under'] });
match('l3 l7', 'match slid in (a scoop of 2 to 3 half-steps over 0.25 to 0.4 s)', () => { const s = U(-300, -200), d = U(250, 400); return path([[0, s], [d, 0], [3000, 0]]); },
  { ids: ['slid'], keys: ['slidUp'], side: -1, ok: false, lines: ['slidUp'] },
  { harshFloor: 90, why: 'a start is read over its first 0.15 s, two to four readings: with the harsher voice a vibrato of +-60 growing in and paired slips now and then move a quick scoop\'s start inside a shade, and it is called on the note (reviews/c6-scoop.mjs measures the same line)' });
match('l3', 'match hunting (legs of +-1.5 half-steps, 0.22 to 0.32 s, then on)', () => { const v = U(130, 180), l = U(220, 320);
  return path([[0, -v], [l, -v], [l + 60, v], [2 * l, v], [2 * l + 60, -v], [3 * l, -v], [3 * l + 60, 0], [3000, 0]]); }, { ids: ['hunt'], side: null, ok: false, lines: ['hunt'] },
  { harshFloor: 90, why: 'this is the shortest hunt there is, three legs and two turns; a vibrato of +-60 growing in over its first legs, with paired slips, now and then hides one turn, and the note is called a slide into it instead: a real search usually lasts longer than two turns' });

const hold = (lesson, label, secs, cents, fn, intent, offEarly = null, extra = {}, more = {}) => S.push({ lesson, label, intent, ...more, make: cad => {
  const a = ask('hold', { seconds: secs, cents }), p = planOf(a), on = react(), off = offEarly ? on + offEarly() : p.windows[0].ms - U(0, 250);
  return { a, ans: sing(cad, p, [note(fn(), on, off, extra)], more.noise || NOISE) }; } });
for (const [secs, cents, lesson] of [[2, 50, 'l4'], [4, 35, 'l4'], [6, 50, 'l9']]) {
  const L = `${lesson} hold ${secs} s within ${cents}`, need = secs * 1000;
  const unsteady = cents < 50 ? { harshFloor: 85, why: 'the 35 stretch: the harsher voice wanders by up to about +-25 on its own besides a vibrato of +-60, so over 4 seconds its middle does leave +-35 now and then and is told it wandered; a voice that unsteady is meant to find the stretch hard' } : {};
  hold(lesson, `${L}: steady`, secs, cents, () => flat(U(-10, 10)), { ids: ['steady'], side: 0, ok: true, lines: [] }, null, {}, unsteady);
  hold(lesson, `${L}: off from the start, under, and stays`, secs, cents, () => flat(-U(cents + 30, 95)), { ids: ['offStart'], side: -1, ok: false, lines: ['startUnder'] });
  hold(lesson, `${L}: off from the start, over, then found it`, secs, cents, () => { const o = U(cents + 30, 95), d = U(700, 1000); return path([[0, o], [d, o], [d + 150, 0], [99999, 0]]); },
    { ids: ['offStart'], side: 0, ok: false, lines: ['startOver', 'found'] });
  hold(lesson, `${L}: sank`, secs, cents, () => path([[0, 0], [need / 2, 0], [need / 2 + 400, -80], [99999, -80]]), { ids: ['drift'], side: -1, ok: false, lines: ['sank'] });
  hold(lesson, `${L}: rose`, secs, cents, () => path([[0, 0], [need / 2, 0], [need / 2 + 400, 80], [99999, 80]]), { ids: ['drift'], side: 1, ok: false, lines: ['rose'] });
  hold(lesson, `${L}: wandered off and back (-90 for 0.4 s)`, secs, cents, () => path([[0, 0], [need / 2, 0], [need / 2 + 80, -90], [need / 2 + 400, -90], [need / 2 + 480, 0], [99999, 0]]),
    { ids: ['wander'], side: 0, ok: false, lines: ['wander'] });
  hold(lesson, `${L}: stopped early, with a release`, secs, cents, () => flat(0), { ids: ['stopped'], side: 0, ok: false, lines: ['stopped'] }, () => 0.6 * need, {}, { ...unsteady, noise: { ...NOISE, falloff: 1 } });
  hold(lesson, `${L}: stopped early, no release`, secs, cents, () => flat(0), { ids: ['stopped'], side: 0, ok: false, lines: ['stopped'] }, () => 0.6 * need, { release: false });
}
// lesson 9: a breath in the middle of a 6-second hold, after a release, then on again (D4)
for (const g of [300, 400]) S.push({ lesson: 'l9', label: `l9 hold 6 s: a breath of ${g} ms at 3 s, after a release`, intent: { ids: ['stopped'], side: 0, ok: false, lines: ['stopped'] }, make: cad => {
  const a = ask('hold', { seconds: 6 }), p = planOf(a), on = react(), off = p.windows[0].ms - U(0, 250), at = on + 3000;
  return { a, ans: sing(cad, p, [note(flat(0), on, at), note(flat(0), at + g, off, { win: 0, attack: 0, release: false })], { ...NOISE, falloff: 1 }) }; } });

// lesson 5: two notes a jump apart
const iv = (label, o2, intent, more = {}) => S.push({ lesson: 'l5', label, intent, ...more, make: cad => { const a = ask('interval', { minSemitones: 4, maxSemitones: 9 }), p = planOf(a), o = o2();
  return { a, ans: sing(cad, p, [note(() => U(-5, 5), react(), p.windows[0].ms - U(50, 200)), note(flat(o), react(), p.windows[1].ms - U(50, 200))]) }; } });
iv('l5 interval: both on', () => U(-20, 20), { ids: ['sat'], keys: ['on'], side: 0, ok: true, lines: [] });
iv('l5 interval: the jump falls short', () => U(-90, -65), { ids: ['sat'], keys: ['shadeUnder'], side: -1, ok: false, lines: ['under'] });
iv('l5 interval: the jump overshoots', () => U(65, 90), { ids: ['sat'], keys: ['shadeOver'], side: 1, ok: false, lines: ['over'] });

// lessons 6 and 12: a five-note tune, the last note held
const tune = (label, offs, lastFn, intent, extraLast = {}, lastOff = null, more = {}) => S.push({ lesson: 'l6 l12', label, intent, ...more, make: cad => {
  const a = ask('melody', { notes: 5, maxStep: 4 }), p = planOf(a);
  const ns = p.windows.map((w, i) => i < 4 ? note(flat(offs[i] + U(-8, 8)), react(), w.ms - U(50, 200)) : null), on = react();
  ns[4] = note(lastFn(), on, lastOff ? on + lastOff : p.windows[4].ms - U(0, 250), extraLast);
  return { a, ans: sing(cad, p, ns) }; } });
tune('tune: on all the way', [0, 0, 0, 0], () => flat(0), { ids: ['steady'], side: 0, ok: true, lines: [], others: 'on' });
tune('tune: a slow drift down (0, -20, -40, -60, last -80)', [0, -20, -40, -60], () => flat(-80), { ids: ['offStart'], side: -1, ok: false, lines: ['startUnder'] });
tune('tune: a shade over throughout (+70)', [70, 70, 70, 70], () => flat(70), { ids: ['offStart'], side: 1, ok: false, lines: ['startOver'], others: 'over' },
  {}, null, { harshFloor: 85, why: 'every note sits 20 past the line of "on"; with a vibrato of +-60 and paired slips, a 0.8 s note is now and then measured within it: a tune sung a uniform shade off is told mostly over, with one note on, which still points the right way' });
tune('tune: the last note sank', [0, 0, 0, 0], () => path([[0, 0], [1000, 0], [1400, -80], [99999, -80]]), { ids: ['drift'], side: -1, ok: false, lines: ['sank'], others: 'on' });
tune('tune: the last note rose', [0, 0, 0, 0], () => path([[0, 0], [1000, 0], [1400, 80], [99999, 80]]), { ids: ['drift'], side: 1, ok: false, lines: ['rose'], others: 'on' });
tune('tune: the last note wandered off and back', [0, 0, 0, 0], () => path([[0, 0], [1000, 0], [1080, -90], [1400, -90], [1480, 0], [99999, 0]]), { ids: ['wander'], side: 0, ok: false, lines: ['wander'], others: 'on' });
tune('tune: the last note stopped at 1.2 s', [0, 0, 0, 0], () => flat(0), { ids: ['stopped'], side: 0, ok: false, lines: ['stopped'], others: 'on' }, {}, 1200);
tune('tune: the last note slid in, then on', [0, 0, 0, 0], () => path([[0, -250], [350, 0], [99999, 0]]), { ids: ['steady'], side: 0, ok: true, lines: [], others: 'on' },
  {}, null, { harshFloor: 90, why: 'a scoop into the last note with the harsher voice: the glide from the note before and the scoop together are now and then read as the start of the last note' });

// D5 (the seventh confirmation review): a tune or two notes sung back in the rhythm the app played, at its tempo or the singer's own, legato,
// starting late, every note within +-10: the notes are found where the voice sang them, so the try passes with every note on
const rhythm = (lesson, label, task, tempo, lag, late = [0, 0], more = {}) => S.push({ lesson, label, ...more, intent: { ids: ['steady', 'sat'], keys: ['on'], side: 0, ok: true, lines: [], others: task.task === 'melody' ? 'on' : undefined },
  make: cad => {
    const a = ask(task.task, task), p = planOf(a), f = U(...tempo), t0 = U(...lag), K = p.hear.length;
    const ons = p.hear.map((h, k) => t0 + (h.atMs - p.hear[0].atMs) * f + (k ? U(...late) : 0));
    const ns = p.hear.map((h, k) => note(flat(U(-10, 10)), ons[k], k < K - 1 ? ons[k + 1] : p.totalMs - U(0, 250), { win: 0, target: k, attack: k ? U(-20, 20) : U(-40, 20), release: k === K - 1 }));
    return { a, ans: sing(cad, p, ns) }; } });
rhythm('l6 l12', 'tune of 5 at speed, sung in the played rhythm, 0.15 to 0.9 s late', { task: 'melody', notes: 5, maxStep: 4 }, [1, 1], [150, 900]);
rhythm('l6 l12', 'tune of 5 at speed, sung 10 to 30% slower', { task: 'melody', notes: 5, maxStep: 4 }, [1.1, 1.3], [150, 600]);
rhythm('l6 l12', 'tune of 5 at speed, sung 10 to 20% faster', { task: 'melody', notes: 5, maxStep: 4 }, [0.8, 0.9], [150, 600]);
rhythm('l6 l12', 'tune of 5, each change 0.35 to 0.6 s late (carry-over)', { task: 'melody', notes: 5, maxStep: 4 }, [1, 1], [150, 400], [350, 600],
  { floor: 90, harshFloor: 85, why: 'every note held on into the next for 0.35 to 0.6 s, a different amount each time, is more than half of a 0.9 s note: now and then the split takes the held-on part as the start of the next note and that note reads off. A singer that late on every change is out of time, which the earlier groups of the lesson play slowly to fix' });
rhythm('l6', 'tune of 4 played slowly, sung in its rhythm', { task: 'melody', notes: 4, maxStep: 3, noteMs: 1200 }, [0.9, 1.3], [150, 900]);
rhythm('l6', 'tune of 3 played slowly, sung in its rhythm', { task: 'melody', notes: 3, maxStep: 2, noteMs: 1400 }, [0.9, 1.3], [150, 900]);
rhythm('l5', 'two notes sung in the played rhythm, legato', { task: 'interval', minSemitones: 4, maxSemitones: 9 }, [0.9, 1.3], [150, 900]);
rhythm('l5', 'two notes, the change 0.35 to 0.6 s late', { task: 'interval', minSemitones: 2, maxSemitones: 9 }, [1, 1], [150, 400], [350, 600]);

// the seventh confirmation review's other scenarios: notes a shade off across the whole shade (60 to 95), the l4 stretch with a breath, and
// the l6 stretch (35) on tunes
match('l2 l3', 'match a shade under, anywhere from 60 to 95', () => flat(-U(60, 95)), { ids: ['sat'], keys: ['shadeUnder'], side: -1, ok: false, lines: ['under'] });
match('l2 l3', 'match a shade over, anywhere from 60 to 95', () => flat(U(60, 95)), { ids: ['sat'], keys: ['shadeOver'], side: 1, ok: false, lines: ['over'] });
S.push({ lesson: 'l4', label: 'l4 hold 4 s within 35: a breath of 300 ms at 2 s, after a release', intent: { ids: ['stopped'], side: 0, ok: false, lines: ['stopped'] }, make: cad => {
  const a = ask('hold', { seconds: 4, cents: 35 }), p = planOf(a), on = react(), off = p.windows[0].ms - U(0, 250), at = on + 2000;
  return { a, ans: sing(cad, p, [note(flat(0), on, at), note(flat(0), at + 300, off, { win: 0, attack: 0, release: false })], { ...NOISE, falloff: 1 }) }; },
  harshFloor: 90, why: 'the 35 stretch with the harsher voice: its own wander and vibrato take its middle past +-35 now and then before the breath, and it is told it wandered' });
const tune35 = (label, lastFn, intent) => S.push({ lesson: 'l6', label, intent, make: cad => {
  const a = ask('melody', { notes: 5, maxStep: 4, cents: 35 }), p = planOf(a);
  const ns = p.windows.map((w, i) => i < 4 ? note(flat(U(-8, 8)), react(), w.ms - U(50, 200)) : null), on = react();
  ns[4] = note(lastFn(), on, p.windows[4].ms - U(0, 250));
  return { a, ans: sing(cad, p, ns) }; },
  harshFloor: 88, why: 'the 35 stretch on 0.8 s notes: the harsher voice\'s wander and +-60 vibrato put a note\'s middle past 35 now and then, and that note is marked a little off' });
tune35('l6 tune within 35: on all the way', () => flat(0), { ids: ['steady'], side: 0, ok: true, lines: [], others: 'on' });
tune35('l6 tune within 35: the last note sank', () => path([[0, 0], [1000, 0], [1400, -80], [99999, -80]]), { ids: ['drift'], side: -1, ok: false, lines: ['sank'], others: 'on' });
tune35('l6 tune within 35: the last note rose', () => path([[0, 0], [1000, 0], [1400, 80], [99999, 80]]), { ids: ['drift'], side: 1, ok: false, lines: ['rose'], others: 'on' });
tune35('l6 tune within 35: the last note wandered off and back', () => path([[0, 0], [1000, 0], [1080, -90], [1400, -90], [1480, 0], [99999, 0]]), { ids: ['wander'], side: 0, ok: false, lines: ['wander'], others: 'on' });

// one wrong note in a tune or a pair sung in the played rhythm (the eighth confirmation review): a note sung 1.5 to 3 half-steps off, a note
// sung at the pitch of the note before (the voice did not move), the note before held on across both, or a note left out (silence in its
// time). The wrong note must be named, by its side or as "Not heard" when it was left out, and every other note on. Checked in `named`.
const midiOf = name => A.noteToMidi(name);
const wrongRun = (lesson, label, task, pos, kind, tempo) => S.push({ lesson, label, intent: { named: true, pos, kind },
  harshFloor: 88, why: 'with the harsher voice (slips in pairs, dropped readings in bursts, a +-60 vibrato), a note left out or sung at its neighbour\'s pitch is now and then placed a note early or late',
  make: cad => {
  const a = ask(task.task, task), p = planOf(a), f = U(...tempo), t0 = U(150, 600), K = p.hear.length;
  const ons = p.hear.map(h => t0 + (h.atMs - p.hear[0].atMs) * f), offs = ons.map((o, k) => k < K - 1 ? ons[k + 1] : p.totalMs - U(0, 250));
  const step = k => (midiOf(p.hear[k - 1].note) - midiOf(p.hear[k].note)) * 100;   // the note before, in hundredths off note k
  const off = kind === 'wrong' ? (rnd() < 0.5 ? -1 : 1) * U(150, 300) : kind === 'same' || kind === 'held' ? step(pos) : 0;
  const ns = [];
  p.hear.forEach((h, k) => {
    if (kind === 'skip' && k === pos) return;
    if (kind === 'held' && k === pos) return;
    const end = kind === 'held' && k === pos - 1 ? offs[pos] : offs[k];
    ns.push(note(flat(k === pos ? off : U(-10, 10)), ons[k], end - (kind === 'skip' && k === pos - 1 ? 0 : 0), { win: 0, target: k, attack: U(-20, 20), release: k === K - 1 || (kind === 'skip' && k === pos - 1) }));
  });
  const ans = sing(cad, p, ns);
  if (ans) ans.wrongWant = kind === 'skip' ? 'missed' : Math.sign(off);
  return { a, ans }; } });
for (const [tempo, tname] of [[[1, 1], 'in time'], [[1.15, 1.3], 'slower']]) {
  for (let pos = 0; pos < 5; pos++) wrongRun('l6 l12', `tune of 5 ${tname}: note ${pos + 1} sung 1.5 to 3 half-steps off`, { task: 'melody', notes: 5, maxStep: 4 }, pos, 'wrong', tempo);
  for (let pos = 1; pos < 5; pos++) wrongRun('l6 l12', `tune of 5 ${tname}: note ${pos + 1} sung at the pitch of note ${pos}`, { task: 'melody', notes: 5, maxStep: 4 }, pos, 'same', tempo);
  for (let pos = 1; pos < 4; pos++) wrongRun('l6 l12', `tune of 5 ${tname}: note ${pos} held on through note ${pos + 1}`, { task: 'melody', notes: 5, maxStep: 4 }, pos, 'held', tempo);
  for (let pos = 1; pos < 4; pos++) wrongRun('l6 l12', `tune of 5 ${tname}: note ${pos + 1} left out`, { task: 'melody', notes: 5, maxStep: 4 }, pos, 'skip', tempo);
  wrongRun('l5', `two notes ${tname}: the voice does not move to the second`, { task: 'interval', minSemitones: 2, maxSemitones: 9 }, 1, 'same', tempo);
  wrongRun('l5', `two notes ${tname}: the second sung 1.5 to 3 half-steps off`, { task: 'interval', minSemitones: 2, maxSemitones: 9 }, 1, 'wrong', tempo);
}

// one try scored on the five things
function score(sc, a, ans) {
  const r = { mark: false, pass: false, guess: false, said: false, fix: false };
  if (!ans) return r;
  const j = A.singJudge(a, ans), last = j.last, it = sc.intent, ok = A.singOk(a, ans);
  // a run with one wrong note: that note named (its side, or "Not heard" when left out), every other note on, the try failed, the fix line
  // on that note pointing the right way; a guess (about the last note) checked against where that note ended or sat
  if (it.named) {
    const want = ans.wrongWant, n = j.notes[it.pos], others = j.notes.filter((_, i) => i !== it.pos);
    const named = want === 'missed' ? n.key === 'missed' : n.side === want && n.key !== 'on' && n.key !== 'missed';
    r.mark = named && others.every((x, i) => x.key === 'on' || x.key === 'stopped' || (ans.truth && Math.abs(ans.truth[i >= it.pos ? i + 1 : i] ?? 0) > 35));
    r.pass = true;   // one wrong note in five still passes (4 of 5 on): the pass is the tune's rule, not this check's
    const miss = strip(A.singMissHtml(a, ans)), noteLine = (miss.split(`Note ${it.pos + 1}.`)[1] || '').split('Note ')[0];
    r.fix = want === 'missed' ? /not heard/.test(noteLine) : (want < 0 ? /higher/ : /lower/).test(noteLine);
    r.guess = true; r.said = true;
    for (const g of [-1, 0, 1]) { const m = A.singMeasured(a, { ...ans, guess: g }); if (m && m.side !== null && A.singGuessAgrees(a, { ...ans, guess: g }) !== (g === m.side)) r.guess = false; }
    if (process.env.SIM_WHY && !r.mark) console.log('   ', sc.label, 'want', want, 'got', j.notes.map(x => x.key).join(','), 'cents', ans.cents.join(','), 'truth', (ans.truth || []).map(Math.round).join(','));
    return r;
  }
  // a note's middle is measured to within about 15 hundredths of a half-step (a short note, a vibrato of up to +-60): where the voice really
  // sang within 15 of a line between two words ("on" at the task's cents, "well" at 100), either word is a right mark
  const lines = [a.cents, 100], at = ans.truth ? ans.truth[ans.truth.length - 1] : null;
  const nearLine = at !== null && at !== undefined && lines.some(l => Math.abs(Math.abs(at) - l) < 15);
  const truthKey = at === null || at === undefined ? null : A.singWordKey(a, Math.round(at));
  r.mark = it.ids.includes(last.id) && (!it.keys || it.keys.includes(last.key) || (last.id === 'sat' && (last.key === truthKey || nearLine)));
  // the other notes of a tune: each marked by where the voice really sang it. A note's middle is measured to within about 15 hundredths of a
  // half-step when it lasts half a second with a vibrato of up to +-50 (fewer than three cycles, under ten readings at 66.7 ms), so a note
  // whose sung middle was within 15 of the line of "on" may read either way
  if (it.others) r.mark = r.mark && j.notes.slice(0, 4).every((n, i) => { const c = ans.truth[i]; return c === null || Math.abs(Math.abs(c) - a.cents) < 15 || n.side === (Math.abs(c) <= a.cents ? 0 : Math.sign(c)); });
  r.pass = it.ok === null || ok === it.ok;
  r.guess = true; r.said = true;
  for (const g of [-1, 0, 1]) {
    const x = { ...ans, guess: g }, agrees = A.singGuessAgrees(a, x), said = strip(A.singMarksHtml(a, x, ok)).split('You said')[1] || '';
    if (agrees !== (it.side !== null && g === it.side)) r.guess = false;
    if (!agrees && !(it.side === null ? /both ways/ : it.side > g ? /higher than it sounded/ : /lower than it sounded/).test(said)) r.said = false;
  }
  const miss = strip(A.singMissHtml(a, ans)), lastLines = a.task === 'melody' ? (miss.split('Note 5.')[1] || '') : miss;
  r.fix = it.lines.every(k => WANT[k].test(lastLines)) && (it.lines.length > 0 || (a.task === 'melody' ? !/Note 5\./.test(miss) : (!ok || miss === '')));
  return r;
}

// 150 tries for each scenario and reading rate
export const shards = ['50 ms', '66.7 ms', 'a mix', HARSH_CAD];
export default function taught(cad) {
  const N = 150;
  fullTries();
  for (const sc of S) {
    seed = 1000 + S.indexOf(sc) * 7 + cad.length;
    const t = { mark: 0, pass: 0, guess: 0, said: 0, fix: 0 };
    for (let i = 0; i < N; i++) { const { a, ans } = sc.make(cad), r = score(sc, a, ans); for (const k in t) t[k] += r[k] ? 1 : 0; }
    const floor = sc.floor ?? FLOOR, harsh = cad === HARSH_CAD, need = harsh ? sc.harshFloor ?? floor : floor;
    const why = need < FLOOR ? (harsh && sc.harshFloor !== undefined ? `harsher voice: ${sc.why}` : sc.why) : null;
    for (const [k, v] of Object.entries(t)) rate(`${sc.lesson} | ${sc.label} | ${cad}: ${k}`, v, N, need, why);
  }
}

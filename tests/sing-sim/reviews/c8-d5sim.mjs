// Confirmation review 8's independent simulator (its scratch script c8/d5sim.mjs), ported as written: its own RNG, voices and timing; it
// sings intervals and tunes in the rhythm the app PLAYED (plan.hear), not inside the scoring windows, with its own errors (one note off by a
// shade, half way or well, the last note off, a jump short, a drift), and checks that every note is marked as sung (`marks`, within B of a
// line either word), that the try passes or fails as it should (`pass`), and that the wrong note is named on its side (`named`) and never
// "Not heard". Two changes to its checks, marked below: the held-note words on the line, and naming counted where the note was clearly off. Floors: FLOOR for the ordinary voice, HARSH_FLOOR for the harsh one (why below).
import { A, rate, tries } from '../harness.mjs';
const FLOOR = 95, HARSH_FLOOR = 70, HARSH_FLOOR_35 = 55, HARSH_WHY_35 = "the 35 stretch with the review's harsh voice: a vibrato of up to +-60 is not averaged out of a 0.8 s note, so a note sung within +-10 is measured past +-35 now and then, and the review's marks allow only +-15 of measuring precision; confirmation review 8 measured as low as 22% here", HARSH_WHY = "the review's harsh voice: a vibrato of up to +-60, a wander of SD 10, slips of an octave or a fifth on 4% of readings (a quarter in pairs) and dropped readings in bursts on 5%: on a 0.8 s note a third of its readings can be off, and now and then a note is measured across a line or a boundary falls a reading or two off";
let s0 = 0x9E3779B9, s1 = 0x243F6A88;
const seed = n => { s0 = (n ^ 0x9E3779B9) >>> 0 || 1; s1 = (n * 2654435761) >>> 0 || 7; for (let i = 0; i < 10; i++) rnd(); };
function rnd() { let x = s0, y = s1; s0 = y; x ^= x << 23; x ^= x >>> 17; x ^= y ^ (y >>> 26); s1 = x >>> 0; return ((s0 + s1) >>> 0) / 4294967296; }
const gauss = () => Math.sqrt(-2 * Math.log(1 - rnd() + 1e-12)) * Math.cos(2 * Math.PI * rnd());
const U = (a, b) => a + rnd() * (b - a);
const VOICES = {
  ordinary: { vib: 40, vibF: [5, 6.5], wander: 6, rho: 0.88, jitter: 6, glitch: 0.02, pair: 0, drop: 0.03, burst: 0, rel: 0.5, relMs: [60, 200], relTo: [-250, -80] },
  harsh: { vib: 60, vibF: [4.5, 7], wander: 10, rho: 0.92, jitter: 10, glitch: 0.04, pair: 0.25, drop: 0.05, burst: 0.3, rel: 0.6, relMs: [80, 300], relTo: [-400, -100] },
};
// notes: [{ k (target index), onMs, offMs, off (cents base), glideFrom (cents rel. to own target) , glideMs }]
function sing(plan, notes, v, rate) {
  const out = [], truth = notes.map(() => []);
  const vib = { a: U(0, v.vib), f: U(...v.vibF), ph: U(0, 6.3) };
  const rel = notes.map(() => rnd() < v.rel ? { ms: U(...v.relMs), to: U(...v.relTo) } : null);
  let wv = gauss() * v.wander, burst = 0, pend = null;
  for (let t = U(0, rate); t < plan.totalMs; t += rate) {
    const i = notes.findIndex(n => t >= n.onMs && t < n.offMs);
    if (i < 0) { out.push({ t: 0.1 + t / 1000, hz: null, level: 0.01 }); continue; }
    const n = notes[i], r = t - n.onMs;
    wv = v.rho * wv + Math.sqrt(1 - v.rho * v.rho) * v.wander * gauss();
    let c = n.off + wv;
    truth[i].push(c);
    if (n.glideMs && r < n.glideMs) c = n.glideFrom + (c - n.glideFrom) * (r / n.glideMs);
    c += v.jitter * gauss() + vib.a * Math.min(1, r / 250) * Math.sin(vib.ph + 2 * Math.PI * vib.f * t / 1000);
    const f = rel[i], left = n.offMs - t;
    if (f && n.release && left < f.ms) c += f.to * (1 - left / f.ms);
    let hz = A.noteToHz(plan.windows[n.k].note) * 2 ** (c / 1200);
    if (burst > 0) { burst--; hz = null; }
    else if (rnd() < v.drop) { hz = null; if (rnd() < v.burst) burst = 1 + Math.floor(rnd() * 2); }
    else if (pend) { hz *= pend; pend = null; }
    else if (rnd() < v.glitch) { const g = [2, 0.5, 1.5, 2 / 3][Math.floor(rnd() * 4)]; hz *= g; if (rnd() < v.pair) pend = g; }
    out.push({ t: 0.1 + t / 1000, hz, level: hz ? 0.2 : 0.15 });
  }
  const ans = A.singAnswer(plan, out, 0.1);
  if (ans) ans.truth = truth.map(l => { const c = Math.floor(l.length * 0.2), m = l.slice(c, l.length - c); return m.length ? m.reduce((a, b) => a + b, 0) / m.length : null; });
  return ans;
}
// timing: start (ms after window 0 opens), tempo (x played spacing), lag SD per onset, legato (glide from previous pitch), gapMs between notes
function timed(plan, offs, { start, tempo, lagSD = 0, legato = false, gap = [40, 140] }) {
  const h = plan.hear, K = h.length, mids = plan.windows.map(w => A.noteToMidi ? A.noteToMidi(w.note) : null);
  const on = h.map((x, i) => start + (x.atMs - h[0].atMs) * tempo + (i ? gauss() * lagSD : 0));
  return h.map((x, i) => {
    const end = i < K - 1 ? on[i + 1] - (legato ? 0 : U(...gap)) : on[i] + (K > 2 ? U(2600, 3300) : x.ms * tempo * U(0.95, 1.2));
    const prev = i ? (mids[i - 1] - mids[i]) * 100 + offs[i - 1] : 0;
    return { k: i, onMs: on[i], offMs: Math.min(end, plan.totalMs), off: offs[i], release: i === K - 1 || !legato,
      ...(i && legato ? { glideFrom: prev, glideMs: U(60, 160) } : {}) };
  });
}
const B = 15; // measuring precision near a word's line
// (as the ninth review's simulator does, a held last note whose middle sits within B of the line may also be told it sank, rose or
// wandered: those are the held-note words for a voice that crossed the line)
const okKey = (ask, key, truth) => { const keys = [A.singWordKey(ask, truth), A.singWordKey(ask, truth - B), A.singWordKey(ask, truth + B)]; return keys.includes(key) || (['sank', 'rose', 'wander'].includes(key) && Math.abs(truth) > ask.cents - B && (key === 'wander' || (key === 'sank') === (truth < 0))); };
const TIMINGS = {
  'played tempo, start 0.15-0.4 s': () => ({ start: U(150, 400), tempo: U(0.95, 1.05) }),
  'natural lag (onsets +-70 ms SD)': () => ({ start: U(150, 450), tempo: U(0.95, 1.08), lagSD: 70 }),
  'slower x1.1-1.3': () => ({ start: U(150, 400), tempo: U(1.1, 1.3), lagSD: 40 }),
  'faster x0.8-0.9': () => ({ start: U(150, 400), tempo: U(0.8, 0.9), lagSD: 40 }),
  'late start 0.5-0.9 s': () => ({ start: U(500, 900), tempo: U(0.95, 1.1), lagSD: 40 }),
  'legato with glides': () => ({ start: U(150, 400), tempo: U(0.95, 1.1), lagSD: 40, legato: true }),
};
const ERRORS0 = {
  'perfect (+-10)': K => ({ offs: Array.from({ length: K }, () => U(-10, 10)) }),
  'one note well off (+-180..260)': K => { const j = Math.floor(rnd() * K), s = rnd() < 0.5 ? -1 : 1; return { offs: Array.from({ length: K }, (_, i) => i === j ? s * U(180, 260) : U(-10, 10)), j }; },
  'one note off +-120..160': K => { const j = Math.floor(rnd() * K), s = rnd() < 0.5 ? -1 : 1; return { offs: Array.from({ length: K }, (_, i) => i === j ? s * U(120, 160) : U(-10, 10)), j }; },
  'one note a shade off (+-65..90)': K => { const j = Math.floor(rnd() * K), s = rnd() < 0.5 ? -1 : 1; return { offs: Array.from({ length: K }, (_, i) => i === j ? s * U(65, 90) : U(-10, 10)), j }; },
  'last note a shade off (+-65..90)': K => { const j = K - 1, s = rnd() < 0.5 ? -1 : 1; return { offs: Array.from({ length: K }, (_, i) => i === j ? s * U(65, 90) : U(-10, 10)), j }; },
  'jump far note short (-65..-160)': K => { const j = 1 + Math.floor(rnd() * (K - 1)); return { offs: Array.from({ length: K }, (_, i) => i === j ? -U(65, 160) : U(-10, 10)), j, jump: true }; },
  'drift flat 0..-35/note': K => { const d = U(25, 35); return { offs: Array.from({ length: K }, (_, i) => -d * i) }; },
  'drift sharp 0..+35/note': K => { const d = U(25, 35); return { offs: Array.from({ length: K }, (_, i) => d * i) }; },
};
const ERRORS = ERRORS0;
const ASKS0 = {
  'l6/l12 tune 5 @50': { id: 'sing', kind: 'sing', task: 'melody', notes: 5, maxStep: 4, cents: 50 },
  'l6 tune 4 @50': { id: 'sing', kind: 'sing', task: 'melody', notes: 4, maxStep: 3, cents: 50 },
  'l6 tune 3 slow @50': { id: 'sing', kind: 'sing', task: 'melody', notes: 3, maxStep: 2, noteMs: 1400, cents: 50 },
  'l6 tune 5 @35': { id: 'sing', kind: 'sing', task: 'melody', notes: 5, maxStep: 4, cents: 35 },
  'l5 interval 2-7 @50': { id: 'sing', kind: 'sing', task: 'interval', minSemitones: 2, maxSemitones: 7, cents: 50 },
  'l5 interval 4-9 @50': { id: 'sing', kind: 'sing', task: 'interval', minSemitones: 4, maxSemitones: 9, cents: 50 },
  'l5 interval 1-3 @50': { id: 'sing', kind: 'sing', task: 'interval', minSemitones: 1, maxSemitones: 3, cents: 50 },
};
const ASKS = ASKS0;
export const shards = Object.keys(VOICES).flatMap(v => Object.keys(ASKS).map(a => `${v}|${a}`));
export default function d5sim(shard) {
const [voice, only] = shard.split('|'), N = tries(200), stretch = only.includes('@35'), floor = voice === 'harsh' ? (stretch ? HARSH_FLOOR_35 : HARSH_FLOOR) : FLOOR, why = voice === 'harsh' ? (stretch ? HARSH_WHY_35 : HARSH_WHY) : null;
for (const [an, ask] of Object.entries(ASKS)) for (const [en, ef] of Object.entries(ERRORS)) for (const [tn, tf] of Object.entries(TIMINGS)) for (const step of [50, 1000 / 15]) {
  if (an !== only) continue;
  if (ask.task === 'interval' && en.startsWith('drift')) continue;
  seed(an.length * 7919 + en.length * 104729 + tn.length * 31 + Math.round(step));
  let marks = 0, pass = 0, n = 0, named = 0, nh = 0, wrongN = 0, clearN = 0;
  for (let q = 0; q < N; q++) {
    const plan = A.singPlan(ask, { low: 'G2', high: 'C5' }, Math.floor(rnd() * 1e9)), K = plan.windows.length;
    const e = ef(K), notes = timed(plan, e.offs, tf()), ans = sing(plan, notes, VOICES[voice], step);
    if (!ans) { n++; continue; }
    const j = A.singJudge(ask, ans), keys = j.notes.map(m => m.key);
    const mk = keys.every((k, i) => okKey(ask, k, ans.truth[i]));
    const onT = ans.truth.map(t => Math.abs(t) <= ask.cents - B ? 1 : Math.abs(t) > ask.cents + B ? 0 : null);
    const need = ask.task === 'interval' ? K : Math.ceil(0.8 * K);
    const sure = onT.filter(x => x === 1).length, maybe = onT.filter(x => x === null).length;
    const lastT = ask.task === 'melody' ? onT[K - 1] : 1;
    let want = sure >= need ? true : sure + maybe < need ? false : null;
    if (lastT === 0) want = false; else if (lastT === null && want === true) want = null;
    const ok = A.singOk(ask, ans), pk = want === null || ok === want;
    // (named is counted where the wrong note was really sung clearly off, more than B past the line: one a shade off sung 65 may be sung at 55)
    if (e.j !== undefined) { wrongN++; const kj = keys[e.j], clear = Math.abs(ans.truth[e.j]) > ask.cents + B; if (kj === 'missed') nh++; if (clear) { clearN++; if (kj !== 'on' && kj !== 'missed' && (kj.endsWith('Over') ? 1 : -1) === Math.sign(e.offs[e.j])) named++; } }
    if (mk) marks++; if (pk) pass++; n++;
  }
  const L = `${voice} | ${an} | ${en} | ${tn} | ${step === 50 ? '50 ms' : '66.7 ms'}`;
  rate(`${L}: marks`, marks, n, floor, why);
  rate(`${L}: pass`, pass, n, floor, why);
  if (clearN) rate(`${L}: wrong note named`, named, clearN, floor, why);
  if (wrongN) rate(`${L}: wrong note not "Not heard"`, wrongN - nh, wrongN, floor, why);
}
}

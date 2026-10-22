// Sung runs (lessons 5, 6 and 12: two notes, tunes of three to five) sung to the rhythm the app PLAYED, stretched to the singer's own tempo,
// never to the scoring windows: the ninth confirmation review's simulator (its scratch script c9/sim9.mjs, its own RNG, voice and timing),
// ported with its scenarios as written, and widened to every way a singer spaces the notes:
//   the review's six timings (in time, lagged, slower, faster, a late start, legato), with gaps of 50 to 160 ms between detached notes;
//   then every tempo band from 0.75x to 1.5x of the played one (fast 0.75-0.85, in time 0.95-1.05, slow 1.3-1.5), each sung legato (one
//   note gliding into the next), detached with short gaps (60-120 ms) and detached with long ones (160-250 ms).
// Scenarios: the tune right; one note a shade, half way or well off at every position, both sides; a jump short; a note sung at the
// pitch of the note before (re-sung, and held across with no break); a note left out (silence in its time).
// For each voice, task, scenario, reading rate and position: every note marked as sung (`marks`), the notes other than the wrong one
// (`others`), the wrong note named on its side (`named`) or "Not heard" when left out (`nh`), and pass or fail right (`pass`); and for each
// timing, every note marked as sung over all scenarios (`timing`). Floors: FLOOR for the clean and ordinary voices, HARSH_FLOOR for the
// harsh one (why below).
import { A, rate, SCALE } from './harness.mjs';

const FLOOR = 95;
const HARSH_FLOOR = 80, HARSH_WHY = 'the harsh voice: a vibrato of up to +-65 that grows in, a wander of SD 11, slips of an octave or a fifth on 4.5% of readings and dropped readings in bursts on 5%: on a 0.8 s note a third of its readings can be off, and now and then a note is measured across a line or a boundary falls a reading or two off';
let st = 1;
const seed = n => { st = (n >>> 0) || 1; };
const rnd = () => { st = (st + 0x6D2B79F5) >>> 0; let t = st; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
let spare = null;
const gauss = () => { if (spare !== null) { const s = spare; spare = null; return s; } let u, v, s; do { u = 2 * rnd() - 1; v = 2 * rnd() - 1; s = u * u + v * v; } while (s >= 1 || s === 0); const f = Math.sqrt(-2 * Math.log(s) / s); spare = v * f; return u * f; };
const U = (a, b) => a + rnd() * (b - a);
const pick = a => a[Math.floor(rnd() * a.length)];
const VOICE = {
  clean: { vib: [0, 0], vibF: [5, 5], wander: 0.01, rho: 0.9, jit: 0, slip: 0, drop: 0, burst: 0, scoop: [0, 0], scoopMs: [50, 50], fall: 0 },
  ordinary: { vib: [10, 45], vibF: [4.8, 6.6], wander: 7, rho: 0.9, jit: 6, slip: 0.02, drop: 0.03, burst: 0.1, scoop: [-40, 20], scoopMs: [40, 110], fall: 0.5 },
  harsh: { vib: [30, 65], vibF: [4.3, 7.2], wander: 11, rho: 0.93, jit: 10, slip: 0.045, drop: 0.05, burst: 0.35, scoop: [-90, 40], scoopMs: [60, 180], fall: 0.65 },
};
// segs: [{ on, off, cents relative to TARGET k (the window's note), k, glide? }]; the voice is silent between segments
function sing(plan, segs, v, step) {
  const out = [], truth = plan.windows.map(() => []);
  const va = U(...v.vib), vf = U(...v.vibF), vp = U(0, 6.3);
  let w = gauss() * v.wander, burst = 0;
  const fall = segs.map(() => rnd() < v.fall ? { ms: U(70, 220), by: U(-320, -90) } : null);
  const scoop = segs.map(() => ({ c: U(...v.scoop), ms: U(...v.scoopMs) }));
  const total = plan.totalMs + 300;
  for (let t = U(0, step); t < total; t += step * U(0.93, 1.07)) {
    const i = segs.findIndex(s => t >= s.on && t < s.off);
    if (i < 0) { out.push({ t: 0.1 + t / 1000, hz: null, level: 0.01 }); continue; }
    const s = segs[i], r = t - s.on;
    w = v.rho * w + Math.sqrt(1 - v.rho * v.rho) * v.wander * gauss();
    const base = s.cents + w;
    if (s.truthK !== undefined && r > 150 && s.off - t > 150) truth[s.truthK].push(base + s.truthShift);
    let c = base;
    if (s.glide && r < s.glide.ms) c = s.glide.from + (c - s.glide.from) * (r / s.glide.ms);
    else if (!s.glide && r < scoop[i].ms) c += scoop[i].c * (1 - r / scoop[i].ms);
    c += v.jit * gauss() + va * Math.min(1, r / 300) * Math.sin(vp + 2 * Math.PI * vf * t / 1000);
    if (fall[i] && s.release && s.off - t < fall[i].ms) c += fall[i].by * (1 - (s.off - t) / fall[i].ms);
    let hz = A.noteToHz(plan.windows[s.k].note) * 2 ** (c / 1200);
    if (burst > 0) { burst--; hz = null; }
    else if (rnd() < v.drop) { hz = null; if (rnd() < v.burst) burst = 1 + Math.floor(rnd() * 3); }
    else if (rnd() < v.slip) hz *= pick([2, 0.5, 1.5, 2 / 3]);
    out.push({ t: 0.1 + t / 1000, hz, level: hz ? U(0.15, 0.25) : 0.12 });
  }
  return { readings: out, truth: truth.map(l => l.length ? l.reduce((a, b) => a + b, 0) / l.length : null) };
}
// the review's six timings (each detached note ends 50 to 160 ms before the next begins), then the tempo bands sung three ways
const REVIEW_GAP = [50, 160];
const TIMING = {
  'in time': () => ({ start: U(150, 400), tempo: U(0.96, 1.04), lag: 25, legato: false, gap: REVIEW_GAP }),
  lagged: () => ({ start: U(200, 500), tempo: U(0.95, 1.08), lag: 80, legato: rnd() < 0.3, gap: REVIEW_GAP }),
  slower: () => ({ start: U(150, 450), tempo: U(1.12, 1.35), lag: 45, legato: rnd() < 0.3, gap: REVIEW_GAP }),
  faster: () => ({ start: U(150, 400), tempo: U(0.78, 0.9), lag: 45, legato: rnd() < 0.3, gap: REVIEW_GAP }),
  'late start': () => ({ start: U(550, 950), tempo: U(0.95, 1.1), lag: 45, legato: rnd() < 0.3, gap: REVIEW_GAP }),
  legato: () => ({ start: U(150, 400), tempo: U(0.95, 1.1), lag: 40, legato: true, gap: REVIEW_GAP }),
};
for (const [band, tempo] of [['0.75-0.85x', [0.75, 0.85]], ['0.95-1.05x', [0.95, 1.05]], ['1.3-1.5x', [1.3, 1.5]]])
  for (const [way, legato, gap] of [['legato', true, [0, 0]], ['gaps 60-120 ms', false, [60, 120]], ['gaps 160-250 ms', false, [160, 250]]])
    TIMING[`${band} ${way}`] = () => ({ start: U(150, 450), tempo: U(...tempo), lag: 40, legato, gap });
// offs[k]: cents off note k's target (null: skipped). heldAt j: note j-1 is held, unbroken, through j's time.
function build(plan, offs, tm, heldAt = -1) {
  const h = plan.hear, K = h.length, midi = plan.windows.map(x => A.noteToMidi(x.note));
  const on = h.map((x, i) => tm.start + (x.atMs - h[0].atMs) * tm.tempo + (i ? gauss() * tm.lag : 0));
  for (let i = 1; i < K; i++) on[i] = Math.max(on[i], on[i - 1] + 250);
  const segs = [];
  for (let i = 0; i < K; i++) {
    if (offs[i] === null) continue;
    const last = i === K - 1;
    let end = last ? on[i] + U(2500, 3200) : on[i + 1] - (tm.legato ? 0 : U(...tm.gap));
    if (i + 1 === heldAt) end = heldAt === K - 1 ? on[heldAt] + U(2500, 3200) : on[i + 2] - (tm.legato ? 0 : U(...tm.gap));
    if (i === heldAt) continue;
    const prev = segs[segs.length - 1];
    const glide = tm.legato && prev && Math.abs(prev.off - on[i]) < 1 ? { from: (midi[prev.k] - midi[i]) * 100 + prev.cents, ms: U(60, 170) } : null;
    segs.push({ k: i, on: on[i], off: Math.min(end, plan.totalMs + 200), cents: offs[i], truthK: i, truthShift: 0, release: last || !tm.legato || i + 1 === heldAt, ...(glide ? { glide } : {}) });
    if (i + 1 === heldAt) { // the held-across stretch, as truth for note heldAt: its own target sits (midi[i]-midi[heldAt])*100 away
      const s = segs[segs.length - 1], split = on[heldAt];
      s.off = split; s.release = false;
      segs.push({ k: i, on: split, off: Math.min(end, plan.totalMs + 200), cents: offs[i], truthK: heldAt, truthShift: (midi[i] - midi[heldAt]) * 100, release: true, glide: { from: offs[i], ms: 1 } });
    }
  }
  return segs;
}
const ASKS = {
  'tune5 (l6,l12)': { task: 'melody', notes: 5, maxStep: 4, cents: 50 },
  'tune4 1200 (l6)': { task: 'melody', notes: 4, maxStep: 3, noteMs: 1200, cents: 50 },
  'tune4 (l6)': { task: 'melody', notes: 4, maxStep: 3, cents: 50 },
  'tune3 slow (l6)': { task: 'melody', notes: 3, maxStep: 2, noteMs: 1400, cents: 50 },
  'iv 1-3 (l5)': { task: 'interval', minSemitones: 1, maxSemitones: 3, cents: 50 },
  'iv 2-7 (l5 chk)': { task: 'interval', minSemitones: 2, maxSemitones: 7, cents: 50 },
  'iv 4-9 (l5)': { task: 'interval', minSemitones: 4, maxSemitones: 9, cents: 50 },
};
const SCEN = {
  right: (K) => ({ offs: Array.from({ length: K }, () => U(-12, 12)) }),
  shade: (K, j) => ({ offs: Array.from({ length: K }, (_, i) => i === j ? (rnd() < 0.5 ? -1 : 1) * U(70, 95) : U(-12, 12)), j }),
  mid: (K, j) => ({ offs: Array.from({ length: K }, (_, i) => i === j ? (rnd() < 0.5 ? -1 : 1) * U(120, 170) : U(-12, 12)), j }),
  well: (K, j) => ({ offs: Array.from({ length: K }, (_, i) => i === j ? (rnd() < 0.5 ? -1 : 1) * U(180, 300) : U(-12, 12)), j }),
  short: (K, j) => j === 0 ? null : ({ offs: Array.from({ length: K }, (_, i) => i === j ? -U(65, 160) : U(-12, 12)), j }),
  samePitch: (K, j, midi) => j === 0 || midi[j] === midi[j - 1] ? null : ({ offs: Array.from({ length: K }, (_, i) => i === j ? (midi[j - 1] - midi[j]) * 100 + U(-12, 12) : U(-12, 12)), j, same: true }),
  heldAcross: (K, j, midi) => j === 0 || midi[j] === midi[j - 1] ? null : ({ offs: Array.from({ length: K }, () => U(-12, 12)), j, held: true }),
  skipped: (K, j) => ({ offs: Array.from({ length: K }, (_, i) => i === j ? null : U(-12, 12)), j, skip: true }),
};
// a note's middle is measured to within about B of where it was sung (vibrato, a short note): within B of a line, either word is right
const B = 15;
const keyOk = (ask, key, t) => t === null ? key === 'missed' : [t - B, t, t + B].map(c => A.singWordKey(ask, c)).includes(key) || ((key === 'sank' || key === 'rose') && Math.abs(t) > ask.cents - B);

export const shards = Object.keys(VOICE).flatMap(v => Object.keys(ASKS).map(a => `${v}|${a}`));
export default function runs(shard) {
  const [voice, an] = shard.split('|'), ask = { id: 'sing', kind: 'sing', ...ASKS[an] }, K = ask.task === 'interval' ? 2 : ask.notes;
  const floor = voice === 'harsh' ? HARSH_FLOOR : FLOOR, why = voice === 'harsh' ? HARSH_WHY : null, N = Math.max(2, Math.round(12 * SCALE));   // tries per timing (the review ran 12 and more)
  const byTiming = {};
  for (const [sn, sf] of Object.entries(SCEN)) for (const step of [50, 1000 / 15]) {
    const positions = sn === 'right' ? [-1] : Array.from({ length: K }, (_, j) => j), rateName = step === 50 ? '50 ms' : '66.7 ms';
    for (const j of positions) {
      seed(an.length * 977 + sn.length * 7919 + Math.round(step) * 31 + j * 104729 + voice.length);
      const c = { n: 0, marks: 0, others: 0, named: 0, nh: 0, wrong: 0, pass: 0, passN: 0 };
      const names = Object.keys(TIMING);
      for (let q = 0; q < N * names.length; q++) {
        const tn = names[q % names.length], tm = TIMING[tn]();
        const plan = A.singPlan(ask, { low: 'G2', high: 'C5' }, Math.floor(rnd() * 1e9)), midi = plan.windows.map(w => A.noteToMidi(w.note));
        const e = sf(K, j, midi); if (!e) continue;
        const segs = build(plan, e.offs, tm, e.held ? j : -1), { readings, truth } = sing(plan, segs, VOICE[voice], step);
        if (e.skip) truth[j] = null;
        const ans = A.singAnswer(plan, readings, 0.1);
        const t = byTiming[`${tn} | ${rateName}`] ||= { n: 0, marks: 0 };
        c.n++; t.n++;
        if (!ans) continue;
        const jd = A.singJudge(ask, ans), keys = jd.notes.map(x => x.key);
        const marks = keys.every((k, i) => keyOk(ask, k, truth[i]));
        if (marks) { c.marks++; t.marks++; }
        if (keys.every((k, i) => i === j || keyOk(ask, k, truth[i]))) c.others++;
        // the pass the truth calls for (unsure, and not counted, when a note sits within B of the line)
        const on = truth.map(x => x === null ? 0 : Math.abs(x) <= ask.cents - B ? 1 : Math.abs(x) > ask.cents + B ? 0 : null);
        const want = on.includes(null) ? null : ask.task === 'interval' ? on.every(x => x === 1) : on.filter(x => x).length >= Math.ceil(0.8 * K) && on[K - 1] === 1;
        if (want !== null) { c.passN++; if (A.singOk(ask, ans) === want) c.pass++; }
        if (j >= 0) {
          const nj = jd.notes[j];
          if (e.skip) { if (nj.key === 'missed') c.nh++; }
          else { c.wrong++; if (nj.key !== 'missed' && nj.key !== 'on' && nj.side === Math.sign(truth[j])) c.named++; }
        }
      }
      if (!c.n) continue;
      const label = `${voice} | ${an} | ${sn}${j >= 0 ? ` note ${j + 1}` : ''} | ${rateName}`;
      rate(`${label}: marks`, c.marks, c.n, floor, why);
      if (j >= 0) rate(`${label}: others`, c.others, c.n, floor, why);
      if (j >= 0 && sn !== 'skipped') rate(`${label}: named`, c.named, c.wrong, floor, why);
      if (sn === 'skipped') rate(`${label}: Not heard`, c.nh, c.n, floor, why);
      rate(`${label}: pass`, c.pass, c.passN, floor, why);
    }
  }
  for (const [k, t] of Object.entries(byTiming)) rate(`${voice} | ${an} | timing ${k}: marks`, t.marks, t.n, floor, why);
}

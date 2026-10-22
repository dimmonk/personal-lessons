// Confirmation review 7's independent simulator (its scratch script c7/mysim.mjs), ported as written: its own RNG, its harsher voice and
// phone (a vibrato of up to +-60 that grows in, a wander of SD 10, jitter 10, 4% slips some in pairs, 4% dropped readings some in pairs,
// releases on 60% of notes) on every task, with its own scenarios and its five checks (mark, pass, guess, said, fix) at each reading rate.
// (The review's MEDIAN variant, which swapped the note's interquartile mean for a median to compare them, is left out: the app keeps the
// interquartile mean.) Every rate is held to the harsher voice's floor, FLOOR, with why.
import { A, rate as report, strip, tries } from '../harness.mjs';
const FLOOR = 80, WHY = "the review's harsher voice on every task, and its marks count the exact word with no allowance for how precisely a note's middle can be measured: a shade off sung 60 to 70 (10 to 20 past the line) or a hold within 35 is measured across the line now and then under a vibrato of +-60 that is not averaged out of a 0.8 s note, a wander of SD 10 and slips in pairs";
let st = 0;
const reseed = s => { st = s >>> 0; };
const rnd = () => { st = (st + 0x6D2B79F5) >>> 0; let t = st; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
const gauss = () => Math.sqrt(-2 * Math.log(1 - rnd())) * Math.cos(2 * Math.PI * rnd());
const U = (a, b) => a + rnd() * (b - a);
const RATES = { '50': () => 50, '66.7': () => 1000 / 15, mix: () => (rnd() < 0.5 ? 50 : 1000 / 15), 'jit40-75': () => U(40, 75) };
const BASE = { vib: 60, vibF: [4.5, 7], wander: 10, rho: 0.92, jitter: 10, glitch: 0.04, drop: 0.04, rel: 0.6, relMs: [80, 300] };
const lin = pts => ms => { if (ms <= pts[0][0]) return pts[0][1]; for (let k = 1; k < pts.length; k++) if (ms <= pts[k][0]) { const [x0, y0] = pts[k - 1], [x1, y1] = pts[k]; return y0 + (y1 - y0) * (ms - x0) / (x1 - x0); } return pts[pts.length - 1][1]; };
const flat = c => () => c;

// notes: [{ fn, on, off (ms from plan start), noteOf (window index for target), release }]
function sing(rate, plan, notes, o) {
  const out = [], vib = { a: U(0, o.vib), f: U(...o.vibF), ph: U(0, 6.3) };
  const rel = notes.map(n => n.release === false || rnd() >= o.rel ? null : { ms: U(...o.relMs), to: rnd() < 0.8 ? U(-400, -100) : U(100, 200) });
  let wv = gauss() * o.wander, burst = 0, gl = 0, glMul = 1;
  for (let t = U(0, 60); t < plan.totalMs; t += RATES[rate]()) {
    const k = notes.findIndex(n => t >= n.on && t < n.off);
    if (k < 0) continue;
    const n = notes[k], r = t - n.on, w = plan.windows[n.win];
    wv = o.rho * wv + Math.sqrt(1 - o.rho * o.rho) * o.wander * gauss();
    let c = n.fn(r) + wv + o.jitter * gauss() + vib.a * Math.min(1, r / 300) * Math.sin(vib.ph + 2 * Math.PI * vib.f * t / 1000);
    if (r < 100 && n.attack) c += n.attack * (1 - r / 100);
    const f = rel[k], left = n.off - t;
    if (f && left < f.ms) c += f.to * (1 - left / f.ms);
    let hz = A.noteToHz(w.note) * 2 ** (c / 1200);
    if (burst > 0) { burst--; hz = null; } else if (rnd() < o.drop) { hz = null; burst = rnd() < 0.3 ? 1 : 0; }
    else if (gl > 0) { gl--; hz *= glMul; } else if (rnd() < o.glitch) { glMul = [1.5, 2, 0.5, 2 / 3][Math.floor(rnd() * 4)]; hz *= glMul; gl = rnd() < 0.25 ? 1 : 0; }
    out.push({ t: 0.2 + t / 1000, hz, level: 0.2 });
  }
  return A.singAnswer(plan, out, 0.2);
}
const RE = { under: /sing (a little|a touch|that much) higher/, over: /sing (a little|a touch|that much) lower/, sank: /sank under the note/, rose: /rose over the note/,
  wander: /wandered off the note and back/, stopped: /stopped or broke/, slid: /slid up into it/, hunt: /wandered up and down/, found: /found the note/, startU: /first moment your voice sat [a-z ]*under/, startO: /first moment your voice sat [a-z ]*over/ };
const S = [];
const add = (group, label, ask, build, want, o = BASE) => S.push({ group, label, ask, build, want, o });
const plan = a => A.singPlan(a, { low: 'G2', high: 'C5' }, Math.floor(rnd() * 1e9));
const react = () => U(120, 400);
const att = () => U(-60, 30);
// ---- match (l2 l3 l7 l8), cents 50
const M = { id: 'sing', kind: 'sing', task: 'match', cents: 50 };
const one = fn => p => { const on = react(); return [{ fn: fn(), on, off: on + U(1300, 1800), win: 0, attack: att() }]; };
add('match', 'on (+-25)', M, one(() => flat(U(-25, 25))), { id: 'sat', key: ['on'], side: 0, ok: true, fix: [] });
add('match', 'shade under (-60..-95)', M, one(() => flat(U(-95, -60))), { id: 'sat', key: ['shadeUnder'], side: -1, ok: false, fix: ['under'] });
add('match', 'shade over (+60..+95)', M, one(() => flat(U(60, 95))), { id: 'sat', key: ['shadeOver'], side: 1, ok: false, fix: ['over'] });
add('match', 'well over (+170..+260)', M, one(() => flat(U(170, 260))), { id: 'sat', key: ['wellOver'], side: 1, ok: false, fix: ['over'] });
add('match', 'scoop -180..-320 over 0.2-0.45 s', M, one(() => { const d = U(200, 450); return lin([[0, U(-320, -180)], [d, 0]]); }), { id: 'slid', side: -1, ok: false, fix: ['slid'] });
add('match', 'hunt legs +-120..200, 0.25-0.35 s', M, one(() => { const v = U(120, 200), l = U(250, 350); return lin([[0, v], [l, v], [l + 50, -v], [2 * l, -v], [2 * l + 50, v * 0.8], [3 * l, v * 0.8], [3 * l + 50, 0]]); }), { id: 'hunt', side: null, ok: false, fix: ['hunt'] });
// ---- holds: l4 2 s/50, l4 stretch 4 s/35, l9 6 s/50
for (const [secs, c, L] of [[2, 50, 'l4'], [4, 35, 'l4 stretch'], [6, 50, 'l9']]) {
  const H = { id: 'sing', kind: 'sing', task: 'hold', seconds: secs, cents: c }, need = secs * 1000;
  const hold = (fn, early = null, extra = []) => p => { const on = react(), end = early ? on + early : p.windows[0].ms - U(0, 300); return [{ fn: fn(), on, off: end, win: 0, attack: att() }, ...extra.map(x => x(on))]; };
  add(L, 'steady (+-12)', H, hold(() => flat(U(-12, 12))), { id: 'steady', side: 0, ok: true, fix: [] });
  add(L, 'off from start, under, stays', H, hold(() => flat(-U(c + 25, c + 50))), { id: 'offStart', side: -1, ok: false, fix: ['startU'] });
  add(L, 'off from start, over 0.8-1.1 s, found it', H, hold(() => { const o = U(c + 25, c + 50), d = U(800, 1100); return lin([[0, o], [d, o], [d + 200, 0]]); }), { id: 'offStart', side: 0, ok: false, fix: ['startO', 'found'] });
  add(L, `sank to -${c + 40} from 40%`, H, hold(() => lin([[0, 0], [0.4 * need, 0], [0.4 * need + 600, -(c + 40)]])), { id: 'drift', side: -1, ok: false, fix: ['sank'] });
  add(L, `rose to +${c + 40} from 40%`, H, hold(() => lin([[0, 0], [0.4 * need, 0], [0.4 * need + 600, c + 40]])), { id: 'drift', side: 1, ok: false, fix: ['rose'] });
  add(L, `wandered -${c + 45} for 0.5 s`, H, hold(() => lin([[0, 0], [0.45 * need, 0], [0.45 * need + 100, -(c + 45)], [0.45 * need + 600, -(c + 45)], [0.45 * need + 700, 0]])), { id: 'wander', side: 0, ok: false, fix: ['wander'] });
  add(L, 'stopped at 55%, release always', H, hold(() => flat(0), 0.55 * need), { id: 'stopped', side: 0, ok: false, fix: ['stopped'] }, { ...BASE, rel: 1 });
  add(L, 'breath 0.32-0.5 s at 50%, release before it', H, p => { const on = react(), at = on + 0.5 * need, g = U(320, 500);
    return [{ fn: flat(0), on, off: at, win: 0, attack: att() }, { fn: flat(0), on: at + g, off: p.windows[0].ms - U(0, 200), win: 0, attack: att(), release: false }]; },
    { id: 'stopped', side: 0, ok: false, fix: ['stopped'] }, { ...BASE, rel: 1 });
}
// ---- intervals (l5), at 50 and the 35 stretch
for (const c of [50, 35]) {
  const I = { id: 'sing', kind: 'sing', task: 'interval', minSemitones: 2, maxSemitones: 9, cents: c };
  const two = (o2, carry = null) => p => { const w = p.windows, on1 = react(); const off1 = carry ? w[1].fromMs + carry() : w[0].ms - U(60, 250);
    const on2 = carry ? off1 : w[1].fromMs + react(); return [{ fn: flat(U(-10, 10)), on: on1, off: off1, win: 0, attack: att() }, { fn: flat(o2()), on: on2, off: w[1].fromMs + w[1].ms - U(60, 250), win: 1, attack: carry ? 0 : att() }]; };
  const L = `l5 interval ${c}`, lo = c === 35 ? ['littleUnder', 'shadeUnder'] : ['shadeUnder'], hi = c === 35 ? ['littleOver', 'shadeOver'] : ['shadeOver'];
  add(L, 'both on (+-15)', I, two(() => U(-15, 15)), { id: 'sat', key: ['on'], side: 0, ok: true, fix: [] });
  add(L, `short by ${c + 20}..${c + 45}`, I, two(() => -U(c + 20, c + 45)), { id: 'sat', key: lo, side: -1, ok: false, fix: ['under'] });
  add(L, `past by ${c + 20}..${c + 45}`, I, two(() => U(c + 20, c + 45)), { id: 'sat', key: hi, side: 1, ok: false, fix: ['over'] });
  add(L, 'legato, both on, note 1 carries 0.1-0.35 s into window 2', I, two(() => U(-15, 15), () => U(100, 350)), { id: 'sat', key: ['on'], side: 0, ok: true, fix: [] });
  add(L, 'legato, both on, note 1 carries 0.35-0.6 s into window 2', I, two(() => U(-15, 15), () => U(350, 600)), { id: 'sat', key: ['on'], side: 0, ok: true, fix: [] });
}
// ---- tunes (l6 l12), at 50 and 35
for (const c of [50, 35]) {
  const T = { id: 'sing', kind: 'sing', task: 'melody', notes: 5, maxStep: 4, cents: c };
  const tune = (lastFn, lastOff = null, carry = null) => p => p.windows.map((w, i) => {
    const on = carry && i > 0 ? w.fromMs + carry[i - 1] : w.fromMs + react();
    const off = i < 4 ? (carry ? w.fromMs + w.ms + carry[i] : w.fromMs + w.ms - U(60, 220)) : (lastOff ? on + lastOff : w.fromMs + w.ms - U(0, 300));
    return { fn: i < 4 ? flat(U(-12, 12)) : lastFn(), on, off, win: i, attack: carry && i > 0 ? 0 : att() }; });
  const L = `l6 tune ${c}`;
  add(L, 'all on', T, tune(() => flat(U(-10, 10))), { id: 'steady', side: 0, ok: true, fix: [], others: true });
  add(L, `last sank to -${c + 40}`, T, tune(() => lin([[0, 0], [1000, 0], [1500, -(c + 40)]])), { id: 'drift', side: -1, ok: false, fix: ['sank'], others: true });
  add(L, `last wandered -${c + 45} 0.5 s`, T, tune(() => lin([[0, 0], [900, 0], [1000, -(c + 45)], [1400, -(c + 45)], [1500, 0]])), { id: 'wander', side: 0, ok: false, fix: ['wander'], others: true });
  add(L, 'last stopped at 1.2 s', T, tune(() => flat(0), 1200), { id: 'stopped', side: 0, ok: false, fix: ['stopped'], others: true });
  add(L, 'legato all on, carry 0.1-0.35 s', T, p => tune(() => flat(U(-10, 10)), null, [0, 1, 2, 3].map(() => U(100, 350)))(p), { id: 'steady', side: 0, ok: true, fix: [], others: true });
  add(L, 'legato all on, carry 0.35-0.5 s', T, p => tune(() => flat(U(-10, 10)), null, [0, 1, 2, 3].map(() => U(350, 500)))(p), { id: 'steady', side: 0, ok: true, fix: [], others: true });
}
// realistic timing: the learner starts 0.2-0.9 s into the window and sings legato at the heard rhythm times 0.95-1.35
const timed = (c, durs, gap, offs, lastOn = false) => p => { const TM = [200, 900, 0.95, 1.35]; let t = U(TM[0], TM[1]); const k = U(TM[2], TM[3]);
  return p.windows.map((w, i) => { const on = t, d = i < p.windows.length - 1 ? (durs[i] + gap) * k : null; t = d ? on + d : t;
    return { fn: flat(offs(i)), on, off: d ? on + d : w.fromMs + w.ms - U(0, 300), win: i, attack: i === 0 ? att() : 0 }; }); };
for (const c of [50, 35]) {
  add(`timed ${c}`, 'interval both on', { id: 'sing', kind: 'sing', task: 'interval', minSemitones: 2, maxSemitones: 9, cents: c }, timed(c, [1000], 120, () => U(-12, 12)), { id: 'sat', key: ['on'], side: 0, ok: true, fix: [] });
  add(`timed ${c}`, 'tune all on', { id: 'sing', kind: 'sing', task: 'melody', notes: 5, maxStep: 4, cents: c }, timed(c, [800, 800, 800, 800], 120, () => U(-10, 10)), { id: 'steady', side: 0, ok: true, fix: [], others: true });
}
function score(sc, a, ans) {
  const r = { mark: 0, pass: 0, guess: 0, said: 0, fix: 0 }; if (!ans) return r;
  const j = A.singJudge(a, ans), last = j.last, w = sc.want, ok = A.singOk(a, ans);
  r.mark = last.id === w.id && (!w.key || w.key.includes(last.key)) && (!w.others || j.notes.slice(0, -1).every(n => n.key === 'on')) ? 1 : 0;
  r.pass = ok === w.ok ? 1 : 0;
  let g = 1, s = 1;
  for (const v of [-1, 0, 1]) { const x = { ...ans, guess: v }, ag = A.singGuessAgrees(a, x);
    if (ag !== (w.side !== null && v === w.side)) g = 0;
    const said = strip(A.singMarksHtml(a, x, ok)).split('You said')[1] || '';
    if (!ag && !(w.side === null ? /both ways/ : w.side > v ? /higher than it sounded/ : /lower than it sounded/).test(said)) s = 0; }
  r.guess = g; r.said = s;
  const miss = strip(A.singMissHtml(a, ans)), tail = a.task === 'melody' ? (miss.split('Note 5.')[1] || '') : miss;
  r.fix = (w.fix.length ? w.fix.every(k => RE[k].test(tail)) : (a.task === 'melody' ? !/Note 5\./.test(miss) : miss === '')) ? 1 : 0;
  return r;
}
export const shards = Object.keys(RATES);
export default function mysim(rate) {
  const N = tries(200);
  for (const sc of S) {
    reseed(9001 + S.indexOf(sc) * 131 + rate.length * 17);
    const t = { mark: 0, pass: 0, guess: 0, said: 0, fix: 0 };
    for (let i = 0; i < N; i++) { const a = sc.ask, p = plan(a), ans = sing(rate, p, sc.build(p), sc.o), r = score(sc, a, ans); for (const k in t) t[k] += r[k]; }
    for (const [k, v] of Object.entries(t)) report(`${sc.group}: ${sc.label} | ${rate}: ${k}`, v, N, FLOOR, WHY);
  }
}

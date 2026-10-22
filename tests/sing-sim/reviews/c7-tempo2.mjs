// Confirmation review 7's tempo check (its scratch script c7/tempo2.mjs), ported as written: lesson 6's and 12's tunes sung right, at the
// played tempo or 5 to 20% slower, pass with every note marked on.
import { A, rate, tries } from '../harness.mjs';
let st = 77; const rnd = () => { st = (st * 48271) % 2147483647; return st / 2147483647; };
const cfgs = [['l6 3 slow', { notes: 3, maxStep: 2, noteMs: 1400 }], ['l6 4 slow', { notes: 4, maxStep: 3, noteMs: 1200 }], ['l6 4 speed', { notes: 4, maxStep: 3 }], ['l6/l12/check 5 speed', { notes: 5, maxStep: 4 }]];
for (const [name, x] of cfgs) for (const [r0, r1, k0, k1, lab] of [[150, 400, 0.95, 1.05, 'heard tempo'], [150, 400, 1.05, 1.2, '5-20% slower']]) {
  const a = { id: 'sing', kind: 'sing', task: 'melody', cents: 50, ...x }; let pass = 0, allOn = 0; const N = tries(300);
  for (let n = 0; n < N; n++) { const p = A.singPlan(a, { low: 'G2', high: 'C5' }, Math.floor(rnd() * 1e9)), k = k0 + rnd() * (k1 - k0);
    const b = [r0 + rnd() * (r1 - r0)]; p.hear.slice(0, -1).forEach((h, i) => b.push(b[i] + (p.hear[i + 1].atMs - h.atMs) * k));
    const out = []; for (let t = rnd() * 50; t < p.totalMs - 150; t += 50) { const i = b.findIndex((s, j) => t >= s && (j === b.length - 1 || t < b[j + 1])); if (i < 0) continue;
      out.push({ t: 0.1 + t / 1000, hz: A.noteToHz(p.windows[i].note) * 2 ** ((rnd() - 0.5) * 20 / 1200), level: 0.2 }); }
    const ans = A.singAnswer(p, out, 0.1); if (A.singOk(a, ans)) pass++; if (A.singJudge(a, ans).notes.every(m => m.key === 'on')) allOn++; }
  rate(`${name}, ${lab}, start 0.15-0.4 s: passed`, pass, N, 95); rate(`${name}, ${lab}, start 0.15-0.4 s: every note marked on`, allOn, N, 95);
}

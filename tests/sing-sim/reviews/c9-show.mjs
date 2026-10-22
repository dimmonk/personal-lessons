// Confirmation review 9's cases (its scratch script c9/show.mjs), ported as written: each case is kept in tests/sing-cases.lock.json.
import { A, fixed } from '../harness.mjs';
// sing segments [k, onMs, offMs, centsOffTarget] at 50 ms, noise-free
function run(label, ask, seed, segs) {
  const p = A.singPlan(ask, { low: 'G2', high: 'C5' }, seed), out = [];
  for (let t = 0; t < p.totalMs + 300; t += 50) { const s = segs.find(([k, a, b]) => t >= a && t < b); out.push({ t: 0.1 + t / 1000, hz: s ? A.noteToHz(p.windows[s[0]].note) * 2 ** (s[3] / 1200) : null, level: s ? 0.2 : 0.01 }); }
  const ans = A.singAnswer(p, out, 0.1), ok = A.singOk(ask, ans);
  fixed(label, ask, ans);
}
const iv = { id: 'sing', kind: 'sing', task: 'interval', minSemitones: 2, maxSemitones: 7, cents: 50 };
const t5 = { id: 'sing', kind: 'sing', task: 'melody', notes: 5, maxStep: 4, cents: 50 };
run('interval, only the first note sung', iv, 11, [[0, 300, 1300, 0]]);
run('interval, only the second note sung (in its time)', iv, 11, [[1, 1220, 2300, 0]]);
run('tune 5, note 5 left out (stops after 4)', t5, 12, [[0, 300, 1100, 0], [1, 1220, 2020, 0], [2, 2140, 2940, 0], [3, 3060, 3860, 0]]);
run('tune 5, note 1 left out (comes in on note 2)', t5, 12, [[1, 1220, 2020, 0], [2, 2140, 2940, 0], [3, 3060, 3860, 0], [4, 3980, 6900, 0]]);
run('tune 5 right, detached 150 ms, 15% fast', t5, 12, [0, 1, 2, 3, 4].map(k => [k, 300 + k * 920 * 0.85, k < 4 ? 300 + (k + 1) * 920 * 0.85 - 150 : 300 + k * 920 * 0.85 + 2900, 0]));
run('tune 5 right, legato, 15% fast', t5, 12, [0, 1, 2, 3, 4].map(k => [k, 300 + k * 920 * 0.85, k < 4 ? 300 + (k + 1) * 920 * 0.85 : 300 + k * 920 * 0.85 + 2900, 0]));
run('tune 5 note 3 well over, detached 150 ms, 15% fast', t5, 12, [0, 1, 2, 3, 4].map(k => [k, 300 + k * 920 * 0.85, k < 4 ? 300 + (k + 1) * 920 * 0.85 - 150 : 300 + k * 920 * 0.85 + 2900, k === 2 ? 220 : 0]));

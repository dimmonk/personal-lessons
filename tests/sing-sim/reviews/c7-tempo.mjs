// Confirmation review 7's cases (its scratch script c7/tempo.mjs), ported as written: each case is kept in tests/sing-cases.lock.json.
import { A, fixed } from '../harness.mjs';
const a = { id: 'sing', kind: 'sing', task: 'melody', notes: 5, maxStep: 4, cents: 50 };
const ai = { id: 'sing', kind: 'sing', task: 'interval', minSemitones: 2, maxSemitones: 7, cents: 50 };
for (const [ask, durs] of [[a, [920, 920, 920, 920]], [ai, [1120]]]) {
  const p = A.singPlan(ask, { low: 'G2', high: 'C5' }, 12345);

  for (const start of [150, 300, 500]) for (const k of [0.9, 1.0, 1.1, 1.2, 1.3]) {
    const bounds = [start]; durs.forEach(d => bounds.push(bounds[bounds.length - 1] + d * k));
    const out = [];
    for (let t = 0; t < p.totalMs; t += 50) { let i = bounds.findIndex((b, j) => t >= b && (j === bounds.length - 1 || t < bounds[j + 1])); if (i < 0) continue; if (i === bounds.length - 1 && t > p.totalMs - 200) continue;
      out.push({ t: 0.1 + t / 1000, hz: A.noteToHz(p.windows[i].note), level: 0.2 }); }
    const ans = A.singAnswer(p, out, 0.1), ok = A.singOk(ask, ans);
    fixed(`${ask.task} start ${start} ms, tempo x${k}`, ask, ans);
  }
}

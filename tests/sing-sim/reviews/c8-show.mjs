// Confirmation review 8's cases (its scratch script c8/show.mjs), ported as written: each case is kept in tests/sing-cases.lock.json.
import { A, fixed } from '../harness.mjs';
const ask = { id: 'sing', kind: 'sing', task: 'melody', notes: 5, maxStep: 4, cents: 50 };
const p = A.singPlan(ask, { low: 'G2', high: 'C5' }, 4242);

for (const offs of [[0, 0, 220, 0, 0], [0, -30, -60, -90, -120], [0, 0, 0, 0, 0]]) {
  const out = [], st = 250;
  for (let t = 0; t < p.totalMs; t += 50) { const i = p.hear.findIndex((h, k) => t >= st + h.atMs && (k === p.hear.length - 1 ? t < st + h.atMs + 2900 : t < st + p.hear[k + 1].atMs - 80)); if (i < 0) continue;
    out.push({ t: 0.1 + t / 1000, hz: A.noteToHz(p.windows[i].note) * 2 ** (offs[i] / 1200), level: 0.2 }); }
  const ans = A.singAnswer(p, out, 0.1), ok = A.singOk(ask, ans);
  fixed(`offsets ${JSON.stringify(offs)}`, ask, ans);
}

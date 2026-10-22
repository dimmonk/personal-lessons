// A review's sweep of hold starts and ends (scratch script dist.mjs), ported as written: the tally it printed is kept in tests/sing-cases.lock.json.
import { A, printed } from '../harness.mjs';
const console = printed();
const T = { task: 'hold', seconds: 2, cents: 50 };
const tHz = A.noteToHz('D4'), r = (f) => Array.from({ length: 58 }, (_, k) => ({ t: k * 0.05, hz: tHz * 2 ** (f(k * 0.05) / 1200), level: 0.3 }));
const plan = { windows: [{ note: 'D4', fromMs: 0, ms: 3000 }], cents: 50, holdNeedMs: 2000, onset: true, drift: true };
const cnt = {};
for (const s of [-160,-70,0,70,160]) for (const e of [-160,-70,0,70,160]) for (const d of [0.4,1.2]) {
  const a = A.singAnswer(plan, r(t => t < d ? s : t < 2.4 ? s + (e - s) * (t - d) / (2.4 - d) : e), 0);
  const j = A.singJudge(T, a).last; const k = j.id + (j.lines.map(l => l[0]).join('+')); cnt[k] = (cnt[k] || 0) + 1;
}
console.log(cnt);

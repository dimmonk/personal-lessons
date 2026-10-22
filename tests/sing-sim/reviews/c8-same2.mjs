// Confirmation review 8's cases (its scratch script c8/same2.mjs), ported as written: each case is kept in tests/sing-cases.lock.json.
import { A, fixed } from '../harness.mjs';
const ask = { id: 'sing', kind: 'sing', task: 'interval', minSemitones: 2, maxSemitones: 7, cents: 50 };
const p = A.singPlan(ask, { low: 'G2', high: 'C5' }, 3331), m = p.windows.map(w => A.noteToMidi(w.note));
for (const [lab, offs] of [['did not move', [0, (m[0] - m[1]) * 100]], ['went half way', [0, (m[0] - m[1]) * 50]], ['short by 150', [0, -150 * Math.sign(m[1] - m[0])]]]) {
  const out = [];
  for (let t = 0; t < p.totalMs; t += 50) { const i = t >= 250 && t < 1250 ? 0 : t >= 1370 && t < 2400 ? 1 : -1; if (i < 0) continue; out.push({ t: 0.1 + t / 1000, hz: A.noteToHz(p.windows[i].note) * 2 ** (offs[i] / 1200), level: 0.2 }); }
  const ans = A.singAnswer(p, out, 0.1), ok = A.singOk(ask, ans);
  fixed(`${p.windows.map(w => w.note).join("->")} ${lab}`, ask, ans);
}

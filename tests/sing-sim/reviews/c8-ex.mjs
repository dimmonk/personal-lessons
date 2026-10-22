// Confirmation review 8's cases (its scratch script c8/ex.mjs), ported as written: each case is kept in tests/sing-cases.lock.json.
import { A, fixed } from '../harness.mjs';
const ask = { id: 'sing', kind: 'sing', task: 'interval', minSemitones: 2, maxSemitones: 7, cents: 50 };
for (const [lab, n2, c2] of [['small step', 'E4', 0], ['big jump', 'A4', 0], ['jump falls short', 'A4', -75]]) for (const rate of [50, 1000 / 15]) for (const lag of [150, 400]) {
  const p0 = A.singPlan(ask, { low: 'G2', high: 'C5' }, 1), p = { ...p0, windows: p0.windows.map((w, i) => ({ ...w, note: i ? n2 : 'D4' })) };
  // the example as played: note 1 0-1000 ms, note 2 1150-2150 ms; sung with the same timing, shifted by lag
  const out = []; for (let t = 0; t < p.totalMs; t += rate) { const r = t - lag, i = r >= 0 && r < 1000 ? 0 : r >= 1150 && r < 2150 ? 1 : -1; if (i < 0) continue;
    out.push({ t: 0.1 + t / 1000, hz: A.noteToHz(i ? n2 : 'D4') * 2 ** ((i ? c2 : 0) / 1200), level: 0.2 }); }
  const ans = A.singAnswer(p, out, 0.1); fixed(`${lab}, every ${Math.round(rate)} ms, ${lag} ms late`, ask, ans); }

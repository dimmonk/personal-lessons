// Confirmation review 7's cases (its scratch script c7/offstart.mjs), ported as written: each case is kept in tests/sing-cases.lock.json.
import { ask, holdPlan, run } from './h.mjs';
const h = ask('hold', { seconds: 2 }), p = holdPlan(2);
for (const o of [-70, -90]) for (const d of [300, 500, 700]) {
  run(`start ${o} for ${d} ms, then on 2.2 s`, h, p, [{ note: 'D4', path: [[0, o], [d, o], [d + 100, 0], [d + 2300, 0]] }], [0]);
  run(`start ${o} for ${d} ms, on 1.5 s, then sinks to ${o}`, h, p, [{ note: 'D4', path: [[0, o], [d, o], [d + 100, 0], [d + 1600, 0], [d + 2000, o], [d + 2400, o]] }], [0]);
}

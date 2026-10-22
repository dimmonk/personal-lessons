// Confirmation review 6's cases (its scratch script c6/det.mjs), ported as written: each case is kept in tests/sing-cases.lock.json.
import { A, ask, holdPlan, run } from './h.mjs';
const h6 = ask('hold', { seconds: 6 }), p6 = holdPlan(6), h2 = ask('hold', { seconds: 2 }), p2 = holdPlan(2);
run('D4a 6s: on 3s, fall -200 over 150ms, breath 0.4s, on 3s', h6, p6, [{ note:'D4', path:[[0,0],[3000,0],[3150,-200]] }, { note:'D4', at:3550, ms:3000 }], [0]);
run('D4b 6s: on 3s, fall -120 over 100ms, breath 0.4s, on 3s', h6, p6, [{ note:'D4', path:[[0,0],[3000,0],[3100,-120]] }, { note:'D4', at:3500, ms:3000 }], [0]);
run('D4c 2s: on 1.2s, fall -250 over 200ms, stops', h2, p2, [{ note:'D4', path:[[0,0],[1200,0],[1400,-250]] }], [0]);
run('D4d 6s: on 3.6s, fall -250 over 200ms, stops', h6, p6, [{ note:'D4', path:[[0,0],[3600,0],[3800,-250]] }], [0]);
for (const [d, ms] of [[-150,100],[-150,200],[-250,100],[-250,200],[-300,150]]) run(`D4e 6s: on 3s, fall ${d} over ${ms}, breath 0.4s, on`, h6, p6, [{ note:'D4', path:[[0,0],[3000-ms,0],[3000,d]] }, { note:'D4', at:3400, ms:3000 }], []);

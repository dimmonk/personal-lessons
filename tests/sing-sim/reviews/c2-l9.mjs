// Confirmation review 2's cases (its scratch script c2/l9.mjs), ported as written: each case is kept in tests/sing-cases.lock.json.
import { A, run, ask, holdPlan } from './h.mjs';
const h6 = ask('hold', { seconds: 6 }), p6 = holdPlan(6);
run('B1 6s: on, air ran out at 4.5s, stops cleanly', h6, p6, [{ note:'D4', ms:4500 }]);
run('B2 6s: on, air runs out, sags -80 last 0.4s then stops at 4.9s', h6, p6, [{ note:'D4', path:[[0,0],[4500,0],[4900,-80]] }]);
run('B3 6s: on 3s, quick breath 0.3s, on 3s', h6, p6, [{ note:'D4', ms:3000 }, { note:'D4', at:3300, ms:3500 }]);
const h4 = ask('hold', { seconds: 4 }), p4 = holdPlan(4);
run('B4 4s: on, stops at 3s', h4, p4, [{ note:'D4', ms:3000 }]);
const h2 = ask('hold', { seconds: 2 }), p2 = holdPlan(2);
run('B5 2s: on 1.95s exactly (rounding)', h2, p2, [{ note:'D4', ms:1950 }]);
run('B6 2s: on 1.9s', h2, p2, [{ note:'D4', ms:1900 }]);

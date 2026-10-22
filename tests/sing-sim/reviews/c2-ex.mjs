// Confirmation review 2's cases (its scratch script c2/ex.mjs), ported as written: each case is kept in tests/sing-cases.lock.json.
import { A, run, ask, matchPlan, holdPlan } from './h.mjs';
// take the learner's own voice part of each example (the second tone where two play together)
const m = ask('match'), p = matchPlan();
const L3a = [['On the note', { note:'D4', ms:3000 }], ['A shade under, then moving up', { note:'D4', path: [[0, -75], [1600, -75], [2500, 0], [4000, 0]] }], ['A shade over, then moving down', { note:'D4', path: [[0, 75], [1600, 75], [2500, 0], [4000, 0]] }]];
for (const [l, t] of L3a) run('l3 '+l+' (as a match)', m, p, [t], []);
const L3b = [['Sliding up into it', { note:'D4', path: [[0, -300], [400, 0], [1500, 0]] }], ['Landing on it', { note:'D4', ms:1500 }], ['Hunting for the note', { note:'D4', path: [[0, -250], [500, 130], [1000, -100], [1500, 70], [2000, -30], [2500, 0], [3500, 0]] }]];
for (const [l, t] of L3b) run('l3 '+l+' (as a match)', m, p, [t], []);
// hunting is 3.5 s long; a match window is 1.9 s: also as heard in a wider window
run('l3 Hunting (whole 3.5 s heard)', m, { ...p, windows:[{ note:'D4', fromMs:0, ms:3700 }], totalMs:3700 }, [L3b[2][1]], []);
const h = ask('hold', { seconds: 2 }), hp = holdPlan(2);
run('l4 Holding steady (2 s hold)', h, hp, [{ note:'D4', ms:3000 }], []);
run('l4 Sinking under (2 s hold)', h, hp, [{ note:'D4', path: [[0, 0], [700, 0], [2200, -100], [3000, -100]] }], []);
const iv = ask('interval'), ip = { cents:50, hear:[], bars:[], windows:[{ note:'D4', fromMs:0, ms:1400 }, { note:'A4', fromMs:1400, ms:1400 }], totalMs:2800 };
const ivE = ask('interval'), ipE = { ...ip, windows:[{ note:'D4', fromMs:0, ms:1400 }, { note:'E4', fromMs:1400, ms:1400 }] };
run('l5 A small step', ivE, ipE, [{ note:'D4', ms:1000 }, { note:'E4', at:1400, ms:1000 }], []);
run('l5 A big jump', iv, ip, [{ note:'D4', ms:1000 }, { note:'A4', at:1400, ms:1000 }], []);
run('l5 A jump that falls short', iv, ip, [{ note:'D4', ms:1000 }, { note:'A4', at:1400, ms:1000, cents:-75 }], []);

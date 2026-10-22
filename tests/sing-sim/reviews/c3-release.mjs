// Confirmation review 3's cases (its scratch script c3/release.mjs), ported as written: each case is kept in tests/sing-cases.lock.json.
import { A, run, ask, holdPlan, melPlan } from './h.mjs';
const h = ask('hold', { seconds: 2 }), p = holdPlan(2);
for (const f of [100, 150, 200, 250]) run(`R hold on 2.5s then release fall to -300 over ${f}ms`, h, p, [{ note:'D4', path:[[0,0],[2500,0],[2500+f,-300]] }], [0]);
run('R hold to window end (no release in window)', h, p, [{ note:'D4', ms:3000 }], [0]);
const N = ['D4','E4','A4','G4','F#4'], me = ask('melody', { notes: 5 }), mp = melPlan(N);
const tune = last => [...N.slice(0,4).map((n,i) => ({ note:n, at:i*1200+150, ms:800 })), { note:'F#4', at:4800, ...last }];
run('R tune last -70 1.2s then on 1.6s (guess on)', me, mp, tune({ path:[[0,-70],[1200,-70],[1300,0],[2900,0]] }), [-1,0]);
run('R hold -70 1.2s then on (E4 case, guess on)', h, p, [{ note:'D4', path:[[0,-70],[1200,-70],[1300,0],[2900,0]] }], [-1,0]);

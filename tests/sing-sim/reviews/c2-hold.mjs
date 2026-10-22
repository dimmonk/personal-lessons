// Confirmation review 2's cases (its scratch script c2/hold.mjs), ported as written: each case is kept in tests/sing-cases.lock.json.
import { A, run, ask, holdPlan } from './h.mjs';
const h = ask('hold', { seconds: 2 }), p = holdPlan(2);
const wob = (amp, hz=5.5, base=0) => ms => base + amp*Math.sin(2*Math.PI*hz*ms/1000);
const G = [-1,0,1];
run('H1 on 2.9s', h, p, [{ note:'D4', ms:2900 }]);
run('H2 -70 throughout', h, p, [{ note:'D4', ms:2900, cents:-70 }]);
run('H3 -70 0.8s then on', h, p, [{ note:'D4', path:[[0,-70],[800,-70],[900,0],[2900,0]] }]);
run('H4 -70 1.2s then on (E4 case)', h, p, [{ note:'D4', path:[[0,-70],[1200,-70],[1300,0],[2900,0]] }]);
run('H5 on 1s then sank -80', h, p, [{ note:'D4', path:[[0,0],[1000,0],[1400,-80],[2900,-80]] }]);
run('H6 on 1s then rose +80', h, p, [{ note:'D4', path:[[0,0],[1000,0],[1400,80],[2900,80]] }]);
run('H7 on, dip -80, back on', h, p, [{ note:'D4', path:[[0,0],[900,0],[1100,-80],[1700,-80],[1900,0],[2900,0]] }]);
run('H8 wobble +-60 whole', h, p, [{ note:'D4', ms:2900, fn: wob(60) }]);
run('H9 wobble +-40 whole', h, p, [{ note:'D4', ms:2900, fn: wob(40) }]);
run('H10 slow rise -60 -> +60', h, p, [{ note:'D4', path:[[0,-60],[2900,60]] }]);
run('H11 slow fall +70 -> -70', h, p, [{ note:'D4', path:[[0,70],[2900,-70]] }]);
run('H12 scoop -300 0.4s then on (passes)', h, p, [{ note:'D4', path:[[0,-300],[400,0],[2900,0]] }]);
run('H13 scoop -300 lands -70 stays', h, p, [{ note:'D4', path:[[0,-300],[400,-70],[2900,-70]] }]);
run('H14 scoop +300 lands +70 stays', h, p, [{ note:'D4', path:[[0,300],[400,70],[2900,70]] }]);
run('H15 scoop -300 overshoots +80 stays', h, p, [{ note:'D4', path:[[0,-300],[400,80],[2900,80]] }]);
run('H16 hunt then on', h, p, [{ note:'D4', path:[[0,-200],[300,100],[600,-100],[900,60],[1100,0],[2900,0]] }]);
run('H17 hunt then -70', h, p, [{ note:'D4', path:[[0,-200],[300,100],[600,-100],[900,60],[1100,-70],[2900,-70]] }]);
run('H18 very short: 0.6s on', h, p, [{ note:'D4', ms:600 }]);
run('H19 late: silent 1s, on 1.9s', h, p, [{ note:'D4', at:1000, ms:1900 }]);
run('H20 on 2.1s then stop (end on)', h, p, [{ note:'D4', ms:2150 }]);
run('H21 -70 to -150 (further)', h, p, [{ note:'D4', path:[[0,-70],[1000,-70],[2900,-150]] }]);
run('H22 -150 then on 1.5s', h, p, [{ note:'D4', path:[[0,-150],[1200,-150],[1300,0],[2900,0]] }]);
run('H23 +70 then on (fails)', h, p, [{ note:'D4', path:[[0,70],[1300,70],[1400,0],[2900,0]] }]);
run('H24 on 0.6, -80 0.6, on 0.6, +80 0.6, on', h, p, [{ note:'D4', path:[[0,0],[600,0],[650,-80],[1200,-80],[1250,0],[1800,0],[1850,80],[2400,80],[2450,0],[2900,0]] }]);
run('H25 on 2.5 then sank (pass)', h, p, [{ note:'D4', path:[[0,0],[2400,0],[2600,-90],[2900,-90]] }]);
// 4s close hold
const h4 = ask('hold', { seconds: 4, cents: 25 }), p4 = holdPlan(4, 25);
run('H26 4s close: +35 throughout', h4, p4, [{ note:'D4', ms:4900, cents:35 }]);
run('H27 4s close: on 2s then -40', h4, p4, [{ note:'D4', path:[[0,0],[2000,0],[2300,-40],[4900,-40]] }]);
// 6s
const h6 = ask('hold', { seconds: 6 }), p6 = holdPlan(6);
run('H28 6s: on 4s then sank -90', h6, p6, [{ note:'D4', path:[[0,0],[4000,0],[4800,-90],[6900,-90]] }]);
run('H29 6s: -70 1.5 then on (E4 6s)', h6, p6, [{ note:'D4', path:[[0,-70],[1500,-70],[1800,0],[6900,0]] }]);
run('H30 6s: on 6.5s, breath gap at 3s 0.2s', h6, p6, [{ note:'D4', ms:3000 }, { note:'D4', at:3200, ms:3700 }]);

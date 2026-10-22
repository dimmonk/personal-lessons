// Confirmation review 4's cases (its scratch script c4/new.mjs), ported as written: each case is kept in tests/sing-cases.lock.json.
import { A, run, ask, holdPlan, matchPlan, melPlan, reseed, gauss, rnd } from './h.mjs';
const h = ask('hold', { seconds: 2 }), p = holdPlan(2), m = ask('match'), mp = matchPlan();
const P = (a, pl, l, tones) => run(l, a, pl, tones, [-1,0,1]);
// brief slips
for (const [d, c] of [[100,-80],[150,-80],[200,-80],[250,-80],[150,-150],[300,-150],[100,120]])
  P(h, p, `S slip ${c} for ${d}ms at 1.0s`, [{ note:'D4', path:[[0,0],[1000,0],[1001,c],[1000+d,c],[1001+d,0],[2900,0]] }]);
// real stops: silence mid-hold
for (const g of [150, 250, 400, 700]) P(h, p, `R stop ${g}ms gap at 1.0s`, [{ note:'D4', ms:1000 }, { note:'D4', at:1000+g, ms:1900-g }]);
P(h, p, 'R stop at 1.2s, no return', [{ note:'D4', ms:1200 }]);
P(h, p, 'R breath 0.35s at 1.5s, back -80', [{ note:'D4', ms:1500 }, { note:'D4', at:1850, ms:1000, cents:-80 }]);
// slides into a hold
P(h, p, 'L slide -250 over 0.3s then on', [{ note:'D4', path:[[0,-250],[300,0],[2900,0]] }]);
P(h, p, 'L slide -250 over 0.3s to -70 stays', [{ note:'D4', path:[[0,-250],[300,-70],[2900,-70]] }]);
P(h, p, 'L slide -250 over 1.0s then on 1.9s', [{ note:'D4', path:[[0,-250],[1000,0],[2900,0]] }]);
// drift
P(h, p, 'D drift to -90 from 1.0s', [{ note:'D4', path:[[0,0],[1000,0],[1800,-90],[2900,-90]] }]);
P(h, p, 'D slow drift to +70 over whole', [{ note:'D4', path:[[0,0],[2900,70]] }]);
// vibrato with slip, irregular wobble
reseed(5); P(h, p, 'W vibrato 50 + jitter 15 + 15% drop', [{ note:'D4', ms:2900, fn: ms => 50*Math.sin(2*Math.PI*5.5*ms/1000), jitter:15, drop:0.15 }]);
// match hunts at several speeds
for (const seg of [150, 200, 300]) P(m, mp, `H hunt -150/+150 seg ${seg}ms then on`, [{ note:'D4', path:[[0,-150],[seg,150],[2*seg,-150],[3*seg,150],[4*seg,0],[1800,0]] }]);
// melody last note: brief slip and real stop
const mel = ask('melody', { notes:['D4','E4','F#4'] }), mpl = melPlan(['D4','E4','F#4']);
P(mel, mpl, 'M last note slip -80 0.2s', [{ note:'D4', at:0, ms:800 }, { note:'E4', at:1200, ms:800 }, { note:'F#4', at:2400, path:[[0,0],[1000,0],[1001,-80],[1200,-80],[1201,0],[2900,0]] }]);
P(mel, mpl, 'M last note stop at 1.2s', [{ note:'D4', at:0, ms:800 }, { note:'E4', at:1200, ms:800 }, { note:'F#4', at:2400, ms:1200 }]);

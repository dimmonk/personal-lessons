// Confirmation review 2's cases (its scratch script c2/mel.mjs), ported as written: each case is kept in tests/sing-cases.lock.json.
import { A, run, ask, melPlan } from './h.mjs';
const N = ['D4','E4','A4','G4','F#4'];
const me = ask('melody', { notes: 5 }), p = melPlan(N);
// window layout: 4 x 1200 then 3400 ; sung notes 800ms each starting at window start + offset
const tune = (cs, lastTones, off=100, len=800) => [...N.slice(0,4).map((n,i) => ({ note:n, at:i*1200+off, ms:len, cents:cs[i]||0 })), ...lastTones.map(t => ({ note:'F#4', ...t, at: 4800 + (t.at||0) }))];
const G=[-1,0,1];
run('T1 all on, last on 2.8s', me, p, tune([], [{ ms:2800 }]));
run('T2 tune off throughout -70', me, p, tune([-70,-70,-70,-70], [{ ms:2800, cents:-70 }]));
run('T3 tune +70 throughout', me, p, tune([70,70,70,70], [{ ms:2800, cents:70 }]));
run('T4 drifting further off -20,-40,-60,-80,-100', me, p, tune([-20,-40,-60,-80], [{ ms:2800, cents:-100 }]));
run('T5 whole tune 3 half-steps low (other key)', me, p, tune([-300,-300,-300,-300], [{ ms:2800, cents:-300 }]));
run('T6 jump fell short note 3 -75', me, p, tune([0,0,-75,0], [{ ms:2800 }]));
run('T7 last sank after 2.5s', me, p, tune([], [{ path:[[0,0],[2500,0],[2900,-90],[3200,-90]] }]));
run('T8 last scoop -300 lands -70', me, p, tune([], [{ path:[[0,-300],[400,-70],[3000,-70]] }]));
run('T9 last scoop then on (pass)', me, p, tune([], [{ path:[[0,-300],[400,0],[3000,0]] }]));
run('T10 last -70 1.2s then on 1.2s (E5 N18)', me, p, tune([], [{ path:[[0,-70],[1200,-70],[1400,0],[2600,0]] }]));
run('T11 last on but only 1s long', me, p, tune([], [{ ms:1000 }]));
run('T12 last on, breath gap 0.2 at 1.2s', me, p, tune([], [{ ms:1200 }, { at:1400, ms:1500 }]));
run('T13 every note 450ms late', me, p, tune([], [{ ms:2800 }], 550));
run('T14 every note 650ms late', me, p, tune([], [{ ms:2800 }], 750));
run('T15 notes each scoop up', me, p, N.slice(0,4).map((n,i)=>({ note:n, at:i*1200+100, path:[[0,-300],[300,0],[800,0]] })).concat([{ note:'F#4', at:4800, path:[[0,-300],[300,0],[2800,0]] }]));
run('T16 lost partway: notes 3,4 missing/wander', me, p, [{ note:'D4', at:100, ms:800 }, { note:'E4', at:1300, ms:800 }, { note:'A4', at:2500, path:[[0,-400],[300,200],[600,-300],[800,100]] }, { note:'F#4', at:4800, ms:2800 }]);
run('T17 last wobble +-60', me, p, tune([], [{ ms:2800, fn: ms => 60*Math.sin(2*Math.PI*5.5*ms/1000) }]));

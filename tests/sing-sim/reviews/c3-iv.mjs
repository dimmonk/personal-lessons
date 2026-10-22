// Confirmation review 3's cases (its scratch script c3/iv.mjs), ported as written: each case is kept in tests/sing-cases.lock.json.
import { A, run, ask, reseed } from './h.mjs';
const iv = ask('interval'), ip = { cents:50, hear:[], bars:[], windows:[{ note:'D4', fromMs:0, ms:1400 }, { note:'A4', fromMs:1400, ms:1400 }], totalMs:2800 };
run('I1 note 2 scoops -300 -> on (0.3s)', iv, ip, [{ note:'D4', at:150, ms:1000 }, { note:'A4', at:1550, path:[[0,-300],[300,0],[1000,0]] }]);
run('I2 note 2 two-step: -200 hold 0.4 then on', iv, ip, [{ note:'D4', at:150, ms:1000 }, { note:'A4', at:1550, path:[[0,-200],[400,-200],[500,0],[1000,0]] }]);
run('I3 note 2 short of jump, scoop then -75', iv, ip, [{ note:'D4', at:150, ms:1000 }, { note:'A4', at:1550, path:[[0,-300],[300,-75],[1000,-75]] }]);
run('I4 notes sung 0.6s late', iv, ip, [{ note:'D4', at:600, ms:1000 }, { note:'A4', at:2000, ms:800 }]);
run('I5 jumped an octave instead (A4 -> D5 heard as?) note 2 = D5', iv, ip, [{ note:'D4', at:150, ms:1000 }, { note:'D5', at:1550, ms:1000 }]);
run('I6 very short 0.25s each', iv, ip, [{ note:'D4', at:150, ms:250 }, { note:'A4', at:1550, ms:250 }]);
reseed(41); run('I7 noisy: jitter 15, 25% drops', iv, ip, [{ note:'D4', at:150, ms:1000, jitter:15, drop:.25 }, { note:'A4', at:1550, ms:1000, jitter:15, drop:.25 }]);
run('I8 note 2 vibrato +-60', iv, ip, [{ note:'D4', at:150, ms:1000 }, { note:'A4', at:1550, ms:1000, fn: ms => 60*Math.sin(2*Math.PI*5.5*ms/1000) }]);

// Confirmation review 2's cases (its scratch script c2/iv.mjs), ported as written: each case is kept in tests/sing-cases.lock.json.
import { A, run, ask } from './h.mjs';
const ip = c => ({ cents:c, hear:[], bars:[], windows:[{ note:'D4', fromMs:0, ms:1400 }, { note:'A4', fromMs:1400, ms:1400 }], totalMs:2800 });
const iv = ask('interval'), iv25 = ask('interval', { cents: 25 });
run('I1 close: second -35', iv25, ip(25), [{ note:'D4', ms:1200 }, { note:'A4', at:1400, ms:1200, cents:-35 }], [-1,0,1]);
run('I2 close: second -60', iv25, ip(25), [{ note:'D4', ms:1200 }, { note:'A4', at:1400, ms:1200, cents:-60 }], []);
run('I3 second scoops -300 to on', iv, ip(50), [{ note:'D4', ms:1200 }, { note:'A4', at:1400, path:[[0,-300],[400,0],[1200,0]] }], [-1,0,1]);
run('I4 second note 500ms late, first held long', iv, ip(50), [{ note:'D4', ms:1900 }, { note:'A4', at:1900, ms:900 }], []);
run('I5 overshoot +80 on far note', iv, ip(50), [{ note:'D4', ms:1200 }, { note:'A4', at:1400, ms:1200, cents:80 }], [-1,0,1]);

// The final review's cases (its scratch script fx-score.mjs), ported as written: every line it printed is kept in tests/sing-cases.lock.json.
import { A, printed } from '../harness.mjs';
const console = printed();
const strip = h => h.replace(/<[^>]+>/g, ' | ').replace(/(\s*\|\s*)+/g, ' | ').trim();
const hzOf = (note, c) => A.noteToHz(note) * 2 ** (c / 1200);
const along = path => ms => { const k = path.findIndex(([at]) => at >= ms); if (k <= 0) return k === 0 ? path[0][1] : path[path.length-1][1];
  const [a, ca] = path[k-1], [b, cb] = path[k]; return ca + (cb-ca)*(ms-a)/(b-a); };
// one tone -> readings every 50ms starting at offset s (seconds) relative to window
function reads(tones, startS, total) { const out = [];
  for (let ms = 0; ms < total; ms += 50) { const t = tones.find(x => ms >= (x.at||0) && ms < (x.at||0) + (x.ms || x.path[x.path.length-1][0]));
    if (!t) continue; const rel = ms - (t.at||0); const c = t.path ? along(t.path)(rel) : (t.cents||0);
    out.push({ t: startS + ms/1000, hz: hzOf(t.note, c), level: 0.2 }); } return out; }
function score(label, ask, plan, tones, guessTarget) {
  const total = Math.max(...tones.map(x => (x.at||0) + (x.ms || x.path[x.path.length-1][0])));
  const ans = A.singAnswer(plan, reads(tones, 0.1, total), 0);
  if (!ans) return console.log(label, 'NOTHING HEARD');
  const ok = A.singOk(ask, ans);
  console.log(`\n== ${label}: ok=${ok}`, JSON.stringify(ans));
  console.log('  marks:', strip(A.singMarksHtml(ask, ans, ok)));
  console.log('  miss :', strip(A.singMissHtml(ask, ans)));
  console.log('  measured:', JSON.stringify(A.singMeasured(ask, ans)));
}
const ask = (task, extra={}) => ({ id:'sing', kind:'sing', task, cents: 50, ...extra });
const single = (note, ms, extra) => ({ cents: 50, hear: [], bars: [], windows: [{ note, fromMs: 0, ms }], totalMs: ms, ...extra });
// l3 sounds, the sung voice is the 2nd tone (the 1st is the reference); score the voice only
const l3 = [['on', [{ note:'D4', ms:3000 }]], ['shade under then up', [{ note:'D4', path:[[0,-75],[1600,-75],[2500,0],[4000,0]] }]],
  ['shade over then down', [{ note:'D4', path:[[0,75],[1600,75],[2500,0],[4000,0]] }]]];
for (const [l, t] of l3) { score('l3 match(1.9s) '+l, ask('match'), single('D4', 1900, { onset:true, turns:true }), t); }
score('l3 slide-up (D4 only)', ask('match'), single('D4', 1900, { onset:true, turns:true }), [{ note:'D4', path:[[0,-300],[400,0],[1500,0]] }]);
score('l3 landing', ask('match'), single('D4', 1900, { onset:true, turns:true }), [{ note:'D4', ms:1500 }]);
score('l3 hunting', ask('match'), single('D4', 3700, { onset:true, turns:true }), [{ note:'D4', path:[[0,-250],[500,130],[1000,-100],[1500,70],[2000,-30],[2500,0],[3500,0]] }]);
score('l3 hunting (1.9s window)', ask('match'), single('D4', 1900, { onset:true, turns:true }), [{ note:'D4', path:[[0,-250],[500,130],[1000,-100],[1500,70],[2000,-30],[2500,0],[3500,0]] }]);
// l4
const h2 = ask('hold', { seconds: 2 }); const hp = single('D4', 3000, { holdNeedMs: 2000, onset:true, drift:true });
score('l4 holding steady', h2, hp, [{ note:'D4', ms:3000 }]);
score('l4 sinking under', h2, hp, [{ note:'D4', path:[[0,0],[700,0],[2200,-100],[3000,-100]] }]);
// l5 interval: windows of 1400 each
const ip = { cents:50, hear:[], bars:[], windows:[{ note:'D4', fromMs:0, ms:1150 },{ note:'A4', fromMs:1150, ms:1400 }], totalMs:2550 };
score('l5 big jump', ask('interval'), ip, [{ note:'D4', ms:1000 }, { note:'A4', at:1150, ms:1000 }]);
score('l5 falls short', ask('interval'), ip, [{ note:'D4', ms:1000 }, { note:'A4', at:1150, ms:1000, cents:-75 }]);
console.log('\n######## round-3 claims');
const mel = ask('melody', { notes: 3 });
const mp = { cents:50, hear:[], bars:[], windows:[{note:'D4',fromMs:0,ms:1200},{note:'D4',fromMs:1200,ms:1200},{note:'D4',fromMs:2400,ms:3400}], totalMs:5800, holdNeedMs:2000, onset:true, drift:true };
score('tune -70 throughout', mel, mp, [{ note:'D4', ms:5600, cents:-70 }]);
score('tune last held 2.3s then sank 120', mel, mp, [{ note:'D4', ms:4700 }, { note:'D4', at:4700, ms:900, cents:-120 }]);
score('tune last held 2s then sank (path)', mel, mp, [{ note:'D4', path:[[0,0],[4500,0],[5000,-150],[5600,-150]] }]);
score('hold 250ms onset from -150', h2, hp, [{ note:'D4', path:[[0,-150],[250,0],[2900,0]] }]);
score('hold scoop then sink', h2, hp, [{ note:'D4', path:[[0,-300],[300,0],[1600,0],[2200,-120],[2900,-120]] }]);
score('hold off from start -70 then sinks to -150', h2, hp, [{ note:'D4', path:[[0,-70],[1000,-70],[2900,-150]] }]);
score('hold starts -40 (on band) rises to +80', h2, hp, [{ note:'D4', path:[[0,-40],[800,0],[2900,80]] }]);
score('hold wanders off and back', h2, hp, [{ note:'D4', path:[[0,0],[800,0],[1100,-90],[1600,-90],[1900,0],[2900,0]] }]);
const c25 = ask('hold', { seconds: 4, cents: 25 });
score('closer target hold at -40', c25, single('D4', 5000, { holdNeedMs:4000, onset:true, drift:true, cents:25 }), [{ note:'D4', ms:4900, cents:-40 }]);
const lt = ask('light');
const lp = single('D4', 1900, { onset:true, turns:true, level:true });
const loudReads = (lvl) => { const o=[]; for(let ms=0;ms<1500;ms+=50) o.push({t:0.1+ms/1000, hz:A.noteToHz('D4'), level:lvl}); return o; };
const la = A.singAnswer(lp, loudReads(0.4), 0, 0.2); console.log('\n== light, on note, twice talking level:', JSON.stringify(la), A.singOk(lt, la||{}), la && strip(A.singMissHtml(lt, la)), la && strip(A.singMarksHtml(lt, la, A.singOk(lt, la))));
console.log('\n######## crossing');
score('hold starts +70 for 1s then sinks to -80', h2, hp, [{ note:'D4', path:[[0,70],[1000,70],[1800,-80],[2900,-80]] }]);
score('hold starts -70 steady then +70', h2, hp, [{ note:'D4', path:[[0,-70],[1200,-70],[1600,70],[2900,70]] }]);
console.log('\n######## melody crossing');
score('tune, last note starts +70 1s then -80', mel, mp, [{ note:'D4', ms:2400 }, { note:'D4', at:2400, path:[[0,70],[1000,70],[1800,-80],[3300,-80]] }]);
score('tune, last note starts -70 then -150', mel, mp, [{ note:'D4', ms:2400 }, { note:'D4', at:2400, path:[[0,-70],[1000,-70],[3300,-150]] }]);

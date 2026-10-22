// The first confirmation review's cases (its scratch script fx-confirm.mjs), ported as written: every line it printed is kept in tests/sing-cases.lock.json.
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
const h2 = ask('hold', { seconds: 2 }); const hp = single('D4', 3000, { holdNeedMs: 2000, onset:true, drift:true });
const g = (label, a, p, t, guess) => { score(label, a, p, t); };
const mel = ask('melody', { notes: 3 });
const mp = { cents:50, hear:[], bars:[], windows:[{note:'D4',fromMs:0,ms:1200},{note:'D4',fromMs:1200,ms:1200},{note:'D4',fromMs:2400,ms:3400}], totalMs:5800, holdNeedMs:2000, onset:true, drift:true };
console.log('#### reviewer cases'); 
score('R E1 hold +70 1s then -80', h2, hp, [{ note:'D4', path:[[0,70],[1000,70],[1800,-80],[2900,-80]] }]);
score('R E1 hold -70 then +70', h2, hp, [{ note:'D4', path:[[0,-70],[1200,-70],[1600,70],[2900,70]] }]);
score('R E2 hold -70 1s then -144', h2, hp, [{ note:'D4', path:[[0,-70],[1000,-70],[2900,-150]] }]);
score('R E1 tune last +70 then -80', mel, mp, [{ note:'D4', ms:2400 }, { note:'D4', at:2400, path:[[0,70],[1000,70],[1800,-80],[3300,-80]] }]);
score('R E3 tune last -70 then -145', mel, mp, [{ note:'D4', ms:2400 }, { note:'D4', at:2400, path:[[0,-70],[1000,-70],[3300,-150]] }]);
console.log('\n#### new edges');
score('N1 hold on 1.2s then rose +120', h2, hp, [{ note:'D4', path:[[0,0],[1200,0],[1800,120],[2900,120]] }]);
score('N2 hold on 2.2s then sank -120 (pass)', h2, hp, [{ note:'D4', path:[[0,0],[2200,0],[2500,-120],[2900,-120]] }]);
score('N3 hold scoop down from +250 then rose +100', h2, hp, [{ note:'D4', path:[[0,250],[300,0],[1400,0],[2000,100],[2900,100]] }]);
score('N4 hold +70 steady whole time', h2, hp, [{ note:'D4', ms:2900, cents:70 }]);
score('N5 hold +70 then rose +160', h2, hp, [{ note:'D4', path:[[0,70],[1000,70],[2900,160]] }]);
score('N6 hold -70 1s then crept up to on', h2, hp, [{ note:'D4', path:[[0,-70],[1000,-70],[1500,0],[2900,0]] }]);
score('N7 hold on, over +80, under -80 (flip)', h2, hp, [{ note:'D4', path:[[0,0],[700,0],[900,80],[1500,80],[1800,-80],[2900,-80]] }]);
score('N8 hold -80 then flip +80 then on', h2, hp, [{ note:'D4', path:[[0,-80],[600,-80],[800,80],[1300,80],[1500,0],[2900,0]] }]);
score('N9 hold scoop up from -300 then crossed to +90', h2, hp, [{ note:'D4', path:[[0,-300],[250,0],[900,0],[1500,90],[2900,90]] }]);
const c25 = ask('hold', { seconds: 4, cents: 25 }); const cp = single('D4', 5000, { holdNeedMs:4000, onset:true, drift:true, cents:25 });
score('N10 closer hold +35 then -35 (cross within shade)', c25, cp, [{ note:'D4', path:[[0,35],[1500,35],[2500,-35],[4900,-35]] }]);
score('N11 tune last scoop up then sank', mel, mp, [{ note:'D4', ms:2400 }, { note:'D4', at:2400, path:[[0,-300],[250,0],[1500,0],[2000,-120],[3300,-120]] }]);
score('N12 tune last -70 then rose +80', mel, mp, [{ note:'D4', ms:2400 }, { note:'D4', at:2400, path:[[0,-70],[1000,-70],[1600,80],[3300,80]] }]);
score('N13 tune last on 2.5s then rose', mel, mp, [{ note:'D4', ms:2400 }, { note:'D4', at:2400, path:[[0,0],[2500,0],[2800,100],[3300,100]] }]);
score('N14 tune last +60 whole time', mel, mp, [{ note:'D4', ms:2400 }, { note:'D4', at:2400, ms:3300, cents:60 }]);
// guesses
for (const [lab, a, p, t] of [['hold +70->-80', h2, hp, [{ note:'D4', path:[[0,70],[1000,70],[1800,-80],[2900,-80]] }]], ['tune last +70->-80', mel, mp, [{ note:'D4', ms:2400 }, { note:'D4', at:2400, path:[[0,70],[1000,70],[1800,-80],[3300,-80]] }]], ['tune last -70->-145', mel, mp, [{ note:'D4', ms:2400 }, { note:'D4', at:2400, path:[[0,-70],[1000,-70],[3300,-150]] }]], ['hold -70->-150', h2, hp, [{ note:'D4', path:[[0,-70],[1000,-70],[2900,-150]] }]]]) {
  const total = Math.max(...t.map(x => (x.at||0) + (x.ms || x.path[x.path.length-1][0])));
  const ans0 = A.singAnswer(p, reads(t, 0.1, total), 0);
  for (const gv of [-1,0,1]) { const ans = { ...ans0, guess: gv }; console.log(`guess ${lab} said ${gv}:`, strip(A.singMarksHtml(a, ans, A.singOk(a, ans)))); }
}
console.log('\n#### creep');
score('N15 tune last -70 1s then crept on', mel, mp, [{ note:'D4', ms:2400 }, { note:'D4', at:2400, path:[[0,-70],[1000,-70],[1500,0],[3300,0]] }]);
score('N16 hold -70 0.4s then on (ordinary start?)', h2, hp, [{ note:'D4', path:[[0,-70],[400,-70],[600,0],[2900,0]] }]);
score('N17 hold -70 1.5s then on, 6s hold', ask('hold',{seconds:6}), single('D4', 7000, { holdNeedMs: 6000, onset:true, drift:true }), [{ note:'D4', path:[[0,-70],[1500,-70],[1800,0],[6900,0]] }]);
score('N18 tune last -70 1.2s then on 1.2s (short hold)', mel, mp, [{ note:'D4', ms:2400 }, { note:'D4', at:2400, path:[[0,-70],[1200,-70],[1400,0],[2600,0]] }]);
console.log('\n#### N18/N19 guesses');
for (const [lab, a, p, t] of [['N18 tune last -70 1.2s then on', mel, mp, [{ note:'D4', ms:2400 }, { note:'D4', at:2400, path:[[0,-70],[1200,-70],[1400,0],[2600,0]] }]],
  ['N19 tune last -60 1.6s then on 1.6s', mel, mp, [{ note:'D4', ms:2400 }, { note:'D4', at:2400, path:[[0,-60],[1600,-60],[1700,0],[3300,0]] }]],
  ['N20 hold -70 1.5s then on (6s)', ask('hold',{seconds:6}), single('D4', 7000, { holdNeedMs: 6000, onset:true, drift:true }), [{ note:'D4', path:[[0,-70],[1500,-70],[1800,0],[6900,0]] }]]]) {
  const total = Math.max(...t.map(x => (x.at||0) + (x.ms || x.path[x.path.length-1][0])));
  const ans0 = A.singAnswer(p, reads(t, 0.1, total), 0);
  for (const gv of [-1,0]) { const ans = { ...ans0, guess: gv }; console.log(`${lab} said ${gv}:`, JSON.stringify(ans0.cents), strip(A.singMarksHtml(a, ans, A.singOk(a, ans)))); }
}

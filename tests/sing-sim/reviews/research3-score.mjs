// The third research review's cases (its scratch script r3/score.mjs), ported as written: every line it printed is kept in tests/sing-cases.lock.json.
import { A, printed } from '../harness.mjs';
const console = printed();
const strip = h => h.replace(/<[^>]+>/g, ' | ').replace(/(\s*\|\s*)+/g, ' | ').trim();
// cents at time t (ms) along a straight path
const at = (path, ms) => { if (ms <= path[0][0]) return path[0][1]; for (let i = 1; i < path.length; i++) { const [t1, c1] = path[i], [t0, c0] = path[i-1]; if (ms <= t1) return c0 + (c1 - c0) * (ms - t0) / (t1 - t0); } return path[path.length-1][1]; };
// readings for windows: segs = [{note, path, fromMs, lenMs}] ; offset = time the voice starts in window
function readingsFor(segs, totalMs){ const out=[]; for(let ms=0; ms<totalMs; ms+=50){ const s=segs.find(s=>ms>=s.fromMs && ms<s.fromMs+s.lenMs); out.push({t: ms/1000, hz: s? A.noteToHz(s.note)*2**(at(s.path, ms-s.fromMs)/1200):null, level:0.2}); } return out; }
function score(name, ask, plan, segs){
  const r = readingsFor(segs, plan.totalMs);
  const ans = A.singAnswer(plan, r, 0, null);
  const ok = A.singOk(ask, ans);
  const out = [name, JSON.stringify(ans), ok ? 'OK' : 'MISS', 'marks: '+strip(A.singMarksHtml(ask, ans, ok)), 'miss: '+strip(A.singMissHtml(ask, ans))];
  for (const g of [-1,0,1]) out.push(`guess ${g}: ` + strip(A.singMarksHtml(ask, {...ans, guess:g}, ok)).split('You said')[1]);
  console.log(out.join('\n  ')); console.log();
}
const T = (task, extra={}) => ({ id:'sing', kind:'sing', task, ...extra });
const single = (note, ms, extra) => ({ cents: extra.cents, hear: [], bars: [{note, fromMs:0, ms}], windows: [{note, fromMs:0, ms}], totalMs: ms, ...extra });
// L3 as matches (window 1.9 s)
const m = T('match', {cents:50}), mp = single('D4', 1900, {cents:50, onset:true, turns:true});
score('L3 Sliding up (D4)', m, mp, [{note:'D4', path:[[0,-300],[400,0],[1500,0]], fromMs:0, lenMs:1900}]);
score('L3 Landing on it', m, mp, [{note:'D4', path:[[0,0]], fromMs:0, lenMs:1900}]);
score('L3 Hunting (1.9 s window)', m, mp, [{note:'D4', path:[[0,-250],[500,130],[1000,-100],[1500,70],[2000,-30],[2500,0],[3500,0]], fromMs:0, lenMs:1900}]);
score('L3 Hunting (whole 3.5 s)', m, single('D4',3500,{cents:50,onset:true,turns:true}), [{note:'D4', path:[[0,-250],[500,130],[1000,-100],[1500,70],[2000,-30],[2500,0],[3500,0]], fromMs:0, lenMs:3500}]);
score('L3 Shade under then up (1.9 s)', m, mp, [{note:'D4', path:[[0,-75],[1600,-75],[2500,0],[4000,0]], fromMs:0, lenMs:1900}]);
score('L3 Shade over then down (1.9 s)', m, mp, [{note:'D4', path:[[0,75],[1600,75],[2500,0],[4000,0]], fromMs:0, lenMs:1900}]);
score('L3 Shade under then up (whole 4 s)', m, single('D4',4000,{cents:50,onset:true,turns:true}), [{note:'D4', path:[[0,-75],[1600,-75],[2500,0],[4000,0]], fromMs:0, lenMs:4000}]);
// L4 holds (2 s, window 3 s)
const h = T('hold', {seconds:2, cents:50}), hp = single('D4', 3000, {cents:50, holdNeedMs:2000, onset:true, drift:true});
score('L4 Holding steady', h, hp, [{note:'D4', path:[[0,0]], fromMs:0, lenMs:3000}]);
score('L4 Sinking under', h, hp, [{note:'D4', path:[[0,0],[700,0],[2200,-100],[3000,-100]], fromMs:0, lenMs:3000}]);
const h4 = T('hold', {seconds:4, cents:50}), hp4 = single('D4', 5000, {cents:50, holdNeedMs:4000, onset:true, drift:true});
score('L4 Sinking under as 4 s hold', h4, hp4, [{note:'D4', path:[[0,0],[700,0],[2200,-100],[3000,-100]], fromMs:0, lenMs:3000}]);
// hold off from start, then moves on
score('hold: off from start (-80) then moves on at 1s', h, hp, [{note:'D4', path:[[0,-80],[800,-80],[1100,0],[3000,0]], fromMs:0, lenMs:3000}]);
score('hold: off from start (-80) stays', h, hp, [{note:'D4', path:[[0,-80]], fromMs:0, lenMs:3000}]);
score('hold: scoop in then holds then sinks', h, hp, [{note:'D4', path:[[0,-300],[300,0],[1500,0],[2500,-90],[3000,-90]], fromMs:0, lenMs:3000}]);
// L5 intervals: windows 1400 each
const iv = T('interval', {cents:50});
const ivp = (n1,n2) => ({ cents:50, hear:[], bars:[], windows:[{note:n1,fromMs:0,ms:1400},{note:n2,fromMs:1400,ms:1400}], totalMs:2800 });
score('L5 small step D4-E4', iv, ivp('D4','E4'), [{note:'D4',path:[[0,0]],fromMs:0,lenMs:1000},{note:'E4',path:[[0,0]],fromMs:1150,lenMs:1000}]);
score('L5 big jump D4-A4 (sung as played, 1.15s apart)', iv, ivp('D4','A4'), [{note:'D4',path:[[0,0]],fromMs:0,lenMs:1000},{note:'A4',path:[[0,0]],fromMs:1150,lenMs:1000}]);
score('L5 jump short A4 -75', iv, ivp('D4','A4'), [{note:'D4',path:[[0,0]],fromMs:0,lenMs:1000},{note:'A4',path:[[0,-75]],fromMs:1150,lenMs:1000}]);
// L6 melody: last note sinks after 2 s held, check guess reading
const mel = T('melody', {notes:3, maxStep:2, cents:50});
const melp = { cents:50, holdNeedMs:2000, drift:true, hear:[], bars:[], windows:[{note:'D4',fromMs:0,ms:1200},{note:'E4',fromMs:1200,ms:1200},{note:'F4',fromMs:2400,ms:3400}], totalMs:5800 };
score('L6 melody last note held 2.2 s then sinks to -120', mel, melp, [{note:'D4',path:[[0,0]],fromMs:0,lenMs:1200},{note:'E4',path:[[0,0]],fromMs:1200,lenMs:1200},{note:'F4',path:[[0,0],[2200,0],[3000,-120],[3400,-120]],fromMs:2400,lenMs:3400}]);
score('L6 melody last note sinks after 1.2 s to -120', mel, melp, [{note:'D4',path:[[0,0]],fromMs:0,lenMs:1200},{note:'E4',path:[[0,0]],fromMs:1200,lenMs:1200},{note:'F4',path:[[0,0],[1200,0],[2200,-120],[3400,-120]],fromMs:2400,lenMs:3400}]);
score('L6 melody whole tune -70', mel, melp, [{note:'D4',path:[[0,-70]],fromMs:0,lenMs:1200},{note:'E4',path:[[0,-70]],fromMs:1200,lenMs:1200},{note:'F4',path:[[0,-70]],fromMs:2400,lenMs:3400}]);
// Jaws: E3 to F3
console.log('Jaws half-steps:', A.noteToMidi('F3') - A.noteToMidi('E3'));
// a natural onset: -150 to 0 in 150 ms, with 25-cent vibrato
score('natural onset -150 over 150ms + vibrato', m, mp, [{note:'D4', path:[[0,-150],[150,0],[300,25],[400,-25],[500,25],[600,-25],[700,25],[800,-25],[900,25],[1000,-25],[1900,0]], fromMs:0, lenMs:1900}]);
// L4 stretch at 25
const h25 = T('hold', {seconds:4, cents:25});
score('L4 stretch steady +30 (a shade?)', h25, single('D4',5000,{cents:25,holdNeedMs:4000,onset:true,drift:true}), [{note:'D4', path:[[0,30]], fromMs:0, lenMs:5000}]);
score('hold: ordinary onset -150 to 0 over 250 ms, then on 2.7 s', h, hp, [{note:'D4', path:[[0,-150],[250,0],[3000,0]], fromMs:0, lenMs:3000}]);
score('match: same ordinary onset', m, mp, [{note:'D4', path:[[0,-150],[250,0],[1900,0]], fromMs:0, lenMs:1900}]);

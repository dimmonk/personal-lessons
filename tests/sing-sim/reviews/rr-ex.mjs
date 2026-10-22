// A review's example cases (scratch script rr/ex.mjs), ported as written: every line it printed is kept in tests/sing-cases.lock.json.
import { A, printed } from '../harness.mjs';
const console = printed();
const tHz = A.noteToHz('D4');
const interp = (path, ms) => { if (ms <= path[0][0]) return path[0][1]; for (let i=1;i<path.length;i++){ const [a,ca]=path[i-1],[b,cb]=path[i]; if (ms<=b) return ca+(cb-ca)*(ms-a)/(b-a);} return path[path.length-1][1]; };
const reads = (path, dur) => { const out=[]; for (let k=0;k*50<dur;k++){ out.push({ t:k*0.05, hz: tHz*2**(interp(path,k*50)/1200), level:0.2 }); } return out; };
const T = (task, extra={}) => ({ task, ...extra });
function score(name, ask, plan, path, dur){
  const ans = A.singAnswer(plan, reads(path, dur), 0);
  const ok = A.singOk(ask, ans);
  const words = A.singMarksHtml(ask, ans, ok).replace(/<[^>]+>/g,' | ').replace(/\s*\|\s*(\|\s*)+/g,' | ');
  const miss = ok ? '' : A.singMissHtml(ask, ans).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ');
  console.log(name, JSON.stringify(ans), ok, words, miss, 'slid', A.singSlid(ans));
}
const match = { windows: [{ note:'D4', fromMs:0, ms:1900 }], cents:50, onset:true };
const askM = T('match',{cents:50});
score('scoop l3', askM, match, [[0,-300],[400,0],[1500,0]], 1500);
score('hunt l3', askM, match, [[0,-250],[500,130],[1000,-100],[1500,70],[2000,-30],[2500,0],[3500,0]], 1900);
score('shade under then up l3', askM, match, [[0,-75],[1600,-75],[2500,0],[4000,0]], 1900);
score('shade under steady', askM, match, [[0,-75],[1900,-75]], 1900);
const hold = { windows: [{ note:'D4', fromMs:0, ms:3000 }], cents:50, holdNeedMs:2000, drift:true };
const askH = T('hold',{seconds:2,cents:50});
score('sinking l4', askH, hold, [[0,0],[700,0],[2200,-100],[3000,-100]], 3000);
score('steady l4', askH, hold, [[0,0],[3000,0]], 3000);
// a natural sinking hold: on 1.2s then sinks to -80 by 3s
score('late sink', askH, hold, [[0,0],[1200,0],[3000,-80]], 3000);
const hold4 = { windows: [{ note:'D4', fromMs:0, ms:5000 }], cents:50, holdNeedMs:4000, drift:true };
score('sinks after 2.5 of 4', T('hold',{seconds:4,cents:50}), hold4, [[0,0],[2500,0],[4000,-100],[5000,-100]], 5000);
// small onset transient typical: -120 at start reaching 0 by 150 ms
score('quick onset -150 to 0 in 150ms', askM, match, [[0,-150],[150,0],[1900,0]], 1900);
score('onset -200 to 0 in 200ms', askM, match, [[0,-200],[200,0],[1900,0]], 1900);

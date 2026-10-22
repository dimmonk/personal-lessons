// The helper the confirmation reviews 2 to 4 wrote their cases with (scratch c2/h.mjs and c3/h.mjs, one superset): tones sung noise-free
// unless a tone asks for jitter, dropped readings or slips; `run` scores a case and keeps what the app made of it (harness `fixed`).
import { A, fixed } from '../harness.mjs';
export { A };
const hzOf = (note, c) => A.noteToHz(note) * 2 ** (c / 1200);
export const along = path => ms => { const k = path.findIndex(([at]) => at >= ms); if (k <= 0) return k === 0 ? path[0][1] : path[path.length-1][1];
  const [a, ca] = path[k-1], [b, cb] = path[k]; return ca + (cb-ca)*(ms-a)/(b-a); };
let seed = 7; export const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }; export const reseed = s => { seed = s; };
export const gauss = () => { let u = 0; for (let i = 0; i < 6; i++) u += rnd(); return u - 3; };
// tone: {note, at, ms|path, cents, fn(ms)->cents, drop: prob of null, jitter: sd cents, octave: prob of x2/x0.5, fifth: prob of x1.5}
const dur = x => x.ms || (x.path ? x.path[x.path.length-1][0] : 0);
export function reads(tones, startS, step = 50) { const total = Math.max(...tones.map(x => (x.at||0) + dur(x))); const out = [];
  for (let ms = 0; ms < total; ms += step) { const t = tones.find(x => ms >= (x.at||0) && ms < (x.at||0) + dur(x));
    if (!t) continue; const rel = ms - (t.at||0); let c = t.fn ? t.fn(rel) : t.path ? along(t.path)(rel) : (t.cents||0);
    if (t.jitter) c += t.jitter * gauss();
    let hz = hzOf(t.note, c);
    if (t.drop && rnd() < t.drop) hz = null;
    else if (t.octave && rnd() < t.octave) hz = hz * (rnd() < 0.5 ? 2 : 0.5);
    else if (t.fifth && rnd() < t.fifth) hz = hz * 1.5;
    out.push({ t: startS + (ms + (t.tj ? (rnd()-0.5)*t.tj : 0))/1000, hz, level: 0.2 }); } return out; }
export const ask = (task, extra={}) => ({ id:'sing', kind:'sing', task, cents: 50, ...extra });
export const matchPlan = (c=50) => ({ cents:c, hear:[], bars:[], windows:[{ note:'D4', fromMs:0, ms:1900 }], totalMs:1900, onset:true, turns:true });
export const holdPlan = (s, c=50) => ({ cents:c, hear:[], bars:[], windows:[{ note:'D4', fromMs:0, ms:s*1000+1000 }], totalMs:s*1000+1000, holdNeedMs:s*1000, onset:true, drift:true });
export const melPlan = (notes, noteMs=800, c=50) => { const ws = []; let at = 0; notes.forEach((n,i) => { const ms = (i===notes.length-1?3000:noteMs)+400; ws.push({ note:n, fromMs:at, ms }); at += ms; });
  return { cents:c, hear:[], bars:[], windows:ws, totalMs:at, holdNeedMs:2000, onset:true, drift:true }; };
// (the guesses a case was shown with are checked for every case by the harness's invariants)
export function run(label, a, plan, tones) {
  const ans = A.singAnswer(plan, reads(tones, 0.1), 0);
  if (ans) A.singJudge(a, ans);
  fixed(label, a, ans);
  return ans;
}

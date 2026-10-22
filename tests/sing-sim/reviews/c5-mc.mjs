// Confirmation review 5's match and consistency checks (its scratch script c5/mc.mjs), ported as written:
//   a match with a vibrato of +-40 to +-80 is never taken for a hunt, and passes;
//   a match with a slow wander passes when the voice's middle (the wander alone, its middle half averaged as the app does) sat within the
//   tolerance less MARGIN (the review counted passes; a voice that wanders far enough is really off);
//   the review's sweep of holds and tunes with random beginner faults keeps its rules: a guess agrees exactly with where the note ended,
//   "both ways" never appears, the "You said" and fix lines point the right way, a hold passes exactly when its mark is good, and "stopped"
//   is said only when the voice never left the note. Two rules are as the app now has them: a drift's fix says "back up" or "back down", and
//   a hold held for the seconds asked passes even if it sank or rose after (heldThenDrift).
import { rate, tries } from '../harness.mjs';
import { A, ask, matchPlan, holdPlan, melPlan, reseed, gauss, rnd } from './h.mjs';
const MARGIN = 15;
const m = ask('match'), mp = matchPlan();
// match with vibrato: false hunts?
for (const step of [50, 66.7]) for (const amp of [40, 55, 70, 80]) for (const f of [5, 6]) { reseed(11); let hunt = 0, ok = 0, n = 0; const N = tries(200);
  for (let i = 0; i < N; i++) { const ph = rnd()*6.28, out = [];
    for (let ms = 100; ms < 1800; ms += step) { const c = amp*Math.sin(ph + 2*Math.PI*f*ms/1000) + 10*gauss()/0.707;
      out.push({ t: 0.1 + ms/1000, hz: rnd() < 0.03 ? null : A.noteToHz('D4')*2**(c/1200), level: .2 }); }
    const ans = A.singAnswer(mp, out, 0); if (!ans) continue; n++; const j = A.singJudge(m, ans); if (j.last.id === 'hunt') hunt++; if (A.singOk(m, ans)) ok++; }
  rate(`match vibrato +-${amp} ${f}Hz step ${step}: not taken for a hunt`, n - hunt, n, 95);
  rate(`match vibrato +-${amp} ${f}Hz step ${step}: passed`, ok, n, 95); }
// match with slow beginner wander (random walk)
const middle = list => { const s = [...list].sort((x, y) => x - y), q = Math.floor(s.length / 4), mid = s.slice(q, s.length - q); return mid.reduce((n, c) => n + c, 0) / mid.length; };
for (const sd of [15, 20, 25, 35]) { reseed(40+sd); let clear = 0, ok = 0; const N = tries(300);
  for (let i = 0; i < N; i++) { const out = [], truth = []; let wv = sd*gauss()/0.707;
    for (let ms = 100; ms < 1800; ms += 50) { wv = 0.9*wv + Math.sqrt(0.19)*sd*gauss()/0.707; const c = wv + 10*gauss()/0.707;
      truth.push(wv); out.push({ t: 0.1 + ms/1000, hz: A.noteToHz('D4')*2**(c/1200), level: .2 }); }
    const ans = A.singAnswer(mp, out, 0);
    if (Math.abs(middle(truth)) <= m.cents - MARGIN) { clear++; if (A.singOk(m, ans)) ok++; } }
  if (clear) rate(`match wander SD ${sd}: sung on, passed (${clear} tries)`, ok, clear, 95); }
// consistency sweep: holds and tunes with random beginner faults
const strip = h => h.replace(/<[^>]+>/g, ' | ').replace(/(\s*\|\s*)+/g, ' | ');
const h2 = ask('hold', { seconds: 2 }), hp = holdPlan(2), notes = ['D4','E4','F#4','E4','D4'], mel = ask('melody', { notes: 5 }), melp = melPlan(notes);
function fault(len) { // a random beginner contour over len ms (cents at ms)
  const kind = Math.floor(rnd()*7), a = (rnd()<.5?-1:1)*(60+rnd()*120), t0 = 200+rnd()*(len-800), d = 100+rnd()*600, sd = 10+rnd()*20; let wv = 0;
  const base = kind === 5 ? a*0.8 : 0;
  return { kind, gap: kind === 4 ? [t0, t0+d] : null, fn: ms => { wv = 0.9*wv + Math.sqrt(.19)*sd*gauss()/0.707;
    const slide = kind === 3 ? Math.max(0, 1 - ms/(200+d))*a*1.5 : 0;
    const dip = kind === 0 && ms > t0 && ms < t0+d ? a : 0, drift = kind === 1 && ms > t0 ? a*Math.min(1,(ms-t0)/d) : 0;
    const vib = kind === 2 ? 55*Math.sin(2*Math.PI*5.5*ms/1000) : 0, found = kind === 6 ? (ms < t0 ? a*0.7 : 0) : 0;
    return base + slide + dip + drift + vib + found + wv; } };
}
const bad = {}; let n = 0, both = 0;
function check(a, plan, wins, label) { const out = [];
  plan.windows.forEach((w, k) => { const last = k === plan.windows.length-1, len = last ? (a.task==='hold'?2900:2900) : 800, f = last ? fault(len) : { fn: () => 10*gauss(), gap: null };
    for (let ms = 100; ms < 100+len; ms += 50) { if (f.gap && ms > f.gap[0] && ms < f.gap[1]) continue;
      out.push({ t: 0.1 + (w.fromMs+ms)/1000, hz: A.noteToHz(w.note)*2**((f.fn(ms) + 8*gauss())/1200), level: .2 }); } if (last) wins.kind = f.kind; });
  const ans = A.singAnswer(plan, out, 0); if (!ans) return; n++;
  const j = A.singJudge(a, ans), es = j.last.parts.endSide, ok = A.singOk(a, ans);
  for (const g of [-1,0,1]) { const x = { ...ans, guess: g }, agrees = A.singGuessAgrees(a, x), txt = strip(A.singMarksHtml(a, x, ok));
    if (txt.includes('both ways')) { both++; (bad['both:'+label+':'+j.last.id] ??= []).push(JSON.stringify(ans)); }
    if (es !== null && agrees !== (g === es)) (bad['agree:'+label+':'+j.last.id] ??= []).push(JSON.stringify(ans));
    if (es === null && j.last.id !== 'missed') (bad['endNull:'+label+':'+j.last.id] ??= []).push(JSON.stringify(ans));
    if (!agrees && es !== null && es !== g) { const want = es - g > 0 ? 'higher' : 'lower'; if (!txt.includes(want)) (bad['dir:'+label] ??= []).push(txt); } }
  const miss = strip(A.singMissHtml(a, ans));
  if (['drift','heldThenDrift'].includes(j.last.id)) { const want = es < 0 ? /back up|higher/ : /back down|lower/; if (!want.test(miss)) (bad['fixdir:'+label+':'+j.last.id] ??= []).push(miss); }
  if (a.task === 'hold' && ok !== (j.last.good || j.last.id === 'heldThenDrift')) (bad['okmark:'+label+':'+j.last.id] ??= []).push(JSON.stringify(ans));
  if (miss.includes('stopped') && (ans.left||0) > 0) (bad['stopLeft:'+label] ??= []).push(JSON.stringify(ans));
}
reseed(99); for (let i = 0, N = tries(1500); i < N; i++) { check(h2, hp, {}, 'hold'); check(mel, melp, {}, 'tune'); }
const wrong = Object.values(bad).reduce((s, v) => s + v.length, 0);
rate(`sweep of ${n} holds and tunes with beginner faults: every rule kept${wrong ? ` (broken: ${Object.entries(bad).map(([k, v]) => `${k} ${v.length}, e.g. ${v[0].slice(0, 200)}`).join('; ')})` : ''}`, wrong ? 0 : 1, 1, 100);

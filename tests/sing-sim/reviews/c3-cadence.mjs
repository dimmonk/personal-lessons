// Confirmation review 3's reading-rate check (its scratch script c3/cadence.mjs), ported as written: a steady on-note hold, read every 50,
// 66.7 or 100 ms with 0 to 10% single unclear readings, passes.
import { rate, tries } from '../harness.mjs';
import { A, ask, holdPlan, reseed, rnd, gauss } from './h.mjs';
const h2 = ask('hold', { seconds: 2 }), p2 = holdPlan(2), h6 = ask('hold', { seconds: 6 }), p6 = holdPlan(6);
// steady on-note voice, sung 0.3 s after Sing now, until the window ends; readings every `step` ms with p dropouts (single, independent)
function trial(a, p, secs, step, drop, jitter=8){
  const out = []; const end = secs*1000 + 900;
  for (let ms = 300; ms < end; ms += step) { const c = jitter*gauss(); out.push({ t: 0.1 + ms/1000, hz: rnd() < drop ? null : A.noteToHz('D4')*2**(c/1200), level: .2 }); }
  const ans = A.singAnswer(p, out, 0); return ans && A.singOk(a, ans) ? 1 : 0;
}
for (const [name, a, p, s] of [['2s', h2, p2, 2], ['6s', h6, p6, 6]])
  for (const step of [50, 66.7, 100]) for (const drop of [0, 0.03, 0.05, 0.1]) {
    reseed(1000 + Math.round(step*drop*100)); let ok = 0; const N = tries(300); for (let i = 0; i < N; i++) ok += trial(a, p, s, step, drop);
    rate(`${name} hold, reading every ${step} ms, ${drop*100}% single unclear readings: on-note holds passed`, ok, N, 95);
  }

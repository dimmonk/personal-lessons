// Confirmation review 5's match check (its scratch script c5/cad.mjs), ported as written: a match sung on the note, read every 50 ms,
// 66.7 ms or a mix, with jitter, slips of a fifth or an octave, unclear readings or a vibrato, passes.
import { rate, tries } from '../harness.mjs';
import { A, ask, matchPlan, reseed, gauss, rnd } from './h.mjs';
const m = ask('match'), mp = matchPlan();
// cadence: 'c50', 'c67', 'mix' (60 Hz screen whose 3-frame gap sometimes falls just under 50 ms: 50 or 66.7 at random)
const nextGap = cad => cad === 'c50' ? 50 : cad === 'c67' ? 66.7 : (rnd() < 0.5 ? 50 : 66.7);
function trial(cad, { jitter = 8, fifth = 0, octave = 0, drop = 0, vib = 0, f = 5.5 }) { const out = []; const ph = rnd()*6.28;
  for (let ms = 100; ms < 1800; ms += nextGap(cad)) { let c = jitter*gauss() + vib*Math.sin(ph + 2*Math.PI*f*ms/1000); let hz = A.noteToHz('D4')*2**(c/1200);
    if (rnd() < drop) hz = null; else if (rnd() < fifth) hz *= 1.5; else if (rnd() < octave) hz *= 2;
    out.push({ t: 0.1 + ms/1000, hz, level: .2 }); }
  const ans = A.singAnswer(mp, out, 0); if (!ans) return 'none'; const j = A.singJudge(m, ans); return j.last.id === 'hunt' ? 'hunt' : A.singOk(m, ans) ? 'ok' : j.last.id + ':' + j.last.key; }
for (const [name, o] of [['steady on, jitter 8', {}], ['steady on, jitter 15', { jitter: 15 }], ['on, 3% fifth errors', { fifth: .03 }], ['on, 5% fifth errors', { fifth: .05 }], ['on, 5% octave errors', { octave: .05 }], ['on, 10% unclear', { drop: .1 }], ['vibrato +-40', { vib: 40 }], ['vibrato +-55', { vib: 55 }]])
  for (const cad of ['c50', 'c67', 'mix']) { reseed(7); const t = {}; const N = tries(300); for (let i = 0; i < N; i++) { const r = trial(cad, o); t[r] = (t[r]||0)+1; }
    rate(`${name}, ${cad}: passed`, t.ok || 0, N, 95); }

// Confirmation review 3's held-note wander check (its scratch script c3/wobble.mjs): a continuous held note with a slow wander (AR(1) per
// 50 ms) and frame noise, ported as written. The review counted passes; a voice that wanders far enough really does leave the note, so the
// port judges each try by where the voice really went: the wander alone (no frame noise), centered over the same +-0.2 s the app uses for a
// held note. A try whose centered voice stayed within the tolerance less MARGIN throughout must pass (`never left`). A try whose voice did
// leave may still have held the seconds asked before or after it left, so passing it can be right: those are left to the lessons' own cases.
import { rate, tries } from '../harness.mjs';
import { A, ask, holdPlan, reseed, gauss } from './h.mjs';
const MARGIN = 15, CENTER_MS = 200;
const centered = (list, i) => { const t = list[i].ms, near = list.filter(x => Math.abs(x.ms - t) <= CENTER_MS); return near.reduce((n, x) => n + x.c, 0) / near.length; };
function trial(a, p, secs, mu, sd, fn, rho=0.9){
  const out = [], truth = []; let w = sd*gauss()/0.707;
  for (let ms = 300; ms < secs*1000 + 950; ms += 50){ w = rho*w + Math.sqrt(1-rho*rho)*sd*gauss()/0.707; const c = mu + w + fn*gauss()/0.707;
    truth.push({ ms, c: mu + w }); out.push({ t: 0.1 + ms/1000, hz: A.noteToHz('D4')*2**(c/1200), level: .2 }); }
  const ans = A.singAnswer(p, out, 0), ok = A.singOk(a, ans);
  const off = truth.map((_, i) => Math.abs(centered(truth, i)));
  return { ok, never: off.every(o => o <= a.cents - MARGIN) };
}
for (const secs of [2, 6]) { const a = ask('hold', { seconds: secs }), p = holdPlan(secs);
  for (const [mu, sd, fn] of [[0,15,8],[0,20,10],[0,25,10],[0,30,10],[-20,20,10]]) { reseed(77+sd+secs); const N = tries(400), c = { never: 0, neverOk: 0 };
    for (let i = 0; i < N; i++){ const r = trial(a, p, secs, mu, sd, fn); if (r.never) { c.never++; if (r.ok) c.neverOk++; } }
    const L = `${secs}s hold, mean ${mu}, wander SD ${sd}, frame SD ${fn}`;
    if (c.never) rate(`${L}: never left the note, passed (${c.never} tries)`, c.neverOk, c.never, 95);
  } }

// Confirmation review 4's tune wander check (its scratch script c4/melwob.mjs): a five-note tune, every note with a slow wander and frame
// noise, ported as written. As in c3-wobble, each try is judged by where the voice really went (the wander alone): when every note's middle
// sat within the tolerance less MARGIN and the last note's centered voice (+-0.2 s) never left it, the tune must pass. The review's own
// check is kept too: a guess of "On" is never turned down when the last note ended on the note.
import { rate, tries } from '../harness.mjs';
import { A, ask, melPlan, reseed, gauss } from './h.mjs';
const MARGIN = 15, CENTER_MS = 200;
const notes = ['D4','E4','F#4','E4','D4'], a = ask('melody', { notes: 5 }), p = melPlan(notes);
const centered = (list, i) => { const t = list[i].ms, near = list.filter(x => Math.abs(x.ms - t) <= CENTER_MS); return near.reduce((n, x) => n + x.c, 0) / near.length; };
for (const sd of [15, 20, 25]) { reseed(300+sd); const N = tries(400); let clear = 0, clearPass = 0, endOn = 0, guessOnRejected = 0;
  for (let i = 0; i < N; i++) { const out = [], truth = [];
    p.windows.forEach((w, k) => { const last = k === p.windows.length - 1, len = last ? 2900 : 800; let wv = sd*gauss()/0.707; const mine = [];
      for (let ms = 100; ms < 100 + len; ms += 50) { wv = 0.9*wv + Math.sqrt(1-0.81)*sd*gauss()/0.707; const c = wv + 10*gauss()/0.707;
        mine.push({ ms, c: wv }); out.push({ t: 0.1 + (w.fromMs + ms)/1000, hz: A.noteToHz(w.note)*2**(c/1200), level: .2 }); }
      truth.push(mine); });
    const ans = A.singAnswer(p, out, 0); const j = A.singJudge(a, ans);
    const middles = truth.slice(0, -1).map(l => Math.abs(l.reduce((n, x) => n + x.c, 0) / l.length)), lastNote = truth[truth.length - 1];
    if (middles.every(m => m <= a.cents - MARGIN) && lastNote.every((_, k) => Math.abs(centered(lastNote, k)) <= a.cents - MARGIN)) { clear++; if (A.singOk(a, ans)) clearPass++; }
    if (j.last.parts.endSide === 0) { endOn++; if (!A.singGuessAgrees(a, { ...ans, guess: 0 })) guessOnRejected++; } }
  if (clear) rate(`tune, every note wander SD ${sd}: sung on throughout, passed (${clear} tries)`, clearPass, clear, 95);
  if (endOn) rate(`tune, every note wander SD ${sd}: a guess of "On" agreed with when the end was on (${endOn} tries)`, endOn - guessOnRejected, endOn, 100); }

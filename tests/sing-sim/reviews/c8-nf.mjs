// Confirmation review 8's one-note-off check (its scratch script c8/nf.mjs, and c8/dbg.mjs, which looked into its 70 case), ported as
// written: one note of a tune or a pair sung 70 to 300 off, in the played rhythm, is named on its side, never "Not heard".
import { A, rate } from '../harness.mjs';
for (const [name, ask] of [['tune5', { id: 'sing', kind: 'sing', task: 'melody', notes: 5, maxStep: 4, cents: 50 }], ['interval1-3', { id: 'sing', kind: 'sing', task: 'interval', minSemitones: 1, maxSemitones: 3, cents: 50 }], ['interval2-7', { id: 'sing', kind: 'sing', task: 'interval', minSemitones: 2, maxSemitones: 7, cents: 50 }]])
for (const mag of [70, 90, 120, 150, 200, 250, 300]) { let miss = 0, named = 0, n = 0;
  for (let seed = 1; seed <= 60; seed++) { const p = A.singPlan(ask, { low: 'G2', high: 'C5' }, seed * 7777), K = p.windows.length;
    for (let j = 0; j < K; j++) for (const s of [-1, 1]) { const offs = Array(K).fill(0); offs[j] = s * mag; const out = [], st = 250;
      for (let t = 0; t < p.totalMs; t += 50) { const i = p.hear.findIndex((h, k) => t >= st + h.atMs && (k === K - 1 ? t < st + h.atMs + Math.min(2900, h.ms) : t < st + p.hear[k + 1].atMs - 80)); if (i < 0) continue;
        out.push({ t: 0.1 + t / 1000, hz: A.noteToHz(p.windows[i].note) * 2 ** (offs[i] / 1200), level: 0.2 }); }
      const k = A.singJudge(ask, A.singAnswer(p, out, 0.1)).notes[j].key; n++; if (k === 'missed') miss++; else if (k !== 'on' && (k.endsWith('Over') ? 1 : -1) === s) named++; } }
  rate(`${name}, one note off by ${mag}: named on its side`, named, n, 95); rate(`${name}, one note off by ${mag}: not "Not heard"`, n - miss, n, 100); }

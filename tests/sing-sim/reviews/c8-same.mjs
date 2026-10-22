// Confirmation review 8's did-not-move check (its scratch script c8/same.mjs), ported as written: a note sung at the pitch of the note
// before is named (never "on", never "Not heard"), and the other notes stay on.
import { A, rate } from '../harness.mjs';
for (const [name, ask] of [['l5 1-3', { id: 'sing', kind: 'sing', task: 'interval', minSemitones: 1, maxSemitones: 3, cents: 50 }], ['l5 2-7', { id: 'sing', kind: 'sing', task: 'interval', minSemitones: 2, maxSemitones: 7, cents: 50 }], ['l5 4-9', { id: 'sing', kind: 'sing', task: 'interval', minSemitones: 4, maxSemitones: 9, cents: 50 }], ['tune5', { id: 'sing', kind: 'sing', task: 'melody', notes: 5, maxStep: 4, cents: 50 }]]) {
  const tally = {}; let n = 0;
  for (let seed = 1; seed <= 100; seed++) { const p = A.singPlan(ask, { low: 'G2', high: 'C5' }, seed * 3331), K = p.windows.length, m = p.windows.map(w => A.noteToMidi(w.note));
    const j = K === 2 ? 1 : 1 + (seed % (K - 1)); if (m[j] === m[j - 1]) continue;
    // note j sung at note j-1's pitch (did not move), rest exact
    const offs = m.map((x, i) => i === j ? (m[j - 1] - m[j]) * 100 : 0), out = [], st = 250;
    for (let t = 0; t < p.totalMs; t += 50) { const i = p.hear.findIndex((h, k) => t >= st + h.atMs && (k === K - 1 ? t < st + h.atMs + Math.min(2900, h.ms) : t < st + p.hear[k + 1].atMs - 80)); if (i < 0) continue;
      out.push({ t: 0.1 + t / 1000, hz: A.noteToHz(p.windows[i].note) * 2 ** (offs[i] / 1200), level: 0.2 }); }
    const ans = A.singAnswer(p, out, 0.1), keys = A.singJudge(ask, ans).notes.map(x => x.key); n++;
    const k = keys[j] === 'missed' ? 'NotHeard' : keys[j] === 'on' ? 'ON(!)' : 'named'; const others = keys.every((x, i) => i === j || x === 'on') ? '' : '+others wrong';
    tally[k + others] = (tally[k + others] || 0) + 1; }
  rate(`${name}, a note sung at the previous pitch: named, the others on`, tally.named || 0, n, 95); }

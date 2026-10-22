// A review's guess-text cases on made-up answers (scratch script rr/g.mjs), ported as written: every line it printed is kept in tests/sing-cases.lock.json.
import { A, printed } from '../harness.mjs';
const console = printed();
const ask = { task:'match', cents:50 };
for (const guess of [-1,0,1]) { const ans = { cents:[0], start:-225, guess }; console.log(guess, A.singMarksHtml(ask, ans, false).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ')); }
// melody: 5 notes, 4 on, last held: what words
const m = { task:'melody', notes:5, maxStep:4, cents:50 };
console.log(A.singOk(m, {cents:[0,0,0,0,-80], holdMs:2500}), A.singOk(m, {cents:[0,0,0,-80,0], holdMs:2500}));
// hold with guess: measured side uses cents median
const h = { task:'hold', seconds:2, cents:50 };
console.log(A.singMarksHtml(h, {cents:[-20], end:-100, holdMs:1500, guess:-1}, false).replace(/<[^>]+>/g,' ').replace(/\s+/g,' '));

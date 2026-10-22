// The final review's recall-answer checks on the voice-care items (scratch script fx-recall.mjs), ported as written: every line it printed is kept in tests/sing-cases.lock.json.
import { A, printed } from '../harness.mjs';
const console = printed();
const S = A.FC.get('singing');
const find = (id) => { let hit; JSON.stringify(S, (k, v) => { if (v && v.id === id && v.asks) hit = v; return v; }); return hit; };
const it = find('care-days');
console.log(it ? JSON.stringify(it.asks).slice(0,300) : 'no item');
for (const a of ['two weeks', 'a week', '10 days', 'one to two weeks', 'about two weeks', '14 days', 'a month', 'three weeks', 'week']) {
  const r = A.scoreItem(S, it, null, { [it.asks[0].id]: a }); console.log(a, '->', JSON.stringify(r));
}
const w = find('care-warning');
for (const a of ['losing your voice', 'pain', 'hoarse', 'a big change in your voice']) console.log(a, '->', JSON.stringify(A.scoreItem(S, w, null, { [w.asks[0].id]: a })));

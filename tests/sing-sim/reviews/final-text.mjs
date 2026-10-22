// The final review's text-answer checks on the voice-care items (scratch script fx-text.mjs), ported as written: every line it printed is kept in tests/sing-cases.lock.json.
import { A, printed } from '../harness.mjs';
const console = printed();
const S = A.FC.get('singing');
const test = (id, answers) => { const it = A.definitionOf(S, id); const ask = it.asks[0];
  for (const a of answers) console.log(id, JSON.stringify(a), '->', A.scoreItem(S, it, null, { [ask.id]: a }).ok); };
test('care-days', ['two weeks', '2 weeks', 'three weeks', 'a week', '10 days', 'one month']);
test('care-warning', ['losing your voice', 'lost my voice', 'hoarseness', 'a cold', 'big change in your voice']);
test('care-four-weeks', ['four weeks', '3 weeks', 'a month']);

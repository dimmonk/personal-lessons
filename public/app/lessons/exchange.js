/* ===================== LESSONS: A CALL OR CHAT THAT PUSHES BACK ===================== */
// Lesson standard 26.1 (the `exchange` ask) and 26.2 (pressure rises on a hesitant reply). A call or chat whose turns arrive one after another
// and branch on what the learner replies. Pure: no page and no storage, so the player, the validator and the tests all walk an exchange the
// same way.
//   ask   { id, kind: 'exchange', prompt, form: 'call' | 'chat', from, detail, start: turnId,
//           turns: { [turnId]: { lines: [Segment], push?: Text, options: [{ id, text, goto: turnId } | { id, text, end: endId }] } },
//           ends: { [endId]: { ok, then, slip? } }, when? }
//   A turn is what the other side says; `push` names how it pushes (it hurries you, it frightens you, it uses a boss's name), so the pushing
//   turns can be marked at the end. An option with `goto` is a reply after which the exchange goes on; one with `end` ends it.
//   answer  [optionId, ...]: the replies picked, in order, until one ends the exchange     result  'ok', the slip of the end reached, or 'no'

const EXCHANGE_FORMS = ['call', 'chat'];
const exchangeOptionEnds = option => 'end' in option;

// The walk of the replies picked so far: the turns met with the option picked in each, the turn the exchange is at now (null once it has
// ended) and the end reached. A reply that is not an option of the turn it is made in stops the walk there.
function exchangeWalk(ask, path){
  let at = ask.start, end = null;
  const steps = [];
  for(const id of asList(path)){
    const turn = ask.turns[at], option = turn && turn.options.find(o => o.id === id);
    if(!option) break;
    steps.push({ id: at, turn, option });
    if(exchangeOptionEnds(option)){ end = option.end; at = null; break; }
    at = option.goto;
  }
  return { steps, at, end };
}
function scoreExchange(data, ask, answer){
  const walk = exchangeWalk(ask, answer);
  if(walk.end === null) return 'no';
  const end = ask.ends[walk.end];
  return end.ok ? 'ok' : end.slip || 'no';
}
const exchangeEndsRight = (ask, option) => exchangeOptionEnds(option) && !!ask.ends[option.end] && ask.ends[option.end].ok;
// the reply that ends a turn the right way, if the turn has one
const exchangeRightOption = (ask, turn) => turn.options.find(o => exchangeEndsRight(ask, o)) || null;
// The pushing turns on the way, and the first turn where the learner could have ended it the right way: { pushed: [{ at, turn }], could: { n, option, took } | null }.
// `n` counts the learner's replies from 1; `took` says whether that reply was the one they made.
function exchangeReview(ask, answer){
  const walk = exchangeWalk(ask, answer), pushed = walk.steps.map((s, i) => ({ n: i + 1, id: s.id, turn: s.turn })).filter(s => s.turn.push);
  const i = walk.steps.findIndex(s => exchangeRightOption(ask, s.turn));
  const could = i < 0 ? null : { n: i + 1, option: exchangeRightOption(ask, walk.steps[i].turn), took: walk.steps[i].option.id === exchangeRightOption(ask, walk.steps[i].turn).id };
  return { pushed, could, end: walk.end === null ? null : ask.ends[walk.end] };
}
// every way through the exchange: [{ path: [optionId], end: endId }]. An exchange with a loop has none (the validator refuses a loop).
function exchangePaths(ask, at = ask.start, path = [], seen = []){
  if(seen.includes(at)) return [];
  const turn = ask.turns[at];
  if(!turn) return [];
  return turn.options.flatMap(o => exchangeOptionEnds(o) ? [{ path: [...path, o.id], end: o.end }] : exchangePaths(ask, o.goto, [...path, o.id], [...seen, at]));
}
// the turns that can be reached from the start
function exchangeReach(ask, at = ask.start, seen = []){
  if(seen.includes(at) || !ask.turns[at]) return seen;
  return ask.turns[at].options.filter(o => !exchangeOptionEnds(o)).reduce((all, o) => exchangeReach(ask, o.goto, all), [...seen, at]);
}
// whether the turns loop back on themselves
function exchangeLoops(ask, at = ask.start, above = []){
  if(above.includes(at)) return true;
  const turn = ask.turns[at];
  return !!turn && turn.options.filter(o => !exchangeOptionEnds(o)).some(o => exchangeLoops(ask, o.goto, [...above, at]));
}
const exchangeTurnWords = turn => turn.lines.map(l => l.text).join(' ');

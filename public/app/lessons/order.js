/* ===================== LESSONS: PUTTING STEPS IN ORDER ===================== */
// Lesson standard 26.1 (the `order` ask). The learner taps steps in the order they would do them. Pure: no page and no storage, so the player,
// the validator and the tests all score an order the same way.
//   ask    { id, kind: 'order', prompt, steps: [{ id, text }], right: [stepId], scored?: 'whole' | 'first', then: Text, when? }
//   `steps` are all the steps offered (a step that is in none of `right` is one that does not belong); `right` is the order of the steps the learner
//   taps, so the learner taps `right.length` of them. 'whole' (the default) is right when every step is in its place; 'first' is right when the
//   first step tapped is the right first step (the rest are still tapped, and shown against the right order). `then` is why the order matters.
//   answer  [stepId, ...]     result  'ok' or 'no'

const orderScored = ask => ask.scored || 'whole';
const orderReady = (ask, picked) => picked.length === ask.right.length;
function scoreOrder(data, ask, answer){
  const picked = asList(answer);
  const ok = orderScored(ask) === 'first' ? picked[0] === ask.right[0] : picked.length === ask.right.length && picked.every((id, i) => id === ask.right[i]);
  return ok ? 'ok' : 'no';
}
const orderStepText = (ask, id) => (ask.steps.find(s => s.id === id) || { text: id }).text;
const orderRightText = ask => ask.right.map(id => orderStepText(ask, id)).join(', then ');
// The steps as the learner first sees them: mixed, and never already in the right order, so a tap in the order shown is not the answer.
function orderShown(ask, scope){
  const mixed = shuffled(ask.steps, hashSeed(`${scope}|${ask.id}`));
  const inOrder = mixed.slice(0, ask.right.length).every((s, i) => s.id === ask.right[i]);
  return inOrder ? [...mixed.slice(1), mixed[0]] : mixed;
}
// the problems of an order ask, for the validator: [string]
function orderProblems(ask){
  const ids = ask.steps.map(s => s.id), problems = [];
  ids.filter((id, i) => ids.indexOf(id) !== i).forEach(id => problems.push(`step "${id}" appears twice`));
  if (ask.steps.length < 2) problems.push('an order needs at least two steps to put in order');
  if (ask.right.length < 2) problems.push('an order has at least two steps in its right order');
  ask.right.filter(id => !ids.includes(id)).forEach(id => problems.push(`the right order names "${id}", which is not one of the steps`));
  ask.right.filter((id, i) => ask.right.indexOf(id) !== i).forEach(id => problems.push(`the right order names "${id}" twice`));
  if (ask.right.length > ask.steps.length) problems.push('the right order is longer than the steps offered');
  return problems;
}

/* ===================== LESSONS: WHAT COUNTS AS RIGHT, AND WHAT A CHECK ASKS ===================== */
// Pure rules, read by the lesson player, the review, the results and the validator, so they can never disagree
// (lesson standard 26.1, 26.2, 26.5). No page and no storage here. `data` is a registered subject: FC.get(id).

// The ask kinds and block kinds built so far (26.8). A lesson that uses another fails V70 until its step is built.
const ASK_KINDS = ['choose'];
const BLOCK_KINDS = ['prose', 'pair'];
const RETURN_GAPS = [2, 7, 24];   // days: after the check or a miss, after the first good day, after the second (26.4)

const sameIds = (a, b) => a.length === b.length && a.every(x => b.includes(x));
const asList = x => x === undefined || x === null ? [] : Array.isArray(x) ? x : [x];

/* ---------- options and scoring ---------- */
// The options a choose ask offers, resolved: [{ id, text, ok, slip?, then? }]. An ask either lists its options or draws on one of
// the subject's lists (`from`), with `right` (and `only`, the part of the list this lesson teaches).
function chooseOptions(data, ask){
  if(ask.options) return ask.options;
  const list = (data.meta.lists || {})[ask.from] || lessonFail(`unknown list ${ask.from}`);
  const right = asList(ask.right), offered = ask.only ? list.filter(o => ask.only.includes(o.id)) : list;
  return offered.map(o => ({ id: o.id, text: o.text, ok: right.includes(o.id),
    ...(ask.slips && ask.slips[o.id] ? { slip: ask.slips[o.id] } : {}), ...(ask.then && ask.then[o.id] ? { then: ask.then[o.id] } : {}) }));
}
// 'ok', a slip id, or 'no'. A single choice is right when the option is; several are right when exactly the right ones are tapped.
function scoreChoose(data, ask, answer){
  const options = chooseOptions(data, ask), chosen = asList(answer), rightIds = options.filter(o => o.ok).map(o => o.id);
  const ok = ask.many ? sameIds(chosen, rightIds) : chosen.length === 1 && rightIds.includes(chosen[0]);
  if(ok) return 'ok';
  const slipped = chosen.map(id => options.find(o => o.id === id)).find(o => o && !o.ok && o.slip);
  return slipped ? slipped.slip : 'no';
}
const SCORERS = { choose: scoreChoose };

// An ask opens only when the one it depends on was answered with one of the named options.
const askApplies = (ask, answers) => !ask.when || (ask.when.ask in answers && asList(answers[ask.when.ask]).some(id => ask.when.is.includes(id)));

// The steps of a worked item that a set's support leaves shown; the last `leave` steps are left to the learner.
function shownStepIds(item, support){
  const steps = item.steps || [], leave = support && support.leave ? support.leave : 0;
  return leave ? steps.slice(0, Math.max(0, steps.length - leave)).map(s => s.id) : [];
}
// The asks the learner answers, in order: not those tied to a step the support shows as worked.
function askedAsks(item, support){
  const shown = shownStepIds(item, support), given = new Set((item.steps || []).filter(s => shown.includes(s.id) && s.ask).map(s => s.ask));
  return (item.asks || []).filter(a => !given.has(a.id));
}
// The asks open now, given the answers so far: every applicable ask up to and including the first unanswered one.
function openAsks(item, support, answers){
  const out = [];
  for(const ask of askedAsks(item, support)){
    if(!askApplies(ask, answers)) continue;
    out.push(ask);
    if(!(ask.id in answers)) break;
  }
  return out;
}
const itemAnswered = (item, support, answers) => askedAsks(item, support).filter(a => askApplies(a, answers)).every(a => a.id in answers);
// { r: { [askId]: result }, ok }: an item is right when every scored ask is right.
function scoreItem(data, item, support, answers){
  const asks = askedAsks(item, support).filter(a => askApplies(a, answers) && a.id in answers);
  const r = Object.fromEntries(asks.map(a => [a.id, SCORERS[a.kind](data, a, answers[a.id])]));
  return { r, ok: asks.length > 0 && asks.every(a => r[a.id] === 'ok') };
}

/* ---------- pass rules ---------- */
const whereMatches = (where, facets) => !where || Object.entries(where).every(([f, v]) => (facets || {})[f] === v);
// outcomes: [{ facets, r, ok }], one per item answered in the run. A rule counts the outcomes its `where` selects (and, with `ask`,
// those that answered that ask), and the results of that ask, or of every ask when none is named.
function ruleCounts(rule, outcomes){
  const rows = outcomes.filter(o => whereMatches(rule.where, o.facets) && (!rule.ask || rule.ask in o.r));
  const isRight = o => rule.ask ? o.r[rule.ask] === 'ok' : o.ok;
  const resultsOf = o => rule.ask ? [o.r[rule.ask]] : Object.values(o.r);
  return { n: rows.length, right: rows.filter(isRight).length, wrong: rows.filter(o => !isRight(o)).length,
    slips: rule.slip ? rows.filter(o => resultsOf(o).includes(rule.slip)).length : 0 };
}
function ruleMet(rule, outcomes){
  const c = ruleCounts(rule, outcomes);
  return (!rule.right || c.right >= rule.right.min) && (!rule.wrong || c.wrong <= rule.wrong.max) && (!rule.slip || c.slips <= (rule.max || 0));
}
const facetValueText = (data, facet, value) => (((data.meta.facets || {})[facet] || { values: [] }).values.find(v => v.id === value) || { text: value }).text;
const slipText = (data, slip) => ((((data.meta.lists || {}).slip) || []).find(s => s.id === slip) || { text: slip }).text;
// A pass rule in plain words, for the check's first screen and its result: "At least 8 right", "None wrong among control patterns".
function ruleText(data, rule){
  const scope = rule.where ? ' among ' + Object.entries(rule.where).map(([f, v]) => facetValueText(data, f, v)).join(', ') : '';
  const parts = [
    ...(rule.right ? [`At least ${rule.right.min} right${scope}`] : []),
    ...(rule.wrong ? [rule.wrong.max === 0 ? `None wrong${scope}` : `At most ${rule.wrong.max} wrong${scope}`] : []),
    ...(rule.slip ? [(rule.max || 0) === 0 ? `None ${slipText(data, rule.slip)}${scope}` : `At most ${rule.max} ${slipText(data, rule.slip)}${scope}`] : [])];
  return parts.join('; ');
}
// The result of a run: how many were right, whether every rule is met, and each rule in words.
function checkResult(data, rules, outcomes){
  const lines = rules.map(rule => ({ text: ruleText(data, rule), met: ruleMet(rule, outcomes) }));
  return { right: outcomes.filter(o => o.ok).length, total: outcomes.length, passed: lines.every(l => l.met), lines };
}

/* ---------- a lesson's shape, read by the player and the validator ---------- */
const supportWeight = s => s ? (s.shown ? 1 : 0) + (s.panel ? 1 : 0) + (s.line ? 1 : 0) + (s.estimateCheck ? 1 : 0) + (s.leave || 0) : 0;
const refCount = ref => typeof ref === 'object' && ref !== null && 'gen' in ref ? ref.n : 1;
// Item references of a list, pairs flattened: [ItemRef]
const flatRefs = items => items.flatMap(r => Array.isArray(r) ? r : [r]);
const checkIsDrawn = check => !Array.isArray(check.items);
function checkSize(check){
  return checkIsDrawn(check) ? check.items.draw.n : flatRefs(check.items).reduce((n, r) => n + refCount(r), 0);
}
// The sets of a lesson's flow, in order.
const flowSets = lesson => lesson.flow.filter(step => step.set).map(step => step.set);

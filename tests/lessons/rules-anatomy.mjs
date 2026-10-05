// Section 8, anatomy and order: V10 to V18, V20 to V27, V51, V55. Each rule reads the cards of one unit in learner order.
// Branch units only, except V10, V25, V26 and V27, which every unit of standard 1 obeys (the section 8 table).
// V19 is retired. A meet card has no typed heading because the meet shape has no `h` (V0).
import { unitRule, checkEach } from './rule.mjs';
import { cuesOf, joined, prose, hasToken, isFilled, unique, norm } from './text.mjs';

const branchRule = (id, run) => unitRule(id, run, { branch: true });
const tokenIn = (field, kind, ref) => hasToken(joined(field), kind, ref);

/* ---------- V10: the opening card ---------- */
export const V10 = unitRule('V10', (u, check) => {
  const first = u.cards[0];
  check(first && first.kind === 'orient', 'the first card must be orient');
  if (first && first.kind === 'orient') check(u.isGate || Boolean(u.key.branches[first.map.branch]), `the orient map names "${first.map.branch}", which is not a branch of the key`);
});

/* ---------- V51: one lens ---------- */
export const V51 = branchRule('V51', (u, check) => {
  const lens = u.cards.filter(c => c.kind === 'lens');
  const meets = u.cards.filter(c => c.kind === 'meet' && !c.continues);
  check(lens.length === 1, `exactly one lens card is required, found ${lens.length}`);
  if (lens.length !== 1) return;
  check(u.pos(lens[0].id) > u.at('again', () => true) && u.at('again', () => true) >= 0, 'the lens must come after the first again card');
  check(meets.length < 2 || u.pos(lens[0].id) < u.pos(meets[1].id), 'the lens must come before the second meet card');
});

/* ---------- V11: each outcome's sequence ---------- */
export const V11 = branchRule('V11', (u, check) => {
  for (const o of u.taught) {
    const [meet, again, portrait] = ['meet', 'again', 'portrait'].map(kind => u.at(kind, c => c.outcome === o));
    const chk = u.at('check', c => c.after === o);
    check([meet, again, portrait, chk].every(i => i >= 0), `${o}: needs a meet, an again, a portrait and a check`);
    check(meet < again && again < portrait && portrait < chk, `${o}: meet, again, portrait, check must come in that order`);
    const chains = u.cards.filter(c => c.kind === 'meet' && c.outcome === o && !c.continues).length;
    check(chains === 1, `${o}: exactly one meet chain is required, found ${chains}`);
  }
});

/* ---------- V12, V13 ---------- */
export const V12 = branchRule('V12', (u, check) => {
  for (const meet of u.cards.filter(c => c.kind === 'meet' && !c.continues)) {
    const where = `card ${meet.id}`;
    check(u.cases[meet.case].tier === 'clean', `${where}: its case must be clean`);
    check(meet.strip.length >= 2, `${where}: strip needs at least two entries`);
    check(u.option(meet.feature.step, meet.feature.option).keeps.includes(meet.outcome), `${where}: feature.option does not keep ${meet.outcome}`);
    check(tokenIn(meet.name, 'o', meet.outcome), `${where}: name must contain {o:${meet.outcome}}`);
  }
});

export const V13 = branchRule('V13', (u, check) => {
  for (const c of u.cards.filter(k => k.kind === 'again')) {
    const [first, second] = [u.cases[c.first], u.cases[c.second]];
    check(first.outcome === c.outcome && second.outcome === c.outcome, `card ${c.id}: both cases must have the outcome ${c.outcome}`);
    check(first.setting !== second.setting, `card ${c.id}: its two cases must differ in setting`);
  }
});

/* ---------- V14: look-alike cards ---------- */
export const V14 = branchRule('V14', (u, check) => {
  for (const o of u.taught) check(u.cards.some(c => c.kind === 'lookalike' && u.ledger(c.ledger).pair.includes(o)), `${o}: no lookalike card`);
  const involving = u.cards.filter(c => ['lookalike', 'exception'].includes(c.kind));
  for (const c of involving) {
    for (const o of u.ledger(c.ledger).pair) check(u.pos(c.id) > u.at('check', k => k.after === o), `card ${c.id} comes before ${o} has had its check`);
  }
  for (const c of u.cards.filter(k => k.kind === 'lookalike')) {
    const pair = [...u.ledger(c.ledger).pair].sort().join();
    check(c.cases.map(id => u.cases[id].outcome).sort().join() === pair, `card ${c.id}: its two cases must be one from each outcome of ${c.ledger}`);
    check(c.cases.includes(c.prompt.answer), `card ${c.id}: the answer of the "which case" prompt must be one of its cases`);
  }
});

/* ---------- V15: the ledger ---------- */
function ledgerCoverage(u) {
  const missing = [];
  for (const s of u.unitSteps()) for (const opt of s.options) for (const a of opt.keeps) for (const b of opt.keeps) {
    if (a < b && !u.ledgerFor(a, b)) missing.push(`no ledger entry for ${a} and ${b}, which "${opt.n}" keeps together`);
  }
  return unique(missing);
}

function ledgerEntryProblems(u, l) {
  const first = u.unitSteps().find(s => !s.options.some(o => l.pair.every(id => o.keeps.includes(id))));
  const rule = joined(l.rule);
  const problems = [];
  if (!first || first.code !== l.step) problems.push(`step should be ${first ? first.code : 'a taught question that separates the pair, and there is none'}`);
  if (!l.pair.every(id => hasToken(rule, 'o', id))) problems.push('rule must name both outcomes by token');
  if (!isFilled(l.shared) || !isFilled(l.test)) problems.push('shared and test are required');
  if (/\{o:/.test(joined(l.test))) problems.push('test must not contain an outcome token');
  const own = u.cards.filter(c => c.ledger === l.id);
  const via = l.taughtIn && u.cardsById[l.taughtIn];
  if (own.length === 0 && !via) problems.push('no card teaches it');
  if (own.length === 0 && via) {
    const text = prose(via).map(([, s]) => s).join(' ');
    const afterMeets = l.pair.every(id => u.pos(via.id) > u.at('meet', c => c.outcome === id));
    const names = l.pair.every(id => hasToken(text, 'o', id) || via.outcome === id);
    if (!afterMeets || !names) problems.push('its taughtIn card must come after both meet cards and name both outcomes');
  }
  return problems;
}

export const V15 = branchRule('V15', (u, check) => {
  checkEach(check, 'ledger', ledgerCoverage(u));
  u.unit.ledger.forEach(l => checkEach(check, `ledger entry ${l.id}`, ledgerEntryProblems(u, l)));
});

/* ---------- V16: question cards ---------- */
export const V16 = branchRule('V16', (u, check) => {
  for (const code of u.unit.teaches.steps) {
    const q = u.at('question', c => c.step === code && !c.continues);
    const next = u.cards.findIndex((c, i) => i > q && ['question', 'worked'].includes(c.kind) && !c.continues);
    check(q >= 0, `${code}: no question card`);
    if (q < 0) continue;
    check(u.cards.slice(q + 1, next < 0 ? undefined : next).some(c => c.kind === 'check' && c.after === code), `${code}: its question card must be followed by a check before the next question or worked card`);
    for (const opt of u.step(code).options) {
      check(opt.keeps.some(id => { const m = u.at('meet', c => c.outcome === id); return m >= 0 && m < q; }), `${code}: the question card comes before any outcome kept by "${opt.n}" has been met`);
    }
  }
});

/* ---------- V17: a purpose names no topic ---------- */
const TOPIC_WORD_MIN = 4;
const topicWords = u => new Set(u.caseList.flatMap(c => c.topic ? norm(c.topic).split(' ') : []).filter(w => w.length >= TOPIC_WORD_MIN));

export const V17 = branchRule('V17', (u, check) => {
  const topics = topicWords(u);
  for (const s of u.unitSteps()) {
    const hits = norm(joined(s.purpose)).split(' ').filter(w => topics.has(w));
    check(hits.length === 0, `${s.code}: purpose contains the topic word(s) ${unique(hits).join(', ')}`);
  }
});

/* ---------- V18: worked cases ---------- */
function workedProblems(u, w, isLast) {
  const c = u.cases[w.case];
  const problems = [];
  if (w.steps.map(s => s.step).join() !== u.routeSteps(c).join()) problems.push("its steps must be every question on the case's route, in the key's order");
  if (!w.steps.every(s => isFilled(s.reason) && cuesOf(c, s.step).length > 0)) problems.push('every step needs a reason and marked words');
  if (!u.ledgerFor(c.outcome, w.hold.neighbour)) problems.push(`${w.hold.neighbour} is not a ledger neighbour of ${c.outcome}`);
  const p = w.hold.prompt;
  if (p.choices.filter(x => x.id === p.answer).length !== 1) problems.push('hold.prompt needs exactly one right choice');
  if (!p.choices.every(x => x.id === p.answer || isFilled(x.note))) problems.push('hold.prompt needs a note on every other choice');
  const like = u.cases[w.impression.resembles];
  if (!(like.name && like.use === 'teach' && like.outcome === c.outcome)) problems.push('impression.resembles must be a named teaching case of the same outcome');
  const first = w.impression.first && u.cases[w.impression.first];
  if (w.impression.first && !(first.name && first.use === 'teach' && first.outcome !== c.outcome)) problems.push('impression.first must be a named teaching case of a different outcome');
  if (isLast && !w.impression.first) problems.push('the last worked card needs impression.first');
  return problems;
}

export const V18 = branchRule('V18', (u, check) => {
  const worked = u.cards.filter(c => c.kind === 'worked');
  const lastQuestion = Math.max(...u.cards.filter(c => c.kind === 'question').map(c => u.pos(c.id)));
  check(worked.length >= 2, `at least two worked cards are required, found ${worked.length}`);
  check(worked.every(c => u.pos(c.id) > lastQuestion), 'every worked card must come after every question card');
  const closing = u.unit.parts.flatMap(p => p.close || []);
  check(worked.every(c => !closing.includes(c.id)), 'every worked card must come before the drill, not in the close');
  if (worked.length === 0) return;
  check(u.cases[worked[0].case].tier === 'clean', 'the first worked case must be clean');
  check(u.cases[worked[worked.length - 1].case].tier === 'misleading', 'the last worked case must be misleading');
  worked.forEach((w, i) => checkEach(check, `card ${w.id}`, workedProblems(u, w, i === worked.length - 1)));
});

/* ---------- V20, V21: checks between teaching steps ---------- */
export const V20 = branchRule('V20', (u, check) => {
  u.cards.forEach((c, i) => {
    if (!['meet', 'question'].includes(c.kind) || c.continues) return;
    const next = u.cards.findIndex((k, j) => j > i && ['meet', 'question', 'worked'].includes(k.kind) && !k.continues);
    check(u.cards.slice(i + 1, next < 0 ? undefined : next).some(k => k.kind === 'check'), `card ${c.id}: no check before the next teaching step`);
  });
});

export const V21 = branchRule('V21', (u, check) => {
  u.cards.forEach((c, i) => {
    const prev = u.cards[i - 1];
    if (!prev || prev.kind !== 'check' || !c.link) return;
    const asked = u.cases[prev.case], step = prev.ask.step, link = joined(c.link);
    const givesAnswer = (asked.route[step] || []).some(id => hasToken(link, 'a', `${step}.${id}`));
    const givesCue = cuesOf(asked, step).some(cue => link.includes(cue));
    check(!givesAnswer && !givesCue, `card ${c.id}: its link gives away the answer of the check before it`);
  });
});

/* ---------- V22, V23, V24 ---------- */
export const V22 = branchRule('V22', (u, check) => {
  const drillIds = u.unit.drill.rungs.flatMap(r => [...u.flat(r).map(i => typeof i === 'string' ? i : i.case), r.demo]).filter(Boolean);
  for (const c of u.cards.filter(k => k.kind === 'refute')) {
    const idea = u.unit.build.wrongIdeas.find(w => w.card === c.id);
    check(c.testedBy.every(id => drillIds.includes(id)), `card ${c.id}: every testedBy id must be a drill item`);
    check(Boolean(idea && idea.source && idea.source.ref), `card ${c.id}: build.wrongIdeas needs a source for it`);
    check(u.pos(c.id) >= 3, `card ${c.id}: a refute card may not be among the first three cards`);
    check(u.unit.status !== 'live' || Boolean(idea && idea.source.verified), `card ${c.id}: the unit is live and its source is not verified`);
  }
});

export const V23 = branchRule('V23', (u, check) => {
  for (const c of u.cards.filter(k => k.kind === 'exception')) {
    const pair = u.ledger(c.ledger).pair;
    check(c.looksLike !== c.is && pair.includes(c.looksLike) && pair.includes(c.is), `card ${c.id}: looksLike and is must be the two outcomes of ${c.ledger}`);
    check(u.cases[c.case].outcome === c.is, `card ${c.id}: its case must have the outcome ${c.is}`);
  }
});

export const V24 = branchRule('V24', (u, check) => {
  u.cards.forEach((c, i) => {
    if (!c.continues) return;
    const prev = u.cards[i - 1];
    check(Boolean(prev) && prev.id === c.continues && prev.kind === c.kind && prev.outcome === c.outcome && prev.step === c.step,
      `card ${c.id}: continues "${c.continues}", which must be the card directly before it, of the same kind and the same outcome or step`);
  });
});

/* ---------- V25, V26, V27: the close, the parts, the links ---------- */
export const V25 = unitRule('V25', (u, check) => {
  const { parts } = u.unit;
  const last = parts[parts.length - 1];
  check(Boolean(last.drill) && parts.filter(p => p.drill).length === 1, 'the last part, and only the last, holds the drill');
  const closing = (last.close || []).map(id => u.card(id).kind);
  const expected = u.meta.action ? ['recap', 'transfer', 'plan'] : ['recap', 'transfer'];
  check(closing.join() === expected.join(), `the unit must close with ${expected.join(', ')}; it closes with ${closing.join(', ') || 'nothing'}`);
  const transfer = u.cards.find(c => c.kind === 'transfer');
  if (transfer) check(u.taught.every(o => transfer.prompts.some(p => p.outcome === o)), 'transfer.prompts must cover every taught outcome');
  u.cards.filter(c => c.kind === 'plan').forEach(c => check(c.optional === true, `card ${c.id}: a plan card must have optional: true`));
});

export const V26 = unitRule('V26', (u, check) => {
  const listed = u.cardOrder;
  checkEach(check, 'parts', [
    ...unique(listed.filter((id, i) => listed.indexOf(id) !== i)).map(id => `card "${id}" is listed more than once`),
    ...u.cardRecords.filter(c => !listed.includes(c.id)).map(c => `card "${c.id}" is in no part`)]);
});

export const V27 = unitRule('V27', (u, check) => {
  u.cards.filter(c => !['orient', 'check'].includes(c.kind)).forEach(c => check(isFilled(c.link), `card ${c.id}: no link line`));
});

/* ---------- V55: every question does work ---------- */
function branchLengthOf(u, code) {
  const branch = Object.values(u.key.branches).find(b => b.some(s => s.code === code));
  return branch ? branch.length : 1;
}

export const V55 = branchRule('V55', (u, check) => {
  for (const s of u.unitSteps()) {
    check(u.unit.ledger.some(l => l.step === s.code), `${s.code}: no look-alike pair is first separated by this question, so it does no work`);
    const decides = s.options.every(o => o.keeps.filter(id => u.taught.includes(id)).length === 1);
    check(branchLengthOf(u, s.code) < 2 || !decides, `${s.code}: every answer keeps exactly one outcome, so the other questions of this branch do no work`);
  }
});

export const RULES_ANATOMY = [V10, V11, V12, V13, V14, V15, V16, V17, V18, V20, V21, V22, V23, V24, V25, V26, V27, V51, V55];

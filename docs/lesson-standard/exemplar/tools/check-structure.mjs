// Section 8 of docs/lesson-standard.md, second half: order and anatomy, cases and feedback, the drill.
import { TOKEN, paras, cuesOf } from './load.mjs';
import { prose } from './check-vocab.mjs';

export function checkStructure({ subject, v, check, cards, cardOrder, allCases }) {
  const { unit, key } = v;
  const taught = unit.teaches.outcomes;
  const pos = id => cardOrder.indexOf(id);
  const at = (kind, f) => cards.findIndex(c => c.kind === kind && f(c));
  const rung = ask => unit.drill.rungs.find(r => r.ask === ask) || { items: [] };
  const flat = r => r.items.flat();
  const caseOf = item => typeof item === 'string' ? v.cases[item] : item.case ? v.cases[item.case] : null;
  const isStory = c => c && c.route;
  const routeCases = flat(rung('route')).map(caseOf).filter(isStory);
  const returns = unit.drill.returns.map(id => v.cases[id]);

  /* V10, V51: the opening card, the lens, the portraits */
  check(cards[0].kind === 'orient' && !!cards[0].map && !!v.key.branches[cards[0].map.branch], 'V10', 'the first card must be orient, with a map of a branch of the key');
  const lens = cards.filter(c => c.kind === 'lens');
  const meets = cards.filter(c => c.kind === 'meet' && !c.continues);
  check(lens.length === 1 && pos(lens[0].id) > at('again', () => true) && (meets.length < 2 || pos(lens[0].id) < pos(meets[1].id)), 'V51', 'exactly one lens card, after the first again card and before the second meet card');

  /* V11 to V14, V33, V39, V44: each outcome's sequence, and its coverage */
  for (const o of taught) {
    const seq = ['meet', 'again', 'portrait'].map(kind => at(kind, c => c.outcome === o));
    const chk = at('check', c => c.after === o);
    check(seq.every(i => i >= 0) && chk >= 0 && seq[0] < seq[1] && seq[1] < seq[2] && seq[2] < chk, 'V11', `${o}: meet, again, portrait, check missing or out of order`);
    check(cards.filter(c => c.kind === 'meet' && c.outcome === o && !c.continues).length === 1, 'V11', `${o}: exactly one meet card starts its chain`);
    const meet = cards[seq[0]];
    if (meet) check(!meet.h && v.cases[meet.case].tier === 'clean' && paras(meet.strip).length >= 2 && v.option(meet.feature.step, meet.feature.option).keeps.includes(o)
      && paras(meet.name).join(' ').includes(`{o:${o}}`), 'V12', `${meet.id}: typed heading, case not clean, short strip, wrong feature, or name not attached`);
    const again = cards[seq[1]];
    if (again) check(v.cases[again.first].outcome === o && v.cases[again.second].outcome === o && v.cases[again.first].setting !== v.cases[again.second].setting, 'V13', `${again.id}: its two cases must share the outcome and differ in setting`);
    const involving = cards.filter(c => ['lookalike', 'exception'].includes(c.kind) && v.ledger(c.ledger).pair.includes(o));
    check(involving.some(c => c.kind === 'lookalike'), 'V14', `${o}: no lookalike card`);
    involving.forEach(c => v.ledger(c.ledger).pair.forEach(x => check(pos(c.id) > at('check', k => k.after === x), 'V14', `${c.id} comes before ${x} has had its check`)));
    const settings = new Set(allCases.filter(c => c.outcome === o).map(c => c.setting));
    check(settings.size >= 3, 'V33', `${o}: cases span only ${settings.size} settings`);
    check(flat(rung('name')).some(i => caseOf(i) && caseOf(i).outcome === o), 'V39', `${o}: never the answer in the name stage`);
    check(routeCases.filter(c => c.outcome === o).length >= 2, 'V39', `${o}: fewer than two whole cases in the route stage`);
    check(flat(rung('piece')).some(i => caseOf(i) && caseOf(i).kind === 'reverse' && caseOf(i).outcome === o), 'V39', `${o}: no reverse item`);
    const need = subject.meta.action ? 4 : 3;
    check(returns.filter(c => c.outcome === o).length >= need, 'V44', `${o}: fewer than ${need} fresh cases for later days`);
    const topics = allCases.filter(c => c.outcome === o && c.topic).map(c => c.topic);
    check(new Set(topics).size === topics.length, 'V52', `${o}: two of its cases share a topic`);
    subject.specimens.filter(s => s.outcome === o).forEach(s => check(!topics.includes(s.topic), 'V52', `specimen ${s.id} shares a topic with a unit case of the same outcome`));
  }
  cards.filter(c => c.kind === 'lookalike').forEach(c => {
    const outs = c.cases.map(id => v.cases[id].outcome).sort().join(), pair = [...v.ledger(c.ledger).pair].sort().join();
    check(outs === pair && c.prompt.kind === 'which' && c.cases.includes(c.prompt.answer), 'V14', `${c.id}: its two cases must be one from each outcome of its ledger entry, with a "which case" prompt`);
  });

  /* V15: the ledger */
  for (const s of v.unitSteps()) for (const opt of s.options) for (const a of opt.keeps) for (const b of opt.keeps) {
    if (a < b) check(!!v.ledgerFor(a, b), 'V15', `no ledger entry for ${a} and ${b}, which "${opt.n}" keeps together`);
  }
  for (const l of unit.ledger) {
    const first = v.unitSteps().find(s => !s.options.some(o => l.pair.every(id => o.keeps.includes(id))));
    check(first && first.code === l.step, 'V15', `${l.id}: step should be ${first && first.code}`);
    check(l.pair.every(id => paras(l.rule).join(' ').includes(`{o:${id}}`)) && !!l.shared && !!l.test && !/\{o:/.test(paras(l.test).join(' ')), 'V15', `${l.id}: needs shared, a rule naming both outcomes by token, and a test with no name in it`);
    const own = cards.filter(c => c.ledger === l.id);
    const via = l.taughtIn && v.cards[l.taughtIn];
    check(own.length > 0 || !!via, 'V15', `${l.id}: no card teaches it`);
    if (via) check(l.pair.every(id => pos(via.id) > at('meet', c => c.outcome === id) && prose(via).some(([, s]) => s.includes(`{o:${id}}`)) || via.outcome === id), 'V15', `${l.id}: its taughtIn card must come after both meet cards and name both outcomes`);
  }
  /* V55: every question does work (K2.2) */
  for (const s of v.unitSteps()) {
    const sole = unit.ledger.some(l => l.step === s.code);
    check(sole, 'V55', `${s.code}: no look-alike pair is first separated by this question, so it does no work`);
    check(v.unitSteps().length === 1 || !s.options.every(o => o.keeps.filter(id => taught.includes(id)).length === 1), 'V55', `${s.code}: every answer keeps exactly one outcome, so the other questions of this branch do no work`);
  }

  /* V16, V18, V20, V21: questions, worked cases, checks between */
  for (const code of unit.teaches.steps) {
    const q = at('question', c => c.step === code && !c.continues), s = v.step(code);
    const next = cards.findIndex((c, i) => i > q && ['question', 'worked'].includes(c.kind) && !c.continues);
    check(q >= 0 && cards.slice(q + 1, next < 0 ? undefined : next).some(c => c.kind === 'check' && c.after === code), 'V16', `${code}: needs a question card followed by its check before the next question or worked card`);
    if (q >= 0) s.options.forEach(opt => check(opt.keeps.some(id => at('meet', c => c.outcome === id) >= 0 && at('meet', c => c.outcome === id) < q), 'V16', `${code}: its card comes before any outcome kept by "${opt.n}" has been met`));
  }
  const worked = cards.filter(c => c.kind === 'worked');
  const lastQuestion = Math.max(...cards.filter(c => c.kind === 'question').map(c => pos(c.id)));
  check(worked.length >= 2 && worked.every(c => pos(c.id) > lastQuestion), 'V18', 'at least two worked cases, after every question card');
  if (worked.length) check(v.cases[worked[0].case].tier === 'clean' && v.cases[worked[worked.length - 1].case].tier === 'misleading', 'V18', 'the first worked case must be clean and the last misleading');
  for (const w of worked) {
    const c = v.cases[w.case], route = v.routeSteps(c);
    check(w.steps.map(s => s.step).join() === route.join() && w.steps.every(s => filled(s.reason) && cuesOf(c, s.step).length), 'V18', `${w.id}: its steps must be every question on the case's route in key order, each with a reason and marked words`);
    check(!!v.ledgerFor(c.outcome, w.hold.neighbour), 'V18', `${w.id}: neighbour is not a ledger neighbour`);
    const like = v.cases[w.impression.resembles], first = w.impression.first && v.cases[w.impression.first];
    check(like && like.name && like.use === 'teach' && like.outcome === c.outcome, 'V18', `${w.id}: must resemble a named teaching case of the same outcome`);
    check(!w.impression.first || (first && first.name && first.outcome !== c.outcome), 'V18', `${w.id}: impression.first must be a named teaching case of a different outcome`);
    check(w !== worked[worked.length - 1] || !!w.impression.first, 'V18', `${w.id}: the last worked case must show a likeness that points the wrong way (impression.first)`);
    const p = w.hold.prompt;
    check(p.kind === 'reason' && p.choices.filter(x => x.id === p.answer).length === 1 && p.choices.every(x => x.id === p.answer || x.note), 'V35', `${w.id}: the hold-back prompt needs one answer and a note for every other choice`);
  }
  cards.forEach((c, i) => { if (['meet', 'question'].includes(c.kind) && !c.continues) {
    const next = cards.findIndex((k, j) => j > i && ['meet', 'question', 'worked'].includes(k.kind) && !k.continues);
    check(cards.slice(i + 1, next < 0 ? undefined : next).some(k => k.kind === 'check'), 'V20', `${c.id}: no check before the next teaching step`);
  } });
  cards.forEach((c, i) => { const prev = cards[i - 1];
    if (prev && prev.kind === 'check' && c.link) {
      const pc = v.cases[prev.case], step = prev.ask.step;
      check(!pc.route[step].some(id => c.link.includes(`{a:${step}.${id}}`)) && !cuesOf(pc, step).some(cue => c.link.includes(cue)), 'V21', `${c.id}: its link gives away the answer of the check before it`);
    } });
  /* V22, V23, V25 to V27 */
  const drillIds = unit.drill.rungs.flatMap(r => [...flat(r).map(i => typeof i === 'string' ? i : i.case), r.demo]).filter(Boolean);
  cards.filter(c => c.kind === 'refute').forEach(c => check(c.testedBy.every(id => drillIds.includes(id)) && unit.build.wrongIdeas.some(w => w.card === c.id && w.source && w.source.ref) && pos(c.id) >= 3
    && (unit.status !== 'live' || unit.build.wrongIdeas.every(w => w.source.verified)), 'V22', `${c.id}: not tested by a drill item, no source, among the first three cards, or live with an unverified source`));
  cards.filter(c => c.kind === 'exception').forEach(c => check(c.looksLike !== c.is && v.ledger(c.ledger).pair.includes(c.looksLike) && v.ledger(c.ledger).pair.includes(c.is) && v.cases[c.case].outcome === c.is, 'V23', `${c.id}: looksLike and is must be the two outcomes of its ledger entry, and its case must be the second`));
  const closing = unit.parts.flatMap(p => p.close || []).map(id => v.cards[id].kind);
  check(closing.join() === (subject.meta.action ? 'recap,transfer,plan' : 'recap,transfer') && unit.parts.findIndex(p => p.drill) === unit.parts.length - 1, 'V25', 'the last part holds the drill and closes with recap and transfer (and plan, only in an action subject)');
  check(taught.every(o => v.cards.transfer.prompts.some(p => p.outcome === o)), 'V25', 'transfer.prompts must cover every taught outcome');
  check(new Set(cardOrder).size === cardOrder.length && cardOrder.length === Object.keys(v.cards).length, 'V26', 'every card must be listed in exactly one part');
  cards.filter(c => !['orient', 'check'].includes(c.kind)).forEach(c => check(filled(c.link), 'V27', `${c.id}: no link line`));

  /* V5, V6, V7: shown before asked; used after taught; nothing named before it is taught */
  const shown = new Set(v.assumedSteps.flatMap(s => [`q:${s.code}`, ...s.options.map(o => `a:${s.code}.${o.id}`)]));
  const printed = new Set(v.assumedSteps.map(s => `q:${s.code}`));     // question wording seen (a meet card or the lens may print it)
  const introduced = new Set(), usedTerms = new Set();
  const need = (token, where) => check(shown.has(token), 'V5', `${where} uses ${token} before a card has taught it`);
  for (const c of cards) {
    if (c.kind === 'term') introduced.add(c.term);
    if (c.kind === 'meet') { printed.add(`q:${c.feature.step}`); shown.add(`o:${c.outcome}`); shown.add(`a:${c.feature.step}.${c.feature.option}`); }
    if (c.kind === 'question') { shown.add(`q:${c.step}`); printed.add(`q:${c.step}`); v.step(c.step).options.forEach(o => shown.add(`a:${c.step}.${o.id}`)); }
    const own = c.case && v.cases[c.case] ? prose({ s: v.cases[c.case].segments, r: v.cases[c.case].reason, n: v.cases[c.case].not }) : [];
    if (c.kind !== 'orient') for (const [path, s] of [...prose(c), ...own]) for (const [, kind, ref] of s.matchAll(TOKEN)) {
      if (kind === 'q') check(printed.has(`q:${ref}`) || c.kind === 'lens', 'V5', `${c.id}${path}: question ${ref} before any card has printed it`);
      if (['t', 'means'].includes(kind)) { check(introduced.has(ref), 'V7', `${c.id}${path}: term ${ref} used before its term card`); if (c.kind !== 'term') usedTerms.add(ref); }
      if (['o', 'needs'].includes(kind)) check(shown.has(`o:${ref}`), 'V7', `${c.id}${path}: ${ref} named before its meet card`);
      if (['a', 'when'].includes(kind)) need(`a:${ref}`, `${c.id}${path}`);
    }
    if (c.kind === 'check' && c.ask.type !== 'phrase') {
      if (c.ask.type === 'step') need(`q:${c.ask.step}`, c.id);
      (c.ask.among || v.step(c.ask.step).options.map(o => o.id)).forEach(id => need(`a:${c.ask.step}.${id}`, c.id));
    }
    if (c.kind === 'lookalike') need(`a:${c.prompt.option}`, c.id);
  }
  [...taught.map(o => `o:${o}`), ...v.unitSteps().flatMap(s => [`q:${s.code}`, ...s.options.map(o => `a:${s.code}.${o.id}`)])].forEach(t => need(t, 'the drill'));
  const practised = [...cards.filter(c => c.kind === 'check').map(c => v.cases[c.case]), ...unit.drill.rungs.flatMap(r => flat(r).map(caseOf)).filter(isStory)];
  taught.forEach(o => check(practised.some(c => c.outcome === o), 'V6', `${o} is never the answer of a check or drill item`));
  v.unitSteps().forEach(s => s.options.forEach(opt => check(practised.some(c => c.route[s.code].includes(opt.id)), 'V6', `${s.code}.${opt.id} is never the right answer of a check or drill item`)));
  const drillText = unit.drill.rungs.flatMap(r => [...flat(r).map(caseOf), v.cases[r.demo]]).filter(Boolean).flatMap(c => prose(c).map(([, s]) => s)).join(' ');
  unit.teaches.terms.forEach(t => check(cards.filter(c => c.kind === 'term' && c.term === t).length === 1 && usedTerms.has(t) && drillText.includes(`{t:${t}}`), 'V6', `term ${t}: needs exactly one term card, a later card that uses it, and a drill item that uses it`));

  /* V30 to V35, V53, V54: cases and feedback */
  const askedOn = new Map();   // case id -> the steps it can be asked on
  const ask = (c, steps) => askedOn.set(c.id, [...new Set([...(askedOn.get(c.id) || []), ...steps])]);
  cards.filter(c => c.kind === 'check').forEach(c => ask(v.cases[c.case], [c.ask.step]));
  flat(rung('name')).map(caseOf).filter(isStory).forEach(c => ask(c, unit.teaches.steps));
  flat(rung('piece')).filter(i => i.step).forEach(i => ask(v.cases[i.case], [i.step]));
  flat(rung('finish')).map(caseOf).filter(isStory).forEach(c => ask(c, unit.teaches.steps));
  [...routeCases, ...returns, ...subject.specimens].forEach(c => ask(c, v.routeSteps(c)));
  for (const c of [...allCases.filter(isStory), ...subject.specimens]) {
    Object.keys(c.cues).forEach(step => cuesOf(c, step).forEach(cue => check(c.text.includes(cue), 'V30', `${c.id}: marked words for ${step} not in text: "${cue}"`)));
    (c.segments || []).forEach(s => check(c.text.includes(s.text), 'V30', `${c.id}: tappable piece not in text: ${s.text}`));
    const steps = askedOn.get(c.id) || [];
    const tapped = cards.some(k => k.kind === 'check' && k.case === c.id && k.ask.type === 'phrase');
    steps.forEach(step => {
      check(cuesOf(c, step).length > 0, 'V30', `${c.id}: asked on ${step} but has no marked words for it`);
      check(c.reason && filled(c.reason[step]) && (tapped || paras(c.reason[step]).join(' ').includes(`{cue:${step}}`)), 'V35', `${c.id}: needs a reason for ${step} that quotes its marked words`);
    });
    if (steps.length && c.use !== 'check') check(!!c.not && c.not.outcome !== c.outcome && !!v.ledgerFor(c.outcome, c.not.outcome), 'V35', `${c.id}: needs a "not" naming a look-alike of its outcome`);
    const live = v.routeSteps(c).reduce((ids, step) => ids.filter(id => c.route[step].every(opt => v.option(step, opt).keeps.includes(id))), key.outcomes.map(o => o.id));
    check(v.routeSteps(c).length === 1 + unit.teaches.steps.length && live.length === 1 && live[0] === c.outcome, 'V31', `${c.id}: its route must cover the first question and this branch's questions, and leave exactly its outcome`);
    (c.also || []).forEach(id => { const step = unit.teaches.steps.find(s => v.step(s).options.some(o => o.id === id));
      check(step && c.route[step].some(right => { const t = v.tieBreak(step, id, right); return t && t.loser === id; }), 'V53', `${c.id}: "also" lists ${id}, which does not lose to its answer by a tie-break in the key`); });
    if (c.echo) check(v.cases[c.echo] && v.cases[c.echo].name && v.cases[c.echo].use === 'teach' && v.cases[c.echo].outcome !== c.outcome, 'V54', `${c.id}: echo must be a named teaching case of a different outcome`);
  }
  cards.filter(c => c.prompt && c.prompt.kind === 'phrase' || (c.kind === 'check' && c.ask.type === 'phrase')).forEach(c => {
    const kase = v.cases[c.second || c.case], answer = c.prompt ? c.prompt.answer : c.ask.answer;
    check(kase.segments && kase.segments.filter(s => s.text.includes(answer)).length === 1 && kase.segments.every(s => s.text.includes(answer) || s.note), 'V30', `${c.id}: exactly one tappable piece must hold the answer, and every other piece needs a note`);
  });
  check(routeCases.some(c => c.echo), 'V54', 'no route-stage case echoes a named teaching case, so the second look is never practised');
  const inCards = new Set(cards.flatMap(c => [c.case, c.first, c.second, ...(c.cases || []), c.impression && c.impression.resembles, c.impression && c.impression.first].filter(Boolean)));
  const inDrill = new Set([...drillIds, ...unit.drill.returns]);
  inDrill.forEach(id => check(!inCards.has(id) && v.cases[id] && ['drill', 'return', 'claim'].includes(v.cases[id].use), 'V32', `${id} is used in practice but is missing, or is a card's case`));
  allCases.forEach(c => check(inCards.has(c.id) || inDrill.has(c.id), 'V32', `${c.id} is used by nothing`));
  const texts = allCases.map(c => c.text).filter(Boolean);
  check(new Set(texts).size === texts.length, 'V32', 'two cases share the same text');
  cards.filter(c => c.case && v.cases[c.case].tier === 'misleading' && v.cases[c.case].outcome).forEach(c => check(pos(c.id) > at('check', k => k.after === v.cases[c.case].outcome), 'V34', `${c.id}: a misleading case before its outcome's check`));

  /* V38 to V43: the drill */
  const order = unit.drill.rungs.map(r => r.ask).join();
  check(order === 'name,piece,finish,route,claim' || order === 'name,piece,finish,route', 'V38', `stages out of order: ${order}`);
  check(['name', 'piece', 'finish', 'route'].every(a => flat(rung(a)).length > 0), 'V38', 'a stage is empty');
  unit.teaches.steps.forEach(code => check(flat(rung('piece')).some(i => i.step === code), 'V39', `${code}: never asked alone in the piece stage`));
  const TIER = ['clean', 'varied', 'misleading'];
  for (const r of unit.drill.rungs.filter(r => ['name', 'finish', 'route'].includes(r.ask))) {
    let band = 0;
    for (const group of r.items) {
      check(Array.isArray(group), 'V40', `stage ${r.ask}: items must be authored in groups`);
      const cs = group.map(caseOf).filter(isStory);
      if (!cs.length) continue;
      check(new Set(cs.map(c => c.tier)).size === 1 && TIER.indexOf(cs[0].tier) >= band, 'V40', `stage ${r.ask}: group ${cs.map(c => c.id)} mixes tiers or comes before an easier group`);
      band = TIER.indexOf(cs[0].tier);
      const reach = new Set([cs[0].id]); let grew = true;
      while (grew) { grew = false; cs.forEach(c => { if (!reach.has(c.id) && cs.some(d => reach.has(d.id) && v.ledgerFor(c.outcome, d.outcome))) { reach.add(c.id); grew = true; } }); }
      check(cs.length >= 2 && reach.size === cs.length, 'V40', `stage ${r.ask}: group ${cs.map(c => c.id)} is not held together by look-alike pairs`);
      if (r.ask !== 'route') cs.forEach(c => check(c.tier !== 'misleading', 'V34', `${c.id}: a misleading case outside the route stage`));
    }
  }
  const earlier = unit.drill.rungs.flatMap(flat).filter(i => i.earlier);
  check(unit.assumes.length === 0 || (earlier.length > 0 && earlier.every(i => unit.assumes.includes(i.earlier) && !i.case)), 'V41', 'a unit that is not the first needs an earlier-unit item naming a unit it assumes, with no fixed case');
  const tells = flat(rung('piece')).filter(i => i.tell);
  check(tells.length > 0 && tells.every(i => cards.some(c => c.ledger === i.tell)), 'V42', 'the piece stage needs a "what do you ask of the case" item for a pair that has a card of its own');
  const claims = rung('claim');
  if (claims.ask) check(!!claims.demo && v.cases[claims.demo] && !flat(claims).includes(claims.demo) && flat(claims).every(id => v.cases[id] && v.cases[id].use === 'claim'), 'V43', 'the claim stage needs a worked claim (demo) that is not also asked, and its items must be claims');
  allCases.filter(c => c.use === 'claim').forEach(c => check((c.ask.type === 'missing' && taught.includes(c.ask.name)) || (c.ask.type === 'option' && v.option(c.ask.step, c.ask.answer)), 'V43', `${c.id}: ask must be "missing" with a taught name, or "option" with a real answer`));
}

const filled = x => x !== undefined && x !== null && x !== '' && !(Array.isArray(x) && x.length === 0);

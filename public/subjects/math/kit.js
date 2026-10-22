// Basic Math: how a problem is put to the learner (lesson standard 3.5, a generator), written once for every lesson (docs/subjects/math/plan.md).
// Every problem follows the subject's way of thinking (docs/research/math.md, "The way of thinking"): say what is asked and what is given; a rough
// answer from friendly numbers, typed first with no calculator; the kind of problem and its picture; the exact answer on the calculator, and a look
// back at the rough answer, the unit and the direction. So every problem has the same steps, in that order, and the same two typed answers, and a
// group of questions that leaves the last step or two to the learner (`leave`) fades them in that order. It makes plain data and registers nothing.
//
// spec: { id, strand, kind (the facet), params, make (returns the values, with `ans`: the exact answer), blocks, given: Text, rough?: { working,
//         prompt, frame?, places?, tol?, traps? }, friendly?: Text (a step of its own that makes the numbers friendly, before the rough answer),
//         setup?: Text (the kind and its picture), exact: { working, prompt, frame?, places?, unit?, tol, traps?, calc? },
//         then?: [{ id, does, working, ask }] (asks after the exact one, each with its step). With no `rough`, there is no rough answer:
//         a whole-number problem whose answer the head finds exactly (lesson 12's groups and packs, lesson 13's counts).
//         first?: { does, working, ask } (a number found first, after the rough answer and before the exact one: lesson 13's count of
//         positives, lesson 15's two steps), reason, deciding?, figure?, asks0?: [ask] (a choice
//         before the estimate, as in "Proportional or not?", with its step `decide: { does, working }`) }
// Every exact answer carries the slip `wild` (more than double or less than half the answer), which a check counts: "none wild" (the plan).
const MATH = (() => {
  const money = (value, places = 2) => '$' + value.toLocaleString('en-US', { minimumFractionDigits: places, maximumFractionDigits: places });
  const usd = cents => money(cents / 100);                                  // whole cents, as "$1,234.56"
  const dollars = value => money(value, 0);                                  // whole dollars, as "$3,500"
  const num = (value, places = 2) => value.toLocaleString('en-US', { maximumFractionDigits: places });   // "1,234.5"
  const cents = value => Math.round(value * 100) / 100;                      // a dollar amount kept to the cent
  const sum = list => list.reduce((a, b) => a + b, 0);
  // `count` names from a list in an order the start and the stride fix (a stride that shares no factor with the list's length repeats none)
  const pickNames = (list, pick, count) => Array.from({ length: count }, (_, k) => list[(pick('start') + k * pick('stride')) % list.length]);
  const NAME_PARAMS = { start: [0, 11, 1], stride: [1, 5, 7, 11] };

  const STEP = {
    given: 'Say what is asked and what is given.',
    friendly: 'Make the numbers friendly.',
    rough: 'Make a rough answer in your head.',
    setup: 'Name the kind of problem and draw it.',
    exact: 'Work it out exactly on the calculator, then look back.'
  };
  // The one rule for a rough answer, taught in lessons 1 and 2 and kept in every lesson: it is right within about a fifth of the exact one
  // (research M21: scored by a band). Every worked rough answer is inside it (tests/number-pure.mjs holds it on 400 seeds).
  const ROUGH_TOL = { rel: 0.2 };
  const estimateAsk = r => ({ id: 'est', kind: 'number', prompt: r.prompt, frame: r.frame || '$__', ...(r.unit ? { unit: r.unit } : {}), ...(r.places !== undefined ? { places: r.places } : {}),
    estimate: true, answer: r.answer || 'ans', tol: ROUGH_TOL, ...(r.traps ? { traps: r.traps } : {}) });
  const exactAsk = x => ({ id: 'exact', kind: 'number', prompt: x.prompt, frame: x.frame || '$__', ...(x.places !== undefined ? { places: x.places } : {}),
    ...(x.unit ? { unit: x.unit } : {}), answer: x.answer || 'ans', tol: x.tol, ...(x.traps ? { traps: x.traps } : {}), ...(x.calc ? { calc: x.calc } : {}), wild: 'wild' });

  // A problem of the subject: the generator, its two typed answers and its steps in the order of the way of thinking.
  function problem(spec){
    const steps = [
      { id: 'given', does: STEP.given, working: spec.given },
      ...(spec.decide ? [{ id: 'decide', does: spec.decide.does, working: spec.decide.working, ask: spec.asks0[0].id }] : []),
      ...(spec.friendly ? [{ id: 'friendly', does: STEP.friendly, working: spec.friendly }] : []),
      ...(spec.rough ? [{ id: 'rough', does: STEP.rough, working: spec.rough.working, ask: 'est' }] : []),
      ...(spec.first ? [{ id: 'first', does: spec.first.does, working: spec.first.working, ask: spec.first.ask.id }] : []),
      ...(spec.setup ? [{ id: 'setup', does: STEP.setup, working: spec.setup }] : []),
      { id: 'exact', does: STEP.exact, working: spec.exact.working, ask: 'exact' },
      ...(spec.then || []).map(t => ({ id: t.id, does: t.does, working: t.working, ask: t.ask.id }))];
    const asks = [...(spec.asks0 || []), ...(spec.rough ? [estimateAsk(spec.rough)] : []), ...(spec.first ? [spec.first.ask] : []), exactAsk(spec.exact), ...(spec.then || []).map(t => t.ask)];
    return { id: spec.id, strand: spec.strand, facets: { kind: spec.kind }, params: spec.params, make: spec.make, blocks: spec.blocks, asks, steps,
      reason: spec.reason, ...(spec.deciding ? { deciding: spec.deciding } : {}), ...(spec.figure ? { figure: spec.figure } : {}) };
  }
  // A refresher question (Unit 6, plan.md; research M32): a school fact brought back, not the whole way of working. Its steps: say what is asked
  // and what is given; bring back the fact; a choice where choosing is the fact (is it prime, does the order matter); the calculator and a look-back
  // (M6). One typed exact answer, with `wild`, and no rough answer: the learner has met the fact before (M32), and the look-back holds the check.
  // spec: { id, strand, kind, params, make, blocks, given, fact, asks0?: [choose], decide?: { does, working }, exact: { working, prompt, frame?,
  //         places?, unit?, tol, traps?, calc?, does? }, then?: [{ id, does, working, ask }], reason, figure? }
  const FACT = 'Bring back the fact.';
  function reminder(spec){
    const steps = [
      { id: 'given', does: STEP.given, working: spec.given },
      { id: 'fact', does: FACT, working: spec.fact },
      ...(spec.decide ? [{ id: 'decide', does: spec.decide.does, working: spec.decide.working, ask: spec.asks0[0].id }] : []),
      { id: 'exact', does: spec.exact.does || STEP.exact, working: spec.exact.working, ask: 'exact' },
      ...(spec.then || []).map(t => ({ id: t.id, does: t.does, working: t.working, ask: t.ask.id }))];
    const asks = [...(spec.asks0 || []), exactAsk({ frame: '__', ...spec.exact }), ...(spec.then || []).map(t => t.ask)];
    return { id: spec.id, strand: spec.strand, facets: { kind: spec.kind }, params: spec.params, make: spec.make, blocks: spec.blocks, asks, steps,
      reason: spec.reason, ...(spec.figure ? { figure: spec.figure } : {}) };
  }
  // The same problem with the rough answer alone, for a check of rough answers: the steps after it say what the calculator gives.
  // Its question is asked plainly (`prompt`): a check never names the move to use (research M1, M4: choosing the move is the skill).
  function roughOnly(def, id, check, prompt){
    const at = def.steps.findIndex(s => s.id === 'rough');
    return { ...def, id, asks: def.asks.filter(a => a.id === 'est').map(a => ({ ...a, prompt })),
      steps: [...def.steps.slice(0, at + 1), { id: 'check', does: 'Check it on a calculator.', working: check }] };
  }

  // A worked problem: the generator made once with the numbers given, as a fixed question (a worked step names a fixed question). The text is filled
  // as the app fills a made question, so the worked problem reads exactly as the ones that follow it.
  const SLOT = /\{([A-Za-z][A-Za-z0-9]*)\}/g;
  const fill = (value, values) => typeof value === 'string' ? value.replace(SLOT, (_, k) => {
    if(!(k in values)) throw new Error(`math worked problem: no value for {${k}}`);
    return String(values[k]);
  }) : Array.isArray(value) ? value.map(x => fill(x, values)) : value && typeof value === 'object' ? Object.fromEntries(Object.entries(value).map(([k, x]) => [k, fill(x, values)])) : value;
  function worked(def, id, params, patch = {}){
    const values = { ...params, ...def.make(name => { if(!(name in params)) throw new Error(`math worked problem ${id}: no parameter ${name}`); return params[name]; }) };
    const { params: _p, make: _m, ...rest } = def;
    const item = fill(rest, values);
    // a fixed question names its numbers outright: an answer or a trap given by a value's name becomes the number
    const numberOf = v => typeof v === 'string' && v in values ? values[v] : v;
    // the rough answer is shown as the rough answer the working reaches ("about $28"), not the exact one: a rough answer need not be exact
    const roughShown = a => a.estimate && typeof values.rough === 'number' ? { answer: values.rough, ...(Number.isInteger(values.rough) ? { places: 0 } : {}) } : {};
    const asks = item.asks.map(a => a.kind !== 'number' ? a : { ...a, answer: numberOf(a.answer), ...(a.traps ? { traps: a.traps.map(t => ({ ...t, value: numberOf(t.value) })) } : {}), ...roughShown(a) });
    return { ...item, id, asks, ...patch };
  }

  // The buttons to press on the calculator, in order, as the working prints them: numbers as typed, then the faces of the buttons
  // ('*' ×, '/' ÷, '-' −, 'pow' xʸ, 'sqrt' √, 'sin', 'cos', 'tan', 'M+', 'MR', '='). The calculator works left to right with no brackets; a generator returns the
  // printed buttons as a value named `keys…` beside what they give (`keys…Gives`), and tests/number-pure.mjs presses them to check it.
  const FACE = { '*': '×', '/': '÷', '-': '−', '+': '+', pow: 'xʸ', sqrt: '√' };   // sin, cos and tan print as themselves
  const keys = list => list.map(k => typeof k === 'number' ? String(k) : FACE[k] || k).join(' ');
  return Object.freeze({ money, usd, dollars, num, cents, sum, pickNames, NAME_PARAMS, STEP, problem, reminder, roughOnly, worked, keys });
})();

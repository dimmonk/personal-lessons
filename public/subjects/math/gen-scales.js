// Math, lesson 4 "Proportional or not?": look-alike pairs (docs/research/math.md, M7: using the proportional method where it does not hold grows
// with schooling; learning-science P12, pairs side by side). Each story comes in two forms that differ in one line: every part of the price grows
// with the amount (it scales), or one part is paid once whatever the amount (it does not). The one rule, the same in every question: look for a part
// that is paid once whatever the amount; if there is none, it scales; if there is one, scale only the part that grows and add the fixed part.
// Every story is a price, so "it scales" is a fact of the price list, not a rule of thumb. The learner says which (a choice, its options in an
// order fixed by the seed), makes a rough answer, then types the exact one (MATH.problem with a choice first). The picture is a table of two rows
// from 0 up, so the fixed part shows as the cost of none.
(() => {
  const { usd, num, problem } = MATH;
  const cents = x => Math.round(x * 100);
  const TIMES = { 2: 'double', 3: 'three times' };

  // one story in its two forms. spec: { id, unit (what grows, plural), unitOne, fixedName (the part paid once, as on the list), params (f, r, a, k),
  //   title, fixedRow: [label, value with the part, value with none], otherRow: [label, value] (shown in its place on a list that hides it),
  //   rows (the list's other rows), last (the line that shows the earlier cost, on the document, so the choice can be made from it), prompt, given }
  function pair(spec){
    const one = fee => problem({
      id: `${spec.id}-${fee ? 'fee' : 'rate'}`, strand: 'scales', kind: fee ? 'fixed-part' : 'scales',
      params: { ...spec.params, card: ['shown', 'hidden'] },
      make: pick => {
        const f = fee ? pick('f') : 0, r = pick('r'), a = pick('a'), k = pick('k'), b = a * k, costA = Math.round((f + r * a) * 100) / 100, ans = Math.round((f + r * b) * 100) / 100;
        const rough = fee ? Math.round(f) + Math.round(r * 10) / 10 * b : Math.round(costA) * k;
        return { fText: usd(cents(pick('f'))), rText: usd(cents(r)), a, b, kWord: TIMES[k], KWord: TIMES[k][0].toUpperCase() + TIMES[k].slice(1), costText: usd(cents(costA)), ans, ansText: usd(cents(ans)), zeroText: usd(cents(f)),
          rough, roughText: usd(cents(rough)), rFriendly: usd(cents(Math.round(r * 10) / 10)), fRound: usd(cents(Math.round(f))), costRound: usd(cents(Math.round(costA))),
          growPart: usd(cents(r * b)), scaledAll: Math.round(costA * k * 100) / 100, added: Math.round((costA + b - a) * 100) / 100,
          // the fixed part on the price list, or (card 'hidden') a list that does not show it, so it is found by checking the first cost
          fixLabel: pick('card') === 'shown' ? spec.fixedRow[0] : spec.otherRow[0],
          fixValue: pick('card') === 'shown' ? (fee ? spec.fixedRow[1].replace('{fText}', usd(cents(pick('f')))) : spec.fixedRow[2]) : spec.otherRow[1],
          hiddenNote: pick('card') === 'shown' ? '' : fee
            ? `The price list does not show a part paid once, so check: ${a} × ${usd(cents(r))} = ${usd(cents(r * a))}, but it cost ${usd(cents(costA))}. The ${usd(cents(f))} more is paid once. `
            : `The price list shows only the ${spec.perName}, so check: ${a} × ${usd(cents(r))} = ${usd(cents(costA))}, the whole cost. ` };
      },
      blocks: [{ kind: 'document', form: 'offer', title: spec.title, rows: [{ id: 'fixed', cells: ['{fixLabel}', '{fixValue}'] }, ...spec.rows, { id: 'last', cells: [spec.last, '{costText}'], strong: true }] }],
      asks0: [{ id: 'scales', kind: 'choose', prompt: `Does the cost scale with the ${spec.unit}?`, from: 'scale', right: fee ? 'fixed' : 'scales', shuffle: true,
        slips: fee ? { scales: 'scaled-fixed' } : { fixed: 'fixed-not-there' },
        then: fee ? { scales: `The ${spec.fixedName}, {fText}, is paid once, whatever the amount: ${'{kWord}'} the ${spec.unit} is not ${'{kWord}'} the cost.`,
          fixed: `The ${spec.fixedName}, {fText}, is the same whatever the ${spec.unit}; only the ${spec.perName} grows.` }
          : { fixed: `Nothing here is paid once: every dollar comes from the ${spec.perName}, so it scales.`, scales: `Every dollar comes from the ${spec.perName}, and nothing is paid once, so it scales.` } }],
      decide: { does: 'Look for a part paid once, whatever the amount.', working: fee ? `{hiddenNote}The ${spec.fixedName}, {fText}, is paid once whatever the ${spec.unit}, so it does not scale: only the ${spec.perName} grows.`
        : `{hiddenNote}Every dollar comes from the ${spec.perName}, {rText} for each ${spec.unitOne}, and nothing is paid once, so it scales.` },
      given: spec.given,
      rough: { working: fee ? `About {fRound} once, plus about {rFriendly} × {b}: about {roughText}.` : `{KWord} the ${spec.unit}, so {kWord} the cost: about {kWord} {costRound}, {roughText}.`,
        prompt: `${spec.prompt} First, about how much?`, places: 2 },
      setup: fee ? `Two parts, in a table from 0 up: the ${spec.fixedName}, {fText}, paid once (the cost of 0 ${spec.unit}), and {rText} for each ${spec.unitOne}, which grows.`
        : `Per one, in a table from 0 up: {costText} ÷ {a} = {rText} for each ${spec.unitOne}, and 0 ${spec.unit} cost nothing.`,
      exact: { working: fee ? `On the calculator: {rText} × {b} = {growPart}, then + {fText} = {ansText}. Look back: less than {kWord} {costText}, because the ${spec.fixedName} is paid once.`
        : `On the calculator: {rText} × {b} = {ansText}. Look back: {kWord} the ${spec.unit}, so {kWord} {costText}.`,
        prompt: 'And exactly, to the cent?', places: 2, tol: { round: 0.01 },
        traps: fee ? [{ slip: 'scaled-fixed', value: 'scaledAll', then: `That scales the whole cost, the ${spec.fixedName} too. Only the ${spec.perName} grows.` }]
          : [{ slip: 'added-difference', value: 'added', then: 'That adds the difference. The cost scales: per one, then times how many.' }] },
      figure: { kind: 'figure', type: 'rate-table', data: { top: { label: spec.unitLabel, cells: ['0', '{a}', '{b}'] }, bottom: { label: 'Cost', cells: ['{zeroText}', '{costText}', '{ansText}'] } } },
      reason: fee ? `The ${spec.fixedName}, {fText}, is paid once; only the ${spec.perName} grows. {rText} × {b} plus {fText} is {ansText}.`
        : `Every dollar comes from the ${spec.perName}: {rText} × {b} = {ansText}.`
    });
    return [one(false), one(true)];
  }

  const taxi = pair({
    id: 'g-taxi', unit: 'miles', unitOne: 'mile', unitLabel: 'Miles', fixedName: 'charge to start', perName: 'per-mile charge',
    params: { f: [3, 5, 0.5], r: [2, 3, 0.25], a: [2, 6, 1], k: [2, 3] }, title: 'City Cab fares',
    fixedRow: ['To start the ride', '{fText}', 'no charge'], otherRow: ['Pay by', 'card or cash'], rows: [{ id: 'mile', cells: ['Each mile', '{rText}'] }, { id: 'tip', cells: ['Tips', 'up to you'] }],
    given: 'Asked: the fare for {b} miles. Given: your last ride, {a} miles for {costText}, and the fare card. The other lines do not matter.',
    last: 'Your last ride, {a} miles', prompt: 'What will a ride of {b} miles cost?'
  });
  const phone = pair({
    id: 'g-phone', unit: 'data', unitOne: 'GB', unitLabel: 'GB', fixedName: 'monthly charge', perName: 'per-GB charge',
    params: { f: [10, 25, 5], r: [3, 8, 1], a: [2, 6, 1], k: [2, 3] }, title: 'Your phone plan',
    fixedRow: ['Each month', '{fText}', 'no charge'], otherRow: ['Calls and texts', 'included'], rows: [{ id: 'gb', cells: ['Each GB of data', '{rText}'] }, { id: 'hotspot', cells: ['Hotspot', 'allowed'] }],
    given: 'Asked: this month’s bill for {b} GB. Given: last month, {a} GB for {costText}, and the plan. The other lines do not matter.',
    last: 'Last month’s bill, {a} GB', prompt: 'This month you use {b} GB. What will you pay?'
  });
  const gym = pair({
    id: 'g-gym', unit: 'months', unitOne: 'month', unitLabel: 'Months', fixedName: 'joining fee', perName: 'monthly charge',
    params: { f: [25, 75, 25], r: [20, 45, 5], a: [2, 4, 1], k: [2, 3] }, title: 'Riverside Gym',
    fixedRow: ['Joining fee', '{fText}, paid once', 'none'], otherRow: ['Open', '5 a.m. to 11 p.m.'], rows: [{ id: 'month', cells: ['Each month', '{rText}'] }, { id: 'towels', cells: ['Towels', 'free'] }],
    given: 'Asked: the cost of {b} months. Given: your first {a} months, {costText} in all, and the price list. The other lines do not matter.',
    last: 'You paid for your first {a} months, in all', prompt: 'What would {b} months from joining cost, in all?'
  });
  const truck = pair({
    id: 'g-truck', unit: 'miles', unitOne: 'mile', unitLabel: 'Miles', fixedName: 'charge for the day', perName: 'per-mile charge',
    params: { f: [19.95, 39.95, 10], r: [0.59, 0.79, 0.05], a: [20, 60, 10], k: [2, 3] }, title: 'Moving truck rental',
    fixedRow: ['For the day', '{fText}', 'no charge'], otherRow: ['Truck', '15 feet long'], rows: [{ id: 'mile', cells: ['Each mile', '{rText}'] }, { id: 'fuel', cells: ['Return it', 'with the tank as you got it'] }],
    given: 'Asked: the cost of a move of {b} miles. Given: your last move, {a} miles for {costText}, and the price list. The other lines do not matter.',
    last: 'Your last move, {a} miles', prompt: 'What will a move of {b} miles cost?'
  });
  // a story the practice never shows, for the check
  const beans = pair({
    id: 'g-beans', unit: 'pounds', unitOne: 'pound', unitLabel: 'Pounds', fixedName: 'shipping charge', perName: 'per-pound price',
    params: { f: [5.95, 8.95, 1], r: [9, 16, 1], a: [2, 4, 1], k: [2, 3] }, title: 'Hilltop Coffee, beans by mail',
    fixedRow: ['Shipping, any size order', '{fText}', 'free'], otherRow: ['Roasted', 'Mondays'], rows: [{ id: 'lb', cells: ['Each pound of beans', '{rText}'] }, { id: 'grind', cells: ['Ground or whole', 'your choice'] }],
    given: 'Asked: the cost of {b} pounds. Given: your last order, {a} pounds for {costText}, and the price list. The other lines do not matter.',
    last: 'Your last order, {a} pounds', prompt: 'What will {b} pounds cost?'
  });

  FC.gen('math', [...taxi, ...phone, ...gym, ...truck, ...beans]);
  // the worked problem: a cab with a charge to start, 4 miles and then 8
  FC.items('math', [MATH.worked(taxi[1], 'w-taxi', { f: 3.5, r: 2.5, a: 4, k: 2, card: 'shown' })]);
})();

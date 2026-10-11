// Wealth, lesson 2: What it costs a year, in dollars (part 2). The pilot (docs/subjects/wealth/design.md, gate 5). The rule, a worked account,
// one with the last steps left to the learner, two alone (one to leave), the same step on the learner's own accounts (the sheet first when it is
// empty, then a change made now or dated), and the check of part 2: three new accounts, cost within a tenth and change or leave right on all three.
FC.lesson('wealth', {
  id: 'l2', part: '2', title: 'What it costs a year, in dollars', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-10', change: 'First version, built as the pilot of Wealth under the practice engine. Not tried on a phone yet.' }],
  why: [
    'A fund’s cost is a small-looking percent. In dollars it is not small: 0.95% of $38,400 is $364.80 every year, whether the fund did well or badly.',
    'Here you read a fee sheet, turn the percents into dollars, and decide: change a fund, or leave it alone. Then you do the same on your own accounts.'
  ],
  flow: [
    { title: 'The rule',
      show: [
        { kind: 'prose', text: [
          'Every fund takes a yearly cost, written as a percent of what you hold. To get dollars: what you hold × the percent ÷ 100. Then add any fee the plan takes on top.',
          'Change a fund only when another fund of the same kind, on the same list, costs less. Leave it alone when nothing of its kind costs less: switching only costs you time.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“Pick the cheapest fund on the list.”',
          'Pick the cheapest of the same kind. A bond fund costs less than a stock fund, but it holds something else, so it is not a swap.'] }
      ] },
    { worked: 'w-statement' },
    { set: { items: [{ gen: 'g-cost-leave', n: 1 }], order: 'listed', support: { leave: 2 } } },
    { set: { items: [{ gen: 'g-cost-change', n: 1 }, { gen: 'g-cost-leave', n: 1 }], order: 'shuffle' } },
    { own: 'sheet', model: 'w-statement' }
  ],
  check: {
    items: [{ gen: 'g-cost-change', n: 2 }, { gen: 'g-cost-leave', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [
      { ask: 'cost', right: { min: 3 }, of: 'what the account costs a year, to within a tenth' },
      { ask: 'call', right: { min: 3 }, of: 'change it or leave it' },
      { ask: 'call', where: { call: 'leave' }, wrong: { max: 0 } },
      { ask: 'switch', wrong: { max: 0 }, of: 'the fund to switch to' }]
  }
});

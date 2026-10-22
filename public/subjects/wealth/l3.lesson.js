// Wealth, lesson 3: What it costs a year, in dollars (part 3, unit B). The pilot, moved from part 2 when the plan grew to twelve parts
// (docs/subjects/wealth/plan.md, lesson 3; research W6 to W12). The rule, a worked account, one with the last steps left to the learner, two alone
// (one to leave) mixed with the questions of lessons 1 and 2 (P22, R9), the same step on the learner's own accounts (the sheet first when it is
// empty, then a change made now or dated), and the check: three new accounts, cost within a dollar and change or leave right on all three.
FC.lesson('wealth', {
  id: 'l3', part: '3', title: 'What it costs a year, in dollars', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'The pilot (first built 2026-10-10 as lesson 2) moved to part 3 of the twelve-part plan; its second group mixes in questions of lessons 1 and 2. Fixed after its first two reviews: the papers’ own words (expense ratio, administrative fee), fund names that do not tell the cost, the costly fund either the stock or the bond fund, dollars to within a dollar, a switch taxed in a brokerage account. Not tried on a phone yet.' }],
  why: [
    'A fund’s cost is a small-looking percent. In dollars it is not small: 0.95% of $38,400 is $364.80 every year, whether the fund did well or badly.',
    'Here you read a fee sheet, turn the percents into dollars, and decide: change a fund, or leave it alone. Then you do the same on your own accounts.'
  ],
  flow: [
    { title: 'The rule',
      show: [
        { kind: 'prose', text: [
          'Every fund takes a yearly cost, a percent of what you hold. Fee sheets call it the expense ratio. To get dollars: what you hold × the percent ÷ 100. Then add the plan’s administrative fee, which the fee sheet and your quarterly statement show.',
          'Change a fund only when another fund of the same kind, on the same list, costs less: switch to that one. Leave it alone when nothing of its kind costs less. A fund’s name does not tell you its cost; the fee sheet does.',
          'Inside a 401(k) or an IRA, a switch is not taxed. In a brokerage account, selling a fund at a gain is taxed, and that tax weighs against the switch.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“Pick the cheapest fund on the list.”',
          'Pick the cheapest of the same kind. A bond fund costs less than a stock fund, but it holds something else, so it is not a swap.'] }
      ] },
    { worked: 'w-statement' },
    { set: { items: [{ gen: 'g-cost-leave', n: 1 }], order: 'listed', support: { leave: 2 } } },
    { set: { items: [{ gen: 'g-cost-change', n: 1 }, { gen: 'g-cost-leave', n: 1 }], order: 'shuffle', mix: { from: ['l1', 'l2'], share: 0.34 } } },
    { own: 'sheet', model: 'w-statement', work: 'cost' }
  ],
  check: {
    items: [{ gen: 'g-cost-change', n: 2 }, { gen: 'g-cost-leave', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [
      { ask: 'cost', right: { min: 3 }, of: 'what the account costs a year, to within a dollar' },
      { ask: 'call', right: { min: 3 }, of: 'change it or leave it' },
      { ask: 'call', where: { call: 'leave' }, wrong: { max: 0 } },
      { ask: 'switch', wrong: { max: 0 }, of: 'the fund to switch to' }]
  }
});

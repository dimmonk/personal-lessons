// Wealth, lesson 2: What it costs a year, in dollars (part 2). The pilot (docs/subjects/wealth/design.md, gate 5). The rule, a worked account,
// one with the last steps left to the learner, three alone (one to change; one to leave that is an active fund, the cheapest of its category; one
// target-date fund), the same step on the learner's own accounts (the sheet first when it is empty, where the same lines are on real papers, then a
// change made now or dated), and the check of part 2: three new accounts, cost within 10% and change or leave right on all three.
FC.lesson('wealth', {
  id: 'l2', part: '2', title: 'What it costs a year, in dollars', rev: 2, status: 'draft',
  history: [
    { rev: 1, date: '2026-10-10', change: 'First version, built as the pilot of Wealth under the practice engine. Not tried on a phone yet.' },
    { rev: 2, date: '2026-10-11', change: 'After the stand-in learner review: the papers carry the labels real ones do (category, gross and net expense ratio, a fee charged each quarter or a percent of the account); the rule says which number to use, what the same kind is, what to do with a target-date fund, and that a switch in a taxable account can owe tax; the accounts no longer give the answer away by the word "Index" in a name (an active fund can be the cheapest of its kind; one, two or three funds are held); "Find the same lines on yours" says where the lines are on a plan’s papers and a broker’s; the rule says "within 10%".' }],
  why: [
    'A fund’s cost is a small-looking percent. In dollars it is not small: 0.95% of $38,400 is $364.80 every year, whether the fund did well or badly.',
    'Here you read a plan’s papers, turn the percents into dollars, and decide: change a fund, or leave it alone. Then you do the same on your own accounts.'
  ],
  flow: [
    { title: 'The rule',
      show: [
        { kind: 'prose', text: [
          'Every fund takes a yearly cost, its expense ratio, a percent of what you hold. Use the net ratio: it is what you pay now. Dollars: what you hold × the percent ÷ 100.',
          'Add the account’s fee. A fee charged each quarter is four a year. A fee that is a percent of the account, such as an adviser’s, is that percent × the whole balance.',
          'The same kind means the same category on the papers: Large Blend, Large Growth, Target Date 2055. Large Growth is not a swap for Large Blend.',
          'Change a fund only when another in its category costs less. Leave it when it is the cheapest in its category, whatever its name or price. A target-date fund mixes stocks and bonds for you: leave it unless another with its date costs less.',
          'A switch costs no tax inside a 401(k), an IRA or an HSA. In a taxable account, selling can owe tax on gains: check first.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“Pick the cheapest fund on the list.”',
          'Pick the cheapest of the same category. A bond fund costs less than a stock fund, but it holds something else, so it is not a swap.'] }
      ] },
    { worked: 'w-statement' },
    { set: { items: [{ gen: 'g-cost-leave', n: 1 }], order: 'listed', support: { leave: 2 } } },
    { set: { items: [{ gen: 'g-cost-change', n: 1 }, { gen: 'g-cost-active', n: 1 }, { gen: 'g-cost-target', n: 1 }], order: 'shuffle' } },
    { own: 'sheet', model: 'w-statement', where: [
      'A 401(k): the plan’s yearly fee disclosure, or its investments page online. Copy the net expense ratio. The plan’s fee is on it too, often each quarter: times four.',
      'An IRA or a brokerage account: each fund’s page at your broker, the line called expense ratio. The account fee is on your statement. An adviser’s fee is a percent of the account: turn it into dollars before you type it in.'] }
  ],
  check: {
    items: [{ gen: 'g-cost-three', n: 1 }, { gen: 'g-cost-leave', n: 1 }, { gen: 'g-cost-active', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [
      { ask: 'cost', right: { min: 3 }, of: 'what the account costs a year, to within 10%' },
      { ask: 'call', right: { min: 3 }, of: 'change it or leave it' },
      { ask: 'call', where: { call: 'leave' }, wrong: { max: 0 } },
      { ask: 'switch', wrong: { max: 0 }, of: 'the fund to switch to' }]
  }
});

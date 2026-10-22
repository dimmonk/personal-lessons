// Wealth, lesson 11: The spending rate (part 11, unit D). The research's version of "spend a percentage" (research W28, W57): a starting rate
// of the invested accounts, the dated estimate (3.9% for 2026) as the line, the amount raised each year by prices rather than a new share of
// the pot (W27: think in today's dollars), and flexing in a bad first decade (W28). The rule with the novice's "4% of whatever is there each
// year" and "income left out" (P29), a worked household (P10), one with the last steps left (P17), the look-alikes side by side (a high
// spending rate that income brings under the line beside one it does not, P12) with households to leave (W2, P26), a bad first year, mixed
// with earlier lessons (P22). The own step waits for the moment of retiring (trigger `retire`, plan gap 3, W34), and the check.
FC.lesson('wealth', {
  id: 'l11', part: '11', title: 'The spending rate', rev: 1, status: 'live', trigger: 'retire',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan (docs/subjects/wealth/plan.md, lesson 11), and fixed after its first two reviews (docs/subjects/wealth/fixes-l7-12.md). Not tried on a phone yet.' }],
  why: [
    'Ruth stops working next month. She plans to spend $66,000 a year, with about $6,000 of tax on what she takes out; Social Security will pay $24,000, and her accounts the rest.',
    'Take too much in the first years and the money may run out; too little and she lives smaller than she needs to. Here you check the rate against the research.'
  ],
  flow: [
    { title: 'The rule',
      show: [
        { kind: 'prose', text: [
          'A year’s spending, plus the tax on what you take out of a 401(k) or IRA (the research’s rate is before tax), less the income that keeps coming (Social Security, a pension), is what your accounts must give. Divide it by your invested accounts (401(k), IRA, brokerage; the bank savings are your buffer) × 100: your spending rate.',
          'At or under the rate looked up for this year: leave it. Over it: change it, by spending less, working longer, or planning to cut in bad years. The rate lasted 30 years in 90 of 100 tries in the research; it is an estimate that moves each year, not a promise.',
          'Each later year, take last year’s amount raised by the rise in prices, not a new share of what is there. A fall in the first ten years hurts most: spending a bit less for a while lets the money last.'] },
        { kind: 'ref', ref: 'safeRate' },
        { kind: 'prose', tone: 'wrong', text: [
          '“I will take 4% of whatever is there each year, and Social Security is extra.”',
          'Social Security pays part of the year, so the accounts give less; the tax on withdrawals makes them give more. And the amount follows prices, not this year’s balance.'] }
      ] },
    { worked: 'w-rate' },
    { set: { items: [{ gen: 'g-rate-low', n: 1 }], order: 'listed', support: { leave: 2 } } },
    { set: { items: [[{ gen: 'g-rate-high', n: 1 }, { gen: 'g-rate-income', n: 1 }], { gen: 'g-rate-fall', n: 1 }, { gen: 'g-rate-low', n: 1 }],
      order: 'shuffle', mix: { from: ['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l10'], share: 0.2 } } },
    { own: 'sheet', model: 'w-rate', work: 'rate' }
  ],
  check: {
    items: [{ gen: 'g-rate-high', n: 1 }, { gen: 'g-rate-low', n: 1 }, { gen: 'g-rate-income', n: 1 }, { gen: 'g-rate-fall', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [
      { ask: 'rate', right: { min: 2 }, of: 'the spending rate, to the tenth' },
      { ask: 'call', right: { min: 3 }, of: 'change it or leave it' },
      { ask: 'call', where: { call: 'leave' }, wrong: { max: 0 } },
      { ask: 'next', right: { min: 2 }, of: 'next year’s amount' }]
  }
});

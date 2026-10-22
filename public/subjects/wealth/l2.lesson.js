// Wealth, lesson 2: Money you need soon (part 2, unit A). Capacity before nerve: money needed soon has no room for a fall, whatever the
// learner's nerve (research W18); a small buffer matters (W19); cash is what a bank account holds, safe and low-earning, its risk inflation
// (W43); the three and six months and the five years are conventions, said so (W40). The rule says what counts as cash and as a usual month,
// that a bill's money is put aside before the months are counted, and what each call does (P9), with the novice's wrong idea (P29); a worked
// household (P10), one with the last steps left (P17), then the look-alikes (a bill soon in stocks beside one far off and one already in
// savings, P12) and the other two calls, the learner's own spending and bills (plan gap 2), and the check: five new households, two fine.
FC.lesson('wealth', {
  id: 'l2', part: '2', title: 'Money you need soon', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan (docs/subjects/wealth/plan.md, lesson 2), and fixed after its first two reviews: what counts as cash and as a usual month, a bill’s money put aside before the months, a bill already in savings, no claim that cash loses every year. Not tried on a phone yet.' }],
  why: [
    'Leo keeps the $45,000 for his home down payment, due in three years, in a stock fund. He says he stays calm when prices fall.',
    'A planner puts a different question: if the fund is down the year the bill comes, can the bill wait? Here you count cash in months and check the bills ahead.'
  ],
  flow: [
    { title: 'The rule',
      show: [
        { kind: 'prose', text: [
          'Cash is money you can spend within days without selling anything: checking, savings, a money market account at a bank, and cash sitting in a brokerage account. Not stocks, and not a 401(k).',
          'First the bills: money for a big bill due in five years or less stays out of stocks, put aside in savings. Then divide the rest of your cash by a usual month: rent, food, bills, with a yearly bill counted as a twelfth.',
          'Under three months: build it up. Three to six: enough. Past six, with the bills put aside: invest the rest for the long run; cash usually earns less than stocks over the years, and rising prices are its risk. Three, six and five are common rules, not laws.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“I stay calm in a fall, so my down payment can sit in stocks.”',
          'Calm does not move the date. If the fund is down when the bill comes, you sell low or miss the bill.'] }
      ] },
    { worked: 'w-cash' },
    { set: { items: [{ gen: 'g-cash-fine', n: 1 }], order: 'listed', support: { leave: 3 } } },
    { set: { items: [[{ gen: 'g-cash-stocks', n: 1 }, { gen: 'g-cash-fine', n: 1 }], [{ gen: 'g-cash-stocks', n: 1 }, { gen: 'g-cash-held', n: 1 }], { gen: 'g-cash-short', n: 1 }, { gen: 'g-cash-idle', n: 1 }], order: 'shuffle' } },
    { own: 'sheet', model: 'w-cash', work: 'cash' }
  ],
  check: {
    items: [{ gen: 'g-cash-short', n: 1 }, { gen: 'g-cash-stocks', n: 1 }, { gen: 'g-cash-idle', n: 1 }, { gen: 'g-cash-fine', n: 1 }, { gen: 'g-cash-held', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [
      { ask: 'months', right: { min: 4 }, of: 'months of spending, to within a tenth' },
      { ask: 'call', right: { min: 4 }, of: 'what the cash needs' },
      { ask: 'call', where: { call: 'leave' }, wrong: { max: 0 } }]
  }
});

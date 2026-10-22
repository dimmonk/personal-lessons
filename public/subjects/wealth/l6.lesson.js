// Wealth, lesson 6: Your biggest single bet (part 6, unit C). One company's stock across every account against everything (research W13: most
// single stocks do worse than Treasury bills over their life; W14, W14b: employer stock is the usual way it happens and a risk not paid for);
// the 10% line is a judgement call, said so (W40). The rule with the novice's "I know my company" (P29), a worked household (P10), one with the
// last steps left (P17), then the look-alike pair (one company over the line beside a large index fund, P12) mixed with earlier lessons (P22),
// with where to sell first (W38, W49), the learner's own accounts with a sell-down dated (W35), and the check on three new households.
FC.lesson('wealth', {
  id: 'l6', part: '6', title: 'Your biggest single bet', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan (docs/subjects/wealth/plan.md, lesson 6), and fixed after its first two reviews: the total is the accounts on the list, where to sell first, the funds labelled with how many companies they hold, cases near the 10% line. Not tried on a phone yet.' }],
  why: [
    'Owen holds his employer’s stock in his 401(k) and more shares from work in his brokerage account. Each looks small on its own statement.',
    'Added up, they are a quarter of everything he has, riding on the company that also pays him. Here you find your biggest single bet.'
  ],
  flow: [
    { title: 'The rule',
      show: [
        { kind: 'prose', text: [
          'Add up one company’s stock in every account: its stock fund in a 401(k), shares from work, shares you bought. Divide by the total of all your accounts: the whole list (not your home).',
          'Over about 10%, a common rule and not a law: sell down to it. The money from the sale stays on your list, so the total does not change: sell the stock minus 10% of the total. A fund that holds hundreds or thousands of companies is not one bet.',
          'Sell first inside a 401(k) or an IRA, where a sale is not taxed; shares in a brokerage account may owe tax on their gain. One exception: if your employer’s stock in the 401(k) has grown a lot since it was bought, it has a tax rule of its own when it leaves the plan, so check with a tax preparer before selling it there. Otherwise, sell there first.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“I work there, so I know the company is solid.”',
          'More than half of single US stocks have done worse over their life than safe Treasury bills. And if your employer falls, your pay and your savings fall together.'] }
      ] },
    { worked: 'w-share' },
    { set: { items: [{ gen: 'g-share-under', n: 1 }], order: 'listed', support: { leave: 2 } } },
    { set: { items: [[{ gen: 'g-share-over', n: 1 }, { gen: 'g-share-index', n: 1 }], { gen: 'g-share-under', n: 1 }], order: 'shuffle',
      mix: { from: ['l1', 'l2', 'l3', 'l4', 'l5'], share: 0.25 } } },
    { own: 'sheet', model: 'w-share', work: 'share' }
  ],
  check: {
    items: [{ gen: 'g-share-over', n: 1 }, { gen: 'g-share-under', n: 1 }, { gen: 'g-share-index', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [
      { ask: 'share', right: { min: 3 }, of: 'the company’s share of everything, to within a point' },
      { ask: 'call', right: { min: 3 }, of: 'change it or leave it' },
      { ask: 'call', where: { call: 'leave' }, wrong: { max: 0 } },
      { ask: 'from', wrong: { max: 0 }, of: 'where to sell first' }]
  }
});

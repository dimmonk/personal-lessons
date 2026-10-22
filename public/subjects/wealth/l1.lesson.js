// Wealth, lesson 1: Your list, and what could lose it (part 1, unit A). The planner's first step is the whole picture before any change
// (research W1, W2); each account is marked by what protects it: FDIC per person, per bank, per kind of ownership, SIPC per firm, a 401(k)
// neither (its money in a trust apart from the employer), and nothing covers a fall in prices (W22, W41, W42). The rule with what "change it"
// does here and the novice's wrong idea (P29), a worked household (P10), one with the last steps left (P17), then the look-alikes (two banks,
// a joint account) beside the one over the limit (P12) with one to leave alone (W2, P26), the learner's own list (W34, W35), and the check:
// three new households, one over the limit and two look-alikes, everything added up, the fall and the call right.
FC.lesson('wealth', {
  id: 'l1', part: '1', title: 'Your list, and what could lose it', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan (docs/subjects/wealth/plan.md, lesson 1), and fixed after its first two reviews: where the part over the limit goes, a 401(k)’s cover, kinds of ownership, two banks and a joint account as look-alikes. Not tried on a phone yet.' }],
  why: [
    'Maya keeps a bank account, a brokerage account and a 401(k). She checks each one alone and never adds them up.',
    'A careful planner starts with the whole list: every account, what is in it, and what pays if the bank or the firm fails. Nothing gets changed before that list exists.'
  ],
  flow: [
    { title: 'The rule',
      show: [
        { kind: 'prose', text: [
          'List every account with its balance, then add them up. Next to each, write what pays if the bank or the firm itself fails. A bank’s papers say “Member FDIC”. A brokerage firm holds stocks and funds for you, your holdings; its papers say “Member SIPC”.',
          'A 401(k) usually has neither: the law keeps its money in a trust, a pot held for you apart from your employer, so your employer failing does not take it. Its papers say “Not FDIC insured”.',
          'FDIC covers up to its limit for each person, at each bank, for each kind of ownership. Accounts in your name alone at one bank are added up together. A second bank is counted on its own, and so is a joint account: with one other person, it is covered up to the limit for each of you. SIPC works the same way at a firm: your own account, a joint one and an IRA are each covered to its limit, of which $250,000 may be cash.',
          'Over the limit? Change it: move the part over to another bank, or into another kind of ownership. Neither FDIC nor SIPC pays anything when prices fall.'] },
        { kind: 'ref', ref: 'fdic' },
        { kind: 'ref', ref: 'sipc' },
        { kind: 'prose', tone: 'wrong', text: [
          '“My brokerage account is insured, so I cannot lose money in it.”',
          'SIPC pays when the firm fails and your holdings are missing. When prices fall, the loss is yours.'] }
      ] },
    { worked: 'w-list' },
    { set: { items: [{ gen: 'g-list-leave', n: 1 }], order: 'listed', support: { leave: 2 } } },
    { set: { items: [[{ gen: 'g-list-change', n: 1 }, { gen: 'g-list-banks', n: 1 }], { gen: 'g-list-joint', n: 1 }], order: 'shuffle' } },
    { own: 'sheet', model: 'w-list', work: 'list' }
  ],
  check: {
    items: [{ gen: 'g-list-change', n: 1 }, { gen: 'g-list-banks', n: 1 }, { gen: 'g-list-joint', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [
      { ask: 'total', right: { min: 3 }, of: 'everything added up' },
      { ask: 'fall', wrong: { max: 0 }, of: 'who pays, for what happened' },
      { ask: 'call', right: { min: 3 }, of: 'change it or leave it' },
      { ask: 'call', where: { call: 'leave' }, wrong: { max: 0 } },
      { ask: 'fix', wrong: { max: 0 }, of: 'where the part over the limit goes' }]
  }
});

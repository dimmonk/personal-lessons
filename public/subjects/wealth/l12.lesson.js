// Wealth, lesson 12: The whole check, done and repeated (part 12, unit D). The planner's loop run whole: see everything, each line against its
// own lesson's rule, change only what a rule calls for (research W1, W2), and monitoring at a set interval (W3), here once a year. The eight
// lines in the order the subject taught them, a worked household (P10), one with the last lines left (P17), households alone with lines
// to leave and one with nothing to change (W2, P26), mixed with every earlier lesson (P22); the learner's own sheet refreshed and the whole
// work run on it, ending in a change dated with a calendar file that repeats every year (W35, P24: the yearly return is the spaced return);
// the check is the subject's test: new households, and the numbers of earlier lessons on new papers.
FC.lesson('wealth', {
  id: 'l12', part: '12', title: 'The whole check, done and repeated', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan (docs/subjects/wealth/plan.md, lesson 12), and fixed after its first two reviews (docs/subjects/wealth/fixes-l7-12.md). Not tried on a phone yet.' }],
  why: [
    'Nora’s papers arrive across the year: a 401(k) statement, a fee sheet, a bank letter from Canada, an insurance renewal. Each looks fine on its own.',
    'Once a year a planner lays them all out and runs the same check, line by line, changing only what a rule calls for. Here you run it, then put next year’s in your calendar.'
  ],
  flow: [
    { title: 'The yearly check',
      show: [
        { kind: 'prose', text: [
          'Lay out every paper first. Then each line, by the rule you learned for it; change a line only when its rule says so.',
          'Cash: the bank savings in months of spending, the money for a big bill due within five years put aside first: under three, build it up; past six, invest the rest; three to six, leave it. Costs: a fund dearer than another of its kind on the same list, switch. The match: a rate under where it stops, raise it. Where the bonds sit: bonds in a brokerage account while a 401(k) holds stocks, swap them.',
          'One company: its stock over 10% of everything on the list (every account, the bank and Canada too), sell down. The mix: stocks of the invested accounts 5 points or more off the share you chose, rebalance. Cover: a claim could reach more than the limit, raise it. Canada: over $10,000 together at the highest, or a TFSA or a Canadian fund outside an RRSP, book the preparer.',
          'Beneficiary pages: a former spouse, “my estate”, no one, or no backup, fix it. Papers: no will or no durable power of attorney, make one. Near retiring, the spending rate too.',
          'Every other line: leave it. Leaving it is the answer the check gives most often.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“A yearly check means finding something to change.”',
          'The check is done when each line meets its rule. A year with nothing to change is a good result, not a missed one.'] }
      ] },
    { worked: 'w-year' },
    { set: { items: [{ gen: 'g-year', n: 1 }, { gen: 'g-year-clear', n: 1 }], order: 'listed', support: { leave: 3 } } },
    { set: { items: [{ gen: 'g-year', n: 1 }, { gen: 'g-year-clear', n: 1 }],
      order: 'shuffle', mix: { from: ['l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9', 'l10', 'l11'], share: 0.5 } } },
    { own: 'sheet', model: 'w-year', work: 'yearly', repeat: 'year' }
  ],
  check: {
    items: [{ gen: 'g-year', n: 2 }, { gen: 'g-year-clear', n: 1 }, { gen: 'g-cost-change', n: 1 }, { gen: 'g-share-over', n: 1 }, { gen: 'g-mix-over', n: 1 },
      { gen: 'g-match-short', n: 1 }, { gen: 'g-cash-short', n: 1 }, { gen: 'g-place-swap', n: 1 }, { gen: 'g-foreign-tfsa', n: 1 }, { gen: 'g-papers-poa', n: 1 }, { gen: 'g-rate-high', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [
      { right: { min: 9 } },
      { ask: 'year', right: { min: 2 }, of: 'the whole check, every line right' },
      { slip: 'changed-sound', max: 0 },
      { where: { call: 'leave' }, wrong: { max: 0 } }]
  }
});

// Wealth, lesson 7: Mix and drift, and your own hands (part 7, unit C). The rule decided in advance and then left to run (research W15: check
// once or twice a year, act at 5 points, a convention the study calls reasonable, not optimal); trading on news earns less (W16, W17); the
// trade inside a 401(k), where a sale is not taxed (W38, lesson 5). The rule with the novice's "sell before it falls further" (P29), a worked
// household (P10), one with the last steps left (P17), the look-alikes side by side (over beside near, a fall past the band beside one inside
// it, P12) with a target-date fund to leave (W2, P26), mixed with earlier lessons (P22), the learner's own accounts (W34, W35), and the
// check on new households, two to leave alone and one with news.
FC.lesson('wealth', {
  id: 'l7', part: '7', title: 'Mix and drift, and your own hands', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan (docs/subjects/wealth/plan.md, lesson 7), and fixed after its first two reviews (docs/subjects/wealth/fixes-l7-12.md). Not tried on a phone yet.' }],
  why: [
    'Dana wrote down 65% stocks. After two good years her stocks are 74.5% of what she invests, and she never noticed.',
    'Prices move the mix for you. Here you check it against the one you chose, and act only on a line decided in advance, never on the news.'
  ],
  flow: [
    { title: 'The rule',
      show: [
        { kind: 'prose', text: [
          'Add up the stocks in your invested accounts (401(k), IRA, brokerage), then everything in them: stocks, bonds and cash held there. Leave the bank accounts out: they are your buffer. Stocks ÷ everything × 100 is your stock share.',
          'Hold it against the share you chose. Under 5 points off: leave it. 5 points or more: move the gap, points × everything ÷ 100, from the side that is over to the side that is short. Five is a common line, not a law.',
          'Make the trade inside a 401(k) or an IRA, where a sale is not taxed. A target-date fund is one fund of stocks and bonds that re-mixes itself as you age: if it is all you hold, leave it.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“Stocks are falling. I should sell before they fall further.”',
          'Nobody knows which comes first, more fall or the rebound, and the people who trade most earn less. The line decides: after a big fall it moves money into stocks, not out.'] }
      ] },
    { worked: 'w-mix' },
    { set: { items: [{ gen: 'g-mix-over', n: 1 }, { gen: 'g-mix-near', n: 1 }], order: 'listed', support: { leave: 3 } } },
    { set: { items: [[{ gen: 'g-mix-over', n: 1 }, { gen: 'g-mix-near', n: 1 }], [{ gen: 'g-mix-fall', n: 1 }, { gen: 'g-mix-calm', n: 1 }], { gen: 'g-mix-target', n: 1 }],
      order: 'shuffle', mix: { from: ['l1', 'l2', 'l3', 'l4', 'l5', 'l6'], share: 0.2 } } },
    { own: 'sheet', model: 'w-mix', work: 'drift' }
  ],
  check: {
    items: [{ gen: 'g-mix-over', n: 1 }, { gen: 'g-mix-near', n: 1 }, { gen: 'g-mix-fall', n: 1 }, { gen: 'g-mix-calm', n: 1 }, { gen: 'g-mix-target', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [
      { ask: 'share', right: { min: 3 }, of: 'the stock share, to within half a point' },
      { ask: 'call', right: { min: 4 }, of: 'change it or leave it' },
      { ask: 'call', where: { call: 'leave' }, wrong: { max: 0 } },
      { slip: 'sold-on-news', max: 0 }]
  }
});

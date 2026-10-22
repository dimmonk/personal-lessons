// Math, lesson 6: Percents backward and stacked (part 6). Plan: docs/subjects/math/plan.md, Unit 2. Lesson 5's one rule carried on: 100% is
// the amount the percent is of. Backward, that amount is the unknown, so divide by the multiplier; one after another, multiply each in turn; a
// change between two rates is points, and as a percent it is measured from the old rate (M7, M16, M24). Faded steps, then whole problems, then
// mixed with lessons 3 to 5 (M17). Check: 4 of 5.
FC.lesson('math', {
  id: 'l6', part: '6', title: 'Percents backward and stacked', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, from the plan of 2026-10-22.' }],
  why: [
    'You paid $63 after 25% off: what was the price? Adding 25% back gives the wrong answer, and a store raising a price 20% and then taking 20% off does not land where it started.',
    'Here you use the same rule as for a tip or a raise, 100% is the amount the percent is of, when that amount is the one you need.'
  ],
  flow: [
    { title: 'Backward: divide by the multiplier',
      show: [
        { kind: 'prose', text: [
          'You paid $63 after 25% off. The 25% was of the price before, so that price is 100% and you paid 75% of it: paid = before × 0.75. Backward: before = $63 ÷ 0.75 = $84.',
          'A total with 7% tax is 107% of the price before tax, so the price is the total ÷ 1.07.',
          'Rough answers backward: ÷ 0.75 is the price plus a third of it; ÷ 0.80, plus a quarter; ÷ 1.25, less a fifth; ÷ 1.50, less a third. Some wrong ways land close to the right answer (tax taken off the total, percents added): only the exact answer and a look back that multiplies back catch them.',
          'One percent after another: each is of the amount at that moment, so multiply each in turn. Sales tax after a discount is on the sale price, the amount at that moment. 20% up then 20% down is × 1.20 × 0.80 = × 0.96: 4% less than at the start. Never add the percents.',
          'Words can mislead: a sign that says "now $96, 20% more than last year" invites × 1.20, but the 20% was of last year’s price, the unknown whole, so last year was $96 ÷ 1.20 = $80. Decide by which amount is 100%, not by the word.',
          'A rate going from 6% to 7% went up 1 percentage point. As a percent of the old rate, that is 1 ÷ 6 × 100, about 17%.'] },
        { kind: 'figure', type: 'bar', data: { whole: 'The price before the sale, $84, is 100%', parts: [{ label: 'You paid $63', pct: 75 }, { label: '25% off, $21', pct: 25 }] } },
        { kind: 'prose', tone: 'wrong', text: [
          '“25% came off, so add 25% of $63 back: $78.75.”',
          'The 25% was of the bigger price before. Adding it back to the smaller price falls short: divide $63 by 0.75.'] }
      ] },
    { worked: 'w-before' },
    { set: { items: [{ gen: 'g-before-off', n: 1 }, { gen: 'g-before-tax', n: 1 }, { gen: 'g-off-tax', n: 1 }], order: 'listed', support: { leave: 1 } } },
    { set: { items: [{ gen: 'g-up-down', n: 1 }, { gen: 'g-points', n: 1 }, { gen: 'g-before-tax', n: 1 }], order: 'shuffle', support: { leave: 2 } } },
    { set: { items: [{ gen: 'g-before-off', n: 1 }, { gen: 'g-was', n: 1 }, { gen: 'g-off-tax', n: 1 }], order: 'shuffle', support: { estimateCheck: true } } },
    { set: { items: [{ gen: 'g-points', n: 1 }, { gen: 'g-was', n: 1 }, { gen: 'g-up-down', n: 1 }, { gen: 'g-before-tax', n: 1 }], order: 'shuffle', mix: { from: ['l3', 'l4', 'l5'], share: 0.3 } } }
  ],
  check: {
    items: [{ gen: 'g-was', n: 1 }, { gen: 'g-before-tax', n: 1 }, { gen: 'g-off-tax', n: 1 }, { gen: 'g-up-down', n: 1 }, { gen: 'g-points', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 4 } }, { slip: 'wild', max: 0 }]
  }
});

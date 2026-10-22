// Math, lesson 5: Percents forward (part 5). Plan: docs/subjects/math/plan.md, Unit 2. The 100% bar (M15), benchmarks first (M3), then the
// multiplier (M7); the worked tip shows both ways side by side (M15, rec. 4). The one rule: 100% is the amount the percent is of; for a change,
// the amount you started from. Faded steps, then whole problems, then mixed with lessons 3 and 4 (M17). Check: 4 of 5.
FC.lesson('math', {
  id: 'l5', part: '5', title: 'Percents forward', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, from the plan of 2026-10-22.' }],
  why: [
    'A tip, a raise, a sale, a rent increase: each is a percent of something. The mistakes that cost money come from taking the percent of the wrong amount.',
    'Here you find the whole first, make a rough answer from easy percents, then use the calculator.'
  ],
  flow: [
    { title: 'Find the whole, then the percent',
      show: [
        { kind: 'prose', text: [
          'A percent is a part out of 100. The whole, 100%, is the amount the percent is of: the subtotal for a tip, your pay for a share of it, the old rent for a rise.',
          'Rough answers come from easy percents. 10%: move the decimal point one place left, so 10% of $64.50 is about $6.45. 20% is double that; 15% is 10% and half of it again. 1% is a hundredth, so 4.5% is four and a half of the 1%s. 25% is a quarter, 50% is half. A rough answer catches big slips; a small one needs the look back.',
          'Exact answers come from the multiplier: 18% is 0.18, so 18% of $64.50 is $64.50 × 0.18. Up 4% is 104%, so × 1.04; up 4.5% is 104.5%, so × 1.045. 30% off leaves 70%, so × 0.70.',
          'For a small change, a raise or a sale, the rough answer is of the part that changes, the raise or the amount off: the new amount is then the old one plus or minus it. A share as a percent is part ÷ whole × 100. A change as a percent is the change ÷ where you started × 100.'] },
        { kind: 'figure', type: 'bar', data: { whole: 'A $64.50 subtotal is 100%', parts: [{ label: 'An 18% tip', pct: 18 }, { label: 'The rest of the subtotal', pct: 82 }] } },
        { kind: 'prose', tone: 'wrong', text: [
          '“Rent went from $1,000 to $1,100: that is $100 out of $1,100, about 9%.”',
          'A change is measured from where you started: $100 out of $1,000 is 10%.'] }
      ] },
    { worked: 'w-tip' },
    { set: { items: [{ gen: 'g-tip', n: 1 }, { gen: 'g-share-pct', n: 1 }, { gen: 'g-change', n: 1 }], order: 'listed', support: { leave: 1 } } },
    { set: { items: [{ gen: 'g-raise', n: 1 }, { gen: 'g-sale', n: 1 }, { gen: 'g-change', n: 1 }], order: 'shuffle', support: { leave: 2 } } },
    { set: { items: [{ gen: 'g-share-pct', n: 1 }, { gen: 'g-change', n: 1 }, { gen: 'g-tip', n: 1 }], order: 'shuffle', support: { estimateCheck: true } } },
    { set: { items: [{ gen: 'g-change', n: 1 }, { gen: 'g-sale', n: 1 }, { gen: 'g-share-pct', n: 1 }], order: 'shuffle', mix: { from: ['l3', 'l4'], share: 0.3 } } }
  ],
  check: {
    items: [{ gen: 'g-tip', n: 1 }, { gen: 'g-share-pct', n: 1 }, { gen: 'g-change', n: 1 }, { gen: 'g-raise', n: 1 }, { gen: 'g-sale', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 4 } }, { slip: 'wild', max: 0 }]
  }
});

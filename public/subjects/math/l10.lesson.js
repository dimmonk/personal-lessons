// Math, lesson 10: Growth year by year (part 10). Plan: docs/subjects/math/plan.md, Unit 4. Adding the same amount against multiplying by the
// same number, in look-alike pairs (P12) with the year table (M15); the multiplier with the xʸ button, never by feel, and the rule of 72 only as
// the rough check (M9); "how long until" by trying years. Faded steps, then whole problems. Check: 4 of 5, none wild.
FC.lesson('math', {
  id: 'l10', part: '10', title: 'Growth year by year', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, from the plan of 2026-10-22.' }],
  why: [
    'Savings at 5% a year for 10 years grow by more than 50%, and a rent that rises 4% a year doubles in about 18 years. Most people guess low, because they add where it multiplies.',
    'Here you tell the two kinds of growth apart and work each one out.'
  ],
  flow: [
    { title: 'Adding or multiplying',
      show: [
        { kind: 'prose', text: [
          'Two ways an amount grows. Adding $50 each year: $1,000, $1,050, $1,100. Growing 5% a year: $1,000, $1,050, $1,102.50, because each year’s 5% is of a bigger amount.',
          'So first decide which: the same dollar amount each year adds; a percent each year multiplies, by 1.05 for 5%.',
          'Adding: start + the amount × the years. Multiplying: start × the multiplier, once for each year. The xʸ button does the years in one go: $1,000 at 5% for 10 years is 1.05 xʸ 10 × 1000 = 1,628.89.',
          'Rough, for multiplying: it doubles in about 72 ÷ the percent years. At 5%, about every 14 years: $1,000 is about $2,000 after 14 years and $4,000 after 28.',
          'A rate given as APY is the growth in a whole year, with the interest added in.',
          'How many years until it reaches a goal? Rough: a goal a bit more than double takes a bit longer than doubling, about a fifth longer. Then try that number of years on the calculator, and the years next to it: the answer is the first year it gets there.'] },
        { kind: 'figure', type: 'years', data: { columns: ['Year', 'Adds $50', 'Grows 5%'], rows: [['0', '$1,000', '$1,000'], ['1', '$1,050', '$1,050'], ['2', '$1,100', '$1,102.50'], ['3', '$1,150', '$1,157.63'], ['10', '$1,500', '$1,628.89']] } },
        { kind: 'prose', tone: 'wrong', text: [
          '“5% a year for 10 years is 50% more.”',
          'That adds 5% of the start each year. Each year’s 5% is of a bigger amount: 1.05 xʸ 10 is 1.63, 63% more.'] }
      ] },
    { worked: 'w-save' },
    { set: { items: [[{ gen: 'g-save-add', n: 1 }, { gen: 'g-save-pct', n: 1 }], [{ gen: 'g-rent-add', n: 1 }, { gen: 'g-rent-pct', n: 1 }], { gen: 'g-how-long', n: 1 }], order: 'listed', support: { leave: 1 } } },
    { set: { items: [[{ gen: 'g-rent-pct', n: 1 }, { gen: 'g-rent-add', n: 1 }], { gen: 'g-how-long', n: 1 }, { gen: 'g-save-pct', n: 1 }], order: 'shuffle', support: { leave: 2 } } },
    { set: { items: [{ gen: 'g-save-add', n: 1 }, { gen: 'g-how-long', n: 1 }, { gen: 'g-rent-pct', n: 1 }], order: 'shuffle', support: { estimateCheck: true } } },
    { set: { items: [{ gen: 'g-rent-add', n: 1 }, { gen: 'g-save-pct', n: 1 }, { gen: 'g-how-long', n: 1 }, { gen: 'g-rent-pct', n: 1 }], order: 'shuffle' } }
  ],
  check: {
    items: [{ gen: 'g-save-pct', n: 1 }, { gen: 'g-rent-add', n: 1 }, { gen: 'g-how-long', n: 1 }, { gen: 'g-rent-pct', n: 1 }, { gen: 'g-save-add', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 4 }, of: 'questions right in every part: how it grows, the rough answer and the exact one' }, { slip: 'wild', max: 0 }]
  }
});

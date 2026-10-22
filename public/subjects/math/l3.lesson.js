// Math, lesson 3: Rates and scaling (part 3). Plan: docs/subjects/math/plan.md, Unit 2. "Per one" in a table of two rows (M7 unitizing, M15
// drawn), five everyday kinds, the two named errors (the rate upside down, the difference added). The worked steps fade (last step, then the last
// two; M14), then whole problems with the disagree line, then without help. Check: one new problem of each kind, 4 of 5, none wild.
FC.lesson('math', {
  id: 'l3', part: '3', title: 'Rates and scaling', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, from the plan of 2026-10-22.' }],
  why: [
    'A deal says 4 for $5 and you want 7. A recipe serves 4 and you are cooking for 7. A price is in euros. Each time you know one pair of numbers and need another.',
    'One move solves all of them: find the amount for one, then scale.'
  ],
  flow: [
    { title: 'Per one, then scale',
      show: [
        { kind: 'prose', text: [
          'Cans are 4 for $10, and you want 7. Write the two rows: how many, and dollars. One can costs $10 ÷ 4 = $2.50. Seven cost 7 × $2.50 = $17.50.',
          'Check which way the rate goes: dollars for one can is dollars ÷ cans. Cans for one dollar would be the other way up, and that is not what you need.',
          'The same move changes a recipe (cups for one person), money, a map (miles for one inch) and units. A rate for money or units is written with a 1 on one side: 1 US dollar = 0.92 euros; 1 mile = 1.609 kilometers.',
          'The rule for which way: going toward the side with the 1 (euros to dollars, kilometers to miles), divide by the number. Going away from it (dollars to euros, miles to kilometers), multiply. Then use the test that always works: should the answer be bigger or smaller? 0.92 euros make a dollar, so a price in euros is a bit more in dollars.'] },
        { kind: 'figure', type: 'rate-table', data: { top: { label: 'Cans', cells: ['4', '1', '7'] }, bottom: { label: 'Dollars', cells: ['$10.00', '$2.50', '?'] } } },
        { kind: 'prose', tone: 'wrong', text: [
          '“7 cans is 3 more than 4, so it costs $3 more: $13.”',
          'Adding the difference ignores what one can costs. Prices like these scale: find the price of one, then multiply.'] }
      ] },
    { worked: 'w-recipe' },
    { worked: 'w-currency' },
    { set: { items: [{ gen: 'g-deal', n: 1 }, { gen: 'g-currency', n: 1 }, { gen: 'g-units', n: 1 }], order: 'listed', support: { leave: 1 } } },
    { set: { items: [{ gen: 'g-recipe', n: 1 }, { gen: 'g-map', n: 1 }, { gen: 'g-currency', n: 1 }], order: 'shuffle', support: { leave: 2 } } },
    { set: { items: [{ gen: 'g-units', n: 1 }, { gen: 'g-map', n: 1 }, { gen: 'g-deal', n: 1 }], order: 'shuffle', support: { estimateCheck: true } } },
    { set: { items: [{ gen: 'g-deal', n: 1 }, { gen: 'g-recipe', n: 1 }, { gen: 'g-currency', n: 1 }, { gen: 'g-units', n: 1 }], order: 'shuffle' } }
  ],
  check: {
    items: [{ gen: 'g-deal', n: 1 }, { gen: 'g-recipe', n: 1 }, { gen: 'g-currency', n: 1 }, { gen: 'g-map', n: 1 }, { gen: 'g-units', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 4 } }, { slip: 'wild', max: 0 }]
  }
});

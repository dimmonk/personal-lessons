// Math, lesson 11: What a loan costs (part 11). Plan: docs/subjects/math/plan.md, Unit 4. What you pay in all, less what you borrowed; a yearly
// rate (APR) against a month's (÷ 12); a "buy now, pay later" plan as a loan (M9, M1). Faded steps, then whole problems, then mixed with lesson
// 10's (M17). Check: 4 of 5, none wild.
FC.lesson('math', {
  id: 'l11', part: '11', title: 'What a loan costs', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, from the plan of 2026-10-22.' }],
  why: [
    'An ad or a quote for a car loan or a “pay later” plan shows a payment and a rate. What the loan costs is in the papers you sign, in small print.',
    'Here you work it out from the payment, to check the papers and to compare offers before you sign, and you read a yearly rate as a yearly rate.'
  ],
  flow: [
    { title: 'What you pay in all, less what you borrowed',
      show: [
        { kind: 'prose', text: [
          'A loan costs what you pay in all, less what you borrowed. Borrow $20,000 for a car and pay $396.02 a month for 60 months: 396.02 × 60 − 20000 = $3,761.20 is what the loan costs.',
          'The loan papers must print this: the total of payments ($23,761.20) and the finance charge ($3,761.20), the dollars the loan costs you. A quote or an ad does not, so work it out and compare.',
          'Rough: the cost is a small difference of two big numbers, so round the payment only a little, to three figures: $396 × 60 = $23,760, less $20,000: about $3,760. Rounded to $400, it gives $4,000; a $473.65 payment rounded to $500 is $1,600 too much over 60 months.',
          'A rate is for a year (the APR) unless it says otherwise. Charged each month, a month’s rate is about the APR ÷ 12: 24% a year is 2% a month. On $1,500 owed, a month’s interest is 2% of $1,500, $30.',
          '“Buy now, pay later” in monthly payments is a loan too: the payments in all, less the price you could pay today.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“24% a year on $1,500 is $360 for the month.”',
          '$360 is a whole year’s interest. A month is a twelfth of it: $30.'] }
      ] },
    { worked: 'w-car-loan' },
    { set: { items: [{ gen: 'g-car-loan', n: 1 }, { gen: 'g-card-month', n: 1 }, { gen: 'g-pay-later', n: 1 }], order: 'listed', support: { leave: 1 } } },
    { set: { items: [{ gen: 'g-card-month', n: 1 }, { gen: 'g-pay-later', n: 1 }, { gen: 'g-car-loan', n: 1 }], order: 'shuffle', support: { leave: 2 } } },
    { set: { items: [{ gen: 'g-pay-later', n: 1 }, { gen: 'g-car-loan', n: 1 }, { gen: 'g-card-month', n: 1 }], order: 'shuffle', support: { estimateCheck: true } } },
    { set: { items: [{ gen: 'g-car-loan', n: 1 }, { gen: 'g-card-month', n: 1 }, { gen: 'g-pay-later', n: 1 }], order: 'shuffle', mix: { from: ['l10'], share: 0.3 } } }
  ],
  check: {
    items: [{ gen: 'g-car-loan', n: 1 }, { gen: 'g-card-month', n: 1 }, { gen: 'g-pay-later', n: 1 }, { gen: 'g-card-month', n: 1 }, { gen: 'g-pay-later', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 4 } }, { slip: 'wild', max: 0 }]
  }
});

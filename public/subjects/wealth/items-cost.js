// Wealth, lesson 2 "What it costs a year, in dollars": the one worked example, a plan's statement and fee papers with its numbers fixed so the
// working can be read as written. It is the account of g-cost-change (gen-cost.js) with the numbers chosen: the costly fund is the fund held in
// Large Growth. 38,400 × 0.95 ÷ 100 = 364.80; 12,600 × 0.07 ÷ 100 = 8.82; plus the plan's fee, 24 each quarter, 96 a year = 469.62; and
// 38,400 × (0.95 − 0.04) ÷ 100 = 349.44.
FC.items('wealth', [{
  id: 'w-statement', strand: 'cost', facets: { call: 'change' },
  blocks: [
    { kind: 'document', form: 'statement', tab: 'Statement', title: 'Lakeside Manufacturing 401(k)', head: ['Your funds', 'Balance'],
      rows: [{ id: 'f1', cells: ['Summit Growth Fund', '$38,400'] }, { id: 'f2', cells: ['Harbor Bond Fund', '$12,600'] }, { id: 'tot', strong: true, cells: ['Total', '$51,000'] }], },
    { kind: 'document', form: 'fees', tab: 'Fund costs', title: 'Lakeside Manufacturing: what the funds cost', head: ['Fund', 'Category', 'Gross expense ratio', 'Net expense ratio'],
      rows: [{ id: 'm1', cells: ['Ridgeway Growth Fund', 'Large Growth', '1.20%', '1.20%'] }, { id: 'm2', cells: ['Growth 100 Fund', 'Large Growth', '0.04%', '0.04%'] },
        { id: 'm3', cells: ['Summit Growth Fund', 'Large Growth', '1.10%', '0.95%'] }, { id: 'm4', cells: ['Northfield 500 Fund', 'Large Blend', '0.12%', '0.12%'] },
        { id: 'm5', cells: ['Summit Core Equity Fund', 'Large Blend', '0.62%', '0.62%'] }, { id: 'm6', cells: ['Harbor Bond Fund', 'Intermediate Core Bond', '0.07%', '0.07%'] },
        { id: 'm7', cells: ['Total Bond Market Fund', 'Intermediate Core Bond', '0.40%', '0.40%'] }],
      notes: ['The net expense ratio is the yearly cost after any waiver, a percent of what you hold, taken out of the fund every year: 0.95% is $9.50 a year for every $1,000. The gross ratio is the cost before the waiver.'] },
    { kind: 'document', form: 'fees', tab: 'Account fee', title: 'Lakeside Manufacturing: fees on your account', head: ['Fee', 'Taken from', 'Amount'],
      rows: [{ id: 'fee', cells: ['Recordkeeping fee', 'Your balance', '$24 each quarter'] }] }],
  asks: [
    { id: 'rates', kind: 'form', prompt: 'Find the net expense ratio of each fund you hold, and type it in.',
      fields: [
        { id: 'r1', label: 'Summit Growth Fund', type: 'number', frame: '__%', places: 2, answer: 0.95, tol: { abs: 0.005 } },
        { id: 'r2', label: 'Harbor Bond Fund', type: 'number', frame: '__%', places: 2, answer: 0.07, tol: { abs: 0.005 } }] },
    { id: 'cost', kind: 'number', prompt: 'What do your two funds and the account fee cost you in a year, in dollars? Turn each net expense ratio into dollars, then add the account fee in dollars a year.',
      frame: '$__', places: 2, unit: 'a year', answer: 469.62, tol: { rel: 0.1 } },
    { id: 'call', kind: 'choose', prompt: 'Is there anything to change in this account?', from: 'call', right: 'change', slips: { leave: 'overpaid' },
      then: { leave: 'Summit Growth Fund costs 0.95%. Growth 100 Fund is in the same category, Large Growth, and costs 0.04%.' } },
    { id: 'switch', kind: 'choose', prompt: 'Which fund would you switch Summit Growth Fund to?', when: { ask: 'call', is: ['change'] },
      options: [
        { id: 'same', text: 'Growth 100 Fund', ok: true, then: 'It is in the same category, Large Growth, and costs 0.04% instead of 0.95%. On what you hold in Summit Growth Fund, that saves about $349.44 a year.' },
        { id: 'side', text: 'Northfield 500 Fund', slip: 'wrong-kind', then: 'It costs 0.12%, but it is in Large Blend, not Large Growth. A different category holds something different, so switching would change what your money is in, which is a different decision.' },
        { id: 'dearer', text: 'Ridgeway Growth Fund', then: 'It is in the same category, but it costs 1.20%, more than Summit Growth Fund.' }] }],
  steps: [
    { id: 'find', does: 'Find the net expense ratio of each fund you hold.', working: 'Summit Growth Fund costs 0.95%. The gross ratio, 1.10%, is before a waiver. Harbor Bond Fund costs 0.07%.', ask: 'rates' },
    { id: 'dollars', does: 'Turn each cost into dollars, and add the account fee.',
      working: 'Summit Growth Fund: $38,400 × 0.95% = $364.80. Harbor Bond Fund: $12,600 × 0.07% = $8.82. Recordkeeping fee $24 × 4 quarters = $96 a year. Together $469.62 a year.', ask: 'cost' },
    { id: 'compare', does: 'Look in the same category for a fund that costs less.', working: 'Summit Growth Fund is in Large Growth and costs 0.95%. Growth 100 Fund is in the same category and costs 0.04%.', ask: 'call' },
    { id: 'switch', does: 'Name the fund to switch to.', working: 'Growth 100 Fund: the same category, at 0.04%. Northfield 500 Fund costs 0.12%, but it is in Large Blend, so it is not a swap.', ask: 'switch' }],
  deciding: ['f1', 'f2', 'm3', 'm2', 'm6', 'fee'],
  reason: 'Your two funds and the account fee cost $469.62 a year. Summit Growth Fund costs 0.95%, and Growth 100 Fund, in the same category, costs 0.04%, so switching saves about $349.44 a year.'
}]);

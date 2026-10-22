// Wealth, lesson 3 "What it costs a year, in dollars": the one worked example, a 401(k) statement and its fee sheet with the numbers fixed so
// the working can be read as written. It is the account of g-cost-change (gen-cost.js) with the costly stock fund held:
// 38,400 × 0.95 ÷ 100 = 364.80; 12,600 × 0.07 ÷ 100 = 8.82; plus the administrative fee 96 = 469.62; and 38,400 × (0.95 − 0.04) ÷ 100 = 349.44.
FC.items('wealth', [{
  id: 'w-statement', strand: 'cost', facets: { call: 'change' },
  blocks: [
    { kind: 'document', form: 'statement', tab: 'Statement', title: 'Lakeside Manufacturing 401(k)', head: ['Your funds', 'Balance'],
      rows: [{ id: 'f1', cells: ['Summit Large Company Fund', '$38,400'] }, { id: 'f2', cells: ['Keystone Total Bond Fund', '$12,600'] }, { id: 'tot', strong: true, cells: ['Total', '$51,000'] },
        { id: 'qfee', cells: ['Administrative fee taken this quarter', '$24.00'] }],
      notes: ['Balances on the last day of the quarter.'] },
    { kind: 'document', form: 'fees', tab: 'Fee sheet', title: 'Lakeside Manufacturing: what the funds cost', head: ['Fund', 'Kind', 'Expense ratio'],
      rows: [{ id: 'm1', cells: ['Summit Large Company Fund', 'Large US companies', '0.95%'] }, { id: 'm2', cells: ['Crestline 500 Fund', 'Large US companies', '0.04%'] },
        { id: 'm3', cells: ['Pioneer US Growth Fund', 'Large US companies', '1.20%'] }, { id: 'm4', cells: ['Harbor Bond Fund', 'Bonds', '0.60%'] },
        { id: 'm5', cells: ['Keystone Total Bond Fund', 'Bonds', '0.07%'] }, { id: 'm6', cells: ['Bayline Income Fund', 'Bonds', '0.85%'] },
        { id: 'fee', cells: ['Administrative fee', 'Taken from your account', '$96 a year'] }],
      notes: ['The expense ratio is a percent of what you hold in the fund, taken out of it every year.', 'The administrative fee pays for running the plan. It is shown here, and on your quarterly statement.'] }],
  asks: [
    { id: 'rates', kind: 'form', prompt: 'Find the expense ratio of each fund you hold on the fee sheet, and type it in.',
      fields: [
        { id: 'r1', label: 'Summit Large Company Fund', type: 'number', frame: '__%', places: 2, answer: 0.95, tol: { abs: 0.005 } },
        { id: 'r2', label: 'Keystone Total Bond Fund', type: 'number', frame: '__%', places: 2, answer: 0.07, tol: { abs: 0.005 } }] },
    { id: 'cost', kind: 'number', prompt: 'What do your two funds and the administrative fee cost you in a year, in dollars? Turn each expense ratio into dollars, then add the fee.',
      frame: '$__', places: 2, unit: 'a year', answer: 469.62, tol: { abs: 1 } },
    { id: 'call', kind: 'choose', prompt: 'Is there anything to change in this account?', from: 'call', right: 'change', slips: { leave: 'overpaid' },
      then: { leave: 'Summit Large Company Fund costs 0.95%. Crestline 500 Fund holds the same kind of companies for 0.04%.' } },
    { id: 'switch', kind: 'choose', prompt: 'Which fund would you switch Summit Large Company Fund to?', when: { ask: 'call', is: ['change'] },
      options: [
        { id: 'same', text: 'Crestline 500 Fund', ok: true, then: 'It holds the same kind of companies and costs 0.04% instead of 0.95%. On what you hold in Summit Large Company Fund, that saves about $349.44 a year.' },
        { id: 'other', text: 'Keystone Total Bond Fund', slip: 'wrong-kind', then: 'It costs 0.07%, but it holds bonds, not large US companies. It would change what your money is in, which is a different decision.' },
        { id: 'dearer', text: 'Pioneer US Growth Fund', slip: 'overpaid', then: 'It holds the same kind of companies, but it costs 1.20%, more than Summit Large Company Fund.' }] }],
  steps: [
    { id: 'find', does: 'Find each fund’s expense ratio on the fee sheet.', working: 'Summit Large Company Fund costs 0.95%. Keystone Total Bond Fund costs 0.07%.', ask: 'rates' },
    { id: 'dollars', does: 'Turn each cost into dollars, and add the administrative fee.',
      working: 'Summit Large Company Fund: $38,400 × 0.95% = $364.80. Keystone Total Bond Fund: $12,600 × 0.07% = $8.82. Fee $96. Together $469.62 a year.', ask: 'cost' },
    { id: 'compare', does: 'For each fund held, look for one of the same kind that costs less.', working: 'Summit Large Company Fund holds large US companies and costs 0.95%. Crestline 500 Fund holds the same and costs 0.04%. Keystone Total Bond Fund is already the cheapest of the bonds.', ask: 'call' },
    { id: 'switch', does: 'Name the fund to switch to.', working: 'Crestline 500 Fund: the same kind, at 0.04%. Keystone Total Bond Fund holds bonds, so it is not a swap. Inside a 401(k) the switch is not taxed.', ask: 'switch' }],
  deciding: ['f1', 'f2', 'm1', 'm2', 'm5', 'fee'],
  reason: 'Your two funds and the fee cost $469.62 a year. Summit Large Company Fund costs 0.95%, and Crestline 500 Fund holds the same kind of companies for 0.04%, so switching saves about $349.44 a year.'
}]);

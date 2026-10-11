// Wealth, lesson 2 "What it costs a year, in dollars": the one worked example, a plan's statement and fee sheet with its numbers fixed so the
// working can be read as written. It is the account of g-cost-change (gen-cost.js) with the numbers chosen: the costly stock fund is the
// first line of the statement. 38,400 × 0.95 ÷ 100 = 364.80; 12,600 × 0.07 ÷ 100 = 8.82; plus the plan fee 96 = 469.62; and 38,400 × (0.95 − 0.04) ÷ 100 = 349.44.
FC.items('wealth', [{
  id: 'w-statement', strand: 'cost', facets: { call: 'change' },
  blocks: [
    { kind: 'document', form: 'statement', tab: 'Statement', title: 'Lakeside Manufacturing 401(k)', head: ['Your funds', 'Balance'],
      rows: [{ id: 'f1', cells: ['Summit Growth Fund', '$38,400'] }, { id: 'f2', cells: ['Total Bond Index Fund', '$12,600'] }, { id: 'tot', strong: true, cells: ['Total', '$51,000'] }],
      notes: ['Balances on the last day of the quarter.'] },
    { kind: 'document', form: 'fees', tab: 'Fee sheet', title: 'Lakeside Manufacturing: what the funds cost', head: ['Fund', 'Kind', 'Yearly cost'],
      rows: [{ id: 'm1', cells: ['Summit Growth Fund', 'Large US companies', '0.95%'] }, { id: 'm2', cells: ['Index 500 Fund', 'Large US companies', '0.04%'] },
        { id: 'm3', cells: ['Summit Select Growth Fund', 'Large US companies', '1.20%'] }, { id: 'm4', cells: ['Harbor Bond Fund', 'Bonds', '0.60%'] },
        { id: 'm5', cells: ['Total Bond Index Fund', 'Bonds', '0.07%'] }, { id: 'fee', cells: ['Plan fee', 'Taken from your balance', '$96 a year'] }],
      notes: ['A yearly cost is a percent of what you hold in the fund. It is taken out of the fund every year.'] }],
  asks: [
    { id: 'rates', kind: 'form', prompt: 'Find the yearly cost of each fund you hold on the fee sheet, and type it in.',
      fields: [
        { id: 'r1', label: 'Summit Growth Fund', type: 'number', frame: '__%', places: 2, answer: 0.95, tol: { abs: 0.005 } },
        { id: 'r2', label: 'Total Bond Index Fund', type: 'number', frame: '__%', places: 2, answer: 0.07, tol: { abs: 0.005 } }] },
    { id: 'cost', kind: 'number', prompt: 'What do your two funds and the plan fee cost you in a year, in dollars? Turn each yearly cost into dollars, then add the plan fee.',
      frame: '$__', places: 2, unit: 'a year', answer: 469.62, tol: { rel: 0.1 } },
    { id: 'call', kind: 'choose', prompt: 'Is there anything to change in this account?', from: 'call', right: 'change', slips: { leave: 'overpaid' },
      then: { leave: 'Summit Growth Fund costs 0.95%. Index 500 Fund holds the same kind of companies for 0.04%.' } },
    { id: 'switch', kind: 'choose', prompt: 'Which fund would you switch Summit Growth Fund to?', when: { ask: 'call', is: ['change'] },
      options: [
        { id: 'same', text: 'Index 500 Fund', ok: true, then: 'It holds the same kind of companies and costs 0.04% instead of 0.95%. On what you hold in Summit Growth Fund, that saves about $349.44 a year.' },
        { id: 'bonds', text: 'Total Bond Index Fund', slip: 'wrong-kind', then: 'It costs 0.07%, but it holds bonds, not large US companies. It would change what your money is in, which is a different decision.' },
        { id: 'dearer', text: 'Summit Select Growth Fund', then: 'It holds the same kind of companies, but it costs 1.20%, more than Summit Growth Fund.' }] }],
  steps: [
    { id: 'find', does: 'Find each fund’s yearly cost on the fee sheet.', working: 'Summit Growth Fund costs 0.95%. Total Bond Index Fund costs 0.07%.', ask: 'rates' },
    { id: 'dollars', does: 'Turn each cost into dollars, and add the plan fee.',
      working: 'Summit Growth Fund: $38,400 × 0.95% = $364.80. Total Bond Index Fund: $12,600 × 0.07% = $8.82. Plan fee $96. Together $469.62 a year.', ask: 'cost' },
    { id: 'compare', does: 'Look for a fund of the same kind that costs less.', working: 'Summit Growth Fund holds large US companies and costs 0.95%. Index 500 Fund holds the same and costs 0.04%.', ask: 'call' },
    { id: 'switch', does: 'Name the fund to switch to.', working: 'Index 500 Fund: the same kind, at 0.04%. Total Bond Index Fund costs 0.07% but it holds bonds, so it is not a swap.', ask: 'switch' }],
  deciding: ['f1', 'f2', 'm1', 'm2', 'm5', 'fee'],
  reason: 'Your two funds and the plan fee cost $469.62 a year. Summit Growth Fund costs 0.95%, and Index 500 Fund holds the same kind of companies for 0.04%, so switching saves about $349.44 a year.'
}]);

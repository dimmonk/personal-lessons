// The questions of the test subject "Household papers": one fixed question with a form of three fields (a number as a percent, a number in
// dollars, a choice), and one made with fresh numbers whose form fields carry named slips.
FC.items('ledger', [{
  id: 'l-sheet', strand: 'papers', facets: { kind: 'fixed' },
  blocks: [
    { kind: 'document', form: 'statement', tab: 'Statement', title: 'Test plan 401(k)', head: ['Your fund', 'Balance'], rows: [{ id: 'f1', cells: ['Growth Fund', '$50,000'] }] },
    { kind: 'document', form: 'fees', tab: 'Fees', title: 'Test plan: what the funds cost', head: ['Fund', 'Kind', 'Yearly cost'],
      rows: [{ id: 'm1', cells: ['Growth Fund', 'Stocks', '0.50%'] }, { id: 'm2', cells: ['Safe Fund', 'Bonds', '0.10%'] }] }],
  asks: [{ id: 'line', kind: 'form', prompt: 'Fill in the line for this account.', fields: [
    { id: 'rate', label: 'Yearly cost of the Growth Fund', type: 'number', frame: '__%', places: 2, answer: 0.5, tol: { abs: 0.005 },
      traps: [{ slip: 'swapped', value: 0.1, then: 'That is the cost of the Safe Fund.' }] },
    { id: 'dollars', label: 'What it costs you a year', type: 'number', frame: '$__', places: 2, answer: 250, tol: { round: 0.01 },
      traps: [{ slip: 'percent-whole', value: 25000, then: 'That uses the percent as if it were dollars.' }] },
    { id: 'holds', label: 'What the Growth Fund holds', type: 'choose', options: [{ id: 'stocks', text: 'Stocks', ok: true }, { id: 'bonds', text: 'Bonds', then: 'The fee sheet says Stocks.' }] }] }],
  deciding: ['f1', 'm1'],
  reason: 'The Growth Fund costs 0.50% of $50,000, which is $250 a year.'
}]);
(() => {
  const dollars = n => '$' + n.toLocaleString('en-US');
  FC.gen('ledger', [{
    id: 'l-gen', strand: 'papers', facets: { kind: 'made' },
    params: { balance: [10000, 60000, 5000], hundredths: [50, 90, 10] },
    make: pick => ({ balanceText: dollars(pick('balance')), rateText: (pick('hundredths') / 100).toFixed(2) + '%', rate: pick('hundredths') / 100, cost: pick('balance') * pick('hundredths') / 10000,
      costText: '$' + (pick('balance') * pick('hundredths') / 10000).toFixed(2), other: 0.1, whole: pick('balance') * pick('hundredths') / 100 }),
    blocks: [
      { kind: 'document', form: 'statement', tab: 'Statement', title: 'Made plan 401(k)', head: ['Your fund', 'Balance'], rows: [{ id: 'f1', cells: ['Growth Fund', '{balanceText}'] }] },
      { kind: 'document', form: 'fees', tab: 'Fees', title: 'Made plan: what the funds cost', head: ['Fund', 'Kind', 'Yearly cost'], rows: [{ id: 'm1', cells: ['Growth Fund', 'Stocks', '{rateText}'] }, { id: 'm2', cells: ['Safe Fund', 'Bonds', '0.10%'] }] }],
    asks: [{ id: 'line', kind: 'form', prompt: 'Fill in the line for this account.', fields: [
      { id: 'rate', label: 'Yearly cost of the Growth Fund', type: 'number', frame: '__%', places: 2, answer: 'rate', tol: { abs: 0.005 }, traps: [{ slip: 'swapped', value: 'other', then: 'That is the cost of the Safe Fund.' }] },
      { id: 'dollars', label: 'What it costs you a year', type: 'number', frame: '$__', places: 2, answer: 'cost', tol: { round: 0.01 }, traps: [{ slip: 'percent-whole', value: 'whole', then: 'That uses the percent as if it were dollars.' }] },
      { id: 'holds', label: 'What the Growth Fund holds', type: 'choose', options: [{ id: 'stocks', text: 'Stocks', ok: true }, { id: 'bonds', text: 'Bonds', then: 'The fee sheet says Stocks.' }] }] }],
    deciding: ['f1', 'm1'],
    reason: 'The Growth Fund costs {rateText} of {balanceText}, which is {costText} a year.'
  }]);
})();

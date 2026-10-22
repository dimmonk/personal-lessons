// Wealth, lesson 5 "Taxes: where each fund sits, sell or wait, a loss used": the worked household, the accounts of g-place-swap (gen-tax.js)
// with their numbers fixed. $24,000 of bonds paid out $960.00 (their interest) this year in the brokerage account; at a 22% rate that is $211.20
// of tax a year. Swapping the bonds with $24,000 of the 401(k)'s $52,000 of stocks keeps the mix and saves most of it (research W25, W47).
FC.items('wealth', [{
  id: 'w-place', strand: 'tax', facets: { call: 'change' },
  blocks: [
    { kind: 'document', form: 'statement', tab: 'Brokerage', title: 'Northpoint Brokerage: Ruth’s brokerage account', head: ['Fund', 'Value'],
      rows: [{ id: 'b1', cells: ['Keystone Total Bond Fund', '$24,000'] }, { id: 'b2', cells: ['US Stock Market Fund', '$35,000'] },
        { id: 'b3', cells: ['Paid out by Keystone Total Bond Fund this year (its interest)', '$960.00'] }, { id: 'b4', cells: ['Gain on Keystone Total Bond Fund, held over a year', '$180'] }] },
    { kind: 'document', form: 'statement', tab: '401(k)', title: 'Ruth’s 401(k)', head: ['Fund', 'Value'], rows: [{ id: 'q1', cells: ['US Stock Market Fund', '$52,000'] }] },
    { kind: 'document', form: 'table', tab: 'Tax note', title: 'Ruth’s tax note', head: ['Line', 'Rate'], rows: [{ id: 't1', cells: ['Tax rate on interest', '22%'] }, { id: 't2', cells: ['Tax rate on a gain held more than a year', '15%'] }] }],
  asks: [
    { id: 'where', kind: 'choose', prompt: 'Is there a swap that keeps the mix and takes the bonds out of yearly tax?',
      options: [
        { id: 'yes', text: 'Yes: Keystone Total Bond Fund in the brokerage account, for stocks in the 401(k)', ok: true, then: 'The bonds’ payout is taxed every year in the brokerage account; in the 401(k) it would not be until money comes out.' },
        { id: 'nostock', text: 'No: the 401(k) holds no stocks to swap with', slip: 'same-mix-each', then: 'The 401(k) holds $52,000 of stocks to swap with.' },
        { id: 'placed', text: 'No: the bonds already sit in the 401(k)', slip: 'same-mix-each', then: 'The bond fund sits in the brokerage account.' }] },
    { id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', right: 'change', slips: { leave: 'same-mix-each' },
      then: { leave: 'The $24,000 of bonds in the brokerage account paid out $960.00, taxed this year.' } },
    { id: 'saved', kind: 'number', prompt: 'How much tax a year is paid on that payout now?', frame: '$__', places: 2, unit: 'a year', answer: 211.2, tol: { abs: 0.5 },
      when: { ask: 'call', is: ['change'] } },
    { id: 'gainTax', kind: 'number', prompt: 'Selling the bonds taxes their gain once. How much is that tax?', frame: '$__', places: 2, answer: 27, tol: { abs: 0.5 },
      when: { ask: 'call', is: ['change'] } }],
  steps: [
    { id: 'find', does: 'Find the bonds, and the account they sit in.', working: '$24,000 of bonds sit in the brokerage account, where their payout is taxed every year. The 401(k) holds $52,000 of stocks.', ask: 'where' },
    { id: 'swap', does: 'Keep the same mix, and swap only if the 401(k) holds stocks.', working: 'Sell the bonds in the brokerage account and buy stocks there; in the 401(k), sell $24,000 of stocks and buy bonds. The mix stays the same. Selling the bonds is a sale: check its gain first.', ask: 'call' },
    { id: 'saved', does: 'Work out the tax on the payout.', working: '$960.00 × 22% = $211.20 a year.', ask: 'saved' },
    { id: 'gain', does: 'Check the bonds’ gain first.', working: '$180 × 15% = $27.00, once, less than one year’s $211.20: a one-time tax under a year’s saving always favors the swap.', ask: 'gainTax' }],
  deciding: ['b1', 'b3', 'b4', 'q1', 't1', 't2'],
  reason: 'The bond fund’s payout, $960.00, is taxed every year in the brokerage account: $211.20 at 22%. Swapping it with stocks in the 401(k) keeps the same mix and saves most of that, for a one-time $27.00 of tax on the bonds’ gain.'
}]);

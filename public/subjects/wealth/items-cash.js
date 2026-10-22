// Wealth, lesson 2 "Money you need soon": the worked household, the account of g-cash-stocks (gen-cash.js) with its numbers fixed. A $45,000
// down payment due in 3 years sits in a stock fund, not in the cash, so nothing is put aside and it has to move; the cash 5,400 + 13,500 =
// 18,900 over a usual month of 4,200 is 4.5 months, enough.
FC.items('wealth', [{
  id: 'w-cash', strand: 'cash', facets: { call: 'change' },
  blocks: [
    { kind: 'document', form: 'statement', tab: 'Bank', title: 'Harbor Bank: Leo', head: ['Account', 'Balance'],
      rows: [{ id: 'c1', cells: ['Checking', '$5,400'] }, { id: 'c2', cells: ['Savings', '$13,500'] }, { id: 'c3', strong: true, cells: ['Total', '$18,900'] }], notes: ['Member FDIC.'] },
    { kind: 'document', form: 'table', tab: 'A usual month', title: 'What Leo spends in a usual month', head: ['Spending', 'Dollars'],
      rows: [{ id: 's1', cells: ['Rent', '$1,700'] }, { id: 's2', cells: ['Food', '$800'] }, { id: 's3', cells: ['Car and transit', '$600'] },
        { id: 's4', cells: ['Everything else, yearly bills as a twelfth', '$1,100'] }, { id: 's5', strong: true, cells: ['A month', '$4,200'] }] },
    { kind: 'document', form: 'table', tab: 'Bills ahead', title: 'Big bills Leo knows are coming', head: ['Bill', 'When', 'How much', 'Kept in'],
      rows: [{ id: 'f1', cells: ['Home down payment', 'In 3 years', '$45,000', 'US Stock Market Fund (stocks)'] }] }],
  asks: [
    { id: 'months', kind: 'number', prompt: 'How many months of spending does Leo’s cash cover?', frame: '__ months', places: 1, answer: 4.5, tol: { abs: 0.1 } },
    { id: 'call', kind: 'choose', prompt: 'What does Leo’s cash need?', from: 'cash', right: 'stocks', slips: { fine: 'nerve-not-room' },
      then: { fine: 'The down payment is due in 3 years and sits in a stock fund. If the fund is down that year, the bill still comes.',
        short: '4.5 months of cash is enough. The cash is fine; the bill’s money is not.', idle: 'The cash is between three and six months. The bill’s money in stocks is what needs a change.' } }],
  steps: [
    { id: 'bills', does: 'Look for a big bill due in five years or less, and where its money is.', working: 'The down payment, $45,000, is due in 3 years, within five, and sits in a stock fund, not in the cash.' },
    { id: 'cash', does: 'Add up the cash, leaving out money put aside for a bill.', working: '$5,400 + $13,500 = $18,900. None of it is the bill’s.' },
    { id: 'months', does: 'Divide by a usual month.', working: '$18,900 ÷ $4,200 = 4.5 months.', ask: 'months' },
    { id: 'call', does: 'Hold the months against three and six.', working: 'Enough cash, but the bill’s money has to leave stocks.', ask: 'call' }],
  deciding: ['c3', 's5', 'f1'],
  reason: 'Leo’s cash covers 4.5 months, enough. The down payment is due in 3 years and sits in stocks, so move it to savings now.'
}]);

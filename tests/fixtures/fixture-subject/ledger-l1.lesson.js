// "Household papers", lesson 1: the papers a household has, a form on a sample, and the step on your own accounts, which waits for a moment.
FC.lesson('ledger', {
  id: 'l1', part: '1', title: 'Read the papers', rev: 1, status: 'live', trigger: 'job',
  history: [{ rev: 1, date: '2026-10-10', change: 'First version, for the tests.' }],
  tried: { date: '2026-10-10', words: 'Clear on a phone.' },
  why: 'A household keeps its money on a few papers. Read them for what each fund costs a year.',
  flow: [
    { title: 'The papers',
      show: [
        { kind: 'document', form: 'statement', tab: 'Statement', title: 'Sample plan 401(k)', head: ['Your funds', 'Balance'], rows: [{ id: 's1', cells: ['Growth Fund', '$38,400'] }, { id: 's2', strong: true, cells: ['Total', '$38,400'] }], notes: ['Balances on the last day of the quarter.'] },
        { kind: 'document', form: 'fees', tab: 'Fee sheet', title: 'Sample plan: what the funds cost', head: ['Fund', 'Kind', 'Yearly cost'], rows: [{ id: 'f1', cells: ['Growth Fund', 'Stocks', '0.95%'] }, { id: 'f2', cells: ['Plan fee', 'Taken from your balance', '$96 a year'] }] },
        { kind: 'document', form: 'paystub', title: 'Pay stub', head: ['Line', 'This pay'], rows: [{ id: 'p1', cells: ['Gross pay', '$2,500.00'] }, { id: 'p2', cells: ['Into the 401(k)', '$125.00'] }] },
        { kind: 'document', form: 'matchrule', title: 'The plan’s match', rows: [{ id: 'r1', cells: ['The plan adds', '50 cents for each dollar, up to 6% of pay'] }] },
        { kind: 'document', form: 'beneficiary', title: 'Who gets the account', head: ['Who', 'Share'], rows: [{ id: 'b1', cells: ['Main: a person you name', '100%'] }] },
        { kind: 'document', form: 'foreign', title: 'Account outside the US', rows: [{ id: 'x1', cells: ['Highest balance this year', '$4,200'] }] },
        { kind: 'document', form: 'table', title: 'The accounts at a glance', head: ['Account', 'Balance'], rows: [{ id: 't1', cells: ['401(k)', '$38,400'] }, { id: 't2', cells: ['Savings', '$6,000'] }] },
        { kind: 'ref', ref: 'limit' }
      ] },
    { worked: 'l-sheet' },
    { set: { items: [{ gen: 'l-gen', n: 2 }], order: 'listed' } },
    { own: 'sheet', model: 'l-sheet', where: ['On your own statement, the funds and balances are on the page called holdings.', 'On your plan\u2019s fee sheet, the yearly cost is the column called expense ratio.'] }
  ],
  check: { items: [{ gen: 'l-gen', n: 2 }], feedback: 'at-end', pass: [{ right: { min: 2 } }] }
});

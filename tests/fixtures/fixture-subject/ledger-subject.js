// A fourth made-up subject, used only by the tests: reading the papers of a household and keeping your own. It exercises every kind of paper
// (a household's papers as tabs, a statement, a fee sheet, a pay stub, a match rule, a beneficiary page, a foreign summary, a plain table), a
// dated value looked up (refs), a form of several fields scored on a sample, the private forms (the sheet of accounts and the dated changes),
// the calendar file, the moments a learner marks (a lesson that waits for one), and the export and delete controls. It is never shipped.
FC.subject('ledger', {
  name: 'Household papers',
  field: 'skills',
  rev: 1,
  standard: 2,
  history: [{ rev: 1, date: '2026-10-10', change: 'Made for the tests of the papers, the form, the private sheet and the dated changes.' }],
  endResult: 'Read the papers of a household, say what each fund costs a year, and keep your own accounts and dates.',
  parts: [{ id: '1', title: 'Read the papers' }],
  complete: true,
  lists: {
    slip: [{ id: 'swapped', text: 'read the cost of the other fund' }, { id: 'percent-whole', text: 'used the percent as if it were dollars' }],
    accountType: [{ id: '401k', text: '401(k) from a job' }, { id: 'ira', text: 'IRA' }, { id: 'bank', text: 'Bank account' }],
    kind: [{ id: 'stocks', text: 'Stocks' }, { id: 'bonds', text: 'Bonds' }],
    trigger: [{ id: 'job', text: 'I started a job in the US' }, { id: 'account', text: 'I opened an account' }]
  },
  facets: { kind: { name: 'Kind', values: [{ id: 'fixed', text: 'fixed papers' }, { id: 'made', text: 'made papers' }] } },
  mix: [],
  strands: [{ id: 'papers', title: 'Reading the papers' }],
  readingShare: 0.9,
  refs: [{ id: 'limit', text: 'The most a person may put into a test account in one year', value: '$1,000', asOf: '2025-01-02', source: 'The test office, table 7' }],
  own: {
    sheet: {
      into: 'sheet',
      fields: [
        { id: 'type', label: 'Kind of account', type: 'choose', list: 'accountType' },
        { id: 'name', label: 'A name you will know it by', type: 'text', optional: true },
        { id: 'balance', label: 'What is in it', type: 'number', unit: 'dollars' },
        { id: 'fees', label: 'Fees the plan takes from it', type: 'number', unit: 'dollars a year', optional: true }
      ],
      rows: { id: 'holdings', label: 'Funds', fields: [
        { id: 'name', label: 'Name of the fund', type: 'text' },
        { id: 'value', label: 'What you hold in it', type: 'number', unit: 'dollars' },
        { id: 'expense', label: 'Its yearly cost', type: 'number', unit: 'percent', warn: { over: 2, text: 'A yearly cost over 2% is very high for a fund. Check the number on your fee sheet.' } },
        { id: 'kind', label: 'What it holds', type: 'choose', list: 'kind', optional: true }
      ] }
    },
    actions: { into: 'actions', fields: [
      { id: 'what', label: 'What will you do?', type: 'text' },
      { id: 'where', label: 'Where?', type: 'text' },
      { id: 'when', label: 'On which day?', type: 'date' }
    ] }
  }
});

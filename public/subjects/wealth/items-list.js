// Wealth, lesson 1 "Your list, and what could lose it": the worked household, the account of g-list-change (gen-list.js) with its numbers
// fixed so the working reads as written. 26,400 + 236,000 = 262,400 at Harbor Bank, over the FDIC limit by 12,400 though each account alone is
// under it; 58,200 + 1,800 = 60,000 at the brokerage; 262,400 + 60,000 + 94,500 = 416,900. The part over goes to another bank (research W41).
FC.items('wealth', [{
  id: 'w-list', strand: 'list', facets: { call: 'change' },
  blocks: [
    { kind: 'document', form: 'statement', tab: 'Bank', title: 'Harbor Bank: Maya’s accounts', head: ['Account', 'Balance'],
      rows: [{ id: 'b1', cells: ['Checking, in Maya’s name', '$26,400'] }, { id: 'b2', cells: ['Savings, in Maya’s name', '$236,000'] },
        { id: 'b3', strong: true, cells: ['Total at Harbor Bank', '$262,400'] }],
      notes: ['Member FDIC.'] },
    { kind: 'document', form: 'statement', tab: 'Brokerage', title: 'Northpoint Brokerage: Maya’s brokerage account', head: ['Holding', 'Value'],
      rows: [{ id: 'k1', cells: ['US Stock Market Fund', '$58,200'] }, { id: 'k2', cells: ['Cash', '$1,800'] },
        { id: 'k3', strong: true, cells: ['Total', '$60,000'] }, { id: 'k4', cells: ['Change in value this year', '−$6,300'] }],
      notes: ['Member SIPC.'] },
    { kind: 'document', form: 'statement', tab: '401(k)', title: 'Brightwater Logistics 401(k): Maya', head: ['Your funds', 'Balance'],
      rows: [{ id: 'p1', strong: true, cells: ['Total', '$94,500'] }], notes: ['Balances on the last day of the quarter.', 'Not FDIC insured. May lose value.'] }],
  asks: [
    { id: 'list', kind: 'form', prompt: 'Read each paper: what is in it, and what pays if the bank or the firm fails.',
      fields: [
        { id: 'bank', label: 'Everything at Harbor Bank', type: 'number', frame: '$__', places: 0, answer: 262400, tol: { abs: 0.5 } },
        { id: 'bankGuard', label: 'What protects it', type: 'choose', from: 'guard', right: 'fdic',
          then: { sipc: 'The paper says Member FDIC: it is a bank, not a brokerage firm.', none: 'The paper says Member FDIC.' } },
        { id: 'brok', label: 'Everything at Northpoint Brokerage', type: 'number', frame: '$__', places: 0, answer: 60000, tol: { abs: 0.5 } },
        { id: 'brokGuard', label: 'What protects it', type: 'choose', from: 'guard', right: 'sipc',
          then: { fdic: 'The paper says Member SIPC: it is a brokerage firm, not a bank.', none: 'The paper says Member SIPC.' } },
        { id: 'plan', label: 'The 401(k)', type: 'number', frame: '$__', places: 0, answer: 94500, tol: { abs: 0.5 } },
        { id: 'planGuard', label: 'What protects it', type: 'choose', from: 'guard', right: 'none',
          then: { fdic: 'Its funds are not deposits: the paper says Not FDIC insured. Its money is held in a trust apart from Brightwater Logistics.',
            sipc: 'A 401(k) is not a brokerage account. Its money is held in a trust apart from Brightwater Logistics, and a fall in its funds is Maya’s.' } }] },
    { id: 'total', kind: 'number', prompt: 'What does Maya have in all of it, together?', frame: '$__', places: 0, answer: 416900, tol: { abs: 1 } },
    { id: 'fall', kind: 'choose', prompt: 'The brokerage account fell $6,300 this year. Who pays that back?',
      options: [
        { id: 'nobody', text: 'Nobody', ok: true, then: 'A fall in prices is the risk of owning stocks; no insurer pays it back.' },
        { id: 'sipc', text: 'SIPC', slip: 'insured-fall', then: 'SIPC pays when the firm itself fails and your holdings are missing, not when prices fall.' },
        { id: 'fdic', text: 'FDIC', slip: 'insured-fall', then: 'FDIC covers bank deposits when a bank fails. It does not cover stocks or a fall in prices.' }] },
    { id: 'call', kind: 'choose', prompt: 'Is there anything to change?', from: 'call', right: 'change', slips: { leave: 'per-account-limit' },
      then: { leave: 'Each account is under $250,000, but FDIC adds up the accounts in one name at one bank: $262,400.' } },
    { id: 'over', kind: 'number', prompt: 'How much at Harbor Bank has no FDIC cover?', frame: '$__', places: 0, answer: 12400, tol: { abs: 1 },
      when: { ask: 'call', is: ['change'] } },
    { id: 'fix', kind: 'choose', prompt: 'Where could the part over the limit go, so that FDIC covers it?', when: { ask: 'call', is: ['change'] },
      options: [
        { id: 'same-bank', text: 'A new savings account at Harbor Bank, in Maya’s name', slip: 'per-account-limit', then: 'FDIC adds every account in one name at one bank, so a new one there is counted with the rest.' },
        { id: 'other-bank', text: 'An account in Maya’s name at another bank', ok: true, then: 'FDIC counts each bank on its own, so it is covered there up to $250,000 too.' },
        { id: 'stocks', text: 'A stock fund at Northpoint Brokerage', slip: 'fix-into-stocks', then: 'SIPC pays if the firm fails, not when prices fall: money moved there can lose value.' }] }],
  steps: [
    { id: 'read', does: 'Read each paper’s total, and its line on cover.', working: 'Harbor Bank: $262,400, Member FDIC. Northpoint Brokerage: $60,000, Member SIPC. 401(k): $94,500, neither: Not FDIC insured, held in a trust.', ask: 'list' },
    { id: 'add', does: 'Add up everything.', working: '$262,400 + $60,000 + $94,500 = $416,900.', ask: 'total' },
    { id: 'fall', does: 'Match what happened to its cover.', working: 'The $6,300 fall is Maya’s loss. FDIC and SIPC pay only when a bank or a firm fails.', ask: 'fall' },
    { id: 'limit', does: 'Add up each bank, and each kind of ownership at it, against the FDIC limit.', working: 'Checking and savings are both in Maya’s name at one bank, so FDIC counts them together: $262,400, over $250,000.', ask: 'call' },
    { id: 'over', does: 'Work out the part with no cover.', working: '$262,400 − $250,000 = $12,400.', ask: 'over' },
    { id: 'fix', does: 'Say where it could go.', working: 'To an account at another bank: FDIC counts each bank on its own.', ask: 'fix' }],
  deciding: ['b1', 'b2', 'b3', 'k3', 'k4', 'p1'],
  reason: 'Everything comes to $416,900. The two accounts at Harbor Bank are in one name, so FDIC counts $262,400 against its $250,000: $12,400 has no cover if the bank fails. Moving it to another bank covers it.'
}]);

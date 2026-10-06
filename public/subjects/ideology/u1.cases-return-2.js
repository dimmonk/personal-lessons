// Political Ideologies, Unit One: fresh cases held back for later days (lesson standard E9, V44), part two.
// Field guide: see u1.cases-drill-1.js. Every text here is invented.

FC.cases('ideology', 'u1', [

  /* ---------- rights and fair treatment for everyone ---------- */
  { id: 'i-ret-rights-queue', use: 'return', tier: 'varied', setting: 'health', topic: 'one line for every patient',
    text: "Disabled and non-disabled patients wait in the same line for the same clinic, which sounds fair and leaves the disabled behind. Fair treatment for every patient means changing how the line works.",
    route: { D1: ['rights'] },
    cues: { D1: ['which sounds fair and leaves the disabled behind', 'Fair treatment for every patient means changing how the line works'] },
    reason: { D1: 'The text puts first what every patient is owed, and says rules that treat all alike can still leave a group behind: {cue:D1}.' },
    not: { outcome: 'none', why: 'The text is about how a line works, but it says that fair treatment is owed to every patient, and that is what it puts first.' } },

  /* ---------- no side named ---------- */
  { id: 'i-ret-none-savings', use: 'return', tier: 'varied', setting: 'money', topic: 'interest on new savings accounts',
    text: "Savings accounts opened after July 1 will pay 3 percent interest on balances above $500. Existing accounts are not changed. Details are available at any branch.",
    route: { D1: ['none'] },
    cues: { D1: ['Savings accounts opened after July 1 will pay 3 percent interest on balances above $500', 'Existing accounts are not changed'] },
    reason: { D1: 'The text says how one practical matter will be handled: {cue:D1}. No people are set against owners and nothing is said to be owed to anyone.' },
    not: { outcome: 'class', why: 'A bank and its customers are in the background, and a text could take the customers’ side against the bank. This one only gives the terms.' } },

]);

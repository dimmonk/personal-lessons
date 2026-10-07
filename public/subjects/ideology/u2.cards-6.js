// Political Ideologies, Unit Two, part three (second half): workers who own the businesses and keep a market, and the pair that sets
// it beside the name before it.

FC.cards('ideology', 'u2', [

  /* ---------- Market socialism ---------- */
  { id: 'meet-mktsoc', kind: 'meet', outcome: 'mktsoc',
    link: 'This text also gives each business to the people who work in it, and keeps customers who choose.',
    case: 'c-mk-furniture', mark: 'C1',
    explain: [
      'The furniture makers want to own their firm, as in the last text. What is new is what they keep: a market. Firms sell to customers, charge what they choose, and close if they cannot pay their way. Only who owns each firm changes.',
      'You need both halves: workers who own, and firms that compete and can fail. A text that gives each business to its workers and says nothing about competing is a different answer.'
    ],
    spot: [
      { do: 'Find who owns each firm: “the people who make its furniture”.', why: 'The owners are the workers, not outside shareholders.' },
      { do: 'Look for competing: “compete for customers, set their own prices”.', why: 'Without this half, it is a different name.' },
      { do: 'Look for failing: “go under if they fail”.', why: 'A firm that cannot fail is not facing a market.' }
    ],
    feature: { step: 'C1', option: 'market' },
    name: 'This is {o:mktsoc}. “Market” is firms selling to customers who choose, and “socialism” is that the owners are the people who work in each firm.' },

  { id: 'check-mktsoc', kind: 'check', after: 'mktsoc',
    case: 'c-mk-bikes',
    ask: { type: 'option', step: 'C1', among: ['keep', 'none', 'public', 'market'] } },

  /* ---------- The pair that both give the business to its workers ---------- */
  { id: 'look-anarch-mktsoc', kind: 'lookalike', ledger: 'anarch~mktsoc',
    link: 'Both give the business to the people who work in it. They part on competing, and on the government.',
    cases: ['c-lk-anmk-an', 'c-lk-anmk-mk'],
    instruction: 'Both stories are about the Quill bindery, and both say it should belong to the people who work in it. Compare one thing: does the text say the bindery should compete with other binderies for customers?',
    prompt: { kind: 'which', option: 'C1.market', answer: 'c-lk-anmk-mk' },
    difference: [
      'In Story A the text says nothing about competing. It wants no government, and the bookbinders will run the bindery and the district together, in meetings. The answer about the government is {a:C2.gone}, so this is {o:anarch}.',
      'In Story B the bindery competes with other binderies for customers, sets its own prices and closes if it fails. The answer is {a:C1.market}, so this is {o:mktsoc}.',
      'Both give the bindery to its workers. What separates them is what the text keeps around it: no government, or a market.'
    ] }
]);

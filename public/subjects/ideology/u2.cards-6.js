// Political Ideologies, Unit Two, part three (second half): workers who own the businesses and keep a market, and the pair that sets
// it beside the name before it.

FC.cards('ideology', 'u2', [

  /* ---------- Market socialism ---------- */
  { id: 'meet-mktsoc', kind: 'meet', outcome: 'mktsoc',
    link: 'This text also gives each business to the people who work in it, and keeps something the last text had no place for: customers who choose.',
    case: 'c-mk-furniture', mark: 'C1',
    strip: [
      'There are two groups in the text: the firm’s shareholders, who keep the profit, and the furniture makers, who make the chairs. The text is on the makers’ side.',
      'It says each furniture firm should belong to the people who make its furniture.',
      'It says the firms should compete for customers, set their own prices, and go under if they fail.',
      'It says the owners should be out of the workshop, and not out of the market.'
    ],
    explain: [
      'Here the workers own the businesses, as in the last text. What is new is what the text keeps. It does not do away with competition, prices or failure. It keeps a market: firms selling to customers, charging what they choose, and closing if they cannot pay their way. What it changes is who owns each firm.',
      'Notice the competing. A text that gives each business to its workers and says nothing about competing is a different answer. Both things are needed here: workers who own, and firms that compete and can fail.'
    ],
    feature: { step: 'C1', option: 'market' },
    name: 'The name for this is {o:mktsoc}. "Market" is firms selling to customers who choose, and "socialism" points at the other half: the owners are the people who work in each firm, and not outsiders. Look for both.' },

  { id: 'check-mktsoc', kind: 'check', after: 'mktsoc',
    case: 'c-mk-bikes',
    ask: { type: 'option', step: 'C1', among: ['keep', 'none', 'public', 'market'] } },

  /* ---------- The pair that both give the business to its workers ---------- */
  { id: 'look-anarch-mktsoc', kind: 'lookalike', ledger: 'anarch~mktsoc',
    link: 'These two both give the business to the people who work in it. They part on what the text says about competing, and about the government.',
    cases: ['c-lk-anmk-an', 'c-lk-anmk-mk'],
    instruction: 'Both cases are about the Quill bindery, and both say it should belong to the people who work in it. Compare one thing: whether the text says the bindery should compete with other binderies for customers.',
    prompt: { kind: 'which', option: 'C1.market', answer: 'c-lk-anmk-mk' },
    difference: [
      'In Case A the text says nothing about competing. It wants no government telling it what to do or who to sell to, and it will run the bindery and the district together, in meetings. The answer about the government is {a:C2.gone}, and the case is {o:anarch}.',
      'In Case B the text says the bindery should compete with other binderies for customers, set its own prices, and close if it fails. The answer is {a:C1.market}, and the case is {o:mktsoc}.',
      'Both give the bindery to the people who work in it. What separates them is what the text keeps around it: a market, or no government.'
    ] }
]);

// Psychology, Unit One, part three: the third kind (a lasting way someone is).
// Its look-alike pair with the second kind is taught on the question card (ledger taughtIn).

FC.cards('psychology', 'u1', [

  /* ---------- A lifelong pattern ---------- */
  { id: 'meet-pattern', kind: 'meet', family: 'pattern',
    link: 'Third: the same behavior for years, everywhere, with everyone. People claim this one often and can show it rarely.',
    case: 'g-moira', mark: 'D1',
    explain: [
      'Nobody in Moira’s story is having one conversation. You are looking at twenty years, three firms and her whole family, and the same thing in all of them: nothing is ever her fault.',
      'This is the biggest claim you can make about a person. Most of the time you have seen one evening or one job, and that is not enough.'
    ],
    spot: [
      { do: 'Count the years: twenty.', why: 'A bad stretch lasts weeks or months, not decades.' },
      { do: 'Count the places: three firms, family trips, shared apartments.', why: 'One place could just be one bad workplace.' },
      { do: 'Count the people: coworkers, brothers, old friends.', why: 'One person could just be one bad relationship.' },
      { do: 'Call it a pattern only if all three repeat.', why: 'Then the only thing left to explain it is the person.' }
    ],
    feature: { step: 'D1', option: 'pattern' },
    name: 'This is {a:D1.pattern}. It is not a diagnosis: only a trained professional can give one.' },

  { id: 'check-pattern', kind: 'check', after: 'pattern',
    case: 'g-borrower',
    ask: { type: 'option', step: 'D1', among: ['reasoning', 'tactic', 'pattern'] } },

  /* ---------- One thing done to someone, taken for a whole personality ---------- */
  { id: 'look-tactic-pattern', kind: 'lookalike', ledger: 'tactic~pattern',
    link: 'People mix these up in one direction: they see one thing done to someone and decide what the person is like for life.',
    cases: ['g-credit-friday', 'g-credit-years'],
    instruction: 'Both stories are about Paul taking credit for someone else’s work. Compare one thing: does the story stay between two people, or follow Paul for years?',
    prompt: { kind: 'which', option: 'D1.pattern', answer: 'g-credit-years' },
    difference: [
      'Story A is one Friday between Paul and Gina: he takes her idea, then tells her she is confused. That is {a:D1.tactic}.',
      'Story B never mentions Gina. It follows Paul through every job, his sister and his soccer club. That is {a:D1.pattern}.',
      'Story A tells you what Paul did to Gina. It does not tell you what Paul is like.'
    ] }
]);

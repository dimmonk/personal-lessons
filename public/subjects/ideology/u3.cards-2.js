// Political Ideologies, Unit Three, part two: the second name and its look-alike.

FC.cards('ideology', 'u3', [

  { id: 'meet-fasc', kind: 'meet', outcome: 'fasc',
    link: 'The last speech spoke for everyone and left the vote alone. A speech can speak for everyone in just the same way and treat the vote very differently.',
    case: 'n-rally', mark: 'N2',
    explain: [
      'At first it sounds like the anniversary speech: “We are one people, with one will.” Then it turns. The speaker says “I am its voice”, so nobody else gets to speak for the people. The other parties will be closed and the papers that print their complaints will be shut, and after that nobody is left who can say no. That is what the second question asks: {q:N2}',
      'A speech can also get here another way: blame a few at the top, put the country’s own industry first, and then take the vote away. This speech speaks for everyone instead. Either way the name comes from the same thing: elections, other parties and critics pushed aside.'
    ],
    spot: [
      { do: 'Find who it speaks for: “one people, with one will”.', why: 'That is the same start as the anniversary speech.' },
      { do: 'Find who may speak for them: “I am its voice”.', why: 'One person speaking for everyone leaves no room for anyone else.' },
      { do: 'Look for the vote, parties or papers being ended: the other parties “will be closed” and the papers “shut”.', why: 'This step is what separates it from {o:nationalism}.' },
      { do: 'Check nobody is ranked by blood: the speech is about one nation and one leader.', why: 'Ranking people by blood would make it something else, covered last.' }
    ],
    feature: { step: 'N2', option: 'aside' },
    name: 'This is {o:fasc}. The word comes from a real movement, but every text in this unit is invented. Experts argue about where its edges are, so this unit draws the line you just saw: the vote and the critics taken away.' },

  { id: 'check-fasc', kind: 'check', after: 'fasc',
    case: 'n-gazette',
    ask: { type: 'phrase', step: 'N2', say: 'Tap the words that take away the say of anyone who might disagree.',
           answer: 'The election due in March is canceled' } },

  { id: 'look-nationalism-fasc', kind: 'lookalike', ledger: 'nationalism~fasc',
    link: 'Both speak for everyone, and both can sound proud and sure of themselves. They are easy to mix up.',
    cases: ['n-lk-hospital-nat', 'n-lk-hospital-fasc'],
    instruction: 'Both stories are about the opening of a new hospital, and the first half of each speech is word for word the same. Compare one thing: what each speech wants done with the opposition and with people who question the hospitals.',
    prompt: { kind: 'which', option: 'N2.aside', answer: 'n-lk-hospital-fasc' },
    difference: [
      'In Story A the prime minister says parliament will debate the health budget and the opposition will have its say on every line. The vote and the right to disagree stay, so the answer is {a:N2.keep} and this is {o:nationalism}.',
      'In Story B the Leader says the budget is his alone to decide, and that doctors and papers that question his hospitals will be closed. The answer is {a:N2.aside}, so this is {o:fasc}.',
      'Warmth and pride tell you nothing here. What each speech does with the people who might say no does.'
    ] }
]);

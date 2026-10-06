// Psychology, Unit One, part three: the third kind (a lasting way someone is).
// Its look-alike pair with the second kind is taught on the question card (ledger taughtIn).

FC.cards('psychology', 'u1', [

  /* ---------- The third kind: a lasting way someone is ---------- */
  { id: 'meet-pattern', kind: 'meet', family: 'pattern',
    link: 'The first two kinds show in one conversation. The third needs far more, and people claim it on far less.',
    case: 'g-moira', mark: 'D1',
    strip: [
      'One person, Moira, and a long stretch: twenty years.',
      'More than one place (three firms, vacations, shared apartments) and more than one relationship (colleagues, brothers, old friends).',
      'The same thing runs through all of it: when something goes wrong, it was somebody else.'
    ],
    explain: [
      'No single moment is shown, but a long view: the sort you get from knowing someone for years, or from people who each know a different part of their life. The years show it is not a bad patch. The places show it is not one workplace. The relationships show it is not one other person. With all three, what is left to explain it is the person.',
      'It is the largest claim of the four, because it is about a whole person. You rarely have that much from what you have seen yourself, so count first: how many years, places and people?'
    ],
    feature: { step: 'D1', option: 'pattern' },
    name: 'The answer, and the name, is {a:D1.pattern}. "Lasting" means years, and more than one part of the person’s life. It does not say the way is bad, and it is not a diagnosis, which only a trained professional can give.' },

  { id: 'check-pattern', kind: 'check', after: 'pattern',
    case: 'g-borrower',
    ask: { type: 'option', step: 'D1', among: ['reasoning', 'tactic', 'pattern'] } },

  /* ---------- The look-alike pair: one thing done to someone, taken for what the doer is like ---------- */
  { id: 'look-tactic-pattern', kind: 'lookalike', ledger: 'tactic~pattern',
    link: 'These two are mixed up in one direction: you see one thing done to someone and decide what the doer is like.',
    cases: ['g-credit-friday', 'g-credit-years'],
    instruction: 'Both cases are about Paul taking the credit for someone else’s work. Compare one thing: does the case stay between two people, or follow one person through years, places and relationships?',
    prompt: { kind: 'which', option: 'D1.pattern', answer: 'g-credit-years' },
    difference: [
      'In Case A it is one episode between two people: Paul takes Gina’s idea, then tells her she must be confused, and she goes home wondering. Nothing goes outside the two of them, or back before Friday. The answer is {a:D1.tactic}.',
      'In Case B Gina does not appear. The case follows Paul through every job, two firms, a sister at school and a soccer club. The answer is {a:D1.pattern}.',
      'Case A can be true without Case B. It lets you say what Paul did to Gina, which is a good deal, but never what Paul is like.'
    ] }
]);

// Civics, Unit One, part four: the fourth family (a state, city or county government), the exception "a judge in a
// state's court", and the look-alike pair of the two kinds of office. A quick lesson (lesson standard section 19).

FC.cards('civics', 'u1', [

  /* ---------- The fourth family: a state, city or county government ---------- */
  { id: 'meet-states', kind: 'meet', family: 'states',
    link: 'The first three kinds are about the whole country, or about a judge. The fourth is a government that covers only one place: a state, a city, a town or a county.',
    case: 'c-market', mark: 'D1',
    strip: [
      'There is a city, Marlow, and its council: the group of people who make decisions for the city.',
      'Saturday traffic makes the market square hard to cross on foot. The city council voted to ban cars from the square on Saturdays.',
      'The decision is about one place: one square in one city. No lawmakers of the whole country, no office of the whole country, and no judge appear.'
    ],
    explain: [
      'What you are shown is a city deciding something about itself. The council of Marlow voted, and the vote covers one square. A city’s council makes decisions for that city in the way Congress makes them for the whole country: by voting.',
      'The country is governed on more than one level. Besides the government of the whole country, each state has a government of its own, with a legislature, which is its lawmaking body, and a governor, who leads it. Inside a state, cities, towns and counties have governments of their own too, with a council, a board or a mayor. This kind covers all of them. It does not depend on how big the place is, or on whether the decision is a vote or an order from a mayor or a governor. What matters is that the decision-maker belongs to one place and not to the whole country.',
      'A judge in a state’s court is not in this kind. A judge is a judge, whichever court the judge sits in.'
    ],
    feature: { step: 'D1', option: 'states' },
    name: 'The kind is {a:D1.states}. “Government” here means the people and offices who make the decisions for a place. A state’s government is its lawmakers, its governor and its offices. A city, a town or a county has a council or a board, and often a mayor.' },

  { id: 'check-states', kind: 'check', after: 'states',
    case: 'k-pool',
    ask: { type: 'phrase', step: 'D1', say: 'Which part of this case is the last decision, made by a town’s own government? Tap it.',
           answer: 'the Oakby town council voted to open it on Sundays from July' } },

  /* ---------- The exception between a judge and a state ---------- */
  { id: 'exc-statejudge', kind: 'exception', ledger: 'courts~states', looksLike: 'states', is: 'courts',
    h: 'A judge in a state’s own court',
    link: 'A state has judges of its own, and a state’s judge can rule on a county’s rule. That makes the story sound as if it all belongs to the state.',
    case: 'x-statejudge',
    setup: 'The case is full of a county and a state: a county’s rule, a county’s order, and a judge in the state’s own court. A decision by the government of a state or a county is what you point to for {a:D1.states}. Yet the answer for this case is {a:D1.courts}.',
    prompt: { kind: 'phrase', answer: 'a judge in the state’s court heard both sides and ruled' },
    because: [
      'Read who makes the last decision. The county made a rule and told Mrs. Lund to give a dog away, and those came first. The last decision is the judge’s: the judge heard both sides and ruled that she must do it.',
      'A judge in a state’s court is still a judge. The state’s own government is its lawmakers, its governor and its offices, and the judge is not one of them. The state did not decide this case. A judge did.'
    ],
    take: 'The question is not which court. It is who decides: a judge of the whole country’s courts and a judge of a state’s courts are both in the kind for a judge.' },

  /* ---------- The look-alike pair of the two kinds of office ---------- */
  { id: 'look-president-states', kind: 'lookalike', ledger: 'president~states',
    h: 'The same inspector, for the whole country or for one state',
    link: 'An office of the whole country and an office of one state can do the same work. This card puts two such offices side by side.',
    cases: ['l-inspect-meat', 'l-inspect-state'],
    instruction: 'Both cases are about an inspector who finds dirty floors and orders a place shut. Compare one thing: whose office does the inspector work for?',
    prompt: { kind: 'which', option: 'D1.states', answer: 'l-inspect-state' },
    difference: [
      'In Case A the inspector works for a federal office, one that belongs to the government of the whole country. The decision is that office’s. The answer is {a:D1.president}.',
      'In Case B the inspector works for a state’s own health department. The decision is that state’s. The answer is {a:D1.states}.',
      'What the inspector does is the same in both cases, word for word. You can only tell by whose office does it.'
    ] }
]);

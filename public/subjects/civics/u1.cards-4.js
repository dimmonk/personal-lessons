// Civics, Unit One, part four: the fourth family (a state, city or county government), the exception "a judge in a
// state's court", and the look-alike pair of the two kinds of office. A quick lesson (lesson standard section 19),
// rewritten plain (section 20).

FC.cards('civics', 'u1', [

  /* ---------- The fourth family: a state, city or county government ---------- */
  { id: 'meet-states', kind: 'meet', family: 'states',
    link: 'Fourth: a government that covers only one place, such as a state, a city, a town or a county.',
    case: 'c-market', mark: 'D1',
    explain: [
      'The council of Marlow voted, and the vote covers one square in one city. A city council decides for its city the way Congress decides for the country: by voting. Nobody from the government of the whole country is in the story, and no judge.',
      'Each state has its own government, with a legislature that makes its laws and a governor who leads it. Cities, towns and counties have their own too, with a council, a board or a mayor. A governor’s or mayor’s order counts as much as a vote. What matters is that the decider belongs to one place, not to the whole country.'
    ],
    spot: [
      { do: 'Find who decided: the city council of Marlow.', why: 'A council, a mayor, a governor or a state legislature is a government of one place.' },
      { do: 'Check the place: one square in one city.', why: 'The call covers only that place, not the whole country.' },
      { do: 'Check it is not a judge: the council voted, and nobody ruled.', why: 'A judge in a state court is still a judge, not the state.' }
    ],
    feature: { step: 'D1', option: 'states' },
    name: 'This is {a:D1.states}. It covers every level below the whole country: state, city, town and county.' },

  { id: 'check-states', kind: 'check', after: 'states',
    case: 'k-pool',
    ask: { type: 'phrase', step: 'D1', say: 'Which words show the town’s own final call? Tap them.',
           answer: 'the Oakby town council voted to open it on Sundays from July' } },

  /* ---------- The exception between a judge and a state ---------- */
  { id: 'exc-statejudge', kind: 'exception', ledger: 'courts~states', looksLike: 'states', is: 'courts',
    h: 'A judge in a state’s own court',
    link: 'A state has judges of its own, and a state judge can rule on a county’s rule. The story can sound as if it all belongs to the state.',
    case: 'x-statejudge',
    setup: 'The story is full of the county and the state: a county rule, a county order, a judge in the state’s court. A county or state deciding usually means {a:D1.states}, yet the answer here is {a:D1.courts}.',
    prompt: { kind: 'phrase', answer: 'a judge in the state’s court heard both sides and ruled' },
    because: [
      'The county made a rule and told Mrs. Lund to give a dog away, but those came first. The final call is the judge’s: the judge heard both sides and ruled that she must do it.',
      'A judge in a state’s court is still a judge, not part of the state’s government. The state did not decide this. A judge did.'
    ],
    take: 'Do not ask which court it is. Ask who decides: a judge in a federal court and a judge in a state court both count as a judge.' },

  /* ---------- The look-alike pair of the two kinds of office ---------- */
  { id: 'look-president-states', kind: 'lookalike', ledger: 'president~states',
    h: 'The same inspector, for the whole country or for one state',
    link: 'An office of the whole country and an office of one state can do the same job. Here are two inspectors side by side.',
    cases: ['l-inspect-meat', 'l-inspect-state'],
    instruction: 'Both stories are about an inspector who finds dirty floors and orders a place shut. Compare one thing: whose office does the inspector work for?',
    prompt: { kind: 'which', option: 'D1.states', answer: 'l-inspect-state' },
    difference: [
      'In Story A the inspector works for a federal office, so the call is that office’s. This is {a:D1.president}.',
      'In Story B the inspector works for a state’s own health department, so the call is the state’s. This is {a:D1.states}.',
      'The inspector does exactly the same thing in both. Only whose office it is tells them apart.'
    ] }
]);

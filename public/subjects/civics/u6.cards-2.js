// Civics, Unit Six, part two: the second name (a city, a town or a county making a rule), the look-alike pair it forms
// with the first, and the first question of this unit.

FC.cards('civics', 'u6', [

  /* ---------- The second name: power handed down to a city, a town or a county ---------- */
  { id: 'meet-localgov', kind: 'meet', outcome: 'localgov',
    link: 'A state is not the only government that makes rules. Cities, towns and counties make them too: parking, fences, trash, parks.',
    case: 'u6-fence', mark: 'S1',
    strip: [
      'There is a town, Ashby, and its town council: the group of people who make decisions for the town.',
      'The state has a law that lets each town make rules for its own streets and buildings. The council is using that law.',
      'The council, not the state legislature, voted on a fence rule: how tall a front-yard fence may be. It covers only Ashby.',
      'No law of the whole country appears, and the rule takes away no right.'
    ],
    explain: [
      'Where does a town’s power come from? Not from the Constitution, which sets out the federal government’s powers and leaves the rest to the states. A town is not a state. Its power comes from its state, which hands some of its own power down to it, usually in a state law or in a charter, the founding document of a city. Because the state hands the power down, the state can usually widen it, narrow it or take it back. A city has no powers of its own that the state cannot touch.',
      'A rule made by a city, a town or a county is called an ordinance, and most are about everyday local matters: streets, parking, zoning (which kinds of building may go where), permits, trash, parks, libraries.',
      'Everything else here is as in the last case: nothing federal covers the matter, and no right is taken away. The only difference is who made the rule. A state made the last one itself. A town made this one, using what its state gave it.'
    ],
    feature: { step: 'S1', option: 'local' },
    name: 'The name for this case is {o:localgov}. “Handed down” means passed from the state to a place below it.' },

  { id: 'check-localgov', kind: 'check', after: 'localgov',
    case: 'u6-c-parking',
    ask: { type: 'option', step: 'S1', among: ['own', 'local'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-police-localgov', kind: 'lookalike', ledger: 'police~localgov',
    h: 'The same noise rule, from a state and from a town',
    link: 'These two names differ only in who made the rule. Here is a rule from each side by side.',
    cases: ['u6-quiet-state', 'u6-quiet-town'],
    instruction: 'Both cases are about loud music at night, and in both the rule says the same thing: no loud music in a home between eleven at night and seven in the morning. Compare one thing: who made the rule.',
    prompt: { kind: 'which', option: 'S1.local', answer: 'u6-quiet-town' },
    difference: [
      'In Case A the lawmakers of the state of Ostrow passed a law for the whole state. The answer is {a:S1.own}, and with nothing else covering the matter, the case is {o:police}.',
      'In Case B the council of the town of Orsley voted, using the power its state gives to towns, and the rule covers only Orsley. The answer is {a:S1.local}, and the case is {o:localgov}.',
      'The words of the rule are the same in both, so only who made it tells them apart.'
    ] },

  /* ---------- The first question of this unit ---------- */
  { id: 'q-who', kind: 'question', step: 'S1',
    h: 'The first question',
    link: 'You have seen this question at the end of each card. Here it is in one place.',
    decides: [
      'This question does not always give the name: a second question comes after it. Two rules with the same words and the same subject can get different answers, {a:S1.own} for one and {a:S1.local} for the other, and only who made the rule tells them apart.'
    ],
    how: [
      'Find the words that name who made the rule. Do not stop at the first government the story names: a story may mention a state’s law and then go on to a rule that a town made under it, as the fence case did. The question is who made this rule.'
    ] },

  { id: 'check-who', kind: 'check', after: 'S1',
    case: 'u6-c-pool',
    ask: { type: 'step', step: 'S1' } }
]);

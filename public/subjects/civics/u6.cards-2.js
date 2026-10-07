// Civics, Unit Six, part two: the second name (a city, a town or a county making a rule), the look-alike pair it forms
// with the first, and the first question of this unit.

FC.cards('civics', 'u6', [

  /* ---------- The second name: power handed down to a city, a town or a county ---------- */
  { id: 'meet-localgov', kind: 'meet', outcome: 'localgov',
    link: 'A state is not the only one that makes rules. Cities, towns and counties make them too: parking, fences, trash, parks.',
    case: 'u6-fence', mark: 'S1',
    explain: [
      'Ashby’s town council, not the state legislature, voted on the fence rule, and it covers only Ashby. The council could do that because a state law lets each town make rules for its own streets and buildings.',
      'A town’s power does not come from the Constitution. It comes from its state, which hands some of its own power down, usually in a state law or in a charter, the city’s founding document. So the state can usually widen that power, narrow it or take it back.',
      'A rule made by a city, a town or a county is often called an ordinance. Most are about everyday local matters: streets, parking, zoning (which buildings may go where), permits, trash, parks, libraries.',
      'Everything else is the same as the deposit rule: no federal law covers the matter, and no right is taken away. Only the maker is different.'
    ],
    spot: [
      { do: 'Find who made the rule: the Ashby town council.', why: 'A city, a town or a county, not the state’s own lawmakers.' },
      { do: 'Find where it got the power: the state’s law on towns.', why: 'A town has only the power its state handed down.' },
      { do: 'Check the matter is local and nothing else covers it: front-yard fences, no federal law, no right taken away.', why: 'A local matter that nothing else covers is the town’s to decide.' }
    ],
    feature: { step: 'S1', option: 'local' },
    name: 'This is {o:localgov}: the town used power its state handed down.' },

  { id: 'check-localgov', kind: 'check', after: 'localgov',
    case: 'u6-c-parking',
    ask: { type: 'option', step: 'S1', among: ['own', 'local'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-police-localgov', kind: 'lookalike', ledger: 'police~localgov',
    h: 'The same noise rule, from a state and from a town',
    link: 'These two names differ only in who made the rule. Here is a noise rule from each side by side.',
    cases: ['u6-quiet-state', 'u6-quiet-town'],
    instruction: 'Both stories are about loud music at night, and both rules say the same thing: no loud music in a home between eleven at night and seven in the morning. Compare one thing: who made the rule.',
    prompt: { kind: 'which', option: 'S1.local', answer: 'u6-quiet-town' },
    difference: [
      'In Story A the Ostrow legislature passed a law for the whole state. The answer is {a:S1.own}, and with nothing else covering the matter, it is {o:police}.',
      'In Story B the Orsley town council voted, using the power its state gives to towns, and the rule covers only Orsley. The answer is {a:S1.local}, and it is {o:localgov}.',
      'The words of the rule are the same in both. Only who made it tells them apart.'
    ] },

  /* ---------- The first question of this unit ---------- */
  { id: 'q-who', kind: 'question', step: 'S1',
    h: 'The first question: who made the rule?',
    link: 'You have answered this at the end of each card. Here it is in one place.',
    decides: [
      'Two rules with the same words on the same subject can get different answers: {a:S1.own} for one and {a:S1.local} for the other. When nothing else covers the matter, that decides the name: {o:police} for a state, {o:localgov} for a city or county. For the other three names, the second question decides.'
    ],
    how: [
      { do: 'Find the words that name who made the rule: “the legislature passed”, “the town council voted”.', why: 'The maker is almost always in one sentence.' },
      { do: 'Don’t stop at the first government the story names.', why: 'A story can mention a state law and then go on to a rule a town made under it, as the fence story did.' },
      { do: 'Ask who made this rule: the state itself, or a city, town or county?', why: 'The state’s governor and its own offices count as the state.' }
    ] },

  { id: 'check-who', kind: 'check', after: 'S1',
    case: 'u6-c-pool',
    ask: { type: 'step', step: 'S1' } }
]);

// Civics, Unit Six, part two: the second name (a city, a town or a county making a rule), the look-alike pair it forms
// with the first, the wrong idea about a city's power, and the key's first question of this unit.

FC.cards('civics', 'u6', [

  /* ---------- The second name: power handed down to a city, a town or a county ---------- */
  { id: 'meet-localgov', kind: 'meet', outcome: 'localgov',
    link: 'The last name was a state making a rule of its own. A state is not the only government that makes rules. Cities, towns and counties make them too, and these are the rules you meet most often: parking, fences, rubbish, parks.',
    case: 'u6-fence', mark: 'S1',
    strip: [
      'There is a town, Ashby, and its town council: the group of people who make decisions for the town.',
      'The state has a law that lets each town make rules for its own streets and buildings. The council is using that law.',
      'The council, not the state legislature, voted on the fence rule, and the rule covers only Ashby.',
      'The matter is local: how tall a fence may be in a front yard.',
      'No law of the whole country appears, and the rule takes away no right.'
    ],
    explain: [
      'What you are shown is a town deciding something about itself. The council of Ashby voted, and the vote covers the fences of one town. Cities, towns and counties each have a government of their own: a council or a board, and often a mayor.',
      'Where does a town’s power come from? Not from the Constitution. The Constitution sets out the powers of the federal government and leaves the rest to the states. A town is not a state. Its power comes from its state, which hands some of its own power down to it, usually in a state law or in a charter, which is the founding document of a city. The case says so: the state’s law on towns lets each town set rules for its own streets and buildings. Because the state hands the power down, the state can usually widen it, narrow it or take it back.',
      'A rule made by a city, a town or a county is called an ordinance. The ordinances people meet most are about everyday local matters: streets, parking, zoning, which means which kinds of building may go where, building permits, rubbish collection, parks and libraries. A fence rule belongs with these.',
      'So the matter, and everything else in the case, looks just like the last name: nothing from the federal side covers the fences, and no right is taken away. The only difference is who made the rule. A state made the last one itself. A town made this one, using what its state gave it. That difference is what gives this case its own name.'
    ],
    feature: { step: 'S1', option: 'local' },
    name: 'The answer to this question is the one printed above, and with nothing else covering the matter, the name for the whole case is {o:localgov}. “Handed down” means passed from the state to a place below it. The two names are as alike as two names can be, and the only difference is who made the rule.' },

  { id: 'again-localgov', kind: 'again', outcome: 'localgov',
    link: 'The fence rule gave you what to point to: {needs:localgov}. Here is a second case, and this time the government is a county, not a town.',
    first: 'u6-fence', second: 'u6-boatramp', step: 'S1',
    instruction: 'Find what the two cases share. Ignore the story (a fence, a boat ramp) and ignore what the rule says. Look at one thing only: who made the rule, and where its power came from.',
    prompt: { kind: 'phrase', answer: 'Under the state’s law on counties, the Vance County board voted' },
    shared: [
      'In both cases a body that governs one place voted on a rule for that place: a town council in one case, a county board in the other. And both cases say where the power came from: the state’s law on towns, and the state’s law on counties. Neither rule was made by the state itself.',
      'A town is smaller than a county, and a fence rule is not a fee. The two stories share nothing else. So this holds for any city, any town and any county, and for any rule on a local matter. That is what {o:localgov} names.'
    ] },

  { id: 'portrait-localgov', kind: 'portrait', outcome: 'localgov',
    link: 'You know what to point to for {o:localgov}. This card fills in the rest of the picture, and says what these governments decide.',
    typical: [
      'The maker is named, and it is a city, a town or a county, in words such as “the city council”, “the county board”, “the mayor”, “the town”. The story sometimes names the state law that gave the power. It does not have to.',
      'The matter is local: streets, parking, zoning, building permits, rubbish, parks, libraries, how late a place may be noisy, what a pet owner must pay. It touches one place, and the rule covers that place only.',
      'It does not matter how big the place is, or whether the rule is a vote of a council or an order from a mayor.',
      'The state stays above the town. The state can usually widen, narrow or take back the power it handed down, and where the state has passed a law on the same matter, the state’s law usually wins.'
    ],
    not: [
      'A rule made by a state for the whole state is not of this kind, even when the matter is one a town could handle. Ask who made this rule.',
      'And a story that only mentions a town is not enough. If a town is only where something happened, and the rule was made by the state, the answer to the question about who made the rule is the other one.'
    ],
    wild: ['“The city council voted…”', '“A county ordinance…”', '“You need a permit from the town.”', '“Zoning…”', '“The county board…”'],
    self: 'In your own life this is the rule behind where you may park, how tall a fence may be, when the library is open, when the rubbish is collected, and what you need a permit for before you build. It is also the rule most likely to be different from one town to the next.',
    ask: '“Which government made this rule: the state, or a city, a town or a county? And where did its power come from?” If a city, a town or a county made it, and nothing else covers the matter, the name is {o:localgov}.' },

  { id: 'check-localgov', kind: 'check', after: 'localgov',
    case: 'u6-c-parking',
    ask: { type: 'option', step: 'S1', among: ['own', 'local'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-police-localgov', kind: 'lookalike', ledger: 'police~localgov',
    h: 'The same noise rule, from a state and from a town',
    link: 'You have now met the two names that differ only in who made the rule. This card puts a rule from each side by side.',
    cases: ['u6-quiet-state', 'u6-quiet-town'],
    instruction: 'Both cases are about loud music at night, and in both the rule says the same thing: no loud music in a home between eleven at night and seven in the morning. Compare one thing: who made the rule.',
    prompt: { kind: 'which', option: 'S1.local', answer: 'u6-quiet-town' },
    difference: [
      'In Case A the lawmakers of the state of Ostrow passed a law for the whole state. The answer is {a:S1.own}, and with nothing else covering the matter, the case is {o:police}.',
      'In Case B the council of the town of Orsley voted, using the power its state gives to towns, and the rule covers only Orsley. The answer is {a:S1.local}, and the case is {o:localgov}.',
      'The words of the rule are the same in both cases, so you cannot tell the cases apart by what the rule says, or by the subject. You can only tell by who made it.'
    ] },

  /* ---------- A wrong idea about a city's power ---------- */
  { id: 'refute-citypower', kind: 'refute', about: 'localgov',
    h: 'A wrong idea about what a city can do',
    link: 'A moment ago you read where a town’s power comes from. A different idea is common, and anyone who holds it will give the wrong name to every rule a city makes.',
    idea: '“A city has powers of its own, and the state cannot touch them.”',
    verdict: 'This is wrong.',
    right: [
      'A city, a town or a county has the power its state hands down to it, usually in a state law or in a charter. The state can usually widen that power, narrow it or take it back. Where a state passes a law on the same matter as an ordinance of the city, the state’s law usually wins.',
      'So a city has no powers of its own that stand against its state. Before you use the name {o:localgov}, point to the maker, a council, a board or a mayor, and remember that the power it is using is the state’s, handed down.'
    ],
    testedBy: ['u6-claim-cities'] },

  /* ---------- The first question of this unit ---------- */
  { id: 'q-who', kind: 'question', step: 'S1',
    h: 'The first question, and what it does and does not decide',
    link: 'Under the name at the end of each of the last cards you have seen a question and one of its answers. This card puts that question and both its answers in one place, and says why it is asked.',
    decides: [
      'The answer to this question does not always give the name. Whichever answer a case gets, the name can still depend on a second question, and every case in this unit is asked both. What this question does is say whether the rule is a state’s own, or a city’s, a town’s or a county’s. That is worth asking because a city, a town and a county have no power of their own: they use only what their state handed down, and the state can take it back.',
      'So two rules with the same words and the same subject can get different names. For one the answer is {a:S1.own}; for the other it is {a:S1.local}. Nothing about the subject, the words of the rule, or the people it affects tells them apart. Only who made the rule does.'
    ],
    how: [
      'Find the words in the case that name who made the rule. A state’s rule comes from its legislature, its governor or one of its own offices. A rule from a city, a town or a county comes from a council, a board or a mayor. Then ask which of the two it is.',
      'Do not stop at the first government the story names. A story may mention the state’s law and then go on to a rule that a town made under it, as the fence case did. The question is who made this rule, and the state’s law there was only the source of the town’s power.'
    ],
    whenBoth: 'Sometimes a story names both a state and a town. Ask which of them made the rule the story is about. A town’s rule made under a state’s law is the town’s rule. A state’s rule that a town only has to follow is the state’s.' },

  { id: 'check-who', kind: 'check', after: 'S1',
    case: 'u6-c-pool',
    ask: { type: 'step', step: 'S1' } }
]);

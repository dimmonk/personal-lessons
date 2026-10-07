// Psychology, Unit Four, part one (second half): the ordinary way of being and its first look-alike pair, then the second narcissism.

FC.cards('psychology', 'u4', [

  /* ---------- An ordinary personality ---------- */
  { id: 'meet-ordpersonality', kind: 'meet', outcome: 'ordpersonality',
    link: 'Most people you will ever describe are not like Dennis, and there is a name for them.',
    case: 'pa-rosa', mark: 'P1',
    explain: [
      'Rosa is bossy and loud, and has been since she was a girl, so you might think of {o:narcgrand}. But she laughs at her own mistakes, and when her sister’s husband won an award she organized the party. Nothing is being lost: her staff stay, and so do her friends.',
      'Everyone has a way of being: shy, loud, dramatic, blunt, touchy. A strong one is still ordinary. It turns into something else only when it keeps costing someone, year after year.'
    ],
    spot: [
      { do: 'Check the years and places: thirty years at the bakery, and before that a school team, a union and a church guild.', why: 'It is the same Rosa everywhere, so it is a way of being and not a mood.' },
      { do: 'See what she is like: the loudest and surest person in every room.', why: 'A strong way of being is still an ordinary one.' },
      { do: 'Watch what she does when someone else is thanked: she organizes the party.', why: 'No scorn, no sulking and no scene.' },
      { do: 'Look for the cost, and find none: her staff stay fifteen years, and she still has the three friends from school.', why: 'No lasting damage means there is nothing more to name.' }
    ],
    feature: { step: 'P1', option: 'steady' },
    name: 'This is {o:ordpersonality}, and it is the answer you will need most often. Rosa is loud and bossy, but nothing she does keeps hurting anyone.' },

  { id: 'check-ordpersonality', kind: 'check', after: 'ordpersonality',
    case: 'pa-marcus',
    ask: { type: 'option', step: 'P1', among: ['above', 'steady'] } },

  { id: 'look-narcgrand-ordpersonality', kind: 'lookalike', ledger: 'narcgrand~ordpersonality',
    link: 'Both can be loud and sure of themselves, and this is the pair people mix up most. Here are two head chefs who each say they are the best in the city.',
    cases: ['pa-paolo', 'pa-sunil'],
    instruction: 'Both chefs tell every new cook that he is the best in the city. Compare two things: what each does when a young cook is written up in the paper, and what the years have cost.',
    prompt: { kind: 'which', option: 'P1.above', answer: 'pa-paolo' },
    difference: [
      'In Story A, Paolo runs the young cook down: “a pretty face with a borrowed recipe”. The best cooks leave within a year, and his daughters stopped bringing friends years ago. That is {o:narcgrand}.',
      'In Story B, Sunil says the same thing about himself, and then frames the article. His cooks stay for years, and some still call him. That is {o:ordpersonality}.',
      'The boast is the same. What makes it {o:narcgrand} is the scorn when someone else is praised, and the cost that keeps coming back.'
    ] },

  /* ---------- Vulnerable narcissism ---------- */
  { id: 'meet-narcvuln', kind: 'meet', outcome: 'narcvuln',
    link: 'The next one is built the same way underneath, but you can miss it because the person is quiet.',
    case: 'pa-ellis', mark: 'P1',
    explain: [
      'Put Ellis next to Dennis. Dennis is loud and scornful. Ellis is quiet, polite and says he has been overlooked. Underneath they work the same way: how much they think they are worth depends on being treated as special.',
      'The difference is what they do when it is not given. Dennis hits out. Ellis goes quiet, keeps a count of what he is owed, and lets the resentment grow. Both care little how other people feel, and both keep costing.'
    ],
    spot: [
      { do: 'Check the years and places: school, three offices, a marriage and a sister.', why: 'The same thing, over years, with different people.' },
      { do: 'Listen for “I am overlooked”: “Some people just get handed things.”', why: 'He says he is owed more than he gets.' },
      { do: 'Watch what he does when someone else is chosen: he stops speaking to the colleagues who were promoted, and to his sister.', why: 'He goes cold and hurt, where {o:narcgrand} would run them down.' },
      { do: 'Look for the cost: his sister has not heard from him in two years, and he has turned down two promotions.', why: 'The silence keeps costing him and the people close to him.' }
    ],
    feature: { step: 'P1', option: 'overlooked' },
    name: 'This is {o:narcvuln}. “Vulnerable” means easily hurt: the same need to be treated as special, shown as hurt silence instead of anger.' },

  { id: 'check-narcvuln', kind: 'check', after: 'narcvuln',
    case: 'pa-lars',
    ask: { type: 'option', step: 'P1', among: ['above', 'steady', 'overlooked'] } }
]);

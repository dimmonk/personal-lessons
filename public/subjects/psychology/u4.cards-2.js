// Psychology, Unit Four, part one (second half): the ordinary way of being and its first look-alike pair, then the second narcissism.

FC.cards('psychology', 'u4', [

  /* ---------- An ordinary personality ---------- */
  { id: 'meet-ordpersonality', kind: 'meet', outcome: 'ordpersonality',
    link: 'Most of the people you will ever describe are not like that, and there is a name for them.',
    case: 'pa-rosa', mark: 'P1',
    strip: [
      'There are years and more than one place: thirty years of the bakery, and before that a school team, a trade union and a church guild.',
      'The same way of being runs through all of it: Rosa is the loudest and surest person in every room.',
      'It is a strong way of being, and her family teases her about it. She does not turn scornful when someone else is thanked: she organizes the party.',
      'It does not keep costing. Her staff have stayed an average of fifteen years, and she has the same three friends she made at school.'
    ],
    explain: [
      'Rosa is bossy and loud, and has been since she was a girl. If you listened only to how she acts, you might think of {o:narcgrand}: she tells everyone what to do. But she laughs at her own mistakes, and when her sister’s husband won an award she organized the party. And nothing is being lost: her staff stay, and so do her friends.',
      'Everyone has a way of being: shy, loud, dramatic, blunt, touchy, easy-going. Most are ordinary, and they do not stop being ordinary because they are strong. A way of being becomes something else, and something much rarer, when it keeps costing: year after year, in place after place, someone loses a job, a friendship or their trust. So here you point to the long view, and then to the opposite of a cost: no repeated damage. That does not mean the person never has a bad day. It means that what they are like does not keep leaving damage behind it.',
      'This is the answer you will need most often.'
    ],
    feature: { step: 'P1', option: 'steady' },
    name: 'The name for this is {o:ordpersonality}. "Ordinary" means that it does not keep costing anyone. The name does not say that the person is easy to be with: Rosa is loud and bossy. It says that her way of being does not keep leaving damage behind.' },

  { id: 'check-ordpersonality', kind: 'check', after: 'ordpersonality',
    case: 'pa-marcus',
    ask: { type: 'option', step: 'P1', among: ['above', 'steady'] } },

  { id: 'look-narcgrand-ordpersonality', kind: 'lookalike', ledger: 'narcgrand~ordpersonality',
    link: 'Both of these can be loud and sure of themselves. This is the pair people most often get wrong, so here are two head chefs who each say they are the best in the city.',
    cases: ['pa-paolo', 'pa-sunil'],
    instruction: 'Both chefs tell every new cook that he is the best in the city. Compare two things: what each does when a young cook is written up in the paper, and what the years have cost.',
    prompt: { kind: 'which', option: 'P1.above', answer: 'pa-paolo' },
    difference: [
      'In Case A Paolo runs the young cook down: "a pretty face with a borrowed recipe". He stops giving her shifts. The best cooks leave within a year, and his daughters stopped bringing friends years ago. The answer is {a:P1.above}, and the case is {o:narcgrand}.',
      'In Case B Sunil says the same thing about himself, and frames the article. His cooks stay for years, and some of them still call him. The answer is {a:P1.steady}, and the case is {o:ordpersonality}.',
      'The boast is the same in both. What makes it {o:narcgrand} is the scorn when another person is praised, and a cost that keeps coming back.'
    ] },

  /* ---------- Vulnerable narcissism ---------- */
  { id: 'meet-narcvuln', kind: 'meet', outcome: 'narcvuln',
    link: 'The next name has the same root as the first, and you may not notice it at first, because the person is quiet.',
    case: 'pa-ellis', mark: 'P1',
    strip: [
      'There are years and more than one place: school, three offices, a marriage, a sister.',
      'Ellis says he is overlooked and owed more than he gets: "Some people just get handed things."',
      'He takes little interest in other people’s feelings: when his sister got engaged he left before the cake, and he keeps a count of who has thanked him.',
      'When he is not treated as special, he does not attack. He pulls away, hurt, and stops speaking: to colleagues who were promoted, to his sister.',
      'It keeps costing: his sister has not heard from him in two years, his wife has twice asked him to talk to someone, and he has turned down two promotions.'
    ],
    explain: [
      'Put Ellis next to Dennis. Dennis is loud and scornful and acts above everyone, and Ellis is quiet, polite and says he has been overlooked. Underneath they are built the same way: how much they are worth depends on being treated as special, and when it is not given, that sense of worth feels under threat.',
      'Dennis defends it outward, with anger and scorn at whoever is in the way. Ellis defends it inward, with hurt and resentment, which is a lasting bitterness about something you feel you were owed. He does not run his sister down. He goes quiet, keeps count of what he is owed, and lets it grow. In both there is little room for what other people feel, and in both it keeps costing.'
    ],
    feature: { step: 'P1', option: 'overlooked' },
    name: 'The name for this is {o:narcvuln}. "Narcissism" is the same word as before. "Vulnerable" means easily hurt, which is how this form looks from outside. So the name says: the same sense of worth, defended inward.' },

  { id: 'check-narcvuln', kind: 'check', after: 'narcvuln',
    case: 'pa-lars',
    ask: { type: 'option', step: 'P1', among: ['above', 'steady', 'overlooked'] } }
]);

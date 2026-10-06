// Psychology, Unit Four, part one (second half) and the start of part two: the ordinary way of being, its first look-alike pair,
// and the second narcissism.

FC.cards('psychology', 'u4', [

  /* ---------- An ordinary personality ---------- */
  { id: 'meet-ordpersonality', kind: 'meet', outcome: 'ordpersonality',
    link: 'Everything so far has been about ways of being that keep costing something. Most of the people you will ever describe are not like that, and there is a name for them. It is easy to forget, so it is taught as carefully as the others.',
    case: 'pa-rosa', mark: 'P1',
    strip: [
      'There are years and more than one place: thirty years of the bakery, and before that a school team, a trade union and a church guild.',
      'The same way of being runs through all of it: Rosa is the loudest and surest person in every room.',
      'It is a strong way of being, and her family teases her about it. She does not turn scornful when someone else is thanked: she organizes the party.',
      'It does not keep costing. Her staff have stayed an average of fifteen years, and she has the same three friends she made at school.'
    ],
    explain: [
      'Rosa is bossy and loud, and has been since she was a girl. If you listened only to how she acts, you might think of {o:narcgrand}: she tells everyone what to do. But look at what the case shows beside that. She laughs at her own mistakes, and when her sister’s husband won an award she organized the party. And nothing is being lost: her staff stay, and so do her friends.',
      'Everyone has a way of being: shy, loud, dramatic, blunt, touchy, easy-going. Most of these are ordinary. They do not stop being ordinary because they are strong. A way of being becomes something else, and something much rarer, when it keeps costing: when year after year, in place after place, someone loses a job, a friendship or their trust, and it is still going on.',
      'So for an ordinary way of being, you point to the same long view as for the other names (years, more than one place, more than one relationship), and then to the opposite of a cost: no repeated damage. This does not mean that the person never has a bad day, or never upsets anyone. It means that what they are like is not something that keeps leaving damage behind it.',
      'This is the answer you will need most often. For a very large share of the people anyone describes, it is the right one.'
    ],
    feature: { step: 'P1', option: 'steady' },
    name: 'The name for this is {o:ordpersonality}. "Personality" means how a person usually is, and "ordinary" means that it does not keep costing anyone. The name does not say that the person is easy to be with: Rosa is loud and bossy. It says that her way of being does not keep leaving damage behind.' },

  { id: 'again-ordpersonality', kind: 'again', outcome: 'ordpersonality',
    link: 'Rosa gave you what to point to: {needs:ordpersonality}. Here is a person as unlike her as you could find.',
    first: 'pa-rosa', second: 'pa-imran', step: 'P1',
    instruction: 'The marked words in the first case are two different things: the way of being, and what it has not cost. Find the words in this case that match the second one: what the way of being has cost. Ignore how loud or how quiet each person is.',
    prompt: { kind: 'phrase', answer: 'He has kept the same job for eleven years, his three closest friends are the three he made in college, and his daughters say he is the one they call when they need to talk' },
    shared: [
      'Rosa is loud and Imran is shy, so what the two share is not the way of being. Each has kept the same way for years and in more than one place, and in each case what you are shown is people staying: staff of fifteen years, friends from school, daughters who call.',
      'So this name is not about being shy, or loud, or any one thing. It holds wherever a person has one way of being, for years and in many places, and it does not keep costing anyone. That is what {o:ordpersonality} names.'
    ] },

  { id: 'portrait-ordpersonality', kind: 'portrait', outcome: 'ordpersonality',
    link: 'You know what to point to. This card fills in the rest of the picture, because this name is the one most often missed.',
    typical: [
      'It covers a very wide range. Loud and shy, dramatic and blunt, easy-going and touchy are all here. The person can be hard to live with and still be here.',
      'The way of being is steady across years and places: the same person at school, at work and at home.',
      'What is missing is the repeated cost. People stay. Jobs last. Friendships last for decades. When the person upsets someone, it can often be put right: they laugh, apologize, change what they did.',
      'A bad week, or one big falling-out, is part of life and does not turn it into something else.',
      'It is not a lesser answer. For most of the people a case describes, it is the right one.'
    ],
    not: 'It is not the name for anyone who is nice. Someone can be unpleasant, loud or a bit of a nuisance and still show {o:ordpersonality}, if what they do does not keep leaving damage behind. And it is not the name for a case that has given you too little. If a case shows only a week or one occasion, the first question has already sent you somewhere else, and this question is not asked.',
    wild: ['"That’s just how he is."', '"She’s always been like that."', '"He’s a bit much, but he’d do anything for you."', '"Loud, but a good heart."'],
    self: 'You will meet it in most of the people you know well: the friend who is always late and always forgiven, the uncle who tells the same story, the colleague who says exactly what she thinks.',
    ask: '"What has this way of being cost, again and again, and who has paid?" If the honest answer is "very little, and it was put right", the answer is this one.' },

  { id: 'check-ordpersonality', kind: 'check', after: 'ordpersonality',
    case: 'pa-marcus',
    ask: { type: 'option', step: 'P1', among: ['above', 'steady'] } },

  { id: 'look-narcgrand-ordpersonality', kind: 'lookalike', ledger: 'narcgrand~ordpersonality',
    link: 'You have met both names, and both can be loud and sure of themselves. This is the pair people most often get wrong, so here are two head chefs who each say they are the best in the city.',
    cases: ['pa-paolo', 'pa-sunil'],
    instruction: 'Both chefs tell every new cook that he is the best in the city. Compare two things: what each does when a young cook is written up in the paper, and what the years have cost.',
    prompt: { kind: 'which', option: 'P1.above', answer: 'pa-paolo' },
    difference: [
      'In Case A Paolo runs the young cook down: "a pretty face with a borrowed recipe". He stops giving her shifts. The best cooks leave within a year, and his daughters stopped bringing friends years ago. The answer is {a:P1.above}, and the case is {o:narcgrand}.',
      'In Case B Sunil says the same thing about himself, and frames the article. His cooks stay for years, and some of them still call him. The answer is {a:P1.steady}, and the case is {o:ordpersonality}.',
      'The boast is the same in both. What differs is what comes with it. A boast, and even a loud, bossy way of being, is not enough for {o:narcgrand}. What makes it that name is the scorn when another person is praised, and a cost that keeps coming back.'
    ] },

  /* ---------- Vulnerable narcissism ---------- */
  { id: 'meet-narcvuln', kind: 'meet', outcome: 'narcvuln',
    link: 'So far the sense of worth that depends on being treated as special has been loud. The next name has the same root, and you may not notice it at first, because the person is quiet.',
    case: 'pa-ellis', mark: 'P1',
    strip: [
      'There are years and more than one place: school, three offices, a marriage, a sister.',
      'Ellis says he is overlooked and owed more than he gets: "Some people just get handed things."',
      'He takes little interest in other people’s feelings: when his sister got engaged he left before the cake, and he keeps a count of who has thanked him.',
      'When he is not treated as special, he does not attack. He pulls away, hurt, and stops speaking: to colleagues who were promoted, to his sister.',
      'It keeps costing: his sister has not heard from him in two years, his wife has twice asked him to talk to someone, and he has turned down two promotions.'
    ],
    explain: [
      'Put Ellis next to Dennis. On the surface they could hardly be more different. Dennis is loud and scornful, and Ellis is quiet and polite. Dennis acts above everyone, and Ellis says he has been overlooked.',
      'Underneath, they are built the same way. Remember the idea from Dennis: for some people, how much they are worth depends on being treated as special by others, again and again. When it is not given, that sense of worth feels under threat, and the person defends it.',
      'Dennis defends it outward, with anger and scorn at whoever is in the way. Ellis defends it inward, with hurt and resentment. "Resentment" is a lasting bitterness about something you feel you were owed. Ellis does not run his sister down. He goes quiet, keeps count of what he is owed, and lets it grow. A person like this feels that other people keep failing to see how special they are, and pulls away and resents it rather than lashing out.',
      'That is why both of them share one name, narcissism. It is the name for a sense of worth that depends on being treated as special. What differs is how it is defended: outward, with anger and scorn, or inward, with hurt and resentment. In both there is little room for what other people feel, and in both it keeps costing.',
      'It is not the same as shyness. A shy person is also quiet, but shyness does not keep a count of what people owe. Ellis’s silence has a reason and a target.'
    ],
    feature: { step: 'P1', option: 'overlooked' },
    name: 'The name for this is {o:narcvuln}. "Narcissism" is the same word as before. "Vulnerable" means easily hurt, which is how this form looks from outside: the person is hurt by what others would hardly notice. So the name says: the same sense of worth, defended inward.' },

  { id: 'again-narcvuln', kind: 'again', outcome: 'narcvuln',
    link: 'Ellis gave you what to point to: {needs:narcvuln}. Here is a second case, in a university and not an office.',
    first: 'pa-ellis', second: 'pa-gwen', step: 'P1',
    instruction: 'The marked words in the first case are three different things: what he says about being overlooked, what he does when someone else is promoted, and what it has cost. Find the words in this case that match the middle one: what the person does when someone else is thanked or promoted. Ignore the setting (a council office, a university).',
    prompt: { kind: 'phrase', answer: "In each of her three research groups she has gone silent whenever someone else was thanked, and she writes, 'No need to mention me, I'm used to it.'" },
    shared: [
      'Ellis and Gwen each say they are overlooked and owed more: "Some people just get handed things", "her ideas are taken without credit". Each goes quiet and cold when someone else is thanked or promoted, and neither argues the point out loud. And in each case it keeps costing: a sister who has not heard from him in two years, two collaborators who have stopped working with her.',
      'A clerk and a research student, a man and a woman. So this is not about offices, universities or gender. Whatever the story, the same things are there: the claim to have been overlooked, the hurt withdrawal, the little room for anyone else’s feelings, and the cost. That is what {o:narcvuln} names.'
    ] }
]);

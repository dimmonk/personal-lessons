// Political Ideologies, Unit Two, part two (second half): a text that cares as much about who holds power as about the businesses,
// the pair that sets it beside the name before it, and the exception that says nothing about the businesses at all.

FC.cards('ideology', 'u2', [

  /* ---------- Marxism-Leninism ---------- */
  { id: 'meet-ml', kind: 'meet', outcome: 'ml',
    link: 'This text cares as much about who holds power as about the businesses.',
    case: 'c-ml-mill', mark: 'C2',
    explain: [
      'The earlier texts asked the government for things, or promised to win an election and pass a law. This one says the owners are too strong to beat with votes, so the workers must take power through a party and keep it, with no rival allowed.',
      'Here the words about power decide, not the words about the businesses. What matters is that the text never offers to give power up at an election.'
    ],
    spot: [
      { do: 'Find who takes power: “the workers, led by our party”.', why: 'A party takes power instead of asking the voters for it.' },
      { do: 'Check how: they “must take power and keep it”.', why: 'Power that is taken, not voted for, is the first half.' },
      { do: 'Look for rivals: “there will be one party, ours, and no rivals”.', why: 'With no rival there is no election it could lose.' }
    ],
    feature: { step: 'C2', option: 'seize' },
    name: 'This is {o:ml}: a party, or the workers, takes power and keeps it. Check the words before you use it, because “communist” is often thrown at plans that say nothing of the kind.' },

  { id: 'check-ml', kind: 'check', after: 'ml',
    case: 'c-ml-sites',
    ask: { type: 'phrase', step: 'C2', say: 'Which words say the committee will take power and keep it, with no election it could lose? Tap them.',
           answer: 'The committee will take power in the city and hold it. It will be the only party, and it will not hold elections it could lose' } },

  /* ---------- The pair that hand the same businesses to the government by different roads ---------- */
  { id: 'look-demsoc-ml', kind: 'lookalike', ledger: 'demsoc~ml',
    link: 'These two ask for the same thing to be done with the businesses. The difference is the road to it.',
    cases: ['c-lk-dmml-dm', 'c-lk-dmml-ml'],
    instruction: 'Both stories are about the Hartfell mines and say the same about them. Compare one thing: once the text has what it wants, can the people asking be voted out?',
    prompt: { kind: 'which', option: 'C2.seize', answer: 'c-lk-dmml-ml' },
    difference: [
      'In Story A the text will win a majority in parliament and pass the law. A majority can be lost at the next election, so the power stays with the voters. This is {o:demsoc}.',
      'In Story B the party will take power, keep it and allow no rival party. That cannot be lost at an election. The answer is {a:C2.seize}, so this is {o:ml}.',
      'The mines, the miners and the handover are the same in both. What differs is whether the people asking can be voted out.'
    ] },

  /* ---------- The exception that says nothing about the businesses ---------- */
  { id: 'exc-bulletin', kind: 'exception', looksLike: 'classonly', is: 'ml', ledger: 'classonly~ml',
    h: 'Nothing about the businesses, and a party that rules alone',
    link: 'A text that says nothing about the businesses is usually {o:classonly}. This one says nothing about them and is not.',
    case: 'c-ex-committee',
    setup: 'This bulletin takes the workers’ side and says nothing about the shipyard, just as {o:classonly} would. Yet it is {o:ml}.',
    prompt: { kind: 'phrase', answer: 'When the committee has the city, it will rule alone and no rival party will be allowed to stand' },
    because: [
      'The question about the businesses does not settle it, because the text says nothing about them. The question about the government does: the committee will rule alone and allow no rival party, so the answer is {a:C2.seize}, and that leaves one name, {o:ml}.',
      'Nothing has to be said about the businesses for this name to fit. What matters is who will hold power.'
    ],
    take: 'That is why there are two questions: a text can say nothing about the businesses and a great deal about power.' }
]);

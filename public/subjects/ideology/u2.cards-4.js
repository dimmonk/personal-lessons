// Political Ideologies, Unit Two, part two (second half): a text that cares as much about who holds power as about the businesses,
// the pair that sets it beside the name before it, and the exception that says nothing about the businesses at all.

FC.cards('ideology', 'u2', [

  /* ---------- Marxism-Leninism ---------- */
  { id: 'meet-ml', kind: 'meet', outcome: 'ml',
    link: 'In the last text the businesses passed to the government by a law or a vote. This text cares as much about who holds power as about what happens to the businesses.',
    case: 'c-ml-mill', mark: 'C2',
    strip: [
      'There are two groups in the text: the mill owners, and the workers. The text stands with the workers.',
      'It says the owners will never give up what they hold, and that the courts and the police they pay for will protect them.',
      'So it says the workers, led by one party, must take power and keep it: there will be one party and no rivals.',
      'The mills are to belong to the government the party forms.'
    ],
    explain: [
      'The earlier texts asked the government for things, or promised to win an election and pass a law. This text says the owners’ strength cannot be beaten by votes, so the workers must take power themselves, through a party, and hold it. And no rival party will be allowed.',
      'There are two halves: how power is won (taken, not voted for) and how it is kept (by one party, with no election it could lose). Either half is enough to point to. What matters is that the text does not offer to give power up at an election.',
      'The marked words answer the question about the government, not the one about the businesses: here the words about power decide.'
    ],
    feature: { step: 'C2', option: 'seize' },
    name: 'The name for this is {o:ml}: a party, or the workers, takes power and keeps it. Check the words before you use it: "communist" is often thrown at plans that say nothing of the kind.' },

  { id: 'check-ml', kind: 'check', after: 'ml',
    case: 'c-ml-sites',
    ask: { type: 'phrase', step: 'C2', say: 'Which words say that those writing will take power and keep it, with no election they could lose? Tap them.',
           answer: 'The committee will take power in the city and hold it. It will be the only party, and it will not hold elections it could lose' } },

  /* ---------- The pair that hand the same businesses to the government by different roads ---------- */
  { id: 'look-demsoc-ml', kind: 'lookalike', ledger: 'demsoc~ml',
    link: 'These two ask for the same thing to be done with the businesses, and people often mix them up. The difference is the road to it.',
    cases: ['c-lk-dmml-dm', 'c-lk-dmml-ml'],
    instruction: 'Both cases are about the Hartfell mines and say the same thing about them. Compare one thing: what the text says about who will hold power once it has got what it wants, and whether it can lose it.',
    prompt: { kind: 'which', option: 'C2.seize', answer: 'c-lk-dmml-ml' },
    difference: [
      'In Case A the text says it will win a majority in parliament and pass the law. A majority in parliament can be lost at the next election, so the text is leaving its power in the voters’ hands. It says nothing about taking power by force or ruling alone. The case is {o:demsoc}.',
      'In Case B the text says the party will take power and keep it, and allow no rival party. That cannot be lost at an election. The answer is {a:C2.seize}, and the case is {o:ml}.',
      'The mines, the miners and the handover are the same in both. What differs is whether the people asking can be voted out.'
    ] },

  /* ---------- The exception that says nothing about the businesses ---------- */
  { id: 'exc-bulletin', kind: 'exception', looksLike: 'classonly', is: 'ml', ledger: 'classonly~ml',
    h: 'Nothing about the businesses, and a party that rules alone',
    link: 'A text that says nothing about the businesses is usually {o:classonly}. This one says nothing about them and is not.',
    case: 'c-ex-committee',
    setup: 'This bulletin is on the workers’ side, and it says nothing about what should happen to the shipyard. That is what you point to for {o:classonly}. Yet this case is {o:ml}.',
    prompt: { kind: 'phrase', answer: 'When the committee has the city, it will rule alone and no rival party will be allowed to stand' },
    because: [
      'The text says nothing about what should happen to the businesses, so the question about the businesses does not settle it. The question about the government does: the committee will rule alone, and no rival party will be allowed, so the answer is {a:C2.seize}. That answer keeps one name, {o:ml}.',
      'Nothing has to be said about the businesses for this name to apply. What the name needs is {needs:ml}.'
    ],
    take: 'This is why there are two questions: a text can be silent on the businesses and loud on power.' }
]);

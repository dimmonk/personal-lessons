// Political Ideologies, Unit Two, part two (second half): a text that cares as much about who holds power as about the businesses,
// the pair that sets it beside the name before it, and the exception that says nothing about the businesses at all.

FC.cards('ideology', 'u2', [

  /* ---------- Marxism-Leninism ---------- */
  { id: 'meet-ml', kind: 'meet', outcome: 'ml',
    link: 'In the last cards the businesses passed to the government by a law or a vote. The next name is for a text that cares as much about who holds power as about what happens to the businesses.',
    case: 'c-ml-mill', mark: 'C2',
    strip: [
      'There are two groups in the text: the mill owners, and the workers. The text stands with the workers.',
      'It says the owners will never give up what they hold, and that the courts and the police they pay for will protect them.',
      'So it says the workers, led by one party, must take power and keep it.',
      'It says that once the party holds power there will be one party and no rivals.',
      'The mills are to belong to the government the party forms.'
    ],
    explain: [
      'The earlier texts asked the government for things, or promised to win the next election and pass a law. This text does not. It says that the owners’ strength cannot be beaten by votes, so the workers must take power themselves, through a party, and hold it. And it says that no rival party will be allowed.',
      'Notice the two halves. One is how power is won: taken, and not voted for. The other is how it is kept: held by one party, with no rivals and no election it could lose. Either half is enough to point to, and a text may give one or both. What matters is that the text does not offer to give power up at an election.',
      'People who argue for this say that owners and their allies will use every means to stop a change, so the workers need one organised party that cannot be voted out until the change is safe. People who disagree say that a party that cannot be voted out has no way to be told it is wrong. Both claims are argued over. The key does not decide between them. It goes by whether the text says that a party, or the workers, will take power and keep it.',
      'On this card the marked words answer the question about the government, and not the one about the businesses. That is because here the words about power are what decide, and the words about the mills could be changed without changing the name.'
    ],
    feature: { step: 'C2', option: 'seize' },
    name: 'The name for this is {o:ml}. It has two halves with a hyphen between them. The key does not need the history of either half. It uses the name for one thing: a party, or the workers, taking power and keeping it, with no offer to give it up at an election.' },

  { id: 'again-ml', kind: 'again', outcome: 'ml',
    link: 'The mill pamphlet gave you what to point to from one case: {needs:ml}. Here is a second case with a different story. This time the people are dockers, and the words come from a committee.',
    first: 'c-ml-mill', second: 'c-ml-docks', step: 'C2',
    instruction: 'Find what the two cases share. Ignore the story (a mill, a port). Look at one thing only: what the text says will happen to power, who takes it, and whether anyone will be allowed to take it back.',
    prompt: { kind: 'phrase', answer: 'The committee will take the docks and the city by force if it must, and it will allow no other party to stand against it' },
    shared: [
      'Both texts say that the people on the workers’ side will take power and keep it. The mill party says the workers, led by it, must take power, and that there will be one party and no rivals. The dockers’ committee says it will take the docks and the city by force if it must, and will allow no other party to stand. Neither offers to give up power at an election.',
      'The two texts differ on the businesses: the mills are to belong to the government the party forms, and the docks to the dockers who work them. So the words about the businesses do not decide this name. The words about power do.',
      'The stories share nothing else. So this holds wherever a text says that a party, or the workers, will take power and keep it. That is what {o:ml} names.'
    ] },

  { id: 'portrait-ml', kind: 'portrait', outcome: 'ml',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:ml} in real life.',
    typical: [
      'A party, a committee or the workers themselves are to take power, and the text says so.',
      'It usually says why votes will not do: the owners and their allies are too strong, or elections only leave things as they are.',
      'Power is to be held, not lent: no rival parties, and no election the party could lose, at least until the change is done.',
      'The language is often of struggle, discipline and organisation.',
      'The text may name the businesses, and say they pass to the government the party forms. It may also name nothing but the taking of power.'
    ],
    not: 'Wanting big changes is not enough, and neither is anger. A text that wants the businesses handed over by a vote is {o:demsoc}, however fiercely it says so. A text that is on the workers’ side and says nothing about who holds power is not this name. What you point to is the party, or the workers, taking power and keeping it, with no offer to give it up at an election.',
    wild: ['"The party will take power, and the party will keep it."', '"No rival parties while the change is in danger."', '"Elections are a game the owners always win."', '"A disciplined party must lead the workers."'],
    self: 'In your own life it is mostly the way a word like "communist" is thrown about: at a union, at a plan for a public health service, at a neighbour. Check the words before you use the name. Does the text say that a party will take power and keep it?',
    ask: '"Does the text say that a party, or the workers, will take power and keep it, and does it offer to give it up at an election?" If it says neither, this is not the name.' },

  { id: 'check-ml', kind: 'check', after: 'ml',
    case: 'c-ml-sites',
    ask: { type: 'phrase', step: 'C2', say: 'Which words say that those writing will take power and keep it, with no election they could lose? Tap them.',
           answer: 'The committee will take power in the city and hold it. It will be the only party, and it will not hold elections it could lose' } },

  /* ---------- The pair that hand the same businesses to the government by different roads ---------- */
  { id: 'look-demsoc-ml', kind: 'lookalike', ledger: 'demsoc~ml',
    link: 'These two ask for the same thing to be done with the businesses, and they are among the pairs people most often mix up. The difference is the road to it.',
    cases: ['c-lk-dmml-dm', 'c-lk-dmml-ml'],
    instruction: 'Both cases are about the Hartfell mines and say the same thing about them. Compare one thing: what the text says about who will hold power once it has got what it wants, and whether it can lose it.',
    prompt: { kind: 'which', option: 'C2.seize', answer: 'c-lk-dmml-ml' },
    difference: [
      'In Case A the text says it will win a majority in parliament and pass the law. A majority in parliament can be lost at the next election, so the text is leaving its power in the voters’ hands. It says nothing about taking power by force or ruling alone. The case is {o:demsoc}.',
      'In Case B the text says the party will take power and keep it, and allow no rival party. That cannot be lost at an election. The key’s answer is {a:C2.seize}, and the case is {o:ml}.',
      'The mines, the miners and the handover are the same in both. What differs is whether the people asking can be voted out. That is why you cannot name a text from what it asks to be done with the businesses.'
    ] },

  /* ---------- The exception that says nothing about the businesses ---------- */
  { id: 'exc-bulletin', kind: 'exception', looksLike: 'classonly', is: 'ml', ledger: 'classonly~ml',
    h: 'Nothing about the businesses, and a party that rules alone',
    link: 'A text that says nothing about the businesses is usually {o:classonly}. This card shows one that says nothing about them and is not.',
    case: 'c-ex-committee',
    setup: 'This bulletin is on the workers’ side, and it says nothing about what should happen to the shipyard. That is what you point to for {o:classonly}. Yet this case is {o:ml}.',
    prompt: { kind: 'phrase', answer: 'When the committee has the city, it will rule alone and no rival party will be allowed to stand' },
    because: [
      'The text says nothing about what should happen to the businesses, so the question about the businesses does not settle it. The question about the government does: the committee will rule alone, and no rival party will be allowed, so the answer is {a:C2.seize}. That answer keeps one name, {o:ml}.',
      'Nothing has to be said about the businesses for this name to apply. What the name needs is the taking and keeping of power, and the needs line says so: {needs:ml}.'
    ],
    take: 'This is why the key asks two questions and not one. A text can be silent on the businesses and loud on power. If you stopped after the question about the businesses, you would have named this bulletin with a name that says nothing is attached, when the text has attached the one thing that matters most to another name.' }
]);

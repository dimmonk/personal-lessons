// Political Ideologies, Unit Five, part three (second half): the two look-alike pairs that involve the third name, the wrong idea
// about it, and the first exception (this branch's own tie-break between a fair start and rules said to hold a group back).

FC.cards('ideology', 'u5', [

  { id: 'look-modlib-idegal', kind: 'lookalike', ledger: 'modlib~idegal',
    link: 'These two both want fairness for people who are being left behind. They differ in the cause they name. This card puts them side by side.',
    cases: ['i5-lk-mi-modlib', 'i5-lk-mi-idegal'],
    instruction: 'Both cases are about the same housing list in Calderwick, and both speakers want people to be housed fairly. Compare one thing: whether the speaker names a rule that treats everyone alike as the cause of someone being left behind.',
    prompt: { kind: 'which', option: 'R1.rules', answer: 'i5-lk-mi-idegal' },
    difference: [
      'In Case A the councillor wants the government to build more homes and to pay for help for anyone between jobs, with everyone paying together. No rule is named as the cause of anyone being left behind: the need is for homes and help. The key’s answer is {a:R1.start}, and the case is {o:modlib}.',
      'In Case B the speaker names a rule: the housing list asks every applicant for the same three years of paperwork from one address. It treats everyone alike, and it leaves people who arrived this year at the back. The speaker asks for what the list asks for to be changed, until they are housed as often as everyone else. The key’s answer is {a:R1.rules}, and the case is {o:idegal}.',
      'Both speakers want the housing list to be fair. One wants more given. The other wants a rule changed. That is the question the key asks.'
    ] },

  { id: 'look-clib-idegal', kind: 'lookalike', ledger: 'clib~idegal',
    link: 'The first and the third names are far apart in what they want, and close together in one thing: both are about rules that treat everyone alike. This card puts them side by side.',
    cases: ['i5-lk-ci-clib', 'i5-lk-ci-idegal'],
    instruction: 'Both cases are about the same entry test in Wren Valley, and in both the speaker says it is the same paper on the same day for every child. Compare one thing: whether the speaker says that is enough.',
    prompt: { kind: 'which', option: 'R1.rules', answer: 'i5-lk-ci-idegal' },
    difference: [
      'In Case A the speaker says the same test for every child is exactly as it should be. Each child is free to sit it, and the government’s job is to keep the test honest and then leave the school alone. The same rules for everyone are enough. The key’s answer is {a:R1.leave}, and the case is {o:clib}.',
      'In Case B the speaker says the same test for every child is the trouble: a child who cannot sit for three hours is shut out by a test that treats everyone alike. The speaker asks for the test to change until results are fair for those children too. The key’s answer is {a:R1.rules}, and the case is {o:idegal}.',
      'The test and its rules are the same in both. One speaker says it is enough, and the other says it is not. That is the difference you point to.'
    ] },

  { id: 'refute-ranking', kind: 'refute', about: 'idegal',
    h: 'A wrong idea: "rules changed for a group means that group is placed above the rest"',
    link: 'The picture of {o:idegal} said that it places no group above another. Many people read it the other way, and the idea below is the result.',
    idea: '"A text that asks for the rules to be changed for one group is asking to put that group above everyone else."',
    verdict: 'This is wrong as a way of reading a text.',
    right: [
      'This card is about how to read a text, not about whether the text is right. Whether rules should be changed for a group is argued over, sharply, and the key takes no side.',
      'What the key asks is what the text says. A text of this kind says that rules which treat everyone alike have left a group behind, and asks for them to change until results come out fair across groups. In the hill-villages letter that is stated outright: "We do not ask for anyone to be placed above anyone". The dock-hiring report says the same. Asking for {t:equity} is asking for results that are fair, and it is not asking for a group to be placed higher.',
      'A text that did place a group above others would say so in its own words: it would sort people into higher and lower, and put its own people on top. The key reads that as an answer to its first question, {q:D1} Before you say that a text places a group above another, point to the words that rank the groups. "Change the rules until results are fair" does not rank anyone.'
    ],
    testedBy: ['i5-claim-ranking'] },

  /* ---------- Exception: a fair start for everyone, and a rule that leaves a group behind ---------- */
  { id: 'exc-startrules', kind: 'exception', ledger: 'modlib~idegal', looksLike: 'modlib', is: 'idegal',
    h: 'A fair start for everyone, and a rule that leaves women behind',
    link: 'The look-alike cards compared {o:modlib} and {o:idegal} on separate stories. A real text can show both. Here is one that asks for a fair start for everyone, and also says that a rule leaves a group behind.',
    case: 'i5-x-startrules',
    setup: 'The statement begins by asking for a fair start for every woman: a clinic in each district, free screening and help when she is out of work, all paid for together. That is what you point to for {a:R1.start}. Yet the key’s answer for this case is {a:R1.rules}.',
    prompt: { kind: 'phrase', answer: 'Rules that treat every patient alike are not enough' },
    because: [
      'The statement does ask for a fair start, paid for by everyone. If that were all it said, it would be {o:modlib}. But it goes on to say that every clinic keeps the same hours for every patient, that those hours leave behind women who work nights or care for others by day, and that "rules that treat every patient alike are not enough". That is a rule that treats everyone alike, said to leave a group behind, and a request for it to change.',
      'So the case shows both answers at once. When it does, the key chooses {a:R1.rules}. The services are in the statement, but what the statement does with them is argue that a rule is the cause, and ask for it to be changed.',
      'It chooses this way round for a reason. If the statement were given {a:R1.start}, a rule and a group that the statement names would drop out of what the key looks at, and they are what the statement is about.'
    ],
    take: 'It is worth knowing that this is the key’s decision. In life, a text can ask for a fair start for everyone and also say that a rule leaves a group behind, and the field draws no sharp line between the two. The key gives each text one answer, so that two people using it reach the same one and can each say why.' }
]);

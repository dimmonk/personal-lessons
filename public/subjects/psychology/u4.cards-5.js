// Psychology, Unit Four, part five (first half): the fifth name (breaking rules and using people), its two look-alike pairs,
// the tie-break the key makes between the first name and this one, and the last wrong idea.

FC.cards('psychology', 'u4', [

  /* ---------- Antisocial personality ---------- */
  { id: 'meet-antisocial', kind: 'meet', outcome: 'antisocial',
    link: 'The last name is the one people reach for fastest in everyday talk, and this name needs more of it than the everyday word does.',
    case: 'pa-callum', mark: 'P1',
    strip: [
      'There are years and more than one place: school, two garages, a family.',
      'Rules are broken and people are lied to or used: mileage wound back, a forged signature, a loan never repaid.',
      'Callum shows no regret for the harm: "He should have read the paperwork."',
      'People are hurt by it: customers, a friend’s savings, a brother-in-law who no longer speaks to him.'
    ],
    explain: [
      'The earlier names were about what a person needs from other people: to be treated as special, to be kept close, to be looked at. Callum is different. What he wants is something for himself, and he gets it by lying to people, using them, and breaking whatever rule is in the way.',
      'Look at what is missing on his side: regret. A customer is cheated, a friend loses his savings, and Callum shrugs. Most people who harm someone feel something about it, even if they do not say so. Callum shows nothing: "He should have read the paperwork." That is what "no regret for the harm" means.',
      'And look at what is not there: any need to be seen as above anyone. Callum is charming and tells customers it is the best car on the lot, but nothing in the case shows scorn or anger when someone fails to treat him as special. It is the using of people that runs through it, from the forged notes at school to the forged signature on the lease.',
      'It also has to be a pattern. A person who once lied to a friend, and felt terrible, has done something wrong without showing this. Here it is years, several places and several people, and each time someone is hurt.'
    ],
    feature: { step: 'P1', option: 'uses' },
    name: 'The name for this is {o:antisocial}. "Antisocial" here does not mean shy or unsociable, which is how the word is used in everyday talk. It means against other people: against the rules that people live by together, and against their rights. "Personality" means how a person usually is.' },

  { id: 'again-antisocial', kind: 'again', outcome: 'antisocial',
    link: 'Callum gave you what to point to: {needs:antisocial}. Here is a second case, about raffle money and flats, not cars.',
    first: 'pa-callum', second: 'pa-bridget', step: 'P1',
    instruction: 'The marked words in the first case are three different things: the rules he broke and the people he used, what he shows about the harm, and what it has cost. Find the words in this case that match the middle one: what the person shows about the harm to the one who lost out. Ignore what was taken (cars, raffle money).',
    prompt: { kind: 'phrase', answer: "When an elderly member said she had lost her savings in one of them, Bridget said, 'Nobody made her pay, did they?' and went to lunch" },
    shared: [
      'Callum and Bridget each break rules, lie to people and use them: a wound-back mileage and a forged signature, raffle money kept and deposits taken for flats that were not hers to let. Each shows no regret when someone is hurt: "He should have read the paperwork", "Nobody made her pay, did they?" And each has done it for years, in several places, and people have been hurt.',
      'A garage and an arts society. So this is not about cars or about money. Whatever the story, the same things are there: rules broken and people used, no regret, and people hurt. That is what {o:antisocial} names.'
    ] },

  { id: 'portrait-antisocial', kind: 'portrait', outcome: 'antisocial',
    link: 'You know what to point to. This card fills in the rest of the picture, and says what the name does not mean.',
    typical: [
      'It starts early. The account often goes back to childhood or the teens: forged notes, expulsions, a first conviction.',
      'Lying is easy and routine, and it is not kept for one person.',
      'The person can be charming. Many are pleasant, calm and good with strangers, and that is how they get what they want.',
      'Promises are broken without apparent concern: the money is not repaid, the job is not finished.',
      'There is no regret for the harm. When someone is hurt, the person blames the one who was hurt: "you should have checked".',
      'The people who are hurt are real and can be named: customers, family, friends, a partner.'
    ],
    not: [
      'One lie is not this name, and neither is breaking one rule. Someone who lies once, feels terrible and puts it right has done something wrong, and shown a conscience. The name needs the years, the many people, and the lack of regret.',
      'It is also not a name for anyone who is selfish, rude or unkind. Those are common, and mostly ordinary. And the everyday words people use for anyone they find cold are not names used here for a person.'
    ],
    wild: ['"Everybody does it."', '"Nobody got hurt."', '"They should have read the contract."', '"That’s business."', '"He’s a sociopath."'],
    self: 'You will meet this more often in the news and in stories than in the people you know. If you have been lied to and used by someone, the first thing is to protect yourself, and that is a matter for practical help, and for a professional if you are in danger. It is not a matter for a label.',
    ask: '"Have I seen this person break rules and lie to people again and again, and show no regret for the harm to the ones who lost out?"' },

  { id: 'check-antisocial', kind: 'check', after: 'antisocial',
    case: 'pa-sven',
    ask: { type: 'option', step: 'P1', among: ['above', 'steady', 'overlooked', 'clings', 'centre', 'uses'] } },

  { id: 'look-narcgrand-antisocial', kind: 'lookalike', ledger: 'narcgrand~antisocial',
    link: 'Both of these can be charming and sure of themselves, and both leave people hurt. Here are two men who have each let flats for thirty years.',
    cases: ['pa-kurt', 'pa-vince'],
    instruction: 'Compare one thing: what drives each man. Is it getting something for himself by lying to people, whatever the harm? Or is it being treated as special, with scorn when he is not?',
    prompt: { kind: 'which', option: 'P1.uses', answer: 'pa-vince' },
    difference: [
      'In Case A Kurt tells his tenants that they are lucky to live under his roof, and calls one of them "an ungrateful nobody" for asking for a repair, which he did make in the end. He is scornful when he is not treated as special. No tenant’s money is kept. The answer is {a:P1.above}, and the case is {o:narcgrand}.',
      'In Case B Vince spends four tenants’ deposits, keeps a tenant’s rent and sends nobody to mend her boiler, and when she writes that her baby is ill, he says "Nobody forced you." Rules are broken, people are lied to and used, and there is no regret. The answer is {a:P1.uses}, and the case is {o:antisocial}.',
      'A man who thinks he is above others can be unpleasant to people without breaking rules to use them. The difference is what he does to them, and whether he shows regret for the harm.'
    ] },

  { id: 'exc-both', kind: 'exception', looksLike: 'narcgrand', is: 'antisocial', ledger: 'narcgrand~antisocial',
    h: 'When a case shows both',
    link: 'The last card separated the pair with two tidy cases. Real cases are often less tidy: a man who acts above others and turns scornful can also be lying to people for his own gain and showing no regret. Here is one.',
    case: 'pa-victor',
    setup: 'Victor tells everyone that nobody roofs like him, calls rival firms "amateurs" and screams at customers who question a bill. That is acting as if he is better than others, with anger when he is not treated as special, and it is what you point to for {o:narcgrand}. Yet this case is {o:antisocial}.',
    prompt: { kind: 'phrase', answer: "Over fifteen years, in four towns, he has taken deposits for roofs he never started and left a former partner with his debts. When one customer came to his yard in tears with her unpaid deposit, Victor said, 'They should have read the contract. Not my problem.'" },
    because: [
      'The case shows something beyond the scorn. For fifteen years, in four towns, Victor has taken deposits for roofs he never started and left a partner with his debts, and when a customer came to him in tears he said that it was not his problem. That is rules broken, people used, no regret, and people hurt.',
      'Once that is in the case, the scorn is not a second thing. A man who treats customers as nobodies and takes their money is doing one thing, and the scorn is part of how he treats them.'
    ],
    take: 'The answer is chosen this way on purpose, and it is worth knowing that the choice is made in advance, for every case alike. In life the two overlap, and people who study them do not all draw the line in the same place. Each case gets one name, by what it can point to, so that two people using these questions reach the same answer and can each say why.' },

  { id: 'look-antisocial-ordpersonality', kind: 'lookalike', ledger: 'antisocial~ordpersonality',
    link: 'Plenty of ordinary people bend a rule now and then, and that does not earn this name. Here are two people who have each been bending rules for years.',
    cases: ['pa-joss', 'pa-lena'],
    instruction: 'Both have bent rules for years, in three cities. Compare one thing: what happens when someone is hurt or upset by it.',
    prompt: { kind: 'which', option: 'P1.uses', answer: 'pa-joss' },
    difference: [
      'In Case A Joss has talked three friends into lending him money for a business that does not exist, and when one asks for her money back he says she was lucky to have been asked and blocks her. He has never repaid anyone. The answer is {a:P1.uses}, and the case is {o:antisocial}.',
      'In Case B Lena parks in loading bays and argues for discounts, and when a friend lends her money she pays it back the next week, and when a neighbour is upset she apologises and stops. Her friends still lend her things and she lends them back. The answer is {a:P1.steady}, and the case is {o:ordpersonality}.',
      'Both bend rules, and both have done so for years. What differs is whether anyone is badly hurt, and what the person does when someone is: Lena puts it right, and Joss blames them.'
    ] },

  { id: 'refute-difficult', kind: 'refute', about: 'ordpersonality',
    h: 'A wrong idea: "if someone is that hard to deal with, it must be a disorder"',
    link: 'You have now met all six names. The last wrong idea in this unit is the one that sends people reaching for the five that need a cost when the case only shows someone who is hard to deal with.',
    idea: '"He is rude, he is selfish and he never says sorry. There has to be something wrong with him."',
    verdict: 'This is wrong.',
    right: [
      'Being rude, selfish or hard to deal with is very common, and none of the five names is for it. Each needs years, more than one place, a particular thing done again and again, and a cost. A hard person with no repeated cost, who has the same way of being at school, at work and at home, shows {o:ordpersonality}.',
      'There is no name for "rude" or "difficult". There is one question: what does the person do again and again, and what has it cost? If you cannot point to those, the answer is {o:ordpersonality}, and it is a full and proper answer.',
      'The last point is for you and not for him. "There is something wrong with him" feels like an explanation, but it ends the question. A plain description of what he does, and what it costs you, can be answered.'
    ],
    testedBy: ['pa-claim-difficult'] }
]);

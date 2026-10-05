// Civics, Unit Five, part three (first half): a judge asked about the treatment of a person accused of a crime,
// the wrong idea about who the steps protect, and the look-alike pair and exception with the first name.

FC.cards('civics', 'u5', [

  /* ---------- The rights of the accused ---------- */
  { id: 'meet-trialrights', kind: 'meet', outcome: 'trialrights',
    link: 'The first three names were about a law, or about a request with no law behind it. The last of the four is about a person: how the government treated someone after it accused them of a crime.',
    case: 't-search', mark: 'J1',
    strip: [
      'Someone has been accused of a crime: Joy is charged with theft.',
      'The Constitution promises an accused person certain steps. One of them is that police may not search unreasonably, and a search with no warrant and no permission is where the question arises.',
      'Joy’s lawyer asks a judge whether that step was followed.',
      'Nobody says the law against theft is wrong. The question is about how Joy was treated.'
    ],
    explain: [
      'When the government accuses someone of a crime, the Constitution requires fair steps before any punishment: things the government must do, or must not do. Joy is not saying the theft law is wrong. She is saying that in her case the police skipped a step.',
      'There are several steps, and they are written into the Constitution. Joy’s case shows one of them: the police may not make an unreasonable search, and as a general rule they need a warrant, which is a judge’s written permission.',
      'Who makes sure the steps are followed? A judge. When someone says that a step was skipped, the judge is asked whether it was. That is all a case of this kind is made of: somebody the government says committed a crime, a step the Constitution promises, and a judge asked whether it was followed.'
    ],
    feature: { step: 'J1', option: 'accused' },
    name: 'The name for this is {o:trialrights}. It is about the rights of someone accused, which means someone the government says has committed a crime, and it is the judge who is asked whether those rights were respected.' },

  { id: 'again-trialrights', kind: 'again', outcome: 'trialrights',
    link: 'The roadside search gave you what to point to: {needs:trialrights}. Here is a second case with a different step and a different person.',
    first: 't-search', second: 't-lawyer', step: 'J1',
    instruction: 'Find what the two cases share. Ignore the story (a search, a charge of assault) and ignore who the person is. Look at one thing only: what step the Constitution promises is the judge asked about?',
    prompt: { kind: 'phrase', answer: 'asks the judge to appoint one' },
    shared: [
      'Joy and Luis are both accused of a crime. In both cases a step the Constitution promises an accused person is in question: a search with no warrant, a lawyer for someone who cannot pay. And in both, a judge is asked whether the step was followed. Nobody says the law itself is wrong.',
      'Luis is not a citizen and Joy is, and it makes no difference: the steps protect everyone who is accused. The two stories share nothing else. So this is not about searches or lawyers. It holds wherever someone accused of a crime asks a judge whether a promised step was followed. That is what {o:trialrights} names.'
    ] },

  { id: 'portrait-trialrights', kind: 'portrait', outcome: 'trialrights',
    link: 'You know what to point to. This card fills in the rest of the picture, and it lists the steps the Constitution promises, which you will need for every case of this kind.',
    typical: [
      'There is a person accused of a crime, and somewhere along the way a step the Constitution promises is in question. It can come up at any point: when police search or question the person, when they are held, at the trial, and when the punishment is chosen.',
      'The steps come from four amendments. The Fourth: no unreasonable searches or seizures, and police generally need a warrant, a judge’s written permission. The Fifth: you cannot be forced to speak against yourself, so you may stay silent, and you cannot be tried a second time for the same crime. The Sixth: a speedy, public trial by a jury, a lawyer, and the right to hear and question the witnesses against you. The Eighth: no excessive bail, which is money paid to be released before trial, no excessive fines, and no cruel and unusual punishment.',
      'If an accused person cannot pay for a lawyer in a criminal case, one is appointed for them.',
      'The judge’s job is to make sure the steps are followed. The words you hear are "read his rights", "the right to counsel" and "a fair trial".',
      'The steps protect everyone who is accused, not only citizens.'
    ],
    not: [
      'Not every case with a crime in it is about these steps. If nobody says a step was skipped, and the question is whether the law itself is allowed, the case is {o:review}. If the question is only what the words of the law cover, it is {o:interpret}.',
      'The steps are for someone accused of a crime. An immigration hearing is not a trial for a crime, so some of these steps work differently there.'
    ],
    wild: ['"Read his rights."', '"The right to counsel."', '"A fair trial."', '"He asked for a lawyer."', '"The right to remain silent."'],
    self: 'You will meet it in any news about an arrest or a trial, and in what you may say yourself if you are ever arrested or questioned in a criminal case: that you want a lawyer, and that you will stay silent.',
    ask: '"Which step did the Constitution promise this person, and does the case say it was skipped?" If you cannot name a step, look again at what the judge is asked.' },

  { id: 'check-trialrights', kind: 'check', after: 'trialrights',
    case: 't-check',
    ask: { type: 'option', step: 'J1', among: ['check', 'accused', 'words', 'policy'] } },

  { id: 'refute-citizen', kind: 'refute', about: 'trialrights',
    h: 'A wrong idea about who the steps protect',
    link: 'The picture of {o:trialrights} said that the steps protect everyone who is accused. Some people hold the opposite idea, so here it is, with the correction.',
    idea: '"He is not a citizen, so the judge does not have to make sure the police followed the rules with him."',
    verdict: 'This is wrong.',
    right: [
      'The steps the Constitution promises an accused person are written for the person accused: "the accused", "no person". They do not mention citizens. A person who is not a citizen and is charged with a crime in a criminal case has the same steps: no unreasonable search, the right to stay silent, a lawyer.',
      'One thing is different, and it is easy to mix up with this. An immigration hearing is not a trial for a crime, so some of these steps work differently there.',
      'So before you decide that the steps do not apply, ask whether the person is accused of a crime. If they are, citizenship does not matter.'
    ],
    testedBy: ['claim-citizen'] },

  /* ---------- The look-alike pair with the first name, and the exception ---------- */
  { id: 'look-review-trialrights', kind: 'lookalike', ledger: 'review~trialrights',
    link: 'In both of these names a person is in trouble with the law and a judge is asked whether the Constitution was kept. That makes them easy to mix up. This card puts them side by side.',
    cases: ['ls-vince-law', 'ls-vince-arrest'],
    instruction: 'Both cases are about Vince, who was arrested at a march. Compare one thing: what the judge is asked to check. In one case it is the law Vince is charged under. In the other it is how Vince was dealt with.',
    prompt: { kind: 'which', option: 'J1.check', answer: 'ls-vince-law' },
    difference: [
      'In Case A the law is what Vince attacks. He was charged under it, and he tells the judge that it takes away his right to speak. That is a claim that the law clashes with the Constitution. The answer is {a:J1.check}, and the case is {o:review}.',
      'In Case B Vince does not attack the law against blocking a road. His lawyer says that how he was treated after the arrest skipped a step the Constitution promises: a lawyer. The question is about the steps, not about the law. The answer is {a:J1.accused}, and the case is {o:trialrights}.',
      'Both are about Vince, both end in front of a judge, and in both the Constitution is part of the argument. The difference is what the judge is asked to check: the law itself, or the way an accused person was treated.'
    ] },

  { id: 'exc-defendant', kind: 'exception', ledger: 'review~trialrights', looksLike: 'trialrights', is: 'review',
    h: 'On trial, and still about the law',
    link: 'The last card kept the two names tidy. In a real case a person on trial can be asking about the law itself, and the trial around the question does not change the name.',
    case: 'x-defendant',
    setup: 'The case is full of a trial: a courtroom, a jury, a lawyer, a public hearing. Those are the steps the Constitution promises an accused person, and a person accused of a crime in front of a judge is what you point to for {a:J1.accused}. Yet the answer for this case is {a:J1.check}.',
    prompt: { kind: 'phrase', answer: 'the rule takes away the right to gather peacefully' },
    because: [
      'Ask what the judge is asked to decide. Nell’s trial is going properly: she has a jury, a lawyer and a public hearing, and nobody says a step was skipped. What her lawyer asks is whether the rule she is charged under is allowed at all. That is a claim that the rule clashes with the Constitution.',
      'So the trial is how the question reached the judge. It is not the question. A person being on trial tells you there is a criminal case. It does not tell you what the judge is asked inside it.'
    ],
    take: 'Read what the judge is asked, not where the case is held. In a criminal case the judge can be asked about the steps, about the law itself, or about what the law covers.' }
]);

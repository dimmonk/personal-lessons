// Civics, Unit Five, part two (second half): a judge asked about the treatment of a person accused of a crime,
// and its look-alike pair with the first name.

FC.cards('civics', 'u5', [

  /* ---------- The rights of the accused ---------- */
  { id: 'meet-trialrights', kind: 'meet', outcome: 'trialrights',
    link: 'The first three names were about a law, or about a request with no law behind it. The last of the four is about a person: how the government treated someone after it accused them of a crime.',
    case: 't-search', mark: 'J1',
    strip: [
      'Someone has been accused of a crime: Joy is charged with theft.',
      'The Constitution promises an accused person certain steps. One of them is that police may not search unreasonably, and a search with no warrant and no permission is where the question arises.',
      'Nobody says the law against theft is wrong. The question is about how Joy was treated.'
    ],
    explain: [
      'When the government accuses someone of a crime, the Constitution requires fair steps before any punishment. Joy is not saying the theft law is wrong. She is saying that in her case the police skipped a step, and the judge is asked whether they did.',
      'The steps include: no unreasonable search, and as a general rule police need a warrant, a judge’s written permission (Joy’s case); the right to stay silent; a lawyer, appointed if you cannot pay; a speedy, public trial by jury; and no excessive bail or fines and no cruel and unusual punishment. They protect everyone accused of a crime, citizen or not.'
    ],
    feature: { step: 'J1', option: 'accused' },
    name: 'The name for this is {o:trialrights}. It is about the rights of someone accused, which means someone the government says has committed a crime, and it is the judge who is asked whether those rights were respected.' },

  { id: 'check-trialrights', kind: 'check', after: 'trialrights',
    case: 't-check',
    ask: { type: 'option', step: 'J1', among: ['check', 'accused', 'words', 'policy'] } },

  /* ---------- The look-alike pair with the first name ---------- */
  { id: 'look-review-trialrights', kind: 'lookalike', ledger: 'review~trialrights',
    link: 'In both of these names a person is in trouble with the law and a judge is asked whether the Constitution was kept. That makes them easy to mix up. This card puts them side by side.',
    cases: ['ls-vince-law', 'ls-vince-arrest'],
    instruction: 'Both cases are about Vince, who was arrested at a march. Compare one thing: what the judge is asked to check. In one case it is the law Vince is charged under. In the other it is how Vince was dealt with.',
    prompt: { kind: 'which', option: 'J1.check', answer: 'ls-vince-law' },
    difference: [
      'In Case A the law is what Vince attacks. He was charged under it, and he tells the judge that it takes away his right to speak. That is a claim that the law clashes with the Constitution. The answer is {a:J1.check}, and the case is {o:review}.',
      'In Case B Vince does not attack the law against blocking a road. His lawyer says that how he was treated after the arrest skipped a step the Constitution promises: a lawyer. The question is about the steps, not about the law. The answer is {a:J1.accused}, and the case is {o:trialrights}.'
    ] }
]);

// Civics, Unit Five, part two (second half): a judge asked about the treatment of a person accused of a crime,
// and its look-alike pair with the first name.

FC.cards('civics', 'u5', [

  /* ---------- The rights of the accused ---------- */
  { id: 'meet-trialrights', kind: 'meet', outcome: 'trialrights',
    link: 'Fourth: a judge asked whether the government treated an accused person fairly.',
    case: 't-search', mark: 'J1',
    explain: [
      'Joy does not say the theft law is wrong. She says the police skipped a step the Constitution promises anyone accused of a crime: no unreasonable search. Usually that means a warrant, which is a judge’s written permission to search. The judge is asked whether the police skipped it.',
      'The Constitution promises other steps too: the right to stay silent, a lawyer (a free one if you cannot pay), a speedy public trial by jury, no excessive bail or fines, and no cruel or unusual punishment. They protect everyone accused of a crime, citizen or not.'
    ],
    spot: [
      { do: 'Find the person accused of a crime: Joy, charged with theft.', why: 'These steps protect someone the government has accused.' },
      { do: 'Find the step that may have been skipped: the police searched her trunk with no warrant.', why: 'The Constitution promises these steps whatever the crime.' },
      { do: 'Check that nobody attacks the law itself: nobody says the theft law is wrong.', why: 'The question is how Joy was treated, not whether the law is allowed.' }
    ],
    feature: { step: 'J1', option: 'accused' },
    name: 'This is {o:trialrights}. The judge is asked whether the government followed the steps, not whether Joy did it.' },

  { id: 'check-trialrights', kind: 'check', after: 'trialrights',
    case: 't-check',
    ask: { type: 'option', step: 'J1', among: ['check', 'accused', 'words', 'policy'] } },

  /* ---------- The look-alike pair with the first name ---------- */
  { id: 'look-review-trialrights', kind: 'lookalike', ledger: 'review~trialrights',
    link: 'In both, a person is in trouble with the law and a judge is asked whether the Constitution was kept.',
    cases: ['ls-vince-law', 'ls-vince-arrest'],
    instruction: 'Both stories are about Vince, who was arrested at a march. Compare one thing: what the judge is asked to check. In one it is the law Vince is charged under. In the other it is how Vince was treated.',
    prompt: { kind: 'which', option: 'J1.check', answer: 'ls-vince-law' },
    difference: [
      'In Story A, Vince is charged under a street-speech law and tells the judge that the law takes away his right to speak. He is attacking the law itself. The answer is {a:J1.check}, and the name is {o:review}.',
      'In Story B, Vince does not attack the law against blocking a road. His lawyer says the police skipped a step the Constitution promises: they kept him two days without a lawyer. The answer is {a:J1.accused}, and the name is {o:trialrights}.',
      'One story attacks the law. The other attacks what the police did.'
    ] }
]);

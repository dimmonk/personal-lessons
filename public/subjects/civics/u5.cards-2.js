// Civics, Unit Five, part one (second half): the word precedent, the second name, and the first look-alike pair.

FC.cards('civics', 'u5', [

  /* ---------- A word the second name leans on ---------- */
  { id: 'term-precedent', kind: 'term', term: 'precedent',
    h: 'What a judge does with an earlier ruling',
    link: 'The next name uses one more word, so here it comes first, with a story.',
    case: 'foodtruck',
    plain: [
      'The town’s licensing law did not say whether a food truck is a “shop”, so the first judge decided that it is. That ruling stays on the record.',
      'This spring a different judge got the same question about another owner’s truck. She did not start from nothing. She read what the first judge had decided about the same word, and decided it the same way.'
    ],
    after: 'So when a judge works out what the words of a law cover, earlier rulings on the same words are one of the first places to look.' },

  /* ---------- Interpreting a law ---------- */
  { id: 'meet-interpret', kind: 'meet', outcome: 'interpret',
    link: 'Second: a judge asked what a law’s words cover.',
    case: 'i-hives', mark: 'J1',
    explain: [
      'Nobody says the farm law is wrong. The trouble is one word. Whoever wrote “farm” was probably thinking of fields and barns, not beehives on a roof, and the word does not say yes or no. The tax office and Dora each want it to mean whatever suits them.',
      'So the judge decides what the word covers, and does not choose what would be best. The judge goes to the law: its words, the rest of the law around them, what it was for, and any earlier ruling on the same words. That last one is a {t:precedent}.'
    ],
    spot: [
      { do: 'Find the law nobody attacks: the lower tax bill for farms.', why: 'Nobody says it clashes with the Constitution.' },
      { do: 'Find the word in dispute: “farm”. Does it reach eight beehives on a roof?', why: 'The whole question is how far one word stretches.' },
      { do: 'Find the request: Dora asks the judge to decide whether her roof is a farm.', why: 'The judge is asked to read the law, not to say whether the law is good.' }
    ],
    feature: { step: 'J1', option: 'words' },
    name: 'This is {o:interpret}: the judge works out what the law means for a situation its writers never pictured.' },

  { id: 'check-interpret', kind: 'check', after: 'interpret',
    case: 'i-check',
    ask: { type: 'option', step: 'J1', among: ['check', 'words'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-review-interpret', kind: 'lookalike', ledger: 'review~interpret',
    link: 'These two are easy to mix up: in both, a person was fined under a law and a judge is asked about it.',
    cases: ['ls-amp-speech', 'ls-amp-violin'],
    instruction: 'Both stories are about the same park rule, and both people were fined. Compare one thing: what each person asks the judge about the rule.',
    prompt: { kind: 'which', option: 'J1.check', answer: 'ls-amp-speech' },
    difference: [
      'In Story A, Dee used a loudspeaker at a rally and was fined. She tells the judge that the rule takes away her right to speak, so she says the rule itself is not allowed. The answer is {a:J1.check}, and the name is {o:review}.',
      'In Story B, Eli played a violin through a small amplifier and was fined. He does not say the rule is wrong. He asks whether a violin counts as “amplified sound” in the rule’s words. The answer is {a:J1.words}, and the name is {o:interpret}.',
      'Same rule, same fine. What each person says to the judge is what separates them.'
    ] }
]);

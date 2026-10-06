// Civics, Unit Five, part one (second half): the word precedent, the second name, and the first look-alike pair.

FC.cards('civics', 'u5', [

  /* ---------- A word the second name leans on ---------- */
  { id: 'term-precedent', kind: 'term', term: 'precedent',
    h: 'What a judge does with an earlier ruling',
    link: 'The next name is about a judge reading a law, and the judge in it uses one more word, so here it comes first, with a case.',
    case: 'foodtruck',
    plain: [
      'The first judge had to decide whether the word "shop" covers a food truck. The town’s licensing law did not say, so the judge decided. That ruling is now an earlier ruling on the word.',
      'This spring a different judge was asked the same question about another owner’s truck. She did not start from nothing. She read what the first judge had decided about the same word, and decided it the same way.'
    ],
    after: 'Whenever a judge works out what the words of a law cover, earlier rulings on the same words are one of the places the judge looks.' },

  /* ---------- Interpreting a law ---------- */
  { id: 'meet-interpret', kind: 'meet', outcome: 'interpret',
    link: 'The first name was about a judge asked whether a law is allowed at all. A judge is much more often asked something smaller about a law that nobody is attacking: whether its words reach the situation in front of the judge.',
    case: 'i-hives', mark: 'J1',
    strip: [
      'There is a law, and nobody says anything is wrong with it: it gives a lower tax bill to farms.',
      'There is a situation its words may or may not reach: eight beehives on a flat roof in the city.',
      'The tax office says a roof is not a farm. Dora says hers is.',
      'The last thing in the case is a request to a judge to decide whether it is.'
    ],
    explain: [
      'Laws are written ahead of time, in words, by people who could not picture every situation. Whoever wrote "farm" was probably thinking of fields and barns. A roof with beehives on it is something they may never have pictured, and the word does not say yes or no. Somebody has to decide, and the tax office and Dora each have a reason to answer in their own favor.',
      'So a judge decides. The judge does not do it by choosing what would be best. The judge goes to the law: reads its words, reads the rest of the law around them, asks what the law was for, and looks at earlier rulings on the same words. Those earlier rulings are what you met on the last card, and the word for them is {t:precedent}.'
    ],
    feature: { step: 'J1', option: 'words' },
    name: 'The name for this is {o:interpret}. To interpret something is to work out what it means. The judge reads the law to work out whether its words reach a situation that nobody had pictured.' },

  { id: 'check-interpret', kind: 'check', after: 'interpret',
    case: 'i-check',
    ask: { type: 'option', step: 'J1', among: ['check', 'words'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-review-interpret', kind: 'lookalike', ledger: 'review~interpret',
    link: 'These two are easy to mix up, because in both a person has been fined under a law and a judge is asked about it. This card puts them side by side.',
    cases: ['ls-amp-speech', 'ls-amp-violin'],
    instruction: 'Both cases are about the same park rule, and in both a person was fined. Compare one thing: what the person asks the judge about the rule. In one case it is whether the rule is allowed at all. In the other it is whether the rule covers what the person did.',
    prompt: { kind: 'which', option: 'J1.check', answer: 'ls-amp-speech' },
    difference: [
      'In Case A, Dee used a loudspeaker at a rally and was fined. She tells the judge that the rule takes away her right to speak. She is saying that the rule clashes with the Constitution. The answer is {a:J1.check}, and the case is {o:review}.',
      'In Case B, Eli played a violin through a small amplifier and was fined. He does not say the rule is wrong. He asks the judge whether a violin through a small amplifier is the kind of sound the rule is about. He is asking what its words cover. The answer is {a:J1.words}, and the case is {o:interpret}.'
    ] }
]);

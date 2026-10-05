// Civics, Unit Five, part one (second half): the word precedent, the second name, and the first look-alike pair.

FC.cards('civics', 'u5', [

  /* ---------- A word the second name leans on ---------- */
  { id: 'term-precedent', kind: 'term', term: 'precedent',
    h: 'What a judge does with an earlier ruling',
    link: 'The next of the four names is about a judge reading a law, and the judge in it uses one more word. It is not part of the questions, so here it comes first, with a case.',
    case: 'foodtruck',
    plain: [
      'The first judge had to decide whether the word "shop" covers a food truck. The town’s licensing law did not say, so the judge decided. That ruling is now an earlier ruling on the word.',
      'This spring a different judge was asked the same question about another owner’s truck. She did not start from nothing. She read what the first judge had decided about the same word, and decided it the same way. The first ruling now guides everyone else in a similar position.'
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
      'The last thing in the case is a request to a judge to decide whether it is.',
      'Nobody says the law breaks the Constitution, and the judge is not asked whether the tax break is a good idea.'
    ],
    explain: [
      'Laws are written ahead of time, in words, by people who could not picture every situation. Whoever wrote "farm" was probably thinking of fields and barns. A roof with beehives on it is something they may never have pictured, and the word does not say yes or no. Somebody has to decide, and the tax office and Dora each have a reason to answer in their own favour.',
      'So a judge decides. The judge does not do it by choosing what would be best, and the judge’s own view of whether a lower tax bill for rooftop hives is a good idea does not decide it. The judge goes to the law. The judge reads its words, reads the rest of the law around them, asks what the law was for, and looks at earlier rulings on the same words. Those earlier rulings are what you met on the last card, and the word for them is {t:precedent}.',
      'This is most of what courts do. Nobody in the case says the law is not allowed. The law stands, and the only question is how far its words reach.'
    ],
    feature: { step: 'J1', option: 'words' },
    name: 'The name for this is {o:interpret}. To interpret something is to work out what it means. The judge reads the law to work out whether its words reach a situation that nobody had pictured.' },

  { id: 'again-interpret', kind: 'again', outcome: 'interpret',
    link: 'The rooftop hives gave you what to point to: {needs:interpret}. Here is a second case with a different story, and this time it is about water.',
    first: 'i-hives', second: 'i-pool', step: 'J1',
    instruction: 'Find what the two cases share. Ignore the story (a roof, a splash pad). Look at one thing only: what the person asks the judge about the law.',
    prompt: { kind: 'phrase', answer: 'whether a splash pad counts as a public swimming pool' },
    shared: [
      'In both cases there is a law that nobody attacks, and a situation its words may or may not reach: a roof with hives, a splash pad. In both, two sides disagree about whether the words cover it, and in both the last thing is a request to a judge to decide.',
      'The two stories share nothing else. So this is not about taxes or about water. It holds wherever a law is accepted and the only question is how far its words reach. That is what {o:interpret} names.'
    ] },

  { id: 'portrait-interpret', kind: 'portrait', outcome: 'interpret',
    link: 'You know what to point to. This card fills in the rest of the picture, so that you can spot {o:interpret} in real life.',
    typical: [
      'There is a law, and it is accepted. Nobody who goes to the judge says it is wrong. What is in dispute is whether its words do or do not reach what happened.',
      'Very often the question is about a single word, and the word is an ordinary one, such as "farm", "pool" or "shop". The words around it do not settle it, which is why it reaches a judge.',
      'The judge works from the law and not from the judge’s own taste: the words, the rest of the law, what it was for, and earlier rulings on the same words ({t:precedent}). Whether the rule is a good one is not what decides it.',
      'Most of what courts do is of this kind: working out how a law applies to one person’s situation.',
      'Once a judge has ruled, the ruling guides everyone in a similar position. If Congress disagrees with how a judge read one of its laws, Congress can write the law again.'
    ],
    not: 'A judge who is reading a law is not always doing this. If somebody says the law itself clashes with the Constitution, the judge is being asked the question of {o:review}. This name is for the case where nobody says that and the question is only how far the words reach. And a judge who is asked whether the law ought to say something different is not reading it at all.',
    wild: ['"The court clarified what the law covers."', '"The judge said the word includes…"', '"The ruling means the rule applies to…"', '"The court interpreted the law."'],
    self: 'In your own life you meet it whenever the words of a rule and your situation do not quite fit: a tax break, a licence rule, a parking limit written before the thing you are doing existed.',
    ask: '"Does anyone say this law should not exist, or only that its words do or do not reach what happened?" If it is only the words, look to what the words, the rest of the law, its purpose and earlier rulings say.' },

  { id: 'check-interpret', kind: 'check', after: 'interpret',
    case: 'i-check',
    ask: { type: 'option', step: 'J1', among: ['check', 'words'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-review-interpret', kind: 'lookalike', ledger: 'review~interpret',
    link: 'You have met both names on their own. They are easy to mix up, because in both a person has been fined under a law and a judge is asked about it. This card puts them side by side.',
    cases: ['ls-amp-speech', 'ls-amp-violin'],
    instruction: 'Both cases are about the same park rule, and in both a person was fined. Compare one thing: what the person asks the judge about the rule. In one case it is whether the rule is allowed at all. In the other it is whether the rule covers what the person did.',
    prompt: { kind: 'which', option: 'J1.check', answer: 'ls-amp-speech' },
    difference: [
      'In Case A, Dee used a loudspeaker at a rally and was fined. She tells the judge that the rule takes away her right to speak. She is saying that the rule clashes with the Constitution. The answer is {a:J1.check}, and the case is {o:review}.',
      'In Case B, Eli played a violin through a small amplifier and was fined. He does not say the rule is wrong. He asks the judge whether a violin through a small amplifier is the kind of sound the rule is about. He is asking what its words cover. The answer is {a:J1.words}, and the case is {o:interpret}.',
      'The rule is the same and so is the fine. What differs is what the person asks the judge about it: whether it is allowed at all, or how far its words reach.'
    ] }
]);

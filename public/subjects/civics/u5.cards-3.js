// Civics, Unit Five, part two: a judge asked to choose a policy, its two look-alike pairs, and the exception in which
// a request that sounds like a plea for a better policy is not one.

FC.cards('civics', 'u5', [

  /* ---------- A political question ---------- */
  { id: 'meet-notlegal', kind: 'meet', outcome: 'notlegal',
    link: 'So far the judge has been asked about a law: whether it is allowed, or what its words cover. The third of the four is a request where there is no law to look at, and the judge is asked for something else.',
    case: 'n-bus', mark: 'J1',
    strip: [
      'There is something the riders want changed: the bus fare.',
      'They ask a judge to change it, by ordering the council to cut it from $2 to $1.',
      'Their reason is that a lower fare would be fairer. That is a view about which choice is better.',
      'No law sets what a fare must be, and nobody says the fare takes away a right. The judge has nothing to read and nothing to check.'
    ],
    explain: [
      'Look at what the riders are asking. They are not saying the fare breaks the Constitution. They are not asking what a law means. They are asking the judge to choose: $2 or $1. That is a question about which policy is better, and people can disagree about it for good reasons, as they do about taxes, school hours and speed limits.',
      'A judge works by applying rules: a law, or the Constitution. Here no rule decides between $2 and $1, so there is nothing for the judge to apply, and a judge who chose would be putting the judge’s own view in the place of the town’s. The Constitution leaves choices like this to voters and the leaders they elect, and a court will decline.',
      'That does not leave the riders stuck. They can vote, sign petitions, write to the council and organize a campaign. A lawsuit will not change the fare.'
    ],
    feature: { step: 'J1', option: 'policy' },
    name: 'The name for this is {o:notlegal}. "Political" in this name does not mean "about parties". It means a choice that is made by voting and not by a legal test, so the judge leaves it to the voters.' },

  { id: 'again-notlegal', kind: 'again', outcome: 'notlegal',
    link: 'The bus fare gave you what to point to: {needs:notlegal}. Here is a second case with a different story, about a school.',
    first: 'n-bus', second: 'n-school', step: 'J1',
    instruction: 'Find what the two cases share. Ignore the story (a fare, a school bell). Look at one thing only: is there a law or a right that the judge could apply, or is the judge asked to choose?',
    prompt: { kind: 'phrase', answer: 'No law says when a school day must start' },
    shared: [
      'In both cases people want something changed and ask a judge to change it. In both, their reason is that the change would be better: fairer, or kinder to older students. And in both, nothing in a law or in the Constitution settles it, so there is nothing for the judge to apply.',
      'One is about fares and the other about the school day. So this is not about money or about schools. It holds wherever a judge is asked to choose between policies and no law or right settles which. That is what {o:notlegal} names.'
    ] },

  { id: 'portrait-notlegal', kind: 'portrait', outcome: 'notlegal',
    link: 'You know what to point to. This card fills in the rest of the picture, so that you can spot {o:notlegal} in real life.',
    typical: [
      'Someone wants a policy changed (a price, a start time, a budget, a number), or wants a rule written that does not exist yet, and asks a judge to order it. The reason is nearly always that it would be better, fairer or wiser.',
      'No law and no right in the Constitution settles it. The people asking cannot point to one, and that is the whole of the case.',
      'The judge declines. The words you hear are "the court declined to decide" and "that is not for the courts".',
      'It is not that the question is unimportant. These are often the questions people care about most. The point is who decides: the voters and the leaders they elect, through an election, and not a judge, through a lawsuit.',
      'The people asking can still act. They can vote, petition, write to their representatives and organize a campaign.'
    ],
    not: 'Asking a judge for something is not enough, and neither is a request that sounds political. If the policy itself breaks the Constitution, for example by singling out one religion, a judge can decide that, because there is a rule to apply. This name is for a request where nobody can point to a law or a right that settles it.',
    wild: ['"That is a matter for the legislature."', '"The court declined to decide."', '"Not for the courts."', '"Take it to the voters."'],
    self: 'In your own life you meet it whenever you wish a price, a school rule or a local service were different and think of "taking it to court". The way to change it is to vote, petition and organize.',
    ask: '"Can the person asking point to a law or a right in the Constitution that the judge could apply?" If they cannot, and they only say that it would be better, the judge is being asked to choose, and the judge will decline.' },

  { id: 'check-notlegal', kind: 'check', after: 'notlegal',
    case: 'n-check',
    ask: { type: 'option', step: 'J1', among: ['check', 'words', 'policy'] } },

  /* ---------- Two look-alike pairs ---------- */
  { id: 'look-review-notlegal', kind: 'lookalike', ledger: 'review~notlegal',
    link: 'In both of these names someone is unhappy with a rule and asks a judge to deal with it. That makes them easy to mix up. This card puts them side by side.',
    cases: ['ls-permit-fine', 'ls-permit-stage'],
    instruction: 'Both cases are about gatherings on the same village green. Compare one thing: what is asked of the judge. In one case it is whether a rule is allowed. In the other it is to choose something that would be better.',
    prompt: { kind: 'which', option: 'J1.check', answer: 'ls-permit-fine' },
    difference: [
      'In Case A, Rosa was fined under the town’s permit rule, and she tells the judge that it takes away the right to gather peacefully. Someone has been harmed, and there is a place in the Constitution to check the rule against. The answer is {a:J1.check}, and the case is {o:review}.',
      'In Case B, nobody has been fined and nobody says a right is taken away. The group thinks a stage would be better for the town, and asks the judge to order one built. No law requires one. The answer is {a:J1.policy}, and the case is {o:notlegal}.',
      'The place is the same, and so is the wish for something to be different. In the first case there is something in the Constitution for the judge to check against. In the second there is nothing for the judge to apply.'
    ] },

  { id: 'look-interpret-notlegal', kind: 'lookalike', ledger: 'interpret~notlegal',
    link: 'In neither of these names does anyone say a law breaks the Constitution, and in both a judge is asked about a rule of government. This card puts them side by side.',
    cases: ['ls-dog-leash', 'ls-dog-park'],
    instruction: 'Both cases are about dogs in the same park. Compare one thing: is there a law whose words the judge can read to answer the question, or is the judge asked to choose?',
    prompt: { kind: 'which', option: 'J1.words', answer: 'ls-dog-leash' },
    difference: [
      'In Case A there is a law, "on a leash", and Tamsin says her thirty-foot cord is a leash. The judge can answer from the words of the law, the rest of it, what it was for and earlier rulings ({t:precedent}). The answer is {a:J1.words}, and the case is {o:interpret}.',
      'In Case B there is no law to read. The owners want a fenced area for dogs, and their reason is that the dogs would be happier. Nothing tells the judge to order one. The answer is {a:J1.policy}, and the case is {o:notlegal}.',
      'Both are about dogs, and in both the person wants something from the judge. The difference is whether there is a law the judge can read to answer, or only a view about what would be better.'
    ] },

  { id: 'exc-hall', kind: 'exception', ledger: 'review~notlegal', looksLike: 'notlegal', is: 'review',
    h: 'A request that sounds like a plea for a better policy, and is not',
    link: 'The last cards kept the pair tidy. A real request can sound like a plea for a better policy and still contain something a judge can check against the Constitution, and then the case is the first name of this unit.',
    case: 'x-hall',
    setup: 'The Mehta family ask the judge to change a town rule, and they say the rule is unfair. That is how people ask for a better policy, and it is what you point to for {a:J1.policy}. Yet the answer for this case is {a:J1.check}.',
    prompt: { kind: 'phrase', answer: 'the Constitution does not allow a town to favor one religion' },
    because: [
      'Look at what has happened to the family, and at what they say. They were turned away from the hall, so they have been harmed. And they do not say only that the rule is unfair: they say the Constitution does not allow it. That gives the judge something to check the rule against.',
      'A request is not for a better policy just because it says "unfair" or asks the judge to order a change. If someone points to a place in the Constitution where the rule clashes, the judge can decide, because there is a rule to apply. A request that points to nothing but "it would be better" is the other name.'
    ],
    take: 'So read the reason as well as the request. "Unfair" alone is a view about which policy is better. "Unfair, and the Constitution does not allow it" is a claim the judge can check.' }
]);

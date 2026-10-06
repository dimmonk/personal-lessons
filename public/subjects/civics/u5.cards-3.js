// Civics, Unit Five, part two (first half): a judge asked to choose a policy, and its look-alike pair with the first name.

FC.cards('civics', 'u5', [

  /* ---------- A political question ---------- */
  { id: 'meet-notlegal', kind: 'meet', outcome: 'notlegal',
    link: 'So far the judge has been asked about a law: whether it is allowed, or what its words cover. The third of the four is a request where there is no law to look at, and the judge is asked for something else.',
    case: 'n-bus', mark: 'J1',
    strip: [
      'They ask a judge to change the bus fare, by ordering the council to cut it from $2 to $1.',
      'Their reason is that a lower fare would be fairer. That is a view about which choice is better.',
      'No law sets what a fare must be, and nobody says the fare takes away a right. The judge has nothing to read and nothing to check.'
    ],
    explain: [
      'The riders are not saying the fare breaks the Constitution, and they are not asking what a law means. They are asking the judge to choose: $2 or $1. People can disagree about that for good reasons, as they do about taxes, school hours and speed limits.',
      'A judge works by applying rules: a law, or the Constitution. Here no rule decides between $2 and $1, so there is nothing for the judge to apply, and a judge who chose would be putting the judge’s own view in the place of the town’s. The Constitution leaves choices like this to voters and the leaders they elect, and a court will decline.',
      'That does not leave the riders stuck. They can vote, sign petitions, write to the council and organize a campaign. A lawsuit will not change the fare.'
    ],
    feature: { step: 'J1', option: 'policy' },
    name: 'The name for this is {o:notlegal}. "Political" in this name does not mean "about parties". It means a choice that is made by voting and not by a legal test, so the judge leaves it to the voters.' },

  { id: 'check-notlegal', kind: 'check', after: 'notlegal',
    case: 'n-check',
    ask: { type: 'option', step: 'J1', among: ['check', 'words', 'policy'] } },

  /* ---------- The look-alike pair with the first name ---------- */
  { id: 'look-review-notlegal', kind: 'lookalike', ledger: 'review~notlegal',
    link: 'In both of these names someone is unhappy with a rule and asks a judge to deal with it. That makes them easy to mix up. This card puts them side by side.',
    cases: ['ls-permit-fine', 'ls-permit-stage'],
    instruction: 'Both cases are about gatherings on the same village green. Compare one thing: what is asked of the judge. In one case it is whether a rule is allowed. In the other it is to choose something that would be better.',
    prompt: { kind: 'which', option: 'J1.check', answer: 'ls-permit-fine' },
    difference: [
      'In Case A, Rosa was fined under the town’s permit rule, and she tells the judge that it takes away the right to gather peacefully. Someone has been harmed, and there is a place in the Constitution to check the rule against. The answer is {a:J1.check}, and the case is {o:review}.',
      'In Case B, nobody has been fined and nobody says a right is taken away. The group thinks a stage would be better for the town, and asks the judge to order one built. No law requires one. The answer is {a:J1.policy}, and the case is {o:notlegal}.'
    ] }
]);

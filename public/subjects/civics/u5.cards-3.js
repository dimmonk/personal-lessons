// Civics, Unit Five, part two (first half): a judge asked to choose a policy, and its look-alike pair with the first name.

FC.cards('civics', 'u5', [

  /* ---------- Left to the voters ---------- */
  { id: 'meet-notlegal', kind: 'meet', outcome: 'notlegal',
    link: 'Third: someone asks a judge to choose a better rule, and no law decides it.',
    case: 'n-bus', mark: 'J1',
    explain: [
      'The riders do not say the fare breaks the Constitution, and they do not ask what a law means. They ask the judge to choose between $2 and $1. People disagree about that for good reasons, as they do about taxes and speed limits.',
      'No law or right decides it, so a judge who chose would be putting their own view in place of the council’s. That choice belongs to voters and the leaders they elect, so the judge says no. The riders can still vote, sign petitions and write to the council. A lawsuit will not change the fare.'
    ],
    spot: [
      { do: 'Find what the riders ask the judge to do: cut the fare to $1.', why: 'They want the judge to pick a better rule.' },
      { do: 'Look for a law that sets the fare, or a right the fare takes away: there is none.', why: 'With no law and no right, the judge has nothing to read or check.' },
      { do: 'Find their reason: it would be fairer.', why: 'That is a view about what is better, and voters can settle it.' }
    ],
    feature: { step: 'J1', option: 'policy' },
    name: 'This is {o:notlegal}. A judge says no, because the choice belongs to the people who vote.' },

  { id: 'check-notlegal', kind: 'check', after: 'notlegal',
    case: 'n-check',
    ask: { type: 'option', step: 'J1', among: ['check', 'words', 'policy'] } },

  /* ---------- The look-alike pair with the first name ---------- */
  { id: 'look-review-notlegal', kind: 'lookalike', ledger: 'review~notlegal',
    link: 'In both, someone is unhappy with a rule and asks a judge to deal with it.',
    cases: ['ls-permit-fine', 'ls-permit-stage'],
    instruction: 'Both stories are about gatherings on the same village green. Compare one thing: what is asked of the judge. In one it is whether a rule is allowed. In the other it is to choose something better.',
    prompt: { kind: 'which', option: 'J1.check', answer: 'ls-permit-fine' },
    difference: [
      'In Story A, Rosa was fined under the town’s permit rule, and she tells the judge it takes away the right to gather peacefully. Someone was harmed and a right is named, so the judge has something to check. The answer is {a:J1.check}, and the name is {o:review}.',
      'In Story B, nobody was fined and nobody names a right. The group only thinks a stage would be better, and no law requires one. The answer is {a:J1.policy}, and the name is {o:notlegal}.',
      'A fine and a named right give the judge something to check. “It would be better” does not.'
    ] }
]);

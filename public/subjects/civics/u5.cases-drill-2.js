// Civics, Unit Five: drill cases for the second stage (the whole route, no help), clean cases, one for each name.
// Every question is asked here, starting with the first question of the key, so every case carries marked words
// and a reason for that question too (D1).

FC.cases('civics', 'u5', [

  /* ---------- Clean ---------- */
  { id: 'rt-review-1', use: 'drill', tier: 'clean', setting: 'money', topic: 'a language rule for shop signs',
    text: 'A state law bans any shop from putting up a sign in a language other than English. Ola, who runs a bakery, was fined $250 for a sign in Polish. She took the state to court, saying the law takes away her right to speak.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'She took the state to court', J1: 'saying the law takes away her right to speak' },
    reason: { D1: 'The law and the fine came first. The story ends with Ola taking the state to a judge: {cue:D1}.',
              J1: 'Ola was fined, and she says the law itself takes away a right the Constitution protects: {cue:J1}.' },
    not: { outcome: 'interpret', why: 'She does not ask whether her Polish sign breaks the law’s wording. She says the law itself is not allowed.' } },

  { id: 'rt-interpret-1', use: 'drill', tier: 'clean', setting: 'community', topic: 'a building permit and a market tent',
    text: 'A town law says that no building may be put up on the riverbank without a permit. Fiona set up a tent with a wooden floor for a summer market and was fined. She does not say the law is wrong. She asked a judge to decide whether a tent with a wooden floor is a building under the law.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'She asked a judge to decide', J1: 'whether a tent with a wooden floor is a building under the law' },
    reason: { D1: 'The law and the fine came first. The story ends with a request to a judge: {cue:D1}.',
              J1: 'Fiona accepts the law and asks how far one word reaches: {cue:J1}.' },
    not: { outcome: 'review', why: 'Fiona does not say the law takes away a right. She asks whether the word “building” covers her tent.' } },

  { id: 'rt-notlegal-1', use: 'drill', tier: 'clean', setting: 'learning', topic: 'college fees',
    text: 'Students at Carver College ask a judge to order the college to lower its fees by a quarter, saying that the fees are too high for most families. No law says what a college may charge, and nobody says the fees take away a right.',
    outcome: 'notlegal', route: { D1: ['courts'], J1: ['policy'] },
    cues: { D1: 'ask a judge to order the college', J1: 'No law says what a college may charge, and nobody says the fees take away a right' },
    reason: { D1: 'The students have asked a judge to act: {cue:D1}.',
              J1: 'The students want the judge to choose lower fees because they would be fairer, and nothing settles it: {cue:J1}.' },
    not: { outcome: 'review', why: 'Nobody says a rule takes away a right, so the judge has nothing in the Constitution to check the fees against.' } },

  { id: 'rt-trial-1', use: 'drill', tier: 'clean', setting: 'world', topic: 'a courtroom closed to the public',
    text: 'Pavel is charged with robbery. The judge ordered his trial held in a closed courtroom with no public allowed. Pavel’s lawyer asks the judge to decide whether closing the courtroom takes away the public trial that the Constitution promises.',
    outcome: 'trialrights', route: { D1: ['courts'], J1: ['accused'] },
    cues: { D1: 'Pavel’s lawyer asks the judge to decide', J1: 'whether closing the courtroom takes away the public trial that the Constitution promises' },
    reason: { D1: 'The story ends with a request to a judge: {cue:D1}.',
              J1: 'Pavel is accused of a crime, and his lawyer asks whether a step the Constitution promises was kept: {cue:J1}.' },
    not: { outcome: 'review', why: 'Nobody says the law against robbery is wrong. The question is how Pavel’s trial is held.' } },
]);

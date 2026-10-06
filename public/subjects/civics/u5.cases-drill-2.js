// Civics, Unit Five: drill cases for stage four (the whole route, no help), clean and varied cases. Three for each name
// across this file and the next. Every question is asked here, starting with the first question of the key, so every
// case carries marked words and a reason for that question too (D1).

FC.cases('civics', 'u5', [

  /* ---------- Clean ---------- */
  { id: 'rt-review-1', use: 'drill', tier: 'clean', setting: 'money', topic: 'a language rule for shop signs',
    text: 'A state law bans any shop from putting up a sign in a language other than English. Ola, who runs a bakery, was fined $250 for a sign in Polish. She took the state to court, saying the law takes away her right to speak.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'She took the state to court', J1: 'saying the law takes away her right to speak' },
    reason: { D1: 'The state made its law and fined Ola, and those came first. The story ends with her case: {cue:D1}.',
              J1: 'Ola was fined, so she was harmed, and she says the law clashes with a right the Constitution protects: {cue:J1}.' },
    not: { outcome: 'interpret', why: 'She does not ask whether a Polish sign is the kind of sign the law covers. She says the law is not allowed.' } },

  { id: 'rt-interpret-1', use: 'drill', tier: 'clean', setting: 'community', topic: 'a building permit and a market tent',
    text: 'A town law says that no building may be put up on the riverbank without a permit. Fiona set up a tent with a wooden floor for a summer market and was fined. She does not say the law is wrong. She asked a judge to decide whether a tent with a wooden floor is a building under the law.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'She asked a judge to decide', J1: 'whether a tent with a wooden floor is a building under the law' },
    reason: { D1: 'The town has made its law and fined Fiona. The story ends with a request: {cue:D1}.',
              J1: 'Fiona accepts the law, and the question is how far a word reaches: {cue:J1}.' },
    not: { outcome: 'review', why: 'Fiona does not say the law takes away a right. She asks whether the word "building" covers her tent.' } },

  { id: 'rt-notlegal-1', use: 'drill', tier: 'clean', setting: 'learning', topic: 'college fees',
    text: 'Students at Carver College ask a judge to order the college to lower its fees by a quarter, saying that the fees are too high for most families. No law says what a college may charge, and nobody says the fees take away a right.',
    outcome: 'notlegal', route: { D1: ['courts'], J1: ['policy'] },
    cues: { D1: 'ask a judge to order the college', J1: 'No law says what a college may charge, and nobody says the fees take away a right' },
    reason: { D1: 'The students have gone to a judge: {cue:D1}. The college has not been asked for anything else.',
              J1: 'The students want the judge to choose lower fees because they would be fairer, and nothing settles it: {cue:J1}.' },
    not: { outcome: 'review', why: 'Nobody says a rule takes away a right. There is nothing in the Constitution for the judge to check the fees against.' } },

  { id: 'rt-trial-1', use: 'drill', tier: 'clean', setting: 'world', topic: 'a courtroom closed to the public',
    text: 'Pavel is charged with robbery. The judge ordered his trial held in a closed courtroom with no public allowed. Pavel’s lawyer asks the judge to decide whether closing the courtroom takes away the public trial that the Constitution promises.',
    outcome: 'trialrights', route: { D1: ['courts'], J1: ['accused'] },
    cues: { D1: 'Pavel’s lawyer asks the judge to decide', J1: 'whether closing the courtroom takes away the public trial that the Constitution promises' },
    reason: { D1: 'The story ends with a request to a judge: {cue:D1}.',
              J1: 'Pavel is accused of a crime, and the judge is asked whether a step the Constitution promises was kept: {cue:J1}.' },
    not: { outcome: 'review', why: 'Nobody says the law against robbery is wrong. The question is about how Pavel’s trial is held.' } },

  { id: 'rt-review-2', use: 'drill', tier: 'clean', setting: 'health', topic: 'pamphlets outside a clinic',
    text: 'A city law bans anyone from handing out pamphlets outside a clinic. Dr. Sandhu was fined $120 for giving out pamphlets about healthy eating to people walking past. She asked a judge to cancel the fine, saying the law takes away her right to speak.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'She asked a judge to cancel the fine', J1: 'saying the law takes away her right to speak' },
    reason: { D1: 'The city made its law and fined her, and those came first. The story ends with a request to a judge: {cue:D1}.',
              J1: 'Dr. Sandhu was fined, so she was harmed, and she says the law clashes with a right the Constitution protects: {cue:J1}.' },
    not: { outcome: 'notlegal', why: 'She does not only say that a different rule would be better. She says the law takes away a right.' } },

  /* ---------- Varied ---------- */
  { id: 'rt-interpret-2', use: 'drill', tier: 'varied', setting: 'work', topic: 'jury leave for a delivery driver',
    text: 'A state law says that every employee who serves on a jury must be given paid leave. Tomas drives for a delivery firm that calls him a contractor, and the firm refused him paid leave when he was called to a jury. The firm has asked a judge to decide whether Tomas is an employee under the law. Nobody says the law is wrong.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'The firm has asked a judge to decide', J1: 'whether Tomas is an employee under the law' },
    reason: { D1: 'The state has made its law, and the firm has refused the leave. The story ends with a request to a judge: {cue:D1}.',
              J1: 'Everyone accepts the law. The only question is how far a word reaches: {cue:J1}.' },
    not: { outcome: 'notlegal', why: 'There is a law, and the judge can answer from its words and from earlier rulings. Nobody asks the judge to choose a better rule.' } },

  { id: 'rt-notlegal-2', use: 'drill', tier: 'varied', setting: 'home', topic: 'a cut in every rent',
    text: 'Tenants in a large block ask a judge to order the landlord to cut every rent by $100, saying that rents in the city are too high. No law sets a limit on rent in the city, and nobody says the rents take away a right.',
    outcome: 'notlegal', route: { D1: ['courts'], J1: ['policy'] },
    cues: { D1: 'ask a judge to order the landlord', J1: 'No law sets a limit on rent in the city, and nobody says the rents take away a right' },
    reason: { D1: 'The tenants have gone to a judge: {cue:D1}.',
              J1: 'The tenants ask the judge to choose a lower rent because it would be fairer, and nothing settles it: {cue:J1}.' },
    not: { outcome: 'interpret', why: 'There is no law whose words the judge could read to answer the tenants. They want the judge to choose.' } },

  { id: 'rt-trial-2', use: 'drill', tier: 'varied', setting: 'money', topic: 'a witness who did not come to court',
    text: 'Greg is on trial for stealing from a shop. The only witness against him gave a written statement and did not come to court. Greg’s lawyer asks the judge to decide whether Greg can be tried on a statement from a witness he has no chance to question, when the Constitution promises the right to hear and question the witnesses against him.',
    outcome: 'trialrights', route: { D1: ['courts'], J1: ['accused'] },
    cues: { D1: 'Greg’s lawyer asks the judge to decide', J1: 'the Constitution promises the right to hear and question the witnesses against him' },
    reason: { D1: 'The story ends with a request to a judge: {cue:D1}.',
              J1: 'Greg is accused of a crime, and the judge is asked whether a step the Constitution promises was kept: {cue:J1}.' },
    not: { outcome: 'interpret', why: 'The judge is not asked what the words of a law cover. The question is whether a promised step was followed.' } }
]);

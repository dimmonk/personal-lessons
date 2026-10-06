// Civics, Unit Five: the drill cases whose story points the wrong way (echo names a teaching case whose story
// each one is built to bring back).

FC.cases('civics', 'u5', [

  /* ---------- Cases whose story points the wrong way ---------- */
  { id: 'rt-review-3', use: 'drill', tier: 'misleading', setting: 'community', topic: 'a poet and a performance license', echo: 'w-megaphone',
    text: 'A city law bans unlicensed performances in the main square. Hiro, a street poet, was fined $70 for reading poems aloud there. His lawyer does not ask whether reading poems is a performance. She tells the judge that the law takes away his right to speak.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'She tells the judge', J1: 'the law takes away his right to speak' },
    reason: { D1: 'The city made its law and fined Hiro, and those came first. The story ends with what his lawyer tells a judge: {cue:D1}.',
              J1: 'The word "performance" is in the story, but Hiro’s lawyer says in so many words that she is not asking about it. She says the law clashes with a right the Constitution protects: {cue:J1}.' },
    not: { outcome: 'interpret', why: 'A word of the law is in the story, so it can look like a question about what the word covers. His lawyer says plainly that she does not ask it.' } },

  { id: 'rt-notlegal-3', use: 'drill', tier: 'misleading', setting: 'leisure', topic: 'a town pool for residents only',
    text: 'A town’s pool is open to residents only. The Okoye family, who live a mile outside the town line, were turned away. They ask a judge to order the town to let everyone use the pool, saying the rule is unfair. No law requires a town to open its pool to people who live outside it, and nobody says the rule takes away a right.',
    outcome: 'notlegal', route: { D1: ['courts'], J1: ['policy'] },
    cues: { D1: 'They ask a judge to order the town', J1: 'No law requires a town to open its pool to people who live outside it, and nobody says the rule takes away a right' },
    reason: { D1: 'The story ends with a request to a judge: {cue:D1}.',
              J1: 'The family were turned away, and they call the rule unfair, but they point to no law or right that settles it: {cue:J1}. They ask the judge to choose a fairer rule.' },
    not: { outcome: 'review', why: 'Being turned away sounds like a harm, and "unfair" sounds like a claim. But nobody says the rule breaks the Constitution, so there is nothing to check it against.' } },

  { id: 'rt-interpret-3', use: 'drill', tier: 'misleading', setting: 'home', topic: 'a pet python and a license', echo: 't-search',
    text: 'Quinn is on trial for keeping a dangerous animal without a license. She had a lawyer from the start, and nobody says the police skipped a step. The only dispute is whether her pet python counts as a dangerous animal under the county’s law, and her lawyer has asked the judge to decide it.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'her lawyer has asked the judge to decide it', J1: ['nobody says the police skipped a step', 'whether her pet python counts as a dangerous animal under the county’s law'] },
    reason: { D1: 'The story ends with a request to a judge: {cue:D1}.',
              J1: 'There is a trial and a lawyer, but nobody says a promised step was skipped. What is put to the judge is how far the words of the law reach: {cue:J1}.' },
    not: { outcome: 'trialrights', why: 'A person is on trial for a crime, which is why it can look like a case about the steps promised to an accused person. But nobody says a step was skipped.' } },

  { id: 'rt-trial-3', use: 'drill', tier: 'misleading', setting: 'leisure', topic: 'a fishing license and a long questioning',
    text: 'Walt is charged under a state law that bans fishing without a license. He does not say the law is wrong. At his trial the police admit they questioned him for hours after he said he wanted a lawyer, and his lawyer asks the judge to decide whether that followed the steps the Constitution promises to a person who is accused.',
    outcome: 'trialrights', route: { D1: ['courts'], J1: ['accused'] },
    cues: { D1: 'his lawyer asks the judge to decide', J1: ['He does not say the law is wrong', 'whether that followed the steps the Constitution promises to a person who is accused'] },
    reason: { D1: 'The story ends with a request to a judge: {cue:D1}.',
              J1: 'A law is named, but Walt does not attack it: {cue:J1}. The judge is asked about how he was treated after he said he wanted a lawyer.' },
    not: { outcome: 'review', why: 'A state law and a trial are in the story, so it can look like a challenge to the law. Walt says the law is not wrong, and what his lawyer questions is how the police acted.' } },
]);

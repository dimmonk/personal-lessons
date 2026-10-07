// Civics, Unit Five: the drill cases whose story points the wrong way (echo names a teaching case whose story
// each one is built to bring back).

FC.cases('civics', 'u5', [

  /* ---------- Cases whose story points the wrong way ---------- */
  { id: 'rt-review-3', use: 'drill', tier: 'misleading', setting: 'community', topic: 'a poet and a performance license', echo: 'w-megaphone',
    text: 'A city law bans unlicensed performances in the main square. Hiro, a street poet, was fined $70 for reading poems aloud there. His lawyer does not ask whether reading poems is a performance. She tells the judge that the law takes away his right to speak.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'She tells the judge', J1: 'the law takes away his right to speak' },
    reason: { D1: 'The law and the fine came first. The story ends with what Hiro’s lawyer tells a judge: {cue:D1}.',
              J1: 'The word “performance” is in the story, but his lawyer says she is not asking about it. She says the law itself takes away a right: {cue:J1}.' },
    not: { outcome: 'interpret', why: 'A word of the law is in the story, so it can look like a question about what the word covers. His lawyer says plainly that she is not asking that.' } },

  { id: 'rt-notlegal-3', use: 'drill', tier: 'misleading', setting: 'leisure', topic: 'a town pool for residents only',
    text: 'A town’s pool is open to residents only. The Okoye family, who live a mile outside the town line, were turned away. They ask a judge to order the town to let everyone use the pool, saying the rule is unfair. No law requires a town to open its pool to people who live outside it, and nobody says the rule takes away a right.',
    outcome: 'notlegal', route: { D1: ['courts'], J1: ['policy'] },
    cues: { D1: 'They ask a judge to order the town', J1: 'No law requires a town to open its pool to people who live outside it, and nobody says the rule takes away a right' },
    reason: { D1: 'The story ends with a request to a judge: {cue:D1}.',
              J1: 'The family was turned away and calls the rule unfair, but names no law or right that settles it: {cue:J1}. They are asking the judge to choose a fairer rule.' },
    not: { outcome: 'review', why: 'Being turned away sounds like harm, and “unfair” sounds like a claim. But nobody says the rule breaks the Constitution, so there is nothing to check.' } },

  { id: 'rt-interpret-3', use: 'drill', tier: 'misleading', setting: 'home', topic: 'a pet python and a license', echo: 't-search',
    text: 'Quinn is on trial for keeping a dangerous animal without a license. She had a lawyer from the start, and nobody says the police skipped a step. The only dispute is whether her pet python counts as a dangerous animal under the county’s law, and her lawyer has asked the judge to decide it.',
    outcome: 'interpret', route: { D1: ['courts'], J1: ['words'] },
    cues: { D1: 'her lawyer has asked the judge to decide it', J1: ['nobody says the police skipped a step', 'whether her pet python counts as a dangerous animal under the county’s law'] },
    reason: { D1: 'The story ends with a request to a judge: {cue:D1}.',
              J1: 'There is a trial and a lawyer, but nobody says a promised step was skipped. The judge is asked how far a law’s words reach: {cue:J1}.' },
    not: { outcome: 'trialrights', why: 'A trial makes it look like a story about an accused person’s steps. But nobody says a step was skipped.' } },

  { id: 'rt-trial-3', use: 'drill', tier: 'misleading', setting: 'leisure', topic: 'a fishing license and a long questioning',
    text: 'Walt is charged under a state law that bans fishing without a license. He does not say the law is wrong. At his trial the police admit they questioned him for hours after he said he wanted a lawyer, and his lawyer asks the judge to decide whether that followed the steps the Constitution promises to a person who is accused.',
    outcome: 'trialrights', route: { D1: ['courts'], J1: ['accused'] },
    cues: { D1: 'his lawyer asks the judge to decide', J1: ['He does not say the law is wrong', 'whether that followed the steps the Constitution promises to a person who is accused'] },
    reason: { D1: 'The story ends with a request to a judge: {cue:D1}.',
              J1: 'A law is named, but Walt does not attack it: {cue:J1}. The judge is asked how the police treated him after he said he wanted a lawyer.' },
    not: { outcome: 'review', why: 'A state law and a trial can look like an attack on the law. But Walt says the law is not wrong, and his lawyer questions what the police did.' } },
]);

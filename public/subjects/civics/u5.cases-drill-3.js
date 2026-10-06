// Civics, Unit Five: the cases of stage four whose story points the wrong way (echo names a teaching case whose story
// each one is built to bring back), the reverse items of stage two (one for each name), and the faulty claims of the
// last stage. A reverse item gives the name and asks what you would expect: every choice is what one of the taught names
// sounds like (voice). A claim is something a person might say that uses a name wrongly. ask.type 'missing' asks what
// you would need to see before the name could be used; ask.type 'option' asks the key's question of the claim itself.
// The fault is shown after the learner commits, and the claim put right is always the last thing shown.

FC.cases('civics', 'u5', [

  /* ---------- Cases whose story points the wrong way ---------- */
  { id: 'rt-review-3', use: 'drill', tier: 'misleading', setting: 'community', topic: 'a poet and a performance license', echo: 'w-megaphone',
    text: 'A city law bans unlicensed performances in the main square. Hiro, a street poet, was fined $70 for reading poems aloud there. His lawyer does not ask whether reading poems is a performance. She tells the judge that the law takes away his right to speak.',
    outcome: 'review', route: { D1: ['courts'], J1: ['check'] },
    cues: { D1: 'She tells the judge', J1: 'the law takes away his right to speak' },
    reason: { D1: 'The city made its law and fined Hiro, and those came first. The story ends with what his lawyer tells a judge: {cue:D1}.',
              J1: 'The word "performance" is in the story, but Hiro’s lawyer says in so many words that she is not asking about it. She says the law clashes with a right the Constitution protects: {cue:J1}.' },
    not: { outcome: 'interpret', why: 'A word of the law is in the story, so it can look like a question about what the word covers. His lawyer says plainly that she does not ask it.' } },

  { id: 'rt-notlegal-3', use: 'drill', tier: 'misleading', setting: 'leisure', topic: 'a town pool for residents only', echo: 'x-hall',
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

  { id: 'rt-trial-3', use: 'drill', tier: 'misleading', setting: 'leisure', topic: 'a fishing license and a long questioning', echo: 'x-defendant',
    text: 'Walt is charged under a state law that bans fishing without a license. He does not say the law is wrong. At his trial the police admit they questioned him for hours after he said he wanted a lawyer, and his lawyer asks the judge to decide whether that followed the steps the Constitution promises to a person who is accused.',
    outcome: 'trialrights', route: { D1: ['courts'], J1: ['accused'] },
    cues: { D1: 'his lawyer asks the judge to decide', J1: ['He does not say the law is wrong', 'whether that followed the steps the Constitution promises to a person who is accused'] },
    reason: { D1: 'The story ends with a request to a judge: {cue:D1}.',
              J1: 'A law is named, but Walt does not attack it: {cue:J1}. The judge is asked about how he was treated after he said he wanted a lawyer.' },
    not: { outcome: 'review', why: 'A state law and a trial are in the story, so it can look like a challenge to the law. Walt says the law is not wrong, and what his lawyer questions is how the police acted.' } },

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'rev-review', use: 'drill', kind: 'reverse', outcome: 'review', expect: 'hear',
    options: [
      { text: '"The rule takes away our right to speak, and we were fined for it."', voice: 'review' },
      { text: '"I do not think a paddling pond was meant to count as a pool."', voice: 'interpret' },
      { text: '"It would be fairer if the council cut the fee, so the court should order it."', voice: 'notlegal' },
      { text: '"The officers searched my bag without a warrant."', voice: 'trialrights' }
    ],
    why: 'It is a claim from someone the rule has harmed ("we were fined") that the rule clashes with the Constitution ("our right to speak").' },

  { id: 'rev-trialrights', use: 'drill', kind: 'reverse', outcome: 'trialrights', expect: 'find',
    options: [
      { text: 'She was held for two days and could not call a lawyer.', voice: 'trialrights' },
      { text: 'He says the town’s rule takes away his right to worship.', voice: 'review' },
      { text: 'They argue that the word "shop" cannot cover a food truck.', voice: 'interpret' },
      { text: 'They want the judge to choose a shorter way for the bus to go.', voice: 'notlegal' }
    ],
    why: 'That detail is a step the Constitution promises an accused person (a lawyer) said to have been skipped.' },

  { id: 'rev-interpret', use: 'drill', kind: 'reverse', outcome: 'interpret', expect: 'hear',
    options: [
      { text: '"The law says farm. Does a rooftop count?"', voice: 'interpret' },
      { text: '"The law is wrong: it takes away my right to publish."', voice: 'review' },
      { text: '"We want the court to pick the better timetable."', voice: 'notlegal' },
      { text: '"I asked for a lawyer and they kept questioning me."', voice: 'trialrights' }
    ],
    why: 'It asks whether a word in a law reaches a situation, and it does not say the law is wrong.' },

  { id: 'rev-notlegal', use: 'drill', kind: 'reverse', outcome: 'notlegal', expect: 'find',
    options: [
      { text: 'They wanted the judge to choose between two fares, and no law set either.', voice: 'notlegal' },
      { text: 'The person said the permit rule takes away her right to gather peacefully.', voice: 'review' },
      { text: 'The two sides disagreed about whether a tent counts as a building.', voice: 'interpret' },
      { text: 'The accused said that police questioned him without a lawyer.', voice: 'trialrights' }
    ],
    why: 'That detail shows a request for the judge to choose, with no law or right in the Constitution settling it.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'claim-demo-j', use: 'claim',
    text: '"The judge threw the rule out because she thought it was a bad idea. That is judicial review."',
    ask: { type: 'missing', name: 'review' },
    fault: 'The claim says why the judge acted: she thought the rule was a bad idea. That is a view about which rule is better, and a judge’s view does not count for this. {o:review} needs someone the rule has harmed, and a claim that the rule clashes with the Constitution. The claim shows neither.',
    corrected: 'She threw the rule out because she thought it was a bad idea. That is not a reason a judge may use. A judge sets a rule aside only if it clashes with the Constitution, and only when someone it has harmed brings a real case. If those were there, it would be {o:review}. If the judge was only asked which rule would be better, she should have declined, and the case would be {o:notlegal}.' },

  { id: 'claim-disagree', use: 'claim',
    text: '"The Supreme Court can strike down any law it disagrees with."',
    ask: { type: 'missing', name: 'review' },
    fault: 'The claim treats a judge’s disagreement as enough. The name needs more: someone the law has actually harmed, a case they have brought, and a claim that the law clashes with the Constitution. Whether the judge likes the law is not on the list.',
    corrected: 'A court can set a law aside only if it breaks the Constitution, and only in a real case brought by someone the law has harmed.' },

  { id: 'claim-advice', use: 'claim',
    text: '"A judge can tell the city in advance whether a law it is thinking of passing would be allowed."',
    ask: { type: 'missing', name: 'review' },
    fault: 'The claim has a law that does not exist yet and nobody harmed by it. Without someone harmed who has brought a real case, there is nothing for the judge to rule on, and the name needs both.',
    corrected: 'A judge does not rule on a law just because someone asks whether it is allowed, and does not give advice in advance. The question can reach a judge once the law is in use and someone it has harmed brings a real case.' },

  { id: 'claim-taste', use: 'claim',
    text: '"The judge read the word farm the way she thinks is best for the town, so that is what it means."',
    ask: { type: 'missing', name: 'interpret' },
    fault: 'The claim says the judge went by what she thinks is best. For {o:interpret} a judge goes by the words, the rest of the law, what it was for and earlier rulings ({t:precedent}). The judge’s own view of whether the rule is a good one does not decide it.',
    corrected: 'The judge works out what the word means from the law: its words, the rest of the law, what it was for, and earlier rulings on the same words, called {t:precedent}. What she thinks is best for the town does not decide it.' },

  { id: 'claim-citizen', use: 'claim',
    text: '"He is not a citizen, so the judge does not need to check that the police gave him the steps the Constitution promises."',
    ask: { type: 'missing', name: 'trialrights' },
    fault: 'The claim makes citizenship the test. {o:trialrights} needs a person accused of a crime and a step the Constitution promises, and the steps are written for the accused, not for citizens.',
    corrected: 'He is accused of a crime in a criminal case, so the steps the Constitution promises him apply, whether or not he is a citizen. The judge is asked whether they were followed.' },

  { id: 'claim-wiser', use: 'claim',
    text: '"The judge should order the city to build the new library. It would be the best use of the money."',
    ask: { type: 'option', step: 'J1', answer: 'policy' },
    fault: 'The claim asks the judge to choose, and gives "the best use of the money" as the reason. No law and no right is named that requires the library. A judge applies rules, and choosing the best use of money is left to voters and the leaders they elect.',
    corrected: 'If you want the library built, the way is to vote, petition and organize, because choosing how to spend money is for voters and the leaders they elect. A judge could be asked about the library only if a law or a right in the Constitution required it.' }
]);

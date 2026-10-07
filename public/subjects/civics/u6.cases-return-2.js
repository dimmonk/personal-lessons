// Civics, Unit Six: fresh cases kept back for later days (second file: the rest of the third name, the fourth and the fifth).
// Three for each name, one for each of its scheduled returns (E9).

FC.cases('civics', 'u6', [

  /* ---------- Concurrent powers ---------- */
  { id: 'u6-ret-lead', use: 'return', tier: 'varied', setting: 'health', topic: 'lead in drinking water',
    text: "A federal law sets a limit on the amount of lead allowed in drinking water, and says that a state may set a lower limit. After tests in several towns, the Ostrow legislature passed a law with a lower limit for water supplied in Ostrow.",
    outcome: 'concurrent', route: { D1: ['states'], S1: ['own'], S2: ['floor'] },
    cues: { D1: 'the Ostrow legislature passed a law', S1: 'the Ostrow legislature passed a law', S2: 'A federal law sets a limit on the amount of lead allowed in drinking water, and says that a state may set a lower limit' },
    reason: { D1: 'The story ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'One state’s lawmakers made the rule: {cue:S1}.',
              S2: 'A federal law covers the same matter and leaves room: {cue:S2}. Water that meets the lower limit also meets the federal one.' },
    not: { outcome: 'preempted', why: 'The federal law itself says a state may set a lower limit, so it is not the only rule.' } },

  { id: 'u6-ret-carseat', use: 'return', tier: 'varied', setting: 'home', topic: 'car seat tests',
    text: "A federal law says that every child’s car seat sold in the country must pass a safety test, and that a state may require more tests. After several seats failed in crash tests, the Tarn legislature passed a law that car seats sold in Tarn must pass a second test.",
    outcome: 'concurrent', route: { D1: ['states'], S1: ['own'], S2: ['floor'] },
    cues: { D1: 'the Tarn legislature passed a law', S1: 'the Tarn legislature passed a law', S2: 'A federal law says that every child’s car seat sold in the country must pass a safety test, and that a state may require more tests' },
    reason: { D1: 'The story ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'One state’s lawmakers made the rule: {cue:S1}.',
              S2: 'A federal law covers the same matter and leaves room: {cue:S2}. A seat that passes both tests also passes the federal one.' },
    not: { outcome: 'preempted', why: 'The federal law itself says a state may require more tests, so it is not the only rule.' } },

  /* ---------- A right that binds the states ---------- */
  { id: 'u6-ret-banner', use: 'return', tier: 'varied', setting: 'community', topic: 'a parade banner',
    text: "A club in Pike County planned a parade through the county square, with a banner that said the sheriff had mishandled a case. The Pike County board voted that no parade may go through the county square if its banners criticize the sheriff.",
    outcome: 'protected', route: { D1: ['states'], S1: ['local'], S2: ['right'] },
    cues: { D1: 'The Pike County board voted', S1: 'The Pike County board voted', S2: 'no parade may go through the county square if its banners criticize the sheriff' },
    reason: { D1: 'The story ends with a decision by a county board: {cue:D1}.',
              S1: 'A county board made the rule: {cue:S1}.',
              S2: 'The rule takes away a right: {cue:S2}. It stops a parade because of what its banners say.' },
    not: { outcome: 'localgov', why: 'A county does control its own square. But this rule is aimed at what a banner says, and a county may not take away that right.' } },

  { id: 'u6-ret-studentpaper', use: 'return', tier: 'varied', setting: 'learning', topic: 'a student newspaper',
    text: "The student newspaper at a state college in Lorne printed a story about the college president. The Lorne legislature then passed a law that no student newspaper at a state college may print a story about the president without his office’s approval.",
    outcome: 'protected', route: { D1: ['states'], S1: ['own'], S2: ['right'] },
    cues: { D1: 'The Lorne legislature then passed a law', S1: 'The Lorne legislature then passed a law', S2: 'no student newspaper at a state college may print a story about the president without his office’s approval' },
    reason: { D1: 'The story ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'One state’s lawmakers made the rule: {cue:S1}.',
              S2: 'The rule takes away a right: {cue:S2}. A story that must wait for approval of what it says loses the right to publish.' },
    not: { outcome: 'police', why: 'A state does decide matters about its own colleges. But this rule is aimed at what a newspaper may print, and a state may not take away that right.' } },
]);

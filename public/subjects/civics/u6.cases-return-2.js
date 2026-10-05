// Civics, Unit Six: fresh cases kept back for later days (second file: the rest of the third name, the fourth and the fifth).
// Three for each name, one for each of its scheduled returns (E9).

FC.cases('civics', 'u6', [

  /* ---------- Preemption ---------- */
  { id: 'u6-ret-visitors', use: 'return', tier: 'varied', setting: 'immigration', topic: 'how long visitors may stay',
    text: "Congress has written laws on how long a visitor may stay in the country, and they are meant to be the only rules. The Calder legislature voted that visitors may stay in Calder for no longer than thirty days.",
    outcome: 'preempted', route: { D1: ['states'], S1: ['own'], S2: ['onlyrule'] },
    cues: { D1: 'The Calder legislature voted', S1: 'The Calder legislature voted', S2: 'Congress has written laws on how long a visitor may stay in the country, and they are meant to be the only rules' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}.',
              S2: 'Who may stay in the country, and for how long, is a federal matter, and Congress has written rules meant to be the only ones: {cue:S2}.' },
    not: { outcome: 'police', why: 'The matter sounds like a state’s, because the visitors would be in Calder. But a federal law covers it and is meant to be the only rule.' },
    wouldChange: 'If Congress had written no laws on how long visitors may stay, the matter would still be on the federal list, and the state would still have no room to act.' },

  /* ---------- Concurrent powers ---------- */
  { id: 'u6-ret-lead', use: 'return', tier: 'varied', setting: 'health', topic: 'lead in drinking water',
    text: "A federal law sets a limit on the amount of lead allowed in drinking water, and says that a state may set a lower limit. After tests in several towns, the Ostrow legislature passed a law with a lower limit for water supplied in Ostrow.",
    outcome: 'concurrent', route: { D1: ['states'], S1: ['own'], S2: ['floor'] },
    cues: { D1: 'the Ostrow legislature passed a law', S1: 'the Ostrow legislature passed a law', S2: 'A federal law sets a limit on the amount of lead allowed in drinking water, and says that a state may set a lower limit' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}.',
              S2: 'A federal law covers the same matter and leaves room: {cue:S2}. Water that meets the lower limit also meets the federal one.' },
    not: { outcome: 'preempted', why: 'The federal law itself says that a state may set a lower limit, so it is not meant to be the only rule.' },
    wouldChange: 'If the federal law had said that no state may set a different limit, the state’s lower limit would give way and the name would be {o:preempted}.' },

  { id: 'u6-ret-extrapay', use: 'return', tier: 'varied', setting: 'work', topic: 'extra pay for long weeks',
    text: "A federal law says that workers must be paid extra for hours over forty a week, and that a state may require extra pay sooner. The Calder legislature passed a law that workers in Calder get extra pay after thirty-five hours.",
    outcome: 'concurrent', route: { D1: ['states'], S1: ['own'], S2: ['floor'] },
    cues: { D1: 'The Calder legislature passed a law', S1: 'The Calder legislature passed a law', S2: 'A federal law says that workers must be paid extra for hours over forty a week, and that a state may require extra pay sooner' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}.',
              S2: 'A federal law covers the same matter and leaves room: {cue:S2}. An employer who pays extra after thirty-five hours also pays extra after forty.' },
    not: { outcome: 'police', why: 'A federal law is in the case and covers the same matter, so it is not a case of nothing else covering it.' },
    wouldChange: 'If no federal law covered extra pay for long weeks, the state’s rule would stand alone and the name would be {o:police}.' },

  { id: 'u6-ret-carseat', use: 'return', tier: 'varied', setting: 'home', topic: 'car seat tests',
    text: "A federal law says that every child’s car seat sold in the country must pass a safety test, and that a state may require more tests. After several seats failed in crash tests, the Tarn legislature passed a law that car seats sold in Tarn must pass a second test.",
    outcome: 'concurrent', route: { D1: ['states'], S1: ['own'], S2: ['floor'] },
    cues: { D1: 'the Tarn legislature passed a law', S1: 'the Tarn legislature passed a law', S2: 'A federal law says that every child’s car seat sold in the country must pass a safety test, and that a state may require more tests' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}.',
              S2: 'A federal law covers the same matter and leaves room: {cue:S2}. A seat that passes both tests also passes the federal one.' },
    not: { outcome: 'preempted', why: 'The federal law itself says that a state may require more tests, so it is not meant to be the only rule.' },
    wouldChange: 'If the federal law had said that its test is the only one a seat may be made to pass, the state’s second test would give way and the name would be {o:preempted}.' },

  /* ---------- A right that binds the states ---------- */
  { id: 'u6-ret-banner', use: 'return', tier: 'varied', setting: 'community', topic: 'a parade banner',
    text: "A club in Pike County planned a parade through the county square, with a banner that said the sheriff had mishandled a case. The Pike County board voted that no parade may go through the county square if its banners criticise the sheriff.",
    outcome: 'protected', route: { D1: ['states'], S1: ['local'], S2: ['right'] },
    cues: { D1: 'The Pike County board voted', S1: 'The Pike County board voted', S2: 'no parade may go through the county square if its banners criticise the sheriff' },
    reason: { D1: 'The case ends with a decision by a county board: {cue:D1}.',
              S1: 'The rule was made by a county board: {cue:S1}.',
              S2: 'The rule takes away a right: {cue:S2}. It stops a parade because of what its banners say.' },
    not: { outcome: 'localgov', why: 'A county does control its own square. But this rule is aimed at what a banner says, and a county may not take away a right.' },
    wouldChange: 'If the board had said that every parade must end by six in the evening, whatever its banners say, the rule would take away no right and the name would be {o:localgov}.' },

  { id: 'u6-ret-studentpaper', use: 'return', tier: 'varied', setting: 'learning', topic: 'a student newspaper',
    text: "The student newspaper at a state college in Lorne printed a story about the college president. The Lorne legislature then passed a law that no student newspaper at a state college may print a story about the president without his office’s approval.",
    outcome: 'protected', route: { D1: ['states'], S1: ['own'], S2: ['right'] },
    cues: { D1: 'The Lorne legislature then passed a law', S1: 'The Lorne legislature then passed a law', S2: 'no student newspaper at a state college may print a story about the president without his office’s approval' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}.',
              S2: 'The rule takes away a right: {cue:S2}. It makes a story wait for approval of what it says, which takes away the right to publish.' },
    not: { outcome: 'police', why: 'A state does decide matters about its own colleges. But this rule is aimed at what a newspaper may print, and a state may not take away a right.' },
    wouldChange: 'If the law had only said that student newspapers must be delivered to the library by nine each morning, it would take away no right and the name would be {o:police}.' },

  { id: 'u6-ret-worshiphall', use: 'return', tier: 'varied', setting: 'home', topic: 'a place of worship',
    text: "A new religious group in the city of Hale asked to use an empty shop as a place of worship. The Hale city council voted that no building may be used as a place of worship in the city unless the council approves of the group’s beliefs.",
    outcome: 'protected', route: { D1: ['states'], S1: ['local'], S2: ['right'] },
    cues: { D1: 'The Hale city council voted', S1: 'The Hale city council voted', S2: 'no building may be used as a place of worship in the city unless the council approves of the group’s beliefs' },
    reason: { D1: 'The case ends with a decision by a city council: {cue:D1}.',
              S1: 'The rule was made by a city council: {cue:S1}.',
              S2: 'The rule takes away a right: {cue:S2}. It lets a council refuse a group because of what it believes, which takes away the right to worship.' },
    not: { outcome: 'localgov', why: 'A city does decide what buildings may be used for. But this rule turns on what a group believes, and a city may not take away a right.' },
    wouldChange: 'If the council had said that every building used by the public must have two exits, whatever the building is used for, the rule would take away no right and the name would be {o:localgov}.' }
]);

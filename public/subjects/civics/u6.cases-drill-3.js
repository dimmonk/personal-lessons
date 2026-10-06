// Civics, Unit Six: drill cases for the whole-case stage, clean cases. Every question is asked here, starting with the first one,
// so every case carries marked words and a reason for the gate (D1) as well as for this unit's two questions.

FC.cases('civics', 'u6', [

  /* ---------- Clean ---------- */
  { id: 'u6-r-lessons', use: 'drill', tier: 'clean', setting: 'work', topic: 'a driving instructor license',
    text: "After complaints about unqualified driving instructors, the Calder legislature passed a law that a person must hold a state license to give driving lessons for money.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { D1: 'the Calder legislature passed a law', S1: 'the Calder legislature passed a law', S2: 'a person must hold a state license to give driving lessons for money' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}. No city, town or county is named.',
              S2: 'The matter is {cue:S2}: a trade license, which the states grant. The case names no federal law and the rule takes away no right.' },
    not: { outcome: 'localgov', why: 'No city, town or county is named. The state’s legislature made the rule.' } },

  { id: 'u6-r-leash', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'dogs in a park',
    text: "Walkers in Mill Park complained about dogs running loose near the pond. The Kellmouth city council voted that dogs must be kept on a leash in Mill Park.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { D1: 'The Kellmouth city council voted', S1: 'The Kellmouth city council voted', S2: 'dogs must be kept on a leash in Mill Park' },
    reason: { D1: 'The case ends with a decision by a city council: {cue:D1}.',
              S1: 'The rule was made by a city council: {cue:S1}. A city uses power its state handed down.',
              S2: 'The matter is {cue:S2}: a city park, a local matter. No federal law is named, and no right is taken away.' },
    not: { outcome: 'police', why: 'The state’s legislature did not make the rule. A city council did, and the rule covers one park.' } },

  { id: 'u6-r-library', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a newspaper in the library',
    text: "The Harrow County library keeps a rack of local newspapers. One of them has criticized the county board. The Harrow County board voted that the library may not display any newspaper that criticizes the board.",
    outcome: 'protected', route: { D1: ['states'], S1: ['local'], S2: ['right'] },
    cues: { D1: 'The Harrow County board voted', S1: 'The Harrow County board voted', S2: 'the library may not display any newspaper that criticizes the board' },
    reason: { D1: 'The case ends with a decision by a county board: {cue:D1}.',
              S1: 'The rule was made by a county board: {cue:S1}.',
              S2: 'The rule takes away a right: {cue:S2}. A newspaper is published to be read, and the rule bans it because of what it says about the board.' },
    not: { outcome: 'localgov', why: 'A county does control its own library. But this rule is aimed at what a newspaper says, and a county may not take away a right.' } },

  { id: 'u6-r-coins', use: 'drill', tier: 'clean', setting: 'money', topic: 'silver coins',
    text: "A federal law says that only the federal government may make coins, and that no state may make money of its own. The Tarn legislature voted to make its own silver coins, to be used for paying taxes in Tarn.",
    outcome: 'preempted', route: { D1: ['states'], S1: ['own'], S2: ['onlyrule'] },
    cues: { D1: 'The Tarn legislature voted', S1: 'The Tarn legislature voted', S2: 'A federal law says that only the federal government may make coins, and that no state may make money of its own' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}.',
              S2: 'Making money is a federal power, and a federal law covers it and is meant to be the only rule: {cue:S2}. The state’s coins are exactly what it forbids.' },
    not: { outcome: 'police', why: 'A state does decide many matters alone. But a federal law covers this one and says that no state may act, so there is nothing left for the state to decide.' } },

  { id: 'u6-r-factory', use: 'drill', tier: 'clean', setting: 'work', topic: 'a minimum age for factory work',
    text: "A federal law says that no one under fourteen may be employed in a factory, and that a state may set an older age. The Halvard legislature passed a law that no one under sixteen may work in a factory in Halvard.",
    outcome: 'concurrent', route: { D1: ['states'], S1: ['own'], S2: ['floor'] },
    cues: { D1: 'The Halvard legislature passed a law', S1: 'The Halvard legislature passed a law', S2: 'A federal law says that no one under fourteen may be employed in a factory, and that a state may set an older age' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}.',
              S2: 'A federal law covers the same matter and leaves room: {cue:S2}. Someone who waits until sixteen also waits past fourteen.' },
    not: { outcome: 'preempted', why: 'The federal law itself says that a state may set an older age, so it is not meant to be the only rule.' } },
]);

// Civics, Unit Six: drill cases for stage four (the whole route, no help), clean cases and then varied cases.
// Every question is asked here, starting with the key's first question, so every case carries marked words and a reason for
// the gate (D1) as well as for this unit's two questions. Each case in this file is one thing going on, with nothing to pull it
// the wrong way; the varied cases tell the same things in less direct words.

FC.cases('civics', 'u6', [

  /* ---------- Clean ---------- */
  { id: 'u6-r-lessons', use: 'drill', tier: 'clean', setting: 'work', topic: 'a driving instructor licence',
    text: "After complaints about unqualified driving instructors, the Calder legislature passed a law that a person must hold a state licence to give driving lessons for money.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { D1: 'the Calder legislature passed a law', S1: 'the Calder legislature passed a law', S2: 'a person must hold a state licence to give driving lessons for money' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}. No city, town or county is named.',
              S2: 'The matter is {cue:S2}: a trade licence, which the states grant. The case names no federal law and the rule takes away no right.' },
    not: { outcome: 'localgov', why: 'No city, town or county is named. The state’s legislature made the rule.' },
    wouldChange: 'If a city council had set up the licence for instructors in its own city, the key’s answer to the first question would be {a:S1.local} and the name would be {o:localgov}.' },

  { id: 'u6-r-leash', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'dogs in a park',
    text: "Walkers in Mill Park complained about dogs running loose near the pond. The Kellmouth city council voted that dogs must be kept on a leash in Mill Park.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { D1: 'The Kellmouth city council voted', S1: 'The Kellmouth city council voted', S2: 'dogs must be kept on a leash in Mill Park' },
    reason: { D1: 'The case ends with a decision by a city council: {cue:D1}.',
              S1: 'The rule was made by a city council: {cue:S1}. A city uses power its state handed down.',
              S2: 'The matter is {cue:S2}: a city park, a local matter. No federal law is named, and no right is taken away.' },
    not: { outcome: 'police', why: 'The state’s legislature did not make the rule. A city council did, and the rule covers one park.' },
    wouldChange: 'If the state’s legislature had required leashes in every public park in the state, the name would be {o:police}.' },

  { id: 'u6-r-library', use: 'drill', tier: 'clean', setting: 'learning', topic: 'a newspaper in the library',
    text: "The Harrow County library keeps a rack of local newspapers. One of them has criticised the county board. The Harrow County board voted that the library may not display any newspaper that criticises the board.",
    outcome: 'protected', route: { D1: ['states'], S1: ['local'], S2: ['right'] },
    cues: { D1: 'The Harrow County board voted', S1: 'The Harrow County board voted', S2: 'the library may not display any newspaper that criticises the board' },
    reason: { D1: 'The case ends with a decision by a county board: {cue:D1}.',
              S1: 'The rule was made by a county board: {cue:S1}.',
              S2: 'The rule takes away a right: {cue:S2}. A newspaper is published to be read, and the rule bans it because of what it says about the board.' },
    not: { outcome: 'localgov', why: 'A county does control its own library. But this rule is aimed at what a newspaper says, and a county may not take away a right.' },
    wouldChange: 'If the board had only limited how long any newspaper may stay on the rack, whatever it says, the rule would take away no right and the name would be {o:localgov}.' },

  { id: 'u6-r-coins', use: 'drill', tier: 'clean', setting: 'money', topic: 'silver coins',
    text: "A federal law says that only the federal government may make coins, and that no state may make money of its own. The Tarn legislature voted to make its own silver coins, to be used for paying taxes in Tarn.",
    outcome: 'preempted', route: { D1: ['states'], S1: ['own'], S2: ['onlyrule'] },
    cues: { D1: 'The Tarn legislature voted', S1: 'The Tarn legislature voted', S2: 'A federal law says that only the federal government may make coins, and that no state may make money of its own' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}.',
              S2: 'Making money is a federal power, and a federal law covers it and is meant to be the only rule: {cue:S2}. The state’s coins are exactly what it forbids.' },
    not: { outcome: 'police', why: 'A state does decide many matters alone. But a federal law covers this one and says that no state may act, so there is nothing left for the state to decide.' },
    wouldChange: 'If the federal law had only said that coins must be at least a certain weight, and that a state may require more, the name would be {o:concurrent}.' },

  { id: 'u6-r-factory', use: 'drill', tier: 'clean', setting: 'work', topic: 'a minimum age for factory work',
    text: "A federal law says that no one under fourteen may be employed in a factory, and that a state may set an older age. The Halvard legislature passed a law that no one under sixteen may work in a factory in Halvard.",
    outcome: 'concurrent', route: { D1: ['states'], S1: ['own'], S2: ['floor'] },
    cues: { D1: 'The Halvard legislature passed a law', S1: 'The Halvard legislature passed a law', S2: 'A federal law says that no one under fourteen may be employed in a factory, and that a state may set an older age' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}.',
              S2: 'A federal law covers the same matter and leaves room: {cue:S2}. Someone who waits until sixteen also waits past fourteen.' },
    not: { outcome: 'preempted', why: 'The federal law itself says that a state may set an older age, so it is not meant to be the only rule.' },
    wouldChange: 'If the federal law had said that no state may set a different age, the state’s rule would give way and the name would be {o:preempted}.' },

  /* ---------- Varied ---------- */
  { id: 'u6-r-heater', use: 'drill', tier: 'varied', setting: 'home', topic: 'a broken heater',
    text: "A landlord in Ostrow refused to repair a broken heater for a tenant until the spring. Before the next winter, the Ostrow legislature passed a law that a landlord must fix a broken heater within five days of being told.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { D1: 'the Ostrow legislature passed a law', S1: 'the Ostrow legislature passed a law', S2: 'a landlord must fix a broken heater within five days of being told' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}. The landlord’s refusal is only why the law was passed.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}.',
              S2: 'The matter is {cue:S2}: renting a home, which the states decide. No federal law is named, and no right is taken away.' },
    not: { outcome: 'localgov', why: 'The state’s legislature made the rule, not a council or a board.' },
    wouldChange: 'If Congress had already set the time within which every landlord in the country must repair a heater, and said that no state may set another, the name would be {o:preempted}.' },

  { id: 'u6-r-citytest', use: 'drill', tier: 'varied', setting: 'immigration', topic: 'a history test',
    text: "Congress has already written the rules for who may become a citizen, and they are meant to be the only rules. The Hale city council voted that people who want to become citizens must also pass a city test of local history.",
    outcome: 'preempted', route: { D1: ['states'], S1: ['local'], S2: ['onlyrule'] },
    cues: { D1: 'The Hale city council voted', S1: 'The Hale city council voted', S2: 'Congress has already written the rules for who may become a citizen, and they are meant to be the only rules' },
    reason: { D1: 'The case ends with a decision by a city council: {cue:D1}.',
              S1: 'The rule was made by a city council: {cue:S1}.',
              S2: 'The matter is who may become a citizen, a federal power, and Congress has written rules meant to be the only ones: {cue:S2}. The city’s extra test gives way, as a state’s would.' },
    not: { outcome: 'localgov', why: 'A city council made the rule, and a city rule on a local matter would be this name. But a federal law covers this matter and is meant to be the only rule.' },
    wouldChange: 'If the council had voted to hold a free evening class on local history for anyone who wanted to come, no rule would be made for becoming a citizen, and nothing federal would be in its way.' },

  { id: 'u6-r-foodtrucks', use: 'drill', tier: 'varied', setting: 'work', topic: 'where food trucks park',
    text: "Food-truck owners in the city of Redwick kept asking where they could park. The Redwick city council voted that food trucks may park only on the south side of Market Street.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { D1: 'The Redwick city council voted', S1: 'The Redwick city council voted', S2: 'food trucks may park only on the south side of Market Street' },
    reason: { D1: 'The case ends with a decision by a city council: {cue:D1}. The owners only asked.',
              S1: 'The rule was made by a city council: {cue:S1}.',
              S2: 'The matter is {cue:S2}: where vehicles may park on a city street, a local matter. No federal law is named, and no right is taken away.' },
    not: { outcome: 'police', why: 'The state’s legislature did not make this rule. A city council did, and it covers one street.' },
    wouldChange: 'If the council had banned only the food trucks that sell newspapers, because of what the newspapers say, the rule would take away a right and the name would be {o:protected}.' },

  { id: 'u6-r-score', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'food safety scores',
    text: "A federal law says that every restaurant must post its food safety score at the door, and that a city may require more. The Orsley town council voted that restaurants in Orsley must also post the score on their website.",
    outcome: 'concurrent', route: { D1: ['states'], S1: ['local'], S2: ['floor'] },
    cues: { D1: 'The Orsley town council voted', S1: 'The Orsley town council voted', S2: 'A federal law says that every restaurant must post its food safety score at the door, and that a city may require more' },
    reason: { D1: 'The case ends with a decision by a town council: {cue:D1}.',
              S1: 'The rule was made by a town council: {cue:S1}.',
              S2: 'A federal law covers the same matter and leaves room: {cue:S2}. A restaurant that posts the score on its website has also posted it at the door.' },
    not: { outcome: 'preempted', why: 'The federal law says that a city may require more, so it is not meant to be the only rule.' },
    wouldChange: 'If the federal law had said that the door is the only place the score may be posted, the town’s website rule would give way and the name would be {o:preempted}.' }
]);

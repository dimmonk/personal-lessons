// Civics, Unit Six: cases shown inside cards, part three. The seven cases the checks ask about (use: 'check'), and the case
// the worked card runs from the top (use: 'teach'). A check asks one question about one new case; its reason is shown after the answer.
// A case a "tap the words" check asks about carries segments; every piece but the answer has a note.

FC.cases('civics', 'u6', [

  /* ---------- Checks: one for each name, one for each of the two questions ---------- */
  { id: 'u6-c-license', use: 'check', tier: 'clean', setting: 'travel', topic: 'a driving license age', name: 'The driving age',
    text: "In the state of Tarn, young people were asking at what age they could drive. The Tarn legislature passed a law that a person must be at least sixteen to get a driver’s license.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { S1: 'The Tarn legislature passed a law', S2: 'a person must be at least sixteen to get a driver’s license' },
    segments: [
      { text: 'In the state of Tarn, young people were asking at what age they could drive', note: 'That is why the rule exists. It does not say who made it.' },
      { text: 'The Tarn legislature passed a law' },
      { text: 'a person must be at least sixteen to get a driver’s license', note: 'That is what the rule says. It does not say who made it.' }],
    reason: { S1: 'These words show who made the rule: the lawmakers of one state.' } },

  { id: 'u6-c-parking', use: 'check', tier: 'clean', setting: 'travel', topic: 'parking on market days', name: 'Parking on market days',
    text: "In the town of Orsley, market-day traffic jammed Mill Lane. Using the power the state gives to towns, the Orsley town council voted that cars may not park on Mill Lane on market days.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { S1: 'Using the power the state gives to towns, the Orsley town council voted', S2: 'cars may not park on Mill Lane on market days' },
    reason: { S1: 'A town council made the rule: {cue:S1}. A town has only the power its state gave it.' } },

  { id: 'u6-c-honey', use: 'check', tier: 'clean', setting: 'money', topic: 'labels on honey', name: 'The honey label',
    text: "A federal law sets one label that must go on every jar of honey sold in the country, and says that no state may require a different label. The Ostrow legislature passed a law that jars of honey sold in Ostrow must carry a second warning label.",
    outcome: 'preempted', route: { D1: ['states'], S1: ['own'], S2: ['onlyrule'] },
    cues: { S1: 'The Ostrow legislature passed a law', S2: 'A federal law sets one label that must go on every jar of honey sold in the country, and says that no state may require a different label' },
    segments: [
      { text: 'A federal law sets one label that must go on every jar of honey sold in the country, and says that no state may require a different label' },
      { text: 'The Ostrow legislature passed a law', note: 'That shows who made the state’s rule. The words asked for are about the federal law.' },
      { text: 'jars of honey sold in Ostrow must carry a second warning label', note: 'That is what the state’s rule says. The words asked for are about the federal law.' }],
    reason: { S2: 'This federal law is the only rule, and the state’s second label is what it forbids.' } },

  { id: 'u6-c-tax', use: 'check', tier: 'clean', setting: 'money', topic: 'income tax', name: 'The income tax',
    text: "The federal government taxes the income that people earn, and federal law says that states may tax income too. The Pelham legislature passed a law that people who live in Pelham must also pay a state tax on their income.",
    outcome: 'concurrent', route: { D1: ['states'], S1: ['own'], S2: ['floor'] },
    cues: { S1: 'The Pelham legislature passed a law', S2: 'federal law says that states may tax income too' },
    reason: { S2: 'A federal law covers the same tax and leaves room: {cue:S2}. Someone who pays the state’s tax still pays the federal one.' } },

  { id: 'u6-c-gather', use: 'check', tier: 'clean', setting: 'community', topic: 'approval of speakers', name: 'The approved speakers',
    text: "Residents of Pike County planned a peaceful protest in the county square. The Pike County board voted that no group may gather in the county square to protest unless the board has first approved what the speakers will say.",
    outcome: 'protected', route: { D1: ['states'], S1: ['local'], S2: ['right'] },
    cues: { S1: 'The Pike County board voted', S2: 'no group may gather in the county square to protest unless the board has first approved what the speakers will say' },
    reason: { S2: 'The rule takes away a right: {cue:S2}. Gathering peacefully and speaking are protected, and a county must respect them as Congress does.' } },

  { id: 'u6-c-pool', use: 'check', tier: 'clean', setting: 'leisure', topic: 'a pool closed on Mondays', name: 'The pool on Mondays',
    text: "Parents in Harrow County asked for the county pool to open on Mondays. Using the power the state gives to counties, the Harrow County board voted to keep the pool closed on Mondays.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { S1: 'Using the power the state gives to counties, the Harrow County board voted', S2: 'to keep the pool closed on Mondays' },
    reason: { S1: 'A county board made the rule: {cue:S1}. It used power its state handed down, so it is not the state’s own rule.' } },

  { id: 'u6-c-schools', use: 'check', tier: 'clean', setting: 'learning', topic: 'the first day of school', name: 'The first day of school',
    text: "The Ostrow legislature passed a law that public schools in Ostrow may not start before the last week of August.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { S1: 'The Ostrow legislature passed a law', S2: 'public schools in Ostrow may not start before the last week of August' },
    reason: { S2: 'The states run public schools: {cue:S2}. The story names no federal law and the rule takes away no right.' } },

  { id: 'u6-parkevent', use: 'teach', tier: 'misleading', setting: 'community', topic: 'event hours in a park', name: 'The park evening limit',
    text: "A group in the city of Kellmouth planned an evening march for better bus services in Mill Park. The Kellmouth city council has a rule that any event in a city park, whatever it is about, must end by nine at night. The group asked the council to let the march run until midnight, and the council voted no.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { D1: 'the council voted no', S1: 'The Kellmouth city council has a rule',
            S2: 'any event in a city park, whatever it is about, must end by nine at night' } }
]);

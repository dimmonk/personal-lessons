// Civics, Unit Six: drill cases for stage one (the key's answers are shown, the learner gives the name) and stage three
// (the first answer is shown; the learner answers both of this unit's questions and gives the name). None of these appears in a card.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for this case and says why it fails.

FC.cases('civics', 'u6', [

  /* ---------- Stage one: clean cases, one for each name ---------- */
  { id: 'u6-n-teachers', use: 'drill', tier: 'clean', setting: 'learning', topic: 'teaching licences',
    text: "The Tarn legislature passed a law that every teacher in a public school must hold a state teaching licence.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { S1: 'The Tarn legislature passed a law', S2: 'every teacher in a public school must hold a state teaching licence' },
    reason: { S1: 'The rule was made by the lawmakers of one state: {cue:S1}. No city, town or county made it.',
              S2: 'The matter is {cue:S2}: public schools and a licence, both kept by the states. The case names no federal law, and the rule takes away no right.' },
    not: { outcome: 'localgov', why: 'Nobody below the state is named. The state’s own lawmakers made the rule, so it is not a city’s or a county’s.' } },

  { id: 'u6-n-bins', use: 'drill', tier: 'clean', setting: 'home', topic: 'rubbish bins',
    text: "In the city of Hale, bins left on the pavement all day were blocking people on foot. The Hale city council passed an ordinance that bins must be taken in by seven in the evening on collection days.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { S1: 'The Hale city council passed an ordinance', S2: 'bins must be taken in by seven in the evening on collection days' },
    reason: { S1: 'The rule was made by a city council: {cue:S1}. A city’s rule uses power its state handed down.',
              S2: 'The matter is {cue:S2}: rubbish collection, a local matter. No federal law is named, and no right is taken away.' },
    not: { outcome: 'police', why: 'The state’s legislature did not make this rule. A city council did, and the rule covers one city.' } },

  { id: 'u6-n-trucks', use: 'drill', tier: 'clean', setting: 'work', topic: 'inspecting trucks',
    text: "A federal law says that trucks carrying goods from one state to another are to be inspected only by federal inspectors, and that no state or city may add inspections of its own. The Dellwick city council then voted that every truck carrying goods into the city must stop at a city inspection point.",
    outcome: 'preempted', route: { D1: ['states'], S1: ['local'], S2: ['onlyrule'] },
    cues: { S1: 'The Dellwick city council then voted', S2: 'A federal law says that trucks carrying goods from one state to another are to be inspected only by federal inspectors, and that no state or city may add inspections of its own' },
    reason: { S1: 'The rule was made by a city council: {cue:S1}.',
              S2: 'A federal law covers the same matter, trucks carrying goods between states, and it is meant to be the only rule: {cue:S2}. The city’s inspection point is exactly what it forbids.' },
    not: { outcome: 'concurrent', why: 'The federal law does not leave room. It says that no state or city may add inspections, so nothing stands beside it.' } },

  { id: 'u6-n-sickdays', use: 'drill', tier: 'clean', setting: 'health', topic: 'paid sick days',
    text: "A federal law says that every employer must give each worker at least three paid sick days a year, and that a state may require more. The Brenmore legislature passed a law that employers in Brenmore must give five.",
    outcome: 'concurrent', route: { D1: ['states'], S1: ['own'], S2: ['floor'] },
    cues: { S1: 'The Brenmore legislature passed a law', S2: 'A federal law says that every employer must give each worker at least three paid sick days a year, and that a state may require more' },
    reason: { S1: 'The rule was made by one state’s lawmakers: {cue:S1}.',
              S2: 'A federal law covers the same matter and leaves room: {cue:S2}. An employer who gives five days also gives the three the federal law asks for.' },
    not: { outcome: 'preempted', why: 'The federal law says that a state may require more, so it is not meant to be the only rule. The state’s five days stand beside it.' } },

  { id: 'u6-n-pamphlets', use: 'drill', tier: 'clean', setting: 'travel', topic: 'pamphlets at a bus station',
    text: "Volunteers from a church had been handing out pamphlets at the Marsh County bus station. The Marsh County board voted that no one may hand out religious pamphlets at the county bus station.",
    outcome: 'protected', route: { D1: ['states'], S1: ['local'], S2: ['right'] },
    cues: { S1: 'The Marsh County board voted', S2: 'no one may hand out religious pamphlets at the county bus station' },
    reason: { S1: 'The rule was made by a county board: {cue:S1}.',
              S2: 'The rule takes away a right: {cue:S2}. Handing out pamphlets about a faith is speech and worship, and it is banned because of what the pamphlets are about.' },
    not: { outcome: 'localgov', why: 'The matter, a county’s own bus station, sounds local, and a county does control its own property. But the rule is aimed at what the pamphlets say, and a county may not take a right away.' } },

  /* ---------- Stage three: the first answer is shown; the learner answers the unit's two questions and names the case ---------- */
  { id: 'u6-f-parkfee', use: 'drill', tier: 'varied', setting: 'travel', topic: 'a car park fee',
    text: "Shoppers in the town of Orsley asked for the town hall car park to be free on Sundays. After hearing from the shops nearby, the Orsley town council voted to keep the fee.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { D1: 'the Orsley town council voted to keep the fee', S1: 'the Orsley town council voted', S2: 'to keep the fee' },
    reason: { D1: 'The case ends with a decision by a town council: {cue:D1}. The shoppers only asked.',
              S1: 'The rule is the town’s: {cue:S1}. A town is not a state, and its power is the state’s handed down.',
              S2: 'The matter is {cue:S2} for a town car park, a local matter. No federal law is named and no right is touched.' },
    not: { outcome: 'police', why: 'The state’s legislature is not named. A town council decided, so the rule is a town’s, not the state’s own.' },
    wouldChange: 'If the state’s legislature had set the fee for every town car park in the state, the key’s answer to the first question would be {a:S1.own} and the name would be {o:police}.' },

  { id: 'u6-f-schoolbus', use: 'drill', tier: 'varied', setting: 'learning', topic: 'stopping for a school bus',
    text: "Congress taxes the gasoline sold in every state. After a child was hurt near a school bus, the Calder legislature passed a law that every car must stop when a school bus has its stop sign out.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { D1: 'the Calder legislature passed a law', S1: 'the Calder legislature passed a law', S2: 'every car must stop when a school bus has its stop sign out' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}. Congress appears only in the first sentence, as background.',
              S1: 'The rule was made by the lawmakers of one state: {cue:S1}.',
              S2: 'The matter is {cue:S2}: driving rules, which the states make. The federal gasoline tax is about a different matter, so no federal law covers this one, and no right is taken away.' },
    not: { outcome: 'concurrent', why: 'A federal law is named, which can sound as if it stands beside the state’s. But it is a tax on gasoline, and the state’s rule is about stopping for buses. They are not about the same matter.' },
    wouldChange: 'If a federal law had set the rules for stopping for school buses and said that a state may require more, the name would be {o:concurrent}.' }
]);

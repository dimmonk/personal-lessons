// Civics, Unit Six: fresh cases kept back for later days (first file: the first three names and part of the third). Three for each name,
// one for each of its scheduled returns (E9). A due name returns as a case the learner has not seen, beside a case of the name they
// most often take it for. Each carries marked words and a reason for the gate and both of this unit's questions.

FC.cases('civics', 'u6', [

  /* ---------- Reserved powers ---------- */
  { id: 'u6-ret-pawn', use: 'return', tier: 'varied', setting: 'money', topic: 'pawnbroker licences',
    text: "Stolen goods kept turning up in pawn shops in the state of Tarn. The Tarn legislature passed a law that a pawnbroker must hold a state licence and must keep each item for at least sixty days.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { D1: 'The Tarn legislature passed a law', S1: 'The Tarn legislature passed a law', S2: 'a pawnbroker must hold a state licence and must keep each item for at least sixty days' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}.',
              S2: 'The matter is {cue:S2}: a trade licence and how a shop does business, which the states decide. No federal law is named and no right is taken away.' },
    not: { outcome: 'localgov', why: 'No city, town or county is named. The state’s legislature made the rule.' },
    wouldChange: 'If a city council had made the same rule for the pawn shops of its own city, the name would be {o:localgov}.' },

  { id: 'u6-ret-fireworks', use: 'return', tier: 'varied', setting: 'leisure', topic: 'selling fireworks',
    text: "After a house fire started by a rocket, the Ostrow legislature passed a law that fireworks may be sold only to people over eighteen.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { D1: 'the Ostrow legislature passed a law', S1: 'the Ostrow legislature passed a law', S2: 'fireworks may be sold only to people over eighteen' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}.',
              S2: 'The matter is {cue:S2}: the safety of people in the state, which the states decide. No federal law is named and no right is taken away.' },
    not: { outcome: 'concurrent', why: 'No federal law is named, so there is nothing for the state’s rule to stand beside.' },
    wouldChange: 'If a federal law had said that fireworks may be sold only to people over sixteen, and that a state may set an older age, the name would be {o:concurrent}.' },

  { id: 'u6-ret-schoolleaving', use: 'return', tier: 'varied', setting: 'learning', topic: 'the school leaving age',
    text: "Some children in the state of Lorne had been leaving school at fourteen. The Lorne legislature passed a law that children must stay in school until they are sixteen.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { D1: 'The Lorne legislature passed a law', S1: 'The Lorne legislature passed a law', S2: 'children must stay in school until they are sixteen' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}.',
              S2: 'The matter is {cue:S2}: schooling, which the states decide. No federal law is named and no right is taken away.' },
    not: { outcome: 'preempted', why: 'No federal law is named, and schooling is not on the list of federal powers. There is nothing for the state’s rule to give way to.' },
    wouldChange: 'If the same rule had been made by a county board for the schools of one county, the name would be {o:localgov}.' },

  /* ---------- Power handed down to a city or county ---------- */
  { id: 'u6-ret-height', use: 'return', tier: 'varied', setting: 'community', topic: 'building height',
    text: "Residents of Ashby were upset that a tall block of flats had been built beside the harbour. The Ashby town council voted that no new building on Harbour Road may be taller than three floors.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { D1: 'The Ashby town council voted', S1: 'The Ashby town council voted', S2: 'no new building on Harbour Road may be taller than three floors' },
    reason: { D1: 'The case ends with a decision by a town council: {cue:D1}.',
              S1: 'The rule was made by a town council: {cue:S1}.',
              S2: 'The matter is {cue:S2}: zoning, which is which kinds of building may go where, a local matter. No federal law is named, and no right is taken away.' },
    not: { outcome: 'police', why: 'The state’s legislature did not make the rule. A town council did, and the rule covers one road.' },
    wouldChange: 'If the state’s legislature had set a height limit for every building in the state, the name would be {o:police}.' },

  { id: 'u6-ret-libraryhours', use: 'return', tier: 'varied', setting: 'learning', topic: 'library opening hours',
    text: "Students in Vance County said they had nowhere quiet to study at the weekend. The Vance County board voted to open the county library on Sundays.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { D1: 'The Vance County board voted', S1: 'The Vance County board voted', S2: 'to open the county library on Sundays' },
    reason: { D1: 'The case ends with a decision by a county board: {cue:D1}. The students only asked.',
              S1: 'The decision was made by a county board: {cue:S1}.',
              S2: 'The matter is {cue:S2}: a library, a local matter. No federal law is named, and no right is taken away.' },
    not: { outcome: 'police', why: 'The state’s legislature is not named. A county board decided about a county library.' },
    wouldChange: 'If the state’s legislature had set the Sunday opening of every public library in the state, the name would be {o:police}.' },

  { id: 'u6-ret-deck', use: 'return', tier: 'varied', setting: 'home', topic: 'a deck permit',
    text: "A homeowner in the city of Hale built a deck onto his house without asking anyone. The Hale city council voted that anyone who builds a deck onto a house must first get a building permit from the city.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { D1: 'The Hale city council voted', S1: 'The Hale city council voted', S2: 'anyone who builds a deck onto a house must first get a building permit from the city' },
    reason: { D1: 'The case ends with a decision by a city council: {cue:D1}.',
              S1: 'The rule was made by a city council: {cue:S1}.',
              S2: 'The matter is {cue:S2}: a building permit, a local matter. No federal law is named, and no right is taken away.' },
    not: { outcome: 'police', why: 'A city council made this rule, not the state’s legislature, and it covers one city.' },
    wouldChange: 'If the permit were refused to anyone whose house flew a flag the council disliked, the rule would take away a right and the name would be {o:protected}.' },

  /* ---------- Preemption ---------- */
  { id: 'u6-ret-imports', use: 'return', tier: 'varied', setting: 'world', topic: 'checks on imports',
    text: "A federal law says that goods imported from other countries are to be checked at the border by federal officers only, and that no state may check them again. The Pelham legislature voted that every shipment from abroad must also be checked by state officers at the port.",
    outcome: 'preempted', route: { D1: ['states'], S1: ['own'], S2: ['onlyrule'] },
    cues: { D1: 'The Pelham legislature voted', S1: 'The Pelham legislature voted', S2: 'A federal law says that goods imported from other countries are to be checked at the border by federal officers only, and that no state may check them again' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}.',
              S2: 'Trade with other countries is a federal power, and a federal law covers it and is meant to be the only rule: {cue:S2}. The state’s second check is what it forbids.' },
    not: { outcome: 'police', why: 'A state does decide many matters alone, but a federal law covers this one and says that no state may act.' },
    wouldChange: 'If the federal law had said that a state may check the goods too, the state’s check would stand beside it and the name would be {o:concurrent}.' },

  { id: 'u6-ret-airport', use: 'return', tier: 'varied', setting: 'travel', topic: 'airport searches',
    text: "A federal law says that only federal officers may search passengers at airports, and that no state or city may search them as well. The Redwick city council voted that its own city officers must also search every passenger at the city airport.",
    outcome: 'preempted', route: { D1: ['states'], S1: ['local'], S2: ['onlyrule'] },
    cues: { D1: 'The Redwick city council voted', S1: 'The Redwick city council voted', S2: 'A federal law says that only federal officers may search passengers at airports, and that no state or city may search them as well' },
    reason: { D1: 'The case ends with a decision by a city council: {cue:D1}.',
              S1: 'The rule was made by a city council: {cue:S1}.',
              S2: 'A federal law covers the same matter and is meant to be the only rule: {cue:S2}. The city’s own searches are what it forbids.' },
    not: { outcome: 'localgov', why: 'A city council made the rule, and an airport is in the city. But the federal law says that no city may add searches of its own.' },
    wouldChange: 'If no federal law covered airport searches, a city rule about its own airport would be {o:localgov}.' }
]);

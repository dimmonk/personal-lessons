// Civics, Unit Six: fresh cases kept back for later days (first file: the first three names and part of the third). Three for each name,
// one for each of its scheduled returns (E9). A due name returns as a case the learner has not seen, beside a case of the name they
// most often take it for. Each carries marked words and a reason for the gate and both of this unit's questions.

FC.cases('civics', 'u6', [

  /* ---------- Reserved powers ---------- */
  { id: 'u6-ret-pawn', use: 'return', tier: 'varied', setting: 'money', topic: 'pawnbroker licenses',
    text: "Stolen goods kept turning up in pawn shops in the state of Tarn. The Tarn legislature passed a law that a pawnbroker must hold a state license and must keep each item for at least sixty days.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { D1: 'The Tarn legislature passed a law', S1: 'The Tarn legislature passed a law', S2: 'a pawnbroker must hold a state license and must keep each item for at least sixty days' },
    reason: { D1: 'The story ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'One state’s lawmakers made the rule: {cue:S1}.',
              S2: 'The states license shops: {cue:S2}. No federal law is named and no right is taken away.' },
    not: { outcome: 'localgov', why: 'The story names no city, town or county. The state’s legislature made the rule.' } },

  { id: 'u6-ret-fireworks', use: 'return', tier: 'varied', setting: 'leisure', topic: 'selling fireworks',
    text: "After a house fire started by a rocket, the Ostrow legislature passed a law that fireworks may be sold only to people over eighteen.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { D1: 'the Ostrow legislature passed a law', S1: 'the Ostrow legislature passed a law', S2: 'fireworks may be sold only to people over eighteen' },
    reason: { D1: 'The story ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'One state’s lawmakers made the rule: {cue:S1}.',
              S2: 'The states decide on public safety: {cue:S2}. No federal law is named and no right is taken away.' },
    not: { outcome: 'concurrent', why: 'No federal law is named, so there is nothing for the state’s rule to stand beside.' } },

  /* ---------- Power handed down to a city or county ---------- */
  { id: 'u6-ret-height', use: 'return', tier: 'varied', setting: 'community', topic: 'building height',
    text: "Residents of Ashby were upset that a tall apartment building had been built beside the harbor. The Ashby town council voted that no new building on Harbor Road may be taller than three floors.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { D1: 'The Ashby town council voted', S1: 'The Ashby town council voted', S2: 'no new building on Harbor Road may be taller than three floors' },
    reason: { D1: 'The story ends with a decision by a town council: {cue:D1}.',
              S1: 'A town council made the rule: {cue:S1}.',
              S2: 'Zoning, meaning which buildings may go where, is a local matter: {cue:S2}. No federal law is named and no right is taken away.' },
    not: { outcome: 'police', why: 'The state’s legislature did not make the rule. A town council did, for one road.' } },

  { id: 'u6-ret-libraryhours', use: 'return', tier: 'varied', setting: 'learning', topic: 'library opening hours',
    text: "Students in Vance County said they had nowhere quiet to study at the weekend. The Vance County board voted to open the county library on Sundays.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { D1: 'The Vance County board voted', S1: 'The Vance County board voted', S2: 'to open the county library on Sundays' },
    reason: { D1: 'The story ends with a decision by a county board: {cue:D1}. The students only asked.',
              S1: 'A county board made the rule: {cue:S1}.',
              S2: 'A library is a local matter: {cue:S2}. No federal law is named and no right is taken away.' },
    not: { outcome: 'police', why: 'The story names no state legislature. A county board decided about a county library.' } },

  /* ---------- Preemption ---------- */
  { id: 'u6-ret-imports', use: 'return', tier: 'varied', setting: 'world', topic: 'checks on imports',
    text: "A federal law says that goods imported from other countries are to be checked at the border by federal officers only, and that no state may check them again. The Pelham legislature voted that every shipment from abroad must also be checked by state officers at the port.",
    outcome: 'preempted', route: { D1: ['states'], S1: ['own'], S2: ['onlyrule'] },
    cues: { D1: 'The Pelham legislature voted', S1: 'The Pelham legislature voted', S2: 'A federal law says that goods imported from other countries are to be checked at the border by federal officers only, and that no state may check them again' },
    reason: { D1: 'The story ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'One state’s lawmakers made the rule: {cue:S1}.',
              S2: 'Trade with other countries is a federal power, and the federal law is the only rule: {cue:S2}. The state’s second check is what it forbids.' },
    not: { outcome: 'police', why: 'A state decides many things alone. But a federal law covers this one and says no state may act.' } },

  { id: 'u6-ret-airport', use: 'return', tier: 'varied', setting: 'travel', topic: 'airport searches',
    text: "A federal law says that only federal officers may search passengers at airports, and that no state or city may search them as well. The Redwick city council voted that its own city officers must also search every passenger at the city airport.",
    outcome: 'preempted', route: { D1: ['states'], S1: ['local'], S2: ['onlyrule'] },
    cues: { D1: 'The Redwick city council voted', S1: 'The Redwick city council voted', S2: 'A federal law says that only federal officers may search passengers at airports, and that no state or city may search them as well' },
    reason: { D1: 'The story ends with a decision by a city council: {cue:D1}.',
              S1: 'A city council made the rule: {cue:S1}.',
              S2: 'A federal law covers the same matter and is the only rule: {cue:S2}. The city’s own searches are what it forbids.' },
    not: { outcome: 'localgov', why: 'A city council made the rule, and the airport is in the city. But the federal law says no city may add searches of its own.' } }
]);

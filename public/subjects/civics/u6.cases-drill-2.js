// Civics, Unit Six: drill cases for the one-question stage (one question at a time on a new case).
// reason[STEP] is the reason tied to the marked words; it is shown after the answer.
// not names the most tempting wrong name for this case and says why it fails.

FC.cases('civics', 'u6', [

  /* ---------- Stage two: the first question alone ---------- */
  { id: 'u6-p-fishing', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a fishing license fee',
    text: "Anglers in the state of Pelham grumbled that the yearly fishing license cost too much. The Pelham legislature voted to raise the fee for a state fishing license.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { S1: 'The Pelham legislature voted' },
    reason: { S1: 'One state’s lawmakers made the rule: {cue:S1}. No city, town or county is named.' },
    not: { outcome: 'localgov', why: 'The story names no city, town or county. The state’s legislature made the rule.' } },

  { id: 'u6-p-market', use: 'drill', tier: 'clean', setting: 'community', topic: 'a farmers’ market day',
    text: "Stallholders at the Pike County farmers’ market said Saturdays were too busy to sell anything. The Pike County board voted to move the market from Saturday to Sunday.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { S1: 'The Pike County board voted' },
    reason: { S1: 'A county board made the rule: {cue:S1}. It used power its state handed down.' },
    not: { outcome: 'police', why: 'The story names no state legislature. A county board made the rule, not the state itself.' } },

  /* ---------- Stage two: the second question alone ---------- */
  { id: 'u6-p-medicine', use: 'drill', tier: 'clean', setting: 'health', topic: 'labels on medicine',
    text: "A federal law sets one set of rules for the labels on medicines sold across the country, and says that no state may add its own. The Halvard legislature passed a law that medicines sold in Halvard must carry a state warning sticker.",
    outcome: 'preempted', route: { D1: ['states'], S1: ['own'], S2: ['onlyrule'] },
    cues: { S2: 'A federal law sets one set of rules for the labels on medicines sold across the country, and says that no state may add its own' },
    reason: { S2: 'A federal law covers medicine labels and is the only rule: {cue:S2}. The state’s warning sticker is what it forbids.' },
    not: { outcome: 'concurrent', why: 'The federal law says no state may add its own labels, so nothing stands beside it.' } },

  { id: 'u6-p-sprinklers', use: 'drill', tier: 'clean', setting: 'travel', topic: 'fire safety in hotels',
    text: "A federal law says that every hotel must have a smoke alarm in each room, and that a state may require more. The Lorne legislature passed a law that hotels in Lorne must also have a sprinkler in each room.",
    outcome: 'concurrent', route: { D1: ['states'], S1: ['own'], S2: ['floor'] },
    cues: { S2: 'A federal law says that every hotel must have a smoke alarm in each room, and that a state may require more' },
    reason: { S2: 'A federal law covers the same matter and leaves room: {cue:S2}. A hotel can have both the alarm and the sprinkler.' },
    not: { outcome: 'preempted', why: 'The federal law says a state may require more, so it is not the only rule.' } },

  { id: 'u6-p-sermon', use: 'drill', tier: 'clean', setting: 'home', topic: 'approving a sermon',
    text: "A church in the city of Redwick holds a service every Sunday. The Redwick city council passed a rule that a church may hold a service in the city only if the council has first approved the sermon.",
    outcome: 'protected', route: { D1: ['states'], S1: ['local'], S2: ['right'] },
    cues: { S2: 'a church may hold a service in the city only if the council has first approved the sermon' },
    reason: { S2: 'The rule takes away a right: {cue:S2}. Worship and speech are protected, and a city must respect them as Congress does.' },
    not: { outcome: 'localgov', why: 'A city decides many things about itself. But this rule turns on what is said at worship, and a city may not take away that right.' } },

  { id: 'u6-p-marriage', use: 'drill', tier: 'clean', setting: 'home', topic: 'a marriage age',
    text: "Young couples in the state of Ostrow had been marrying at sixteen. The Ostrow legislature passed a law that a couple must be at least eighteen to marry without a parent’s permission.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { S2: 'a couple must be at least eighteen to marry without a parent’s permission' },
    reason: { S2: 'The states decide who may marry: {cue:S2}. The story names no federal law and the rule takes away no right.' },
    not: { outcome: 'preempted', why: 'No federal law is named, so there is nothing for the state’s rule to give way to.' } },
]);

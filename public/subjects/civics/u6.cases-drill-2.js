// Civics, Unit Six: drill cases for stage two (one question at a time on a new case) and the reverse items (one for each name).
// A reverse item gives the name and asks what you would expect: every choice is what one of this unit's names sounds like
// (voice), so no choice is a false statement. The app words the question from `expect`.

FC.cases('civics', 'u6', [

  /* ---------- Stage two: the first question alone ---------- */
  { id: 'u6-p-fishing', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a fishing license fee',
    text: "Anglers in the state of Pelham grumbled that the yearly fishing license cost too much. The Pelham legislature voted to raise the fee for a state fishing license.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { S1: 'The Pelham legislature voted' },
    reason: { S1: 'The rule was made by one state’s lawmakers: {cue:S1}. The license is the state’s own, and no city, town or county is named.' },
    not: { outcome: 'localgov', why: 'No city, town or county is named. The state’s legislature made the rule.' } },

  { id: 'u6-p-market', use: 'drill', tier: 'clean', setting: 'community', topic: 'a farmers’ market day',
    text: "Stallholders at the Pike County farmers’ market said Saturdays were too busy to sell anything. The Pike County board voted to move the market from Saturday to Sunday.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { S1: 'The Pike County board voted' },
    reason: { S1: 'The decision was made by a county board: {cue:S1}. That is a county’s rule, made with power its state handed down.' },
    not: { outcome: 'police', why: 'The state’s legislature is not named. A county board made the rule, so it is not the state itself making it.' } },

  /* ---------- Stage two: the second question alone ---------- */
  { id: 'u6-p-medicine', use: 'drill', tier: 'clean', setting: 'health', topic: 'labels on medicine',
    text: "A federal law sets one set of rules for the labels on medicines sold across the country, and says that no state may add its own. The Halvard legislature passed a law that medicines sold in Halvard must carry a state warning sticker.",
    outcome: 'preempted', route: { D1: ['states'], S1: ['own'], S2: ['onlyrule'] },
    cues: { S2: 'A federal law sets one set of rules for the labels on medicines sold across the country, and says that no state may add its own' },
    reason: { S2: 'A federal law covers the same matter, medicine labels, and is meant to be the only rule: {cue:S2}. The state’s warning sticker is the kind of addition it forbids.' },
    not: { outcome: 'concurrent', why: 'The federal law says that no state may add its own labels, so nothing stands beside it. The state’s sticker gives way.' } },

  { id: 'u6-p-sprinklers', use: 'drill', tier: 'clean', setting: 'travel', topic: 'fire safety in hotels',
    text: "A federal law says that every hotel must have a smoke alarm in each room, and that a state may require more. The Lorne legislature passed a law that hotels in Lorne must also have a sprinkler in each room.",
    outcome: 'concurrent', route: { D1: ['states'], S1: ['own'], S2: ['floor'] },
    cues: { S2: 'A federal law says that every hotel must have a smoke alarm in each room, and that a state may require more' },
    reason: { S2: 'A federal law covers the same matter and leaves room: {cue:S2}. A hotel with a sprinkler in each room also meets the federal rule.' },
    not: { outcome: 'preempted', why: 'The federal law says that a state may require more, so it is not meant to be the only rule.' } },

  { id: 'u6-p-sermon', use: 'drill', tier: 'clean', setting: 'home', topic: 'approving a sermon',
    text: "A church in the city of Redwick holds a service every Sunday. The Redwick city council passed a rule that a church may hold a service in the city only if the council has first approved the sermon.",
    outcome: 'protected', route: { D1: ['states'], S1: ['local'], S2: ['right'] },
    cues: { S2: 'a church may hold a service in the city only if the council has first approved the sermon' },
    reason: { S2: 'The rule takes away a right: {cue:S2}. Worship and speech are protected, and a city is bound by that as the federal government is.' },
    not: { outcome: 'localgov', why: 'A city does decide many matters about its own city. But this rule turns on the sermon, what is said at worship, and a city may not take away a right.' } },

  { id: 'u6-p-marriage', use: 'drill', tier: 'clean', setting: 'home', topic: 'a marriage age',
    text: "Young couples in the state of Ostrow had been marrying at sixteen. The Ostrow legislature passed a law that a couple must be at least eighteen to marry without a parent’s permission.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { S2: 'a couple must be at least eighteen to marry without a parent’s permission' },
    reason: { S2: 'The matter is {cue:S2}: marriage, which is not on the list of federal powers. The case names no federal law, and the rule takes away no right, so nothing else covers it.' },
    not: { outcome: 'preempted', why: 'No federal law is named, and marriage is not on the list of federal powers, so there is nothing for the state’s rule to give way to.' } },

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'u6-rev-police', use: 'drill', kind: 'reverse', outcome: 'police', expect: 'hear',
    options: [
      { text: '“Each state sets its own rules for this. It varies from state to state.”', voice: 'police' },
      { text: '“You need a permit from the town for that.”', voice: 'localgov' },
      { text: '“Washington already regulates this, so the state rule is out.”', voice: 'preempted' },
      { text: '“On top of the federal minimum, the state asks for more.”', voice: 'concurrent' }
    ],
    why: 'The rule is the state’s own, on a matter the federal side does not cover, so it varies from state to state.' },

  { id: 'u6-rev-localgov', use: 'drill', kind: 'reverse', outcome: 'localgov', expect: 'hear',
    options: [
      { text: '“The state legislature passed a law for the whole state.”', voice: 'police' },
      { text: '“The county board voted to charge a fee for the boat ramp.”', voice: 'localgov' },
      { text: '“The city can’t ban that: it would break the First Amendment.”', voice: 'protected' },
      { text: '“Federal law overrides the town’s rule.”', voice: 'preempted' }
    ],
    why: 'A county board made the rule, on a local matter, with power its state handed down.' },

  { id: 'u6-rev-preempted', use: 'drill', kind: 'reverse', outcome: 'preempted', expect: 'find',
    options: [
      { text: 'A federal law says that it is a minimum, and that a state may add to it.', voice: 'concurrent' },
      { text: 'A federal law covers the same matter and says that no state may set a different rule.', voice: 'preempted' },
      { text: 'The rule bans a newspaper because of what it says.', voice: 'protected' },
      { text: 'A town council made the rule on where fences may stand, and no federal law is named.', voice: 'localgov' }
    ],
    why: 'That detail is a federal law that shuts the states out of the matter, so a state’s or a city’s rule gives way.' },

  { id: 'u6-rev-concurrent', use: 'drill', kind: 'reverse', outcome: 'concurrent', expect: 'find',
    options: [
      { text: 'A federal law says that no state may require anything different.', voice: 'preempted' },
      { text: 'The state rule asks for more than a federal minimum, and a person who follows it also follows the federal law.', voice: 'concurrent' },
      { text: 'The legislature made a rule on licenses, and the case names no federal law at all.', voice: 'police' },
      { text: 'The rule punishes people for criticizing the mayor.', voice: 'protected' }
    ],
    why: 'That detail is a federal law that sets a floor and invites the states to add, with a state rule that meets both.' },

  { id: 'u6-rev-protected', use: 'drill', kind: 'reverse', outcome: 'protected', expect: 'hear',
    options: [
      { text: '“You can’t be punished for saying that. The state can’t make it illegal.”', voice: 'protected' },
      { text: '“The council voted on where the trash cans go.”', voice: 'localgov' },
      { text: '“Congress has written one set of rules for the whole country.”', voice: 'preempted' },
      { text: '“The state licenses plumbers, as every state does.”', voice: 'police' }
    ],
    why: 'The speaker is saying that a right stops the rule, whoever made it.' }
]);

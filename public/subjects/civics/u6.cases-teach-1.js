// Civics, Unit Six (a state, city or county government): cases shown inside cards, part one. The ten cases that meet
// each name and show it again in a different story. Field guide: see the other files of this unit and u1.cases-teach-1.js.
// use: 'teach' = shown in a card. setting is one of subject.settings; topic is the story, and no two cases of one name share one.
// Every case carries a route with the gate (D1) and both questions of this branch (S1, S2), and marked words (cues)
// for the questions the card asks of it. segments are the pieces a learner can tap; note says why a wrong piece is not it.
// All places and people are invented. A federal law described inside a case is part of the story, not a claim about real law.

FC.cases('civics', 'u6', [

  /* ---------- Reserved powers: a state's own rule on a matter nothing else covers ---------- */
  { id: 'u6-deposit', use: 'teach', tier: 'clean', setting: 'home', topic: 'a security deposit', name: 'The deposit law',
    text: "Tenants in the state of Brenmore complained that landlords kept their security deposits for months after the tenants moved out. In March the Brenmore legislature passed a law saying that a landlord must return a tenant’s deposit within thirty days of the tenant moving out.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { D1: 'the Brenmore legislature passed a law', S1: 'the Brenmore legislature passed a law',
            S2: 'a landlord must return a tenant’s deposit within thirty days of the tenant moving out' } },

  { id: 'u6-plumber', use: 'teach', tier: 'clean', setting: 'work', topic: 'pipe fitters', name: 'The plumbers’ licence',
    text: "After a run of badly fitted gas pipes in people’s homes, the Ostrow legislature passed a law that anyone who fits pipes for money must pass a test and hold a state licence.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { D1: 'the Ostrow legislature passed a law', S1: 'the Ostrow legislature passed a law',
            S2: 'anyone who fits pipes for money must pass a test and hold a state licence' },
    segments: [
      { text: 'After a run of badly fitted gas pipes in people’s homes', note: 'That is why the law was passed. It is the story behind the rule, and it does not say who made the rule.' },
      { text: 'the Ostrow legislature passed a law' },
      { text: 'that anyone who fits pipes for money must pass a test and hold a state licence', note: 'That is what the rule says: its matter. The words asked for show who made it.' }] },

  /* ---------- Power handed down to a city or county ---------- */
  { id: 'u6-fence', use: 'teach', tier: 'clean', setting: 'community', topic: 'front-yard fences', name: 'The fence rule',
    text: "In the town of Ashby, neighbours kept arguing about tall fences that blocked their front windows. The state’s law on towns lets each town set rules for its own streets and buildings. Using that power, the Ashby town council voted that a front-yard fence may be no taller than four feet.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { D1: 'the Ashby town council voted', S1: ['The state’s law on towns lets each town set rules for its own streets and buildings', 'the Ashby town council voted'],
            S2: 'a front-yard fence may be no taller than four feet' } },

  { id: 'u6-boatramp', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a boat ramp fee', name: 'The boat ramp fee',
    text: "Vance County runs a boat ramp on the lake, and keeping it in repair costs money. Under the state’s law on counties, the Vance County board voted that anyone who launches a boat there must pay a fee of five dollars.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { D1: 'the Vance County board voted', S1: 'Under the state’s law on counties, the Vance County board voted',
            S2: 'anyone who launches a boat there must pay a fee of five dollars' },
    segments: [
      { text: 'Vance County runs a boat ramp on the lake, and keeping it in repair costs money', note: 'That is why the fee exists. It is the story behind the rule, and it does not say who made the rule.' },
      { text: 'Under the state’s law on counties, the Vance County board voted' },
      { text: 'that anyone who launches a boat there must pay a fee of five dollars', note: 'That is what the rule says: its matter. The words asked for show who made it.' }] },

  /* ---------- Preemption: a federal law meant to be the only rule ---------- */
  { id: 'u6-status-scheme', use: 'teach', tier: 'clean', setting: 'immigration', topic: 'an immigration scheme in Lorne', name: 'The state immigration scheme',
    text: "Congress has written detailed laws on who may live in the country and for how long, and those laws are meant to be the only rules. The Lorne legislature then passed its own scheme: state officers must check the immigration status of anyone they stop, and the state will fine anyone it decides has no right to be in the country.",
    outcome: 'preempted', route: { D1: ['states'], S1: ['own'], S2: ['onlyrule'] },
    cues: { D1: 'The Lorne legislature then passed its own scheme', S1: 'The Lorne legislature then passed its own scheme',
            S2: 'Congress has written detailed laws on who may live in the country and for how long, and those laws are meant to be the only rules' } },

  { id: 'u6-airspace', use: 'teach', tier: 'clean', setting: 'travel', topic: 'night flights', name: 'The night flights',
    text: "Federal law gives a federal air-travel agency control of the country’s airspace, and says that its rules for flights are the only rules. People living near Tolland Lake complained about noisy night flights. The Tolland legislature then passed a law banning planes from flying over its state parks at night.",
    outcome: 'preempted', route: { D1: ['states'], S1: ['own'], S2: ['onlyrule'] },
    cues: { D1: 'The Tolland legislature then passed a law', S1: 'The Tolland legislature then passed a law',
            S2: 'Federal law gives a federal air-travel agency control of the country’s airspace, and says that its rules for flights are the only rules' },
    segments: [
      { text: 'Federal law gives a federal air-travel agency control of the country’s airspace, and says that its rules for flights are the only rules' },
      { text: 'People living near Tolland Lake complained about noisy night flights', note: 'That is why the state acted. It is the story behind the rule, and it says nothing about any federal law.' },
      { text: 'The Tolland legislature then passed a law banning planes from flying over its state parks at night', note: 'That is the state’s rule. The words asked for are about the federal law that stands beside it.' }] },

  /* ---------- Concurrent powers: a federal law that leaves room ---------- */
  { id: 'u6-minwage', use: 'teach', tier: 'clean', setting: 'work', topic: 'a minimum wage', name: 'The minimum wage',
    text: "A federal law sets a minimum wage that every employer in the country must pay, and says that a state may set a higher one. The Calder legislature passed a law that employers in Calder must pay a higher minimum wage than the federal one.",
    outcome: 'concurrent', route: { D1: ['states'], S1: ['own'], S2: ['floor'] },
    cues: { D1: 'The Calder legislature passed a law', S1: 'The Calder legislature passed a law',
            S2: ['A federal law sets a minimum wage that every employer in the country must pay', 'says that a state may set a higher one'] } },

  { id: 'u6-leave', use: 'teach', tier: 'clean', setting: 'home', topic: 'leave after a birth', name: 'Leave after a birth',
    text: "A federal law gives eligible workers up to twelve weeks of unpaid leave after a baby is born, and says that a state may add to it. The Pelham legislature passed a law that adds paid leave on top of it, so workers in Pelham get both.",
    outcome: 'concurrent', route: { D1: ['states'], S1: ['own'], S2: ['floor'] },
    cues: { D1: 'The Pelham legislature passed a law', S1: 'The Pelham legislature passed a law',
            S2: ['A federal law gives eligible workers up to twelve weeks of unpaid leave after a baby is born', 'and says that a state may add to it'] },
    segments: [
      { text: 'A federal law gives eligible workers up to twelve weeks of unpaid leave after a baby is born', note: 'That shows a federal law on the same matter. It does not yet say whether the law leaves room for a state.' },
      { text: 'and says that a state may add to it' },
      { text: 'The Pelham legislature passed a law that adds paid leave on top of it, so workers in Pelham get both', note: 'That is the state’s rule. The words asked for are about what the federal law allows.' }] },

  /* ---------- A right that binds the states ---------- */
  { id: 'u6-leaflets', use: 'teach', tier: 'clean', setting: 'community', topic: 'leaflets about the mayor', name: 'The mayor leaflets',
    text: "In the city of Redwick, a group handed out leaflets that said the mayor had wasted money on a new car park. The Redwick city council then passed an ordinance making it a crime to hand out leaflets that criticise the mayor.",
    outcome: 'protected', route: { D1: ['states'], S1: ['local'], S2: ['right'] },
    cues: { D1: 'The Redwick city council then passed an ordinance', S1: 'The Redwick city council then passed an ordinance',
            S2: 'making it a crime to hand out leaflets that criticise the mayor' } },

  { id: 'u6-worship', use: 'teach', tier: 'clean', setting: 'home', topic: 'a permit for a service', name: 'The worship permit',
    text: "A small religious group in the state of Halvard rents a hall each Sunday for its service. The Halvard legislature passed a law that a religious group may hold a service in a rented hall only with a permit from the state, and the permit office may refuse any group whose beliefs it does not like.",
    outcome: 'protected', route: { D1: ['states'], S1: ['own'], S2: ['right'] },
    cues: { D1: 'The Halvard legislature passed a law', S1: 'The Halvard legislature passed a law',
            S2: 'a religious group may hold a service in a rented hall only with a permit from the state, and the permit office may refuse any group whose beliefs it does not like' },
    segments: [
      { text: 'A small religious group in the state of Halvard rents a hall each Sunday for its service', note: 'That tells you who is affected. It does not show what the rule does to them.' },
      { text: 'The Halvard legislature passed a law', note: 'That shows who made the rule. It does not show what the rule takes away.' },
      { text: 'a religious group may hold a service in a rented hall only with a permit from the state, and the permit office may refuse any group whose beliefs it does not like' }] }
]);

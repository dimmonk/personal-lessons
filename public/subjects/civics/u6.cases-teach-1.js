// Civics, Unit Six (a state, city or county government): cases shown inside cards, part one. The five cases that meet
// each name. Field guide: see the other files of this unit and u1.cases-teach-1.js.
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

  /* ---------- Power handed down to a city or county ---------- */
  { id: 'u6-fence', use: 'teach', tier: 'clean', setting: 'community', topic: 'front-yard fences', name: 'The fence rule',
    text: "In the town of Ashby, neighbors kept arguing about tall fences that blocked their front windows. The state’s law on towns lets each town set rules for its own streets and buildings. Using that power, the Ashby town council voted that a front-yard fence may be no taller than four feet.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { D1: 'the Ashby town council voted', S1: ['The state’s law on towns lets each town set rules for its own streets and buildings', 'the Ashby town council voted'],
            S2: 'a front-yard fence may be no taller than four feet' } },

  /* ---------- Preemption: a federal law meant to be the only rule ---------- */
  { id: 'u6-status-scheme', use: 'teach', tier: 'clean', setting: 'immigration', topic: 'an immigration scheme in Lorne', name: 'The state immigration scheme',
    text: "Congress has written detailed laws on who may live in the country and for how long, and those laws are meant to be the only rules. The Lorne legislature then passed its own scheme: state officers must check the immigration status of anyone they stop, and the state will fine anyone it decides has no right to be in the country.",
    outcome: 'preempted', route: { D1: ['states'], S1: ['own'], S2: ['onlyrule'] },
    cues: { D1: 'The Lorne legislature then passed its own scheme', S1: 'The Lorne legislature then passed its own scheme',
            S2: 'Congress has written detailed laws on who may live in the country and for how long, and those laws are meant to be the only rules' } },

  /* ---------- Concurrent powers: a federal law that leaves room ---------- */
  { id: 'u6-minwage', use: 'teach', tier: 'clean', setting: 'work', topic: 'a minimum wage', name: 'The minimum wage',
    text: "A federal law sets a minimum wage that every employer in the country must pay, and says that a state may set a higher one. The Calder legislature passed a law that employers in Calder must pay a higher minimum wage than the federal one.",
    outcome: 'concurrent', route: { D1: ['states'], S1: ['own'], S2: ['floor'] },
    cues: { D1: 'The Calder legislature passed a law', S1: 'The Calder legislature passed a law',
            S2: ['A federal law sets a minimum wage that every employer in the country must pay', 'says that a state may set a higher one'] } },

  /* ---------- A right that binds the states ---------- */
  { id: 'u6-leaflets', use: 'teach', tier: 'clean', setting: 'community', topic: 'leaflets about the mayor', name: 'The mayor leaflets',
    text: "In the city of Redwick, a group handed out leaflets that said the mayor had wasted money on a new parking lot. The Redwick city council then passed an ordinance making it a crime to hand out leaflets that criticize the mayor.",
    outcome: 'protected', route: { D1: ['states'], S1: ['local'], S2: ['right'] },
    cues: { D1: 'The Redwick city council then passed an ordinance', S1: 'The Redwick city council then passed an ordinance',
            S2: 'making it a crime to hand out leaflets that criticize the mayor' } },
]);

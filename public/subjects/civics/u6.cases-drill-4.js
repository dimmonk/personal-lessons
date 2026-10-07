// Civics, Unit Six: drill cases for the whole-case stage, the cases whose story points the wrong way.
// echo names a teaching case of a DIFFERENT name whose story this one is built to bring back: the feedback says so, which is how the
// "does it look like a case you know?" second look is practiced.

FC.cases('civics', 'u6', [

  /* ---------- Misleading ---------- */
  { id: 'u6-r-alarms', use: 'drill', tier: 'misleading', setting: 'home', topic: 'smoke alarms in apartments', echo: 'u6-cribs',
    text: "Congress has written rules for the safety of the toys sold across the country. After a fire in a rented apartment building, the Brenmore legislature passed a law that every rented apartment must have a working smoke alarm.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { D1: 'the Brenmore legislature passed a law', S1: 'the Brenmore legislature passed a law', S2: 'every rented apartment must have a working smoke alarm' },
    reason: { D1: 'The story ends with a decision by a state’s lawmakers: {cue:D1}. Congress is in the first sentence only as background.',
              S1: 'One state’s lawmakers made the rule: {cue:S1}.',
              S2: 'The rule is about renting a home: {cue:S2}. The federal rules in the story are about toys, so no federal law covers apartments, and no right is taken away.' },
    not: { outcome: 'preempted', why: 'A federal law is named, as with the cribs. But it is about toys and the state’s rule is about apartments, so it changes nothing.' } },

  { id: 'u6-r-bookstall', use: 'drill', tier: 'misleading', setting: 'money', topic: 'selling books on a sidewalk',
    text: "The Halvard legislature passed a law that a book may be sold on a public sidewalk only with a license from the state, and the state will refuse a license to anyone who sells books that criticize the governor.",
    outcome: 'protected', route: { D1: ['states'], S1: ['own'], S2: ['right'] },
    cues: { D1: 'The Halvard legislature passed a law', S1: 'The Halvard legislature passed a law', S2: 'the state will refuse a license to anyone who sells books that criticize the governor' },
    reason: { D1: 'The story ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'One state’s lawmakers made the rule: {cue:S1}.',
              S2: 'The rule takes away a right: {cue:S2}. A state may ask for a license, but refusing it because of what books say takes away the right to publish.' },
    not: { outcome: 'police', why: 'A sidewalk license sounds like ordinary state business. But this one is refused because of what the books say, and a state may not take away that right.' } },

  { id: 'u6-r-noise', use: 'drill', tier: 'misleading', setting: 'travel', topic: 'plane noise limits',
    text: "A federal law gives the federal air-travel agency the job of setting noise limits for planes, and says that the agency’s limits are a minimum and that a state may set stricter limits for flights over its own state parks. The Tolland legislature passed a law with stricter noise limits for flights over its state parks.",
    outcome: 'concurrent', route: { D1: ['states'], S1: ['own'], S2: ['floor'] },
    cues: { D1: 'The Tolland legislature passed a law', S1: 'The Tolland legislature passed a law', S2: 'says that the agency’s limits are a minimum and that a state may set stricter limits for flights over its own state parks' },
    reason: { D1: 'The story ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'One state’s lawmakers made the rule: {cue:S1}.',
              S2: 'A federal law covers the same matter and leaves room: {cue:S2}. A plane that meets the stricter limit also meets the federal one.' },
    not: { outcome: 'preempted', why: 'A federal {t:agency} in the story can sound like a federal law that is the only rule. But this law says its limits are a minimum and a state may set stricter ones.' } },

  { id: 'u6-r-march', use: 'drill', tier: 'misleading', setting: 'community', topic: 'marching on a main road', echo: 'u6-rally-city',
    text: "A group planned a march against a new road in the city of Hale. The Hale city council has a rule that any march in the city, whatever it is about, must keep to the sidewalk on one side of the road. The group asked to march down the middle of the main road, and the council voted no.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { D1: 'the council voted no', S1: 'The Hale city council has a rule', S2: 'any march in the city, whatever it is about, must keep to the sidewalk on one side of the road' },
    reason: { D1: 'The story ends with a decision by a city council: {cue:D1}. The group only asked.',
              S1: 'The rule is the city council’s own: {cue:S1}.',
              S2: 'The rule is about where a march may go: {cue:S2}. It is the same for every march, so it takes away no right, and no federal law is named.' },
    not: { outcome: 'protected', why: 'A march is people gathering to speak, so this sounds like a right being taken away, as with the rally ban. But the rule is about where any march may go, not what is said.' } },
]);

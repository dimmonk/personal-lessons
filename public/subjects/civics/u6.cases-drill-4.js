// Civics, Unit Six: drill cases for stage four, the cases whose story points the wrong way, and the faulty claims of the last stage.
// echo names a teaching case of a DIFFERENT name whose story this one is built to bring back: the feedback says so, which is how the
// "does it look like a case you know?" second look is practised. This branch's questions have no tie-break, so no case carries `also`.
// A claim is something a person might say that uses a name wrongly, or reasons in one of the unit's ways. ask.type 'missing':
// "what would you need to see before this name could be used?" (the choices are the key's "what you must be able to point to" lines).
// ask.type 'option': the key's question is asked of the claim itself. The fault is shown after the learner commits, and the
// claim put right is always the last thing shown.

FC.cases('civics', 'u6', [

  /* ---------- Misleading ---------- */
  { id: 'u6-r-alarms', use: 'drill', tier: 'misleading', setting: 'home', topic: 'smoke alarms in flats', echo: 'u6-cribs',
    text: "Congress has written rules for the safety of the toys sold across the country. After a fire in a block of rented flats, the Brenmore legislature passed a law that every rented flat must have a working smoke alarm.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { D1: 'the Brenmore legislature passed a law', S1: 'the Brenmore legislature passed a law', S2: 'every rented flat must have a working smoke alarm' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}. Congress is in the first sentence only as background.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}.',
              S2: 'The matter is {cue:S2}: renting a home. The federal rules in the story are about toys, a different matter, so no federal law covers this one, and no right is taken away.' },
    not: { outcome: 'preempted', why: 'A federal law is named, as it was for the stricter crib standard. But that law is about toys, and the state’s rule is about flats. A federal law on a different matter changes nothing.' },
    wouldChange: 'If Congress had written one set of rules for smoke alarms in every home, and said that no state may set another, the state’s rule would give way and the name would be {o:preempted}.' },

  { id: 'u6-r-bookstall', use: 'drill', tier: 'misleading', setting: 'money', topic: 'selling books on a sidewalk', echo: 'u6-stall-licence',
    text: "The Halvard legislature passed a law that a book may be sold on a public sidewalk only with a licence from the state, and the state will refuse a licence to anyone who sells books that criticise the governor.",
    outcome: 'protected', route: { D1: ['states'], S1: ['own'], S2: ['right'] },
    cues: { D1: 'The Halvard legislature passed a law', S1: 'The Halvard legislature passed a law', S2: 'the state will refuse a licence to anyone who sells books that criticise the governor' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}.',
              S2: 'The rule takes away a right: {cue:S2}. A licence is something a state may ask for, but refusing it because of what books say takes away the right to publish.' },
    not: { outcome: 'police', why: 'A licence to sell on a sidewalk sounds like a state’s ordinary business, as the food stall was. But this licence is refused because of what the books say, and a state may not take away a right.' },
    wouldChange: 'If the state asked for the same licence from every seller on the sidewalk and refused none because of what they sell, the rule would take away no right and the name would be {o:police}.' },

  { id: 'u6-r-noise', use: 'drill', tier: 'misleading', setting: 'travel', topic: 'plane noise limits', echo: 'u6-airspace',
    text: "A federal law gives the federal air-travel agency the job of setting noise limits for planes, and says that the agency’s limits are a minimum and that a state may set stricter limits for flights over its own state parks. The Tolland legislature passed a law with stricter noise limits for flights over its state parks.",
    outcome: 'concurrent', route: { D1: ['states'], S1: ['own'], S2: ['floor'] },
    cues: { D1: 'The Tolland legislature passed a law', S1: 'The Tolland legislature passed a law', S2: 'says that the agency’s limits are a minimum and that a state may set stricter limits for flights over its own state parks' },
    reason: { D1: 'The case ends with a decision by a state’s lawmakers: {cue:D1}.',
              S1: 'The rule was made by one state’s lawmakers: {cue:S1}.',
              S2: 'A federal law covers the same matter, and it leaves room: {cue:S2}. A plane that meets the stricter limit also meets the federal one.' },
    not: { outcome: 'preempted', why: 'The story is about flights and a federal {t:agency}, as the night flights were, and there the federal rules were the only rules. Here the federal law says its limits are a minimum and a state may set stricter ones.' },
    wouldChange: 'If the federal law had said that its noise limits are the only ones, the state’s stricter limits would give way and the name would be {o:preempted}.' },

  { id: 'u6-r-march', use: 'drill', tier: 'misleading', setting: 'community', topic: 'marching on a main road', echo: 'u6-rally-city',
    text: "A group planned a march against a new road in the city of Hale. The Hale city council has a rule that any march in the city, whatever it is about, must keep to the pavement on one side of the road. The group asked to march down the middle of the main road, and the council voted no.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { D1: 'the council voted no', S1: 'The Hale city council has a rule', S2: 'any march in the city, whatever it is about, must keep to the pavement on one side of the road' },
    reason: { D1: 'The case ends with a decision by a city council: {cue:D1}. The group only asked.',
              S1: 'The rule is the city council’s own: {cue:S1}.',
              S2: 'The matter is where a march may go: {cue:S2}. The rule is the same for every march, whatever it is about, so it takes away no right. No federal law is named.' },
    not: { outcome: 'protected', why: 'A march is people gathering to speak, so the case sounds like a right being taken away, as the rally ban did. But the rule is about where any march may go and does not aim at what is said.' },
    wouldChange: 'If the rule had applied only to marches against the council, it would take away a right and the name would be {o:protected}.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'u6-claim-demo', use: 'claim',
    text: '“Federal law gives workers twelve weeks of unpaid leave, so a state that adds paid leave on top is breaking federal law.”',
    ask: { type: 'missing', name: 'preempted' },
    fault: 'The claim points at a federal law and a state rule on the same matter, and stops there. Two rules on one matter are not yet {o:preempted}. That name needs a federal law that shuts the states out, or one the state’s rule clashes with. Here the federal law sets a floor, and a worker who gets paid leave also gets the leave the federal law asks for. The answer is {a:S2.floor}.',
    corrected: 'A federal law gives twelve weeks of unpaid leave, and a state adds paid leave on top. The two stand side by side, so the case is {o:concurrent}. It would be {o:preempted} only if the federal law said that no state may add to it.' },

  { id: 'u6-claim-always', use: 'claim',
    text: '“The state can’t ask for that. Federal law always wins, because it is the supreme law of the land.”',
    ask: { type: 'missing', name: 'preempted' },
    fault: 'The claim treats every federal law as the end of every state rule. But a federal law does so only where it covers the same matter and is meant to be the only rule, or the two cannot both be obeyed. A federal law on another matter changes nothing, and a federal law with space for the states lets the state’s rule stand. The claim never shows which of these it is.',
    corrected: 'A federal law is the supreme law where it covers the matter. Whether a state’s rule gives way depends on whether the federal law is meant to be the only rule. If it is, the case is {o:preempted}. If it is a minimum, it is {o:concurrent}. If no federal law covers the matter, the state decides.' },

  { id: 'u6-claim-citizens', use: 'claim',
    text: '“Each state is free to set its own rules for who can become a citizen, because the Constitution leaves most things to the states.”',
    ask: { type: 'missing', name: 'police' },
    fault: 'The claim is right that the Constitution leaves to the states what its list of federal powers does not give. It never checks the list. The rules for becoming a citizen are on it, and Congress has written them. So the matter is covered by a federal law, and {o:police} cannot be used.',
    corrected: 'The Constitution leaves to the states what the list of federal powers does not give. The rules for becoming a citizen are on that list, and Congress has written one set for every state. A state’s own rule on it would give way, which is {o:preempted}.' },

  { id: 'u6-claim-cities', use: 'claim',
    text: '“A city council has powers of its own that the state government cannot touch.”',
    ask: { type: 'missing', name: 'localgov' },
    fault: 'The claim treats a city’s power as its own. A city has only what its state hands down to it, and the state can usually widen it, narrow it or take it back. The name {o:localgov} is for a rule that comes from a council or a board under power the state gave it, and it says nothing about a power the state cannot touch.',
    corrected: 'A city council has the power its state handed down, and the state can usually widen it, narrow it or take it back. A rule it makes is {o:localgov} when nothing else covers the matter.' },

  { id: 'u6-claim-right', use: 'claim',
    text: '“The county can ban those leaflets. The First Amendment only limits Congress, and a county is not Congress.”',
    ask: { type: 'option', step: 'S2', answer: 'right' },
    fault: 'The claim reasons that no right reaches a county. The first ten amendments were first written to limit only the federal government. But after the Civil War the Fourteenth Amendment was read to bring those limits to the states, and so a right binds a state, a city and a county as well. The answer to the second question is {a:S2.right}.',
    corrected: 'The First Amendment was first written to limit Congress, but the Fourteenth Amendment brought it to the states, so it binds a county too. A county board that bans leaflets because of what they say is making a rule that a right forbids: {o:protected}.' }
]);

// Civics, Unit Six: cases shown inside cards, part two. The look-alike pairs (same story, one difference), the two
// exceptions, and the pairs that cross into another branch: a pair of names that only the key's first question separates has
// one case from each branch, and each case carries the route of its own branch (D1 then the branch's question).
// A look-alike pair is two cases that read alike and differ in one thing. An exception is a case whose story points to one
// name and whose answers give another. Neither depends on a tie-break: this branch's questions have none.

FC.cases('civics', 'u6', [

  /* ---------- Reserved powers beside Power handed down: the same quiet-hours rule, made by a state and by a town ---------- */
  { id: 'u6-quiet-state', use: 'teach', tier: 'clean', setting: 'home', topic: 'late-night noise across a region', name: 'Quiet hours across a state',
    text: "Across the state of Ostrow, people kept complaining about loud music in the middle of the night. The Ostrow legislature passed a law that no one may play loud music in a home between eleven at night and seven in the morning, anywhere in the state.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { S1: 'The Ostrow legislature passed a law', S2: 'no one may play loud music in a home between eleven at night and seven in the morning' } },

  { id: 'u6-quiet-town', use: 'teach', tier: 'clean', setting: 'home', topic: 'late-night noise in one place', name: 'Quiet hours in one town',
    text: "In the town of Orsley, people kept complaining about loud music in the middle of the night. Using the power the state gives to towns, the Orsley town council voted that no one may play loud music in a home between eleven at night and seven in the morning, anywhere in the town.",
    outcome: 'localgov', route: { D1: ['states'], S1: ['local'], S2: ['nothing'] },
    cues: { S1: 'Using the power the state gives to towns, the Orsley town council voted', S2: 'no one may play loud music in a home between eleven at night and seven in the morning' } },

  /* ---------- Reserved powers beside Preemption: a three-day wait before a wedding, a three-year wait before citizenship ---------- */
  { id: 'u6-wait-marry', use: 'teach', tier: 'clean', setting: 'home', topic: 'a wait before a wedding', name: 'A wait before a wedding',
    text: "Couples in the state of Halvard had been marrying on the day they got their license. The Halvard legislature passed a law that a couple must wait three days after getting a marriage license before they may marry.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { S1: 'The Halvard legislature passed a law', S2: 'a couple must wait three days after getting a marriage license before they may marry' } },

  { id: 'u6-wait-citizen', use: 'teach', tier: 'clean', setting: 'immigration', topic: 'a wait before citizenship', name: 'A wait before citizenship',
    text: "Congress has already written the rules for becoming a citizen, and they are meant to be the only rules in every state. The Halvard legislature passed a law that a person must also have lived in Halvard for three years before they may become a citizen.",
    outcome: 'preempted', route: { D1: ['states'], S1: ['own'], S2: ['onlyrule'] },
    cues: { S1: 'The Halvard legislature passed a law', S2: 'Congress has already written the rules for becoming a citizen, and they are meant to be the only rules in every state' } },

  /* ---------- Preemption beside Concurrent powers: the same life-jacket law, once as the only rule and once as a minimum ---------- */
  { id: 'u6-jackets-only', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'life jackets, one standard for all', name: 'Life jackets, the only rule',
    text: "A federal law says that every boat must carry one life jacket for each person on board, and that no state may require anything different. The Tarn legislature passed a law that every boat on Tarn’s lakes must carry two life jackets for each person.",
    outcome: 'preempted', route: { D1: ['states'], S1: ['own'], S2: ['onlyrule'] },
    cues: { S1: 'The Tarn legislature passed a law', S2: 'A federal law says that every boat must carry one life jacket for each person on board, and that no state may require anything different' } },

  { id: 'u6-jackets-floor', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'life jackets, a minimum', name: 'Life jackets, a minimum',
    text: "A federal law says that every boat must carry at least one life jacket for each person on board, and that a state may require more. The Tarn legislature passed a law that every boat on Tarn’s lakes must carry two life jackets for each person.",
    outcome: 'concurrent', route: { D1: ['states'], S1: ['own'], S2: ['floor'] },
    cues: { S1: 'The Tarn legislature passed a law', S2: 'A federal law says that every boat must carry at least one life jacket for each person on board, and that a state may require more' } },

  /* ---------- Reserved powers beside A right that binds the states: a sidewalk stall, a sidewalk newspaper ---------- */
  { id: 'u6-stall-license', use: 'teach', tier: 'clean', setting: 'money', topic: 'selling food on a sidewalk', name: 'The food stall license',
    text: "Food stalls kept appearing on busy sidewalks in the state of Pelham. The Pelham legislature passed a law that anyone who sells food from a stall on a public sidewalk must have a license from the state.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { S1: 'The Pelham legislature passed a law', S2: 'anyone who sells food from a stall on a public sidewalk must have a license from the state' } },

  { id: 'u6-stall-paper', use: 'teach', tier: 'clean', setting: 'community', topic: 'handing out a newspaper', name: 'The newspaper approval',
    text: "A weekly newspaper in the state of Pelham is handed out free on public sidewalks. The Pelham legislature passed a law that nobody may hand out a newspaper on a public sidewalk unless the governor’s office has first approved what the newspaper says.",
    outcome: 'protected', route: { D1: ['states'], S1: ['own'], S2: ['right'] },
    cues: { S1: 'The Pelham legislature passed a law', S2: 'nobody may hand out a newspaper on a public sidewalk unless the governor’s office has first approved what the newspaper says' } },

  /* ---------- Exceptions: a case whose story points one way and whose answers give another ---------- */
  { id: 'u6-cribs', use: 'teach', tier: 'misleading', setting: 'money', topic: 'baby cribs', name: 'The stricter crib standard',
    text: "The state of Tolland takes baby safety seriously, and its lawmakers want the cribs sold in Tolland shops to be as safe as possible. A federal law sets one safety standard for every crib sold in the country, and says that no state may set a different one. The Tolland legislature passed a law with a stricter standard for cribs sold in Tolland shops.",
    outcome: 'preempted', route: { D1: ['states'], S1: ['own'], S2: ['onlyrule'] },
    cues: { S1: 'The Tolland legislature passed a law with a stricter standard', S2: 'A federal law sets one safety standard for every crib sold in the country, and says that no state may set a different one' },
    segments: [
      { text: 'The state of Tolland takes baby safety seriously, and its lawmakers want the cribs sold in Tolland shops to be as safe as possible', note: 'That is why the state acted, and it makes the rule sound like the state’s own business. It says nothing about any federal law.' },
      { text: 'A federal law sets one safety standard for every crib sold in the country, and says that no state may set a different one' },
      { text: 'The Tolland legislature passed a law with a stricter standard for cribs sold in Tolland shops', note: 'That is the state’s rule. The words asked for are about the federal law it runs into.' }] },

  { id: 'u6-councilmag', use: 'teach', tier: 'misleading', setting: 'community', topic: 'a magazine at the newsstand', name: 'The newsstand magazine',
    text: "In the city of Kellmouth, newsstands stand on city sidewalks, and the city council decides who may set up there. A magazine that makes fun of the mayor sells well at the newsstands. On Monday the Kellmouth city council passed a rule that newsstands may not sell the magazine that makes fun of the mayor.",
    outcome: 'protected', route: { D1: ['states'], S1: ['local'], S2: ['right'] },
    cues: { S1: 'the Kellmouth city council passed a rule', S2: 'newsstands may not sell the magazine that makes fun of the mayor' },
    segments: [
      { text: 'newsstands stand on city sidewalks, and the city council decides who may set up there', note: 'That makes the matter sound like a local one, and it is why the case looks like a city’s own business. It does not show what the rule takes away.' },
      { text: 'the Kellmouth city council passed a rule', note: 'That shows who made the rule. It does not show what the rule takes away.' },
      { text: 'newsstands may not sell the magazine that makes fun of the mayor' }] },

  /* ---------- A right that binds the states beside Beyond Congress's power: one rally ban, made by Congress and by a city ---------- */
  { id: 'u6-rally-congress', use: 'teach', tier: 'clean', setting: 'community', topic: 'a rally ban in the capital', name: 'The rally ban in Congress',
    text: "A group planned a political rally in a public park in the capital. Both chambers of Congress then passed a law banning any group from holding a political rally in a public park.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { D1: 'Both chambers of Congress then passed a law', C1: 'banning any group from holding a political rally in a public park' } },

  { id: 'u6-rally-city', use: 'teach', tier: 'clean', setting: 'community', topic: 'a rally ban in Redwick', name: 'The rally ban in a city',
    text: "A group planned a political rally in a public park in the city of Redwick. The Redwick city council then passed a rule banning any group from holding a political rally in a public park.",
    outcome: 'protected', route: { D1: ['states'], S1: ['local'], S2: ['right'] },
    cues: { S1: 'The Redwick city council then passed a rule', S2: 'banning any group from holding a political rally in a public park' } },

  /* ---------- A right that binds the states beside The rights of the accused: a right against government, two different last decisions ---------- */
  { id: 'u6-silence-lawyer', use: 'teach', tier: 'clean', setting: 'community', topic: 'questioning after a request for a lawyer', name: 'The questioning after a request for a lawyer',
    text: "A man charged with robbery says that the police kept questioning him after he asked for a lawyer. At his trial, his lawyer asks the judge to keep out of the trial what he said during that questioning.",
    outcome: 'trialrights', route: { D1: ['courts'], J1: ['accused'] },
    cues: { D1: 'his lawyer asks the judge to keep out of the trial what he said during that questioning', J1: 'his lawyer asks the judge to keep out of the trial what he said during that questioning' } },

  { id: 'u6-council-speech-fine', use: 'teach', tier: 'clean', setting: 'community', topic: 'a fine for criticizing the police', name: 'The fine for criticizing the police',
    text: "A man in the city of Hale spoke at a public meeting and criticized the police. The Hale city council then passed a rule fining anyone who criticizes the police at a public meeting.",
    outcome: 'protected', route: { D1: ['states'], S1: ['local'], S2: ['right'] },
    cues: { S1: 'The Hale city council then passed a rule', S2: 'fining anyone who criticizes the police at a public meeting' } },

  /* ---------- Reserved powers beside Beyond Congress's power: the same barbers' hours, set by a state and by Congress ---------- */
  { id: 'u6-barber-state', use: 'teach', tier: 'clean', setting: 'work', topic: 'barbers’ hours in Lorne', name: 'The barbers’ hours in a state',
    text: "In the state of Lorne, some barbers worked until midnight. The Lorne legislature passed a law that barbers may cut hair only between eight in the morning and six in the evening.",
    outcome: 'police', route: { D1: ['states'], S1: ['own'], S2: ['nothing'] },
    cues: { S1: 'The Lorne legislature passed a law', S2: 'barbers may cut hair only between eight in the morning and six in the evening' } },

  { id: 'u6-barber-congress', use: 'teach', tier: 'clean', setting: 'work', topic: 'barbers’ hours across the country', name: 'The barbers’ hours in Congress',
    text: "Some barbers around the country worked until midnight. Both chambers of Congress then passed a law that barbers anywhere in the country may cut hair only between eight in the morning and six in the evening.",
    outcome: 'beyondcong', route: { D1: ['congress'], C1: ['barred'] },
    cues: { D1: 'Both chambers of Congress then passed a law', C1: 'barbers anywhere in the country may cut hair only between eight in the morning and six in the evening' } }
]);

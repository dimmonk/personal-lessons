// Civics, Unit Four: cases shown inside cards, part two. Orders to the armed forces and dealing with another country,
// the pair of cases for their look-alike card, and the exception in which a visit by another country's leader hides an order.

FC.cases('civics', 'u4', [

  /* ---------- Orders to the armed forces ---------- */
  { id: 'e-flood', use: 'teach', tier: 'clean', setting: 'community', topic: 'a flood and the army', name: 'The flood relief',
    text: "A flood has cut three mountain towns off from the rest of the country. On Tuesday the President ordered the army to send twelve helicopters and two thousand soldiers to the towns to carry in food and clear the roads. The first helicopters left within the hour.",
    outcome: 'commander', route: { D1: ['president'], E1: ['military'] },
    cues: { E1: 'the President ordered the army to send twelve helicopters and two thousand soldiers to the towns' } },

  { id: 'e-carrier', use: 'teach', tier: 'clean', setting: 'travel', topic: 'an aircraft carrier turned north', name: 'The carrier turned north',
    text: "An aircraft carrier was due to visit a port in the south on Friday. On Thursday night the President ordered the navy to send it north instead, to a harbor where a fuel ship had run aground, to help with the clean-up. The carrier changed course before dawn.",
    outcome: 'commander', route: { D1: ['president'], E1: ['military'] },
    cues: { E1: 'the President ordered the navy to send it north instead' },
    segments: [
      { text: 'An aircraft carrier was due to visit a port in the south on Friday', note: 'That was the plan before the order. It is not the decision in the case.' },
      { text: 'On Thursday night the President ordered the navy to send it north instead, to a harbor where a fuel ship had run aground, to help with the clean-up' },
      { text: 'The carrier changed course before dawn', note: 'That is the order being obeyed. The words asked for are the order itself.' }
    ] },

  { id: 'e-airlift', use: 'check', tier: 'clean', setting: 'work', topic: 'transport planes moved to one base', name: 'The air force move',
    text: "The President told the air force to move its transport planes from two old bases to one new base in the south before the end of the month. The generals who run the bases were sent the order on Friday.",
    outcome: 'commander', route: { D1: ['president'], E1: ['military'] },
    cues: { E1: 'The President told the air force to move its transport planes from two old bases to one new base in the south' },
    reason: { E1: 'The President is telling the armed forces where to go: {cue:E1}. No office is working from a law, and nothing is demanded of people outside the forces.' },
    not: { outcome: 'execute', why: 'An office that carries out a law is working from a law Congress passed, and the case shows none. Here the President is telling the air force where its planes go.' } },

  /* ---------- Dealing with another country ---------- */
  { id: 'e-coasttalks', use: 'teach', tier: 'clean', setting: 'world', topic: 'fishing rules on a shared coast', name: 'The coast talks',
    text: "The President flew to the capital of a neighboring country on Monday and spent two days talking with its leader about fishing rules along the shared coast. By Wednesday the two leaders had agreed on a set of rules and had signed a paper saying so.",
    outcome: 'diplomacy', route: { D1: ['president'], E1: ['abroad'] },
    cues: { E1: 'spent two days talking with its leader about fishing rules along the shared coast' } },

  { id: 'e-exchange', use: 'teach', tier: 'clean', setting: 'learning', topic: 'a student exchange between two nations', name: 'The student exchange',
    text: "Norvale is a small country across the southern sea. The Secretary of State, speaking for the President, spent a week there agreeing with its government how students from each country could study in the other. On Friday the Secretary of State flew home.",
    outcome: 'diplomacy', route: { D1: ['president'], E1: ['abroad'] },
    cues: { E1: 'The Secretary of State, speaking for the President, spent a week there agreeing with its government' },
    segments: [
      { text: 'Norvale is a small country across the southern sea', note: 'That tells you where the case happens. It is not what the official does.' },
      { text: 'The Secretary of State, speaking for the President, spent a week there agreeing with its government how students from each country could study in the other' },
      { text: 'On Friday the Secretary of State flew home', note: 'That is the official going home. The words asked for show the dealing itself.' }
    ] },

  { id: 'e-tourships', use: 'check', tier: 'clean', setting: 'travel', topic: 'tourist ships and a country across the sea', name: 'The tourist ships',
    text: "An official acting for the President met the officials of a country across the sea to talk about how many tourists each country’s ships may carry. The talks ended on Thursday with a signed agreement.",
    outcome: 'diplomacy', route: { D1: ['president'], E1: ['abroad'] },
    cues: { E1: 'An official acting for the President met the officials of a country across the sea' },
    reason: { E1: 'The decision is made by an official speaking for the President: {cue:E1}. Two countries are dealing with each other, and the talks end in an agreement they sign.' },
    not: { outcome: 'execute', why: 'An office that carries out a law is working from a law Congress passed, and the case shows none. Here an official is meeting another country’s officials and signing an agreement with them.' } },

  /* ---------- The look-alike pair: the same ships and the same port, an order to one side and talks with the other ---------- */
  { id: 'e-ships-sent', use: 'teach', tier: 'clean', setting: 'world', topic: 'three ships sent to a port', name: 'The ships sent',
    text: "The President ordered the navy to send three ships to the port of Istrene, in a friendly country, and to keep them there for a month. The first ship sailed on Tuesday morning.",
    outcome: 'commander', route: { D1: ['president'], E1: ['military'] },
    cues: { E1: 'The President ordered the navy to send three ships to the port of Istrene' } },

  { id: 'e-ships-agree', use: 'teach', tier: 'clean', setting: 'world', topic: 'ports shared by two navies', name: 'The ships agreed',
    text: "The President traveled to Istrene and spent two days with its leader. On Thursday the two of them signed an agreement that navy ships of each country may use the other’s ports.",
    outcome: 'diplomacy', route: { D1: ['president'], E1: ['abroad'] },
    cues: { E1: 'The President traveled to Istrene and spent two days with its leader' } },

  /* ---------- Exception: another country's leader is in the story, and the case is an order ---------- */
  { id: 'e-exercise', use: 'teach', tier: 'misleading', setting: 'world', topic: 'a training exercise, an allied navy', name: 'The joint exercise',
    text: "An allied country has asked to train its sailors with the navy. On Monday the President ordered a ship carrying two hundred soldiers to leave for a six-week training exercise with the allied navy. The allied country’s leader thanked the President in a radio speech.",
    outcome: 'commander', route: { D1: ['president'], E1: ['military'] },
    cues: { E1: 'the President ordered a ship carrying two hundred soldiers to leave for a six-week training exercise with the allied navy' },
    segments: [
      { text: 'An allied country has asked to train its sailors with the navy', note: 'That is how the matter got here: another country asked. It is not the decision in the case.' },
      { text: 'the President ordered a ship carrying two hundred soldiers to leave for a six-week training exercise with the allied navy' },
      { text: 'The allied country’s leader thanked the President in a radio speech', note: 'That puts another country’s leader in the case, and it is why the case looks like dealing with another country. But the leader only thanks. Nothing is negotiated or signed.' }
    ] }
]);

// Civics, Unit Four: cases shown inside cards, part two. Orders to the armed forces and dealing with another country,
// and the pair of cases for their look-alike card.

FC.cases('civics', 'u4', [

  /* ---------- Orders to the armed forces ---------- */

  { id: 'e-flood', use: 'teach', tier: 'clean', setting: 'community', topic: 'a flood and the army', name: 'The flood relief',
    text: "A flood has cut three mountain towns off from the rest of the country. On Tuesday the President ordered the army to send twelve helicopters and two thousand soldiers to the towns to carry in food and clear the roads. The first helicopters left within the hour.",
    outcome: 'commander', route: { D1: ['president'], E1: ['military'] },
    cues: { E1: 'the President ordered the army to send twelve helicopters and two thousand soldiers to the towns' } },

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
    cues: { E1: 'The President traveled to Istrene and spent two days with its leader' } }
]);

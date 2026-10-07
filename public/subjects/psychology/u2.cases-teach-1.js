// Psychology, Unit Two: teach, part one: the word, the first two names and their look-alike pair.

FC.cases('psychology', 'u2', [
  /* ---------- Rationalizing ---------- */
  { id: 'dinner', use: 'teach', tier: 'clean', setting: 'work', topic: 'a team dinner, before the excuse', name: 'The team dinner',
    text: "Maya has told everyone at work that she is vegan. At a team dinner she learns, halfway through her plate, that the sauce is made with fish stock." },

  { id: 'sauce', use: 'teach', tier: 'clean', setting: 'work', topic: 'a vegan and a sauce', name: 'The fish-stock sauce',
    text: "Maya has told everyone at work that she is vegan. At a team dinner she learned, halfway through her plate, that the sauce was made with fish stock. She finished the plate. On the way home she said to a colleague, 'It was only a splash of fish stock. It hardly counts.'",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { R1: 'It was only a splash of fish stock. It hardly counts.' } },

  { id: 'shops', use: 'check', tier: 'clean', setting: 'money', topic: 'grocery shopping',
    text: "Priya believes in buying from local stores and often says so. Last night she ordered a week of groceries from a giant online retailer. 'One order makes no difference to anyone,' she told her sister.",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { R1: 'One order makes no difference to anyone' },
    segments: [
      { text: 'Priya believes in buying from local stores and often says so', note: 'That is what she believes. It was there before the order, so it is not the reason.' },
      { text: 'she ordered a week of groceries from a giant online retailer', note: 'That is what she did. The reason comes after it.' },
      { text: 'One order makes no difference to anyone' }
    ],
    reason: { R1: 'These words come after the order, and they only say it is fine: she has still ordered from the giant retailer.' } },

  /* ---------- Sunk cost fallacy ---------- */
  { id: 'renovation', use: 'teach', tier: 'clean', setting: 'home', topic: 'a house renovation', name: 'The renovation',
    text: "Dan and Aisha have spent two years and $40,000 renovating an old house. A builder tells them that finishing it properly will cost another $30,000, and that the finished house will be worth only about $10,000 more than it is now. 'We've put in two years and forty thousand dollars,' Dan says. 'We can't stop now.'",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { R1: "We've put in two years and forty thousand dollars" } },

  { id: 'classes', use: 'check', tier: 'clean', setting: 'learning', topic: 'evening classes',
    text: "Omar has paid for a year of evening classes in accounting. By the third month he knows he dislikes the subject and will never use it. 'I've paid for the whole year,' he says, 'so I'm going to every single class.'",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { R1: "I've paid for the whole year" },
    reason: { R1: "Omar's reason is {cue:R1}: what he has already paid. He says nothing about what the remaining classes will bring him, and they will bring nothing he wants." },
    not: { outcome: 'dissonance', why: 'Omar is not saying something he did is fine. He is using a past payment as the reason for the next nine months.' } },

  /* ---------- The look-alike pair: same person, same story, two names ---------- */
  { id: 'ticket-fever', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a concert ticket and a fever',
    text: "Rosa paid $80 for a concert ticket. On the night she has a fever and it is snowing. 'I paid eighty dollars for this,' she says, pulling on her coat. 'I'm going.'",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { R1: 'I paid eighty dollars for this' } },

  { id: 'ticket-tout', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a concert ticket from a reseller',
    text: "Rosa told her friends for weeks that she would never pay a reseller's price for a concert. Then she paid a reseller $200 for a ticket. 'It's a once-in-a-lifetime show,' she says. 'That makes it different.'",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { R1: ["It's a once-in-a-lifetime show", 'That makes it different'] } }
]);

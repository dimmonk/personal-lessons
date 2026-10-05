// Psychology, Unit Two: cases shown inside cards, part one.
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one name share a topic.
// cues[STEP] is the exact phrase in the text that decides that step (or a list of phrases); the app marks it,
// always in the same style. segments are the tappable pieces for "tap the words" prompts; note is shown if that
// piece is tapped in error. reason[STEP] is the reason for this case's answer to that question.

FC.cases('psychology', 'u2', [

  /* ---------- The case that carries the term "cognitive dissonance" (no name is asked of it) ---------- */
  { id: 'dinner', use: 'teach', tier: 'clean', setting: 'work', topic: 'a team dinner, before the excuse', name: 'The team dinner',
    text: "Maya has told everyone at work that she is vegan. At a team dinner she learns, halfway through her plate, that the sauce is made with fish stock." },

  /* ---------- Cognitive dissonance reduction ---------- */
  { id: 'sauce', use: 'teach', tier: 'clean', setting: 'work', topic: 'a vegan and a sauce', name: 'The fish-stock sauce',
    text: "Maya has told everyone at work that she is vegan. At a team dinner she learned, halfway through her plate, that the sauce was made with fish stock. She finished the plate. On the way home she said to a colleague, 'It was only a splash of fish stock. It hardly counts.'",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { R1: 'It was only a splash of fish stock. It hardly counts.' } },

  { id: 'driver', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a motorway drive', name: 'The careful driver',
    text: "Tom thinks of himself as a careful driver. On the motorway yesterday he drove at 90 in a 70 zone for most of an hour. When his passenger mentioned it afterwards, he said, 'Everyone drives at that speed there, so it doesn't really count as speeding.'",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { R1: "Everyone drives at that speed there, so it doesn't really count as speeding" },
    segments: [
      { text: 'Tom thinks of himself as a careful driver', note: 'That is what Tom believes about himself. It is what his driving does not fit. It is not the reason he gives.' },
      { text: 'he drove at 90 in a 70 zone for most of an hour', note: 'That is what he did. It is not the reason he gives for why it is fine.' },
      { text: "Everyone drives at that speed there, so it doesn't really count as speeding" }
    ] },

  { id: 'shops', use: 'check', tier: 'clean', setting: 'money', topic: 'grocery shopping',
    text: "Priya believes in buying from local shops and often says so. Last night she ordered a week of groceries from a giant online retailer. 'One order makes no difference to anyone,' she told her sister.",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { R1: 'One order makes no difference to anyone' },
    segments: [
      { text: 'Priya believes in buying from local shops and often says so', note: 'That is what she believes. It was there before the order.' },
      { text: 'she ordered a week of groceries from a giant online retailer', note: 'That is what she did. The reason comes after it.' },
      { text: 'One order makes no difference to anyone' }
    ],
    reason: { R1: 'These words come after the order was placed. They say the order is fine, and nothing else changes: Priya has still ordered from the giant retailer, and she still says she believes in local shops.' } },

  /* ---------- Sunk cost fallacy ---------- */
  { id: 'renovation', use: 'teach', tier: 'clean', setting: 'home', topic: 'a house renovation', name: 'The renovation',
    text: "Dan and Aisha have spent two years and £40,000 renovating an old house. A builder tells them that finishing it properly will cost another £30,000, and that the finished house will be worth only about £10,000 more than it is now. 'We've put in two years and forty thousand pounds,' Dan says. 'We can't stop now.'",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { R1: "We've put in two years and forty thousand pounds" } },

  { id: 'film', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a long film', name: 'The dull film',
    text: "An hour into a three-hour film, Lena is bored and so is her friend. 'We've already sat through an hour,' Lena whispers. 'We might as well see it out.'",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { R1: "We've already sat through an hour" },
    segments: [
      { text: 'Lena is bored and so is her friend', note: 'That tells you the next two hours are not worth much to them. It is not the reason Lena gives for staying.' },
      { text: "We've already sat through an hour" },
      { text: 'We might as well see it out', note: 'That is the decision. The reason for it is in the sentence before.' }
    ] },

  { id: 'classes', use: 'check', tier: 'clean', setting: 'learning', topic: 'evening classes',
    text: "Omar has paid for a year of evening classes in accounting. By the third month he knows he dislikes the subject and will never use it. 'I've paid for the whole year,' he says, 'so I'm going to every single class.'",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { R1: "I've paid for the whole year" },
    reason: { R1: "Omar's reason is {cue:R1}: what he has already paid. He says nothing about what the remaining classes will bring him, and the case tells you they will bring nothing he wants." },
    not: { outcome: 'dissonance', why: 'Omar is not giving a reason why something he did is fine. He is giving a past payment as the reason for the next nine months.' } },

  /* ---------- The look-alike pair: same person, same story, two names ---------- */
  { id: 'ticket-fever', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a concert ticket and a fever',
    text: "Rosa paid £80 for a concert ticket. On the night she has a fever and it is snowing. 'I paid eighty pounds for this,' she says, pulling on her coat. 'I'm going.'",
    outcome: 'sunkcost', route: { D1: ['reasoning'], R1: ['backward'] },
    cues: { R1: 'I paid eighty pounds for this' } },

  { id: 'ticket-tout', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a concert ticket from a reseller',
    text: "Rosa told her friends for weeks that she would never pay a reseller's price for a concert. Then she paid a reseller £200 for a ticket. 'It's a once-in-a-lifetime show,' she says. 'That makes it different.'",
    outcome: 'dissonance', route: { D1: ['reasoning'], R1: ['addstory'] },
    cues: { R1: ["It's a once-in-a-lifetime show", 'That makes it different'] } }
]);

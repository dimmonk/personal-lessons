// Basic Math, Unit Six: problems shown inside cards, part two (the third and fourth types: a copy at another size asked for a length, and asked for an area or a volume,
// the problem on the exception card, and the two problems that check the questions).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.

FC.cases('math', 'u6', [

  /* ---------- The third kind: two things of the same shape at different sizes, and a length ---------- */
  { id: 'm6-wd-footbridge', use: 'teach', tier: 'clean', setting: 'building', topic: 'a model of a footbridge', name: 'The footbridge model', outcome: 'similar',
    text: 'A town council has a model of a new footbridge, an exact copy of it at a smaller size. On the model the span measures 20 cm and the tower is 12 cm tall. The real span is 10 m. How tall is the real tower?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: { M1: ['a model of a new footbridge, an exact copy of it at a smaller size', 'How tall is the real tower?'],
            S1: 'a model of a new footbridge, an exact copy of it at a smaller size', S2: 'How tall is the real tower?' } },

  { id: 'm6-wd-flagcopy', use: 'check', tier: 'clean', setting: 'leisure', topic: 'a flag and its badge', outcome: 'similar',
    text: 'A school makes a flag as an exact copy of a badge. The badge is 4 cm wide and 6 cm high, and the flag is 60 cm wide. How high is the flag?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: { M1: ['makes a flag as an exact copy of a badge', 'How high is the flag?'], S1: 'makes a flag as an exact copy of a badge', S2: 'How high is the flag?' },
    segments: [
      { text: 'A school makes a flag as an exact copy of a badge.' },
      { text: 'The badge is 4 cm wide and 6 cm high, and the flag is 60 cm wide.', note: 'Those lengths are for the working. The words about the same shape come in the sentence before.' },
      { text: 'How high is the flag?', note: 'That is the question. The words about the same shape come in the first sentence.' }
    ],
    reason: { S1: 'The flag is an exact copy of the badge, and the width is measured on both.' } },

  /* ---------- The exception: the shadow, which shows a right-angled triangle and is the same shape at different sizes ---------- */
  { id: 'm6-ex-shadow', use: 'teach', tier: 'misleading', setting: 'home', topic: 'a tree and its shadow', name: 'The tree and its shadow', outcome: 'similar', also: ['twosides'],
    text: 'A woman 1.7 m tall stands in the sun, and her shadow on level ground is 2 m long. At the same moment a tree beside her casts a shadow 14 m long. How tall is the tree?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['length'] },
    cues: { M1: ['her shadow on level ground is 2 m long', 'How tall is the tree?'],
            S1: ['A woman 1.7 m tall stands in the sun, and her shadow on level ground is 2 m long', 'At the same moment a tree beside her casts a shadow 14 m long'], S2: 'How tall is the tree?' },
    segments: [
      { text: 'A woman 1.7 m tall stands in the sun, and her shadow on level ground is 2 m long.', note: 'That gives a {t:righttriangle} and two of its sides, but the height you want is not on this triangle.' },
      { text: 'At the same moment a tree beside her casts a shadow 14 m long.' },
      { text: 'How tall is the tree?', note: 'That is the question. The words that settle it put the height you want on a second thing.' }
    ] },

  /* ---------- The fourth kind: two things of the same shape at different sizes, and an area or a volume ---------- */
  { id: 'm6-wd-mats', use: 'teach', tier: 'clean', setting: 'home', topic: 'two square mats', name: 'The two mats', outcome: 'sqcube',
    text: 'A small square mat measures 1 m along each side. A large mat of exactly the same shape measures 3 m along each side. How many times more floor does the large mat cover?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['room'] },
    cues: { M1: ['A large mat of exactly the same shape measures 3 m along each side', 'How many times more floor does the large mat cover?'],
            S1: 'A large mat of exactly the same shape measures 3 m along each side', S2: 'How many times more floor does the large mat cover?' } },

  { id: 'm6-wd-notice', use: 'check', tier: 'clean', setting: 'shopping', topic: 'notice boards', outcome: 'sqcube',
    text: 'A shop sells a notice board 40 cm wide and another notice board of exactly the same shape that is 80 cm wide. A customer asks how many times more cork covers the front of the big board.',
    route: { M1: ['shape'], S1: ['matching'], S2: ['room'] },
    cues: { M1: ['another notice board of exactly the same shape that is 80 cm wide', 'how many times more cork covers the front of the big board'], S1: 'another notice board of exactly the same shape that is 80 cm wide', S2: 'how many times more cork covers the front of the big board' },
    segments: [
      { text: 'A shop sells a notice board 40 cm wide', note: 'That gives the first board. What is asked comes in the last sentence.' },
      { text: 'and another notice board of exactly the same shape that is 80 cm wide.', note: 'That gives the second board. What is asked comes in the last sentence.' },
      { text: 'A customer asks how many times more cork covers the front of the big board.' }
    ],
    reason: { S2: 'These ask how much cork covers the front of the bigger board: a surface.' } },

  /* ---------- The key's two questions, asked of a new problem once each has its card ---------- */
  { id: 'm6-wd-escalator', use: 'check', tier: 'clean', setting: 'shopping', topic: 'an escalator in a shop', outcome: 'trig',
    text: 'An escalator in a shop is 18 m long and rises at an angle of 25° above the floor. How high does it lift a shopper?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    cues: { M1: ['rises at an angle of 25° above the floor', 'How high does it lift a shopper?'], S1: 'is 18 m long and rises at an angle of 25° above the floor', S2: 'How high does it lift a shopper?' },
    reason: { S1: 'The words {cue:S1} give one side, the escalator, and one angle in degrees. No second side is given.' } },

  { id: 'm6-wd-cakeboxes', use: 'check', tier: 'clean', setting: 'cooking', topic: 'cake boxes', outcome: 'sqcube',
    text: 'A bakery sells a small cake box and a big cake box of exactly the same shape. The big box is twice as wide, twice as long and twice as tall as the small box. How many times more cake does the big box hold?',
    route: { M1: ['shape'], S1: ['matching'], S2: ['room'] },
    cues: { M1: ['a big cake box of exactly the same shape', 'How many times more cake does the big box hold?'], S1: 'a big cake box of exactly the same shape', S2: 'How many times more cake does the big box hold?' },
    reason: { S2: 'The words {cue:S2} ask how much cake the bigger box holds: the room inside it.' } }
]);

// Basic Math, Unit Six: stories shown inside cards, part one (the first two kinds: Pythagoras and Trigonometry).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// route: { M1: [...], S1: [...], S2: [...] } gives the accepted answer to each question; cues are the exact words in the text that decide it;
// segments are the tappable pieces for "tap the words" prompts, and note is shown if a piece is tapped in error.
// Nothing in a case's text retypes key wording: a case is something a person would say, in the words real life uses.
// The worked examples, the problems the learner finishes and the look-alike cases are in u6.cases-check-*.js.

FC.cases('math', 'u6', [

  /* ---------- The first kind: two sides of a right-angled triangle ---------- */
  { id: 'm6-wd-hike', use: 'teach', tier: 'clean', setting: 'travel', topic: 'a hike east then north', name: 'The hike', outcome: 'pyth',
    text: 'A hiker walks 3 km due east and then 4 km due north on flat ground. She then wants to walk straight back to her starting point. How long is the walk straight back?',
    route: { M1: ['shape'], S1: ['twosides'], S2: ['length'] },
    cues: { M1: ['walks 3 km due east and then 4 km due north', 'How long is the walk straight back?'], S1: 'walks 3 km due east and then 4 km due north', S2: 'How long is the walk straight back?' } },

  { id: 'm6-wd-tv', use: 'check', tier: 'clean', setting: 'shopping', topic: 'a television display', outcome: 'pyth',
    text: 'A shop sells a television whose rectangular display is 48 cm high and 64 cm wide. The label gives the distance across the display from one corner to the opposite corner. How long is that distance?',
    route: { M1: ['shape'], S1: ['twosides'], S2: ['length'] },
    cues: { M1: ['the distance across the display from one corner to the opposite corner', 'How long is that distance?'], S1: 'whose rectangular display is 48 cm high and 64 cm wide', S2: 'How long is that distance?' },
    segments: [
      { text: 'A shop sells a television whose rectangular display is 48 cm high and 64 cm wide.' },
      { text: 'The label gives the distance across the display from one corner to the opposite corner.', note: 'That says which distance is wanted. The lengths that are given come in the first sentence.' },
      { text: 'How long is that distance?', note: 'That is the question. The lengths that are given come in the first sentence.' }
    ],
    reason: { S1: 'The words {cue:S1} give the lengths of two sides of a {t:righttriangle}, 48 cm and 64 cm, and no angle in degrees besides the square corner. That is {a:S1.twosides}.' } },

  /* ---------- The second kind: one side and one angle of a right-angled triangle ---------- */
  { id: 'm6-wd-skilift', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a ski lift', name: 'The ski lift', outcome: 'trig',
    text: 'A ski lift cable is 200 m long and rises at an angle of 30° above level ground. How high above its bottom station is the top station?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    cues: { M1: ['rises at an angle of 30° above level ground', 'How high above its bottom station is the top station?'], S1: 'is 200 m long and rises at an angle of 30° above level ground', S2: 'How high above its bottom station is the top station?' } },

  { id: 'm6-wd-hill', use: 'check', tier: 'clean', setting: 'travel', topic: 'a hill road', outcome: 'trig',
    text: 'A cyclist rides up a straight hill road. The road is 500 m long and slopes up at an angle of 4° above level. How high does she climb?',
    route: { M1: ['shape'], S1: ['sideangle'], S2: ['length'] },
    cues: { M1: ['slopes up at an angle of 4° above level', 'How high does she climb?'], S1: 'The road is 500 m long and slopes up at an angle of 4° above level', S2: 'How high does she climb?' },
    segments: [
      { text: 'A cyclist rides up a straight hill road.', note: 'That says what is happening. The length and the angle that are given come in the next sentence.' },
      { text: 'The road is 500 m long and slopes up at an angle of 4° above level.' },
      { text: 'How high does she climb?', note: 'That is the question. The length and the angle that are given come in the sentence before it.' }
    ],
    reason: { S1: 'The words {cue:S1} give the length of one side of a {t:righttriangle}, the road, and one angle in degrees besides the square corner. That is {a:S1.sideangle}.' } }
]);

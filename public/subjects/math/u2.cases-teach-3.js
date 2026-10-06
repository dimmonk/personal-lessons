// Basic Math, Unit Two: problems shown inside cards, part three (what is left over and where a count ends on a loop, and
// whether a number can be written exactly).

FC.cases('math', 'u2', [

  /* ---------- The fifth kind: what is left over, and counting round a loop ---------- */
  { id: 'wd-bags', use: 'teach', tier: 'clean', setting: 'cooking', topic: 'rolls packed in bags', name: 'The bags of rolls', outcome: 'modrem',
    text: 'A baker packs 29 rolls into bags of 6. How many rolls are left over once every bag is full?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: { M1: ['How many rolls are left over once every bag is full?'], W1: ['packs 29 rolls into bags of 6', 'How many rolls are left over once every bag is full?'] } },

  { id: 'wd-passport', use: 'teach', tier: 'clean', setting: 'travel', topic: 'a passport arriving in ten days', name: 'The passport', outcome: 'modrem',
    text: 'Today is Wednesday. A passport will arrive in 10 days. On which day of the week will it arrive?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: { M1: ['On which day of the week will it arrive?'], W1: ['Today is Wednesday', 'in 10 days', 'On which day of the week will it arrive?'] },
    segments: [
      { text: 'Today is Wednesday.', note: 'That gives where the count starts on the loop of seven days, and it matters. But the words that say what has to be found come in the last sentence.' },
      { text: 'A passport will arrive in 10 days.', note: 'That gives the count. It does not say what has to be found about it.' },
      { text: 'On which day of the week will it arrive?' }
    ] },

  { id: 'wd-teams', use: 'check', tier: 'clean', setting: 'work', topic: 'students in teams of four', outcome: 'modrem',
    text: 'A teacher has 45 students and puts them in teams of 4. How many students are left over once every team is full?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: { M1: ['How many students are left over once every team is full?'], W1: ['puts them in teams of 4', 'How many students are left over once every team is full?'] },
    segments: [
      { text: 'A teacher has 45 students and puts them in teams of 4.', note: 'That gives the count and the size of one group, and they matter. But the words that say what has to be found come in the last sentence.' },
      { text: 'How many students are left over once every team is full?' }
    ],
    reason: { W1: 'The words {cue:W1} give a count, 45, and the size of a group, 4, and ask what is left over once every group is full. That is {a:W1.cycle}.' } },

  /* ---------- The sixth kind: whether a number can be written exactly ---------- */
  { id: 'wd-sheet', use: 'teach', tier: 'clean', setting: 'work', topic: 'a square sheet of metal', name: 'The metal sheet', outcome: 'irrat',
    text: 'A square sheet of metal has an area of 5 m². Its side is the number that multiplies by itself to give 5. Can the side be written exactly, as a fraction or a decimal that ends?',
    route: { M1: ['whole'], W1: ['exact'] },
    cues: { M1: ['Can the side be written exactly, as a fraction or a decimal that ends?'], W1: ['Can the side be written exactly, as a fraction or a decimal that ends?'] } },

  { id: 'wd-cake-tin', use: 'teach', tier: 'clean', setting: 'cooking', topic: 'a round cake pan', name: 'The cake pan', outcome: 'irrat',
    text: 'A baker measures a round cake pan. The distance round it is a certain number of times the distance across it, and that number is called pi. Can pi be written exactly, as a fraction or a decimal that ends?',
    route: { M1: ['whole'], W1: ['exact'] },
    cues: { M1: ['Can pi be written exactly, as a fraction or a decimal that ends?'], W1: ['Can pi be written exactly, as a fraction or a decimal that ends?'] },
    segments: [
      { text: 'A baker measures a round cake pan.', note: 'That is the story. It does not say what has to be found.' },
      { text: 'The distance round it is a certain number of times the distance across it, and that number is called pi.', note: 'That names the number, pi, and it matters. But the words that say what has to be found about it come in the last sentence.' },
      { text: 'Can pi be written exactly, as a fraction or a decimal that ends?' }
    ] },

  { id: 'wd-flower-bed', use: 'check', tier: 'clean', setting: 'home', topic: 'a square flower bed', outcome: 'irrat',
    text: 'A square flower bed has an area of 3 m². Its side is the number that multiplies by itself to give 3. Can the side be written exactly, as a fraction or a decimal that ends?',
    route: { M1: ['whole'], W1: ['exact'] },
    cues: { M1: ['Can the side be written exactly, as a fraction or a decimal that ends?'], W1: ['Can the side be written exactly, as a fraction or a decimal that ends?'] },
    segments: [
      { text: 'A square flower bed has an area of 3 m².', note: 'That gives the area, and it matters. But the words that say what has to be found about the side come later.' },
      { text: 'Its side is the number that multiplies by itself to give 3.', note: 'That says which number is meant. It does not say what has to be found about it.' },
      { text: 'Can the side be written exactly, as a fraction or a decimal that ends?' }
    ],
    reason: { W1: 'The words {cue:W1} ask whether one number, the side of the bed, can be written exactly. Nothing is split into groups and nothing is shared out. That is {a:W1.exact}.' } },
  /* ---------- The question that tells the six apart, asked once all six are met ---------- */
  { id: 'wd-musicbox', use: 'check', tier: 'clean', setting: 'leisure', topic: 'a music box tune', outcome: 'modrem',
    text: 'A music box plays the same tune of 8 notes again and again without a pause. Which note of the tune is the 100th note it plays?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: { M1: ['Which note of the tune is the 100th note it plays?'], W1: ['plays the same tune of 8 notes again and again', 'Which note of the tune is the 100th note it plays?'] },
    reason: { W1: 'The words {cue:W1} give one loop, a tune of 8 notes that goes round and round, and a count, 100, and ask where the count ends. That is the answer {a:W1.cycle}, and no second thing repeats.' } }
]);

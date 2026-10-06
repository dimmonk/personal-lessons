// Basic Math, Unit Two: problems shown inside cards, part two (the biggest equal piece for two numbers, and two repeating
// things happening together again). Both give two numbers, and they are the pair most easily taken for each other.

FC.cases('math', 'u2', [

  /* ---------- The third kind: the biggest equal piece two numbers both split into ---------- */
  { id: 'wd-peppers', use: 'teach', tier: 'clean', setting: 'cooking', topic: 'peppers in trays', name: 'The pepper trays', outcome: 'hcf',
    text: 'A cook has 12 red peppers and 18 green peppers. She wants to fill trays that each hold the same number of peppers, with red peppers in some trays and green in the others and none left over. What is the largest number of peppers a tray can hold?',
    route: { M1: ['whole'], W1: ['piece'] },
    cues: { M1: ['fill trays that each hold the same number of peppers, with red peppers in some trays and green in the others and none left over'],
            W1: ['fill trays that each hold the same number of peppers, with red peppers in some trays and green in the others and none left over', 'What is the largest number of peppers a tray can hold?'] } },

  { id: 'wd-youth', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'boys and girls in teams', name: 'The youth teams', outcome: 'hcf',
    text: 'A youth leader has 21 boys and 28 girls. She wants to make teams of the same size, with only boys in some teams and only girls in the others and nobody left out. What is the largest team size?',
    route: { M1: ['whole'], W1: ['piece'] },
    cues: { M1: ['make teams of the same size, with only boys in some teams and only girls in the others and nobody left out'],
            W1: ['make teams of the same size, with only boys in some teams and only girls in the others and nobody left out', 'What is the largest team size?'] },
    segments: [
      { text: 'A youth leader has 21 boys and 28 girls.', note: 'That gives the two numbers. You are asked for the words that say what the pieces must be like.' },
      { text: 'She wants to make teams of the same size, with only boys in some teams and only girls in the others and nobody left out.' },
      { text: 'What is the largest team size?', note: 'That is the question, and it matters: it asks for the largest. But the words that say what the pieces must be like are in the sentence before it.' }
    ] },

  { id: 'wd-tulips', use: 'check', tier: 'clean', setting: 'work', topic: 'tulips and daffodils in bunches', outcome: 'hcf',
    text: 'A florist has 30 tulips and 45 daffodils. She wants to make bunches that all hold the same number of flowers, with only tulips in some bunches and only daffodils in the others and none left over. What is the largest bunch size?',
    route: { M1: ['whole'], W1: ['piece'] },
    cues: { M1: ['make bunches that all hold the same number of flowers, with only tulips in some bunches and only daffodils in the others and none left over'],
            W1: ['make bunches that all hold the same number of flowers, with only tulips in some bunches and only daffodils in the others and none left over', 'What is the largest bunch size?'] },
    segments: [
      { text: 'A florist has 30 tulips and 45 daffodils.', note: 'That gives the two numbers. You are asked for the words that say what the pieces must be like.' },
      { text: 'She wants to make bunches that all hold the same number of flowers, with only tulips in some bunches and only daffodils in the others and none left over.' },
      { text: 'What is the largest bunch size?', note: 'That is the question. The words that say what the pieces must be like are in the sentence before it.' }
    ],
    reason: { W1: 'The words {cue:W1} give two numbers, 30 and 45, and ask for pieces of one size that both split into with none left over. The question asks for the largest such size, which is {a:W1.piece}.' } },

  /* ---------- The fourth kind: two repeating things happening together again ---------- */
  { id: 'wd-drummers', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'two drummers', name: 'The two drummers', outcome: 'lcm',
    text: 'Two drummers start together. One hits a drum every 3 seconds and the other every 4 seconds. After how many seconds do they next hit their drums together?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: { M1: ['One hits a drum every 3 seconds and the other every 4 seconds', 'next hit their drums together'],
            W1: ['One hits a drum every 3 seconds and the other every 4 seconds', 'next hit their drums together'] } },

  { id: 'wd-shelves', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'two shelves restocked', name: 'The two shelves', outcome: 'lcm',
    text: 'A shop restocks one shelf every 5 days and another shelf every 8 days. Both were restocked today. After how many days will both next be restocked on the same day?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: { M1: ['restocks one shelf every 5 days and another shelf every 8 days', 'both next be restocked on the same day'],
            W1: ['restocks one shelf every 5 days and another shelf every 8 days', 'both next be restocked on the same day'] },
    segments: [
      { text: 'A shop restocks one shelf every 5 days and another shelf every 8 days.', note: 'That gives the two repeats, and they matter. But the words that say what has to be found about them come in the last sentence.' },
      { text: 'Both were restocked today.', note: 'That says where the count starts. It does not say what has to be found.' },
      { text: 'After how many days will both next be restocked on the same day?' }
    ] },

  { id: 'wd-cleaners', use: 'check', tier: 'clean', setting: 'work', topic: 'two cleaning jobs', outcome: 'lcm',
    text: 'One cleaner empties the trash cans every 6 days and another cleans the windows every 15 days. Both jobs were done today. After how many days will both next be done on the same day?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: { M1: ['empties the trash cans every 6 days and another cleans the windows every 15 days', 'both next be done on the same day'],
            W1: ['empties the trash cans every 6 days and another cleans the windows every 15 days', 'both next be done on the same day'] },
    segments: [
      { text: 'One cleaner empties the trash cans every 6 days and another cleans the windows every 15 days.', note: 'That gives the two repeats, and they matter. But the words that say what has to be found about them come in the last sentence.' },
      { text: 'Both jobs were done today.', note: 'That says where the count starts. It does not say what has to be found.' },
      { text: 'After how many days will both next be done on the same day?' }
    ],
    reason: { W1: 'The words {cue:W1} give two jobs on separate schedules, every 6 days and every 15 days, and ask for the first day on which both fall. That is {a:W1.together}.' } }
]);

// Basic Math, Unit Two: the short stories shown in cards. use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards.
// Neither may appear in the drill. A problem that only shows a thing for a term card has no route: it is not asked anything.
// route gives the accepted answer to each question; cues are the exact words in the text that decide it; segments are the tappable
// pieces for "tap the words" prompts, and note is shown if a piece is tapped in error.
// Nothing in a case's text retypes key wording: a case is something a person would say, in the words real life uses.

FC.cases('math', 'u2', [

  { id: 'wd-squads', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a coach and two squads', name: 'The coach and her squads',
    text: 'A coach has 12 players on Monday and 13 players on Friday, and she wants to make teams of equal size, with more than one team and more than one player in each team. On Monday she can make 2 teams of 6, 3 teams of 4, 4 teams of 3 or 6 teams of 2. On Friday she cannot, however she tries: 13 players make only one team of 13, or 13 teams of 1.' },

  { id: 'wd-patio', use: 'teach', tier: 'clean', setting: 'building', topic: 'slabs laid as a square', name: 'The square patio',
    text: 'A paver lays 36 square slabs as one big square, with 6 slabs along each side. He says the side is 6 slabs long, because 6 × 6 = 36. Then he is asked about a second patio of 50 slabs, and finds that 7 × 7 = 49 is one slab short and 8 × 8 = 64 is too many.' },

  { id: 'wd-boxes', use: 'teach', tier: 'clean', setting: 'cooking', topic: 'rolls packed in boxes', name: 'The baker’s boxes',
    text: 'A baker has 12 rolls to pack. Boxes of 3 hold all 12 rolls with 4 boxes, and so do boxes of 4, with 3 boxes. Boxes of 5 will not do: 2 boxes of 5 hold 10 rolls and leave 2 over.' },

  { id: 'wd-apples', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'apples in bags', name: 'The market apples', outcome: 'prime',
    text: 'A market stall has 59 apples. The seller wants to pack them in equal bags, with more than one bag and more than one apple in each bag. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: { M1: ['pack them in equal bags, with more than one bag and more than one apple in each bag'],
            W1: ['pack them in equal bags, with more than one bag and more than one apple in each bag', 'Is that possible?'] } },

  { id: 'wd-tour', use: 'check', tier: 'clean', setting: 'travel', topic: 'visitors in groups', outcome: 'prime',
    text: 'A tour guide has 73 visitors and wants to split them into equal groups, with more than one group and more than one visitor in each group. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: { M1: ['split them into equal groups, with more than one group and more than one visitor in each group'],
            W1: ['split them into equal groups, with more than one group and more than one visitor in each group', 'Is that possible?'] },
    segments: [
      { text: 'A tour guide has 73 visitors', note: 'That only gives the number. You need the words that say what the groups must be like.' },
      { text: 'wants to split them into equal groups, with more than one group and more than one visitor in each group.' },
      { text: 'Is that possible?', note: 'That is the question, a yes or a no. The words that say what the groups must be like come before it.' }
    ],
    reason: { W1: 'The only number is 73, and the question is a yes or a no: can it be split at all?' } },

  { id: 'wd-puzzle', use: 'teach', tier: 'clean', setting: 'home', topic: 'a puzzle on a cereal box', name: 'The cereal-box puzzle', outcome: 'factor',
    text: 'A puzzle on a cereal box says that 60 is made by multiplying prime numbers together. Which prime numbers multiply together to give 60?',
    route: { M1: ['whole'], W1: ['parts'] },
    cues: { M1: ['Which prime numbers multiply together to give 60?'], W1: ['Which prime numbers multiply together to give 60?'] } },

  { id: 'wd-museum', use: 'check', tier: 'clean', setting: 'work', topic: 'a museum label', outcome: 'factor',
    text: 'A museum label reads 45. The curator asks visitors which prime numbers multiply together to give 45.',
    route: { M1: ['whole'], W1: ['parts'] },
    cues: { M1: ['which prime numbers multiply together to give 45'], W1: ['which prime numbers multiply together to give 45'] },
    segments: [
      { text: 'A museum label reads 45', note: 'That only gives the number. You need the words that say what to find about it.' },
      { text: 'The curator asks visitors which prime numbers multiply together to give 45' }
    ],
    reason: { W1: 'The only number is 45, and the question asks for its primes: a list, not a yes or a no.' } },

  { id: 'wd-peppers', use: 'teach', tier: 'clean', setting: 'cooking', topic: 'peppers in trays', name: 'The pepper trays', outcome: 'hcf',
    text: 'A cook has 12 red peppers and 18 green peppers. She wants to fill trays that each hold the same number of peppers, with red peppers in some trays and green in the others and none left over. What is the largest number of peppers a tray can hold?',
    route: { M1: ['whole'], W1: ['piece'] },
    cues: { M1: ['fill trays that each hold the same number of peppers, with red peppers in some trays and green in the others and none left over'],
            W1: ['fill trays that each hold the same number of peppers, with red peppers in some trays and green in the others and none left over', 'What is the largest number of peppers a tray can hold?'] } },

  { id: 'wd-tulips', use: 'check', tier: 'clean', setting: 'work', topic: 'tulips and daffodils in bunches', outcome: 'hcf',
    text: 'A florist has 30 tulips and 45 daffodils. She wants to make bunches that all hold the same number of flowers, with only tulips in some bunches and only daffodils in the others and none left over. What is the largest bunch size?',
    route: { M1: ['whole'], W1: ['piece'] },
    cues: { M1: ['make bunches that all hold the same number of flowers, with only tulips in some bunches and only daffodils in the others and none left over'],
            W1: ['make bunches that all hold the same number of flowers, with only tulips in some bunches and only daffodils in the others and none left over', 'What is the largest bunch size?'] },
    segments: [
      { text: 'A florist has 30 tulips and 45 daffodils.', note: 'That only gives the two numbers. You need the words that say what the pieces must be like.' },
      { text: 'She wants to make bunches that all hold the same number of flowers, with only tulips in some bunches and only daffodils in the others and none left over.' },
      { text: 'What is the largest bunch size?', note: 'That is the question, but the rule for the pieces is in the sentence before it.' }
    ],
    reason: { W1: 'Both 30 and 45 must split into bunches of one size with none left over, and the question asks for the largest size.' } },

  { id: 'wd-drummers', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'two drummers', name: 'The two drummers', outcome: 'lcm',
    text: 'Two drummers start together. One hits a drum every 3 seconds and the other every 4 seconds. After how many seconds do they next hit their drums together?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: { M1: ['One hits a drum every 3 seconds and the other every 4 seconds', 'next hit their drums together'],
            W1: ['One hits a drum every 3 seconds and the other every 4 seconds', 'next hit their drums together'] } },

  { id: 'wd-cleaners', use: 'check', tier: 'clean', setting: 'work', topic: 'two cleaning jobs', outcome: 'lcm',
    text: 'One cleaner empties the trash cans every 6 days and another cleans the windows every 15 days. Both jobs were done today. After how many days will both next be done on the same day?',
    route: { M1: ['whole'], W1: ['together'] },
    cues: { M1: ['empties the trash cans every 6 days and another cleans the windows every 15 days', 'both next be done on the same day'],
            W1: ['empties the trash cans every 6 days and another cleans the windows every 15 days', 'both next be done on the same day'] },
    segments: [
      { text: 'One cleaner empties the trash cans every 6 days and another cleans the windows every 15 days.', note: 'That gives the two repeats, but not what to find about them. That comes in the last sentence.' },
      { text: 'Both jobs were done today.', note: 'That says where the count starts, not what to find.' },
      { text: 'After how many days will both next be done on the same day?' }
    ],
    reason: { W1: 'Two jobs repeat on their own schedules, every 6 and every 15 days, and the question asks for the first day both fall.' } },

  { id: 'wd-bags', use: 'teach', tier: 'clean', setting: 'cooking', topic: 'rolls packed in bags', name: 'The bags of rolls', outcome: 'modrem',
    text: 'A baker packs 29 rolls into bags of 6. How many rolls are left over once every bag is full?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: { M1: ['How many rolls are left over once every bag is full?'], W1: ['packs 29 rolls into bags of 6', 'How many rolls are left over once every bag is full?'] } },

  { id: 'wd-teams', use: 'check', tier: 'clean', setting: 'work', topic: 'students in teams of four', outcome: 'modrem',
    text: 'A teacher has 45 students and puts them in teams of 4. How many students are left over once every team is full?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: { M1: ['How many students are left over once every team is full?'], W1: ['puts them in teams of 4', 'How many students are left over once every team is full?'] },
    segments: [
      { text: 'A teacher has 45 students and puts them in teams of 4.', note: 'That gives the count and the group size, but not what to find. That comes in the last sentence.' },
      { text: 'How many students are left over once every team is full?' }
    ],
    reason: { W1: 'The count is 45 students and the group size is 4, and the question asks what is left over.' } },

  { id: 'wd-sheet', use: 'teach', tier: 'clean', setting: 'work', topic: 'a square sheet of metal', name: 'The metal sheet', outcome: 'irrat',
    text: 'A square sheet of metal has an area of 5 m². Its side is the number that multiplies by itself to give 5. Can the side be written exactly, as a fraction or a decimal that ends?',
    route: { M1: ['whole'], W1: ['exact'] },
    cues: { M1: ['Can the side be written exactly, as a fraction or a decimal that ends?'], W1: ['Can the side be written exactly, as a fraction or a decimal that ends?'] } },

  { id: 'wd-flower-bed', use: 'check', tier: 'clean', setting: 'home', topic: 'a square flower bed', outcome: 'irrat',
    text: 'A square flower bed has an area of 3 m². Its side is the number that multiplies by itself to give 3. Can the side be written exactly, as a fraction or a decimal that ends?',
    route: { M1: ['whole'], W1: ['exact'] },
    cues: { M1: ['Can the side be written exactly, as a fraction or a decimal that ends?'], W1: ['Can the side be written exactly, as a fraction or a decimal that ends?'] },
    segments: [
      { text: 'A square flower bed has an area of 3 m².', note: 'That gives the area, but not what to find about the side. That comes later.' },
      { text: 'Its side is the number that multiplies by itself to give 3.', note: 'That says which number is meant, not what to find about it.' },
      { text: 'Can the side be written exactly, as a fraction or a decimal that ends?' }
    ],
    reason: { W1: 'The question asks whether one number, the side of the bed, can be written exactly.' } },

  { id: 'wd-musicbox', use: 'check', tier: 'clean', setting: 'leisure', topic: 'a music box tune', outcome: 'modrem',
    text: 'A music box plays the same tune of 8 notes again and again without a pause. Which note of the tune is the 100th note it plays?',
    route: { M1: ['whole'], W1: ['cycle'] },
    cues: { M1: ['Which note of the tune is the 100th note it plays?'], W1: ['plays the same tune of 8 notes again and again', 'Which note of the tune is the 100th note it plays?'] },
    reason: { W1: 'The words {cue:W1} give one loop and a count, and the question asks where the count ends.' } }
]);

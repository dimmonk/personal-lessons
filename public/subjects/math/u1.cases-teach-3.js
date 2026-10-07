// Basic Math, Unit One: problems shown inside cards, part three (the three exceptions, the photo pair and the worked
// problem). Field guide: see u1.cases-teach-1.js.
// A problem used by a worked card carries no reason of its own: the card's steps hold it, so there is one copy.
// A look-alike pair is two problems about the same people or the same place, and the same sort of numbers.

FC.cases('math', 'u1', [

  /* ---------- The exception: a fixed fee plus a price for each hour ---------- */
  { id: 'gt-cleaner', use: 'teach', tier: 'misleading', setting: 'home', topic: 'a carpet cleaner paid by the hour', name: 'The carpet cleaner',
    also: ['unknown'],
    text: 'A carpet cleaner charges a fixed $20 call-out fee plus $15 for every hour he works. Bianca’s bill is $95. How many hours did he work?',
    route: { M1: ['growth'] },
    cues: { M1: ['$15 for every hour he works', 'How many hours did he work?'] },
    segments: [
      { text: 'A carpet cleaner charges a fixed $20 call-out fee plus $15 for every hour he works' },
      { text: 'Bianca’s bill is $95', note: 'That is the bill, and it matters. But the van hire had a bill too, so it is not what makes the difference.' },
      { text: 'How many hours did he work?', note: 'That is the number the problem leaves out. The van hire left one out too, so look at what the price repeats for.' }
    ] },

  /* ---------- The exception: an amount that changes each day, and a day of the week ---------- */
  { id: 'gt-tablets', use: 'teach', tier: 'misleading', setting: 'health', topic: 'a box of tablets and a day of the week', name: 'The box of tablets',
    also: ['growth'],
    text: 'Mira opens a box of 75 tablets on a Monday and takes one every day. On what day of the week will she take the last one?',
    route: { M1: ['whole'] },
    cues: { M1: ['takes one every day', 'On what day of the week will she take the last one?'] },
    segments: [
      { text: 'Mira opens a box of 75 tablets on a Monday', note: 'That gives where the count starts and how long it is. It does not say what to work out.' },
      { text: 'and takes one every day', note: 'That is why it looks like an amount that changes as days pass: the box loses a tablet a day. But it is not what the question asks about.' },
      { text: 'On what day of the week will she take the last one?' }
    ] },

  /* ---------- The look-alike pair: friends in a photo ---------- */
  { id: 'gt-photo-rows', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a group photo in equal rows',
    text: 'Hana is organizing a group photo of 24 friends. She wants every row to hold the same number of people, with more than one row and more than one person in each row. In how many different ways can she split the friends into rows?',
    route: { M1: ['whole'] },
    cues: { M1: ['every row to hold the same number of people', 'In how many different ways can she split the friends into rows?'] } },

  { id: 'gt-photo-order', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'friends standing in a row',
    text: 'Hana is taking a photo of four friends standing in a row. In how many different orders can the four friends stand?',
    route: { M1: ['chance'] },
    cues: { M1: ['In how many different orders can the four friends stand?'] } },

  /* ---------- The exception: a scale model ---------- */
  { id: 'gt-locomotive', use: 'teach', tier: 'misleading', setting: 'travel', topic: 'a model locomotive at a scale', name: 'The model locomotive',
    also: ['unknown'],
    text: 'A toy company makes a model of a locomotive at a scale of 1 to 40: every 1 cm on the model stands for 40 cm on the real locomotive. The model is 30 cm long. How long is the real locomotive?',
    route: { M1: ['shape'] },
    cues: { M1: ['makes a model of a locomotive at a scale of 1 to 40', 'How long is the real locomotive?'] },
    segments: [
      { text: 'A toy company makes a model of a locomotive at a scale of 1 to 40' },
      { text: 'every 1 cm on the model stands for 40 cm on the real locomotive', note: 'That is the rate, and it is why this looks like a missing number. It does not say what the rate compares.' },
      { text: 'The model is 30 cm long', note: 'That is the number the rate is scaled to. The sum needs it, but it does not show what the problem is about.' },
      { text: 'How long is the real locomotive?', note: 'That is the question. The words that show what the rate compares are in the first sentence.' }
    ] },

  /* ---------- The worked problem ---------- */
  { id: 'gt-bed', use: 'teach', tier: 'misleading', setting: 'home', topic: 'edging for a triangular flower bed', name: 'The flower bed',
    also: ['unknown'],
    text: 'A gardener is edging a triangular flower bed. Two of its sides are 3.0 m and 4.0 m long, and they meet at a square corner. Edging costs $5 for each meter. How long is the third side?',
    route: { M1: ['shape'] },
    cues: { M1: ['Two of its sides are 3.0 m and 4.0 m long, and they meet at a square corner', 'How long is the third side?'] } }
]);

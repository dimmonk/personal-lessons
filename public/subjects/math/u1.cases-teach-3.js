// Basic Math, Unit One: problems shown inside cards, part three (the look-alike pairs, the exceptions, the check after
// the question card and the two worked problems). Field guide: see u1.cases-teach-1.js.
// A problem used by a worked card carries no reason of its own: the card's steps hold it, so there is one copy.
// A look-alike pair is two problems about the same people or the same place, and the same sort of numbers.

FC.cases('math', 'u1', [

  /* ---------- The look-alike pair: a phone plan, a hidden number or an amount over time ---------- */
  { id: 'gt-plan-texts', use: 'teach', tier: 'clean', setting: 'money', topic: 'a phone bill and the texts sent',
    text: 'Leo’s phone plan charges a fixed €10 plus €0.20 for every text he sends. His bill this month was €16. How many texts did he send?',
    route: { M1: ['unknown'] },
    cues: { M1: ['a fixed €10 plus €0.20 for every text he sends', 'How many texts did he send?'] } },

  { id: 'gt-plan-rise', use: 'teach', tier: 'clean', setting: 'money', topic: 'a phone price that rises each year',
    text: 'Leo’s phone plan cost €10 a month when he joined. The company puts the price up by €2 every year. What will the plan cost him a month after 5 years?',
    route: { M1: ['growth'] },
    cues: { M1: ['puts the price up by €2 every year', 'What will the plan cost him a month after 5 years?'] } },

  /* ---------- The exception: a fixed fee plus a price for each hour ---------- */
  { id: 'gt-cleaner', use: 'teach', tier: 'misleading', setting: 'home', topic: 'a carpet cleaner paid by the hour', name: 'The carpet cleaner',
    also: ['unknown'],
    text: 'A carpet cleaner charges a fixed €20 call-out fee plus €15 for every hour he works. Bianca’s bill is €95. How many hours did he work?',
    route: { M1: ['growth'] },
    cues: { M1: ['€15 for every hour he works', 'How many hours did he work?'] },
    segments: [
      { text: 'A carpet cleaner charges a fixed €20 call-out fee plus €15 for every hour he works' },
      { text: 'Bianca’s bill is €95', note: 'That is the result, and it matters. But the van hire had a result too, so it cannot be what makes the difference.' },
      { text: 'How many hours did he work?', note: 'That is the number the problem leaves out. The van hire left a number out too, so it cannot be what makes the difference. Look at what the price is repeated for.' }
    ] },

  /* ---------- The exception: a distance that changes, but not in any of the three ways ---------- */
  { id: 'gt-cyclist', use: 'teach', tier: 'misleading', setting: 'leisure', topic: 'a cyclist freewheeling down a hill', name: 'The cyclist on the hill',
    text: 'A cyclist freewheels down a hill. After t seconds she has travelled 2 × t × t metres, because she keeps getting faster. The hill is 200 m long. How many seconds does the ride take?',
    route: { M1: ['unknown'] },
    cues: { M1: ['After t seconds she has travelled 2 × t × t metres', 'How many seconds does the ride take?'] },
    segments: [
      { text: 'A cyclist freewheels down a hill', note: 'That is the setting. It does not say how the distance changes.' },
      { text: 'After t seconds she has travelled 2 × t × t metres, because she keeps getting faster' },
      { text: 'The hill is 200 m long', note: 'That is the target. It is why the question can look like how long it takes to reach a target, and it is not the words that show how the distance changes.' },
      { text: 'How many seconds does the ride take?', note: 'That is the question. The words that show how the distance changes are in the second sentence.' }
    ] },

  /* ---------- The look-alike pair: an amount over time, or counts that repeat ---------- */
  { id: 'gt-barrel', use: 'teach', tier: 'clean', setting: 'home', topic: 'a rain barrel that fills each day',
    text: 'Rosa’s rain barrel holds 20 litres now, and the rain adds 4 litres every day. How many days will it take to hold 100 litres?',
    route: { M1: ['growth'] },
    cues: { M1: ['the rain adds 4 litres every day', 'How many days will it take to hold 100 litres?'] } },

  { id: 'gt-rota', use: 'teach', tier: 'clean', setting: 'home', topic: 'two garden chores that repeat',
    text: 'Rosa waters her tomatoes every 4 days and feeds them every 6 days. She did both today. In how many days will she next do both on the same day?',
    route: { M1: ['whole'] },
    cues: { M1: ['waters her tomatoes every 4 days and feeds them every 6 days', 'In how many days will she next do both on the same day?'] } },

  /* ---------- The exception: an amount that changes each day, and a day of the week ---------- */
  { id: 'gt-tablets', use: 'teach', tier: 'misleading', setting: 'health', topic: 'a box of tablets and a day of the week', name: 'The box of tablets',
    also: ['growth'],
    text: 'Mira opens a box of 75 tablets on a Monday and takes one every day. On what day of the week will she take the last one?',
    route: { M1: ['whole'] },
    cues: { M1: ['takes one every day', 'On what day of the week will she take the last one?'] },
    segments: [
      { text: 'Mira opens a box of 75 tablets on a Monday', note: 'That gives where the count starts and how long it is. It is part of the story, and it does not say what to work out.' },
      { text: 'and takes one every day', note: 'That is why the problem can look like an amount changing over time: the box loses a tablet a day. It is not what the question asks about.' },
      { text: 'On what day of the week will she take the last one?' }
    ] },

  /* ---------- The look-alike pair: friends in a photo ---------- */
  { id: 'gt-photo-rows', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a group photo in equal rows',
    text: 'Hana is organising a group photo of 24 friends. She wants every row to hold the same number of people, with more than one row and more than one person in each row. In how many different ways can she split the friends into rows?',
    route: { M1: ['whole'] },
    cues: { M1: ['every row to hold the same number of people', 'In how many different ways can she split the friends into rows?'] } },

  { id: 'gt-photo-order', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'friends standing in a row',
    text: 'Hana is taking a photo of four friends standing in a row. In how many different orders can the four friends stand?',
    route: { M1: ['chance'] },
    cues: { M1: ['In how many different orders can the four friends stand?'] } },

  /* ---------- The look-alike pair: a bake sale ---------- */
  { id: 'gt-bake-totals', use: 'teach', tier: 'clean', setting: 'cooking', topic: 'muffins and cookies sold, from totals',
    text: 'At a bake sale Dana sold muffins at €3 each and cookies at €2 each. She sold 20 items and took €50 in all. How many muffins and how many cookies did she sell?',
    route: { M1: ['unknown'] },
    cues: { M1: ['She sold 20 items and took €50 in all', 'How many muffins and how many cookies did she sell?'] } },

  { id: 'gt-bake-plates', use: 'teach', tier: 'clean', setting: 'cooking', topic: 'plates of one muffin and one cookie',
    text: 'At the bake sale each of Dana’s plates holds one muffin and one cookie. She has 4 sorts of muffin and 3 sorts of cookie. How many different plates can she make?',
    route: { M1: ['chance'] },
    cues: { M1: ['one muffin and one cookie', 'How many different plates can she make?'] } },

  /* ---------- The look-alike pair: a shelf brace ---------- */
  { id: 'gt-brace-length', use: 'teach', tier: 'clean', setting: 'building', topic: 'a brace under a shelf, from its triangle',
    text: 'Lena is fitting a brace under a shelf. The shelf sticks out 40 cm from the wall, and the brace is fixed to the wall 30 cm below the shelf. The wall and the shelf meet at a square corner. How long must the brace be?',
    route: { M1: ['shape'] },
    cues: { M1: ['The shelf sticks out 40 cm from the wall, and the brace is fixed to the wall 30 cm below the shelf', 'How long must the brace be?'] } },

  { id: 'gt-brace-wood', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a piece of wood bought by the metre',
    text: 'Lena buys wood for the brace at €9 for each metre. The brace cost her €4.50. How long is the piece of wood she bought?',
    route: { M1: ['unknown'] },
    cues: { M1: ['€9 for each metre', 'How long is the piece of wood she bought?'] } },

  /* ---------- The exception: a scale model ---------- */
  { id: 'gt-locomotive', use: 'teach', tier: 'misleading', setting: 'travel', topic: 'a model locomotive at a scale', name: 'The model locomotive',
    also: ['unknown'],
    text: 'A toy company makes a model of a locomotive at a scale of 1 to 40: every 1 cm on the model stands for 40 cm on the real locomotive. The model is 30 cm long. How long is the real locomotive?',
    route: { M1: ['shape'] },
    cues: { M1: ['makes a model of a locomotive at a scale of 1 to 40', 'How long is the real locomotive?'] },
    segments: [
      { text: 'A toy company makes a model of a locomotive at a scale of 1 to 40' },
      { text: 'every 1 cm on the model stands for 40 cm on the real locomotive', note: 'That is the rate, and it is why the problem looks like a hidden number that must fit a rate. It is not the words that say what the rate is a rate of.' },
      { text: 'The model is 30 cm long', note: 'That is the number the rate is scaled to. It is a fact the answer depends on, and not the words that show what the problem is about.' },
      { text: 'How long is the real locomotive?', note: 'That is the question. The words that say what the rate is a rate of come in the first sentence.' }
    ] },

  /* ---------- The check after the question card ---------- */
  { id: 'gt-loan', use: 'check', tier: 'clean', setting: 'money', topic: 'a loan paid back each month',
    text: 'Ines owes €900 on a loan and pays back €60 every month. How many months will it take her to pay off the whole loan?',
    route: { M1: ['growth'] },
    cues: { M1: ['pays back €60 every month', 'How many months will it take her to pay off the whole loan?'] },
    reason: { M1: 'One amount, what she owes, is followed through time: {cue:M1}. It goes down by the same number every month, and the question asks how long it takes to reach a target, nothing owed. No number is hidden for a calculation to fit, and no loop of days or hours is asked for.' } },

  /* ---------- The two worked problems ---------- */
  { id: 'gt-trio', use: 'teach', tier: 'clean', setting: 'work', topic: 'a trio picked from a choir', name: 'The trio',
    text: 'The school choir has 9 members. The teacher will pick 3 of them to sing a trio, and the order they stand in does not matter. How many different trios can she pick?',
    route: { M1: ['chance'] },
    cues: { M1: ['pick 3 of them to sing a trio', 'How many different trios can she pick?'] } },

  { id: 'gt-bed', use: 'teach', tier: 'misleading', setting: 'home', topic: 'edging for a triangular flower bed', name: 'The flower bed',
    also: ['unknown'],
    text: 'A gardener is edging a triangular flower bed. Two of its sides are 3.0 m and 4.0 m long, and they meet at a square corner. Edging costs €5 for each metre. How long is the third side?',
    route: { M1: ['shape'] },
    cues: { M1: ['Two of its sides are 3.0 m and 4.0 m long, and they meet at a square corner', 'How long is the third side?'] } }
]);

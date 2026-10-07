// Basic Math, Unit One: fresh problems held back for later days, part one (the first three kinds; lesson standard E9, V44).
// One for each kind. A kind that is due comes back as a problem the learner has not
// seen, beside a problem of the kind they most often take it for. Field guide: see u1.cases-drill-1.js.
// These are also part of the bank that later units draw their earlier-unit items from.

FC.cases('math', 'u1', [

  /* ---------- how whole numbers split ---------- */

  { id: 'gt-ret-nurses', use: 'return', tier: 'varied', setting: 'work', topic: 'two nurses on a night schedule',
    text: 'Nurse Aisha works every 5th night and Nurse Ben every 8th night. Both are on duty tonight. After how many nights will they next both be on duty?',
    route: { M1: ['whole'] },
    cues: { M1: ['works every 5th night and Nurse Ben every 8th night', 'After how many nights will they next both be on duty?'] },
    reason: { M1: 'The two nurses each come back on a schedule of their own, and the question is when both are on duty again: {cue:M1}.' },
    not: { outcome: 'growth', why: 'The problem runs over nights, which can look like an amount followed through time. But no amount is changing: two things repeat, and the question is when they meet.' } },

  /* ---------- a number you are not told ---------- */
  { id: 'gt-ret-data', use: 'return', tier: 'clean', setting: 'money', topic: 'a mobile plan charged by the gigabyte',
    text: 'A mobile data plan costs a fixed $5 plus $2 for every gigabyte used. Ruth’s bill was $19. How many gigabytes did she use?',
    route: { M1: ['unknown'] },
    cues: { M1: ['a fixed $5 plus $2 for every gigabyte used', 'How many gigabytes did she use?'] },
    reason: { M1: 'The plan is a fixed $5 plus $2 for every gigabyte, the bill came to $19, and the number of gigabytes is left out: {cue:M1}.' },
    not: { outcome: 'growth', why: 'A fixed fee and a repeating price can look like an amount going up. But the price goes with each gigabyte, which you count, and nothing is followed as time passes.' } },

  /* ---------- an amount followed over time ---------- */
  { id: 'gt-ret-well', use: 'return', tier: 'clean', setting: 'home', topic: 'a well running low in the dry season',
    text: 'The water in Hira’s well is 90 cm deep and falls by 3 cm every day in the dry season. After how many days will it be 45 cm deep?',
    route: { M1: ['growth'] },
    cues: { M1: ['falls by 3 cm every day', 'After how many days will it be 45 cm deep?'] },
    reason: { M1: 'One amount, the depth of the water, is followed through time: {cue:M1}. It goes down by the same number every day, and the question asks how long until a target.' },
    not: { outcome: 'unknown', why: 'The number of days is left out and the facts fix it, which can look like a missing number. But the depth changes each day, and the question asks how long until a target.' } }
]);

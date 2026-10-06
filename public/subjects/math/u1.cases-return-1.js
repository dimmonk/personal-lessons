// Basic Math, Unit One: fresh problems held back for later days, part one (the first three kinds; lesson standard E9, V44).
// Three for each kind: one for each scheduled return. A kind that is due comes back as a problem the learner has not
// seen, beside a problem of the kind they most often take it for. Field guide: see u1.cases-drill-1.js.
// These are also part of the bank that later units draw their earlier-unit items from.

FC.cases('math', 'u1', [

  /* ---------- how whole numbers split ---------- */
  { id: 'gt-ret-albums', use: 'return', tier: 'clean', setting: 'home', topic: 'photos filling album pages',
    text: 'Wren has 187 photos. She wants to fill pages so that every page holds the same number of photos, with more than one page and more than one photo on each. Is it possible?',
    route: { M1: ['whole'] },
    cues: { M1: ['every page holds the same number of photos', 'Is it possible?'] },
    reason: { M1: 'The problem asks whether 187 photos can be shared evenly between pages: {cue:M1}. Nothing else is asked.' },
    not: { outcome: 'chance', why: 'Wren is putting photos on pages, but she is not choosing between different results. The question is only whether 187 can be shared out evenly.' },
    wouldChange: 'If the problem asked in how many different orders Wren could pin 4 photos along a wall, it would be {a:M1.chance}.' },

  { id: 'gt-ret-pencils', use: 'return', tier: 'varied', setting: 'work', topic: 'pencils shared between classes',
    text: 'A school buys 250 pencils and gives every one of its 9 classes the same number. The rest go to the office. How many pencils go to the office?',
    route: { M1: ['whole'] },
    cues: { M1: ['gives every one of its 9 classes the same number', 'How many pencils go to the office?'] },
    reason: { M1: 'A count of 250 is shared out equally among 9 classes, and the question asks what is left over: {cue:M1}.' },
    not: { outcome: 'chance', why: 'The problem has a count of pencils and 9 classes, and one number is asked for, which can look like counting different results. But nothing is chosen. The question is what is left when 250 is shared out equally.' },
    wouldChange: 'If the problem asked in how many different ways the 9 classes could line up for assembly, it would be {a:M1.chance}.' },

  { id: 'gt-ret-nurses', use: 'return', tier: 'varied', setting: 'work', topic: 'two nurses on a night schedule',
    text: 'Nurse Aisha works every 5th night and Nurse Ben every 8th night. Both are on duty tonight. After how many nights will they next both be on duty?',
    route: { M1: ['whole'] },
    cues: { M1: ['works every 5th night and Nurse Ben every 8th night', 'After how many nights will they next both be on duty?'] },
    reason: { M1: 'The two nurses each come back on a schedule of their own, and the question is when both are on duty on the same night again: {cue:M1}.' },
    not: { outcome: 'growth', why: 'The problem runs over nights, which can look like an amount followed through time. But no amount is changing: the two nurses are two repeats, and the question is when they meet.' },
    wouldChange: 'If the problem said Aisha’s pay rose by $20 for every night shift she worked and asked what she would earn after 15 nights, it would be {a:M1.growth}.' },

  /* ---------- a number you are not told ---------- */
  { id: 'gt-ret-data', use: 'return', tier: 'clean', setting: 'money', topic: 'a mobile plan charged by the gigabyte',
    text: 'A mobile data plan costs a fixed $5 plus $2 for every gigabyte used. Ruth’s bill was $19. How many gigabytes did she use?',
    route: { M1: ['unknown'] },
    cues: { M1: ['a fixed $5 plus $2 for every gigabyte used', 'How many gigabytes did she use?'] },
    reason: { M1: 'The problem gives a calculation, a fixed $5 plus $2 for every gigabyte, and the result it came to, and leaves out one number: {cue:M1}.' },
    not: { outcome: 'growth', why: 'The calculation has a fixed fee and a price that is repeated, which can look like an amount that goes up. But the price goes with each gigabyte, a thing you count, and nothing is followed as time passes.' },
    wouldChange: 'If the plan’s price went up by $2 every month, it would follow one amount through time, and it would be {a:M1.growth}.' },

  { id: 'gt-ret-printer', use: 'return', tier: 'varied', setting: 'work', topic: 'ink cartridges for an office printer',
    text: 'An office printer uses 8 ink cartridges for every 1,000 pages. The office plans to print 3,500 pages this term. How many cartridges will it need?',
    route: { M1: ['unknown'] },
    cues: { M1: ['uses 8 ink cartridges for every 1,000 pages', 'How many cartridges will it need?'] },
    reason: { M1: 'The problem gives a rate, 8 cartridges for every 1,000 pages, and a new number of pages to scale it to: {cue:M1}. The cartridges are the number it leaves out.' },
    not: { outcome: 'growth', why: 'The word “term” mentions time, which can look like an amount followed through time. But the rate goes with each page, a thing you count, and no amount is followed as the term goes by.' },
    wouldChange: 'If the problem said the office printed 200 more pages every month than the month before, it would follow one amount through time, and it would be {a:M1.growth}.' },

  { id: 'gt-ret-wheels', use: 'return', tier: 'varied', setting: 'home', topic: 'bicycles and tricycles from a wheel count',
    text: 'Ola counts 14 bicycles and tricycles in the shed. Together they have 31 wheels. How many bicycles and how many tricycles are there?',
    route: { M1: ['unknown'] },
    cues: { M1: ['14 bicycles and tricycles in the shed. Together they have 31 wheels', 'How many bicycles and how many tricycles are there?'] },
    reason: { M1: 'The bicycles and the tricycles are not counted for you. What you are given is a count of vehicles and a count of wheels, and both have to come out right: {cue:M1}.' },
    not: { outcome: 'chance', why: 'The question says “how many” of two sorts of thing, which can look like counting different results. But nothing is a choice. Two facts fix exactly one answer.' },
    wouldChange: 'If the problem asked in how many different orders Ola could park 3 of the bicycles in a row, it would be {a:M1.chance}.' },

  /* ---------- an amount followed over time ---------- */
  { id: 'gt-ret-well', use: 'return', tier: 'clean', setting: 'home', topic: 'a well running low in the dry season',
    text: 'The water in Hira’s well is 90 cm deep and falls by 3 cm every day in the dry season. After how many days will it be 45 cm deep?',
    route: { M1: ['growth'] },
    cues: { M1: ['falls by 3 cm every day', 'After how many days will it be 45 cm deep?'] },
    reason: { M1: 'One amount, the depth of the water, is followed through time: {cue:M1}. It goes down by the same number every day, and the question asks how long it takes to reach a target.' },
    not: { outcome: 'unknown', why: 'The number of days is the number the problem leaves out, and the facts fix it, which can make it look like a hidden number. But the facts are an amount that changes each day, and the question asks how long until a target.' },
    wouldChange: 'If the problem asked on which day of the week the well would reach 45 cm, given that it started to fall on a Monday, the question would end on a loop of 7, and it would be {a:M1.whole}.' },

  { id: 'gt-ret-algae', use: 'return', tier: 'varied', setting: 'leisure', topic: 'algae spreading across a lake',
    text: 'Algae covers 2 square meters of a lake, and its area grows by 10% every day. How much of the lake will it cover after 5 days?',
    route: { M1: ['growth'] },
    cues: { M1: ['its area grows by 10% every day', 'How much of the lake will it cover after 5 days?'] },
    reason: { M1: 'One amount, the area the algae covers, is followed through time: {cue:M1}. It is multiplied by the same number every day, and the question asks what it will be at a given time.' },
    not: { outcome: 'unknown', why: 'There is a percentage and a number the problem leaves out, which can look like a hidden number that must fit a rate. But the percentage goes with each day, so it describes an amount changing as time passes.' },
    wouldChange: 'If the problem asked how many of 12 equal buckets could be filled from 50 liters of lake water, with how much left over, it would be {a:M1.whole}.' }
]);

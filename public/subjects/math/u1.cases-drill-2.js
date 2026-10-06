// Basic Math, Unit One: drill problems, second stage (the key's first question on mixed problems: clean, then varied,
// then problems whose story misleads). Field guide: see u1.cases-drill-1.js.
// echo names a teaching case of a DIFFERENT kind whose story this one is built to bring back, so that the second look
// ("does it look like a case you know?") is practiced where the likeness points the wrong way.
// also lists an answer the problem shows as well as its own, which loses to its own by a tie-break in the key.
// miss holds an authored line for one particular wrong answer, where the line built from the key would not do.

FC.cases('math', 'u1', [

  /* ---------- clean ---------- */
  { id: 'gt-beadbags', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'identical gift bags',
    text: 'Mina is making identical gift bags. She has 48 beads and 36 buttons, and every bag must hold the same number of beads and the same number of buttons, with none left over. What is the largest number of bags she can make?',
    route: { M1: ['whole'] },
    cues: { M1: ['every bag must hold the same number of beads and the same number of buttons, with none left over', 'What is the largest number of bags she can make?'] },
    reason: { M1: 'The beads, 48, and the buttons, 36, must each be shared evenly between the bags, and the question asks for the greatest number of bags that makes that work: {cue:M1}.' },
    not: { outcome: 'chance', why: 'The problem asks about a count of bags, which can look like counting ways. But nothing is chosen. The question is how two numbers split into equal groups.' },
    wouldChange: 'If the problem asked in how many different ways Mina could choose 3 of her 48 beads, it would be {a:M1.chance}.' },

  { id: 'gt-band', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a band walking on stage',
    text: 'The 5 members of a band are deciding the order in which they will walk on stage. In how many different orders can they walk on?',
    route: { M1: ['chance'] },
    cues: { M1: ['In how many different orders can they walk on?'] },
    reason: { M1: 'The question counts the different results of a choice, the different orders: {cue:M1}. The 5 only says how many things there are to put in order.' },
    not: { outcome: 'whole', why: 'Five is a whole number, and the band is one fixed group, but nothing is split into equal groups. Each different order is a different result.' },
    wouldChange: 'If the problem asked whether the 5 members could be split into equal teams for a game, with none left over, it would be {a:M1.whole}.' },

  { id: 'gt-smoothie', use: 'drill', tier: 'clean', setting: 'cooking', topic: 'a juice bar price rule',
    text: 'The juice bar prices every smoothie by a rule: price = $2 plus $0.50 for each extra fruit. Cora’s smoothie cost $4.50. How many extra fruits did she add?',
    route: { M1: ['unknown'] },
    cues: { M1: ['price = $2 plus $0.50 for each extra fruit', 'How many extra fruits did she add?'] },
    reason: { M1: 'The problem gives a {t:formula}, a fixed $2 plus $0.50 for each extra fruit, and the result it came to, and it leaves out one number: {cue:M1}. The price goes with each fruit, a thing you count, and not with each hour or year.' },
    not: { outcome: 'growth', why: 'The calculation has a fixed fee and a price that is repeated, which can look like an amount that goes up. But what the price goes with is each fruit, and nothing is followed as time passes.' },
    wouldChange: 'If the price went up by $0.50 every month, one amount would be followed through time, and it would be {a:M1.growth}.' },

  { id: 'gt-laptop', use: 'drill', tier: 'clean', setting: 'money', topic: 'a laptop losing value',
    text: 'A new laptop costs $900. It loses 20% of its value every year. What will it be worth after 3 years?',
    route: { M1: ['growth'] },
    cues: { M1: ['It loses 20% of its value every year', 'What will it be worth after 3 years?'] },
    reason: { M1: 'One amount, the value of the laptop, is followed through time: {cue:M1}. It is multiplied by the same number every year, because each year it loses a share of what is left, and the question asks what it will be at a given time.' },
    not: { outcome: 'unknown', why: 'There is a percentage and a number the problem leaves out, which can look like a hidden number that must fit a rate. But the percentage goes with each year, so it describes an amount changing as time passes.' },
    wouldChange: 'If the problem asked what 20% of $900 is and nothing else, it would be a plain sum, and there would be nothing to sort.' },

  { id: 'gt-sail', use: 'drill', tier: 'clean', setting: 'travel', topic: 'the sail of a small boat',
    text: 'The sail of a small boat is a triangle with a square corner. Its mast side is 4 m long and its bottom edge is 3 m long. How long is its slanting edge?',
    route: { M1: ['shape'] },
    cues: { M1: ['Its mast side is 4 m long and its bottom edge is 3 m long', 'How long is its slanting edge?'] },
    reason: { M1: 'The sail is a {t:righttriangle}, the problem gives two of its sides, and it asks for the third: {cue:M1}.' },
    not: { outcome: 'unknown', why: 'The problem leaves out one number, a length, which can look like a hidden number. But the facts are two sides of a triangle with a square corner, and not a calculation, a rate or totals.' },
    wouldChange: 'If the problem gave the sail’s area and its base and asked for its height, there would be no square corner to use, and it would be {a:M1.unknown}.' },

  /* ---------- varied ---------- */
  { id: 'gt-passport', use: 'drill', tier: 'varied', setting: 'travel', topic: 'a passport ready in 45 days',
    text: 'It is Tuesday today. Zoran’s new passport will be ready in 45 days. On which day of the week will it be ready?',
    route: { M1: ['whole'] },
    cues: { M1: ['will be ready in 45 days', 'On which day of the week will it be ready?'] },
    reason: { M1: 'The question ends on a day of the week: {cue:M1}. The days of a week go round a loop of 7, so the problem asks where a count of 45 days ends on that loop.' },
    not: { outcome: 'growth', why: 'The problem runs over days, which can look like an amount followed through time. But no amount is changing: there is only a count of days and a loop of 7.' },
    wouldChange: 'If the passport fee grew by $2 for every day it is late, and the problem asked what it would cost after 45 days late, one price would be followed through the days, and the answer would be {a:M1.growth}.' },

  { id: 'gt-runner', use: 'drill', tier: 'varied', setting: 'health', topic: 'training for a long run',
    text: 'Anouk is training for a 20 km run. She ran 5 km today, and she adds 1 km to her daily run every day. In how many days will her daily run reach 20 km?',
    route: { M1: ['growth'] },
    cues: { M1: ['adds 1 km to her daily run every day', 'In how many days will her daily run reach 20 km?'] },
    reason: { M1: 'One amount, the length of her daily run, is followed through time: {cue:M1}. It goes up by the same number every day, and the question asks how long it takes to reach a target.' },
    not: { outcome: 'whole', why: 'The problem is full of whole numbers and days, which can look like counts that fit together. But the question is about an amount changing as time passes, and not about equal groups, leftovers or repeats meeting.' },
    wouldChange: 'If the problem asked on which day of the week her run would reach 20 km, the question would end on a loop of 7, and it would be {a:M1.whole}.' },

  { id: 'gt-noshow', use: 'drill', tier: 'varied', setting: 'work', topic: 'bookings that do not turn up',
    text: 'A restaurant takes online bookings. Each evening, 1 booking in 8 is a no-show. Tonight there are 6 bookings. How likely is it that at least one guest will not turn up?',
    route: { M1: ['chance'] },
    cues: { M1: ['1 booking in 8 is a no-show', 'How likely is it that at least one guest will not turn up?'] },
    reason: { M1: 'The problem gives a risk for every booking and asks how likely it is that one or more guests fail to turn up: {cue:M1}.' },
    not: { outcome: 'unknown', why: 'The problem gives a rate, 1 booking in 8, and a number of bookings, and it can look like a rate to scale. But the question asks how likely something is, and a rate scaled would give a count.' },
    wouldChange: 'If the problem said the number of no-shows rose by 2 every month and asked how many there would be in a year, it would follow one amount through time, and it would be {a:M1.growth}.' },

  { id: 'gt-ham', use: 'drill', tier: 'varied', setting: 'shopping', topic: 'ham bought for a set sum',
    text: 'A deli sells ham at $18 for each kilogram. Carl wants to spend exactly $7.20. How many grams of ham can he buy?',
    route: { M1: ['unknown'] },
    cues: { M1: ['sells ham at $18 for each kilogram', 'How many grams of ham can he buy?'] },
    reason: { M1: 'The problem gives a rate, $18 for each kilogram, and an amount of money to scale it to, and the weight is the number it leaves out: {cue:M1}. The rate goes with each kilogram, a thing you weigh, and not with each hour or year.' },
    not: { outcome: 'growth', why: 'There is a price that is repeated for each kilogram, which can look like an amount that goes up. But nothing is followed as time passes.' },
    wouldChange: 'If the ham cost $18 a kilogram now and went up by $1 every month, and the problem asked what it would cost in a year, it would be {a:M1.growth}.' },

  { id: 'gt-duck', use: 'drill', tier: 'varied', setting: 'shopping', topic: 'a giant copy of a rubber duck',
    text: 'A toy company makes a giant version of its 5 cm rubber duck. The giant duck is exactly the same shape and 4 times as tall. How many times more rubber does the giant duck need?',
    route: { M1: ['shape'] },
    cues: { M1: ['exactly the same shape and 4 times as tall', 'How many times more rubber does the giant duck need?'] },
    reason: { M1: 'There are two things of exactly the same shape at different sizes, and the question asks how many times more rubber, which is a volume: {cue:M1}.' },
    not: { outcome: 'unknown', why: '“4 times as tall” can look like a rate to scale, with a number left out. But the two ducks are copies, and the question compares how much material each holds.' },
    wouldChange: 'If the problem asked in how many ways 4 different ducks could be lined up on a shelf, it would be {a:M1.chance}.' }
]);

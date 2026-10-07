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
    reason: { M1: 'The 48 beads and the 36 buttons must each be shared evenly between the bags, and the question asks for the most bags that works: {cue:M1}.' },
    not: { outcome: 'chance', why: 'The problem asks about a count of bags, which can look like counting ways. But nothing is chosen: the question is how two numbers split into equal groups.' } },

  { id: 'gt-band', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a band walking on stage',
    text: 'The 5 members of a band are deciding the order in which they will walk on stage. In how many different orders can they walk on?',
    route: { M1: ['chance'] },
    cues: { M1: ['In how many different orders can they walk on?'] },
    reason: { M1: 'The question counts the different orders the band can walk on: {cue:M1}. The 5 only says how many members there are to put in order.' },
    not: { outcome: 'whole', why: 'Five is a whole number, but nothing is split into equal groups. Each different order is a different result.' } },

  { id: 'gt-smoothie', use: 'drill', tier: 'clean', setting: 'cooking', topic: 'a juice bar price rule',
    text: 'The juice bar prices every smoothie by a rule: price = $2 plus $0.50 for each extra fruit. Cora’s smoothie cost $4.50. How many extra fruits did she add?',
    route: { M1: ['unknown'] },
    cues: { M1: ['price = $2 plus $0.50 for each extra fruit', 'How many extra fruits did she add?'] },
    reason: { M1: 'The price is a {t:formula}, a fixed $2 plus $0.50 for each extra fruit, and the question is how many fruits: {cue:M1}. The price goes with each fruit, which you count, not with each hour or year.' },
    not: { outcome: 'growth', why: 'A fixed fee and a repeating price can look like an amount going up. But the price goes with each fruit, and nothing is followed as time passes.' } },

  { id: 'gt-sail', use: 'drill', tier: 'clean', setting: 'travel', topic: 'the sail of a small boat',
    text: 'The sail of a small boat is a triangle with a square corner. Its mast side is 4 m long and its bottom edge is 3 m long. How long is its slanting edge?',
    route: { M1: ['shape'] },
    cues: { M1: ['Its mast side is 4 m long and its bottom edge is 3 m long', 'How long is its slanting edge?'] },
    reason: { M1: 'The sail is a {t:righttriangle}, two of its sides are given, and the third is asked for: {cue:M1}.' },
    not: { outcome: 'unknown', why: 'One length is left out, which can look like a missing number. But the facts are two sides of a triangle with a square corner, not a calculation, a rate or totals.' } },

  /* ---------- varied ---------- */
  { id: 'gt-passport', use: 'drill', tier: 'varied', setting: 'travel', topic: 'a passport ready in 45 days',
    text: 'It is Tuesday today. Zoran’s new passport will be ready in 45 days. On which day of the week will it be ready?',
    route: { M1: ['whole'] },
    cues: { M1: ['will be ready in 45 days', 'On which day of the week will it be ready?'] },
    reason: { M1: 'The question ends on a day of the week: {cue:M1}. Days of the week go round a loop of 7, so the problem asks where a count of 45 days ends on that loop.' },
    not: { outcome: 'growth', why: 'The problem runs over days, which can look like an amount followed through time. But no amount is changing: there is only a count of days and a loop of 7.' } },

  { id: 'gt-runner', use: 'drill', tier: 'varied', setting: 'health', topic: 'training for a long run',
    text: 'Anouk is training for a 20 km run. She ran 5 km today, and she adds 1 km to her daily run every day. In how many days will her daily run reach 20 km?',
    route: { M1: ['growth'] },
    cues: { M1: ['adds 1 km to her daily run every day', 'In how many days will her daily run reach 20 km?'] },
    reason: { M1: 'One amount, the length of her daily run, is followed through time: {cue:M1}. It goes up by the same number every day, and the question asks how long until a target.' },
    not: { outcome: 'whole', why: 'The problem is full of whole numbers and days, which can look like counts that fit together. But the question is how an amount changes as time passes, not about equal groups, leftovers or repeats meeting.' } },

  { id: 'gt-noshow', use: 'drill', tier: 'varied', setting: 'work', topic: 'bookings that do not turn up',
    text: 'A restaurant takes online bookings. Each evening, 1 booking in 8 is a no-show. Tonight there are 6 bookings. How likely is it that at least one guest will not turn up?',
    route: { M1: ['chance'] },
    cues: { M1: ['1 booking in 8 is a no-show', 'How likely is it that at least one guest will not turn up?'] },
    reason: { M1: 'The problem gives a risk for each booking and asks how likely it is that one or more guests will not turn up: {cue:M1}.' },
    not: { outcome: 'unknown', why: 'There is a rate, 1 booking in 8, and a number of bookings, which can look like a rate to scale. But the question asks how likely something is, and scaling a rate would give a count.' } }
]);

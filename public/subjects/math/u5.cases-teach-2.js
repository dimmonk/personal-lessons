// Basic Math, Unit Five: problems shown inside cards, part two (the last two kinds, and the problems on the look-alike cards).
// Each look-alike pair shares a story, and often the same numbers, and differs only in what the problem asks or in how the picks are made.
// A look-alike card shows one problem from each kind of its pair, so these come in pairs; Case A is the first of each pair.

FC.cases('math', 'u5', [

  /* ---------- The fourth kind: the chance that at least one of several things happens ---------- */
  { id: 'm5-wd-coin', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a coin flipped in a game', name: 'The coin game', outcome: 'complement',
    text: 'A game is won if a fair coin lands heads at least once in 3 flips. Each flip has a chance of 0.5 of landing heads, and one flip does not change the next. How likely is it that the game is won?',
    route: { M1: ['chance'], C1: ['atleast'] },
    cues: { M1: ['How likely is it that the game is won?'], C1: ['at least once in 3 flips'] } },

  { id: 'm5-wd-tyres', use: 'teach', tier: 'clean', setting: 'travel', topic: 'two bike tyres on a long ride', name: 'The two tyres', outcome: 'complement',
    text: 'A cyclist’s two tyres each have a 10% chance of getting a puncture on a long ride, and a puncture in one does not change the chance for the other. How likely is it that at least one tyre gets a puncture?',
    route: { M1: ['chance'], C1: ['atleast'] },
    cues: { M1: ['How likely is it that at least one tyre gets a puncture?'], C1: ['at least one tyre gets a puncture'] },
    segments: [
      { text: 'A cyclist’s two tyres each have a 10% chance of getting a puncture on a long ride, and a puncture in one does not change the chance for the other.', note: 'That gives the chance for each tyre, and it matters. But you are asked for the words that say what has to be found about the two, and those come in the question.' },
      { text: 'How likely is it that at least one tyre gets a puncture?' }
    ] },

  { id: 'm5-wd-ambulance', use: 'check', tier: 'clean', setting: 'health', topic: 'two ambulances in a town', outcome: 'complement',
    text: 'A town has 2 ambulances. Each one is out of action on 5% of days, and the two are separate: one being out of action does not change the chance for the other. How likely is it that at least one ambulance is out of action on a given day?',
    route: { M1: ['chance'], C1: ['atleast'] },
    cues: { M1: ['How likely is it that at least one ambulance is out of action on a given day?'], C1: ['at least one ambulance is out of action on a given day'] },
    segments: [
      { text: 'A town has 2 ambulances.', note: 'That says how many separate things there are. It does not say what has to be found about them.' },
      { text: 'Each one is out of action on 5% of days, and the two are separate: one being out of action does not change the chance for the other.', note: 'That gives the chance for each, and says that they are separate. It does not say what has to be found about them.' },
      { text: 'How likely is it that at least one ambulance is out of action on a given day?' }
    ],
    reason: { C1: 'The words {cue:C1} give the chance for each of 2 separate ambulances and ask how likely it is that at least one of them is out of action. That is {a:C1.atleast}.' } },

  /* ---------- The fifth kind: how far to trust a test result ---------- */
  { id: 'm5-wd-clinic', use: 'teach', tier: 'clean', setting: 'health', topic: 'a skin test in a village', name: 'The village clinic', outcome: 'baserate',
    text: 'In a village of 1,000 people, 1 person in 50 has a skin condition. A test shows the condition in 90% of the people who have it, and wrongly shows it in 5% of the people who do not. A person’s test shows the condition. How likely is it that the person has it?',
    route: { M1: ['chance'], C1: ['test'] },
    cues: { M1: ['How likely is it that the person has it?'], C1: ['A test shows the condition in 90% of the people who have it, and wrongly shows it in 5% of the people who do not'] } },

  { id: 'm5-wd-scanner', use: 'teach', tier: 'clean', setting: 'travel', topic: 'a bag scanner at a stadium door', name: 'The stadium scanner', outcome: 'baserate',
    text: 'A scanner at a stadium door has flagged a bag. 1 bag in 200 holds a banned item. The scanner flags 98 of every 100 bags that hold one, and 3 of every 100 that do not. How likely is it that the flagged bag holds a banned item?',
    route: { M1: ['chance'], C1: ['test'] },
    cues: { M1: ['How likely is it that the flagged bag holds a banned item?'], C1: ['flags 98 of every 100 bags that hold one, and 3 of every 100 that do not'] },
    segments: [
      { text: 'A scanner at a stadium door has flagged a bag.', note: 'That says a result has come in. It does not say how often the scanner is right or wrong.' },
      { text: '1 bag in 200 holds a banned item.', note: 'That says how rare the thing is, and it matters. But the words that say how often the scanner is right and wrong come next.' },
      { text: 'The scanner flags 98 of every 100 bags that hold one, and 3 of every 100 that do not.' },
      { text: 'How likely is it that the flagged bag holds a banned item?', note: 'That is the question. The words that say how often the scanner is right and wrong come before it.' }
    ] },

  { id: 'm5-wd-alarm', use: 'check', tier: 'clean', setting: 'building', topic: 'an alarm sensor that rings', outcome: 'baserate',
    text: 'A building’s alarm sensor has sounded. A real fire hazard is present on 1 morning in 2,000. The sensor rings on 99 of every 100 mornings with a hazard, and also on 2 of every 100 mornings without one. How likely is it that the ring means a real hazard?',
    route: { M1: ['chance'], C1: ['test'] },
    cues: { M1: ['How likely is it that the ring means a real hazard?'], C1: ['rings on 99 of every 100 mornings with a hazard, and also on 2 of every 100 mornings without one'] },
    segments: [
      { text: 'A building’s alarm sensor has sounded.', note: 'That says a result has come in. It does not say how often the sensor is right or wrong.' },
      { text: 'A real fire hazard is present on 1 morning in 2,000.', note: 'That says how rare the thing is, and it matters. But the words that say how often the sensor is right and wrong come next.' },
      { text: 'The sensor rings on 99 of every 100 mornings with a hazard, and also on 2 of every 100 mornings without one.' },
      { text: 'How likely is it that the ring means a real hazard?', note: 'That is the question. The words that say how often the sensor is right and wrong come before it.' }
    ],
    reason: { C1: 'The words {cue:C1} say how often the sensor is right and wrong, after it has sounded and when a real hazard is rare. That is a result to be read, and the question is how far to trust it, which is {a:C1.test}.' } },

  /* ---------- The question that tells the five apart, asked once all five are met ---------- */
  { id: 'm5-wd-songs', use: 'check', tier: 'clean', setting: 'leisure', topic: 'songs in a running order', outcome: 'perm',
    text: 'A radio presenter picks 4 of her 10 new songs and plays them one after another, in an order she fixes in advance. How many different running orders are possible?',
    route: { M1: ['chance'], C1: ['order'] },
    cues: { M1: ['How many different running orders are possible?'], C1: ['plays them one after another, in an order she fixes in advance'] },
    reason: { C1: 'The words {cue:C1} pick 4 songs from one group of 10, one after another, and fix the order as part of the result. Each song played is no longer available, and a different order is a different running order. That is {a:C1.order}.' } },

  /* ---------- The look-alike pairs ---------- */
  { id: 'm5-la-roles-mp', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'club jobs that can be held twice', outcome: 'multprin',
    text: 'A club of 6 members is to fill 3 jobs: president, secretary and treasurer. The same member may hold more than one job. In how many different ways can the jobs be filled?',
    route: { M1: ['chance'], C1: ['lists'] },
    cues: { M1: ['In how many different ways can the jobs be filled?'], C1: ['The same member may hold more than one job'] } },
  { id: 'm5-la-roles-pe', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'club jobs that cannot be held twice', outcome: 'perm',
    text: 'A club of 6 members is to fill 3 jobs: president, secretary and treasurer. No member may hold more than one job. In how many different ways can the jobs be filled?',
    route: { M1: ['chance'], C1: ['order'] },
    cues: { M1: ['In how many different ways can the jobs be filled?'], C1: ['No member may hold more than one job'] } },

  { id: 'm5-la-window-pe', use: 'teach', tier: 'clean', setting: 'cooking', topic: 'pastries in a row in a window', outcome: 'perm',
    text: 'A café owner has 6 pastries and puts 3 of them in a row in the window, from left to right. How many different rows can she make?',
    route: { M1: ['chance'], C1: ['order'] },
    cues: { M1: ['How many different rows can she make?'], C1: ['puts 3 of them in a row in the window, from left to right'] } },
  { id: 'm5-la-window-co', use: 'teach', tier: 'clean', setting: 'cooking', topic: 'pastries in a box', outcome: 'comb',
    text: 'A café owner has 6 pastries and puts 3 of them in a box. The box is the same whichever pastry goes in first. How many different boxes can she make?',
    route: { M1: ['chance'], C1: ['group'] },
    cues: { M1: ['How many different boxes can she make?'], C1: ['The box is the same whichever pastry goes in first'] } },

  { id: 'm5-la-cones-mp', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'ice cream flavour and cone', outcome: 'multprin',
    text: 'An ice-cream stall has 6 flavours and 3 kinds of cone. A customer picks one flavour and one cone. How many different ice creams can the stall sell?',
    route: { M1: ['chance'], C1: ['lists'] },
    cues: { M1: ['How many different ice creams can the stall sell?'], C1: ['picks one flavour and one cone'] } },
  { id: 'm5-la-cones-co', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'ice cream flavours in a tub', outcome: 'comb',
    text: 'An ice-cream stall has 6 flavours, and a customer picks 2 different flavours for a tub, in either order. How many different tubs can the stall sell?',
    route: { M1: ['chance'], C1: ['group'] },
    cues: { M1: ['How many different tubs can the stall sell?'], C1: ['picks 2 different flavours for a tub, in either order'] } },

  { id: 'm5-la-spinners-cm', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a game of spinners and a six', outcome: 'complement',
    text: 'A game uses 3 spinners, each with 6 equal sections numbered 1 to 6, and the spinners are separate. How likely is it that at least one spinner lands on a 6?',
    route: { M1: ['chance'], C1: ['atleast'] },
    cues: { M1: ['How likely is it that at least one spinner lands on a 6?'], C1: ['at least one spinner lands on a 6'] } },
  { id: 'm5-la-spinners-mp', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a game of spinners and a set of numbers', outcome: 'multprin',
    text: 'A game uses 3 spinners, each with 6 equal sections numbered 1 to 6, and the spinners are separate. How many different sets of three numbers can the spinners show?',
    route: { M1: ['chance'], C1: ['lists'] },
    cues: { M1: ['How many different sets of three numbers can the spinners show?'], C1: ['How many different sets of three numbers can the spinners show?'] } },

  { id: 'm5-la-sensors-cm', use: 'teach', tier: 'clean', setting: 'work', topic: 'sensors that catch a fault', outcome: 'complement',
    text: 'A machine has 3 separate sensors, and each one catches a fault with a chance of 90%. A fault happens. How likely is it that at least one sensor catches it?',
    route: { M1: ['chance'], C1: ['atleast'] },
    cues: { M1: ['How likely is it that at least one sensor catches it?'], C1: ['at least one sensor catches it'] } },
  { id: 'm5-la-sensors-br', use: 'teach', tier: 'clean', setting: 'work', topic: 'a sensor that flags a part', outcome: 'baserate',
    text: 'A machine has a sensor that flags faulty parts. 1 part in 100 is faulty. The sensor flags 90% of the faulty parts and also 5% of the sound ones. A part has been flagged. How likely is it that the part is faulty?',
    route: { M1: ['chance'], C1: ['test'] },
    cues: { M1: ['How likely is it that the part is faulty?'], C1: ['The sensor flags 90% of the faulty parts and also 5% of the sound ones'] } }
]);

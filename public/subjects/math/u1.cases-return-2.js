// Basic Math, Unit One: fresh problems held back for later days, part two (the last growth problem, and the fourth and
// fifth kinds). Field guide: see u1.cases-drill-1.js.

FC.cases('math', 'u1', [

  { id: 'gt-ret-buspass', use: 'return', tier: 'varied', setting: 'money', topic: 'a bus pass price cut once',
    text: 'A monthly bus pass cost €40 until January, when the price was cut to €34. It has stayed at €34 ever since. What will the pass cost a month next December?',
    route: { M1: ['growth'] },
    cues: { M1: ['It has stayed at €34 ever since', 'What will the pass cost a month next December?'] },
    reason: { M1: 'One amount, the price of the pass, is followed through time: {cue:M1}. It changed one time and has stayed put since, and the question asks what it will be at a later time.' },
    not: { outcome: 'unknown', why: 'The price in December is the number the problem leaves out, which can look like a hidden number. But nothing has to fit a calculation: the price changed once, and the question is what it is later.' },
    wouldChange: 'If the problem asked on which day of the week the price cut would take effect, 45 days after a Monday, the question would end on a loop of 7, and it would be {a:M1.whole}.' },

  /* ---------- counting ways, and chance ---------- */
  { id: 'gt-ret-canteen', use: 'return', tier: 'clean', setting: 'cooking', topic: 'lunches built from separate lists',
    text: 'A school canteen serves a lunch of one main out of 4, one side out of 3 and one drink out of 3. How many different lunches can a pupil choose?',
    route: { M1: ['chance'] },
    cues: { M1: ['one main out of 4, one side out of 3 and one drink out of 3', 'How many different lunches can a pupil choose?'] },
    reason: { M1: 'A main, a side and a drink are each picked from a list of their own, and the question asks how many different results that gives: {cue:M1}.' },
    not: { outcome: 'whole', why: 'The numbers 4, 3 and 3 are whole counts, but none of them is being split into equal groups. They are the sizes of the lists the choices are made from.' },
    wouldChange: 'If the problem asked whether the 36 lunches served in a day could be shared into equal trays with none left over, it would be {a:M1.whole}.' },

  { id: 'gt-ret-medals', use: 'return', tier: 'varied', setting: 'leisure', topic: 'medals for eight sprinters',
    text: 'Eight sprinters race in a final. How many different ways can the gold, silver and bronze medals be given out?',
    route: { M1: ['chance'] },
    cues: { M1: ['How many different ways can the gold, silver and bronze medals be given out?'] },
    reason: { M1: 'The question counts the different results of a choice, who gets which medal: {cue:M1}. The 8 only says how many runners there are to choose from.' },
    not: { outcome: 'whole', why: 'Eight is a whole number, and the runners are one fixed group, but nothing is split into equal groups. Each different way the medals can go is a different result.' },
    wouldChange: 'If the problem asked whether the 8 sprinters could be split into equal relay teams with none left over, it would be {a:M1.whole}.' },

  { id: 'gt-ret-alarms', use: 'return', tier: 'varied', setting: 'work', topic: 'fire alarms that may fail a test',
    text: 'A hotel fits each of its 4 fire alarms with a battery. Each alarm fails 1 time in 50 when tested, whatever the others do. How likely is it that at least one of the four fails the next test?',
    route: { M1: ['chance'] },
    cues: { M1: ['Each alarm fails 1 time in 50 when tested', 'How likely is it that at least one of the four fails the next test?'] },
    reason: { M1: 'The problem gives a risk for every alarm and asks how likely it is that one or more of the four fails: {cue:M1}.' },
    not: { outcome: 'unknown', why: 'There is a rate, 1 time in 50, and a number of alarms, which can look like a rate to scale. But the question asks how likely something is, and a rate scaled would give a count.' },
    wouldChange: 'If the problem said the number of failures rose by 1 every month and asked how many there would be in a year, it would follow one amount through time, and it would be {a:M1.growth}.' },

  /* ---------- shapes ---------- */
  { id: 'gt-ret-ship', use: 'return', tier: 'clean', setting: 'travel', topic: 'a ship sailing west and then south',
    text: 'A ship sails 24 km west and then 7 km south. How far in a straight line is it from its starting point?',
    route: { M1: ['shape'] },
    cues: { M1: ['sails 24 km west and then 7 km south', 'How far in a straight line is it from its starting point?'] },
    reason: { M1: 'West and south meet at a square corner, so the two legs and the straight line back make a {t:righttriangle}. The problem gives two of its sides and asks for the third: {cue:M1}.' },
    not: { outcome: 'unknown', why: 'One number is left out, a distance, which can look like a hidden number. But the facts are two sides of a triangle with a square corner, and not a calculation, a rate or totals.' },
    wouldChange: 'If the problem said the ship burns 3 litres of fuel for every 10 km and asked how much it used, it would be {a:M1.unknown}.' },

  { id: 'gt-ret-zipwire', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a zip wire from a tower',
    text: 'A zip wire runs from the top of a tower down to the ground. It is 40 m long and meets the ground at an angle of 30°. The tower stands at a square corner to the ground. How high is the top of the tower?',
    route: { M1: ['shape'] },
    cues: { M1: ['It is 40 m long and meets the ground at an angle of 30°', 'How high is the top of the tower?'] },
    reason: { M1: 'The tower, the ground and the wire make a {t:righttriangle}. The problem gives one side and one angle and asks for another side: {cue:M1}.' },
    not: { outcome: 'unknown', why: 'One number is left out, a height, which can look like a hidden number. But there is a triangle with a square corner, and the facts are a side and an angle of it.' },
    wouldChange: 'If the problem gave the tower’s height and asked how many 40 m wires could be cut from a 500 m reel, with how much left over, it would be {a:M1.whole}.' },

  { id: 'gt-ret-statue', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a statue copied from a clay model',
    text: 'A sculptor makes a statue that is an exact copy of her 15 cm clay model, but 2.4 m tall. The model’s hand is 2 cm long. How long is the statue’s hand?',
    route: { M1: ['shape'] },
    cues: { M1: ['an exact copy of her 15 cm clay model, but 2.4 m tall', 'How long is the statue’s hand?'] },
    reason: { M1: 'The statue and the model are exactly the same shape at different sizes, and the question asks for a length on one of them: {cue:M1}.' },
    not: { outcome: 'unknown', why: 'The sizes 15 cm and 2.4 m can look like a rate to scale, with a number left out. But the statue and the model are copies of each other, and a copy goes to the fifth kind.' },
    wouldChange: 'If the problem gave the cost of clay for each kilogram and asked what a 6 kg block costs, there would be a rate and no copy, and it would be {a:M1.unknown}.' }
]);

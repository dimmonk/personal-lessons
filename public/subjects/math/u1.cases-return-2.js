// Basic Math, Unit One: fresh problems held back for later days, part two (the fourth and fifth kinds). Field guide: see u1.cases-drill-1.js.

FC.cases('math', 'u1', [

  /* ---------- counting ways, and chance ---------- */

  { id: 'gt-ret-alarms', use: 'return', tier: 'varied', setting: 'work', topic: 'fire alarms that may fail a test',
    text: 'A hotel fits each of its 4 fire alarms with a battery. Each alarm fails 1 time in 50 when tested, whatever the others do. How likely is it that at least one of the four fails the next test?',
    route: { M1: ['chance'] },
    cues: { M1: ['Each alarm fails 1 time in 50 when tested', 'How likely is it that at least one of the four fails the next test?'] },
    reason: { M1: 'The problem gives a risk for every alarm and asks how likely it is that one or more of the four fails: {cue:M1}.' },
    not: { outcome: 'unknown', why: 'There is a rate, 1 time in 50, and a number of alarms, which can look like a rate to scale. But the question asks how likely something is, and a rate scaled would give a count.' } },

  /* ---------- shapes ---------- */

  { id: 'gt-ret-statue', use: 'return', tier: 'varied', setting: 'leisure', topic: 'a statue copied from a clay model',
    text: 'A sculptor makes a statue that is an exact copy of her 15 cm clay model, but 2.4 m tall. The model’s hand is 2 cm long. How long is the statue’s hand?',
    route: { M1: ['shape'] },
    cues: { M1: ['an exact copy of her 15 cm clay model, but 2.4 m tall', 'How long is the statue’s hand?'] },
    reason: { M1: 'The statue and the model are exactly the same shape at different sizes, and the question asks for a length on one of them: {cue:M1}.' },
    not: { outcome: 'unknown', why: 'The sizes 15 cm and 2.4 m can look like a rate to scale, with a number left out. But the statue and the model are copies of each other, and a copy goes to the fifth kind.' } }
]);

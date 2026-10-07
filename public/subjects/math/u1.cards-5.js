// Basic Math, Unit One, part five: the word "right triangle", then the fifth kind (shapes) and the exception that
// carries the key's second tie-break: a scale model, which comes with a rate.
// The pair unknown~shape is taught by that exception.

FC.cards('math', 'u1', [

  /* ---------- A word the fifth kind leans on ---------- */
  { id: 'term-righttriangle', kind: 'term', term: 'righttriangle',
    h: 'A triangle with a square corner',
    link: 'The last kind of problem leans on one word, so here it is first.',
    case: 'gt-sheet',
    plain: [
      'Look at a sheet of paper. Each of its four corners is a square corner, the kind you would use to check that a picture frame is straight. Cut the sheet along a straight line from one corner to the opposite corner, and each half is a triangle that keeps one of the sheet’s square corners.',
      'You see the same shape everywhere: a wall, the floor and a ladder leaning between them. Or two roads that cross at a square junction, with a path cut straight across from one road to the other.'
    ],
    after: [
      'The square corner is what matters. Once two of the sides are fixed, the third can only have one length.'
    ] },

  /* ---------- The fifth kind: shapes ---------- */
  { id: 'meet-shape', kind: 'meet', family: 'shape',
    link: 'Fifth: a problem about a triangle with a square corner, or about a copy of a shape at another size.',
    case: 'gt-hike', mark: 'M1',
    explain: [
      'The hiker walks 9 km north, then 12 km east. North and east meet at a square corner, so her two legs and the straight line back to the start make a {t:righttriangle}. Two sides are given, and the problem asks for the third: how far she is from where she started.',
      'This kind has a second half: two things of exactly the same shape at different sizes, such as a model and the real thing, a floor plan and the room, or two round pizzas. Then the problem asks for a length on one of them, or how much more area or volume the bigger one has.',
      'A shape in the problem is not enough. A garden 8 m long with an area of 40 square meters has no triangle and no copy, so asking for its width is a different kind of problem.'
    ],
    spot: [
      { do: 'Look for a square corner: north and east meet at one.', why: 'Two straight legs at a square corner make a triangle with the line back to the start.' },
      { do: 'Find the two sides you are given: 9 km and 12 km.', why: 'Two sides settle the third, so the problem only needs to give two.' },
      { do: 'Check what is asked: “How far in a straight line is she from where she started?”', why: 'In this kind you are always asked for a length, an area or a volume.' },
      { do: 'With no triangle, look for two things of exactly the same shape at different sizes.', why: 'A model and the real thing, or a plan and the room, count as one shape at two sizes.' }
    ],
    feature: { step: 'M1', option: 'shape' },
    name: 'This is {a:M1.shape}. A photo and its enlargement are one shape at two sizes: every length is made the same number of times longer.' },

  { id: 'check-shape', kind: 'check', after: 'shape',
    case: 'gt-tanks',
    ask: { type: 'phrase', step: 'M1', say: 'Which words show that there are two things of exactly the same shape at different sizes? Tap them.',
           answer: 'exactly the same shape but 3 m along each edge' } },

  /* ---------- The exception: a scale model, which comes with a rate ---------- */
  { id: 'exc-model', kind: 'exception', ledger: 'unknown~shape', looksLike: 'unknown', is: 'shape',
    h: 'A scale model, which comes with a rate',
    link: 'This looks like a rate with a number to find. But a model is also a copy of a shape.',
    case: 'gt-locomotive',
    setup: 'The problem gives a rate, 1 cm of model for every 40 cm of locomotive, a new number to scale it to, 30 cm, and a number to find. That is what {a:M1.unknown} looks like. But the answer here is {a:M1.shape}.',
    prompt: { kind: 'phrase', answer: 'a model of a locomotive' },
    because: [
      'The rate is real, but look at what it compares. It compares a model with the real locomotive, and those are exactly the same shape at different sizes. A map, a plan, a photo and its enlargement, and a shadow beside the thing that casts it work the same way: the rate only says how their sizes compare.',
      'So the problem shows both a rate and a copy of a shape at another size. When it shows both, the copy wins.'
    ],
    take: [
      'If the problem had only said that a recipe for 4 people has to stretch to 7, there would be a rate and no copy, and the answer would be {a:M1.unknown}.'
    ] }
]);

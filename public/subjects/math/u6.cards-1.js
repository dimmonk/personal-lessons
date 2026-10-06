// Basic Math, Unit Six, part one: the opening card, and the first kind (Pythagoras’ theorem: two sides of a right-angled triangle).
// Unit Six is a procedure unit (kind 'P', lesson standard A12): each kind of problem has a procedure, taught with a problem of the kind
// and a worked example with real numbers. The key has two questions here, and they cross: the first says what the problem gives,
// the second whether it asks how long something is or how much area or volume it has.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The worked examples (kind solved) are in u6.cards-solved-*.js. Their steps are computed, not typed: do not edit a number by hand.

FC.cards('math', 'u6', [

  { id: 'orient-shape', kind: 'orient',
    h: 'Four kinds of problem about shapes, and a procedure for each',
    canDo: 'After this unit you can take a problem about a length, an area or a volume, such as how long a strip must be to run across the corner of a door, how high a kite is flying, how tall a real bridge is when you have its model, or how much more a bigger can of paint holds, say which of four kinds it is, and then solve it with the procedure for that kind.',
    everyday: [
      'Picture a weekend of jobs at a house, with four questions coming up, every one of them about a shape. “A strip has to run across the corner of the new door, and the frame is 80 cm wide and 150 cm high: how long is the strip?” “A ski lift cable climbs at an angle of 30° and is 200 m long: how high does it go?” “The town has a model of a new bridge, with a tower 12 cm tall, and the real bridge will be 50 times longer than the model: how tall will the real tower be?” “A big stock pot is exactly the same shape as a small one, but 3 times as tall and 3 times as wide: how many times more soup does it hold?”',
      'The first question, which Unit One taught, gives the same answer to all four: {a:M1.shape}. But they are four different questions, with four different procedures, and a procedure for the wrong one still gives a number, with nothing in the number to say that it is wrong. So first work out what the problem gives you and what it asks about, and only then solve it.'
    ],
    add: [
      'Two words from earlier units are used here: a {t:righttriangle} is a triangle with a square corner, and the {t:sqroot} of a number is the number that multiplies by itself to give it. The arithmetic can be done on a calculator.'
    ],
    map: { branch: 'shape' } },

  /* ---------- The first kind: two sides of a right-angled triangle ---------- */
  { id: 'meet-pyth', kind: 'meet', outcome: 'pyth',
    link: 'The first kind of problem in this unit starts with a walk, and a triangle with a square corner.',
    case: 'm6-wd-hike', mark: 'S1',
    strip: [
      'There is a {t:righttriangle}: the hiker walks east and then north, which are at a right angle to each other, and the straight walk back closes the triangle.',
      'The problem gives the lengths of two of its sides, 3 km and 4 km, and no angle in degrees besides the square corner.',
      'The question asks how long the third side is, the straight walk back: a length.'
    ],
    explain: [
      'The answer is not 3 + 4 = 7. Walking 3 km east and then 4 km north is 7 km, but walking straight back is shorter, because a straight line is the shortest way between two points.',
      'The idea behind the procedure is about squares. Picture a square of floor tiles built on each of the three sides of the triangle, with the side as one edge of the square. On the 3 km side the square has 3 × 3 = 9 tiles. On the 4 km side it has 4 × 4 = 16 tiles. On the straight walk back it has as many tiles as the other two together, 9 + 16 = 25, and a square of 25 tiles has 5 tiles along each edge, because 5 × 5 = 25. So the straight walk back is 5 km. The longest side is always the one opposite the square corner.',
      'So the procedure is this. Multiply each side you are given by itself. Add the two results if you want the longest side, or take one away from the other if you are given the longest side. Then find the number that multiplies by itself to give what is left; the √ button on a calculator finds it.'
    ],
    feature: { step: 'S1', option: 'twosides' },
    name: 'A problem like this is {o:pyth}: the fact that, in a triangle with a square corner, the square on the longest side holds as many tiles as the squares on the two shorter sides together, used to find a side that is not given.' },

  { id: 'check-pyth', kind: 'check', after: 'pyth',
    case: 'm6-wd-tv',
    ask: { type: 'phrase', step: 'S1', say: 'Which words give the lengths of two sides of the triangle? Tap them.',
           answer: 'whose rectangular display is 48 cm high and 64 cm wide' } }
]);

// Basic Math, Unit Six, part one: the opening card, and the first type of problem (two sides of a right triangle).
// Unit Six is a procedure unit (kind 'P', lesson standard A12): each type of problem has its own steps, taught with a problem of the type
// and a worked example with real numbers. The key has two questions here, and they cross: the first says what the problem gives,
// the second whether it asks how long something is or how much area or volume it has.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// A meet card: the problem first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action and one
// short sentence of why), then the name (lesson standard section 20).
// The worked examples (kind solved) are in u6.cards-solved-*.js. Their steps are computed, not typed: do not edit a number by hand.

FC.cards('math', 'u6', [

  { id: 'orient-shape', kind: 'orient',
    h: 'Before you work out a length, area or volume, check which type of problem it is',
    canDo: 'Before you work out how long a strip must be to run across the corner of a door, how tall a real bridge is from its model, or how much more soup a bigger pot holds, check which of four types of problem it is. The wrong steps still give you a number, and nothing in the number tells you it is wrong.',
    everyday: [
      'A weekend of jobs at a house, with four questions, all about a shape. “A strip has to run across the corner of the new door, and the frame is 80 cm wide and 150 cm high: how long is the strip?” “A ski lift cable is 200 m long and climbs at an angle of 30°: how high does it go?” “The town has a model of a new bridge, with a tower 12 cm tall, and the real bridge will be 50 times longer: how tall will the real tower be?” “A big stock pot is exactly the same shape as a small one, but 3 times as tall and 3 times as wide: how many times more soup does it hold?”',
      'Each one has its own steps. Use the steps for the wrong one and you still get an answer, with nothing in it to say it is wrong. So find out what the problem gives you and what it asks for, then work it out.'
    ],
    add: [
      'Two words from earlier: a {t:righttriangle} has one square corner, like the corner of a page, and the {t:sqroot} of 25 is 5, because 5 × 5 = 25. Use a calculator for the arithmetic.'
    ],
    map: { branch: 'shape' } },

  /* ---------- The first type: two sides of a {t:righttriangle} ---------- */
  { id: 'meet-pyth', kind: 'meet', outcome: 'pyth',
    link: 'First type: you know two sides of a {t:righttriangle} and want the third.',
    case: 'm6-wd-hike', mark: 'S1',
    explain: [
      'The answer is not 3 + 4 = 7. That is how far she walks, and the straight way back is shorter.',
      'Here is why it works. Picture a square of floor tiles on each side of the triangle. On the 3 km side the square is 3 × 3 = 9 tiles. On the 4 km side it is 4 × 4 = 16 tiles. On the walk back it is 9 + 16 = 25 tiles, and a square of 25 tiles is 5 tiles along each edge, because 5 × 5 = 25. So the walk back is 5 km.',
      'So, to find the third side: multiply each side you know by itself, add the two results, then find the number that multiplies by itself to make the total. If you were given the longest side, take one result away from the other instead of adding. The √ button on a calculator does the last part.'
    ],
    spot: [
      { do: 'Find the {t:righttriangle}: the walk east and the walk north meet at a square corner, and the walk straight back closes it.', why: 'These steps only work when one corner is square.' },
      { do: 'Check what you are given: two sides, 3 km and 4 km, and no angle.', why: 'Two lengths and no angle is all these steps need.' },
      { do: 'Check what you are asked: how long the walk straight back is, the side nobody gave you.', why: 'It is a length, and it is the third side.' }
    ],
    feature: { step: 'S1', option: 'twosides' },
    name: 'A problem like this is {o:pyth}: two sides in, the third side out.' },

  { id: 'check-pyth', kind: 'check', after: 'pyth',
    case: 'm6-wd-tv',
    ask: { type: 'phrase', step: 'S1', say: 'Which words give the two sides you know? Tap them.',
           answer: 'whose rectangular display is 48 cm high and 64 cm wide' } }
]);

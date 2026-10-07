// Basic Math, Unit Six, part two: the second type (one side and one angle of a right triangle), and the look-alike
// card that sets it beside the first type. The worked example (kind solved) is in u6.cards-solved-1.js.
// This type needs three buttons on a calculator, and the unit has no card of its own for them, because the key declares no term for them.
// They are taught inside the card that introduces the type, after a problem that shows why an angle can stand in for a second side.

FC.cards('math', 'u6', [

  { id: 'meet-trig', kind: 'meet', outcome: 'trig',
    link: 'Second type: you know one side and an angle in degrees, instead of two sides.',
    case: 'm6-wd-skilift', mark: 'S1',
    explain: [
      'It looks like too little to go on. But in a {t:righttriangle}, one angle settles the shape, and then one length settles the size. A 30° slope always climbs half as far as the cable is long: 10 m of cable climbs 5 m, 100 m climbs 50 m, and 200 m climbs 100 m.',
      'First name the sides from the angle. The side opposite the angle is the one that does not touch it. The side next to the angle is the one that touches it and is not the longest. The longest side is always opposite the square corner.',
      'Your calculator keeps these fixed comparisons in three buttons, with the calculator set to degrees. Sin gives opposite ÷ longest: type 30 and you get 0.5, the half you just saw. Cos gives next to ÷ longest. Tan gives opposite ÷ next to.',
      'To find the missing side, use the button that joins the side you know and the side you want. Here the cable is the longest side and the height is opposite the angle, so use sin: 200 × sin 30° = 200 × 0.5 = 100 m.'
    ],
    spot: [
      { do: 'Find the {t:righttriangle}: the cable, the ground, and the height straight up from the ground.', why: 'The height meets level ground at a square corner.' },
      { do: 'Check what you are given: one side, the 200 m cable, and one angle, 30°.', why: 'The angle does the work of a second side.' },
      { do: 'Check what you are asked: how high the top station is, another side of the triangle.', why: 'It is a length, and you do not have it yet.' }
    ],
    feature: { step: 'S1', option: 'sideangle' },
    name: 'A problem like this is {o:trig}: one side and an angle in, another side out.' },

  { id: 'check-trig', kind: 'check', after: 'trig',
    case: 'm6-wd-hill',
    ask: { type: 'phrase', step: 'S1', say: 'Which words give one length and one angle in degrees? Tap them.',
           answer: 'The road is 500 m long and slopes up at an angle of 4° above level' } },

  /* ---------- The look-alike pair: two sides, or one side and an angle ---------- */
  { id: 'look-pyth-trig', kind: 'lookalike', ledger: 'pyth~trig',
    link: 'Both find a side of a {t:righttriangle}, and the same ramp can be given either way.',
    cases: ['m6-la-dock-pyth', 'm6-la-dock-trig'],
    instruction: 'Both problems are about the same ramp, and both ask how high the loading dock is. Compare one thing: what is given besides the length of the ramp?',
    prompt: { kind: 'which', option: 'S1.sideangle', answer: 'm6-la-dock-trig' },
    difference: [
      'Where the ramp ends 6 m from the foot of the wall, you have the ramp, 6.5 m, and one more length, 6 m. That is two sides and no angle: {a:S1.twosides}. The steps take the squares away: 6.5 × 6.5 = 42.25, 6 × 6 = 36, and 42.25 − 36 = 6.25, so the dock is 2.5 m high.',
      'Where the ramp rises at 21°, you have the ramp, 6.5 m, and an angle. That is one side and one angle: {a:S1.sideangle}. The steps use the sin button: 6.5 × sin 21° = 6.5 × 0.3584 = 2.33 m.',
      'The ramp, the dock and the question are the same. Only what is given besides the ramp changes: a second length, or an angle.'
    ] }
]);

// Basic Math, Unit Six, part two: the second kind (Trigonometry: one side and one angle of a right-angled triangle), and the look-alike
// card that sets it beside the first kind. The worked example (kind solved) is in u6.cards-solved-1.js.
// This kind needs three keys on a calculator, and the unit has no card of its own for them, because the key declares no term for them.
// They are taught inside the card that introduces the kind, after a case that shows why an angle can stand in for a second side.

FC.cards('math', 'u6', [

  { id: 'meet-trig', kind: 'meet', outcome: 'trig',
    link: 'The first kind of problem gave you two sides and no angle. The second kind is the other way round: you are given one side and an angle in degrees, and a triangle with a square corner again.',
    case: 'm6-wd-skilift', mark: 'S1',
    strip: [
      'There is a {t:righttriangle}: the cable, the ground, and the height of the top station above the bottom station. The height is measured straight up from level ground, so it meets the ground at a square corner.',
      'The problem gives the length of one side, the cable, 200 m, and one angle in degrees besides the square corner: 30°, between the cable and the ground.',
      'The question asks how long another side is, the height: a length.'
    ],
    explain: [
      'That looks like too little to find another side, and for a triangle with no square corner it would be. But in a triangle with a square corner, one angle besides the square corner settles the shape of the triangle, and once the shape is settled, one length settles the size.',
      'To see why, think about a slope of 30°. However long the cable is, a 30° slope always climbs half as much as the cable is long: 10 m of cable climb 5 m, 100 m climb 50 m, and 200 m climb 100 m. That comparison, one side divided by another, stays the same for every triangle with those angles, whatever its size.',
      'Calculators store these comparisons. There are three buttons, and each gives one comparison between two sides for any angle you type in, with the calculator set to degrees. The sin button gives the side opposite the angle divided by the longest side: type 30 and it gives 0.5, the half you have just seen. The cos button gives the side next to the angle divided by the longest side. The tan button gives the side opposite the angle divided by the side next to it. The three sides are always named from the angle. The side opposite the angle is the one that does not touch the angle. The side next to the angle is the one that touches it and is not the longest. The longest side is always the one opposite the square corner.',
      'So the procedure is this. Choose the button whose two sides are the side you know and the side you want, then use its comparison to find the missing side, by multiplying or by dividing. Here the cable is the longest side and the height is opposite the angle, so the button is sin, and the height is 200 × sin 30° = 200 × 0.5 = 100 m.'
    ],
    feature: { step: 'S1', option: 'sideangle' },
    name: 'A problem like this is {o:trig}: finding a side of a triangle with a square corner from one side and one angle, using the calculator button that joins the side you know to the side you want.' },

  { id: 'check-trig', kind: 'check', after: 'trig',
    case: 'm6-wd-hill',
    ask: { type: 'phrase', step: 'S1', say: 'Which words give one length and one angle in degrees? Tap them.',
           answer: 'The road is 500 m long and slopes up at an angle of 4° above level' } },

  /* ---------- The look-alike pair: two sides, or one side and an angle ---------- */
  { id: 'look-pyth-trig', kind: 'lookalike', ledger: 'pyth~trig',
    link: 'The first two kinds both find a side of a triangle with a square corner, and a story can be built so that either fits it, such as a ramp. This card puts them side by side.',
    cases: ['m6-la-dock-pyth', 'm6-la-dock-trig'],
    instruction: 'Both problems are about the same builder and the same ramp, and both ask how high the loading dock is. Compare one thing: what is given besides the length of the ramp?',
    prompt: { kind: 'which', option: 'S1.sideangle', answer: 'm6-la-dock-trig' },
    difference: [
      'In Case A the builder gives the ramp, 6.5 m long, and how far from the foot of the dock wall it ends, 6 m. Those are two sides of a triangle with a square corner, and no angle is given. The answer is {a:S1.twosides}, and the procedure takes the squares away: 6.5 × 6.5 = 42.25, 6 × 6 = 36, and 42.25 − 36 = 6.25, so the height is 2.5 m.',
      'In Case B the builder gives the same ramp, 6.5 m long, and the angle it rises at, 21°. That is one side and one angle, and no second side. The answer is {a:S1.sideangle}, and the procedure uses the sin button: 6.5 × sin 21° = 6.5 × 0.3584 = 2.33 m.',
      'The ramp, the dock and the question are the same in both. What differs is only what is given besides the ramp: a second length, or an angle in degrees.'
    ] }
]);

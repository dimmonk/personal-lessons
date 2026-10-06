// Basic Math, Unit Six, part two: the second kind (Trigonometry: one side and one angle of a right-angled triangle), and the look-alike
// card that sets it beside the first kind. The worked examples (kind solved) are in u6.cards-solved-*.js.
// This kind needs three keys on a calculator, and the unit has no card of its own for them, because the key declares no term for them.
// They are taught inside the card that introduces the kind, after a case that shows why an angle can stand in for a second side.

FC.cards('math', 'u6', [

  { id: 'meet-trig', kind: 'meet', outcome: 'trig',
    link: 'The first kind of problem gave you two sides and no angle. The second kind is the other way round: you are given one side and an angle in degrees, and a triangle with a square corner again.',
    case: 'm6-wd-skilift', mark: 'S1',
    strip: [
      'There is a {t:righttriangle}: the cable, the ground, and the height of the top station above the bottom station. The height is measured straight up from level ground, so it meets the ground at a square corner.',
      'The problem gives the length of one side, the cable, 200 m, and one angle in degrees besides the square corner: 30°, between the cable and the ground.',
      'The question asks how long another side is, the height: a length.',
      'A second side is not given, and none is needed: the angle takes its place.'
    ],
    explain: [
      'What you are shown is a triangle with a square corner, the length of one side, and one angle. That looks like too little to find another side, and for a triangle with no square corner it would be. But in a triangle with a square corner, one angle besides the square corner settles the whole shape of the triangle, and once the shape is settled, one length settles the size.',
      'To see why, think about a slope of 30°. However long the cable is, a 30° slope always climbs half as much as the cable is long: 10 m of cable climb 5 m, 100 m climb 50 m, and 200 m climb 100 m. The angle fixes how long the side opposite the angle, the height, is compared with the longest side, the cable. That comparison, one side divided by another, stays the same for every triangle with those angles, whatever its size.',
      'Calculators store these comparisons. There are three buttons, and each gives one comparison between two sides for any angle you type in, with the calculator set to degrees. The sin button gives the side opposite the angle divided by the longest side: type 30 and it gives 0.5, the half you have just seen. The cos button gives the side next to the angle divided by the longest side. The tan button gives the side opposite the angle divided by the side next to it. Here the three sides need names, and they are always named from the angle. The side opposite the angle is the one that does not touch the angle. The side next to the angle is the one that touches it and is not the longest. The longest side is always the one opposite the square corner.',
      'You can check what the buttons give with a triangle whose sides you know: 3, 4 and 5, which has a square corner. Take the angle between the sides of 4 and 5. It is about 37°. The side opposite it is 3, the side next to it is 4, and the longest side is 5. The sin button at 37° gives 0.6018, close to 3 ÷ 5 = 0.6. The cos button gives 0.7986, close to 4 ÷ 5 = 0.8. The tan button gives 0.7536, close to 3 ÷ 4 = 0.75. They are close and not equal because 37° is the angle to the nearest degree: the exact angle of the 3, 4, 5 triangle is about 36.87°.',
      'So the procedure rests on two ideas. First, the angle and a button do the work of the missing side: together they give the comparison between two sides. Second, you have to choose the button whose two sides are the side you know and the side you want, and then use the comparison to find the missing side, by multiplying or by dividing. Here the cable is the longest side and the height is opposite the angle, so the button is sin, and the height is 200 × sin 30° = 200 × 0.5 = 100 m. The two worked problems after this card show every step, and show both multiplying and dividing.',
      'Notice what decides the kind. It is not the size of the angle, or that a cable is involved. It is that the problem has a triangle with a square corner, gives the length of one side and one angle in degrees besides the square corner, and asks how long another side is.'
    ],
    feature: { step: 'S1', option: 'sideangle' },
    name: 'A problem like this is {o:trig}: finding a side of a triangle with a square corner from one side and one angle, using the calculator button that joins the side you know to the side you want.' },

  { id: 'again-trig', kind: 'again', outcome: 'trig',
    link: 'The ski lift gave you what to point to: {needs:trig}. Here is a second problem with a different story, a roof, in which the same thing is given. The button will be a different one, because the sides are different.',
    first: 'm6-wd-skilift', second: 'm6-wd-roof', step: 'S1',
    instruction: 'Find what the two problems share. Ignore the story (a ski lift, a roof) and ignore the numbers. Look at one thing only: which words give one length and one angle in degrees?',
    prompt: { kind: 'phrase', answer: 'The ridge is 4 m from the wall along level ground, and the roof slopes up at an angle of 30° above level ground' },
    shared: [
      'Both problems give one length and one angle in degrees, besides the square corner, and ask how long another side is. The ski lift gives the cable, 200 m, which is the longest side, and wants the height, which is opposite the angle. The roof gives 4 m along level ground, which is next to the angle, and wants the height of the ridge, which is opposite the angle.',
      'The sides are not the same in the two stories, so the button is not the same either: the lift joins the side opposite the angle and the longest side, which is the sin button, and the roof joins the side opposite the angle and the side next to it, which is the tan button. What is the same is what is given and what is asked, and that is what you point to.'
    ] },

  { id: 'portrait-trig', kind: 'portrait', outcome: 'trig',
    link: 'You know what to point to for {o:trig}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'A slope, a line of sight or a rope that makes an angle with level ground or with a wall: a ramp, a roof, a ladder, a kite string, a cable, the line from your eye to the top of a tower.',
      'One length, and one angle in degrees, usually the angle between the slope and the ground, or between your line of sight and the ground. The question asks for another length, often a height or a distance along the ground that is hard to measure directly.',
      'Often the longest side is the slope itself, but not always. If the problem says how far you stand from a tower and the angle you look up at, the length you have is next to the angle, and the longest side, your line of sight, is not in the problem at all.',
      'A calculator set to degrees, and one of its three buttons, is part of the working. The answer is almost never a whole number.'
    ],
    not: [
      'An angle on its own is not enough: there has to be one length too. Two lengths and no angle is the first kind of problem in this unit, where the lengths give the third side by squares.',
      'And a height found by comparing a thing with a copy of it, such as a model or a shadow, is not this kind, though it also finds a height that nobody can measure directly. There is no angle in degrees in it. It has two things of the same shape, with a length measured on both.'
    ],
    wild: ['"It slopes up at 30 degrees."', '"I stood 40 meters back and looked up at 35 degrees."', '"The ramp rises at 6 degrees."', '"The string makes a 40 degree angle with the ground."'],
    self: 'In your own life you meet this when someone describes how steep something is in degrees, when you wonder how tall a building is from how far back you stand, when a ladder, a ramp or a roof has to be set at a safe angle, and when a sign or a map gives a slope as an angle.',
    ask: '"Is there a triangle with a square corner, with one side given and one angle in degrees, and another side wanted?" If you can say yes, you are probably looking at this kind.' },

  { id: 'check-trig', kind: 'check', after: 'trig',
    case: 'm6-wd-hill',
    ask: { type: 'phrase', step: 'S1', say: 'Which words give one length and one angle in degrees? Tap them.',
           answer: 'The road is 500 m long and slopes up at an angle of 4° above level' } },

  { id: 'check-trig-last', kind: 'check', after: 'trig', case: 'm6-ck-trig-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-trig-whole', kind: 'check', after: 'trig', case: 'm6-ck-trig-whole', ask: { type: 'solve', solve: 'whole' } },

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

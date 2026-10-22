// Math, lesson 18: Refresher: powers, roots and log scales (part 18). Plan: docs/subjects/math/plan.md, Unit 6. A reminder, not the main method
// (research M32): four cards (order of operations and the left-to-right calculator, M33; powers of ten; square roots and irrational numbers; logs
// and log scales, M28), each the fact, when it is used, one worked example with a look-back, two quick questions (M31); then the cards mixed with
// lessons 16 and 17 (M17) and a check. Facts: M25 (6.EE.A.2c, 8.EE.A.1–4, 8.NS.A.1, HSF-LE.A.4), M26.
FC.lesson('math', {
  id: 'l18', part: '18', title: 'Powers, roots and log scales, a refresher', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, from the plan of 2026-10-22: a reminder of four school facts, not the main method.' }],
  why: [
    'A repair quote written as a formula, a part marked 4.7 × 10³ ohms, a square patio’s side from its area, a saw rated in decibels: school math, met on the job.',
    'Four reminders: each fact, one example, then two quick questions.'
  ],
  flow: [
    { title: 'The order of operations',
      show: [
        { kind: 'prose', text: [
          'A formula on a quote or in a manual is worked in a fixed order: powers first, then times and divide, then add and take away.',
          'So 45 + 30 × 2 is 45 + 60 = 105, not 75 × 2 = 150. And a power comes before a times: 6² × 0.5 is 6 × 6 × 0.5 = 18. On the calculator, xʸ means “to the power of”: 6 xʸ 2 is 6².',
          'The calculator here works each button as you press it, left to right, as simple calculators do (some phone calculators apply the order for you; this one does not). Type the times part first (30 × 2 + 45 =), or put it in the memory with M+.',
          'Look back: did every times happen before its plus?'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“Total = 45 + 30 × 2. Typed in as it reads, that is 150.”',
          'Typed straight into this calculator, it adds first. Times comes before plus: 105.'] }
      ] },
    { set: { items: [{ gen: 'g-order-quote', n: 1 }, { gen: 'g-order-power', n: 1 }], order: 'listed' } },
    { title: 'Powers of ten',
      show: [
        { kind: 'prose', text: [
          'Electronic parts and data sizes are written as a number times a power of ten: 4.7 × 10³ ohms, 2 × 10¹² bytes.',
          '10³ is 10 × 10 × 10 = 1,000, so 4.7 × 10³ = 4,700: the decimal point moves 3 places right. A minus power moves it left: 2.2 × 10⁻³ = 0.0022.',
          'Dividing: divide the front numbers and take the powers away. A 2 × 10¹² byte drive holds photos of 5 × 10⁶ bytes: 2 ÷ 5 = 0.4, and 12 − 6 = 6, so 0.4 × 10⁶ = 400,000 photos. On the calculator, the power first: 10 xʸ 6 × 2 ÷ 5 =.',
          'Look back: count the places the point moved.'] }
      ] },
    { set: { items: [{ gen: 'g-sci-read', n: 1 }, { gen: 'g-sci-divide', n: 1 }], order: 'listed' } },
    { title: 'Square roots, and numbers that never end',
      show: [
        { kind: 'prose', text: [
          'A square root undoes a square: it gives the side of a square from its area, √ on the calculator. A square patio of 150 square feet has sides of √150 = 12.25 ft. Look back: 12 × 12 = 144 and 13 × 13 = 169, so it is between 12 and 13.',
          'Most square roots never end and never repeat: √2 = 1.41421356… Numbers like that (π is another) are called irrational: no fraction is exactly equal to them. Use the √ button and round to what you can measure.',
          'A square’s diagonal is its side × √2. A square frame 36 inches a side takes a brace of 36 × 1.41421… = 50.91 inches.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“√2 is 1.4, close enough.”',
          'On a 36 inch frame, 1.4 gives 50.4 inches, half an inch short. Press √ on 2.'] }
      ] },
    { set: { items: [{ gen: 'g-sqrt-patio', n: 1 }, { gen: 'g-brace', n: 1 }], order: 'listed' } },
    { title: 'Logs and log scales',
      show: [
        { kind: 'prose', text: [
          'Decibels, earthquake magnitudes and pH are log scales: each step multiplies instead of adding.',
          'A log counts the tens multiplied: 1,000 = 10 × 10 × 10, so the log of 1,000 is 3. On a log scale a step of 1 is 10 times: a magnitude 6 quake swings the ground 10 times as far as a magnitude 5 (and lets out about 32 times the energy); pH 4 is 10 times as acid as pH 5.',
          'Decibels count in tenths of a step: each 10 decibels is 10 times the sound energy, and 3 decibels is about twice.',
          'So a difference of d on the scale is 10 xʸ d times; for decibels, 10 xʸ (d ÷ 10). A drill at 96 decibels against a sander at 82: 96 − 82 = 14, 14 ÷ 10 = 1.4, and 10 xʸ 1.4 = 25.12 times the sound energy.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“96 decibels is only a little more than 82.”',
          'On a log scale, 14 decibels more is about 25 times the sound energy.'] }
      ] },
    { set: { items: [{ gen: 'g-decibel', n: 1 }, { gen: 'g-quake', n: 1 }], order: 'listed' } },
    { set: { items: [{ gen: 'g-order-power', n: 1 }, { gen: 'g-sci-divide', n: 1 }, { gen: 'g-brace', n: 1 }, { gen: 'g-quake', n: 1 }, { gen: 'g-order-quote', n: 1 }, { gen: 'g-sqrt-patio', n: 1 }],
      order: 'shuffle', mix: { from: ['l16', 'l17'], share: 0.3 } } }
  ],
  check: {
    items: [{ gen: 'g-order-quote', n: 1 }, { gen: 'g-sci-read', n: 1 }, { gen: 'g-sqrt-patio', n: 1 }, { gen: 'g-decibel', n: 1 }, { gen: 'g-quake', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 4 } }, { slip: 'wild', max: 0 }]
  }
});

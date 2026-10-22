// Math, lesson 16: Refresher: circles and right triangles (part 16). Plan: docs/subjects/math/plan.md, Unit 6. A reminder, not the main method
// (research M32): four cards, each the fact, when a hands-on person reaches for it, one worked example ending in a look-back, and two quick
// questions with fresh numbers (M31); then the cards mixed and a check. Facts: M25 (7.G.B.4, 8.G.B.7, 8.G.A.5, HSG-SRT.C.8), M26, M27 (3-4-5).
FC.lesson('math', {
  id: 'l16', part: '16', title: 'Circles and right triangles, a refresher', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, from the plan of 2026-10-22: a reminder of four school facts, not the main method.' }],
  why: [
    'Some school math comes back on a job: the trim that goes around a round table, a square corner for a shed, how high a roof rises at its angle.',
    'These are reminders: each fact, one example, then two quick questions.'
  ],
  flow: [
    { title: 'Around a circle and across it',
      show: [
        { kind: 'prose', text: [
          'Trim around a round table top, or how wide a tree is from a tape around its trunk: both use one fact.',
          'Around a circle = π × across. π is about 3.14, so around is a bit more than 3 times across, and across = around ÷ π. The radius is half the distance across. The area, π × radius × radius, is a different thing: square inches, not a length.',
          'Example: a table 48 inches across takes 3.14 × 48 = 150.72 inches of edge banding. Look back: 3 × 48 = 144, and it is a bit more.'] },
        { kind: 'figure', type: 'plan', data: { unit: 'in', parts: [{ shape: 'circle', x: 0, y: 0, r: 24, across: true, label: 'Table' }] } },
        { kind: 'prose', tone: 'wrong', text: [
          '“The radius is 24, so around is 3.14 × 24.”',
          'That is only halfway around. Around is π × the whole distance across: 3.14 × 48.'] }
      ] },
    { set: { items: [{ gen: 'g-trim', n: 1 }, { gen: 'g-trunk', n: 1 }], order: 'listed' } },
    { title: 'A square corner: 3, 4 and 5',
      show: [
        { kind: 'prose', text: [
          'Laying out a deck, a shed or a patio, builders check a corner with a tape: no square tool is that big.',
          'A square corner makes a right triangle: side × side + side × side = slant × slant. Sides of 3 and 4 give 3 × 3 + 4 × 4 = 25, and √25 = 5. Any multiple works too: 6, 8 and 10; 9, 12 and 15.',
          'So mark 3 ft along one line and 4 ft along the other: the corner is square only when the marks are exactly 5 ft apart. For a whole rectangle, both diagonals must match: 10 ft by 6 ft gives 10 × 10 + 6 × 6 = 136, and √136 = 11.66 ft.',
          'Look back: the slant is the longest side, and shorter than the other two added.'] },
        { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ shape: 'triangle', x: 0, y: 0, w: 4, h: 3, say: { slant: '5 ft' } }] } }
      ] },
    { set: { items: [{ gen: 'g-345', n: 1 }, { gen: 'g-deck-diagonal', n: 1 }], order: 'listed' } },
    { title: 'Angles that make 180°',
      show: [
        { kind: 'prose', text: [
          'Cutting a brace, a rafter or a shelf bracket, you often know two angles and need the third.',
          'The three angles of any triangle add up to 180°. Two angles side by side along a straight line also make 180°. A square corner is 90°; a full turn is 360°.',
          'Example: a roof truss meets the ceiling joist at 30° on each side, so the peak is 180 − 30 − 30 = 120°. Look back: 30 + 30 + 120 = 180.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“A brace meets the floor at 50°, so the angle on its other side is 40°.”',
          '40° is what is left of 90°, a square corner. Along a straight floor the two angles make 180°: 130°.'] }
      ] },
    { set: { items: [{ gen: 'g-third-angle', n: 1 }, { gen: 'g-straight-line', n: 1 }], order: 'listed' } },
    { title: 'A length from an angle: sin, cos and tan',
      show: [
        { kind: 'prose', text: [
          'A roof’s pitch, a ramp or a guy wire is often given by its angle. Sin, cos and tan turn the angle into a length.',
          'In a right triangle, from the angle at the ground: sin = up ÷ slant, cos = along ÷ slant, tan = up ÷ along. School’s memory aid is SOH-CAH-TOA: Sin is Opposite over Hypotenuse, Cos is Adjacent over Hypotenuse, Tan is Opposite over Adjacent (opposite is up, adjacent is along, the hypotenuse is the slant).',
          'Pick the one that holds the side you have and the side you want, then multiply: up = along × tan, up = slant × sin, along = slant × cos. The calculator’s sin, cos and tan take the angle in degrees: type the angle, then the button.',
          'Example: a shed roof at 25° over a 10 ft run rises 10 × tan 25°. On the calculator: 25 tan × 10 = 4.66 ft. Look back: under 45°, so it rises less than it runs.'] },
        { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ shape: 'triangle', x: 0, y: 0, w: 10, h: 4.66, say: { w: 'along 10 ft', h: 'up: ?', slant: 'at 25°' } }] } },
        { kind: 'prose', tone: 'wrong', text: [
          '“Up from the slant is slant × cos.”',
          'Cos gives the along side. Up from the slant is slant × sin.'] }
      ] },
    { set: { items: [{ gen: 'g-trig-rise', n: 1 }, { gen: 'g-trig-height', n: 1 }], order: 'listed' } },
    { set: { items: [{ gen: 'g-trunk', n: 1 }, { gen: 'g-345', n: 1 }, { gen: 'g-straight-line', n: 1 }, { gen: 'g-trig-height', n: 1 }, { gen: 'g-trim', n: 1 }, { gen: 'g-trig-rise', n: 1 }], order: 'shuffle' } }
  ],
  check: {
    items: [{ gen: 'g-trim', n: 1 }, { gen: 'g-deck-diagonal', n: 1 }, { gen: 'g-third-angle', n: 1 }, { gen: 'g-trig-rise', n: 1 }, { gen: 'g-trig-height', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 4 } }, { slip: 'wild', max: 0 }]
  }
});

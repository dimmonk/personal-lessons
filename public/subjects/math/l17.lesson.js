// Math, lesson 17: Refresher: scale, slope and round volumes (part 17). Plan: docs/subjects/math/plan.md, Unit 6. A reminder, not the main method
// (research M32): four cards (similar triangles and scale; slope and grade; cylinder and cone; changing units), each the fact, when it is used,
// one worked example with a look-back, two quick questions (M31); then the cards mixed with lesson 16's (M17) and a check. Facts: M25 (7.G.A.1,
// 8.EE.B.5, 8.G.C.9), M27 (ADA 1:12; the plumbing code's fall per foot), M29 (2.54 exactly; 7.48 gallons a cubic foot).
FC.lesson('math', {
  id: 'l17', part: '17', title: 'Scale, slope and round volumes, a refresher', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, from the plan of 2026-10-22: a reminder of four school facts, not the main method.' }],
  why: [
    'A plan drawn at 1/4 inch to the foot, a drain that has to fall, concrete for a round post hole, a tank sold by the gallon: school math, used on the job.',
    'Four reminders: each fact, one example, then two quick questions.'
  ],
  flow: [
    { title: 'Same shape, another size',
      show: [
        { kind: 'prose', text: [
          'Two triangles with the same angles are the same shape at different sizes (similar triangles): every length is scaled by the same number. Plans, maps and shadows all work this way.',
          'A tree by its shadow: at the same hour, tall ÷ shadow is the same for a post and a tree. A 5 ft post with a 4 ft shadow, and a tree with a 36 ft shadow: tree = 5 × 36 ÷ 4 = 45 ft.',
          'A plan at 1/4 inch to the foot: each 1/4 inch is a foot, so feet = inches on the plan ÷ 0.25. 6.5 inches on the plan is 6.5 ÷ 0.25 = 26 ft.',
          'Look back: the tree is as many times its shadow as the post is (5 ÷ 4 = 1.25, and 45 ÷ 36 = 1.25).'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“The tree’s shadow is 32 ft longer than the post’s, so the tree is 5 + 32 = 37 ft.”',
          'The same shape scales: multiply, never add. 5 × 36 ÷ 4 = 45 ft.'] }
      ] },
    { set: { items: [{ gen: 'g-shadow', n: 1 }, { gen: 'g-plan-scale', n: 1 }], order: 'listed' } },
    { title: 'Slope and grade',
      show: [
        { kind: 'prose', text: [
          'A driveway, a ramp or a drain pipe has a slope: how much it rises for how far it runs.',
          'Slope = rise ÷ run, both in the same unit. As a grade, × 100 for a percent: 1 ft up in 12 ft along is 1 ÷ 12 × 100 = 8.33%, the steepest the ADA allows for a new wheelchair ramp.',
          'A slope given per foot works the other way: the drop is feet × the fall per foot. The plumbing code has drain pipe 2½ inches across or less fall 1/4 inch a foot, and 3 to 6 inch pipe 1/8 inch a foot. A 20 ft run of 2 inch pipe drops 20 × 0.25 = 5 inches.',
          'Look back: a grade under 100% rises less than it runs.'] },
        { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ shape: 'triangle', x: 0, y: 0, w: 12, h: 1, say: { w: 'run 12 ft', h: 'rise 1 ft', slant: 'ramp' } }] } }
      ] },
    { set: { items: [{ gen: 'g-grade', n: 1 }, { gen: 'g-drain-drop', n: 1 }], order: 'listed' } },
    { title: 'Round volumes: a cylinder and a cone',
      show: [
        { kind: 'prose', text: [
          'Concrete for a round post hole, soil for a round planter, a pile of gravel: round shapes hold round volumes.',
          'A cylinder holds π × radius × radius × height. A cone, a pile that comes to a point, holds a third of the cylinder around it: π × radius × radius × height ÷ 3.',
          'Every length in the same unit first. A post hole 12 inches across is 1 ft across, a radius of 0.5 ft; 3 ft deep: 3.14 × 0.5 × 0.5 × 3 = 2.36 cubic feet.',
          'Look back: about 3 × radius × radius × height; a cone about a third of that.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“12 inches across, so the radius is 12.”',
          'The radius is half the distance across, and in feet: 0.5 ft.'] }
      ] },
    { set: { items: [{ gen: 'g-post-hole', n: 1 }, { gen: 'g-gravel-cone', n: 1 }], order: 'listed' } },
    { title: 'Changing units',
      show: [
        { kind: 'prose', text: [
          'A metric part against an inch tape, a tank measured in feet but treated by the gallon: change the unit.',
          '1 inch is exactly 2.54 cm. A cubic foot holds about 7.48 gallons. A cubic yard is 3 × 3 × 3 = 27 cubic feet.',
          'Which way? The smaller unit takes more of them: multiply to go to the smaller unit, divide to go to the bigger. 30 inches is 30 × 2.54 = 76.2 cm. A tank 4 × 2 × 2 = 16 cubic feet holds 16 × 7.48 = 119.68 gallons, about 120.',
          'Look back: more centimeters than inches, more gallons than cubic feet.'] }
      ] },
    { set: { items: [{ gen: 'g-to-cm', n: 1 }, { gen: 'g-gallons', n: 1 }], order: 'listed' } },
    { set: { items: [{ gen: 'g-plan-scale', n: 1 }, { gen: 'g-drain-drop', n: 1 }, { gen: 'g-gravel-cone', n: 1 }, { gen: 'g-gallons', n: 1 }, { gen: 'g-shadow', n: 1 }, { gen: 'g-grade', n: 1 }],
      order: 'shuffle', mix: { from: ['l16'], share: 0.3 } } }
  ],
  check: {
    items: [{ gen: 'g-shadow', n: 1 }, { gen: 'g-grade', n: 1 }, { gen: 'g-post-hole', n: 1 }, { gen: 'g-to-cm', n: 1 }, { gen: 'g-gallons', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 4 } }, { slip: 'wild', max: 0 }]
  }
});

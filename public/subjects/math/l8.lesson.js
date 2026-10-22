// Math, lesson 8: Circles, boxes and volume (part 8). Plan: docs/subjects/math/plan.md, Unit 3. Lesson 7's rule carried into three dimensions:
// the bottom's area times the depth, all in one unit, then how much to buy, rounded up (M8); a circle's area from its radius, drawn in the plan
// (M15). Faded steps, then whole problems, then mixed with lesson 7's (M17). Check: 4 of 5, and nothing rounded down.
FC.lesson('math', {
  id: 'l8', part: '8', title: 'Circles, boxes and volume', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, from the plan of 2026-10-22.' }],
  why: [
    'Soil comes in bags of cubic feet, mulch by the cubic yard, and a round rug’s pad by the square foot. The sizes you measure are in feet and inches.',
    'Here you find a circle’s area and a volume, change the units, and work out how much to buy.'
  ],
  flow: [
    { title: 'Circles, then volume',
      show: [
        { kind: 'prose', text: [
          'A circle’s area is π × radius × radius. (The distance around a circle, π × the distance across, is a length, not its area.) The radius is half the distance across: a rug 8 ft across has a radius of 4 ft, so its area is 3.14 × 4 × 4 = 50.24 square feet. π is about 3.14; for a rough answer use 3.',
          'Volume is how much space: the area of the bottom × the depth. A planter 6 ft by 2 ft filled 1 ft deep holds 6 × 2 × 1 = 12 cubic feet.',
          'Use one unit. A depth in inches becomes feet ÷ 12: 10 inches is 0.83 ft. A cubic yard is 3 ft × 3 ft × 3 ft, which is 27 cubic feet, so cubic feet ÷ 27 gives cubic yards.',
          'Then, as with paint, divide by what one bag holds and round up.'] },
        { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ shape: 'circle', x: 0, y: 0, r: 4, across: true, label: 'Rug' }, { x: 10, y: 2, w: 6, h: 2, label: 'Planter' }] } },
        { kind: 'prose', tone: 'wrong', text: [
          '“A cubic yard is 3 cubic feet.”',
          'A yard is 3 feet long, but a cubic yard is 3 feet long, 3 wide and 3 high: 27 cubic feet.'] }
      ] },
    { worked: 'w-planter' },
    { set: { items: [{ gen: 'g-rug', n: 1, with: { pool: 'practice' } }, { gen: 'g-planter', n: 1 }, { gen: 'g-mulch', n: 1 }], order: 'listed', support: { leave: 1 } } },
    { set: { items: [{ gen: 'g-round-bed', n: 1, with: { pool: 'practice' } }, { gen: 'g-rug', n: 1, with: { pool: 'practice' } }, { gen: 'g-planter', n: 1 }], order: 'shuffle', support: { leave: 2 } } },
    { set: { items: [{ gen: 'g-mulch', n: 1 }, { gen: 'g-round-bed', n: 1, with: { pool: 'practice' } }, { gen: 'g-rug', n: 1, with: { pool: 'practice' } }], order: 'shuffle', support: { estimateCheck: true } } },
    { set: { items: [{ gen: 'g-planter', n: 1 }, { gen: 'g-mulch', n: 1 }, { gen: 'g-round-bed', n: 1, with: { pool: 'practice' } }], order: 'shuffle', mix: { from: ['l7'], share: 0.3 } } }
  ],
  check: {
    items: [{ gen: 'g-rug', n: 2, with: { pool: 'check' } }, { gen: 'g-planter', n: 1, with: { fr: 'low' } }, { gen: 'g-round-bed', n: 1, with: { fr: 'low', pool: 'check' } }, { gen: 'g-mulch', n: 1, with: { fr: 'low' } }],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 4 } }, { slip: 'rounded-down', max: 0 }, { slip: 'wild', max: 0 }]
  }
});

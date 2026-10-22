// Math, lesson 9: Ladders, scale and size (part 9). Plan: docs/subjects/math/plan.md, Unit 3. The trade's 1-in-4 rule first, then the square rule
// for the third side of the ladder's right triangle (M12), drawn as a triangle (M15); then sizes: double every length, 4 times the area, 8 times the
// volume (M7, the illusion of linearity). Each kind taught, worked and practiced with the last step left, then mixed with lessons 7 and 8 (M17).
// Check: 4 of 5, none wild.
FC.lesson('math', {
  id: 'l9', part: '9', title: 'Ladders, scale and size', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, from the plan of 2026-10-22.' }],
  why: [
    'A ladder stood too steep tips back; too flat, its foot slides out. And a pizza 16 inches across is not a third more pizza than a 12 inch one: it is nearly twice as much.',
    'Here you find how high a ladder reaches or how long it must be, and how much more an area or a volume holds at a bigger size.'
  ],
  flow: [
    { title: 'A ladder is a right triangle',
      show: [
        { kind: 'prose', text: [
          'A ladder against a wall makes a right triangle: the wall goes up, the ground goes out, and the ladder is the slant between them, the longest side.',
          'Stand it the safe way, as builders do: the foot 1 ft out from the wall for every 4 ft of ladder. A 16 ft ladder stands with its foot 16 ÷ 4 = 4 ft out.',
          'The square rule finds the third side: up × up + out × out = slant × slant. For the 16 ft ladder, up × up = 16 × 16 − 4 × 4 = 256 − 16 = 240. Up is the number that times itself makes 240: the square root, √ on the calculator, 15.49 ft.',
          'For the slant, add the two squares; for up or out, take the other square from the slant’s; then √. The calculator works left to right with no brackets, so put the square you add or take away into the memory first: 4 × 4 M+, then 16 × 16 − MR = √.',
          'Look back: the ladder is always the longest side.'] },
        { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ shape: 'triangle', x: 0, y: 0, w: 4, h: 15.49, say: { slant: '16 ft ladder' } }] } },
        { kind: 'prose', tone: 'wrong', text: [
          '“12 ft up and 3 ft out, so the ladder is 12 + 3 = 15 ft.”',
          'Sides do not add like that: 12 × 12 + 3 × 3 = 153, and √153 is 12.37 ft.'] }
      ] },
    { worked: 'w-reach' },
    { set: { items: [{ gen: 'g-reach', n: 1 }, { gen: 'g-ladder-long', n: 1 }], order: 'listed', support: { leave: 1 } } },
    { title: 'Bigger every way',
      show: [
        { kind: 'prose', text: [
          'When every length grows by the same number, an area grows by that number times itself, and a volume by it three times over. Double every length: 2 × 2 = 4 times the area, 2 × 2 × 2 = 8 times the volume.',
          'Pizza sizes are the distance across. A 16 inch pizza is 16 ÷ 12 times as wide as a 12 inch one and as many times as long, so it is 16 ÷ 12 × 16 ÷ 12 = 1.78 times the pizza.',
          'Rough: square friendly numbers. 16 × 16 is 256, about 250; 12 × 12 is 144, about 150; 250 ÷ 150 is about 1.7.'] },
        { kind: 'figure', type: 'years', data: { columns: ['Each length', 'An area', 'A volume'], rows: [['× 2', '× 4', '× 8'], ['× 3', '× 9', '× 27']] } },
        { kind: 'prose', tone: 'wrong', text: [
          '“Twice as wide is twice as much.”',
          'Twice as wide is also twice as long: 2 × 2 = 4 times the area.'] }
      ] },
    { worked: 'w-pizza' },
    { set: { items: [{ gen: 'g-pizza', n: 1 }, { gen: 'g-scale-volume', n: 1 }], order: 'listed', support: { leave: 1 } } },
    { set: { items: [{ gen: 'g-ladder-long', n: 1 }, { gen: 'g-scale-volume', n: 1 }, { gen: 'g-reach', n: 1 }, { gen: 'g-pizza', n: 1 }], order: 'shuffle', support: { leave: 2 } } },
    { set: { items: [{ gen: 'g-pizza', n: 1 }, { gen: 'g-reach', n: 1 }, { gen: 'g-scale-volume', n: 1 }, { gen: 'g-ladder-long', n: 1 }], order: 'shuffle', support: { estimateCheck: true } } },
    { set: { items: [{ gen: 'g-ladder-long', n: 1 }, { gen: 'g-pizza', n: 1 }, { gen: 'g-reach', n: 1 }], order: 'shuffle', mix: { from: ['l7', 'l8'], share: 0.3 } } }
  ],
  check: {
    items: [{ gen: 'g-reach', n: 1 }, { gen: 'g-ladder-long', n: 1 }, { gen: 'g-pizza', n: 1 }, { gen: 'g-scale-volume', n: 1 }, { gen: 'g-ladder-long', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 4 } }, { slip: 'wild', max: 0 }]
  }
});

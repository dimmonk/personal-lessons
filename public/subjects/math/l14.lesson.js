// Math, lesson 14: A missing number (part 14). Plan: docs/subjects/math/plan.md, Unit 5. A formula worked backward (°F to °C), when two price
// plans cost the same, and a square's side found by filling in its missing corner, drawn as a plan (M24, M13, M15). Faded steps, then whole
// problems, then mixed with lessons 12 and 13 (M17). Check: 4 of 5, none wild.
FC.lesson('math', {
  id: 'l14', part: '14', title: 'A missing number', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, from the plan of 2026-10-22.' }],
  why: [
    'A formula, a price list or a plan of a yard often gives you the result and hides the number you need: the temperature in °C, the visits when a pass pays off, the side of a bed.',
    'Here you work back to that number.'
  ],
  flow: [
    { title: 'Work back to the missing number',
      show: [
        { kind: 'prose', text: [
          'A formula says how to go one way: °F = 1.8 × °C + 32 means times 1.8, then add 32. To go back, undo the steps in the opposite order: take away 32 first, then divide by 1.8. 77°F: on the calculator 77 − 32 =, then ÷ 1.8 = 25°C. (Press = after each step: some phone calculators would divide first.)',
          'When does a pass cost less? Pay $9 a swim, or a pass at $40 a month plus $4 each swim. Each swim, the pass saves $9 − $4 = $5, so the $40 is paid back after 40 ÷ 5 = 8 swims, where both cost $72. From 9 swims a month on, the pass costs less; below 8, paying each time does.',
          'A square from its area: a square bed with a path 2 ft wide along two sides, the corner between them left out, covers 140 square feet. Fill in the missing corner, 2 × 2 = 4: the whole is a square of 144 square feet, its side √144 = 12 ft, and the bed is 12 − 2 = 10 ft.'] },
        { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ x: 0, y: 2, w: 10, h: 10, label: 'Bed' }, { x: 0, y: 0, w: 10, h: 2, label: 'Path' }, { x: 10, y: 2, w: 2, h: 10, label: 'Path' }, { x: 10, y: 0, w: 2, h: 2, cut: true }] } },
        { kind: 'prose', tone: 'wrong', text: [
          '“Undo it in the same order: divide by 1.8, then take away 32.”',
          'The last thing done is the first undone: take away 32 first.'] }
      ] },
    { worked: 'w-celsius' },
    { set: { items: [{ gen: 'g-celsius', n: 1 }, { gen: 'g-plans', n: 1 }, { gen: 'g-square-bed', n: 1 }], order: 'listed', support: { leave: 1 } } },
    { set: { items: [{ gen: 'g-plans', n: 1 }, { gen: 'g-square-bed', n: 1 }, { gen: 'g-celsius', n: 1 }], order: 'shuffle', support: { leave: 2 } } },
    { set: { items: [{ gen: 'g-square-bed', n: 1 }, { gen: 'g-celsius', n: 1 }, { gen: 'g-plans', n: 1 }], order: 'shuffle', support: { estimateCheck: true } } },
    { set: { items: [{ gen: 'g-celsius', n: 1 }, { gen: 'g-plans', n: 1 }, { gen: 'g-square-bed', n: 1 }], order: 'shuffle', mix: { from: ['l12', 'l13'], share: 0.3 } } }
  ],
  check: {
    items: [{ gen: 'g-celsius', n: 1 }, { gen: 'g-plans', n: 1 }, { gen: 'g-square-bed', n: 1 }, { gen: 'g-plans', n: 1 }, { gen: 'g-square-bed', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 4 } }, { slip: 'wild', max: 0 }]
  }
});

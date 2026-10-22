// Math, lesson 7: Areas and how much to buy (part 7). Plan: docs/subjects/math/plan.md, Unit 3. A plan drawn to scale with its sizes (M15),
// everyday jobs (M8): walls less a door, an L-shaped floor, carpet by the square yard, and edging around a bed as the look-alike that needs the
// distance around (P12). The one rule: area is length × width, rectangle by rectangle, in one unit; to buy, divide by what one covers and always
// round up. Faded steps, then whole problems. Check: 4 of 5, and nothing rounded down.
FC.lesson('math', {
  id: 'l7', part: '7', title: 'Areas and how much to buy', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, from the plan of 2026-10-22.' }],
  why: [
    'Paint, flooring, carpet and edging are sold by what they cover. Buy too little and the job stops halfway; mix up feet and yards and the quote is three times off.',
    'Here you draw the space, find its area or the distance around it, and work out how much to buy.'
  ],
  flow: [
    { title: 'Area, then how much to buy',
      show: [
        { kind: 'prose', text: [
          'Area is how much surface: length × width, in square feet when the sides are in feet. A wall 12 ft wide and 8 ft high is 96 square feet.',
          'Cut-outs come off: a 3 by 7 ft door is 21 square feet less. An L-shaped floor is two rectangles: find each and add them. The four walls of a room, laid flat, are one strip as long as the distance around the room.',
          'The distance around is a different thing: add the sides. Edging, a fence or trim goes around, so it needs the distance around, in feet.',
          'Use one unit. When a price is per square yard, change the area into square yards: 1 square yard is 3 ft × 3 ft, which is 9 square feet, so divide square feet by 9.',
          'How much to buy: what you need ÷ what one can, box or roll covers. Two coats of paint cover the area twice, so double it first. Always round up: 2.3 cans means 3 cans.'] },
        { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ x: 0, y: 0, w: 12, h: 10, label: 'Room' }, { x: 12, y: 0, w: 5, h: 4, label: 'Nook' }] } },
        { kind: 'prose', tone: 'wrong', text: [
          '“2.3 cans is closer to 2, so buy 2.”',
          'Rounding to the nearest is for rough answers. When you buy, 2 cans leave part of the wall bare: round up.'] }
      ] },
    { worked: 'w-paint' },
    { set: { items: [{ gen: 'g-paint', n: 1 }, { gen: 'g-floor', n: 1 }, { gen: 'g-edging', n: 1 }], order: 'listed', support: { leave: 1 } } },
    { set: { items: [{ gen: 'g-carpet', n: 1 }, { gen: 'g-floor', n: 1 }, { gen: 'g-paint', n: 1 }], order: 'shuffle', support: { leave: 2 } } },
    { set: { items: [{ gen: 'g-edging', n: 1 }, { gen: 'g-carpet', n: 1 }, { gen: 'g-floor', n: 1 }], order: 'shuffle', support: { estimateCheck: true } } },
    { set: { items: [{ gen: 'g-paint', n: 1 }, { gen: 'g-edging', n: 1 }, { gen: 'g-carpet', n: 1 }], order: 'shuffle' } }
  ],
  check: {
    items: [{ gen: 'g-paint', n: 1 }, { gen: 'g-floor', n: 1 }, { gen: 'g-carpet', n: 1 }, { gen: 'g-edging', n: 1 }, { gen: 'g-floor', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 4 } }, { slip: 'rounded-down', max: 0 }, { slip: 'wild', max: 0 }]
  }
});

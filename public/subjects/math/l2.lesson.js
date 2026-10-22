// Math, lesson 2: Friendly numbers for times and divide (part 2). Plan: docs/subjects/math/plan.md, Unit 1. The three moves good estimators
// make (M4), with the easy fractions adults already use (M3); the friendly numbers are given first, then the whole problem; lesson 1's problems
// come back mixed in (M17). The check is rough answers alone, with no calculator: 4 of 5 within a fifth (M5: picking easy numbers, not the paper
// method done in the head).
FC.lesson('math', {
  id: 'l2', part: '2', title: 'Friendly numbers for times and divide', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, from the plan of 2026-10-22.' }],
  why: [
    'Rounding each price works for a receipt. For 47 tickets at $66, or a $1,284 cabin split six ways, you need numbers your head can multiply and divide.',
    'Here you learn the three moves that people who are good at rough answers make.'
  ],
  flow: [
    { title: 'Three moves for a rough answer',
      show: [
        { kind: 'prose', text: [
          'Make the numbers friendly: change them to numbers that are easy in your head. 47 × 66 is about 50 × 70. For a share, pick a number near the bill that the group divides evenly: $1,284 among 6 is near $1,200, and $1,200 ÷ 6 = $200.',
          'Make the sum simpler: 83 + 74 + 96 + 82 is about four 80s, so about 320.',
          'Then nudge: 50 × 70 = 3,500, but both numbers went up to get there, so the real answer is a bit less: say 3,200. If one number went up and the other down, they roughly cancel: no nudge. $1,284 is a bit more than $1,200, so the share is a bit more than $200.',
          'For a part of something, use the easy fractions: half, a quarter, three quarters, a third, a tenth. 23 hours out of 45 is about half; half of $720 is $360, and 23 is a bit more than half of 45, so a bit more.',
          'There is no one right rough answer. Anything within about a fifth of the exact one is close enough to catch a mistake.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“To estimate, I do the whole sum in my head, digit by digit.”',
          'That is slow and easy to get wrong. Change the numbers to friendly ones first; the answer only has to be close.'] }
      ] },
    { worked: 'w-times' },
    { set: { items: [{ gen: 'g-times', n: 1 }, { gen: 'g-sum', n: 1 }, { gen: 'g-share', n: 1 }, { gen: 'g-part', n: 1 }], order: 'listed', support: { leave: 2 } } },
    { set: { items: [{ gen: 'g-times', n: 1 }, { gen: 'g-share', n: 1 }, { gen: 'g-sum', n: 1 }, { gen: 'g-part', n: 1 }], order: 'shuffle', support: { estimateCheck: true } } },
    { set: { items: [{ gen: 'g-times', n: 1 }, { gen: 'g-share', n: 1 }, { gen: 'g-part', n: 1 }, { gen: 'g-sum', n: 1 }], order: 'shuffle', mix: { from: ['l1'], share: 0.3 } } }
  ],
  check: {
    items: [{ gen: 'g-times-est', n: 1 }, { gen: 'g-sum-est', n: 1 }, { gen: 'g-share-est', n: 2 }, { gen: 'g-part-est', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 4 } }]
  }
});

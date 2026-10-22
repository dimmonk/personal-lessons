// Math, lesson 1: Ballpark and check (part 1). Plan: docs/subjects/math/plan.md, Unit 1. The way of thinking, then a rough total typed first
// with no calculator and the exact one after it (M2, M21: the "rough must be exact" wrong idea named); the worked steps fade (last step, then
// the last two, M14); then a bill's subtotal checked against its lines, with the sales tax after it (the pilot's review, fix 2).
FC.lesson('math', {
  id: 'l1', part: '1', title: 'Ballpark and check', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'Rebuilt to the plan of 2026-10-22 from the pilot and its review: the way of thinking first, the rounding rule said, the rough answer shown as a rough answer, an order added line by line with the memory, the help faded step by step, a bill with its sales tax, and two bills that do not add up in the check.' }],
  why: [
    'A calculator gives you the exact number, but it cannot tell you when you typed something wrong. A rough answer from your head can.',
    'Here you make a rough answer first, then the exact one, and see how close you were. Then you check a bill’s lines against its subtotal.'
  ],
  flow: [
    { title: 'Rough first, then exact',
      show: [
        { kind: 'prose', text: [
          'Every problem in this subject goes the same way. First, say what is asked and what is given: the number you need, and the figures that matter. Leave out the rest.',
          'Then make a rough answer in your head from friendly numbers. Then name the kind of problem; for a receipt it is just a sum. Then work it out exactly on the calculator.',
          'Last, look back: is the exact answer near the rough one, in the right unit? If not, one of the two has a mistake.',
          'To make a rough total, round each price to the nearest whole dollar and add the dollars. 50 cents or more rounds up; less rounds down. $3.49 becomes $3. $11.86 becomes $12.',
          'Several of the same thing: round the price, then multiply. 4 packs at $3.29 is about 4 × $3 = $12. The calculator does one sum at a time, so add lines like these with M+, which adds a line to the memory; MR shows the sum. Press MC, which clears the memory, before each new total.',
          'To split a bill, round it to the nearest number the group divides evenly: $142.80 among 6 people is close to $144, and $144 ÷ 6 = $24 each.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“A rough answer has to be exact to be any use.”',
          'A rough answer only has to land near the exact one, within about a fifth. On a $25 cart that is $5 either way.'] }
      ] },
    { worked: 'w-receipt' },
    { set: { items: [{ gen: 'g-cart', n: 1 }, { gen: 'g-qty', n: 1 }, { gen: 'g-split', n: 1 }], order: 'listed', support: { leave: 1 } } },
    { set: { items: [{ gen: 'g-cart', n: 1 }, { gen: 'g-qty', n: 1 }, { gen: 'g-split', n: 1 }], order: 'shuffle', support: { leave: 2 } } },
    { set: { items: [{ gen: 'g-cart', n: 1 }, { gen: 'g-qty', n: 1 }, { gen: 'g-split', n: 1 }], order: 'shuffle', support: { estimateCheck: true } } },
    { title: 'Check a bill’s subtotal',
      show: [
        { kind: 'prose', text: [
          'A bill added up by hand, a friend’s tally, or a total you typed into a calculator yourself can be wrong. Two mistakes are common: the sum is added up wrong, by a few dollars or by tens of dollars, or a line is left out.',
          'The subtotal is the lines added up, before tax. Round the lines and add them, then compare with the subtotal. Rounding moves each line by at most 50 cents, so with five lines your rough sum is within $2.50 of the real one: a gap of more than about $3 is a mistake.',
          'Sales tax is added after the subtotal, so the total sits a few percent above it; that is not a mistake.'] }
      ] },
    { set: { items: [{ gen: 'g-total-right', n: 2 }, { gen: 'g-total-wrong', n: 2 }, { gen: 'g-cart', n: 1 }, { gen: 'g-qty', n: 1 }, { gen: 'g-split', n: 1 }], order: 'shuffle' } }
  ],
  check: {
    items: [{ gen: 'g-cart-est', n: 2 }, { gen: 'g-qty-est', n: 1 }, { gen: 'g-split-est', n: 2 }, { gen: 'g-total-right-v', n: 2 }, { gen: 'g-total-wrong-v', n: 2 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [
      { where: { kind: 'estimate' }, right: { min: 4 } },
      { ask: 'verdict', where: { kind: 'wrong-total' }, wrong: { max: 0 } },
      { ask: 'verdict', where: { kind: 'right-total' }, wrong: { max: 0 } }]
  }
});

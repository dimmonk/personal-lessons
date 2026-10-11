// Math, lesson 1: Ballpark and check (part 1). The pilot (docs/subjects/math/design.md, gate 5). A rough total typed first with no calculator,
// then the exact one with the calculator; then four receipts with a printed total, right or wrong and by how much; then the check of part 1.
FC.lesson('math', {
  id: 'l1', part: '1', title: 'Ballpark and check', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-10', change: 'First version, built as the pilot of Math under the practice engine. Not tried on a phone yet.' }],
  why: [
    'A calculator gives you the exact number, but it cannot tell you when you typed something wrong. A rough answer from your head can.',
    'Here you make a rough answer first, then the exact one, and see how close you were. Then you check printed totals for mistakes.'
  ],
  flow: [
    { title: 'Round first, then add',
      show: [
        { kind: 'prose', text: [
          'A rough answer takes a few seconds and catches big mistakes before they cost you money.',
          'To get one, round each price to the nearest whole dollar, then add the dollars. $3.49 becomes $3. $11.86 becomes $12.',
          'When you buy several of the same thing, round the price, then multiply: 4 packs at $3.29 is about 4 × $3 = $12.',
          'To split a bill, round it to a number the group divides evenly: $142.80 among 6 people is close to $144, and $144 ÷ 6 = $24 each.'] },
        { kind: 'prose', tone: 'wrong', text: [
          '“A rough answer has to be exact to be any use.”',
          'A rough answer only has to land near the exact one, within about a fifth. On a $25 cart that is $5 either way.'] }
      ] },
    { worked: 'w-receipt' },
    { set: { items: [{ gen: 'g-cart', n: 1 }, { gen: 'g-qty', n: 1 }, { gen: 'g-split', n: 1 }], order: 'listed', support: { estimateCheck: true } } },
    { set: { items: [{ gen: 'g-cart', n: 1 }, { gen: 'g-qty', n: 1 }, { gen: 'g-split', n: 1 }], order: 'shuffle' } },
    { title: 'Check a printed total',
      show: [
        { kind: 'prose', text: [
          'A printed total can be wrong. Two mistakes are common: a digit slips, so the total comes out $10 or $20 too high, or a line gets left out of the total.',
          'Round the lines and add them, then compare with the printed total. If they are near each other, the total is right. If they are far apart, find the line that does not fit.'] }
      ] },
    { set: { items: [{ gen: 'g-total-right', n: 2 }, { gen: 'g-total-wrong', n: 2 }], order: 'shuffle' } }
  ],
  check: {
    items: [{ gen: 'g-cart-est', n: 2 }, { gen: 'g-qty-est', n: 1 }, { gen: 'g-split-est', n: 2 }, { gen: 'g-total-right-v', n: 2 }, { gen: 'g-total-wrong-v', n: 1 }],
    feedback: 'at-end', order: 'shuffle',
    pass: [
      { where: { kind: 'estimate' }, right: { min: 4 } },
      { ask: 'verdict', where: { kind: 'wrong-total' }, wrong: { max: 0 } },
      { ask: 'verdict', where: { kind: 'right-total' }, wrong: { max: 0 } }]
  }
});

FC.lesson('till', {
  id: 'l1', part: '1', title: 'Count the cart', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-10', change: 'First version, for the tests.' }],
  tried: { date: '2026-10-10', words: 'Clear on a phone.' },
  why: 'A cart comes to a number you can guess before the register says it. Guess first, then work it out exactly.',
  flow: [
    { title: 'What the papers look like',
      show: [
        { kind: 'document', form: 'tag', title: 'Blue shirt', rows: [{ id: 'p', cells: ['$24.00'] }, { id: 'off', cells: ['25% off'] }] },
        { kind: 'document', form: 'recipe', title: 'Pancakes', rows: [{ id: 'f', cells: ['2 cups', 'flour'] }, { id: 'm', cells: ['1 cup', 'milk'] }], notes: ['Serves 4'] },
        { kind: 'document', form: 'offer', title: 'Savings account', rows: [{ id: 'rate', cells: ['Yearly rate', '4%'] }, { id: 'start', cells: ['You deposit', '$500'] }], notes: ['No fees'] }
      ] },
    { title: 'What the pictures look like',
      show: [
        { kind: 'figure', type: 'rate-table', data: { top: { label: 'People', cells: ['4', '6'] }, bottom: { label: 'Cups of flour', cells: ['2', '?'] } } },
        { kind: 'figure', type: 'bar', data: { whole: 'The price before the sale, $80', parts: [{ label: 'You pay', pct: 75 }, { label: 'Comes off', pct: 25 }] } },
        { kind: 'figure', type: 'plan', data: { unit: 'ft', parts: [{ x: 0, y: 0, w: 12, h: 10, label: 'Room' }, { x: 0, y: 3, w: 3, h: 6, label: 'Rug', cut: true }] } },
        { kind: 'figure', type: 'years', data: { columns: ['Year', 'Balance'], rows: [['1', '$1,050'], ['2', '$1,102.50'], ['3', '$1,157.63']] } }
      ] },
    { worked: 'w-till' },
    { set: { items: ['t-recipe', { gen: 't-cart', n: 2 }], order: 'listed', support: { estimateCheck: true } } },
    { set: { items: ['t-leave'], order: 'listed', support: { leave: 1 } } },
    { set: { items: [{ gen: 't-cart', n: 2 }], order: 'listed' } }
  ],
  check: { items: ['c-recipe', { gen: 't-cart', n: 2 }], feedback: 'at-end', order: 'shuffle', pass: [{ right: { min: 2 } }] }
});

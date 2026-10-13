// "Atlas of the isles", lesson 2: a group of places in four forms, and a check drawn from it with the split fixed by form.
FC.lesson('atlas', {
  id: 'l2', part: '2', title: 'The isles again', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-12', change: 'First version, for the tests of a group of places.' }],
  why: 'The same places come back in other forms, each form on the places you met in another.',
  flow: [
    { title: 'The isles, with their names', show: [{ kind: 'map', region: 'isles', labels: true }] },
    { set: { items: [{ gen: 'g-isles', n: 4, with: { form: 'tap' } }, { gen: 'g-isles', n: 3, with: { form: 'flag' } }], order: 'listed' } },
    { set: { items: [{ gen: 'g-isles', n: 3, with: { form: 'name' } }, { gen: 'g-isles', n: 2, with: { form: 'border' } }], order: 'listed' } }
  ],
  check: { items: { draw: { gen: 'g-isles', split: { tap: 2, name: 1, flag: 1, border: 1 }, only: { tap: ['speck'] } } }, feedback: 'at-end', pass: [{ right: { min: 4 } }] }
});

FC.lesson('fixture', {
  id: 'l2', part: '2', title: 'Read the timing', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-10', change: 'First version, for the tests.' }],
  why: 'A forecast also says when. Rain at night does not need an umbrella on your noon walk.',
  flow: [
    { title: 'Find the hour',
      show: [{ kind: 'prose', text: 'Look for the hour the rain starts, and compare it with when you are outside.' },
        { kind: 'pair', a: { kind: 'prose', text: 'Rain starts at 9 a.m.' }, b: { kind: 'prose', text: 'Rain starts at 7 p.m.' }, compare: 'The same chance, a different hour.' }] },
    { worked: 'w-timing' },
    { set: { items: ['t-1', 't-2'], order: 'listed', support: { leave: 2 } } },
    { set: { items: ['t-3', 't-4'], order: 'listed', support: { leave: 1 } } },
    { set: { items: ['t-5', 't-6'], order: 'shuffle', mix: { from: ['l1'], share: 0.34 } } }
  ],
  check: {
    items: ['u-1', 'u-2', 'u-3'], feedback: 'after-each',
    pass: [{ right: { min: 2 } }, { ask: 'v', right: { min: 2 } }]
  }
});

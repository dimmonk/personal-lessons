FC.lesson('fixture', {
  id: 'l1', part: '1', title: 'Read the chance', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-10', change: 'First version, for the tests.' }],
  tried: { date: '2026-10-10', words: 'Clear on a phone. The marked words helped.' },
  why: 'A forecast gives a chance of rain, not a promise. Your job is to decide in a few seconds whether to bring an umbrella.',
  flow: [
    { title: 'What a chance means',
      show: [
        { kind: 'prose', text: ['A chance is how often it rains on days like this one.', 'Over 50% means more likely than not. Under 50% means less likely.'] },
        { kind: 'prose', tone: 'wrong', text: ['“Seventy percent means it will rain.”', 'Seventy percent means rain is likely, and not certain.'] },
        { kind: 'pair', a: { kind: 'prose', lines: [{ id: 'a1', text: 'Rain: 80% chance this afternoon.' }] },
          b: { kind: 'prose', lines: [{ id: 'b1', text: 'Rain: 20% chance this afternoon.' }] }, compare: 'The same words, a different chance.' }
      ] },
    { worked: 'w-chance' },
    { set: { items: ['c-1', 'c-2'], order: 'listed', support: { shown: true } } },
    { set: { items: ['c-5', ['c-3', 'c-4'], 'c-6', { gen: 'g-chance', n: 2 }], order: 'shuffle' } }
  ],
  check: {
    items: ['k-1', 'k-2', 'k-3', 'k-4', { gen: 'g-chance', n: 1 }], feedback: 'at-end', retest: 7,
    pass: [{ right: { min: 4 } }, { where: { kind: 'wet' }, wrong: { max: 0 } }, { slip: 'promise', max: 0 }]
  }
});

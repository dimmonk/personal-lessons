// Questions of the strand "the chance of rain" made with fresh numbers: the same question, a different chance each time.
FC.gen('fixture', [{
  id: 'g-chance', strand: 'chance', facets: { kind: 'wet' },
  params: { pct: [10, 20, 30, 40, 60, 70, 80, 90], when: ['morning', 'afternoon', 'evening'] },
  make: pick => ({ days: pick('pct') / 10, flip: 10 - pick('pct') / 10 }),
  blocks: [{ kind: 'prose', text: 'Today: {pct}% chance of rain this {when}.' }],
  asks: [{ id: 'days', kind: 'choose', prompt: 'On about how many days out of 10 like this does it rain?', answer: 'days',
    options: [{ id: 'r', text: '{days} of 10', ok: true, value: 'days' },
      { id: 'f', text: '{flip} of 10', slip: 'flip', value: 'flip', then: 'That is the number of dry days, not the rainy ones.' },
      { id: 'z', text: 'All 10 of them', then: 'A chance is never a promise.' }] }],
  reason: 'A {pct}% chance means rain on {days} days out of 10 like this one.'
}]);

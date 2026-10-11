// Fixed questions of the strand "the chance of rain": the ones the first lesson's groups and check use.
(() => {
  const line = (a, b, c) => [{ id: 'a', text: a }, { id: 'b', text: b }, { id: 'c', text: c }];
  const prose = lines => [{ kind: 'prose', lines }];
  // a verdict on a forecast, from the subject's list; the wrong answer says what it costs, or names the slip
  const verdict = (right, extra) => ({ id: 'v', kind: 'choose', prompt: 'Do you bring an umbrella?', from: 'verdict', right, ...extra });
  const wet = { bring: 'You carry it and stay dry if the rain comes.', leave: 'You walk out without it, and a chance this high means a real chance of getting wet.' };
  const dry = { leave: 'Your hands stay free, and most days like this stay dry.', bring: 'A low chance is not a promise. You carry it all day for a shower that probably never comes.' };
  FC.items('fixture', [
    { id: 'c-1', strand: 'chance', facets: { kind: 'wet' },
      blocks: prose(line('Tomorrow:', '80% chance of rain', 'after lunch.')),
      asks: [{ id: 'num', kind: 'choose', prompt: 'Which words are the chance of rain?',
          options: [{ id: 'n80', text: '80%', ok: true }, { id: 'n20', text: 'after lunch', then: 'That is when, not how likely.' }, { id: 'n0', text: 'Tomorrow', then: 'That is the day.' }] },
        verdict('bring', { then: wet })],
      deciding: ['b'], reason: 'The forecast says 80% chance of rain. That is well over half, so rain is more likely than not.' },
    { id: 'c-2', strand: 'chance', facets: { kind: 'dry' },
      blocks: prose(line('Saturday:', '20% chance', 'of a shower.')),
      asks: [verdict('leave', { then: dry, slips: { bring: 'promise' } })],
      deciding: ['b'], reason: 'A 20% chance means rain on about two days in ten like this one. Under half is less likely than not.',
      need: 'A chance over 50% before you would carry it.' },
    { id: 'c-3', strand: 'chance', facets: { kind: 'wet' },
      blocks: prose(line('Tonight:', '65% chance of rain', 'near the coast.')),
      asks: [verdict('bring', { then: wet }),
        { id: 'why', kind: 'choose', prompt: 'Which words settle it?', when: { ask: 'v', is: ['leave'] },
          options: [{ id: 'w65', text: '65% chance of rain', ok: true }, { id: 'wc', text: 'near the coast', then: 'Where is not how likely.' }] }],
      deciding: ['b'], reason: 'Sixty-five percent is more than half, so bring the umbrella.' },
    { id: 'c-4', strand: 'chance', facets: { kind: 'dry' },
      blocks: prose(line('Sunday:', '30% chance of rain', 'in the hills.')),
      asks: [verdict('leave', { then: dry, slips: { bring: 'promise' } })], deciding: ['b'],
      reason: 'Thirty percent is under half. Rain is possible, not likely.' },
    { id: 'c-5', strand: 'chance', facets: { kind: 'wet' },
      blocks: prose(line('Monday:', '90% chance', 'of a downpour.')),
      asks: [verdict('bring', { then: wet })], deciding: ['b'], reason: 'Ninety percent is nearly certain.' },
    { id: 'c-6', strand: 'chance', facets: { kind: 'dry' },
      blocks: prose(line('Thursday:', '10% chance', 'of drizzle.')),
      asks: [verdict('leave', { then: dry, slips: { bring: 'promise' } })], deciding: ['b'], reason: 'Ten percent is a small chance.' },
    { id: 'k-1', strand: 'chance', facets: { kind: 'wet' },
      blocks: prose(line('Friday:', '75% chance of rain', 'all morning.')),
      asks: [verdict('bring', { then: wet })], deciding: ['b'], reason: 'Seventy-five percent is likely.' },
    { id: 'k-2', strand: 'chance', facets: { kind: 'dry' },
      blocks: prose(line('Wednesday:', '15% chance', 'of a light shower.')),
      asks: [verdict('leave', { then: dry, slips: { bring: 'promise' } })], deciding: ['b'], reason: 'Fifteen percent is unlikely.' },
    { id: 'k-3', strand: 'chance', facets: { kind: 'wet' },
      blocks: prose(line('Overnight:', '60% chance of rain', 'into the morning.')),
      asks: [verdict('bring', { then: wet })], deciding: ['b'], reason: 'Sixty percent is more than half.' },
    { id: 'k-4', strand: 'chance', facets: { kind: 'dry' },
      blocks: prose(line('Next Tuesday:', '25% chance', 'of rain.')),
      asks: [verdict('leave', { then: dry, slips: { bring: 'promise' } })], deciding: ['b'], reason: 'A quarter chance is under half.' },
    { id: 'w-chance', strand: 'chance', facets: { kind: 'wet' },
      blocks: prose(line('Tomorrow:', '70% chance of rain', 'after lunch.')),
      asks: [verdict('bring', { then: wet })],
      steps: [{ id: 's1', does: 'Find the chance.', working: 'It says 70%.' },
        { id: 's2', does: 'Compare it with half.', working: '70% is more than 50%, so rain is more likely than not.' },
        { id: 's3', does: 'Decide.', working: 'Bring the umbrella.' }],
      deciding: ['b'], reason: 'Seventy percent is over half, so rain is likely.' }
  ]);
})();

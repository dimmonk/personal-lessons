// Fixed questions of the strand "when the rain comes": the second lesson's groups and check, and a few held in reserve for the review.
(() => {
  const forecast = (chance, when) => [{ kind: 'prose', lines: [{ id: 'a', text: `${chance} chance of rain.` }, { id: 'b', text: when }, { id: 'c', text: 'You walk at noon.' }] }];
  const hour = (right, wrongText) => ({ id: 'when', kind: 'choose', prompt: 'When does the rain start?',
    options: [{ id: 'early', text: 'Before noon', ok: right === 'early', then: right === 'early' ? 'You are out in it.' : wrongText },
      { id: 'late', text: 'After noon', ok: right === 'late', then: right === 'late' ? 'It is over before you are out, or has not begun.' : wrongText }] });
  const decide = right => ({ id: 'v', kind: 'choose', prompt: 'Do you bring an umbrella for your walk?', from: 'verdict', right,
    then: { bring: 'You carry it through the rain you will meet.', leave: 'Your walk stays dry.' }, slips: right === 'leave' ? { bring: 'promise' } : {} });
  const steps = (start, outcome) => [{ id: 'a', does: 'Find the hour the rain starts.', working: start, ask: 'when' }, { id: 'b', does: 'Compare it with your walk at noon.', working: outcome, ask: 'v' }];
  const make = (id, kind, chance, when, early) => ({ id, strand: 'timing', facets: { kind },
    blocks: forecast(chance, when), asks: [hour(early ? 'early' : 'late', 'Read the line again for the hour.'), decide(early ? 'bring' : 'leave')],
    steps: steps(early ? 'It starts before noon.' : 'It starts after noon.', early ? 'Your walk is in the rain.' : 'Your walk is over by then.'),
    deciding: ['b'], reason: early ? 'The rain starts before you walk, so you meet it.' : 'The rain starts after you are back.' });
  FC.items('fixture', [
    { ...make('t-1', 'wet', '70%', 'It starts at 11 a.m.', true) },
    { ...make('t-2', 'dry', '70%', 'It starts at 4 p.m.', false) },
    { ...make('t-3', 'wet', '60%', 'It starts at 9 a.m.', true) },
    { ...make('t-4', 'dry', '60%', 'It starts at 6 p.m.', false) },
    { ...make('t-5', 'wet', '80%', 'It starts at 10 a.m.', true) },
    { ...make('t-6', 'dry', '80%', 'It starts at 3 p.m.', false) },
    { ...make('u-1', 'wet', '50%', 'It starts at 8 a.m.', true) },
    { ...make('u-2', 'dry', '50%', 'It starts at 5 p.m.', false) },
    { ...make('u-3', 'wet', '90%', 'It starts at 7 a.m.', true) },
    { ...make('b-1', 'wet', '65%', 'It starts at 11:30 a.m.', true) },
    { ...make('b-2', 'dry', '65%', 'It starts at 2 p.m.', false) },
    { ...make('b-3', 'wet', '75%', 'It starts at 10:30 a.m.', true) },
    { ...make('b-4', 'dry', '75%', 'It starts at 7 p.m.', false) },
    { id: 'w-timing', strand: 'timing', facets: { kind: 'wet' }, blocks: forecast('85%', 'It starts at 9 a.m.'), asks: [hour('early', 'Read the line again for the hour.'), decide('bring')],
      steps: steps('It starts at 9 a.m.', 'You walk at noon, in the rain.'), deciding: ['b'], reason: 'The hour decides: nine in the morning is before your walk.' }
  ]);
})();

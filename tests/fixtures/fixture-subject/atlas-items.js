// "Atlas of the isles": the questions of the test subject. Taps on a shape (one with a hole in it, one with a slip), on a microstate's dot, a neighbor and its
// water (with water, and landlocked), a lit place named from memory.
(() => {
  const name = text => [{ kind: 'prose', text }];   // the name is the question; the map is where it is answered
  const tap = (right, extra = {}) => ({ id: 'where', kind: 'place', prompt: 'Tap it on the map.', map: 'isles', right, ...extra });
  const border = of => ({ id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: 'Tap a country next to it, then the water it touches.', map: 'isles', of });
  FC.items('atlas', [
    { id: 'w-tap', strand: 'tap', facets: { form: 'tap' }, blocks: name('Alder'), asks: [tap('alder')],
      steps: [{ id: 'find', does: 'Find it.', working: 'Alder is the big country at the left.' }], reason: 'Alder is the big country at the left, with Cedar inside it.' },
    { id: 't-birch', strand: 'tap', facets: { form: 'tap' }, blocks: name('Birch'), asks: [tap('birch', { slips: { alder: 'next-door' } })], reason: 'Birch is the country at the right.' },
    { id: 't-cedar', strand: 'tap', facets: { form: 'tap' }, blocks: name('Cedar'), asks: [tap('cedar')], reason: 'Cedar sits inside Alder, which has a hole where Cedar is.' },
    { id: 't-speck', strand: 'tap', facets: { form: 'tap' }, blocks: name('Speck'), asks: [tap('speck')], reason: 'Speck is a dot below Birch, too small to be a shape.' },
    { id: 't-sea', strand: 'tap', facets: { form: 'tap' }, blocks: name('The sea'), asks: [tap('sea')], reason: 'The sea is the water around the countries, and the land under its outline is not the sea.' },
    { id: 'b-alder', strand: 'border', facets: { form: 'border' }, blocks: name('Alder'), asks: [border('alder')], reason: 'Alder is next to Birch and Cedar, and it touches the sea.' },
    { id: 'b-cedar', strand: 'border', facets: { form: 'border' }, blocks: name('Cedar'), asks: [border('cedar')], reason: 'Cedar is next to Alder only, and no water touches it: it is landlocked.' },
    { id: 'n-cedar', strand: 'name', facets: { form: 'name' }, blocks: [{ kind: 'map', region: 'isles', lit: ['cedar'] }],
      asks: [{ id: 'name', kind: 'text', prompt: 'What is the lit country called?', accept: ['Cedar'] }], reason: 'The lit country is Cedar, inside Alder.' },
    { id: 'c-tap', strand: 'last', facets: { form: 'tap' }, blocks: name('Birch'), asks: [tap('birch')], reason: 'Birch is the country at the right.' },
    { id: 'c-border', strand: 'checkborder', facets: { form: 'border' }, blocks: name('Birch'), asks: [border('birch')], reason: 'Birch is next to Alder, and it touches the sea.' },
    { id: 'c-name', strand: 'lastname', facets: { form: 'name' }, blocks: [{ kind: 'map', region: 'isles', lit: ['alder'] }],
      asks: [{ id: 'name', kind: 'text', prompt: 'What is the lit country called?', accept: ['Alder'] }], reason: 'The lit country is Alder, the big one at the left.' }
  ]);
})();

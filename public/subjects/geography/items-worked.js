// Geography, Europe, west: the five questions the lesson opens with, each shown done before the learner's first try (one of each kind the lesson
// asks): a name to tap, a flag to tap, a neighbor and its water, a country with no water, and a lit place named from memory.
// Each one's words are the group's (gen-europe-west.js, loaded first): the place's line, the words of the question, the line that tells its flag. So a place has one line.
(() => {
  const group = FC.get('geography').gens['g-europe-west'].places, placeOf = id => group.list.find(p => p.id === id);
  const lineOf = id => placeOf(id).reason, flagLineOf = id => placeOf(id).flagLine;
  const TAP = group.words.tap, FLAG = group.words.flag, NEIGHBOR = group.words.border;
  const place = (id, strand, form, blocks, ask, step, reason) => ({ id, strand, facets: { form }, blocks, asks: [ask], steps: [step], reason });
  FC.items('geography', [
    place('w-tap-belgium', 'europe-west', 'tap', [{ kind: 'prose', text: 'Belgium' }],
      { id: 'where', kind: 'place', prompt: TAP, map: 'europe-west', right: 'belgium' },
      { id: 'find', does: 'Find it from a country you know.', working: 'Find France first, then Belgium just north of it, on the North Sea.' },
      lineOf('belgium')),
    place('w-flag-belgium', 'europe-west', 'flag', [{ kind: 'flags', gen: 'g-europe-west', places: ['belgium'] }],
      { id: 'where', kind: 'place', prompt: FLAG, map: 'europe-west', right: 'belgium' },
      { id: 'read', does: 'Read the flag, then find the country.', working: flagLineOf('belgium') },
      'That flag is Belgium\'s, the small country on the North Sea.'),
    place('w-border-belgium', 'europe-west', 'border', [{ kind: 'prose', text: 'What borders Belgium?' }],
      { id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: NEIGHBOR, map: 'europe-west', of: 'belgium' },
      { id: 'touch', does: 'Tap one country that touches it, then the water that touches it.', working: 'Belgium touches France, Germany, Luxembourg and the Netherlands, and the North Sea.' },
      'Belgium touches four countries and one sea.'),
    place('w-landlocked-switzerland', 'europe-west', 'border', [{ kind: 'prose', text: 'What borders Switzerland?' }],
      { id: 'borders', kind: 'place', mode: 'neighbor-water', prompt: NEIGHBOR, map: 'europe-west', of: 'switzerland' },
      { id: 'none', does: 'Tap one neighbor, then look for water.', working: 'No sea or ocean touches Switzerland, so it is landlocked: tap a neighbor, then Landlocked.' },
      lineOf('switzerland')),
    { id: 'w-name-france', strand: 'europe-west', facets: { form: 'name' }, blocks: [{ kind: 'prose', text: group.words.name }, { kind: 'map', region: 'europe-west', lit: ['france'] }],
      asks: [{ id: 'name', kind: 'text', prompt: group.words.name, accept: ['France'] }],
      steps: [{ id: 'read', does: 'Read the lit shape.', working: 'The large country between the Atlantic and the Mediterranean is France.' }],
      reason: lineOf('france') }
  ]);
})();

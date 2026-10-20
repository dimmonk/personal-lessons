// A made-up subject, used only by the tests: finding places on a map. It exercises the map block (blank, labelled, with a place lit), the place ask
// (a tap on a shape, a tap on a microstate's dot, a neighbor and its water, "Landlocked") and a lit place named from memory. Never shipped.
FC.subject('atlas', {
  name: 'Atlas of the isles',
  field: 'skills',
  rev: 1,
  standard: 2,
  history: [{ rev: 1, date: '2026-10-12', change: 'Made for the tests of the map block and the place ask.' }],
  endResult: 'Put a named place on a map with no names on it, and say what it borders.',
  parts: [{ id: '1', title: 'The isles' }, { id: '2', title: 'The isles again' }],
  complete: true,
  lists: { slip: [{ id: 'next-door', text: 'tapped the country next to it' }] },
  facets: { form: { name: 'How it is asked', values: [{ id: 'tap', text: 'tapped' }, { id: 'name', text: 'named' }, { id: 'border', text: 'its neighbor and water' }, { id: 'flag', text: 'its flag' }] } },
  mix: [],
  strands: [{ id: 'tap', title: 'Tapping places' }, { id: 'border', title: 'Neighbors and water' }, { id: 'name', title: 'Naming a lit place' }, { id: 'last', title: 'The last tap' }, { id: 'lastname', title: 'The last name' }, { id: 'checkborder', title: 'The last neighbors' }, { id: 'isles', title: 'The places of the isles' }],
  // the places come from one list, and the questions that name a lit place are answered against it: where it comes from, and the day it was looked up
  refs: [{ id: 'map-data', text: 'The shapes and names of the map', value: 'Natural Earth, public domain', asOf: '2026-10-12', source: 'https://www.naturalearthdata.com/' }],
  readingShare: 0.9
});

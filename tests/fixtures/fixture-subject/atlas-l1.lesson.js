// "Atlas of the isles", lesson 1: the labelled map once, a worked tap, a group of taps, a group of neighbors and water and a lit place, and a check.
FC.lesson('atlas', {
  id: 'l1', part: '1', title: 'The isles', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-12', change: 'First version, for the tests.' }],
  why: 'A place is where it is on the map. Find it on a map with no names.',
  flow: [
    { title: 'The isles, with their names', show: [{ kind: 'map', region: 'isles', labels: true }, { kind: 'map', region: 'isles', labels: ['birch', 'crumb'], view: [235, 60, 3] }] },
    { worked: 'w-tap' },
    { set: { items: ['t-birch', 't-cedar', 't-speck', 't-sea'], order: 'listed' } },
    { set: { items: ['b-alder', 'b-cedar', 'n-cedar'], order: 'listed' } }
  ],
  check: { items: ['c-tap', 'c-border', 'c-name'], feedback: 'at-end', pass: [{ right: { min: 3 } }] }
});

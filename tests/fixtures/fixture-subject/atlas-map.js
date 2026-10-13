// A made-up region for the tests of the map block and the place ask: three shapes and a sea, in the form the build writes (tools/maps). Never shipped.
//   alder   a country with cedar as a hole in it (so a tap inside cedar is not on alder), and two neighbors; it touches the sea
//   cedar   a country wholly inside alder: landlocked
//   birch   a country beside alder, touching the sea
//   speck   a microstate, a dot with a minimum tap radius
//   crumb   a microstate inside birch (a hole in it), with its name set away from its dot on a line to it: a tap on its circle is not a tap on birch
//   sea     a sea whose outline covers the whole map, land and all (a tap on land is never on it)
(() => {
  const Q = 10, rect = (x0, y0, x1, y1) => [[x0, y0], [x1, y0], [x1, y1], [x0, y1]];
  const steps = pts => pts.flatMap((p, i) => [Math.round((p[0] - (i ? pts[i - 1][0] : 0)) * Q), Math.round((p[1] - (i ? pts[i - 1][1] : 0)) * Q)]);
  const rings = [rect(20, 20, 150, 120), rect(60, 50, 110, 90), rect(150, 20, 280, 120), rect(0, 0, 300, 200), rect(200, 140, 202, 142), rect(254, 49, 256, 51)];
  FC.map('isles', {
    name: 'The isles', size: [300, 200], q: Q, land: ['country'], draw: ['country'], labelled: ['country', 'sea'], source: 'made for the tests',
    rings: rings.map(steps),
    places: [
      { id: 'alder', name: 'Alder', kind: 'country', rings: [0, 1], at: [85, 35], neighbors: ['birch', 'cedar'], water: ['sea'] },
      { id: 'cedar', name: 'Cedar', kind: 'country', rings: [1], at: [85, 70], neighbors: ['alder'], water: [] },
      { id: 'birch', name: 'Birch', kind: 'country', rings: [2, 5], at: [215, 70], neighbors: ['alder'], water: ['sea'] },
      { id: 'speck', name: 'Speck', kind: 'country', rings: [4], dot: [2010, 1410], at: [201, 141], neighbors: [], water: ['sea'] },
      { id: 'crumb', name: 'Crumb', kind: 'country', rings: [5], dot: [2550, 500], at: [255, 50], lead: [-40, -22], neighbors: [], water: [] },
      { id: 'sea', name: 'The sea', kind: 'sea', rings: [3], at: [150, 170] }
    ]
  });
})();

// "Atlas of the isles": the group of places, made into questions in four forms (a name to tap, a lit place to name, a flag to tap, a neighbor and its
// water) from the map data of the isles. Speck, the microstate, has no flag and, in the lesson's check, is asked only as a name to tap.
FC.gen('atlas', [{
  id: 'g-isles', strand: 'isles',
  places: {
    map: 'isles', forms: ['tap', 'name', 'flag', 'border'],
    words: { tap: 'Tap it on the map.', name: 'What is the lit place called?', flag: 'Tap the country with this flag.', border: 'Tap a country next to it, then the water it touches.' },
    slips: { alder: 'next-door' },
    list: [
      { id: 'alder', name: 'Alder', flag: '🚩', flagLine: 'Its flag is one plain red pennant.', accept: ['Alder'], reason: 'Alder is the big country at the left, with Cedar inside it, and it touches the sea.' },
      { id: 'birch', name: 'Birch', flag: '🏁', flagLine: 'Its flag is checkered.', accept: ['Birch'], reason: 'Birch is the country at the right, next to Alder, and it touches the sea.' },
      { id: 'cedar', name: 'Cedar', flag: '🏴', flagLine: 'Its flag is plain black.', accept: ['Cedar'], reason: 'Cedar sits inside Alder, which is the only country next to it, so it has no coast.' },
      { id: 'speck', name: 'Speck', accept: ['Speck'], reason: 'Speck is a dot of a country below Birch, too small to be a shape.' },
      { id: 'sea', name: 'The sea', accept: ['The sea'], reason: 'The sea is the water around the countries.' }
    ]
  }
}]);

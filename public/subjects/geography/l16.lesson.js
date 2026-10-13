// Geography, part 16, Europe, west: the pilot. Five questions shown done (one of each kind), one look at the map with its names, recall in the four
// forms (a name to tap, a lit place to name, a flag to tap, a neighbor and its water), then the check drawn from the group of places by form: the
// split is fixed, the five microstates are asked only as a name to tap, and the pass mark is 10 of 12. Design record: docs/subjects/geography/design.md, block l16.
(() => {
  const GEN = 'g-europe-west';
  const MICROSTATES = ['andorra', 'monaco', 'liechtenstein', 'san-marino', 'vatican-city'];
  const COUNTRIES = ['portugal', 'spain', 'france', 'belgium', 'netherlands', 'luxembourg', 'germany', 'austria', 'switzerland', 'italy'];
  // the look names the countries, the five tiny ones, the Alps and the water a neighbor question can end on
  const WATER = ['atlantic', 'north-sea', 'english-channel', 'bay-of-biscay', 'mediterranean', 'tyrrhenian', 'adriatic'];
  const look = [...COUNTRIES, ...MICROSTATES, 'alps', ...WATER];
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  // Austria and Switzerland are asked back to back, the other thirteen places each once; the group shuffles
  const taps = [[one('austria', 'tap'), one('switzerland', 'tap')], ...[...COUNTRIES, ...MICROSTATES].filter(id => id !== 'austria' && id !== 'switzerland').map(id => one(id, 'tap'))];

  FC.lesson('geography', {
    id: 'l16', part: '16', title: 'Europe, west', rev: 1, status: 'draft',
    history: [{ rev: 1, date: '2026-10-13', change: 'First version, the pilot of the subject.' }],
    why: 'The news says a strike has shut the border between Belgium and France. If you cannot picture where Belgium is, what touches it and what water it is on, the story tells you little. In twelve minutes you will place the fifteen countries of western Europe on a blank map, name them, know their flags, and say what touches each.',
    flow: [
      { worked: 'w-tap-belgium' },
      { worked: 'w-flag-belgium' },
      { worked: 'w-border-belgium' },
      { worked: 'w-landlocked-switzerland' },
      { worked: 'w-name-france' },
      { title: 'Western Europe, with its names',
        show: [
          { kind: 'prose', text: 'Look for about a minute and say each name as you find it, from Portugal in the southwest up to Germany and Italy, then the five tiny countries. Zoom in if you need to. The names do not come back: next you find each place on a map with no names.' },
          { kind: 'map', region: 'europe-west', labels: look }
        ] },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: [{ gen: GEN, n: COUNTRIES.length, with: { form: 'name' } }], order: 'listed' } },
      { set: { items: [{ gen: GEN, n: COUNTRIES.length, with: { form: 'flag' } }], order: 'listed' } },
      { set: { items: [{ gen: GEN, n: COUNTRIES.length / 2, with: { form: 'border' } }], order: 'listed' } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 5, name: 3, flag: 2, border: 2 }, only: { tap: MICROSTATES } } },
      feedback: 'at-end',
      pass: [{ right: { min: 10 } }]
    }
  });
})();

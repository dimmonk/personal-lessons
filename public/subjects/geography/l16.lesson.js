// Geography, part 16, Europe, west: the pilot. Five questions shown done (one of each kind), one look at the map with its names and the ten flags beside them
// (three views of the region, west to east, each readable on a phone), recall in the four forms (a name to tap, a lit place to name, a flag to tap, a neighbor
// and its water), then the check drawn from the group of places by form: the split is fixed, the five microstates are asked only as a name to tap, and the
// pass mark is 10 of 12. Design record: docs/subjects/geography/design.md, block l16.
(() => {
  const GEN = 'g-europe-west';
  const MICROSTATES = ['andorra', 'monaco', 'liechtenstein', 'san-marino', 'vatican-city'];
  const COUNTRIES = ['portugal', 'spain', 'france', 'belgium', 'netherlands', 'luxembourg', 'germany', 'austria', 'switzerland', 'italy'];
  // The look is three views of the map, west to east, each naming the places in it (the countries, the five tiny ones on lines, the Alps and the water a neighbor
  // question can end on) with the flags of the countries it holds beside their names: Iberia and France, the Low Countries and Germany, the Alps and Italy.
  const PANELS = [
    { says: 'Portugal, Spain, France and Andorra.', view: [340, 650, 1.8], flags: ['portugal', 'spain', 'france'],
      names: ['portugal', 'spain', 'france', 'andorra', 'atlantic', 'bay-of-biscay', 'english-channel', 'mediterranean'] },
    { says: 'Belgium, the Netherlands, Luxembourg and Germany.', view: [640, 380, 2.2], flags: ['belgium', 'netherlands', 'luxembourg', 'germany'],
      names: ['belgium', 'netherlands', 'luxembourg', 'germany', 'france', 'switzerland', 'austria', 'liechtenstein', 'north-sea'] },
    { says: 'Switzerland, Austria and Italy, with four tiny countries.', view: [735, 700, 2.2], flags: ['switzerland', 'austria', 'italy'],
      names: ['switzerland', 'austria', 'italy', 'liechtenstein', 'monaco', 'san-marino', 'vatican-city', 'alps', 'adriatic', 'tyrrhenian', 'mediterranean'] }
  ];
  const panelBlocks = ({ says, view, flags, names }) => [{ kind: 'prose', text: says }, { kind: 'map', region: 'europe-west', labels: names, view }, { kind: 'flags', gen: GEN, places: flags, names: true }];
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  // Austria and Switzerland are asked back to back, the other thirteen places each once; the group shuffles
  const taps = [[one('austria', 'tap'), one('switzerland', 'tap')], ...[...COUNTRIES, ...MICROSTATES].filter(id => id !== 'austria' && id !== 'switzerland').map(id => one(id, 'tap'))];
  // the flags that are mistaken for each other are asked back to back, the Netherlands and Luxembourg, Belgium and Germany; the other six once each
  const PAIRS = [['netherlands', 'luxembourg'], ['belgium', 'germany']];
  const flags = [...PAIRS.map(pair => pair.map(id => one(id, 'flag'))), ...COUNTRIES.filter(id => !PAIRS.flat().includes(id)).map(id => one(id, 'flag'))];

  FC.lesson('geography', {
    id: 'l16', part: '16', title: 'Europe, west', rev: 2, status: 'draft',
    history: [{ rev: 1, date: '2026-10-13', change: 'First version, the pilot of the subject.' },
      { rev: 2, date: '2026-10-13', change: 'After the first stand-in review: the flags are taught before they are asked (each flag large beside its name, with the line that tells it from the one it is mistaken for, and the flags that look alike asked one after the other); the look is three views of the map with names readable on a phone and the five tiny countries named on lines; the lit sea is blue; the lit-place example says what is asked; the promise of the first screen is the ten larger countries.' }],
    why: 'The news says a strike has shut the border between Belgium and France. If you cannot picture where Belgium is, what touches it and what water it is on, the story tells you little. In twelve minutes you will place the fifteen countries of western Europe on a blank map, name the ten larger ones and tell them by their flags, and say what touches each of those.',
    flow: [
      { worked: 'w-tap-belgium' },
      { worked: 'w-flag-belgium' },
      { worked: 'w-border-belgium' },
      { worked: 'w-landlocked-switzerland' },
      { worked: 'w-name-france' },
      { title: 'Western Europe, with its names',
        show: [
          { kind: 'prose', text: 'Look for about a minute, at three views from west to east. Say each name as you find it, and study each flag, most of all the ones that look alike. None of it stays up: next you find places on a map with no names, and tell countries by their flags alone.' },
          ...PANELS.flatMap(panelBlocks)
        ] },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: [{ gen: GEN, n: COUNTRIES.length, with: { form: 'name' } }], order: 'listed' } },
      { set: { items: flags, order: 'shuffle' } },
      { set: { items: [{ gen: GEN, n: COUNTRIES.length / 2, with: { form: 'border' } }], order: 'listed' } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 5, name: 3, flag: 2, border: 2 }, only: { tap: MICROSTATES } } },
      feedback: 'at-end',
      pass: [{ right: { min: 10 } }]
    }
  });
})();

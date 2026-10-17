// Geography, part 16, Europe, west: the way of thinking first (the area, what touches it, the water), with this region's areas; the names on one map per view,
// the look-alikes told apart before any case uses them; a country tapped, a lit country named and two neighbors and their water shown done, each in the three
// steps and each using only what the names screens showed; every place tapped (Austria and Switzerland one after the other), then the four look-alikes named and
// four neighbors and their water; then the check drawn from the group by form. The five microstates and the larger countries not named in the practice are asked
// only as a name to tap. The flags are part 16b. Design record: docs/subjects/geography/design.md, block l16.
(() => {
  const GEN = 'g-europe-west';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the four countries most often mixed up with another: named from memory, and asked for what touches them (a place is asked by its name or its neighbors only if it was in the practice)
  const NAMED = ['belgium', 'netherlands', 'austria', 'switzerland'];
  const PAIR = ['austria', 'switzerland'];
  // one map per view, west to east, each naming the places in it (the countries, the five tiny ones on lines, the mountains and the water a neighbor question can end on)
  const SCREENS = [
    { title: 'Iberia and France', says: 'Portugal and Spain share Iberia. France is the big country beside it. Tiny Andorra is in the mountains between them.', view: [340, 650, 1.8], slips: ['spain-portugal'],
      names: ['portugal', 'spain', 'france', 'andorra', 'atlantic', 'bay-of-biscay', 'english-channel', 'mediterranean'] },
    { title: 'The Low Countries and Germany', says: 'Belgium, the Netherlands and Luxembourg are the Low Countries. Germany is across the middle.', view: [640, 380, 2.2], slips: ['low-countries'],
      names: ['belgium', 'netherlands', 'luxembourg', 'germany', 'france', 'switzerland', 'austria', 'liechtenstein', 'north-sea'] },
    { title: 'The Alps and Italy', says: 'Switzerland and Austria are in the Alps. Italy is the boot below them. Four tiny countries are here too.', view: [735, 700, 2.2], slips: ['austria-switzerland', 'andorra-monaco', 'inside-italy'],
      names: ['switzerland', 'austria', 'italy', 'liechtenstein', 'monaco', 'san-marino', 'vatican-city', 'alps', 'adriatic', 'tyrrhenian', 'mediterranean'] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about a minute at each of three views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'europe-west', labels: names, view }, ...apart(slips)] });
  const taps = [PAIR.map(id => one(id, 'tap')), ...PLACES.filter(id => !PAIR.includes(id)).map(id => one(id, 'tap'))];

  FC.lesson('geography', {
    id: 'l16', part: '16', title: 'Europe, west', rev: 4, status: 'live',
    history: [{ rev: 1, date: '2026-10-13', change: 'First version, the pilot of the subject.' },
      { rev: 2, date: '2026-10-13', change: 'After the first stand-in review: the flags are taught before they are asked (each flag large beside its name, with the line that tells it from the one it is mistaken for, and the flags that look alike asked one after the other); the look is three views of the map with names readable on a phone and the five tiny countries named on lines; the lit sea is blue; the lit-place example says what is asked; the promise of the first screen is the ten larger countries.' },
      { rev: 3, date: '2026-10-14', change: 'After the owner\'s try: a neighbor and its water asks "What borders <place>?" instead of showing the bare name, so it never reads as a name to tap; Undo takes back the neighbor\'s tap; the place asked about is filled and its neighbors tinted and named; a worked map says it is done for the learner.' },
      { rev: 4, date: '2026-10-17', change: 'Rebuilt to the shape of parts 1 to 7b: it opens with the way of thinking (the area, what touches it, the water) and this region\'s areas; one screen of names for each of three views, with the look-alikes told apart; the worked cases in the three steps, each using only what the names showed; the feedback gives the area, what touches the place and its water; four look-alikes named and four neighbors and their water. The flags are now part 16b.' }],
    why: 'The news says a strike has shut the border between Belgium and France. If you cannot picture where Belgium is, what touches it and what water it is on, the story tells you little. In about eighteen minutes you will place the fifteen countries of western Europe on a blank map, by finding the area each sits in first, then name the four most often mixed up and say what touches each.',
    flow: [
      { title: 'How to find a country', show: [{ kind: 'prose', text: 'The same three questions as for any place. What bigger area is it in? That tells you where on the map to look. What touches it? Its neighbors pin the exact spot, and they are what the news names. What water is it on? Coast or inland is often the point of the story. Western Europe is crowded, so find the area first. Iberia is the peninsula in the far southwest, with Portugal and Spain; France is the big country beside it. The Low Countries (Belgium, the Netherlands and Luxembourg) lie on the North Sea, with Germany across the middle. The Alps hold Switzerland and Austria, and Italy is the boot below them. Five tiny countries sit among these. After every answer the feedback gives you the three: Area, Touches, Water.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-belgium' },
      { worked: 'w-name-france' },
      { worked: 'w-landlocked-switzerland' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: [{ gen: GEN, n: NAMED.length, with: { form: 'name' } }, { gen: GEN, n: NAMED.length, with: { form: 'border' } }], order: 'shuffle' } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 6, name: 2, border: 2 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();

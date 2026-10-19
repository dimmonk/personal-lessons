// Geography, part 18, Europe, central and east: the way of thinking first (the area, what touches it, the water), with this region's areas; the names on one map per
// view, the look-alikes told apart before any case uses them; a country tapped, a lit country named and a neighbor and its water shown done, each in the three steps and
// each using only what the names screens showed; every place tapped (the look-alike pairs one after the other), then the look-alikes named and four neighbors and their
// water, mixed with earlier lessons; then the check drawn from the group by form, names asked only of places named in the practice. Russia and the Black Sea are asked a
// name to tap and Russia a lit name only (its far coasts are off this map). The flags are part 18b. Design record: docs/subjects/geography/design.md, block l18.
(() => {
  const GEN = 'g-europe-east';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the four countries most often mixed up with another: named from memory, and asked for what touches them (a place is asked by its name or its neighbors only if it was in the practice)
  const NAMED = ['czechia', 'slovakia', 'romania', 'moldova'];
  // the pairs mixed up with each other, tapped one after the other
  const PAIRS = [['czechia', 'slovakia'], ['romania', 'moldova'], ['belarus', 'ukraine']];
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };
  // one map per view, west to east, each naming the places in it (the countries, the water and the mountains a neighbor question can end on, and two countries of part 16 as anchors)
  const SCREENS = [
    { title: 'Central Europe: Poland, Czechia, Slovakia and Hungary', slips: ['czechia-slovakia'], view: [185, 420, 2.8],
      says: 'Poland is the big country in the north. Czechia and Slovakia lie side by side below it, Czechia in the west and Slovakia in the east. Hungary is the plain below Slovakia, inside the curve of the Carpathians. Germany and Austria, from the map of western Europe, are on their west.',
      names: ['poland', 'czechia', 'slovakia', 'hungary', 'germany', 'austria', 'carpathians'] },
    { title: 'The south-east: Romania and Moldova', slips: ['romania-moldova'], view: [350, 565, 2.6],
      says: 'Romania curves round the Carpathians down to the Black Sea. Little Moldova is the country between Romania and Ukraine, with no coast.',
      names: ['romania', 'moldova', 'hungary', 'ukraine', 'carpathians', 'black-sea'] },
    { title: 'The east: Belarus, Ukraine and Russia', slips: ['belarus-ukraine'], view: [480, 420, 1.45],
      says: 'Belarus is the flat inland country between Poland and Russia. Ukraine is the big country south of it, on the Black Sea, with the Sea of Azov in its corner. Russia is the biggest country of all: only its west is on this map, and it goes on far beyond.',
      names: ['belarus', 'ukraine', 'russia', 'poland', 'black-sea', 'sea-of-azov'] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about 40 seconds at each of three views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'europe-east', labels: names, view }, ...apart(slips)] });
  const taps = [...PAIRS.map(pair => pair.map(id => one(id, 'tap'))), ...PLACES.filter(id => !PAIRS.flat().includes(id)).map(id => one(id, 'tap'))];

  FC.lesson('geography', {
    id: 'l18', part: '18', title: 'Europe, central and east', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version: the nine countries from Poland to Russia and the Black Sea, in the shape of part 16; the flags are part 18b.' }],
    why: 'The news says a pipeline through Slovakia has stopped, or that fighting is near the Moldovan border. If Central and Eastern Europe is one gray blur to you, you cannot picture where, who is next door, or what water is near. In about fifteen minutes you will place the nine countries from Poland to Russia and the Black Sea on a blank map, by finding the area each sits in first, then name the four most often mixed up and say what touches them.',
    flow: [
      { title: 'How to find a country', show: [{ kind: 'prose', text: 'The same three questions as for any place. What bigger area is it in? That tells you where on the map to look. What touches it? Its neighbors pin the exact spot, and they are what the news names. What water is it on? Coast or inland is often the point of the story. On the world map all nine of these countries are Eastern Europe; here that region is split into three smaller areas so each is easier to find. Central Europe is four countries: Poland in the north, Czechia and Slovakia side by side below it, and Hungary below them. The south-east is Romania, curving round the Carpathians to the Black Sea, with small Moldova beside it. The east is the wide plain of Belarus, Ukraine and Russia, the biggest country of all. Find the area first, then the country. After every answer the feedback gives you the three: Area, Touches, Water.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-moldova' },
      { worked: 'w-name-hungary' },
      { worked: 'w-border-moldova' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: [...NAMED.map(id => one(id, 'name')), { gen: GEN, n: 4, with: { form: 'border' } }], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 5, name: 3, border: 2 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();

// Geography, part 23, the Sahel and Central Africa: the way of thinking first (the area, what touches it, the water), with this region's areas (the Sahel,
// then Central Africa); the names on one map per view, with the look-alikes told apart before any case uses them; a country tapped, a lit country named and a
// landlocked country's neighbors and water shown done, each in the three steps and each using only what the names screens showed; every place tapped (the two
// Congos one after the other), then the four look-alikes named and four neighbors and their water, mixed with earlier lessons; then the check drawn from the group
// by form. The larger countries not named in the practice are asked only as a name to tap. The flags are part 23b. Design record:
// docs/subjects/geography/design.md, block l23.
(() => {
  const GEN = 'g-africa-central';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the four countries most often mixed up with another: named from memory, and asked for what touches them (a place is asked by its name or its neighbors only if it was in the practice)
  const NAMED = ['republic-of-the-congo', 'democratic-republic-of-the-congo', 'chad', 'central-african-republic'];
  const PAIR = ['republic-of-the-congo', 'democratic-republic-of-the-congo'];
  // one map per view, the Sahel first, then the Gulf of Guinea coast, then the middle of the continent, each naming the places in it (the countries and the water; the
  // countries around them, learned in parts 21 and 22, are named so a neighbor question can end on one)
  const SCREENS = [
    { title: 'The Sahel, west to east', says: 'The Sahel is the dry belt across Africa just south of the Sahara. From the Atlantic going east: Mauritania, Mali and Niger, with Burkina Faso, the small one, under Mali and Niger, and Chad at the east end. The belt goes on east, past Chad, through Sudan.', view: [540, 260, 1.15], slips: ['sahel-row'],
      names: ['mauritania', 'mali', 'burkina-faso', 'niger', 'chad', 'algeria', 'libya', 'nigeria', 'sahara', 'sahel'] },
    { title: 'Cameroon and the Gulf of Guinea coast', says: 'Cameroon is the big country at the corner where the coast turns south. Below it are small Equatorial Guinea and then Gabon. The two islands of São Tomé and Príncipe are out in the Gulf.', view: [560, 530, 2.6], slips: ['gulf-coast-three'],
      names: ['cameroon', 'equatorial-guinea', 'gabon', 'sao-tome-and-principe', 'gulf-of-guinea', 'nigeria', 'republic-of-the-congo'] },
    { title: 'Chad, the Central African Republic and the two Congos', says: 'The Central African Republic is in the middle of the continent, under Chad. Below it are the two Congos, on either side of the Congo River: the Republic of the Congo, the smaller one by Gabon, and the Democratic Republic of the Congo, the huge one, which also reaches Lake Tanganyika on its east.', view: [740, 430, 1.8], slips: ['chad-car', 'two-congos'],
      names: ['chad', 'central-african-republic', 'cameroon', 'gabon', 'republic-of-the-congo', 'democratic-republic-of-the-congo', 'congo-river', 'lake-tanganyika', 'sudan', 'south-sudan'] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about a minute at each of three views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'africa-central', labels: names, view }, ...apart(slips)] });
  const taps = [PAIR.map(id => one(id, 'tap')), ...PLACES.filter(id => !PAIR.includes(id)).map(id => one(id, 'tap'))];
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l23', part: '23', title: 'The Sahel and Central Africa', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version.' }],
    why: 'A headline says "Congo", and there are two of them. Another says a border has closed between Chad and Cameroon. If the middle of Africa is one blank to you, neither tells you much. In about fifteen minutes you will place the twelve countries from Mauritania to the two Congos on a blank map, by finding the area each sits in first, then name the four most often mixed up and say what touches each.',
    flow: [
      { title: 'How to find a country', show: [{ kind: 'prose', text: 'The same three questions as for any place. What bigger area is it in? That tells you where on the map to look. What touches it? Its neighbors pin the exact spot, and they are what the news names. What water is it on? Coast or inland is often the point of the story. Here there are two areas. The Sahel is the dry belt across Africa just south of the Sahara: Mauritania, Mali, Burkina Faso, Niger and Chad, west to east. Central Africa is the middle of the continent: Cameroon, at the corner where the coast turns south, then small Equatorial Guinea and Gabon on the coast, the Central African Republic inland, and the two Congos around the Congo River. Two small islands, São Tomé and Príncipe, lie out in the Gulf of Guinea. The Sahel is a belt that runs across two of the world map\'s parts from part 1b: Mauritania, Mali, Burkina Faso and Niger are West Africa there, and Chad is Central Africa. Both are true, and the feedback says so. Water here means a sea, an ocean or a big lake (Victoria, Tanganyika, Malawi), so a river or a small lake does not count: Lake Chad has shrunk too small to count, so Chad is landlocked. After every answer the feedback gives you the three: Area, Touches, Water.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-mali' },
      { worked: 'w-name-republic-of-the-congo' },
      { worked: 'w-landlocked-chad' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: [{ gen: GEN, n: NAMED.length, with: { form: 'name' } }, { gen: GEN, n: NAMED.length, with: { form: 'border' } }], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 5, name: 3, border: 2 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();

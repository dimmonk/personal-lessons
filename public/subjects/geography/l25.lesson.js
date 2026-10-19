// Geography, part 25, Southern Africa: the way of thinking first (the area, what touches it, the water), with this region's five areas (the Atlantic side, the Indian Ocean side,
// the inland states, the southern tip with the two small countries by it, the two island countries); the names on one map per view, the look-alikes told apart before any
// case uses them; a country tapped, a lit country named and a neighbor and its water shown done, each in the three steps and each using only what the names screens showed
// (or part 1); every place tapped (the look-alike pairs one after the other), then four look-alikes named and four neighbors and their water, mixed with the lessons before;
// then the check drawn from the group by form. The Kalahari, the six countries not named in the practice and the two island countries are asked only as a name to tap.
// The flags are part 25b. Design record: docs/subjects/geography/design.md, block l25.
(() => {
  const GEN = 'g-africa-south';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the four countries most often mixed up with another: named from memory, and asked for what touches them (a place is asked by its name or its neighbors only if it was in the practice)
  const NAMED = ['zambia', 'zimbabwe', 'angola', 'namibia'];
  // the places mixed up with each other, asked one after the other
  const SIDE = [['zambia', 'zimbabwe'], ['angola', 'namibia'], ['lesotho', 'eswatini'], ['madagascar', 'mauritius']];
  // one map per view, each naming the places in it (the countries, the water a neighbor question can end on, and a neighbor the worked cases start from)
  const SCREENS = [
    { title: 'The two coasts', says: 'Angola and Namibia are on the Atlantic, along the west coast: Angola in the north, Namibia below it. Mozambique is the long country on the Indian Ocean, along the east coast. Everything between the two coasts is inland.', slips: ['angola-namibia'],
      names: ['angola', 'namibia', 'mozambique', 'atlantic', 'indian'] },
    { title: 'The inland states and the Kalahari', says: 'Zambia, Zimbabwe, Malawi and Botswana have no coast. Zambia is the large one in the north and Zimbabwe the smaller one below it. Malawi is the long thin one in the east. Botswana is in the middle of the south, with most of the Kalahari, a huge dry sandy plain.', view: [390, 285, 1.8], slips: ['zambia-zimbabwe'],
      names: ['zambia', 'zimbabwe', 'malawi', 'botswana', 'kalahari', 'angola', 'mozambique'] },
    { title: 'South Africa, Lesotho and Eswatini', says: 'South Africa is the southern tip of Africa. Lesotho sits inside it, completely surrounded. Eswatini is a second small country beside it, in the northeast.', view: [372, 500, 2.8], slips: ['lesotho-eswatini'],
      names: ['south-africa', 'lesotho', 'eswatini'] },
    { title: 'The islands', says: 'Madagascar and Mauritius are the two island countries, out in the Indian Ocean. Madagascar is the huge island just off Mozambique, across the Mozambique Channel. Mauritius is a tiny island far to the east.', view: [687, 330, 1.6], slips: ['madagascar-mauritius'],
      names: ['madagascar', 'mauritius', 'mozambique-channel', 'mozambique', 'indian'] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about half a minute at each of four views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'africa-south', labels: names, ...(view ? { view } : {}) }, ...apart(slips)] });
  const taps = [...SIDE.map(pair => pair.map(id => one(id, 'tap'))), ...PLACES.filter(id => !SIDE.flat().includes(id)).map(id => one(id, 'tap'))];
  const named = [['zambia', 'zimbabwe'].map(id => one(id, 'name')), ['angola', 'namibia'].map(id => one(id, 'name'))];
  // a fifth of the second set is places of the lessons already built
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l25', part: '25', title: 'Southern Africa', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version, built to the shape of parts 1 to 7b and 16: it opens with the way of thinking (the area, what touches it, the water) and Southern Africa\'s five areas; one screen of names for each of four views, with the look-alikes told apart; the worked cases in the three steps, each using only what the names showed; every place tapped, four look-alikes named and four neighbors and their water, mixed with earlier lessons. The flags are part 25b.' }],
    why: 'A story says a cyclone has hit Mozambique and Malawi, or a drought has reached Zambia and Zimbabwe, or workers are crossing from Lesotho into South Africa. If Southern Africa is one blur to you, you cannot picture who is next to whom, or who has a coast. In about fifteen minutes you will place the twelve countries of Southern Africa, with the Kalahari, on a blank map, by finding the area each sits in first, then name the four most often mixed up and say what touches each.',
    flow: [
      { title: 'How to find a country', show: [{ kind: 'prose', text: 'The same three questions as for any place. What bigger area is it in? That tells you where on the map to look. What touches it? Its neighbors pin the spot, and they are what the news names. What water is it on? A coast, an island or the inland is often the point of the story; here water means a sea, an ocean or one of the big lakes (Victoria, Tanganyika, Malawi), so a river or a small lake does not count. Southern Africa has five areas. Along the Atlantic, in the west, are Angola and Namibia. Along the Indian Ocean, in the east, is Mozambique. Between the two coasts, with no sea of their own, are the inland states: Zambia, Zimbabwe, Malawi and Botswana, with the Kalahari, a desert, mostly in Botswana. At the southern tip is South Africa, with Lesotho inside it and Eswatini beside it. Out in the Indian Ocean are two island countries, Madagascar and Mauritius. Here the whole south of the continent is taken as one. On the world map of part 1b, Southern Africa is only its bottom five: Namibia, Botswana, South Africa, Lesotho and Eswatini. Mozambique, Zambia, Zimbabwe, Malawi and Madagascar are East Africa there, and Angola is Central Africa; the tiny island of Mauritius is not on that map at all. The feedback says which. Find the area first, then the country. After every answer the feedback gives you the three: Area, Touches, Water. It takes about fifteen minutes: four views, three questions done for you, then the thirteen places found, four named and four with what touches them.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-botswana' },
      { worked: 'w-name-south-africa' },
      { worked: 'w-border-mozambique' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: [...named, ...NAMED.map(id => one(id, 'border'))], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 6, name: 2, border: 2 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();

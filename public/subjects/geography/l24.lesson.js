// Geography, part 24, East Africa and the Horn: the way of thinking first (the area, what touches it, the water), with this region's four areas (the Horn, the upper
// Nile, the Great Lakes with Kenya and Tanzania, the islands); the names on one map per view, the look-alikes told apart before any case uses them; a country tapped,
// a lit country named and a neighbor and its water shown done, each in the three steps and each using only what the names screens showed (or part 1); every place
// tapped (the look-alike pairs one after the other), then four look-alikes named and four neighbors and their water, mixed with the lessons before; then the check
// drawn from the group by form. The Nile, Lake Victoria, the two island countries and the countries not named in the practice are asked only as a name to tap.
// The flags are part 24b. Design record: docs/subjects/geography/design.md, block l24.
(() => {
  const GEN = 'g-africa-east';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the four countries most often mixed up with another: named from memory, and asked for what touches them (a place is asked by its name or its neighbors only if it was in the practice)
  const NAMED = ['rwanda', 'burundi', 'south-sudan', 'eritrea'];
  const NAMED_PAIR = ['rwanda', 'burundi'];
  // the places mixed up with each other, asked one after the other
  const SIDE = [['rwanda', 'burundi'], ['kenya', 'tanzania'], ['seychelles', 'comoros']];
  // one map per view, each naming the places in it (the countries, the water a neighbor question can end on, and a neighbor the worked cases start from)
  const SCREENS = [
    { title: 'The Horn', says: 'The Horn is the point of land in the northeast that juts out into the Indian Ocean. Ethiopia is the big country inland. Eritrea, Djibouti and Somalia are its coast: Eritrea on the Red Sea in the north, tiny Djibouti at the mouth of the Red Sea, and Somalia along the tip.', view: [565, 310, 1.9], slips: ['horn-coasts'],
      names: ['eritrea', 'djibouti', 'ethiopia', 'somalia', 'yemen', 'red-sea', 'gulf-of-aden'] },
    { title: 'The Nile', says: 'South Sudan lies along the Nile, south of Sudan, and has no coast. The Nile runs north out of Lake Victoria, through Uganda and South Sudan and on into Sudan. Uganda sits on the lake\'s north shore.', view: [300, 320, 1.5], slips: ['sudan-south-sudan'],
      names: ['nile-river', 'sudan', 'south-sudan', 'uganda', 'ethiopia', 'lake-victoria'] },
    { title: 'The Great Lakes, Kenya and Tanzania', says: 'Lake Victoria is Africa\'s biggest lake, shared by Uganda, Kenya and Tanzania. Rwanda and Burundi are two small countries beyond its west shore, Rwanda to the north. Burundi lies on Lake Tanganyika, the long lake on its west, and Rwanda does not. Kenya and Tanzania are the two big countries on the Indian Ocean, Kenya the northern one.', view: [330, 600, 2.3], slips: ['rwanda-burundi', 'kenya-tanzania'],
      names: ['uganda', 'kenya', 'rwanda', 'burundi', 'tanzania', 'lake-victoria', 'lake-tanganyika'] },
    { title: 'The islands', says: 'Seychelles and Comoros are the two island countries off the coast, in the Indian Ocean. Seychelles is far out to the east. Comoros is in the Mozambique Channel, between Mozambique and Madagascar.', view: [740, 790, 2.0], slips: ['seychelles-comoros'],
      names: ['seychelles', 'comoros', 'madagascar', 'mozambique-channel', 'indian'] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about half a minute at each of four views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'africa-east', labels: names, view }, ...apart(slips)] });
  const taps = [...SIDE.map(pair => pair.map(id => one(id, 'tap'))), ...PLACES.filter(id => !SIDE.flat().includes(id)).map(id => one(id, 'tap'))];
  const names = [NAMED_PAIR.map(id => one(id, 'name')), ...NAMED.filter(id => !NAMED_PAIR.includes(id)).map(id => one(id, 'name'))];
  // a fifth of the second set is places of the lessons already built
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l24', part: '24', title: 'East Africa and the Horn', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version, built to the shape of parts 1 to 7b and 16: it opens with the way of thinking (the area, what touches it, the water) and East Africa\'s four areas; one screen of names for each of four views, with the look-alikes told apart; the worked cases in the three steps, each using only what the names showed; every place tapped, four look-alikes named and four neighbors and their water, mixed with earlier lessons. The flags are part 24b.' }],
    why: 'A story names Ethiopia and Eritrea, or says a ship was stopped in the Gulf of Aden, or that aid is crossing into South Sudan. If East Africa is one blur to you, you cannot picture who is next to whom. In about fifteen minutes you will place the twelve countries of East Africa and the Horn, with the Nile and Lake Victoria, on a blank map, by finding the area each sits in first, then name the four most often mixed up and say what touches each.',
    flow: [
      { title: 'How to find a country', show: [{ kind: 'prose', text: 'The same three questions as for any place. What bigger area is it in? That tells you where to look. What touches it? Its neighbors pin the spot, and they are what the news names. What water is it on? A coast, an island or the inland is often the point of the story; here water means a sea, an ocean or one of the big lakes (Victoria, Tanganyika, Malawi), so a river or a small lake does not count. East Africa has four areas. The Horn is the point of land in the northeast: Ethiopia, Eritrea, Djibouti and Somalia. South Sudan lies along the Nile, south of Sudan. The Great Lakes are around Lake Victoria: Uganda, Rwanda and Burundi, with Kenya and Tanzania on the Indian Ocean beside them. Two island countries lie off the coast: Seychelles and Comoros. All twelve are East Africa on the world map of part 1b, but that map\'s East Africa runs on south to Mozambique: part 25 takes those southern countries (Mozambique, Zambia, Zimbabwe, Malawi, Madagascar and Mauritius) with the rest of the south. Find the area first, then the country. After every answer the feedback gives you the three: Area, Touches, Water. It takes about fifteen minutes: four views, three questions done for you, then the fourteen places found, four named and four with what touches them.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-tanzania' },
      { worked: 'w-name-ethiopia' },
      { worked: 'w-border-uganda' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: [...names, ...NAMED.map(id => one(id, 'border'))], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 6, name: 2, border: 2 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();

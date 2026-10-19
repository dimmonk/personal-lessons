// Geography, part 28, East Asia and mainland Southeast Asia: the way of thinking first (the area, what touches it, the water), with this region's areas; the names on one map
// per view, the look-alikes told apart before any case uses them; a country tapped, a lit country named and a neighbor and its water shown done, each in the three steps and each
// using only what the names screens showed; every place tapped (the look-alikes one after the other), then the four look-alikes named and four neighbors and their water, mixed with
// earlier lessons; then the check drawn from the group by form, names asked only of places named in the practice. The other seven places and the two rivers are asked only as a
// name to tap; Japan and Taiwan have no neighbor on land, so they are never asked for one. Taiwan is named as the map data names it, with its disputed status said in its cue.
// The flags are part 28b. Design record: docs/subjects/geography/design.md, block l28.
(() => {
  const GEN = 'g-asia-east';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the four countries most often mixed up with another: named from memory, and asked for what touches them (a place is asked by its name or its neighbors only if it was in the practice)
  const NAMED = ['north-korea', 'south-korea', 'laos', 'cambodia'];
  // the places mixed up with each other, tapped one after the other (a pair holds two; Vietnam, the third of its three, is tapped on its own)
  const PAIRS = [['north-korea', 'south-korea'], ['taiwan', 'thailand'], ['mongolia', 'myanmar'], ['laos', 'cambodia'], ['yangtze-river', 'mekong-river']];
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };
  // one map per view, each naming the places in it (the countries and rivers, and the water or the neighbor a question can end on)
  const SCREENS = [
    { title: 'China and Mongolia', slips: [], view: [470, 270, 1.6],
      says: 'East Asia is the part of Asia on the Pacific. China is the huge country that fills most of it, and the Yangtze runs west to east across its middle. Mongolia is the big inland country north of China, with Russia, the Northern Asia of part 1c, beyond it.',
      names: ['china', 'mongolia', 'russia', 'yangtze-river'] },
    { title: 'The two Koreas and Japan', slips: ['korea-two'], view: [740, 270, 3],
      says: 'The Korean peninsula hangs down from China. North Korea is the northern part and South Korea the southern part, with the Yellow Sea on their west and the Sea of Japan on their east. North Korea also has a short border with Russia in its far northeast. Japan is the arc of islands across the Sea of Japan.',
      names: ['north-korea', 'south-korea', 'japan', 'yellow-sea', 'sea-of-japan', 'east-china-sea'] },
    { title: 'Taiwan', slips: [], view: [600, 440, 3],
      says: 'Taiwan is the island off the southeast coast of China, across the Taiwan Strait. Its status is disputed: Taiwan\'s government runs it as a separate state, and China\'s government claims it. The name on the map is Taiwan.',
      names: ['taiwan', 'taiwan-strait', 'china', 'east-china-sea'] },
    { title: 'Mainland Southeast Asia, the west: Myanmar and Thailand', slips: ['taiwan-thailand', 'mongolia-myanmar'], view: [350, 575, 3.6],
      says: 'Southeast Asia is the part of Asia below East Asia, and its mainland is five countries (Malaysia\'s strip hangs down below Thailand and comes in part 29). Myanmar is the west one, on the Andaman Sea and the Bay of Bengal. Thailand is the middle one, narrowing south into a long peninsula, with the Gulf of Thailand below it.',
      names: ['myanmar', 'thailand', 'laos', 'andaman-sea', 'gulf-of-thailand'] },
    { title: 'Mainland Southeast Asia, the east: Laos, Cambodia, Vietnam and the Mekong', slips: ['mainland-three', 'yangtze-mekong'], view: [440, 580, 3.6],
      says: 'Vietnam is the long coast country on the east side of the mainland, along the South China Sea and the Gulf of Tonkin. Laos is the inland country beside it. Cambodia is the one at the south, on the Gulf of Thailand. The Mekong runs south through the three of them to the South China Sea.',
      names: ['laos', 'vietnam', 'cambodia', 'thailand', 'mekong-river', 'gulf-of-tonkin', 'gulf-of-thailand', 'south-china-sea'] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about 40 seconds at each of five views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'asia-east', labels: names, view }, ...apart(slips)] });
  const taps = [...PAIRS.map(group => group.map(id => one(id, 'tap'))), ...PLACES.filter(id => !PAIRS.flat().includes(id)).map(id => one(id, 'tap'))];

  FC.lesson('geography', {
    id: 'l28', part: '28', title: 'East Asia and mainland Southeast Asia', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version: the eleven countries of East Asia and mainland Southeast Asia, with the Yangtze and the Mekong, in the shape of part 16; the flags are part 28b.' }],
    why: 'The news says a typhoon has hit Taiwan, the Mekong is running low, or a border crossing between the two Koreas has closed. If East Asia and Southeast Asia are one blur to you, you cannot picture where, who is next door, or what water is near. In about sixteen minutes you will place the eleven countries from Mongolia to Vietnam, with the Yangtze and the Mekong, on a blank map, by finding the area each sits in first, then name the four most often mixed up and say what touches them.',
    flow: [
      { title: 'How to find a country', show: [{ kind: 'prose', text: 'The same three questions as for any place. What bigger area is it in? That tells you where on the map to look. What touches it? Its neighbors pin the exact spot, and they are what the news names. What water is it on? Coast or inland is often the point of the story. Here the areas are five. China and Mongolia fill the north and middle of East Asia. The Korean peninsula and Japan are its east edge. Taiwan is the island off China\'s southeast coast. Then Southeast Asia\'s mainland, in two views: Myanmar and Thailand in the west, and Laos, Cambodia and Vietnam in the east. The world map of part 1c calls all of Southeast Asia one part, islands included; here we take only its mainland, and part 29 takes the islands. Find the area first, then the country. After every answer the feedback gives you the three: Area, Touches, Water.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-vietnam' },
      { worked: 'w-name-japan' },
      { worked: 'w-landlocked-laos' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: PAIRS.map(group => [...group].reverse().map(id => one(id, 'tap'))), order: 'shuffle' } },
      { set: { items: [...NAMED.map(id => one(id, 'name')), { gen: GEN, n: NAMED.length, with: { form: 'border' } }], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 6, name: 2, border: 2 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();

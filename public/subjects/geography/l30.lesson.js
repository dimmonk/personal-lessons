// Geography, part 30, the world's water, mountains and deserts: the way of thinking first (the continent or ocean a feature is in or beside, what it lies between, its water),
// with the thirteen places named; five views of the world map with their names, the look-alikes told apart before any case uses them; a strait tapped, a lit sea named and a desert
// tapped shown done, each in the three steps and each using only what the names screens showed; every place tapped (the Bering Sea and Strait, the Gobi and the Arabian Desert
// one after the other), then the five most often mixed up named; then the check drawn from the group by form. A feature has no neighbors or coast in the map data, so there is no
// neighbor-and-water question. The ones the regions place (the Andes, the Amazon, the Danube, the Himalayas, the Nile, the Sahara and the rest) are asked in their own lessons, and the
// Mississippi, the Rockies and the oceans of earlier lessons come back here as a fifth of the second set. Design record: docs/subjects/geography/design.md, block l30.
(() => {
  const GEN = 'g-world-features';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the five places most often mixed up (two ranges that start with A, and three deserts): named from memory (a place is asked by its name only if it was in the practice)
  const NAMED = ['alps', 'atlas', 'gobi', 'arabian-desert', 'outback'];
  // the look-alikes asked one after the other
  const PAIRS = [['bering-sea', 'bering-strait'], ['alps', 'atlas'], ['gobi', 'arabian-desert'], ['strait-of-gibraltar', 'english-channel']];
  // built lessons whose places come back, a fifth of the second set
  const MIX = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };
  // one map per view, each naming the places in it and a few already placed (the continents, the seas and ranges of earlier parts), so the new ones sit among places the learner knows
  const SCREENS = [
    { title: 'North America and the Bering gap', says: 'The Rockies run down the west of North America. The Mississippi runs down the middle to the Gulf of Mexico. At the top left, the Bering Strait is the narrow gap between Alaska and Russia, with the Bering Sea just south of it; the map is cut at the date line there, so the Bering Sea shows at the left edge and again at the right edge.',
      view: [203, 133, 3], slips: ['bering-sea-strait'],
      names: ['north-america', 'rocky-mountains', 'mississippi-river', 'gulf-of-mexico', 'bering-sea', 'bering-strait', 'arctic'] },
    { title: 'Western Europe, the Channel and the Alps', says: 'The English Channel is the narrow sea between England and France. The Alps arch across southern Europe. The Urals, far east, are where Europe ends and Asia begins.',
      view: [561, 126, 5.2], slips: [],
      names: ['europe', 'english-channel', 'north-sea', 'alps', 'urals'] },
    { title: 'The Mediterranean and North Africa', says: 'The Mediterranean is the sea between Europe and Africa. Its way out to the Atlantic is the Strait of Gibraltar, at the west end; the Suez Canal leaves it at the southeast. The Atlas Mountains run along the northwest of Africa, below the sea.',
      view: [525, 195, 5.9], slips: ['gibraltar-channel', 'alps-atlas'],
      names: ['mediterranean', 'strait-of-gibraltar', 'atlas', 'suez-canal'] },
    { title: 'Asia: the Gobi and the Arabian Desert', says: 'The Gobi is the cold desert in the east of Asia, north of the Himalayas. The Arabian Desert covers much of the Arabian Peninsula in the southwest, between the Red Sea and the Persian Gulf; the map marks only its sandy southern heart, the Empty Quarter, so tap in the south of the peninsula.',
      view: [696, 181, 3.8], slips: ['three-deserts'],
      names: ['gobi', 'himalayas', 'arabian-desert', 'persian-gulf'] },
    { title: 'Australia: the Outback', says: 'The Outback is the dry inland of Australia, far from the coast. The map marks three of its deserts, the Great Sandy, the Gibson and the Great Victoria, across the middle and west: tap inside any of them.',
      view: [838, 389, 7], slips: [],
      names: ['outback', 'oceania'] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about half a minute at each of five views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'world-features', labels: names, view }, ...apart(slips)] });
  const taps = [...PAIRS.map(pair => pair.map(id => one(id, 'tap'))), ...PLACES.filter(id => !PAIRS.flat().includes(id)).map(id => one(id, 'tap'))];

  FC.lesson('geography', {
    id: 'l30', part: '30', title: "The world's water, mountains and deserts", rev: 2, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version: the way of thinking first (the continent or ocean, what it lies between, its water), five views of the names, the look-alikes told apart, the worked cases in the three steps, the thirteen places tapped, the five look-alikes named.' }, { rev: 2, date: '2026-10-23', change: 'The world map is drawn in Winkel tripel, so the views of it are placed again on the new map.' }],
    why: 'A news story says a ship has gone aground in the English Channel, or a rescue is under way in the Alps. If seas, straits, mountain ranges and deserts are one blur to you, the story tells you little. In about sixteen minutes you will tap thirteen of the world\'s seas, straits, ranges, deserts and rivers on a blank world map, by finding the continent or ocean each is in or beside first, then what it lies between, and name the five most often mixed up, two ranges and three deserts.',
    flow: [
      { title: 'How to find a sea, a range or a desert', show: [{ kind: 'prose', text: 'A sea, a strait, a range, a desert and a river are found like any place, by three questions. Which continent or ocean is it in or beside? A blank world map shows only the outlines of the continents, so this tells you where to look. What does it lie between? A strait lies between two lands, a range between lowlands or seas, a river between its source and the sea it ends in; the lands and seas on either side pin the exact spot, and a news story names them. What water is it on? A sea or strait joins oceans, a river ends in a sea, and a range or desert far inland touches none, which is itself a clue. Here are thirteen places: the Mediterranean, the English Channel and the Bering Sea; the Straits of Gibraltar and Bering; the Mississippi; the Rockies, the Urals, the Alps and the Atlas; and the Gobi, the Arabian Desert and the Outback. After every answer the feedback gives you the three: Area, Between, Water.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-gibraltar' },
      { worked: 'w-name-mediterranean' },
      { worked: 'w-tap-gobi' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: NAMED.map(id => one(id, 'name')), order: 'shuffle', mix: MIX } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 8, name: 4 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 10 } }]
    }
  });
})();

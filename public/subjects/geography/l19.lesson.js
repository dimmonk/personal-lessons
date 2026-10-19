// Geography, part 19, Europe, the Balkans and the south: the way of thinking first (the area, what touches it, the water), with this region's areas; the names on one map
// per view, the look-alikes told apart before any case uses them; a country tapped, a lit country named and a neighbor and its water shown done, each in the three steps
// and each using only what the names screens showed; every place tapped (the look-alikes one after the other), then the four look-alikes named and four neighbors and their
// water, mixed with earlier lessons; then the check drawn from the group by form, names asked only of places named in the practice. The other eight places are asked only as a
// name to tap; Malta and Cyprus have no neighbor on land, so they are never asked for one. The flags are part 19b. Design record: docs/subjects/geography/design.md, block l19.
(() => {
  const GEN = 'g-balkans';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the four countries most often mixed up with another: named from memory, and asked for what touches them (a place is asked by its name or its neighbors only if it was in the practice)
  const NAMED = ['slovenia', 'kosovo', 'montenegro', 'north-macedonia'];
  // the pairs mixed up with each other, tapped one after the other
  const PAIRS = [['serbia', 'kosovo'], ['montenegro', 'north-macedonia'], ['adriatic', 'aegean'], ['malta', 'cyprus']];
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };
  // one map per view, each naming the places in it (the countries, the water a neighbor question can end on, and the countries of parts 16 and 18 and Türkiye that are next door)
  const SCREENS = [
    { title: 'The north-west: Slovenia, Croatia, Bosnia and Herzegovina, Serbia', slips: ['slovenia-slovakia'], view: [245, 160, 2.4],
      says: 'The Balkans are the land south of Austria and Hungary, between the Adriatic on the west and the Black Sea on the east. Slovenia is the small country at the head of the Adriatic, with Italy and Austria, from the map of western Europe, beside it. Croatia curls round Bosnia and Herzegovina along the Adriatic coast. Serbia is the big inland country behind them.',
      names: ['slovenia', 'croatia', 'bosnia-and-herzegovina', 'serbia', 'montenegro', 'adriatic', 'austria', 'hungary', 'italy'] },
    { title: 'The south-west and middle: Montenegro, Kosovo, Albania, North Macedonia and Greece', slips: ['serbia-kosovo', 'montenegro-north-macedonia', 'adriatic-aegean'], view: [390, 340, 2],
      says: 'Montenegro and Albania are on the Adriatic coast, Montenegro above Albania. Kosovo is the small inland country at the south of Serbia. North Macedonia is inland, just north of Greece. Greece is the peninsula at the bottom, with the Ionian Sea on its west and the Aegean on its east.',
      names: ['montenegro', 'kosovo', 'albania', 'north-macedonia', 'greece', 'serbia', 'bulgaria', 'adriatic', 'ionian', 'aegean'] },
    { title: 'The east: Bulgaria and the Black Sea', slips: [], view: [640, 290, 1.7],
      says: 'Bulgaria is the Balkan country on the Black Sea, with Romania on its north and Greece and Türkiye on its south. Greece\'s east coast is on the Aegean.',
      names: ['bulgaria', 'romania', 'black-sea', 'turkiye', 'greece', 'aegean'] },
    { title: 'The islands: Malta and Cyprus', slips: ['malta-cyprus'], view: [480, 480, 1.15],
      says: 'Malta and Cyprus are islands in the Mediterranean with no neighbor on land. Malta is the tiny group in the middle of the sea, south of Italy. Cyprus is the big island far to the east, just south of Türkiye.',
      names: ['malta', 'cyprus', 'mediterranean', 'turkiye', 'greece'] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about 40 seconds at each of four views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'balkans', labels: names, view }, ...apart(slips)] });
  const taps = [...PAIRS.map(pair => pair.map(id => one(id, 'tap'))), ...PLACES.filter(id => !PAIRS.flat().includes(id)).map(id => one(id, 'tap'))];

  FC.lesson('geography', {
    id: 'l19', part: '19', title: 'Europe, the Balkans and the south', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version: the twelve countries of the Balkans, Greece, Bulgaria, Cyprus and Malta, with the Adriatic and the Aegean, in the shape of part 16; the flags are part 19b.' }],
    why: 'The news says a ferry has sunk in the Aegean, or that a border crossing between Serbia and Kosovo has closed. If the Balkans are one gray blur to you, you cannot picture where, who is next door, or what water is near. In about fifteen minutes you will place the twelve countries from Slovenia to Malta, with the Adriatic and the Aegean, on a blank map, by finding the area each sits in first, then name the four most often mixed up and say what touches them.',
    flow: [
      { title: 'How to find a country', show: [{ kind: 'prose', text: 'The same three questions as for any place. What bigger area is it in? That tells you where on the map to look. What touches it? Its neighbors pin the exact spot, and they are what the news names. What water is it on? Coast or inland is often the point of the story. On the world map these countries are not one region: Slovenia to Greece and Malta are Southern Europe, Bulgaria is Eastern Europe and Cyprus is in Western Asia. Here they are taken together, the Balkans and the islands near them, so they can be found together. The areas are four. The north-west of the Balkans is Slovenia, Croatia, Bosnia and Herzegovina and Serbia, behind the Adriatic. The south-west and middle is Montenegro and Albania on the coast, with small Kosovo and North Macedonia inland, and Greece at the bottom. The east is Bulgaria, on the Black Sea. The islands are Malta and Cyprus, far out in the Mediterranean. Find the area first, then the country. After every answer the feedback gives you the three: Area, Touches, Water.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-slovenia' },
      { worked: 'w-name-albania' },
      { worked: 'w-border-bulgaria' },
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

// Geography, part 20, Türkiye, the Levant, Iraq and Iran: the way of thinking first (the area, what touches it, the water), with this region's three areas (Türkiye, the
// Levant, Iraq and Iran); the names on one map per view, the look-alikes told apart before any case uses them; a country tapped, a lit country named and a neighbor and its
// water shown done, each in the three steps and each using only what the names screens showed; every place tapped (Iran and Iraq, Syria and Jordan, and Lebanon and Israel kept side by side), then the four look-alikes named and four neighbors and their water; then the check drawn from the group by form. The places not
// named in the practice are asked only as a name to tap; Iran and Iraq are never typed (gen-middle-east.js says why). The flags are part 20b. Design record:
// docs/subjects/geography/design.md, block l20.
(() => {
  const GEN = 'g-middle-east';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the four countries most often mixed up with another: named from memory, and asked for what touches them (a place is asked by its name or its neighbors only if it was in the practice)
  const NAMED = ['syria', 'jordan', 'lebanon', 'israel'];
  const SIDE = [['iran', 'iraq'], ['syria', 'jordan'], ['lebanon', 'israel']];
  // one map per view, each naming the places in it (the countries, the water a neighbor question can end on, and a neighbor the worked cases start from)
  const SCREENS = [
    { title: 'Türkiye and the Bosporus', says: 'Türkiye is the big country across the top of the region, a peninsula between the Black Sea in the north and the Mediterranean in the south, with the Aegean Sea on its west coast. The Bosporus is the narrow strait at its northwest corner, where Europe meets Asia.', view: [300, 130, 2], slips: [],
      names: ['turkiye', 'bosporus', 'black-sea', 'aegean', 'mediterranean'] },
    { title: 'The Levant', says: 'The Levant is the lands along the east end of the Mediterranean. Syria is the big country in the north. Down the coast, from north to south, come Lebanon and Israel, with Palestine in two pieces beside Israel: the West Bank inland and Gaza on the coast. Jordan lies inland, below Syria and east of Israel and Palestine.', view: [270, 305, 3.3], slips: ['jordan-syria', 'levant-coast'],
      names: ['syria', 'lebanon', 'israel', 'palestine', 'jordan', 'mediterranean'] },
    { title: 'Jordan and the Red Sea', says: 'Jordan has no Mediterranean coast. Its only coast is a short one at the far south, on the Red Sea. Saudi Arabia is the big country on its south and east.', view: [330, 430, 2.5], slips: [],
      names: ['jordan', 'saudi-arabia', 'red-sea'] },
    { title: 'Iraq and Iran', says: 'Iraq and Iran are the two big countries east of the Levant. Iraq is the smaller one in the west, with only a short coast at the head of the Persian Gulf. Iran is the large one to its east, on the Persian Gulf, the Gulf of Oman and the Caspian Sea.', view: [620, 330, 1.6], slips: ['iran-iraq'],
      names: ['iraq', 'iran', 'persian-gulf', 'gulf-of-oman', 'caspian-sea', 'saudi-arabia', 'kuwait'] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about half a minute at each of four views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'middle-east', labels: names, view }, ...apart(slips)] });
  const taps = [...SIDE.map(group => group.map(id => one(id, 'tap'))), ...PLACES.filter(id => !SIDE.flat().includes(id)).map(id => one(id, 'tap'))];
  // a fifth of the second set is places of the lessons already built
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l20', part: '20', title: 'Türkiye, the Levant, Iraq and Iran', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version.' }],
    why: 'A story says a ship crossed the Persian Gulf, or that a road between Jordan and Syria has reopened. If this part of the map is a blur, you cannot tell which country is which, or who is next to whom. In about fifteen minutes you will place Türkiye, the five countries of the Levant, Iraq, Iran, the Bosporus and the Persian Gulf on a blank map, by finding the area each sits in first, then name the four most often mixed up and say what touches each.',
    flow: [
      { title: 'How to find a country', show: [{ kind: 'prose', text: 'The same three questions as for any place. What bigger area is it in? That tells you where to look. What touches it? Its neighbors pin the spot, and they are what the news names. What water is it on? A coast, a short coast or none at all is often the point of the story. This part of the world is the Middle East. On the world map Türkiye, the Levant and Iraq are Western Asia, but Iran is in South Asia; they are taken together here because they are neighbors that the news calls the Middle East. It has three areas. Türkiye is the big peninsula across the top, where Europe meets Asia. The Levant is the lands along the east end of the Mediterranean: Syria, Lebanon, Israel, Palestine and Jordan. Iraq and Iran are the two big countries east of them. Find the area first, then the country. After every answer the feedback gives you the three: Area, Touches, Water. It takes about fifteen minutes: four views, three questions done for you, then the ten places found, four named and four with what touches them.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-jordan' },
      { worked: 'w-name-syria' },
      { worked: 'w-border-lebanon' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: [...[['syria', 'jordan'], ['lebanon', 'israel']].map(pair => pair.map(id => one(id, 'name'))), ...NAMED.map(id => one(id, 'border'))], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 6, name: 2, border: 2 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();

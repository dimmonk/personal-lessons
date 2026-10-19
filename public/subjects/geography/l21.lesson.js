// Geography, part 21, Arabia and North Africa: the way of thinking first (the area, what touches it, the water), with this region's four areas; the names on one zoomed
// panel per view (the map is wide, so a phone shows it in panels), the look-alikes told apart before any case uses them; a country tapped, a lit country named and a
// neighbor and its water shown done, each in the three steps and each using only what the names screens showed; every place tapped (the look-alikes one after the other),
// then three look-alikes named and four neighbors and their water, mixed with earlier lessons; then the check drawn from the group by form. The places not named in the
// practice are asked only as a name to tap. The flags are part 21b. Design record: docs/subjects/geography/design.md, block l21.
(() => {
  const GEN = 'g-arabia-north-africa';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the four places most often mixed up with another, asked for what touches them; the first three are also named from memory (a place is asked by its name or its neighbors only if it was in the practice)
  const NAMED = ['qatar', 'united-arab-emirates', 'tunisia', 'sudan'];
  // the look-alikes asked one after the other in the taps: the two Gulf neighbors, Oman beside the Emirates, the Nile two, the two Maghreb neighbors that are swapped most
  const SIDE = [['qatar', 'bahrain'], ['oman', 'united-arab-emirates'], ['egypt', 'sudan'], ['tunisia', 'algeria']];
  // one panel per view (the map is 1000 across and 456 down), each naming the places in it; the zoom and the middle are those at which no two names touch on a 390-pixel phone
  const SCREENS = [
    { title: 'The Arabian Peninsula', says: 'Saudi Arabia is the huge country that fills most of the peninsula. Yemen is its south-west corner, on the Red Sea and the Gulf of Aden. Oman is the long south-east coast, on the Arabian Sea.', view: [810, 310, 2.7], slips: [],
      names: ['saudi-arabia', 'yemen', 'oman', 'red-sea', 'gulf-of-aden', 'arabian-sea'] },
    { title: 'The Gulf coast', says: 'Four small countries make up the Gulf coast of Arabia. Kuwait is at the head of the Persian Gulf. Bahrain is a small island, and Qatar the thumb of land beside it. The United Arab Emirates is at the south-east end. The Strait of Hormuz is the narrow passage out of the Gulf.', view: [850, 200, 4.2], slips: ['gulf-small-three', 'south-east-arabia'],
      names: ['kuwait', 'bahrain', 'qatar', 'united-arab-emirates', 'saudi-arabia', 'persian-gulf', 'strait-of-hormuz', 'gulf-of-oman'] },
    { title: 'Egypt and Sudan', says: 'Egypt and Sudan are the two Nile countries, in the north-east corner of Africa. Egypt is at the top, on the Mediterranean. The Suez Canal cuts across it from the Mediterranean to the Red Sea. Sudan is the large country below it.', view: [720, 240, 1.8], slips: ['egypt-sudan', 'red-sea-suez'],
      names: ['egypt', 'sudan', 'mediterranean', 'suez-canal', 'red-sea'] },
    { title: 'The Maghreb, east to west', says: 'The Maghreb is the north-west of Africa along the Mediterranean. From east to west the four are Libya, Tunisia, Algeria and Morocco. Libya is the one next to Egypt.', view: [410, 130, 1.9], slips: ['maghreb-four'],
      names: ['libya', 'tunisia', 'algeria', 'morocco', 'mediterranean'] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about half a minute at each of four views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'arabia-north-africa', labels: names, view }, ...apart(slips)] });
  const taps = [...SIDE.map(group => group.map(id => one(id, 'tap'))), ...PLACES.filter(id => !SIDE.flat().includes(id)).map(id => one(id, 'tap'))];
  // a fifth of the second set is places of the lessons already built
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l16', 'l16b'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l21', part: '21', title: 'Arabia and North Africa', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version: the way of thinking with the region\'s four areas, four panels of names with the look-alikes told apart, three worked cases, every place tapped, four look-alikes named and four neighbors and their water; the flags are part 21b.' }],
    why: 'A story says a ship has run aground in the Suez Canal, oil tankers are waiting at the Strait of Hormuz, or a border has closed between Algeria and Morocco. If Arabia and North Africa are a blur to you, you cannot picture who is next to whom or which water is meant. In about sixteen minutes you will place the thirteen countries, the Red Sea, the Suez Canal and the Strait of Hormuz on a blank map, by finding the area each sits in first, then name three look-alikes and say what touches four countries.',
    flow: [
      { title: 'How to find a country', show: [{ kind: 'prose', text: 'The same three questions as for any place. What bigger area is it in? That tells you where on the map to look. What touches it? Its neighbors pin the exact spot, and a border is what the news is about. What water is it on? Coast or inland, and which sea, often is the story. On the world map Arabia is Western Asia and Egypt, Sudan, Libya, Tunisia, Algeria and Morocco are Northern Africa; they are taken together here because the Red Sea and the Suez Canal join them. There are four areas. The Arabian Peninsula holds the three big countries: Saudi Arabia, Yemen and Oman. The Gulf coast holds Kuwait, Bahrain, Qatar and the United Arab Emirates. The Nile countries, Egypt and Sudan, are the north-east corner of Africa. The Maghreb, the north-west of Africa, holds Libya, Tunisia, Algeria and Morocco. Three waters link them: the Red Sea, the Suez Canal and the Strait of Hormuz. After every answer the feedback gives you the three: Area, Touches, Water. It takes about sixteen minutes: four zoomed views, three questions done for you, then sixteen places found, three named and four with what touches them.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-oman' },
      { worked: 'w-name-egypt' },
      { worked: 'w-border-yemen' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: [...NAMED.slice(0, 3).map(id => one(id, 'name')), ...NAMED.map(id => one(id, 'border'))], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 6, name: 2, border: 2 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();

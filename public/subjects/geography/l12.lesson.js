// Geography, part 12, Canada: the way of thinking first (the area, what touches it, the water), with this region's areas (the Pacific coast, the Prairies, central Canada,
// the Atlantic provinces, the North); the names on one map per view, the look-alikes told apart before any case uses them; a province tapped, a lit province named and
// a province's neighbor and water shown done, each in the three steps and each using only what the names screens showed; every place tapped (the look-alikes one after
// the other), then four look-alikes named and four neighbors and their water, mixed with the United States lessons; then the check drawn from the group by form. The
// places not named in the practice are asked only as a name to tap. A province has no flag of its own, so there is no flags lesson. Design record:
// docs/subjects/geography/design.md, block l12.
(() => {
  const GEN = 'g-americas-north';
  const one = (place, form) => ({ gen: GEN, n: 1, with: { place, form } });
  const PLACES = FC.get('geography').gens[GEN].places.list.map(p => p.id);
  // the places named from memory, and asked for what touches them: the look-alikes (the Prairie three, Ontario and Quebec, Nova Scotia)
  const NAMED = ['alberta', 'saskatchewan', 'manitoba', 'ontario', 'quebec', 'nova-scotia'];
  const PAIRS = [['alberta', 'saskatchewan'], ['nova-scotia', 'new-brunswick'], ['yukon', 'northwest-territories']];
  const mix = { from: ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b'], share: 0.2 };
  // one map per view, west to east, each naming the places in it (the provinces, the territories and the water a neighbor question can end on)
  const SCREENS = [
    { title: 'The Pacific coast and the Prairies', says: 'British Columbia is alone on the Pacific. East of it, side by side above the United States, are the three Prairie provinces: Alberta, Saskatchewan and Manitoba.',
      view: [305, 460, 2], slips: ['canada-prairies'], names: ['british-columbia', 'alberta', 'saskatchewan', 'manitoba', 'pacific', 'united-states'] },
    { title: 'Ontario and Quebec', says: 'Ontario and Quebec are the two big provinces in the middle, Ontario in the west with the Great Lakes on its south, Quebec in the east. Hudson Bay, with its small arm James Bay, is the water that reaches into both.',
      view: [680, 500, 2.2], slips: ['canada-ontario-quebec'], names: ['ontario', 'quebec', 'hudson-bay', 'james-bay', 'lake-superior', 'lake-erie', 'lake-ontario'] },
    { title: 'The Atlantic provinces', says: 'Four provinces make up the east coast. New Brunswick, Nova Scotia and Prince Edward Island are the three small ones. Newfoundland and Labrador is the fourth, in the far east. The Atlantic Ocean is on their east.',
      view: [815, 470, 3], slips: ['canada-maritimes'], names: ['new-brunswick', 'nova-scotia', 'prince-edward-island', 'newfoundland-and-labrador', 'gulf-of-saint-lawrence'] },
    { title: 'The North', says: 'Three territories cover the north, west to east: Yukon, the Northwest Territories and Nunavut. Nunavut is the biggest, reaching out over the Arctic islands, with a shore on Hudson Bay.',
      view: [410, 270, 1.9], slips: ['canada-territories'], names: ['yukon', 'northwest-territories', 'nunavut', 'hudson-bay', 'beaufort-sea'] }
  ];
  // the look-alikes, told apart on the screen by the subject's own lines for them (lists.slip), so the pairs asked back to back come with what to compare
  const SLIPS = FC.get('geography').meta.lists.slip;
  const apart = ids => ids.map(id => ({ kind: 'prose', text: `Tell apart: ${SLIPS.find(x => x.id === id).text}.` }));
  const screen = ({ title, says, names, view, slips }, i) => ({ title,
    show: [{ kind: 'prose', text: i === 0 ? `Look for about a minute at each of four views. Say each name as you find it. None of it stays up: next you find places on a map with no names. ${says}` : says },
      { kind: 'map', region: 'americas-north', labels: names, view }, ...apart(slips)] });
  const taps = [...PAIRS.map(pair => pair.map(id => one(id, 'tap'))), ...PLACES.filter(id => !PAIRS.flat().includes(id)).map(id => one(id, 'tap'))];

  FC.lesson('geography', {
    id: 'l12', part: '12', title: 'Canada', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version, built to the shape of parts 1 to 7b and 16: it opens with the way of thinking (the area, what touches it, the water) and Canada\'s five areas; one screen of names for each of four views, with the look-alikes told apart; the worked cases in the three steps, each using only what the names showed; every place tapped, six look-alikes named and four neighbors and their water, mixed with the United States lessons. There is no flags lesson.' }],
    why: 'A news story says a wildfire has closed the highways in Alberta, or that ice is breaking up on Hudson Bay. If Canada is one big blank to you, you cannot tell how far away it is, who is next to it or whether it is on the coast. In about fifteen minutes you will place the ten provinces, the three territories and Hudson Bay on a blank map, by finding the area each sits in first, then name the look-alikes and say what touches some of them and what water they are on.',
    flow: [
      { title: 'How to find a province', show: [{ kind: 'prose', text: 'The same three questions as for any place. What bigger area is it in? That tells you where on the map to look. What touches it? Its neighbors pin the exact spot, and for a province one neighbor is often the United States. What water is it on? Coast or inland is often the point of the story. Canada has ten provinces and three territories, in five areas, west to east. British Columbia is alone on the Pacific coast. The three Prairie provinces, Alberta, Saskatchewan and Manitoba, sit side by side above the United States. Ontario and Quebec are the two big ones in the middle, around the Great Lakes and Hudson Bay. The Atlantic provinces are on the east coast. The three territories, Yukon, the Northwest Territories and Nunavut, cover the north. After every answer the feedback gives you the three: Area, Touches, Water.' }] },
      ...SCREENS.map(screen),
      { worked: 'w-tap-saskatchewan' },
      { worked: 'w-name-manitoba' },
      { worked: 'w-border-nova-scotia' },
      { set: { items: taps, order: 'shuffle' } },
      { set: { items: [{ gen: GEN, n: 4, with: { form: 'name' } }, { gen: GEN, n: 4, with: { form: 'border' } }], order: 'shuffle', mix } }
    ],
    check: {
      items: { draw: { gen: GEN, split: { tap: 6, name: 2, border: 2 }, only: { tap: PLACES.filter(id => !NAMED.includes(id)) } } },
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();

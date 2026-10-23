// Geography, part 32, placing a place you have never heard of: the clues a story gives (the country, state, coast or neighbor its words name), the parts of the world they are tapped in, one story
// place shown done, ten story places tapped by part of the world on the blank world map, then the traps as practice only (north-south and east-west of two named places, the true map with both lit shown
// after, one pair shown done), then the check on ten story places never practised. Every region line and every direction is read from the data (items-far.js). The traps are measured by nothing: the check
// and the final test do not ask them. Design record: docs/subjects/geography/design.md, block l32. Research: docs/research/knowing-where-places-are.md G4 (people judge two places by the units that
// hold them: San Diego and Reno), G5 (remembered maps are straightened: Rome and Philadelphia, Santiago and New York), G8 (relative location: the region, then what surrounds it).
(() => {
  const SUBJECT = FC.get('geography');
  const idsOf = prefix => Object.keys(SUBJECT.items).filter(id => id.startsWith(prefix));
  const MIX = { from: ['l1', 'l1b', 'l1c'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l32', part: '32', title: 'Placing a place you have never heard of', rev: 2, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version.' }, { rev: 2, date: '2026-10-23', change: 'The world map is drawn in Winkel tripel, so the views of it are placed again on the new map.' }],
    why: 'A story names a town you have never heard of, and the story means nothing until you know where it is. In about twelve minutes you will place ten towns, ports and regions you have never met by the part of the world they sit in, from the clue the story gives, and then work out which way two places lie from each other without a map, where the states and continents that hold them mislead.',
    flow: [
      { title: 'How to place a place you have never met', show: [{ kind: 'prose', text: 'A story rarely gives a map. It gives a clue: a country, a state, a coast, a neighbor. Use the same three questions. Area: which country, state or coast do the words name? Those are the deciding words; the name of the place itself tells you nothing. Touches: where is that, and what is it next to? Water: which ocean or sea does it face? Then tap the part of the world that holds it, one of the parts you placed in parts 1b and 1c. North America has three: Northern America (Canada, the United States, Greenland), Central America (Mexico down to Panama) and the Caribbean. South America stands on its own. Europe has four: Northern, Western, Southern and Eastern. Africa has five: Northern, West, Central, East and Southern. Asia has six: Western, Central, South, East, Southeast and Northern (Russia east of the Urals). Oceania here has two: Australia and New Zealand, and Melanesia. Mexico is in Central America on this map. After every answer the feedback gives the deciding words and the part.' }] },
      { worked: 'w-story-dubrovnik' },
      { set: { items: idsOf('story-practice-'), order: 'shuffle', mix: MIX } },
      { title: 'The traps: north and east', show: [{ kind: 'prose', text: 'Memory straightens maps: South America sits straight below North America in most heads, and Europe level with the United States. Judging two places by the state or continent that holds them goes wrong the same way. Latitude counts degrees north or south of the equator; longitude counts degrees east or west of Greenwich, so a bigger number of degrees west is farther west. Work out each answer from the two places, not from their units. These pairs are practice only: the check and the final test leave them out.' }] },
      { worked: 'w-trap-reno-san-diego' },
      { set: { items: idsOf('trap-'), order: 'shuffle' } }
    ],
    check: {
      items: idsOf('story-check-'),
      order: 'shuffle',
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();

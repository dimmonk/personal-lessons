// Geography, part 31, how far: why a distance and a trip are asked about a pair (the miles in a straight line, then how you would get there and how long), the six bands told in words with the
// rule of thumb for the time, one pair shown done with six pairs to measure against, then 8 pairs inside the United States and 8 across the world, each with both cities lit and two bands chosen
// (cut from the record's 10 and 10 to keep the lesson near 15 minutes), then the check on 10 pairs never asked as a pair. Every distance is computed from the cities' longitudes and latitudes
// (items-far.js, haversine); none is written here. Design record: docs/subjects/geography/design.md, block l31. Research: docs/research/knowing-where-places-are.md G7 (no study found: the
// design's bet is answer, see the right band at once with both places lit, return on later days) and G5 (a remembered map is distorted, so the pair is measured against pairs known, not judged by the look of the dots).
(() => {
  const SUBJECT = FC.get('geography');
  const idsOf = prefix => Object.keys(SUBJECT.items).filter(id => id.startsWith(prefix));
  const BANDS = SUBJECT.meta.lists.distance.map(x => x.text.toLowerCase()).join('; ');
  const MIX_US = { from: ['l2', 'l8', 'l9'], share: 0.2 };
  const MIX_WORLD = { from: ['l1', 'l1b', 'l1c'], share: 0.2 };

  FC.lesson('geography', {
    id: 'l31', part: '31', title: 'How far', rev: 2, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version.' }, { rev: 2, date: '2026-10-23', change: 'The world map is drawn in Winkel tripel, so the views of it are placed again on the new map.' }],
    why: 'A friend says a city is "only a few hours away", or a story says a town is far from the capital. Without a number, "near" and "far" tell you nothing. In about sixteen minutes you will judge how far apart 26 pairs of cities are, in a straight line and as a trip, by measuring each pair against pairs you know.',
    flow: [
      { title: 'How to judge how far', show: [{ kind: 'prose', text: `Two questions for every pair. First, how far apart are they in a straight line? That is the number a map gives and a story leaves out. Second, how would you get from one to the other, and how long would it take? That is what changes a plan: a short drive is an errand, a flight over an ocean is a day. Both are answered in bands, not exact miles, because a band is what you can hold in your head and check. The six bands: ${BANDS}. For the time, use a rule of thumb, not a timetable: a drive is about 60 miles an hour, and a flight is about 500 miles an hour plus an hour on the ground and in the climb. A map misleads the eye, so never judge a pair by how far apart the dots look: measure it against pairs you know. After every answer the feedback gives the straight-line miles, worked out by the app from the two cities' latitude and longitude, with the working for the trip.` }] },
      { worked: 'w-far-san-francisco-los-angeles' },
      { set: { items: idsOf('far-us-practice-'), order: 'shuffle', mix: MIX_US } },
      { title: 'Across the world', show: [{ kind: 'prose', text: 'Now pairs across the world. On the world map the whole United States is a hand wide, so two dots that touch can be a drive apart and two that look near can be an ocean apart. The map opens on each pair; use the same rulers as before, and where the straight line crosses an ocean the feedback says so.' }] },
      { set: { items: idsOf('far-world-practice-'), order: 'shuffle', mix: MIX_WORLD } }
    ],
    check: {
      items: [...idsOf('far-us-check-'), ...idsOf('far-world-check-')],
      order: 'shuffle',
      feedback: 'at-end',
      pass: [{ right: { min: 8 } }]
    }
  });
})();

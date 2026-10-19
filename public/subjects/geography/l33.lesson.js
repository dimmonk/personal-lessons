// Geography, part 33, the whole world, mixed: one question of each kind shown done again (a name tapped, a lit place named, a flag, a neighbor and its water, a story place, a pair of bands), a
// mixed set drawn from the groups of every part in the form each place was not last asked in, with two story places and two pairs never met, then the 30-item check the record describes: 12 names
// tapped, 4 lit places named, 4 flags tapped to their country, 4 places with a neighbor and its water, 3 story places and 3 pairs. Each kind of check item is drawn from groups of different parts so the
// check spans the subject; the stories and pairs are new ones (items-far.js, `mixed-`). The set is cut to seven questions so the lesson is about 16 minutes (the check alone is about 9, the six replays about 3.5). Design record:
// docs/subjects/geography/design.md, block l33. Research: docs/research/knowing-where-places-are.md G1 (places arrive as names), G3 (transfer is to the reversed question on the same places, so the
// story places and pairs are new ones).
(() => {
  const SUBJECT = FC.get('geography');
  const idsOf = prefix => Object.keys(SUBJECT.items).filter(id => id.startsWith(prefix));
  const stories = prefix => idsOf(prefix).filter(id => SUBJECT.items[id].asks[0].kind === 'place');
  const pairs = prefix => idsOf(prefix).filter(id => SUBJECT.items[id].asks[0].kind === 'choose');
  const asking = (form, gens) => gens.map(gen => ({ gen, n: 1, with: { form } }));
  const BUILT = ['l1', 'l1b', 'l1c', 'l2', 'l2b', 'l3', 'l4', 'l5', 'l6', 'l7', 'l7b', 'l8', 'l9', 'l10', 'l11', 'l12', 'l13', 'l13b', 'l14', 'l14b', 'l15', 'l15b', 'l16', 'l16b', 'l17', 'l17b', 'l18', 'l18b',
    'l19', 'l19b', 'l20', 'l20b', 'l21', 'l21b', 'l22', 'l22b', 'l23', 'l23b', 'l24', 'l24b', 'l25', 'l25b', 'l26', 'l26b', 'l27', 'l27b', 'l28', 'l28b', 'l29', 'l29b', 'l30', 'l31', 'l32'];
  // the groups of the set: one place of each, in the form it was not last asked in
  const SET_GENS = ['g-world-big', 'g-us-cities-west', 'g-mexico-central-flags', 'g-asia-islands'];
  const CHECK = [
    ...asking('tap', ['g-world-parts-east', 'g-us-frame', 'g-us-west', 'g-us-cities-east', 'g-americas-north', 'g-south-america', 'g-europe-east', 'g-middle-east', 'g-africa-east', 'g-asia-south', 'g-asia-islands', 'g-world-features']),
    ...asking('name', ['g-us-midwest', 'g-us-capitals-west', 'g-europe-north', 'g-africa-central']),
    ...asking('flag', ['g-africa-south-flags', 'g-asia-east-flags', 'g-europe-north-flags', 'g-south-america-flags']),
    ...asking('border', ['g-us-south-atlantic', 'g-europe-west', 'g-africa-west', 'g-asia-central']),
    ...stories('mixed-check-'), ...pairs('mixed-check-')];

  FC.lesson('geography', {
    id: 'l33', part: '33', title: 'The whole world, mixed', rev: 1, status: 'live',
    history: [{ rev: 1, date: '2026-10-18', change: 'First version.' }],
    why: 'In real life a place is never named next to its neighbors: a story jumps from Ohio to Senegal to Vietnam, and you have to find each one at once. In about sixteen minutes you will see each kind of question done once more, answer a mixed run of questions, and then take a check of 30 questions on places from every part: names tapped, lit places named, flags, neighbors and water, towns you have never met, and pairs of cities.',
    flow: [
      { title: 'Every kind of question once more', show: [{ kind: 'prose', text: 'No new rule. Every question is the same one: find the bigger area first, then what touches the place, then its water, and for a pair of cities, measure it against pairs you know. Here is each kind done once for you.' }] },
      { worked: 'w-tap-nevada' },
      { worked: 'w-name-west-africa' },
      { worked: 'w-flag-belgium' },
      { worked: 'w-border-nevada' },
      { worked: 'w-story-dubrovnik' },
      { worked: 'w-far-san-francisco-los-angeles' },
      { set: { items: [...SET_GENS.map(gen => ({ gen, n: 1 })), ...stories('mixed-set-'), ...pairs('mixed-set-')], order: 'shuffle', mix: { from: BUILT, share: 0.2 } } }
    ],
    check: {
      items: CHECK,
      order: 'shuffle',
      feedback: 'at-end',
      pass: [{ right: { min: 25 } }]
    }
  });
})();

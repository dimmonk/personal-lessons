// Political Ideologies, Unit Four: cases shown inside cards, part one (the two names, one clean case each, and the check on each).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one name share a topic.
// cues[STEP] is the exact phrase in the text that decides that question (or a list of phrases); the app marks it.
// segments are the tappable pieces for "tap the words" prompts; note is shown if that piece is tapped in error.
// Every text is invented. The places, laws and groups in them do not exist.

FC.cases('ideology', 'u4', [

  /* ---------- Keeping what is still there ---------- */
  { id: 'i4-meet-conserv', use: 'teach', tier: 'clean', setting: 'faith', topic: 'a village boundary walk', name: 'The boundary walk',
    text: "From the Eastby village newsletter: 'On the first Sunday of May we walk the boundary of the village and bless the fields, as our grandparents did, and the children carry the banner. This custom, and the faith behind it, should guide how Eastby plans for the years ahead. Keep the walk. If the route must change now that the new road cuts across it, let it change slowly, a step at a time, and ask the old walkers first.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'This custom, and the faith behind it, should guide how Eastby plans for the years ahead',
            T1: ['Keep the walk', 'let it change slowly, a step at a time, and ask the old walkers first'] } },

  { id: 'i4-check-conserv', use: 'check', tier: 'clean', setting: 'work', topic: 'shops closed on a Sunday',
    text: "From a shopkeepers' letter: 'The shops of Oldgate have closed on Sunday since our grandfathers' day, so that a household can eat one meal together and go to church or chapel if it wishes. That day of rest should guide how the town plans its markets. Keep it, and if the opening hours must change, change them slowly and ask the shopkeepers first.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'That day of rest should guide how the town plans its markets',
            T1: 'Keep it, and if the opening hours must change, change them slowly and ask the shopkeepers first' },
    segments: [
      { text: "The shops of Oldgate have closed on Sunday since our grandfathers' day, so that a household can eat one meal together and go to church or chapel if it wishes.", note: 'That names the old way, a day of rest that is still kept. It is not yet what the text wants done with it.' },
      { text: 'That day of rest should guide how the town plans its markets.', note: 'That says the old way should guide, which Unit One already asked. This question is about what to do with it.' },
      { text: 'Keep it, and if the opening hours must change, change them slowly and ask the shopkeepers first' }
    ],
    reason: { T1: 'The day of rest is still kept, and the text asks only to keep it and change slowly: {cue:T1}.' } },

  /* ---------- Bringing back what has gone ---------- */
  { id: 'i4-meet-react', use: 'teach', tier: 'clean', setting: 'faith', topic: 'church courts abolished by an assembly', name: 'The Church courts of Aldmere',
    text: "From a pamphlet in the kingdom of Aldmere: 'For six hundred years the Church courts of Aldmere judged our marriages and our wills, and the bishops sat on the king's council. Eleven years ago the Assembly abolished the courts and put the bishops out of the council. That was a wrong, and we do not call it a reform. We ask that the Church courts sit again, that the bishops return to the king's council, and that Aldmere be ordered as it was.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['For six hundred years the Church courts of Aldmere judged our marriages and our wills', 'that Aldmere be ordered as it was'],
            T1: ['That was a wrong, and we do not call it a reform', "We ask that the Church courts sit again, that the bishops return to the king's council"] } },

  { id: 'i4-check-react', use: 'check', tier: 'clean', setting: 'town', topic: 'a lord’s market taken by an act',
    text: "From a speech at the market cross in Carrow: 'For a thousand years the market of Carrow was held under the lord of the manor, who set the weights, judged the quarrels and opened each market day with a blessing. The new Municipal Act took the market from him. That Act was a theft, and not a reform, and Carrow has known no peace since. Give the lord his market and his place on the bench back, and let the blessing be said again from his steps.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['Give the lord his market and his place on the bench back, and let the blessing be said again from his steps'],
            T1: ['That Act was a theft, and not a reform', 'Give the lord his market and his place on the bench back'] },
    reason: { T1: 'The lord’s market is gone, the text calls its loss a theft, and it asks for it back: {cue:T1}.' } }
]);

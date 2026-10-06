// Political Ideologies, Unit Four: cases shown inside cards, part one (the two names, one clean case each, then the second case and the check).
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

  { id: 'i4-again-conserv', use: 'teach', tier: 'clean', setting: 'housing', topic: 'the old at home and the almshouses', name: 'The almshouses',
    text: "From a letter to the town council of Wendle Cross: 'In our town the old are looked after at home by their own children, as our grandparents were, and the almshouses on Market Row have housed those with none for three hundred years. These ways should guide what the council does. Keep the almshouses as they are. Mend the roofs a room at a time, over the years, and ask the old people before anything else is altered.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'These ways should guide what the council does',
            T1: ['Keep the almshouses as they are', 'Mend the roofs a room at a time, over the years, and ask the old people before anything else is altered'] },
    segments: [
      { text: 'In our town the old are looked after at home by their own children, as our grandparents were, and the almshouses on Market Row have housed those with none for three hundred years.', note: 'That names the old ways. It is what the text wants done with them that you are asked for.' },
      { text: 'These ways should guide what the council does.', note: 'That says the old ways should guide, which is the answer to Unit One’s question. This question asks what is to be done with them.' },
      { text: 'Keep the almshouses as they are.' },
      { text: 'Mend the roofs a room at a time, over the years, and ask the old people before anything else is altered.', note: 'That says how change should come, slowly and with the old people asked. It is the second half of what the text asks. The words that say what is to be done with the old ways come before it.' }
    ] },

  { id: 'i4-check-conserv', use: 'check', tier: 'clean', setting: 'work', topic: 'shops closed on a Sunday',
    text: "From a shopkeepers' letter: 'The shops of Oldgate have closed on Sunday since our grandfathers' day, so that a household can eat one meal together and go to church or chapel if it wishes. That day of rest should guide how the town plans its markets. Keep it, and if the opening hours must change, change them slowly and ask the shopkeepers first.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'That day of rest should guide how the town plans its markets',
            T1: 'Keep it, and if the opening hours must change, change them slowly and ask the shopkeepers first' },
    segments: [
      { text: "The shops of Oldgate have closed on Sunday since our grandfathers' day, so that a household can eat one meal together and go to church or chapel if it wishes.", note: 'That names the old way, a day of rest that is still kept. It is not yet what the text wants done with it.' },
      { text: 'That day of rest should guide how the town plans its markets.', note: 'That says the old way should guide, which is the answer to Unit One’s question. This question asks what is to be done with it.' },
      { text: 'Keep it, and if the opening hours must change, change them slowly and ask the shopkeepers first' }
    ],
    reason: { T1: 'The text says what is to be done with the day of rest: {cue:T1}. The day is still kept, and nothing that has gone is asked back. The text asks for it to stay, and for any change to be slow.' } },

  /* ---------- Bringing back what has gone ---------- */
  { id: 'i4-meet-react', use: 'teach', tier: 'clean', setting: 'faith', topic: 'church courts abolished by an assembly', name: 'The Church courts of Aldmere',
    text: "From a pamphlet in the kingdom of Aldmere: 'For six hundred years the Church courts of Aldmere judged our marriages and our wills, and the bishops sat on the king's council. Eleven years ago the Assembly abolished the courts and put the bishops out of the council. That was a wrong, and we do not call it a reform. We ask that the Church courts sit again, that the bishops return to the king's council, and that Aldmere be ordered as it was.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['For six hundred years the Church courts of Aldmere judged our marriages and our wills', 'that Aldmere be ordered as it was'],
            T1: ['That was a wrong, and we do not call it a reform', "We ask that the Church courts sit again, that the bishops return to the king's council"] } },

  { id: 'i4-again-react', use: 'teach', tier: 'clean', setting: 'work', topic: 'trade guilds thrown out by a law', name: 'The guilds of Ennis',
    text: "From a speech in a guild hall in the republic of Ennis: 'For four hundred years no one could sell cloth in Ennis who had not served seven years under a guild master, and every master answered to the guild's oath. The town was the better for that order. The new trade law threw the guilds out. That law was a wrong done to every honest maker. We will not rest until the guilds have their halls, their oath and their seven years back, and cloth is made in Ennis as it was made by our fathers.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ["every master answered to the guild's oath. The town was the better for that order", 'cloth is made in Ennis as it was made by our fathers'],
            T1: ['That law was a wrong done to every honest maker', 'We will not rest until the guilds have their halls, their oath and their seven years back'] },
    segments: [
      { text: "For four hundred years no one could sell cloth in Ennis who had not served seven years under a guild master, and every master answered to the guild's oath. The town was the better for that order.", note: 'That names an old order, the guilds. It is half of what you point to. It does not yet say what the text wants done about it.' },
      { text: 'The new trade law threw the guilds out. That law was a wrong done to every honest maker.', note: 'That says the order was lost, and that its loss was a wrong. It is the second part of what you point to. The request itself comes in the last sentence.' },
      { text: 'We will not rest until the guilds have their halls, their oath and their seven years back, and cloth is made in Ennis as it was made by our fathers.' }
    ] },

  { id: 'i4-check-react', use: 'check', tier: 'clean', setting: 'town', topic: 'a lord’s market taken by an act',
    text: "From a speech at the market cross in Carrow: 'For a thousand years the market of Carrow was held under the lord of the manor, who set the weights, judged the quarrels and opened each market day with a blessing. The new Municipal Act took the market from him. That Act was a theft, and not a reform, and Carrow has known no peace since. Give the lord his market and his place on the bench back, and let the blessing be said again from his steps.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['Give the lord his market and his place on the bench back, and let the blessing be said again from his steps'],
            T1: ['That Act was a theft, and not a reform', 'Give the lord his market and his place on the bench back'] },
    reason: { T1: 'The text names an order that has gone, the lord’s market and his place on the bench, and calls the way it was lost a wrong: {cue:T1}. It asks for the order to be given back, and nothing it names is still in place.' } }
]);

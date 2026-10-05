// Political Ideologies, Unit Four: cases shown inside cards, part two (the side-by-side pairs, and the check on the key's question).
// Each look-alike pair is two texts about one story. One of each pair is a name of this unit; the other is a name from another
// branch of the key that learners mistake it for. Every text is invented.

FC.cases('ideology', 'u4', [

  /* ---------- The same church school, kept and given back ---------- */
  { id: 'i4-lk-conserv-school', use: 'teach', tier: 'clean', setting: 'schooling', topic: 'a church school, its hymns and its vicar', name: 'Marrow Lane school, kept',
    text: "From a parents' letter about Marrow Lane church school: 'Our children are taught the old hymns each Sunday term, as we were, and the vicar still chooses the head teacher, as he has since our grandparents' time. These ways should guide how the school is run. Keep them. If the school must change, let it be slowly, with the parents asked at every step.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'These ways should guide how the school is run',
            T1: ['Keep them', 'let it be slowly, with the parents asked at every step'] } },

  { id: 'i4-lk-react-school', use: 'teach', tier: 'clean', setting: 'schooling', topic: 'a church school, taken by an act', name: 'Marrow Lane school, given back',
    text: "From a parents' letter about Marrow Lane church school: 'For two hundred years the school belonged to the church, and the vicar chose the head teacher. The School Transfer Act took the school from the church. That was a wrong, and it should never have been done. These old ways should guide how the school is run, so undo the Act, give the school back to the church, and let the vicar choose the head teacher again.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: 'These old ways should guide how the school is run',
            T1: ['That was a wrong, and it should never have been done', 'undo the Act, give the school back to the church, and let the vicar choose the head teacher again'] } },

  /* ---------- The check on the question: all its answers are offered ---------- */
  { id: 'i4-check-ways', use: 'check', tier: 'clean', setting: 'health', topic: 'matrons swept off the wards',
    text: "From a nurses' association letter: 'Until the Health Reform, every ward was led by a matron, whose word was final, and every nurse knew her rank by the colour of her belt. The Reform swept the matrons away and called it progress. That was a wrong done to the sick. This old order of the wards should guide how the hospital is run, so put the matrons back on every ward, with their belts and their authority, as it was.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: 'This old order of the wards should guide how the hospital is run',
            T1: ['That was a wrong done to the sick', 'put the matrons back on every ward, with their belts and their authority, as it was'] },
    reason: { T1: 'The text names an order that has gone, the matrons with their belts and their word, and says its going was a wrong: {cue:T1}. It asks for the order to be put back. Nothing it names is still in place, so the answer is the one for an order brought back.' } },

  /* ---------- The same harbour festival, old ways and one people ---------- */
  { id: 'i4-lk-conserv-harbour', use: 'teach', tier: 'clean', setting: 'town', topic: 'a blessing of the boats at a harbour festival', name: 'The blessing of the boats',
    text: "From the Port Selby harbour newsletter: 'Each midsummer the crews carry their boats' names to the quay for the old blessing, as their fathers and mothers did before them. That blessing should guide how the harbour festival is planned. Keep it. If the quay must be rebuilt, let the work be slow and done in pieces, so that the blessing is never lost.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'That blessing should guide how the harbour festival is planned',
            T1: ['Keep it', 'let the work be slow and done in pieces, so that the blessing is never lost'] } },

  { id: 'i4-lk-nationalism-harbour', use: 'teach', tier: 'clean', setting: 'town', topic: 'a harbour festival and one people', name: 'The harbour festival, one people',
    text: "From a speech at the Port Selby harbour festival: 'Look around you. Fishers and clerks, young and old, left and right, we are one people, and a day like this shows that what divides us counts for less than what holds us together. A country that has such a day has every reason to be proud. Let us go on voting, arguing and disagreeing as we always have, and let us go on being one people when the argument is over.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { D1: 'we are one people, and a day like this shows that what divides us counts for less than what holds us together',
            N1: 'we are one people, and a day like this shows that what divides us counts for less than what holds us together',
            N2: 'Let us go on voting, arguing and disagreeing as we always have' } },

  /* ---------- The same parliament, an old crown and one people with one leader ---------- */
  { id: 'i4-lk-react-crown', use: 'teach', tier: 'clean', setting: 'town', topic: 'a crown swept away by a parliament', name: 'The crown of the Ruddock lands',
    text: "From a pamphlet in the Ruddock Republic: 'The men who made our parliament swept away the crown and the old council of the Ruddock lands, which kept the peace for five hundred years. That was a wrong, and the parliament is built on it. The crown and the council are the old order of our land and should guide it still. Put the crown back on the throne and the old council back in its hall, and let the parliament serve them as it should.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: 'The crown and the council are the old order of our land and should guide it still',
            T1: ['That was a wrong, and the parliament is built on it', 'Put the crown back on the throne and the old council back in its hall'] } },

  { id: 'i4-lk-fasc-crown', use: 'teach', tier: 'clean', setting: 'borders', topic: 'a parliament and a rally against it', name: 'The rally in the Ruddock Republic',
    text: "From a rally speech in the Ruddock Republic: 'The parliament talks while the nation bleeds. We are one people with one will, and we will not wait on rows between parties. When our movement holds the country there will be no more parties and no more votes, and no one will be allowed to stand in the way. One leader will speak for all of us, and we will rise as one people.'",
    outcome: 'fasc', route: { D1: ['nation'], N1: ['whole'], N2: ['aside'] },
    cues: { D1: 'We are one people with one will',
            N1: 'We are one people with one will',
            N2: 'there will be no more parties and no more votes, and no one will be allowed to stand in the way' } }
]);

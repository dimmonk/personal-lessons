// Political Ideologies, Unit Five: cases shown inside cards, part three (the check after the question card, and the two worked
// cases). Every text is invented. Field guide: see u5.cases-teach-1.js.

FC.cases('ideology', 'u5', [

  /* ---------- The check after the question card ---------- */
  { id: 'i5-check-does', use: 'check', tier: 'clean', setting: 'work', topic: 'a training place for every school-leaver',
    text: "At a youth forum in Dunmore, Councillor Abel Reyes said: 'Each young person is free to choose their own path, and nobody should stand in the way. But a path needs a first step. We ask the government to pay for a training place for every school-leaver who wants one, and we will all pay for it together.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Each young person is free to choose their own path',
            R1: 'We ask the government to pay for a training place for every school-leaver who wants one' },
    reason: { D1: 'He says what each young person is free to do, and puts it first: {cue:D1}. He names no side to be against.',
              R1: 'He asks the government to give something, and not only to keep out of the way: {cue:R1}. Nothing in the text says that a rule leaves a group behind.' },
    not: { outcome: 'idegal', why: 'The text asks for the same help for every school-leaver, and names no rule as the cause of anyone being left behind. A text that said a rule treats everyone alike and shuts one group out would be {o:idegal}.' } },

  /* ---------- The two worked cases ---------- */
  { id: 'i5-worked-clean', use: 'teach', tier: 'clean', setting: 'housing', topic: 'a spare room let at an agreed price', name: 'The spare-room letter',
    text: "From a letter to the Birchfield Gazette by Colm Hartigan: 'A person who owns a spare room should be free to let it to whom they like, at a price both sides agree. Each person is free to own, to rent and to bargain. The council has its courts to settle disputes and its police to keep the peace, and that is enough. Beyond that it should leave people to their own agreements.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'Each person is free to own, to rent and to bargain',
            R1: 'The council has its courts to settle disputes and its police to keep the peace, and that is enough. Beyond that it should leave people to their own agreements' } },

  { id: 'i5-worked-misleading', use: 'teach', tier: 'misleading', setting: 'schooling', topic: 'tutoring and a study room for the entry test', name: 'The tutoring speech',
    text: "From a speech to parents at the Harbury school: 'The county's entry test is the same paper on the same day for every child, and nobody says it is unfair. But a child with no quiet room and no tutor starts a long way back. Every child is owed a fair start. We ask the government to pay for tutoring and a study room for any child who needs one, and we will all pay for it together.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Every child is owed a fair start',
            R1: 'We ask the government to pay for tutoring and a study room for any child who needs one' } }
]);

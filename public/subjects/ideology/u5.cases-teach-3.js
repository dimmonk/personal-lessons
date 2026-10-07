// Political Ideologies, Unit Five: cases shown inside cards, part three (the check after the question card, and the worked case).
// Every text is invented. No person, party, country or event is real, and no text says what any real person believes.

FC.cases('ideology', 'u5', [

  { id: 'i5-check-does', use: 'check', tier: 'clean', setting: 'work', topic: 'a training place for every school-leaver',
    text: "At a youth forum in Dunmore, Council Member Abel Reyes said: 'Each young person is free to choose their own path, and nobody should stand in the way. But a path needs a first step. We ask the government to pay for a training place for every school-leaver who wants one, and we will all pay for it together.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Each young person is free to choose their own path',
            R1: 'We ask the government to pay for a training place for every school-leaver who wants one' },
    reason: { D1: 'He says what each young person is free to do, and puts it first: {cue:D1}.',
              R1: 'He asks the government to give something, not only to stay out of the way: {cue:R1}.' },
    not: { outcome: 'idegal', why: 'The text asks for the same help for every school-leaver and blames no rule. A text that blamed a rule for shutting one group out would be {o:idegal}.' } },

  { id: 'i5-worked-misleading', use: 'teach', tier: 'misleading', setting: 'schooling', topic: 'tutoring and a study room for the entry test', name: 'The tutoring speech',
    text: "From a speech to parents at the Harbury school: 'The county's entry test is the same paper on the same day for every child, and nobody says it is unfair. But a child with no quiet room and no tutor starts a long way back. Every child is owed a fair start. We ask the government to pay for tutoring and a study room for any child who needs one, and we will all pay for it together.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Every child is owed a fair start',
            R1: 'We ask the government to pay for tutoring and a study room for any child who needs one' } }
]);

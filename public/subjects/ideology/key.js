// Political Ideologies: the key. THE ONLY PLACE this subject's vocabulary is typed (lesson standard K1).
// Outcome names, question text, answer text, and the plain / needs / why / when lines are written here once.
// Cards, checks, drills, feedback and verdicts refer to them by token and never retype them:
//   {o:id} name   {plain:id} plain words   {needs:id} what to look for
//   {q:STEP} question   {a:STEP.option} answer   {when:STEP.option} when to give it   {t:id} term   {means:id} its meaning
//
// Field guide (lesson standard S1)
//   outcomes[].n      the one fixed name shown everywhere
//   outcomes[].plain  a few ordinary words: the preview map, and the heading of the card that introduces the name
//   outcomes[].needs  what a story has to show before the name fits. Printed under "What to look for" where two
//                     names are compared, on the recap and the reference screen, and in feedback.
//   outcomes[].aka    other words real life uses for the same thing; shown once, on the card that introduces the name
//   terms[]           taught words that are not key wording; each has one term card in the unit named
//   avoid[]           words this subject's authored text must not use, with what to say instead (P4 requires 2)
//   steps[].q         the question, exactly as it is asked
//   steps[].why       why that difference decides
//   options[].n       the answer, exactly as it is shown
//   options[].when    what a story has to show for this answer, as a clause. Printed as "Give this answer when <when>."
//                     and in feedback as "This story shows something else: <when>."
//   options[].keeps   the outcome ids this answer leaves possible
//   options[].yieldsTo  the key's tie-break, as data: when a story shows this answer AND the one named, the named one wins
// Step codes (D1, C1, C2, N1, N2, T1, R1) and ids are for the data. They are never shown to the learner (K3).
//
//   gate options also carry plain and needs: the gate's answers are Unit One's families (lesson standard A15).
//                     A family's name is its answer text. It is printed by {a:D1.option}; its plain words and what to
//                     look for are printed by {plain:option} and {needs:option}.
//
// The old key asked two questions of every text and left two to six names standing on most of them, so the name was
// decided by knowledge the key never asked. This key asks one first question with five answers; four of them lead to a
// branch whose questions end every route in one name, and the fifth (a text that takes no side) ends the key.
// What changed, and why, is in docs/rebuild/ideology-plan.md (part a); it becomes build.keyChanges of the units.
//
// Words the key uses on purpose: "the government" (never "the state", K9: one word for one thing), "the businesses"
// (the farms, factories, shops and banks), "workers" and "owners", "elections", "an elite" (a taught term, Unit Three).

FC.key('ideology', {
  outcomes: [
    // Workers against owners: taught by Unit Two. Seven names, two questions.
    { id: 'socdem', group: 'class', unit: 'u2',
      n: 'Social democracy',
      plain: 'owners keep their businesses, and taxes pay for services for all',
      needs: 'workers set against owners, the owners keeping their businesses, and the government taxing them to pay for schools and health care, or setting a minimum wage',
      aka: ['the welfare state', 'the Nordic model'] },
    { id: 'classonly', group: 'class', unit: 'u2',
      n: 'Class politics on its own',
      plain: 'workers against owners, and nothing more',
      needs: 'workers set against owners, and nothing more: no plan for the businesses, no taxes, no account of how owners profit, no seizing power, no ending the government',
      aka: [] },
    { id: 'demsoc', group: 'class', unit: 'u2',
      n: 'Democratic socialism',
      plain: 'the businesses handed over, by voting',
      needs: 'workers set against owners, the businesses handed to the public or their workers by vote or without saying how, and no seizing power or ending the government',
      aka: [] },
    { id: 'ml', group: 'class', unit: 'u2',
      n: 'Marxism-Leninism',
      plain: 'one party takes power and rules for the workers',
      needs: 'workers set against owners, and a party, or the workers themselves, taking power by force or ruling as the only party, with no election that could vote them out',
      aka: ['communism', 'Leninism', 'Soviet-style communism'] },
    { id: 'anarch', group: 'class', unit: 'u2',
      n: 'Anarchism',
      plain: 'no bosses and no government',
      needs: 'workers set against owners, and the government gotten rid of right away, not used first, with people running their workplaces and towns together without it',
      aka: ['libertarian socialism', 'anarcho-syndicalism'] },
    { id: 'mktsoc', group: 'class', unit: 'u2',
      n: 'Market socialism',
      plain: 'each business owned by its workers, competing for customers',
      needs: 'workers set against owners, each business owned by its workers, and those businesses competing for customers, setting their own prices and able to go under',
      aka: [] },
    { id: 'marx', group: 'class', unit: 'u2',
      n: 'Marxism',
      plain: 'an explanation of how owners profit from workers',
      needs: 'owners and workers, and how the system works, like owners keeping part of what workers make without paying for it, but no plan for the businesses or for taking power',
      aka: ['Marxist theory'] },

    // The nation, or its ordinary people: taught by Unit Three. Five names, two questions.
    { id: 'nationalism', group: 'nation', unit: 'u3',
      n: 'Nationalism',
      plain: 'the nation first, with elections left alone',
      needs: 'the whole nation as one people, put first, with no enemy inside it, no peoples ranked by blood, and elections, other parties and critics left alone',
      aka: ['patriotism'] },
    { id: 'fasc', group: 'nation', unit: 'u3',
      n: 'Fascism',
      plain: 'the nation as one, with elections pushed aside for one leader',
      needs: 'the nation or its ordinary people put first, and elections, other parties or critics shut down or crushed so that one leader or movement speaks for everyone',
      aka: ['ultranationalism'] },
    { id: 'natpop', group: 'nation', unit: 'u3',
      n: 'National populism',
      plain: 'ordinary people against an elite, with the nation first',
      needs: 'the country’s ordinary people set against an elite at the top, the nation’s borders, culture or industry put first, and elections and critics left alone',
      aka: ['right-wing populism'] },
    { id: 'pop', group: 'nation', unit: 'u3',
      n: 'Populism on its own',
      plain: 'ordinary people against an elite, and nothing more',
      needs: 'ordinary people set against an elite at the top, and nothing more: no borders, culture or industry to put first, no ranking of peoples, and elections left alone',
      aka: ['thin populism'] },
    { id: 'nazi', group: 'nation', unit: 'u3',
      n: 'Nazism',
      plain: 'one people by blood, ranked above the others',
      needs: 'people sorted by blood or birth into higher and lower peoples, and the text’s own people put above the rest, to rule them or to be kept apart from them',
      aka: ['National Socialism', 'neo-Nazism', 'racial supremacism'] },

    // The old ways: taught by Unit Four. Two names, one question.
    { id: 'conserv', group: 'tradition', unit: 'u4',
      n: 'Conservatism',
      plain: 'keep the old ways, and change slowly',
      needs: 'faith, home life or customs handed down from the past, a wish to keep them, any change made slowly, and no call to bring back something that is gone',
      aka: ['small-c conservatism'] },
    { id: 'react', group: 'tradition', unit: 'u4',
      n: 'Reactionary conservatism',
      plain: 'bring back an old order that is gone',
      needs: 'an old order of church, crown, rank or custom that the text says was wrongly torn down, and a call to bring it back',
      aka: ['throne and altar', 'traditionalism'] },

    // Everyone's rights: taught by Unit Five. Three names, one question.
    { id: 'clib', group: 'rights', unit: 'u5',
      n: 'Classical liberalism',
      plain: 'each person’s freedom, and a small government',
      needs: 'each person’s freedom to speak, believe, own and trade put first, and the government kept to a few jobs like courts, police and defense, or asked for nothing',
      aka: ['libertarianism', 'market liberalism'] },
    { id: 'modlib', group: 'rights', unit: 'u5',
      n: 'Modern liberalism',
      plain: 'each person’s freedom, plus a fair start paid for by all',
      needs: 'each person’s rights put first, plus the government giving everyone a fair start, like schools and health care, and no group said to be held back by the rules',
      aka: ['social liberalism', 'liberal, as Americans use the word'] },
    { id: 'idegal', group: 'rights', unit: 'u5',
      n: 'Group equality',
      plain: 'rules that look fair, said to hold some groups back',
      needs: 'groups by race or sex, rules that treat everyone the same yet leave some groups behind, a call to change them until results are fair, and no group put above another',
      aka: ['identity politics', 'social justice', 'identity-egalitarianism'] }
  ],

  terms: [
    { id: 'ideology', unit: 'u1', n: 'ideology',
      means: 'a set of beliefs about who a country is for and how it should be run' },
    { id: 'surplus', unit: 'u2', n: 'surplus value',
      means: 'the part of what workers make that they are not paid for, which the owner keeps as profit' },
    { id: 'elite', unit: 'u3', n: 'elite',
      means: 'a small group at the top, with far more money, power or say than everyone else' },
    { id: 'equity', unit: 'u5', n: 'equity',
      means: 'treating groups differently where needed so that results come out fair for each of them, instead of giving everyone the same rules' }
  ],

  // Words the old lessons used that a newcomer could not follow (docs/comprehension-audit/ideology.md), words the old
  // lessons used for two things, and this subject's textbook words.
  avoid: [
    { word: 'unit of analysis', sayInstead: 'whose side it is on' },
    { word: 'means of production', sayInstead: 'the businesses: the farms, factories, shops and banks' },
    { word: 'productive assets', sayInstead: 'the businesses: the farms, factories, shops and banks' },
    { word: 'the state', sayInstead: 'the government (one word is used for it throughout)' },
    { word: 'redistribution', sayInstead: 'taxes that pay for services for all' },
    { word: 'valence', sayInstead: 'which way it points: one people ranked above others, or rules said to hold groups back' },
    { word: 'palingenetic', sayInstead: 'a story of the nation fallen and to be reborn' },
    { word: 'corporatism', sayInstead: 'owners told by the government what to make' },
    { word: 'statism', sayInstead: 'how much the government does' },
    { word: 'horseshoe', sayInstead: 'sorting beliefs by how they act instead of by what they want' },
    { word: 'host', sayInstead: 'what else it asks for' },
    { word: 'unresolved', sayInstead: 'on its own' },
    { word: 'nothing attached', sayInstead: 'on its own' },
    { word: 'egalitarian', sayInstead: 'fair to every group' },
    { word: 'family', sayInstead: 'the names one answer leads to' },
    { word: 'formation', sayInstead: 'name' },
    { word: 'passage', sayInstead: 'text' },
    { word: 'specimen', sayInstead: 'story' },
    { word: 'extra check', sayInstead: 'the next question' },
    { word: 'tie-breaker', sayInstead: 'the next question' },
    { word: 'the rule', sayInstead: 'what to look for, or how to tell them apart' },
    { word: 'falsify', sayInstead: 'what would make it a different name' },
    // Added with the plain rewrite: this subject's textbook words.
    { word: 'proletariat', sayInstead: 'workers' },
    { word: 'bourgeoisie', sayInstead: 'owners' },
    { word: 'class consciousness', sayInstead: 'workers seeing they are on one side against owners' },
    { word: 'nationalization', sayInstead: 'the government taking over the businesses' },
    { word: 'collectivization', sayInstead: 'the businesses handed to the public or to their workers' },
    { word: 'laissez-faire', sayInstead: 'the government leaving businesses alone' },
    { word: 'authoritarian', sayInstead: 'one leader or one party that cannot be voted out' },
    { word: 'totalitarian', sayInstead: 'one leader or one party that cannot be voted out, and no critics allowed' },
    { word: 'ethnonationalism', sayInstead: 'one people by blood, ranked above the others' },
    { word: 'nativism', sayInstead: 'people born here put first' },
    { word: 'sovereignty', sayInstead: 'the country making its own decisions' },
    { word: 'hegemony', sayInstead: 'who is in charge' },
    { word: 'pluralism', sayInstead: 'elections, other parties and critics left alone' },
    { word: 'institutions', sayInstead: 'say which: courts, elections, schools, newspapers' },
    { word: 'dialectical', sayInstead: 'the fight between owners and workers' },
    { word: 'ideological', sayInstead: 'say what it believes' }
  ],

  // THE GATE: the first question of the key, taught by Unit One. Its five answers are that unit's families.
  // Tie-breaks are data (yieldsTo): a text that sets workers against owners gets the first answer even when it also
  // speaks of the nation or of rights; a text that holds up the old ways gets the third answer even when it also speaks
  // of the nation or of rights. The fifth answer needs no tie-break: its "when" already requires that the text take
  // none of the other four sides.
  gate: {
    code: 'D1', unit: 'u1',
    q: 'Whose side is it on?',
    why: 'Each side wants something different, and each has its own names. The next questions ask what that side wants, so this answer decides which questions come next. Something that takes no side has no name to find.',
    options: [
      { id: 'class', n: 'Workers against owners',
        plain: 'working people on one side, owners on the other',
        needs: 'people who work for a wage, people who own the farms, factories, shops or banks, and the text on the workers’ side',
        when: 'the text splits people into those who work for a wage and those who own the businesses (or got rich owning them), and takes the workers’ side',
        keeps: ['socdem', 'classonly', 'demsoc', 'ml', 'anarch', 'mktsoc', 'marx'] },
      { id: 'nation', n: 'The nation, or its ordinary people',
        plain: 'one people and its country, first',
        needs: 'a people the text calls its own, marked by its country, its culture or its blood, and that people put first',
        when: 'the text speaks for one people, marked by its country, culture or blood, and puts it first: the whole nation as one, or its ordinary people against a few at the top',
        keeps: ['nationalism', 'fasc', 'natpop', 'pop', 'nazi'],
        yieldsTo: [{ option: 'class', say: 'workers set against owners' },
                   { option: 'tradition', say: 'faith, home life or old customs held up as the country’s guide' }] },
      { id: 'tradition', n: 'The old ways',
        plain: 'faith, home life and customs handed down',
        needs: 'ways handed down from the past (a faith, home life, old customs, or an old order of crown, church and rank), held up as what should guide the country',
        when: 'the text holds up ways handed down from the past (a faith, home life, old customs, or an old order of crown, church and rank) as what should guide the country',
        keeps: ['conserv', 'react'],
        yieldsTo: [{ option: 'class', say: 'workers set against owners' }] },
      { id: 'rights', n: 'Everyone’s rights',
        plain: 'what every person is owed',
        needs: 'something every person is owed (the freedom to speak, believe, own and trade, a fair start in life, or fair treatment whatever their group), put first',
        when: 'the text puts first what every person is owed: the freedom to speak, believe, own and trade, a fair start in life, or fair treatment whatever their group',
        keeps: ['clib', 'modlib', 'idegal'],
        yieldsTo: [{ option: 'class', say: 'workers set against owners' },
                   { option: 'tradition', say: 'faith, home life or old customs held up as the country’s guide' },
                   { option: 'nation', say: 'one people put first' }] },
      { id: 'none', n: 'No side at all',
        plain: 'who is in charge, or one practical matter, and no side',
        needs: 'who holds power and how they keep it, or one practical matter, and none of the other four sides taken',
        when: 'the text only says who holds power and how they keep it, or how to handle one practical matter, and takes none of the other four sides',
        keeps: [] }    // no branch: after this answer the key asks nothing more, and gives no further name
    ]
  },

  branches: {
    // Workers against owners. Two questions: what should happen to the businesses, then what should happen to the
    // government. Every route ends in one name; a text that says nothing about either has a name of its own
    // (Class politics on its own), and "The text does not say" is a real answer to both questions.
    class: [
      { code: 'C1', unit: 'u2',
        q: 'What does it say about the businesses?',
        why: 'Most of these names differ first on the businesses: who should own them, and whether they compete. Taxes and public services change who gets what, not who owns what, so they are a different answer from handing the businesses over.',
        options: [
          { id: 'keep', n: 'Owners keep them, but are taxed to pay for services',
            when: 'the text leaves the businesses with their owners, and asks the government to tax them, set a minimum wage, or pay for health care, schools and pensions',
            keeps: ['socdem'],
            yieldsTo: [{ option: 'public', say: 'the businesses handed to the government' },
                       { option: 'workers', say: 'the businesses handed to the people who work in them' },
                       { option: 'market', say: 'the businesses handed to their workers, competing for customers' }] },
          { id: 'public', n: 'The government should take them over',
            when: 'the text says the businesses, or the biggest ones, should be owned by the government or by public bodies, for everyone',
            keeps: ['demsoc', 'ml'] },
          { id: 'workers', n: 'The workers in each one should own it',
            when: 'the text says each business should be owned and run by the people who work in it, together',
            keeps: ['demsoc', 'ml', 'anarch'],
            yieldsTo: [{ option: 'market', say: 'businesses owned by their workers and competing with each other for customers' }] },
          { id: 'market', n: 'The workers in each one should own it, and compete for customers',
            when: 'the text says each business should belong to the people who work in it, and compete with the others for customers, setting its own prices and able to go under',
            keeps: ['mktsoc'] },
          { id: 'explain', n: 'It explains how owners profit from workers',
            when: 'the text explains how the system works: owners keep part of what workers make without paying for it, or the fight between owners and workers drives history',
            keeps: ['marx', 'ml', 'anarch'],
            yieldsTo: [{ option: 'keep', say: 'a plan to tax owners and pay for services' },
                       { option: 'public', say: 'a plan to hand the businesses to the government' },
                       { option: 'workers', say: 'a plan to hand the businesses to the people who work in them' },
                       { option: 'market', say: 'a plan to hand the businesses to their workers, competing for customers' }] },
          { id: 'none', n: 'The text does not say',
            when: 'the text says nothing about the businesses: no plan for who should own them, no taxes or services, and no explanation of how owners profit',
            keeps: ['classonly', 'ml', 'anarch'] }
        ] },
      { code: 'C2', unit: 'u2',
        q: 'What does it want done with the government?',
        why: 'Two texts can want the same thing for the businesses and get there in opposite ways: by winning elections they could lose, through one party that cannot be voted out, or by getting rid of government. The way they get there is part of each name.',
        options: [
          { id: 'seize', n: 'Take power for the workers, and allow no other party',
            when: 'the text says a party, or the workers themselves, should take power by force or rule as the only party, and never offers to give it up at an election',
            keeps: ['ml'] },
          { id: 'vote', n: 'Keep it, and run it by winning elections',
            when: 'the text says the change will come through elections, lawmakers or the courts, or that voters can remove whoever runs the government',
            keeps: ['socdem', 'classonly', 'demsoc', 'mktsoc', 'marx'] },
          { id: 'gone', n: 'Get rid of it, and run things together',
            when: 'the text wants the government gotten rid of right away, not used first, with people running their workplaces and towns together without it',
            keeps: ['anarch'] },
          { id: 'none', n: 'The text does not say',
            when: 'the text says nothing about how to win or hold power, or about what should happen to the government',
            keeps: ['socdem', 'classonly', 'demsoc', 'mktsoc', 'marx'] }
        ] }
    ],

    // The nation, or its ordinary people. Two questions: who the text is for and who it is against, then what it wants
    // done with elections and critics. The second question is what separates the name that rules alone from the names
    // that keep the vote; ranking peoples by blood is decided by the first question alone.
    nation: [
      { code: 'N1', unit: 'u3',
        q: 'Who is it for, and who is it against?',
        why: 'All five love one people, and differ in who that people is set against. The whole nation has no enemy inside it; ordinary people have an elite above them; a people by blood has peoples it ranks lower.',
        options: [
          { id: 'whole', n: 'The whole nation, as one people',
            when: 'the text speaks for the whole nation as one people with one future, and treats what divides it, like rich and poor, as smaller than what holds it together',
            keeps: ['nationalism', 'fasc'],
            yieldsTo: [{ option: 'elitenation', say: 'the country’s ordinary people set against an elite at the top' },
                       { option: 'blood', say: 'peoples ranked higher and lower by blood' }] },
          { id: 'elitenation', n: 'Ordinary people against an elite, and the nation first',
            when: 'the text sets the country’s ordinary people against an elite at the top, like politicians or bankers, and wants the nation’s borders, culture or industry put first',
            keeps: ['natpop', 'fasc'],
            yieldsTo: [{ option: 'blood', say: 'peoples ranked higher and lower by blood' }] },
          { id: 'eliteonly', n: 'Ordinary people against an elite, and nothing more',
            when: 'the text sets ordinary people against an elite at the top, and puts nothing of the nation first: no borders, culture or industry, and no ranking of peoples',
            keeps: ['pop'] },
          { id: 'blood', n: 'One people by blood, ranked above the others',
            when: 'the text sorts people by blood or birth into higher and lower peoples, and puts its own people above the rest',
            keeps: ['nazi'] }
        ] },
      { code: 'N2', unit: 'u3',
        q: 'What does it want done with elections and critics?',
        why: 'Several names put the nation first. Shutting down elections and silencing critics is what makes one of them rule alone, so whether elections and critics stay is what to check.',
        options: [
          { id: 'aside', n: 'Push them aside, so one leader speaks for everyone',
            when: 'the text wants elections, lawmakers, other parties or critics shut down, silenced or crushed, so that one leader or one movement speaks for the whole people',
            keeps: ['fasc', 'nazi'] },
          { id: 'keep', n: 'Leave them in place',
            when: 'the text keeps elections, other parties and the right to disagree, asks voters for power, or says nothing against them',
            keeps: ['nationalism', 'natpop', 'pop', 'nazi'] }
        ] }
    ],

    // The old ways. One question: each answer leads to one name.
    tradition: [
      { code: 'T1', unit: 'u4',
        q: 'What does it want done with the old ways?',
        why: 'Both names value what was handed down. One says the present is a wrong to undo and wants a lost order back; the other accepts the present and asks only that change be slow.',
        options: [
          { id: 'keep', n: 'Keep what is left, and change slowly',
            when: 'the text wants the faith, home life or customs handed down kept, with any change made slowly, and does not ask to bring back something that is gone',
            keeps: ['conserv'] },
          { id: 'restore', n: 'Bring back what is gone',
            when: 'the text says an old order of church, crown, rank or custom was wrongly torn down, and asks to bring it back',
            keeps: ['react'] }
        ] }
    ],

    // Everyone's rights. One question: each answer leads to one name.
    rights: [
      { code: 'R1', unit: 'u5',
        q: 'What does it want the government to do for people?',
        why: 'All three put people’s rights first and disagree about what people are owed: freedom from a government that does too much, a fair start the government pays for, or fair results for groups the rules leave behind.',
        options: [
          { id: 'leave', n: 'Protect their rights, and otherwise leave them alone',
            when: 'the text wants each person free to speak, believe, own and trade, and the government kept to a few jobs like courts, police and defense, or asks nothing of it',
            keeps: ['clib'] },
          { id: 'start', n: 'Protect their rights, and give everyone a fair start',
            when: 'the text wants each person’s rights protected, and the government to give everyone a fair start, like schools, health care or help when out of work',
            keeps: ['modlib'],
            yieldsTo: [{ option: 'rules', say: 'rules that treat everyone the same, said to leave some groups behind' }] },
          { id: 'rules', n: 'Change the rules that hold some groups back',
            when: 'the text says rules that treat everyone the same still leave some groups behind, by race, sex or origin, and wants them changed until results are fair',
            keeps: ['idegal'] }
        ] }
    ]
  }
});

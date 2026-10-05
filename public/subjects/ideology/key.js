// Political Ideologies: the key. THE ONLY PLACE this subject's vocabulary is typed (lesson standard K1).
// Outcome names, question text, answer text, and the plain / needs / purpose / why / when lines are written here once.
// Cards, checks, drills, feedback and verdicts refer to them by token and never retype them:
//   {o:id} name   {plain:id} plain words   {needs:id} what you must be able to point to
//   {q:STEP} question   {a:STEP.option} answer   {when:STEP.option} when to give it   {t:id} term   {means:id} its meaning
//
// Field guide (lesson standard S1)
//   outcomes[].n      the one fixed name shown everywhere
//   outcomes[].plain  a few ordinary words: the preview map, and the heading of the card that introduces the name
//   outcomes[].needs  what you must be able to point to in a case before the name can be used.
//                     Printed on the meet card, the recap and the reference screen, and in feedback.
//   outcomes[].aka    other words real life uses for the same thing; shown once, on the card that introduces the name
//   terms[]           taught words that are not key wording; each has one term card in the unit named
//   avoid[]           words this subject's authored text must not use, with what to say instead (P4 requires 2)
//   steps[].q         the question, exactly as it is asked
//   steps[].purpose   what the question sorts
//   steps[].why       why that distinction decides
//   options[].n       the answer, exactly as it is shown
//   options[].when    what a case must show for this answer. Printed as "Give this answer when <when>."
//   options[].keeps   the outcome ids this answer leaves possible
//   options[].yieldsTo  the key's tie-break, as data: when a case shows this answer AND the one named, the named one wins
// Step codes (D1, C1, C2, N1, N2, T1, R1) and ids are for the data. They are never shown to the learner (K3).
//
//   gate options also carry plain and needs: the gate's answers are Unit One's families (lesson standard A15).
//                     A family's name is its answer text. It is printed by {a:D1.option}; its plain words and what you
//                     must be able to point to are printed by {plain:option} and {needs:option}.
//
// The old key asked two questions of every text and left two to six names standing on most of them, so the name was
// decided by knowledge the key never asked. This key asks one first question with five answers; four of them lead to a
// branch whose questions end every route in one name, and the fifth (a text that speaks for no side) ends the key.
// What changed, and why, is in docs/rebuild/ideology-plan.md (part a); it becomes build.keyChanges of the units.
//
// Words the key uses on purpose: "the government" (never "the state", K9: one word for one thing), "the businesses"
// (the farms, factories, shops and banks), "elections", "an elite" (a taught term, Unit Three).

FC.key('ideology', {
  outcomes: [
    // Working people against owners: taught by Unit Two. Seven names, two questions.
    { id: 'socdem', group: 'class', unit: 'u2',
      n: 'Social democracy',
      plain: 'owners keep the businesses, and taxes even things out',
      needs: 'working people set against owners, the owners keeping their businesses, and the government taxing them, setting a floor for pay, or paying for services such as health care, schooling and pensions, so that working people get more',
      aka: ['the welfare state', 'the Nordic model'] },
    { id: 'classonly', group: 'class', unit: 'u2',
      n: 'Class politics with nothing attached',
      plain: 'working people against owners, and nothing more said',
      needs: 'working people set against owners, and nothing said about the businesses (no plan for who should own them, no taxes or services to even things out, no explanation of how owners gain), and no party seizing power and no getting rid of the government',
      aka: [] },
    { id: 'demsoc', group: 'class', unit: 'u2',
      n: 'Democratic socialism',
      plain: 'the businesses handed over, by votes',
      needs: 'working people set against owners, the businesses (or the biggest of them) to pass to the public or to the people who work in them, and no party seizing power and no getting rid of the government: the change comes through elections, or the text does not say how',
      aka: [] },
    { id: 'ml', group: 'class', unit: 'u2',
      n: 'Marxism-Leninism',
      plain: 'one party takes power and rules for the workers',
      needs: 'working people set against owners, and a party, or the workers themselves, taking power by force or ruling as the only party, with no offer to give it up at an election',
      aka: ['communism', 'Leninism', 'Soviet-style communism'] },
    { id: 'anarch', group: 'class', unit: 'u2',
      n: 'Anarchism',
      plain: 'no bosses and no government',
      needs: 'working people set against owners, and the government to be got rid of now, not used first, with people running their work and their towns together without it',
      aka: ['libertarian socialism', 'anarcho-syndicalism'] },
    { id: 'mktsoc', group: 'class', unit: 'u2',
      n: 'Market socialism',
      plain: 'firms owned by their workers, competing for customers',
      needs: 'working people set against owners, each business to belong to the people who work in it, and those businesses competing with each other for customers, setting their own prices and able to fail',
      aka: [] },
    { id: 'marx', group: 'class', unit: 'u2',
      n: 'Marxism',
      plain: 'an explanation of how owners gain from workers',
      needs: 'owners and workers, and the text explaining, as the way the system itself works, that owners gain from what workers make and are not paid for, or that the fight between owners and workers is what moves history; and no plan for who should own the businesses and no party seizing power',
      aka: ['Marxist theory'] },

    // The nation, or its ordinary people: taught by Unit Three. Five names, two questions.
    { id: 'nationalism', group: 'nation', unit: 'u3',
      n: 'Nationalism',
      plain: 'the nation first, with elections left alone',
      needs: 'the whole nation spoken for as one people and put first, no elite inside it named as the enemy, no ranking of peoples by blood, and elections, other parties and the right to disagree left in place',
      aka: ['patriotism'] },
    { id: 'fasc', group: 'nation', unit: 'u3',
      n: 'Fascism',
      plain: 'the nation as one, with elections pushed aside for one leader',
      needs: 'the nation spoken for as one people (or its ordinary people set against an elite, with the nation put first), and elections, other parties or those who disagree done away with, silenced or broken, so that one leader or one movement speaks for everyone',
      aka: ['ultranationalism'] },
    { id: 'natpop', group: 'nation', unit: 'u3',
      n: 'National populism',
      plain: 'ordinary people against an elite, with the nation put first',
      needs: 'the country’s ordinary people set against an elite at the top, the nation’s borders, culture or industry to be put first, and elections, other parties and the right to disagree left in place',
      aka: ['right-wing populism'] },
    { id: 'pop', group: 'nation', unit: 'u3',
      n: 'Populism with nothing attached',
      plain: 'ordinary people against an elite, and nothing more',
      needs: 'ordinary people set against an elite at the top, and nothing more: no borders, culture or industry to put first, no ranking of peoples, and elections left in place',
      aka: ['thin populism'] },
    { id: 'nazi', group: 'nation', unit: 'u3',
      n: 'Nazism',
      plain: 'one people by blood, ranked above the others',
      needs: 'people sorted by blood or birth into peoples ranked higher and lower, and the text’s own people placed above the others, to rule them or to be kept apart from them',
      aka: ['National Socialism', 'neo-Nazism', 'racial supremacism'] },

    // Old ways of faith, family and custom: taught by Unit Four. Two names, one question.
    { id: 'conserv', group: 'tradition', unit: 'u4',
      n: 'Conservatism',
      plain: 'keep the old ways, and change slowly',
      needs: 'ways of faith, family or custom handed down from the past, the text wanting them kept, with any change made slowly, and no order that has gone asked to be brought back',
      aka: ['small-c conservatism'] },
    { id: 'react', group: 'tradition', unit: 'u4',
      n: 'Reactionary conservatism',
      plain: 'bring back an old order that has gone',
      needs: 'an old order of faith, crown, rank or custom that the text says was wrongly torn down, and the text asking for it to be put back',
      aka: ['throne and altar', 'traditionalism'] },

    // Rights and fair treatment for everyone: taught by Unit Five. Three names, one question.
    { id: 'clib', group: 'rights', unit: 'u5',
      n: 'Classical liberalism',
      plain: 'each person’s freedom, and a small government',
      needs: 'each person’s freedom to speak, believe, own and trade put first, and the government kept to a few jobs (courts, police, defence, holding people to their contracts) or asked for nothing more',
      aka: ['libertarianism', 'market liberalism'] },
    { id: 'modlib', group: 'rights', unit: 'u5',
      n: 'Modern liberalism',
      plain: 'each person’s freedom, with a fair start paid for by all',
      needs: 'each person’s rights put first, and the government also giving everyone a fair start (schooling, health care, help when out of work, fair rules for business), with no group named as held back by the rules',
      aka: ['social liberalism', 'liberal, as Americans use the word'] },
    { id: 'idegal', group: 'rights', unit: 'u5',
      n: 'Group equality',
      plain: 'rules that look fair, said to hold some groups back',
      needs: 'groups of people (by race, sex, disability or origin), rules or habits that treat everyone alike and still leave some of those groups behind, and the text wanting them changed until results are fair across groups, with no group placed above another',
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
      means: 'treating groups differently where that is needed so that results come out fair across them, instead of giving everyone the same rules' }
  ],

  // Words the old lessons used that a newcomer could not follow (docs/comprehension-audit/ideology.md), or that the old
  // lessons used for two things.
  avoid: [
    { word: 'unit of analysis', sayInstead: 'who or what the text puts first' },
    { word: 'means of production', sayInstead: 'the farms, factories, shops and banks' },
    { word: 'productive assets', sayInstead: 'the farms, factories, shops and banks' },
    { word: 'the state', sayInstead: 'the government (the key uses one word for it)' },
    { word: 'redistribution', sayInstead: 'taxes and public services evening out what people get' },
    { word: 'valence', sayInstead: 'which way the text points: one people ranked above others, or rules said to hold groups back' },
    { word: 'palingenetic', sayInstead: 'a story of the nation fallen and to be reborn' },
    { word: 'corporatism', sayInstead: 'owners told by the government what to make' },
    { word: 'statism', sayInstead: 'how much the government does' },
    { word: 'horseshoe', sayInstead: 'grouping beliefs by the methods they share instead of by their answers to the key' },
    { word: 'host', sayInstead: 'what the text attaches' },
    { word: 'unresolved', sayInstead: 'with nothing attached' },
    { word: 'egalitarian', sayInstead: 'fair to every group' },
    { word: 'family', sayInstead: 'the names one answer leads to' },
    { word: 'formation', sayInstead: 'name' },
    { word: 'passage', sayInstead: 'text' },
    { word: 'specimen', sayInstead: 'case' },
    { word: 'extra check', sayInstead: 'the key’s next question' },
    { word: 'tie-breaker', sayInstead: 'the key’s next question' },
    { word: 'the rule', sayInstead: 'what you must be able to point to, or how to tell them apart' },
    { word: 'falsify', sayInstead: 'what would make it a different name' }
  ],

  // THE GATE: the first question of the key, taught by Unit One. Its five answers are that unit's families.
  // Tie-breaks are data (yieldsTo): a text that sets working people against owners gets the first answer even when it
  // also speaks of the nation or of rights; a text that holds up old ways of faith, family and custom gets the third
  // answer even when it also speaks of the nation or of rights. The fifth answer needs no tie-break: its "when" already
  // requires that the text speak for none of the other four.
  gate: {
    code: 'D1', unit: 'u1',
    q: 'Who or what does the text put first?',
    purpose: 'Sorts texts that speak for working people against owners, for a nation or its ordinary people, for old ways handed down, or for what every person is owed, from texts that speak for no side at all',
    why: 'Each of the four sides is a different answer to who a country is for, and each comes with its own names. The questions that come next ask what that side wants, so which questions come next depends on this answer. A text that speaks for no side has nothing more to name.',
    options: [
      { id: 'class', n: 'Working people, against those who own the businesses',
        plain: 'working people and owners, on opposite sides',
        needs: 'people who work for a wage, people who own the farms, factories, shops or banks, and the text on the side of the workers against the owners',
        when: 'the text sorts people by whether they work for a wage or own the businesses (or are rich from owning them), and takes the side of the workers against the owners',
        keeps: ['socdem', 'classonly', 'demsoc', 'ml', 'anarch', 'mktsoc', 'marx'] },
      { id: 'nation', n: 'The nation, or its ordinary people',
        plain: 'one people and its country',
        needs: 'a people the text calls its own, marked out by its country, its culture or its blood, and the text putting that people first',
        when: 'the text speaks for one people, marked out by its country, its culture or its blood, and puts that people first: the whole nation as one, or its ordinary people against a few at the top',
        keeps: ['nationalism', 'fasc', 'natpop', 'pop', 'nazi'],
        yieldsTo: [{ option: 'class', say: 'working people set against those who own the businesses' },
                   { option: 'tradition', say: 'old ways of faith, family or custom held up as what should guide the country' }] },
      { id: 'tradition', n: 'Old ways of faith, family and custom',
        plain: 'the ways handed down from the past',
        needs: 'ways handed down from the past (a faith, the family, old customs, or an old order of crown, church and rank), and the text holding them up as what should guide the country',
        when: 'the text holds up ways handed down from the past (a faith, the family, old customs, or an old order of crown, church and rank) as what should guide the country',
        keeps: ['conserv', 'react'],
        yieldsTo: [{ option: 'class', say: 'working people set against those who own the businesses' }] },
      { id: 'rights', n: 'Rights and fair treatment for everyone',
        plain: 'what every person is owed',
        needs: 'something the text says every person is owed (the freedom to speak, believe, own and trade, a fair start in life, or fair treatment whatever group they belong to), and the text putting that first',
        when: 'the text puts first what it says every person is owed: the freedom to speak, believe, own and trade, a fair start in life, or fair treatment whatever group they belong to',
        keeps: ['clib', 'modlib', 'idegal'],
        yieldsTo: [{ option: 'class', say: 'working people set against those who own the businesses' },
                   { option: 'tradition', say: 'old ways of faith, family or custom held up as what should guide the country' },
                   { option: 'nation', say: 'one people put first' }] },
      { id: 'none', n: 'No side named',
        plain: 'who rules, or one practical matter, and no side',
        needs: 'a text about who holds power and how they keep it, or about one practical matter, and no side it speaks for: no working people against owners, no nation or people, no old ways, and nothing every person is owed',
        when: 'the text says only who holds power and how they keep it, or how one practical matter should be handled, and speaks for no side: no working people against owners, no nation or people, no old ways, and nothing every person is owed',
        keeps: [] }    // no branch: after this answer the key asks nothing more, and gives no further name
    ]
  },

  branches: {
    // Working people against owners. Two questions: what should happen to the businesses, then what should happen to
    // the government. Every route ends in one name; a text that says nothing about either has a name of its own
    // (Class politics with nothing attached), and "The text does not say" is a real answer to both questions.
    class: [
      { code: 'C1', unit: 'u2',
        q: 'What does the text say about the farms, factories, shops and banks?',
        purpose: 'Tells apart texts that keep the owners and tax them, texts that hand the businesses to the public or to the people who work in them, texts that only explain how owners gain, and texts that say nothing about the businesses',
        why: 'Most of the seven names are defined first by what should happen to the businesses: who should own them, and whether they should compete. Taxes and public services change who gets what, not who owns what, so they are a different answer from handing the businesses over.',
        options: [
          { id: 'keep', n: 'Their owners keep them, and taxes and public services even out what people get',
            when: 'the text leaves the businesses with their owners, and asks the government to tax them, set a floor for pay, or pay for services such as health care, schooling and pensions',
            keeps: ['socdem'],
            yieldsTo: [{ option: 'public', say: 'the businesses to pass to the government' },
                       { option: 'workers', say: 'the businesses to pass to the people who work in them' },
                       { option: 'market', say: 'the businesses to pass to the people who work in them, and to compete for customers' }] },
          { id: 'public', n: 'They should pass to the government, to be run for everyone',
            when: 'the text says the businesses, or the biggest of them, should be owned by the government or by public bodies on behalf of everyone',
            keeps: ['demsoc', 'ml'] },
          { id: 'workers', n: 'They should pass to the people who work in each one',
            when: 'the text says each business should be owned and run by the people who work in it, together',
            keeps: ['demsoc', 'ml', 'anarch'],
            yieldsTo: [{ option: 'market', say: 'businesses owned by their workers that compete with each other for customers' }] },
          { id: 'market', n: 'They should pass to the people who work in each one, and compete for customers',
            when: 'the text says each business should belong to the people who work in it, and that those businesses should compete with each other for customers, setting their own prices and able to fail',
            keeps: ['mktsoc'] },
          { id: 'explain', n: 'It explains how their owners gain from what workers make',
            when: 'the text explains, as the way the system itself works, that owners gain from what workers make and are not paid for, or that the fight between owners and workers is what moves history',
            keeps: ['marx', 'ml', 'anarch'],
            yieldsTo: [{ option: 'keep', say: 'a plan to tax the owners and pay for services' },
                       { option: 'public', say: 'a plan for the businesses to pass to the government' },
                       { option: 'workers', say: 'a plan for the businesses to pass to the people who work in them' },
                       { option: 'market', say: 'a plan for the businesses to pass to their workers and compete for customers' }] },
          { id: 'none', n: 'The text does not say',
            when: 'the text says nothing about the businesses: no plan for who should own them, no taxes or services to even things out, and no explanation of how their owners gain',
            keeps: ['classonly', 'ml', 'anarch'] }
        ] },
      { code: 'C2', unit: 'u2',
        q: 'What does the text want done with the government?',
        purpose: 'Tells apart texts in which a party or the workers seize power and keep it, texts in which the government stays and whoever wins elections runs it, and texts that would get rid of government altogether',
        why: 'Two texts can want the same thing done with the businesses and get there by opposite roads: through elections that can be lost, through a party that cannot be voted out, or by doing away with government. The road is part of what each name means.',
        options: [
          { id: 'seize', n: 'Seize power and hold it for the workers, with no rivals allowed',
            when: 'the text says a party, or the workers themselves, should take power by force or rule as the only party, and does not offer to give it up at an election',
            keeps: ['ml'] },
          { id: 'vote', n: 'Keep it, run by whoever wins elections',
            when: 'the text says the change will come through elections, parliament or the courts, or that voters can remove whoever runs the government',
            keeps: ['socdem', 'classonly', 'demsoc', 'mktsoc', 'marx'] },
          { id: 'gone', n: 'Get rid of it, and run things together without it',
            when: 'the text wants the government got rid of now, not used first, with people running their work and their towns together without it',
            keeps: ['anarch'] },
          { id: 'none', n: 'The text does not say',
            when: 'the text says nothing about how power is to be won or held, or about what should happen to the government',
            keeps: ['socdem', 'classonly', 'demsoc', 'mktsoc', 'marx'] }
        ] }
    ],

    // The nation, or its ordinary people. Two questions: who the text speaks for and against whom, then what it wants
    // done with elections and with those who disagree. The second question is what separates the name that rules
    // alone from the names that keep the vote; ranking peoples by blood is decided by the first question alone.
    nation: [
      { code: 'N1', unit: 'u3',
        q: 'Who does the text speak for, and against whom?',
        purpose: 'Tells apart texts that speak for the whole nation as one, texts that set its ordinary people against an elite (with the nation put first, or with nothing more), and texts that rank peoples by blood',
        why: 'These five names share a love of one people and differ in who that people is set against. A text about the whole nation names no enemy inside it; a text about ordinary people has an elite at the top; a text about blood has peoples it ranks lower. Each of those is part of what a name means.',
        options: [
          { id: 'whole', n: 'The whole nation, as one people',
            when: 'the text speaks for the whole nation as one people with one future, and treats what divides it (rich and poor, left and right, one party and another) as less than what holds it together',
            keeps: ['nationalism', 'fasc'],
            yieldsTo: [{ option: 'elitenation', say: 'the country’s ordinary people set against an elite at the top' },
                       { option: 'blood', say: 'peoples ranked higher and lower by blood' }] },
          { id: 'elitenation', n: 'Ordinary people against an elite, with the nation’s borders, culture or industry put first',
            when: 'the text sets the country’s ordinary people against an elite at the top (politicians, officials, bankers, the media, people who look abroad), and wants the nation’s borders, culture or industry put first',
            keeps: ['natpop', 'fasc'],
            yieldsTo: [{ option: 'blood', say: 'peoples ranked higher and lower by blood' }] },
          { id: 'eliteonly', n: 'Ordinary people against an elite, and nothing more',
            when: 'the text sets ordinary people against an elite at the top, and adds nothing about what the nation needs: no borders, culture or industry to put first, and no ranking of peoples',
            keeps: ['pop'] },
          { id: 'blood', n: 'One people by blood, ranked above the others',
            when: 'the text sorts people by blood or birth into peoples ranked higher and lower, and places its own people above the others',
            keeps: ['nazi'] }
        ] },
      { code: 'N2', unit: 'u3',
        q: 'What does the text want done with elections and with those who disagree?',
        purpose: 'Tells apart texts that do away with elections and silence those who disagree, so that one leader or movement speaks for all, from texts that leave them in place',
        why: 'Putting the nation first is shared by several names. Doing away with elections and silencing those who disagree is what makes one of them rule alone, so the vote, and the right to oppose, are what a text either keeps or removes.',
        options: [
          { id: 'aside', n: 'Push them aside, so one leader or movement speaks for everyone',
            when: 'the text wants elections, parliament, other parties or those who disagree done away with, silenced or broken, so that one leader or one movement speaks for the whole people',
            keeps: ['fasc', 'nazi'] },
          { id: 'keep', n: 'Leave them in place',
            when: 'the text keeps elections, other parties and the right to disagree, asks voters for power, or says nothing against them',
            keeps: ['nationalism', 'natpop', 'pop', 'nazi'] }
        ] }
    ],

    // Old ways of faith, family and custom. One question: each answer leads to one name.
    tradition: [
      { code: 'T1', unit: 'u4',
        q: 'What does the text want done with the old ways?',
        purpose: 'Tells apart texts that want an order that has gone brought back from texts that want what remains kept, with change made slowly',
        why: 'Both names value what has been handed down. One treats the present as a wrong to be undone and asks for an order that has gone; the other accepts the present and asks only that change be slow. Which of the two a text asks for is what each name means.',
        options: [
          { id: 'keep', n: 'Keep what remains, and change slowly',
            when: 'the text wants inherited ways of faith, family or custom kept, with any change made slowly, and does not ask for an order that has gone to be put back',
            keeps: ['conserv'] },
          { id: 'restore', n: 'Bring back an order that has gone',
            when: 'the text says an old order of faith, crown, rank or custom was wrongly torn down, and asks for it to be put back',
            keeps: ['react'] }
        ] }
    ],

    // Rights and fair treatment for everyone. One question: each answer leads to one name.
    rights: [
      { code: 'R1', unit: 'u5',
        q: 'What does the text want done for people?',
        purpose: 'Tells apart texts that want each person’s rights protected and the government kept small, texts that also want everyone given a fair start, and texts that want rules changed that hold some groups back',
        why: 'All three put first what people are owed, and disagree about what that is: freedom from a government that does too much, a fair start that the government pays for, or fair results for groups that rules leave behind. That disagreement is what each name means.',
        options: [
          { id: 'leave', n: 'Protect their rights, and otherwise leave them alone',
            when: 'the text wants each person free to speak, believe, own and trade, and wants the government kept to a few jobs such as courts, police and defence, or asks nothing more of it',
            keeps: ['clib'] },
          { id: 'start', n: 'Protect their rights, and give everyone a fair start',
            when: 'the text wants each person’s rights protected and also wants the government to give everyone a fair start, such as schooling, health care, help when out of work, or fair rules for business',
            keeps: ['modlib'],
            yieldsTo: [{ option: 'rules', say: 'rules that treat everyone alike said to leave some groups behind' }] },
          { id: 'rules', n: 'Change the rules that hold some groups back',
            when: 'the text says rules or habits that treat everyone alike still leave some groups (by race, sex, disability or origin) behind, and wants them changed until results are fair across groups',
            keeps: ['idegal'] }
        ] }
    ]
  }
});

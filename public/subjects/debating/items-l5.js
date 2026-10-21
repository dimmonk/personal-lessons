// Debating, lesson 5, what a true story gets you. Two decisions, each one a question of its own. (1) After you tell a true story about a moral disagreement, what did you get, read from the other person's last
// lines: a hearing (they take you seriously and their view stays), a small move (part of their view shifted), or neither shows (docs/research/debating.md, F5 and F6: the personal-experience
// studies measured respect and set persuasion aside; the story tests measured shifts in later surveys). (2) A story you plan to tell, line by line against what happened: tap the line you
// could not honestly say, or say every line is true (F6: a published comment warns that a false personal story would earn more respect than facts; Aristotle: do not make people believe what
// is wrong). The cue is always in the lines: a hearing can be curt, a move can be quiet and keep a reservation, a brush-off can be cheerful, so tone never gives the answer away. The cases are moral disagreements because that is what the personal-experience studies covered (F6); the reading of a reply as a hearing, a small move or neither is the lesson's own coding. The people
// and their stories are invented. Items a lesson does not name wait for the review.
(() => {
  const S = 'true-story';
  const REASON = {
    hearing: 'They showed they took in the story itself and kept their view where it was. That is a hearing. In the studies of personal experience, people showed more respect for a view backed by experience, and those studies put aside whether anyone changed their mind. Count it as a hearing, not a changed mind.',
    move: 'Part of their own view shifted, so it is a small move, whatever else they said. The studies found small shifts in attitudes. Count it as a step and not a win.',
    neither: 'They showed no sign of taking in the story itself, whether by a flat "okay", a change of subject or an argument that ignores it, and nothing about their view shifted. That does not show the story failed, since the studies measured shifts in surveys, some of them weeks or months later. It does mean there is nothing to count from this talk.',
    true: 'Every line matches what happened, so there is nothing to cut. Tell it as it is.',
    invented: 'Cut or fix the line that goes beyond what happened. An invented line can earn respect as well as a true one, and it is still a lie.'
  };
  const R = (id, right, setup, lines, deciding, cue, then) => ({ id, strand: S, facets: { result: right },
    blocks: [dbSetup(setup), dbTalk(...lines)], asks: [dbResultAsk(right, then)], deciding, reason: `${cue} ${REASON[right]}` });
  // a story you plan to tell, line by line; `falseId` is the one line the facts do not support (none: every line is true)
  const T = (id, facts, lines, falseId, cue) => ({ id, strand: S, facets: { telling: falseId ? 'invented' : 'true' },
    blocks: [dbSetup(facts), dbDraft(falseId, ...lines)], asks: [dbTrueAsk(falseId)], deciding: falseId ? [falseId] : [], reason: `${cue} ${REASON[falseId ? 'invented' : 'true']}` });
  FC.items('debating', [
    // ----- the worked talk: the hook of the lesson -----
    { id: 'w5-pam', strand: S, facets: { result: 'hearing' },
      blocks: [dbSetup('The town wants to open a shelter on your street, and your neighbor Pam is against it. You tell her what happened to your brother, which is true.'), dbTalk(
        ['s1', 'You: "My brother Lee lost his job in January and slept in his car for three weeks. I never want another family to be there with no door to knock on."'],
        ['s2', 'Pam: "I am sorry that happened to Lee. I mean it. I still don\'t want a shelter on our street."'])],
      asks: [dbResultAsk('hearing')],
      steps: [
        { id: 'move', does: 'Look for a shift in their view.', working: 'Pam says "I still don\'t want a shelter on our street." Nothing in her view has moved.', ask: 'result' },
        { id: 'hear', does: 'Look for a sign they took in the story itself.', working: 'She says she is sorry about Lee and means it. She heard the story.' },
        { id: 'count', does: 'Count what you got.', working: 'A hearing. It is not a changed mind, and you cannot tell from this talk whether it will matter later.' }],
      deciding: ['s2'],
      reason: `Pam says she is sorry and means it, and then says she still does not want the shelter. ${REASON.hearing}` },

    // ----- group 1: the three results -----
    R('a5-move', 'move', 'Your neighbor Anil thinks the town should not take in refugee families. You tell him about your grandmother, which is true.', [
      ['s1', 'You: "She arrived in 1951 with two suitcases. A church family gave her a room for the winter, and she never forgot it."'],
      ['s2', 'Anil: "A church family and a room for a winter. Put a pilot of ten families on the agenda and I will vote yes, though I am still wary."']], ['s2'],
      'Anil stays wary, but he now says what he would sign on to.'),
    R('a5-neither', 'neither', 'Your aunt Gwen is for the death penalty. You tell her what happened to your cousin Dana, which is true.', [
      ['s1', 'You: "Dana spent eleven years in prison for something she did not do, before DNA cleared her."'],
      ['s2', 'Gwen: "Ha, well! Did you ever call the plumber about that sink?"']], ['s2'],
      'Gwen is cheerful and answers nothing about Dana.',
      { hearing: 'Gwen says nothing about Dana or her eleven years. Being cheerful is not the same as taking the story in.' }),
    R('a5-hearing', 'hearing', 'Your coworker Dee is against letting doctors help patients die. You tell her about your father, which is true.', [
      ['s1', 'You: "He spent his last four months in pain that no medicine could touch."'],
      ['s2', 'Dee: "I would have hated to watch that, and I am sorry you did. But I cannot back a law that lets doctors do it."']], ['s2'],
      'Dee says she is sorry you watched it, and says she cannot back the law.',
      { neither: 'Dee answers the story. She says she is sorry you watched your father go through it.' }),

    // ----- group 2: the results, and your own story line by line -----
    R('b5-hearing', 'hearing', 'Your friend Marcus is against ending cash bail. You tell him about your brother, which is true.', [
      ['s1', 'You: "He sat in jail for eleven days over a fine he could not pay, and lost his job."'],
      ['s2', 'Marcus: "Eleven days, and the job gone. I can see why that stays with you. I read bail differently, and I will not pretend otherwise."']], ['s2'],
      'Marcus takes the story in and says he reads bail differently.'),
    R('b5-move', 'move', 'Your mother-in-law Ellen backs the rule that keeps people without papers out of the free clinic. You tell her about a woman you worked with, which is true.', [
      ['s1', 'You: "She waited until her appendix burst because she was afraid to go in."'],
      ['s2', 'Ellen: "Fine, drop the rule for emergencies. The rest I would keep."']], ['s2'],
      'Ellen says she would drop the rule for emergencies.'),
    R('b5-neither', 'neither', 'Your neighbor Hal thinks aid should end after two years. You tell him about someone on your street, which is true.', [
      ['s1', 'You: "She lost her housing aid two weeks before she found work, and slept at her sister\'s for a month."'],
      ['s2', 'Hal: "The real issue is the budget. We spend more on aid than the county takes in."']], ['s2'],
      'Hal argues the budget and does not mention the woman on your street.'),
    T('b5-t1', 'What happened: last March your sister Mara\'s landlord raised her rent from $1,100 to $1,400. He gave her 60 days\' notice, and she moved out of the neighborhood in May. You helped her pack. You plan to tell it to a neighbor who is against rent limits.', [
      ['s1', 'My sister\'s rent went up $300 last March.'],
      ['s2', 'She moved out of the neighborhood in May.'],
      ['s3', 'I helped her pack.'],
      ['s4', 'Her landlord gave her one day\'s notice.']], 's4',
      'The facts say the landlord gave 60 days\' notice, not one day.'),
    T('b5-t2', 'What happened: your father worked at the plant for 31 years. It closed in 2019, and he was given two weeks\' notice. You were in college and came home the weekend he told the family. You plan to tell it to a coworker who is against a notice law.', [
      ['s1', 'My father worked at the plant for 31 years.'],
      ['s2', 'It closed in 2019.'],
      ['s3', 'He got two weeks\' notice.'],
      ['s4', 'I came home from college the weekend he told us.']], null,
      'Each line matches the facts: 31 years, 2019, two weeks, the weekend home.'),
    T('b5-t3', 'What happened: your friend Jo told you that her son was bullied at the bus stop. You were not there and did not see it. Jo went to the school the next day. You plan to tell it to a neighbor who is against a new school rule.', [
      ['s1', 'Jo\'s son was bullied at the bus stop.'],
      ['s2', 'Jo told me about it.'],
      ['s3', 'I watched it happen from my window.'],
      ['s4', 'She went to the school the next day.']], 's3',
      'The facts say you were not there and did not see it.')
  ]);
  // the check: eight new talks and stories, none shown in the practice
  FC.items('debating', [
    R('c5-neither', 'neither', 'Your sister-in-law Joan is against the town\'s plan to stop ticketing people who sleep in their cars. You tell her about a friend, which is true.', [
      ['s1', 'You: "Nia slept in her car for a month after a layoff and got a $300 ticket for it."'],
      ['s2', 'Joan: "Okay. So are we splitting the check or what?"']], ['s2'],
      'Joan says "Okay" and moves to the check.'),
    R('c5-move', 'move', 'Your neighbor Pat thinks the county hospital should bill everyone, children included, and treat only people who pay. You tell her about your son, which is true.', [
      ['s1', 'You: "When he was six we had no insurance for a year, and a broken arm waited three days."'],
      ['s2', 'Pat: "Three days with a broken arm is too long. Children get seen first, bill or no bill. Adults, I stand by what I said."']], ['s2'],
      'Pat now says children get seen first, which she did not say before.'),
    R('c5-hearing', 'hearing', 'Your coworker Lena is against driver\'s licenses for people without papers. You tell her about Luis, which is true.', [
      ['s1', 'You: "He drove six years without a license because he could not get one. One stop, and his car was impounded and he lost his job."'],
      ['s2', 'Lena: "That is a heavy thing to carry around. It does not move me on the licenses, but I am glad I heard it."']], ['s2'],
      'Lena calls it heavy and says it does not move her.'),
    R('c5-hearing2', 'hearing', 'Your friend Mia thinks teenagers who commit serious crimes should be tried as adults. You tell her about your nephew, which is true.', [
      ['s1', 'You: "He was sixteen. He was tried as an adult after a fight, and he is in an adult prison now."'],
      ['s2', 'Mia: "God, I can\'t imagine being you. Some of them have done things that need a hard answer, though. I am holding my position."']], ['s2'],
      'Mia says she cannot imagine being you and holds her position.'),
    T('c5-t1', 'What happened: your mother cleaned offices at the hospital for 22 years. In 2018 she was let go with two weeks\' notice, and the work went to a contractor. After five months she found part-time work at a school. You plan to tell it to a coworker who is against a notice law.', [
      ['s1', 'My mother cleaned offices at the hospital for 22 years.'],
      ['s2', 'In 2018 she was let go with two weeks\' notice.'],
      ['s3', 'The work went to a contractor.'],
      ['s4', 'After that she never worked again.']], 's4',
      'The facts say she found part-time work at a school after five months.'),
    T('c5-t2', 'What happened: in May your friend Dev\'s apartment building lost heat for nine days. He has two small kids. You took the kids in for three nights, and the landlord fixed the boiler on day nine. You plan to tell it to a neighbor who is against a heating rule.', [
      ['s1', 'In May my friend Dev\'s building lost heat for nine days.'],
      ['s2', 'He has two small kids.'],
      ['s3', 'I took the kids in for three nights.'],
      ['s4', 'The landlord fixed the boiler on day nine.']], null,
      'Each line matches the facts: nine days, two kids, three nights, day nine.'),
    T('c5-t3', 'What happened: in 2022 your son broke his wrist. The nearest clinic had closed, so you drove 50 minutes to the ER, where he waited three hours. It healed in eight weeks. You plan to tell it to a neighbor who is against the clinic merger.', [
      ['s1', 'My son broke his wrist in 2022.'],
      ['s2', 'We drove two hours to the ER because the clinic had closed.'],
      ['s3', 'He waited three hours there.'],
      ['s4', 'It healed in eight weeks.']], 's2',
      'The facts say the drive was 50 minutes.'),
    T('c5-t4', 'What happened: your cousin Ben was laid off in March, and you were not. You sat up with him that night. He started a new job in July. You plan to tell it to a coworker who is against a notice law.', [
      ['s1', 'My cousin Ben was laid off in March.'],
      ['s2', 'I sat up with him that night.'],
      ['s3', 'I was out of work for four months too.'],
      ['s4', 'He started a new job in July.']], 's3',
      'The facts say you were not laid off.')
  ]);
  // items the lesson does not name: they wait for the review
  FC.items('debating', [
    R('r5-move', 'move', 'Your friend Omar is against a halfway house on his block. You tell him about your brother, which is true.', [
      ['s1', 'You: "He lived in one after prison, and the house is where he found his first job."'],
      ['s2', 'Omar: "I had always pictured the opposite. I would agree to one with a review after a year."']], ['s2'],
      'Omar says what he would agree to.'),
    R('r5-neither', 'neither', 'Your cousin Fay is for harsher drug sentences. You tell her what happened to your nephew, which is true.', [
      ['s1', 'You: "He got eight years for a first offense and came out unable to find work."'],
      ['s2', 'Fay: "Mm. Did you get the casserole dish back from Ruth?"']], ['s2'],
      'Fay answers nothing about your nephew and turns to a dish.'),
    T('r5-t', 'What happened: you fell on the ice in January outside the library and broke your ankle. The steps had not been salted for a week. You were off work for six weeks. You plan to tell it to a neighbor who is against a salting rule.', [
      ['s1', 'The city never salted those steps all winter.'],
      ['s2', 'I fell on the ice in January.'],
      ['s3', 'I broke my ankle.'],
      ['s4', 'I was off work for six weeks.']], 's1',
      'The facts say the steps had gone a week unsalted, not a whole winter.')
  ]);
})();

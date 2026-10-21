// Debating, lesson 10: mixed live exchanges, the worked exchange and the practice. Every question is a fresh exchange in the real form (a talk, a text thread, a post) and one decision
// from lessons 1 to 9, asked in that lesson's own words: the kind of talk and where it changes, what a disagreement is about, whether to keep going, change the subject or leave,
// what a reply is about, what a true story got you, what a view rests on, which experience to tell, which reply works against you, and whether a note keeps to its own test. They come
// in a mixed order with nothing marked, and no two in a row in the practice ask the same thing (docs/learning-science.md, P22: practise confusable decisions mixed; the evidence for verbal
// categories is limited, so the mixing is a judgment call and the lesson says so). Each decision keeps the strength it had in its own lesson: readings of a talk are graded, the
// keep, change or leave rule is the lesson's own and said so, and the line you write is never scored (nothing tests wording). Every exchange holds its own deciding words, and the
// people and their lines are invented. No exchange here is one of lessons 1 to 9. Items a lesson does not name wait for the review.
(() => {
  const X = dbMixed;
  FC.items('debating', [
    // ----- the worked exchange: the order of the questions, on a thread -----
    X('w10-garden', { means: 'argument' }, [dbSetup('You and your neighbor Inez are texting about the $20 yearly fee for the community garden. You think the fee is fair.'), dbThread('Inez (a neighbor)', 'Tuesday',
      ['s1', 'I don\'t see why we all pay $20 a year for the garden. Most plots sit empty by August.'],
      ['s2', 'The fee pays for the water. The county bills us by the month for the whole season.', true],
      ['s3', 'The county bills by the month? Where did you get that? I have never seen a bill.'])],
    [dbMeansAsk('argument')], ['s3'],
    `Inez wants to know where you got the monthly billing and says she has never seen a bill. ${DB_MIX.argument}`,
    [
      { id: 'kind', does: 'Name the kind of talk.', working: 'Inez holds a claim, that the fee is not fair, and you hold the opposite. Each gives reasons. You are persuading.' },
      { id: 'answering', does: 'Check whether she is still answering you.', working: 'Her last line answers your point with a question about where you got it. She is not digging at you, threatening you or blocking you, so keep going.' },
      { id: 'reply', does: 'Read what her last line is about.', working: 'It is about your claim that the county bills by the month. She wants to know where it comes from. She says nothing about you or how she feels.', ask: 'means' },
      { id: 'next', does: 'Answer that one.', working: 'Show where it comes from, such as: "It is on the county water page. I will send you the link."' }]),

    // ----- group 1: three exchanges, with the deciding words marked before you answer -----
    X('a10-pool', { disagreement: 'fact' }, [dbSetup('Your neighbor Jules says the community pool has cut its Saturday hours. You looked up the hours before you came over.'), dbTalk(
      ['s1', 'Jules: "The pool closes at 5 on Saturdays now. They cut it last month."'],
      ['s2', 'You: "The county page says 6, and it was updated in March."'],
      ['s3', 'Jules: "I was at the door at 5:15 last Saturday and it was locked. Your page is wrong."'])],
    [dbReadAsk('fact'), dbWriteAsk('The county page says 6. Can we call the pool together and find out when it locks the door on Saturdays?')], ['s3'],
    `Jules and you disagree about what time the pool closes, which a phone call could settle. ${DB_MIX.fact}`),
    X('a10-cleaners', { move: 'continue' }, [dbSetup('You and your roommate Colm are texting about whether to keep the cleaning service, which costs $60 a month. You want to keep it.'), dbThread('Colm (your roommate)', 'Thursday',
      ['s1', 'Cancel it. We used it twice this month and it comes to $30 a visit.'],
      ['s2', 'We used it four times in May because your cousin visited. What does a normal month look like?', true],
      ['s3', 'You want me to do math at ten at night? Fine. Send me the receipts and I\'ll add them up.'])],
    [dbMoveAsk('continue', { change: 'Colm is irritated, but he answers your question and wants the receipts.', leave: 'Colm is irritated, not threatening or blocking you.' }), dbCueAsk('s3')], ['s3'],
    `Colm is irritated, and he still answers your question and wants the receipts. ${DB_MIX.continue}`),
    X('a10-ban', { result: 'neither' }, [dbSetup('Your coworker Quinn is against a law that stops employers from asking about old criminal records on job applications. You tell him about your brother, which is true.'), dbTalk(
      ['s1', 'You: "He served two years at nineteen. For eight years after, every application ended at that box. He is a welder now, and only because one boss never asked."'],
      ['s2', 'Quinn: "Hm. Anyway, the law adds paperwork for every small business. Have you read what the fines are?"'])],
    [dbResultAsk('neither', { hearing: 'Quinn says nothing about your brother. He moves straight to the paperwork.', move: 'Nothing in Quinn\'s view shifts. He argues the law\'s cost.' }),
      dbWriteAsk('Fair question about the fines, and I will look them up. I told you about my brother because it is why I care about this.')], ['s2'],
    `Quinn says nothing about your brother and goes to the paperwork and the fines. ${DB_MIX.neither}`),

    // ----- group 2: five more, in a mixed order, with nothing marked -----
    X('b10-swim', { dialogue: 'inquire' }, [dbSetup('You and Dov run a youth swim league. Sign-ups fell from 80 to 52 this fall, and you are texting about it.'), dbThread('Dov (co-leader of the league)', 'Monday',
      ['s1', 'Why did sign-ups drop? I have no idea.'],
      ['s2', 'Could be the new fee. Could be the field move. I can\'t tell.', true],
      ['s3', 'Let\'s text last year\'s families and ask. Two questions, that is all.'],
      ['s4', 'Good. I\'ll pull the list of who didn\'t re-enroll.', true])],
    [dbKindAsk('inquire', 'by-topic', { persuade: 'Neither of you holds a claim the other doubts. You both say you do not know.', decide: 'You are not choosing between options. You want to find out why sign-ups fell.' })], ['s1', 's3'],
    'Neither of you knows why sign-ups fell, both want the answer, and you agree how to get it: text the families. A question nobody in the talk can answer yet, which all want answered, is finding out together. The six kinds are Walton and Krabbe\'s; the cues are ours.'),
    X('b10-bags', { rest: 'result' }, [dbSetup('Your neighbor Pilar is against the town\'s 10-cent plastic bag fee. You are for it.'), dbTalk(
      ['s1', 'You: "Other towns that did it cut bag use by more than half."'],
      ['s2', 'Pilar: "People will just buy the thick bags, and the small shops will lose customers to the next town. Then we\'ve charged everyone and fixed nothing."'])],
    [dbRestAsk('result', { line: 'Pilar does not grant a result and keep the view. She says what she thinks would happen.', figure: 'Pilar does not dispute a figure or a date. She says what she thinks would happen.' }),
      dbWriteAsk('So you think shoppers will switch to thick bags and the small shops will lose business to the next town. Have I got that right?')], ['s2'],
    `Pilar says what she thinks would happen, and nothing she says is a result she would hold her view against. ${DB_MIX.result}`),
    X('b10-compost', { problem: 'start' }, [dbSetup('You are for the city starting a curbside composting pickup. Your neighbor Zara is against it, and she has just answered your first message.'), dbTalk(
      ['s1', 'Zara: "The city\'s composting trial report was written by the company that sells the bins, so I don\'t trust a word of it."'])],
    [dbBadAsk([
      ['The trial report found homes with the bins cut their trash by a third, so the city should start it.', true],
      ['Fair enough about the bin company. Lakeview ran its own trial for a year, and its trash pickups got lighter.'],
      ['Then let\'s leave the report out. What does your trash look like in a normal week, and how much of it is food?']])], ['s1'],
    `The reply that leans on the trial report builds on the very report Zara has just said she does not trust; the others begin elsewhere. ${DB_MIX.badstart}`),
    X('b10-survey', { standard: 'broken' }, [dbSetup('You are for the town lottery that would fund the senior center. Survey A (most people like the lottery) asked 150 residents. Survey B (most people dislike it) asked 210 residents. You wrote this note to a friend.'), dbEvenNote('s2',
      ['s1', 'My rule: I only count a survey that asked at least 200 residents.'],
      ['s2', 'Survey A (most people like it) asked 150 residents, which is close enough to 200, so I am counting it.'],
      ['s3', 'Survey B (most people dislike it) asked 210 residents, so I am counting it too.'],
      ['s4', 'So the surveys I count say opinion is split.'])],
    [dbEvenAsk('s2')], ['s2'],
    `Survey A asked 150 residents, under the note\'s own 200, and the line counts it as close enough. ${DB_MIX.broken}`),
    X('b10-vote', { experience: 'issue' }, [dbSetup('Your neighbor Arlo is against letting 16-year-olds vote in school board elections. You are for it. You could tell any one of these three true things.'), dbTalk(
      ['s1', 'Arlo: "Why do you care so much about this?"'])],
    [dbShareAsk([
      ['The spring you were sixteen and the school board cut your music program without asking one student.', true],
      ['The spring you were sixteen and the school board asked the student council what to do about the lunch menu.', 'chose-no-harm'],
      ['The spring your phone fell in a lake at the park and you lost two years of photos.', 'chose-unrelated']])], [],
    `The cut to your music program is about students having no say and has harm in it; being asked about the lunch menu is about a say with no harm; the phone is not about school boards. ${DB_MIX.issue}`)
  ]);
})();

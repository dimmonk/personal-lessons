// Statistical Claims, Unit Six: drill cases for stages one and two (naming, and one question at a time). None of these appears in a card.
// Field guide: see u1.cases-drill-1.js. A case of "Nothing goes wrong" (taught by Unit Two) is in every stage, so a learner is never taught that
// every claim of cause has something else that could explain it. In this unit's naming stage the key's answers are shown, for such a case, from
// the gate (Nothing goes wrong) and from the question of its own branch (One thing causing another).

FC.cases('stats', 'u6', [

  /* ---------- Stage one: the key's answers are shown, the learner gives the name ---------- */
  { id: 'k-n-flyers', use: 'drill', tier: 'clean', setting: 'community', topic: 'litter flyers on every lamp post',
    text: "A town hall puts flyers on every lamp post asking people not to drop litter. In the month after, the town’s litter reports fall from 120 to 85. 'The flyers worked,' the mayor says. The town has no litter figures from any other town.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'The flyers worked', K1: 'The town has no litter figures from any other town' },
    reason: { S1: 'The people and things counted are fine, the figures are given, and the mayor says {cue:S1}. That is a claim of cause.',
              K1: 'The only figures are for the one town that got the flyers, before and after: {cue:K1}. Litter reports rise and fall with the weather and the season, so nothing shows what the town would have reported with no flyers.' },
    not: { outcome: 'regression', why: 'Nobody picked the town because its litter was at its worst, and every lamp post got a flyer. The only thing missing is a town or a month that went without, which is why this is {o:nocontrol}.' } },

  { id: 'k-n-ward', use: 'drill', tier: 'clean', setting: 'health', topic: 'a safety course for the wards with the most falls', also: ['anyway'],
    text: "A hospital picks the three wards with the highest numbers of patient falls last quarter and sends their nurses to a safety course. Last quarter those three wards had 40 falls in all. This quarter they have 30. 'The course cut falls by a quarter,' the hospital says.",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'The course cut falls by a quarter', K1: 'picks the three wards with the highest numbers of patient falls last quarter' },
    reason: { S1: 'The numbers are given, and the hospital says {cue:S1}. That is a claim of cause.',
              K1: 'The wards were picked because they had the most falls, and the hospital {cue:K1}. A count of falls mixes how risky a ward is with luck, and the worst quarter’s luck does not come back. Some of the fall from 40 to 30 would be expected with no course at all.' },
    not: { outcome: 'nocontrol', why: 'It is true that no ward went without the course, and the case shows that too. But the three wards were picked because they were at their worst, and when a case shows both, the key’s answer is {a:K1.extreme}.' } },

  { id: 'k-n-fair1', use: 'drill', tier: 'clean', setting: 'home', topic: 'a tomato fertilizer tried on drawn plots',
    text: "A seed company planted 80 tomato plots in one field and drew 40 plots from a hat to get its new fertilizer, with nothing added to the other 40. At harvest it weighed every plot in the same way: 31 pounds on average for the fertilized plots and 25 for the others. 'Our fertilizer raises the harvest,' the company says.",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: 'drew 40 plots from a hat to get its new fertilizer', H1: 'Our fertilizer raises the harvest' , K1: 'drew 40 plots from a hat to get its new fertilizer'},
    reason: { S1: 'Take the parts in order. Every plot is counted and weighed in the same way, and the numbers are given. A second group went without, and a draw decided who was in which: the company {cue:S1}. Nothing is wrong in any part.',
              H1: 'The company says {cue:H1}, and the key’s answer to what the figures show is {a:H1.causes}, from groups formed by a draw.',
              K1: 'The key asks {q:K1} Here {cue:K1}, so nothing else is likelier to be in one group than the other, and none of the four answers fits. This claim is one in which nothing is wrong, and its answer comes from the first question, {a:S1.holds}.' },
    not: { outcome: 'nocontrol', why: 'There is a second group here, 40 plots with nothing added, counted in the same way. {o:nocontrol} needs the lack of exactly that.' } },

  { id: 'k-n-mentor', use: 'drill', tier: 'clean', setting: 'work', topic: 'a voluntary mentoring program and promotions',
    text: "A company says: 'Employees who joined our voluntary mentoring program were promoted twice as often within two years, so mentoring leads to promotion.' Of 240 employees, 24 of the 60 who chose to join were promoted (40 in 100), and 36 of the 180 who did not join were promoted (20 in 100). HR records show that 50 of the 60 who joined had top performance ratings, against 40 of the 180 who did not.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'so mentoring leads to promotion', K1: 'HR records show that 50 of the 60 who joined had top performance ratings, against 40 of the 180 who did not' },
    reason: { S1: 'The numbers are given for both groups, and the company says {cue:S1}. That is a claim of cause.',
              K1: 'The employees chose whether to join, and {cue:K1}. Top performers are likelier to be promoted whether or not they have a mentor, and they may also be the ones who put their names down. The difference between the groups is real, and something else that differs between them could bring it about alone.' },
    not: { outcome: 'cause_ok', why: 'The groups here were not formed by a draw. People chose whether to join, which leaves room for the difference in ratings. {o:confound} is the answer, and not a claim that holds.' } },

  { id: 'k-n-rv', use: 'drill', tier: 'clean', setting: 'health', topic: 'visits to the doctor and self-rated health',
    text: "A county report finds that the more often adults visit a doctor, the worse their health: adults with ten or more visits a year rate their health 5.2 out of 10, and adults with two or fewer rate it 8.1. A radio host says: 'Going to the doctor makes you unwell.' The report notes that most of the frequent visitors began going after a diagnosis.",
    outcome: 'reverse', route: { S1: ['cause'], K1: ['backward'] },
    cues: { S1: 'Going to the doctor makes you unwell', K1: 'most of the frequent visitors began going after a diagnosis' },
    reason: { S1: 'The numbers are given for both groups, and the host says {cue:S1}. That is a claim of cause.',
              K1: 'The host says that visits cause poor health. But {cue:K1}, so the poor health, or the diagnosis, came first and led to the visits.' },
    not: { outcome: 'confound', why: 'Nothing else is needed to explain the figures. The second thing, poor health, came first and led to the first, going to the doctor. That is {o:reverse}.' } },

  { id: 'k-n-fair2', use: 'drill', tier: 'clean', setting: 'money', topic: 'a savings reminder text sent to a drawn half of customers',
    text: "A bank sent a savings-reminder text to 2,000 of its 4,000 account holders, chosen by lottery, and sent nothing to the other 2,000. After six months it counted new deposits for all 4,000 in the same way: the 2,000 reminded customers averaged $640 and the 2,000 others averaged $410. 'The reminder raises savings,' the bank says.",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: 'chosen by lottery', H1: 'The reminder raises savings' , K1: 'chosen by lottery'},
    reason: { S1: 'Take the parts in order. All 4,000 account holders are counted in the same way, and the numbers are given. A second group went without, and the first group was {cue:S1}. Nothing is wrong in any part.',
              H1: 'The bank says {cue:H1}, and the key’s answer to what the figures show is {a:H1.causes}, from groups formed by a draw.',
              K1: 'The key asks {q:K1} Here {cue:K1}, so nothing else is likelier to be in one group than the other, and none of the four answers fits. This claim is one in which nothing is wrong, and its answer comes from the first question, {a:S1.holds}.' },
    not: { outcome: 'confound', why: 'The customers did not choose whether to get the text. A lottery did, so nothing else is likelier to be in one group than the other, and {o:confound} has nothing to point to.' } },

  /* ---------- Stage two: the key's question alone, on a new case ---------- */
  { id: 'k-p-yoga', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a studio’s six-week stress course',
    text: "A yoga studio says: 'Our six-week stress course works. All 45 students who took it filled in our survey, and 36 say they feel less stressed than before.' The studio did not survey anyone who did not take the course.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'Our six-week stress course works', K1: 'The studio did not survey anyone who did not take the course' },
    reason: { S1: 'All 45 students answered and the numbers are given, and the studio says {cue:S1}. That is a claim of cause.',
              K1: 'The only figures are for the students who took the course, before and after: {cue:K1}. People often feel less stressed after six weeks for reasons that have nothing to do with a course, so nothing shows what would have happened anyway.' },
    not: { outcome: 'regression', why: 'The studio did not pick the students because they were at their worst. Anyone who took the course is counted.' } },

  { id: 'k-p-stores', use: 'drill', tier: 'clean', setting: 'work', topic: 'new managers for the stores with the lowest ratings', also: ['anyway'],
    text: "A store chain picks its five stores with the lowest customer ratings in March and replaces the managers. In June those five stores’ ratings average 3.9 out of 5, up from 3.1. 'New managers fix stores,' the head office says.",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'New managers fix stores', K1: 'picks its five stores with the lowest customer ratings in March' },
    reason: { S1: 'The ratings are given, and the head office says {cue:S1}. That is a claim of cause.',
              K1: 'The five stores were picked because they had the lowest ratings: the chain {cue:K1}. A store’s rating mixes how well it is run with how a few months went, so the lowest five are partly the unlucky five, and their ratings drift back toward usual with no new manager.' },
    not: { outcome: 'nocontrol', why: 'No store kept its manager for comparison, and the case shows that too. But the five were picked at their worst, and when a case shows both, the key’s answer is {a:K1.extreme}.' } },

  { id: 'k-p-gardens', use: 'drill', tier: 'clean', setting: 'community', topic: 'community gardens and reported thefts',
    text: "A city council member says: 'Neighborhoods with a community garden had 18 reported thefts per 1,000 homes last year, against 26 in neighborhoods without one. Gardens cut crime.' Residents chose to start the gardens, and nearly all of them are in neighborhoods where the median income is above $80,000.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'Gardens cut crime', K1: 'nearly all of them are in neighborhoods where the median income is above $80,000' },
    reason: { S1: 'The numbers are given for both kinds of neighborhood, and the council member says {cue:S1}. That is a claim of cause.',
              K1: 'Residents chose to start the gardens, and {cue:K1}. Better-off neighborhoods can have fewer thefts with or without a garden, so something else differs between the two kinds of neighborhood and could bring about the result alone.' },
    not: { outcome: 'reverse', why: 'Nothing in the case shows that low crime came first and led to the gardens. What it shows is something else that differs between the neighborhoods, which is {o:confound}.' } },

  { id: 'k-p-cafes', use: 'drill', tier: 'clean', setting: 'money', topic: 'cafés and foot traffic on city blocks',
    text: "A town survey finds that blocks with more people walking past have more cafés: blocks with over 2,000 walkers a day have 5 cafés on average, and blocks with fewer than 500 have 1. A newspaper says: 'Cafés bring walkers to a block.' The town’s business licenses show that most of the cafés opened after the walking traffic was already there.",
    outcome: 'reverse', route: { S1: ['cause'], K1: ['backward'] },
    cues: { S1: 'Cafés bring walkers to a block', K1: 'most of the cafés opened after the walking traffic was already there' },
    reason: { S1: 'The numbers are given, and the newspaper says {cue:S1}. That is a claim of cause.',
              K1: 'The newspaper says the cafés caused the walking. But {cue:K1}, so the walkers came first and led the cafés to open where they were.' },
    not: { outcome: 'confound', why: 'No third thing is needed to explain the figures. The walkers came first and led to the cafés, which is {o:reverse}.' } },

  { id: 'k-p-clinic', use: 'drill', tier: 'clean', setting: 'health', topic: 'a follow-up call after surgery, decided by a draw',
    text: "A clinic wanted to know whether a nurse’s follow-up call lowers return visits after surgery. Of 300 patients leaving in March, a spreadsheet’s lottery picked 150 to get the call, and the other 150 got none. Over the next 30 days the clinic counted return visits for all 300 in the same way: 21 of the 150 who got the call returned (14 in 100), and 36 of the 150 who did not (24 in 100). 'The follow-up call cuts return visits,' the clinic says.",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: 'a spreadsheet’s lottery picked 150 to get the call', H1: 'The follow-up call cuts return visits' },
    reason: { S1: 'All 300 patients are counted in the same way and the numbers are given. A second group went without, and {cue:S1}, so nothing else is likelier to be in one group than the other. Nothing is wrong in any part.',
              H1: 'The clinic says {cue:H1}, and the key’s answer to what the figures show is {a:H1.causes}, from groups formed by a draw.' },
    not: { outcome: 'nocontrol', why: 'There is a second group of 150 patients who got no call and were counted in the same way. {o:nocontrol} needs the lack of exactly that.' } }
]);

/* ===================== SUBJECT: STATISTICAL CLAIMS ===================== */

// The one vocabulary. Every card heading, drill option, readout line and verdict uses these names exactly.
const STATS_OUTCOMES = [
  {id:'survivor',   n:'Counting only the survivors (survivorship bias)',          group:'sampling'},
  {id:'selfselect', n:'A sample that picked itself (self-selection)',              group:'sampling'},
  {id:'nonresp',    n:'Many people did not reply (non-response bias)',             group:'sampling'},
  {id:'smalln',     n:'Too few cases to trust (small-number volatility)',          group:'sampling'},
  {id:'samp_ok',    n:'A fair count',                                              group:'sampling'},
  {id:'proxy',      n:'Hitting the target, missing the point (Goodhart’s law)',    group:'measure'},
  {id:'defshift',   n:'The counting rule or tool changed',                         group:'measure'},
  {id:'detection',  n:'More looking, not more happening (detection effect)',       group:'measure'},
  {id:'meas_ok',    n:'A trustworthy measure',                                     group:'measure'},
  {id:'baserate',   n:'Ignoring how common it is (base-rate neglect)',             group:'compare'},
  {id:'relrisk',    n:'A percentage without the numbers (relative risk)',          group:'compare'},
  {id:'nocontrol',  n:'No comparison group',                                       group:'compare'},
  {id:'simpson',    n:'Totals that hide the groups (Simpson’s paradox)',           group:'compare'},
  {id:'comp_ok',    n:'A fair comparison',                                         group:'compare'},
  {id:'confound',   n:'A third thing behind both (confounding)',                   group:'cause'},
  {id:'reverse',    n:'The cause runs the other way (reverse causation)',          group:'cause'},
  {id:'regression', n:'Picked at an extreme, then drifted back (regression to the mean)', group:'cause'},
  {id:'cause_ok',   n:'A cause that holds up',                                     group:'cause'}
];

// Drill answers and options are read from the key, so a name can never be typed two ways.
const STATS_NAME = Object.fromEntries(STATS_OUTCOMES.map(o => [o.id, o.n]));

const STATS_GATE = { code:'S1', label:'Which part of the claim goes wrong first? (If none does, which part does it rest on?)', options:[
  { id:'sampling', n:'Who was counted',          sub:'who or what is in the data, and whether there is enough of it',
    keeps:['survivor','selfselect','nonresp','smalln','samp_ok'] },
  { id:'measure',  n:'What the number counts',   sub:'whether the number measures the real thing',
    keeps:['proxy','defshift','detection','meas_ok'] },
  { id:'compare',  n:'What it is compared with', sub:'what the number is set beside to give it meaning',
    keeps:['baserate','relrisk','nocontrol','simpson','comp_ok'] },
  { id:'cause',    n:'What it says caused what', sub:'the step from “these go together” to “this made that happen”',
    keeps:['confound','reverse','regression','cause_ok'] }
]};

// The four parts of a claim, by gate id. The first drill offers exactly these four.
const STATS_PART = Object.fromEntries(STATS_GATE.options.map(o => [o.id, o.n]));

const STATS_STEPS_BY_GATE = {
  sampling: [
    { code:'A1', label:'How did these people or cases get into the data?', options:[
        {id:'endpoint', n:'Only the ones that lasted were kept',                 keeps:['survivor']},
        {id:'optedin',  n:'They chose to take part',                             keeps:['selfselect']},
        {id:'answered', n:'Only the ones who replied were counted',              keeps:['nonresp']},
        {id:'frame',    n:'Nobody was filtered out: everyone had an equal chance of being counted', keeps:['smalln','samp_ok']}
    ]},
    { code:'A2', label:'Who is missing, and would adding them change the answer?', options:[
        {id:'failures',  n:'The ones that dropped out are missing, and they would pull the answer the other way', keeps:['survivor']},
        {id:'motivated', n:'The ones who stayed out are missing, and they feel differently from the ones who joined', keeps:['selfselect']},
        {id:'silent',    n:'The ones who did not reply are missing, and they feel differently from the ones who did', keeps:['nonresp']},
        {id:'unstable',  n:'Nobody is missing, but the group is so small that one or two cases swing the result', keeps:['smalln']},
        {id:'nothing_a', n:'Nobody important is missing, and the group is big enough to trust', keeps:['samp_ok']}
    ]}
  ],
  measure: [
    { code:'M1', label:'What is this number really a count of?', options:[
        {id:'standin', n:'A stand-in for the thing people care about',           keeps:['proxy']},
        {id:'newrule', n:'The same word, counted under a new rule or with a new tool',              keeps:['defshift']},
        {id:'found',   n:'Cases found, which depends on how hard anyone looked', keeps:['detection']},
        {id:'thing',   n:'The thing itself, counted the same way throughout',    keeps:['meas_ok']}
    ]},
    { code:'M2', label:'If the real situation had not changed at all, could this number still have changed?', options:[
        {id:'yes_game',   n:'Yes: people working on the number itself would do it',                 keeps:['proxy']},
        {id:'yes_rule',   n:'Yes: a change in the counting rule or the measuring tool would do it', keeps:['defshift']},
        {id:'yes_effort', n:'Yes: looking harder would do it',                                      keeps:['detection']},
        {id:'no_m',       n:'No: this number only moves when the real thing moves',                 keeps:['meas_ok']}
    ]}
  ],
  compare: [
    { code:'C1', label:'What is the number compared with?', options:[
        {id:'nothing_c',  n:'Nothing: a single figure with nothing beside it',                        keeps:['nocontrol']},
        {id:'changeonly', n:'A change shown only as a percentage, with no actual numbers',            keeps:['relrisk']},
        {id:'norate',     n:'An accuracy or hit rate, with no word on how common the thing is to begin with', keeps:['baserate']},
        {id:'lumped',     n:'Totals that mix different groups together',                              keeps:['simpson']},
        {id:'likewise',   n:'A group of the same kind, measured the same way',                        keeps:['comp_ok']}
    ]},
    { code:'C2', label:'What would you need to see to read it properly?', options:[
        {id:'control',   n:'A group that did not get it',                    keeps:['nocontrol']},
        {id:'absolute',  n:'The actual numbers behind the percentage',       keeps:['relrisk']},
        {id:'prior',     n:'How common the thing is to begin with',          keeps:['baserate']},
        {id:'split',     n:'The totals split back into their groups',        keeps:['simpson']},
        {id:'nothing_x', n:'Nothing: the comparison is already fair',        keeps:['comp_ok']}
    ]}
  ],
  cause: [
    { code:'K1', label:'What else could produce this same pattern?', options:[
        {id:'third',     n:'Something else that drives both at once',                      keeps:['confound']},
        {id:'backwards', n:'It could run the other way: the result causes the thing',      keeps:['reverse']},
        {id:'extreme',   n:'The group was picked for being at an extreme, and drifted back', keeps:['regression']},
        {id:'none_k',    n:'Nothing plausible: the way it was set up rules the others out', keeps:['cause_ok']}
    ]},
    { code:'K2', label:'What would settle it?', options:[
        {id:'adjust',    n:'Comparing people who are alike on that other thing',           keeps:['confound']},
        {id:'timing',    n:'Checking which one came first',                                keeps:['reverse']},
        {id:'untreated', n:'Tracking an equally extreme group that was left alone',        keeps:['regression']},
        {id:'already',   n:'It is already settled: people were assigned by chance, so the other explanations are closed off', keeps:['cause_ok']}
    ]}
  ]
};

const V1_OPTS = [STATS_PART.sampling, STATS_PART.measure, STATS_PART.compare, STATS_PART.cause];
const V1_DRILL = [
  {q:`Every restaurant featured in the guidebook “Built to Last” has been open for more than twenty years, so you can copy what they do to run a restaurant that lasts.`,
   a:STATS_PART.sampling,
   w:`The question that decides it is “Which part of the claim goes wrong first?” and the answer is Who was counted. The giveaway is “has been open for more than twenty years”: only restaurants that lasted are in the guide, so every restaurant that did the same things and closed is missing.`},
  {q:`Since the call center began paying a bonus for the number of calls handled per hour, calls handled per hour is up 35%. Customer service has improved.`,
   a:STATS_PART.measure,
   w:`The question that decides it is “Which part of the claim goes wrong first?” and the answer is What the number counts. The giveaway is “began paying a bonus”: once agents are paid on calls per hour, they can raise it by rushing callers off the line, which is not better service.`},
  {q:`Our new safety course works: 90% of the staff who took it passed the safety exam.`,
   a:STATS_PART.compare,
   w:`The question that decides it is “Which part of the claim goes wrong first?” and the answer is What it is compared with. Everyone who took the course is counted, and passing an exam is clear enough, so the first two parts hold. The claim is one figure, 90%, and never says how many staff who skipped the course would also have passed.`},
  {q:`People who own a standing desk report fewer back problems, so standing desks cure bad backs.`,
   a:STATS_PART.cause,
   w:`The question that decides it is “Which part of the claim goes wrong first?” and the answer is What it says caused what. Desk owners are set beside non-owners, which is a fair enough comparison. The giveaway is “so”: the claim jumps from “these go together” to “this cured that”. People who look after their health may be the ones who buy desks and also the ones with fewer back problems.`},
  {q:`A radio station asked listeners to phone in about the new bypass. Eighty-three percent of callers were against it, so the town is against it.`,
   a:STATS_PART.sampling,
   w:`The question that decides it is “Which part of the claim goes wrong first?” and the answer is Who was counted. The giveaway is “callers”: only people who chose to phone are in the number, and people with strong feelings are the ones who phone.`},
  {q:`Unemployment fell by two points last month, the biggest drop in years. (At the start of the month the government stopped counting people on training courses as unemployed.)`,
   a:STATS_PART.measure,
   w:`The question that decides it is “Which part of the claim goes wrong first?” and the answer is What the number counts. The giveaway is the rule change in brackets: the word “unemployed” stayed the same but fewer people qualify for it, so the figure falls with no change in anyone’s job.`},
  {q:`Researchers report that eating a daily handful of walnuts lowers your risk of a rare kidney condition by 50%.`,
   a:STATS_PART.compare,
   w:`The question that decides it is “Which part of the claim goes wrong first?” and the answer is What it is compared with. The giveaway is “by 50%” and nothing else: it is only a percentage. If the risk was 2 in 100,000 and is now 1 in 100,000, that is a big percentage and a tiny real difference.`},
  {q:`The union sent a ballot to all 5,200 of its members about the pay offer. Ninety-one percent voted, and 64% of those voted to accept.`,
   a:STATS_PART.sampling,
   w:`Nothing goes wrong here, so the question that decides it is the second half of “Which part of the claim goes wrong first? (If none does, which part does it rest on?)” The claim is an estimate from a group of members, so it rests on Who was counted, and that part holds: every member was invited and 91% took part, so hardly anyone is missing.`},
  {q:`The hospital flipped a coin for each of 600 patients with the same type of bad knee. Heads got the new brace and tails got the usual bandage. A year later 12% of the brace group and 21% of the bandage group needed surgery. The hospital says the brace works.`,
   a:STATS_PART.cause,
   w:`Nothing goes wrong here, so the question that decides it is the second half of “Which part of the claim goes wrong first? (If none does, which part does it rest on?)” The claim is that the brace made the difference, so it rests on What it says caused what, and the coin flip holds it up: the two groups started out alike, so the brace is the only difference.`},
  {q:`Of the members who renewed this year, 80% say they love the new gym. The new gym is why people stay.`,
   a:STATS_PART.sampling,
   w:`The question that decides it is “Which part of the claim goes wrong first?” and the answer is Who was counted. The giveaway is “of the members who renewed”: everyone who left is missing, and they are the ones who may not love it. The claim also jumps to a cause (“is why people stay”), but that part comes later, so you name the earlier one.`},
  {q:`Sales of our online course are up 300% since the new ad, so the ad was a huge hit.`,
   a:STATS_PART.compare,
   w:`The question that decides it is “Which part of the claim goes wrong first?” and the answer is What it is compared with. The giveaway is “up 300%” with no actual numbers: it could be 1 sale rising to 4. The claim also jumps to a cause (“so the ad was a huge hit”), but the comparison part comes before the cause part, so you name the comparison.`}
];

const V2_OPTS = [STATS_NAME.survivor, STATS_NAME.selfselect, STATS_NAME.nonresp, STATS_NAME.smalln, STATS_NAME.samp_ok];
const V2_DRILL = [
  {q:`Our survey of customers who have been with us for ten years or more shows that 96% are happy with the service.`,
   a:STATS_NAME.survivor,
   w:`Two questions decide it. How did these people or cases get into the data? Only the ones that lasted were kept: “ten years or more” leaves out everyone who left. Who is missing, and would adding them change the answer? The ones that dropped out are missing, and they would pull the answer the other way: the customers who left are probably the unhappy ones.`},
  {q:`Every old building on this street is beautifully made, so they built things better in the old days.`,
   a:STATS_NAME.survivor,
   w:`Two questions decide it. How did these people or cases get into the data? Only the ones that lasted were kept: the badly made old buildings fell down long ago, so they are not on the street to be counted. Who is missing, and would adding them change the answer? The ones that dropped out are missing, and they would pull the answer the other way.`},
  {q:`Of the 1,500 viewers who voted on the TV show’s website about whether the referee should be fired, 91% said yes.`,
   a:STATS_NAME.selfselect,
   w:`Two questions decide it. How did these people or cases get into the data? They chose to take part: nobody picked these voters, they chose to click. Who is missing, and would adding them change the answer? The ones who stayed out are missing, and they feel differently from the ones who joined: the angry are likelier to vote than the viewers who shrugged.`},
  {q:`A magazine asked readers to mail in a form saying how often they exercise. Seventy percent said every day, so most adults exercise daily.`,
   a:STATS_NAME.selfselect,
   w:`Two questions decide it. How did these people or cases get into the data? They chose to take part: readers decided for themselves whether to mail the form, and people who exercise are likelier to bother with a form about exercise. Who is missing, and would adding them change the answer? The ones who stayed out are missing, and they feel differently from the ones who joined.`},
  {q:`The alumni office emailed all 10,000 graduates asking about their income. Nine hundred replied, and the average income is $78,000.`,
   a:STATS_NAME.nonresp,
   w:`Two questions decide it. How did these people or cases get into the data? Only the ones who replied were counted: every graduate was invited, but 9,100 stayed silent. Who is missing, and would adding them change the answer? The ones who did not reply are missing, and they feel differently from the ones who did: people doing well are likelier to answer a question about income, so the silent group probably earns less and would pull the average down.`},
  {q:`The clinic mailed a satisfaction form to every patient it saw last year. One in eight sent it back, and the forms are glowing.`,
   a:STATS_NAME.nonresp,
   w:`Two questions decide it. How did these people or cases get into the data? Only the ones who replied were counted: every patient was invited, but seven in eight stayed silent. Who is missing, and would adding them change the answer? The ones who did not reply are missing, and they feel differently from the ones who did: patients with a complaint, or no strong feeling, are less likely to post a form back.`},
  {q:`Of all the clinics in the state, the one with the best survival rate for a rare operation has done it eleven times. Book there.`,
   a:STATS_NAME.smalln,
   w:`Two questions decide it. How did these people or cases get into the data? Nobody was filtered out: everyone had an equal chance of being counted, because every operation the clinic did is counted. Who is missing, and would adding them change the answer? Nobody is missing, but the group is so small that one or two cases swing the result: eleven cases are so few that one or two lucky outcomes swing the rate. Check the bottom of the list: the worst clinic is probably tiny too.`},
  {q:`The new night shift of six people had no accidents in March, the best record in the plant. Night shifts are the safest.`,
   a:STATS_NAME.smalln,
   w:`Two questions decide it. How did these people or cases get into the data? Nobody was filtered out: everyone had an equal chance of being counted, because every night shift hour is counted. Who is missing, and would adding them change the answer? Nobody is missing, but the group is so small that one or two cases swing the result: six people for one month is so little that a single accident would have changed the whole record.`},
  {q:`A health agency invited 6,000 people drawn at random from a list of all residents for a blood pressure check. People who did not come got two reminder calls and a home visit, and 78% were checked. One in four of those checked had high blood pressure.`,
   a:STATS_NAME.samp_ok,
   w:`Two questions decide it. How did these people or cases get into the data? Nobody was filtered out: everyone had an equal chance of being counted, because people were drawn by chance from the full list of residents. Who is missing, and would adding them change the answer? Nobody important is missing, and the group is big enough to trust: the people who did not come were chased by phone and at home, 78% were checked, and 6,000 invited is plenty.`},
  {q:`The school district counted how many of its 21,000 students were absent on each school day of the year, using the same attendance records at every school. On average 7% were absent.`,
   a:STATS_NAME.samp_ok,
   w:`Two questions decide it. How did these people or cases get into the data? Nobody was filtered out: everyone had an equal chance of being counted, because every student on every school day is in the attendance records. Who is missing, and would adding them change the answer? Nobody important is missing, and the group is big enough to trust: with 21,000 students, a few absences either way change nothing.`}
];

const V3_OPTS = [STATS_NAME.proxy, STATS_NAME.defshift, STATS_NAME.detection, STATS_NAME.meas_ok];
const V3_DRILL = [
  {q:`Since the hospital began paying managers a bonus for patients discharged per bed per week, discharges per bed are up 25%. Care has become more efficient.`,
   a:STATS_NAME.proxy,
   w:`Two questions decide it. What is this number really a count of? A stand-in for the thing people care about: discharges per bed stands in for efficient care. If the real situation had not changed at all, could this number still have changed? Yes: people working on the number itself would do it, for example by sending patients home early. The giveaway is “began paying managers a bonus”.`},
  {q:`The police chief says arrests are up 30% since he set each officer a monthly arrest quota. Policing has become more effective.`,
   a:STATS_NAME.proxy,
   w:`Two questions decide it. What is this number really a count of? A stand-in for the thing people care about: arrests stand in for effective policing. If the real situation had not changed at all, could this number still have changed? Yes: people working on the number itself would do it, for example by arresting people for minor offences to reach the quota. The giveaway is “quota”.`},
  {q:`The number of homeless people in the city fell 40% after the council decided that people staying temporarily with friends no longer count as homeless.`,
   a:STATS_NAME.defshift,
   w:`Two questions decide it. What is this number really a count of? The same word, counted under a new rule or with a new tool. If the real situation had not changed at all, could this number still have changed? Yes: a change in the counting rule or the measuring tool would do it. The giveaway is “decided that … no longer count”: fewer people qualify for the word, so the figure falls with nobody housed.`},
  {q:`A dairy farm’s milk yield per cow jumped 8% the week it replaced its old milk meter with a new one. The vet confirms the herd, the feed and the milking times are unchanged.`,
   a:STATS_NAME.defshift,
   w:`Two questions decide it. What is this number really a count of? The same word, counted under a new rule or with a new tool: here it is the tool, and the new meter gives a different reading for the same milk. If the real situation had not changed at all, could this number still have changed? Yes: a change in the counting rule or the measuring tool would do it. The giveaway is “replaced its old milk meter” with everything else unchanged.`},
  {q:`Last year the statistics office counted 2.1 million “tech jobs”. This year it counts 2.9 million, after adding call-center and data-entry jobs to the “tech” group.`,
   a:STATS_NAME.defshift,
   w:`Two questions decide it. What is this number really a count of? The same word, counted under a new rule or with a new tool. If the real situation had not changed at all, could this number still have changed? Yes: a change in the counting rule or the measuring tool would do it. The giveaway is “after adding call-center and data-entry jobs”: the group grew on paper without a single new job.`},
  {q:`The city launched a free app for reporting potholes, and reported potholes quadrupled in a year. The roads are collapsing.`,
   a:STATS_NAME.detection,
   w:`Two questions decide it. What is this number really a count of? Cases found, which depends on how hard anyone looked: it counts reports, and the app made reporting easy. If the real situation had not changed at all, could this number still have changed? Yes: looking harder would do it. To check, ask an inspector to survey a random sample of streets.`},
  {q:`Speeding tickets in the town tripled the year the new speed cameras went up, so drivers there have become reckless.`,
   a:STATS_NAME.detection,
   w:`Two questions decide it. What is this number really a count of? Cases found, which depends on how hard anyone looked: tickets count speeding that was caught, and cameras catch far more than patrol cars did. If the real situation had not changed at all, could this number still have changed? Yes: looking harder would do it.`},
  {q:`The number of known cases of a rare food allergy doubled after the clinic began testing every child for it. Hospital admissions for severe reactions stayed flat.`,
   a:STATS_NAME.detection,
   w:`Two questions decide it. What is this number really a count of? Cases found, which depends on how hard anyone looked: testing every child finds cases nobody had noticed. If the real situation had not changed at all, could this number still have changed? Yes: looking harder would do it. The flat admissions are the check: real new allergy would send more children to hospital.`},
  {q:`A café counts cups of coffee sold from the cash register, which rings up every cup the same way and has not been reset. Cups sold are down 15% since a new café opened across the road.`,
   a:STATS_NAME.meas_ok,
   w:`Two questions decide it. What is this number really a count of? The thing itself, counted the same way throughout: each cup sold rings through the same cash register. If the real situation had not changed at all, could this number still have changed? No: this number only moves when the real thing moves. This part holds. Whether the new café caused the drop is a different question, for a later part.`},
  {q:`Each morning at 7 the same technician reads the same freezer thermometer, which was checked last month against a reference. The freezer has warmed by 6 degrees over the week.`,
   a:STATS_NAME.meas_ok,
   w:`Two questions decide it. What is this number really a count of? The thing itself, counted the same way throughout: one thermometer, one technician, one time of day, recently checked. If the real situation had not changed at all, could this number still have changed? No: this number only moves when the real thing moves.`}
];

const V4_OPTS = [STATS_NAME.nocontrol, STATS_NAME.relrisk, STATS_NAME.baserate, STATS_NAME.simpson, STATS_NAME.comp_ok];
const V4_DRILL = [
  {q:`Since our school started the breakfast club, 85% of the students who go to it have improved their attendance.`,
   a:STATS_NAME.nocontrol,
   w:`Two questions decide it. What is the number compared with? Nothing: a single figure with nothing beside it. The giveaway is “the students who go to it”: there is no word on students who did not go. What would you need to see to read it properly? A group that did not get it, because attendance goes up and down for many reasons anyway.`},
  {q:`Eight out of ten users of the sleep app say they feel less stressed after a month.`,
   a:STATS_NAME.nocontrol,
   w:`Two questions decide it. What is the number compared with? Nothing: a single figure with nothing beside it. The giveaway is that only app users are mentioned. What would you need to see to read it properly? A group that did not get it, such as similar people with no app, because many people feel less stressed after a month regardless.`},
  {q:`A new study finds that living near a highway raises the risk of a rare skin condition by 40%.`,
   a:STATS_NAME.relrisk,
   w:`Two questions decide it. What is the number compared with? A change shown only as a percentage, with no actual numbers. The giveaway is “by 40%” and nothing else. What would you need to see to read it properly? The actual numbers behind the percentage: if the condition affects 5 in 100,000 people, 40% more is 7 in 100,000.`},
  {q:`The label says this vitamin lowers your chance of a rare eye disease by 45%.`,
   a:STATS_NAME.relrisk,
   w:`Two questions decide it. What is the number compared with? A change shown only as a percentage, with no actual numbers. The giveaway is “by 45%” with no starting figure. What would you need to see to read it properly? The actual numbers behind the percentage: a rare disease cut by 45% may still mean only a handful of people in a hundred thousand.`},
  {q:`A bank’s fraud alert goes off for 98% of real frauds, and wrongly goes off for 2% of honest payments. Your payment was flagged, so there is a 98% chance you are being defrauded. Only about 1 payment in 5,000 is fraud.`,
   a:STATS_NAME.baserate,
   w:`Two questions decide it. What is the number compared with? An accuracy or hit rate, with no word on how common the thing is to begin with. What would you need to see to read it properly? How common the thing is to begin with, which the last sentence gives. Count a million payments: 200 are fraud and about 196 are caught. Of the 999,800 honest ones, 2% (about 20,000) are flagged. So about 196 of 20,000 alarms are real: roughly 1 in 100.`},
  {q:`The lie detector is 95% accurate, so since it says Sam is lying, Sam is almost certainly lying. Only about 1 in 200 of the staff who are tested has actually stolen anything.`,
   a:STATS_NAME.baserate,
   w:`Two questions decide it. What is the number compared with? An accuracy or hit rate, with no word on how common the thing is to begin with. What would you need to see to read it properly? How common the thing is to begin with: 1 in 200. Test 20,000 staff: 100 thieves, of whom the detector flags 95. Of the 19,900 honest staff it wrongly flags 5%, about 995. So about 95 of 1,090 flagged are real: around 9 in 100, not 95.`},
  {q:`Across the whole university, 45% of men who applied were admitted but only 35% of women, so the university favors men. Women mostly applied to the most competitive courses, and men mostly to the easier ones.`,
   a:STATS_NAME.simpson,
   w:`Two questions decide it. What is the number compared with? Totals that mix different groups together. The giveaway is the last sentence: the men’s and women’s totals are built from different mixes of courses. What would you need to see to read it properly? The totals split back into their groups: compare admission rates course by course, where women can do as well as men or better while losing overall.`},
  {q:`Tutor A’s students pass 52% of the time and Tutor B’s pass 71%, so B is the better tutor. A mostly takes students who have already failed twice, and B mostly takes students who are strong to begin with.`,
   a:STATS_NAME.simpson,
   w:`Two questions decide it. What is the number compared with? Totals that mix different groups together. The giveaway is who each tutor takes: A’s total is made mostly of hard cases and B’s of easy ones. What would you need to see to read it properly? The totals split back into their groups: compare the two tutors on weak students and on strong students separately.`},
  {q:`Both clinics counted cancellations per 100 booked appointments, over the same twelve months, using the same booking system. The north clinic’s rate is 6 points higher.`,
   a:STATS_NAME.comp_ok,
   w:`Two questions decide it. What is the number compared with? A group of the same kind, measured the same way: same measure per 100 bookings, same period, same system. What would you need to see to read it properly? Nothing: the comparison is already fair. Why the north clinic is higher is a different question, for a later part.`},
  {q:`Both factories report accidents per 100,000 hours worked, over the same year, using the same legal definition of an accident. Factory B’s rate is half of factory A’s.`,
   a:STATS_NAME.comp_ok,
   w:`Two questions decide it. What is the number compared with? A group of the same kind, measured the same way: the same base (per 100,000 hours), the same year, the same definition. What would you need to see to read it properly? Nothing: the comparison is already fair.`}
];

const V5_OPTS = [STATS_NAME.confound, STATS_NAME.reverse, STATS_NAME.regression, STATS_NAME.cause_ok];
const V5_DRILL = [
  {q:`Neighborhoods with more libraries have fewer burglaries, so libraries stop burglary.`,
   a:STATS_NAME.confound,
   w:`Two questions decide it. What else could produce this same pattern? Something else that drives both at once: wealth. Richer neighborhoods get more libraries and also have fewer burglaries. What would settle it? Comparing people who are alike on that other thing: compare neighborhoods with similar incomes and see whether libraries still make a difference.`},
  {q:`People who take a daily vitamin have fewer colds, so vitamins prevent colds.`,
   a:STATS_NAME.confound,
   w:`Two questions decide it. What else could produce this same pattern? Something else that drives both at once: people who look after their health are likelier to take vitamins and also likelier to sleep well, eat well and avoid colds. What would settle it? Comparing people who are alike on that other thing, such as people with the same habits of sleep and diet.`},
  {q:`Children with bigger shoe sizes score higher on reading tests, so big feet help with reading.`,
   a:STATS_NAME.confound,
   w:`Two questions decide it. What else could produce this same pattern? Something else that drives both at once: age. Older children have bigger feet and read better. What would settle it? Comparing people who are alike on that other thing: compare only children of the same age, where the link would vanish.`},
  {q:`Cities with more police officers per resident have more crime, so police attract crime.`,
   a:STATS_NAME.reverse,
   w:`Two questions decide it. What else could produce this same pattern? It could run the other way: the result causes the thing. Cities with a lot of crime hire more police, so crime comes first and the extra officers follow. What would settle it? Checking which one came first: did crime rise before the hiring, or after?`},
  {q:`The hospital ward with the most doctors has the sickest patients, so doctors make people sick.`,
   a:STATS_NAME.reverse,
   w:`Two questions decide it. What else could produce this same pattern? It could run the other way: the result causes the thing. The sickest patients are sent to the ward with the most doctors, so the illness comes first. What would settle it? Checking which one came first: how sick the patients were when they arrived on the ward.`},
  {q:`The factory’s three worst-performing lines were given a new manager. A month later all three were closer to the average. The new manager is a miracle worker.`,
   a:STATS_NAME.regression,
   w:`Two questions decide it. What else could produce this same pattern? The group was picked for being at an extreme, and drifted back: “worst-performing” is how the lines were chosen. What would settle it? Tracking an equally extreme group that was left alone: look at three other bad lines that got no new manager and see how much they moved.`},
  {q:`The rookie of the year had a mediocre second season, so fame ruins players.`,
   a:STATS_NAME.regression,
   w:`Two questions decide it. What else could produce this same pattern? The group was picked for being at an extreme, and drifted back: “rookie of the year” means the best first season, which included good luck. What would settle it? Tracking an equally extreme group that was left alone: look at players with standout first seasons who never became famous, and see whether they slumped too.`},
  {q:`A bakery offered 80 regular customers a place in a taste test. A lottery decided which 40 got a free loaf of the new recipe each week and which 40 got the old recipe. After a month the new-recipe group bought 12% more bread. Both groups were counted the same way.`,
   a:STATS_NAME.cause_ok,
   w:`Two questions decide it. What else could produce this same pattern? Nothing plausible: the way it was set up rules the others out. The word “lottery” is the giveaway, because chance made the two groups alike. What would settle it? It is already settled: people were assigned by chance, so the other explanations are closed off.`},
  {q:`A hospital randomly allocated 300 patients with the same kind of high blood pressure to the new pill or to the usual pill. The nurse who took the blood pressure readings did not know who had which. After three months the new-pill group’s readings were 6 points lower.`,
   a:STATS_NAME.cause_ok,
   w:`Two questions decide it. What else could produce this same pattern? Nothing plausible: the way it was set up rules the others out. “Randomly allocated” makes the groups alike, and the nurse not knowing who had which stops the measuring from leaning either way. What would settle it? It is already settled: people were assigned by chance, so the other explanations are closed off.`}
];

const STATS_ERR = [
  {q:`Nine out of ten dentists recommend it.`,
   w:`A lone figure (see the card of that name). It does not say who was counted: ten dentists out of how many, and how were they picked? It does not say what the number is compared with either, so the key’s question “What is the number compared with?” gets the answer Nothing: a single figure with nothing beside it. Recommended instead of what? What is on the page fits No comparison group, and the useful reply is a question: of whom, asked what, compared with what?`},
  {q:`Correlation does not imply causation, so the study proves nothing.`,
   w:`The opposite mistake: waving a claim away with a stock phrase. It names no alternative, so nothing can be checked. The key’s question is “What else could produce this same pattern?” Answer it with something specific: a third thing behind both, the cause running the other way, or a group picked at an extreme. Then say which way it pushes and whether it is big enough to explain the result. Used as a verdict, the phrase dismisses sound and shaky studies at the same cost.`},
  {q:`Crime in the neighborhood is up 200%.`,
   w:`Which part goes wrong first? What it is compared with. The giveaway is “up 200%” and nothing else. What is the number compared with? A change shown only as a percentage, with no actual numbers. Up 200% could be 1 incident rising to 3, or 1,000 rising to 3,000. What would you need to see to read it properly? The actual numbers behind the percentage. The name is A percentage without the numbers. If the numbers turn out tiny, it is also Too few cases to trust, and that part would come first.`},
  {q:`The average household has 1.9 children, so most households have about two.`,
   w:`An average is not a typical case. The key has no name for this one. The nearest question is “What is this number really a count of?” An average counts the middle of a spread, not what most cases look like. Many households have no children and some have four, and no household has 1.9. Ask for the spread, or for the median.`},
  {q:`It is a peer-reviewed study in a top journal, so the finding is settled.`,
   w:`Trust the design, not the source. The key has no name for this one either. A good journal is a reason to look at a study, not a reason to stop. Ask the four questions of the study itself: who was counted, what was measured, what it was compared with, and what it says caused what. Peer review does not fix a sample that picked itself or a group picked at an extreme.`},
  {q:`This diet worked for me and everyone I know.`,
   w:`Which part goes wrong first? Who was counted. How did these people or cases get into the data? They chose to take part: “me and everyone I know” is whoever happened to speak up, and the people it did not work for tend to stop talking about it. The name is A sample that picked itself. It also fails the next part, because there is No comparison group: nothing says what would have happened without the diet. You name the earlier one.`},
  {q:`Ninety-seven percent of the people we surveyed at the rally support the movement.`,
   w:`Which part goes wrong first? Who was counted. How did these people or cases get into the data? They chose to take part: people who go to a rally are already supporters. Where you stood to ask decided the answer before anyone spoke. The name is A sample that picked itself.`},
  {q:`Our new shampoo makes your hair 40% healthier.`,
   w:`A lone figure again, and an empty one. It does not say who or how many were tested (Who was counted). What is this number really a count of? Nobody can say: “healthier” is not something anyone counts, so there is not even a stand-in to check. What is the number compared with? Nothing: 40% more than what? The key has no name for a claim this empty. The useful reply is a question: healthier measured how, in whom, and compared with what?`},
  {q:`Nobody who followed our trading system lost money last year.`,
   w:`Which part goes wrong first? Who was counted. How did these people or cases get into the data? Only the ones that lasted were kept: people who lost money stopped following the system, or were dropped from the list. The name is Counting only the survivors. Ask for everyone who ever started the system, not only those still following it.`},
  {q:`UFO sightings have tripled since the movie came out, so more UFOs are visiting.`,
   w:`Which part goes wrong first? What the number counts. What is this number really a count of? Cases found, which depends on how hard anyone looked: after a movie, more people look at the sky and more report what they see. If the real situation had not changed at all, could this number still have changed? Yes: looking harder would do it. The name is More looking, not more happening.`}
];

// Each specimen: the claim (q), the route the key accepts (sub), the name (outcome), why (the key's questions in order), fals (what would change the verdict).
const STATS_SPECIMENS = [
  {q:`We pulled every mutual fund available on the platform today and measured what each returned over the last fifteen years. The average came to 9.4% a year, comfortably ahead of the index. Active management earns its fee after all.`,
   sub:{S1:['sampling'],A1:['endpoint'],A2:['failures']},outcome:'survivor',
   why:`Which part of the claim goes wrong first? Who was counted: the list is “every mutual fund available on the platform today”. How did these people or cases get into the data? Only the ones that lasted were kept: a fund that did badly and closed in the last fifteen years is no longer on the platform. Who is missing, and would adding them change the answer? The ones that dropped out are missing, and they would pull the answer the other way: the closed funds were the worst performers, so adding them back would lower the 9.4%.`,
   fals:`If the list were fixed at the funds that existed fifteen years ago, with the closed ones included up to the day they closed, and the average still beat the index, the claim would stand.`},

  {q:`Two thousand readers responded to our website questionnaire on the proposed low-traffic zone. Seventy-eight percent are opposed. The council should take note that the public has spoken.`,
   sub:{S1:['sampling'],A1:['optedin'],A2:['motivated']},outcome:'selfselect',
   why:`Which part of the claim goes wrong first? Who was counted: “two thousand readers responded to our website questionnaire”. How did these people or cases get into the data? They chose to take part: nobody picked these readers, they saw the item and chose to answer. Who is missing, and would adding them change the answer? The ones who stayed out are missing, and they feel differently from the ones who joined: people opposed to a change are the readers most likely to bother answering.`,
   fals:`If a random sample of residents, chosen by the surveyor from the full list, gave the same 78%, the finding would be real. Size is not the fix: two thousand people who picked themselves do not beat four hundred picked by chance.`},

  {q:`The wellbeing survey was sent to all 4,000 employees. Six hundred completed it, and 88% of those agree that they feel supported by their manager. Support scores remain strong across the organisation.`,
   sub:{S1:['sampling'],A1:['answered'],A2:['silent']},outcome:'nonresp',
   why:`Which part of the claim goes wrong first? Who was counted: the 88% comes from the 600 who completed the survey. How did these people or cases get into the data? Only the ones who replied were counted: all 4,000 employees were invited, so this was not an open call, but only 600 answered. Who is missing, and would adding them change the answer? The ones who did not reply are missing, and they feel differently from the ones who did: 85% are silent, and the employees who feel least supported are the least likely to fill in a survey about their manager.`,
   fals:`If a random handful of the people who did not reply were tracked down and asked, and they gave similar answers, the headline would hold. The check is cheap and almost never done.`},

  {q:`Of the twenty districts in the state, the five with the lowest rates of kidney cancer are all small, rural and sparsely populated. Something about rural living is protective.`,
   sub:{S1:['sampling'],A1:['frame'],A2:['unstable']},outcome:'smalln',
   why:`Which part of the claim goes wrong first? Who was counted: the claim is built on the rates in twenty districts. How did these people or cases get into the data? Nobody was filtered out: everyone had an equal chance of being counted, because every district is counted. Who is missing, and would adding them change the answer? Nobody is missing, but the group is so small that one or two cases swing the result: in a district of a few thousand people one or two cases move the rate a lot, so small places end up at both the top and the bottom of any ranking.`,
   fals:`Look at the five districts with the highest rates. If they are large and city districts, living in the countryside may be doing something. If they are also small and rural, the pattern is arithmetic and not about health.`},

  {q:`The quarterly labour force survey draws a fresh random sample of 40,000 households from the national address register, follows up non-responders by telephone and in person over three weeks, and reports unemployment at 4.2%, with a margin of error of ±0.3 percentage points.`,
   sub:{S1:['sampling'],A1:['frame'],A2:['nothing_a']},outcome:'samp_ok',
   why:`Which part of the claim goes wrong first? None does, so the question is which part the claim rests on: it is an estimate from a group of households (a labour force survey is a regular government survey of who has a job), so it rests on Who was counted. How did these people or cases get into the data? Nobody was filtered out: everyone had an equal chance of being counted, because the 40,000 households were drawn at random from the national address register. Who is missing, and would adding them change the answer? Nobody important is missing, and the group is big enough to trust: the households that did not answer were chased for three weeks, and the margin of error is stated. This is a fair count.`,
   fals:`If the share of households answering had quietly collapsed and the follow-up had been dropped, this would become Many people did not reply: the same sentence without the three weeks of chasing.`},

  {q:`Two years ago the trust made the four-hour emergency target the central performance measure for the department. Ninety-five percent of patients are now seen inside four hours, against 68% before. Emergency care in this trust has been transformed.`,
   sub:{S1:['measure'],M1:['standin'],M2:['yes_game']},outcome:'proxy',
   why:`Which part of the claim goes wrong first? What the number counts: the figure is the share of patients seen within four hours, and “made the four-hour target the central performance measure” gives it away. What is this number really a count of? A stand-in for the thing people care about: four hours stands in for good emergency care. If the real situation had not changed at all, could this number still have changed? Yes: people working on the number itself would do it. Patients can be admitted just inside the four hours, and the waiting moves to places where the clock has not started, such as ambulances queuing outside or beds in a corridor. (“The trust” is the organization that runs the hospital.)`,
   fals:`If the time from the emergency call to treatment, and how patients were doing a month later, had improved as well, the target would be tracking the real thing.`},

  {q:`Recorded violent crime in the county has risen 40% since 2016. In 2017 the constabulary adopted the national recording standard, under which each victim named in an incident is recorded as a separate offence.`,
   sub:{S1:['measure'],M1:['newrule'],M2:['yes_rule']},outcome:'defshift',
   why:`Which part of the claim goes wrong first? What the number counts: the figure is recorded violent crime, and the rule for recording it changed in 2017, when the county’s police force (the constabulary) adopted the national standard. What is this number really a count of? The same word, counted under a new rule or with a new tool: “offence” survived the change, but its definition did not. If the real situation had not changed at all, could this number still have changed? Yes: a change in the counting rule or the measuring tool would do it. An incident with three victims used to be recorded once and is now recorded three times, so the figure rises with nothing different happening on the street.`,
   fals:`Redo the whole series under one standard, or look at a measure the change did not touch, such as murders or hospital admissions for assault. If those rose 40% too, the increase is real.`},

  {q:`Following the introduction of a national ultrasound screening programme, diagnoses of thyroid cancer rose more than fifteen-fold in a decade. Deaths from thyroid cancer over the same decade were flat.`,
   sub:{S1:['measure'],M1:['found'],M2:['yes_effort']},outcome:'detection',
   why:`Which part of the claim goes wrong first? What the number counts: the figure is diagnoses, and a screening programme began in the same decade. What is this number really a count of? Cases found, which depends on how hard anyone looked. If the real situation had not changed at all, could this number still have changed? Yes: looking harder would do it. The flat death figure is the check: fifteen times more disease would push deaths up, but fifteen times more scanning also finds slow-growing tumours that would never have harmed anyone.`,
   fals:`If deaths had risen too, or if more of the cases found had already been well advanced, the disease itself would have become more common and the screening would only have revealed it.`},

  {q:`The reservoir gauge is read from the same marked post, at the same hour, by the same protocol it has used since 1994. The level has fallen 3.4 metres since March, against a March-to-September average fall of 1.1 metres over the previous twenty years.`,
   sub:{S1:['measure'],M1:['thing'],M2:['no_m']},outcome:'meas_ok',
   why:`Which part of the claim goes wrong first? None does, so the question is which part the claim rests on: it is a level changing over time, and most of the claim describes how the level is read, so it rests on What the number counts. What is this number really a count of? The thing itself, counted the same way throughout: the same marked post, the same hour and the same method since 1994. If the real situation had not changed at all, could this number still have changed? No: this number only moves when the real thing moves, because a water line does not move for any other reason. The fall is also set against twenty years of the same months, so the comparison is like for like.`,
   fals:`A replaced or moved gauge, or a change in the hour of the reading, would bring back The counting rule or tool changed: the series would break at the point the equipment did.`},

  {q:`The screening test correctly flags 99% of people who have the condition and correctly clears 99% of those who do not. Your result came back positive. The clinic tells you there is therefore a 99% chance you have it. The condition affects roughly one person in ten thousand.`,
   sub:{S1:['compare'],C1:['norate'],C2:['prior']},outcome:'baserate',
   why:`Which part of the claim goes wrong first? What it is compared with: the clinic reads “99% accurate” as the chance you have the condition. What is the number compared with? An accuracy or hit rate, with no word on how common the thing is to begin with. What would you need to see to read it properly? How common the thing is to begin with: one person in ten thousand. Count 10,000 people: one has it and the test finds them, and 1% of the other 9,999, about a hundred people, are wrongly flagged. So about 101 people test positive and one of them is real, a chance nearer 1% than 99%.`,
   fals:`Raise how common the condition is and the reading changes: in a group where one person in five has it, a positive result really does make it very likely.`},

  {q:`A large cohort study reports that eating two rashers of processed meat a day is associated with an 18% higher risk of bowel cancer. Coverage advises readers to give up bacon.`,
   sub:{S1:['compare'],C1:['changeonly'],C2:['absolute']},outcome:'relrisk',
   why:`Which part of the claim goes wrong first? What it is compared with: the claim, from a study that followed a large group of people over many years, is “an 18% higher risk” for eating two rashers (slices) of bacon a day. What is the number compared with? A change shown only as a percentage, with no actual numbers. What would you need to see to read it properly? The actual numbers behind the percentage: lifetime risk of bowel cancer is around 6%, and 18% of 6 is about 1, so the risk goes from about 6 in 100 to about 7 in 100. That is roughly one extra case per hundred people.`,
   fals:`If the starting risk were 40% instead of 6%, the same 18% would be a large and alarming real increase. The percentage is not wrong. It is unreadable on its own.`},

  {q:`Nine in ten of our back pain patients report that their pain has substantially improved after the twelve-week programme. The programme works.`,
   sub:{S1:['compare'],C1:['nothing_c'],C2:['control']},outcome:'nocontrol',
   why:`Which part of the claim goes wrong first? What it is compared with: the claim is one figure, nine in ten. What is the number compared with? Nothing: a single figure with nothing beside it. What would you need to see to read it properly? A group that did not get it: most bouts of lower back pain improve a lot within twelve weeks with no treatment at all, so nine in ten is what you would expect with or without the programme.`,
   fals:`If a similar group of patients on a waiting list improved far less, say two in ten, the programme would have something to show for itself.`},

  {q:`Overall surgical mortality is 3.1% at Hospital A and 1.9% at Hospital B. Patients choosing between them should choose B. Hospital A is the region’s designated trauma and transplant referral centre; Hospital B is a district general.`,
   sub:{S1:['compare'],C1:['lumped'],C2:['split']},outcome:'simpson',
   why:`Which part of the claim goes wrong first? What it is compared with: the advice rests on two totals, 3.1% and 1.9%. What is the number compared with? Totals that mix different groups together: Hospital A takes the hardest cases as the region’s referral centre, and Hospital B is a district general. What would you need to see to read it properly? The totals split back into their groups: split by how serious the cases are, and A can have the lower death rate in every group and still lose on the total, because it treats so many more of the hardest cases.`,
   fals:`If A were worse than B within each level of seriousness, the totals would be telling the truth, and the referral role would be an excuse and not an explanation.`},

  {q:`Both cities recorded pedestrian injuries per 100,000 residents over the same three calendar years, under the same national reporting standard, and the northern city’s rate is 30% higher.`,
   sub:{S1:['compare'],C1:['likewise'],C2:['nothing_x']},outcome:'comp_ok',
   why:`Which part of the claim goes wrong first? None does, so the question is which part the claim rests on: it is a gap between two cities, so it rests on What it is compared with. What is the number compared with? A group of the same kind, measured the same way: the same measure per 100,000 residents, the same three years and the same national reporting standard. What would you need to see to read it properly? Nothing: the comparison is already fair. Why the northern city is higher is a separate question, for the cause part.`,
   fals:`If one city counted only injuries attended by an ambulance and the other counted every reported collision, the comparison would stop being fair. The same word, “injury”, would be counted under two different rules, so the break would move to What the number counts.`},

  {q:`Children who take music lessons outperform their peers on standardised tests by a wide margin, and the gap grows with years of tuition. Music training builds the cognitive skills that schooling rewards.`,
   sub:{S1:['cause'],K1:['third'],K2:['adjust']},outcome:'confound',
   why:`Which part of the claim goes wrong first? What it says caused what: “Music training builds the cognitive skills” says the lessons caused the scores. (“Years of tuition” means years of lessons.) What else could produce this same pattern? Something else that drives both at once: household income and parents’ involvement lead to both music lessons and higher test scores, and more years of lessons just track more years of a household that could afford them. What would settle it? Comparing people who are alike on that other thing: compare children from families with similar income and similar parental involvement.`,
   fals:`If free lessons handed out by lottery produced the same gap, or if the gap survived among children from similar families, the lessons themselves would be doing something.`},

  {q:`Employees who use the company gym take 30% fewer sick days than those who never badge in. The gym is keeping our workforce healthy and should be expanded.`,
   sub:{S1:['cause'],K1:['backwards'],K2:['timing']},outcome:'reverse',
   why:`Which part of the claim goes wrong first? What it says caused what: “The gym is keeping our workforce healthy” says the gym caused the healthier staff. What else could produce this same pattern? It could run the other way: the result causes the thing. Flip the sentence: “being healthy makes people use the gym” makes sense, because people who are ill or injured cannot train, so they do not badge in and they also take sick days. The pattern would appear even if the gym did nothing for health. What would settle it? Checking which one came first: were the gym users already healthier before they started?`,
   fals:`Look at the timing. If gym use in one quarter predicts fewer sick days in the next quarter, among people who were healthy at the start, the arrow is pointing the way the claim says.`},

  {q:`The clinic enrolled the hundred patients with the worst symptom scores on the register, delivered the new protocol for six weeks, and re-scored them. Average symptoms improved by nearly a third. The protocol is effective.`,
   sub:{S1:['cause'],K1:['extreme'],K2:['untreated']},outcome:'regression',
   why:`Which part of the claim goes wrong first? What it says caused what: “The protocol is effective” says the protocol caused the improvement. The scores are set beside the same patients’ earlier scores, which is a fair enough comparison, so the break is in the explanation. What else could produce this same pattern? The group was picked for being at an extreme, and drifted back: the clinic enrolled the hundred worst scores. A worst score is part real severity and part bad luck on the day, so when they are scored again the luck averages out. What would settle it? Tracking an equally extreme group that was left alone.`,
   fals:`Take an equally extreme group, give them nothing and score them again after six weeks. If they improve by a quarter and the treated group by a third, the protocol is worth roughly the difference, not the headline.`},

  {q:`Forty thousand volunteers were randomly assigned to the vaccine or a saline placebo, with allocation concealed from participants and assessors. Over the follow-up period there were 8 confirmed cases in the vaccine arm and 162 in the placebo arm.`,
   sub:{S1:['cause'],K1:['none_k'],K2:['already']},outcome:'cause_ok',
   why:`Which part of the claim goes wrong first? None does, so the question is which part the claim rests on: the claim is that the vaccine made the difference, so it rests on What it says caused what. What else could produce this same pattern? Nothing plausible: the way it was set up rules the others out. What would settle it? It is already settled: people were assigned by chance, so the other explanations are closed off. Chance spread everything else evenly across the two groups. The placebo was a dummy injection of salt water (saline), and neither the volunteers nor the people checking for cases knew who got which. The volunteers chose to take part, so the result speaks for people like them, but inside the trial the groups are comparable.`,
   fals:`Broken blinding, losing people from one group more than the other, or checking harder for cases in one group would reopen the questions that random assignment was meant to close.`}
];

const STATS_COURSE = [
{ tag:'One', title:'The four parts of a claim',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can take a claim made with numbers, such as a headline, an ad or a line in a work report, and say which of four parts goes wrong first. That tells you what to ask next.</p>
      <p>Numbers reach you all day: “sales are up 15%”, “nine in ten recommend it”, “people who do this live longer”. Most of them are not made up. What goes wrong is usually how the number was put together, or what it is said to prove. The questions in this course let you check that in a minute or two, with no math.</p>
      <p>This unit answers the first question of the key. We call the set of questions “the key”, because you use it to work out what you are looking at, the way you would name a plant from a field guide. The first question, in its exact words, is:</p>
      <p><b>Which part of the claim goes wrong first? (If none does, which part does it rest on?)</b></p>
      <p>Each later unit teaches two more questions about the part you pick. Then you name the problem. So a full check is three questions and then a name. Units Two to Five teach them one part at a time, and Unit Seven puts them together.</p>`},

  {h:'A claim has four parts',
   b:`<p>Every claim made with numbers is built in four steps, and each step can go wrong. Here is one claim we will follow through the unit. A café owner says: <i>“Since we started giving out mints with the bill, our tips are up 15%. The mints work.”</i></p>
      <ol>
        <li><b>Who was counted.</b> Which tips, from which tables and which days, are in the figure? Are there enough of them, or were some left out?</li>
        <li><b>What the number counts.</b> Is “tips” the same thing before and after? Did anything change about how it was added up?</li>
        <li><b>What it is compared with.</b> Up 15% from when? From a quiet month, or from the same month last year?</li>
        <li><b>What it says caused what.</b> Even if tips really rose, did the mints do it, or something else that changed at the same time?</li>
      </ol>
      <p>The order matters. If the first step is broken, every later step is built on a bad base, so there is little point arguing about step four. You look for the first step that breaks. The next four cards take the parts one at a time, using the café claim.</p>`},

  {h:'Who was counted',
   b:`<p><b>What it is.</b> Every number is worked out from some people, things or events. Those are “the data”, and each one of them is a “case”. This part asks whether the cases in the data are the right ones, and whether there are enough of them. A survey of whoever happened to answer, a list of only the businesses still open, a ranking of tiny groups: each can go wrong here, before any adding up begins.</p>
      <p><b>Example.</b> The café owner added up the tips left in the jar by the cash register. Most customers now tip on the card machine, and those tips were never added in. The 15% is a fact about the jar, not about the café.</p>
      <p><b>Sounds like.</b> “We surveyed our customers.” “The average of the firms on our list.” “Of those who replied.” “The best school in the area is a tiny one.”</p>
      <p><b>Catch it.</b> Ask: who or what is in this number, and who or what is left out? If the answer is that some cases are missing, or there are very few, this is the answer <b>Who was counted</b> to the key’s first question.</p>
      <p><b>What to do.</b> Ask how the cases got into the data. Then ask what is missing and whether it would change the answer. Unit Two teaches the four ways this goes wrong.</p>
      <p><b>Don’t confuse it with</b> What the number counts. Here the question is <i>which</i> cases are in. That one asks <i>what</i> is being counted, even when every case is in.</p>`},

  {h:'What the number counts',
   b:`<p><b>What it is.</b> Even when the right cases are in, the number may not measure what you think it measures. The word on the label may have changed its meaning, or the figure may be a stand-in (a score, a count of reports) that people can push up without the real thing changing. That happens most when someone is paid or judged on the number.</p>
      <p><b>Example.</b> In the same month as the mints, the café began adding a 10% service charge to big groups’ bills, and the cash register records it under “tips”. The word “tips” is the same. What is in it is not.</p>
      <p><b>Sounds like.</b> “Since the new system.” “Under the new definition.” “Reported cases are soaring.” “Since we began paying a bonus for…” “Target met.” “Our satisfaction score is up.”</p>
      <p><b>Catch it.</b> Ask: if nothing real had changed, could this number still have moved? If yes, the answer to the key’s first question is <b>What the number counts</b>.</p>
      <p><b>What to do.</b> Ask exactly what is counted, and whether it was counted the same way throughout. Unit Three teaches the three ways this goes wrong.</p>
      <p><b>Don’t confuse it with</b> Who was counted. A claim can include every case and still count the wrong thing. If cases are missing, it is Who was counted. If every case is in but the number does not mean what it seems to, it is What the number counts.</p>`},

  {h:'What it is compared with',
   b:`<p><b>What it is.</b> A number only means something when it sits beside another number. “Up 15%” needs “from what”. “Ninety percent got better” needs “and how many got better without it”. A big percentage can also sit on a tiny starting number: “risk cut by 50%” might mean 2 people in 100,000 down to 1 in 100,000. And a total can hide groups that point the opposite way inside it. A figure with nothing fair beside it cannot be judged.</p>
      <p><b>Example.</b> The café owner compared this December with last November. December has the pre-Christmas rush; November does not. Tips would have risen with or without mints.</p>
      <p><b>Sounds like.</b> “Up 15%.” “Nine in ten say it helped.” “Doubles your risk.” “Overall, A does worse than B.”</p>
      <p><b>Catch it.</b> Ask: what is this number set beside, and is that a fair thing to set it beside? If there is nothing beside it, or something unfair, the answer to the key’s first question is <b>What it is compared with</b>.</p>
      <p><b>What to do.</b> Ask “compared with what?” and “out of how many?” Unit Four teaches the five answers.</p>
      <p><b>Don’t confuse it with</b> What it says caused what. Here the question is whether there is a fair comparison on the page. Next, the question is whether one thing made the other happen.</p>`},

  {h:'What it says caused what',
   b:`<p><b>What it is.</b> Many claims go beyond “these two go together” to “this made that happen”. “The mints work” is a claim about cause. Two things going together is not enough to show it. Something else may be behind both, the cause may run the other way, or a group picked at its worst may simply drift back to normal by itself.</p>
      <p><b>Example.</b> Suppose the tips really did rise. The café also hired a friendlier waiter that month and put its prices up. Any of those could have raised the tips, and the owner has not ruled them out.</p>
      <p><b>Sounds like.</b> “So.” “Because.” “Works.” “Leads to.” “That’s why.” Or a group picked as the worst (or best) that then “improved” after a treatment.</p>
      <p><b>Catch it.</b> Ask: does the claim say one thing made another happen? If yes, and that is where it breaks, the answer to the key’s first question is <b>What it says caused what</b>.</p>
      <p><b>What to do.</b> Name the other explanation and what would settle it. Unit Five teaches the three alternatives.</p>
      <p><b>Don’t confuse it with</b> What it is compared with. A claim can set two numbers side by side fairly and still be wrong about why they differ.</p>`},

  {h:'Side by side: which part goes wrong first?',
   b:`<p>The key’s first question, in its exact words: <b>Which part of the claim goes wrong first? (If none does, which part does it rest on?)</b> These are its four answers, what the claim often sounds like, and the problems you can name once you have chosen the part.</p>
      <table class="k pair">
        <tr><th>The answer</th><th>The claim often sounds like</th><th>The names it leads to</th></tr>
        <tr><td><b>Who was counted</b></td><td>“We surveyed…”, “of those who replied”, a list of winners, a ranking of small groups</td><td>Counting only the survivors; A sample that picked itself; Many people did not reply; Too few cases to trust; or A fair count</td></tr>
        <tr><td><b>What the number counts</b></td><td>“Since the new system”, “since the target”, “reported cases soared”</td><td>Hitting the target, missing the point; The counting rule or tool changed; More looking, not more happening; or A trustworthy measure</td></tr>
        <tr><td><b>What it is compared with</b></td><td>“Up 15%”, “nine in ten”, “doubles your risk”, one total against another</td><td>No comparison group; A percentage without the numbers; Ignoring how common it is; Totals that hide the groups; or A fair comparison</td></tr>
        <tr><td><b>What it says caused what</b></td><td>“So”, “because”, “works”, or a worst group that “improved”</td><td>A third thing behind both; The cause runs the other way; Picked at an extreme, then drifted back; or A cause that holds up</td></tr>
      </table>`},

  {h:'Stop at the first break',
   b:`<p><b>What it is.</b> A claim can be wrong in several places at once. The key asks for one answer: the earliest part that goes wrong. The parts come in order, and a break early on spoils everything after it. If the wrong people were counted, it makes no sense to argue about what was measured or what caused what, because you would be arguing about a group that is not the real one.</p>
      <p><b>Example.</b> “Of the runners who finished the marathon, 90% say the training plan was excellent, so the plan gets people to the finish.” Only finishers are in the number, and everyone who dropped out is missing. That is Who was counted, and it is already broken. The claim also leaps to a cause (“gets people to the finish”), but that part comes later. You name the earlier one.</p>
      <p><b>Sounds like.</b> A claim that goes “so” straight after a list of winners, survivors or volunteers. The “so” is the second problem. The list is the first.</p>
      <p><b>Catch it.</b> Go through the four parts in order and stop at the first one that breaks. That part is the answer to the key’s first question, even if a later part breaks too.</p>
      <p><b>What to do.</b> Name the earliest part that goes wrong. If you like, add that the claim may also fail later. Do not try to list every problem.</p>
      <p><b>Don’t confuse it with</b> picking the worst problem. The rule is about order, not size. A small problem at part one is named before a large problem at part four.</p>`},

  {h:'When nothing is wrong',
   b:`<p><b>What it is.</b> Many claims are fine, and the key has an answer for that at every part. Being able to say “this one holds up, and here is why” is what makes your objections worth listening to when you do object.</p>
      <p>The first question has a second half for this case: <i>if none does, which part does it rest on?</i> Pick the part the claim is mainly leaning on. If its point is an estimate from a group of people, it rests on Who was counted. If its point is a figure moving over time, it rests on What the number counts. If its point is a gap between two things, it rests on What it is compared with. If its point is “this caused that”, it rests on What it says caused what. If two seem to fit, go with the one the claim spends its words on: how the people were picked, how the thing was measured, what it was set beside, or how people were assigned.</p>
      <p><b>Example.</b> “The pool thermometer is read at the same depth at 7 every morning. The water has cooled from 28 to 24 degrees since September.” The claim rests on What the number counts, and that part holds: it is the thing itself, measured the same way each time.</p>
      <p><b>Looks like.</b> “Chosen at random from the full list.” “Everyone on the list was asked, and nearly all answered.” “Same tool, same method.” “Same period, same definition.” “Assigned by a coin flip.”</p>
      <p><b>Catch it.</b> Ask: can I point to a specific problem? If not, which part is the claim built on? The four “holds up” names are A fair count, A trustworthy measure, A fair comparison and A cause that holds up. Units Two to Five show each one.</p>
      <p><b>What to do.</b> Say it holds, and say why, in one sentence. Do not go hunting for a problem that is not there.</p>
      <p><b>Don’t confuse it with</b> “proven true”. Finding no problem means no specific problem turned up. The claim could still be a fluke.</p>`},

  {h:'Worked example: running the parts in order',
   b:`<p>Here is a claim you have not seen: <i>“Since we launched the loyalty card, our bakery’s sales are up 30%. The card is a hit.”</i> We ask the key’s first question, <b>Which part of the claim goes wrong first?</b>, by trying the parts in order.</p>
      <ol>
        <li><b>Who was counted?</b> The figure is the bakery’s own sales records, every sale, from one shop, and there are thousands of them. Nobody is filtered out and nothing is too small. This part holds.</li>
        <li><b>What the number counts?</b> It is total sales in dollars at the register, added up the same way before and after. “Sales” means the same thing both times. This part holds.</li>
        <li><b>What it is compared with?</b> “Up 30%” on what? The claim does not say. The card might have launched in spring, and sales may be up compared with a winter month. The words “up 30%” with no “from” give it away. This part breaks.</li>
      </ol>
      <p>We stop here. “The card is a hit” also leaps to a cause, but the comparison breaks before the cause part is reached, and the rule is to name the earliest. The answer is <b>What it is compared with</b>. What to ask next, such as “compared with the same months last year?”, is what Unit Four teaches.</p>`}
  ],
  drill:{kind:'pick', key:'v1'} },

{ tag:'Two', title:'Who was counted',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can look at a survey, a list or a ranking and say who is missing from it, or that too few are in it, and whether that changes the answer.</p>
      <p>This is the part of a claim where numbers feel most solid and are most often shaky. You will meet it in news polls, online reviews, company rankings and workplace surveys: “our customers say”, “the top ten”, “the average of the firms on the list”.</p>
      <p>This unit teaches the answer <b>Who was counted</b> to the key’s first question, and the two questions the key then asks about it, in their exact words:</p>
      <ul>
        <li><b>How did these people or cases get into the data?</b></li>
        <li><b>Who is missing, and would adding them change the answer?</b></li>
      </ul>
      <p>“The data” means the people or cases the number is worked out from. The people or cases actually in the data are called the sample. The wider group they were meant to stand for is the whole group. Most of the problems below come from a sample that is not a fair picture of its whole group. “Bias” in the names below means a lean built into how the data was gathered, one that pushes the answer the same way every time.</p>`},

  {h:'Counting only the survivors (survivorship bias)',
   b:`<p><b>What it is.</b> The data is built from the things that are still around, so the ones that did not make it are missing. Whatever helped some things survive looks like it works, because you never see the things that tried it and failed.</p>
      <p>This sneaks in whenever a list is made after the fact: the companies that exist today, the athletes who made the team, the buildings still standing. The missing cases are not a random few. They are the failures, so the picture looks better than the truth.</p>
      <p><b>Example.</b> A coding bootcamp advertises: “Our graduates earn an average of $85,000.” Graduates are the people who got to the end. The students who quit in week three, because it was not working for them, are not graduates, so they are not in the average. The $85,000 describes the people the course worked for.</p>
      <p>A famous case shows the same trap. Suppose you inspect the bullet holes on the bomber planes that returned from a mission, and most are in the wings. The tempting plan is to armor the wings. But the planes hit in the engine never came back to be inspected. The holes you can see are the places a plane can be hit and still fly home. The planes that are missing are the whole story.</p>
      <p><b>Sounds like.</b> “Look at all these successful founders. They all dropped out of college.” “The average score of the teams still in the league.” “The average sales of the stores still on this main street.”</p>
      <p><b>Catch it.</b> Ask: was this list built from what is still around, still going, or still here at the end? If so, the key’s two questions get these answers. <i>How did these people or cases get into the data?</i> <b>Only the ones that lasted were kept.</b> <i>Who is missing, and would adding them change the answer?</i> <b>The ones that dropped out are missing, and they would pull the answer the other way.</b></p>
      <p><b>What to do.</b> Ask for the list from the start, not the end: everyone who began, including the ones that closed, quit or failed. If you cannot get it, say that whatever you learn is only about the survivors.</p>
      <p><b>Don’t confuse it with</b> A sample that picked itself. There, people chose to join. Here, nobody was asked to join: the list was made afterwards from whatever was still around, and the ones that failed or quit are gone from it. The test is whether things dropped out after they started (Counting only the survivors), or chose to come in (A sample that picked itself).</p>`},

  {h:'A sample that picked itself (self-selection)',
   b:`<p><b>What it is.</b> People decide for themselves whether to be counted, and the ones who bother tend to feel strongly. Nobody chose this sample on purpose. It assembled itself out of the keen.</p>
      <p>Whatever makes someone willing to take part can also push their answer in one direction. That is why an open poll tells you about the people who answered, and very little about everyone else.</p>
      <p><b>Example.</b> A shop puts a feedback box by the door. The people who drop a note in are mostly very happy or very annoyed. The “it was fine” majority walk past without writing. Reading the box tells you about the loud ones.</p>
      <p><b>Sounds like.</b> “Vote on our website.” “Readers wrote in to say…” “Our online poll shows…” “Customers who left a review.”</p>
      <p><b>Catch it.</b> Ask: did people decide for themselves whether to be counted? If so, <i>How did these people or cases get into the data?</i> <b>They chose to take part.</b> <i>Who is missing, and would adding them change the answer?</i> <b>The ones who stayed out are missing, and they feel differently from the ones who joined.</b></p>
      <p><b>What to do.</b> Ask how the people were picked. A group picked by chance from the whole list is far more trustworthy than a group that volunteered. Treat an open poll as “what the keen ones say”, and no more.</p>
      <p><b>Don’t confuse it with</b> Many people did not reply. In a sample that picked itself, nobody in particular was asked: the door was just open. In non-response, a list of people was invited, and many stayed silent.</p>`},

  {h:'Many people did not reply (non-response bias)',
   b:`<p><b>What it is.</b> A particular list of people is invited, such as all the staff, every parent or every customer in a database. Only some answer, and the ones who answer are not like the ones who stay silent. The invitation was fair. The answers that came back are not.</p>
      <p>A low reply rate does not prove the answers are wrong. But the more people stay silent, the more room there is for the silent group to think differently from the replying group.</p>
      <p><b>Example.</b> A school emails a survey to all 800 families and 120 reply. The families who reply tend to be the ones with strong feelings, or lots of spare time, or who already like the school. The other 680 families, 85% of the school, never said a word, and they may feel quite differently.</p>
      <p><b>Sounds like.</b> “We sent it to everyone, and the results show…” “Of the 600 who completed the survey…” “Response rate: 15%.”</p>
      <p><b>Catch it.</b> Ask: was a list of people invited, and did many of them stay silent? If so, <i>How did these people or cases get into the data?</i> <b>Only the ones who replied were counted.</b> <i>Who is missing, and would adding them change the answer?</i> <b>The ones who did not reply are missing, and they feel differently from the ones who did.</b></p>
      <p><b>What to do.</b> Ask “how many were asked, and how many answered?” If many did not, ask whether anyone chased up the silent ones. Treat the result as a hint, not a measurement.</p>
      <p><b>Don’t confuse it with</b> A sample that picked itself. Here there is a list and everyone on it was invited; the problem is who answered. There, there was no list at all.</p>`},

  {h:'Too few cases to trust (small-number volatility)',
   b:`<p><b>What it is.</b> When a group is small, one or two cases move the percentage a lot. A “rate” is how many cases there are for each hundred (or thousand) people. In a group of 20, one extra case moves the rate by 5 points, because 1 out of 20 is 5%. In a group of 2,000, one extra case moves it by only 0.05 points.</p>
      <p>So tiny groups swing up and down by luck. They land at the top of a ranking one year and at the bottom the next. Nobody has to be missing and nobody has to be biased: it is just arithmetic. It belongs under Who was counted because the question is whether there are enough cases in the data to tell the story.</p>
      <p><b>Example.</b> A class of 20 students: last year 12 passed (60%), this year 15 passed (75%), “a 15-point jump!” That is three more students. In a school of 2,000, three more passes would move the rate by 0.15 points. The small class “improves most” this year and may well “fall most” next year.</p>
      <p><b>Sounds like.</b> “The best (and worst) results are all in tiny places.” “Up 200%.” “A cluster of cases in a small village.” “Zero accidents this month.”</p>
      <p><b>Catch it.</b> Ask: is everyone counted, but the group so small that one or two cases would swing the result? If so, <i>How did these people or cases get into the data?</i> <b>Nobody was filtered out: everyone had an equal chance of being counted.</b> <i>Who is missing, and would adding them change the answer?</i> <b>Nobody is missing, but the group is so small that one or two cases swing the result.</b></p>
      <p>There is a five-second check. Look at the other end of the same ranking. If small groups crowd both the top and the bottom, size is making the ranking, not quality.</p>
      <p><b>What to do.</b> Ask how many cases are behind the figure. Compare groups of similar size, or wait for more data, before reading anything into a jump or a ranking.</p>
      <p><b>Don’t confuse it with</b> the three above: here nobody was left out. Also keep it apart from A percentage without the numbers (Unit Four). There the percentage may be right but cannot be read without the real numbers. Here the real numbers are tiny. When a claim has both, you name this one, because Who was counted comes first.</p>`},

  {h:'A fair count',
   b:`<p><b>What it is.</b> The people or cases in the data were picked by chance from the whole group (or everyone was counted), the ones who did not answer were chased, and there are plenty of cases. Nobody important is missing. This is what a sound sample looks like.</p>
      <p><b>Example.</b> A hospital wants to know how patients felt about their stay. It picks 500 of last year’s 12,000 discharge records at random, phones each patient, and tries a second time if nobody answers. Because the choice was by chance, every patient had the same chance of being asked. The second call means the quiet patients are not left out.</p>
      <p><b>Looks like.</b> “Chosen at random from the full list.” “Called back up to five times.” “Everyone was counted, using the same records.” A large number of cases. A stated margin of error, which says how far the true figure could be from this one by chance.</p>
      <p><b>Catch it.</b> Run three checks. Was it picked by chance from the whole group, or was everyone counted? Were the people who did not answer chased? Are there enough cases that one or two would not swing the result? If all three are yes, <i>How did these people or cases get into the data?</i> <b>Nobody was filtered out: everyone had an equal chance of being counted.</b> <i>Who is missing, and would adding them change the answer?</i> <b>Nobody important is missing, and the group is big enough to trust.</b></p>
      <p><b>What to do.</b> Say it holds and move on to the next part. Do not invent a problem. A fair count says the right people are in the data. It does not say the claim is true, because the other three parts still need checking.</p>
      <p><b>Don’t confuse it with</b> Too few cases to trust. Both get the same answer to the first question, “Nobody was filtered out: everyone had an equal chance of being counted”. The second question separates them: “Nobody important is missing, and the group is big enough to trust” against “Nobody is missing, but the group is so small that one or two cases swing the result”.</p>`},

  {h:'A big sample does not fix a bad one',
   b:`<p><b>What it is.</b> Asking more of the wrong people gives you a more confident wrong answer. A bigger count shrinks the luck in the result. It does nothing about who is missing.</p>
      <p><b>Example.</b> Say you want to know whether people in your city like the bus. You ask 10,000 people at bus stops, and 90% say yes. You could ask 100,000 at bus stops and still get about 90%. But everyone you asked was already a bus user. The people who gave up on the bus and drive are not standing at the stops. Your very sure number answers a different question: “do bus users like the bus?”</p>
      <p><b>Sounds like.</b> “We surveyed forty thousand people.” “Over a million votes.” “Our huge database.”</p>
      <p><b>Catch it.</b> Ask: is the size being offered as the reason to trust it? If so, go back to <i>How did these people or cases get into the data?</i> If the answer is “They chose to take part”, “Only the ones that lasted were kept” or “Only the ones who replied were counted”, the size does not help. This is not an answer of its own in the key. It is the reason those answers stay wrong however big the count gets.</p>
      <p><b>What to do.</b> Ask how the people got in before you ask how many there are. Four hundred people picked by chance beat forty thousand volunteers.</p>
      <p><b>Don’t confuse it with</b> Too few cases to trust. Too few gives a jumpy answer that changes with one or two cases. Too many of the wrong people gives a steady answer that is wrong.</p>`},

  {h:'Side by side: who was counted',
   b:`<p>The key asks two questions about Who was counted, and each answer leads to one name.</p>
      <table class="k pair">
        <tr><th>How did these people or cases get into the data?</th><th>Who is missing, and would adding them change the answer?</th><th>The name</th></tr>
        <tr><td>Only the ones that lasted were kept</td><td>The ones that dropped out are missing, and they would pull the answer the other way</td><td><b>Counting only the survivors</b></td></tr>
        <tr><td>They chose to take part</td><td>The ones who stayed out are missing, and they feel differently from the ones who joined</td><td><b>A sample that picked itself</b></td></tr>
        <tr><td>Only the ones who replied were counted</td><td>The ones who did not reply are missing, and they feel differently from the ones who did</td><td><b>Many people did not reply</b></td></tr>
        <tr><td>Nobody was filtered out: everyone had an equal chance of being counted</td><td>Nobody is missing, but the group is so small that one or two cases swing the result</td><td><b>Too few cases to trust</b></td></tr>
        <tr><td>Nobody was filtered out: everyone had an equal chance of being counted</td><td>Nobody important is missing, and the group is big enough to trust</td><td><b>A fair count</b></td></tr>
      </table>`},

  {h:'Worked example: a council questionnaire',
   b:`<p>The claim: <i>“The council posted a questionnaire about the new recycling scheme to all 3,000 households. 240 returned it, and 85% were in favour. The council says the town backs the scheme.”</i></p>
      <p><b>Which part of the claim goes wrong first?</b> The figure is an estimate from the forms that came back, so the question is who is in it. The answer is <b>Who was counted</b>.</p>
      <p><b>How did these people or cases get into the data?</b> The council invited all 3,000 households, so nobody was left off the list, and this was not an open call. But only 240 forms came back, and the words “returned it” are what decides it. The answer is <b>Only the ones who replied were counted</b>. It is not “They chose to take part”, because a list of everyone was invited. It is not “Only the ones that lasted were kept”, because nobody dropped out.</p>
      <p><b>Who is missing, and would adding them change the answer?</b> 2,760 of the 3,000 households, 92%, never replied. Someone pleased or angry enough to fill in and post a form is not the same as someone who could not be bothered, so the 85% might change a lot if they were added. The answer is <b>The ones who did not reply are missing, and they feel differently from the ones who did</b>.</p>
      <p>The name is <b>Many people did not reply (non-response bias)</b>. What to do next: ask the council for the reply rate, and whether anyone followed up a sample of the silent households.</p>`}
  ],
  drill:{kind:'pick', key:'v2'} },

{ tag:'Three', title:'What the number counts',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can look at a figure that rose or fell and say whether the real thing changed, or only the number did.</p>
      <p>This turns up in work targets, crime and health statistics, rankings, test scores and “reported cases”. In each, the number is a reading of something real, and sometimes the reading changes while the real thing stands still.</p>
      <p>This unit teaches the answer <b>What the number counts</b> to the key’s first question, and the two questions the key then asks about it, in their exact words:</p>
      <ul>
        <li><b>What is this number really a count of?</b></li>
        <li><b>If the real situation had not changed at all, could this number still have changed?</b></li>
      </ul>
      <p>The sample is fine in this part and the arithmetic is fine. The only question is whether the number is still attached to the thing it is meant to show.</p>`},

  {h:'The test: could it move if nothing real changed?',
   b:`<p><b>What it is.</b> Picture the real situation standing perfectly still: same people, same weather, same sickness, same learning. Now ask whether the number could still change. Three things can make it: people working on the number itself, a change in the counting rule or the measuring tool, or looking harder. Each has its own name below. If none of them could move it, the number only moves when the real thing moves.</p>
      <p><b>Example.</b> Stand on a bathroom scale holding a bag of shopping. The number goes up and you have not gained a gram. The scale is working. The number just is not measuring only you.</p>
      <p><b>Sounds like.</b> “The figure has jumped since…” followed by something that changed how people behave, how things are counted or how hard anyone looked.</p>
      <p><b>Catch it.</b> Ask the key’s second question for this part: <i>If the real situation had not changed at all, could this number still have changed?</i> It has four answers: <b>Yes: people working on the number itself would do it</b>, <b>Yes: a change in the counting rule or the measuring tool would do it</b>, <b>Yes: looking harder would do it</b>, and <b>No: this number only moves when the real thing moves</b>.</p>
      <p><b>What to do.</b> When the answer is yes, work out which of the three it is, and look for a second measure that the cause cannot move.</p>
      <p><b>Don’t confuse it with</b> Who was counted. There, the problem is which cases are in the data. Here every case may be in the data and the number can still move on its own.</p>`},

  {h:'Hitting the target, missing the point (Goodhart’s law)',
   b:`<p><b>What it is.</b> Many things we care about, such as good service, learning or health, are hard to count. So we count something that stands in for them: calls answered, test scores, parcels delivered. Statisticians call the stand-in a “proxy”. A stand-in works until someone is judged or paid on it. Then people work on the number instead of the thing.</p>
      <p>The saying is Goodhart’s law: when a measure becomes a target, it stops being a good measure. The number goes up, the real thing may not, and the improvement is real only as an improvement of the number.</p>
      <p><b>Example.</b> A delivery firm pays drivers by parcels delivered per hour. Drivers start leaving parcels on doorsteps without ringing, and marking them “delivered” when nobody is home. Deliveries per hour rise. So do complaints and stolen parcels.</p>
      <p><b>Sounds like.</b> “Since we began tracking X, X is up 40%.” “Target met.” “Our ranking has improved.”</p>
      <p><b>Catch it.</b> Ask: is this number a stand-in for something harder to count, and is anyone judged or paid on it? If so, <i>What is this number really a count of?</i> <b>A stand-in for the thing people care about.</b> <i>If the real situation had not changed at all, could this number still have changed?</i> <b>Yes: people working on the number itself would do it.</b></p>
      <p><b>What to do.</b> Look for a second measure the target cannot easily fake, such as complaints, repeat orders or results, and check that it moved too. Ask what the target does not see.</p>
      <p><b>Don’t confuse it with</b> The counting rule or tool changed. There the rule for counting was rewritten. Here the rule is the same and the people changed what they do.</p>`},

  {h:'The counting rule or tool changed',
   b:`<p><b>What it is.</b> The word on the label stays the same, but what counts as one has been rewritten, or the tool has been swapped. Numbers counted the old way and the new way cannot be compared, so a jump can come from the change alone. This happens in two ways: a new rule for what counts, or a new tool for measuring it.</p>
      <p><b>Example.</b> A health agency lowers the weight line for “overweight”. Overnight, millions of adults are “overweight” who were not the day before, and not one of them gained a pound. A tool example: a weather station replaces its old thermometer, which read half a degree too high, with a new one. Its readings drop by half a degree on the day the new one goes in, and the weather has not changed at all.</p>
      <p><b>Sounds like.</b> “Under the new definition…” “Since the system was updated.” A sudden jump in a single year. A footnote about “revised methodology”.</p>
      <p><b>Catch it.</b> Ask: did the rule for what counts, or the tool used to measure it, change during the period? If so, <i>What is this number really a count of?</i> <b>The same word, counted under a new rule or with a new tool.</b> <i>If the real situation had not changed at all, could this number still have changed?</i> <b>Yes: a change in the counting rule or the measuring tool would do it.</b></p>
      <p><b>What to do.</b> Ask “was it counted the same way throughout?” Then compare only numbers counted the same way: redo the old figures under the new rule, or use a measure that never changed.</p>
      <p><b>Don’t confuse it with</b> Hitting the target, missing the point, where people changed what they do. And with More looking, not more happening, where the rule is the same and the effort changed. A new tool belongs here when it gives a different reading for the same thing, like a scale that reads two pounds heavy. A new tool that simply finds more cases that were always there, like a scanner, belongs under More looking, not more happening.</p>`},

  {h:'More looking, not more happening (detection effect)',
   b:`<p><b>What it is.</b> The harder you look for something, the more of it you find, even when the amount has not changed. More tests, more scans, an awareness campaign or an easier way to report all produce more recorded cases.</p>
      <p>With illness there is a second effect. Scans and tests also find cases that would never have caused any harm, such as slow-growing changes that a person lives with all their life. Finding them raises the count and does nothing for health. The check is to find a measure that looking harder cannot inflate. Say a town starts scanning for a slow-growing disease. Before the scans, 20 cases a year were found. After, 100 a year. Deaths from it were 4 a year before and 4 a year after. If the disease had really become five times as common, deaths would have risen. They did not, so the extra cases were there all along and found only because someone looked.</p>
      <p><b>Example.</b> A school launches an anonymous bullying hotline and a poster campaign. Reported bullying cases double in one term. Is there twice as much bullying, or twice as much telling? An easier way to report finds cases that were always there.</p>
      <p><b>Sounds like.</b> “Cases have soared since the screening program.” “Reports are up since the new app.” “Since the awareness campaign…”</p>
      <p><b>Catch it.</b> Ask: did anyone start looking harder, or make it easier to report? If so, <i>What is this number really a count of?</i> <b>Cases found, which depends on how hard anyone looked.</b> <i>If the real situation had not changed at all, could this number still have changed?</i> <b>Yes: looking harder would do it.</b></p>
      <p><b>What to do.</b> Find a measure that looking harder cannot inflate: deaths, hospital admissions, or a survey that asks a random sample directly. If that measure did not move, the extra cases were found, not new.</p>
      <p><b>Don’t confuse it with</b> Hitting the target, missing the point. Nobody is chasing a target here; the looking itself changed. And with The counting rule or tool changed: the definition of a case is the same, and the tool reads the same, but the effort to find cases is not. A new tool that spots more of what was always there, such as a more sensitive scanner, is looking harder, not reading differently.</p>`},

  {h:'A trustworthy measure',
   b:`<p><b>What it is.</b> The thing itself is measured, the same way every time, and nobody is paid on the number or looking harder than before. So the number only moves when the real thing moves. This is what a sound measure looks like.</p>
      <p><b>Example.</b> A runner times each Saturday lap of the same park route with the same watch. Her times have fallen from 31 minutes to 27 over a year. Nobody pays her on it, the route and watch have not changed, and nobody has started looking harder for faster laps. The time changes only when her running does.</p>
      <p><b>Looks like.</b> “Same tool, same method.” “Measured directly.” “Checked against a reference.” No reward riding on the number.</p>
      <p><b>Catch it.</b> Run three checks. Is it the thing itself, or a stand-in? Was it counted the same way throughout? Is anyone paid on it or looking harder? If the answers are good, <i>What is this number really a count of?</i> <b>The thing itself, counted the same way throughout.</b> <i>If the real situation had not changed at all, could this number still have changed?</i> <b>No: this number only moves when the real thing moves.</b></p>
      <p><b>What to do.</b> Accept the number and move on to the next part, What it is compared with. A trustworthy measure only says the number means what it seems to mean. The claim can still go wrong elsewhere.</p>
      <p><b>Don’t confuse it with</b> A fair count. That one is about who is in the data. This one is about what is being measured.</p>`},

  {h:'Side by side: what the number counts',
   b:`<p>The key asks two questions about What the number counts, and each answer leads to one name.</p>
      <table class="k pair">
        <tr><th>What is this number really a count of?</th><th>If the real situation had not changed at all, could this number still have changed?</th><th>The name</th></tr>
        <tr><td>A stand-in for the thing people care about</td><td>Yes: people working on the number itself would do it</td><td><b>Hitting the target, missing the point</b></td></tr>
        <tr><td>The same word, counted under a new rule or with a new tool</td><td>Yes: a change in the counting rule or the measuring tool would do it</td><td><b>The counting rule or tool changed</b></td></tr>
        <tr><td>Cases found, which depends on how hard anyone looked</td><td>Yes: looking harder would do it</td><td><b>More looking, not more happening</b></td></tr>
        <tr><td>The thing itself, counted the same way throughout</td><td>No: this number only moves when the real thing moves</td><td><b>A trustworthy measure</b></td></tr>
      </table>`},

  {h:'Worked example: a bus company',
   b:`<p>The claim: <i>“On-time arrivals are up from 74% to 96% since we began fining each depot when its buses run late. Our service has been transformed.”</i></p>
      <p><b>Which part of the claim goes wrong first?</b> Who was counted holds: every bus at every depot, thousands of trips. The part that breaks is the next one, <b>What the number counts</b>, and the words “since we began fining” give it away.</p>
      <p><b>What is this number really a count of?</b> “Arrives on time” stands in for good bus service, meaning buses that come when passengers need them. The answer is <b>A stand-in for the thing people care about</b>. It is not “The same word, counted under a new rule or with a new tool”, because nothing says the meaning of “on time” changed. It is not “Cases found”, because nobody is looking harder.</p>
      <p><b>If the real situation had not changed at all, could this number still have changed?</b> Yes. A depot facing a fine could pad its timetable so buses are “on time” against a looser schedule, or skip stops to catch up. The answer is <b>Yes: people working on the number itself would do it</b>.</p>
      <p>The name is <b>Hitting the target, missing the point (Goodhart’s law)</b>. What to do next: check a second measure that the fines cannot move, such as complaints, how long passengers wait at stops, or whether the timetable got longer.</p>`}
  ],
  drill:{kind:'pick', key:'v3'} },

{ tag:'Four', title:'What it is compared with',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can look at a number and say what is missing beside it: a group that did not get the treatment, the real numbers behind a percentage, how common the thing is to begin with, or the groups hidden inside a total.</p>
      <p>A number on its own tells you very little. “Ninety percent got better.” “Risk is up 18%.” “Hospital A loses more patients than hospital B.” The easiest way to mislead with a true number is to print it without the thing it should sit beside. You will meet this in health stories, ads, performance reports and league tables.</p>
      <p>This unit teaches the answer <b>What it is compared with</b> to the key’s first question, and the two questions the key then asks about it, in their exact words:</p>
      <ul>
        <li><b>What is the number compared with?</b></li>
        <li><b>What would you need to see to read it properly?</b></li>
      </ul>
      <p>Five names live here: four problems, each mended by supplying one specific thing, and one comparison that holds up.</p>`},

  {h:'No comparison group',
   b:`<p><b>What it is.</b> A result is given for people who got something, such as a treatment, a course or a gadget, with nothing to show what would have happened without it. Many things get better or change by themselves: colds clear, sore backs ease, sales rise in spring. A comparison group is the fair picture of “what would have happened anyway”. The benefit is the <i>gap</i> between the two groups, not the result in the first one.</p>
      <p><b>Example.</b> A herbal tea company says: “Nine in ten people who drank our tea for a week said their sore throat was gone.” Suppose sore throats clear within a week for about nine in ten people anyway. Then a group drinking plain hot water would also have nine in ten gone, and the tea’s benefit is 90 minus 90, which is nothing.</p>
      <p><b>Sounds like.</b> “Eight in ten users felt better.” “All our graduates found jobs.” “Since we started, complaints have dropped.” In each there is one figure and nothing beside it.</p>
      <p><b>Catch it.</b> Ask: does the claim show what happened to people who did not get it? If it gives one figure and nothing beside it, <i>What is the number compared with?</i> <b>Nothing: a single figure with nothing beside it.</b> <i>What would you need to see to read it properly?</i> <b>A group that did not get it.</b></p>
      <p><b>What to do.</b> Ask “compared with what?” Look for a group of the same kind that did not get it, and see what share of them improved. The benefit is the gap. For something in your own life, think what happened to you or to others when you did not do it.</p>
      <p><b>Don’t confuse it with</b> Picked at an extreme, then drifted back (Unit Five). The fix is the same, but there the group was chosen because it was at its worst, and the word “worst” (or “best”) in how it was chosen is the tell. Also keep it apart from A percentage without the numbers, where a comparison is given but only as a percentage.</p>`},

  {h:'A percentage without the numbers (relative risk)',
   b:`<p><b>What it is.</b> A percentage change tells you how big a change is compared with where it started. It does not tell you how many people are affected. Statisticians call the first the “relative” change and the second the “absolute” change. A rare thing can double and still be rare.</p>
      <p>Work it out with real numbers. Say a condition affects 2 people in 10,000. “Doubles your risk” sounds frightening, but double is 4 in 10,000: two extra people per 10,000. The same goes the other way. A pill that “halves your risk” of a condition that affects 2 in 10,000 takes it down to 1 in 10,000, so about 10,000 people have to take the pill to prevent one case. The method is always the same: percentage change multiplied by the starting figure gives the real change.</p>
      <p><b>Example.</b> Imagine a headline, invented for this card: “Tanning bed users have 50% more risk of a rare eye condition.” The condition affects 4 people in 10,000. Fifty percent of 4 is 2, so the risk rises to 6 in 10,000. That is two extra cases per 10,000 tanning bed users, or one extra case per 5,000.</p>
      <p><b>Sounds like.</b> “Up 50%.” “Halves the risk.” “Doubles your chance.” “A 300% increase.”</p>
      <p><b>Catch it.</b> Ask: is the change given only as a percentage, with no actual numbers? If so, <i>What is the number compared with?</i> <b>A change shown only as a percentage, with no actual numbers.</b> <i>What would you need to see to read it properly?</i> <b>The actual numbers behind the percentage.</b></p>
      <p><b>What to do.</b> Ask “out of how many?” Then turn it into “how many more (or fewer) people per hundred, or per ten thousand?” by multiplying the percentage by the starting figure. Judge the claim by that, not by the percentage.</p>
      <p><b>Don’t confuse it with</b> Too few cases to trust (Unit Two). There the swings come from a tiny group and are mostly luck. Here the percentage may be perfectly correct and is still unreadable without the starting figure. When a claim has both, you name the earlier part, which is Who was counted.</p>`},

  {h:'Ignoring how common it is (base-rate neglect)',
   b:`<p><b>What it is.</b> A test or an alarm that is “99% accurate” can still be wrong most of the time when it goes off, if the thing it looks for is rare. “Accurate” here means two things at once: it catches 99% of the real cases, and it wrongly flags 1% of the cases that are not real. How common the thing is to begin with is called the “base rate”. When the thing is rare, the false alarms from the huge number of non-cases outnumber the real cases.</p>
      <p>The easy way to see it is to imagine a big group and count heads. Do not reason in percentages. Count the real cases first, then the false alarms, then compare them.</p>
      <p><b>Example.</b> An airport scanner catches 99% of real weapons and wrongly flags 1% of harmless bags. Suppose 1 bag in 100,000 holds a weapon. Take 1,000,000 bags. Ten hold a weapon, and the scanner catches about ten of them. The other 999,990 are harmless, and 1% of them, about 10,000 bags, set off a false alarm. So there are about 10,010 alarms and only 10 are real. When the scanner beeps, the chance of a weapon is about 1 in 1,000, not 99%.</p>
      <p><b>Sounds like.</b> “The test is 99% accurate, so a positive means you almost certainly have it.” “The alarm never misses.”</p>
      <p><b>Catch it.</b> Ask: is an accuracy figure being read as the chance that this particular case is real, with no word on how common the thing is? If so, <i>What is the number compared with?</i> <b>An accuracy or hit rate, with no word on how common the thing is to begin with.</b> <i>What would you need to see to read it properly?</i> <b>How common the thing is to begin with.</b></p>
      <p><b>What to do.</b> Imagine 10,000 or a million cases. Count the real ones, then count the false alarms among the rest, then compare. Ask “how common is it?” before you trust any alarm.</p>
      <p><b>Don’t confuse it with</b> A percentage without the numbers. Both need real numbers to be read. Here the missing piece is how common the thing is to begin with. There it is the starting figure of a percentage change.</p>`},

  {h:'Totals that hide the groups (Simpson’s paradox)',
   b:`<p><b>What it is.</b> A total adds up groups that differ in size and in how hard their cases are. Compare two totals and you can get the opposite of what is true inside every group. This is not a trick: it happens whenever the groups are mixed differently in the two totals.</p>
      <p><b>Example.</b> Two couriers, Ana and Ben, and how many of their deliveries arrived on time:</p>
      <table class="k pair">
        <tr><th>On time</th><th>Ana</th><th>Ben</th></tr>
        <tr><td>Easy city routes</td><td>19 of 20 (95%)</td><td>81 of 90 (90%)</td></tr>
        <tr><td>Hard mountain routes</td><td>44 of 80 (55%)</td><td>5 of 10 (50%)</td></tr>
        <tr><td><b>All routes together</b></td><td><b>63 of 100 (63%)</b></td><td><b>86 of 100 (86%)</b></td></tr>
      </table>
      <p>Ana beats Ben on the easy routes and on the hard routes. Yet Ben looks far better overall. The reason is that Ana was given mostly hard routes and Ben mostly easy ones, so each total compares a different mix.</p>
      <p><b>Sounds like.</b> “Overall, X does worse than Y,” where X handles harder or different cases: a hospital, a school, a tutor, a drug trial.</p>
      <p><b>Catch it.</b> Ask: are these totals made of groups that are mixed differently? If so, <i>What is the number compared with?</i> <b>Totals that mix different groups together.</b> <i>What would you need to see to read it properly?</i> <b>The totals split back into their groups.</b></p>
      <p><b>What to do.</b> Ask for the figures split by whatever makes cases easy or hard, and compare inside each group, not between the totals.</p>
      <p><b>Don’t confuse it with</b> A third thing behind both (confounding, Unit Five). The test is this. Totals are being compared, and splitting them into groups reverses or changes the answer: that is Totals that hide the groups. A claim says one thing <i>causes</i> another, and an outside factor explains the link: that is a third thing behind both.</p>`},

  {h:'A fair comparison',
   b:`<p><b>What it is.</b> The two things being compared are alike in every way that matters except the one you are asking about. That means the same kind of group, the same period, counted the same way, and the same base: rates per 100 or per 100,000, not raw counts when the groups differ in size.</p>
      <p><b>Example.</b> Two bakeries compare their waste. Both count the loaves left unsold at closing every day for the same twelve weeks, and both report it per 100 loaves baked, because one bakes three times as much as the other. Bakery B wastes 4 loaves per 100 and bakery A wastes 9 per 100.</p>
      <p><b>Looks like.</b> “Same period.” “Same definition.” “Per 100,000 people.” “Similar groups.”</p>
      <p><b>Catch it.</b> Run three checks. Is it the same kind of group? The same period? Counted the same way and per the same base? If so, <i>What is the number compared with?</i> <b>A group of the same kind, measured the same way.</b> <i>What would you need to see to read it properly?</i> <b>Nothing: the comparison is already fair.</b></p>
      <p><b>What to do.</b> Say it is fair and move on. A fair comparison tells you the gap is real. It does not tell you why there is a gap. That is the question of the last part.</p>
      <p><b>Don’t confuse it with</b> A fair count. That one is about who is in the data. This one is about what the number is set beside.</p>`},

  {h:'Side by side: what it is compared with',
   b:`<p>The key asks two questions about What it is compared with, and each answer leads to one name.</p>
      <table class="k pair">
        <tr><th>What is the number compared with?</th><th>What would you need to see to read it properly?</th><th>The name</th></tr>
        <tr><td>Nothing: a single figure with nothing beside it</td><td>A group that did not get it</td><td><b>No comparison group</b></td></tr>
        <tr><td>A change shown only as a percentage, with no actual numbers</td><td>The actual numbers behind the percentage</td><td><b>A percentage without the numbers</b></td></tr>
        <tr><td>An accuracy or hit rate, with no word on how common the thing is to begin with</td><td>How common the thing is to begin with</td><td><b>Ignoring how common it is</b></td></tr>
        <tr><td>Totals that mix different groups together</td><td>The totals split back into their groups</td><td><b>Totals that hide the groups</b></td></tr>
        <tr><td>A group of the same kind, measured the same way</td><td>Nothing: the comparison is already fair</td><td><b>A fair comparison</b></td></tr>
      </table>`},

  {h:'Worked example: a potato chips headline',
   b:`<p>The claim, invented for this card: <i>“Eating a daily bag of potato chips raises your risk of a rare gut condition by 60%.”</i> You look the condition up and find it affects 5 people in every 100,000.</p>
      <p><b>Which part of the claim goes wrong first?</b> Nothing in the story suggests a problem with who was counted or with what the number counts, so the first visible break is the next part. The words “by 60%” with no real number give it away. The answer is <b>What it is compared with</b>.</p>
      <p><b>What is the number compared with?</b> The story does set the new risk beside the old risk, but only as a percentage. The answer is <b>A change shown only as a percentage, with no actual numbers</b>. It is not “Nothing”, because a comparison is given. It is not “An accuracy or hit rate”, because nobody is quoting a test.</p>
      <p><b>What would you need to see to read it properly?</b> The actual numbers behind the percentage. Work them out: 60% of 5 is 3, so the risk goes from 5 in 100,000 to 8 in 100,000. That is three extra people per 100,000 potato chip eaters, about one for every 33,000.</p>
      <p>The name is <b>A percentage without the numbers (relative risk)</b>. What to do next: judge the claim by “three more in 100,000”, not by “60%”.</p>`}
  ],
  drill:{kind:'pick', key:'v4'} },

{ tag:'Five', title:'What it says caused what',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can look at a claim that one thing causes another, name the specific other explanation that could produce the same pattern, and say what would settle it.</p>
      <p>“People who do X have more (or less) of Y, so X causes Y.” You meet this in health news, parenting advice, workplace studies and diets. A “pattern” here just means two things that go together: the people who do X also tend to have Y.</p>
      <p>“Correlation is not causation” (two things going together is not the same as one making the other happen) is true, but it is where most people stop. It names no alternative, so it cannot be checked, and it dismisses a sound study at the same cost as a shaky one. This unit gives you three named alternatives, and a way to settle each.</p>
      <p>This unit teaches the answer <b>What it says caused what</b> to the key’s first question, and the two questions the key then asks about it, in their exact words:</p>
      <ul>
        <li><b>What else could produce this same pattern?</b></li>
        <li><b>What would settle it?</b></li>
      </ul>`},

  {h:'A third thing behind both (confounding)',
   b:`<p><b>What it is.</b> Two things go together because a third thing pushes both, not because one causes the other. The third thing is sometimes called a “confounder”.</p>
      <p><b>Example.</b> On hot days ice-cream sales go up, and so do cases of sunburn. Ice cream does not burn anyone. Hot, sunny weather is behind both.</p>
      <p><b>Sounds like.</b> “Families who eat dinner together raise happier children, so family dinners make children happy.” (Families with the time, calm and stability for regular dinners may be the ones with happier children for other reasons.) “People who do X have more or less Y, so X causes Y.”</p>
      <p><b>Catch it.</b> Ask: is there something else, such as age, money, health or weather, that would make people do X and also have Y? If so, <i>What else could produce this same pattern?</i> <b>Something else that drives both at once.</b> <i>What would settle it?</i> <b>Comparing people who are alike on that other thing.</b></p>
      <p><b>What to do.</b> Name the third thing and say which way it pushes. “Weather” is an argument. “Something else” is not. Then see whether the pattern survives among people who are alike on it. Compare only hot days: do the ice-cream days still have more sunburn? If the link disappears among people alike on the other thing, it was the other thing all along.</p>
      <p><b>Don’t confuse it with</b> The cause runs the other way. There are only two things and the arrow is flipped. Here a third thing sits behind both. A quick test is to flip the sentence round: “Sunburn makes people buy ice cream” makes no sense, so look for a third thing, such as the weather. Keep it apart too from Totals that hide the groups (Unit Four), which is about comparing two totals, not about a claim that one thing caused another.</p>`},

  {h:'The cause runs the other way (reverse causation)',
   b:`<p><b>What it is.</b> Someone says A causes B, but really B causes A. The result is mistaken for the cause. The arrow is drawn backwards.</p>
      <p><b>Example.</b> “People who take sleeping pills sleep worse than people who do not, so sleeping pills cause bad sleep.” It is the people who already sleep badly who start taking the pills. The bad sleep came first.</p>
      <p><b>Sounds like.</b> “People who see a doctor are in worse health, so doctors make people ill.” “Students who get extra tutoring have lower grades, so tutoring hurts.” In both, the result (illness, low grades) could easily have come first and sent people to the thing.</p>
      <p><b>Catch it.</b> Ask: could the result have come first and made people do the thing? If so, <i>What else could produce this same pattern?</i> <b>It could run the other way: the result causes the thing.</b> <i>What would settle it?</i> <b>Checking which one came first.</b></p>
      <p><b>What to do.</b> Find out which came first. Look at the same people before they started: did the pill takers already sleep badly before their first pill? Follow people over time instead of comparing them once.</p>
      <p><b>Don’t confuse it with</b> A third thing behind both. Here there are only two things and the arrow runs the wrong way. There, a third thing pushes both. A quick test is to flip the sentence round: “Bad sleep makes people take sleeping pills” makes sense, so the arrow may run backwards. If the flipped version makes no sense, look for a third thing instead.</p>`},

  {h:'Picked at an extreme, then drifted back (regression to the mean)',
   b:`<p><b>What it is.</b> Any measurement is part real and part luck on the day. If you pick the worst (or best) results from one round, you have also picked the unluckiest (or luckiest). In the next round the luck is new, so on average those results land closer to normal. (The “mean” in the name is just the average.) Nothing caused that. It is how measuring works.</p>
      <p>Here are numbers. Say a class of students all have the same ability, and each would score about 70 on a typical test. On any one test, luck adds or takes away up to 10 points. On test one, the five lowest scores are 60 to 62: those five were the unluckiest. On test two their luck is new, so they score about 70 on average. That is a 9-point “improvement” with no teaching at all.</p>
      <p><b>Example.</b> A coach shouts at the player who played worst this week, and next week the player does better: “shouting works”. But the worst week of anyone’s season is usually followed by a more ordinary one. The same thing works the other way: the best week is usually followed by a worse one, and “praise backfires” looks true.</p>
      <p><b>Sounds like.</b> “We took the worst X, did Y, and they improved.” “After a record-breaking season, he slumped.”</p>
      <p><b>Catch it.</b> Ask: was the group picked because it was the worst (or best), and then measured again? If so, <i>What else could produce this same pattern?</i> <b>The group was picked for being at an extreme, and drifted back.</b> <i>What would settle it?</i> <b>Tracking an equally extreme group that was left alone.</b></p>
      <p><b>What to do.</b> Ask for, or set up, an equally extreme group that was left alone, and compare. Credit the treatment only with the gap between the two groups’ changes.</p>
      <p><b>Don’t confuse it with</b> No comparison group (Unit Four). The fix is the same, but the tell is how the group was chosen: the word “worst” or “best”. A before-and-after on a group picked that way belongs here, under What it says caused what, because the group is set beside its own earlier scores. What fails is the explanation of the change.</p>`},

  {h:'A cause that holds up',
   b:`<p><b>What it is.</b> When a coin flip decides who gets the thing and who does not, the two groups end up alike on average in everything: age, health, money, motivation, even things nobody thought to measure. So the only built-in difference between the groups is the thing being tested. If the results differ, it can only be the thing, or luck. This is called random assignment.</p>
      <p>Do not mix it up with random sampling. Random sampling is about who gets <i>into</i> the data. Random assignment is about who gets <i>which treatment</i> once they are in. A trial of volunteers can still be a fair comparison, because the volunteers were split by chance. The result then holds for people like those volunteers, and it is a separate question whether it holds for everyone.</p>
      <p><b>Example.</b> A school lists the 120 students who want to try a reading app and flips a coin for each: heads, the app; tails, normal lessons. After a term the app group has gained 6 points more. Pupils chose to be on the list, so the result speaks for students like them. Inside the list, the coin made the two groups alike.</p>
      <p><b>Looks like.</b> “Randomly assigned.” “A coin flip.” “A lottery.” “A randomized trial” (people split into groups by chance). “A placebo” (a dummy treatment given to the other group). “Both groups followed up in the same way.” “The person measuring did not know who got what.”</p>
      <p><b>Catch it.</b> Ask: was it decided by chance who got the thing, and were both groups tracked the same way? If so, <i>What else could produce this same pattern?</i> <b>Nothing plausible: the way it was set up rules the others out.</b> <i>What would settle it?</i> <b>It is already settled: people were assigned by chance, so the other explanations are closed off.</b></p>
      <p><b>What to do.</b> Accept the cause as far as the people in the trial go. Then check the leftovers. Were people lost from the two groups in different numbers? Did the people measuring know who got what? If those are fine, the cause holds up.</p>
      <p>Where no trial is possible, strong evidence can still build up: a measured outside factor allowed for, a bigger effect with a bigger dose, a believable reason for how one could cause the other. But this key keeps the answer “A cause that holds up” for cases where the set-up itself closes off the other explanations. Without that, the honest answer is that the alternatives are not ruled out yet.</p>
      <p><b>Don’t confuse it with</b> a large survey. A survey that picks people by chance tells you about a group. It does not tell you what caused anything, because nobody was assigned to anything.</p>`},

  {h:'Side by side: what it says caused what',
   b:`<p>The key asks two questions about What it says caused what, and each answer leads to one name.</p>
      <table class="k pair">
        <tr><th>What else could produce this same pattern?</th><th>What would settle it?</th><th>The name</th></tr>
        <tr><td>Something else that drives both at once</td><td>Comparing people who are alike on that other thing</td><td><b>A third thing behind both</b></td></tr>
        <tr><td>It could run the other way: the result causes the thing</td><td>Checking which one came first</td><td><b>The cause runs the other way</b></td></tr>
        <tr><td>The group was picked for being at an extreme, and drifted back</td><td>Tracking an equally extreme group that was left alone</td><td><b>Picked at an extreme, then drifted back</b></td></tr>
        <tr><td>Nothing plausible: the way it was set up rules the others out</td><td>It is already settled: people were assigned by chance, so the other explanations are closed off</td><td><b>A cause that holds up</b></td></tr>
      </table>`},

  {h:'Worked example: a mindfulness course',
   b:`<p>The claim: <i>“Employees who took our optional mindfulness course were promoted twice as often as those who did not, so the course boosts careers.”</i> The memo gives the numbers: 12 of the 60 who took the course were promoted (20%), against 40 of the 400 who did not (10%).</p>
      <p><b>Which part of the claim goes wrong first?</b> We try the parts in order. Who was counted: every employee is in, so that holds. What the number counts: promotions, a plain count. What it is compared with: course-takers beside everyone else, with real numbers given, so that holds well enough. The break is the leap in “so the course boosts careers”. The answer is <b>What it says caused what</b>.</p>
      <p><b>What else could produce this same pattern?</b> Ambitious, high-performing people are the ones who sign up for an optional course, and they are also the ones who get promoted. The answer is <b>Something else that drives both at once</b>. It is not “It could run the other way”, because a promotion that has not happened yet cannot make someone sign up. It is not “The group was picked for being at an extreme”, because nobody was picked as the worst or best.</p>
      <p><b>What would settle it?</b> <b>Comparing people who are alike on that other thing</b>: compare course-takers with non-takers who had the same last performance rating, and see whether the gap remains. Better still, if seats were oversubscribed, draw lots for them.</p>
      <p>The name is <b>A third thing behind both (confounding)</b>. What to do next: ask for the comparison among people with the same performance rating.</p>`}
  ],
  drill:{kind:'pick', key:'v5'} },

{ tag:'Six', title:'Claims that skip the questions',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can spot a claim that skips the questions, and avoid the two opposite mistakes: swallowing a number whole, or waving it away.</p>
      <p>Many of the claims you meet in a day were never built to survive the key: a lone figure in an ad, an average that describes nobody, a famous name standing in for evidence, a reply of “correlation is not causation” that engages with nothing.</p>
      <p>This unit uses the key’s first question, <b>Which part of the claim goes wrong first? (If none does, which part does it rest on?)</b>, on the claims of ordinary life, and it adds two extra checks the key has no name for: an average is not a typical case, and a good source is not a good design.</p>
      <p>The practice at the end of the unit is a set of faulty claims. For each one, say out loud which question it skips, then reveal the answer.</p>`},

  {h:'A lone figure',
   b:`<p><b>What it is.</b> A claim that is shaped like a number but gives you nothing to check. It sounds specific, and the specific sound is mistaken for evidence. Run the key on it and it breaks at once: who was counted, and what is the number compared with?</p>
      <p>A lone figure can also be a number for something nobody can count. “Hair that is 40% healthier” does not say how healthier is measured, or 40% more than what. When you cannot say what is being counted, the key’s question <i>What is this number really a count of?</i> has no answer yet.</p>
      <p><b>Example.</b> “Four out of five cat owners say their cat prefers it.” Four out of five of whom: five owners, or a thousand? How were they picked? Prefers it to what: to nothing, to another brand, to last month’s food?</p>
      <p><b>Sounds like.</b> “Four out of five say…” “Scientists agree.” “Customers report feeling younger.” “30% more energy.”</p>
      <p><b>Catch it.</b> Ask: of whom, asked what, compared with what, and counted how? If the claim cannot answer, the key’s question <i>What is the number compared with?</i> gets the answer <b>Nothing: a single figure with nothing beside it.</b></p>
      <p><b>What to do.</b> Ask those questions out loud. If the claim cannot answer them, treat it as a slogan, not as evidence. You do not need to say it is false. You only need to say it is not evidence yet.</p>
      <p><b>Don’t confuse it with</b> a claim that gives its details and then fails them, which is what Units Two to Five practiced. A lone figure gives you no details to fail. You cannot say it is wrong, only that it has not shown anything.</p>`},

  {h:'An average is not a typical case',
   b:`<p><b>What it is.</b> The “average” (the mean) is worked out by adding everything up and dividing by how many there are. It can describe nobody at all. A few very high or very low values pull it. The “median” is the middle one: half the cases are above it and half below.</p>
      <p><b>Example.</b> A team of five earns $30,000, $30,000, $30,000, $30,000 and $130,000. The average is $50,000. Nobody earns anything close to $50,000: four earn $30,000 and one earns $130,000. The median is $30,000.</p>
      <p><b>Sounds like.</b> “The average salary here is $50,000.” “The average family spends…” “On average, customers wait…”</p>
      <p><b>Catch it.</b> Ask: is an average being treated as what most cases look like? The key has no name for this. The nearest question is <i>What is this number really a count of?</i> An average counts the middle of a spread, not what a typical case looks like. If you find yourself asking “does anyone actually look like this?”, you have found it.</p>
      <p><b>What to do.</b> Ask for the spread, or for the median, and how many cases are near the average.</p>
      <p><b>Don’t confuse it with</b> A percentage without the numbers. There a starting figure is missing. Here the average is worked out correctly and still misdescribes the group.</p>`},

  {h:'Trust the design, not the source',
   b:`<p><b>What it is.</b> Who published a claim is not the same as how it was built. A famous journal, a university, an expert or “studies show” can all carry a study that picked itself, compared nothing, or confused cause. Peer review means other experts checked that the work was done sensibly. It does not make a design answer a question it cannot answer.</p>
      <p><b>Example.</b> A respected newspaper prints “Scientists find chocolate lovers are slimmer”. The study behind it was a survey in which readers emailed in about their weight and their chocolate habits. The newspaper is respected. The sample picked itself.</p>
      <p><b>Sounds like.</b> “Published in a top journal.” “A Harvard study.” “Experts agree.”</p>
      <p><b>Catch it.</b> Ask: does the reason to trust it point to how the study was done, or only to who said it? The key has no name for this. It is a reminder to ask the key’s questions of the study itself.</p>
      <p><b>What to do.</b> Ask, of the study: who was counted, what was measured, what it was compared with, and what it says caused what. A good source is a reason to look at a claim, not a reason to stop looking.</p>
      <p><b>Don’t confuse it with</b> distrusting a source (“they would say that”). That is the opposite mistake, and the next card covers it.</p>`},

  {h:'Swallowing and dismissing: two opposite mistakes',
   b:`<p><b>What it is.</b> Swallowing is accepting any figure that sounds specific. Dismissing is waving a claim away with a stock phrase, without asking a question that could come back with an answer: “correlation is not causation”, “you can prove anything with statistics”, “that study was funded by someone”, “it’s cherry-picked” (picking only the results that suit). Both skip the questions. Naming a problem is not the same as showing a claim is wrong. “It’s a confounder” raises a possibility. It is not yet an objection.</p>
      <p><b>Example.</b> A study finds that people who run regularly have lower blood pressure. A colleague says “correlation is not causation” and moves on. He has not said what else could explain it. If he says “people who are already healthy take up running, and healthy people have lower blood pressure”, now there is something to check.</p>
      <p><b>Sounds like.</b> “That study proves nothing.” “Statistics can say anything.” “Who paid for it?” as the whole reply.</p>
      <p><b>Catch it.</b> Ask yourself: did I name a specific alternative, or did I just reach for a phrase? Both mistakes have the same shape. Neither asks a question that could come back with an answer.</p>
      <p><b>What to do.</b> Use the key’s question: <i>What else could produce this same pattern?</i> Name the other explanation, say which way it would push, and judge whether it is big enough to explain the result. Finding no problem is not proof that a claim is true either. Use the questions first on claims you like and on your own, because it is much easier to find problems in claims you dislike.</p>
      <p><b>Don’t confuse it with</b> honest doubt. “Who was counted?” is a question and can be answered. “I don’t trust it” is a verdict and cannot.</p>`},

  {h:'Side by side: claims that skip the questions',
   b:`<p>Each of these claims skips one of the key’s questions. The right reply is a question, not a verdict.</p>
      <table class="k pair">
        <tr><th>The claim looks like</th><th>The question it skips</th><th>What to ask</th></tr>
        <tr><td>A lone figure: “four out of five say…”</td><td>Who was counted? What is the number compared with? (<b>Nothing: a single figure with nothing beside it</b>)</td><td>Of whom, asked what, compared with what?</td></tr>
        <tr><td>An average treated as typical</td><td>What is this number really a count of?</td><td>How are the cases spread? What is the median?</td></tr>
        <tr><td>A famous source standing in for evidence</td><td>All four parts, asked of the study itself</td><td>How were people picked, what was measured, what was it compared with, what caused what?</td></tr>
        <tr><td>A stock phrase that waves a claim away</td><td>What else could produce this same pattern?</td><td>Which other explanation, pushing which way?</td></tr>
      </table>`},

  {h:'Worked example: a sleep tea',
   b:`<p>The claim: <i>“Our sleep tea works: in a survey of customers who re-ordered, 4 in 5 say they sleep better.”</i></p>
      <p><b>Which part of the claim goes wrong first?</b> We try the parts in order and the first one breaks: <b>Who was counted</b>. The words “customers who re-ordered” give it away.</p>
      <p><b>How did these people or cases get into the data?</b> They are in because they came back for more. The answer is <b>Only the ones that lasted were kept</b>. It is not “They chose to take part”, because the survey asked a defined group, and it is not “Only the ones who replied were counted”, because the picking happened before anyone was asked.</p>
      <p><b>Who is missing, and would adding them change the answer?</b> Everyone who tried the tea once and did not buy again. If it did nothing for them, they would not re-order. The answer is <b>The ones that dropped out are missing, and they would pull the answer the other way</b>.</p>
      <p>The name is <b>Counting only the survivors (survivorship bias)</b>. The claim has other problems: “4 in 5” has nothing beside it, and “works” jumps to a cause. We do not list them, because the earliest part that breaks is the one to name. What to do next: ask for a survey of everyone who bought the tea, including those who never re-ordered, and for a group who did not take it.</p>`},

  {h:'What to ask when you meet a real claim',
   b:`<p><b>What it is.</b> You now have the whole key. In real life you rarely get a screen with steps. You get a sentence. These are the questions to run in your head, in order, in about a minute.</p>
      <ol>
        <li><b>Who was counted.</b> Who is in this, how did they get in, who is missing, and are there enough of them?</li>
        <li><b>What the number counts.</b> Is it the thing itself? Could it move if nothing real had changed, because of a target, a new rule or more looking?</li>
        <li><b>What it is compared with.</b> Beside what? Out of how many? How common is the thing to begin with? Are there groups hidden inside a total?</li>
        <li><b>What it says caused what.</b> What else could produce this same pattern, and what would settle it?</li>
      </ol>
      <p><b>Example.</b> A colleague forwards a headline: “Tea drinkers are 30% less likely to die early.” Who was counted: how were the tea drinkers and the others found? Compared with what: 30% of what, and out of how many? Caused what: people who drink tea may also live differently in other ways. You do not need to know the answers. Asking the questions is the skill, and it takes a minute.</p>
      <p><b>Sounds like.</b> A headline: “Study finds…”. An ad: “nine in ten…”. A work metric: “tickets closed per hour is up”. A post: “this changed my life”.</p>
      <p><b>Catch it.</b> Ask: which of the four questions could this claim not answer if I pushed? That is the part to name. For a headline, push on who was counted and what it was compared with. For an ad, push on of whom and compared with what. For a work metric, push on whether it could move if nothing real changed. For a post, push on who is not posting.</p>
      <p><b>What to do.</b> Stop at the first part that breaks, and say what you would need to see to change your mind. If every part holds, say that too.</p>
      <p><b>Don’t confuse it with</b> a way to win arguments. Run it first on the claims you like and on your own, and say so out loud when a claim holds up.</p>`}
  ],
  drill:{kind:'err'} },

{ tag:'Seven', title:'Putting it all together',
  cards:[
  {h:'What this unit is for',
   b:`<p class="lead">By the end of this unit you can take a claim you have never seen, run the key’s questions in order, and either name the problem or say that the claim holds up.</p>
      <p>The earlier units taught the parts one at a time and told you which part each case belonged to. Here nobody tells you. Each specimen is a claim as you would meet it in real life. You decide the part, answer two questions about it, and then name it. That is exactly what you do with a real claim, with the screen replaced by your head.</p>
      <p>The three questions, in their exact words, are: <b>Which part of the claim goes wrong first? (If none does, which part does it rest on?)</b>, then the two questions for that part, which Units Two to Five taught, and then the name.</p>`},

  {h:'How the screen works',
   b:`<p>Each specimen (a claim to check) shows the claim, a list of all 18 names, and the questions one after another.</p>
      <ol>
        <li>Read the claim.</li>
        <li>Answer the first question: <b>Which part of the claim goes wrong first? (If none does, which part does it rest on?)</b></li>
        <li>Answer the two questions for that part. The second one unlocks when you have answered the first.</li>
        <li>Name it, from the names that are left.</li>
      </ol>
      <p>The list of names near the top is a readout, not a control. Nothing in it can be tapped. It crosses off the names your answers have ruled out. After your first answer, only the names for that part are left. After you answer both of the part’s questions, one name is left.</p>
      <p>Your name and your route are scored separately. The route is your answers to the questions. A right name reached by a wrong route counts as a miss, because a name you cannot reach with the questions will not survive a claim you have not seen before.</p>
      <p>Read the claim for its giveaway words first: “since the new system”, “of those who replied”, “up 200%”, “so”. Pick the part they point to, then answer the questions from the case, not from the look of the options. When you finish a specimen you see the answer, why (the questions in order, with the words in the case that decide each one), and what would change the verdict. In the quick drills of Units One to Five the part was given. Here you choose it.</p>`},

  {h:'When the claim holds up',
   b:`<p><b>What it is.</b> About one claim in five holds up, and the key has an answer for it at every part. Saying that a claim holds up is an answer like any other, and you are scored on it. When nothing goes wrong, answer the first question with the part the claim rests on, and then give the “holds up” answers to that part’s two questions.</p>
      <p><b>Example.</b> A shop counts customers through the same door counter every day, and the monthly total has fallen 15% since the road works began. The claim rests on What the number counts, and that part holds: it is the thing itself, counted the same way throughout, and no one is paid on it or looking harder.</p>
      <table class="k pair">
        <tr><th>If the claim rests on…</th><th>The two answers are…</th><th>The name</th></tr>
        <tr><td><b>Who was counted</b></td><td>Nobody was filtered out: everyone had an equal chance of being counted. Nobody important is missing, and the group is big enough to trust.</td><td><b>A fair count</b></td></tr>
        <tr><td><b>What the number counts</b></td><td>The thing itself, counted the same way throughout. No: this number only moves when the real thing moves.</td><td><b>A trustworthy measure</b></td></tr>
        <tr><td><b>What it is compared with</b></td><td>A group of the same kind, measured the same way. Nothing: the comparison is already fair.</td><td><b>A fair comparison</b></td></tr>
        <tr><td><b>What it says caused what</b></td><td>Nothing plausible: the way it was set up rules the others out. It is already settled: people were assigned by chance, so the other explanations are closed off.</td><td><b>A cause that holds up</b></td></tr>
      </table>
      <p><b>Looks like.</b> “Chosen at random from the full list.” “The same tool, the same method.” “Same period, same definition.” “Assigned by a coin flip.”</p>
      <p><b>Catch it.</b> Ask: can I point to a specific problem in any part? If not, which part is this claim leaning on?</p>
      <p><b>What to do.</b> Say it holds, and say why in one sentence. Do not go hunting for a problem that is not there.</p>
      <p><b>Don’t confuse it with</b> a claim that is proven true. Finding no problem means no specific problem turned up. It does not say how big the effect is, or rule out a fluke.</p>`},

  {h:'Worked example: small farms',
   b:`<p>The claim: <i>“Small farms are vanishing: the number of farms under 20 acres is down 30% since 2014. (A footnote says that since 2014 a plot counts as a farm only if it sold at least $1,000 of produce a year.)”</i></p>
      <p><b>The screen.</b> All 18 names are showing. You answer the first question, <b>Which part of the claim goes wrong first?</b> We try the parts in order. Who was counted looks fine: it is a national count. The footnote gives the rule away: what counts as a farm changed in 2014. So the answer is <b>What the number counts</b>. The readout drops from 18 names to the 4 for that part.</p>
      <p><b>What is this number really a count of?</b> The word “farm” stayed, but it now means something narrower. The answer is <b>The same word, counted under a new rule or with a new tool</b>. It is not “A stand-in for the thing people care about”, because nobody is being paid on the count, and it is not “Cases found”, because nobody is looking harder.</p>
      <p><b>If the real situation had not changed at all, could this number still have changed?</b> Yes. Tiny plots that sell less than $1,000 of produce stopped counting as farms, so the figure falls even if no plot has gone anywhere. The answer is <b>Yes: a change in the counting rule or the measuring tool would do it</b>.</p>
      <p><b>Name it.</b> <b>The counting rule or tool changed</b>. After you record it, the last box tells you what would change the verdict: recount the old years under the new rule. If the count of farms that sold at least $1,000 is still down 30%, small farms really are vanishing.</p>`},

  {h:'What would change this verdict',
   b:`<p><b>What it is.</b> After every specimen the last box says what evidence would change the answer. For a claim that fails, it says what would rescue it. For a claim that holds, it says what would break it. This is “what would change my mind”, and it is the most reusable thinking in the course.</p>
      <p><b>Example.</b> For a claim that a drug works because 3 in 10 patients improved, the box might say: if a similar group on a waiting list improved far less, the claim would stand. For a trial that looks sound, it might say: if one group lost far more people than the other, the result would be in doubt.</p>
      <p><b>Sounds like.</b> “I would believe it if…” “It would change my mind if…” “Show me the same figure with the old rule.”</p>
      <p><b>Catch it.</b> When you doubt a claim, ask yourself: what would I need to see to change my mind? If nothing would, you are not examining the claim, you are rejecting it.</p>
      <p><b>What to do.</b> Say it out loud when you object. “I would believe it if the same figure held up under the old rule” turns an objection into a request that someone can answer.</p>
      <p><b>Don’t confuse it with</b> proof. It names the next piece of evidence to look for. It does not promise that the evidence exists.</p>`}
  ],
  drill:{kind:'det'} }
];

const STATISTICS = {
  id:'stats', name:'Statistical Claims', rev:1,
  blurb:'Check any claim made with numbers in a minute: who was counted, what the number counts, what it is compared with, and what it says caused what.',
  intro:'Check each claim by asking which of four parts goes wrong first: who was counted, what the number counts, what it is compared with, or what it says caused what. Then answer two questions about that part and name the problem. A right name reached by the wrong questions is scored as a miss.',
  falsLabel:'What would change this verdict',
  outcomes: STATS_OUTCOMES,
  determination: { gateCode:'S1', steps:[STATS_GATE], stepsByGate:STATS_STEPS_BY_GATE },
  determinationIntro:`<p>You are checking each claim, one part at a time. Find the part that goes wrong first, answer the two questions about it, and name the problem last.</p>
      <ol>
        <li>Read the claim.</li>
        <li><b>First question</b>: which part of the claim goes wrong first? If none does, which part does it rest on? Several parts may be faulty. Name the earliest, because a break early on spoils everything after it.</li>
        <li><b>Next two questions</b>: they belong to the part you picked. The second unlocks when you answer the first.</li>
        <li><b>Name it</b>, and record your answer.</li>
      </ol>
      <p>The list of names between the claim and the questions is a readout, not a control. It crosses off names your answers have ruled out. Nothing in it can be tapped.</p>
      <p>About one claim in five holds up, and every part has an answer for that. Saying that a claim holds up is an answer like any other.</p>
      <p>Your name and your route are scored separately. A right name from the wrong answers counts as a miss.</p>`,
  specimens: STATS_SPECIMENS,
  quickDrills: [
    {key:'v1', title:'Which part goes wrong', prompt:'Which part of the claim goes wrong first? (If none does, which part does it rest on?)', items:V1_DRILL, opts:V1_OPTS},
    {key:'v2', title:'Who was counted', prompt:'What is the problem with who was counted, if any?', items:V2_DRILL, opts:V2_OPTS},
    {key:'v3', title:'What the number counts', prompt:'What is the problem with what the number counts, if any?', items:V3_DRILL, opts:V3_OPTS},
    {key:'v4', title:'What it is compared with', prompt:'What is the problem with what it is compared with, if any?', items:V4_DRILL, opts:V4_OPTS},
    {key:'v5', title:'What it says caused what', prompt:'Which other explanation fits, or does the cause hold up?', items:V5_DRILL, opts:V5_OPTS}
  ],
  errDrill: STATS_ERR,
  course: STATS_COURSE,
  tabs: [
    {key:'course', label:'Course'}, {key:'det', label:'Determination'},
    {key:'v1', label:'Which part goes wrong'}, {key:'v2', label:'Who was counted'}, {key:'v3', label:'What the number counts'},
    {key:'v4', label:'What it is compared with'}, {key:'v5', label:'What it says caused what'},
    {key:'err', label:'Faulty claims'}, {key:'reference', label:'Reference'}
  ],
  caveats:`<ul>
    <li><b>Naming a problem is not the same as showing a claim is wrong.</b> “It’s a confounder” raises a possibility, not an objection. Name the other explanation, say which way it would push, and judge whether it is big enough to explain the result.</li>
    <li><b>Real claims often go wrong in several places at once.</b> The key asks for the earliest part so that you give one clear answer. That is a way of teaching, not a law about how claims fail.</li>
    <li><b>Professional statisticians have fixes for all of these.</b> They reweight answers to match the whole group, adjust for outside factors, and test how much a hidden factor would need to matter. A problem that has been measured and handled is in a different category from one that was never mentioned.</li>
    <li><b>Finding no problem is not proof that a claim is true.</b> The key finds specific problems. A claim can pass all four parts and still be a fluke or too small to matter.</li>
    <li><b>This key is about whether a claim was built soundly, not about how big the effect is.</b> It says nothing about whether a real effect is large enough to act on, which is often the question that matters most.</li>
    <li><b>Problems with a whole body of research sit outside the key.</b> Studies that only get published when they find something, and researchers who try many comparisons until one works, are properties of how research was produced, not of the sentence in front of you. A single well-built study from a badly built field will pass this key cleanly.</li>
    <li><b>These questions can be used as weapons.</b> “Cherry-picked”, “biased sample” and “correlation is not causation” are often used to dismiss findings people dislike. Using the key only on claims you dislike is the way this course is most likely to go wrong. Use it first on claims you like and on your own.</li>
  </ul>`
};

FC.legacy('stats', STATISTICS);

// Statistical Claims, Unit Six: drill cases for stage four, varied and misleading (the most noticeable thing in the story is not what decides it).
// echo names a teaching case of a DIFFERENT name whose story this one is built to bring back, so that the second look ("does it look like a case
// you know?") is practised where the likeness points the wrong way. also lists an answer the case shows as well as its own, which loses to its own
// by a tie-break in the key. Field guide: see u1.cases-drill-1.js.

FC.cases('stats', 'u6', [

  /* ---------- Varied ---------- */
  { id: 'k-r-trucks', use: 'drill', tier: 'varied', setting: 'work', topic: 'speed monitors in a trucking fleet',
    text: "A trucking firm installs speed monitors in all of its 85 trucks. In the six months after, fuel use per 100 miles falls from 14.1 gallons to 13.4. 'The monitors save fuel,' the fleet manager says. The firm has no trucks without monitors, and fuel prices and routes also changed in those six months.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'The monitors save fuel', K1: 'The firm has no trucks without monitors' },
    reason: { S1: 'The figures are given for all 85 trucks, and the fleet manager says {cue:S1}. That is a claim of cause.',
              K1: 'The only figures are for trucks that got the monitors, before and after: {cue:K1}. Fuel prices and routes changed in the same months, and any of those could move fuel use, so nothing shows what the same trucks would have used with no monitors.' },
    not: { outcome: 'regression', why: 'The firm did not pick trucks because they used the most fuel. Every truck got a monitor.' },
    wouldChange: 'If the firm had fitted monitors in 40 trucks drawn by lottery and left 45 as they were, the 45 would show what fuel use does anyway.' },

  { id: 'k-r-pressure', use: 'drill', tier: 'varied', setting: 'health', topic: 'a salt booklet for the highest blood pressure readings', also: ['anyway'],
    text: "A clinic picks the 30 patients with the highest blood pressure readings at a Monday screening and gives them a salt-reduction booklet. At a second screening a month later, their readings average 9 points lower. 'The booklet lowers blood pressure,' the clinic says.",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'The booklet lowers blood pressure', K1: 'picks the 30 patients with the highest blood pressure readings at a Monday screening' },
    reason: { S1: 'The readings are given, and the clinic says {cue:S1}. That is a claim of cause.',
              K1: 'The 30 were picked for having the highest readings on one day: the clinic {cue:K1}. A reading is a person’s usual pressure plus how that day went, so the highest 30 on one Monday are partly the people who had a high day, and their readings drift back toward usual with no booklet.' },
    not: { outcome: 'nocontrol', why: 'No patient went without the booklet, and the case shows that too. But the 30 were picked at their highest on one day, and when a case shows both, the key’s answer is {a:K1.extreme}.' },
    wouldChange: 'If the clinic had given the booklet to 15 of the 30 by lottery and not to the other 15, the 15 without it would show how much comes back anyway.' },

  { id: 'k-r-studygroup', use: 'drill', tier: 'varied', setting: 'learning', topic: 'study groups and university grades',
    text: "A university says: 'Students who joined a study group earned an average GPA of 3.4, against 2.9 for students who did not, so study groups raise grades.' The 300 who joined chose to, and the 700 who did not, did not. The registrar’s data show that 240 of the 300 who joined live on campus, against 210 of the 700 others, and that campus residents average a 3.3 GPA whether or not they join a group.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'so study groups raise grades', K1: 'The registrar’s data show that 240 of the 300 who joined live on campus, against 210 of the 700 others' },
    reason: { S1: 'The numbers are given for both groups, and the university says {cue:S1}. That is a claim of cause.',
              K1: 'Students chose whether to join, and {cue:K1}. Campus residents have high grades with or without a group, so something else that differs between the groups could bring about the result alone.' },
    not: { outcome: 'cause_ok', why: 'The students chose whether to join, so a draw did not form the groups. Where students live is something else that differs between them, which is {o:confound}.' },
    wouldChange: 'If 300 students had been drawn by lottery into study groups and the others left alone, and the grades still differed, the answer would be {a:S1.holds}.' },

  { id: 'k-r-staff', use: 'drill', tier: 'varied', setting: 'work', topic: 'staff numbers and customers at small shops',
    text: "A survey of 60 small shops finds that the shops with more employees have more customers: shops with 8 or more employees average 900 customers a week, and shops with 3 or fewer average 250. A business magazine says: 'Hiring more staff brings in customers.' Payroll records show that most of the shops hired their extra staff after a busy season.",
    outcome: 'reverse', route: { S1: ['cause'], K1: ['backward'] },
    cues: { S1: 'Hiring more staff brings in customers', K1: 'most of the shops hired their extra staff after a busy season' },
    reason: { S1: 'The numbers are given for both groups of shops, and the magazine says {cue:S1}. That is a claim of cause.',
              K1: 'The magazine says that staff caused the customers. But {cue:K1}, so the customers came first and led the shops to hire.' },
    not: { outcome: 'confound', why: 'No third thing is needed. The second thing, the customers, came first and led to the first, the hiring, which is {o:reverse}.' },
    wouldChange: 'If the shops had hired extra staff in a quiet season and the customers rose only afterward, the order would point the other way.' },

  /* ---------- Misleading ---------- */
  { id: 'k-r-wellness', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a wellness program that employees volunteered for', echo: 'k-homeworkapp',
    text: "A company says: 'Our wellness program works. The 120 employees who volunteered for it lost an average of 7 pounds in a year.' The company has no weight figures for any of its other 880 employees.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'Our wellness program works', K1: 'The company has no weight figures for any of its other 880 employees' },
    reason: { S1: 'The figures are given, and the company says {cue:S1}. That is a claim of cause.',
              K1: 'The most noticeable thing is that the employees volunteered, which can bring to mind two groups that put themselves where they are. But there are not two groups: {cue:K1}. The only figures are for the volunteers, before and after, so nothing shows what the same employees would have lost with no program.' },
    not: { outcome: 'confound', why: 'Volunteering does not make two groups. {o:confound} needs a second group, people who did not do the thing, set beside the first, with something else differing between them. Here the other 880 are not counted at all.' },
    wouldChange: 'If the company had also weighed the 880 who did not volunteer, the claim would set two groups side by side, and the question would be whether something else differs between volunteers and the rest.' },

  { id: 'k-r-patrol', use: 'drill', tier: 'misleading', setting: 'community', topic: 'patrols on the blocks with the most burglaries', echo: 'k-sleepapp', also: ['anyway'],
    text: "A police department picks the 8 city blocks with the most burglaries last year and puts a patrol officer on each. This year burglaries on those 8 blocks are down from 64 to 41. 'Patrols cut burglaries by more than a third,' the chief says. The department has no figures for any block without a patrol.",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'Patrols cut burglaries by more than a third', K1: 'picks the 8 city blocks with the most burglaries last year' },
    reason: { S1: 'The numbers are given, and the chief says {cue:S1}. That is a claim of cause.',
              K1: 'The most noticeable thing is the last sentence: no block went without a patrol. That is true, and it is the answer {a:K1.anyway}. But look at how the blocks were picked: the department {cue:K1}. A count of burglaries is how risky a block is plus luck, so the worst 8 are partly the unluckiest 8, and their counts drift back with no patrols. When a case shows both, the key’s answer is {a:K1.extreme}.' },
    not: { outcome: 'nocontrol', why: 'It is true that no block went without a patrol, and the case shows that clearly. But the eight blocks were picked because they were at their worst, and the key gives the more exact answer.' },
    wouldChange: 'If the department had put patrols on 4 of the 8 worst blocks, picked by lottery, and none on the other 4, the 4 left alone would show how much of the fall comes back anyway.' },

  { id: 'k-r-sauna', use: 'drill', tier: 'misleading', setting: 'health', topic: 'a gym sauna installed in March and colds', echo: 'k-cameras',
    text: "A gym says: 'Since we installed the sauna in March, members who use it have had 30% fewer colds, so the sauna keeps colds away.' The 150 members who use it averaged 1.4 colds in the following year, and the 350 who do not averaged 2.0. The gym’s check-in records show that 120 of the 150 sauna users work out five or more days a week, against 70 of the 350 others.",
    outcome: 'confound', route: { S1: ['cause'], K1: ['behind'] },
    cues: { S1: 'so the sauna keeps colds away', K1: 'The gym’s check-in records show that 120 of the 150 sauna users work out five or more days a week, against 70 of the 350 others' },
    reason: { S1: 'The numbers are given for both groups, and the gym says {cue:S1}. That is a claim of cause.',
              K1: 'The most noticeable thing is the date: the sauna was installed in March, which can bring to mind a question of what came first. But nothing in the case puts colds before the sauna. What it shows is something else that differs between the groups: {cue:K1}. Members who work out most days differ from the rest in more than the sauna.' },
    not: { outcome: 'reverse', why: 'Nothing shows that fewer colds came first and led members to use the sauna. The installation date only says when the sauna became available.' },
    wouldChange: 'If the check-in records showed that members who used the sauna had mostly stopped working out, or the sauna users had mostly been cold-free before March, the order would be what mattered.' },

  { id: 'k-r-fourday', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a shorter work week tried by teams that volunteered, decided by a draw', echo: 'k-quit-chose',
    text: "A company wanted to know whether a four-day week raises output. 80 teams volunteered to try it, and the company drew 40 of them by lottery to work four days for six months while the other 40 stayed on five days. It counted finished projects per team in the same way for all 80: 9.1 for the four-day teams and 7.4 for the others. 'A four-day week raises output,' the company says.",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: 'the company drew 40 of them by lottery to work four days for six months', H1: 'A four-day week raises output' },
    reason: { S1: 'The most noticeable thing is that the teams volunteered, which can bring to mind people who put themselves in a group. But all 80 volunteered, and then {cue:S1}. A lottery formed the groups from the same volunteers, so nothing else is likelier to be in one group than the other. All 80 are counted in the same way, and the numbers are given. Nothing is wrong in any part.',
              H1: 'The company says {cue:H1}, and the key’s answer to what the figures show is {a:H1.causes}, from groups formed by a draw.' },
    not: { outcome: 'confound', why: 'Volunteering would matter if volunteers were set beside people who did not volunteer. Here every team volunteered, and a draw decided who tried the four-day week, so nothing else differs between the groups.' },
    wouldChange: 'If the 40 teams that tried a four-day week had been the 40 that asked for it, and the rest stayed as they were, the answer would be {a:S1.cause}.' }
]);

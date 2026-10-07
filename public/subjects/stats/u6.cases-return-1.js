// Statistical Claims, Unit Six: fresh cases held back for later days (lesson standard E9, V44), part one: No comparison group and Regression to the mean.
// Two for each name, one for each scheduled return of an action subject. A name that is due comes back as a case the
// learner has not seen, run as a whole route, beside a case of the name they most often take it for. Field guide: see u1.cases-drill-1.js.

FC.cases('stats', 'u6', [

  /* ---------- No comparison group ---------- */
  { id: 'k-ret-lawn', use: 'return', tier: 'clean', setting: 'home', topic: 'a spring lawn treatment',
    text: "A lawn-care company says: 'Our spring treatment works. Of the 50 lawns we treated in April, 41 were green by June.' The company did not keep any lawn untreated, and does not know how its customers’ neighbors’ lawns did.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'Our spring treatment works', K1: 'The company did not keep any lawn untreated' },
    reason: { S1: 'The figures are given for all 50 lawns, and the company says {cue:S1}. That is a claim of cause.',
              K1: 'The only figures are for lawns that were treated: {cue:K1}. Lawns go green in spring with rain and warmth, so nothing shows how many of the 41 would have turned green anyway.' },
    not: { outcome: 'regression', why: 'The lawns were not picked for being at their worst. Every lawn the company treated is counted.' } },

  { id: 'k-ret-chess', use: 'return', tier: 'varied', setting: 'learning', topic: 'a beginners’ chess course',
    text: "A chess club says: 'Our beginner course works. All 24 students who took it entered the spring tournament, and their ratings rose an average of 90 points from January to May.' The club has no ratings for beginners who did not take the course.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'Our beginner course works', K1: 'The club has no ratings for beginners who did not take the course' },
    reason: { S1: 'The figures are given for all 24 students, and the club says {cue:S1}. That is a claim of cause.',
              K1: 'The only figures are for students who took the course: {cue:K1}. Beginners improve quickly just by playing, so nothing shows how much of the 90 points the course added.' },
    not: { outcome: 'regression', why: 'The students were not picked for having the lowest ratings. Everyone who took the course is counted.' } },

  /* ---------- Regression to the mean ---------- */
  { id: 'k-ret-teams', use: 'return', tier: 'clean', setting: 'work', topic: 'a negotiation course for the weakest sales teams', also: ['anyway'],
    text: "A company picks the 6 sales teams with the weakest quarter and sends their leaders on a negotiation course. Next quarter the 6 teams’ sales average $210,000, up from $150,000. 'The course lifted our weakest teams,' the company says.",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'The course lifted our weakest teams', K1: 'picks the 6 sales teams with the weakest quarter' },
    reason: { S1: 'The sales figures are given, and the company says {cue:S1}. That is a claim of cause.',
              K1: 'The six teams were picked for their weakest quarter: the company {cue:K1}. A quarter’s sales are partly the team and partly luck, so the weakest six drift back toward usual with no course.' },
    not: { outcome: 'nocontrol', why: 'No team went without the course, and that is true too. But the six were picked at their worst, and when both fit, the answer is {a:K1.extreme}.' } },

  { id: 'k-ret-cholesterol', use: 'return', tier: 'varied', setting: 'health', topic: 'diet coaching for the highest cholesterol readings', also: ['anyway'],
    text: "A health plan picks the 100 members with the highest cholesterol readings in January and calls each one to coach them on diet. In July those 100 average 12 points lower. 'Our diet coaching lowers cholesterol,' the plan says.",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'Our diet coaching lowers cholesterol', K1: 'picks the 100 members with the highest cholesterol readings in January' },
    reason: { S1: 'The readings are given, and the plan says {cue:S1}. That is a claim of cause.',
              K1: 'The 100 were picked for the highest readings on one test: the plan {cue:K1}. A reading is a person’s usual level plus how that day went, so many of the 100 had a high day and drift back with no coaching.' },
    not: { outcome: 'nocontrol', why: 'No member went without the coaching, and that is true too. But the 100 were picked at their highest, and when both fit, the answer is {a:K1.extreme}.' } },

]);

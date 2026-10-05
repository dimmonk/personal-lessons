// Statistical Claims, Unit Six: fresh cases held back for later days (lesson standard E9, V44), part one: No comparison group and Regression to the mean.
// Four for each name: one for each scheduled return (an action subject has a fourth, at about twelve weeks). A name that is due comes back as a case the
// learner has not seen, run as a whole route, beside a case of the name they most often take it for. Field guide: see u1.cases-drill-1.js.

FC.cases('stats', 'u6', [

  /* ---------- No comparison group ---------- */
  { id: 'k-ret-lawn', use: 'return', tier: 'clean', setting: 'home', topic: 'a spring lawn treatment',
    text: "A lawn-care company says: 'Our spring treatment works. Of the 50 lawns we treated in April, 41 were green by June.' The company did not keep any lawn untreated, and does not know how its customers’ neighbors’ lawns did.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'Our spring treatment works', K1: 'The company did not keep any lawn untreated' },
    reason: { S1: 'The figures are given for all 50 lawns, and the company says {cue:S1}. That is a claim of cause.',
              K1: 'The only figures are for lawns that were treated: {cue:K1}. Lawns go green in spring with the rain and the warmth, so nothing shows how many of the 41 would have been green with no treatment.' },
    not: { outcome: 'regression', why: 'The lawns were not picked because they were at their worst. Every lawn the company treated is counted.' },
    wouldChange: 'If the company had left 50 similar lawns untreated, counted in the same way, the difference between the two groups would be what the treatment did.' },

  { id: 'k-ret-chess', use: 'return', tier: 'varied', setting: 'learning', topic: 'a beginners’ chess course',
    text: "A chess club says: 'Our beginner course works. All 24 students who took it entered the spring tournament, and their ratings rose an average of 90 points from January to May.' The club has no ratings for beginners who did not take the course.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'Our beginner course works', K1: 'The club has no ratings for beginners who did not take the course' },
    reason: { S1: 'The figures are given for all 24 students, and the club says {cue:S1}. That is a claim of cause.',
              K1: 'The only figures are for the students who took the course, before and after: {cue:K1}. Beginners at anything improve quickly just by playing, so nothing shows how much of the 90 points they would have gained with no course.' },
    not: { outcome: 'regression', why: 'The students were not picked for having the lowest ratings. Everyone who took the course is counted.' },
    wouldChange: 'If the club also had January and May ratings for 24 similar beginners who did not take the course, the difference between the two groups would be what the course did.' },

  { id: 'k-ret-loyalty', use: 'return', tier: 'clean', setting: 'money', topic: 'a grocery loyalty card',
    text: "A grocery chain says: 'Our loyalty card boosts spending. Customers who signed up spent $62 a week in the three months after, up from $55 in the three months before.' The chain has no figures for customers who did not sign up.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'Our loyalty card boosts spending', K1: 'The chain has no figures for customers who did not sign up' },
    reason: { S1: 'The figures are given, and the chain says {cue:S1}. That is a claim of cause.',
              K1: 'The only figures are for customers who signed up, before and after: {cue:K1}. Weekly spending changes with prices, the season and who is in the house, so nothing shows what the same customers would have spent with no card.' },
    not: { outcome: 'confound', why: 'Two groups are not set side by side, because the customers who did not sign up are not counted at all. {o:confound} needs the second group.' },
    wouldChange: 'If the chain had also counted what non-members spent in the same six months, the question would be whether something else differs between members and non-members.' },

  { id: 'k-ret-posters', use: 'return', tier: 'varied', setting: 'community', topic: 'flu-shot posters in every clinic',
    text: "A county health office hangs posters about flu shots in every clinic. In the next month, the number of flu shots given rises from 800 to 960. 'The posters raised flu-shot rates by 20%,' the office says. The county has no figures from any county without posters, and none from earlier years.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'The posters raised flu-shot rates by 20%', K1: 'The county has no figures from any county without posters, and none from earlier years' },
    reason: { S1: 'The figures are given, and the office says {cue:S1}. That is a claim of cause.',
              K1: 'The only figures are for the one county, before and after: {cue:K1}. Flu shots rise every autumn as the season comes, so nothing shows what the next month would have brought with no posters.' },
    not: { outcome: 'regression', why: 'The clinics were not picked for having the fewest shots. Every clinic got posters.' },
    wouldChange: 'If the office had the same months for earlier years, or for a county without posters, the difference from that would be what the posters did.' },

  /* ---------- Regression to the mean ---------- */
  { id: 'k-ret-teams', use: 'return', tier: 'clean', setting: 'work', topic: 'a negotiation course for the weakest sales teams', also: ['anyway'],
    text: "A company picks the 6 sales teams with the weakest quarter and sends their leaders on a negotiation course. Next quarter the 6 teams’ sales average $210,000, up from $150,000. 'The course lifted our weakest teams,' the company says.",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'The course lifted our weakest teams', K1: 'picks the 6 sales teams with the weakest quarter' },
    reason: { S1: 'The sales figures are given, and the company says {cue:S1}. That is a claim of cause.',
              K1: 'The six teams were picked for their weakest quarter: the company {cue:K1}. A quarter’s sales mix how good a team is with how the quarter went, so the weakest six are partly the unluckiest six, and their sales drift back toward usual with no course.' },
    not: { outcome: 'nocontrol', why: 'No team went without the course, and the case shows that too. But the six were picked at their worst, and when a case shows both, the key’s answer is {a:K1.extreme}.' },
    wouldChange: 'If the company had sent only 3 of the 6 weakest teams, drawn by lottery, the 3 left at home would show how much comes back anyway.' },

  { id: 'k-ret-cholesterol', use: 'return', tier: 'varied', setting: 'health', topic: 'diet coaching for the highest cholesterol readings', also: ['anyway'],
    text: "A health plan picks the 100 members with the highest cholesterol readings in January and calls each one to coach them on diet. In July those 100 average 12 points lower. 'Our diet coaching lowers cholesterol,' the plan says.",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'Our diet coaching lowers cholesterol', K1: 'picks the 100 members with the highest cholesterol readings in January' },
    reason: { S1: 'The readings are given, and the plan says {cue:S1}. That is a claim of cause.',
              K1: 'The 100 were picked for having the highest readings on one test: the plan {cue:K1}. A reading is a person’s usual level plus how that day went, so the highest 100 include many with a high day, and their readings drift back toward usual with no coaching.' },
    not: { outcome: 'nocontrol', why: 'No member went without the coaching, and the case shows that too. But the 100 were picked at their highest, and when a case shows both, the key’s answer is {a:K1.extreme}.' },
    wouldChange: 'If the plan had coached 50 of the 100 highest readers, drawn by lottery, and left 50 alone, the 50 left alone would show how much comes back anyway.' },

  { id: 'k-ret-batters', use: 'return', tier: 'clean', setting: 'leisure', topic: 'a hitting coach for the worst April batters', also: ['anyway'],
    text: "A baseball manager picks the three players with the worst batting averages in April and sends them to work with a hitting coach. In May their averages rise from .165 to .240. 'The hitting coach fixed them,' the manager says.",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'The hitting coach fixed them', K1: 'picks the three players with the worst batting averages in April' },
    reason: { S1: 'The averages are given, and the manager says {cue:S1}. That is a claim of cause.',
              K1: 'The three were picked for the worst averages in one month: the manager {cue:K1}. A month’s average is a player’s usual skill plus luck, so the worst three of April are partly the unluckiest three, and their averages drift back toward usual with no coach.' },
    not: { outcome: 'nocontrol', why: 'No player went without the coach, and the case shows that too. But the three were picked at their worst, and when a case shows both, the key’s answer is {a:K1.extreme}.' },
    wouldChange: 'If three other players with equally poor Aprils had been left alone, and their averages rose less, the difference would be what the coach did.' },

  { id: 'k-ret-zoo', use: 'return', tier: 'varied', setting: 'community', topic: 'free guides at the least visited exhibits', also: ['anyway'],
    text: "A zoo picks the three exhibits with the fewest visitors last month and adds a free guide at each. Next month the three exhibits average 420 visitors, up from 300. 'The free guides draw visitors,' the zoo says.",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'The free guides draw visitors', K1: 'picks the three exhibits with the fewest visitors last month' },
    reason: { S1: 'The visitor counts are given, and the zoo says {cue:S1}. That is a claim of cause.',
              K1: 'The three exhibits were picked for having the fewest visitors: the zoo {cue:K1}. A month’s visitors are how popular an exhibit is plus the weather and the school trips that happened to come, so the lowest three are partly the unluckiest three, and their counts drift back toward usual with no guide.' },
    not: { outcome: 'nocontrol', why: 'No exhibit went without a guide, and the case shows that too. But the three were picked at their lowest, and when a case shows both, the key’s answer is {a:K1.extreme}.' },
    wouldChange: 'If the zoo had added guides at only two of the five least visited exhibits, drawn by lottery, the other three would show how much of the rise comes back anyway.' }
]);

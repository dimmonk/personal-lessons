// Statistical Claims, Unit Six: cases shown inside cards, part one (No comparison group, Regression to the mean, and the cases of their look-alike pairs).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// A case that shows two answers says so in data (also), and the key says which wins: "It would have happened anyway" yields to
// "It was picked at its worst or best, and goes back toward usual". Field guide: see u1.cases-teach-1.js.
// Every case here has passed the first three parts of a claim (everyone is counted, the figure counts what it says, the numbers are given),
// so its route is { S1: ['cause'], K1: [...] } and the only open question is what else could produce the same result.

FC.cases('stats', 'u6', [

  /* ---------- No comparison group ---------- */
  { id: 'k-sleepapp', use: 'teach', tier: 'clean', setting: 'health', topic: 'a bedtime app at a sleep clinic', name: 'The sleep app',
    text: "A sleep clinic says: 'Our new bedtime app works. Of the 80 patients who used it for a month, 64 now sleep better.' All 80 patients answered the clinic’s follow-up questions. The clinic did not follow any patients who went without the app.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'Our new bedtime app works', K1: 'The clinic did not follow any patients who went without the app' } },

  { id: 'k-cafemenu', use: 'teach', tier: 'clean', setting: 'work', topic: 'a café’s new summer menu', name: 'The summer menu',
    text: "A café owner says: 'We brought in the new summer menu on May 1, and weekly sales have gone from $4,100 in April to $4,700 in June. The menu is a hit.' The owner has no sales figures from any other May or June, and does not know how the other cafés on the street did.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'The menu is a hit', K1: 'The owner has no sales figures from any other May or June' },
    segments: [
      { text: "A café owner says: 'We brought in the new summer menu on May 1, and weekly sales have gone from $4,100 in April to $4,700 in June. The menu is a hit.'", note: 'That is the claim and the figures. The figures are before and after, for one café, and what matters is what is missing from them.' },
      { text: 'The owner has no sales figures from any other May or June, and does not know how the other cafés on the street did.' }
    ] },

  { id: 'k-roundup', use: 'check', tier: 'clean', setting: 'money', topic: 'a budgeting app’s round-up feature', name: 'The round-up feature',
    text: "A budgeting app says: 'Our round-up feature works. The 200 users who switched it on saved $310 more over the year than they did the year before.' The app gives no figures for users who left the feature off.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'Our round-up feature works', K1: 'The app gives no figures for users who left the feature off' },
    segments: [
      { text: "A budgeting app says: 'Our round-up feature works.", note: 'That is the claim that something worked. What the figures can show for it is the question, and the words that answer it are not in this sentence.' },
      { text: "The 200 users who switched it on saved $310 more over the year than they did the year before.'", note: 'That is the result, for the users who switched the feature on. A result is there. What is missing is a result for anyone who went without.' },
      { text: 'The app gives no figures for users who left the feature off.' }
    ],
    reason: { K1: 'The only figures are for the 200 users who switched the feature on, set beside their own year before. {cue:K1}, so nothing shows what these users would have saved with no feature. Savings can change from one year to the next for many reasons that have nothing to do with it.' } },

  /* ---------- Regression to the mean ---------- */
  { id: 'k-quizclass', use: 'teach', tier: 'clean', setting: 'learning', topic: 'a teacher’s lowest quiz scorers', name: 'The class quiz', also: ['anyway'],
    text: "A teacher gives her ten students a quiz. The three lowest scorers, who average 46, get a week of extra tutoring. On an equally hard quiz the next week, the three tutored students average 55. 'The tutoring worked,' she says. 'They gained 9 points.'",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'The tutoring worked', K1: 'The three lowest scorers, who average 46, get a week of extra tutoring' },
    segments: [
      { text: 'A teacher gives her ten students a quiz.', note: 'That is how the scores came about. The question is which students ended up in the group that was given something.' },
      { text: 'The three lowest scorers, who average 46, get a week of extra tutoring.' },
      { text: 'On an equally hard quiz the next week, the three tutored students average 55.', note: 'That is the later figure. It is the change the claim is about, and what settles the answer is how the group was picked, not the change.' },
      { text: "'The tutoring worked,' she says. 'They gained 9 points.'", note: 'That is the claim of cause. What settles the answer is how the group was picked.' }
    ] },

  { id: 'k-roadsigns', use: 'teach', tier: 'clean', setting: 'community', topic: 'warning signs at the worst intersections', name: 'The warning signs', also: ['anyway'],
    text: "A city’s road department picks the five intersections that had the most crashes last year and puts up new warning signs at them. Last year those five had 50 crashes in all. This year they have 30. 'The signs cut crashes by 40%,' the department says.",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'The signs cut crashes by 40%', K1: 'picks the five intersections that had the most crashes last year' },
    segments: [
      { text: 'A city’s road department picks the five intersections that had the most crashes last year' },
      { text: 'and puts up new warning signs at them.', note: 'That is what was done. The question is why these five intersections were chosen.' },
      { text: 'Last year those five had 50 crashes in all. This year they have 30.', note: 'Those are the figures, and the fall from 50 to 30 is real. What the figures cannot say is why it fell.' },
      { text: "'The signs cut crashes by 40%,' the department says.", note: 'That is the claim of cause. What settles the answer is how the intersections were picked.' }
    ] },

  { id: 'k-heartrate', use: 'check', tier: 'clean', setting: 'health', topic: 'a breathing app for the fastest resting heart rates', name: 'The breathing app', also: ['anyway'],
    text: "A fitness company picks the 20 members with the highest resting heart rates in January and gives them a breathing app. In February their resting heart rates average 6 beats a minute lower than in January. 'Our breathing app lowers heart rates,' the company says.",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'Our breathing app lowers heart rates', K1: 'picks the 20 members with the highest resting heart rates in January' },
    reason: { K1: 'The group was picked for having the highest rates in the company: {cue:K1}. A group picked for being at an extreme is likely to be nearer its usual level the next time it is measured, with no app at all. The case also shows no group that went without, so {a:K1.anyway} fits too, but when a case shows both, the answer is {a:K1.extreme}.' } },

  /* ---------- The cases of the pair "No comparison group" and "Regression to the mean": the same program, picked two ways ---------- */
  { id: 'k-coach-all', use: 'teach', tier: 'clean', setting: 'work', topic: 'coaching for every call-center agent', name: 'Coaching for everyone',
    text: "A call center sends all 40 of its agents to a coaching program. The month after, complaints average 4.2 per agent, down from 5.0 the month before. 'The coaching works,' the manager says. Nobody was left out of the program, and the center has no figures from any other call center.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'The coaching works', K1: 'Nobody was left out of the program, and the center has no figures from any other call center' } },

  { id: 'k-coach-worst', use: 'teach', tier: 'clean', setting: 'work', topic: 'coaching for the call-center agents with the most complaints', name: 'Coaching for the worst', also: ['anyway'],
    text: "A call center picks the ten agents with the most complaints last month and sends them to a coaching program. The month after, those ten average 6.2 complaints each, down from 9.0. 'The coaching works,' the manager says.",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'The coaching works', K1: 'picks the ten agents with the most complaints last month' } },

  /* ---------- The cases of the pair "No comparison group" and a claim where nothing goes wrong: the same library, with and without a lottery ---------- */
  { id: 'k-reading-all', use: 'teach', tier: 'clean', setting: 'learning', topic: 'a summer reading challenge that children joined', name: 'The reading challenge',
    text: "A public library says: 'Our summer reading challenge works. All 90 children who joined it read more books than they did last summer: 7.2 on average, against 4.5.' The library has no figures for children who did not join.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'Our summer reading challenge works', K1: 'The library has no figures for children who did not join' } },

  { id: 'k-reading-lottery', use: 'teach', tier: 'clean', setting: 'learning', topic: 'a summer reading challenge decided by a draw', name: 'The reading draw',
    text: "A public library had room for 60 children in its summer reading challenge, and 120 signed up. It drew 60 names from a hat for the challenge, and the other 60 got a book list only. The library counted the books all 120 children read over the summer from its own records: 6.1 on average for the 60 in the challenge, 3.4 for the 60 with the list only. 'The challenge raises how much children read,' the library says.",
    outcome: 'cause_ok', route: { S1: ['holds'], H1: ['causes'] },
    cues: { S1: 'It drew 60 names from a hat for the challenge', H1: 'The challenge raises how much children read' } }
]);

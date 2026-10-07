// Statistical Claims, Unit Six: stories shown inside cards, part one (No comparison group, Regression to the mean, and the cases of their look-alike pairs).
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

  { id: 'k-roundup', use: 'check', tier: 'clean', setting: 'money', topic: 'a budgeting app’s round-up feature', name: 'The round-up feature',
    text: "A budgeting app says: 'Our round-up feature works. The 200 users who switched it on saved $310 more over the year than they did the year before.' The app gives no figures for users who left the feature off.",
    outcome: 'nocontrol', route: { S1: ['cause'], K1: ['anyway'] },
    cues: { S1: 'Our round-up feature works', K1: 'The app gives no figures for users who left the feature off' },
    segments: [
      { text: "A budgeting app says: 'Our round-up feature works.", note: 'That is the claim that it worked. The words that show what is missing are not in this sentence.' },
      { text: "The 200 users who switched it on saved $310 more over the year than they did the year before.'", note: 'That is the result for users who switched it on. What is missing is a result for anyone who did not.' },
      { text: 'The app gives no figures for users who left the feature off.' }
    ],
    reason: { K1: '{cue:K1}, so nothing shows what these 200 users would have saved without it.' } },

  /* ---------- Regression to the mean ---------- */
  { id: 'k-quizclass', use: 'teach', tier: 'clean', setting: 'learning', topic: 'a teacher’s lowest quiz scorers', name: 'The class quiz', also: ['anyway'],
    text: "A teacher gives her ten students a quiz. The three lowest scorers, who average 46, get a week of extra tutoring. On an equally hard quiz the next week, the three tutored students average 55. 'The tutoring worked,' she says. 'They gained 9 points.'",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'The tutoring worked', K1: 'The three lowest scorers, who average 46, get a week of extra tutoring' },
    segments: [
      { text: 'A teacher gives her ten students a quiz.', note: 'That is where the scores came from. The question is who ended up in the group that got something.' },
      { text: 'The three lowest scorers, who average 46, get a week of extra tutoring.' },
      { text: 'On an equally hard quiz the next week, the three tutored students average 55.', note: 'That is the later score, the change the claim is about. What decides it is how the group was picked, not the change.' },
      { text: "'The tutoring worked,' she says. 'They gained 9 points.'", note: 'That is the claim of cause. What decides it is how the group was picked.' }
    ] },

  { id: 'k-heartrate', use: 'check', tier: 'clean', setting: 'health', topic: 'a breathing app for the fastest resting heart rates', name: 'The breathing app', also: ['anyway'],
    text: "A fitness company picks the 20 members with the highest resting heart rates in January and gives them a breathing app. In February their resting heart rates average 6 beats a minute lower than in January. 'Our breathing app lowers heart rates,' the company says.",
    outcome: 'regression', route: { S1: ['cause'], K1: ['extreme'] },
    cues: { S1: 'Our breathing app lowers heart rates', K1: 'picks the 20 members with the highest resting heart rates in January' },
    reason: { K1: 'The group was picked for having the highest rates: the company {cue:K1}. A group picked for being at an extreme is nearer its usual level the next time it is measured, with no app at all.' } },

]);

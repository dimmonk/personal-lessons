// Statistical Claims, Unit One: cases shown inside cards, parts one and two (the first two answers and their look-alike pair).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// A gate unit's cases carry route: { S1: [option] } and no outcome: the answer to the first question is the name.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one family share a topic.
// cues.S1 is the exact phrase in the text that decides the first question (or a list of phrases); the app marks it,
// always in the same style. segments are the tappable pieces for "tap the words" prompts; note is shown if that
// piece is tapped in error. reason.S1 is the reason for this case's answer. not names the nearest wrong answer (a ledger
// neighbor) and says why it fails for this case. also lists an answer the case shows as well as its own, which loses to its
// own by a tie-break in the key. People, firms and studies are invented; no case asserts a contested fact about the real world.

FC.cases('stats', 'u1', [

  /* ---------- Who or what the figure was worked out from ---------- */
  { id: 'gate-golf', use: 'teach', tier: 'clean', setting: 'community', topic: 'a poll outside a golf club', name: 'The golf club',
    text: "A reporter stood outside the town golf club one Saturday morning and asked 50 people whether the town needs a new golf course. Forty-five said yes. Her article is headed: 'Nine in ten townspeople want a new golf course.'",
    route: { S1: ['counted'] },
    cues: { S1: 'stood outside the town golf club one Saturday morning and asked 50 people' } },

  { id: 'gate-windows', use: 'teach', tier: 'clean', setting: 'work', topic: 'a new sales opening on four calls', name: 'The window calls',
    text: "Jonas sells windows. On his first four calls with a new opening line, three people agreed to a visit. 'Three in four people say yes when I open with the new line,' he tells his team.",
    route: { S1: ['counted'] },
    cues: { S1: 'On his first four calls with a new opening line, three people agreed to a visit' },
    segments: [
      { text: 'Jonas sells windows.', note: 'That only says who he is. It tells you nothing about what the figure was worked out from.' },
      { text: 'On his first four calls with a new opening line, three people agreed to a visit.' },
      { text: "'Three in four people say yes when I open with the new line,' he tells his team.", note: 'That is the claim, and it is what the figure is used to say. What you are asked for is the words that show what the figure came from, and those are in the sentence before.' }
    ] },

  { id: 'gate-funds', use: 'check', tier: 'clean', setting: 'money', topic: 'a fund firm and the funds it closed',
    text: "A fund firm advertises: 'Every one of our funds has beaten the market for ten years.' The firm lists the 8 funds it still runs, and it closed 12 others in those years.",
    route: { S1: ['counted'] },
    cues: { S1: 'The firm lists the 8 funds it still runs, and it closed 12 others in those years' },
    segments: [
      { text: "A fund firm advertises: 'Every one of our funds has beaten the market for ten years.'", note: 'That is the claim. It says "every one of our funds", and what you are asked for is what that was worked out from, which comes next.' },
      { text: 'The firm lists the 8 funds it still runs, and it closed 12 others in those years.' }
    ],
    reason: { S1: 'The claim speaks for "every one of our funds", but the figure is worked out from the 8 funds that are still open: {cue:S1}. The 12 that closed are not in it, and funds tend to close when they have done badly. The figure leaves out the very ones that would change it.' },
    not: { outcome: 'measure', why: 'The funds that are listed are measured in the usual way, so nothing about how the figure is made has changed. What is wrong is which funds are in it.' } },

  /* ---------- What the figure counts ---------- */
  { id: 'gate-waits', use: 'teach', tier: 'clean', setting: 'health', topic: 'emergency room waiting time and a new clock', name: 'The emergency rooms',
    text: "A hospital group announces: 'Waiting time in our emergency rooms has fallen from six hours to four.' This year the group changed when the clock starts. It used to start when a patient walked in. It now starts when a nurse first sees them.",
    route: { S1: ['measure'] },
    cues: { S1: 'It used to start when a patient walked in. It now starts when a nurse first sees them' } },

  { id: 'gate-running', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a running app that widened what counts as a run', name: 'The running app',
    text: "A running app sent every user a summary: 'Last year you ran 4 km a week. This year you ran 6 km a week.' In March the app changed what counts as a run: before, only jogging counted, and now any walk of more than ten minutes does. The summary covers the same 40,000 users in both years.",
    route: { S1: ['measure'] },
    cues: { S1: 'In March the app changed what counts as a run: before, only jogging counted, and now any walk of more than ten minutes does' },
    segments: [
      { text: "A running app sent every user a summary: 'Last year you ran 4 km a week. This year you ran 6 km a week.'", note: 'That is the claim and its figures. The question is what changed in how they are counted, and the words that show it come after.' },
      { text: 'In March the app changed what counts as a run: before, only jogging counted, and now any walk of more than ten minutes does.' },
      { text: 'The summary covers the same 40,000 users in both years.', note: 'That tells you who is in the figure, and it is fine: the same users in both years. What changed is in the sentence before.' }
    ] },

  { id: 'gate-jobs', use: 'check', tier: 'clean', setting: 'learning', topic: 'a university and its employment rate',
    text: "A university says: 'Of our graduates, 95% were in work six months after leaving, up from 80% five years ago.' Every graduate of both years was contacted, and nearly all of them replied. Five years ago only full-time jobs counted as work. Now any paid work counts, including a few hours a week in a café.",
    route: { S1: ['measure'] },
    cues: { S1: 'Five years ago only full-time jobs counted as work. Now any paid work counts, including a few hours a week in a café' },
    reason: { S1: 'The people in the figure are fine: every graduate was contacted and nearly all replied. What is counted changed: {cue:S1}. "In work" can rise from 80% to 95% with no more graduates in full-time jobs than before.' },
    not: { outcome: 'counted', why: 'Nobody is left out and nobody is favored: every graduate of both years was contacted and nearly all replied. The trouble is not who is in the figure.' },
    miss: { counted: 'The first part comes first, and it holds. Every graduate of both years was contacted and nearly all replied, so the people in the figure are a fair picture, and there are plenty of them. The case goes on to what the figure counts, and that is where it goes wrong.' } },

  /* ---------- The look-alike pair: same school, same rise in scores ---------- */
  { id: 'gate-reading-volunteers', use: 'teach', tier: 'clean', setting: 'learning', topic: 'reading scores from volunteers',
    text: "Willow School says its students' reading scores rose from 61 to 70 this year. The 70 is the average for the 11 students who volunteered to stay after class for an extra test. The school has 340 students, and last year's 61 was the average for all of them.",
    route: { S1: ['counted'] },
    cues: { S1: 'the average for the 11 students who volunteered to stay after class for an extra test' } },

  { id: 'gate-reading-easier', use: 'teach', tier: 'clean', setting: 'learning', topic: 'reading scores on an easier test',
    text: "Willow School says its students' reading scores rose from 61 to 70 this year. All 340 students took the test in both years. This year's test was the shorter version, with easier passages, which the test's maker brought out to replace the old one.",
    route: { S1: ['measure'] },
    cues: { S1: "This year's test was the shorter version, with easier passages" } }
]);

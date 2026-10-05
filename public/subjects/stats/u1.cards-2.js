// Statistical Claims, Unit One, part two: the second answer (what the figure counts) and the first look-alike pair.
// The app prints "how to tell them apart", the side-by-side table and the key's tie-break; none of them is typed here.

FC.cards('stats', 'u1', [

  /* ---------- The second answer: what the figure counts ---------- */
  { id: 'meet-measure', kind: 'meet', family: 'measure',
    link: 'The first part asked who or what the figure was worked out from. Suppose that part is fine. The next part asks what the figure counts, because a figure is a count of something, and the claim reads it as showing something else.',
    case: 'gate-waits', mark: 'S1',
    strip: [
      'There is a figure: waiting time, which went from six hours to four.',
      'It is read as showing something real: patients now wait less time to be treated.',
      'The people in it are fine: every patient who came to the emergency rooms, in both years.',
      'What is counted changed. Last year the clock started when a patient walked in. This year it starts when a nurse first sees them.',
      'The hours before a nurse sees a patient have dropped out of the figure. It could fall to four with every patient waiting exactly as long as before.'
    ],
    explain: [
      'Take the parts in order. First: who is in the figure? Every patient who came to the emergency rooms, this year and last. Nobody is left out, and there are plenty of them. That part holds, so you can go on to the next one.',
      'The next part is what the figure counts. The claim is about how long patients wait for help. The figure is hours on a clock. If the clock measures the same thing in both years, a fall in hours is a fall in waiting. But the clock was changed. It now starts later, so the figure can fall from six to four without a single patient being seen any sooner.',
      'This is a different trouble from the last one. The people were fine. It is the number itself that has changed what it means. The same trouble comes in other forms: a new form that counts more or fewer things as one kind, a new tool that reads higher or lower than the old one, or people who work on the figure itself because they are paid or judged on it. What they have in common is that the figure can shift while the real thing it is read as showing stays put.',
      'That is also how to recognize it. Ask what else, other than the real thing itself, can shift the figure. If something can, and the case shows it, this is the answer.'
    ],
    feature: { step: 'S1', option: 'measure' },
    name: [
      'The answer, and so the name of the kind, is {a:S1.measure}. "Counts" does not only mean counting heads. It covers whatever the figure is a measure of: hours, dollars, scores, a number of reports.',
      'Give this answer when {when:S1.measure}.'
    ] },

  { id: 'again-measure', kind: 'again', family: 'measure',
    link: 'The hospital clock gave you what to point to: {needs:measure}. Here it is again, a long way from a hospital, and this time nobody is paid on the figure.',
    first: 'gate-waits', second: 'gate-running', step: 'S1',
    instruction: 'Find what the two cases share. Ignore the story (a hospital, a running app). Look at one thing only: what changed in how the figure is counted, so that the figure could shift with no change in the real thing?',
    prompt: { kind: 'phrase', answer: 'In March the app changed what counts as a run: before, only jogging counted, and now any walk of more than ten minutes does.' },
    shared: [
      'In both cases the people are fine, and in both a figure rose or fell in a way that sounds like news about something real. The hospital sounds quicker. The runner sounds fitter.',
      'In both, what is counted changed during the time the figure covers. The hospital moved the start of the clock. The app widened what counts as a run. The figure can move without the patients being seen any sooner, or the runner running any farther.',
      'The two stories share nothing else, so this is not about hospitals or exercise. It holds wherever the way a figure is counted changes, or can be pushed, while the claim reads the figure as showing something real. That is what {a:S1.measure} names.'
    ] },

  { id: 'portrait-measure', kind: 'portrait', family: 'measure',
    link: 'You know what to point to. This card fills in the rest of the picture of {a:S1.measure}, so that you can spot it where nobody marks the words for you.',
    typical: [
      'The figure is read as showing something real: how well a service works, how safe a street is, how much illness there is, how far someone ran.',
      'The people or things counted are fine. If they were not, you would have stopped at the first part.',
      'Something in the account could push the figure without the real thing moving: a new rule for what counts, a new tool, a target that people are paid or judged on, or more effort put into looking for the thing.',
      'What changed is usually in a sentence of its own, and easy to read past because it sounds like a detail.',
      'The change does not have to be dishonest. A new form may really be better. The trouble is that the figure before and the figure after no longer count the same thing.'
    ],
    not: [
      'It is not a figure that someone made up. The figure here can be added up honestly. The trouble is that it no longer means what the claim says it means.',
      'And it is not the same as the figure coming from the wrong people. There, the group was the trouble. Here the group is fine and what is counted is the trouble.'
    ],
    wild: ['"Waiting times are down by a third."', '"Reported crime is at a ten-year low."', '"Our test scores are the highest they have ever been."', '"Calls answered per hour are up."', '"Diagnoses have doubled."'],
    self: 'In your own life it is any score you are handed: your step count after a new phone, your grade after the teacher changes the scale, your sales after the targets change. Before you take the number as news about the thing, ask whether the number itself changed.',
    ask: '"What is this figure a count of, and could that have changed or been pushed while the real situation stayed the same?" If you can point to something that could, and it is in the account, you have your answer.' },

  { id: 'check-measure', kind: 'check', after: 'measure',
    case: 'gate-jobs',
    ask: { type: 'option', step: 'S1', among: ['counted', 'measure'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-counted-measure', kind: 'lookalike', ledger: 'counted~measure',
    link: 'You have now met two answers on their own. They are easy to mix up, because in both the figure can be added up correctly and still be misleading. This card puts them side by side.',
    cases: ['gate-reading-volunteers', 'gate-reading-easier'],
    instruction: 'Both cases are about the same school and the same rise in reading scores. Compare one thing: is the trouble in who is in the figure, or in what the figure counts?',
    prompt: { kind: 'which', option: 'S1.measure', answer: 'gate-reading-easier' },
    difference: [
      'In Case A the test is the same, but this year’s figure comes from 11 pupils who volunteered to stay after class, out of 340. Pupils who volunteer for an extra test are not a fair picture of the school, and last year’s figure was for everyone. The trouble is who is in the figure. The answer is {a:S1.counted}.',
      'In Case B every pupil took the test in both years, so nobody is missing. What changed is the test: this year’s is shorter, with easier passages. Scores can rise from 61 to 70 with every pupil reading exactly as well as before. The trouble is what the figure counts. The answer is {a:S1.measure}.',
      'The school, the claim and the numbers are the same in both. You cannot tell these two apart from the figure. You can only tell them apart by asking where the trouble sits: in who is in the figure, or in what it counts.'
    ] }
]);

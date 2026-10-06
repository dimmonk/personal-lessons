// Statistical Claims, Unit Three, part one (fourth piece): the fourth name, everyone counted but only a handful, and its
// look-alike with the claim that holds.

FC.cards('stats', 'u3', [

  /* ---------- Too few to trust ---------- */
  { id: 'meet-smalln', kind: 'meet', outcome: 'smalln',
    link: 'The first three ways were about who got into the figure. The fourth is about how many: everyone was counted, nobody was left out, and there are so few that luck moves the figure.',
    case: 'cn-school-ranking', mark: 'A1',
    strip: [
      'There are two figures: Fenwick Elementary, 9 of its 10 sixth graders at the top reading level (90 in every 100); Dalton Elementary, 150 of 200 (75 in every 100).',
      'Nobody was left out: every sixth grader at each school is counted.',
      'The top figure comes from only 10 children.',
      'The newspaper reads the highest figure as showing the best school.'
    ],
    explain: [
      'The sums are right and nobody is missing. What is wrong is how few children the top figure rests on. With only 10 in a year, one child is 10 points of the percentage: one more child missing the top level makes it 80 in every 100, and one fewer makes it 100. At Dalton, one child more or fewer moves it by half a point.',
      'That is why the smallest groups crowd both ends of any ranking: their figures swing the most. A school that is first this year because a few strong readers happened to be in that year may be near the bottom next year, and the newspaper has read the swing as quality.',
      'A handful does not have to mean 10. What counts is how far one or two more or fewer move the figure, and whether the claim reads a high or low figure as meaning something.'
    ],
    feature: { step: 'A1', option: 'handful' },
    name: 'The name for this is {o:smalln}. It says what is wrong in plain words: there are too few in the figure for a high or low figure from it to be trusted as meaning something.',
    act: 'Ask what the figure would be with one or two more or fewer. Look for the same figure over more years, places or people, and go by that. Say what the figure shows for the group it came from, and no more.' },

  { id: 'check-smalln', kind: 'check', after: 'smalln',
    case: 'cn-leaderboard',
    ask: { type: 'option', step: 'A1', among: ['lasted', 'chose', 'replied', 'handful'] } },

  /* ---------- The look-alike with the claim that holds ---------- */
  { id: 'look-smalln-samp', kind: 'lookalike', ledger: 'smalln~samp_ok',
    link: 'A figure from a small group goes wrong when it is read as meaning something. A figure from a bigger group about the same thing can hold. The same person can be reported both ways.',
    cases: ['cn-penalties-four', 'cn-penalties-eighty'],
    instruction: 'Both cases are about the same player, Dana, and her penalty kicks. Compare one thing: how many kicks are in the figure, and what one or two more or fewer would do to it.',
    prompt: { kind: 'which', option: 'S1.counted', answer: 'cn-penalties-four' },
    difference: [
      'In Case A Dana has taken 4 penalties and scored all 4, and the coach says she never misses. Every penalty she has taken is counted. But one miss would turn 4 out of 4 into 3 out of 4, and the coach reads a perfect figure from 4 kicks as meaning something about her. The question after the first, {q:A1}, gets the answer {a:A1.handful}.',
      'In Case B Dana has taken 80 penalties over six seasons and scored 68, which is 85 in every 100. One miss more or fewer moves it by about one point, and the coach says no more than the figure. The answer to the first question is {a:S1.holds}.',
      'Both are accurate counts. What separates them is how many kicks are in the figure, and so how far luck could move it.'
    ] }
]);

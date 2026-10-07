// Statistical Claims, Unit Three, part one (fourth piece): the fourth name, everyone counted but only a handful, and its
// look-alike with the claim that holds.

FC.cards('stats', 'u3', [

  /* ---------- Too few to trust ---------- */
  { id: 'meet-smalln', kind: 'meet', outcome: 'smalln',
    link: 'Fourth: nobody was left out, but there are so few that luck moves the figure.',
    case: 'cn-school-ranking', mark: 'A1',
    explain: [
      'The sums are right and nobody is missing. The problem is how few children the top figure rests on. With only 10 sixth graders, one child is 10 points: if one more had missed the top level it would be 80 in every 100, and if the one who missed had reached it, 100. At Dalton, one child moves it by half a point.',
      'That is why the smallest groups crowd both ends of any ranking: their figures swing the most. A school that is first this year because a few strong readers happened to be in that year may be near the bottom next year, and the newspaper reads that luck as quality.'
    ],
    spot: [
      { do: 'Find how many are in the figure: 10 sixth graders at Fenwick.', why: 'Nobody is left out here, so the only question is how many.' },
      { do: 'Try one child more or fewer: 9 of 10 becomes 8 of 10, or 10 of 10.', why: 'If that moves the figure a lot, luck can move it too.' },
      { do: 'Check what the newspaper makes of it: “the best school in the county”.', why: 'A high figure from a handful is being read as meaning something.' }
    ],
    feature: { step: 'A1', option: 'handful' },
    name: 'This is {o:smalln}. Luck can move a figure this small, so a high or low result from it means little.',
    act: [
      { do: 'Ask what the figure would be with one or two more or fewer.', why: 'That shows how far luck could move it.' },
      { do: 'Look for the same figure over more years, places or people, and go by that.', why: 'Luck evens out over more.' },
      { do: 'Say what the figure shows for the group it came from, and no more.', why: 'It is true of them and says little beyond.' }
    ] },

  { id: 'check-smalln', kind: 'check', after: 'smalln',
    case: 'cn-leaderboard',
    ask: { type: 'option', step: 'A1', among: ['lasted', 'chose', 'replied', 'handful'] } },

  /* ---------- The look-alike with the claim that holds ---------- */
  { id: 'look-smalln-samp', kind: 'lookalike', ledger: 'smalln~samp_ok',
    link: 'A figure from a small group goes wrong when it is read as meaning something. A bigger group about the same thing can hold, and the same player can be reported both ways.',
    cases: ['cn-penalties-four', 'cn-penalties-eighty'],
    instruction: 'Both stories are about the same player, Dana, and her penalty kicks. Compare one thing: how many kicks are in the figure, and what one or two more or fewer would do to it.',
    prompt: { kind: 'which', option: 'S1.counted', answer: 'cn-penalties-four' },
    difference: [
      'In Story A Dana has taken 4 penalties and scored all 4, and the coach says she never misses. Every penalty she took is counted, but one miss would turn 4 out of 4 into 3 out of 4. That is {o:smalln}.',
      'In Story B Dana has taken 80 penalties over six seasons and scored 68, which is 85 in every 100. One miss more or fewer moves it by about one point, and the coach says no more than the figure. That is {o:samp_ok}.',
      'Both are correct counts. What separates them is how many kicks are in the figure, and so how far luck could move it.'
    ] }
]);

// Statistical Claims, Unit Two, part one (end): the third name, two things set side by side, with its check and its look-alike pair.

FC.cards('stats', 'u2', [

  { id: 'meet-compok', kind: 'meet', outcome: 'comp_ok',
    link: 'The first two names each had one thing in the claim. The third has two, set side by side, and the claim says which is bigger.',
    case: 'h-buses', mark: 'H1',
    strip: [
      'There are two things, Line 5 and Line 9, and a figure for each: 12 late trips out of 200, and 31 out of 205.',
      'They are of the same kind: two bus lines of the same length, run in the same hours, through neighborhoods of similar size.',
      'They were counted the same way over the same stretch of time: every trip in March, with the same tracker.',
      'The numbers behind the comparison are given: how many trips each had, and how many were late.',
      'The claim says which is later more often, and stops there.'
    ],
    explain: [
      'For a comparison to be fair, three things have to hold, and this case shows each. The two things have to be of the same kind: two lines of the same length, run in the same hours. A line through a quiet suburb at midday and a line through the center at rush hour are not, and a difference between them says very little. They have to be counted the same way over the same stretch of time. And the numbers have to be given, so that sizes can be put on the same scale: Line 5 had 200 trips and Line 9 had 205, so each count of late trips is divided by its own trips. 12 ÷ 200 is 6 in 100, and 31 ÷ 205 is 15 in 100.',
      'One more thing is easy to miss: no different mix of easy and hard cases hidden inside the two. Suppose Garage A does mostly quick jobs, 90 in every 100, and Garage B mostly long, hard ones, 90 in every 100. Both are late on 5 in 100 quick jobs and 40 in 100 hard jobs, so they are exactly as good as each other at each kind of job. Counted over everything, A is late on 8.5 jobs in every 100 and B on 36.5, and B looks more than four times as bad without being worse at anything. That is why this case tells you that both lines run in the same hours through similar neighborhoods.'
    ],
    feature: { step: 'H1', option: 'difference' },
    act: [
      '1. Check that the two are of the same kind: the same length, line, hours or sort of customer. If they are not, say that the comparison is not between alike things.',
      '2. Check that both were counted the same way over the same time. Where the totals differ, divide each count by its own total to put them on the same scale.',
      '3. If both hold, repeat which is bigger and by how much. Leave out any reason: the comparison has not earned one.'
    ],
    name: 'The name for this is {o:comp_ok}. It is a comparison because the claim sets one thing beside another. It is fair because the two are alike and counted alike, and nothing about their size is hidden.' },

  { id: 'check-compok', kind: 'check', after: 'comp_ok',
    case: 'h-pools',
    ask: { type: 'option', step: 'H1', among: ['group', 'change', 'difference'] } },

  { id: 'look-meas-comp', kind: 'lookalike', ledger: 'meas_ok~comp_ok',
    link: 'The second pair of this unit: both claims put two figures in front of you, and both can sound like "this is lower than that".',
    cases: ['h-gauge', 'h-reservoir-usual'],
    instruction: 'Both cases are about the same reservoir, the same gauge and the same level. Compare one thing: is the claim following one thing as time passes, or setting one thing beside something else?',
    prompt: { kind: 'which', option: 'H1.difference', answer: 'h-reservoir-usual' },
    difference: [
      'In Case A the district read the gauge on 1 June and again on 1 September, and the claim follows the one reservoir through the summer: 82% full, then 61% full. It fell by 82 − 61 = 21 points. The answer is {a:H1.change}, and the case is {o:meas_ok}.',
      'In Case B the district looks at the reservoir on one date, 1 September, and sets this year’s 61% beside the average of twenty readings for that date, 74%. The gap is 74 − 61 = 13 points, and the claim says the level is below the usual. Nothing is followed through time. One thing is set beside its own usual figure. The answer is {a:H1.difference}, and the case is {o:comp_ok}.',
      'The gauge, the reservoir and the 61% are the same. In one claim the reservoir moves while the gauge is watched. In the other it stands still while it is set beside the usual.'
    ] }
]);

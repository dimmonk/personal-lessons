// Statistical Claims, Unit Two, part one (end): the third name, two things set side by side, with its check and its look-alike pair.

FC.cards('stats', 'u2', [

  { id: 'meet-compok', kind: 'meet', outcome: 'comp_ok',
    link: 'The first two claims had one thing in them. This one has two, set side by side, and says which is bigger.',
    case: 'h-buses', mark: 'H1',
    explain: [
      'The agency compares two bus lines that are alike, counted the same way, and shown with the trips behind each figure. When all three hold, the gap between them is real.',
      'A line through a quiet suburb at midday beside a line through downtown at rush hour would tell you very little, however carefully it was counted.'
    ],
    spot: [
      { do: 'Check the two are alike: both lines are 12 miles long, run in the same hours and serve similar neighborhoods.', why: 'Otherwise the gap may come from an easier or harder stretch of road, not from the lines.' },
      { do: 'Check both were counted the same way over the same time: every trip in March, with the same tracker.', why: 'A different tool or a different month can make the gap by itself.' },
      { do: 'Find the totals behind each figure: 200 trips and 205 trips.', why: 'Dividing each count by its own total puts the two on the same scale.' },
      { do: 'Check the claim only says which is bigger: Line 9 is late more often than Line 5.', why: 'A gap shows which is ahead, not why.' }
    ],
    act: [
      { do: 'Say which is bigger and by how much: 15 late trips in 100 on Line 9, against 6 in 100 on Line 5.', why: 'That is all the comparison has shown.' },
      { do: 'Leave out any reason.', why: 'The comparison has not earned one.' }
    ],
    feature: { step: 'H1', option: 'difference' },
    name: 'This is {o:comp_ok}. It is a comparison because the claim sets one thing beside another, and it is fair because the two are alike, counted alike, and shown with their totals.' },

  { id: 'check-compok', kind: 'check', after: 'comp_ok',
    case: 'h-pools',
    ask: { type: 'option', step: 'H1', among: ['group', 'change', 'difference'] } },

  { id: 'look-meas-comp', kind: 'lookalike', ledger: 'meas_ok~comp_ok',
    link: 'The second pair: both put two figures in front of you, and both can sound like “this is lower than that”.',
    cases: ['h-gauge', 'h-reservoir-usual'],
    instruction: 'Both stories are about the same reservoir and the same gauge. Compare one thing: does the claim follow the reservoir through time, or set it beside something else?',
    prompt: { kind: 'which', option: 'H1.difference', answer: 'h-reservoir-usual' },
    difference: [
      'In Story A the district read the gauge on 1 June and again on 1 September, and the claim follows the one reservoir through the summer: from 82% full to 61% full, a fall of 21 points. The answer is {a:H1.change}, so it is {o:meas_ok}.',
      'In Story B the district looks on one date, 1 September, and sets this year’s 61% beside the average of twenty readings for that date, 74%. The claim says the level is 13 points below the usual. Nothing is followed through time: one thing is set beside its own usual figure. The answer is {a:H1.difference}, so it is {o:comp_ok}.',
      'The 61% is the same in both. In one claim the reservoir moves while the gauge is watched. In the other it stands still beside the usual.'
    ] }
]);

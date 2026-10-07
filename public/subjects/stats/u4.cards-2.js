// Statistical Claims, Unit Four, part one (second half): the second name, its check, and its look-alike beside a claim that holds.

FC.cards('stats', 'u4', [

  /* ---------- The second name: a new way of counting ---------- */
  { id: 'meet-defshift', kind: 'meet', outcome: 'defshift',
    link: 'In {o:proxy} the people changed what they did. Now nobody does anything different: what changes is how the figure is made.',
    case: 'meas-jobless', mark: 'M1',
    explain: [
      'Count it last year’s way and this year is still 90 in 1,000, which is 9%. The fall to 6% comes from 30 adults (90 − 60 = 30) who still have no job but stopped being counted, because they have not looked for work in the past four weeks.',
      'Every figure has a definition behind it: an exact rule for what goes in the count. “Jobless” can mean no job at all, or no job and looking this month, or no job and looking this year, and each gives a different number for the same city. None of these is wrong. The trouble starts when the definition changes between the two ends of a comparison and the claim does not say so. Nobody has to be dishonest, and a new definition is often an improvement.'
    ],
    spot: [
      { do: 'Find the change in what counts as jobless: last year, looked in the past twelve months; this year, looked in the past four weeks.', why: 'Two numbers made by different definitions are not the same measure.' },
      { do: 'Check whether the real thing moved: the same 1,000 adults, and 90 of them still have no job.', why: 'If the real thing stood still while the figure moved, the counting did the moving.' },
      { do: 'Look for the small print: “revised”, “now includes”, “no longer counts”, “new method”.', why: 'The change is usually written there, not in the headline.' }
    ],
    feature: { step: 'M1', option: 'newrule' },
    name: 'This is {o:defshift}. It covers a new definition of what counts, like this one, and a new tool that does the counting: a different scale, a meter, or the same one moved somewhere else.',
    act: [
      { do: 'Ask for the figure counted both ways in the same period: last year’s definition and this year’s, on the same adults.', why: 'The gap between the two is the part of the move that the counting made.' },
      { do: 'If you cannot get it, compare only numbers made the same way: this year against this year.', why: 'Numbers made two ways cannot be set side by side.' }
    ] },

  { id: 'check-defshift', kind: 'check', after: 'defshift',
    case: 'meas-complaints',
    ask: { type: 'option', step: 'M1', among: ['pushed', 'newrule'] } },

  /* ---------- The second look-alike pair: the same ski area ---------- */
  { id: 'look-defshift-real', kind: 'lookalike', ledger: 'defshift~meas_ok',
    link: 'Here the second way again, beside a claim that holds. The headline is the same.',
    cases: ['meas-snow-moved', 'meas-snow-same'],
    instruction: 'Both stories come from the same ski area and give the same figure: average snow depth in February rose from 90 cm to 120 cm over ten years. Compare one thing: whether the pole that measures the snow stood in the same place all along.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'meas-snow-same' },
    difference: [
      'In Story A the ski area moved its pole in year six, into a hollow where wind drifts snow. A second pole left on the open slope read 91 cm, then 92 cm, so the snow barely changed (92 − 91 = 1 cm), and nearly all of the 30 cm rise comes from where the pole stands. That is {o:defshift}.',
      'In Story B the same pole has stood in the same place all along, and no other pole on the mountain reads differently. Only the snow could have moved the figure. That is {o:meas_ok}.'
    ] }
]);

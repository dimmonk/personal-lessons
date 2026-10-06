// Statistical Claims, Unit Four, part one (second half): the second name, its check, and its look-alike beside a claim that holds.

FC.cards('stats', 'u4', [

  /* ---------- The second name: a change in how it is counted ---------- */
  { id: 'meet-defshift', kind: 'meet', outcome: 'defshift',
    link: 'In {o:proxy} the people changed what they did. In the second way nobody does anything different at all. What changes is how the figure is made.',
    case: 'meas-jobless', mark: 'M1',
    strip: [
      'There is a figure: joblessness, 9% last year and 6% this year.',
      'There is a definition of who counts as jobless, and it changed. Last year: no job, and looked for work in the past twelve months. This year: no job, and looked for work in the past four weeks.',
      'The people did not change. Of the same 1,000 adults who want work, 90 were counted last year and 60 this year.',
      'The number of those 1,000 with no job at all stayed at 90 in both years.'
    ],
    explain: [
      'Counted last year’s way, this year is still 90 in 1,000, which is 9%. The 3 points the figure fell (9% − 6% = 3%) come from 30 adults (90 − 60 = 30) who have no job and are no longer counted, because they have not looked for work in the past four weeks.',
      'Every figure has a definition behind it: an exact statement of what goes into the count. "Jobless" is not one fixed thing. It can mean no job at all, or no job and looking right now, or no job and looking within the year, and each gives a different number for the same city. Nothing is wrong with any of these definitions. The trouble starts when the definition changes between the two ends of a comparison and the claim does not say so.',
      'Nobody has to be dishonest or paid on the figure. A new definition is often an improvement.'
    ],
    feature: { step: 'M1', option: 'newrule' },
    name: 'The name for this is {o:defshift}. It covers two kinds of change. A new definition, like this one, changes what counts. A new tool changes what does the counting: a different scale, a meter, a gauge, or the same one moved somewhere else.',
    act: 'First look for the date something about the counting changed: read the small print and the words "revised", "now includes", "no longer counts" and "new method". Then ask for the figure counted both ways in the same period. The gap between the two is the part of the move that the counting made. If there is none, compare only numbers made the same way.' },

  { id: 'check-defshift', kind: 'check', after: 'defshift',
    case: 'meas-complaints',
    ask: { type: 'option', step: 'M1', among: ['pushed', 'newrule'] } },

  /* ---------- The second look-alike pair: the same ski area ---------- */
  { id: 'look-defshift-real', kind: 'lookalike', ledger: 'defshift~meas_ok',
    link: 'Here the second way again, beside a claim that holds, because the two have the same headline.',
    cases: ['meas-snow-moved', 'meas-snow-same'],
    instruction: 'Both claims come from the same ski area and give the same figure: average snow depth in February rose from 90 cm to 120 cm over ten years. Compare one thing: whether the pole that measures the snow stood in the same place all along.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'meas-snow-same' },
    difference: [
      'In Case A the ski area moved its pole in year six, from an open slope to a hollow behind the lodge, where wind drifts snow. A second pole left on the open slope read 91 cm and then 92 cm, so the snow itself barely changed (92 − 91 = 1 cm), and nearly all of the 30 cm rise (120 − 90 = 30) is where the pole stands. The first answer is {a:S1.measure}, and its second is {a:M1.newrule}: the case is {o:defshift}.',
      'In Case B the pole has never been moved, and no other pole on the mountain reads differently. Nothing but the snow could have moved the figure. Every part holds, so the first answer is {a:S1.holds}, and the kind of claim it makes is {a:H1.change}: the claim is a sound one, {plain:meas_ok}.'
    ] }
]);

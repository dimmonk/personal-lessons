// Statistical Claims, Unit Two, part one (second half): how far luck can move a figure, the second name with its check, and the first look-alike pair.

FC.cards('stats', 'u2', [

  { id: 'term-margin', kind: 'term', term: 'margin',
    h: 'How far luck can move a figure',
    link: 'A {t:sample} drawn {t:atrandom} does not lean, but it can still be off by luck. Honest claims say how far, and the way they say it has a name.',
    case: 'h-t-poll',
    plain: [
      'Two polling firms each did everything right. Each drew 1,000 adults by lottery from a list of every adult in the city, and each heard from nearly all of them. One firm found 52 in 100 approving of the mayor, and the other found 49 in 100. Neither made a mistake. The lottery chose different 1,000 people each time, and luck made each group a little different from the city, and from each other.',
      'So any figure worked out from a few people is a little off from the figure for the whole group, and the reason is luck, not carelessness. Only more people can make it smaller.',
      'The size of the luck can be estimated. Here is a rough guide, good for shares between about 20 and 80 in 100: divide 1 by the square root of the number of people. The square root of 1,000 is about 32, and 1 ÷ 32 is about 0.03, which is 3 points. So a firm with 1,000 people says "52 in 100, give or take 3 points", and means that the figure for the whole city is very likely between 49 and 55.'
    ],
    after: [
      'Two things to carry from this. First, the margin covers only the luck of a fair draw. If the people were chosen badly, the margin does not warn you: a badly chosen group of 1,000 has the same margin, and its figure can be far off. Second, the size of the whole city does not appear in the sum. The same 1,000 people give the same margin whether the city has 300,000 adults or 3 million, which is why a thousand people can speak for millions.'
    ] },

  { id: 'meet-measok', kind: 'meet', outcome: 'meas_ok',
    link: 'The first name gave one figure about one group at one time. The second follows a figure through time. Take a town’s own records.',
    case: 'h-births', mark: 'H1',
    strip: [
      'There is one figure, births in the town in a year, and it is given for two years: 1,210 in 2019 and 1,090 in 2023.',
      'It was counted the same way both times: every birth to a mother who lives in the town, written down by the same office on the same form.',
      'Nothing could push it without births changing: nobody’s pay or budget depends on the number, and the same effort went into recording births in both years.',
      'The claim says it fell, and says no more: not why, and not what it means.'
    ],
    explain: [
      'When a figure changes, there are two ways to explain it. Either the thing the figure counts changed, or something about the counting did. If the clerk’s office had changed its form in 2021 so that births at a hospital across the river were now included, the figure could fall or rise without any more or fewer babies being born. If the office were paid for each birth it recorded, the figure could rise because the office tried harder. A change in a figure is a change in the thing itself only when none of that happened.',
      'Here none of it did. Every birth was recorded, by the same office on the same form, and nobody was paid or judged on the number. So the fall of 1,210 − 1,090 = 120 births is a fall in births.'
    ],
    feature: { step: 'H1', option: 'change' },
    act: [
      '1. Find how the figure was counted each time: the same form, tool or definition. If it is not said, you do not yet have an answer.',
      '2. Find whether anyone is paid, ranked or judged on it, and whether more effort went into finding things later. If either, stop: the first question would not have given this answer.',
      '3. If neither, repeat only that it rose or fell, and by how much. Leave out "because".'
    ],
    name: 'The name for this is {o:meas_ok}. "Change" means a rise or a fall. "Real" says that the thing itself changed, and not only the figure.' },

  { id: 'check-measok', kind: 'check', after: 'meas_ok',
    case: 'h-pupils',
    ask: { type: 'option', step: 'H1', among: ['group', 'change'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-samp-meas', kind: 'lookalike', ledger: 'samp_ok~meas_ok',
    link: 'Two names can look alike when they give the same figure about the same thing. This card shows the first pair of this unit: a claim about one time, and a claim about two.',
    cases: ['h-wait-avg', 'h-wait-change'],
    instruction: 'Both cases are about the same clinic and the same kind of figure, an average wait. Compare one thing: does the claim give the figure once, or does it follow the figure through time?',
    prompt: { kind: 'which', option: 'H1.change', answer: 'h-wait-change' },
    difference: [
      'In Case A the clinic drew 400 of last year’s 12,000 visits by lottery and timed each one. The claim gives one figure, 24 minutes, for one year. It says nothing about earlier years or later ones. The answer is {a:H1.group}, and the case is {o:samp_ok}.',
      'In Case B the clinic timed every visit in two years, the same way, and nobody’s pay depends on the number. The claim gives the figure twice, 31 minutes and 24 minutes, and says it fell by 7 minutes. The answer is {a:H1.change}, and the case is {o:meas_ok}.',
      'The figure of 24 minutes is the same in both. What separates them is whether the claim gives it once or follows it through time.'
    ] }
]);

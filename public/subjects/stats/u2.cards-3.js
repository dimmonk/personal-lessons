// Statistical Claims, Unit Two, part one (end): the second name, a figure that rose or fell, and the first look-alike pair.

FC.cards('stats', 'u2', [

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
      'Here none of it did. Every birth was recorded, by the same office and on the same form, so the same things were counted in both years. Nobody was paid or judged on the number, so nobody had a reason to push it. So the fall of 1,210 − 1,090 = 120 births is a fall in births. Set against the first year, 120 ÷ 1,210 is about 0.10, so there were about one in ten fewer.',
      'Notice what the claim does not say. It does not say why births fell, or that families are choosing smaller households, or that anything in the town is to blame. It says that the figure fell, and the records back that. A claim that holds goes exactly as far as that.'
    ],
    feature: { step: 'H1', option: 'change' },
    name: 'The name for this is {o:meas_ok}. "Change" means a rise or a fall. "Real" says that the thing itself changed, and not only the figure.' },

  { id: 'again-measok', kind: 'again', outcome: 'meas_ok',
    link: 'The town’s births gave you what to point to: {needs:meas_ok}. Here is a second case with a completely different story.',
    first: 'h-births', second: 'h-meter', step: 'H1',
    instruction: 'Find what the two cases share. Ignore the story (births, electricity). Look at one thing only: {q:H1}',
    prompt: { kind: 'phrase', answer: 'Our electricity use in January fell from 620 units in 2022 to 540 in 2023' },
    shared: [
      'In both cases one figure is given at two times, and in both it was read the same way each time: the same office and form, the same meter. Nobody had a reason to push either figure. Each claim says that the figure fell, and stops. The births fell by 120, which is about 10 in 100. The electricity fell by 620 − 540 = 80 units, which is 80 ÷ 620 = 0.13, about 13 in 100.',
      'The two stories share nothing else. So this is not about babies or about power. It holds wherever the claim follows one figure through time, it was counted the same way, nothing could push it, and the claim says only that it rose or fell. That is what {o:meas_ok} names.'
    ] },

  { id: 'portrait-measok', kind: 'portrait', outcome: 'meas_ok',
    link: 'You know what to point to. This card fills in the rest of the picture of {o:meas_ok}, so that you can spot it where nobody marks the words for you.',
    typical: [
      'It follows one thing through time with the same measure each time: the same office, meter, form or gauge. The words that say so are part of the claim or sit next to it.',
      'The way the figure is made is easy to find, and it did not change. When the description of the counting is missing, you do not yet have an answer.',
      'Nobody is paid, ranked or judged on the figure, and no more effort went into finding things at the end than at the start. If somebody was, or did, the same two numbers would be a different case.',
      'It can be dramatic or dull. A fall of 120 births and a rise of 4 points can both be this name. How big the change is does not decide it.',
      'It says only that the figure rose or fell. Why is another matter, and the claim leaves it alone.'
    ],
    not: [
      'Two numbers in a row are not yet {o:meas_ok}. A figure that rose or fell is the thing moving only if the counting stayed the same and nobody could push it. A form changed in 2021, or a bonus paid on the figure, would make the same two numbers a different case.',
      'And {o:meas_ok} is not a cause. "Births fell because of the new tax" goes past the figures.'
    ],
    wild: ['"Births in town fell from 1,210 in 2019 to 1,090 in 2023."', '"Our electricity use in January fell from 620 units to 540."', '"The reservoir fell from 82% to 61% full over the summer."', '"Average attendance went from 94 in 100 to 91 in 100, counted on the same register."'],
    self: 'In your own life it is anything you keep your own record of with the same tool: your weight on one scale, your electricity on one meter, your spending in one account. When you watch the same figure the same way, a change in it is a change in the thing.',
    ask: '"Was the figure counted the same way every time, and could anyone have pushed it, or looked harder later than earlier?"',
    act: [
      '1. Find how the figure was counted each time: the same form, tool or definition. If it is not said, you do not yet have an answer.',
      '2. Find whether anyone is paid, ranked or judged on it, and whether more effort went into finding things later. If either, stop: the first question would not have given this answer.',
      '3. If neither, repeat only that it rose or fell, and by how much, from this figure to that one. Leave out "because".'
    ] },

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
      'In Case B the clinic timed every visit in two years, the same way, and nobody’s pay depends on the number. The claim gives the figure twice, 31 minutes and 24 minutes, and says it fell. The fall is 31 − 24 = 7 minutes, which is 7 ÷ 31 = 0.23, about 23 in 100. The answer is {a:H1.change}, and the case is {o:meas_ok}.',
      'The figure of 24 minutes is the same in both. What separates them is whether the claim gives it once or follows it through time. Notice also what a claim of the first kind cannot say: from Case A alone, you cannot say that waits fell, because Case A gives no earlier figure to fall from.'
    ] }
]);

// Statistical Claims, Unit Four, part two (first half): the third name, its check, and its look-alike beside a claim that holds.

FC.cards('stats', 'u4', [

  /* ---------- The third name: more looking ---------- */
  { id: 'meet-detection', kind: 'meet', outcome: 'detection',
    link: 'In {o:proxy} people worked on the figure, and in {o:defshift} the counting changed. In the third way neither happens: the counting is done in the same way as before, and a great deal more of it is done.',
    case: 'meas-van', mark: 'M1',
    strip: [
      'There is a figure: thyroid diagnoses, 20 in the first year and 80 in the last.',
      'The figure counts how many were found, and finding depends on looking. The county began sending a free screening van to towns.',
      'The number of people given the exam rose from 1,000 a year to 5,000.',
      'It is the same exam and the same standard for a positive result. Among those examined, 2 in every 100 were diagnosed at first (20 in 1,000) and 1.6 in every 100 at the end (80 in 5,000).'
    ],
    explain: [
      'The number found rose from 20 to 80, four times as many. But the number examined rose from 1,000 to 5,000, five times as many. If the illness had really spread, the share found among those examined would have risen. It fell, from 2 in every 100 to 1.6. The count of diagnoses rose because the county examined five times as many people.',
      'A diagnosis is not the same thing as an illness. A diagnosis happens when someone who has the illness is examined. Before the van, many people with the illness were never examined and never counted, so the count was lower than the illness. The van brought the count nearer to the illness. It is not a spread of the illness.',
      'Nobody pushed the figure, and nothing in the counting changed: the same exam, the same standard. The only thing that changed is how much looking went on.'
    ],
    feature: { step: 'M1', option: 'looked' },
    name: 'The name for this is {o:detection}. "Detection" means finding something that was there to be found. "Bias" here means a lean in what the figure shows: toward a higher count when more effort goes into finding, and toward a lower one when less does.',
    act: 'First ask how many were looked at, tested or checked at each end, and not only how many were found. Divide the number found by the number looked at: a rise in the count with a level share means that only the looking changed. Until you have, read the claim as "more were found" and not as "more is happening".' },

  { id: 'check-detection', kind: 'check', after: 'detection',
    case: 'meas-essays',
    ask: { type: 'option', step: 'M1', among: ['pushed', 'newrule', 'looked'] } },

  /* ---------- The third look-alike pair: the same lake ---------- */
  { id: 'look-detection-real', kind: 'lookalike', ledger: 'detection~meas_ok',
    link: 'Here the third way again beside a claim that holds.',
    cases: ['meas-birds-more', 'meas-birds-same'],
    instruction: 'Both claims are about the same lake and a count of bird species that rose. Compare one thing: how much searching went into the count at each end.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'meas-birds-same' },
    difference: [
      'In Case A the number of species recorded rose from 12 to 31, and the claim reads it as more kinds of bird living at the lake. In the first year four volunteers searched for 10 hours a month in all, and in the second year fifteen searched for 60 hours a month in all. The searching grew sixfold (60 ÷ 10 = 6) and the count grew 2.6 times. The first answer is {a:S1.measure}, and its second is {a:M1.looked}: the case is {o:detection}.',
      'In Case B the same four volunteers searched the same stretch of shore for the same 10 hours a month in both years, on the same days. The searching did not change, so nothing but the birds could move the count from 12 to 15. Every part holds, so the first answer is {a:S1.holds}, and the kind of claim it makes is {a:H1.change}: the claim is a sound one, {plain:meas_ok}.'
    ] }
]);

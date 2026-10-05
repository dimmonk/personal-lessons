// Statistical Claims, Unit Four, part two (first half): what the second name is like and its two look-alikes, then the third name.

FC.cards('stats', 'u4', [

  { id: 'portrait-defshift', kind: 'portrait', outcome: 'defshift',
    link: 'You now know what to point to: the change in how the figure is made. Here is the rest of the picture.',
    typical: [
      'There are two or more points in time, and somewhere in the account is a date at which something about the counting changed. The date may be in small print, or in a sentence that nobody quotes.',
      'What changed is one of two things. Either what counts: a new definition, a longer or shorter window, a new threshold, a different place to start the clock. Or what measures: a new scale, meter, gauge, thermometer, counter, test or app, or the same one moved somewhere else.',
      'The change is often made for good reasons, and the new way is often better. The trouble is not that the new way is worse. It is that two numbers made in different ways are being set side by side.',
      'The figure often jumps at the date. When the real thing moves, the figure usually builds up a little at a time.',
      'Nobody has to gain from it. Unlike {o:proxy}, no one needs to be judged on the figure.',
      'The best evidence is a figure counted both ways for the same period: 80 members on two scales, 140 households under one line and 110 under the other. If there is none, you cannot tell how much of the move is the counting.'
    ],
    not: [
      'A change in how the figure is made is not the same as a figure that changed. A figure counted the same way throughout that moved is the sound claim, and nothing here applies.',
      'Nor does the name apply when only the amount of looking changed. If the definition and the tool are what they were, and the only difference is how much effort went into finding, the counting did not change.'
    ],
    wild: ['"Following a review of our methodology..."', '"Figures are not directly comparable with earlier years."', '"Now includes..."', '"We now count only..."', '"Using the new, more accurate system..."'],
    self: 'In your own life it turns up when you change a scale, a phone, a fitness band or an app and a number moves overnight: your weight, your sleep score, your daily steps.',
    ask: '"Was this counted by the same definition and the same tool at both ends? Is there a date where either changed?"',
    act: [
      'First look for the date. Read the small print, the notes under the table, and the words "revised", "now includes", "no longer counts" and "new method".',
      'Ask for the figure counted both ways in the same period, as the gym did with 80 members on both scales. The gap between the two is the part of the move that the counting made.',
      'If there is no such figure, compare only numbers made the same way, and say that the two ends cannot be compared.',
      'Do not pass the claim on as a change in the real thing until you can say how much of the move is left once the counting is the same.'
    ] },

  { id: 'check-defshift', kind: 'check', after: 'defshift',
    case: 'meas-complaints',
    ask: { type: 'option', step: 'M1', among: ['pushed', 'newrule'] } },

  /* ---------- Two look-alike pairs: the second name beside a claim that holds, and beside the first name ---------- */
  { id: 'look-defshift-real', kind: 'lookalike', ledger: 'defshift~meas_ok',
    link: 'You have met a second way a figure can be moved. Here it is again beside a claim that holds, because the two have the same headline.',
    cases: ['meas-snow-moved', 'meas-snow-same'],
    instruction: 'Both claims come from the same ski area and give the same figure: average snow depth in February rose from 90 cm to 120 cm over ten years. Compare one thing: whether the pole that measures the snow stood in the same place all along.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'meas-snow-same' },
    difference: [
      'In Case A the ski area moved its pole in year six, from an open slope to a hollow behind the lodge, where wind drifts snow. A second pole left on the open slope read 91 cm and then 92 cm, so the snow itself barely changed (92 − 91 = 1 cm), and nearly all of the 30 cm rise (120 − 90 = 30) is where the pole stands. The key’s first answer is {a:S1.measure}, and its second is {a:M1.newrule}: the case is {o:defshift}.',
      'In Case B the pole has never been moved, and no other pole on the mountain reads differently. Nothing but the snow could have moved the figure. Every part holds, so the key’s first answer is {a:S1.holds}, and the kind of claim it makes is {a:H1.change}: the claim is a sound one, {plain:meas_ok}.',
      'The same 30 cm, in the same words, is a pole that was moved in one claim and snow that really deepened in the other. The sentence that tells you is in the account of how it was measured.'
    ] },

  { id: 'look-proxy-defshift', kind: 'lookalike', ledger: 'proxy~defshift',
    link: 'The first two names can also be taken for each other. In both, a figure falls with the real thing standing still, and both can come with a new system in the story. This card shows what separates them.',
    cases: ['meas-loans-pushed', 'meas-loans-clock'],
    instruction: 'Both claims come from a bank, and both give the same figure: the average time to approve a loan fell from 12 days to 5. Compare one thing: whether the people who make the figure are ranked on it and could end the clock early, or the clock itself now starts at a different point.',
    prompt: { kind: 'which', option: 'M1.newrule', answer: 'meas-loans-clock' },
    difference: [
      'In Case A the officers are ranked on the average and enter the approval date themselves, and they now enter it on the day a file arrives and do the checks over the next week. The customers still wait about 12 days for a final answer. The figure fell from 12 to 5 because of what the officers enter. The key’s second answer is {a:M1.pushed}, and the case is {o:proxy}.',
      'In Case B nobody is ranked on the figure, and the clock now starts on the day the file is complete, after the customer has sent every document. Counted from the day of application, the same 200 loans took 12 days in both years. Counted from the day the file is complete, they took 5. The figure fell from 12 to 5 because the clock starts later. The key’s second answer is {a:M1.newrule}, and the case is {o:defshift}.',
      'In both, the new figure is lower than the wait a customer feels. What differs is who moved it: people judged on the figure, or a new point to start the clock.'
    ] },

  /* ---------- The third name: more looking ---------- */
  { id: 'meet-detection', kind: 'meet', outcome: 'detection',
    link: 'In {o:proxy} people worked on the figure, and in {o:defshift} the counting changed. In the third way neither happens: the counting is done in the same way as before, and a great deal more of it is done.',
    case: 'meas-van', mark: 'M1',
    strip: [
      'There is a figure: thyroid diagnoses, 20 in the first year and 80 in the last.',
      'The claim reads it as more illness: "the illness is spreading fast".',
      'The figure counts how many were found, and finding depends on looking. The county began sending a free screening van to towns.',
      'The number of people given the exam rose from 1,000 a year to 5,000.',
      'It is the same exam and the same standard for a positive result. Among those examined, 2 in every 100 were diagnosed at first (20 in 1,000) and 1.6 in every 100 at the end (80 in 5,000).'
    ],
    explain: [
      'Do the arithmetic. The number found rose from 20 to 80, four times as many. But the number examined rose from 1,000 to 5,000, five times as many. If the illness had really spread, the share found among those examined would have risen. It fell, from 2 in every 100 to 1.6. The count of diagnoses rose because the county examined five times as many people.',
      'A diagnosis is not the same thing as an illness. A diagnosis happens when someone who has the illness is examined. Before the van, many people with the illness were never examined and never counted, so the count was lower than the illness. The van brought the count nearer to the illness. That is good for the people who were found. It is not a spread of the illness.',
      'Nobody pushed the figure, and nothing in the counting changed: the same exam, the same standard. The only thing that changed is how much looking went on.'
    ],
    feature: { step: 'M1', option: 'looked' },
    name: 'The name for this is {o:detection}. "Detection" means finding something that was there to be found. "Bias" here means a lean in what the figure shows: toward a higher count when more effort goes into finding, and toward a lower one when less does.' },

  { id: 'again-detection', kind: 'again', outcome: 'detection',
    link: 'The screening van gave you what to point to: {needs:detection}. Here is the same thing on a road.',
    first: 'meas-van', second: 'meas-cameras', step: 'M1',
    instruction: 'Find what the two claims share. Ignore the story (an illness, speeding) and ignore how large the rise is. Look at one thing only: how much looking there was at each end.',
    prompt: { kind: 'phrase', answer: 'This year the city put up speed cameras on 30 busy roads, up from 10' },
    shared: [
      'In both claims a count of what was found rose by a large factor (four times as many diagnoses, three times as many tickets, from 300 to 900 a day) and was read as more of the bad thing happening: a spreading illness, drivers getting more reckless.',
      'In both, the looking grew: five times as many people examined, three times as many cameras. And in both, the share found at each place stayed where it was: about 2 in every 100 examined, and 3 in every 100 cars at each camera. Ten cameras with 1,000 cars each a day, 3 in every 100 of them caught, is 300 tickets a day; thirty cameras is 900.',
      'The two stories share nothing else. So this is not about illness or about driving. It holds wherever a count of what is found goes up when more is done to find it. That is what {o:detection} names.'
    ] }
]);

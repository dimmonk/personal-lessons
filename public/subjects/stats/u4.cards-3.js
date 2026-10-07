// Statistical Claims, Unit Four, part two (first half): the third name, its check, and its look-alike beside a claim that holds.

FC.cards('stats', 'u4', [

  /* ---------- The third name: more looking ---------- */
  { id: 'meet-detection', kind: 'meet', outcome: 'detection',
    link: 'The last way needs no pushing and no new definition. The counting stays the same, and a lot more of it gets done.',
    case: 'meas-van', mark: 'M1',
    explain: [
      'Diagnoses rose four times, from 20 to 80. But the number examined rose five times, from 1,000 to 5,000. If the illness had really spread, the share found among those examined would have gone up. It went down, from 2 in every 100 to 1.6.',
      'A diagnosis only happens when someone is examined. Before the van, many people with the illness were never examined, so they were never counted. The van found more of what was already there. It did not make more of it.'
    ],
    spot: [
      { do: 'Find what the figure counts: how many diagnoses were found.', why: 'A count of what was found depends on how hard anyone looked.' },
      { do: 'Look for more effort at finding: a free screening van, and 5,000 examined instead of 1,000.', why: 'More tests, more cameras and an easier way to report all do the same thing.' },
      { do: 'Check the same standard was used both times: the same exam, the same bar for a positive.', why: 'If the standard changed too, the rise could come from the standard.' }
    ],
    feature: { step: 'M1', option: 'looked' },
    name: 'This is {o:detection}. “Detection” means finding something that was already there to be found.',
    act: [
      { do: 'Ask how many were looked at each time, not only how many were found: 1,000, then 5,000.', why: 'A count of what was found means little without how much looking there was.' },
      { do: 'Divide the number found by the number looked at: 20 in 1,000, then 80 in 5,000.', why: 'A share that stays level or falls means only the looking grew.' },
      { do: 'Until you have that share, say “more were found”, not “more is happening”.', why: 'That is all the count shows.' }
    ] },

  { id: 'check-detection', kind: 'check', after: 'detection',
    case: 'meas-essays',
    ask: { type: 'option', step: 'M1', among: ['pushed', 'newrule', 'looked'] } },

  /* ---------- The third look-alike pair: the same lake ---------- */
  { id: 'look-detection-real', kind: 'lookalike', ledger: 'detection~meas_ok',
    link: 'Here the third way again, beside a claim that holds.',
    cases: ['meas-birds-more', 'meas-birds-same'],
    instruction: 'Both stories are about the same lake and a count of bird species that rose. Compare one thing: how much searching went into the count at each end.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'meas-birds-same' },
    difference: [
      'In Story A the count rose from 12 species to 31, but the searching went from four volunteers for 10 hours a month to fifteen volunteers for 60 hours. Six times the searching found 2.6 times the species. That is {o:detection}.',
      'In Story B the same four volunteers searched the same shore for the same 10 hours a month in both years. The searching did not change, so only the birds could move the count from 12 to 15. That is {o:meas_ok}.'
    ] }
]);

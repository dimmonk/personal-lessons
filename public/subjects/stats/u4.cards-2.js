// Statistical Claims, Unit Four, part one (second half) and the start of part two: the check on the first name, the first look-alike
// pair (a figure moved by the people paid on it, beside a claim that holds), the first exception, and the second name.

FC.cards('stats', 'u4', [

  { id: 'check-proxy', kind: 'check', after: 'proxy',
    case: 'meas-bugs',
    ask: { type: 'phrase', step: 'M1', say: 'Which words show that the team gains from a higher figure and decides how it is made? Tap them.',
           answer: 'gives each team a $100 bonus for every 10 bug reports it closes in a month, and the team itself decides how a problem is split into reports' } },

  /* ---------- The first look-alike pair: the same bus company ---------- */
  { id: 'look-proxy-real', kind: 'lookalike', ledger: 'proxy~meas_ok',
    link: 'You have met one way a figure can be moved. People reading a headline often cannot tell it from a claim that holds. This card sets the two side by side.',
    cases: ['meas-bus-logged', 'meas-bus-gps'],
    instruction: 'Both claims are about the same bus company, and both give the same figure: trips on time rose from 78 of every 100 to 90 of every 100. Compare one thing: who makes the figure, and whether they gain if it is high.',
    prompt: { kind: 'which', option: 'S1.holds', answer: 'meas-bus-gps' },
    difference: [
      'In Case A the drivers are paid when 90 of every 100 trips are logged on time, and each driver logs the trip with a press of a panel. The figure can rise from 78 to 90 because of what the drivers press, with no bus running any earlier. The key’s first answer is {a:S1.measure}, and its second is {a:M1.pushed}: the case is {o:proxy}.',
      'In Case B nobody is paid on the figure, and a computer logs each trip from the bus’s satellite position, against a timetable that did not change. Nothing but the buses running earlier could move the figure from 78 to 90. Every part holds, so the key’s first answer is {a:S1.holds}, and the kind of claim it makes is {a:H1.change}: one figure at two times, said to have risen, and nothing more. The claim is a sound one: {plain:meas_ok}.',
      'So the same rise, in the same company, in the same words, is two different things. Nothing in the headline tells them apart. The people who make the figure, and whether they gain from it, do.'
    ] },

  /* ---------- The first exception: a bonus on the figure, and nothing to push ---------- */
  { id: 'exc-chairs', kind: 'exception', looksLike: 'proxy', is: 'meas_ok', ledger: 'proxy~meas_ok',
    h: 'A bonus on the figure, and nothing to push',
    link: 'The last card set two claims side by side that differed in who makes the figure. Here is a claim in which people are paid on the figure, which usually points one way, and it still holds.',
    case: 'meas-chairs',
    setup: 'A furniture maker pays its workers a bonus for each chair that passes a strength test, and the share that pass rose from 700 in every 1,000 to 900. A rise in a figure that the workers are paid on is what {o:proxy} usually looks like. Yet this claim holds: it is a sound one, {plain:meas_ok}.',
    prompt: { kind: 'phrase', answer: 'The test is run by an outside laboratory, which loads every finished chair with 120 kg and is paid the same whatever the result' },
    because: [
      'Ask the question the name needs: is there a way for the workers to raise the figure without making stronger chairs? Here the test is run by an outside laboratory that loads every finished chair with 120 kg and is paid the same whatever the result. The workers do not run the test, choose which chairs are tested or write down the result. The only way to get more chairs through is to make chairs that bear 120 kg.',
      'So the figure moved from 700 to 900 in every 1,000 because the chairs got stronger: 200 more in every 1,000 bear the load. A bonus tells you that someone gains from the figure. It does not tell you that they can raise it another way. For {o:proxy} you must be able to point to this: {needs:proxy}. The bonus is there, and so is the rise, but the way is missing. The key’s first answer for this claim is {a:S1.holds}.'
    ],
    take: 'So a target and a rise are never enough to name a claim {o:proxy}. Look for the way. And when you cannot find one, do not suspect everything: a claim that holds is a real answer, and this is what it can look like.' },

  /* ---------- The second name: a change in how it is counted ---------- */
  { id: 'meet-defshift', kind: 'meet', outcome: 'defshift',
    link: 'In {o:proxy} the people changed what they did. In the second way nobody does anything different at all. What changes is how the figure is made.',
    case: 'meas-jobless', mark: 'M1',
    strip: [
      'There is a figure: joblessness, 9% last year and 6% this year.',
      'There is a real thing it is read as showing: adults who want work and have not found it.',
      'There is a definition of who counts as jobless, and it changed. Last year: no job, and looked for work in the past twelve months. This year: no job, and looked for work in the past four weeks.',
      'The people did not change. Of the same 1,000 adults who want work, 90 were counted last year and 60 this year.',
      'The number of those 1,000 with no job at all stayed at 90 in both years.'
    ],
    explain: [
      'Do the arithmetic both ways. Counted last year’s way, this year is still 90 in 1,000, which is 9%. Counted this year’s way, last year would have been fewer than 90, because only those who had looked in the past four weeks would count. The 3 points the figure fell (9% − 6% = 3%) come from 30 adults (90 − 60 = 30) who have no job and are no longer counted, because they have not looked for work in the past four weeks.',
      'Every figure has a definition behind it: an exact statement of what goes into the count. "Jobless" is not one fixed thing. It can mean no job at all, or no job and looking right now, or no job and looking within the year, and each gives a different number for the same city. Nothing is wrong with any of these definitions. The trouble starts when the definition changes between the two ends of a comparison and the claim does not say so. It is like comparing a height of 70 inches with a height of 70 centimeters: each is a fine measurement, and setting one beside the other says nothing. The likeness stops there: with a jobless count, nobody can tell from the figure that anything changed.',
      'Nobody has to be dishonest or paid on the figure. A new definition is often an improvement. What matters here is that the figure moved and the real thing did not.'
    ],
    feature: { step: 'M1', option: 'newrule' },
    name: 'The name for this is {o:defshift}. It covers two kinds of change, and the next card shows the second. A new definition, like this one, changes what counts. A new tool changes what does the counting: a different scale, a meter, a gauge, or the same one moved somewhere else.' },

  { id: 'again-defshift', kind: 'again', outcome: 'defshift',
    link: 'The jobless count gave you what to point to: {needs:defshift}. That was a change in what counts. Here is a second claim, with a change in the tool that does the counting.',
    first: 'meas-jobless', second: 'meas-scale', step: 'M1',
    instruction: 'Find what the two claims share. Ignore the story (a job office, a gym) and ignore the fact that one changed a definition and the other a machine. Look at one thing only: what changed in how the figure is made, at some point between the two ends.',
    prompt: { kind: 'phrase', answer: 'In March the gym replaced its body-fat scale with a new model' },
    shared: [
      'In both claims a figure fell by a few points, from 9% to 6% and from 24% to 21%, and in both the people did not change: the same 1,000 adults, the same members, whose weights did not change.',
      'In both, something about how the figure is made changed at a date: who counts as jobless, and which scale is used. And in both, a second count makes the change visible. Counted the old way, the jobless figure does not fall. And 80 members who stood on both scales read 24% on one and 21% on the other, so the scale alone moves the figure by 3 points.',
      'The two stories share nothing else. So this is not about jobs or about gyms. It holds wherever the same people or things get a different figure because a definition or a tool changed in between. A new definition and a new tool are the two forms of {o:defshift}.'
    ] }
]);

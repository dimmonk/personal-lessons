// Singing, lesson 4: Hold it steady (part 4). Being in tune means near the note on average and also the same each time: counted that way
// (precision, the consistency of repeated tries at one note), about half of people with no music training are not consistent (research note
// V2). That is why every check here takes several tries. Holding a note is practised on its own grounds: a song often ends a line on a long
// note, and the plan's tune test holds the last note 2 seconds (a judgement call). "Steady" is the app's own measure, said in plain words: on
// the note (within half a half-step) without a break for the seconds asked. Where a hold goes (stays, sinks, rises, or was off from the start)
// is taught, worked once (P10) and practised on cases in pairs (P12); a note that rises as it swells louder is the pressure effect (V11), so the
// physical cue is an even loudness. Holds of 2 seconds, then 4 (twice the check, for margin), each with the line and then without (V14; P17),
// saying under, on or over first (V10). The stretch group holds its results to the end of the group (feedback after every few tries, V14,
// V15). The check is five new cases and five 2-second holds.
FC.lesson('singing', {
  id: 'l4', part: '4', title: 'Hold it steady', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan of 2026-10-22.' }],
  why: [
    'Most people who sing for fun land near the note on average. But when researchers checked whether people sang the same note the same way each time, about half of those with no music training did not: the same note came out a little different on each try.',
    'So one good try is not the test, and the checks here take several. Songs also often end a line on a long note, which has to stay where you put it. Holding a note trains that: land on it, keep your ear on it, and bring it back when it drifts.'
  ],
  flow: [
    { set: { items: [{ sing: { task: 'warmup' }, n: 1 }], order: 'listed' } },
    { title: 'What steady means',
      show: [
        { kind: 'prose', text: 'Steady here means on the note, within half a half-step as before, without a break, for the seconds the try names. The app times the longest stretch you stay on.' },
        { kind: 'tones', says: 'The first stays on one note. The second starts on the same note, starts to slip before a second is out, is off the note by about a second and a half, and ends a shade under. That one would not count as a 2-second hold, and the app would say it sank.',
          examples: [
            { label: 'Holding steady', play: [{ note: 'D4', ms: 3000 }] },
            { label: 'Sinking under', play: [{ note: 'D4', path: [[0, 0], [700, 0], [2200, -100], [3000, -100]] }] }
          ] },
        { kind: 'prose', text: 'A held note can go four ways: it stays steady; it sinks under as it goes on; it rises over as it goes on; or it was off from the first moment and stays off. Often it wanders off and comes back. Check it the way you checked a single note: against a steady one. If it does more than one, name the first thing you hear: a note off from the start is off from the start, whatever it does next.' },
        { kind: 'prose', text: 'Keep the loudness even from start to end. Pushing a note louder tends to make it go sharp, though a note can swell and stay on, or rise with no swell at all: only the check tells. If it drifts, nudge it back while you hold; do not stop.' }
      ] },
    { worked: 'holding-worked-birthday' },
    { set: { items: [['holding-sinks-late', 'holding-low-throughout'], ['holding-swells-up', 'holding-felt-shaky'], ['holding-high-throughout', 'holding-creeps-up'], 'holding-low-then-lower', 'holding-wanders-back'], order: 'listed' } },
    { title: 'Now hold it',
      show: [{ kind: 'prose', text: 'The check wants 2 seconds. These groups go on to 4, so 2 will feel easy. Each starts with the line and then goes without it. Without the line you say where your note ended, under, on or over, before you see it. If the result says it sank or rose, that is which way to nudge it next time.' }] },
    { set: { items: [{ sing: { task: 'hold', seconds: 2, cents: 50 }, n: 4 }], order: 'listed', support: { line: true } } },
    { set: { items: [{ sing: { task: 'hold', seconds: 2, cents: 50 }, n: 4 }], order: 'listed', guess: true } },
    { set: { items: [{ sing: { task: 'hold', seconds: 4, cents: 50 }, n: 3 }], order: 'listed', support: { line: true } } },
    { set: { items: [{ sing: { task: 'hold', seconds: 4, cents: 50 }, n: 4 }], order: 'listed', guess: true } },
    { title: 'A closer target',
      show: [{ kind: 'prose', text: 'This last group wants you to stay closer to the note: within about a third of a half-step. Off by up to half a half-step is called a little under or over here. It is a stretch, not the check. This time you see how each try went at the end of the group, not after each one, so judge each one yourself first.' }] },
    { set: { items: [{ sing: { task: 'hold', seconds: 4, cents: 35 }, n: 3 }], order: 'listed', guess: true, feedback: 'at-end' } },
    { title: 'Away from the phone',
      show: [{ kind: 'prose', text: 'In a song you know, pick its longest note. Play that note on a piano app and hold yours beside it, at an even loudness, to the end.' }] }
  ],
  check: { items: ['holding-car-end', 'holding-gets-louder', 'holding-sounded-wobbly', 'holding-off-early', 'holding-drops-slowly', { sing: { task: 'hold', seconds: 2, cents: 50 }, n: 5 }],
    feedback: 'after-each', pass: [{ ask: 'holding', right: { min: 4 }, of: 'the stories' }, { ask: 'sing', right: { min: 4 }, of: 'the held notes, each steady for 2 seconds' }] }
});

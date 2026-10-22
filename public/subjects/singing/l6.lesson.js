// Singing, lesson 6: Short tunes (part 6). Everything so far in one: a new tune of three, then four, then five notes, heard and sung back.
// Most people who sing for fun sing more in tune when they slow down, so a new tune is learned slowly first and then at its speed (research
// note V2, V17); a tune that gets lost partway goes back to the slow speed (judgement call from V2, V17). Scored note by note, so a drift
// counts (V6), and the result names every note. Where a tune goes wrong is taught, worked once (P10) and practised on cases (P12, P22: each
// answer is an earlier lesson's check). The line first, then none (V14), saying under, on or over about the last note (V10); a closer
// target last, its results held to the end of the group (V14). The check is five new cases and the real-world test's sung part: a new
// five-note tune, no line, 4 of 5 notes on and the last held 2 seconds, on two of three tries (the test asks twice, V2: consistency); lesson
// 12 asks it again on a later day.
FC.lesson('singing', {
  id: 'l6', part: '6', title: 'Short tunes', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan of 2026-10-22.' }],
  why: [
    'A short tune is where the notes, the steady hold and the jumps come together.',
    'Most people who sing for fun sing a tune more in tune when they slow down. So learn a new tune slowly, then sing it at its speed.'
  ],
  flow: [
    { set: { items: [{ sing: { task: 'warmup' }, n: 1 }], order: 'listed' } },
    { title: 'Slow, then at speed',
      show: [
        { kind: 'prose', text: 'Hear the whole tune in your head first, then sing it note by note. The last note is long: keep it steady for 2 seconds.' },
        { kind: 'prose', text: 'The groups go: three notes played slowly, first with the line and then without; four notes played slowly; four notes at their speed; then five notes at their speed. Each try says when it is played slowly.' },
        { kind: 'prose', text: 'If you lose the tune partway, do not push on. Go back to the slow speed, hear the tune again, and sing the part you lost on its own before the whole tune.' },
        { kind: 'prose', text: [
          'Checked note by note, a short tune can go five ways:',
          'On all the way.',
          'One jump fell short: every note on except the far note of a big jump, which stops short of it.',
          'The long last note sank: all on until the last, which slips lower while it is held.',
          'Lost the tune partway: sure at first, then unsure of the next note, and the voice wanders.',
          'The whole tune sat off the same way: every note under, or every note over, or drifting further off as it goes. Check the first note against a steady one; if the first was right, check each note after it the same way, slowly.',
          'If more than one shows, fix the first one you hear.'] }
      ] },
    { worked: 'tune-worked-lullaby' },
    { set: { items: [['tune-jump-short', 'tune-lost-middle'], ['tune-all-low', 'tune-one-leap'], ['tune-last-sinks', 'tune-all-on'], ['tune-fast-wander', 'tune-drifts-down']], order: 'listed' } },
    { title: 'Now sing them',
      show: [{ kind: 'prose', text: 'After each try the result names every note, so you can see which one went wrong, not only the last.' }] },
    { set: { items: [{ sing: { task: 'melody', notes: 3, maxStep: 2, noteMs: 1400, cents: 50 }, n: 3 }], order: 'listed', support: { line: true } } },
    { set: { items: [{ sing: { task: 'melody', notes: 3, maxStep: 2, noteMs: 1400, cents: 50 }, n: 3 }], order: 'listed', guess: true } },
    { set: { items: [{ sing: { task: 'melody', notes: 4, maxStep: 3, noteMs: 1200, cents: 50 }, n: 3 }], order: 'listed', guess: true } },
    { set: { items: [{ sing: { task: 'melody', notes: 4, maxStep: 3, cents: 50 }, n: 3 }], order: 'listed', guess: true } },
    { set: { items: [{ sing: { task: 'melody', notes: 5, maxStep: 4, cents: 50 }, n: 3 }], order: 'listed', guess: true } },
    { title: 'A closer target',
      show: [{ kind: 'prose', text: 'This last group wants you to stay closer on every note: within about a third of a half-step. Off by up to half a half-step is called a little under or over here. It is a stretch, not the check. You see how each try went at the end of the group, so judge each one yourself first.' }] },
    { set: { items: [{ sing: { task: 'melody', notes: 5, maxStep: 4, cents: 35 }, n: 2 }], order: 'listed', guess: true, feedback: 'at-end' } },
    { title: 'Before the check',
      show: [{ kind: 'prose', text: 'The check is five new stories, then the tune test: three new five-note tunes with no line, and two sung right pass it. A tune is right when at least 4 of its 5 notes are on and the long last note holds 2 seconds. The last part of this course gives the tune test again on another day.' }] },
    { title: 'Away from the phone',
      show: [{ kind: 'prose', text: 'Take the first line of a song you know. Sing it slowly until every note is sure, then at its speed.' }] }
  ],
  check: { items: ['tune-chorus-leap', 'tune-guessing-end', 'tune-steady-all', 'tune-end-flat', 'tune-all-sharp', { sing: { task: 'melody', notes: 5, maxStep: 4, cents: 50 }, n: 3 }],
    feedback: 'after-each', pass: [{ ask: 'tune', right: { min: 4 }, of: 'the stories' }, { ask: 'sing', right: { min: 2 }, of: 'the tunes: at least 4 of 5 notes on and the last held 2 seconds' }] }
});

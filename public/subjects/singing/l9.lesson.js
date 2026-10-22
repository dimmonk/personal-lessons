// Singing, lesson 9: A breath that lasts the line (part 9). The fifth check: does the air last the line, without a gasp or squeezing out the last
// of it? The owner's "one breath that works, four ways the air goes wrong, and a fix for each", corrected by the research: there is no one right
// way to breathe for singing (research note V13), so the breath is judged by what it does, not by how the body moves. What trained singers do in
// common: a good breath but not the most they can hold, stopping well before the air is gone, breaths planned at the ends of lines (V13). One
// thing at a time (V9). Taught, worked once (P10), practised in pairs (P12), then a long note on one easy breath, sung (hold 6 seconds, the
// most the app asks), with the line and then without, saying under, on or over first (V10, V14). The check is six new cases, five right.
FC.lesson('singing', {
  id: 'l9', part: '9', title: 'A breath that lasts the line', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan of 2026-10-22.' }],
  why: [
    'You may have been told there is one right way to breathe for singing: belly out, shoulders still. Studies of trained singers found no such thing. Good singers breathe in very different ways, and each is steady in their own.',
    'So judge a breath by what it does: does the air last the line, with no gasp and no squeezing out the last of it?'
  ],
  flow: [
    { set: { items: [{ sing: { task: 'warmup' }, n: 1 }], order: 'listed' } },
    { title: 'What the air can do',
      show: [
        { kind: 'prose', text: 'This is the fifth check, after the notes are right. Trained singers start a line with a good breath, not the most they can hold, and they stop well before the air is gone. Filling right to the top, or singing on until nothing is left, takes more effort.' },
        { kind: 'prose', text: [
          'In a line, the air can do five things:',
          'Lasts the line: some air is left at the end, with no gasp. Leave it alone, however your body moves.',
          'A gasped breath: snatched in a hurry at the last moment, small and noisy, and gone before the line ends.',
          'Pressing on with no air left: you keep singing after the air is used up, and the last words come out thin or tight.',
          'Breathing in the middle of words: full breaths, but taken wherever you happen to run out.',
          'Air leaking out with the sound: you can hear air with your voice, soft and whispery, and the breath goes fast. A rough first try, not a tested fix: aim for a clearer sound with less air in it. If the airy sound is new, or does not clear, it counts as a hoarse voice: rest it, and see a doctor if it is not getting better in 7 to 10 days.'] },
        { kind: 'prose', text: 'For the gasp, the empty end and the breath in a word, the sensible plan is the same: plan your breaths. Read the words first, mark a breath at the end of a line, and take it there, before you run out.' },
        { kind: 'pair', a: { kind: 'prose', text: 'A gasped breath: the breath itself is small and hurried.' }, b: { kind: 'prose', text: 'Breathing in the middle of words: the breath is full, the place is wrong.' },
          compare: 'Look at the breath first, then at where it was taken.' }
      ] },
    { worked: 'breath-worked-tom' },
    { set: { items: [['breath-lena-snatch', 'breath-raj-halfway'], ['breath-dev-shoulders', 'breath-ana-squeeze'], ['breath-kim-whispery', 'breath-ben-belly']], order: 'listed' } },
    { title: 'One breath, one long note',
      show: [{ kind: 'prose', text: 'Now take one easy breath and hold a note for 6 seconds, on “oo”, at an even loudness. First with the line, then without it, saying where your note ended before you see it. The app measures only the note: whether it stayed on for the 6 seconds. Whether you had air left at the end is yours to notice. If the air ran out before 6 seconds, do not squeeze: breathe a little earlier and a little fuller next time.' }] },
    { set: { items: [{ sing: { task: 'hold', seconds: 6, cents: 50 }, n: 3 }], order: 'listed', support: { line: true } } },
    { set: { items: [{ sing: { task: 'hold', seconds: 6, cents: 50 }, n: 3 }], order: 'listed', guess: true } },
    { title: 'Away from the phone',
      show: [{ kind: 'prose', text: 'Print or write out the words of a song you like. Mark a breath at the end of each line, then sing it breathing only at the marks.' }] }
  ],
  check: { items: ['breath-sara-lastsecond', 'breath-luis-pushes-on', 'breath-eva-split-word', 'breath-noah-hiss', 'breath-amy-ribs', 'breath-oli-quick'], feedback: 'at-end', pass: [{ right: { min: 5 } }] }
});

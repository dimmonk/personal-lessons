// Singing, lesson 2: Match a note (part 2). The pilot, kept and adapted to the plan of 2026-10-22: poor singing is mostly the link from the
// note heard to the note sung, and copying heard notes is the way to practise it (research note V3); hear it in your head first (V5); the line
// first, then none (V14; P17); without the line the learner says whether the note was under, on or over before the result (V10). Every note is
// made fresh from the learner's range; when no range is stored the first group opens with the range exercise (3.8). "On the note" is within
// 50 hundredths of a half-step here and in the check (the plan's pass mark, a judgement call: the field's line for a poor-pitch singer is
// about a half-step, V3, and untrained singers' intervals deviate by about 56 on average, V6, a measure of the gap between notes, not of one
// note). The half-step is the measure every result uses, so it is defined here once, with a tune everyone knows (V22), and heard.
// A note is on only when it starts on: a voice that slides into the note is named for the slide (lesson 3 teaches it), so this lesson says
// to aim at the note itself from the first moment.
FC.lesson('singing', {
  id: 'l2', part: '2', title: 'Match a note', rev: 2, status: 'live',
  history: [
    { rev: 1, date: '2026-10-10', change: 'First version, built as the pilot of Singing under the practice engine. Not tried on a phone yet.' },
    { rev: 2, date: '2026-10-22', change: 'Adapted to the new plan: a try in three steps (listen, hear it in your head, sing), the half-step defined with a tune everyone knows and heard, on the note within half a half-step, what to do after a miss, say under, on or over before the result in the group without the line, and one thing to do away from the phone.' }
  ],
  why: [
    'Most trouble singing in tune is not the ear. It is the link from the note you hear to the note your voice makes, and copying notes you have just heard is the way to practice that link.',
    'Hear the note in your head before you sing it. At first a line follows your voice, so you can watch yourself land on the note. Then the line goes away, and you say whether you were under, on or over before you see the result. That is how you learn to judge your own voice.'
  ],
  flow: [
    { set: { items: [{ sing: { task: 'warmup' }, n: 1 }], order: 'listed' } },
    { title: 'How a try goes',
      show: [
        { kind: 'prose', text: [
          'Each try has three steps:',
          '1. Tap Hear the note and listen to all of it.',
          '2. Hear it again in your head, silently, for a moment, until you could hum it back.',
          '3. Sing it on “oo” (as in “moon”) as soon as the note stops and the screen says Sing now. Aim at the note itself from the first moment, and keep going until the screen moves on. A voice that slides into the note or wanders before it settles is named for it, and does not count as on.'] },
        { kind: 'prose', text: 'How far off you were is told in half-steps. A half-step is the smallest step between two notes of a tune: the two notes that take turns at the start of the Jaws theme are a half-step apart, as are two notes right next to each other on a piano, counting the black ones. On the note here means within half of a half-step. A shade under or over is off by more than that but less than a whole half-step; well under or over is off by more.' },
        { kind: 'tones', says: 'The two notes of the Jaws theme, a half-step apart. That is the size of the step the results talk about.',
          examples: [
            { label: 'A half-step: the Jaws theme', play: [{ note: 'E3', ms: 500 }, { note: 'F3', at: 650, ms: 500 }, { note: 'E3', at: 1300, ms: 500 }, { note: 'F3', at: 1950, ms: 500 }] }
          ] },
        { kind: 'prose', text: 'The line is your voice. The bar is the note. Aim to put the line on the bar. If you miss, the result says which way you were off and about how far. Notice it, hear the next note in your head, and aim for it.' },
        { kind: 'prose', text: 'In the second group there is no line. When you finish, say whether you were under, on or over, then see what the app measured. Every note sits inside your own range.' }
      ] },
    { set: { items: [{ sing: { task: 'match', cents: 50 }, n: 8 }], order: 'listed', support: { line: true } } },
    { set: { items: [{ sing: { task: 'match', cents: 50 }, n: 8 }], order: 'listed', guess: true } },
    { title: 'Away from the phone',
      show: [{ kind: 'prose', text: 'Play one note of a song you know on a piano app. Hear it in your head, then sing it.' }] }
  ],
  check: { items: [{ sing: { task: 'match', cents: 50 }, n: 5 }], feedback: 'after-each', pass: [{ right: { min: 4 } }] }
});

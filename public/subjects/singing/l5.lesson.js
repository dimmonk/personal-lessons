// Singing, lesson 5: Steps and leaps (part 5). A tune is its notes and the gaps between them. Singers who struggle with pitch tend to make big
// gaps too small, and often sing a whole tune shifted (research note V3, in the 10-15% of untrained singers who sing clearly off; V2 makes no
// such claim for the rest). Each note is scored against the note played, as singing along with a recording needs, so the lesson says so and
// teaches what the app's result can show: the far note short or past, the first note off, or both notes off the same way. Example sounds of a step, a jump and a
// jump that falls short (75 off, a shade by the app's scoring). One case worked (P10), six in pairs (P12). Small steps, then big jumps,
// each with the line and then without (V14; P17), each try naming step or jump, saying under, on or over about the far note first (V10); a
// closer target last, its results held to the end of the group (V14). The check is five new cases and five pairs of notes. Pairs with
// these new names: went past, and first note off (2026-10-22, round 2 of the reviews: the result shows them, so they are named).
FC.lesson('singing', {
  id: 'l5', part: '5', title: 'Steps and leaps', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan of 2026-10-22.' }],
  why: [
    'A tune is notes and the gaps between them. Singers who struggle to sing in tune tend to make big jumps too small: they fall short of the far note.',
    'When you sing along with a recording, both notes have to match the recording’s. So here each note is checked against its own note, and both have to be on.'
  ],
  flow: [
    { set: { items: [{ sing: { task: 'warmup' }, n: 1 }], order: 'listed' } },
    { title: 'Hear the gap first',
      show: [
        { kind: 'tones', says: 'A step is a small move between two notes, a jump a big one. In the third sound, the far note stops a shade short of where it should be.',
          examples: [
            { label: 'A small step', play: [{ note: 'D4', ms: 1000 }, { note: 'E4', at: 1150, ms: 1000 }] },
            { label: 'A big jump', play: [{ note: 'D4', ms: 1000 }, { note: 'A4', at: 1150, ms: 1000 }] },
            { label: 'A jump that falls short', play: [{ note: 'D4', ms: 1000 }, { note: 'A4', at: 1150, ms: 1000, cents: -75 }] }
          ] },
        { kind: 'prose', text: 'Before you sing, hear both notes in your head and notice whether it is a small step or a big jump: the first groups tell you which. On a big jump, aim for the far note on purpose.' },
        { kind: 'prose', text: [
          'Checked against the song, two notes can go five ways:',
          'Both notes on.',
          'Fell short on the jump: the first note on, the far note short of it. That is under after a jump up, and over after a jump down. It is the usual miss of singers who struggle with pitch.',
          'Went past on the jump: the first note on, the far note beyond it. That is over after a jump up, and under after a jump down.',
          'First note off, far note on: the jump started from the wrong place and still landed.',
          'Both notes off the same way: the jump was the right size but started from the wrong place.',
          'Whenever the first note is off, fix it first, and the jump follows.'] }
      ] },
    { worked: 'jump-worked-chorus' },
    { set: { items: [['jump-short-up', 'jump-both-low'], ['jump-short-down', 'jump-past-up'], ['jump-first-high', 'jump-both-high'], ['jump-short-big', 'jump-both-fine']], order: 'listed' } },
    { title: 'Now sing them',
      show: [{ kind: 'prose', text: 'Small steps first, then big jumps, each with the line and then without. After each try the result shows both notes, so you can name which of the five ways it went.' }] },
    { set: { items: [{ sing: { task: 'interval', minSemitones: 1, maxSemitones: 3, cents: 50 }, n: 4 }], order: 'listed', support: { line: true } } },
    { set: { items: [{ sing: { task: 'interval', minSemitones: 1, maxSemitones: 3, cents: 50 }, n: 4 }], order: 'listed', guess: true } },
    { set: { items: [{ sing: { task: 'interval', minSemitones: 4, maxSemitones: 9, cents: 50 }, n: 4 }], order: 'listed', support: { line: true } } },
    { set: { items: [{ sing: { task: 'interval', minSemitones: 4, maxSemitones: 9, cents: 50 }, n: 4 }], order: 'listed', guess: true } },
    { title: 'A closer target',
      show: [{ kind: 'prose', text: 'This last group wants you to land closer: within about a third of a half-step. Off by up to half a half-step is called a little under or over here. It is a stretch, not the check. You see how each try went at the end of the group, so judge each one yourself first.' }] },
    { set: { items: [{ sing: { task: 'interval', minSemitones: 2, maxSemitones: 7, cents: 35 }, n: 3 }], order: 'listed', guess: true, feedback: 'at-end' } },
    { title: 'Away from the phone',
      show: [{ kind: 'prose', text: 'Find the biggest jump in a song you know. Hear both notes in your head, then sing the jump on purpose, and check the far note against a piano app.' }] }
  ],
  check: { items: ['jump-drop-shallow', 'jump-start-low', 'jump-overshoot-drop', 'jump-start-sharp', 'jump-checked-fine', { sing: { task: 'interval', minSemitones: 2, maxSemitones: 7, cents: 50 }, n: 5 }],
    feedback: 'after-each', pass: [{ ask: 'jump', right: { min: 4 }, of: 'the stories' }, { ask: 'sing', right: { min: 4 }, of: 'the pairs of notes' }] }
});

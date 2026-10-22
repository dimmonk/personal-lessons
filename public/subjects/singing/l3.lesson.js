// Singing, lesson 3: Check before you fix (part 3). The third of the seven checks: is the note on, under or over? A note that sounds wrong is
// often fine, and the feeling is not the check (research note V1, V6); direction first (V15). The five things the check finds are taught with
// example sounds the app makes (the owner's ask of 2026-10-09), in two screens of look-alikes (P12): on, under and over; sliding up into a
// note and hunting for it. Each example sound is what the app's own scoring calls it: "a shade" is 75 hundredths of a half-step off (the
// app's shade is more than 50 and up to 100 in this lesson), and the slide into a note starts 300 under, which the app names as a slide.
// Two notes 75 apart beat about 13 times a second near the D the examples use, a fast flutter or roughness, slowing as they meet. One case
// worked (P10), six cases in pairs, then singing single notes, aiming at the note from the first moment (the app judges how a note starts
// and whether it wanders, so a slide into it or a hunt for it is named and is not on the note, V23; both example sounds score as what they
// are called), with the line and then without, saying under, on or over first (V10, V14). A reaction is sometimes right, sometimes wrong. The check
// is five new cases and five sung notes: naming what the check found, on new cases, and landing on the note.
FC.lesson('singing', {
  id: 'l3', part: '3', title: 'Check before you fix: on, under, over, scooping, guessing', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan of 2026-10-22.' }],
  why: [
    'A note that sounds wrong to you can be fine. And a note that really is off can be off in different ways, each with its own fix.',
    'So check before you fix: hold the song’s note steady, sing yours beside it, and notice which way you have to move.'
  ],
  flow: [
    { set: { items: [{ sing: { task: 'warmup' }, n: 1 }], order: 'listed' } },
    { title: 'The note check',
      show: [
        { kind: 'prose', text: 'Rosa’s sister says a line of hers sounded low. Rosa plays the line’s first note on a piano app and holds it, then sings her own note beside it. Hers sounds lower, so she moves her voice up until the two sound like one. Because she had to move up, she knows she was under.' },
        { kind: 'prose', text: 'That is the note check: a steady note (a piano app, or a long note of the recording while it plays), your note beside it, and which way you have to move. If you do not have to move at all, the note was fine. A reaction, yours or a friend’s, can be right or wrong: the check decides.' }
      ] },
    { title: 'On, under, over',
      show: [
        { kind: 'tones', says: 'Each sound plays the song’s note and your note together. When they match they sound like one. When yours is a shade off you hear a fast flutter or roughness, which slows and fades as yours moves onto the note.',
          examples: [
            { label: 'On the note', play: [{ note: 'D4', ms: 3000 }, { note: 'D4', ms: 3000 }] },
            { label: 'A shade under, then moving up', play: [{ note: 'D4', ms: 4000 }, { note: 'D4', path: [[0, -75], [1600, -75], [2500, 0], [4000, 0]] }] },
            { label: 'A shade over, then moving down', play: [{ note: 'D4', ms: 4000 }, { note: 'D4', path: [[0, 75], [1600, 75], [2500, 0], [4000, 0]] }] }
          ] },
        { kind: 'prose', text: 'A shade under stays a little low the whole way, less than a half-step, and you move up to match. Any note sung under is called flat, and any note over is called sharp. The fix for both is the same: check against a steady note and move to it.' }
      ] },
    { title: 'Sliding in, and hunting',
      show: [
        { kind: 'tones', says: 'Listen to how each note starts. The first slides up from below and arrives late, the second lands right on the note, and the third wanders up and down until it finds it.',
          examples: [
            { label: 'Sliding up into it', play: [{ note: 'D4', path: [[0, -300], [400, 0], [1500, 0]] }, { note: 'F4', at: 1800, path: [[0, -300], [400, 0], [1500, 0]] }] },
            { label: 'Landing on it', play: [{ note: 'D4', ms: 1500 }, { note: 'F4', at: 1800, ms: 1500 }] },
            { label: 'Hunting for the note', play: [{ note: 'D4', path: [[0, -250], [500, 130], [1000, -100], [1500, 70], [2000, -30], [2500, 0], [3500, 0]] }] }
          ] },
        { kind: 'pair', a: { kind: 'prose', text: 'A shade under: low from start to end, until you move it.' }, b: { kind: 'prose', text: 'Sliding up into it: starts low, then arrives on the note by itself within a moment, late.' },
          compare: 'Both start low. Only one stays there. Aim at the note itself, so you are on it from the start.' },
        { kind: 'prose', text: 'A note can also start above and slide down onto it: sliding down onto it, the same fault from above. Hunting often means the note was not in your head before you sang. The fix is the second check: hear it first. If it still wanders, slow down.' },
        { kind: 'prose', text: 'Next, a singer whose chorus sounded wrong to him and to his daughter. Watch what decides it: the check, not the reaction.' }
      ] },
    { worked: 'landing-worked-chorus' },
    { set: { items: [['landing-low-all-through', 'landing-slides-in'], ['landing-high-all-through', 'landing-wanders'], ['landing-sure-it-was-flat', 'landing-long-note-low']], order: 'listed' } },
    { title: 'Now land on it',
      show: [{ kind: 'prose', text: 'Now you match single notes. Aim at the note itself, so you are on it from the first moment. The app listens to how each note starts and whether it wanders: a voice that slides into the note, or hunts for it, is named for it, and does not count as on. First with the line, then without it, saying where you landed before you see it.' }] },
    { set: { items: [{ sing: { task: 'match', cents: 50 }, n: 4 }], order: 'listed', support: { line: true } } },
    { set: { items: [{ sing: { task: 'match', cents: 50 }, n: 4 }], order: 'listed', guess: true } },
    { title: 'Away from the phone',
      show: [{ kind: 'prose', text: 'Play a song you know and sing beside one of its long notes while it plays. Notice which way you move, and whether you had to slide in.' }] }
  ],
  check: { items: ['landing-karaoke-low', 'landing-glides-up', 'landing-friend-says-sharp', 'landing-high-note-high', 'landing-half-known', { sing: { task: 'match', cents: 50 }, n: 5 }],
    feedback: 'after-each', pass: [{ ask: 'landing', right: { min: 4 }, of: 'the stories' }, { ask: 'sing', right: { min: 4 }, of: 'the sung notes' }] }
});

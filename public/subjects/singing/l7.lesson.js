// Singing, lesson 7: Lighter, not louder (part 7). The fourth of the seven checks: a note that goes sharp or strained only where the line climbs
// or gets loud is effort, not the ear. Higher notes need more breath pressure, more pressure raises the note, and loud high singing presses the
// voice so it sounds strained (research note V11); "oo", a hum or a straw make the voice easier through the high range (V12). The look-alike is
// a top note that comes out easily but falls short (under), which is the note check (V3), and the range comes first (lesson 1, V21). Taught,
// worked once (P10), practised on cases in pairs (P12), then sung: the `light` task (a top note from the top fifth of the range, on the note
// and no louder than the learner's own talking note, measured from a loud note and a talking note in the same group), first on "oo" with the
// line, then without it, saying under, on or over first (V10, V14), then on "ah" (V12: "oo" first, then an open vowel). The check is five new
// cases and five light notes (4 of each).
FC.lesson('singing', {
  id: 'l7', part: '7', title: 'Lighter, not louder', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan of 2026-10-22.' }],
  why: [
    'When a line climbs, most people sing it louder to get up there. That habit is what goes wrong.',
    'A higher note does need more breath pressure. But more pressure also pushes the note higher, so a top note sung harder tends to go sharp, and loud high singing sounds strained. The way up is lighter, not louder.'
  ],
  flow: [
    { set: { items: [{ sing: { task: 'warmup' }, n: 1 }], order: 'listed' } },
    { title: 'Effort, or the note?',
      show: [
        { kind: 'prose', text: 'This is the fourth check. Range comes first: try the top note on “oo” at an easy loudness, about as loud as you talk. If it will not come without straining or shouting, the song is too high, and singing lighter cannot fix that. Move the song lower.' },
        { kind: 'prose', text: [
          'If it does come, sing the line as you usually do and check the top note against a steady note, such as a piano app:',
          'It goes sharp or strained only when you sing it loud, and on “oo” at an easy loudness it is on: that is pushing. The cause is effort. Sing it lighter and softer, on “oo” first, then the words.',
          'It comes out easily but sits under, loud or soft: that is falling short. The cause is the note, the third check: check it against a steady note and move up to it.',
          'It comes out light and on the note: a light, easy top. Leave it alone.'] },
        { kind: 'pair', a: { kind: 'prose', text: 'Pushing: over, or strained, only when loud.' }, b: { kind: 'prose', text: 'Falling short: under, at any loudness.' },
          compare: 'Which way it is off, and whether singing lighter changes it. If a pushed note is also a shade over, fix the pushing first: it is what made the note go sharp.' },
        { kind: 'prose', text: 'Humming, singing through a straw, or singing on “oo” make the voice work more easily, and make it easier to slide high smoothly. That is why a high note is tried on “oo” first.' }
      ] },
    { worked: 'effort-worked-karaoke' },
    { set: { items: [['effort-ella-louder', 'effort-ravi-under'], ['effort-hana-thin', 'effort-leo-shout'], ['effort-mei-friend', 'effort-carlos-sure']], order: 'listed' } },
    { title: 'Now sing it lightly',
      show: [
        { kind: 'prose', text: 'The app first wants one note sung loudly, then the same note at the loudness you talk at. That shows it what loud and talking mean for your voice. Then it plays notes from the top of your range: sing each one back on the note and no louder than you talk.' },
        { kind: 'prose', text: 'The app measures two things on each try: whether the note is on, and whether it was louder than your talking note. A try that was too loud says so, and it does not count, even on the note. Light is not a whisper: about as loud as talking. The first group is on “oo”, with the line. The second is on “oo” without the line, and you say where you landed before you see it. The third is on “ah”, the open sound most words use.' }
      ] },
    { set: { items: [{ sing: { task: 'light', cents: 50 }, n: 4 }], order: 'listed', support: { line: true } } },
    { set: { items: [{ sing: { task: 'light', cents: 50 }, n: 4 }], order: 'listed', guess: true } },
    { set: { items: [{ sing: { task: 'light', cents: 50 }, n: 3 }], order: 'listed', guess: true } },
    { title: 'Away from the phone',
      show: [{ kind: 'prose', text: 'Take the highest line of a song you know. Hum it, or sing it on “oo”, at an easy loudness, then sing the words just as lightly.' }] }
  ],
  check: { items: ['effort-dana-belts', 'effort-omar-moves-up', 'effort-grace-light', 'effort-pete-cannot', 'effort-ivy-sister', { sing: { task: 'light', cents: 50 }, n: 5 }],
    feedback: 'after-each', pass: [{ ask: 'effort', right: { min: 4 }, of: 'the stories' }, { ask: 'sing', right: { min: 4 }, of: 'the light notes' }] }
});

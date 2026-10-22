// Singing, lesson 10: Odd sound, right notes (part 10). The owner's "your voice sounds odd but the notes are right (airy, nasal, muffled): two
// quick checks". The sixth check, last (research note V8, V9): nasal, muffled and mumbled, and the recording surprise, which is the seventh check
// (nothing wrong). Airy was taught with the air in lesson 9. The two checks are done away from the phone (the app cannot hear tone, words or
// songs with lyrics: lesson standard 10.2): holding the nose shut on "ah", and recording a line and listening back; their accuracy is untested,
// so they are called rough checks, and their fixes first things to try, not tested cures (research note, "Where the evidence is thin"). The learner says what they heard before they look (V10).
// Taught, worked once (P10), practised in pairs (P12), the check six new cases, five right. No singing is scored here.
FC.lesson('singing', {
  id: 'l10', part: '10', title: 'Odd sound, right notes', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan of 2026-10-22.' }],
  why: [
    'Hearing yourself on a recording can be a shock. But a voice that sounds odd to you is not the same as a sound that is wrong.',
    'The sound of the words is the last check. Look at it only when the notes, the top and the air are right, and then use two quick checks to see whether anything is wrong at all.'
  ],
  flow: [
    { title: 'Two quick checks',
      show: [
        { kind: 'prose', text: [
          'First make sure an earlier check does not already explain it: the notes against a piano app, the top, the air. If one does, fix that first; the sound waits.',
          'Then two checks, away from the phone. They are rough checks, not measurements:',
          '1. Sing a long “ah”, as in “father”, and pinch your nose shut and let go while you keep singing. A lot of change means the sound suddenly turns blocked or buzzy when you pinch: a hint that sound is going out through your nose. Little change means it sounds about the same either way.',
          '2. Record a line on your phone’s voice memo and listen back. Can you follow every word? Is the sound open, or dull?'] },
        { kind: 'prose', text: [
          'What they can find. The fixes are first things to try, not tested cures:',
          'Your voice from outside: open, clear, every word easy to follow, little change with the nose held. Nothing is wrong; it only surprised you on the recording.',
          'Nasal: a pinched sound, and a big change with the nose held. Try a taller, more open “ah”, pinching and letting go as you sing, until pinching makes little difference. If the change will not go away, a speech therapist can check it.',
          'Muffled: the mouth barely opens, the sound is dull and stuck in the throat, and the words are hard to make out. Open your mouth more on the long sounds.',
          'Mumbled words: the sound is clear, but the edges of the words are soft or missing, so they run together. Speak the line clearly, then sing it the same way.'] },
        { kind: 'pair', a: { kind: 'prose', text: 'Muffled: the whole sound is dull.' }, b: { kind: 'prose', text: 'Mumbled: the sound is clear, the words are not.' },
          compare: 'Is it the sound, or only the words?' }
      ] },
    { worked: 'sound-worked-leo' },
    { set: { items: [['sound-maya-nose', 'sound-owen-recording'], ['sound-ruth-closed', 'sound-pablo-blur'], ['sound-hana-odd', 'sound-ivan-friend']], order: 'listed' } },
    { title: 'Away from the phone',
      show: [{ kind: 'prose', text: 'Do both checks today: sing “ah” with your nose held and let go, then record one line of a song and listen back. Say what you hear before you decide.' }] }
  ],
  check: { items: ['sound-cara-pinched', 'sound-dan-jaw', 'sound-ella-run', 'sound-gus-memo', 'sound-rita-air', 'sound-sam-mouth'], feedback: 'at-end', pass: [{ right: { min: 5 } }] }
});

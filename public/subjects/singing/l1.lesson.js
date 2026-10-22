// Singing, lesson 1: Before you blame your voice: your range (part 1). The plan's lesson 1: true tone deafness is rare and the feeling is not
// the test (research note V1); the seven checks as one map, the causes that change the result most first (a sensible order, not a researched
// one: research note, Gaps; fix one thing at a time, the biggest first, V9; P1, P30); range first (V3, V4). The learner finds their own range
// with the hum (the `range` task saves it; a range under a fifth is never saved, 3.8, so the range found in the flow is a fifth or more, and the
// plan's "range found" is met there, not in the check), sees one case worked through the range check (P10), practises six cases in look-alike
// pairs (P12), and the check is five new cases. A top note is tested at an easy loudness, not softly (V11, V21).
FC.lesson('singing', {
  id: 'l1', part: '1', title: 'Before you blame your voice: your range', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-22', change: 'First version, built to the plan of 2026-10-22.' }],
  why: [
    'Most people who think they cannot sing can. In a study of more than 16,000 adults, only about 1 or 2 in 100 had true tone deafness. Yet about 1 in 5 of the others said they had no ear for music.',
    'So the feeling is not the test. When a line goes wrong, run a few checks, in order, and fix one thing at a time. Here are the checks, then the first one: is the song in your range?'
  ],
  flow: [
    { set: { items: [{ sing: { task: 'warmup' }, n: 1 }], order: 'listed' } },
    { title: 'Seven checks, in order',
      show: [
        { kind: 'prose', text: 'Sam sings a song at karaoke and the chorus falls apart. He decides he has a bad voice. Start somewhere else: go through these checks in order, and stop at the first answer that explains it. The order puts first the causes that change the result most. It is a sensible order, not one a study has tested.' },
        { kind: 'prose', text: [
          '1. Is the song in my range? Mistakes grow on notes far from the ones you sing with ease.',
          '2. Did I hear the note before I sang it? You cannot aim at a note that is not in your head.',
          '3. Is the note on, under or over? Check it against a steady note. How it felt does not count.',
          '4. Does it go sharp or strained only where the line climbs or gets loud? Sharp means over the note, too high. Pushing harder makes a note go sharp and sound strained. That is effort, not your ear.',
          '5. Does the air last the line?',
          '6. How do the words sound? Nasal, muffled or mumbled comes last.',
          '7. Nothing is wrong. It just does not sound like the record.'] },
        { kind: 'prose', text: 'Fix one thing at a time, the biggest first. And whatever you find, pain or a hoarse voice means stop and rest.' }
      ] },
    { title: 'Range first',
      show: [
        { kind: 'prose', text: 'Lena sings along to a song on the radio. The verses are easy. The chorus jumps above the highest note she can sing with ease, and she has to shout to get there. Her ear is fine: that song sits too high for her voice. Moved lower, it fits.' },
        { kind: 'prose', text: 'Your range is the stretch from the lowest to the highest note you can sing with ease. To test a note, sing it on “oo” (as in “moon”) at an easy loudness, about as loud as you talk. A note in your range comes out without forcing. A note above it will not come without straining or shouting, however you try it. A note below it comes out as a rumble or only air. When a song goes outside your range, move the song. That is not a fault in you.' },
        { kind: 'prose', text: 'To move a song: many karaoke machines and music apps have a setting that moves the whole song lower or higher. Or pick a version of the song sung by a lower or higher voice, or, with friends, take the other part.' },
        { kind: 'prose', text: 'Now find yours. Hum a slide up to your highest easy note and hold it, then slide down to your lowest easy note and hold it. Easy notes, not the highest you can force.' }
      ] },
    { set: { items: [{ sing: { task: 'range' }, n: 1 }], order: 'listed' } },
    { worked: 'fit-worked-chorus' },
    { set: { items: [['fit-karaoke-squeak', 'fit-belted-top'], ['fit-car-rumble', 'fit-birthday-middle'], ['fit-hymn-mouthed', 'fit-duet-strain']], order: 'listed' } },
    { title: 'Away from the phone',
      show: [{ kind: 'prose', text: 'Take a song you like to sing. Sing its lowest and highest notes on “oo” at an easy loudness. If one will not come without forcing, try the song lower or higher.' }] }
  ],
  check: { items: ['fit-radio-bridge', 'fit-lullaby-worry', 'fit-campfire-air', 'fit-musical-end', 'fit-anthem-flat'], feedback: 'at-end', pass: [{ right: { min: 4 } }] }
});

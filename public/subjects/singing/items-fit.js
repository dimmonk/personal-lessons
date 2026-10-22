// Singing, lesson 1: is the song in your range? (part 1). Each case is what a singer noticed about one song, put to the first of the seven
// checks: does every note sit between the lowest and highest notes they can sing with ease (research note V3, V4)? The answer is one of the
// list `fit`. The test of a top note is whether it comes out without forcing at an easy loudness, on "oo" first, not whether it comes
// softly: a higher note needs more breath pressure to sound at all, so a very soft note near the top of a healthy range may not start
// (V11, V21). The look-alike is a high note that is in range but pushed (the fourth check, V11): at full voice it goes sharp and strained,
// at an easy loudness it comes out clean. A reaction (a worry, a friend's remark) is sometimes confirmed by the check and sometimes not, in
// the practice and in the check. The worked case, the practice, the check and three cases held back for the review are all here.
(() => {
  const fit = sgCase({ strand: 'fit', list: 'fit', prompt: 'Is the song in their range?', means: {
    in: 'In range would mean every note comes out without forcing, at an easy loudness.',
    high: 'Too high would mean a note sits above your highest easy note: it will not come without straining or shouting, however you try it.',
    low: 'Too low would mean a note sits below your lowest easy note, so it comes out as a rumble or only air.'
  } });
  FC.items('singing', [
    // ----- the worked case: both ends of the song against the range -----
    fit({ id: 'fit-worked-chorus', right: 'high',
      story: 'Lena found her range with the hum: her easy notes run from a low hum up to a note a little above her talking voice. She sings along to a song she loves. The verses sit comfortably. The chorus climbs past the top of her easy hum. She tries the top note at an easy loudness on “oo”, and still she cannot get there without forcing.',
      steps: [
        { id: 'low', does: 'Check the lowest notes.', working: 'The verses sit comfortably, so the bottom of the song fits her range.' },
        { id: 'top', does: 'Check the highest notes.', working: 'The chorus goes past the top of her easy hum.' },
        { id: 'easy', does: 'Try the top note at an easy loudness, on “oo”.', working: 'It will not come without forcing. A note in her range would come out without forcing.', ask: 'fit' }],
      reason: 'The top of the chorus will not come without forcing, even on “oo” at an easy loudness, so the song is too high for her; her voice is not the problem. Move it lower, then go on to the next check.' }),

    // ----- practice: two of each answer, a pushed note in range beside a note out of range -----
    fit({ id: 'fit-karaoke-squeak', right: 'high', slips: { in: 'blame' },
      story: 'Jordan picks a karaoke song. The last chorus jumps to a high note. Sung loud, it cracks. Tried on “oo” at an easy loudness, it comes out as a squeak or not at all.',
      reason: 'It will not come without forcing, however he tries it, so it is above Jordan’s range. The song is too high: move it lower.' }),
    fit({ id: 'fit-belted-top', right: 'in',
      story: 'Priya’s song climbs to a high note. When she sings it at full voice, it goes sharp and strained. Sung on “oo” at an easy loudness, it comes out clean.',
      reason: 'At an easy loudness the top note comes out clean, so it is in her range. Going sharp only when she sings it loud is a later check: effort.' }),
    fit({ id: 'fit-car-rumble', right: 'low',
      story: 'Marcus sings along to a song in the car. The chorus is easy. The verse starts so low that his voice turns into a breathy rumble he can hardly hear.',
      reason: 'A rumble he can hardly hear means the verse is below his range. The song is too low for him: move it higher.' }),
    fit({ id: 'fit-birthday-middle', right: 'in', slips: { high: 'feeling', low: 'feeling' },
      story: 'At a party, Ana leads “Happy Birthday”. Every note of it comes out easily, without forcing. One note in the middle sounded a bit off to her.',
      reason: 'Every note comes easily, so the song is in her range. Whether that one note was off is for the next checks.' }),
    fit({ id: 'fit-hymn-mouthed', right: 'low',
      story: 'At a family service, Tom sings a hymn from the book. Each line drops at the end to notes so low that only air comes out, and he can only mouth them.',
      reason: 'Only air on the lowest notes means they are below his range. The hymn is too low for him: move it higher.' }),
    fit({ id: 'fit-duet-strain', right: 'high',
      story: 'Mia sings a duet with a friend and takes the higher part. Her friend says she sounds strained on the top notes. She tries them on “oo” at an easy loudness: some she reaches only by straining, and some do not come out at all.',
      reason: 'The top notes need straining or do not come at all, so they are above her range; her friend’s remark was right, and the check showed why. That part is too high for her: move it lower, or take the other part.' }),

    // ----- the check: new cases -----
    fit({ id: 'fit-radio-bridge', right: 'high',
      story: 'Dev’s sister says he sounds like he is shouting in the middle of a song he likes. He tries its highest note on “oo” at an easy loudness, and it will not come.',
      reason: 'It will not come without shouting, so it is above his range. The song is too high: move it lower.' }),
    fit({ id: 'fit-lullaby-worry', right: 'in', slips: { high: 'feeling', low: 'feeling' },
      story: 'Rosa sings a lullaby to her baby. Every note of it comes out easily, without forcing. She worries her voice is not good enough.',
      reason: 'Every note comes easily, so the song is in her range. A worry is a feeling, not a check.' }),
    fit({ id: 'fit-campfire-air', right: 'low',
      story: 'At a campfire, the group starts a song very low. When Kim joins in on the first line, only air comes out.',
      reason: 'Only air on the low notes means they are below her range. For her the song is too low: move it higher.' }),
    fit({ id: 'fit-musical-end', right: 'high', slips: { in: 'blame' },
      story: 'Sam tries a song from a musical. The big note at the end is high. On “oo” at an easy loudness it will not come, and loud he can only shout at it.',
      reason: 'A note that will not come without forcing, however he tries it, is above his range. The song is too high for him: move it lower.' }),
    fit({ id: 'fit-anthem-flat', right: 'in',
      story: 'Lee sings the national anthem at a ballgame. The high note near the end comes out fine at an easy loudness. A friend says that note sounded a shade low.',
      reason: 'The high note comes out fine without forcing, so the song is in his range. Whether it was low is a later check: the note itself.' }),

    // ----- held back for the review -----
    fit({ id: 'fit-wedding-lift', right: 'high',
      story: 'At a wedding, Nia sings a song she knows. Near the end the last chorus moves up, and its top note will not come without straining, however she tries it.',
      reason: 'A note that will not come without straining is above her range. The song is too high there: move it lower.' }),
    fit({ id: 'fit-friends-crackle', right: 'low',
      story: 'Ben joins in a song with friends. The low part they give him goes so low that those notes come out as a rumble he can hardly hear.',
      reason: 'A rumble on the low notes means they are below his range. That part is too low for him: take a higher part, or move it up.' }),
    fit({ id: 'fit-car-daughter', right: 'in', slips: { high: 'feeling', low: 'feeling' },
      story: 'Alex sings along in the car. Every note comes out easily, without forcing. Her daughter says one line sounded off.',
      reason: 'Every note comes easily, so the song is in her range. A line that sounded off is for the next checks.' })
  ]);
})();

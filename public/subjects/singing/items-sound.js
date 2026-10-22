// Singing, lesson 10: how the words sound (part 10). The sixth check, last of all: only when the notes, the top and the air are right is the sound
// of the words the cause (the teaching tradition puts resonance and articulation after breathing and voicing, research note V8; one thing at a time,
// the biggest first, V9). The list `sound`: your voice from outside (open, clear, the words easy to follow, little change when the nose is held:
// nothing wrong, the seventh check, only a surprise on a recording); nasal (a pinched sound that changes a lot when the nose is held on "ah");
// muffled (the mouth barely opens, dull, the words hard to make out); mumbled (a clear sound, the edges of the words soft or missing, so they run
// together); and not the sound yet, when an earlier check finds the cause (the order, practised). The app cannot hear any of these: the checks are
// done away from the phone, by holding the nose shut on "ah" and by recording a line and listening back, and their accuracy is untested, so the
// lesson calls them rough checks (research note, "Where the evidence is thin"). The fixes are judgement calls that undo what defines each sound.
// The people are invented.
(() => {
  const sound = sgCase({ strand: 'sound', list: 'sound', prompt: 'What is going on with the sound?', means: {
    outside: 'Your voice from outside would mean the sound is open, the words are easy to follow, and holding your nose on “ah” changes little; only hearing it recorded was a surprise.',
    nasal: 'Nasal would mean a pinched sound that seems to come out of the nose, and holding your nose shut on “ah” changes it a lot.',
    muffled: 'Muffled would mean the mouth barely opens and the sound is dull and stuck in the throat, so the words are hard to make out.',
    mumbled: 'Mumbled words would mean the sound is open and clear, but the edges of the words are soft or missing, so the words run together.',
    earlier: 'Not the sound would mean an earlier check, the note, the top or the air, already finds what went wrong, so the sound waits.'
  } });
  FC.items('singing', [
    sound({ id: 'sound-worked-leo', right: 'outside', slips: { nasal: 'feeling', muffled: 'feeling', mumbled: 'feeling' },
      story: 'Leo records himself singing a line and hates how it sounds. He checks: the notes match the piano app and the air lasts the line. The sound is open, a friend can follow every word, and holding his nose shut on “ah” changes it very little.',
      steps: [
        { id: 'earlier', does: 'Do the earlier checks find anything?', working: 'The notes match and the air lasts, so they are clear.' },
        { id: 'sound', does: 'Run the sound checks.', working: 'Open sound, every word clear, little change with the nose held.', ask: 'sound' }],
      reason: 'Every check is clear; only the recording surprised him: your voice from outside. Nothing is wrong. Leave it alone.' }),

    // pairs
    sound({ id: 'sound-maya-nose', right: 'nasal',
      story: 'Maya’s notes are right and her air lasts. Her sound is pinched, as if it comes out of her nose, and when she holds her nose shut on “ah” it changes a lot.',
      reason: 'Pinched, and a big change with the nose held: nasal. A first try: a taller, more open “ah”, pinching and letting go as you sing, until pinching makes little difference.' }),
    sound({ id: 'sound-owen-recording', right: 'outside', slips: { nasal: 'feeling', mumbled: 'feeling' },
      story: 'Owen’s voice sounds strange to him on a voice memo. His notes match the piano app, his air lasts, every word is easy to follow, and holding his nose on “ah” changes almost nothing.',
      reason: 'Every check is clear; only the recording was strange to him: your voice from outside. Leave it alone.' }),
    sound({ id: 'sound-ruth-closed', right: 'muffled',
      story: 'Ruth’s notes and air are fine. She sings with her mouth barely open, the sound is dull and seems stuck in her throat, and on a recording her words are hard to make out.',
      reason: 'Mouth barely open, a dull sound, words hard to make out: muffled. A first try: open your mouth more on the long sounds of the words.' }),
    sound({ id: 'sound-pablo-blur', right: 'mumbled',
      story: 'Pablo’s notes are right and his air lasts. His sound is open and clear, but on a recording the edges of his words are soft, and they run into each other.',
      reason: 'A clear sound, but soft edges and words running together: mumbled words. A first try: speak the line clearly, then sing it just as clearly.' }),
    sound({ id: 'sound-hana-odd', right: 'earlier',
      story: 'Hana’s recording sounds odd to her, and she thinks her sound is the problem. Checked against a piano app, the long note in the chorus sits a little under.',
      reason: 'A note is off, and the note check comes before the sound: not the sound yet. Fix the note first, then listen again.' }),
    sound({ id: 'sound-ivan-friend', right: 'nasal', slips: { outside: 'feeling' },
      story: 'A friend says Ivan sounds as if he is singing through his nose. His notes and air are fine. Holding his nose shut on “ah” changes the sound a lot.',
      reason: 'Sounding as if through the nose, and a big change with the nose held: nasal. A first try: a taller, more open “ah”, until pinching makes little difference.' }),

    // check: new cases
    sound({ id: 'sound-cara-pinched', right: 'nasal',
      story: 'Cara’s notes match the piano app and her air lasts. Her sound is pinched, and with her nose held shut on “ah” it changes completely.',
      reason: 'Pinched, and it changes completely with the nose held: nasal. A first try: a taller, more open “ah”; if the change will not go away, a speech therapist can check it.' }),
    sound({ id: 'sound-dan-jaw', right: 'muffled', slips: { outside: 'feeling' },
      story: 'Dan thinks his singing sounds fine. His notes and air are right, but he barely opens his mouth, the sound stays back in his throat, and listeners cannot make out his words.',
      reason: 'Mouth barely open, a dull sound, words lost: muffled. A first try: open your mouth more on the long sounds.' }),
    sound({ id: 'sound-ella-run', right: 'mumbled',
      story: 'Ella’s notes and air are fine and her sound is clear and open. On a recording, the ends of her words disappear and the words run together.',
      reason: 'A clear sound, but the ends of words lost: mumbled words. A first try: speak the line clearly, then sing it the same way.' }),
    sound({ id: 'sound-gus-memo', right: 'outside', slips: { nasal: 'feeling', muffled: 'feeling', mumbled: 'feeling' },
      story: 'Gus dislikes his voice on a recording. The notes match, the air lasts, the sound is open, the words are clear, and holding his nose on “ah” changes little.',
      reason: 'Every check is clear: your voice from outside. Leave it alone.' }),
    sound({ id: 'sound-rita-air', right: 'earlier',
      story: 'Rita thinks her sound is weak and wants to work on it. Her notes are right, but she runs out of air before the end of each long line.',
      reason: 'The air runs out, and the air check comes before the sound: not the sound yet. Plan your breaths first.' }),
    sound({ id: 'sound-sam-mouth', right: 'muffled',
      story: 'Sam’s notes match the piano app and his air lasts. His mouth hardly opens, and the sound comes out dull, so his words are hard to make out.',
      reason: 'Hardly open, dull, words hard to make out: muffled. A first try: open your mouth more on the long sounds.' }),

    // held back for the review
    sound({ id: 'sound-ola-honk', right: 'nasal',
      story: 'Ola’s notes and air are right. Her sound seems to come out of her nose, and holding it shut on “ah” changes it a lot.',
      reason: 'A big change with the nose held: nasal.' }),
    sound({ id: 'sound-ted-words', right: 'mumbled',
      story: 'Ted’s notes and air are fine, and his sound is clear, but a friend cannot follow the words: they run together.',
      reason: 'A clear sound, the words running together: mumbled words. A first try: speak them clearly first.' }),
    sound({ id: 'sound-una-top', right: 'earlier',
      story: 'Una wants to fix her sound. Her top notes get louder and louder as the line climbs and go a shade sharp.',
      reason: 'Pushing at the top, the fourth check, comes before the sound: not the sound yet. Sing the top lighter first.' })
  ]);
})();

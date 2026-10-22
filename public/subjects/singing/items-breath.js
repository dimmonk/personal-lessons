// Singing, lesson 9: what the air does in a line (part 9). The fifth check: does the air last the line, without a gasp or squeezing out the last
// of it? Judged by the outcome, never by one body pattern: trained singers breathe in very different ways, rib cage or belly, and the best in
// one sample used different patterns; they start a line with a good breath but not the most they can hold, and stop well before the air is
// gone, which takes less effort (research note V13). So a breath whose air lasts the line is fine however the body moved (the old course's
// "belly out, shoulders still" is not the definition; the slip `oneway`). The five (list `breath`): lasts the line; a gasped breath, snatched
// at the last moment, that runs out early; pressing on with no air left, squeezing out the last words; breathing in the middle of words, where
// the air happened to run out; air leaking out with the sound (a tone quality the app cannot measure; its fix, a clearer sound with less air
// in it, is a judgement call, research note "Where the evidence is thin"). The fix for the first three faults is a planned breath at the end of
// a line, a sensible plan the note gives as its use of V13, not a passage it quotes. Air leaking out with the sound is also a change in the voice's
// sound, which the hoarseness guideline calls hoarseness (V19): when it is new or does not clear, it goes to the care rule (rest; a doctor if not
// getting better in 7 to 10 days); the clearer-sound aim is labelled a rough first try. Every story says the notes are right, so no earlier
// check explains it, and every gasp or empty story says how big the breath was and when it was taken. The people are invented.
(() => {
  const breath = sgCase({ strand: 'breath', list: 'breath', prompt: 'What is the air doing?', means: {
    lasts: 'A breath that lasts the line would mean each line ends with some air still left and no gasp, however the body moved.',
    gasp: 'A gasped breath would mean a breath snatched in a hurry at the last moment, small and noisy, that runs out before the line ends.',
    empty: 'Pressing on with no air left would mean carrying on after the air is used up, squeezing out the last words until the voice goes thin or tight.',
    midword: 'Breathing in the middle of words would mean full breaths taken wherever the air ran out, breaking a word or a phrase in two.',
    airy: 'Air leaking out with the sound would mean you can hear air along with the voice, soft and whispery, and the breath goes fast however full it was.'
  } });
  FC.items('singing', [
    breath({ id: 'breath-worked-tom', right: 'midword',
      story: 'Tom sings a song he loves, and every note matches the recording. His breaths are full and quiet, but he takes them wherever he runs out: in the chorus he breathes in the middle of the word “forever”.',
      steps: [
        { id: 'notes', does: 'Are the notes right?', working: 'They match the recording, so the earlier checks are clear.' },
        { id: 'breath', does: 'Is the breath itself the trouble?', working: 'No: each one is full and quiet.' },
        { id: 'where', does: 'Where does he breathe?', working: 'Wherever he runs out, even in the middle of a word.', ask: 'breath' }],
      reason: 'Full breaths in the wrong places: breathing in the middle of words. Read the words first and mark a breath at the end of each line, then breathe only there.' }),

    // pairs
    breath({ id: 'breath-lena-snatch', right: 'gasp',
      story: 'Lena’s notes are right. She waits until the last moment before the chorus, then snatches a quick, noisy breath, and it runs out before the end of the line.',
      reason: 'A quick, noisy breath snatched at the last moment that runs out early: a gasped breath. Plan the breath at the end of the line before, where there is time for it.' }),
    breath({ id: 'breath-raj-halfway', right: 'midword',
      story: 'Raj sings every note on the note. His breaths are full and easy, but he takes one wherever he runs out, once halfway through a word.',
      reason: 'Full breaths, wherever he runs out: breathing in the middle of words. Mark breaths at the ends of lines.' }),
    breath({ id: 'breath-dev-shoulders', right: 'lasts', slips: { gasp: 'oneway', empty: 'oneway', midword: 'oneway', airy: 'oneway' },
      story: 'Dev’s shoulders lift a little when he breathes in, and a friend says that is the wrong way to breathe. His notes are right, and each line ends with air still left, with no gasp.',
      reason: 'The air lasts every line with some left: a breath that lasts the line. Good singers breathe in different ways; judge the breath by whether it lasts, not by how the body moves.' }),
    breath({ id: 'breath-ana-squeeze', right: 'empty',
      story: 'Ana’s notes match the piano app. She takes a full, unhurried breath before each line, but in each long line she keeps singing after her air is used up, squeezing out the last words, and her voice goes thin and tight at the end.',
      reason: 'Singing on after the air is gone: pressing on with no air left. Breathe before you run out, at the end of an earlier line, so you never sing on empty.' }),
    breath({ id: 'breath-kim-whispery', right: 'airy', slips: { lasts: 'feeling' },
      story: 'Kim feels her breathing is fine, and her notes are right. Listening back to a recording, you can hear air along with her voice, soft and whispery, and she runs out fast even after a full breath.',
      reason: 'Air heard with the sound, and the breath goes fast however full it was: air leaking out with the sound. As a rough first try, not a tested fix, aim for a clearer sound with less air in it. If the airy sound is new or does not clear, treat it as a hoarse voice.' }),
    breath({ id: 'breath-ben-belly', right: 'lasts', slips: { gasp: 'oneway', empty: 'oneway', midword: 'oneway', airy: 'oneway' },
      story: 'Ben worries he breathes wrong because his belly barely moves. His notes are right, and each line ends with air still left and no gasp.',
      reason: 'Air left at the end of every line: a breath that lasts the line. There is no one right way for the body to move.' }),

    // check: new cases
    breath({ id: 'breath-sara-lastsecond', right: 'gasp',
      story: 'Sara sings the notes right, but she forgets to breathe until the line is about to start. Then she gulps a small, noisy breath, and it is gone before the last word.',
      reason: 'A small, noisy gulp at the last second that runs out early: a gasped breath. Plan a breath where there is time, at the end of the line before.' }),
    breath({ id: 'breath-luis-pushes-on', right: 'empty', slips: { lasts: 'feeling' },
      story: 'A friend tells Luis his breathing sounds fine. His notes are right, and he fills up slowly and fully before the longest line, but he keeps going after the air runs out, and the last two words come out thin and squeezed.',
      reason: 'Singing on after the air ran out: pressing on with no air left. Breathe before you run out.' }),
    breath({ id: 'breath-eva-split-word', right: 'midword',
      story: 'Eva’s notes match the recording. Her breaths are deep and quiet, but she takes them wherever her air ends, and one falls in the middle of “tonight”.',
      reason: 'Good breaths in the middle of a word: breathing in the middle of words. Mark breaths at the ends of lines.' }),
    breath({ id: 'breath-noah-hiss', right: 'airy',
      story: 'Noah’s notes match the piano app. On a recording, he can hear a hiss of air with every note, and the sound is soft and whispery. Even after a full breath he runs out quickly.',
      reason: 'Air heard with the sound, and the breath going fast: air leaking out with the sound. A rough first try: a clearer sound with less air in it. If it is new or does not clear, treat it as a hoarse voice.' }),
    breath({ id: 'breath-amy-ribs', right: 'lasts', slips: { gasp: 'oneway', empty: 'oneway', midword: 'oneway', airy: 'oneway' },
      story: 'Amy breathes in with her ribs widening more than her belly, which a video told her is wrong. Her notes are right, and every line ends with air to spare.',
      reason: 'Air to spare at the end of every line: a breath that lasts the line. How the body moves is not the test.' }),
    breath({ id: 'breath-oli-quick', right: 'gasp',
      story: 'Oli breathes with his belly out and his shoulders still, the way he was taught, and his notes are right. Between two lines that run close together, he leaves the breath to the last instant and snatches a small, noisy one; it is gone before the next line ends.',
      reason: 'A small, noisy breath snatched at the last instant that runs out early: a gasped breath. The body moving the “right” way did not make it a good breath; plan where you breathe, so there is time for a full one.' }),

    // held back for the review
    breath({ id: 'breath-ivy-gulp', right: 'gasp',
      story: 'Ivy’s notes are right, but she leaves her breath to the last instant and gulps a small one that runs out early.',
      reason: 'A last-instant gulp that runs out early: a gasped breath. Plan the breath where there is time.' }),
    breath({ id: 'breath-hugo-chorus', right: 'midword',
      story: 'Hugo’s belly moves out as he breathes, just as he read it should, and his notes match the piano app. His breaths are full, but he takes them wherever he runs out, splitting a word in the chorus.',
      reason: 'Full breaths in the middle of a word: breathing in the middle of words. Mark breaths at the ends of lines.' }),
    breath({ id: 'breath-zoe-spare', right: 'lasts', slips: { gasp: 'oneway', empty: 'oneway', midword: 'oneway', airy: 'oneway' },
      story: 'Zoe’s shoulders rise a little when she breathes, and she wonders if that is a fault. Her notes are right and every line ends with air left.',
      reason: 'Air left at the end of every line: a breath that lasts the line. Leave it alone.' })
  ]);
})();

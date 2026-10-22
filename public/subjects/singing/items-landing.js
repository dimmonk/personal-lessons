// Singing, lesson 3: where the note lands (part 3). Each case is a singer running the note check: a steady note (a piano app, or a long
// note of the recording as it plays), their own note sung beside it, and which way, if any, they had to move. The answer is one of the five
// things the check can find (list `landing`): on the note, a shade under, a shade over, sliding up into it, hunting for it (research note
// V5, V6, V15, V23; the feeling is not the check, V1). Hunting often means the note was not in the head first (V5, correlational), and can
// also be the voice's own control (V3), so it is never given one cause. A reaction (a feeling, a friend's remark) is sometimes right and
// sometimes wrong: in the practice and in the check, one reaction is confirmed by the check and one is not, so only the check decides. The
// practice asks the cases in look-alike pairs (P12): under beside sliding up (both start low, and how long each stays low decides), over
// beside hunting (both move), and two reactions, one the check confirms and one it does not. Five new cases in the check, three held back.
(() => {
  const landing = sgCase({ strand: 'landing', list: 'landing', prompt: 'Where did the note land?', means: {
    on: 'On the note would mean the two sound like one from the start, and nothing has to move.',
    under: 'A shade under would mean the note stays a little low the whole way, and you move up to match.',
    over: 'A shade over would mean the note stays a little high the whole way, and you move down to match.',
    scoop: 'Sliding up into it would mean the note starts low and slides up by itself in a moment, arriving on the note late.',
    hunt: 'Hunting for the note would mean the voice wanders up and down before it settles, often because the note was not in your head first.'
  } });
  FC.items('singing', [
    // ----- the worked case: a note that felt wrong and was fine -----
    landing({ id: 'landing-worked-chorus', right: 'on', slips: { under: 'feeling', over: 'feeling' },
      story: 'On the drive home Hector sings along with a song, and the chorus sounds wrong to him. His daughter says, “Dad, that one sounded funny.” At home he plays the chorus’s first note on a piano app and holds it, then sings his own note beside it. The two sound like one from the start, and he does not have to move at all.',
      steps: [
        { id: 'feeling', does: 'Put the reaction aside.', working: 'It sounded wrong to him and funny to his daughter. That might be right or wrong; only the check can say.' },
        { id: 'steady', does: 'Hold the song’s note steady.', working: 'He played the chorus’s first note on a piano app, so he had a steady note to sing against.' },
        { id: 'beside', does: 'Sing yours beside it and notice which way you move.', working: 'The two sounded like one from the start, and he did not move at all.', ask: 'landing' }],
      reason: 'His note and the song’s note sounded like one with nothing to move: on the note. This time the reaction was wrong, so he leaves it alone.' }),

    // ----- practice, in pairs -----
    landing({ id: 'landing-low-all-through', right: 'under', slips: { on: 'feeling' },
      story: 'Jess’s sister says her first note sounded low. Jess holds that note on a piano app and sings beside it. Her note sits a little low from start to end, and she has to move up to make the two sound like one.',
      reason: 'Low the whole way, and she moved up to match: a shade under. Her sister was right, and the check is what showed it. Move to the steady note.' }),
    landing({ id: 'landing-slides-in', right: 'scoop',
      story: 'Omar checks his first note against a piano app. His voice starts low and slides up by itself, reaching the note about half a second after he starts, then stays on it.',
      reason: 'It started low and slid up on its own until it arrived: sliding up into it. Aim for the note itself, so you are on it from the start.' }),
    landing({ id: 'landing-high-all-through', right: 'over',
      story: 'Grace checks the high note of a chorus against a piano app. Her note stays a little high the whole time, and she has to ease down to match.',
      reason: 'High the whole way, and she eased down to match: a shade over. Check it and move to the steady note.' }),
    landing({ id: 'landing-wanders', right: 'hunt',
      story: 'Leo starts singing a song before playing its first note. When he checks against a piano app, his voice wanders up, then down, then up again, before it settles.',
      reason: 'Up, down and up again before settling: hunting for the note. He sang before the note was in his head, so hear it first; if it still wanders, slow down.' }),
    landing({ id: 'landing-sure-it-was-flat', right: 'on', slips: { under: 'feeling', over: 'feeling' },
      story: 'Maya is sure the last note of her song was flat, a shade under. She plays it on a piano app and sings beside it: the two sound like one from the start, and she does not move at all.',
      reason: 'The two sounded like one and nothing moved: on the note. She was sure, and the check says otherwise.' }),
    landing({ id: 'landing-long-note-low', right: 'under',
      story: 'Chris sings along with a recording, beside one of its long notes as it plays. For the whole two seconds he holds his, it sounds a little lower than the recording’s, until he deliberately moves up to it.',
      reason: 'Lower for the whole note, and he had to move it up himself: a shade under. Sliding up into it would have started low and arrived by itself within a moment.' }),

    // ----- the check: new cases -----
    landing({ id: 'landing-karaoke-low', right: 'under',
      story: 'At karaoke, Paul plays the first note of the chorus on a piano app and sings beside it. His note sounds lower the whole time he holds it, and he has to raise it to make the two sound like one.',
      reason: 'Low the whole time, and he raised it to match: a shade under. Check against the steady note and move to it.' }),
    landing({ id: 'landing-glides-up', right: 'scoop',
      story: 'Dana checks the first word of her song against a piano app. Her voice begins well below the note and glides up by itself, getting there about half a second in, then stays.',
      reason: 'It began low and glided up on its own to arrive late: sliding up into it. Aim for the note itself from the first moment.' }),
    landing({ id: 'landing-friend-says-sharp', right: 'on', slips: { under: 'feeling', over: 'feeling' },
      story: 'Sofia’s friend tells her the last note of her song was sharp. Sofia plays it on a piano app and sings beside it. From the first moment the two sound like one, and she does not move.',
      reason: 'The two sounded like one from the start with nothing to move: on the note. This time the friend’s reaction was wrong.' }),
    landing({ id: 'landing-high-note-high', right: 'over', slips: { on: 'feeling' },
      story: 'Ray’s brother says his high note sounded sharp. Ray plays it on a piano app and sings beside it. His note sits a little above it from start to end, and he eases down to match.',
      reason: 'High from start to end, and he eased down to match: a shade over. His brother was right, and the check showed it.' }),
    landing({ id: 'landing-half-known', right: 'hunt',
      story: 'Kayla sings a song she half knows. Checking one note against a piano app, her voice goes up past it, comes down below it, and goes up again before it settles.',
      reason: 'Up, down and up before settling: hunting for the note. Hear the note in your head first; if it still wanders, slow down.' }),

    // ----- held back for the review -----
    landing({ id: 'landing-thinks-flat', right: 'under', slips: { on: 'feeling' },
      story: 'Ivan thinks he was flat on the long note of a song. He plays that note on a piano app and sings beside it: his stays a little low the whole time, until he nudges it up.',
      reason: 'Low the whole time until he moved it: a shade under. His feeling was right, and the check confirmed it.' }),
    landing({ id: 'landing-nudges-up', right: 'on',
      story: 'Bea plays the song’s note on a piano app and holds it. Her own note sounds like one with it from the first moment, and she does not move.',
      reason: 'One sound from the start with nothing to move: on the note. Leave it alone.' }),
    landing({ id: 'landing-hymn-glide', right: 'scoop',
      story: 'Theo checks the first note of a hymn against a piano app. Each time, his voice begins low and glides up by itself, reaching the note a moment after he starts.',
      reason: 'Low at first, then arriving on its own a moment later: sliding up into it. Aim for the note itself, so you start on it.' })
  ]);
})();

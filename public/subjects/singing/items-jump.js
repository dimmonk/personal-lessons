// Singing, lesson 5: two notes a jump apart (part 5). Each case is a singer checking both notes of a jump against the song's notes on a
// piano app and naming what they found (list `jump`): both on; fell short on the jump (first note on, far note short of it: under after a
// jump up, over after a jump down); went past on the jump (first note on, far note beyond it); first note off and far note on (the jump was
// the wrong size from a wrong start); or both notes off the same way (the gap right, the start wrong). Falling short and the whole pair
// shifted are the two misses the research names in singers who struggle with pitch (V3); the other two are what the app's result can show,
// so they are named too. Each note is checked against its own note, as the app scores it. Pairs (P12) put look-alikes side by side; the
// wording of a shifted pair varies, and the amounts are stated in other cases too, so no phrase gives the answer; one reaction is confirmed
// by the check in the practice and in the check. The people are invented.
(() => {
  const jump = sgCase({ strand: 'jump', list: 'jump', prompt: 'What happened on the jump?', means: {
    both: 'Both notes on would mean each note matches the song’s note.',
    short: 'Fell short on the jump would mean the first note is on and the far note stops short of it: under after a jump up, over after a jump down.',
    past: 'Went past on the jump would mean the first note is on and the far note goes beyond it: over after a jump up, under after a jump down.',
    start: 'First note off, far note on would mean the jump started from the wrong place and still landed: fix the first note.',
    shifted: 'Both notes off the same way would mean the jump is the right size but starts from the wrong place, so both notes are under, or both over.'
  } });
  FC.items('singing', [
    // ----- the worked case -----
    jump({ id: 'jump-worked-chorus', right: 'short',
      story: 'The chorus of Max’s song opens with a big jump up. He checks each note against a piano app. The first note matches. The top note sounds a little lower than the piano’s, and he has to move up to reach it.',
      steps: [
        { id: 'first', does: 'Check the first note.', working: 'It matches the piano, so the jump starts from the right place.' },
        { id: 'far', does: 'Check the far note.', working: 'It is a little under after a jump up: the jump was too small.', ask: 'jump' }],
      reason: 'First note on, far note short of it: he fell short on the jump. Hear both notes in your head first and aim for the far one on purpose.' }),

    // ----- practice, in pairs -----
    jump({ id: 'jump-short-up', right: 'short',
      story: 'Hana sings a jump up from a low note to a high one. Against a piano app, her first note matches and her high note is a little low.',
      reason: 'The first note on, the high note under: the jump up fell short. Aim for the far note on purpose.' }),
    jump({ id: 'jump-both-low', right: 'shifted',
      story: 'Pete sings a jump up and checks both notes against a piano app. His first note is a little low, and his top note is a little low too.',
      reason: 'Both notes under, the gap between them right: the jump was the right size from a low start. Check the first note against the steady note, and the jump will follow.' }),
    jump({ id: 'jump-short-down', right: 'short',
      story: 'A line in Ava’s song drops from a high note to a much lower one. Against a piano app, her high note matches, and her low note stays a little above the piano’s.',
      reason: 'First note on, the low note over: the jump down fell short, too small a drop. Hear both first and aim for the far note.' }),
    jump({ id: 'jump-past-up', right: 'past',
      story: 'Ben sings a big jump up. Against a piano app, his first note matches; his top note lands a little above the piano’s.',
      reason: 'First note on, top note over after a jump up: he went past on the jump. Hear the far note first and aim for it, not beyond it.' }),
    jump({ id: 'jump-first-high', right: 'start',
      story: 'Erin sings a small step. Against a piano app, her first note is a little high, and her second note matches the piano’s exactly.',
      reason: 'First note off, far note on: the jump started from the wrong place and still landed. Fix the first note.' }),
    jump({ id: 'jump-both-high', right: 'shifted',
      story: 'Kai checks a small step against a piano app. Each of his two notes sits a little over its note, by about the same amount.',
      reason: 'Both over by the same amount: the gap was right but it started too high. Fix the first note first.' }),
    jump({ id: 'jump-short-big', right: 'short', slips: { both: 'feeling' },
      story: 'Diego feels he never quite reaches the top of the biggest leap in his song. Against a piano app, his first note matches; his top note is well under the piano’s.',
      reason: 'First on, top note well under: the jump fell short. His feeling was right, and the check showed it. Go for the far note on purpose.' }),
    jump({ id: 'jump-both-fine', right: 'both', slips: { short: 'feeling', shifted: 'feeling' },
      story: 'Amira worries she always misses the big drop in a song. She checks both notes against a piano app: each sounds like one with the piano’s.',
      reason: 'Each note matches its note: both on. This time the worry was wrong; leave it alone.' }),

    // ----- the check: new cases -----
    jump({ id: 'jump-drop-shallow', right: 'short', slips: { both: 'feeling' },
      story: 'June feels her drop from a high note to a low one came out too small. Against a piano app, her high note matches; her low note sits a little above the piano’s.',
      reason: 'First note on, the low note over: the drop fell short. Her feeling was right. Aim for the far note on purpose.' }),
    jump({ id: 'jump-start-low', right: 'shifted',
      story: 'Carlos checks a jump up against a piano app. His starting note is a little under. So is his top note, and the gap between the two is right.',
      reason: 'Both under with the gap right: the jump started low. Check the first note and move to it.' }),
    jump({ id: 'jump-overshoot-drop', right: 'past',
      story: 'Noah sings a big drop. Against a piano app, his first note matches, and his low note lands a little below the piano’s.',
      reason: 'First note on, the low note under after a drop: he went past on the jump. Aim for the far note, not beyond it.' }),
    jump({ id: 'jump-start-sharp', right: 'start',
      story: 'Rina checks the two notes of a jump against a piano app. Her first note is a little high, and her far note matches the piano’s.',
      reason: 'First note off, far note on: the start was wrong and the landing right. Fix the first note.' }),
    jump({ id: 'jump-checked-fine', right: 'both', slips: { short: 'feeling', shifted: 'feeling' },
      story: 'Owen thinks he fell short on the leap in his favorite song. He checks both notes against a piano app, and each sounds like one with it.',
      reason: 'Each note matches: both on. The check beats the worry here.' }),

    // ----- held back for the review -----
    jump({ id: 'jump-clean-leap', right: 'both',
      story: 'Lia sings a leap down and checks each note against a piano app. Both sound like one with the piano’s.',
      reason: 'Each note matches its note: both on. Leave it alone.' }),
    jump({ id: 'jump-drop-stops-high', right: 'short',
      story: 'Tariq sings a big drop. His first note matches the piano app; his low note stops a shade above where the piano’s is.',
      reason: 'First on, the low note over: the drop fell short. Aim for the far note.' }),
    jump({ id: 'jump-whole-pair-low', right: 'shifted',
      story: 'Mei checks a small jump against a piano app. Both of her notes are a shade under, the second as much as the first.',
      reason: 'Both under by the same amount: the start was low and the gap right. Fix the first note.' })
  ]);
})();

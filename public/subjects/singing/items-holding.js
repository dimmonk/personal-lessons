// Singing, lesson 4: how a held note goes (part 4). Each case is a singer holding a long note against a steady one (a piano app, or a long
// note of the recording while it plays) and noticing where theirs goes: it stays with it, it sinks under, it rises over, or it was off from
// the first moment (list `holding`; the app reads the same four from how a hold starts and ends). The note check is the one lesson 3 taught
// (V6, V15); pushing louder raises the note (V11), so the fix of a rise is an even loudness, but loudness alone never decides: one case
// swells and stays steady, and one rises with no swell. Drift that comes from running out of air is lesson 9's and is not asked here.
// A reaction is confirmed by the check in one practice case and one check case, and is wrong in others. The people are invented.
(() => {
  const held = sgCase({ strand: 'holding', list: 'holding', prompt: 'How did the held note go?', means: {
    steady: 'Steady on the note would mean it stays with the steady note from the first moment to the last.',
    sank: 'Sank under would mean it starts on the note and slips lower as it goes on.',
    rose: 'Rose over would mean it starts on the note and creeps higher as it goes on.',
    off: 'Off the note from the start would mean it is a shade under or over from the first moment, whatever it does next.',
    wander: 'Wandered off and back would mean it starts and ends on the note but leaves it for a while in between.'
  } });
  FC.items('singing', [
    // ----- the worked case -----
    held({ id: 'holding-worked-birthday', right: 'sank',
      story: 'Ana holds the last note of “Happy Birthday” beside a piano app playing that same note. At first the two sound like one. After about a second they start to sound rough together, and by the end her note is a little lower than the piano’s.',
      steps: [
        { id: 'start', does: 'Check the start.', working: 'At first the two sound like one, so she started on the note.' },
        { id: 'end', does: 'Check the end.', working: 'By the end hers is a little lower: it moved during the hold.', ask: 'holding' }],
      reason: 'On at first, lower by the end: it sank under as it went on. Keep your ear on the note for the whole hold, and nudge it back up as soon as you hear it drop.' }),

    // ----- practice, in pairs -----
    held({ id: 'holding-sinks-late', right: 'sank', slips: { steady: 'feeling' },
      story: 'Owen’s friend says his long note went flat at the end. He holds it against a piano app: it matches for the first second or so, then slowly drops until it sounds a little low.',
      reason: 'It matched, then dropped: it sank under as it went on. His friend was right, and the check showed it. Keep listening and nudge it back up.' }),
    held({ id: 'holding-low-throughout', right: 'off',
      story: 'Nora holds a note against a piano app. From the first moment hers is a little lower, and it stays exactly that much lower to the end.',
      reason: 'Low from the first moment and the same to the end: off the note from the start, a shade under. Move to the steady note before you hold it.' }),
    held({ id: 'holding-swells-up', right: 'rose',
      story: 'Jamal holds a long high note and lets it swell louder toward the end. Against the piano app, his note starts together with it and ends a little higher.',
      reason: 'It started on and crept higher as it got louder: it rose over. Pushing harder raises the note, so keep the loudness even.' }),
    held({ id: 'holding-felt-shaky', right: 'steady', slips: { rose: 'feeling', sank: 'feeling' },
      story: 'Kim lets her long note swell louder at the end and worries that it went sharp. Beside a piano app playing the same note, the two sound like one from start to end.',
      reason: 'One sound from start to end: steady on the note, even though it got louder. The worry was not the check.' }),
    held({ id: 'holding-high-throughout', right: 'off',
      story: 'Victor holds a note against a piano app. From the first moment his is a little higher, and it stays that much higher until he stops.',
      reason: 'High from the first moment and unchanged: off the note from the start, a shade over. Check it and move to the steady note first.' }),
    held({ id: 'holding-creeps-up', right: 'rose',
      story: 'Lucy holds a quiet note against a piano app. It starts right with it, then over the next two seconds creeps a little higher.',
      reason: 'On at first, then higher: it rose over as it went on. Keep listening and ease it back down.' }),

    held({ id: 'holding-wanders-back', right: 'wander',
      story: 'Tara holds a long note against a piano app. The two match at the start; halfway through hers drifts a little low, and by the end it is back with the piano’s.',
      reason: 'On at the start and at the end, low in between: wandered off and back. Keep the loudness even and your ear on the note the whole way.' }),
    held({ id: 'holding-low-then-lower', right: 'off',
      story: 'Hugo holds a note against a piano app. From the first moment his is a little low, and by the end it has dropped lower still.',
      reason: 'It does two things: off from the start, then sinking. Name the first thing you hear: off the note from the start. Move to the steady note before you hold it.' }),

    // ----- the check: new cases -----
    held({ id: 'holding-car-end', right: 'sank',
      story: 'In the car, Raj holds the last note of a chorus while a piano app plays the same note. The start matches; by the time he lets go, his note is a little lower.',
      reason: 'It matched at the start and was lower at the end: it sank under. Keep listening and nudge it back up as soon as it drops.' }),
    held({ id: 'holding-gets-louder', right: 'rose', slips: { steady: 'feeling' },
      story: 'Elena thinks her long note crept sharp. Against a piano app’s note, hers starts on it and finishes a little high.',
      reason: 'On at the start, high by the end: it rose over. Her feeling was right, and the check showed it. Keep your ear on the note and ease it down.' }),
    held({ id: 'holding-sounded-wobbly', right: 'steady', slips: { sank: 'feeling', rose: 'feeling' },
      story: 'Martin thought his long note sounded wobbly. He holds it again beside a piano app playing that note, and the two sound like one the whole time.',
      reason: 'One sound the whole time: steady on the note. This time the worry was wrong.' }),
    held({ id: 'holding-off-early', right: 'off',
      story: 'Chloe holds a note against a piano app. Hers is a little low the moment she starts, and it stays just that low to the end.',
      reason: 'Low from the first moment and no different at the end: off the note from the start. Move to the steady note before holding it.' }),
    held({ id: 'holding-drops-slowly', right: 'sank',
      story: 'Sean holds the long note of a lullaby beside the recording while that note plays. The two match at first, then his slowly slides lower over the last second.',
      reason: 'On at first, lower at the end: it sank under. Keep your ear on the note and nudge it back up.' }),

    // ----- held back for the review -----
    held({ id: 'holding-even-start-end', right: 'steady',
      story: 'Grace holds a note against a piano app for three seconds. The two sound like one at the start, in the middle and at the end.',
      reason: 'One sound throughout: steady on the note. Leave it alone.' }),
    held({ id: 'holding-sharp-throughout', right: 'off', slips: { steady: 'feeling' },
      story: 'Felix feels his held note was a bit high. Beside a piano app, his is a little high from the very start and stays that way.',
      reason: 'High from the start and unchanged: off the note from the start, a shade over. His feeling was right; move to the steady note first.' }),
    held({ id: 'holding-climbs-loud', right: 'rose',
      story: 'Ida holds a high note and pushes it louder near the end. Against the piano app, hers starts with it and ends a little above it.',
      reason: 'On, then higher as it got louder: it rose over. Keep the loudness even.' })
  ]);
})();

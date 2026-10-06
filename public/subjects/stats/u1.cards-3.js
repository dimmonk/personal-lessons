// Statistical Claims, Unit One, part two: the fourth answer (what the claim says caused what) and its look-alike with the third.

FC.cards('stats', 'u1', [

  /* ---------- The fourth answer: what the claim says caused what ---------- */
  { id: 'meet-cause', kind: 'meet', family: 'cause',
    link: 'Many claims stop at the first three parts. Some take one more step, from "these go together" to "this made that happen".',
    case: 'gate-music', mark: 'S1',
    strip: [
      'There are two groups and a figure for each: the 120 students who take the music class average 71 on the math exam, and the 380 who do not average 62.',
      'The first three parts hold: the same exam, the numbers given for both groups, nothing left out.',
      'Then the claim says the music lessons raised the scores. That is a claim of cause.',
      'And the case shows another way to explain the same result: nearly all of the music students’ families also pay for extra math coaching.'
    ],
    explain: [
      'Two things go together in the figures: the students who take music have higher scores. The claim says that one made the other happen. That is a bigger claim than the figures, and the figures alone cannot carry it. Two things can go together without one making the other happen.',
      'To see whether the claim is safe, look for another explanation of the same figures. Here the case tells you: the coaching alone could lift the scores, whether or not anyone ever took a music class. The figures would look exactly the same. This part comes last because a claim of cause is only as sound as the figures it is built on.'
    ],
    feature: { step: 'S1', option: 'cause' },
    name: 'The answer, and the name, is {a:S1.cause}. Words that carry the step are "raise", "protect", "works", "led to", "because" and "so". They are the speaker’s, and the figures do not contain them. It does not say the claim is false: music lessons may help. It says that the figures cannot show it, because something else could produce them.' },

  { id: 'check-cause', kind: 'check', after: 'cause',
    case: 'gate-bikelane',
    ask: { type: 'option', step: 'S1', among: ['counted', 'measure', 'compare', 'cause'] } },

  { id: 'look-compare-cause', kind: 'lookalike', ledger: 'compare~cause',
    link: 'A claim about a program that "makes the difference" can go wrong in the third part or in the fourth, and the figures can sound alike either way.',
    cases: ['gate-mentor-percent', 'gate-mentor-groups'],
    instruction: 'Both cases are about the same mentoring program. Compare one thing: are the numbers behind the figure missing, or are they all given and the claim goes on to say what caused the difference?',
    prompt: { kind: 'which', option: 'S1.cause', answer: 'gate-mentor-groups' },
    difference: [
      'In Case A the figure is "50% more likely to graduate", with no word on how many graduate with the program or without it. Nothing has yet been said about a cause. The trouble is what the figure is set beside. The answer is {a:S1.compare}.',
      'In Case B the numbers are all there: 90 of 100 and 60 of 100. The trouble is the step the leaflet takes: it says the mentoring made the difference, and the case shows another way to explain the same result, which is that students who ask to join are the ones already doing well. The answer is {a:S1.cause}.'
    ] }
]);

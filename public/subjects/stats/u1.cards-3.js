// Statistical Claims, Unit One, part two: the fourth answer (what caused what) and its look-alike with the third.

FC.cards('stats', 'u1', [

  /* ---------- What caused what ---------- */
  { id: 'meet-cause', kind: 'meet', family: 'cause',
    link: 'Last of the four parts: a claim that something worked, or caused something. It comes last because it rests on the other three.',
    case: 'gate-music', mark: 'S1',
    explain: [
      'The numbers show that music students score higher on the math exam. The principal says the music lessons did it. That is a bigger claim than the numbers, and the numbers alone cannot carry it. Almost all the music students also pay for math coaching, and the coaching alone could lift their scores.',
      'Two things can go together without one causing the other. To test a claim of cause, look for another way to get the same numbers. Music lessons may well help. The numbers just cannot show it.'
    ],
    spot: [
      { do: 'Find the word that says one thing made the other happen: "raise".', why: 'Words like "raise", "works", "because" and "led to" belong to the speaker, not to the numbers.' },
      { do: 'Find how people ended up in each group: the students chose music, and their families chose the coaching.', why: 'When people sort themselves into groups, the groups differ in other ways too.' },
      { do: 'Look for another way to get the same numbers: the music families also pay for math coaching.', why: 'If something else fits the numbers, they cannot prove the cause.' }
    ],
    feature: { step: 'S1', option: 'cause' },
    name: 'This is {a:S1.cause}. It does not say the claim is false, only that the numbers cannot show it.' },

  { id: 'check-cause', kind: 'check', after: 'cause',
    case: 'gate-bikelane',
    ask: { type: 'option', step: 'S1', among: ['counted', 'measure', 'compare', 'cause'] } },

  { id: 'look-compare-cause', kind: 'lookalike', ledger: 'compare~cause',
    link: 'A claim that a program "makes the difference" can go wrong at the third part or the fourth, and the numbers can sound alike either way.',
    cases: ['gate-mentor-percent', 'gate-mentor-groups'],
    instruction: 'Both stories are about the same mentoring program. Compare one thing: are the numbers behind the percentage missing, or are they all given and the claim goes on to say what caused the difference?',
    prompt: { kind: 'which', option: 'S1.cause', answer: 'gate-mentor-groups' },
    difference: [
      'In Story A the leaflet says "50% more likely to graduate" and never says how many graduate with the program or without it. It has not said anything about a cause yet. The trouble is what the number is set beside. That is {a:S1.compare}.',
      'In Story B every number is there: 90 of 100 and 60 of 100. The leaflet then says mentoring made the difference, but students who ask to join are mostly the ones already doing well. That is {a:S1.cause}.'
    ] }
]);

// Statistical Claims, Unit One, part three: one whole claim, run from the question to the answer. The story is one where the
// opening points to a later part and an earlier one decides, so it also shows the key's tie-break (the earlier part wins).

FC.cards('stats', 'u1', [

  { id: 'worked-spanish', kind: 'worked',
    h: 'One whole claim, where the start points the wrong way',
    link: 'Watch one claim worked through. The first thing you notice is not what decides it, so read to the end.',
    case: 'gate-spanish',
    steps: [
      { step: 'S1',
        reason: [
          'It opens with a school saying its course gets nine in ten students talking, then adds that forty students had studied Spanish before. That points to a claim of cause.',
          'But take the parts in order, starting with the people. The deciding words are {cue:S1}. Only 60 of the 600 students answered, and the ones who already knew some Spanish are the likeliest to say they can talk and the likeliest to reply. Nine tenths of the students are not in the number.'
        ] }
    ],
    hold: {
      neighbor: 'cause',
      prompt: { kind: 'reason',
        lead: 'The school says its course gets students talking, and forty had studied Spanish before, so this can look like {a:S1.cause}. What decides it?',
        choices: [
          { id: 'a', text: 'The school says its course gets nine in ten students talking, and forty students had studied Spanish before.',
            note: 'True, and it is why this looks like {a:S1.cause}. If the number were a fair picture of the 600, that would be the answer.' },
          { id: 'b', text: 'The 54 out of 60 comes from the 60 students who answered a questionnaire, and the other 540 are not in it.' },
          { id: 'c', text: 'The school sent the questionnaire to all 600 students, so nobody was left off the list.',
            note: 'True, but it settles nothing. A number from everyone asked and a number from a tenth of them can both start from a full list.' }
        ],
        answer: 'b' },
      reason: [
        'When a story shows a claim of cause and a number from the wrong people, the earlier part wins: {a:S1.counted}. The claim of cause has nothing solid to stand on until the number is a fair picture of the 600.'
      ]
    },
    impression: {
      resembles: 'gate-golf', first: 'gate-music',
      text: [
        'A second look: does this remind you of a story you know? A course that made people better, with another way to explain it, may bring back the music class, which was {a:S1.cause}.',
        'When a likeness and the answer disagree, go back to the words that answer the question: {cue:S1}. The music class has nothing like them, because every student who took the exam is in its numbers. The golf club does: its number came from the few who happened to be asked. So the answer stands.'
      ]
    } }
]);

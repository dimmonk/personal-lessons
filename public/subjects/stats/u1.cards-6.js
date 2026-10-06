// Statistical Claims, Unit One, part three: one whole claim, run from the question to the answer. The case is one where the
// opening points to a later part and an earlier one decides, so it also shows the key's tie-break (the earlier part wins).

FC.cards('stats', 'u1', [

  { id: 'worked-spanish', kind: 'worked',
    h: 'A whole claim, where the opening points the wrong way',
    link: 'Watch one claim run from the question to the answer. The first thing you notice in it is not the thing that decides it. Read to the end before you answer.',
    case: 'gate-spanish',
    steps: [
      { step: 'S1',
        reason: [
          'The claim opens with a school saying its course gets nine in ten students talking, and goes straight on to a reason the result might have another explanation: forty of the students had studied Spanish before they came. If the case ended there, it would show a claim of cause.',
          'It does not end there. Take the parts in order, starting with the people in the figure. The last sentence says this: {cue:S1}. The 54 out of 60 is the reply to a questionnaire sent to 600. Nine in ten of the 60 students who took the trouble to answer is not the same as nine in ten of the 600, and students who had studied before are likelier to feel that they can talk and likelier to reply. Nine tenths of the students never appear in the figure. The first part fails, so the first part is the answer.'
        ] }
    ],
    hold: {
      neighbor: 'cause',
      prompt: { kind: 'reason',
        lead: 'The claim says the course gets students talking and gives a reason for another explanation, so the case can look like {a:S1.cause}.',
        choices: [
          { id: 'a', text: 'The school says its course gets nine in ten students talking, and forty of the students had studied Spanish before they came.',
            note: 'True, and it is why the case can look like {a:S1.cause}. If the figure were a fair picture of the 600, that would be the answer. It is not, and the figure comes first.' },
          { id: 'b', text: 'The 54 out of 60 comes from the 60 students who replied to a questionnaire sent to all 600, and the other 540 are not in it.' },
          { id: 'c', text: 'The school sent the questionnaire to every student.',
            note: 'True, and it tells you that nobody was left off the list. It does not separate the two answers: a figure from everyone asked and a figure from a tenth of them can both start from a list of everyone.' }
        ],
        answer: 'b' },
      reason: [
        'When a case shows both a claim of cause and a figure from the wrong people, the answer is the earlier part: {a:S1.counted}. The claim of cause has nothing solid to stand on until the figure is a fair picture of the 600. The forty who had studied before only make the problem larger.'
      ]
    },
    impression: {
      resembles: 'gate-golf', first: 'gate-music',
      text: [
        'Now a second look, of a different kind: does this case look like one you know? A claim that a course made people better, with a reason why the result might have another explanation, may bring back the music class. And the music class was {a:S1.cause}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:S1}. The music class has nothing like them: every student who took the exam is in its figures. This case leaves out nine tenths of its students. So the case this one really looks like is the golf club, where the figure came from the few who happened to be asked, and the answer stands.'
      ]
    } }
]);

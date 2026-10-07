// Statistical Claims, Unit Three, part two: the question as a question, and one whole claim watched from the first question to the
// name. The app prints, on the question card: the question, each answer with when it is given, why the question decides, and for
// every pair compared the question that separates it. The question card also teaches the ledger pairs survivor~selfselect and
// nonresp~smalln (taughtIn), and the worked story teaches survivor~nonresp.
// The app prints the stem of the hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('stats', 'u3', [

  /* ---------- The question, as a question ---------- */
  { id: 'q-how', kind: 'question', step: 'A1',
    h: 'The one question to ask about the people in a figure',
    link: 'You have met this question at the foot of each new name. Here it is with its four answers in one place.',
    decides: [
      'Ask it when the answer to {q:S1} is {a:S1.counted}: the people or things in the figure are not a fair picture of the group, or there are too few of them.',
      'Two pairs are easy to mix up. In {o:survivor} everyone was there at the start and the ones who left are missing. In {o:selfselect} nobody was asked by name, and the people in the figure chose to answer. In {o:nonresp} the few who replied are a small part of a long list. In {o:smalln} the few are everyone there is.'
    ],
    how: [
      { do: 'Read the whole claim and find the words about how the people or things got in.', why: 'The answer is in those words.' },
      { do: 'Look for “still open”, “still playing”, “remaining”, or a number that started bigger than the number left, and give {a:A1.lasted}.', why: 'The ones that closed, quit or left are not in the figure.' },
      { do: 'Look for a link, a box, a vote or a call-in line, with nobody asked by name, and give {a:A1.chose}.', why: 'Anyone could answer, so the ones who did chose to.' },
      { do: 'Look for a number sent and a smaller number returned, and give {a:A1.replied}.', why: 'A known list was asked and many stayed silent.' },
      { do: 'Look for a count of ten or so behind a high or low figure, and give {a:A1.handful}.', why: 'Everyone was counted, but luck can move a figure this small.' },
      { do: 'Find the exact words that show your answer.', why: 'If you cannot find them, you do not have an answer yet.' },
      { do: 'If none of the four fits, go back to the first question.', why: 'When the people in the figure are a fair picture and there are enough of them, the answer is {a:S1.holds}.' }
    ],
    whenBoth: 'Sometimes two of the answers seem to fit. Each pair below has one question that tells it apart.' },

  { id: 'check-how', kind: 'check', after: 'A1',
    case: 'cn-bakery',
    ask: { type: 'step', step: 'A1' } },

  /* ---------- One whole claim, watched ---------- */
  { id: 'worked-yoga', kind: 'worked',
    h: 'A whole claim, from the first question to the name',
    link: 'Watch one claim worked through from the top, in the order the questions are asked. The first thing you notice in it is not what decides it, so read to the end. You are asked nothing until the end.',
    case: 'cn-yoga',
    steps: [
      { step: 'S1',
        reason: 'Start with who is in the figure. The ad speaks for everyone who tries the studio, but the figure comes from the 90 current members: {cue:S1}. The other 210 of the 300 who tried it left, and people leave a studio that is not helping them. So the answer is {a:S1.counted}.' },
      { step: 'A1',
        reason: 'Now ask how they got in. Nearly everyone who was asked answered, 88 of 90, so the replies are not the problem. The problem is who was on the list: {cue:A1}. The ones who left were never on it, so the answer is {a:A1.lasted}.' }
    ],
    hold: {
      neighbor: 'nonresp',
      prompt: { kind: 'reason',
        lead: 'The studio mailed a survey to a list and asked everyone on it by name, so this can look like a list that was asked and did not reply.',
        choices: [
          { id: 'a', text: 'The studio asked all of its 90 current members by name.',
            note: 'True, and it is why this looks like {o:nonresp}. But 88 of the 90 replied, so there is no big silence.' },
          { id: 'b', text: 'Only current members were on the list; the 210 who left were never on it.' },
          { id: 'c', text: '88 of the 90 on the list replied, and 80 of them said “a lot”.',
            note: 'True, but it only shows the replies are nearly everyone on the list. It does not settle which name fits.' }
        ],
        answer: 'b' },
      reason: [
        'Look at what {o:nonresp} needs: {needs:nonresp}. Nothing here is a silence, because 88 of 90 replied.',
        'Now look at what {o:survivor} needs: {needs:survivor}. This story has it: the figure comes from the members still there, and the 210 who left are not in it.',
        '{test:survivor~nonresp} The list is only the ones who lasted, so the answer is {a:A1.lasted}.'
      ]
    },
    impression: {
      resembles: 'cn-restaurants', first: 'cn-library',
      text: [
        'A second look: does this remind you of a story you know? A survey mailed to a list, with nearly everyone answering, may bring back the library survey, which was {o:nonresp}. So the likeness and the answer seem to disagree.',
        'When that happens, go back to the words that answer the question: {cue:A1}. The library story has nothing like them: its list was everyone with a card, and nobody who had left was missing. This story leaves out 210 who left, so it really resembles the Mill Street restaurants, where the figure came from the ones still open. The answer stands.'
      ]
    } }
]);

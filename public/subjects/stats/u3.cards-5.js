// Statistical Claims, Unit Three, part two: the question as a question, and one whole claim watched from the first question to the
// name. The app prints, on the question card: the question, what it is for, each answer with when it is given, what each answer keeps,
// why the question decides, and for every pair compared the question that separates it. The question card also teaches the
// ledger pairs survivor~selfselect and nonresp~smalln (taughtIn), and the worked case teaches survivor~nonresp.
// The app prints the stem of the hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('stats', 'u3', [

  /* ---------- The question, as a question ---------- */
  { id: 'q-how', kind: 'question', step: 'A1',
    h: 'The question you have been answering all along',
    link: 'You have seen the question at the foot of each new name, with one answer under it. This card puts the question and its four answers in one place.',
    decides: [
      'The first question, {q:S1}, sends a claim to this question when the people or things in the figure are not a fair picture of the group the claim is about, or there are too few of them.',
      'Two pairs are easy to mix up. In {o:survivor} everyone was there at the start and the ones who left are missing; in {o:selfselect} nobody was asked by name and the ones in the figure chose to answer. In {o:nonresp} the few who replied are a small part of a long list; in {o:smalln} the few are everyone there is.'
    ],
    how: [
      'Read the whole claim and find the words about how the people or things got in. Then ask which of the four ways it was.',
      'Was the figure worked out after the fact from what was left at the end, with the ones that closed, quit or left missing? The answer is {a:A1.lasted}. Look for "still", "left" and "remaining", and a number that started which is larger than the number left.',
      'Was nobody asked by name, so that anyone who wanted to could answer? The answer is {a:A1.chose}. Look for a link, a box, a vote, a call-in line.',
      'Was a known list asked by name, with many not replying? The answer is {a:A1.replied}. Look for a number sent and a smaller number returned.',
      'Was everyone counted, and are there only a handful? The answer is {a:A1.handful}. Look for a count of ten or so behind a high or low figure, and ask what one more or fewer would do.',
      'Whichever answer you give, put your finger on the words. If none of the four fits, go back to the first question: when the people or things in the figure are a fair picture of the group and there are enough of them, the answer to it is {a:S1.holds}. That is as much a result as any of the four.'
    ],
    whenBoth: 'Sometimes two of the answers seem to fit. Each pair below has one question that tells it apart.' },

  { id: 'check-how', kind: 'check', after: 'A1',
    case: 'cn-bakery',
    ask: { type: 'step', step: 'A1' } },

  /* ---------- One whole claim, watched ---------- */
  { id: 'worked-yoga', kind: 'worked',
    h: 'A whole claim, from the first question to the name',
    link: 'Watch one claim being run from the top, in the order the questions are asked. The first thing you notice in it is not the thing that decides it. You are not asked anything until the end.',
    case: 'cn-yoga',
    steps: [
      { step: 'S1',
        reason: 'Begin with the people in the figure. The ad speaks for "people who try our studio", which is everyone who tries it, but the figure comes from the 90 who are members now: {cue:S1}. 300 people have tried the studio, and 210 of them are not in the figure. They left, and people leave a studio that is not helping them. The first part goes wrong, so the answer is {a:S1.counted}.' },
      { step: 'A1',
        reason: 'Now the question after it. Nearly everyone who was asked answered: 88 of 90, which is 98 in every 100. So the replies are not the trouble. The trouble is who was on the list: {cue:A1}. The figure was worked out after the fact from the ones who were still there, and the ones who left are missing. The answer is {a:A1.lasted}.' }
    ],
    hold: {
      neighbor: 'nonresp',
      prompt: { kind: 'reason',
        lead: 'The studio mailed a survey to a list and asked everyone on it by name, so the case can look like a list that was asked and did not reply.',
        choices: [
          { id: 'a', text: 'The studio asked every one of its 90 current members by name.',
            note: 'True, and it is why the case can look like {o:nonresp}. But 88 of the 90 replied, so there is no big silence, and it does not show who is missing from the list.' },
          { id: 'b', text: 'The list is only the 90 who are still members. The 210 who tried the studio and left were never on it.' },
          { id: 'c', text: '88 of the 90 replied, and 80 of them said "a lot".',
            note: 'True, and it tells you that the replies are nearly everyone on the list. That does not separate the two names, because the trouble is in who is on the list.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:nonresp} you must be able to point to this: {needs:nonresp}. Nothing here is a silence: 88 of 90 replied. For {o:survivor} you must be able to point to this: {needs:survivor}. The case has that. The figure is worked out from the members who are still there, and the 210 who left are not in it.',
        '{test:survivor~nonresp} The list is only the ones who lasted, so the answer is {a:A1.lasted}.'
      ]
    },
    impression: {
      resembles: 'cn-restaurants', first: 'cn-library',
      text: [
        'Now the second look: does this case look like one you know? A survey mailed to a list, with nearly everyone answering, may bring back the library survey first, and that case was {o:nonresp}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:A1}. The library case has nothing like them: its list was everyone with a card, and nobody who had left was missing. This case leaves out 210 who left. So the case this one really looks like is the Mill Street restaurants, where the figure came from the ones that were still open, and the answer stands.'
      ]
    } }
]);

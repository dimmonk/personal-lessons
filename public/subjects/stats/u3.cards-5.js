// Statistical Claims, Unit Three, part three (first half): the key's question as a question, and two whole claims watched from the
// first question to the name. The app prints, on the question card: the question, what it is for, each answer with when it is
// given, what each answer keeps, why the question decides, and for every pair already compared the question that separates it.
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('stats', 'u3', [

  /* ---------- The key's question, as a question ---------- */
  { id: 'q-how', kind: 'question', step: 'A1',
    h: 'The question you have been answering all along',
    link: 'Since the Mill Street restaurants you have seen the question at the foot of each new name, with one answer under it. This card puts the question and its four answers in one place, as they are always asked, and says why it is asked.',
    decides: [
      'The first question, {q:S1}, sends a claim to this question when the people or things in the figure are not a fair picture of the group the claim is about, or there are too few of them. That answer is not yet a name. This question gives the name, and it does so by one thing: how the people or things got into the figure.',
      'That is why it is the only question here. The four names are four different ways in, and each leaves out a different group: the ones that did not last, the ones who did not step forward, the ones who did not reply, or all that there would have been if there were more. Knowing which way tells you who the figure leaves out, which way it leans, and what you would need to see to put it right.'
    ],
    how: [
      'Read the whole claim, the last sentence included, and find the words about how the people or things got in. Then ask which of the four ways it was.',
      'Was the figure worked out after the fact from what was left at the end, with the ones that closed, quit or left missing? The answer is {a:A1.lasted}. Look for "still", "left" and "remaining", for a list of the ones that made it, and for a number that started which is larger than the number left.',
      'Was nobody asked by name, so that anyone who wanted to could answer? The answer is {a:A1.chose}. Look for a link, a box, a vote, a call-in line.',
      'Was a known list asked by name, with many not replying? The answer is {a:A1.replied}. Look for a number sent and a smaller number returned.',
      'Was everyone counted, and are there only a handful? The answer is {a:A1.handful}. Look for a count of ten or so behind a high or low figure, and ask what one more or fewer would do.',
      'Whichever answer you give, put your finger on the words. If none of the four fits, go back to the first question. When the people or things in the figure are a fair picture of the group and there are enough of them, the claim may hold, and the answer to that first question is {a:S1.holds}. That is as much a result as any of the four.'
    ],
    whenBoth: 'Sometimes two of the answers seem to fit. A figure from 12 replies could be a few replies from a long list, or everyone in a group of 12. A figure from people who stayed could also be a figure from people who chose to answer. Each pair below has been set side by side in this unit, and each has one question that tells it apart.' },

  { id: 'check-how', kind: 'check', after: 'A1',
    case: 'cn-bakery',
    ask: { type: 'step', step: 'A1' } },

  /* ---------- Two whole claims, watched ---------- */
  { id: 'worked-poll', kind: 'worked',
    h: 'A whole claim, from the first question to the name',
    link: 'You have the four names and the question about them. Before you run a claim yourself, watch two being run from the top, in the order the questions are asked. You are not asked anything until the end of each.',
    case: 'cn-school-start',
    steps: [
      { step: 'S1',
        reason: 'The parts of a claim are checked in order, so begin with the people in the figure. The chair speaks for "parents", and the figure comes from a poll that anyone in a group of 2,000 members could vote in: {cue:S1}. 410 of the 2,000 voted, which is 20 in every 100, and the voters are only some of the parents. The people in the figure are not a fair picture of the parents the chair speaks for, so the claim fails at the very start, and nothing built on it needs checking. The answer is {a:S1.counted}.' },
      { step: 'A1',
        reason: 'Now the question after it. Nobody was asked by name. The poll was posted for anyone in the group to see, and {cue:A1}. The ones who voted chose to, and the parents who feel most strongly about early mornings are the likeliest to. The answer is {a:A1.chose}.' }
    ],
    hold: {
      neighbour: 'nonresp',
      prompt: { kind: 'reason',
        lead: 'The group has 2,000 members and only 410 voted, so the case can look like a list of people who were asked and mostly did not answer.',
        choices: [
          { id: 'a', text: 'The group has 2,000 members, and 410 of them voted.',
            note: 'True, and it is why the case can look like {o:nonresp}. But it does not separate the two names: in both, a lot of people are in the group and few answered.' },
          { id: 'b', text: 'The poll was posted for anyone in the group to see and vote on, and nobody was asked by name.' },
          { id: 'c', text: 'The chair told the school board about the result.',
            note: 'True, but that is what the figure is used to say. It does not show how the people got into the figure.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:nonresp} you must be able to point to this: {needs:nonresp}. The case has a known group of 2,000, but nobody in it was asked. A poll was posted, and the ones who voted chose to. There is no list of people who were asked and did not reply.',
        'It is the question from the homework survey. {test:selfselect~nonresp} Here nobody was asked by name, so the answer is {a:A1.chose}.'
      ]
    },
    impression: {
      resembles: 'cn-fourday',
      text: [
        'You have an answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the magazine poll: a poll that any reader could click, and a figure from the ones who did, read as what everyone thinks.',
        'Here the likeness agrees with the answer, so the answer stands. The question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-yoga', kind: 'worked',
    h: 'A second whole claim, where the story points the wrong way',
    link: 'The school poll was a clean case: one thing was going on in it. In this second case the first thing you notice is not the thing that decides it. Watch which words each question picks out.',
    case: 'cn-yoga',
    steps: [
      { step: 'S1',
        reason: 'Begin with the people in the figure. The ad speaks for "people who try our studio", which is everyone who tries it, but the figure comes from the 90 who are members now: {cue:S1}. 300 people have tried the studio, and 210 of them are not in the figure. They left, and people leave a studio that is not helping them. The first part goes wrong, so the answer is {a:S1.counted}.' },
      { step: 'A1',
        reason: 'Now the question after it. Nearly everyone who was asked answered: 88 of 90, which is 98 in every 100. So the replies are not the trouble. The trouble is who was on the list: {cue:A1}. The figure was worked out after the fact from the ones who were still there, and the ones who left are missing. The answer is {a:A1.lasted}.' }
    ],
    hold: {
      neighbour: 'nonresp',
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

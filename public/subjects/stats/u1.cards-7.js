// Statistical Claims, Unit One, part six (second half): the key's first question as a question, two whole cases, and the cards
// that close the unit after the drill. This is an action subject (subject.action is true), so the unit ends with a plan card.
// The app prints, on the question card: the question, what it is for, each answer with when it is given, why it decides, and for
// every pair already compared the question that separates it and the key's tie-break.

FC.cards('stats', 'u1', [

  /* ---------- The key's first question, as a question ---------- */
  { id: 'q-gate', kind: 'question', step: 'S1',
    h: 'The question you have been answering all along',
    link: 'Since the golf club you have seen the question at the foot of each new answer, with one answer under it. This card puts the question and its five answers in one place, as they are always asked, and says why it comes before anything else.',
    decides: [
      'A claim can only be judged on how it is put together, and its parts rest on one another. If the people counted are not a fair picture, a careful look at what the figure counts or what it is set beside is a careful look at something that cannot hold. If you take a rise in a figure for a rise in the real thing, when the counting changed, you go looking for the cause of something that did not happen. Getting wrong which part fails first means asking the wrong questions next, however carefully you ask them.',
      'That is why this question comes first, before any finer name, and why every claim in this subject starts with it.',
      'In this unit it is the only question, so its answer is the name. In the rest of the subject, each answer is followed by one more question, and that question leads to a finer name. The answers you give on the way to a name are your answers on the way: this first answer, and then the answer to the next question. Once there are two answers, two things are marked separately: the name you give a case, and your answers on the way to it. A right name reached by a wrong answer to this first question counts as a miss, which is why the first question gets a whole unit of practice.'
    ],
    how: [
      'Read the whole claim before you answer, the last sentence included. The sentence that says how the people were picked, or that something changed, is often the last one. Then put the parts to the claim in the order, and stop at the first that goes wrong.',
      'First, look at {a:S1.counted}: {needs:counted}. If the case shows that, this is the answer, whatever else is in the case.',
      'Second, look at {a:S1.measure}: {needs:measure}. If the case shows that, and the first did not, this is the answer.',
      'Third, look at {a:S1.compare}: {needs:compare}.',
      'Fourth, look at {a:S1.cause}: {needs:cause}.',
      'If you have put each of the four to the claim and none of them fits, what is left is {a:S1.holds}: {needs:holds}.',
      'Whichever answer you give, put your finger on the words that show it: how the people or things got into the figure, what changed in the counting, which number is missing, or the words that say one thing caused another. For the last answer, point to the words that show each part holding. If you cannot point, you do not have an answer yet.'
    ],
    whenBoth: 'Some cases show two of the five at once. You have met three: a gym’s claim of cause that was built on the members who stayed, a call center’s bonus that agents could push, and a shop’s ad with a percentage that had no numbers. In each, the answer was the earlier part. The order above is how that is chosen: each part gives way to every part before it. The pairs below have each been set side by side earlier in this unit, and each has one question that tells them apart.' },

  { id: 'check-gate', kind: 'check', after: 'S1',
    case: 'gate-buses',
    ask: { type: 'step', step: 'S1' } },

  /* ---------- Two whole cases, watched ---------- */
  { id: 'worked-walkers', kind: 'worked',
    h: 'A whole claim, from the question to the answer',
    link: 'You have the five answers and the question about them. Before the drill, watch two claims being run from the top. You are not asked anything until the end of each.',
    case: 'gate-walkers',
    steps: [
      { step: 'S1',
        reason: [
          'The unit taught an order for answering this question: take the parts in the order and stop at the first that goes wrong. Start with the people in the figure. The sick days of all 300 employees come from payroll records, so nobody is missing, and nobody chose whether to be counted. That part holds.',
          'Next, what the figure counts: days of sick leave recorded in payroll, counted the same way for everyone. Nothing changed during the year, and nobody is paid on it. That part holds. Next, what it is set beside: the club’s average beside everyone else’s, 4 days against 7, with both group sizes given. That part holds.',
          'Then the last part. The claim says this: {cue:S1}. That is a claim of cause. And the case shows another way to explain the same result: the people who joined the club were already the ones who walked to work and took the stairs. So the answer is {a:S1.cause}.'
        ] }
    ],
    hold: {
      neighbor: 'compare',
      prompt: { kind: 'reason',
        lead: 'The case sets two averages side by side, so it can look like a claim about what the figure is set beside.',
        choices: [
          { id: 'a', text: 'The case sets the club’s average beside everyone else’s: 4 days against 7.',
            note: 'True, and it is why the case can look like {a:S1.compare}. But both averages are given with both group sizes, so nothing is left out of that comparison, and the claim goes on to say more.' },
          { id: 'b', text: 'The claim says the club cuts sick days, and the case shows that club members were already the people who walked to work and took the stairs.' },
          { id: 'c', text: 'The sick days come from payroll records for all 300 employees.',
            note: 'True, and it tells you that the first part holds. It does not separate the two answers you are choosing between: both can rest on good records.' }
        ],
        answer: 'b' },
      reason: [
        'For {a:S1.compare} you must be able to point to this: {needs:compare}. Both averages are given, with both group sizes, and both come from payroll, so the claim leaves nothing out about them. What it says goes further than the figures: that the club cut sick days. That is what {a:S1.cause} needs: {needs:cause}.',
        'It is the question from the mentoring program. {test:compare~cause} Here the figures are all given, and the claim goes past them to a cause, so the answer is {a:S1.cause}.'
      ]
    },
    impression: {
      resembles: 'gate-music',
      text: [
        'You have an answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the music class. There too, two groups were set side by side with their numbers, the claim said that one made the other happen, and the account showed why the people in one group were different from the start.',
        'Here the likeness agrees with the answer, so the answer stands. The question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-spanish', kind: 'worked',
    h: 'A second whole claim, where the opening points the wrong way',
    link: 'The walking club was a clean case: one thing was going on in it. In this second case the first thing you notice is not the thing that decides it. Read to the end before you answer.',
    case: 'gate-spanish',
    steps: [
      { step: 'S1',
        reason: [
          'The claim opens with a school saying its course gets nine in ten students talking, and goes straight on to a reason the result might have another explanation: forty of the students had studied Spanish before they came. If the case ended there, it would show a claim of cause, with another way for the same result.',
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
        'For {a:S1.cause} you must be able to point to this: {needs:cause}. The case has both parts of that: the claim, and another way for the same result. And for {a:S1.counted} you must be able to point to this: {needs:counted}. The case has that as well.',
        'When a case shows both, the answer is the earlier part: {a:S1.counted}. The claim of cause has nothing solid to stand on until the figure is a fair picture of the 600. The forty who had studied before only make the problem larger.'
      ]
    },
    impression: {
      resembles: 'gate-course-survey', first: 'gate-vitamin',
      text: [
        'Now the second look: does this case look like one you know? A claim that a product made people better, with a reason why the result might have another explanation, may bring back the vitamin first. And the vitamin was {a:S1.cause}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:S1}. The vitamin case has nothing like them: it counted the people who took the vitamin and the people who did not, and nobody was left out. This case does leave people out, 540 of 600. So the case this one really looks like is the coaching survey, where the figure came from the few who replied, and the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-gate', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own. This card puts the unit in one place, in the words used all the way through.',
    carry: [
      'Before any name, put the question to the claim and point to the words that show your answer. If you cannot point, you do not have an answer yet.',
      'Take the parts in order: the people or things the figure was worked out from, what the figure counts, what it is set beside, and what the claim says caused what. Stop at the first one that goes wrong. Each rests on the ones before it.',
      'A figure can be added up correctly and still be unable to show what the claim says. Checking the sum is not checking the claim.',
      '{a:S1.holds} is an answer, and the most useful one when it is true. Look for it as carefully as you look for what is wrong, and give it when you have put the question to every part and found nothing.',
      'Finding a problem does not make a claim false. It says what the figure cannot show, and what you would need to see.',
      'Where a claim was published does not replace the question. A respected journal and a neighbor’s newsletter get the same parts checked.',
      'When a case shows two answers, the answer is the earlier part, because everything after it rests on it.',
      'Every case in this subject starts with this question. Your answer to it is the first of your answers on the way to a name.'
    ] },

  { id: 'transfer-gate', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the five answers is one step. Noticing the moment to ask the question is a separate step, and only you know where those moments are in your life.',
      'Pick one of the five and name an occasion of your own: something you read, something you were told, or something you said. The lines under each answer are there to jog your memory.'
    ],
    prompts: [
      { family: 'counted', occasion: 'The last time a figure about "everyone" turned out to come from people near you, or from the ones who answered.' },
      { family: 'measure', occasion: 'A score or a count that changed because something about how it is made changed: a new phone, a new scale, a new target.' },
      { family: 'compare', occasion: 'A percentage, a test result or a ranking that you were given without the numbers behind it.' },
      { family: 'cause', occasion: 'An explanation of a result that you or someone you know gave: "it worked because...". What else was changing at the same time?' },
      { family: 'holds', occasion: 'A claim you checked and found you could rely on. How did you know?' }
    ],
    places: ['At home', 'At work', 'In the news', 'On my phone'] },

  { id: 'plan-gate', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'Knowing the question is not the same as asking it at the moment a claim reaches you. A plan is one line that links a moment you will recognize to the question.',
    intro: 'You do not have to write one. If you do, it has two halves: the moment, and what you will do. Start from one of the lines below, or write your own. Nothing is saved until you press the button, and it stays on this device.',
    cues: [
      { cue: 'a figure in a headline that I want to share', then: 'ask where the people or things in it came from before I share it' },
      { cue: 'a friend forwards me a number that surprises me', then: 'find out how the people in the figure got into it before I pass it on' },
      { cue: 'a headline or an ad gives me a percentage and nothing else', then: 'look for the numbers behind it before I decide what I think' },
      { cue: 'a claim says that one thing caused another', then: 'name one other thing that could explain the same result' },
      { cue: 'a claim gives me a figure I like', then: 'put the same question to it that I would put to a figure I do not like' }
    ] }
]);

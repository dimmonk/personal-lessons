// Statistical Claims, Unit Six, part two (close): the question as a question, its check, and one whole worked case.
// The app prints, on the question card: the question, what it is for, each answer with when it is given, why it decides, and for every pair already
// compared the question that separates it and the tie-break. The app prints the stem of the hold-back prompt and the heading of the second look.

FC.cards('stats', 'u6', [

  /* ---------- The question, as a question ---------- */
  { id: 'q-cause', kind: 'question', step: 'K1',
    h: 'The question you have been answering all along',
    link: 'Since the sleep app you have seen the question at the foot of each new name, with one answer under it. This card puts the question and its four answers in one place, as they are always asked.',
    decides: [
      'The question comes last because it rests on the earlier ones. If the people counted are not a fair picture, or the figure could move while the real thing stood still, or the numbers are left out, you stop at the earlier part.',
      'The four answers send you to four different checks, and each check is what would settle it. For {a:K1.anyway}, ask for a group that went without, counted in the same way. For {a:K1.extreme}, ask for a group that was just as extreme and was left alone. For {a:K1.behind}, ask for groups that are alike in the other thing, or groups formed by a draw. For {a:K1.backward}, ask for the order: which came first, and how anyone knows.',
      'One test closes all four at once: groups formed by a draw, one given the thing and one not, both counted in the same way afterward. When you have put each of the four to a claim and none fits, go back to the first question: the claim may be one that gets the answer {a:S1.holds}.'
    ],
    how: [
      'Read the whole claim and its account before you answer. The words that answer this question are usually in the sentences after the claim, not in the claim. Put your finger on them: a group picked at its worst, the lack of any group that went without, the other thing the groups differ in, or the date that shows the order. If you cannot point to one of these, you do not have an answer yet.',
      'Ask first how the group was picked. If it was picked because it was at its worst or best, and it was measured again afterward, the answer is {a:K1.extreme}, whatever else the case shows.'
    ] },

  { id: 'check-cause', kind: 'check', after: 'K1',
    case: 'k-q-latebus',
    ask: { type: 'step', step: 'K1' } },

  /* ---------- One whole case, watched ---------- */
  { id: 'worked-swim', kind: 'worked',
    h: 'A whole claim, where the most noticeable thing points the wrong way',
    link: 'You have the four names and the question about them. Before the drill, watch one claim being run from the top, in the order the questions are asked. In this case the most noticeable thing in the story is not the thing that decides it. You are not asked anything until the end.',
    case: 'k-w-swim',
    steps: [
      { step: 'S1',
        reason: [
          'Take the parts in order, starting with the people in the figure. The club counts all ten of its slowest swimmers, so nobody is left out of the figure. What is counted is a 100-meter time, measured the same way at both meets, and nobody is paid on it. What it is set beside is each swimmer’s own earlier time, 74.0 against 71.5, with both given. Those parts hold.',
          'Then the last part. The coach says this: {cue:S1}. That is a claim of cause, and the case shows another way to explain the same result. So the answer is {a:S1.cause}.'
        ] },
      { step: 'K1',
        reason: [
          'The most noticeable thing in the story is that all ten swimmers signed up for the program themselves. That looks like people who chose, and it can bring to mind groups that put themselves where they are. But look at who was offered the program: {cue:K1}. The ten were picked because they were the slowest in the club, which means they were picked at their worst.',
          'A swimmer’s time is how fast they usually swim plus how the day went. The ten slowest times include some bad days, which do not come back at the next meet, so the average time drifts back toward usual with no extra practice at all. The case also has no swimmer who went without, so {a:K1.anyway} fits as well. When a case shows both, the answer is {a:K1.extreme}.'
        ] }
    ],
    hold: {
      neighbor: 'nocontrol',
      prompt: { kind: 'reason',
        lead: 'The club has no figures for swimmers who did not take the program, so the case can look like a result with nothing to set beside it.',
        choices: [
          { id: 'a', text: 'The club has no figures for any swimmer who did not take the program.',
            note: 'True, and it is why the case can look like {o:nocontrol}. But that is true of both names, so it cannot settle which of the two this is.' },
          { id: 'b', text: 'The ten were offered the program because they were the club’s ten slowest swimmers.' },
          { id: 'c', text: 'All ten swimmers signed up, so they chose to take part.',
            note: 'True, and it is the most noticeable thing in the story. But it does not say why these ten were the ones offered the program, which is what the question asks about.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:nocontrol} you must be able to point to this: {needs:nocontrol}. The case has all of that. It also has a group picked because it was at its worst, and that is what {o:regression} needs: {needs:regression}.',
        'It is the question from the class quiz. {test:nocontrol~regression} Here the group was the club’s ten slowest, so, when a case shows both, the answer is {a:K1.extreme}.'
      ]
    },
    impression: {
      resembles: 'k-quizclass', first: 'k-shake',
      text: [
        'Now the second look: does this case look like one you know? All ten swimmers signed up, which may bring back the recovery shake first, where the lifters chose whether to buy it. And the recovery shake was {o:confound}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:K1}. The recovery shake case has nothing like them: two groups were set side by side, and nobody was picked at an extreme. This case picks the ten slowest. So the case this one really looks like is the class quiz, where the lowest scorers were given something and measured again, and the answer stands.'
      ]
    } }
]);

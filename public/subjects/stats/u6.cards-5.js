// Statistical Claims, Unit Six, part two (close): the question as a question, its check, and one whole worked claim.
// The app prints, on the question card: the question, each answer with when it is given, and for every pair already
// compared the question that separates it and the tie-break. The app prints the stem of the hold-back prompt and the heading of the second look.

FC.cards('stats', 'u6', [

  /* ---------- The question, as a question ---------- */
  { id: 'q-cause', kind: 'question', step: 'K1',
    h: 'The question to ask every time',
    link: 'Here is the question and its four answers in one place.',
    decides: [
      'One test settles all four at once: groups formed by a draw, one given the thing and one not, both counted the same way afterward. If you put all four answers to a claim and none fits, go back to the first question: the claim may be {a:S1.holds}.'
    ],
    how: [
      { do: 'Read the whole claim and the sentences after it.', why: 'The words that decide it are usually after the claim, not in it.' },
      { do: 'First ask how the group was picked: {a:K1.extreme}?', why: 'If it was picked for its worst or best result and measured again, this answer wins over the others.' },
      { do: 'Next ask whether anyone went without: {a:K1.anyway}.', why: 'With no one to compare, nothing shows what would have happened anyway.' },
      { do: 'Two groups that picked their own side? Look for something else that differs: {a:K1.behind}.', why: 'That other thing could produce the result by itself.' },
      { do: 'Two things that go together? Ask which came first: {a:K1.backward}.', why: 'The result may have come first and led to the thing.' },
      { do: 'Find the exact words that show your answer.', why: 'If you cannot find them, you do not have an answer yet.' }
    ],
    whenBoth: 'Some stories show two at once, such as a group picked at its worst with no one to compare it with. Use the order above. The test for each pair is below.' },

  { id: 'check-cause', kind: 'check', after: 'K1',
    case: 'k-q-latebus',
    ask: { type: 'step', step: 'K1' } },

  /* ---------- One whole story, watched ---------- */
  { id: 'worked-swim', kind: 'worked',
    h: 'One whole claim, where the first thing you notice is not what decides it',
    link: 'Watch one claim worked through from the top. The first thing you notice points the wrong way, so read to the end.',
    case: 'k-w-swim',
    steps: [
      { step: 'S1',
        reason: [
          'Check the parts in order. All ten of the club’s slowest swimmers are counted, the time is measured the same way at both meets, and both figures are given (74.0 and 71.5). Those parts hold.',
          'That leaves the last part. The coach says {cue:S1}, which is a claim of cause. So the answer is {a:S1.cause}.'
        ] },
      { step: 'K1',
        reason: [
          'The first thing you notice is that all ten swimmers signed up themselves, which can make you think of people who picked their own side. But look at who was offered the program: {cue:K1}. They were picked because they were the slowest in the club: picked at their worst.',
          'A swimmer’s time is how fast they usually swim plus how the day went. The ten slowest times include some bad days, which do not come back at the next meet, so the average drifts back toward usual with no extra practice at all.'
        ] }
    ],
    hold: {
      neighbor: 'nocontrol',
      prompt: { kind: 'reason',
        lead: 'Nothing is set beside the ten swimmers, so this can look like {o:nocontrol}. What decides it?',
        choices: [
          { id: 'a', text: 'The club has no figures for swimmers who did not take the program.',
            note: 'True, and it is why this looks like {o:nocontrol}. But it is true of both names, so it cannot settle which one this is.' },
          { id: 'b', text: 'The ten were offered the program because they were the slowest in the club.' },
          { id: 'c', text: 'All ten swimmers chose to sign up for the program.',
            note: 'True, and it is the first thing you notice. But it does not say why these ten were the ones offered the program.' }
        ],
        answer: 'b' },
      reason: [
        'Both names fit: nobody who went without is counted, and the group was picked at its worst. Ask the question from the class quiz. {test:nocontrol~regression}',
        'The ten were the club’s slowest, so the answer is {a:K1.extreme}.'
      ]
    },
    impression: {
      resembles: 'k-quizclass', first: 'k-shake',
      text: [
        'A second look: does this remind you of a story you know? All ten swimmers signed up, which may bring back the recovery shake, where lifters chose whether to buy. The recovery shake was {o:confound}, so here the likeness and the answer seem to disagree.',
        'When that happens, go back to the words that answer the question: {cue:K1}. The recovery shake has nothing like them: two groups were set side by side and nobody was picked at an extreme. The story this one really resembles is the class quiz, where the lowest scorers were given something and measured again, so the answer stands.'
      ]
    } }
]);

// Statistical Claims, Unit Two, part two (second half): the key's question as a question, its check, and the one claim worked for the learner.

FC.cards('stats', 'u2', [

  /* ---------- The key's question, as a question ---------- */
  { id: 'q-holds', kind: 'question', step: 'H1',
    h: 'The question you have been answering all along',
    link: 'You have seen this question under each new name. Here it is with its four answers in one place.',
    decides: [
      'Each answer is a size of claim, and the size sets what you can repeat to someone else. One group at one time shows nothing about change. A rise or fall shows nothing about why. A bigger and a smaller shows nothing about why either. Only a claim of cause may say why, and only because a lottery formed its groups.',
      'Go by what the claim says, not by what the story hints at. A program in the story does not turn a difference into a cause, and a list of years does not turn one figure into a change unless the claim says it rose or fell.'
    ],
    how: [
      { do: 'Find the claim: the sentence that says what the figures show.', why: 'Go by what it says, not by what the story around it hints at.' },
      { do: 'Count the groups and the times in it.', why: 'That sorts it into one of four sizes.' },
      { do: 'One group at one time? It is {a:H1.group}.', why: 'The figure is all it gives.' },
      { do: 'One thing at two or more times, said to have risen or fallen? It is {a:H1.change}.', why: 'It follows the figure through time.' },
      { do: 'Two groups or things, or one thing beside its usual level, with the claim saying which is bigger? It is {a:H1.difference}.', why: 'It sets one beside the other.' },
      { do: 'Does it credit one thing with causing the result? It is {a:H1.causes}.', why: 'Only a lottery lets it say that.' }
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below was set side by side earlier in this unit, and one question tells it apart.' },

  { id: 'check-q', kind: 'check', after: 'H1',
    case: 'h-bikes',
    ask: { type: 'step', step: 'H1' } },

  /* ---------- One whole claim, watched ---------- */
  { id: 'worked-backs', kind: 'worked',
    h: 'One whole claim, worked through',
    link: 'Watch one claim worked through from the top, in the order the questions are asked. The most noticeable thing in the story is not what decides it. You are not asked anything until the end.',
    case: 'h-backs',
    steps: [
      { step: 'S1',
        reason: [
          'Go through the parts in order. Who is counted: 300 adults with long-term back pain, enrolled in the study and split into two groups, and all of them filled in the same form. That holds. What is counted: a pain score on the same 10-point form for both groups. That holds. What it is set beside: the usual-care group, with both averages and sizes given. That holds.',
          'Then the last part, where a claim of cause has to stand on how the groups were formed. The words are {cue:S1}. A lottery formed the groups, so nothing else is likelier to be in one group than the other. Every part holds, so the answer is {a:S1.holds}.'
        ] },
      { step: 'H1',
        reason: 'Now the question for a claim that holds. The story sets two groups side by side with their averages, 3.1 and 4.4, a gap of 4.4 − 3.1 = 1.3 points. But read the claim: {cue:H1}. It does not stop at which group is ahead. It says that stretching reduced the pain.' }
    ],
    hold: {
      neighbor: 'comp_ok',
      prompt: { kind: 'reason',
        lead: 'The story sets two groups side by side with their averages, so it can look like a claim that only says which group is ahead. What decides it?',
        choices: [
          { id: 'a', text: 'The stretching group averaged 3.1 and the usual-care group 4.4, so one is clearly ahead.',
            note: 'True, and it is why this looks like {o:comp_ok}. But two averages side by side fit both names, so they cannot settle it.' },
          { id: 'b', text: 'The claim says stretching reduced the pain, and a computer drew by lottery who stretched.' },
          { id: 'c', text: 'Everyone filled in the same pain form at twelve weeks, so the groups were counted alike.',
            note: 'True, and it makes the comparison fair. But a claim that only says which is ahead is counted alike too, so it cannot settle it.' }
        ],
        answer: 'b' },
      reason: [
        'The story has everything {o:comp_ok} needs: two groups that are alike, counted the same way, with their numbers. But the claim goes past that, because it says what made the gap.',
        'When a claim says what made the gap and a lottery formed the groups, the answer is {a:H1.causes}. A claim that stopped at "3.1 against 4.4" would have been {o:comp_ok}.'
      ]
    },
    impression: {
      resembles: 'h-migraine', first: 'h-readgroups',
      text: [
        'A second look: does this story remind you of one you know? Two groups with their averages side by side, one given a routine and one given the usual, may bring back the school and its reading groups. There the claim only said which group was ahead, and the answer was {o:comp_ok}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the words that answer the question: {cue:H1}. The reading groups’ claim has nothing like them, because it stopped at the averages. This claim says what made the gap, so the story it really resembles is the migraine test, where a lottery formed the groups and the claim said the tablet made the difference. The answer stands.'
      ]
    } }
]);

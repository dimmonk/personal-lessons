// Statistical Claims, Unit Two, part two (second half): the key's question as a question, its check, and the one claim worked for the learner.

FC.cards('stats', 'u2', [

  /* ---------- The key's question, as a question ---------- */
  { id: 'q-holds', kind: 'question', step: 'H1',
    h: 'The question you have been answering all along',
    link: 'Since the library you have seen the question at the foot of each new name, with one answer under it. This card puts the question and its four answers in one place, as they are always asked, and says why it is asked.',
    decides: [
      'The four answers are four sizes of claim. A claim for one group at one time shows nothing about change. A claim that a figure rose or fell shows nothing about why. A claim that one thing is bigger than another shows nothing about why. And only a claim of cause may say why, because a lottery formed its groups. So knowing which of the four you are looking at tells you what you can repeat to someone else and what you cannot.'
    ],
    how: [
      'Find the claim: the sentence that says what the figures show. Read it for its size. Count the groups and the times in it. One group at one time is {a:H1.group}. One thing at two or more times, with the claim saying it rose or fell, is {a:H1.change}. Two groups, places or things, or one thing and its usual level, with the claim saying which is bigger, is {a:H1.difference}. And a claim that says what made something happen is {a:H1.causes}.',
      'The question looks only at what the claim says. The story can suggest more: a program in the story does not turn a difference into a cause, and a list of years in the story does not turn one figure into a change unless the claim says that it rose or fell. If you give the answer for what the story hints at and not for what the claim says, you will credit a claim with something it never said.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has been set side by side earlier in this unit, and each has one question that separates it.' },

  { id: 'check-q', kind: 'check', after: 'H1',
    case: 'h-bikes',
    ask: { type: 'step', step: 'H1' } },

  /* ---------- One whole case, watched ---------- */
  { id: 'worked-backs', kind: 'worked',
    h: 'A whole claim, from the first question to the name',
    link: 'Before you run a claim yourself, watch one being run from the top, in the order the questions are asked. In this claim the most noticeable thing in the story is not the thing that decides it. You are not asked anything until the end.',
    case: 'h-backs',
    steps: [
      { step: 'S1',
        reason: [
          'Take the parts in order. Who is in the figure: 300 adults with long-term back pain who were enrolled in the study and then split into two groups, and all 300 filled in the same form. That part holds. What the figure counts: a pain score on the same 10-point form for both groups. That part holds. What it is set beside: the usual-care group, with both groups’ averages and sizes given. That part holds.',
          'Then the last part, where a claim of cause has to stand on how the groups were formed. The words are {cue:S1}. A lottery formed the groups, so nothing else is likelier to be in one group than the other. Every part holds, so the answer is {a:S1.holds}.'
        ] },
      { step: 'H1',
        reason: 'Now the question for a claim that holds. The case sets two groups side by side with their averages, 3.1 and 4.4, and a gap of 4.4 − 3.1 = 1.3 points. But look at the claim: {cue:H1}. It does not stop at which group is ahead. It says that stretching reduced the pain.' }
    ],
    hold: {
      neighbor: 'comp_ok',
      prompt: { kind: 'reason',
        lead: 'The case sets two groups side by side with their averages, so it can look like a claim that only says which group is ahead.',
        choices: [
          { id: 'a', text: 'The stretching group averaged 3.1 and the usual-care group averaged 4.4.',
            note: 'True, and it is why the case can look like {o:comp_ok}. But two averages side by side belong to both names, so they cannot settle which this is.' },
          { id: 'b', text: 'The claim says stretching reduced the pain, and a computer drew by lottery who stretched.' },
          { id: 'c', text: 'Everyone filled in the same pain form at twelve weeks.',
            note: 'True, and it makes the comparison fair. A claim that stops at which is ahead is counted the same way too, so it cannot settle which of the two this is.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:comp_ok} you must be able to point to this: {needs:comp_ok}. The case has all of that, and the claim goes past it. It says what made the gap. That is what {o:cause_ok} needs: {needs:cause_ok}, and the case has that too, because a lottery formed the groups.',
        'When a claim says what made the gap, and a lottery formed the groups, the answer is {a:H1.causes}. The claim is allowed to say it. A claim that stopped at "3.1 against 4.4" would have been {o:comp_ok}.'
      ]
    },
    impression: {
      resembles: 'h-migraine', first: 'h-readgroups',
      text: [
        'Now the second look: does this case look like one you know? Two groups with their averages side by side, one given a routine and one given the usual, may bring back the school and its reading groups first. In that case the claim only said which group was ahead, and the case was {o:comp_ok}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:H1}. The reading groups’ claim has nothing like them: it stopped at the averages. This claim says what made the gap. So the case this one really looks like is the migraine test, where a lottery formed the groups and the claim said the tablet made the difference, and the answer stands.'
      ]
    } }
]);

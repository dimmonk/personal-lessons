// Statistical Claims, Unit Six, part three: the key's question as a question, its check, and the two whole worked cases.
// The app prints, on the question card: the question, what it is for, each answer with when it is given, why it decides, and for every pair already
// compared the question that separates it and the key's tie-break. The app prints the stem of each hold-back prompt and the heading of the second look.

FC.cards('stats', 'u6', [

  /* ---------- The key's question, as a question ---------- */
  { id: 'q-cause', kind: 'question', step: 'K1',
    h: 'The question you have been answering all along',
    link: 'Since the sleep app you have seen the question at the foot of each new name, with one answer under it. This card puts the question and its four answers in one place, as they are always asked, and says why it is asked last.',
    decides: [
      'The question comes last because it rests on the earlier ones. A claim of cause is built on its figures. If the people counted are not a fair picture, or the figure could move while the real thing stood still, or the numbers are left out, then there is no sound result for a cause to explain, and you stop at the earlier part. Only when the figures hold does it make sense to put this question to the claim.',
      'The four answers send you to four different checks, and each check is what would settle it. For {a:K1.anyway}, ask for a group that went without, counted in the same way. For {a:K1.extreme}, ask for a group that was just as extreme and was left alone. For {a:K1.behind}, ask for groups that are alike in the other thing, or groups formed by a draw. For {a:K1.backward}, ask for the order: which came first, and how anyone knows.',
      'One test closes all four at once: groups formed by a draw, one given the thing and one not, both counted in the same way afterward. A draw leaves nothing else likelier to be in one group than the other, so the second group shows what happens anyway, and nothing can have picked either group at an extreme or put the people in it by their own choice. That is what a claim looks like when every part holds, and there is an answer for that. When you have put each of the four to a claim and none fits, go back to the first question: the claim may be one that gets the answer {a:S1.holds}.'
    ],
    how: [
      'Read the whole claim and its account before you answer. The words that answer this question are usually in the sentences after the claim, not in the claim. Then put the question to the claim, {q:K1} Point to the words that show your answer.',
      'Ask first how the group was picked. If it was picked because it was at its worst or best, and it was measured again afterward, the answer is {a:K1.extreme}, whatever else the case shows. If nothing in the case went without and the group was not picked at an extreme, the answer is {a:K1.anyway}.',
      'If two groups are set side by side, ask whether something else differs between them that could produce the result alone, which is {a:K1.behind}, or whether the second thing could have come first and led to the first, which is {a:K1.backward}.',
      'Put your finger on the words. A group picked at its worst, the lack of any group that went without, the other thing the groups differ in, or the date that shows the order: if you cannot point to one of these, you do not have an answer yet.'
    ],
    whenBoth: 'Some cases show two answers at once. You have met one: a group picked at its worst and given something, with nothing to set beside it. The answer is {a:K1.extreme}. The pairs below have each been set side by side earlier in this unit, and each has one question that tells it apart.' },

  { id: 'check-cause', kind: 'check', after: 'K1',
    case: 'k-q-latebus',
    ask: { type: 'step', step: 'K1' } },

  /* ---------- Two whole cases, watched ---------- */
  { id: 'worked-bikers', kind: 'worked',
    h: 'A whole claim, from the first question to the name',
    link: 'You have the four names and the question about them. Before the drill, watch two claims being run from the top, in the order the questions are asked. You are not asked anything until the end of each.',
    case: 'k-w-bikers',
    steps: [
      { step: 'S1',
        reason: [
          'Take the parts in order, starting with the people in the figure. The survey covers 500 office workers and all of them answered, so nobody is left out and nobody chose to be counted. That part holds. What is counted is a rating of mood out of 10, asked the same way of every worker, and nobody is paid on it. That part holds. What it is set beside: the riders’ 7.4 beside the others’ 6.1, with both group sizes given. That part holds.',
          'Then the last part. The ad says this: {cue:S1}. That is a claim of cause, and the case shows another way to explain the same result, which is the next question. So the answer is {a:S1.cause}.'
        ] },
      { step: 'K1',
        reason: [
          'The claim says that the first thing, biking, lifts the second, mood. Put the question to it: {q:K1} The riders chose to bike, so nobody formed the groups, and the case shows something about how the two things are ordered: {cue:K1}. If 90 of 150 riders stop biking whenever their mood drops, a low mood leads to not biking, and the people on bikes are partly the people whose mood has not dropped. The second thing could come first and lead to the first.',
          'Is there a group that went without? Yes, the 350 who do not bike, so it is not {a:K1.anyway}. Was a group picked at its worst or best? No, so it is not {a:K1.extreme}. Is there something else that differs between the riders and the others? The case shows nothing of the kind. What is left is {a:K1.backward}.'
        ] }
    ],
    hold: {
      neighbor: 'confound',
      prompt: { kind: 'reason',
        lead: 'The riders chose to bike, and the two groups differ in how they feel, so the case can look like one where something else differs between the groups.',
        choices: [
          { id: 'a', text: 'The riders chose to bike, so nobody formed the groups by chance.',
            note: 'True, and it is why the case can look like {o:confound}. But a choice of group fits both names, so it cannot settle which of the two this is.' },
          { id: 'b', text: 'The riders say they stop biking whenever they hit a low patch.' },
          { id: 'c', text: 'The survey covers 500 workers and all of them answered.',
            note: 'True, and it tells you that the first part holds. It does not separate the two names: both can rest on a full survey.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:confound} you must be able to point to this: {needs:confound}. The case has the choice of group and a real difference between the groups, but it shows nothing else that differs between riders and others and could produce the result alone. What it shows is an order: 90 of 150 riders stop biking whenever their mood drops. That is what {o:reverse} needs: {needs:reverse}.',
        'It is the question from the street trees. {test:confound~reverse} Here the account shows that the second thing could come first, so the answer is {a:K1.backward}.'
      ]
    },
    impression: {
      resembles: 'k-cameras',
      text: [
        'You have an answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the security cameras: two things going together in a snapshot, a claim with an arrow in it, and an account that shows the second thing coming first.',
        'Here the likeness agrees with the answer, so the answer stands. The question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-swim', kind: 'worked',
    h: 'A second whole claim, where the most noticeable thing points the wrong way',
    link: 'The bike commuters were a clean case: one thing was going on in it. In this second case the most noticeable thing in the story is not the thing that decides it. Watch which words each question picks out.',
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
        'It is the question from the two coaching programs. {test:nocontrol~regression} Here the group was the club’s ten slowest, so, when a case shows both, the answer is {a:K1.extreme}.'
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

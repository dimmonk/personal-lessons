// Psychology, Unit Two, part three: the one worked case, and the card that closes the unit after the drill.
// Psychology is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of the hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('psychology', 'u2', [

  { id: 'worked-tasting', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the five names and the question about them. Before you run a case yourself, watch one being run from the top, in the order the questions are asked. The most noticeable thing in its story is not the thing that decides it, so watch which words each question picks out. You are not asked anything until the end.',
    case: 'tasting',
    steps: [
      { step: 'D1',
        reason: 'What the case gives you is how Grace reached a choice of her own: {cue:D1}. There is nothing here that she does to another person, and nothing about how she is across years.' },
      { step: 'R1',
        reason: 'Grace set out on a search that was supposed to settle the choice: a tasting. Now look at the dates: {cue:R1}. The answer came a month before the search. At the tasting she collected what supported it, every compliment, and left out the rest.' }
    ],
    hold: {
      neighbor: 'confbias',
      prompt: { kind: 'reason',
        lead: 'Grace wrote down the compliments and none of the complaints. That is a harder test for one side, so the case can look like {o:confbias}.',
        choices: [
          { id: 'a', text: 'She wrote down every compliment and none of the complaints.',
            note: 'True, and it is why the case can look like {o:confbias}. But being harder on one side fits both names, so it cannot settle which of the two this is.' },
          { id: 'b', text: 'She told her accountant that the tasting settled it.',
            note: 'True, but that is how Grace describes it afterward. It does not show what came first.' },
          { id: 'c', text: 'She decided in March, and the tasting was in April.' }
        ],
        answer: 'c' },
      reason: [
        'Writing down the compliments and not the complaints is a harder test for one side, and on its own that would point to {o:confbias}. But the case shows something earlier: Grace set out on a search, and the answer was chosen a month before it began. When a case shows both, the answer is {a:R1.fixed}.',
        '{o:confbias} is for cases with no search that the person set out on: only a view already held, and a harder test for the evidence against it as it turns up.'
      ]
    },
    impression: {
      resembles: 'interviews', first: 'oneway',
      text: [
        'Now a second look: does this case look like one you know? Notes that leave out every complaint may bring back Greg and the one-way street plan first, and Greg’s case was {o:confbias}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:R1}. Greg’s case has nothing like them: he never set out to settle anything. Carol’s interviews do: she chose first, then ran a search and wrote down what fitted. So the case this one really looks like is Carol’s, and the answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'This card puts the unit in one place.',
    carry: [
      'Say what the reasoning does, and point to the words in the case that show it. If you cannot point, you do not have an answer yet.',
      'The story never decides. Nor does the person, and nor does where they ended up: a view can change without {o:fair}, and a view can be kept with it.',
      'One sentence is never enough. "You can’t trust that report" is {o:confbias} only if the evidence on the speaker’s own side was never asked the same question. "I looked into it properly and I was right" is {o:motivated} only if the answer was chosen before the search began. Otherwise it may well be {o:fair}.'
    ] }
]);

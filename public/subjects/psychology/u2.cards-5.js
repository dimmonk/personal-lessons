// Psychology, Unit Two, part three: the one worked story, and the card that closes the unit after the drill.
// Psychology is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of the hold-back prompt and the heading of the second look.

FC.cards('psychology', 'u2', [

  { id: 'worked-tasting', kind: 'worked',
    h: 'One whole story, from the first question to the name',
    link: 'Watch one story worked through from the top, in the order the questions are asked. The words that stand out most are not the ones that decide it. You are asked nothing until the end.',
    case: 'tasting',
    steps: [
      { step: 'D1',
        reason: 'Grace reached a choice of her own: {cue:D1}. Nothing here is done to anyone else, and nothing is about years.' },
      { step: 'R1',
        reason: 'Grace ran a tasting to settle the choice, and the dates show the answer came first: {cue:R1}. At the tasting she wrote down every compliment and none of the complaints.' }
    ],
    hold: {
      neighbor: 'confbias',
      prompt: { kind: 'reason',
        lead: 'Grace wrote down the compliments and none of the complaints, so this can look like {o:confbias}. What decides it?',
        choices: [
          { id: 'a', text: 'She wrote down every compliment and none of the complaints.',
            note: 'True, and it is why this looks like {o:confbias}. But both names show it, so it cannot settle which this is.' },
          { id: 'b', text: 'She told her accountant that the tasting settled it.',
            note: 'True, but that is how she describes it afterward. It does not show what came first.' },
          { id: 'c', text: 'She decided in March, and the tasting was in April.' }
        ],
        answer: 'c' },
      reason: [
        'Writing down only the compliments is a harder test for one side, and on its own that would be {o:confbias}. But Grace ran a search, and the answer was chosen a month before it began. When a story shows both, {o:motivated} wins.',
        '{o:confbias} is for when nobody set out to search: there is only a view already held, and evidence that comes along and gets picked apart.'
      ]
    },
    impression: {
      resembles: 'interviews', first: 'oneway',
      text: [
        'A second look: does this remind you of a story you know? Notes that leave out every complaint may bring back Greg and the one-way street plan, which was {o:confbias}.',
        'When a likeness and the answer disagree, go back to the words that answer the question: {cue:R1}. Greg’s story has nothing like them: he never set out to settle anything. Carol’s interviews do: she chose first, then ran a search and wrote down what fitted. So this story is really like Carol’s, and the answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'This puts the unit in one place.',
    carry: [
      'Find the words that show what the reasoning is doing. If you cannot find them, you do not have an answer yet.',
      'The topic, the person and where they end up never decide it: a view can change without {o:fair}, and a view can stay put with it.',
      'One sentence is never enough. "You can’t trust that report" is {o:confbias} only if the evidence on the speaker’s own side never got the same questions. "I looked into it properly and I was right" is {o:motivated} only if the answer was picked before the looking. Otherwise it may well be {o:fair}.',
      'Try it on yourself first. When you catch yourself saying "it hardly counts" or "we’ve come too far to stop", ask what your reasoning is doing.'
    ] }
]);

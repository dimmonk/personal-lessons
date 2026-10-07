// Statistical Claims, Unit Four, part two (close): one whole claim, watched, where the story points the wrong way.
// The app prints the stem of the hold-back prompt and the heading of the second look.

FC.cards('stats', 'u4', [

  { id: 'worked-calls', kind: 'worked',
    h: 'A whole claim, from the first question to the name',
    link: 'Watch one claim worked through from the top. The first thing you notice is not what decides it, so read to the end.',
    case: 'meas-calls',
    steps: [
      { step: 'S1',
        reason: [
          'It opens with a new phone system and a fall in average call time, so it can look as if everything turns on the new machines. First check: were any calls left out? No, every call the center handled is in the figure.',
          'Next, what does the figure count? The report reads the fall as proof that the system works. But look at this: {cue:S1}. The agents are ranked on the figure, so it could fall with no better service. The answer is {a:S1.measure}.'
        ] },
      { step: 'M1',
        reason: [
          'Now ask what else could have moved it. Start with {a:M1.pushed}, because there is a ranking and a bonus: {cue:M1}. A call hung up at 5 minutes ends early and still counts like any other, so agents can pull the average down without helping anyone faster.',
          'Check the other two. The new system times every call to the second, as the old one did, so the way of counting did not change. Nothing says anyone looked harder for anything. And a second count agrees: customers solved on the first call fell from 70 in 100 to 52 while the average call time fell from 8 minutes to 5. The answer is {a:M1.pushed}.'
        ] }
    ],
    hold: {
      neighbor: 'defshift',
      prompt: { kind: 'reason',
        lead: 'The call time fell right after a new phone system went in, so this can look like {o:defshift}.',
        choices: [
          { id: 'a', text: 'A new phone system was installed in January, and the average call time fell after it.',
            note: 'True, and it is why this looks like {o:defshift}. But a new machine does not change how calls are counted: it times every call to the second, as the old one did.' },
          { id: 'b', text: 'The agents are ranked on average call time, and an agent can hang up at 5 minutes.' },
          { id: 'c', text: 'The report says the new system works, and credits it for the fall in call time.',
            note: 'True, but that is only what the report claims. It does not show what moved the figure.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:defshift} the way of counting would have to change. It did not: the new system times each call the way the old one did.',
        'For {o:proxy} you need agents ranked and paid on the figure, a fall in it, and a way to lower it without better service. This story has all three. To tell the two apart, ask: {test:proxy~defshift} Here the people who make the figure gain from it and could end calls early, so the answer is {a:M1.pushed}.'
      ]
    },
    impression: {
      resembles: 'meas-parcels', first: 'meas-lab-analyzer',
      text: [
        'A second look: does this remind you of a story you know? A new machine and a fall in a figure may bring back the lab’s new analyzer, which was {o:defshift}.',
        'When a likeness and the answer disagree, go back to the words that answer the question: {cue:M1}. The lab story has nothing like them. This one does: it is the delivery bonus again, with people paid on a figure making the figure. So the answer stands.'
      ]
    } }
]);

// Statistical Claims, Unit Four, part two (close): one whole claim, watched, where the story points the wrong way.
// The app prints the stem of the hold-back prompt and the heading of the second look.

FC.cards('stats', 'u4', [

  { id: 'worked-calls', kind: 'worked',
    h: 'A whole claim, from the first question to the name',
    link: 'You have the three names and the question about them. Before you run a claim yourself, watch one being run from the top, in the order the questions are asked. In this claim the first thing you notice is not the thing that decides it, so read to the end before you answer. You are not asked anything until the end.',
    case: 'meas-calls',
    steps: [
      { step: 'S1',
        reason: [
          'The claim opens with a new phone system and a fall in the average call time, so it can look as if everything turns on a new tool. Take the order. The people or things in the figure are every call the center handled, so nobody is left out, and that part holds.',
          'Next, what the figure counts. The claim reads the fall in call time as the new system working, and the case says this: {cue:S1}. The agents are ranked on the figure, so it could fall with no better service. The answer is {a:S1.measure}.'
        ] },
      { step: 'M1',
        reason: [
          'Now ask what besides the real thing moved it, and take the answers in order. Start with {a:M1.pushed}, because the case has a ranking and a bonus. The case says this: {cue:M1}. A call hung up at 5 minutes is ended early, and a hung-up call counts like any other, so the agents can lower the average without handling calls any faster.',
          'Check the other two. The system times every call to the second, as the old one did, so how the figure is counted did not change, and {a:M1.newrule} has nothing to point to. Nothing says that more effort went into finding anything, so {a:M1.looked} has nothing either. And a second count agrees: the share of customers whose problem was solved on the first call fell from 70 in every 100 to 52, while the average call time fell from 8 minutes to 5. The answer is {a:M1.pushed}.'
        ] }
    ],
    hold: {
      neighbor: 'defshift',
      prompt: { kind: 'reason',
        lead: 'The call time fell right after a new phone system went in, so the case can look like a change in how the figure is counted.',
        choices: [
          { id: 'a', text: 'A new phone system was installed in January, and the average call time fell after it.',
            note: 'True, and it is why the case can look like {o:defshift}. But a new machine is not a new way of counting: the case says it times every call to the second, as the old one did.' },
          { id: 'b', text: 'The agents are ranked on average call time, and an agent can hang up at 5 minutes.' },
          { id: 'c', text: 'The call center’s report says that the new system works.',
            note: 'True, but that is how the report describes it. It does not show what moved the figure.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:defshift} you must be able to point to this: {needs:defshift}. The case has no change in what counts or in the tool that measures: the new system times each call the way the old one did. For {o:proxy} you must be able to point to this: {needs:proxy}. The case has all of it: agents ranked and paid on the figure, a fall in the figure, and a way to lower it without better service.',
        'It is the question that tells the first two names apart. {test:proxy~defshift} Here the people who make the figure gain from it and could end the call early, so the answer is {a:M1.pushed}.'
      ]
    },
    impression: {
      resembles: 'meas-parcels', first: 'meas-lab-analyzer',
      text: [
        'Now the second look: does this claim look like one you know? A new machine and a fall in a figure may bring back the lab’s new analyzer first, and that was {o:defshift}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:M1}. The lab case has nothing like them. This claim does have them. So the claim this one really looks like is the delivery bonus, where people paid on a figure made the figure, and the answer stands.'
      ]
    } }
]);

// Statistical Claims, Unit Four, part three (first half): the wrong idea all three names exploit, the key's question as a question,
// and the two whole claims. The app prints the stem of each hold-back prompt and the heading of the second look.

FC.cards('stats', 'u4', [

  { id: 'refute-moved', kind: 'refute', about: 'M1',
    h: 'A wrong idea: "if the figure went up, more of it is happening"',
    link: 'The three names have one thing in common, and it is an idea that nearly everybody holds. It is the idea that lets a moved figure pass for a changed world.',
    idea: '"The figure went up, so more of it is happening."',
    verdict: 'This is wrong.',
    right: [
      'A figure that went up shows only that the figure went up. Whether the thing it counts went up depends on how the figure was made, and a figure can move for three reasons besides the thing: the people who make it are judged on it, the way of counting it changed, or more effort went into finding what it counts. In each of them the figure moved and the real thing stayed where it was: 16 more parcels in every 100 marked on time with 79 arriving, 3 points of joblessness that were 30 adults no longer counted, four times as many diagnoses from five times as many exams.',
      'It is also not true that a figure that went up never shows more of the real thing. When nothing besides the real thing could have moved it, a rise is a rise, and that is the sound claim.',
      'So when a figure rises, ask the key’s question before you decide what it means: {q:M1} If you can name one, and point to the words that show it, you have an answer. If you can find none, the figure may well have moved because the real thing did.'
    ],
    testedBy: ['m4-claim-ufo', 'm4-claim-cameras'] },

  /* ---------- The key's question ---------- */
  { id: 'q-measure', kind: 'question', step: 'M1',
    h: 'The question you have been answering all along',
    link: 'Since the delivery bonus you have seen the key’s question at the foot of each new name, with one answer under it. This card puts the question and its three answers in one place, as the key shows them, and says why the key asks it.',
    decides: [
      'The key’s first question has already found that the figure could move without the real thing moving, and sent the claim here. This question asks what moved it. Each answer sends you to a different check, and a check made for one answer is no use for another. For {a:M1.pushed}, you look for a count that nobody is judged on. For {a:M1.newrule}, you look for the figure counted both ways in the same period. For {a:M1.looked}, you divide the number found by the number looked at.',
      'This is the only question in this branch, so its answer is the name. And a claim can fail to have an answer at all: when you have put each of the three to it and found nothing, the figure was moved by nothing but the real thing. That is not an answer to this question. It was the first question’s answer {a:S1.holds}, and a claim with that answer is never asked this one.'
    ],
    how: [
      'Read the whole claim, the last sentence too, because the sentence that says how the figure is made is often at the end. Then look for the words that fit each answer in turn, always in this order: who is paid or ranked on the figure and also makes it; what changed in how it is counted; how much looking there was at each end.',
      'First, look for {a:M1.pushed}: {needs:proxy}. Second, look for {a:M1.newrule}: {needs:defshift}. Third, look for {a:M1.looked}: {needs:detection}.',
      'Whichever you give, put your finger on the words that show it. If you cannot point, you do not have an answer yet.',
      'The arithmetic often settles it. For {a:M1.looked}, the number found divided by the number looked at stays level (2 in every 100, 3 in every 100). For {a:M1.newrule}, the same people counted both ways give the same figure in both years (90 in 1,000 under last year’s definition). For {a:M1.pushed}, a second count by someone who gains nothing stays where it was (79 in every 100).'
    ],
    whenBoth: 'Sometimes two answers seem to fit. Each pair below has been set side by side earlier in this unit, and each has one question that separates it. Where the key has no tie-break for a pair, the claims in this unit show one of the two, and the claim itself says which.' },

  { id: 'check-measure', kind: 'check', after: 'M1',
    case: 'meas-step-counter',
    ask: { type: 'step', step: 'M1' } },

  /* ---------- Two whole claims, watched ---------- */
  { id: 'worked-inspections', kind: 'worked',
    h: 'A whole claim, from the first question to the name',
    link: 'You have the three names and the key’s question about them. Before you run a claim yourself, watch two being run from the top, in the order the key asks. You are not asked anything until the end of each.',
    case: 'meas-inspections',
    steps: [
      { step: 'S1',
        reason: [
          'The key’s first question takes the parts of a claim in order and stops at the first that goes wrong. Start with the people or things in the figure. The restaurants inspected are drawn by lottery from the city’s list in both years, so nobody is favored or left out, and that part holds.',
          'Next, what the figure counts. The claim says that violations found tripled, from 840 to 2,520, and reads that as restaurants getting dirtier. The case says this: {cue:S1}. A count of what inspectors find rises with the number of inspections, so the figure could rise with no restaurant dirtier. The key’s answer is {a:S1.measure}.'
        ] },
      { step: 'M1',
        reason: [
          'Now ask what besides the real thing moved it. Nobody is paid on the figure: the case does not say the inspectors are paid by the violation, so {a:M1.pushed} has nothing to point to. The checklist and the standard for a violation did not change, so {a:M1.newrule} has nothing to point to either. What changed is how much looking there was: {cue:M1}.',
          'The arithmetic confirms it. Last year, 840 violations in 400 inspections is 2.1 for every inspection. This year, 2,520 in 1,200 is 2.1 for every inspection. The share found did not move, and the count tripled because the inspections did. The key’s answer is {a:M1.looked}.'
        ] }
    ],
    hold: {
      neighbour: 'defshift',
      prompt: { kind: 'reason',
        lead: 'The case says six new inspectors were hired. That is a change in who does the counting, so it can look like a change in how the figure is counted.',
        choices: [
          { id: 'a', text: 'The department hired six more inspectors this year.',
            note: 'True, and it is why the case can look like {o:defshift}. But new people doing the same checking with the same checklist is more looking, and not a different way of counting.' },
          { id: 'b', text: 'The checklist and the standard for a violation are the same, and the inspections went from 400 to 1,200 a year.' },
          { id: 'c', text: 'The department announced the figure in a press release.',
            note: 'True, but that is the story. Every claim in this unit arrives in some announcement, whichever name applies.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:defshift} you must be able to point to this: {needs:defshift}. The case shows the opposite: the same checklist and the same standard. For {o:detection} you must be able to point to this: {needs:detection}. It shows three times the inspections and three times the violations, at 2.1 for every inspection in each year.',
        'It is the question from the lab that tested more people. {test:defshift~detection} Here the tool and the standard are the same and the number checked grew, so the key’s answer is {a:M1.looked}.'
      ]
    },
    impression: {
      resembles: 'meas-van',
      text: [
        'The key has given its answer. Now take a second look of a different kind: does this claim look like one you know? It should bring back the screening van: a count of what was found rose, the claim read it as more of the bad thing, and many more were being examined.',
        'Here the key and the likeness agree, so the answer stands. The key’s question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the key’s question and find the words in the case that answer it. The second whole claim shows how.'
      ]
    } },

  { id: 'worked-calls', kind: 'worked',
    h: 'A second whole claim, where the story points the wrong way',
    link: 'The restaurant inspections were a clean claim: one thing was going on in them. In this second claim the first thing you notice is not the thing that decides it. Read to the end before you answer.',
    case: 'meas-calls',
    steps: [
      { step: 'S1',
        reason: [
          'The claim opens with a new phone system and a fall in the average call time, so it can look as if everything turns on a new tool. Take the key’s order. The people or things in the figure are every call the center handled, so nobody is left out, and that part holds.',
          'Next, what the figure counts. The claim reads the fall in call time as the new system working, and the case says this: {cue:S1}. The agents are ranked on the figure, so it could fall with no better service. The key’s answer is {a:S1.measure}.'
        ] },
      { step: 'M1',
        reason: [
          'Now ask what besides the real thing moved it, and take the answers in order. Start with {a:M1.pushed}, because the case has a ranking and a bonus. The case says this: {cue:M1}. A call hung up at 5 minutes is ended early, and a hung-up call counts like any other, so the agents can lower the average without handling calls any faster.',
          'Check the other two. The system times every call to the second, as the old one did, so how the figure is counted did not change, and {a:M1.newrule} has nothing to point to. Nothing says that more effort went into finding anything, so {a:M1.looked} has nothing either. And a second count agrees: the share of customers whose problem was solved on the first call fell from 70 in every 100 to 52, while the average call time fell from 8 minutes to 5. The key’s answer is {a:M1.pushed}.'
        ] }
    ],
    hold: {
      neighbour: 'defshift',
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
        'It is the question from the bank that ranked its loan officers. {test:proxy~defshift} Here the people who make the figure gain from it and could end the call early, so the key’s answer is {a:M1.pushed}.'
      ]
    },
    impression: {
      resembles: 'meas-parcels', first: 'meas-scale',
      text: [
        'Now the second look: does this claim look like one you know? A new machine and a fall in a figure may bring back the gym scale first, and the gym scale was {o:defshift}. So here the likeness and the key seem to disagree.',
        'When that happens, go back to the key’s question and find the words in the case that answer it. They are {cue:M1}. The gym scale has nothing like them: nobody was ranked on body fat. This claim does have them. So the claim this one really looks like is the delivery bonus, where people paid on a figure made the figure, and the key’s answer stands.'
      ]
    } }
]);

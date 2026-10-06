// Statistical Claims, Unit Five, part two (second half): the whole claim, and the cards that close the unit after the drill.
// This is an action subject (subject.action is true), so the unit ends with a plan card.
// The app prints the stem of the hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('stats', 'u5', [

  { id: 'worked-county', kind: 'worked',
    h: 'A whole claim, from the first question to the name',
    link: 'Before you run a claim yourself, watch one being run from the top, in the order the questions are asked. In this case the first thing you notice is not the thing that decides it. You are not asked anything until the end.',
    case: 'wk-county',
    steps: [
      { step: 'S1',
        reason: [
          'Take the parts in order. The people or things in the figure: 1,000 operations at each hospital, all of them counted. That part holds. What the figure counts: deaths after heart surgery, counted the same way at both. That part holds.',
          'Next, what the figure is set beside. The claim gives a percentage, {cue:S1}, and two totals set side by side as a ranking. It does give the counts, but the case goes on to say that the two hospitals do not operate on the same patients, and a ranking that leaves out what each total is made of leaves out something you would need beside it. The answer is {a:S1.compare}.'
        ] },
      { step: 'C1',
        reason: [
          'Now the question is what you would need to see. Two totals are set side by side, and the case says this: {cue:C1}. So the totals are made of very different mixes of patients, and ranking them as if they were alike is unfair to the hospital that takes the hard ones.',
          'The claim does not give the split, so here is one that fits what it says. County General operated on 900 high-risk patients, with 144 deaths (16 in every 100), and on 100 lower-risk patients, with 6 deaths (6 in every 100): 150 deaths in all. St. Mark’s operated on 200 high-risk patients, with 40 deaths (20 in every 100), and on 800 lower-risk patients, with 80 deaths (10 in every 100): 120 deaths in all. County General has the lower death rate with both kinds of patient and the higher total, because nine in ten of its patients were high-risk.',
          'What you would need is each total split into its groups, so the answer is {a:C1.split}.'
        ] }
    ],
    hold: {
      neighbor: 'relrisk',
      prompt: { kind: 'reason',
        lead: 'The report says "20% lower", so the opening can look like a percentage given without the numbers.',
        choices: [
          { id: 'a', text: 'The report says that deaths are 20% lower at St. Mark’s.',
            note: 'True, and it is why the case can look like {o:relrisk}. But the report gives the counts as well: 120 in 1,000 and 150 in 1,000. A percentage with its counts leaves out nothing about how many.' },
          { id: 'b', text: 'County General is the only hospital that operates on the sickest patients, and St. Mark’s turns most of them away.' },
          { id: 'c', text: 'The report counts deaths the same way at both hospitals.',
            note: 'True, and it tells you that what is counted holds. It does not separate the two answers: a total with a hidden mix and a total with none can both be counted the same way.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:relrisk} you must be able to point to this: {needs:relrisk}. The report gives the percentage and it also gives the counts, so nothing is missing about how many. For {o:simpson} you must be able to point to this: {needs:simpson}. The case shows two totals, and each hospital deals with a very different mix.',
        '{test:relrisk~simpson} Here the counts are there, and what is missing is what each total is made of, so the answer is {a:C1.split}.'
      ]
    },
    impression: {
      resembles: 'simp-tutors', first: 'rel-jog',
      text: [
        'Now the second look: does this case look like one you know? A percentage that says how much lower, "20% lower", may bring back the jogging headline first, and that was {a:C1.numbers}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:C1}. The jogging headline had no counts and nothing like these words. This case has the counts, and it shows the two hospitals dealing with different patients. So the case it really looks like is the two tutors, where one took the students who were already failing, and the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-compare', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the question on your own. This card puts the unit in one place.',
    carry: [
      'A figure needs something beside it. Ask what has to stand beside it, and point to the words that show your answer. If you cannot point, you do not have an answer yet.',
      'A percentage is a share of something the claim has not told you. Ask for the counts before and after: the same percentage can be 2 more people in every 1,000 or 10 more in every 100.',
      'A test that is right 99 times in 100 does not make a yes right 99 times in 100. Count it out for 10,000 people: how many have the thing, how many the test catches, how many it flags by mistake. The rarer the thing, the more of the yeses are each a {t:falsealarm}.',
      'Two totals set side by side are a fair ranking only when each is made of the same mix of easy and hard ones. Otherwise split each total by kind and compare kind by kind. The better one can have the lower total.',
      'A claim that comes with the counts, the split and a fair thing to set the figure beside is {o:comp_ok}. When a headline percentage rests on a handful, the answer is {o:smalln}.'
    ] },

  { id: 'plan-compare', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'Knowing the question is not the same as asking it at the moment a claim reaches you. A plan is one line that links a moment you will recognize to the question.',
    intro: 'You do not have to write one. If you do, it has two halves: the moment, and what you will do. Start from one of the lines below, or write your own. Nothing is saved until you press the button, and it stays on this device.',
    cues: [
      { cue: 'a headline, an ad or a message gives me a percentage and nothing else', then: 'ask for the two counts it was worked out from before I decide what I think' },
      { cue: 'a test or an alarm that is mostly right says yes', then: 'find out how common the thing is, and count out 10,000 people before I read the yes' },
      { cue: 'a ranking puts two people, places or teams side by side by one total', then: 'ask what each total is made of, and look for the totals split into groups' },
      { cue: 'a claim gives me the counts I asked for', then: 'say that it holds as far as it goes, and pass it on with the counts' }
    ] }
]);

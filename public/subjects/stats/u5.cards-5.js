// Statistical Claims, Unit Five, part two (second half): the whole claim, and the cards that close the unit after the drill.
// This is an action subject (subject.action is true), so the unit ends with a plan card.
// The app prints the stem of the hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('stats', 'u5', [

  { id: 'worked-county', kind: 'worked',
    h: 'One whole claim, where the start points the wrong way',
    link: 'Watch one claim worked through, from the first question to the name. The first thing you notice is not what decides it, so read to the end. You are not asked anything until then.',
    case: 'wk-county',
    steps: [
      { step: 'S1',
        reason: [
          'Take the parts in order. Who is counted: 1,000 operations at each hospital, all of them. That part holds. What is counted: deaths after heart surgery, counted the same way at both. That part holds too.',
          'Next, what the figure is set beside. The claim gives a percentage, {cue:S1}, and sets two totals side by side as a ranking. The counts are there, but the story goes on to say the two hospitals do not operate on the same patients, so the ranking leaves out something you need. The answer is {a:S1.compare}.'
        ] },
      { step: 'C1',
        reason: [
          'Now, what would you need to see? Two totals are set side by side, and the story says this: {cue:C1}. So the totals hold very different mixes of patients, and a ranking that treats them as alike is unfair to the hospital that takes the hard ones.',
          'The claim doesn’t give the split, so here is one that fits what it says. County General operated on 900 high-risk patients, with 144 deaths (16 in every 100), and on 100 lower-risk patients, with 6 deaths (6 in every 100): 150 deaths in all. St. Mark’s operated on 200 high-risk patients, with 40 deaths (20 in every 100), and on 800 lower-risk patients, with 80 deaths (10 in every 100): 120 deaths in all.',
          'County General has the lower death rate with both groups and the higher total, because nine in ten of its patients were high-risk. What you would need is each total split into its groups, so the answer is {a:C1.split}.'
        ] }
    ],
    hold: {
      neighbor: 'relrisk',
      prompt: { kind: 'reason',
        lead: 'The report says “20% lower”, so it can look like {o:relrisk}. What decides it?',
        choices: [
          { id: 'a', text: 'The report says deaths are 20% lower at St. Mark’s.',
            note: 'True, and it is why this looks like {o:relrisk}. But the report gives the counts too, 120 in 1,000 and 150 in 1,000, so nothing is missing about how many.' },
          { id: 'b', text: 'County General takes the sickest patients, and St. Mark’s turns most of them away.' },
          { id: 'c', text: 'The report counts deaths the same way at both hospitals.',
            note: 'True, but a total that hides a mix and a total that does not can both be counted the same way.' }
        ],
        answer: 'b' },
      reason: [
        'A percentage with no counts would be {o:relrisk}, but this report gives the counts too: 120 in 1,000 and 150 in 1,000. Two totals that hide different mixes are {o:simpson}, and this report says the two hospitals take very different patients.',
        '{test:relrisk~simpson} Here the counts are there, and what is missing is what is inside each total, so the answer is {a:C1.split}.'
      ]
    },
    impression: {
      resembles: 'simp-tutors', first: 'rel-jog',
      text: [
        'A second look: does this remind you of a story you know? “20% lower” may bring back the jogging headline first, and that was {a:C1.numbers}. Here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words that answer it: {cue:C1}. The jogging headline had no counts and nothing like these words. This story gives the counts and shows the two hospitals taking different patients, just as Mr. Ruiz took the students who were already failing, so the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-compare', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the question on your own. Here is the unit in one place.',
    carry: [
      'A figure needs something beside it. Ask what has to stand beside it, and find the words that show your answer. If you can’t find them, you don’t have an answer yet.',
      'A percentage is a share of something the claim hasn’t told you. Ask for the counts before and after: the same percentage can be 2 more people in every 1,000 or 10 more in every 100.',
      'A test that is right 99 times in 100 doesn’t make a yes right 99 times in 100. Count it out for 10,000 people: how many have the thing, how many the test catches, how many it flags by mistake. The rarer the thing, the more of the yeses are each a {t:falsealarm}.',
      'Two totals side by side are a fair ranking only when each holds the same mix of easy and hard ones. Otherwise split each total by group and compare group by group. The better one can have the lower total.',
      'A claim that comes with the counts, the split and a fair thing to set the figure beside is {o:comp_ok}. A headline percentage built on a handful is {o:smalln}.'
    ] },

  { id: 'plan-compare', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'Knowing the question is not the same as asking it when a claim reaches you. A plan links a moment you will recognize to one thing you will do.',
    intro: 'You don’t have to write one. If you do, it has two halves: the moment, and what you will do. Start from one of the lines below, or write your own. Nothing is saved until you press the button, and it stays on this device.',
    cues: [
      { cue: 'a headline, an ad or a message gives me a percentage and nothing else', then: 'ask for the two counts it was worked out from before I decide what I think' },
      { cue: 'a test or an alarm that is mostly right says yes', then: 'find out how common the thing is, and count out 10,000 people before I read the yes' },
      { cue: 'a ranking puts two people, places or teams side by side by one total', then: 'ask who is inside each total, and look for the totals split into groups' },
      { cue: 'a claim gives me the counts I asked for', then: 'say that it holds as far as it goes, and pass it on with the counts' }
    ] }
]);

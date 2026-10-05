// Statistical Claims, Unit Five, part four: the two whole claims, and the cards that close the unit after the drill.
// This is an action subject (subject.action is true), so the unit ends with a plan card.
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('stats', 'u5', [

  { id: 'worked-savings', kind: 'worked',
    h: 'A whole claim, from the first question to the name',
    link: 'You have the three names and the key’s question about them. Before you run a claim yourself, watch two being run from the top, in the order the key asks. You are not asked anything until the end of each.',
    case: 'wk-savings',
    steps: [
      { step: 'S1',
        reason: [
          'The unit taught an order for answering the key’s first question: take the parts in order and stop at the first that goes wrong. Start with the people or things in the figure. The figure is the rate a bank pays on an account, so nobody is left out or picked. That part holds. Next, what the figure counts: an interest rate, worked out the same way for the old account and the new one. That part holds.',
          'Next, what the figure is set beside. The ad says this: {cue:S1}. That is a percentage of the old rate, and the ad gives neither rate. The figure is given in a form that leaves out what you would need beside it, so the key’s answer is {a:S1.compare}.'
        ] },
      { step: 'C1',
        reason: [
          'Now the key asks what you would need to see. The ad gives a percentage, and then this: {cue:C1}. A rise of 50% in a rate is a share of the old rate, with no rate named.',
          'On $2,000, an old rate of 1% pays $20 a year, and 50% more is 1.5%, which pays $30: $10 more. An old rate of 4% pays $80 a year, and 50% more is 6%, which pays $120: $40 more. The same words cover a gain of $10 and a gain of $40. What you would need is the two rates, each stated, so the key’s answer is {a:C1.numbers}.'
        ] }
    ],
    hold: {
      neighbour: 'comp_ok',
      prompt: { kind: 'reason',
        lead: 'The ad sets the new account beside the old one, so it can look like a comparison that holds.',
        choices: [
          { id: 'a', text: 'The ad compares the new account with the old one.',
            note: 'True, and it is why the claim can look like {o:comp_ok}. But a comparison that holds gives the numbers behind it, and this one gives only the percentage.' },
          { id: 'b', text: 'The ad gives 50% and names neither rate.' },
          { id: 'c', text: 'The bank pays the interest every month.',
            note: 'True, but that is story. It does not separate the two answers: a claim that holds and one that does not can both be about an account that pays monthly.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:comp_ok} you must be able to point to this: {needs:comp_ok}. The ad has two things of the same kind, an old rate and a new one, but it gives no numbers for either, and only the percentage.',
        'It is the question from the bus routes. {test:relrisk~comp_ok} Here the numbers are not there, so the key’s answer is {a:C1.numbers}.'
      ]
    },
    impression: {
      resembles: 'rel-jog',
      text: [
        'The key has given its answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the jogging headline: a percentage that says how much more, with no word on how many it was before.',
        'Here the key and the likeness agree, so the answer stands. The key’s question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the key’s question and find the words in the case that answer it. The second whole claim shows how.'
      ]
    } },

  { id: 'worked-county', kind: 'worked',
    h: 'A second whole claim, where the opening points the wrong way',
    link: 'The savings ad was a clean case: one thing was going on in it. In this second case the first thing you notice is not the thing that decides it. Read to the end before you answer.',
    case: 'wk-county',
    steps: [
      { step: 'S1',
        reason: [
          'Take the parts in order. Start with the people or things in the figure: 1,000 operations at each hospital, all of them counted. That part holds. Next, what the figure counts: deaths after heart surgery, counted the same way at both. That part holds.',
          'Next, what the figure is set beside. The claim gives a percentage, {cue:S1}, and two totals set side by side as a ranking. It does give the counts, so nothing is missing about how many. But the case goes on to say that the two hospitals do not operate on the same patients, and a ranking of totals that leaves out what each is made of is a figure given in a form that leaves out what you would need beside it. The key’s answer is {a:S1.compare}.'
        ] },
      { step: 'C1',
        reason: [
          'Now the key asks what you would need to see. Two totals are set side by side, and the case says this: {cue:C1}. So the two totals are made of very different mixes of patients, and ranking them as if they were alike is unfair to the hospital that takes the hard ones.',
          'The claim does not give the split, so here is one that fits what it does say. County General operated on 900 high-risk patients, with 144 deaths (16 in every 100), and on 100 lower-risk patients, with 6 deaths (6 in every 100): 150 deaths in all. St. Mark’s operated on 200 high-risk patients, with 40 deaths (20 in every 100), and on 800 lower-risk patients, with 80 deaths (10 in every 100): 120 deaths in all. County General has the lower death rate with both kinds of patient, and the higher total, because nine in ten of its patients were the high-risk kind.',
          'What you would need is each total split into its groups, so the key’s answer is {a:C1.split}.'
        ] }
    ],
    hold: {
      neighbour: 'relrisk',
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
        'It is the question from the surgeons. {test:relrisk~simpson} Here the counts are there, and what is missing is what each total is made of, so the key’s answer is {a:C1.split}.'
      ]
    },
    impression: {
      resembles: 'simp-hospitals', first: 'rel-jog',
      text: [
        'Now the second look: does this case look like one you know? A percentage that says how much lower, "20% lower", may bring back the jogging headline first. And the jogging headline was {a:C1.numbers}. So here the likeness and the key seem to disagree.',
        'When that happens, go back to the key’s question and find the words in the case that answer it. They are {cue:C1}. The jogging headline had no counts and nothing like these words. This case has the counts, and it shows the two hospitals dealing with different patients. So the case this one really looks like is Lakeside and Parkview, where the regional hospital took the serious patients, and the key’s answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-compare', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the key’s question on your own. This card puts the unit in one place, in the key’s words.',
    carry: [
      'A figure needs something beside it. Before you decide what a figure means, ask what has to stand beside it, and point to the words that show your answer. If you cannot point, you do not have an answer yet.',
      'A percentage is a share of something the claim has not told you. Ask for the counts before and after. The same percentage can be 2 more people in every 1,000 or 10 more in every 100.',
      'A test that is right 99 times in 100 does not make a yes right 99 times in 100. Count it out for 10,000 people: how many have the thing, how many the test catches, how many it flags by mistake. The rarer the thing, the larger the share of the yeses that are each a {t:falsealarm}.',
      'Two totals set side by side are a fair ranking only when each is made of the same mix of easy and hard ones. When the mixes differ, break each total down by kind and compare kind by kind. The better one can have the lower total.',
      'Each of these is put right by something you can ask for: the counts, a count-out of 10,000 people, each total broken down by kind. A claim that comes with them can be read at once, and when its other parts hold too, it is {o:comp_ok}.',
      'When a headline percentage rests on a handful, the key gives {o:smalln} first, because the figure comes before what it is set beside.'
    ] },

  { id: 'transfer-compare', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the three names is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the three and name an occasion of your own: something you read, something you were told, or something you said. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'relrisk', occasion: 'The last time a headline, an ad or a label told you something was more likely or less likely by a percentage, and gave no counts.' },
      { outcome: 'baserate', occasion: 'A test, an alert or a flag that said yes about you or someone near you. How common was the thing it was looking for?' },
      { outcome: 'simpson', occasion: 'A ranking of two people, places or teams by one total: a school, a doctor, a team. Did they deal with the same mix?' }
    ],
    places: ['At home', 'At work', 'In the news', 'On my phone'] },

  { id: 'plan-compare', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'Knowing the question is not the same as asking it at the moment a claim reaches you. A plan is one line that links a moment you will recognize to the question.',
    intro: 'You do not have to write one. If you do, it has two halves: the moment, and what you will do. Start from one of the lines below, or write your own. Nothing is saved until you press the button, and it stays on this device.',
    cues: [
      { cue: 'a headline, an ad or a message gives me a percentage and nothing else', then: 'ask for the two counts it was worked out from before I decide what I think' },
      { cue: 'a test or an alarm that is mostly right says yes', then: 'find out how common the thing is, and count out 10,000 people before I read the yes' },
      { cue: 'a ranking puts two people, places or teams side by side by one total', then: 'ask what each total is made of, and look for the totals split into groups' },
      { cue: 'a claim gives a big percentage and I feel a jolt', then: 'say the counts out loud, even if I have to guess them, before I share it' },
      { cue: 'a claim gives me the counts I asked for', then: 'say that it holds as far as it goes, and pass it on with the counts' }
    ] }
]);

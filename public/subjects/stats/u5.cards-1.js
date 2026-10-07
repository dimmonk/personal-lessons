// Statistical Claims, Unit Five, part one (first half): the opening card, and the first name (a percentage with no counts).
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain:
// the reminder of Unit One, the preview map, the heading of a meet card, the key's question and answer on a meet card, the "also called"
// sentence, and the stem of every commit prompt.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action and one short sentence
// of why), then the name, then what to do (act: numbered steps too). Lesson standard section 20.
// Words this unit keeps to one meaning each: claim (what someone says with a number in it), figure (the number in a claim), count (an actual
// number of people or things, such as 3 out of 40), percentage (a count turned into a share of 100), story (one example).

FC.cards('stats', 'u5', [

  { id: 'orient-compare', kind: 'orient',
    h: 'Before you trust a percentage, a test result or a ranking, check what is missing',
    canDo: 'Before you share an ad that says “cuts your risk by 50%”, a poster that says “99% accurate” or a ranking that says “Hospital A is better”, check what is missing beside the figure. It is always one of three things, and you can learn to spot each.',
    everyday: [
      "An ad says, 'Cuts your risk by 50%.' A poster says, 'This test is 99% accurate.' A ranking says, 'Hospital A saves 90 of every 100 patients, and Hospital B only 80.' Each figure is true as far as it goes, and each leaves out something you need before you can tell what it means.",
      "A figure on its own is like a length with no unit. '50%' is half of something, and the ad does not say what. '99% accurate' says how often the test is right, but what you want to know is how likely it is that you have the thing when the test says yes. A ranking sets two totals side by side, and a total can hide what is inside it."
    ],
    add: 'Two words are used all the way through. A count is an actual number of people or things, such as 3 out of 40. A percentage is a count turned into a share of 100, and it cannot give the count back: 3 out of 40 and 30 out of 400 are both 7.5%.',
    map: { branch: 'compare' } },

  /* ---------- A percentage without the numbers ---------- */
  { id: 'meet-relrisk', kind: 'meet', outcome: 'relrisk',
    link: 'Start with the one you see most often: a headline that gives a percentage and nothing else.',
    case: 'rel-jog', mark: 'C1',
    explain: [
      '“40% more likely” means the old chance, plus 40% of the old chance. The headline hides the old chance, and the old chance is what tells you how big the news is.',
      'Say 5 in every 1,000 people who don’t jog hurt an ankle in a year. 40% more is 7 in 1,000: 2 more people in every 1,000. Now say 25 in every 100 do. 40% more is 35 in 100: 10 more in every 100. The headline is true both times, and the news is very different.'
    ],
    spot: [
      { do: 'Find the percentage: “40% more likely”.', why: 'A change given only as a share is the sign of this one.' },
      { do: 'Ask what the 40% is 40% of: how likely an ankle injury was before.', why: 'The headline never says, and the size of the news depends on it.' },
      { do: 'Look for the two counts: how many were hurt, out of how many people, before and after.', why: 'Without them you cannot tell 2 more in 1,000 from 10 more in 100.' }
    ],
    feature: { step: 'C1', option: 'numbers' },
    name: 'This is {o:relrisk}. The percentage is usually right. What is missing is the counts it was worked out from.',
    act: [
      { do: 'Ask “Out of how many, before and after?”', why: 'The same percentage can be a tiny change or a huge one.' },
      { do: 'Look for the two counts in the report behind the headline, or in the small print.', why: 'They are often in the study even when the headline leaves them out.' },
      { do: 'If you can’t find them, say so before you share it: “Up 40%, but from what?”', why: 'Then you are not passing on a figure that may mean almost nothing.' }
    ] },

  { id: 'check-relrisk', kind: 'check', after: 'relrisk',
    case: 'rel-school',
    ask: { type: 'phrase', step: 'C1', say: 'Which words are the percentage with no counts behind it? Tap them.',
           answer: 'late arrivals have fallen by 60%' } }
]);

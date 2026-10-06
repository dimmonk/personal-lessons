// Statistical Claims, Unit Five, part one (first half): the opening card, and the first name (a percentage with no counts).
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain:
// the reminder of Unit One, the preview map, the heading of a meet card, "what you must be able to point to", the key's question and
// answer on a meet card, the "also called" sentence, and the stem of every commit prompt.
// Words this unit keeps to one meaning each: claim (what someone says with a number in it), figure (the number in a claim), count (an actual
// number of people or things, such as 3 out of 40), percentage (a count turned into a share of 100), case (the app's word for one example).

FC.cards('stats', 'u5', [

  { id: 'orient-compare', kind: 'orient',
    h: 'A figure needs something beside it: what, and is it there?',
    canDo: 'After this unit you can read a claim built on a percentage, a test result or a ranking of two totals, and say which of three things is missing from beside the figure. You will be able to point to the words that show it, and to tell the three apart.',
    everyday: [
      "You meet figures like these every week. An ad says, 'Cuts your risk by 50%.' A poster says, 'This test is 99% accurate.' A ranking says, 'Hospital A saves 90 of every 100 patients, and Hospital B only 80.' In each one the figure is true as far as it goes, and in each something is left out that you would need before you could tell what the figure means.",
      "A figure on its own is like a length with no unit. '50%' is half of something, and the ad does not say of what. '99% accurate' says how often the test is right, and what you want to know is how likely it is that you have the thing when the test says yes. A ranking of two hospitals sets two totals side by side, and a total can hide what it is made of."
    ],
    add: 'Two words are used all the way through. A count is an actual number of people or things, such as 3 out of 40. A percentage is a count turned into a share of 100, and it cannot give the count back: 3 out of 40 and 30 out of 400 are both 7.5%.',
    map: { branch: 'compare' } },

  /* ---------- A percentage without the numbers ---------- */
  { id: 'meet-relrisk', kind: 'meet', outcome: 'relrisk',
    link: 'Start with the one you see most often: a headline that gives a percentage and nothing else.',
    case: 'rel-jog', mark: 'C1',
    strip: [
      'There is a figure, and it is a percentage: 40% more likely.',
      'The 40% is a share of an amount the headline does not tell you: how likely people were to hurt an ankle before the "more" was added.',
      'No count is given: not how many joggers were hurt, and not how many people the study looked at.'
    ],
    explain: [
      'A percentage is a share of something, so it always rests on an amount underneath. "40% more likely" means the old chance, plus 40% of the old chance. The headline hides the old chance, and the old chance is what tells you how big the news is.',
      'Suppose 5 of every 1,000 people who do not jog hurt an ankle in a year. 40% more is 7 in 1,000: 2 more people in every 1,000. Now suppose 25 of every 100 do. 40% more is 35 in 100: 10 more people in every 100. The headline is true both times, and the news is very different.',
      'To tell them apart you need the two counts the percentage was worked out from: how many it was before and how many after, each out of how many.'
    ],
    feature: { step: 'C1', option: 'numbers' },
    name: 'The name for this is {o:relrisk}. The claim gives the percentage and no word on how many it was before and after. The percentage is usually right; the name points at what it leaves out.',
    act: 'Do not decide anything from the percentage alone. Ask "Out of how many, before and after?" and look for the two counts, in the report behind the headline or the small print. If you cannot find them, say so before you share it: "Up 40%, but from what?"' },

  { id: 'check-relrisk', kind: 'check', after: 'relrisk',
    case: 'rel-school',
    ask: { type: 'phrase', step: 'C1', say: 'Which words give a percentage and leave out the numbers behind it? Tap them.',
           answer: 'late arrivals have fallen by 60%' } }
]);

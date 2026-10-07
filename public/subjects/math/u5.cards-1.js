// Basic Math, Unit Five, part one: the opening card, and the first kind (several choices, each from its own list).
// A quick lesson (lesson standard section 19). Unit Five is a procedure unit (kind 'P', lesson standard A12): each kind of problem gets
// one meet card, one check and one worked example with real numbers. The key has one question here, and each of its five answers leads
// to one name, so there is no second question to teach.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain:
// the preview map, the heading of a meet card, the key’s question and answer on a meet card, and the stem of every commit prompt.
// A meet card: the problem first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action and one short
// sentence of why), then the name (lesson standard section 20).
// The worked examples (kind solved) are in u5.cards-solved-*.js. Their steps are computed, not typed: do not edit a number by hand.

FC.cards('math', 'u5', [

  { id: 'orient-chance', kind: 'orient',
    h: 'Count the wrong way and you still get a number',
    canDo: 'Before you work out how many ways something can happen, or how likely it is, check which of five kinds of problem you have. Each kind has its own steps, and the wrong steps still give a neat number that looks right.',
    everyday: [
      'Say 4 people are to be picked from 9 for a quiz team. Count one way and you get 6,561. Count another way and you get 3,024. Count the right way and you get 126. All three look like sensible answers, and nothing in the number tells you which is wrong.',
      'So the first job is not the sum. It is to ask what you are counting, or what chance you want, and only then to work it out with the steps for that kind.'
    ],
    add: [
      'Four words mean the same thing every time. A result is one complete way it can turn out, such as one phone cover or one team. A list is everything one choice can be, such as the 3 styles of cover. A pick is one thing taken from a list or a group. A chance is a number for how likely something is: 0 means it cannot happen, 1 means it is certain, and 0.2, the same as 20%, means 1 time in every 5.'
    ],
    map: { branch: 'chance' } },

  { id: 'meet-multprin', kind: 'meet', outcome: 'multprin',
    link: 'The simplest counting there is: several choices, each made from its own list.',
    case: 'm5-wd-cases', mark: 'C1',
    explain: [
      'Write them out. Black comes in 3 covers: plain, ridged and clear. Red comes in the same 3, and so do blue and green. That is 4 colors with 3 covers each: 4 × 3 = 12 different covers.',
      'You multiply, and do not add, because every color goes with every style. Whatever color the customer picks, all 3 styles are still there to choose from. Two numbers to multiply are not enough to spot this kind: the next two kinds multiply too.'
    ],
    spot: [
      { do: 'Find the separate choices: a color and a style.', why: 'Each one is a decision of its own.' },
      { do: 'Check each choice has its own full list: 4 colors and 3 styles.', why: 'Picking a color uses up none of the styles.' },
      { do: 'Check the question asks for whole results: how many different covers.', why: 'You are counting finished covers, not single colors or styles.' }
    ],
    feature: { step: 'C1', option: 'lists' },
    name: 'This is {o:multprin}. To count the results, multiply the sizes of the lists.' },

  { id: 'check-multprin', kind: 'check', after: 'multprin',
    case: 'm5-wd-bowl',
    ask: { type: 'phrase', step: 'C1', say: 'Which words show that each choice is made from its own list? Tap them.',
           answer: 'picks one of 5 ball weights and one of 8 shoe sizes' } }
]);

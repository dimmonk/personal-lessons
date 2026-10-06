// Basic Math, Unit Three, part one: the opening card, and the first kind (a calculation worked backwards from its result).
// Unit Three is the second procedure unit (kind 'P', lesson standard A12): each kind of problem has a procedure, taught with a
// problem of the kind, one worked example with real numbers, and a check. The key has one question here,
// and each of its four answers leads to one name, so there is no second question to teach.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain:
// the preview map, the heading of a meet card, "what you must be able to point to", the key’s question and answer on a meet card,
// and the stem of every commit prompt.
// The worked examples (kind solved) are in u3.cards-solved-*.js. Their steps are computed, not typed: do not edit a number by hand.

FC.cards('math', 'u3', [

  { id: 'orient-unknown', kind: 'orient',
    h: 'Four kinds of problem with a number missing, and a procedure for each',
    canDo: 'After this unit you can take a problem with a number left out, say which of four kinds it is, and solve it with the steps for that kind. You will see every number worked out and be told why each step is done. The arithmetic can be done on a calculator: what this unit practices is which steps to take, and why.',
    everyday: [
      'Picture a morning of small jobs, each with a number missing. A fencing firm tells you what its fence came to and you want to know how long the field was. A recipe is written for ten pancakes and you are making twenty-four. A shop sold two kinds of item at two prices, and all you have is how many items it sold and what it took. A rug shop says a rug is 3 m longer than it is wide and covers 28 m², and you want its width.',
      'Unit One’s first question gave the same answer to all four: {a:M1.unknown}. But they are four different ways of being given something that the missing number must fit, and each has its own steps. The wrong steps still give a number, and nothing in the number says that it is wrong. So first look at what the problem gives, and only then solve it.'
    ],
    map: { branch: 'unknown' } },

  /* ---------- The first kind: a calculation worked backwards ---------- */
  { id: 'meet-rearr', kind: 'meet', outcome: 'rearr',
    link: 'The first kind of problem starts from something you already do: working backwards from a result to what went in.',
    case: 'm3-meet-rearr', mark: 'A1',
    strip: [
      'The problem gives a rule in words: add the field’s length and width, then double the total.',
      'It gives what the rule came to, 38 m of fence, and one of the two numbers the rule used, a width of 7 m.',
      'The other number the rule used is left out: the length of the field.',
      'Nothing is asked about a price for each thing, or about a second missing number.'
    ],
    explain: [
      'What you are shown is a calculation, described in words, and the result it came to. The calculation used a number that is left out, and the question is what that number was. It is like being told that someone thought of a number, added 7, doubled it, and got 38, and being asked what they thought of.',
      'The steps: list everything that was done to the missing number, then undo each thing, starting with the one that was done last, so that you travel from the result back to the number you started from.'
    ],
    feature: { step: 'A1', option: 'formula' },
    name: 'A problem like this is {o:rearr}. A {t:formula} is a calculation written out once, with a word or a letter where a number goes, and here it is described in words. Rearranging it puts the missing number on its own, which is the same as working the calculation backwards from its result.' },

  { id: 'check-rearr', kind: 'check', after: 'rearr',
    case: 'm3-tap-rearr',
    ask: { type: 'phrase', step: 'A1', say: 'Which words show the calculation that has to be undone? Tap them.',
           answer: 'the number of guests, divided by 2, plus 3 spares' } },
]);

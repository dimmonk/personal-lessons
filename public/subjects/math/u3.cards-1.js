// Basic Math, Unit Three, part one: the opening card, and the first type (a calculation worked backward from its result).
// Unit Three is the second procedure unit (kind 'P', lesson standard A12): each type of problem has its own steps, taught with a
// problem of that type, one worked example with real numbers, and a check. The key has one question here,
// and each of its four answers leads to one name, so there is no second question to teach.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain:
// the preview map, the heading of a meet card, the key’s question and answer on a meet card, and the stem of every commit prompt.
// A meet card: the problem first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action and one
// short sentence of why), then the name (lesson standard section 20).
// The worked examples (kind solved) are in u3.cards-solved-*.js. Their steps are computed, not typed: do not edit a number by hand.

FC.cards('math', 'u3', [

  { id: 'orient-unknown', kind: 'orient',
    h: 'Four types of problem with a number missing',
    canDo: 'When a problem leaves a number out, such as how long a field is or how many of each item were bought, work out which of four types it is before you start. Each type has its own steps, and the wrong steps still give a tidy number that looks right.',
    everyday: [
      'A fencing firm tells you what its fence came to, and you want the length of the field. A recipe is written for ten pancakes and you are making twenty-four. A shop sold two items at two prices, and all you know is how many it sold and what it took. A rug is 3 m longer than it is wide and covers 28 m², and you want its width.',
      'In Unit One, all four got the same answer: {a:M1.unknown}. Here you tell them apart. A wrong answer looks just as neat as a right one, so first look at what the problem gives you, and only then work it out.'
    ],
    map: { branch: 'unknown' } },

  /* ---------- The first type: a calculation worked backward ---------- */
  { id: 'meet-rearr', kind: 'meet', outcome: 'rearr',
    link: 'First: you know what a calculation came to, and you need the number that went into it.',
    case: 'm3-meet-rearr', mark: 'A1',
    explain: [
      'The firm gave you its way of working out the fence, and what it came to: 38 m. One number it used, the length, is missing. It is like a friend saying “I thought of a number, added 7, doubled it, and got 38”: you work back from 38 to find what they thought of.',
      'To find it, list everything done to the missing number, then undo each thing, starting with the one done last.'
    ],
    spot: [
      { do: 'Find the calculation: add the length and width, then double the total.', why: 'This is the rule the result came from.' },
      { do: 'Find the result: 38 m of fence.', why: 'You work back from this number.' },
      { do: 'Find the number you are not told: the length of the field.', why: 'The width, 7 m, is given, so only the length is missing.' },
      { do: 'Check that only one number is missing.', why: 'Two missing numbers would be a different type.' }
    ],
    feature: { step: 'A1', option: 'formula' },
    name: 'This is {o:rearr}. The {t:formula} is told in words here, and you work it backward from its result.' },

  { id: 'check-rearr', kind: 'check', after: 'rearr',
    case: 'm3-tap-rearr',
    ask: { type: 'phrase', step: 'A1', say: 'Which words show the calculation that has to be undone? Tap them.',
           answer: 'the number of guests, divided by 2, plus 3 spares' } },
]);

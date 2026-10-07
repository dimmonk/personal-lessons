// Basic Math, Unit One, part one: the opening card and the first kind (how whole numbers split).
// A quick lesson (lesson standard section 19): one meet card and one check for each kind, and nothing else for it.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// This is a gate unit (lesson standard A15): a card that would carry `outcome` in a branch unit carries `family`,
// and the family’s name is its answer to the key’s first question, printed by {a:M1.<family>}.
// The app prints, and this file therefore does not contain: the preview map, the heading of a meet card,
// "what you must be able to point to", the key’s question and answer on a meet card, the stem of every commit
// prompt, and the heading of an again or portrait card.

FC.cards('math', 'u1', [

  { id: 'orient-kind', kind: 'orient',
    h: 'Before you do the math, check what the problem is about',
    canDo: 'Before you start on a number problem from real life (a bill, a recipe, a loan), check what it is about. There are five kinds, each is worked out with different steps, and the wrong steps still give you a number that looks fine.',
    everyday: [
      'A friend is planning a birthday meal, and five questions come up in one afternoon, each with numbers in it. “Will 36 balloons go round 5 tables evenly, and how many are left over?” “The caterer charges a set fee plus a price for each guest, and the bill came to $310: how many guests?” “The cake shop raises its price by the same amount every year: what will the cake cost in five years?” “With 4 starters and 3 main courses, how many different menus can we offer?” “How long is the ribbon from the top of a 3 m pole to a peg 4 m from its foot?”',
      'All five ask for a number, but each is worked out in a different way. Start with the wrong steps and you still get a number, and nothing in it tells you it is wrong. So the first thing to do is ask one question: {q:M1}'
    ],
    map: { branch: 'gate' } },

  /* ---------- The first kind: how whole numbers split ---------- */
  { id: 'meet-whole', kind: 'meet', family: 'whole',
    link: 'First: a problem about a count of things that has to split into equal groups.',
    case: 'gt-chairs', mark: 'M1',
    explain: [
      'The hall has 72 chairs, and the caretaker wants equal rows: 2 rows of 36, or 3 rows of 24, or 4 rows of 18, and so on. The numbers are whole counts, because you cannot have half a chair, and the question is how a count breaks into equal groups.',
      'Three more questions about counts belong here too: how many are left over when things will not share evenly, when two things that repeat (one every 15 seconds, one every 20) happen together again, and where a count of days ends on the days of the week. It does not matter whether the things are chairs, tiles or days. What decides it is what the problem asks.'
    ],
    spot: [
      { do: 'Check the numbers are whole counts of things: 72 chairs.', why: 'You cannot have half a chair.' },
      { do: 'Find the equal groups: every row holds the same number of chairs.', why: 'Splitting evenly, with none left over, is what this is about.' },
      { do: 'Check the question is about how the count splits: “In how many different ways can he set them out?”', why: 'Nothing else is asked: no price, no length, nothing changing over time.' },
      { do: 'Look for leftovers or repeats too: “how many are left over”, “when do they next happen together”, “what day will it be”.', why: 'These are the same kind of problem, because they are all about how whole counts fit together.' }
    ],
    feature: { step: 'M1', option: 'whole' },
    name: 'This is {a:M1.whole}. Swap the chairs for tiles or coins and nothing changes.' },

  { id: 'check-whole', kind: 'check', after: 'whole',
    case: 'gt-rolls',
    ask: { type: 'phrase', step: 'M1', say: 'Which words show that this problem asks what is left over? Tap them.',
           answer: 'How many rolls are left over for the staff?' } }
]);

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
    h: 'Before any sum: what kind of problem are you looking at?',
    canDo: 'After this unit you can read a problem with numbers in it, taken from everyday life, and say which of five kinds it is, pointing to the words that tell you. You will not solve anything here: solving comes after sorting, and it only works when you start from the right kind.',
    everyday: [
      'You already do a rough version of this. Picture a family planning a birthday meal, and five questions coming up in one afternoon, every one of them with numbers in it. “We have 36 balloons for 5 tables: will they go round evenly, and how many are left over?” “The caterer charges a set fee plus a price for each guest, and the bill came to $310: how many guests were we charged for?” “The cake shop puts its prices up by the same amount every year: what will the cake cost in five years?” “There are 4 starters and 3 main courses: how many different menus can we offer?” “How long must the ribbon be to run from the top of a 3 m pole to a peg 4 m from its foot?”',
      'All five have numbers, and all five ask you to work out a number. But they ask for different things, and each one is worked out with different steps. Use the steps for the wrong kind and you still get a number, and nothing in that number tells you that it is wrong. So before any sum there is an earlier question: what does this problem ask me to work out? This unit teaches that question.'
    ],
    add: 'A problem here means a short account of a situation with numbers in it, like something a friend tells you or a line on a bill. Each of the five kinds is wide: the finer names inside it, each with its own steps, come in the later units.',
    map: { branch: 'gate' } },

  /* ---------- The first kind: how whole numbers split ---------- */
  { id: 'meet-whole', kind: 'meet', family: 'whole',
    link: 'The first kind: numbers that are whole counts of things, and a question about how those counts fit into equal groups.',
    case: 'gt-chairs', mark: 'M1',
    strip: [
      'One number: 72, a count of whole things. You cannot have half a chair.',
      'The caretaker has a rule: every row holds the same number of chairs, with none left over.',
      'The question is about that rule: in how many different ways can 72 be split into equal rows?',
      'Nothing changes as time passes, there is no shape to measure, and nothing is left to luck.'
    ],
    explain: [
      'What you are shown is a whole number of things and a question about how that number breaks into equal groups. Seventy-two chairs can be set out in rows of 2 chairs, or 3, or 4, or 6, or 8, and each of those layouts is one of the ways the caretaker is asking about.',
      'The kind holds more than splitting. A count that will not share evenly leaves something over. Two things that each repeat (one every 15 seconds, one every 20) meet again after a while. A count of days ends on one of the seven days of the week, because the days go round from Monday to Sunday and back. And a number can be asked about what it is made of. In all of them the numbers are whole counts, and the question is how they fit into each other.',
      'The kind does not depend on the story (chairs could be tiles, coins or days), on how big the number is, or on whether the sum looks easy or hard. It depends on what the problem asks.'
    ],
    feature: { step: 'M1', option: 'whole' },
    name: 'This kind of problem is {a:M1.whole}. “Whole numbers” are the counting numbers, such as 1, 2 and 72: no halves and no decimals. The word to hold on to is “split”. Wherever a problem asks how a count breaks into equal groups, what is left when it will not break evenly, or when repeating things next meet, it is this kind.' },

  { id: 'check-whole', kind: 'check', after: 'whole',
    case: 'gt-rolls',
    ask: { type: 'phrase', step: 'M1', say: 'Which words show that this problem asks what is left over when a number is shared out? Tap them.',
           answer: 'How many rolls are left over for the staff?' } }
]);

// Basic Math, Unit Two: problems shown inside cards, part one (the three words the unit leans on, then the first two kinds:
// testing whether one number splits, and breaking one number into primes).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// A case that only shows a thing for a term card has no route: it is not asked anything.
// route: { M1: [...], W1: [...] } gives the accepted answer to each question; cues are the exact words in the text that decide it;
// segments are the tappable pieces for "tap the words" prompts, and note is shown if a piece is tapped in error.
// Nothing in a case's text retypes key wording: a case is something a person would say, in the words real life uses.

FC.cases('math', 'u2', [

  /* ---------- Three words the unit leans on ---------- */
  { id: 'wd-squads', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a coach and two squads', name: 'The coach and her squads',
    text: 'A coach has 12 players on Monday and 13 players on Friday, and she wants to make teams of equal size, with more than one team and more than one player in each team. On Monday she can make 2 teams of 6, 3 teams of 4, 4 teams of 3 or 6 teams of 2. On Friday she cannot, however she tries: 13 players make only one team of 13, or 13 teams of 1.' },

  { id: 'wd-patio', use: 'teach', tier: 'clean', setting: 'building', topic: 'slabs laid as a square', name: 'The square patio',
    text: 'A paver lays 36 square slabs as one big square, with 6 slabs along each side. He says the side is 6 slabs long, because 6 × 6 = 36. Then he is asked about a second patio of 50 slabs, and finds that 7 × 7 = 49 is one slab short and 8 × 8 = 64 is too many.' },

  { id: 'wd-boxes', use: 'teach', tier: 'clean', setting: 'cooking', topic: 'rolls packed in boxes', name: 'The baker’s boxes',
    text: 'A baker has 12 rolls to pack. Boxes of 3 hold all 12 rolls with 4 boxes, and so do boxes of 4, with 3 boxes. Boxes of 5 will not do: 2 boxes of 5 hold 10 rolls and leave 2 over.' },

  /* ---------- The first kind: testing whether one number splits ---------- */
  { id: 'wd-apples', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'apples in bags', name: 'The market apples', outcome: 'prime',
    text: 'A market stall has 59 apples. The seller wants to pack them in equal bags, with more than one bag and more than one apple in each bag. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: { M1: ['pack them in equal bags, with more than one bag and more than one apple in each bag'],
            W1: ['pack them in equal bags, with more than one bag and more than one apple in each bag', 'Is that possible?'] } },

  { id: 'wd-drama', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a drama group in teams', name: 'The drama group', outcome: 'prime',
    text: 'A drama group has 47 members. The director wants to divide them into equal teams, with more than one team and more than one member in each team. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: { M1: ['divide them into equal teams, with more than one team and more than one member in each team'],
            W1: ['divide them into equal teams, with more than one team and more than one member in each team', 'Is that possible?'] },
    segments: [
      { text: 'A drama group has 47 members.', note: 'That gives the one number, and it matters. But you are asked for the words that say what has to be true of the groups, and those come next.' },
      { text: 'The director wants to divide them into equal teams, with more than one team and more than one member in each team.' },
      { text: 'Is that possible?', note: 'That is the question, a yes or a no. The words that say what has to be true of the teams are in the sentence before it.' }
    ] },

  { id: 'wd-tour', use: 'check', tier: 'clean', setting: 'travel', topic: 'visitors in groups', outcome: 'prime',
    text: 'A tour guide has 73 visitors and wants to split them into equal groups, with more than one group and more than one visitor in each group. Is that possible?',
    route: { M1: ['whole'], W1: ['split'] },
    cues: { M1: ['split them into equal groups, with more than one group and more than one visitor in each group'],
            W1: ['split them into equal groups, with more than one group and more than one visitor in each group', 'Is that possible?'] },
    segments: [
      { text: 'A tour guide has 73 visitors', note: 'That gives the one number. You are asked for the words that say what has to be true of the groups.' },
      { text: 'wants to split them into equal groups, with more than one group and more than one visitor in each group.' },
      { text: 'Is that possible?', note: 'That is the question, a yes or a no. The words that say what has to be true of the groups come before it.' }
    ],
    reason: { W1: 'The words {cue:W1} give one number, 73, and ask only whether any packing of that kind exists. That is a yes or a no about one number, and nothing else is asked, so the key’s answer is {a:W1.split}.' } },

  /* ---------- The second kind: breaking one number into primes ---------- */
  { id: 'wd-puzzle', use: 'teach', tier: 'clean', setting: 'home', topic: 'a puzzle on a cereal box', name: 'The cereal-box puzzle', outcome: 'factor',
    text: 'A puzzle on a cereal box says that 60 is made by multiplying prime numbers together. Which prime numbers multiply together to give 60?',
    route: { M1: ['whole'], W1: ['parts'] },
    cues: { M1: ['Which prime numbers multiply together to give 60?'], W1: ['Which prime numbers multiply together to give 60?'] } },

  { id: 'wd-tables', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'tables at a wedding', name: 'The wedding tables', outcome: 'factor',
    text: 'A wedding planner has 28 tables and wants to know every way to set them out in equal rows, with more than one row and more than one table in each row. How many different row lengths are there?',
    route: { M1: ['whole'], W1: ['parts'] },
    cues: { M1: ['every way to set them out in equal rows'], W1: ['every way to set them out in equal rows'] },
    segments: [
      { text: 'A wedding planner has 28 tables', note: 'That gives the one number. You are asked for the words that say what the planner wants to know about it.' },
      { text: 'wants to know every way to set them out in equal rows, with more than one row and more than one table in each row' },
      { text: 'How many different row lengths are there?', note: 'That is the question, and it counts the answers. The words that say the planner wants every way are in the sentence before it.' }
    ] },

  { id: 'wd-museum', use: 'check', tier: 'clean', setting: 'work', topic: 'a museum label', outcome: 'factor',
    text: 'A museum label reads 45. The curator asks visitors which prime numbers multiply together to give 45.',
    route: { M1: ['whole'], W1: ['parts'] },
    cues: { M1: ['which prime numbers multiply together to give 45'], W1: ['which prime numbers multiply together to give 45'] },
    segments: [
      { text: 'A museum label reads 45', note: 'That gives the one number. You are asked for the words that say what is to be found about it.' },
      { text: 'The curator asks visitors which prime numbers multiply together to give 45' }
    ],
    reason: { W1: 'The words {cue:W1} give one number, 45, and ask for the prime numbers it is made of. That is more than a yes or a no about whether it splits, and it concerns one number, so the key’s answer is {a:W1.parts}.' } }
]);

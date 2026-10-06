// Basic Math, Unit One: problems shown inside cards, part one (the first three kinds).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// A gate unit's cases carry route: { M1: [option] } and no outcome: the answer to the first question is the name.
// setting is one of subject.settings (an area of life); topic is the story. A problem is a "case" in the standard's words.
// cues.M1 is the exact phrase in the text that decides the first question (or a list of phrases); the app marks it,
// always in the same style. segments are the tappable pieces for "tap the words" prompts; note is shown if that piece is
// tapped in error. reason.M1 is the reason for this problem's answer. not names the nearest wrong kind (a ledger
// neighbor) and says why it fails for this problem. also lists an answer the problem shows as well as its own, which
// loses to its own by a tie-break in the key. Nothing in this unit is solved: no problem needs a number worked out.

FC.cases('math', 'u1', [

  /* ---------- The first kind: how whole numbers split ---------- */
  { id: 'gt-chairs', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'chairs set out in equal rows', name: 'The chairs for the concert',
    text: 'The village hall has 72 chairs for a concert. The caretaker wants every row to hold the same number of chairs, with more than one row and more than one chair in each row. In how many different ways can he set them out?',
    route: { M1: ['whole'] },
    cues: { M1: ['every row to hold the same number of chairs', 'In how many different ways can he set them out?'] } },

  { id: 'gt-rolls', use: 'check', tier: 'clean', setting: 'shopping', topic: 'rolls left over after packing',
    text: 'A baker packs 200 rolls into boxes of 12 and sends the full boxes to a shop. How many rolls are left over for the staff?',
    route: { M1: ['whole'] },
    cues: { M1: ['boxes of 12', 'How many rolls are left over for the staff?'] },
    segments: [
      { text: 'A baker packs 200 rolls into boxes of 12', note: 'That gives the numbers, a count of 200 and boxes of 12. You are asked for the words that show what is to be worked out, and that is in the last sentence.' },
      { text: 'and sends the full boxes to a shop', note: 'That is part of the story. It tells you the boxes are full, and it does not say what to work out.' },
      { text: 'How many rolls are left over for the staff?' }
    ],
    reason: { M1: 'These words ask what is left over when 200 rolls are packed into boxes of 12: {cue:M1}. That is a question about how a whole number splits, and nothing else is asked: no price, nothing changing as time passes, no shape and no chance.' } },

  /* ---------- A word the second kind leans on ---------- */
  { id: 'gt-gymcard', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a gym card with a calculation on it', name: 'The gym card',
    text: 'At the gym desk, the receptionist keeps a card that says: bill = 15 + 4 × classes.' },

  /* ---------- The second kind: a number you are not told ---------- */
  { id: 'gt-van', use: 'teach', tier: 'clean', setting: 'travel', topic: 'a van hired by the kilometer', name: 'The van hire',
    text: 'Maya hires a van. The hire shop charges a fixed $30 plus $0.40 for every kilometer driven. Her bill is $54. How many kilometers did she drive?',
    route: { M1: ['unknown'] },
    cues: { M1: ['a fixed $30 plus $0.40 for every kilometer driven', 'Her bill is $54', 'How many kilometers did she drive?'] } },

  { id: 'gt-pens', use: 'check', tier: 'clean', setting: 'shopping', topic: 'pens and notebooks from a total',
    text: 'Sam bought pens at $2 each and notebooks at $5 each. He bought 9 items in all and paid $30 in all. How many pens and how many notebooks did he buy?',
    route: { M1: ['unknown'] },
    cues: { M1: ['He bought 9 items in all and paid $30 in all', 'How many pens and how many notebooks did he buy?'] },
    reason: { M1: 'The problem does not give the pens or the notebooks. It gives a count and a total for the two together, and both have to come out right: {cue:M1}. Nothing is shared out evenly and nothing is followed as time passes, so it is not the first kind or the third.' } },

  /* ---------- The third kind: an amount followed over time ---------- */
  { id: 'gt-shrub', use: 'teach', tier: 'clean', setting: 'home', topic: 'a shrub that grows each year', name: 'The shrub',
    text: 'Oskar plants a shrub that is 40 cm tall. It grows 15 cm every year. How tall will it be after 8 years?',
    route: { M1: ['growth'] },
    cues: { M1: ['It grows 15 cm every year', 'How tall will it be after 8 years?'] } },

  { id: 'gt-poolpass', use: 'check', tier: 'clean', setting: 'leisure', topic: 'a pool pass that went up once',
    text: 'Until March a swimming pass at the town pool cost $30 a month. In March the price went up to $36, and it has stayed at $36 ever since. What will the pass cost a month in December?',
    route: { M1: ['growth'] },
    cues: { M1: ['In March the price went up to $36, and it has stayed at $36 ever since', 'What will the pass cost a month in December?'] },
    reason: { M1: 'One amount, the price of the pass, is followed through time: {cue:M1}. It did not rise by the same number each month, and it was not multiplied each month. It changed one time and has stayed put since. The question asks what it will be at a later time, and no number is hidden for a calculation to fit.' } }
]);

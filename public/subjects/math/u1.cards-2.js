// Basic Math, Unit One, part two: the word "formula", then the second kind (a number you are not told).
// The app prints the word and its meaning on a term card, and "what you must be able to point to" on a meet card.

FC.cards('math', 'u1', [

  /* ---------- A word the second kind leans on ---------- */
  { id: 'term-formula', kind: 'term', term: 'formula',
    h: 'A calculation with a gap in it',
    link: 'The next kind of problem leans on one word, so here it is first, in a situation you can picture.',
    case: 'gt-gymcard',
    plain: [
      'The gym lets members book classes, and the card is how every bill is worked out. Read it aloud: the bill is 15, plus 4 for each class. For a member who books 3 classes, put 3 in the place of the word “classes”: 15 + 4 × 3 = 27. For a member who books 10, put 10 there instead: 15 + 4 × 10 = 55.',
      'The card is not about any one member. It is a calculation written out once, with a word where a number goes, so that it can be used for anyone. And the receptionist can use it in either direction. Put the number of classes in, and the bill comes out. Or start from a bill, say 43, and ask how many classes it was for.'
    ],
    after: [
      'A word or a letter standing where a number goes is how a calculation is left open, so that different numbers can be put in. The next problem gives you a calculation like this one, written as a sentence instead of a line of symbols.'
    ] },

  /* ---------- The second kind: a number you are not told ---------- */
  { id: 'meet-unknown', kind: 'meet', family: 'unknown',
    link: 'The first kind used numbers that were all in front of you, and asked how they fit together. The second kind does something different with numbers: it hides one of them.',
    case: 'gt-van', mark: 'M1',
    strip: [
      'There is one number the problem does not give: how many kilometres Maya drove.',
      'There is a calculation, written in words, that connects the hidden number to numbers you are given: a fixed €30, plus €0.40 for every kilometre.',
      'There is a result that the hidden number must fit: the bill came to €54. Put the right distance into the calculation and the bill comes out at €54.',
      'The question asks for the hidden number: how far Maya drove.',
      'Nothing is split into equal groups, nothing is followed as time passes, and there is no triangle and no copy of a shape.'
    ],
    explain: [
      'What you are shown is a puzzle with a gap in it. Everyone who reads the problem knows what the hire shop charges and what Maya paid. The one thing missing is the distance, and the facts are arranged so that only one distance fits.',
      'In this problem the facts are a {t:formula}: a fixed €30 plus €0.40 times the kilometres, written as a sentence. The same kind of problem can give its facts in two other shapes. It can give a rate, meaning so much for each thing, such as so many grams of rice for each person, and ask what a different number of things comes to. Or it can give two totals about two numbers it does not tell you, such as how many things were bought in all and what they cost in all. In all three, the problem hides a number or two and gives facts that those numbers have to fit.',
      'Every problem asks you for a number, so “there is a number to find” cannot be what marks this kind. What marks it is what the problem gives you to find the number with: a calculation and its result, a rate, or totals. The facts do not change as you read, and the hidden number is whatever makes them all true together.'
    ],
    feature: { step: 'M1', option: 'unknown' },
    name: 'The key’s answer, and so the name of this kind of problem, is {a:M1.unknown}. “Missing” means not given by the problem: it is the number you are asked for. “Totals” means two facts about numbers you are not told, such as how many there are and what they come to. This is the kind where you are handed the facts and must find the number that fits them.' },

  { id: 'again-unknown', kind: 'again', family: 'unknown',
    link: 'The van hire gave you what to point to: {needs:unknown}. Here is the same thing in a different story, with the facts in a different shape.',
    first: 'gt-van', second: 'gt-ward', step: 'M1',
    instruction: 'Find what the two problems share. Ignore the story (a van, a kitchen) and ignore the kind of facts (a calculation, a rate). Look at one thing only: which words name the number that the problem leaves out?',
    prompt: { kind: 'phrase', answer: 'How much rice will the kitchen need?' },
    shared: [
      'Both problems hide a number and give facts that the number has to fit. Maya’s hidden number is a distance, and the facts are a calculation and its result. The kitchen’s hidden number is an amount of rice, and the facts are a rate (3 kg of rice for 20 patients) and a new number of patients. The facts come in different shapes and what is hidden is different, but in both you are given enough to find the one number that fits.',
      'In neither is the question about splitting into equal groups, or about time passing, or about chance or shape. The two stories share nothing else, so the kind does not depend on the topic or on which shape the facts take. That is what {a:M1.unknown} names.'
    ] },

  { id: 'portrait-unknown', kind: 'portrait', family: 'unknown',
    link: 'You know what to point to for {a:M1.unknown}. This card fills in the rest of the picture, and says where its edge is.',
    typical: [
      'There is a number you are not told, and the question says what it is: how far, how many, how much, what price, how long a piece.',
      'Everything you need to find it is in the problem, in one of three shapes: a calculation written out with its result, a rate (so much for each thing) with a new amount of the thing, or two totals about two hidden numbers.',
      'The numbers you are given stay the same as you read. Nothing in the story is growing, shrinking or repeating as time passes.',
      'There can be one hidden number or two, and it can come at the start of the story or at the end.',
      'It is the widest of the five kinds: a great many everyday questions are of this shape.'
    ],
    not: [
      'Having an answer to find does not make a problem this kind, because every problem has one. A problem that says seven pens cost €2 each and asks what they cost together is a plain sum. There is no calculation to run backwards, no rate to scale and no totals to untangle. The key does not sort it, because there is nothing to choose: you do the sum.',
      'And a rate does not make a problem this kind every time. A rate for each thing, such as each kilometre or each person, is. A price that goes up for each hour, day, month or year is an amount changing as time passes, and this unit has a card for exactly that case.'
    ],
    wild: ['"How many do I need to get to €60?"', '"What would the price have to be?"', '"Same again, but for seven people."', '"How far did she drive?"', '"Two numbers add up to 9."'],
    self: 'In your own life it is a bill that came to more than you expected and you want to know how many units you used, a recipe for four stretched to seven, or a till total and an item count from which you want to know how many of two sorts were sold.',
    ask: '"What number am I not told, and what facts must it fit?" If you can name both, you are probably looking at this kind.' },

  { id: 'check-unknown', kind: 'check', after: 'unknown',
    case: 'gt-pens',
    ask: { type: 'option', step: 'M1', among: ['whole', 'unknown'] } }
]);

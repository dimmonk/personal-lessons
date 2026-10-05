// Basic Math, Unit Three, part one: the opening card, and the first kind (a calculation worked backwards from its result).
// Unit Three is the second procedure unit (kind 'P', lesson standard A12): each kind of problem has a procedure, taught with a
// problem of the kind, two worked examples with real numbers, and problems the learner finishes. The key has one question here,
// and each of its four answers leads to one name, so there is no second question to teach.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain:
// the preview map, the heading of a meet card, "what you must be able to point to", the key’s question and answer on a meet card,
// the stem of every commit prompt, and the heading of an again or portrait card.
// The worked examples (kind solved) are in u3.cards-solved-*.js. Their steps are computed, not typed: do not edit a number by hand.

FC.cards('math', 'u3', [

  { id: 'orient-unknown', kind: 'orient',
    h: 'Four kinds of problem with a number missing, and a procedure for each',
    canDo: 'After this unit you can take a problem with a number left out, such as the length of a field when you know how much fence it took, how much flour a bigger batch needs, how many pens and how many notebooks were bought when you know only the count and the bill, or how wide a rug is when its area is given. You can say which of four kinds it is, and then solve it with the procedure for that kind. You will see every number worked out, you will be told why each step is done, and you will work problems yourself.',
    everyday: [
      'Picture a morning of small jobs, each with a number missing. A fencing firm tells you what its fence came to and you want to know how long the field was. A recipe is written for ten pancakes and you are making twenty-four. A shop sold two kinds of item at two prices, and all you have is how many items it sold and what it took, and you want to know how many of each. A rug shop says a rug is 3 m longer than it is wide and covers 28 m², and you want to know its width.',
      'Unit One’s first question gave the same answer to all four: {a:M1.unknown}. But they are four different ways of being given something that the missing number must fit, and each has its own procedure. A procedure for the wrong one still gives a number, and nothing in the number says that it is wrong. So the order is the same as in the last unit: first look at what the problem hands you for the missing number to match, and only then solve it.'
    ],
    add: [
      'The words from the last unit hold here. A procedure is the fixed set of steps that solves one kind of problem, and it gives the right answer whatever the numbers are. The working is the procedure carried out on one problem, with every number written down. A step is one stage of the working, named by what it is for. The arithmetic can be done on a calculator: what this unit practises is which steps to take, and why.',
      'The four kinds are taught in the order of what they give: a calculation and the result it came to, a rate, two facts, and a calculation that has the missing number in it twice. Each is taught as in the last unit: first a problem of the kind and the idea behind its procedure, then two worked problems in different parts of life with every step computed, and then problems that you finish yourself. Two of the kinds can pass for another, and a card for each shows how. When all four have been taught, the key’s question gets its own card, and then the drill mixes all four, with problems from the earlier units among them.'
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
      'There is a way to find out, and it is a procedure: a fixed set of steps that gives the right answer every time. List everything that was done to the missing number. Then undo each thing, starting with the one that was done last, so that you travel from the result back to the number you started from. You could also guess a length and try it, which might work for 38, but guessing gets slow for bigger numbers, and the procedure does not.',
      'Notice what decides the kind. It is not that the problem is about a field, or that the numbers are small. It is that the problem gives a calculation and its result and asks for a number that went into it. The same field could turn up in a problem that gives two facts about its sides, or one in which the length is 3 m more than the width and the area is given. Those are different kinds, and you will meet them side by side with this one in this unit.'
    ],
    feature: { step: 'A1', option: 'formula' },
    name: 'A problem like this is {o:rearr}. A {t:formula} is a calculation written out once, with a word or a letter where a number goes, and here it is described in words. The name says what is done to it: it is rearranged so that the missing number is on its own, which is the same as working the calculation backwards from its result.' },

  { id: 'again-rearr', kind: 'again', outcome: 'rearr',
    link: 'The fence gave you what to point to: {needs:rearr}. Here is a second problem with a different story, wool for a scarf instead of a fence.',
    first: 'm3-meet-rearr', second: 'm3-again-rearr', step: 'A1',
    instruction: 'Find what the two problems share. Ignore the story (a fence, a scarf) and ignore the numbers. Look at one thing only: which words give the calculation that was done?',
    prompt: { kind: 'phrase', answer: 'multiply its length in metres by 3, then add 1 ball for the fringe' },
    shared: [
      'Both problems describe a calculation in words, “add the length and width, then double” and “multiply by 3, then add 1”, and give the result it came to, 38 m of fence and 7 balls of wool. In both, one number that the calculation used is left out, and it is used once, so each thing done to it can be undone.',
      'That is all you point to, and it is why one name covers a fencing firm and a knitter. The story differs. What is given is the same.'
    ] },

  { id: 'lens-procedure', kind: 'lens',
    h: 'Story and structure, now that there is something to solve',
    link: 'The last card asked you to ignore the story and look at what the problem gives. That holds for every card from here on, and this card says it once.',
    body: [
      'Every problem in this unit has two layers, as in the last two units. The top layer is the story: a fence, a scarf, a market stall, a rug. Under it is the thing that the missing number has to match, which the problem hands you, and that is what decides the kind and so the procedure.',
      'The numbers change the working but never the steps. A problem of one kind with bigger numbers, or with three things done to the missing number instead of two, is worked with the same steps, with different working in them.',
      'Two things change on purpose from card to card: the words of the question (“how long”, “how much”, “how many”) and the setting. None of them tells you the kind. Only what the problem gives for the missing number to fit does.'
    ],
    fixed: ['the question the key asks of every problem in this unit: {q:A1}'],
    varies: ['the story', 'the people', 'the size of the numbers', 'how many things are done to the missing number', 'the words of the question (“how long”, “how much”, “how many”)'] },

  { id: 'portrait-rearr', kind: 'portrait', outcome: 'rearr',
    link: 'You know what to point to for {o:rearr}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'A rule, a recipe, a pricing scheme or a {t:formula}, described in words or written with letters: “add 7, then double”, “multiply by 40, then add 20”.',
      'The result the rule came to: a total, a cost, a length, a time in the oven.',
      'One number that the rule used, which the problem does not give. It is used once, so each thing done to it can be undone.',
      'Often nobody says “rule” or “{t:formula}”. The problem just says how something is worked out, in a sentence: “the cook multiplies it by 40 and adds 20”.'
    ],
    not: [
      'So much for so many, with a new amount to scale it to, is a different kind: there is no calculation whose result has to be undone. You will meet that pair side by side in this unit. A fixed charge added on top of a price for each thing is a calculation, though, and does belong here.',
      'Two missing numbers are not this kind. When a problem leaves out two numbers and gives two facts about them, no single calculation can simply be undone. And a missing number that is multiplied by itself, as well as used on its own, cannot be undone one thing at a time.'
    ],
    wild: ['"I paid €54 after the discount. What was the price before?"', '"The recipe says multiply by 3 and add 1. I got 7. What did I start with?"', '"The average has to be 13, so what must my last score be?"', '"They charged me €38 in all, including the standing charge. How many units was that?"'],
    self: 'In your own life you meet this when you know a final price and want the price before a discount or tax, when you know the average you need and want the score still to come, and whenever someone tells you what a calculation came to and you want to know what went into it.',
    ask: '"Is something worked out by a rule, is the result given, and is one of the numbers the rule used left out?" If you can say yes, you are probably looking at this kind.' },

  { id: 'check-rearr', kind: 'check', after: 'rearr',
    case: 'm3-tap-rearr',
    ask: { type: 'phrase', step: 'A1', say: 'Which words show the calculation that has to be undone? Tap them.',
           answer: 'the number of guests, divided by 2, plus 3 spares' } },

  { id: 'check-rearr-last', kind: 'check', after: 'rearr', case: 'm3-ck-rearr-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-rearr-whole', kind: 'check', after: 'rearr', case: 'm3-ck-rearr-whole', ask: { type: 'solve', solve: 'whole' } }
]);

// Basic Math, Unit One, part one: the opening card and the first kind (how whole numbers split).
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
    canDo: 'After this unit you can read a problem with numbers in it, taken from everyday life, and say which of five kinds it is. You will be able to point to the words in the problem that tell you, and to say why it is not one of the other four. You will not solve anything in this unit. Solving comes after sorting, and it only works when you start from the right kind.',
    everyday: [
      'You already do a rough version of this. Picture a family planning a birthday meal, and five questions coming up in one afternoon, every one of them with numbers in it. “We have 36 balloons for 5 tables: will they go round evenly, and how many are left over?” “The caterer charges a set fee plus a price for each guest, and the bill came to €310: how many guests were we charged for?” “The cake shop puts its prices up by the same amount every year: what will the cake cost in five years?” “There are 4 starters and 3 main courses: how many different menus can we offer?” “How long must the ribbon be to run from the top of a 3 m pole to a peg 4 m from its foot?”',
      'All five have numbers, and all five ask you to work out a number. But they ask for different things, and each one is worked out with different steps. If you use the steps for the wrong kind of problem, you still get a number, and nothing in that number tells you that it is wrong. So before any sum there is an earlier question: what does this problem ask me to work out? This unit teaches that question.'
    ],
    add: [
      'Two words are used all the way through, so here they are once. A problem is a short account of a situation with numbers in it: the sort of thing a friend tells you, or you read on a bill. (The app’s own labels call a problem a case, as in Case A and Case B.) A procedure is the set of steps that solves one kind of problem. Alongside them, every problem is put a short list of questions, always in the same order, and each answer narrows down what the problem can be.',
      'This unit teaches the first question and nothing after it. That question sorts a problem into one of five kinds, and in this unit the kind is the name. Each kind is wide. Inside it there are finer names, each with its own procedure, and those are taught later, one kind at a time. Nothing in this unit asks you to solve a problem, and no answer here is ever marked on a number that you work out. You only say what the problem asks. Everything else in the course starts from the answer to this first question.'
    ],
    map: { branch: 'gate' } },

  /* ---------- The first kind: how whole numbers split ---------- */
  { id: 'meet-whole', kind: 'meet', family: 'whole',
    link: 'Start with the first of the five kinds. It is the one where numbers are whole counts of things, and the question is how those counts fit into equal groups.',
    case: 'gt-chairs', mark: 'M1',
    strip: [
      'There is one number to work with: 72, a count of whole things. You cannot have half a chair.',
      'The caretaker has a rule: every row holds the same number of chairs, with none left over and no row short.',
      'The question is about that rule: in how many different ways can 72 be split into equal rows?',
      'Nothing changes as time passes. There is no shape to measure, and nothing is chosen by luck.',
      'The answer will be a number, as in every problem, but what is asked is not a price, a total or a length. It is how 72 splits.'
    ],
    explain: [
      'What you are shown is a whole number of things and a question about how that number breaks into equal groups. Seventy-two chairs can be set out in rows of 2 chairs, or 3, or 4, or 6, or 8, and each of those layouts is one of the ways the caretaker is asking about. Nothing else is going on in the problem.',
      'This first kind holds more than splitting. It also holds a problem that asks what is left over when a number is shared out and will not share evenly. It holds a problem about two events that each recur, one every few seconds and one every few days, and asks when they will next coincide. It holds a problem that asks what day of the week it will be in so many days: the days of a week go round and round, from Monday to Sunday and back to Monday, so a count of days ends on one of the seven. It holds a problem that asks what a number is built from, and one that asks if a number has an exact value. These look very different, and they have one thing in common: the numbers are whole counts, and the question is about how those numbers fit into each other.',
      'Notice what the kind does not depend on. It does not depend on the story: chairs could be tiles, coins or days. It does not depend on how big the number is. And it does not depend on whether the sum looks easy or hard. You decide the kind from what the problem asks, and not from the numbers.'
    ],
    feature: { step: 'M1', option: 'whole' },
    name: 'The answer, and so the name of this kind of problem, is {a:M1.whole}. “Whole numbers” are the counting numbers, such as 1, 2 and 72: no halves and no decimals. The word to hold on to is “split”. Wherever a problem asks how a count breaks into equal groups, what is left when it will not break evenly, or when repeating things next meet, it is this kind.' },

  { id: 'again-whole', kind: 'again', family: 'whole',
    link: 'The chairs gave you what to point to: {needs:whole}. Here is a second problem with a completely different story, and this time the question is about two things that repeat.',
    first: 'gt-chairs', second: 'gt-lights', step: 'M1',
    instruction: 'Find what the two problems share. Ignore the story (chairs, lights) and ignore the numbers. Look at one thing only: which words say what the problem asks you to work out about its whole numbers?',
    prompt: { kind: 'phrase', answer: 'until they next flash together' },
    shared: [
      'Both problems are made of whole numbers and a question about how those numbers fit together. The caretaker splits 72 chairs into equal rows. The two lights each repeat on their own, one every 15 seconds and one every 20 seconds, and the question is when the two repeats next land on the same second. In both, nothing grows, nothing is measured on a shape, and nothing is a chance.',
      'The two stories share nothing else. One is about splitting and the other about repeating, and the first question does not separate them: both are the first kind. That is what {a:M1.whole} names, and it is why one name covers questions that look so different.'
    ] },

  { id: 'lens-kind', kind: 'lens',
    h: 'The story and the numbers do not decide the kind',
    link: 'The last card asked you to ignore the story and the numbers. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every problem in this unit has two layers. The top layer is the story: chairs, lights, a bill, a hike. The layer underneath is what the problem asks you to work out. So far you have met one thing that can be asked: how whole numbers split or repeat. There are four more to come.',
      'The five kinds belong to the layer underneath. A problem about money can be any of the five, and so can a problem about building, travel or cooking. The topic tells you nothing about the kind. Neither do the numbers: the same two numbers can turn up in problems of different kinds, and a small number is no easier to sort than a big one.',
      'From here on the problems change their stories on purpose. Sometimes two problems will have the same people, the same place and even the same numbers, and differ only in what they ask. When that happens, the shared story is there to show you that it decides nothing.',
      'Two more things change on purpose: the words of the question, and how many numbers there are. “How many”, “how long” and “how much” turn up in all five kinds. The words do not decide it. What decides it is what you are being asked to work out.'
    ],
    fixed: ['what the problem asks you to work out, which is what the first question asks about: {q:M1}'],
    varies: ['the topic', 'the people', 'the size of the numbers', 'the words of the question (“how many”, “how long”, “how much”)', 'how many numbers the problem gives'] },

  { id: 'portrait-whole', kind: 'portrait', family: 'whole',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {a:M1.whole} in real life, where nobody marks the words for you.',
    typical: [
      'The numbers are whole counts: chairs, rolls, days, seconds, or lengths counted in whole centimetres. There are no prices to the cent and no percentages.',
      'The question is about how those numbers fit into each other: whether one divides another evenly, what is left over, when two repeats meet, what a number is made of.',
      'The answer is itself a whole number, or a yes or no. It is not an amount of money and it is not a time that has been measured.',
      'There is little else in the problem: one or two numbers, and no calculation to run backwards. Nothing grows or shrinks as time passes.'
    ],
    not: [
      'Whole numbers in the problem are not enough. Almost every problem in this course has whole numbers in it. What matters is that the problem asks how the numbers split, repeat or are made up.',
      'A problem that asks in how many ways three of nine volunteers can be picked is also made of whole counts, and it is a different kind: it asks about the results of a choice, and the numbers only say how many things there are to choose from. You will meet a pair like that, side by side, in this unit.'
    ],
    wild: ['"Can we share them out equally?"', '"How many are left over?"', '"One every 15 minutes, the other every 20."', '"Is it exact, or only close?"', '"In how many ways can we lay them out?"'],
    self: 'In your own life you meet this when you divide a group into teams, when you pack things into boxes, when two schedules you follow meet again (the days the rubbish and the recycling are collected), and in every “will it come out even?” about food, money or time.',
    ask: '"Is the question about how these whole numbers split into equal groups, what is left over, or when repeats meet?" If you can say which of those it is in a few words, you are probably looking at this kind.' },

  { id: 'check-whole', kind: 'check', after: 'whole',
    case: 'gt-rolls',
    ask: { type: 'phrase', step: 'M1', say: 'Which words show that this problem asks what is left over when a number is shared out? Tap them.',
           answer: 'How many rolls are left over for the staff?' } }
]);

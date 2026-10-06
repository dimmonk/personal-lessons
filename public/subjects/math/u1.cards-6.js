// Basic Math, Unit One, part six: the key's first question as a question, the wrong idea that the numbers decide, the two
// worked problems, and the two cards that close the unit after the drill.
// Basic Math is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints, on the question card: the question, what it is for, each answer, why it decides, and for every pair
// already compared the question that tells it apart and the key's tie-break.

FC.cards('math', 'u1', [

  /* ---------- The first question, as a question ---------- */
  { id: 'q-kind', kind: 'question', step: 'M1',
    h: 'The question you have been answering all along',
    link: 'Since the chairs you have seen the question at the foot of each new kind, with one answer under it. This card puts the question and its five answers in one place and says why it is asked before anything else.',
    decides: [
      'A problem can only be solved with the steps made for its kind. If you take a hike for a hidden number, you go looking for a calculation that is not there. If you take an amount followed through time for a hidden number, you can find a number that fits a calculation and is wrong for the story. Getting the kind wrong still gives you a number, and nothing in that number says that it is wrong.',
      'That is why this question comes first, before any finer name, and why every problem in this course starts with it.',
      'In this unit it is the only question, so its answer is the name. In the rest of the course, each of the five answers is followed by one or two more questions, and they lead to a finer name with its own procedure. The answers you give on the way to a name are this first answer, and then the answers to the questions after it. Two things are marked separately: the name you give a problem, and your answers on the way to it. A right name reached by a wrong first answer counts as a miss, which is why the first question gets a whole unit of practice.'
    ],
    how: [
      'Read the whole problem, the last sentence included. The last sentence is usually where the question is, and the sentences before it are usually the story. Find the question and mark the words that say what is to be worked out.',
      'Then ask what that is. Is it about {plain:whole}? Is it {plain:unknown}? Is it {plain:growth}? Is it {plain:chance}? Is it about {plain:shape}? One of the five will fit the words you marked.',
      'Put your finger on the words that show it. If you cannot point to them, you do not have an answer yet.',
      'Most problems fit one kind and no other. Some show two at once, and there is a decision for each pair. Take the loop first: if the question ends on a day of the week or an hour on a clock, the answer is {a:M1.whole}. Then ask about time: if one amount is followed as hours, days, months or years pass, the answer is {a:M1.growth}, even when a hidden number and a calculation are there too. Then ask about shape: if there is a {t:righttriangle}, or a pair of copies of one shape, the answer is {a:M1.shape}, even when a rate is there too. If none of those is in the problem, a hidden number with a calculation, a rate or totals is {a:M1.unknown}, and a question about the results of a choice or about how likely something is {a:M1.chance}.'
    ],
    whenBoth: 'Some problems show two of the five at once. You have met three. A price for each hour has the shape of a hidden number and is an amount over time. A model with a scale has the shape of a rate and is a shape. A box of tablets taken one a day is an amount over time and asks for a day of the week. Every problem gets one answer, and the choice is made the same way each time. Counting ways and chance have no decision of their own: they are not given up to another kind, and no other kind is given up to them. Each pair below has been set side by side earlier in this unit, and each has a question that tells it apart.' },

  { id: 'check-kind', kind: 'check', after: 'M1',
    case: 'gt-loan',
    ask: { type: 'step', step: 'M1' } },

  /* ---------- A wrong idea: the numbers tell you what to do ---------- */
  { id: 'refute-numbers', kind: 'refute', about: 'M1',
    h: 'A wrong idea: the numbers tell you what to do',
    link: 'The question you have just met asks what the problem asks. A great many people use the numbers instead. It is how school chapters were laid out, with the heading telling you what was coming.',
    idea: '"Look at the numbers. Two numbers, divide them. A percentage, take a percentage. A triangle, use the triangle rule."',
    verdict: 'This is wrong.',
    right: [
      'The same numbers turn up in problems of every kind. Take 4 and 6. Two chores that recur, one every 4 days and one every 6 days, with the question when both fall on the same day, is {a:M1.whole}. A recipe that uses 4 kg of rice for 6 people, with the question how much for 15 people, is {a:M1.unknown}. A shrub 4 cm tall that grows 6 cm each year, with the question how tall after 10 years, is {a:M1.growth}. Four starters and 6 main courses, with the question how many different meals, is {a:M1.chance}. A {t:righttriangle} with sides of 4 m and 6 m, with the question how long the third side is, is {a:M1.shape}.',
      'Five problems, the same two numbers, five different kinds, and five different sets of steps. The numbers could not have told you which. And the other way round: problems of one kind have all sorts of numbers in them, so nothing about a number tells you the kind.',
      'The only thing that does is what the problem asks you to work out, and the first question asks it in these words: {q:M1}'
    ],
    testedBy: ['gt-claim-numbers'] },

  /* ---------- Two whole problems, watched ---------- */
  { id: 'worked-trio', kind: 'worked',
    h: 'A whole problem, from the question to the answer',
    link: 'You have the five kinds and the first question about them. Before the drill, watch two problems being run from the top. You are not asked anything until the end of each.',
    case: 'gt-trio',
    steps: [
      { step: 'M1',
        reason: [
          'The unit taught a way to answer this question. Read the whole problem and find the question: {cue:M1}. Then ask what that is.',
          'It is not about how the number 9 splits, or what is left over, or when repeats meet. It is not a hidden number that has to fit a calculation, a rate or totals, and nothing is followed as time passes. There is no triangle and no copy of a shape. What the problem asks is how many different trios there are, and a trio is the result of a choice: which 3 of the 9 members are picked. So the problem is about the results of a choice.'
        ] }
    ],
    hold: {
      neighbor: 'whole',
      prompt: { kind: 'reason',
        lead: 'The problem is made of whole numbers, 9 and 3, so it can look like a problem about how whole numbers split.',
        choices: [
          { id: 'a', text: 'The numbers in the problem, 9 and 3, are whole numbers.',
            note: 'True, and it is why the problem can look like {a:M1.whole}. But almost every problem in this course has whole numbers in it, so it cannot tell you which of the two kinds this is.' },
          { id: 'b', text: 'The question asks how many different trios there are, and a trio is a result of a choice.' },
          { id: 'c', text: 'The problem asks “how many”.',
            note: 'True, and it tells you nothing: “how many” is asked by every kind. It cannot separate the two kinds you are choosing between.' }
        ],
        answer: 'b' },
      reason: [
        'For {a:M1.whole} you must be able to point to this: {needs:whole}. The problem does have whole counts in it, and that is why it can look like that kind. But the question is not about how 9 splits into equal groups, or what is left over, or when two repeats meet. Nothing is split and nothing repeats.',
        'It is the question from the photo: Case A was about how a number splits into rows, and Case B about the different orders a choice can come in. {test:whole~chance} Here the question counts the different groups of 3 that can be picked, so the answer is {a:M1.chance}.'
      ]
    },
    impression: {
      resembles: 'gt-outfits',
      text: [
        'The question has given its answer. Now take a second look of a different kind: does this problem look like one you know? It should bring back the packing. There too, the question asked how many different results a choice could give, and the numbers only said how many things there were to choose from.',
        'Here the question and the likeness agree, so the answer stands. The question comes first, because it makes you point at words in the problem. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the question and find the words that answer it. The second whole problem shows how.'
      ]
    } },

  { id: 'worked-bed', kind: 'worked',
    h: 'A second whole problem, where the story points the wrong way',
    link: 'The trio was a clean problem: one thing was going on in it. In this second problem the most noticeable thing in the story is not what decides it. Read to the end before you answer.',
    case: 'gt-bed',
    steps: [
      { step: 'M1',
        reason: [
          'The problem is full of money: a price for each meter of edging. If that were all, it would be a rate, and a hidden number that has to fit it. But a price is not what the question asks about. Look for the question itself: {cue:M1}.',
          'That is a {t:righttriangle}: a flower bed with two sides that meet at a square corner. The problem gives the lengths of two sides, 3.0 m and 4.0 m, and asks for the third side, which is a length. The price for each meter is only there in the story. Nothing in the question asks what the edging costs.'
        ] }
    ],
    hold: {
      neighbor: 'unknown',
      prompt: { kind: 'reason',
        lead: 'The problem gives a price for each meter of edging, and asks for a number it leaves out, so it can look like {a:M1.unknown}.',
        choices: [
          { id: 'a', text: 'The edging costs $5 for each meter, and that is a rate.',
            note: 'True, and it is why the problem can look like {a:M1.unknown}. But a rate in the story does not settle the kind. A problem can carry a rate and ask for something else.' },
          { id: 'b', text: 'Two sides of the bed meet at a square corner, and the question asks for the third side.' },
          { id: 'c', text: 'The problem leaves out a number: the length of the third side.',
            note: 'True, and it tells you nothing: every problem leaves out the number it asks for. It cannot separate the two kinds you are choosing between.' }
        ],
        answer: 'b' },
      reason: [
        'For {a:M1.unknown} you must be able to point to this: {needs:unknown}. The problem does give a rate, and it does leave out a number. But the shape is there, and when a problem shows both, the answer is the shape.',
        'It is the same decision as the model locomotive. There a rate came with two things of the same shape, and here a price comes with a {t:righttriangle}. {test:unknown~shape} The question asks for a length on a triangle with a square corner, so the answer is {a:M1.shape}.'
      ]
    },
    impression: {
      resembles: 'gt-hike', first: 'gt-van',
      text: [
        'Now the second look: does this problem look like one you know? A price for each meter and a question about how much may bring back the van hire first, and the van hire was {a:M1.unknown}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the problem that answer it. They are {cue:M1}. The van hire had nothing like them: it had a fixed fee, a price for each kilometer and a bill, and no shape at all. The hike does: two legs that meet at a square corner, and a question about the third side. So the problem this one really looks like is the hike, and the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-kind', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own. This card puts the unit in one place.',
    carry: [
      'Before any sum, ask what the problem asks you to work out, and point to the words that show it. If you cannot point, you do not have an answer yet.',
      'The kind is not the topic and not the numbers. Money, building and cooking turn up in all five, and the same two numbers can turn up in more than one.',
      '“How many”, “how long” and “how much” turn up in all five. They are not a signal.',
      'A price for each hour is {a:M1.growth}, and a price for each kilometer or each person is {a:M1.unknown}.',
      'A model, a map or a shadow is {a:M1.shape}, even though it comes with a rate.',
      'A count of days or hours that has to end on a day of the week or a time on a clock is {a:M1.whole}, even though it runs over time.',
      'Nothing here solved anything. Each of the five kinds has finer names inside it, and a procedure for each, and they start from your answer to this first question.',
      'Every problem in this course starts with this question. Your answer to it is the first part of your answers on the way to a name.'
    ] },

  { id: 'transfer-kind', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the five kinds is one step. Noticing the moment to ask the question is a separate step, and only you know where those moments are in your life.',
      'Pick one of the five and name an occasion of your own: a problem you met, or one you gave up on because you could not tell what it was asking. The lines under each kind are there to jog your memory.'
    ],
    prompts: [
      { family: 'whole', occasion: 'A time you shared something out and had some left over, or had two things on different schedules and wondered when they would meet.' },
      { family: 'unknown', occasion: 'A bill, a recipe or a pair of totals where you knew every number but one.' },
      { family: 'growth', occasion: 'Something you save, owe, grow or pay each month or year, and a question about where it would be, or when it would get there.' },
      { family: 'chance', occasion: 'A choice with several parts (a menu, a code, a team), or a chance (a forecast, a test result).' },
      { family: 'shape', occasion: 'Something built, drawn or copied: a ramp, a ladder, a map, a model, a bigger pan.' }
    ],
    places: ['At home', 'At work', 'Shopping', 'Planning something'] }
]);

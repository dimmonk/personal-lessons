// Basic Math, Unit Four, part one: the opening card, and the first kind (an amount that goes up or down by the same number each time).
// Unit Four is a procedure unit (kind 'P', lesson standard A12): each kind of problem has a procedure, taught with a problem of the
// kind, two worked examples with real numbers, and problems the learner finishes. The key asks two questions here, and they cross:
// the first says what happens to the amount each time it changes, the second says whether the problem wants the amount at a given
// time or the time to reach a target. The first kind and the fourth are worked by one procedure whichever of the two is asked.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain:
// the preview map, the heading of a meet card, "what you must be able to point to", the key’s question and answer on a meet card,
// the stem of every commit prompt, and the heading of an again or portrait card.
// The worked examples (kind solved) are in u4.cards-solved-*.js. Their steps are computed, not typed: do not edit a number by hand.

FC.cards('math', 'u4', [

  { id: 'orient-growth', kind: 'orient',
    h: 'Four kinds of problem about an amount that changes, and a procedure for each',
    canDo: 'After this unit you can take a problem about one amount that changes as time passes, such as a savings jar that gets €3 more every week, an account that grows by 4% a year, a bridge toll that rose once, or how many years a loan takes to double, say which of four kinds it is, and then solve it with the procedure for that kind. You will see every number worked out, you will be told why each step is done, and you will choose the kind before you solve.',
    everyday: [
      'Picture a family opening the post on one afternoon, with four letters, and every one of them about an amount that changes as time passes. The gym writes: “Your fee is €30 a month, and it goes up by €2 every month: what will it be in six months?” The bank writes: “Your savings of €2,000 grow by 4% a year: what will you have in three years?” Later the bank writes again: “How many years until your savings reach €3,000?” And the bus company writes: “From 1 January the fare is €2.40, and it will stay at €2.40: what will it be in five years?”',
      'The key’s first question, which Unit One taught, gives the same answer to all four: {a:M1.growth}. But they are four different problems. In the first, the amount goes up by the same number every month. In the second and the third, it grows by the same share of itself every year, and the second asks for the amount while the third asks how long it takes. In the fourth, it changed one time and has stayed. Each kind has its own procedure, and a procedure for the wrong one still gives a number, with nothing in the number to say that it is wrong. The first few answers of an amount that goes up by €50 a year and one that goes up by 5% a year are nearly the same, and later they are far apart. So in this unit the order is always the same: first work out how the amount changes and what the problem asks, and only then solve it.'
    ],
    add: [
      'The words from Unit Two carry on. A procedure is the fixed set of steps that solves one kind of problem, and it gives the right answer whatever the numbers are. The working is the procedure carried out on one problem, with every number written down, and a step is one stage of the working, named by what it is for. A calculator may do the arithmetic. What this unit practises is which steps to take, and why.',
      'In this unit the key asks two questions after its first, and they cross. The first is about how the amount changes: by the same number, by the same share, or one time only. The second is about what the problem wants: the amount at a given time, or the time to reach a target. Each kind is taught with a problem of the kind and the idea behind its procedure. Then come two worked problems, in different parts of life, with every step computed and the reason for each step given; in each, one reason is held back until you have chosen it. Then come problems you finish yourself. When the four kinds have been taught, each of the two questions gets its own card, and then the drill mixes all four.'
    ],
    map: { branch: 'growth' } },

  /* ---------- The first kind: the same number added or taken away each time ---------- */
  { id: 'meet-lin', kind: 'meet', outcome: 'lin',
    link: 'The first kind of problem is the simplest way an amount can change: it is raised, or lowered, by the same figure every time.',
    case: 'm4-wd-jar', mark: 'G1',
    strip: [
      'There is one amount to follow: the money in the jar. It starts at €12.',
      'Every week it changes in the same way: €3 more goes in. The €3 does not depend on what the jar already holds.',
      'The question gives a time, 10 weeks, and asks for the amount at the end of it.',
      'Nothing else is going on: no percentage, no shape, no count of ways.'
    ],
    explain: [
      'What you are shown is one amount, a time that passes in equal stretches (here weeks), and a change that is the same size every time. After week 1 the jar holds €15, after week 2 €18 and after week 3 €21. Each week adds €3, and a jar holding €12 gets the same €3 as a jar holding €120.',
      'There is a procedure for this, and it is short, because the change is the same every time: the change over 10 weeks is 10 lots of €3, so you work out that total once and put it on the start. The procedure is shown in the worked problems that follow, with every number written down.',
      'Notice what decides the kind. It is not that the numbers are small, or that the amount goes up. It is that the change is the same number every time. An amount that has the same number taken away every time is the same kind, because taking away €3 is the same idea run the other way. And the problem can ask in two ways: for the amount at a given time, or for how long until it gets to a target. Both are worked by the same procedure, forwards or backwards.'
    ],
    feature: { step: 'G1', option: 'adds' },
    name: 'A problem like this is {o:lin}. The word “linear” means “along a line”: if you marked the jar’s amount week by week on a chart, the points would sit on a straight line, because each week climbs by the same €3.' },

  { id: 'again-lin', kind: 'again', outcome: 'lin',
    link: 'The jar gave you what to point to: {needs:lin}. Here is a second problem, in a different story, a warehouse that gets deliveries.',
    first: 'm4-wd-jar', second: 'm4-wd-boxes', step: 'G1',
    instruction: 'Find what the two problems share. Ignore the story (a jar, a warehouse) and ignore the numbers. Look at one thing only: which words say how the amount changes each time?',
    prompt: { kind: 'phrase', answer: 'Every day a lorry delivers 40 more' },
    shared: [
      'Both problems follow one amount, the money in a jar and the boxes in a warehouse, and in both the same number is added every time: €3 every week, 40 every day. In neither does the size of the change depend on how much there already is.',
      'That is all you point to, and it is why one name covers a toddler’s jar and a warehouse. The story differs and the numbers differ, and the warehouse grows by dozens while the jar grows by a few euros. How the amount changes each time is the same.'
    ] },

  { id: 'lens-growth', kind: 'lens',
    h: 'Story and structure, now that there is something to solve',
    link: 'The last card asked you to ignore the story and look at what happens to the amount. That holds for every card from here on, and this card says it once, now that there is a procedure to carry out.',
    body: [
      'Every problem in this unit has two layers, as in the units before. The top layer is the story: a jar, a warehouse, an account, a fare. Under it are two things that decide the kind, and so the procedure: how the amount changes every time, and which question the problem asks about it.',
      'There is one new thing. Once the kind is chosen, you carry out its procedure on the numbers, and the numbers do change the working: a longer time means more multiplying, and a higher target means a longer wait. So in this unit you will see the same kind of problem with different numbers, and the steps will always be the same steps, with different working in them.',
      'Two things change on purpose from card to card: the words that describe the change (“puts in”, “delivers”, “grows by”, “rose to”) and the setting. None of them tells you the kind. Only how the amount changes each time does.'
    ],
    fixed: ['the two questions the key asks of every problem in this unit: {q:G1} and {q:G2}'],
    varies: ['the story', 'the people', 'the size of the numbers', 'whether the amount goes up or down', 'the words that describe the change (“puts in”, “grows by”, “rose to”)', 'whether the problem asks for the amount or for the time'] },

  { id: 'portrait-lin', kind: 'portrait', outcome: 'lin',
    link: 'You know what to point to for {o:lin}. This card fills in the rest of the picture, so that you can spot it where nobody marks the words for you.',
    typical: [
      'One amount, a size at the start, and a change that is the same number every hour, day, week, month or year: €3 a week, 40 boxes a day, 2 cm an hour.',
      'The change can go up or down. Taking away €3 a week, or a bottle that loses 250 ml an hour, is the same kind: the same number is taken away from the amount each time.',
      'The change is a plain figure with a unit of time, such as “an hour” or “a month”, and not a percentage of what there is. A percentage of the amount would make the change a different size each time, as the amount changed.',
      'The question gives a time and asks for the amount, or gives a target and asks how long. Both are this kind, and one procedure answers both, run forwards or backwards.'
    ],
    not: [
      'It is not this kind just because the amount is rising quickly. Sales up by €3,000 every month are going up fast, and they are still going up by the same number each time. “Fast” does not decide the kind; “the same number every time” does.',
      'And it is not a change that was made one time. A fee that went up by €2 and stayed there has a change that did not come again.'
    ],
    wild: ['“It goes up by €3 every week.”', '“It adds 40 a day.”', '“A fixed fee of so much a month.”', '“It earns €15 an hour.”', '“It loses 2 cm every hour.”'],
    self: 'In your own life you meet this in a regular saving of a fixed sum, a pay rate by the hour, a phone or gym fee that rises by a fixed sum every month, a tank or a bottle that fills or empties at a steady speed, and a distance covered at a steady speed.',
    ask: '“Does the same figure get added to the amount, or taken away, every hour, day, week, month or year?” If you can say yes, it does not matter how much the amount has reached, and no percentage is involved, you are probably looking at this kind.' },

  { id: 'check-lin', kind: 'check', after: 'lin',
    case: 'm4-wd-train',
    ask: { type: 'phrase', step: 'G1', say: 'Which words show how the amount changes each time? Tap them.',
           answer: 'gets 85 km closer every hour' } },

  { id: 'check-lin-last', kind: 'check', after: 'lin', case: 'm4-ck-lin-last', ask: { type: 'solve', solve: 'last' } },
  { id: 'check-lin-whole', kind: 'check', after: 'lin', case: 'm4-ck-lin-whole', ask: { type: 'solve', solve: 'whole' } }
]);

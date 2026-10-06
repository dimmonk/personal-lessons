// Basic Math, Unit Four, the opening card and the first kind (an amount that goes up or down by the same number each time).
// Unit Four is a procedure unit (kind 'P', lesson standard A12). A quick lesson (lesson standard section 19): each kind has one
// meet card, one check and one worked example, and nothing else for it.
// The key asks two questions here, and they cross: the first says what happens to the amount each time it changes, the second says
// whether the problem wants the amount at a given time or the time to reach a target.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain:
// the preview map, the heading of a meet card, "what you must be able to point to", the key’s question and answer on a meet card,
// and the stem of every commit prompt.
// The worked examples (kind solved) are in u4.cards-solved-*.js. Their steps are computed, not typed: do not edit a number by hand.

FC.cards('math', 'u4', [

  { id: 'orient-growth', kind: 'orient',
    h: 'Four kinds of problem about an amount that changes, and a procedure for each',
    canDo: 'After this unit you can take a problem about one amount that changes as time passes, say which of four kinds it is, and solve it with the procedure for that kind.',
    everyday: [
      'Picture a family opening the mail on one afternoon, with four letters, and every one of them about an amount that changes as time passes. The gym writes: “Your fee is $30 a month, and it goes up by $2 every month: what will it be in six months?” The bank writes: “Your savings of $2,000 grow by 4% a year: what will you have in three years?” Later the bank writes again: “How many years until your savings reach $3,000?” And the bus company writes: “From 1 January the fare is $2.40, and it will stay at $2.40: what will it be in five years?”',
      'The first question, which Unit One taught, gives the same answer to all four: {a:M1.growth}. But they are four different problems. In the first, the amount goes up by the same number every month. In the second and the third, it grows by the same share of itself every year, and the second asks for the amount while the third asks how long it takes. In the fourth, it changed one time and has stayed. Each kind has its own procedure, and the wrong procedure still gives a number, with nothing in the number to say that it is wrong. So the order is always the same: first work out how the amount changes and what the problem asks, and only then solve it.'
    ],
    map: { branch: 'growth' } },

  /* ---------- The first kind: the same number added or taken away each time ---------- */
  { id: 'meet-lin', kind: 'meet', outcome: 'lin',
    link: 'The first kind of problem is the simplest way an amount can change: it is raised, or lowered, by the same figure every time.',
    case: 'm4-wd-jar', mark: 'G1',
    strip: [
      'There is one amount to follow: the money in the jar. It starts at $12.',
      'Every week it changes in the same way: $3 more goes in. The $3 does not depend on what the jar already holds.',
      'The question gives a time, 10 weeks, and asks for the amount at the end of it.'
    ],
    explain: [
      'The jar holds $15 after week 1, $18 after week 2 and $21 after week 3. Each week adds $3, and a jar holding $12 gets the same $3 as a jar holding $120. So the change over 10 weeks is 10 lots of $3: you work that total out once and put it on the start.',
      'What decides the kind is a change of the same size every time, whether the amount goes up or down. The problem can ask for the amount at a given time, or for how long until it reaches a target. Both are worked by the same procedure, forwards or backwards.'
    ],
    feature: { step: 'G1', option: 'adds' },
    name: 'A problem like this is {o:lin}. The word “linear” means “along a line”: marked week by week on a chart, the jar’s amount would sit on a straight line, because each week climbs by the same $3.' },

  { id: 'check-lin', kind: 'check', after: 'lin',
    case: 'm4-wd-train',
    ask: { type: 'phrase', step: 'G1', say: 'Which words show how the amount changes each time? Tap them.',
           answer: 'gets 85 km closer every hour' } }
]);

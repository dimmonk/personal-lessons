// Basic Math, Unit Four, the opening card and the first kind (an amount that goes up or down by the same number each time).
// Unit Four is a procedure unit (kind 'P', lesson standard A12). A quick lesson (lesson standard section 19): each kind has one
// meet card, one check and one worked example, and nothing else for it.
// The key asks two questions here, and they cross: the first says what happens to the amount each time it changes, the second says
// whether the problem wants the amount at a given time or the time to reach a target.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain:
// the preview map, the heading of a meet card, the key’s question and answer on a meet card,
// and the stem of every commit prompt.
// The worked examples (kind solved) are in u4.cards-solved-*.js. Their steps are computed, not typed: do not edit a number by hand.

FC.cards('math', 'u4', [

  { id: 'orient-growth', kind: 'orient',
    h: 'Check how an amount changes before you work out what it will be',
    canDo: 'Before you work out what a bill, a balance or a count will be later, check how it changes: the same number each time, a percentage each time, or just once. The wrong steps still give you a number, and nothing in the number warns you.',
    everyday: [
      'Your gym fee goes up $2 every month. Your savings grow 4% a year. The bank asks how many years until your savings reach $3,000. The bus fare was raised once in January and has stayed put.',
      'All four are about one amount that moves as time passes, and each is worked out differently. Find out which one you have before you do any sums.'
    ],
    map: { branch: 'growth' } },

  /* ---------- Linear growth: the same number added or taken away each time ---------- */
  { id: 'meet-lin', kind: 'meet', outcome: 'lin',
    link: 'First: an amount that gets the same top-up, or the same cut, every time.',
    case: 'm4-wd-jar', mark: 'G1',
    explain: [
      'The jar holds $15 after week 1, $18 after week 2 and $21 after week 3. Each week adds the same $3, whether the jar holds $12 or $120.',
      'So over 10 weeks the jar gains 10 times $3, and you add that to the start. The same steps work backward: to find how long until a target, divide the distance to it by $3.'
    ],
    spot: [
      { do: 'Find the one amount that changes: the money in the jar.', why: 'Everything else in the problem is about this one amount.' },
      { do: 'Find the change each time, and check it is the same size: $3 every week.', why: 'A plain figure beside “every week”, “every day” or “every month” is the same size each time.' },
      { do: 'Find what it asks: the amount after 10 weeks.', why: 'You can ask for the amount later or for the time to a target, and the steps are the same.' }
    ],
    feature: { step: 'G1', option: 'adds' },
    name: 'This is {o:lin}. Drawn week by week, the jar’s amount makes a straight line, because every week adds the same $3.' },

  { id: 'check-lin', kind: 'check', after: 'lin',
    case: 'm4-wd-train',
    ask: { type: 'phrase', step: 'G1', say: 'Which words show how the amount changes each time? Tap them.',
           answer: 'gets 85 km closer every hour' } }
]);

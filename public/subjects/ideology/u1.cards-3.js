// Political Ideologies, Unit One, part three: the third answer (old customs handed down) and its look-alike pair
// with the second answer.
// The app prints "how to tell them apart" and the key's tie-break; neither is typed here.

FC.cards('ideology', 'u1', [

  /* ---------- The third answer: old customs handed down ---------- */
  { id: 'meet-tradition', kind: 'meet', family: 'tradition',
    link: 'Third: a text that holds up what was handed down as the guide.',
    case: 'i-trad-meet', mark: 'D1',
    explain: [
      'The sermon names what the grandparents kept (the Sabbath, the church, the faith) and says those customs should guide how the country is run. Other texts hold up a way of home life, or an old order of crown, church and rank. It does not matter whether the faith is true or the custom is good.',
      'What counts is what the text holds up as the guide. Mentioning a church or the past is not enough: a notice that the church bells ring at ten holds nothing up. And speaking of “this country” does not make a text about one people: here the country is only the place the customs should guide.'
    ],
    spot: [
      { do: 'Find what was handed down: “they handed all of it down to us”.', why: 'The text must name something from the past, such as a faith, a church or a custom.' },
      { do: 'Find what the text says it is for: “should guide how this country is run”.', why: 'Naming the past is not enough: the text must hold it up as the guide.' },
      { do: 'Check what comes first: the customs, not the country.', why: 'The country is only the place they should guide.' }
    ],
    feature: { step: 'D1', option: 'tradition' },
    name: 'This is {a:D1.tradition}. Take away what was handed down and the sermon has nothing left to say.' },

  { id: 'check-tradition', kind: 'check', after: 'tradition',
    case: 'i-trad-check',
    ask: { type: 'option', step: 'D1', among: ['class', 'nation', 'tradition'] } },

  /* ---------- A look-alike pair ---------- */
  { id: 'look-nation-tradition', kind: 'lookalike', ledger: 'nation~tradition',
    link: 'These two sound alike: both can say “our”, and both can love the same place.',
    cases: ['i-can-nation', 'i-can-tradition'],
    instruction: 'Both stories are about the closing of the Harrow cannery. Compare one thing: does the text hold up one people, or what was handed down?',
    prompt: { kind: 'which', option: 'D1.tradition', answer: 'i-can-tradition' },
    difference: [
      'In Story A, “we are one people” and “the whole nation is smaller”. It puts the people first and says nothing about a faith, a custom or the past. That is {a:D1.nation}.',
      'In Story B, the text talks about a supper held for a hundred years in the chapel hall, and says faith, home life and old customs should guide the rebuilding. It names no people to put first. That is {a:D1.tradition}.',
      'Both say “us” and love the place. One holds up a people, and the other holds up what was handed down to it.'
    ] }
]);

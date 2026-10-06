// Political Ideologies, Unit One, part three: the third answer (old ways of faith, home and custom) and its look-alike pair
// with the second answer.
// The app prints "how to tell them apart", the side-by-side table and the key's tie-break; none of them is typed here.

FC.cards('ideology', 'u1', [

  /* ---------- The third answer: old ways ---------- */
  { id: 'meet-tradition', kind: 'meet', family: 'tradition',
    link: 'The third answer looks backward: not at what people earn, or who they are, but at what has been handed down to them.',
    case: 'i-trad-meet', mark: 'D1',
    strip: [
      'Something from the past is named: the faith, the church, the Sabbath, the old customs. The speaker’s grandparents kept them and handed them down.',
      'The text says these ways should guide how the country is run: "Where they are set aside, there is nothing left to steer by."',
      'No wages or owners, and no people put first. The country appears only as the place the old ways should guide.'
    ],
    explain: [
      'The text is made of ways of living that come from the past, and a claim that they should guide us: a faith, home life, old customs, or an old order of crown, church and rank. It does not ask whether the faith is true or the custom good. It asks what the text holds up as the thing that should guide.',
      'This text speaks of "this country", and yet the answer is not the second. What decides it is what the text holds up, and it holds up the old ways. Mentioning a church or the past is not enough: a notice that the church bells ring at ten holds nothing up.'
    ],
    feature: { step: 'D1', option: 'tradition' },
    name: 'The answer is {a:D1.tradition}. "Old ways" means ways of living that come from the past: a faith, a way of home life, a custom, or an old order of crown, church and rank. The answer needs two things together: the old ways, and the text holding them up as what should guide.' },

  { id: 'check-tradition', kind: 'check', after: 'tradition',
    case: 'i-trad-check',
    ask: { type: 'option', step: 'D1', among: ['class', 'nation', 'tradition'] } },

  /* ---------- A look-alike pair ---------- */
  { id: 'look-nation-tradition', kind: 'lookalike', ledger: 'nation~tradition',
    link: 'The second and third answers can both say "our", and both can speak of a country.',
    cases: ['i-can-nation', 'i-can-tradition'],
    instruction: 'Both cases are about the closing of the Harrow cannery. Compare one thing: what does the text hold up first, one people or what was handed down?',
    prompt: { kind: 'which', option: 'D1.tradition', answer: 'i-can-tradition' },
    difference: [
      'In Case A the text says that we are one people, and that when one of our towns is hollowed out the whole nation is smaller. It puts the people first and says nothing of a faith, a custom or the past. The answer is {a:D1.nation}.',
      'In Case B the text speaks of a supper held for a hundred years in the chapel hall, and says that faith, home life and old custom should guide how the town is rebuilt. It names no people to be put first. The answer is {a:D1.tradition}.',
      'Both say "us" and are fond of the place. One holds up a people, and the other holds up what was handed down to it.'
    ] }
]);

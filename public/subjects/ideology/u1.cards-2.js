// Political Ideologies, Unit One, part two: the second answer (the nation, or its ordinary people) and the first look-alike pair.
// The app prints "how to tell them apart" and the key's tie-break; neither is typed here.

FC.cards('ideology', 'u1', [

  /* ---------- The second answer: the nation, or its ordinary people ---------- */
  { id: 'meet-nation', kind: 'meet', family: 'nation',
    link: 'Second: a text that speaks for one whole people, and puts it first.',
    case: 'i-speech-nation', mark: 'D1',
    explain: [
      'The speech does not split anyone into workers and owners. It says everyone in the country, whatever their trade or party, is one people, and that the nation comes first.',
      'A people can be marked out by its country, as here, or by a shared culture, language or birth. Some texts speak for the whole nation as one. Others speak for the country’s ordinary people against a few at the top, such as politicians, officials or bankers. Both put one people first, and it does not matter whether that people deserves it.'
    ],
    spot: [
      { do: 'Find who “us” is: “you are one people with one history and one future”.', why: 'The text must name a people it calls its own.' },
      { do: 'Check who it is against: no one here.', why: 'Some texts set the ordinary people against a few at the top, and that is still this answer.' },
      { do: 'Find what comes first: “Our first loyalty is to the nation.”', why: 'The text must put that people first, not just mention it.' }
    ],
    feature: { step: 'D1', option: 'nation' },
    name: 'This is {a:D1.nation}. The speech works for everyone in the country at once, whatever their job.' },

  { id: 'check-nation', kind: 'check', after: 'nation',
    case: 'i-nation-check',
    ask: { type: 'option', step: 'D1', among: ['class', 'nation'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-class-nation', kind: 'lookalike', ledger: 'class~nation',
    link: 'These two sound alike: both can be angry about the same closing, and both say “us” against someone else.',
    cases: ['i-can-class', 'i-can-nation'],
    instruction: 'Both stories are about the closing of the Harrow cannery. Compare one thing: who is “us”, and who is “them”?',
    prompt: { kind: 'which', option: 'D1.nation', answer: 'i-can-nation' },
    difference: [
      'In Story A, “us” is the people who stood at the line for thirty years, and “them” is the owners who moved the work and kept the profit. Nobody is speaking for the country. That is {a:D1.class}.',
      'In Story B, “us” is “one people”, and “the whole nation is smaller”. There are no owners and no workers in it, and its first duty is to the nation. That is {a:D1.nation}.',
      'Same cannery, same anger. What differs is the line the text draws: between workers and owners, or around the whole country.'
    ] }
]);

// Political Ideologies, Unit One, part two: the second answer (the nation, or its ordinary people) and the first look-alike pair.
// The app prints "how to tell them apart", the side-by-side table and the key's tie-break; none of them is typed here.

FC.cards('ideology', 'u1', [

  /* ---------- The second answer: the nation, or its ordinary people ---------- */
  { id: 'meet-nation', kind: 'meet', family: 'nation',
    link: 'The first answer looked at people by what they do for money. The second looks at them by the country they share.',
    case: 'i-speech-nation', mark: 'D1',
    strip: [
      'One group, and a big one: everyone in this country. Whatever your trade or your party, you are one people with one history and one future.',
      'Nobody is set against anybody. Nothing is about wages or owners.',
      'It says who comes first: "Our first loyalty is to the nation."'
    ],
    explain: [
      'The text draws a line around a people and puts it first. A people can be marked out by its country, as here, by a shared culture or language, or by birth. You do not need to decide which: you point to a text that speaks for one people and puts it first.',
      'It comes in two shapes. In one the whole nation is spoken for as one, as here. In the other the text speaks for the country’s ordinary people against a few at the top, such as politicians, officials or bankers, and wants the country run for them. Both put one people first. It does not depend on whether the people deserve the loyalty, or on how the text treats anyone outside it.'
    ],
    feature: { step: 'D1', option: 'nation' },
    name: 'The answer is {a:D1.nation}. "The nation" means a people that shares a country. "Its ordinary people" means the ordinary members of that people, set against a few at the top. In both shapes it is a people that is put first.' },

  { id: 'check-nation', kind: 'check', after: 'nation',
    case: 'i-nation-check',
    ask: { type: 'option', step: 'D1', among: ['class', 'nation'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-class-nation', kind: 'lookalike', ledger: 'class~nation',
    link: 'These two are easy to mix up, because both can be angry about the same closing, and both can say "us" against someone else.',
    cases: ['i-can-class', 'i-can-nation'],
    instruction: 'Both cases are about the closing of the Harrow cannery. Compare one thing: who is "us", and who is "them"?',
    prompt: { kind: 'which', option: 'D1.nation', answer: 'i-can-nation' },
    difference: [
      'In Case A the text sorts the people involved into the owners, who move the work and keep the profit, and the people who stood at the line for thirty years, and it stands with the second group. Nobody is spoken for as a country. The answer is {a:D1.class}.',
      'In Case B the text says "We are one people" and "the whole nation is smaller". There are no owners and no workers in it, and its first duty, it says, is to the nation. The answer is {a:D1.nation}.',
      'Same cannery, same anger. What differs is the line the text draws: between those who work and those who own, or around the country.'
    ] }
]);

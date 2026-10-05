// Political Ideologies, Unit One, part two: the second answer (the nation, or its ordinary people), the first look-alike
// pair, and the two exceptions that carry the key's first tie-break.
// The app prints "how to tell them apart", the side-by-side table and the key's tie-break; none of them is typed here.

FC.cards('ideology', 'u1', [

  /* ---------- The second answer: the nation, or its ordinary people ---------- */
  { id: 'meet-nation', kind: 'meet', family: 'nation',
    link: 'The first answer looked at the same people by what they do for money. The second looks at them another way: by the country they share.',
    case: 'i-speech-nation', mark: 'D1',
    strip: [
      'There is one group in the text, and it is a big one: everyone in this country. The speaker says that whatever your trade or your party, you are one people with one history and one future.',
      'Nobody is set against anybody. The text is not about wages or owners. It does not say who works and who owns.',
      'It holds up no faith and no custom, and it does not say that this people is better than any other.',
      'It says who comes first: the nation. "Our first loyalty is to the nation."'
    ],
    explain: [
      'What this text is made of is a people, and a first loyalty to it. The speaker draws a line around everyone in the country and says they belong together. Trade, party and birthplace inside the line are said to matter less than the line itself.',
      'A people can be marked out in different ways. Here it is marked out by the country. Other texts mark it out by a shared culture or language, or by birth. You do not need to decide which. What you point to is a text that speaks for one people, marked out in one of those ways, and puts that people first.',
      'This answer comes in two shapes, and you will meet both. In the first, the whole nation is spoken for as one, as in this speech. In the second, the text speaks for the country’s ordinary people against a few at the top, such as politicians, officials, bankers or the media, and wants the country run for those people. Both put one people first.',
      'Notice what the answer does not depend on. It does not depend on whether you think the people deserve the loyalty. It does not depend on how the text treats anyone outside the people, or anyone inside it who disagrees. Those are different questions, and this unit does not ask them.'
    ],
    feature: { step: 'D1', option: 'nation' },
    name: 'In this unit the key’s answer is also the name of the kind of text: {a:D1.nation}. "The nation" means a people that shares a country. "Its ordinary people" means the ordinary members of that people, set against a few at the top. In both shapes it is a people that is put first.' },

  { id: 'again-nation', kind: 'again', family: 'nation',
    link: 'The bridge speech gave you what to point to from one case: {needs:nation}. Here is a second case in the other shape: a newspaper column, in which a people is set against a few at the top.',
    first: 'i-speech-nation', second: 'i-ordinary-few', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the story (a bridge, a column about the capital). Look at one thing only: which words speak for one people, marked out by its country, and put it first?',
    prompt: { kind: 'phrase', answer: 'It is time this country was run for its own people again' },
    shared: [
      'Both texts speak for one people and put it first. The speaker on the bridge says that all of us are one people and that the nation comes first. The column says that the country should be run for its own people. In the speech the people is one body. In the column it is the ordinary people, set against a few ministers and officials at the top. The shapes differ, and what you point to is the same: one people, marked out by its country, put first.',
      'In neither case is anyone sorted by wages or by owning a business. The few at the top in the column are ministers and officials, not owners, and the people are the country’s people, not workers. That is what keeps this answer apart from the first.',
      'The two stories share nothing else, so this holds wherever a text speaks for one people and puts it first. That is what {a:D1.nation} names.'
    ] },

  { id: 'portrait-nation', kind: 'portrait', family: 'nation',
    link: 'You know what to point to. This card fills in the rest of the picture, so that you can spot {a:D1.nation} where nobody marks the words for you.',
    typical: [
      'A people is spoken for: "we", "our people", "the nation", "this country". The text tells you who belongs.',
      'The people comes first, before parties, trades or private gain: "Our first loyalty is to the nation."',
      'The line around the people is drawn by country, by culture or language, or by birth. The text usually says which, in a word or two.',
      'Sometimes the people is one body and nobody inside it is named as an enemy. Sometimes ordinary people are set against a few at the top, and the text says the country should be run for the people.',
      'The text may speak of a flag, a border, a language, a history or a homeland. Those are things such texts talk about. What you point to is the people put first.'
    ],
    not: [
      'The word "country" or "national" in a text does not make it this answer. A text can mention the nation only to say that a minimum wage is the same everywhere, and still be on the side of working people against owners. What you point to is a people put first.',
      'This answer says only whom the text speaks for. It does not say how that people treats anyone outside it, nor how it treats voters and critics.'
    ],
    wild: ['"Our country, our people, first."', '"We are one people."', '"Take the country back."', '"The ordinary people of this land have been ignored."', '"A nation that forgets itself is lost."'],
    self: 'In your own life it is the "us" and "them" of a speech, the way a news story talks about "the country", the slogan on a banner at a match, or an opinion piece about who decisions are made for.',
    ask: '"Who is the people, how does the text mark it out, and does it put that people first?" If you can say all three in a sentence, this is the answer to look at.' },

  { id: 'check-nation', kind: 'check', after: 'nation',
    case: 'i-nation-check',
    ask: { type: 'option', step: 'D1', among: ['class', 'nation'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-class-nation', kind: 'lookalike', ledger: 'class~nation',
    link: 'You have now met two answers on their own. They are easy to mix up, because both can be angry about the same closing, and both can say "us" against someone else. This card puts them side by side.',
    cases: ['i-can-class', 'i-can-nation'],
    instruction: 'Both cases are about the closing of the Harrow cannery. Compare one thing: who is "us", and who is "them"?',
    prompt: { kind: 'which', option: 'D1.nation', answer: 'i-can-nation' },
    difference: [
      'In Case A the cannery closes and the text sorts the people involved into two groups: the owners, who move the work and keep the profit, and the people who stood at the line for thirty years. It stands with the second group. Nobody is spoken for as a country. The key’s answer is {a:D1.class}.',
      'In Case B the same cannery closes and the text speaks for one people, marked out by its country: "We are one people", "the whole nation is smaller". There are no owners and no workers in it, and its first duty, it says, is to the nation. The key’s answer is {a:D1.nation}.',
      'The cannery is the same, and so is the anger. What differs is the line the text draws. In Case A it runs between those who work and those who own. In Case B it runs around the country.'
    ] },

  /* ---------- Exceptions: the key's first tie-break, and a text that names the two groups only to deny them ---------- */
  { id: 'exc-ourcountry', kind: 'exception', ledger: 'class~nation', looksLike: 'nation', is: 'class',
    h: 'A text that speaks of the country and still takes the workers’ side',
    link: 'The last card kept the two answers on separate stories. A real text can show both at once. Here the text speaks of the whole country, and also sets working people against owners.',
    case: 'i-x-ourcountry',
    setup: 'The text speaks of the country, and of what the country owes the people who built it. Speaking for a country and its people is what you point to for {a:D1.nation}. Yet the key’s answer for this case is {a:D1.class}.',
    prompt: { kind: 'phrase', answer: "We are the country's workers, and we stand against the owners" },
    because: [
      'The text does speak of the country. It says the country was built by working people and should remember them. If that were all it said, it would be {a:D1.nation}. But the text goes on to name the owners, say what they did, and say "we stand against the owners". That is working people set against owners, with the text on the workers’ side.',
      'So the case shows both answers at once. When it does, the key has to choose, and it chooses the first. A text that speaks of the country and also sets working people against owners is about the split, and the country is where the split is described.',
      'It chooses this way round for a reason. If the case were given {a:D1.nation}, the owners and the workers would drop out of what the key looks at, and they are what the text is about.'
    ],
    take: 'It is worth knowing that this is the key’s decision. In life, a speaker can mean both, and nobody can draw a sharp line between "for the country" and "for the people who work in it". The key gives each text one answer, so that two people using it reach the same one and can each say why.' },

  { id: 'exc-deny', kind: 'exception', ledger: 'class~nation', looksLike: 'class', is: 'nation',
    h: 'Workers and owners named only to be denied',
    link: 'The last card showed a text that speaks of the country and still takes the workers’ side. Here is the mix turned round: a text that names workers and owners and still puts the nation first.',
    case: 'i-x-deny',
    setup: 'The text names the drivers and the dock owners. Sorting people into those who work and those who own is what you point to for {a:D1.class}. Yet the key’s answer for this case is {a:D1.nation}.',
    prompt: { kind: 'phrase', answer: 'There is only one side, the nation, and it is ours' },
    because: [
      'The speaker names the two groups in order to say they are not on opposite sides. "They are not" is the point of the sentence. The text does not stand with the drivers against the dock owners, or with the dock owners against the drivers. It stands with the nation, which it calls the one side.',
      'A text can mention workers and owners in three ways: to set them against each other and stand with the workers, to treat them as one, or only to report on them. Only the first is {a:D1.class}. When a text names them in order to refuse the split, what counts is the text’s first loyalty, and here that is the nation.',
      'The last sentence confirms it. Anyone who splits people by wages and ownership is said to be working against the whole country. A text that calls the split an attack on the nation has put the nation first.'
    ],
    take: [
      'The key’s decision printed above is for a text that shows both answers. This text does not show the first one. It names the two groups to refuse the split, so what it shows is only the second.',
      'This does not make every text that mentions a boss and a worker the second answer. The question is always who or what the text puts first. If it names the two groups and stands with the workers, it is {a:D1.class}.'
    ] }
]);

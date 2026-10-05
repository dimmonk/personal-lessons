// Political Ideologies, Unit One, part three: the third answer (old ways of faith, home and custom), its two look-alike
// pairs with the answers already met, and the exception in which the nation shows too.
// The app prints "how to tell them apart", the side-by-side table and the key's tie-break; none of them is typed here.

FC.cards('ideology', 'u1', [

  /* ---------- The third answer: old ways ---------- */
  { id: 'meet-tradition', kind: 'meet', family: 'tradition',
    link: 'Two answers so far: a split between those who work and those who own, and a people with a country. The third looks backward. Its text is not about what people earn, or about who the people are, but about what has been handed down to them.',
    case: 'i-trad-meet', mark: 'D1',
    strip: [
      'Something from the past is named in the text: the faith, the church, the Sabbath, the old customs. The speaker’s grandparents kept them and handed them down.',
      'The text says these ways should guide how the country is run. "Where they are set aside, there is nothing left to steer by."',
      'It is not about wages or owners, and it does not name a people to put first. The country is mentioned only as the place the old ways should guide.',
      'The ways are held up because they are old, and because they were handed down.'
    ],
    explain: [
      'What this text is made of is ways of living that come from the past, and a claim that they should guide us. The ways can be a faith (what a church teaches, and a year built around its days), a way of home life (who raises the children, how a household keeps its Sundays), or old customs (a dance, a feast, a way of marking a death). A text can also hold up an old order of crown, church and rank.',
      'This question is not asking whether a faith is true or an old custom is good. It is asking what the text holds up as the thing that should guide. Here the text says that what was handed down should guide the country, and that without it there would be nothing to steer by.',
      'The idea behind this kind of text is that a country needs more than money and laws to hold together. It needs what earlier generations built and passed on, and a country that cuts itself off from that loses its bearings. People who think so need not be angry. They may only want what is old kept.',
      'Notice that this text speaks of "this country", and yet its answer is not the second. What decides it is what the text holds up, and it holds up the old ways. A text that held up one people, and spoke of a flag, would be a different case.'
    ],
    feature: { step: 'D1', option: 'tradition' },
    name: 'In this unit the answer is also the name of the kind of text: {a:D1.tradition}. "Old ways" means ways of living that come from the past: a faith, a way of home life, a custom, or an old order of crown, church and rank. The answer needs two things together: the old ways, and the text holding them up as what should guide.' },

  { id: 'again-tradition', kind: 'again', family: 'tradition',
    link: 'The harvest sermon gave you what to point to from one case: {needs:tradition}. Here is a second case in a different setting: a school and a Sunday morning.',
    first: 'i-trad-meet', second: 'i-trad-again', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the story (a village service, a school timetable). Look at one thing only: which words hold up what was handed down as what should count or guide?',
    prompt: { kind: 'phrase', answer: 'They should count for more than the league table' },
    shared: [
      'Both texts hold up ways that came from the past. The sermon names the faith, the home and the old customs, handed down by grandparents. The parent names Sunday church and a long lunch with the grandparents, as it was for them and for their parents before them. In both, the old ways are asked to come first: to guide how the country is run, or to count for more than the league table.',
      'One text is about a whole country and the other is about one school. That makes no difference. What matters is that old ways are held up as what should guide. That is what {a:D1.tradition} names.'
    ] },

  { id: 'portrait-tradition', kind: 'portrait', family: 'tradition',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {a:D1.tradition} where nobody marks the words for you.',
    typical: [
      'Something from the past is named: a faith, a church, a feast, the way a household keeps its Sundays, a custom, or an old order of crown and rank.',
      'It is said to have been handed down: by grandparents, by "the generations before us", by "our fathers", or simply by always having been done.',
      'It is held up as what should guide. It is what a country, a town or a school should be built on, or should count for most.',
      'The text often warns that if the old ways are set aside, something is lost: a bearing, a way of holding people together.',
      'Some such texts want change to come slowly and what remains to be kept. Others want something that has gone to be put back. Which of the two a text wants is a different question, and this unit does not ask it.'
    ],
    not: [
      'Mentioning a church, a custom or the past does not make a text this answer. A notice that the church bells will ring at ten names a church and holds nothing up. What you point to is the old ways held up as what should guide.',
      'A text can speak of the country and also hold up the old ways as the guide. There is one decision for that, and this unit works it through on a case of its own.'
    ],
    wild: ['"The faith of our fathers."', '"What our grandparents handed down."', '"Some things are not up for a vote."', '"We have always done it this way, and for good reason."', '"Without our customs there is nothing to hold us together."'],
    self: 'In your own life it is the holiday that has to be kept just so, the grandparent who says what was always done, the argument over whether a school or a shop should open on a day that has always been set aside, or an opinion piece about what a country should be built on.',
    ask: '"What from the past is named, and does the text hold it up as what should guide?" If you can say both in one sentence, this is the answer to look at.' },

  { id: 'check-tradition', kind: 'check', after: 'tradition',
    case: 'i-trad-check',
    ask: { type: 'option', step: 'D1', among: ['class', 'nation', 'tradition'] } },

  /* ---------- Two look-alike pairs ---------- */
  { id: 'look-class-tradition', kind: 'lookalike', ledger: 'class~tradition',
    link: 'You have now met three answers on their own. The first and the third are easy to mix up when a text is angry about what a closing does to a town: one is angry about owners and workers, the other about customs lost. This card puts them side by side.',
    cases: ['i-can-tradition', 'i-can-class'],
    instruction: 'Both cases are about the closing of the Harrow cannery. Compare one thing: is the text about who works and who owns, or about what has been handed down?',
    prompt: { kind: 'which', option: 'D1.tradition', answer: 'i-can-tradition' },
    difference: [
      'In Case A the cannery closes and the text mourns a harvest supper that the cannery households have held in the chapel hall for a hundred years. It says that faith, home life and old custom held the town together and should guide how it rebuilds. No owners are named and nobody is sorted by wages. The answer is {a:D1.tradition}.',
      'In Case B the same cannery closes and the text sorts the people involved into the owners, who move the work and keep the profit, and the people who stood at the line. It stands with the second group. The chapel and the supper are not mentioned. The answer is {a:D1.class}.',
      'Both texts are angry that the town is losing the cannery. The difference is what each says has been lost: what the people at the line earned, while the owners kept the profit, or the town’s inherited way of life.'
    ] },

  { id: 'look-nation-tradition', kind: 'lookalike', ledger: 'nation~tradition',
    link: 'The second and third answers can both say "our", and both can speak of a country. Here the same closing is told by each.',
    cases: ['i-can-nation', 'i-can-tradition'],
    instruction: 'Both cases are about the closing of the Harrow cannery. Compare one thing: what does the text hold up first, one people or what was handed down?',
    prompt: { kind: 'which', option: 'D1.tradition', answer: 'i-can-tradition' },
    difference: [
      'In Case A the cannery closes and the text says that we are one people, and that when one of our towns is hollowed out the whole nation is smaller. It puts the people first, and it says nothing of a faith, a custom or the past. The answer is {a:D1.nation}.',
      'In Case B the text speaks of a supper held for a hundred years in the chapel hall, and says that faith, home life and old custom should guide how the town is rebuilt. It names no people to be put first. The answer is {a:D1.tradition}.',
      'Both texts say "us" and both are fond of the place. The difference is what they hold up: a people in Case A, and in Case B what was handed down to the people.'
    ] },

  /* ---------- Exception: the key's second tie-break ---------- */
  { id: 'exc-faith', kind: 'exception', ledger: 'nation~tradition', looksLike: 'nation', is: 'tradition',
    h: 'One people, and the faith of the fathers',
    link: 'The last card kept the two answers on separate stories. A real text can show both at once. The bishop’s letter speaks for one people, and asks the country to be guided by the faith.',
    case: 'i-x-faithcountry',
    setup: 'The letter begins by speaking for one people with one past, which is what you point to for {a:D1.nation}. Yet the answer for this case is {a:D1.tradition}.',
    prompt: { kind: 'phrase', answer: 'Let the faith of our fathers guide this country' },
    because: [
      'The letter does speak for one people. If that were all it said, it would be {a:D1.nation}. But look at what it says holds that people together, and what it asks the country to follow: the faith of our fathers, the home and the customs of the harvest. Those are old ways, handed down, and its last sentence asks that they guide the country.',
      'So the case shows both answers at once. When it does, the third answer wins. A text that speaks of one people and then says old ways should guide it holds up the old ways as the thing that decides.',
      'There is a way to see why. Take away the words about one people, and the letter still makes sense: it holds up the faith, the home and the harvest customs as the guide. Take away the faith and the customs, and nothing is left to say what the country should follow. The old ways are what the text rests on.'
    ],
    take: [
      'It is worth knowing that this is a decision. In life, love of a people and love of its old ways run into each other all the time, and nobody can draw a sharp line between them. Each text gets one answer, so that two people using the same questions reach the same one and can each say why.',
      'The answer goes this way round for a reason. The later questions for the third answer ask whether the old ways are to be kept or put back, and that is what a text like this one is about. If the letter were given the second answer, those questions would drop out of view.'
    ] },

  /* ---------- Exception: the key's third tie-break ---------- */
  { id: 'exc-loomhands', kind: 'exception', ledger: 'class~tradition', looksLike: 'tradition', is: 'class',
    h: 'Old customs mourned, and the owners blamed',
    link: 'The last card showed old ways winning over a people. They do not win over everything. Here is a text that holds up old customs and also sets working people against owners.',
    case: 'i-x-loomhands',
    setup: 'The newsletter holds up the chapel, the Sunday rest and the harvest supper, handed down by the loom hands before them, and says they should guide the town. That is what you point to for {a:D1.tradition}. Yet the answer for this case is {a:D1.class}.',
    prompt: { kind: 'phrase', answer: 'Those who work the looms and those who own the mill want different things, and we stand with the loom hands' },
    because: [
      'The newsletter does hold up old customs as the guide. If that were all it said, it would be {a:D1.tradition}. But it goes on to say that the mill’s owners cut the hours that let the loom hands keep those customs, and that "those who work the looms and those who own the mill want different things, and we stand with the loom hands". That is working people set against owners, with the text on the workers’ side.',
      'So the case shows both answers at once. When it does, the first answer wins. The customs are in the text, but what the text does with them is argue for the loom hands against the owners.',
      'The answer goes this way round for a reason. If the newsletter were given {a:D1.tradition}, the owners and the loom hands would drop out of the reading, and they are what the newsletter is about.'
    ],
    take: 'It is worth knowing that this is a decision. In life, a text can mourn what was handed down and blame owners in the same breath, and nobody can draw a sharp line between the two. Each text gets one answer, so that two people using the same questions reach the same one and can each say why.' }
]);

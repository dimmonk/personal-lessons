// Political Ideologies, Unit Three, part three (first half): the two names that set ordinary people against a few at the top.

FC.cards('ideology', 'u3', [

  /* ---------- National populism ---------- */
  { id: 'meet-natpop', kind: 'meet', outcome: 'natpop',
    link: 'Every text so far has spoken for the whole nation as one. A text about a people can also set its ordinary members against a few at the top. Here is one.',
    case: 'n-natpop-steel', mark: 'N1',
    strip: [
      'Two groups are in the text. One is the ordinary people: those who built the steelworks and now lose the jobs. The other is a few at the top: "a handful of ministers and bankers" who decided without asking.',
      'The text is on the side of the first group, and it is angry at the second.',
      'It also says what the country should have: a steelworks that belongs to the country, and jobs that stay in it. That is the nation\'s industry put first.',
      'The way to get it is by an election: "Vote for us in March".'
    ],
    explain: [
      'In the anniversary speech nobody inside the country was the other side. Here someone is: a small group at the top, set against everyone else. This kind of group has a name, {t:elite}. The text never says that the group is foreign or another people. It says that the group is at the top and has used its place against the people below.',
      'Look at how the first group is described. It is ordinary people, and it is the country\'s own: "A Brevian steelworks should belong to Brevia". The text speaks for a people marked out by its country, sets it against those at the top, and wants the country\'s industry put first.',
      'Why would a speaker do this? It gives anger somewhere to land. Hard times are easier to bear if somebody can be blamed, and it is a short step from "we have been ignored" to "give us the country back".'
    ],
    feature: { step: 'N1', option: 'elitenation' },
    name: 'The name for this is {o:natpop}. The name has two halves. The "national" half says that the nation\'s borders, culture or industry come first. The "populism" half says that ordinary people are set against a few at the top. Both halves have to be in the text.' },

  { id: 'again-natpop', kind: 'again', outcome: 'natpop',
    link: 'The steelworks leaflet gave you what to point to, from one case: {needs:natpop}. Here is a second case with a different story.',
    first: 'n-natpop-steel', second: 'n-natpop-grain', step: 'N1',
    instruction: 'Find what the two cases share. Ignore the story (a steelworks, grain). Look at the second half of what you point to: which words say what the country should have, in its own hands?',
    prompt: { kind: 'phrase', answer: "Calder's farms should feed Calder" },
    shared: [
      'Both texts have the same two halves. In each, ordinary people are set against a few at the top: ministers and bankers who sold the works, ministers and importers who let the farms go under. And in each, the text says what the country should have: a steelworks that belongs to Brevia, farms that feed Calder.',
      'In both, the way to get it is a vote: "Vote for us in March", "vote for us to do it". Neither asks for the vote to go.',
      'The two stories share nothing else, so this holds wherever a text sets a country\'s ordinary people against a few at the top and also puts the country\'s borders, culture or industry first. That is what {o:natpop} names.'
    ] },

  { id: 'portrait-natpop', kind: 'portrait', outcome: 'natpop',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:natpop} in real life, where nobody marks the words for you.',
    typical: [
      'Two sides: "the people" and "them". The people is ordinary, hard-working and ignored. "Them" is a few at the top: politicians, officials, bankers, the press, people who look abroad.',
      'A grievance comes first: a closing, a price, a law passed without asking.',
      'Then comes a remedy that puts the nation first: its borders, its culture, its industry. "Our farms", "our language", "our jobs", "give us back our country".',
      'It usually says that the voters have been tricked or ignored, so the remedy is to vote the few out. The election is the tool.',
      'It speaks of the people as one voice ("the real people") and may call its opponents traitors. It does not ask for the vote to be taken away. If it did, it would be another name.'
    ],
    not: 'Anger at a few at the top is not enough for this name, and neither is love of one\'s country. A text that speaks for everyone in the country with nobody named as the other side is {o:nationalism}. A text that is angry at those at the top and adds no word about what the country should have is a name of its own.',
    wild: ['"The people have been ignored by the people at the top."', '"Our farms, our jobs, our country."', '"They sold us out."', '"Give us back our country."', '"Put our own people first."'],
    self: 'In your own life it is the leaflet that blames the ministry for a closing and asks you to keep the work at home, the column that says the capital has forgotten the towns, or the campaign poster that promises to put our own first.',
    ask: '"Who is at the top, what does the text say the country should have, and does it ask for the vote to stay?" If both halves are there and the vote stays, this is the name to look at.' },

  { id: 'check-natpop', kind: 'check', after: 'natpop',
    case: 'n-natpop-radio',
    ask: { type: 'option', step: 'N1', among: ['whole', 'elitenation'] } },

  /* ---------- Populism with nothing attached ---------- */
  { id: 'meet-pop', kind: 'meet', outcome: 'pop',
    link: 'The last name set ordinary people against a few at the top, and then said what the country should have. A text can stop after the first half.',
    case: 'n-pop-podcast', mark: 'N1',
    strip: [
      'The same two groups as before: ordinary people, and a few at the top ("the bankers, the ministers, the ones who always land on their feet").',
      'The text is on the side of the first group, and angry at the second.',
      'Then it stops. It does not say what the country should have: nothing about borders, culture or industry, and nothing about any people being above another.',
      'Its only remedy is the vote: "On polling day, every ordinary person in Tolvar has the power to do it."'
    ],
    explain: [
      'Put this beside the steelworks leaflet. Both set ordinary people against a few at the top. The leaflet went on to say what the country should have, a steelworks that belongs to the country. This text does not. Its whole message is that ordinary people should throw the few at the top out.',
      'This is the thin case: a text that has the two groups and nothing else. It is very common. A slogan such as "they have had their turn, now throw them out" says whom it is angry at and no more. The key gives it a name of its own, so that it is not forced into a name that needs more.'
    ],
    feature: { step: 'N1', option: 'eliteonly' },
    name: 'The name for this is {o:pop}. "Populism" means setting ordinary people against a few at the top. "With nothing attached" says that nothing else is joined to it: no borders, culture or industry to put first, and no ranking of peoples. When a text does attach one of those things, it has another name.' },

  { id: 'again-pop', kind: 'again', outcome: 'pop',
    link: 'The podcast gave you what to point to, from one case: {needs:pop}. Here is a second case with a different story.',
    first: 'n-pop-podcast', second: 'n-pop-ward', step: 'N1',
    instruction: 'Find what the two cases share. Ignore the story (a podcast, a hospital). Look at one thing only: which words name the few at the top?',
    prompt: { kind: 'phrase', answer: 'The directors at the top of the health service have gone on, year after year, paying themselves from the public purse while the people on the wards wait' },
    shared: [
      'Both texts set ordinary people against a few at the top: "the bankers, the ministers", "the directors at the top of the health service". In both, the ordinary people pay and the few collect. And in both, the remedy is to vote the few out.',
      'Neither says what the country should have. There is nothing about borders, culture or industry in either, and nobody is ranked above anybody. The two stories share nothing else, so this holds wherever a text is angry at a few at the top on behalf of ordinary people, and stops there. That is what {o:pop} names.'
    ] }
]);

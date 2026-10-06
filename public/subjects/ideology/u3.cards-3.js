// Political Ideologies, Unit Three, part three (first half): the two names that set ordinary people against a few at the top.

FC.cards('ideology', 'u3', [

  { id: 'meet-natpop', kind: 'meet', outcome: 'natpop',
    link: 'Every text so far has spoken for the whole nation as one. A text about a people can also set its ordinary members against a few at the top.',
    case: 'n-natpop-steel', mark: 'N1',
    strip: [
      'Two groups are in the text. One is the ordinary people: those who built the steelworks and now lose the jobs. The other is a few at the top: "a handful of ministers and bankers" who decided without asking.',
      'The text is on the side of the first group, and it is angry at the second.',
      'It also says what the country should have: a steelworks that belongs to the country, and jobs that stay in it. That is the nation\'s industry put first.',
      'The way to get it is by an election: "Vote for us in March".'
    ],
    explain: [
      'In the anniversary speech nobody inside the country was the other side. Here someone is: a small group at the top, set against everyone else. That kind of group is an {t:elite}. The text never says the group is foreign. It says the group is at the top and has used its place against the people below.',
      'The first group is ordinary people, and it is the country\'s own: "A Brevian steelworks should belong to Brevia". The text speaks for a people marked out by its country, sets it against those at the top, and wants the country\'s industry put first.'
    ],
    feature: { step: 'N1', option: 'elitenation' },
    name: 'The name for this is {o:natpop}. The "national" half says that the nation\'s borders, culture or industry come first. The "populism" half says that ordinary people are set against a few at the top. Both halves have to be in the text.' },

  { id: 'check-natpop', kind: 'check', after: 'natpop',
    case: 'n-natpop-radio',
    ask: { type: 'option', step: 'N1', among: ['whole', 'elitenation'] } },

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
      'Put this beside the steelworks leaflet. Both set ordinary people against a few at the top. The leaflet went on to say what the country should have. This text does not: its whole message is that ordinary people should throw the few at the top out.',
      'This thin case is very common. A slogan such as "they have had their turn, now throw them out" says whom it is angry at and no more. It has a name of its own, so that it is not forced into a name that needs more.'
    ],
    feature: { step: 'N1', option: 'eliteonly' },
    name: 'The name for this is {o:pop}. "Populism" means setting ordinary people against a few at the top. "With nothing attached" says that nothing else is joined to it: no borders, culture or industry to put first, and no ranking of peoples. When a text does attach one of those things, it has another name.' }
]);

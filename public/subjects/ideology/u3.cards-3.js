// Political Ideologies, Unit Three, part three (first half): the two names that set ordinary people against a few at the top.

FC.cards('ideology', 'u3', [

  { id: 'meet-natpop', kind: 'meet', outcome: 'natpop',
    link: 'Every speech so far spoke for the whole nation as one. Now a leaflet that splits the country in two.',
    case: 'n-natpop-steel', mark: 'N1',
    explain: [
      'This leaflet does not speak for everyone. It names two sides: the ordinary people who built the steelworks and now lose the jobs, and “a handful of ministers and bankers” who sold the works without asking. It is on the side of the first and angry at the second. A small group at the top like that is called an {t:elite}, and these ones are inside the country, not foreigners.',
      'It also says what the country should have: “A Brevian steelworks should belong to Brevia.” That is the nation’s own industry put first. And the way to win it back is an election: “Vote for us in March.”'
    ],
    spot: [
      { do: 'Find the two sides: the people who built the works, and “a handful of ministers and bankers”.', why: 'In {o:nationalism} nobody inside the country was the other side.' },
      { do: 'Find what the country should have: “A Brevian steelworks should belong to Brevia, and its jobs should be Brevian jobs.”', why: 'That puts the nation’s own industry, culture or borders first.' },
      { do: 'Check what it wants done about voting: “Vote for us in March”.', why: 'The vote is how the few at the top get removed, so it stays.' }
    ],
    feature: { step: 'N1', option: 'elitenation' },
    name: 'This is {o:natpop}. The “national” half means the nation’s industry, culture or borders come first. The “populist” half means ordinary people against a few at the top. Both halves have to be in the text.' },

  { id: 'check-natpop', kind: 'check', after: 'natpop',
    case: 'n-natpop-radio',
    ask: { type: 'option', step: 'N1', among: ['whole', 'elitenation'] } },

  { id: 'meet-pop', kind: 'meet', outcome: 'pop',
    link: 'The steelworks leaflet was angry at a few at the top, then said what the country should have. A text can stop after the anger.',
    case: 'n-pop-podcast', mark: 'N1',
    explain: [
      'It has the same two sides as the steelworks leaflet: ordinary people, and “the bankers, the ministers, the ones who always land on their feet”. It is angry at the second group and on the side of the first. Then it stops: nothing about the country’s borders, culture or industry, and nothing about any people being above another. Its only plan is the vote: “On polling day, every ordinary person in Tolvar has the power to do it.”',
      'This bare version is very common. A slogan like “they’ve had their turn, now throw them out” says who it is angry at and no more. It has a name of its own so that it does not get forced into a name that needs more.'
    ],
    spot: [
      { do: 'Find the two sides: ordinary people, and “the bankers, the ministers”.', why: 'These are the same two sides as in {o:natpop}.' },
      { do: 'Look for what the country should have: there is nothing about borders, culture or industry.', why: 'If the text asked for any of that, it would be {o:natpop}.' },
      { do: 'Check the plan: “On polling day, every ordinary person in Tolvar has the power to do it.”', why: 'The vote stays in place.' }
    ],
    feature: { step: 'N1', option: 'eliteonly' },
    name: 'This is {o:pop}. It means ordinary people set against a few at the top, with nothing else added. If the text adds anything more, it has a different name.' }
]);

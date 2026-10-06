// Political Ideologies, Unit Three: drill cases for the second stage: the whole route, cases whose story points the wrong way.
// Every text is invented. No person, party, country or event is real.

FC.cases('ideology', 'u3', [

  { id: 'n-rt-parade', use: 'drill', tier: 'misleading', setting: 'borders', topic: 'a military parade on the border road', echo: 'n-rally',
    text: "From a speech by the president of Vessany at a military parade on the border road, with banners and drums: 'Our sons and daughters stand here in rows, as one. We have one flag, one anthem and one will to defend this country, and I tell the world that we will not be pushed. Those at home who say we are wrong are free to say so, and parliament will hear them.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { D1: 'one will to defend this country',
            N1: 'Our sons and daughters stand here in rows, as one. We have one flag, one anthem and one will to defend this country',
            N2: 'Those at home who say we are wrong are free to say so, and parliament will hear them' },
    reason: { D1: 'The president puts one country first: {cue:D1}.',
              N1: 'He speaks for everyone, the whole country in rows, as one: {cue:N1}. Nobody inside it is named as the other side.',
              N2: 'Critics at home are free to speak and parliament will hear them: {cue:N2}. The text leaves the right to disagree in place, whatever the banners and drums suggest.' },
    not: { outcome: 'fasc', why: '{o:fasc} would also speak of one will, and the parade can bring it to mind. But it would push critics and parliament aside. This speech says they may speak and will be heard.' } },

  { id: 'n-rt-letter', use: 'drill', tier: 'misleading', setting: 'town', topic: 'a polite letter to the citizens', echo: 'n-anniversary',
    text: "From a letter to the citizens of Corvale: 'We are one people, Corvale, and we love our country as one household. In the interest of unity the Movement has asked the other parties to retire from public life, the newspapers to print only the Movement's news, and the schools to teach nothing against it. We ask this gently, and we expect it to be done.'",
    outcome: 'fasc', route: { D1: ['nation'], N1: ['whole'], N2: ['aside'] },
    cues: { D1: 'We are one people, Corvale, and we love our country as one household',
            N1: 'We are one people, Corvale, and we love our country as one household',
            N2: "the Movement has asked the other parties to retire from public life, the newspapers to print only the Movement's news" },
    reason: { D1: 'The letter puts one people first: {cue:D1}.',
              N1: 'It speaks for all of Corvale as one household: {cue:N1}. Nobody inside it is named as the other side.',
              N2: 'The other parties are to retire and the newspapers are to print only the Movement\'s news: {cue:N2}. The tone is gentle, and it still takes away the say of everyone who disagrees.' },
    not: { outcome: 'nationalism', why: '{o:nationalism} would speak for everyone in the same warm way and leave other parties and newspapers alone. A gentle tone does not change what the letter asks for.' } },
]);

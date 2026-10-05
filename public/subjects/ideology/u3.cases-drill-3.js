// Political Ideologies, Unit Three: the last route cases (the ones whose story points the wrong way) and the reverse items of
// stage two (one for each name).
// echo names a teaching case whose story this one resembles while its name differs: the feedback says so, which is how the
// "does it look like a case you know?" second look is practised. also lists an answer the case shows as well as its own, which
// loses to its own by the key's tie-break. A reverse item gives the name and asks what you would expect: every choice is what
// one of the five names sounds like (voice), so no choice is a false statement.

FC.cases('ideology', 'u3', [

  /* ---------- Misleading route cases ---------- */
  { id: 'n-rt-parade', use: 'drill', tier: 'misleading', setting: 'borders', topic: 'a military parade on the border road', echo: 'n-rally',
    text: "From a speech by the president of Vessany at a military parade on the border road, with banners and drums: 'Our sons and daughters stand here in rows, as one. We have one flag, one anthem and one will to defend this country, and I tell the world that we will not be pushed. Those at home who say we are wrong are free to say so, and parliament will hear them.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { D1: 'one will to defend this country',
            N1: 'Our sons and daughters stand here in rows, as one. We have one flag, one anthem and one will to defend this country',
            N2: 'Those at home who say we are wrong are free to say so, and parliament will hear them' },
    reason: { D1: 'The president puts one country first: {cue:D1}.',
              N1: 'He speaks for everyone, the whole country in rows, as one: {cue:N1}. Nobody inside it is named as the other side.',
              N2: 'Critics at home are free to speak and parliament will hear them: {cue:N2}. The text leaves the right to disagree in place, whatever the banners and drums suggest.' },
    not: { outcome: 'fasc', why: '{o:fasc} would also speak of one will, and the parade can bring it to mind. But it would push critics and parliament aside. This speech says they may speak and will be heard.' },
    wouldChange: 'If the president had added that the critics would be silenced, the answer to the second question would change and the name would be {o:fasc}.' },

  { id: 'n-rt-letter', use: 'drill', tier: 'misleading', setting: 'town', topic: 'a polite letter to the citizens', echo: 'n-anniversary',
    text: "From a letter to the citizens of Corvale: 'We are one people, Corvale, and we love our country as one household. In the interest of unity the Movement has asked the other parties to retire from public life, the newspapers to print only the Movement's news, and the schools to teach nothing against it. We ask this gently, and we expect it to be done.'",
    outcome: 'fasc', route: { D1: ['nation'], N1: ['whole'], N2: ['aside'] },
    cues: { D1: 'We are one people, Corvale, and we love our country as one household',
            N1: 'We are one people, Corvale, and we love our country as one household',
            N2: "the Movement has asked the other parties to retire from public life, the newspapers to print only the Movement's news" },
    reason: { D1: 'The letter puts one people first: {cue:D1}.',
              N1: 'It speaks for all of Corvale as one household: {cue:N1}. Nobody inside it is named as the other side.',
              N2: 'The other parties are to retire and the newspapers are to print only the Movement\'s news: {cue:N2}. The tone is gentle, and it still takes away the say of everyone who disagrees.' },
    not: { outcome: 'nationalism', why: '{o:nationalism} would speak for everyone in the same warm way and leave other parties and newspapers alone. A gentle tone does not change what the letter asks for.' },
    wouldChange: 'If the letter asked only for people to join in, and left the other parties and newspapers alone, it would be {o:nationalism}.' },

  { id: 'n-rt-unity', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a call for unity and a ladder', echo: 'n-anniversary', also: ['whole'],
    text: "From a speech by the leader of the Sword League in Calder: 'We are one people, the whole nation of Calder, and we will stand as one. The Calderans of the old blood are the nation, and the later peoples are guests who must know their lower place. We will win the election, and then we will write that into the law.'",
    outcome: 'nazi', route: { D1: ['nation'], N1: ['blood'], N2: ['keep'] },
    cues: { D1: 'The Calderans of the old blood are the nation',
            N1: 'The Calderans of the old blood are the nation, and the later peoples are guests who must know their lower place',
            N2: 'We will win the election, and then we will write that into the law' },
    reason: { D1: 'The speech puts one people first, marked out by its blood: {cue:D1}.',
              N1: 'It ranks peoples: the old blood is "the nation" and the later peoples must "know their lower place": {cue:N1}. It also speaks of "the whole nation of Calder" standing as one, which is another answer, but a text that ranks peoples by blood gets {a:N1.blood}.',
              N2: 'The League says it will win the election: {cue:N2}. The vote is left in place, and for this name that changes nothing.' },
    not: { outcome: 'nationalism', why: '{o:nationalism} speaks for everyone in the country as equals. This speech uses the same words, "one people", and then says who is the nation and who must know a lower place.' },
    wouldChange: 'If the second sentence were dropped, so that nobody was ranked, the speech would speak for the whole nation as one and leave the election alone, and the name would be {o:nationalism}.' },

  { id: 'n-rt-budget', use: 'drill', tier: 'misleading', setting: 'money', topic: 'a budget set by agencies abroad', echo: 'n-schoolbooks', also: ['whole'],
    text: "From a speech by Dana Veir of the Common List in Tolvar: 'We are one people, all of us who live in Tolvar, and one people should be run for itself. The ministers and the rating agencies abroad have been choosing our budget for years. Our budget should be set at home, for our own people, and our own industry should come first. Put us in parliament and we will do it.'",
    outcome: 'natpop', route: { D1: ['nation'], N1: ['elitenation'], N2: ['keep'] },
    cues: { D1: 'one people should be run for itself',
            N1: ['The ministers and the rating agencies abroad have been choosing our budget for years', 'our own industry should come first'],
            N2: 'Put us in parliament and we will do it' },
    reason: { D1: 'The speech puts one people first: {cue:D1}.',
              N1: 'It also names a few at the top, the ministers and the agencies, and wants the country\'s own industry first: {cue:N1}. The opening words, "one people", are the answer {a:N1.whole}, but when a text also sets the people against a few at the top, the answer is {a:N1.elitenation}.',
              N2: 'The remedy is a seat in parliament: {cue:N2}. The vote stays.' },
    not: { outcome: 'nationalism', why: '{o:nationalism} would speak for everyone with nobody named as the other side. This speech names the ministers and the agencies as the ones who have taken the people\'s budget.' },
    wouldChange: 'If the speech dropped the ministers and the agencies and spoke only of the nation as one, the name would be {o:nationalism}.' },

  /* ---------- Reverse items: the name is given, the learner says what to expect ---------- */
  { id: 'n-rev-nationalism', use: 'drill', kind: 'reverse', outcome: 'nationalism', expect: 'hear',
    options: [
      { text: '"Whatever you voted for, this is our country, and the voters will choose again in the spring."', voice: 'nationalism' },
      { text: '"We are one people with one will, and from tomorrow the other parties are closed."', voice: 'fasc' },
      { text: '"The people at the top sold our steelworks, and we will take them back."', voice: 'natpop' },
      { text: '"The ones in charge have been playing the rest of us for years. Throw them out."', voice: 'pop' },
      { text: '"Those of the old blood are higher than the later peoples."', voice: 'nazi' }
    ],
    why: 'It speaks for everyone in the country as one and leaves the vote in place ("the voters will choose again").' },

  { id: 'n-rev-fasc', use: 'drill', kind: 'reverse', outcome: 'fasc', expect: 'find',
    options: [
      { text: 'A speech to the whole nation that says the opposition has no more place and the papers that print its views will close.', voice: 'fasc' },
      { text: 'A speech to the whole nation that says parliament will debate the budget and the opposition will have its say.', voice: 'nationalism' },
      { text: 'A leaflet that says a few ministers and bankers sold the mills abroad and asks for votes to take them back.', voice: 'natpop' },
      { text: 'A post that says the people at the top are crooks and everyone should vote them out.', voice: 'pop' },
      { text: 'A pamphlet that says the old blood is higher than the later peoples.', voice: 'nazi' }
    ],
    why: 'It speaks for the nation as one and pushes the vote and the right to object aside, so that one voice is left.' },

  { id: 'n-rev-natpop', use: 'drill', kind: 'reverse', outcome: 'natpop', expect: 'hear',
    options: [
      { text: '"The ministers and the importers have let our farms go under. Our farms should feed our country. Vote for us."', voice: 'natpop' },
      { text: '"We are one country, and we will carry this together."', voice: 'nationalism' },
      { text: '"The ones at the top have robbed us for years. Vote them out."', voice: 'pop' },
      { text: '"One people, one will, one leader."', voice: 'fasc' },
      { text: '"Blood decides what a people can do."', voice: 'nazi' }
    ],
    why: 'It sets ordinary people against a few at the top ("the ministers and the importers") and says what the country should have ("our farms should feed our country").' },

  { id: 'n-rev-pop', use: 'drill', kind: 'reverse', outcome: 'pop', expect: 'find',
    options: [
      { text: 'A post that says those at the top have rewarded themselves for years and asks everyone to vote them out, and says nothing more.', voice: 'pop' },
      { text: 'A post that says those at the top sold the country\'s mills abroad, and that the mills should be made to serve the country again.', voice: 'natpop' },
      { text: 'A speech that says the whole nation stands together whatever its politics.', voice: 'nationalism' },
      { text: 'An order that closes the other parties and the papers that print their views.', voice: 'fasc' },
      { text: 'A flyer that says the first blood is born to lead.', voice: 'nazi' }
    ],
    why: 'It sets ordinary people against a few at the top and stops there: no borders, culture or industry to put first, and no ranking of peoples.' },

  { id: 'n-rev-nazi', use: 'drill', kind: 'reverse', outcome: 'nazi', expect: 'hear',
    options: [
      { text: '"The later peoples are born to follow, and the first blood is born to lead."', voice: 'nazi' },
      { text: '"The ministers in the capital and the bankers have sold us out. Vote them out."', voice: 'pop' },
      { text: '"We are one people and the Leader is its voice. The old parties are dissolved."', voice: 'fasc' },
      { text: '"Our farms should feed our country, and the ministers have let them go under."', voice: 'natpop' },
      { text: '"We stand together, and the election is in October."', voice: 'nationalism' }
    ],
    why: 'It sorts people by blood into peoples ranked higher and lower ("born to lead", "born to follow"), with its own on top.' }
]);

// Political Ideologies, Unit Three: drill cases for stages one and two. None of these appears in a card.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for this case and says why it fails.
// Every text is invented. Stage one gives the key's answers and asks for the name, so those cases carry both unit
// questions. Stage two asks one question alone.

FC.cases('ideology', 'u3', [

  /* ---------- Stage one: the answers are shown, the learner gives the name ---------- */
  { id: 'n-nm-nat', use: 'drill', tier: 'clean', setting: 'housing', topic: 'a national housing plan',
    text: "Housing minister Aldous, announcing a plan to build homes in every region of Brevia: 'Whether you live on the coast or in the hills, whatever you do for a living, this plan is for all of us. Brevia is one people, and it looks after its own. The plan goes to parliament for a vote, and the opposition may change every line of it.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { D1: 'Brevia is one people, and it looks after its own',
            N1: 'Whether you live on the coast or in the hills, whatever you do for a living, this plan is for all of us',
            N2: 'The plan goes to parliament for a vote, and the opposition may change every line of it' },
    reason: { N1: 'The minister speaks for everyone, in every region and every trade, as one: {cue:N1}. Nobody in the country is named as the other side.',
              N2: 'The plan is handed to parliament, and the opposition may change every line: {cue:N2}. The text leaves the vote and the opposition their say.' },
    not: { outcome: 'fasc', why: '{o:fasc} would also speak for everyone as one, but it would take parliament and the opposition their say away. Here the plan goes to them.' } },

  { id: 'n-nm-fasc', use: 'drill', tier: 'clean', setting: 'housing', topic: 'a decree on homes',
    text: "Decree of the Movement for Brevia: 'Brevia is one people with one will. Homes will be built in every region, and the Leader alone will decide where. The councils that argue about the plan are dissolved today, and anyone who speaks against it will answer to the Movement.'",
    outcome: 'fasc', route: { D1: ['nation'], N1: ['whole'], N2: ['aside'] },
    cues: { D1: 'Brevia is one people with one will',
            N1: 'Brevia is one people with one will',
            N2: 'The councils that argue about the plan are dissolved today, and anyone who speaks against it will answer to the Movement' },
    reason: { N1: 'The decree speaks for the whole country as one: {cue:N1}. Nobody inside it is named as the other side, and nobody is ranked by blood.',
              N2: 'The councils are closed and critics are threatened: {cue:N2}. That takes away the say of everyone who disagrees, so that one voice is left.' },
    not: { outcome: 'nationalism', why: '{o:nationalism} would speak for everyone in the same way but leave the councils and the right to speak against the plan in place. Here they are dissolved.' } },

  { id: 'n-nm-natpop', use: 'drill', tier: 'clean', setting: 'work', topic: 'a mill moved abroad',
    text: "From a rally in Calder: 'The ministers and their friends in finance have let the mill be moved abroad, and the people of this town are left with nothing. A Calder mill should make Calder cloth for Calder. Send us to parliament on Sunday and we will bring it back.'",
    outcome: 'natpop', route: { D1: ['nation'], N1: ['elitenation'], N2: ['keep'] },
    cues: { D1: 'A Calder mill should make Calder cloth for Calder',
            N1: ['The ministers and their friends in finance have let the mill be moved abroad', 'A Calder mill should make Calder cloth for Calder'],
            N2: 'Send us to parliament on Sunday and we will bring it back' },
    reason: { N1: 'The text sets the town\'s people against a few at the top, the ministers and their friends: {cue:N1}. It also says what the country should have: its own mill making its own cloth.',
              N2: 'The remedy is a vote: {cue:N2}. The text asks to be sent to parliament and does not ask for anyone\'s say to be taken away.' },
    not: { outcome: 'pop', why: '{o:pop} would stop at anger at the few at the top. This text goes on to say that the country\'s own industry should come first: a mill that makes Calder cloth for Calder.' } },

  { id: 'n-nm-pop', use: 'drill', tier: 'clean', setting: 'town', topic: 'ministers rewarding themselves',
    text: "From a rally in Calder: 'The ministers and their friends in finance have rewarded themselves again, and the people of this country are left with nothing. They look after each other and nobody looks after us. Send us to parliament on Sunday and we will throw them out.'",
    outcome: 'pop', route: { D1: ['nation'], N1: ['eliteonly'], N2: ['keep'] },
    cues: { D1: 'the people of this country are left with nothing',
            N1: ['The ministers and their friends in finance have rewarded themselves again', 'They look after each other and nobody looks after us'],
            N2: 'Send us to parliament on Sunday and we will throw them out' },
    reason: { N1: 'The text sets ordinary people against a few at the top: {cue:N1}. It asks for nothing more than getting them out: nothing about the country\'s borders, culture or industry.',
              N2: 'The remedy is a vote: {cue:N2}. Nobody\'s say is to be taken away.' },
    not: { outcome: 'natpop', why: '{o:natpop} would go on to say what the country\'s industry, culture or borders should be. This text names no such thing, and adds nothing to its anger at those at the top.' } },

  { id: 'n-nm-fasc2', use: 'drill', tier: 'varied', setting: 'schooling', topic: 'an order to every school',
    text: "Order to all schools in Marren: 'Marren is one people and the Party is its only voice. All teachers will teach that the nation comes before the individual, and the school councils are closed. Parents who complain to the papers will be reported to the Party.'",
    outcome: 'fasc', route: { D1: ['nation'], N1: ['whole'], N2: ['aside'] },
    cues: { D1: 'Marren is one people and the Party is its only voice',
            N1: 'Marren is one people and the Party is its only voice',
            N2: 'the school councils are closed. Parents who complain to the papers will be reported to the Party' },
    reason: { N1: 'The order speaks for the whole of Marren as one people: {cue:N1}. It ranks no people above another.',
              N2: 'The councils are closed and parents who complain will be reported: {cue:N2}. That takes away the say of those who disagree.' },
    not: { outcome: 'nazi', why: '{o:nazi} would sort people by blood into higher and lower peoples. This order speaks of one people and ranks nobody, so the first question gives {a:N1.whole}.' } },

  { id: 'n-nm-nazi', use: 'drill', tier: 'varied', setting: 'town', topic: 'a leaflet about the order of descent',
    text: "From the leaflet of the Hammer League: 'The old blood of Vessany made this country, and the newcomers' blood is lower. The League will set the old blood above them in law. Vote for the League in the spring, and you vote for the order of blood.'",
    outcome: 'nazi', route: { D1: ['nation'], N1: ['blood'], N2: ['keep'] },
    cues: { D1: 'The old blood of Vessany made this country',
            N1: "the newcomers' blood is lower. The League will set the old blood above them in law",
            N2: 'Vote for the League in the spring' },
    reason: { N1: 'The text sorts people by blood and places its own above the others: {cue:N1}. That is a ranking of peoples.',
              N2: 'The League asks for votes: {cue:N2}. It does not ask for the vote to be taken away. For this name the ranking has already decided, so either answer to this question leaves it.' },
    not: { outcome: 'fasc', why: '{o:fasc} speaks for the nation as one, or for its people against a few at the top, without ranking peoples by blood. This text ranks them, and the first question settles it.' } },

  /* ---------- Stage two: one question alone, on a new case ---------- */
  { id: 'n-pc-whole', use: 'drill', tier: 'clean', setting: 'borders', topic: 'a new passport',
    text: "The interior minister, unveiling the new national passport: 'This passport belongs to every one of us, whatever we do, wherever we live. Whoever you are in this country, it says the same thing about all of us: one people. Next year's election will decide who issues the next one.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { N1: 'This passport belongs to every one of us, whatever we do, wherever we live' },
    reason: { N1: 'The minister speaks for everyone, wherever they live and whatever they do, as one: {cue:N1}. Nobody is named as the other side.' },
    not: { outcome: 'natpop', why: '{o:natpop} would set the country\'s ordinary people against a few at the top. Nobody at the top is named here.' } },

  { id: 'n-pc-elitenation', use: 'drill', tier: 'clean', setting: 'money', topic: 'a levy on fishing boats',
    text: "From a pamphlet: 'The ministers in the capital and the bankers who lend to them have taxed our fishing boats off the sea and let foreign trawlers in. Our fish should be landed by our own boats. Take back the harbours at the ballot box.'",
    outcome: 'natpop', route: { D1: ['nation'], N1: ['elitenation'], N2: ['keep'] },
    cues: { N1: ['The ministers in the capital and the bankers who lend to them have taxed our fishing boats off the sea', 'Our fish should be landed by our own boats'] },
    reason: { N1: 'The text sets the country\'s fishing people against a few at the top, the ministers and the bankers, and wants the country\'s own industry put first: {cue:N1}.' },
    not: { outcome: 'pop', why: '{o:pop} would stop at the anger at those at the top. This text goes on to say that our fish should be landed by our own boats, which puts the country\'s industry first.' } },

  { id: 'n-pc-eliteonly', use: 'drill', tier: 'clean', setting: 'town', topic: 'a mayor and a stadium',
    text: "From a protest sign: 'The mayor and the councillors are laughing at us. They built themselves a stadium and cut the buses. Enough. Ordinary people of this country: vote them out.'",
    outcome: 'pop', route: { D1: ['nation'], N1: ['eliteonly'], N2: ['keep'] },
    cues: { N1: ['The mayor and the councillors are laughing at us', 'They built themselves a stadium and cut the buses'] },
    reason: { N1: 'The sign names the mayor and the councillors as the other side, and asks for no more than that: {cue:N1}. It names no borders, culture or industry to put first, and ranks nobody.' },
    not: { outcome: 'natpop', why: '{o:natpop} would add what the country should have: its borders, culture or industry first. The sign adds nothing.' } },

  { id: 'n-pc-blood', use: 'drill', tier: 'varied', setting: 'housing', topic: 'a notice about land and office',
    text: "From a notice of the Sons of the Oak: 'Only those born of the Oak line may hold land or office, because their blood is nobler than the blood of those who came after. The Sons ask the parish to say so in the vote on the ninth.'",
    outcome: 'nazi', route: { D1: ['nation'], N1: ['blood'], N2: ['keep'] },
    cues: { N1: 'their blood is nobler than the blood of those who came after' },
    reason: { N1: 'The notice ranks people by birth, its own above the rest: {cue:N1}. That is the answer to the first question, whatever it says about the vote.' },
    not: { outcome: 'nationalism', why: '{o:nationalism} would speak for everyone in the country as equals. This notice divides them into higher and lower by blood.' } },

  { id: 'n-pc-aside', use: 'drill', tier: 'clean', setting: 'town', topic: 'a notice closing assemblies',
    text: "From a notice in the town square of Tolvar: 'Tolvar is one people and the Leader is its voice. Assemblies and rival parties are closed from this morning. Those who gather to oppose the Leader will be treated as enemies of the people.'",
    outcome: 'fasc', route: { D1: ['nation'], N1: ['whole'], N2: ['aside'] },
    cues: { N2: 'Assemblies and rival parties are closed from this morning. Those who gather to oppose the Leader will be treated as enemies of the people' },
    reason: { N2: 'The notice closes assemblies and rival parties and treats opponents as enemies: {cue:N2}. That takes away the say of everyone who disagrees.' },
    not: { outcome: 'nationalism', why: '{o:nationalism} would leave the assemblies, the parties and the right to oppose in place.' } },

  { id: 'n-pc-keep', use: 'drill', tier: 'clean', setting: 'health', topic: 'a night clinic cut',
    text: "From a letter to a newspaper: 'The health directors have cut the night clinic to pay themselves. The ordinary patients of this district are being ignored. Come to the vote in May and send a message.'",
    outcome: 'pop', route: { D1: ['nation'], N1: ['eliteonly'], N2: ['keep'] },
    cues: { N2: 'Come to the vote in May and send a message' },
    reason: { N2: 'The letter calls on people to vote: {cue:N2}. It does not ask for the vote, other parties or critics to go.' },
    not: { outcome: 'natpop', why: '{o:natpop} would also say what the country\'s borders, culture or industry should be. This letter says only that those at the top have ignored ordinary patients.' } }
]);

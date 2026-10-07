// Political Ideologies, Unit Three: drill cases for the first stage: one question at a time.
// Every text is invented. No person, party, country or event is real.

FC.cases('ideology', 'u3', [

  { id: 'n-pc-whole', use: 'drill', tier: 'clean', setting: 'borders', topic: 'a new passport',
    text: "The interior minister, unveiling the new national passport: 'This passport belongs to every one of us, whatever we do, wherever we live. Whoever you are in this country, it says the same thing about all of us: one people. Next year's election will decide who issues the next one.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { N1: 'This passport belongs to every one of us, whatever we do, wherever we live' },
    reason: { N1: 'The minister speaks for everyone, wherever they live and whatever they do: {cue:N1}. Nobody is named as the other side.' },
    not: { outcome: 'natpop', why: '{o:natpop} would set ordinary people against a few at the top. Nobody at the top is named here.' } },

  { id: 'n-pc-elitenation', use: 'drill', tier: 'clean', setting: 'money', topic: 'a levy on fishing boats',
    text: "From a pamphlet: 'The ministers in the capital and the bankers who lend to them have taxed our fishing boats off the sea and let foreign trawlers in. Our fish should be landed by our own boats. Take back the harbors at the ballot box.'",
    outcome: 'natpop', route: { D1: ['nation'], N1: ['elitenation'], N2: ['keep'] },
    cues: { N1: ['The ministers in the capital and the bankers who lend to them have taxed our fishing boats off the sea', 'Our fish should be landed by our own boats'] },
    reason: { N1: 'The pamphlet sets the fishing people against a few at the top, the ministers and the bankers, and wants the country\'s own boats first: {cue:N1}.' },
    not: { outcome: 'pop', why: '{o:pop} would stop at the anger. This pamphlet goes on to say our fish should be landed by our own boats, which puts the country\'s industry first.' } },

  { id: 'n-pc-eliteonly', use: 'drill', tier: 'clean', setting: 'town', topic: 'a mayor and a stadium',
    text: "From a protest sign: 'The mayor and the council members are laughing at us. They built themselves a stadium and cut the buses. Enough. Ordinary people of this country: vote them out.'",
    outcome: 'pop', route: { D1: ['nation'], N1: ['eliteonly'], N2: ['keep'] },
    cues: { N1: ['The mayor and the council members are laughing at us', 'They built themselves a stadium and cut the buses'] },
    reason: { N1: 'The sign names the mayor and the council members as the other side, and asks for no more than that: {cue:N1}. It puts no borders, culture or industry first.' },
    not: { outcome: 'natpop', why: '{o:natpop} would add what the country should have, such as its industry first. The sign adds nothing.' } },

  { id: 'n-pc-blood', use: 'drill', tier: 'varied', setting: 'housing', topic: 'a notice about land and office',
    text: "From a notice of the Sons of the Oak: 'Only those born of the Oak line may hold land or office, because their blood is nobler than the blood of those who came after. The Sons ask the town to say so in the vote on the ninth.'",
    outcome: 'nazi', route: { D1: ['nation'], N1: ['blood'], N2: ['keep'] },
    cues: { N1: 'their blood is nobler than the blood of those who came after' },
    reason: { N1: 'The notice ranks people by birth, its own above the rest: {cue:N1}. That settles it, whatever it says about the vote.' },
    not: { outcome: 'nationalism', why: '{o:nationalism} would speak for everyone as equals. This notice ranks people by blood.' } },

  { id: 'n-pc-aside', use: 'drill', tier: 'clean', setting: 'town', topic: 'a notice closing assemblies',
    text: "From a notice in the town square of Tolvar: 'Tolvar is one people and the Leader is its voice. Assemblies and rival parties are closed from this morning. Those who gather to oppose the Leader will be treated as enemies of the people.'",
    outcome: 'fasc', route: { D1: ['nation'], N1: ['whole'], N2: ['aside'] },
    cues: { N2: 'Assemblies and rival parties are closed from this morning. Those who gather to oppose the Leader will be treated as enemies of the people' },
    reason: { N2: 'The notice closes assemblies and rival parties and calls opponents enemies: {cue:N2}. That takes away the say of everyone who disagrees.' },
    not: { outcome: 'nationalism', why: '{o:nationalism} would leave the assemblies, the parties and the right to oppose alone.' } },

  { id: 'n-pc-keep', use: 'drill', tier: 'clean', setting: 'health', topic: 'a night clinic cut',
    text: "From a letter to a newspaper: 'The health directors have cut the night clinic to pay themselves. The ordinary patients of this district are being ignored. Come to the vote in May and send a message.'",
    outcome: 'pop', route: { D1: ['nation'], N1: ['eliteonly'], N2: ['keep'] },
    cues: { N2: 'Come to the vote in May and send a message' },
    reason: { N2: 'The letter asks people to vote: {cue:N2}. It does not ask for the vote, other parties or critics to go.' },
    not: { outcome: 'natpop', why: '{o:natpop} would also say what the country should have, such as its industry first. This letter only says those at the top ignore ordinary patients.' } }
]);

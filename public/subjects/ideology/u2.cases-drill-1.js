// Political Ideologies, Unit Two: drill cases, first stage (piece), first group. One question is asked of each case. All texts are invented.

FC.cases('ideology', 'u2', [

  { id: 'c-p-keep', use: 'drill', tier: 'clean', setting: 'housing', topic: 'apartment-complex cleaners and a law on pay',
    text: "A leaflet from the cleaners on the Elmfield apartment complex: 'The company that owns the apartment complex pays us the least it can, and we are on the side of the cleaners. We do not want the apartment complex taken from the company. We want a law on cleaners' pay, and a tax on the company's rents to pay for night buses for every worker who finishes late.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { C1: "We do not want the apartment complex taken from the company. We want a law on cleaners' pay, and a tax on the company's rents to pay for night buses for every worker who finishes late" },
    reason: { C1: 'The company is to keep the apartment complex, and a law and a tax are asked for to even out the result: {cue:C1}.' },
    not: { outcome: 'demsoc', why: 'The apartment complex is not to be taken from the company. A text that asked for it to be taken and run by the government would be {o:demsoc}.' } },

  { id: 'c-p-none1', use: 'drill', tier: 'clean', setting: 'health', topic: 'ambulance crews and an open letter',
    text: "An open letter from the Tolland ambulance crews: 'The private company that runs our service takes its fee and cuts our rest breaks. We are on the side of the crews. We ask the public to stand with us at the county hall on Saturday.'",
    outcome: 'classonly', route: { D1: ['class'], C1: ['none'], C2: ['none'] },
    cues: { C1: 'We ask the public to stand with us at the county hall on Saturday' },
    reason: { C1: 'Where a plan for the ambulance service would be, the text has only an invitation: {cue:C1}. It says nothing about who should own the service, about taxes, or about how the company gains.' },
    not: { outcome: 'socdem', why: 'The text asks for no law and no tax. A text that asked for those, and left the company its service, would be {o:socdem}.' } },

  { id: 'c-p-public', use: 'drill', tier: 'clean', setting: 'town', topic: 'a water supply for all users',
    text: "From a petition by the Grayfield water workers: 'The company that owns the water supply runs it for its shareholders, and we stand with the people who work its pipes. The water supply should belong to the public, run by the government for everyone.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['none'] },
    cues: { C1: 'The water supply should belong to the public, run by the government for everyone' },
    reason: { C1: 'The water supply is to pass out of the company’s hands to the government: {cue:C1}. That is a handover, not a tax on a company that keeps its pipes.' },
    not: { outcome: 'socdem', why: 'The company does not keep the water supply. A text that left the company its pipes and taxed it would be {o:socdem}.' } }
]);

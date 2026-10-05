// Political Ideologies, Unit Two: drill cases, first stage (name), second half. Varied cases: the same two questions, in new stories,
// some of them angry, some of them saying nothing about one of the two questions.

FC.cases('ideology', 'u2', [

  { id: 'c-n-sd2', use: 'drill', tier: 'varied', setting: 'schooling', topic: 'a teachers’ union and school meals',
    text: "From a letter by the Hollin teachers' union: 'The company that runs the academy chain pays its profits out and pays its teachers late, and we stand with the teachers. The chain can stay as it is. We ask for a law on the pay of teachers and a tax on the chain's profits to fund school meals. We will take this to the voters at the next election.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['vote'] },
    cues: { C1: "The chain can stay as it is. We ask for a law on the pay of teachers and a tax on the chain's profits to fund school meals", C2: 'We will take this to the voters at the next election' },
    reason: { C1: 'The chain stays, and a law and a tax are asked for: {cue:C1}.',
              C2: 'The union will put its case to the voters: {cue:C2}. The change is to come through an election it can lose.' },
    not: { outcome: 'demsoc', why: 'The chain is left with its schools. A text that asked for the schools to be taken from the chain and run by the government would be {o:demsoc}.' } },

  { id: 'c-n-dm2', use: 'drill', tier: 'varied', setting: 'health', topic: 'pharmacies passed to a health service',
    text: "From the Ashgrove pharmacists' guild: 'The chain that owns most pharmacies in the county keeps its prices high and its pharmacists short of staff, and we are on the pharmacists' side. The pharmacies should pass to the county health service, run for the patients and not for the owners.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['none'] },
    cues: { C1: 'The pharmacies should pass to the county health service, run for the patients and not for the owners', C2: 'run for the patients and not for the owners' },
    reason: { C1: 'The pharmacies are to pass out of the chain’s hands to a public service: {cue:C1}.',
              C2: 'The text says nothing about how power is won or held. It ends on who the pharmacies are run for: {cue:C2}. A handover with no word on how is a case of the answer that nothing is said.' },
    not: { outcome: 'socdem', why: 'The pharmacies leave the chain. A text that left the chain its pharmacies and taxed it would be {o:socdem}.' } },

  { id: 'c-n-an2', use: 'drill', tier: 'varied', setting: 'work', topic: 'quarrymen who want no rulers',
    text: "From a notice at the Blackwood quarry: 'The company that owns the quarry pays us by the tonne, and the government pays the police who guard its gate, and we stand with the quarrymen. We want the quarry to belong to those who work it. We want no government at all, and we will not use one. We will run the quarry and the village by agreement among ourselves, in open meetings.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { C1: 'We want the quarry to belong to those who work it', C2: 'We want no government at all, and we will not use one. We will run the quarry and the village by agreement among ourselves, in open meetings' },
    reason: { C1: 'The quarry is to belong to the people who work it: {cue:C1}. Nothing is said about competing.',
              C2: 'The text wants the government gone and says it will not use one: {cue:C2}.' },
    not: { outcome: 'ml', why: 'Both want the workers to take over. This text names no party to hold power, and says it will not use a government. A text that said a party would take power and keep it would be {o:ml}.' } },

  { id: 'c-n-ml2', use: 'drill', tier: 'varied', setting: 'town', topic: 'a tram works and a committee ruling alone',
    text: "From a leaflet of the Vale Tram Works committee: 'The works' owners and the tram builders are on opposite sides, and we are with the builders. There is no use in waiting for the vote. The committee will hold the works and the town by force, and it will rule alone: no other group will be allowed to stand.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['none'], C2: ['seize'] },
    cues: { C1: 'There is no use in waiting for the vote', C2: 'The committee will hold the works and the town by force, and it will rule alone: no other group will be allowed to stand' },
    reason: { C1: 'Where a plan for the works would be, the text has only a remark about the vote: {cue:C1}. It says nothing about who should own the works.',
              C2: 'The committee will hold power by force and rule alone: {cue:C2}. No rival is allowed.' },
    not: { outcome: 'classonly', why: 'The text says nothing about the businesses, but it says the committee will rule alone, and the question about the government names that. A text that said nothing about power as well would be {o:classonly}.' } },

  { id: 'c-n-mx2', use: 'drill', tier: 'varied', setting: 'schooling', topic: 'a college café and what any firm keeps',
    text: "From a student pamphlet at Holm College: 'The college café is run by a firm that pays its staff £9 an hour and sells what they make for the equivalent of £14, once its costs are covered. The £5 goes to the firm's owners. This is not one greedy firm. It is how any firm that pays wages has to work, and the pamphlet is for the staff who work in it.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { C1: 'This is not one greedy firm. It is how any firm that pays wages has to work', C2: 'the pamphlet is for the staff who work in it' },
    reason: { C1: 'The text explains how the owners gain as the way any firm works: {cue:C1}. It asks for nothing to be done with the café.',
              C2: 'The text says nothing about the government or about power. It says who it is for: {cue:C2}.' },
    not: { outcome: 'socdem', why: 'The text asks for no tax, no minimum wage and no service. It only explains. A text that asked for those, and left the firm with its owners, would be {o:socdem}.' } },

  { id: 'c-n-mk2', use: 'drill', tier: 'varied', setting: 'town', topic: 'brewery staff who will buy out the firm by law',
    text: "From the minutes of the Kettle Lane brewery workers: 'The brewery's owners keep the profit. We make the beer. We want the brewery to belong to the people who brew in it, and to go on selling in the open market, setting its own prices and taking the loss if it sells badly. And we will ask the voters for the law that lets us buy the owners out.'",
    outcome: 'mktsoc', route: { D1: ['class'], C1: ['market'], C2: ['vote'] }, also: ['workers'],
    cues: { C1: 'We want the brewery to belong to the people who brew in it, and to go on selling in the open market, setting its own prices and taking the loss if it sells badly', C2: 'we will ask the voters for the law that lets us buy the owners out' },
    reason: { C1: 'The brewery is to belong to the people who brew in it, and to keep selling in the market and risk its losses: {cue:C1}.',
              C2: 'The change is to come through a law the voters are asked for: {cue:C2}.' },
    not: { outcome: 'demsoc', why: 'The text also gives the brewery to its workers, by a vote, which {o:demsoc} asks for. But it keeps the brewery selling in the open market and taking its own losses, and when a text shows both, the more exact answer decides.' } },

  { id: 'c-n-co2', use: 'drill', tier: 'varied', setting: 'borders', topic: 'crane drivers and an angry picket call',
    text: "A post by the crane drivers at the Gannet Quay container terminal: 'The terminal's owners are paid whatever happens, and the crane drivers are paid only when there are ships, and we are with the drivers. The owners are liars and thieves and we will not forget how they treated us. Come to the picket on the quay at six.'",
    outcome: 'classonly', route: { D1: ['class'], C1: ['none'], C2: ['none'] },
    cues: { C1: 'Come to the picket on the quay at six', C2: 'the picket on the quay at six' },
    reason: { C1: 'Where a plan for the terminal would be, the text has an invitation to a picket: {cue:C1}. It says a good deal about the owners and nothing about who should own the terminal.',
              C2: 'The text says nothing about power or the government. It asks the reader to come to {cue:C2}.' },
    not: { outcome: 'marx', why: 'The text is angry about what these owners did. It does not explain how any owner gains. A text that explained how owners gain from the work, as the way the arrangement works, would be {o:marx}.' } }
]);

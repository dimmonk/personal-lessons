// Political Ideologies, Unit Two: drill cases, second stage (route), varied cases. All texts are invented.

FC.cases('ideology', 'u2', [

  { id: 'c-r-dm1', use: 'drill', tier: 'varied', setting: 'health', topic: 'hospital porters and services for the health service',
    text: "From a resolution of the Elbury hospital porters: 'The company that owns the hospital's laundry and supplies runs them for its owners, and the porters carry the load, and we stand with the porters. These services should pass to the health service and be run for the patients. We will persuade the council at the coming election and abide by what the voters decide.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['vote'] },
    cues: { D1: 'The company that owns the hospital\'s laundry and supplies runs them for its owners, and the porters carry the load, and we stand with the porters', C1: 'These services should pass to the health service and be run for the patients', C2: 'We will persuade the council at the coming election and abide by what the voters decide' },
    reason: { D1: 'The text sets the porters against the company that owns the services, and stands with the porters: {cue:D1}.',
              C1: 'The services are to pass out of the company’s hands to the health service: {cue:C1}.',
              C2: 'The porters will abide by the voters’ decision: {cue:C2}. The change is to come through an election they can lose.' },
    not: { outcome: 'socdem', why: 'The services leave the company. A text that left the company its services and taxed it would be {o:socdem}.' } },

  { id: 'c-r-ml1', use: 'drill', tier: 'varied', setting: 'borders', topic: 'a port strike committee holding the port',
    text: "From a decree-in-waiting of the Sorrel Port strike committee: 'The shipowners and the dockers cannot share a port, and the committee stands with the dockers. The committee will seize the port and the customs house, and it will hold them. Other parties will be banned from the harbor and the town. The port will belong to those who work it.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['workers'], C2: ['seize'] },
    cues: { D1: 'The shipowners and the dockers cannot share a port, and the committee stands with the dockers', C1: 'The port will belong to those who work it', C2: 'The committee will seize the port and the customs house, and it will hold them. Other parties will be banned from the harbor and the town' },
    reason: { D1: 'The text sets the shipowners against the dockers, and stands with the dockers: {cue:D1}.',
              C1: 'The port is to belong to those who work it: {cue:C1}.',
              C2: 'The committee will seize power and hold it, and ban other parties: {cue:C2}.' },
    not: { outcome: 'anarch', why: 'Both want the dockers to take over without waiting for a vote. This text has a committee hold the port and ban other parties, and {o:anarch} wants no one to hold power.' } },

  { id: 'c-r-an1', use: 'drill', tier: 'varied', setting: 'schooling', topic: 'school helpers who want no rulers',
    text: "From a statement by the Oak Hill school helpers: 'The company that owns the school cafeteria and cleaning contracts pays us little, and the government guards its contracts, and we stand with the helpers. The services should belong to the people who do them. We want no government. We will run the school's services, and the neighborhood's, together, in meetings.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { D1: 'The company that owns the school cafeteria and cleaning contracts pays us little, and the government guards its contracts, and we stand with the helpers', C1: 'The services should belong to the people who do them', C2: "We want no government. We will run the school's services, and the neighborhood's, together, in meetings" },
    reason: { D1: 'The text sets the helpers against the company that owns the contracts, and stands with the helpers: {cue:D1}.',
              C1: 'The services are to belong to the people who do them: {cue:C1}. Nothing is said about competing.',
              C2: 'The text wants no government, and says how things will be run instead: {cue:C2}.' },
    not: { outcome: 'demsoc', why: 'Giving the services to the people who do them is something {o:demsoc} asks for as well. This text wants no government, and {o:demsoc} keeps the government.' } },

  { id: 'c-r-mk1', use: 'drill', tier: 'varied', setting: 'town', topic: 'cycle couriers who want to own a competing courier service',
    text: "From the founding paper of the Penny Hill cycle couriers: 'The courier app's owners take a fee from every delivery, and the riders take the rain, and we are with the riders. Each courier service should belong to its riders, and the services should compete for orders, set their own rates and fold if they cannot cover their costs.'",
    outcome: 'mktsoc', route: { D1: ['class'], C1: ['market'], C2: ['none'] },
    cues: { D1: "The courier app's owners take a fee from every delivery, and the riders take the rain, and we are with the riders", C1: 'Each courier service should belong to its riders, and the services should compete for orders, set their own rates and fold if they cannot cover their costs', C2: 'fold if they cannot cover their costs' },
    reason: { D1: 'The text sets the app’s owners against the riders, and stands with the riders: {cue:D1}.',
              C1: 'Each service is to belong to its riders, and to compete and risk folding: {cue:C1}.',
              C2: 'The text says nothing about power or the government. Its last words are about a service folding: {cue:C2}.' },
    not: { outcome: 'anarch', why: 'Both give the business to the people who work in it. This text keeps the services competing, and says nothing about getting rid of the government.' } }
]);

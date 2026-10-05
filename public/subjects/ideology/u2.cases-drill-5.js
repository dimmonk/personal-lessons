// Political Ideologies, Unit Two: drill cases, fourth stage (route), clean and varied cases. The whole route is asked: the first
// question, the two questions of this unit, and then the name. Every case therefore carries marked words and a reason for all three.
// All texts are invented.

FC.cases('ideology', 'u2', [

  { id: 'c-r-sd1', use: 'drill', tier: 'clean', setting: 'schooling', topic: 'college cooks and meals for students',
    text: "From a leaflet by the Ridgeway college kitchen staff: 'The company that owns the college kitchens pays its cooks the least the law allows, and keeps the rest, and we stand with the cooks. We are not asking to own the kitchens. We are asking for a higher legal minimum, and a tax on the company's profits to pay for meals for students who cannot afford them.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { D1: 'The company that owns the college kitchens pays its cooks the least the law allows, and keeps the rest, and we stand with the cooks',
            C1: "We are not asking to own the kitchens. We are asking for a higher legal minimum, and a tax on the company's profits to pay for meals for students who cannot afford them",
            C2: 'We are asking for a higher legal minimum' },
    reason: { D1: 'The text sets the cooks against the company that owns the kitchens, and stands with the cooks: {cue:D1}.',
              C1: 'The company keeps the kitchens, and a legal minimum and a tax are asked for: {cue:C1}.',
              C2: 'The text asks the government for a higher minimum: {cue:C2}. It says nothing about how power is won or held, about elections, or about getting rid of the government.' },
    not: { outcome: 'classonly', why: 'The text goes past taking the cooks’ side to a plan: a minimum and a tax. A text that only took the side would be {o:classonly}.' } },

  { id: 'c-r-co1', use: 'drill', tier: 'clean', setting: 'housing', topic: 'flat cleaners and a sales office',
    text: "A post by the Quayside cleaners: 'The firm that owns the Quayside flats pays us by the flat and sells the flats for a fortune. The people who clean and the people who own are not on the same side, and we are on ours. Join us outside the sales office on Friday.'",
    outcome: 'classonly', route: { D1: ['class'], C1: ['none'], C2: ['none'] },
    cues: { D1: 'The people who clean and the people who own are not on the same side, and we are on ours', C1: 'Join us outside the sales office on Friday', C2: 'outside the sales office on Friday' },
    reason: { D1: 'The text sets the people who clean against the people who own, and takes the cleaners’ side: {cue:D1}.',
              C1: 'Where a plan for the flats would be, the text has an invitation: {cue:C1}. It says nothing about who should own the flats, about taxes, or about how the owners gain.',
              C2: 'The text asks the reader to come to a place: {cue:C2}. It says nothing about power or the government.' },
    not: { outcome: 'marx', why: 'The text says what the firm does, but it does not explain how any owner gains from the work. A text that did would be {o:marx}.' } },

  { id: 'c-r-mx1', use: 'drill', tier: 'clean', setting: 'work', topic: 'a reading circle of railway fitters',
    text: "From notes for a reading circle of railway fitters: 'A fitter is paid £80 a day, and mends a locomotive whose use brings the railway £140 once its costs are covered. The £60 goes to the owners. This is not the fault of any one owner. Any owner has to keep a gap like it, and that is how the arrangement works. The circle meets for the fitters.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { D1: ['The £60 goes to the owners', 'The circle meets for the fitters'], C1: 'Any owner has to keep a gap like it, and that is how the arrangement works', C2: 'The circle meets for the fitters' },
    reason: { D1: 'The text sets the fitters against the owners who take the gap, and is written for the fitters: {cue:D1}.',
              C1: 'The text explains how owners gain, as the way the arrangement works for any owner: {cue:C1}. The £60 it says goes to the owners is the {t:surplus} of the fitter’s day. The text asks for nothing to be done with the railway.',
              C2: 'The text says nothing about power or the government. It says who the circle is for: {cue:C2}.' },
    not: { outcome: 'classonly', why: 'The text does more than side with the fitters: it says why any owner gains. A text that only complained would be {o:classonly}.' } },

  { id: 'c-r-dm1', use: 'drill', tier: 'varied', setting: 'health', topic: 'hospital porters and services for the health service',
    text: "From a resolution of the Elbury hospital porters: 'The company that owns the hospital's laundry and supplies runs them for its owners, and the porters carry the load, and we stand with the porters. These services should pass to the health service and be run for the patients. We will persuade the council at the coming election and abide by what the voters decide.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['vote'] },
    cues: { D1: 'The company that owns the hospital\'s laundry and supplies runs them for its owners, and the porters carry the load, and we stand with the porters', C1: 'These services should pass to the health service and be run for the patients', C2: 'We will persuade the council at the coming election and abide by what the voters decide' },
    reason: { D1: 'The text sets the porters against the company that owns the services, and stands with the porters: {cue:D1}.',
              C1: 'The services are to pass out of the company’s hands to the health service: {cue:C1}.',
              C2: 'The porters will abide by the voters’ decision: {cue:C2}. The change is to come through an election they can lose.' },
    not: { outcome: 'socdem', why: 'The services leave the company. A text that left the company its services and taxed it would be {o:socdem}.' } },

  { id: 'c-r-ml1', use: 'drill', tier: 'varied', setting: 'borders', topic: 'a port strike committee holding the port',
    text: "From a decree-in-waiting of the Sorrel Port strike committee: 'The shipowners and the dockers cannot share a port, and the committee stands with the dockers. The committee will seize the port and the customs house, and it will hold them. Other parties will be banned from the harbour and the town. The port will belong to those who work it.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['workers'], C2: ['seize'] },
    cues: { D1: 'The shipowners and the dockers cannot share a port, and the committee stands with the dockers', C1: 'The port will belong to those who work it', C2: 'The committee will seize the port and the customs house, and it will hold them. Other parties will be banned from the harbour and the town' },
    reason: { D1: 'The text sets the shipowners against the dockers, and stands with the dockers: {cue:D1}.',
              C1: 'The port is to belong to those who work it: {cue:C1}.',
              C2: 'The committee will seize power and hold it, and ban other parties: {cue:C2}.' },
    not: { outcome: 'anarch', why: 'Both want the dockers to take over without waiting for a vote. This text has a committee hold the port and ban other parties, and {o:anarch} wants no one to hold power.' } },

  { id: 'c-r-an1', use: 'drill', tier: 'varied', setting: 'schooling', topic: 'school helpers who want no rulers',
    text: "From a statement by the Oak Hill school helpers: 'The company that owns the school canteen and cleaning contracts pays us little, and the government guards its contracts, and we stand with the helpers. The services should belong to the people who do them. We want no government. We will run the school's services, and the neighbourhood's, together, in meetings.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { D1: 'The company that owns the school canteen and cleaning contracts pays us little, and the government guards its contracts, and we stand with the helpers', C1: 'The services should belong to the people who do them', C2: "We want no government. We will run the school's services, and the neighbourhood's, together, in meetings" },
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

// Political Ideologies, Unit Two: fresh cases kept back for later days (second file: the rest of Democratic socialism,
// Marxism-Leninism, and the first two of Anarchism). All texts are invented.

FC.cases('ideology', 'u2', [

  /* ---------- Democratic socialism ---------- */
  { id: 'c-ret-dm2', use: 'return', tier: 'varied', setting: 'schooling', topic: 'library staff and libraries for all readers',
    text: "From the Linford library staff: 'The company that owns the lending libraries sells subscriptions and underpays its staff, and we are with the staff. The libraries should pass to the public, to be run for all readers.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['none'] },
    cues: { D1: 'The company that owns the lending libraries sells subscriptions and underpays its staff, and we are with the staff', C1: 'The libraries should pass to the public, to be run for all readers', C2: 'to be run for all readers' },
    reason: { D1: 'The text sets the staff against the company that owns the libraries, and stands with the staff: {cue:D1}.',
              C1: 'The libraries are to pass out of the company’s hands to the public: {cue:C1}.',
              C2: 'The text says nothing about how power is won or held. It ends on who the libraries are run for: {cue:C2}. A handover with no word on how is the key’s case for the answer that nothing is said.' },
    not: { outcome: 'classonly', why: 'The text does more than take the staff’s side: it says the libraries should pass to the public. A text that only took the side would be {o:classonly}.' } },

  { id: 'c-ret-dm3', use: 'return', tier: 'varied', setting: 'work', topic: 'foundry staff and a law giving the foundry to its staff',
    text: "From the Ashby foundry workers: 'The foundry's shareholders take the profit, and the casters take the heat, and we are with the casters. The foundry should belong to the people who work in it, together. We will win the vote in parliament for a law that makes it so, and the government will stay and answer to the voters.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['workers'], C2: ['vote'] },
    cues: { D1: "The foundry's shareholders take the profit, and the casters take the heat, and we are with the casters", C1: 'The foundry should belong to the people who work in it, together', C2: 'We will win the vote in parliament for a law that makes it so, and the government will stay and answer to the voters' },
    reason: { D1: 'The text sets the shareholders against the casters, and stands with the casters: {cue:D1}.',
              C1: 'The foundry is to belong to the people who work in it: {cue:C1}. Nothing is said about competing for customers.',
              C2: 'The change is to come through a vote in parliament, and the government will stay and answer to the voters: {cue:C2}.' },
    not: { outcome: 'anarch', why: 'Both give the foundry to its workers. This text keeps the government and leaves it to the voters. {o:anarch} wants the government gone.' } },

  /* ---------- Marxism-Leninism ---------- */
  { id: 'c-ret-ml1', use: 'return', tier: 'varied', setting: 'health', topic: 'hospital orderlies’ league taking charge by force',
    text: "From a statement by the Marl Hospital orderlies' party: 'The company that owns the hospital and the orderlies who carry its beds are on opposite sides, and our party is with the orderlies. We will take power by force and keep it, and we will let no rival party stand against us. The hospital will belong to the government we form.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['public'], C2: ['seize'] },
    cues: { D1: 'The company that owns the hospital and the orderlies who carry its beds are on opposite sides, and our party is with the orderlies', C1: 'The hospital will belong to the government we form', C2: 'We will take power by force and keep it, and we will let no rival party stand against us' },
    reason: { D1: 'The text sets the company that owns the hospital against the orderlies, and stands with the orderlies: {cue:D1}.',
              C1: 'The hospital is to belong to the government the party forms: {cue:C1}.',
              C2: 'The party will take power by force and keep it, with no rival: {cue:C2}.' },
    not: { outcome: 'demsoc', why: 'Handing the hospital to the government is something {o:demsoc} asks for too. This text says the party will keep power with no rival. A text that left the change to the voters would be {o:demsoc}.' } },

  { id: 'c-ret-ml2', use: 'return', tier: 'varied', setting: 'town', topic: 'a printers’ council holding the city and silent on the presses',
    text: "From a notice of the Vickers Lane printers' council: 'The proprietors of the presses and the printers are in two camps, and we are in the second. Our council will hold the city once it has it, and it will allow no other council or party to claim it. Be ready.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['none'], C2: ['seize'] },
    cues: { D1: 'The proprietors of the presses and the printers are in two camps, and we are in the second', C1: 'Be ready', C2: 'Our council will hold the city once it has it, and it will allow no other council or party to claim it' },
    reason: { D1: 'The text sets the proprietors against the printers, and stands with the printers: {cue:D1}.',
              C1: 'Where a plan for the presses would be, the text has only a warning: {cue:C1}. It says nothing about who should own the presses.',
              C2: 'The council will hold the city and allow no other party to claim it: {cue:C2}.' },
    not: { outcome: 'classonly', why: 'The text says nothing about the presses, but it says the council will hold the city and allow no other party, and the question about the government names that. A text that said nothing about power as well would be {o:classonly}.' } },

  { id: 'c-ret-ml3', use: 'return', tier: 'varied', setting: 'work', topic: 'foundry sums and a league holding charge',
    text: "From a pamphlet of the Dray Works party: 'A founder is paid £65 for a day and casts parts worth £110 once the metal is paid for. The £45 goes to the owners. Every owner has to keep a gap like it, because that is how the arrangement works. The party will take power and hold it, and no rival will be allowed to take it back.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['explain'], C2: ['seize'] },
    cues: { D1: 'The £45 goes to the owners', C1: 'Every owner has to keep a gap like it, because that is how the arrangement works', C2: 'The party will take power and hold it, and no rival will be allowed to take it back' },
    reason: { D1: 'The text sets the founders’ pay against the gap that goes to the owners, and is written by a workers’ party: {cue:D1}.',
              C1: 'The text explains how owners gain, as the way the arrangement works: {cue:C1}. It asks for nothing to be done with the works, so the explanation is the answer here.',
              C2: 'The party will take power and hold it, with no rival allowed: {cue:C2}. The explanation is the same as in a text that stops there, and what the text goes on to say about power is what decides it.' },
    not: { outcome: 'marx', why: 'The text explains how owners gain, as {o:marx} does. But it goes on to say that a party will take power and hold it, and {o:marx} says nothing about who takes power.' } },

  /* ---------- Anarchism ---------- */
  { id: 'c-ret-an1', use: 'return', tier: 'varied', setting: 'health', topic: 'clinic staff who want no health office',
    text: "A poster at the Bell Street clinic: 'The firm that owns the clinics pays the staff a flat wage and keeps the fees, and the health office backs it, and we are with the staff. The clinic should belong to those who work in it. We want no health office and no government: we will run the clinic and the district together, in open meetings.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { D1: 'The firm that owns the clinics pays the staff a flat wage and keeps the fees, and the health office backs it, and we are with the staff', C1: 'The clinic should belong to those who work in it', C2: 'We want no health office and no government: we will run the clinic and the district together, in open meetings' },
    reason: { D1: 'The text sets the firm that owns the clinics against the staff, and stands with the staff: {cue:D1}.',
              C1: 'The clinic is to belong to those who work in it: {cue:C1}. Nothing is said about competing.',
              C2: 'The text wants no government, and says how things will be run instead: {cue:C2}.' },
    not: { outcome: 'demsoc', why: 'Giving the clinic to its staff is something {o:demsoc} asks for too. This text wants no government, and {o:demsoc} keeps it.' } },

  { id: 'c-ret-an2', use: 'return', tier: 'varied', setting: 'town', topic: 'fishers who want the quota and no authority',
    text: "From a flyer by the Port Alma fishers: 'The company that owns the fish quota takes what we catch, and the harbour authority backs it, and we stand with the fishers. We want the quota to belong to the people who fish. We want no authority and no government over the harbour: we will agree the catch together, on the quay.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { D1: 'The company that owns the fish quota takes what we catch, and the harbour authority backs it, and we stand with the fishers', C1: 'We want the quota to belong to the people who fish', C2: 'We want no authority and no government over the harbour: we will agree the catch together, on the quay' },
    reason: { D1: 'The text sets the company that owns the quota against the fishers, and stands with the fishers: {cue:D1}.',
              C1: 'The quota is to belong to the people who fish: {cue:C1}. Nothing is said about competing.',
              C2: 'The text wants no government over the harbour: {cue:C2}.' },
    not: { outcome: 'mktsoc', why: 'Both give the quota to the people who fish. This text says nothing about competing, and wants no government. A text that kept the fishers competing for customers would be {o:mktsoc}.' } }
]);

// Political Ideologies, Unit Two: fresh cases kept back for later days (Marxism-Leninism, Anarchism). All texts are invented.

FC.cases('ideology', 'u2', [

  { id: 'c-ret-ml1', use: 'return', tier: 'varied', setting: 'health', topic: 'hospital orderlies’ league taking charge by force',
    text: "From a statement by the Marl Hospital orderlies' party: 'The company that owns the hospital and the orderlies who carry its beds are on opposite sides, and our party is with the orderlies. We will take power by force and keep it, and we will let no rival party stand against us. The hospital will belong to the government we form.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['public'], C2: ['seize'] },
    cues: { D1: 'The company that owns the hospital and the orderlies who carry its beds are on opposite sides, and our party is with the orderlies', C1: 'The hospital will belong to the government we form', C2: 'We will take power by force and keep it, and we will let no rival party stand against us' },
    reason: { D1: 'The text sets the company that owns the hospital against the orderlies, and stands with the orderlies: {cue:D1}.',
              C1: 'The hospital is to belong to the government the party forms: {cue:C1}.',
              C2: 'The party will take power by force and keep it, with no rival: {cue:C2}.' },
    not: { outcome: 'demsoc', why: 'Handing the hospital to the government is something {o:demsoc} asks for too. This text says the party will keep power with no rival. A text that left the change to the voters would be {o:demsoc}.' } },

  { id: 'c-ret-an1', use: 'return', tier: 'varied', setting: 'health', topic: 'clinic staff who want no health office',
    text: "A poster at the Bell Street clinic: 'The firm that owns the clinics pays the staff a flat wage and keeps the fees, and the health office backs it, and we are with the staff. The clinic should belong to those who work in it. We want no health office and no government: we will run the clinic and the district together, in open meetings.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { D1: 'The firm that owns the clinics pays the staff a flat wage and keeps the fees, and the health office backs it, and we are with the staff', C1: 'The clinic should belong to those who work in it', C2: 'We want no health office and no government: we will run the clinic and the district together, in open meetings' },
    reason: { D1: 'The text sets the firm that owns the clinics against the staff, and stands with the staff: {cue:D1}.',
              C1: 'The clinic is to belong to those who work in it: {cue:C1}. Nothing is said about competing.',
              C2: 'The text wants no government, and says how things will be run instead: {cue:C2}.' },
    not: { outcome: 'demsoc', why: 'Giving the clinic to its staff is something {o:demsoc} asks for too. This text wants no government, and {o:demsoc} keeps it.' } }
]);

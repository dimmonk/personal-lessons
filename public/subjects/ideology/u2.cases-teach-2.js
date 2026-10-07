// Political Ideologies, Unit Two: cases shown inside cards, part two (Marxism-Leninism, Anarchism, Market socialism, and the
// look-alike pairs that set Democratic socialism beside Marxism-Leninism, and Marxism-Leninism beside Anarchism).

FC.cases('ideology', 'u2', [

  { id: 'c-ml-mill', use: 'teach', tier: 'clean', setting: 'work', topic: 'a mill and one ruling league', name: 'The mill pamphlet',
    text: "From a pamphlet of the Calder Mill workers' party: 'The owners will never give up what they hold, and the courts and police they pay for will protect them. So the workers, led by our party, must take power and keep it. Once we hold it there will be one party, ours, and no rivals. The mills will belong to the government we form, run for everyone.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['public'], C2: ['seize'] },
    cues: { C1: 'The mills will belong to the government we form, run for everyone', C2: 'the workers, led by our party, must take power and keep it. Once we hold it there will be one party, ours, and no rivals' } },

  { id: 'c-ml-sites', use: 'check', tier: 'clean', setting: 'housing', topic: 'building staff and a committee in charge of the city', name: 'Building staff and a committee in charge of the city',
    text: "From a statement by the Oakfield building workers' committee: 'The firms that own the building sites live off our labor, and we stand with the people who build. The committee will take power in the city and hold it. It will be the only party, and it will not hold elections it could lose. The sites will belong to the government it forms.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['public'], C2: ['seize'] },
    cues: { C1: 'The sites will belong to the government it forms', C2: 'The committee will take power in the city and hold it. It will be the only party, and it will not hold elections it could lose' },
    segments: [
      { text: 'The firms that own the building sites live off our labor, and we stand with the people who build', note: 'That names the two sides. It says nothing yet about who holds power.' },
      { text: 'The committee will take power in the city and hold it. It will be the only party, and it will not hold elections it could lose' },
      { text: 'The sites will belong to the government it forms', note: 'That is about who owns the sites. It does not say how the committee wins or keeps power.' }
    ],
    reason: { C2: 'The committee will keep power as the only party, with no election it could lose.' } },

  { id: 'c-an-print', use: 'teach', tier: 'clean', setting: 'work', topic: 'a print works and open meetings', name: 'The print-works zine',
    text: "From a zine handed out at the Marsh Lane print works: 'The people who own the print works tell us what to do, and the government tells the owners what is allowed. We want neither. The print works should belong to the people who work in it. The town should be run by open meetings of everyone in it, with no government at all.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { C1: 'The print works should belong to the people who work in it', C2: 'The town should be run by open meetings of everyone in it, with no government at all' } },

  { id: 'c-an-school', use: 'check', tier: 'clean', setting: 'schooling', topic: 'school staff who want no rulers', name: 'School staff who want no rulers',
    text: "From notes for a meeting of school staff in the Kell valley: 'The group that owns the schools runs them for profit, and the government backs it. The teachers, cooks and custodians should run each school together. We want the government done away with, now, and not used first: we will run the valley's schools in open meetings.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { C1: 'The teachers, cooks and custodians should run each school together', C2: "We want the government done away with, now, and not used first: we will run the valley's schools in open meetings" },
    segments: [
      { text: 'The group that owns the schools runs them for profit, and the government backs it', note: 'That names the owners and the government and says what is wrong. It does not say what to do about the government.' },
      { text: 'The teachers, cooks and custodians should run each school together', note: 'That is about who runs the schools. The question here is about the government.' },
      { text: "We want the government done away with, now, and not used first: we will run the valley's schools in open meetings" }
    ],
    reason: { C2: 'The text wants the government gone now, and not used first.' } },

  { id: 'c-mk-furniture', use: 'teach', tier: 'clean', setting: 'work', topic: 'furniture makers who own their firm', name: 'The furniture makers',
    text: "From a proposal by the Ashby furniture makers: 'The firm's shareholders keep the profit, and we make the chairs. Each furniture firm should belong to the people who make its furniture, and the firms should compete for customers, set their own prices, and go under if they fail. We want the owners out of the workshop, not out of the market.'",
    outcome: 'mktsoc', route: { D1: ['class'], C1: ['market'], C2: ['none'] },
    cues: { C1: 'Each furniture firm should belong to the people who make its furniture, and the firms should compete for customers, set their own prices, and go under if they fail' } },

  { id: 'c-mk-bikes', use: 'check', tier: 'clean', setting: 'town', topic: 'bicycle mechanics who own their shops', name: 'Bicycle mechanics who own their shops',
    text: "From the minutes of a meeting of mechanics at the Orwell bicycle repair chain: 'The chain's owners keep what is left after wages, and we do the repairs. We want each shop to belong to the people who work in it. The shops should compete with each other for customers, set their own prices, and close if they cannot pay their way.'",
    outcome: 'mktsoc', route: { D1: ['class'], C1: ['market'], C2: ['none'] },
    cues: { C1: 'We want each shop to belong to the people who work in it. The shops should compete with each other for customers, set their own prices, and close if they cannot pay their way' },
    reason: { C1: 'The shops are to belong to the people who work in them, and to compete: {cue:C1}. Workers owning is half of this answer, and competing is the other half.' } },

  { id: 'c-lk-dmml-dm', use: 'teach', tier: 'clean', setting: 'work', topic: 'mines passed on by a vote in parliament', name: 'Mines passed on by a vote in parliament',
    text: "The Hartfell miners' union says: 'The mines' owners sell the coal, and the miners dig it, and we stand with the miners. The mines should pass to the government, to be run for everyone. We will win a majority in parliament and pass the law.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['vote'] },
    cues: { C1: 'The mines should pass to the government, to be run for everyone', C2: 'We will win a majority in parliament and pass the law' } },

  { id: 'c-lk-dmml-ml', use: 'teach', tier: 'clean', setting: 'work', topic: 'mines held by a ruling league', name: 'Mines held by a ruling league',
    text: "The Hartfell miners' party says: 'The mines' owners sell the coal, and the miners dig it, and we stand with the miners. The mines should pass to the government, to be run for everyone. The party will take power and keep it, and it will allow no rival party to stand.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['public'], C2: ['seize'] },
    cues: { C1: 'The mines should pass to the government, to be run for everyone', C2: 'The party will take power and keep it, and it will allow no rival party to stand' } },

  { id: 'c-lk-mlan-ml', use: 'teach', tier: 'clean', setting: 'town', topic: 'a textile works and a single ruling league', name: 'A textile works and a single ruling league',
    text: "A strikers' manifesto at the Garrow textile works: 'The mill owners and the workers are on opposite sides, and we are on the side of the workers. The workers must take power through a single party and keep it, and no rival party is to be allowed. The mills will belong to that party's government, run for everyone.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['public'], C2: ['seize'] },
    cues: { C1: "The mills will belong to that party's government, run for everyone", C2: 'The workers must take power through a single party and keep it, and no rival party is to be allowed' } },

  { id: 'c-lk-mlan-an', use: 'teach', tier: 'clean', setting: 'town', topic: 'a textile works and no ruling league at all', name: 'A textile works and no ruling league at all',
    text: "A strikers' manifesto at the Garrow textile works: 'The mill owners and the workers are on opposite sides, and we are on the side of the workers. The workers must take the mills and run them, with the town, in open meetings. No party and no government: a party that holds power is only a new boss.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { C1: 'The workers must take the mills and run them, with the town, in open meetings', C2: 'No party and no government: a party that holds power is only a new boss' } }
]);

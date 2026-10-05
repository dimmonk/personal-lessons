// Political Ideologies, Unit Two: cases shown inside cards, part two (Marxism-Leninism, Anarchism, Market socialism, and the
// look-alike pairs that turn on what the text wants done with the government).
// All texts are invented. cues[STEP] are the exact words that decide that question; segments are the pieces a learner can tap.

FC.cases('ideology', 'u2', [

  /* ---------- Marxism-Leninism ---------- */
  { id: 'c-ml-mill', use: 'teach', tier: 'clean', setting: 'work', topic: 'a mill and one ruling league', name: 'The mill pamphlet',
    text: "From a pamphlet of the Calder Mill workers' party: 'The owners will never give up what they hold, and the courts and police they pay for will protect them. So the workers, led by our party, must take power and keep it. Once we hold it there will be one party, ours, and no rivals. The mills will belong to the government we form, run for everyone.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['public'], C2: ['seize'] },
    cues: { C1: 'The mills will belong to the government we form, run for everyone', C2: 'the workers, led by our party, must take power and keep it. Once we hold it there will be one party, ours, and no rivals' } },

  { id: 'c-ml-docks', use: 'teach', tier: 'clean', setting: 'town', topic: 'a dockers committee and the port',  name: 'The dockers’ committee',
    text: "A statement by the Port Selby dockers' committee: 'The dock company's owners and the dockers are not on the same side, and we are on the side of the dockers. Waiting for the next election changes nothing. The committee will take the docks and the city by force if it must, and it will allow no other party to stand against it. The docks will belong to the dockers who work them.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['workers'], C2: ['seize'] },
    cues: { C1: 'The docks will belong to the dockers who work them', C2: 'The committee will take the docks and the city by force if it must, and it will allow no other party to stand against it' },
    segments: [
      { text: "The dock company's owners and the dockers are not on the same side, and we are on the side of the dockers", note: 'That names the two groups and the side the text takes. It says nothing about who takes power.' },
      { text: 'Waiting for the next election changes nothing', note: 'That says what the committee thinks of elections. It does not yet say what it will do instead.' },
      { text: 'The committee will take the docks and the city by force if it must, and it will allow no other party to stand against it' }
    ] },

  { id: 'c-ml-sites', use: 'check', tier: 'clean', setting: 'housing', topic: 'building staff and a committee in charge of the city', name: 'Building staff and a committee in charge of the city',
    text: "From a statement by the Oakfield building workers' committee: 'The firms that own the building sites live off our labour, and we stand with the people who build. The committee will take power in the city and hold it. It will be the only party, and it will not hold elections it could lose. The sites will belong to the government it forms.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['public'], C2: ['seize'] },
    cues: { C1: 'The sites will belong to the government it forms', C2: 'The committee will take power in the city and hold it. It will be the only party, and it will not hold elections it could lose' },
    segments: [
      { text: 'The firms that own the building sites live off our labour, and we stand with the people who build', note: 'That names the two groups and the side the text takes. It says nothing yet about who holds power.' },
      { text: 'The committee will take power in the city and hold it. It will be the only party, and it will not hold elections it could lose' },
      { text: 'The sites will belong to the government it forms', note: 'That is about the sites. It says who will own them, and nothing about how the committee will win or hold power.' }
    ],
    reason: { C2: 'The committee takes power and keeps it: {cue:C2}. No rival is allowed to challenge it at an election.' } },

  /* ---------- Anarchism ---------- */
  { id: 'c-an-print', use: 'teach', tier: 'clean', setting: 'work', topic: 'a print works and open meetings', name: 'The print-works zine',
    text: "From a zine handed out at the Marsh Lane print works: 'The people who own the print works tell us what to do, and the government tells the owners what is allowed. We want neither. The print works should belong to the people who work in it. The town should be run by open meetings of everyone in it, with no government at all.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { C1: 'The print works should belong to the people who work in it', C2: 'The town should be run by open meetings of everyone in it, with no government at all' } },

  { id: 'c-an-estate', use: 'teach', tier: 'clean', setting: 'housing', topic: 'building staff who want no rulers', name: 'The estate builders',
    text: "A leaflet by the Dockside building workers: 'The building firm's owner pays us wages and keeps the rest. The government does not guard us from him; it guards him. The firm should belong to the people who build for it. We will not wait for any government to give it to us, and we want none: we will run the work and the whole estate ourselves, in meetings.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { C1: 'The firm should belong to the people who build for it', C2: 'We will not wait for any government to give it to us, and we want none: we will run the work and the whole estate ourselves, in meetings' },
    segments: [
      { text: "The building firm's owner pays us wages and keeps the rest. The government does not guard us from him; it guards him", note: 'That names the owner and the government and says what is wrong. It does not yet say what should be done about the government.' },
      { text: 'The firm should belong to the people who build for it', note: 'That is about who should own the firm. The question here is about the government.' },
      { text: 'We will not wait for any government to give it to us, and we want none: we will run the work and the whole estate ourselves, in meetings' }
    ] },

  { id: 'c-an-school', use: 'check', tier: 'clean', setting: 'schooling', topic: 'school staff who want no rulers', name: 'School staff who want no rulers',
    text: "From notes for a meeting of school staff in the Kell valley: 'The group that owns the schools runs them for profit, and the government backs it. The teachers, cooks and caretakers should run each school together. We want the government done away with, now, and not used first: we will run the valley's schools in open meetings.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { C1: 'The teachers, cooks and caretakers should run each school together', C2: "We want the government done away with, now, and not used first: we will run the valley's schools in open meetings" },
    segments: [
      { text: 'The group that owns the schools runs them for profit, and the government backs it', note: 'That names the owners and the government and says what is wrong. It does not yet say what should be done about the government.' },
      { text: 'The teachers, cooks and caretakers should run each school together', note: 'That is about who should run the schools. The question here is about the government.' },
      { text: "We want the government done away with, now, and not used first: we will run the valley's schools in open meetings" }
    ],
    reason: { C2: 'The text wants the government got rid of, and says when and how: {cue:C2}. It does not want it used first and does not want a party to hold it.' } },

  /* ---------- Market socialism ---------- */
  { id: 'c-mk-furniture', use: 'teach', tier: 'clean', setting: 'work', topic: 'furniture makers who own their firm', name: 'The furniture makers',
    text: "From a proposal by the Ashby furniture makers: 'The firm's shareholders keep the profit, and we make the chairs. Each furniture firm should belong to the people who make its furniture, and the firms should compete for customers, set their own prices, and go under if they fail. We want the owners out of the workshop, not out of the market.'",
    outcome: 'mktsoc', route: { D1: ['class'], C1: ['market'], C2: ['none'] },
    cues: { C1: 'Each furniture firm should belong to the people who make its furniture, and the firms should compete for customers, set their own prices, and go under if they fail' } },

  { id: 'c-mk-farms', use: 'teach', tier: 'clean', setting: 'money', topic: 'farm staff who own the farms and sell in the market', name: 'The farm workers',
    text: "From a farm workers' association: 'The landowner keeps the profit from the harvest, and the pickers keep the aches. Each farm should belong to the people who work it. The farms should sell what they grow in the open market, set their own prices, and take the loss when a harvest sells badly.'",
    outcome: 'mktsoc', route: { D1: ['class'], C1: ['market'], C2: ['none'] },
    cues: { C1: 'Each farm should belong to the people who work it. The farms should sell what they grow in the open market, set their own prices, and take the loss when a harvest sells badly' },
    segments: [
      { text: 'The landowner keeps the profit from the harvest, and the pickers keep the aches', note: 'That names the two groups and what is wrong. It does not yet say what the text wants done with the farms.' },
      { text: 'Each farm should belong to the people who work it', note: 'That is half of what you point to. The other half is what the farms are to do once the workers own them.' },
      { text: 'The farms should sell what they grow in the open market, set their own prices, and take the loss when a harvest sells badly' }
    ] },

  { id: 'c-mk-bikes', use: 'check', tier: 'clean', setting: 'town', topic: 'bicycle mechanics who own their shops', name: 'Bicycle mechanics who own their shops',
    text: "From the minutes of a meeting of mechanics at the Orwell bicycle repair chain: 'The chain's owners keep what is left after wages, and we do the repairs. We want each shop to belong to the people who work in it. The shops should compete with each other for customers, set their own prices, and close if they cannot pay their way.'",
    outcome: 'mktsoc', route: { D1: ['class'], C1: ['market'], C2: ['none'] },
    cues: { C1: 'We want each shop to belong to the people who work in it. The shops should compete with each other for customers, set their own prices, and close if they cannot pay their way' },
    reason: { C1: 'The shops are to belong to the people who work in them, and to compete: {cue:C1}. Handing the businesses to their workers is only half of what this answer needs, and the competing is the other half.' } },

  /* ---------- The look-alike pair: Democratic socialism and Marxism-Leninism (the same mines) ---------- */
  { id: 'c-lk-dmml-dm', use: 'teach', tier: 'clean', setting: 'work', topic: 'mines passed on by a vote in parliament', name: 'Mines passed on by a vote in parliament',
    text: "The Hartfell miners' union says: 'The mines' owners sell the coal, and the miners dig it, and we stand with the miners. The mines should pass to the government, to be run for everyone. We will win a majority in parliament and pass the law.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['vote'] },
    cues: { C1: 'The mines should pass to the government, to be run for everyone', C2: 'We will win a majority in parliament and pass the law' } },

  { id: 'c-lk-dmml-ml', use: 'teach', tier: 'clean', setting: 'work', topic: 'mines held by a ruling league', name: 'Mines held by a ruling league',
    text: "The Hartfell miners' party says: 'The mines' owners sell the coal, and the miners dig it, and we stand with the miners. The mines should pass to the government, to be run for everyone. The party will take power and keep it, and it will allow no rival party to stand.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['public'], C2: ['seize'] },
    cues: { C1: 'The mines should pass to the government, to be run for everyone', C2: 'The party will take power and keep it, and it will allow no rival party to stand' } },

  /* ---------- The look-alike pair: Democratic socialism and Anarchism (the same shipyard) ---------- */
  { id: 'c-lk-dman-dm', use: 'teach', tier: 'clean', setting: 'work', topic: 'a shipyard owned by its staff, by law', name: 'A shipyard owned by its staff, by law',
    text: "The Tarn shipyard workers say: 'The yard's owners take the profit, and the welders take the risk, and we stand with the welders. The yard should belong to the people who work in it. We will win the vote in parliament and pass the law, and the government will stay and answer to the voters.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['workers'], C2: ['vote'] },
    cues: { C1: 'The yard should belong to the people who work in it', C2: 'We will win the vote in parliament and pass the law, and the government will stay and answer to the voters' } },

  { id: 'c-lk-dman-an', use: 'teach', tier: 'clean', setting: 'work', topic: 'a shipyard owned by its staff, with no rulers', name: 'A shipyard owned by its staff, with no rulers',
    text: "The Tarn shipyard workers say: 'The yard's owners take the profit, and the welders take the risk, and we stand with the welders. The yard should belong to the people who work in it. We want no government to pass a law for us: we will take the yard ourselves and run it, with the town, in open meetings.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { C1: 'The yard should belong to the people who work in it', C2: 'We want no government to pass a law for us: we will take the yard ourselves and run it, with the town, in open meetings' } },

  /* ---------- The look-alike pair: Marxism-Leninism and Anarchism (the same textile works) ---------- */
  { id: 'c-lk-mlan-ml', use: 'teach', tier: 'clean', setting: 'town', topic: 'a textile works and a single ruling league', name: 'A textile works and a single ruling league',
    text: "A strikers' manifesto at the Garrow textile works: 'The mill owners and the workers are on opposite sides, and we are on the side of the workers. The workers must take power through a single party and keep it, and no rival party is to be allowed. The mills will belong to that party's government, run for everyone.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['public'], C2: ['seize'] },
    cues: { C1: "The mills will belong to that party's government, run for everyone", C2: 'The workers must take power through a single party and keep it, and no rival party is to be allowed' } },

  { id: 'c-lk-mlan-an', use: 'teach', tier: 'clean', setting: 'town', topic: 'a textile works and no ruling league at all', name: 'A textile works and no ruling league at all',
    text: "A strikers' manifesto at the Garrow textile works: 'The mill owners and the workers are on opposite sides, and we are on the side of the workers. The workers must take the mills and run them, with the town, in open meetings. No party and no government: a party that holds power is only a new boss.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { C1: 'The workers must take the mills and run them, with the town, in open meetings', C2: 'No party and no government: a party that holds power is only a new boss' } }
]);

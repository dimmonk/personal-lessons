// Political Ideologies, Unit Two: drill cases, first stage (name), first half. The key's answers are shown and the learner gives the name,
// so each case carries marked words and a reason for both of the unit's questions, and the nearest wrong name.
// All texts are invented. Cases are authored in groups of look-alikes: each pair below shares a ledger entry.

FC.cases('ideology', 'u2', [

  { id: 'c-n-sd1', use: 'drill', tier: 'clean', setting: 'work', topic: 'a call center and childcare',
    text: "From a staff newsletter at the Parkway call center: 'The company that owns the call center pays us the minimum and keeps the rest, and we stand with the staff. It can keep its call center. What we want is a law that sets a wage on which a person can live, and a tax on the company's profits to fund childcare for every household.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['none'] },
    cues: { C1: "It can keep its call center. What we want is a law that sets a wage on which a person can live, and a tax on the company's profits to fund childcare for every household", C2: 'What we want is a law that sets a wage on which a person can live' },
    reason: { C1: 'The company keeps its business, and a law and a tax are asked for to even out the result: {cue:C1}.',
              C2: 'The text asks the government for a law and a tax: {cue:C2}. It says nothing about how power is to be won or held, about elections, or about getting rid of the government.' },
    not: { outcome: 'classonly', why: 'The text goes past taking the workers’ side to a plan: a law and a tax. A text that only took the side would be {o:classonly}.' } },

  { id: 'c-n-co1', use: 'drill', tier: 'clean', setting: 'work', topic: 'a hotel kitchen and cut hours',
    text: "A note left in the staff room of the Marlowe hotel kitchen: 'The hotel's owners cut our hours again to save money. The cooks and the cleaners do the work and the owners count the receipts, and we are with the cooks and the cleaners. Talk to your shift leader, and sign the sheet by the door.'",
    outcome: 'classonly', route: { D1: ['class'], C1: ['none'], C2: ['none'] },
    cues: { C1: 'Talk to your shift leader, and sign the sheet by the door', C2: 'sign the sheet by the door' },
    reason: { C1: 'Where a plan for the hotel would be, the text has only an invitation: {cue:C1}. Nothing is said about who should own the hotel, about taxes or services, or about how the owners gain.',
              C2: 'The text asks for a signature and a word with a shift leader: {cue:C2}. It says nothing about the government, or about who should hold power.' },
    not: { outcome: 'socdem', why: 'The text asks for no tax, no minimum wage and no service. A text that asked for those, and left the owners their hotel, would be {o:socdem}.' } },

  { id: 'c-n-dm1', use: 'drill', tier: 'clean', setting: 'town', topic: 'town buses owned by the council',
    text: "From the Calderbank bus drivers' union: 'The three companies that own the town's buses run them for the owners' profit, and the drivers carry the cost, and we stand with the drivers. The buses should belong to the town, run by the council for everyone who rides. We will put that to the voters in the fall.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['vote'] },
    cues: { C1: 'The buses should belong to the town, run by the council for everyone who rides', C2: 'We will put that to the voters in the fall' },
    reason: { C1: 'The buses are to pass out of the companies’ hands to the town: {cue:C1}. That is a handover, and not a tax on owners who keep their buses.',
              C2: 'The change is to go to the voters: {cue:C2}. The text leaves its power in the voters’ hands and says nothing about taking it by force or ruling alone.' },
    not: { outcome: 'ml', why: 'Handing the buses to the town is something both names ask for. This text puts it to the voters. A text that said a party would take power and keep it would be {o:ml}.' } },

  { id: 'c-n-ml1', use: 'drill', tier: 'clean', setting: 'money', topic: 'a bank taken by a ruling league',
    text: "From a bulletin of the Riverside bank clerks' party: 'The bank's owners live on what we handle, and we stand with the clerks. The party will take the bank and the government by force, and hold them. Nobody will be allowed to stand against us, and there will be no election to be lost. The bank will then belong to everyone.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['public'], C2: ['seize'] },
    cues: { C1: 'The bank will then belong to everyone', C2: 'The party will take the bank and the government by force, and hold them. Nobody will be allowed to stand against us, and there will be no election to be lost' },
    reason: { C1: 'The bank is to belong to everyone: {cue:C1}. That is a handover to the public.',
              C2: 'The party will take power by force and keep it: {cue:C2}. No rival is allowed, and no election could take power from it.' },
    not: { outcome: 'demsoc', why: 'Handing the bank to everyone is something {o:demsoc} asks for as well. This text says the party will hold power and allow no rival. A text that left the change to the voters would be {o:demsoc}.' } },

  { id: 'c-n-an1', use: 'drill', tier: 'clean', setting: 'town', topic: 'vendors and a market hall with no council',
    text: "From a flyer posted in the old market hall: 'The people who hold the leases on the stalls charge us for the right to sell, and the council backs them, and we stand with the vendors. The stalls should belong to the people who work them. We want no council and no government: we will run the hall and the street together, in meetings.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { C1: 'The stalls should belong to the people who work them', C2: 'We want no council and no government: we will run the hall and the street together, in meetings' },
    reason: { C1: 'Each stall is to belong to the people who work it: {cue:C1}. Nothing is said about competing for customers.',
              C2: 'The text wants the council and the government gone: {cue:C2}. It does not want them used first, and it names no party to hold power.' },
    not: { outcome: 'demsoc', why: 'Giving the stalls to the people who work them is something {o:demsoc} asks for too. This text wants no government to do it. A text that left the government in place, answering to the voters, would be {o:demsoc}.' } },

  { id: 'c-n-mk1', use: 'drill', tier: 'clean', setting: 'housing', topic: 'window fitters who own their firm and stay in the market',
    text: "From a vote at the Pell window-fitting firm: 'The firm's outside shareholders take the profit, and the fitters take the ladders. The firm should belong to the fitters, and it should keep competing with the other firms for customers, quote its own prices, and close if it cannot cover its costs.'",
    outcome: 'mktsoc', route: { D1: ['class'], C1: ['market'], C2: ['none'] },
    cues: { C1: 'The firm should belong to the fitters, and it should keep competing with the other firms for customers, quote its own prices, and close if it cannot cover its costs', C2: 'close if it cannot cover its costs' },
    reason: { C1: 'The firm is to belong to its workers and to compete: {cue:C1}. Both halves are in the text.',
              C2: 'The text says nothing about the government, about elections, or about who holds power. Its last words are about the firm closing: {cue:C2}.' },
    not: { outcome: 'anarch', why: 'Both give the firm to its workers. This text keeps it competing for customers, and says nothing about getting rid of the government, which {o:anarch} would need.' } },

  { id: 'c-n-mx1', use: 'drill', tier: 'varied', setting: 'town', topic: 'dockers’ reading group and a gap any owner keeps',
    text: "From a talk given to the Newbridge dockers' reading group: 'A docker hauls crates worth $90 in a day and is paid $55. The $35 goes to the shipping company's owners. This is not a bad owner's trick. Any owner has to keep a gap like it, because that is what an owner is for. That is how the arrangement works, and we are giving this talk for the dockers.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { C1: 'Any owner has to keep a gap like it, because that is what an owner is for. That is how the arrangement works', C2: 'we are giving this talk for the dockers' },
    reason: { C1: 'The text explains how owners gain, as the way the arrangement works for every owner: {cue:C1}. It asks for nothing to be done with the businesses.',
              C2: 'The text says who the talk is for: {cue:C2}. It says nothing about how power is won or held, or about the government.' },
    not: { outcome: 'classonly', why: 'The text does more than complain about one firm: it says why any owner gains from the work. A text that only complained, and asked the reader to come along, would be {o:classonly}.' } }
]);

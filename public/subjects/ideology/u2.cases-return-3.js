// Political Ideologies, Unit Two: fresh cases kept back for later days (third file: the last of Anarchism, Market socialism and
// Marxism). All texts are invented.

FC.cases('ideology', 'u2', [

  /* ---------- Anarchism ---------- */
  { id: 'c-ret-an3', use: 'return', tier: 'varied', setting: 'money', topic: 'a zine on a bank’s steps, silent on the bank’s ownership',
    text: "From a zine left on the steps of the Corbel bank: 'The bank's owners and the people who work its tills are on opposite sides, and we are with the tills. We want no government at all, and we will run things ourselves, in meetings. Bring a chair to the steps on Sunday.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['none'], C2: ['gone'] },
    cues: { D1: "The bank's owners and the people who work its tills are on opposite sides, and we are with the tills", C1: 'Bring a chair to the steps on Sunday', C2: 'We want no government at all, and we will run things ourselves, in meetings' },
    reason: { D1: 'The text sets the bank’s owners against the people at the tills, and stands with the tills: {cue:D1}.',
              C1: 'Where a plan for the bank would be, the text has only an invitation: {cue:C1}. It says nothing about who should own the bank.',
              C2: 'The text wants no government at all: {cue:C2}. The question about the government names that even where the question about the businesses has nothing to name.' },
    not: { outcome: 'classonly', why: 'The text says nothing about the bank’s ownership, but it wants no government at all, and the question about the government names that. A text that said nothing about the government as well would be {o:classonly}.' } },

  /* ---------- Market socialism ---------- */
  { id: 'c-ret-mk1', use: 'return', tier: 'varied', setting: 'housing', topic: 'roofers who want to own a roofing firm bidding for jobs',
    text: "From a vote of the Hale roofers: 'The firm that owns the roofing business takes the profit and sends us up the ladders, and we are with the roofers. The business should belong to the roofers, and should keep bidding for jobs against other roofing firms, set its own prices and go out of business if it loses money.'",
    outcome: 'mktsoc', route: { D1: ['class'], C1: ['market'], C2: ['none'] },
    cues: { D1: 'The firm that owns the roofing business takes the profit and sends us up the ladders, and we are with the roofers', C1: 'The business should belong to the roofers, and should keep bidding for jobs against other roofing firms, set its own prices and go out of business if it loses money', C2: 'go out of business if it loses money' },
    reason: { D1: 'The text sets the firm that owns the business against the roofers, and stands with the roofers: {cue:D1}.',
              C1: 'The business is to belong to the roofers and to keep competing for jobs and risk failing: {cue:C1}.',
              C2: 'The text says nothing about power or the government. Its last words are about the business failing: {cue:C2}.' },
    not: { outcome: 'anarch', why: 'Both give the business to the people who work in it. This text keeps it competing, and says nothing about getting rid of the government.' } },

  { id: 'c-ret-mk2', use: 'return', tier: 'varied', setting: 'schooling', topic: 'language teachers who want to own competing schools',
    text: "From the staff of the Colby language school: 'The company that owns the language schools keeps the fees, and we teach the classes, and we stand with the teachers. Each school should belong to its teachers, compete with the other schools for students, set its own fees and close if the students stop coming.'",
    outcome: 'mktsoc', route: { D1: ['class'], C1: ['market'], C2: ['none'] },
    cues: { D1: 'The company that owns the language schools keeps the fees, and we teach the classes, and we stand with the teachers', C1: 'Each school should belong to its teachers, compete with the other schools for students, set its own fees and close if the students stop coming', C2: 'close if the students stop coming' },
    reason: { D1: 'The text sets the company that owns the schools against the teachers, and stands with the teachers: {cue:D1}.',
              C1: 'Each school is to belong to its teachers, and to compete and risk closing: {cue:C1}.',
              C2: 'The text says nothing about power or the government. Its last words are about a school closing: {cue:C2}.' },
    not: { outcome: 'demsoc', why: 'Giving each school to its teachers is something {o:demsoc} asks for as well. This text also keeps the schools competing and able to close, and the more exact answer decides.' } },

  { id: 'c-ret-mk3', use: 'return', tier: 'varied', setting: 'town', topic: 'taxi drivers who want to buy out the company and still compete',
    text: "From a proposal by the Frome drivers: 'The company that owns the taxis takes a share of every fare, and the drivers take the night shifts, and we are with the drivers. Each taxi firm should belong to its drivers, and the firms should compete for passengers, set their own fares and go under if they cannot cover their costs. We will ask the voters for a law to let drivers buy the company.'",
    outcome: 'mktsoc', route: { D1: ['class'], C1: ['market'], C2: ['vote'] }, also: ['workers'],
    cues: { D1: 'The company that owns the taxis takes a share of every fare, and the drivers take the night shifts, and we are with the drivers', C1: 'Each taxi firm should belong to its drivers, and the firms should compete for passengers, set their own fares and go under if they cannot cover their costs', C2: 'We will ask the voters for a law to let drivers buy the company' },
    reason: { D1: 'The text sets the company that owns the taxis against the drivers, and stands with the drivers: {cue:D1}.',
              C1: 'Each firm is to belong to its drivers, and the firms will compete and risk going under: {cue:C1}.',
              C2: 'The change is to come through a law the voters are asked for: {cue:C2}.' },
    not: { outcome: 'demsoc', why: 'The text gives the firms to their drivers by a vote, which {o:demsoc} asks for. But it also keeps them competing and able to go under, and the more exact answer decides.' } },

  /* ---------- Marxism ---------- */
  { id: 'c-ret-mx1', use: 'return', tier: 'varied', setting: 'housing', topic: 'a talk to bricklayers on what a builder keeps',
    text: "From a talk to the Garrow bricklayers' lodge: 'A bricklayer is paid £75 for a day and lays walls that add £125 to the price of a house, once the bricks are paid for. The £50 goes to the builder's owners. This is not the greed of one builder. Every owner has to keep a gap like it, because that is how the arrangement works. The talk is for the bricklayers.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { D1: ["The £50 goes to the builder's owners", 'The talk is for the bricklayers'], C1: 'Every owner has to keep a gap like it, because that is how the arrangement works', C2: 'The talk is for the bricklayers' },
    reason: { D1: 'The text sets the bricklayers against the owners who take the gap, and is written for the bricklayers: {cue:D1}.',
              C1: 'The text explains how owners gain, as the way the arrangement works for every owner: {cue:C1}. It asks for nothing to be done with the building firm.',
              C2: 'The text says nothing about power or the government. It says who the talk is for: {cue:C2}.' },
    not: { outcome: 'classonly', why: 'The text does more than complain about one builder: it says why every owner gains. A text that only complained would be {o:classonly}.' } },

  { id: 'c-ret-mx2', use: 'return', tier: 'varied', setting: 'money', topic: 'a lecture on the fight over who gets what, for bank tellers',
    text: "From a lecture to the Dane Street tellers' club: 'In every age the people who own and the people who work have fought over who gets what, and that fight is what has moved history forward. Today's bank owners gain from what the tellers make and are not paid for. The lecture is for the tellers.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { D1: ['the people who own and the people who work have fought over who gets what', 'The lecture is for the tellers'], C1: ['that fight is what has moved history forward', "Today's bank owners gain from what the tellers make and are not paid for"], C2: 'The lecture is for the tellers' },
    reason: { D1: 'The text sets the people who own against the people who work, and is written for the tellers: {cue:D1}.',
              C1: 'The text says that the fight over who gets what moves history, and that today’s owners profit from the tellers’ work: {cue:C1}. It asks for nothing to be done with the banks.',
              C2: 'The text says nothing about power or the government. It says who the lecture is for: {cue:C2}.' },
    not: { outcome: 'classonly', why: 'The text does more than side with the tellers: it explains how owners gain and what the fight over it does. A text that only took the side would be {o:classonly}.' } },

  { id: 'c-ret-mx4', use: 'return', tier: 'varied', setting: 'health', topic: 'a porters’ talk put to the voters',
    text: "From a talk to the Tarn ward porters: 'A porter is paid £60 for a day and carries work worth £95 to the hospital company once costs are paid. The £35 goes to the company's owners. Every owner has to keep a gap like it, because that is how the arrangement works. We give this talk for the porters, and we mean to argue it at every election and abide by the vote.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['vote'] },
    cues: { D1: ["The £35 goes to the company's owners", 'We give this talk for the porters'], C1: 'Every owner has to keep a gap like it, because that is how the arrangement works', C2: 'we mean to argue it at every election and abide by the vote' },
    reason: { D1: 'The text sets the porters against the owners who take the gap, and is written for the porters: {cue:D1}.',
              C1: 'The text explains how owners gain, as the way the arrangement works for every owner: {cue:C1}. It asks for nothing to be done with the hospital.',
              C2: 'The porters will argue it at elections and abide by the vote: {cue:C2}. The change is to come through an election they can lose, and the government stays.' },
    not: { outcome: 'demsoc', why: 'The talk will be argued at elections, but it asks for no handover. A text that asked for the wards to pass to the government would be {o:demsoc}.' } },

  { id: 'c-ret-an4', use: 'return', tier: 'varied', setting: 'town', topic: 'a tailors’ pamphlet wanting no rulers',
    text: "From a pamphlet for the Rook Lane tailors: 'A tailor is paid £45 for a day and sews coats worth £75 once the cloth is paid for. The £30 goes to the shop's owners. Every owner has to keep a gap like it, because that is how the arrangement works. We want no government to fix it, and we will run the trade and the street ourselves, in meetings. This pamphlet is for the tailors.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['explain'], C2: ['gone'] },
    cues: { D1: ["The £30 goes to the shop's owners", 'This pamphlet is for the tailors'], C1: 'Every owner has to keep a gap like it, because that is how the arrangement works', C2: 'We want no government to fix it, and we will run the trade and the street ourselves, in meetings' },
    reason: { D1: 'The text sets the tailors against the owners who take the gap, and is written for the tailors: {cue:D1}.',
              C1: 'The text explains how owners gain, as the way the arrangement works: {cue:C1}. It asks for nothing to be done with the shops.',
              C2: 'The text wants no government: {cue:C2}. The explanation is the same as in a text that stops there, and what the text goes on to say about the government decides it.' },
    not: { outcome: 'marx', why: 'The text explains how owners gain, as {o:marx} does. But it goes on to say that it wants no government, and {o:marx} leaves the government as it is.' } },

  { id: 'c-ret-mx3', use: 'return', tier: 'varied', setting: 'schooling', topic: 'a pamphlet on what a cleaning contractor keeps',
    text: "From a pamphlet for the Ardmore school cleaners: 'The contractor pays a cleaner £8 an hour and bills the school for the equivalent of £13. The £5 goes to the contractor's owners. It is not the owners' wickedness. It is how any contractor has to work, and the pamphlet is for the cleaners.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { D1: ["The £5 goes to the contractor's owners", 'the pamphlet is for the cleaners'], C1: "It is not the owners' wickedness. It is how any contractor has to work", C2: 'the pamphlet is for the cleaners' },
    reason: { D1: 'The text sets the cleaners against the owners who take the gap, and is written for the cleaners: {cue:D1}.',
              C1: 'The text explains how owners gain as the way any contractor has to work: {cue:C1}. It asks for nothing to be done with the contract.',
              C2: 'The text says nothing about power or the government. It says who it is for: {cue:C2}.' },
    not: { outcome: 'socdem', why: 'The text asks for no law, no tax and no service. It only explains. A text that asked for those, and left the contractor with its contract, would be {o:socdem}.' } }
]);

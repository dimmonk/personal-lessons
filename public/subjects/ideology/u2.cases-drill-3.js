// Political Ideologies, Unit Two: drill cases, second stage (piece), the single-question cases. Each is asked one of the key's two
// questions, and carries marked words and a reason for that question only. The route is still complete, so the case has one name.
// All texts are invented.

FC.cases('ideology', 'u2', [

  /* ---------- Asked the question about the businesses ---------- */
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
    not: { outcome: 'socdem', why: 'The company does not keep the water supply. A text that left the company its pipes and taxed it would be {o:socdem}.' } },

  { id: 'c-p-market', use: 'drill', tier: 'clean', setting: 'money', topic: 'print-shop staff who want to compete as their own bosses',
    text: "From a statement by the Stannard print-shop staff: 'The shop's owners take the profit, and we run the presses. We want each print shop to belong to its staff, to compete for orders and set its own prices, and to close if it loses its customers.'",
    outcome: 'mktsoc', route: { D1: ['class'], C1: ['market'], C2: ['none'] },
    cues: { C1: 'We want each print shop to belong to its staff, to compete for orders and set its own prices, and to close if it loses its customers' },
    reason: { C1: 'Each shop is to belong to its staff and to compete and risk closing: {cue:C1}. Both halves are in the text.' },
    not: { outcome: 'demsoc', why: 'Giving the shops to their staff is something {o:demsoc} asks for as well. This text also keeps the shops competing and able to close, and the more exact answer decides.' } },

  { id: 'c-p-workers', use: 'drill', tier: 'clean', setting: 'town', topic: 'bus drivers who want the depot and no council',
    text: "From a poster at the Holloway bus depot: 'The depot's owners run the buses for profit, and the council backs them, and we are with the drivers. The depot should belong to the people who drive and mend the buses. We want no council and no government to run the town: we will do that ourselves, together.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { C1: 'The depot should belong to the people who drive and mend the buses', C2: 'We want no council and no government to run the town: we will do that ourselves, together' },
    reason: { C1: 'The depot is to belong to the people who drive and mend the buses: {cue:C1}. Nothing is said about competing for passengers.' },
    not: { outcome: 'mktsoc', why: 'Both give the depot to its workers. This text says nothing about competing, and wants no government. A text that kept the depot competing for passengers would be {o:mktsoc}.' } },

  { id: 'c-p-explain', use: 'drill', tier: 'clean', setting: 'money', topic: 'a talk on what a bank keeps from its clerks',
    text: "From a talk to the clerks at the Merrow bank: 'The bank pays a clerk $70 a day, and the clerk brings the bank $120 in fees once costs are paid. The $50 goes to the bank's owners. Every bank has to keep a gap like it; that is how the arrangement works, for every owner. The talk is for the clerks.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { C1: 'Every bank has to keep a gap like it; that is how the arrangement works, for every owner' },
    reason: { C1: 'The text explains how the owners gain, as the way the arrangement works for every owner: {cue:C1}. It asks for nothing to be done with the bank.' },
    not: { outcome: 'classonly', why: 'The text does more than side with the clerks: it says why every owner gains. A text that only took the clerks’ side would be {o:classonly}.' } },

  /* ---------- Asked the question about the government ---------- */
  { id: 'c-p-seize', use: 'drill', tier: 'clean', setting: 'housing', topic: 'builders’ league taking the developments and ruling alone',
    text: "From a statement by the Larkhill builders' party: 'The firms that own the developments and the builders who raise them are on opposite sides, and we are with the builders. The party will take the developments by force and keep the power it wins. It will tolerate no rival party. The developments will then be everyone's.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['public'], C2: ['seize'] },
    cues: { C1: "The developments will then be everyone's", C2: 'The party will take the developments by force and keep the power it wins. It will tolerate no rival party' },
    reason: { C2: 'The party will take power by force and keep it, with no rival: {cue:C2}.' },
    not: { outcome: 'demsoc', why: 'The developments are to be everyone’s, which {o:demsoc} asks for too. But the party will keep power with no rival, and a text that left the change to the voters would be {o:demsoc}.' } },

  { id: 'c-p-vote', use: 'drill', tier: 'clean', setting: 'schooling', topic: 'school caterers who will fight an election for it',
    text: "From a motion by the Penhallow school caterers' union: 'The company that owns the school catering contract pays us late, and we stand with the caterers. School catering should pass to the county, run for the children. We will fight for it at the county election in May and accept the result.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['vote'] },
    cues: { C1: 'School catering should pass to the county, run for the children', C2: 'We will fight for it at the county election in May and accept the result' },
    reason: { C2: 'The union will put its case to the voters and accept the result: {cue:C2}. The change is to come through an election it can lose.' },
    not: { outcome: 'ml', why: 'The text hands school catering to the county, as {o:ml} might. But it accepts the result of an election. A text that said a party would take power and keep it would be {o:ml}.' } },

  { id: 'c-p-gone', use: 'drill', tier: 'clean', setting: 'work', topic: 'bakers who want no rulers',
    text: "A notice at the Wren Lane bakery: 'The owner of this bakery pays us wages and keeps the rest, and the government fines us if we pick our own hours. We are with the bakers. The bakery should belong to those who bake in it. We want the government gone and no party in its place, and we will run the bakery and the street together, in meetings.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['workers'], C2: ['gone'] },
    cues: { C1: 'The bakery should belong to those who bake in it', C2: 'We want the government gone and no party in its place, and we will run the bakery and the street together, in meetings' },
    reason: { C2: 'The text wants the government gone, with no party in its place: {cue:C2}.' },
    not: { outcome: 'ml', why: 'Both want the workers to take over. This text wants no party in the government’s place. A text that said a party would take power and keep it would be {o:ml}.' } },

  { id: 'c-p-none2', use: 'drill', tier: 'clean', setting: 'health', topic: 'clinic staff who want to own a competing clinic',
    text: "A proposal from the Brook Street clinic staff: 'The clinic's owners keep the fees, and we see the patients. The clinic should belong to the nurses and doctors who work in it, and should compete with other clinics for patients, set its fees and close if it cannot cover its costs.'",
    outcome: 'mktsoc', route: { D1: ['class'], C1: ['market'], C2: ['none'] },
    cues: { C1: 'The clinic should belong to the nurses and doctors who work in it, and should compete with other clinics for patients, set its fees and close if it cannot cover its costs', C2: 'close if it cannot cover its costs' },
    reason: { C2: 'The text says nothing about elections, about a party taking power, or about the government itself. Its last words are about the clinic closing: {cue:C2}.' },
    not: { outcome: 'demsoc', why: 'The clinic is to be handed to its staff, as {o:demsoc} might. But the text also keeps it competing and able to close, and it says nothing about how power is won, which is what the question about the government would need.' } }
]);

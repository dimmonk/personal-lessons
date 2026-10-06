// Political Ideologies, Unit Two: drill cases, first stage (piece), second group. All texts are invented.

FC.cases('ideology', 'u2', [

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
    not: { outcome: 'classonly', why: 'The text does more than side with the clerks: it says why every owner gains. A text that only took the clerks’ side would be {o:classonly}.' } }
]);

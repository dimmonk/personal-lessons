// Political Ideologies, Unit Two: drill cases, first stage (piece), third group. All texts are invented.

FC.cases('ideology', 'u2', [

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

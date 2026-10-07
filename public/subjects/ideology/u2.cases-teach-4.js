// Political Ideologies, Unit Two: cases shown inside cards, part four (the exception that says nothing about the businesses, the two
// cases that check each question, and the worked case).

FC.cases('ideology', 'u2', [

  { id: 'c-ex-committee', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a bulletin silent on the shipyard but loud on rule', name: 'The shipyard bulletin',
    text: "From a bulletin of the Carrow shipyard committee: 'The yard's owners are on one side and we, the yard workers, are on the other, and we are on our side. Hold the line on Thursday. When the committee has the city, it will rule alone and no rival party will be allowed to stand.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['none'], C2: ['seize'] },
    cues: { C1: 'Hold the line on Thursday', C2: 'When the committee has the city, it will rule alone and no rival party will be allowed to stand' },
    segments: [
      { text: "The yard's owners are on one side and we, the yard workers, are on the other, and we are on our side", note: 'That names the two sides. It says nothing about the yard or about who holds power.' },
      { text: 'Hold the line on Thursday', note: 'That is a call to stand together. It says nothing about the yard or about power.' },
      { text: 'When the committee has the city, it will rule alone and no rival party will be allowed to stand' }
    ] },

  { id: 'c-q-bakers', use: 'check', tier: 'clean', setting: 'town', topic: 'bakers who want to run each bakery together', name: 'Bakers who want to run each bakery together',
    text: "From the newsletter of the Fennick bakers' union: 'The bakeries' owners keep the profit, and we bake. We stand with the bakers. Each bakery should belong to the people who bake in it, and the bakers should run it together.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['workers'], C2: ['none'] },
    cues: { C1: 'Each bakery should belong to the people who bake in it, and the bakers should run it together' },
    reason: { C1: 'Each bakery is to belong to the people who bake in it: {cue:C1}. Nothing is said about competing, so this is the plain handover to the workers.' } },

  { id: 'c-q-shops', use: 'check', tier: 'clean', setting: 'money', topic: 'shop staff putting it to the voters', name: 'Shop staff putting it to the voters',
    text: "A statement from the Penny Lane shop workers' union: 'The chain that owns the shops keeps the profit, and we stand behind the counters. We would leave the shops with the chain, and tax its profits to pay for a minimum wage and sick pay. We will make our case to the voters at the next election and let them decide.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['vote'] },
    cues: { C1: 'We would leave the shops with the chain, and tax its profits to pay for a minimum wage and sick pay', C2: 'We will make our case to the voters at the next election and let them decide' },
    reason: { C2: 'The change is to come through an election the union can lose: {cue:C2}. The government stays, and the voters decide who runs it.' } },

  { id: 'c-w-docks', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a sum on the gap, and a league taking the docks', name: 'The dock party pamphlet',
    text: "From a pamphlet of the Orrin Docks workers' party: 'A docker is paid $70 for a day's work and unloads goods that earn the dock company $110 once the running costs are taken off. The $40 goes to the owners, and the owners and the dockers want opposite things from it. Every owner has to keep a gap like it, because that is how the arrangement works. Waiting for elections will not end it. The party will take the government by force, hold it, and allow no rival party. The docks will then belong to the government, run for everyone.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['public'], C2: ['seize'] }, also: ['explain'],
    cues: { D1: "the owners and the dockers want opposite things from it", C1: 'The docks will then belong to the government, run for everyone', C2: 'The party will take the government by force, hold it, and allow no rival party' } }
]);

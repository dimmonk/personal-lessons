// Political Ideologies, Unit Two: cases shown inside cards, part four (the named messy cases of the exception cards, the two
// cases that test a whole question, and the two cases the worked cards walk through).
// All texts are invented. A case that shows two answers at once says so in `also`; the key says which wins.

FC.cases('ideology', 'u2', [

  /* ---------- Exceptions: looks like Y, is X ---------- */
  { id: 'c-ex-railbus', use: 'teach', tier: 'misleading', setting: 'town', topic: 'rail and buses handed over, everything else taxed', name: 'The rail and bus manifesto',
    text: "From a manifesto by the Penrose rail and bus workers: 'The owners of the railways and the bus firms keep the fares and give us the shifts, and we stand with the workers. We would tax the owners of everything else and use the money to pay for sick pay, pensions and schools. But the railways and the bus firms should be taken from their owners and run by the government for everyone.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['none'] }, also: ['keep'],
    cues: { C1: 'the railways and the bus firms should be taken from their owners and run by the government for everyone' },
    segments: [
      { text: 'The owners of the railways and the bus firms keep the fares and give us the shifts, and we stand with the workers', note: 'That names the owners and the workers and the side the text takes. It does not say what should happen to the railways and the buses.' },
      { text: 'We would tax the owners of everything else and use the money to pay for sick pay, pensions and schools', note: 'That is a tax on owners who keep their businesses, with services paid from it. It is true of the text, and it is why the text looks like the first name you met. It is not what settles the answer here.' },
      { text: 'the railways and the bus firms should be taken from their owners and run by the government for everyone' }
    ] },

  { id: 'c-ex-glassworks', use: 'teach', tier: 'misleading', setting: 'work', topic: 'glassworks owned by their staff, still competing', name: 'The glassworks motion',
    text: "From a motion at the Brakewell glassworks: 'The glassworks' owners and the glassblowers are on opposite sides, and we are on the side of the glassblowers. We will ask the voters for a law that hands each glassworks to the people who work in it. Those glassworks will still compete with each other for customers, set their own prices, and fail if they cannot pay their way.'",
    outcome: 'mktsoc', route: { D1: ['class'], C1: ['market'], C2: ['vote'] }, also: ['workers'],
    cues: { C1: 'Those glassworks will still compete with each other for customers, set their own prices, and fail if they cannot pay their way', C2: 'We will ask the voters for a law' },
    segments: [
      { text: "The glassworks' owners and the glassblowers are on opposite sides, and we are on the side of the glassblowers", note: 'That names the two groups and the side the text takes. It does not say what should happen to the glassworks.' },
      { text: 'We will ask the voters for a law that hands each glassworks to the people who work in it', note: 'That is the handover to the workers, by a vote. It is true of the text, and it is why the text looks like the one you met before. It is not what settles the answer here.' },
      { text: 'Those glassworks will still compete with each other for customers, set their own prices, and fail if they cannot pay their way' }
    ] },

  { id: 'c-ex-dyeworks', use: 'teach', tier: 'misleading', setting: 'work', topic: 'an account of the gap ending in a plan', name: 'The dye-works pamphlet',
    text: "From a pamphlet at the Weir dye works: 'A dyer is paid $55 for a day and dyes cloth that sells for $95 once the running costs are taken off. The $40 goes to the owner, and the owner and the dyers want opposite things from it. Every owner has to keep a gap like it, because that is how the arrangement works. This is why the dye works should be taken into public ownership and run for everyone, and why we will vote for those who say so.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['vote'] }, also: ['explain'],
    cues: { C1: 'the dye works should be taken into public ownership and run for everyone', C2: 'we will vote for those who say so' },
    segments: [
      { text: 'A dyer is paid $55 for a day and dyes cloth that sells for $95 once the running costs are taken off. The $40 goes to the owner, and the owner and the dyers want opposite things from it', note: 'That is a sum showing a gap, and the two sides. It is where the text begins, and it is not what settles the answer.' },
      { text: 'Every owner has to keep a gap like it, because that is how the arrangement works', note: 'That is the explanation. It is true of the text, and it is why the text looks like an explanation and nothing more. The text goes on to ask for something.' },
      { text: 'the dye works should be taken into public ownership and run for everyone' }
    ] },

  { id: 'c-ex-committee', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a bulletin silent on the shipyard but loud on rule', name: 'The shipyard bulletin',
    text: "From a bulletin of the Carrow shipyard committee: 'The yard's owners are on one side and we, the yard workers, are on the other, and we are on our side. Hold the line on Thursday. When the committee has the city, it will rule alone and no rival party will be allowed to stand.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['none'], C2: ['seize'] },
    cues: { C1: 'Hold the line on Thursday', C2: 'When the committee has the city, it will rule alone and no rival party will be allowed to stand' },
    segments: [
      { text: "The yard's owners are on one side and we, the yard workers, are on the other, and we are on our side", note: 'That names the two groups and the side the text takes. It says nothing about what should happen to the yard or about who holds power.' },
      { text: 'Hold the line on Thursday', note: 'That is a call to stand together. It says nothing about the yard, or about power.' },
      { text: 'When the committee has the city, it will rule alone and no rival party will be allowed to stand' }
    ] },

  { id: 'c-ex-flyer', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a flyer silent on the warehouse but loud against rulers', name: 'The warehouse flyer',
    text: "From a flyer left at the Dunmere warehouse gate: 'The owners get the profit and we get the shifts, and we are on the side of the people who work. We do not want a government to fix it for us: we want none. Come to the open meeting on Sunday and we will begin running things ourselves.'",
    outcome: 'anarch', route: { D1: ['class'], C1: ['none'], C2: ['gone'] },
    cues: { C1: 'Come to the open meeting on Sunday', C2: 'We do not want a government to fix it for us: we want none. Come to the open meeting on Sunday and we will begin running things ourselves' },
    segments: [
      { text: 'The owners get the profit and we get the shifts, and we are on the side of the people who work', note: 'That names the two groups and the side the text takes. It says nothing about the government.' },
      { text: 'We do not want a government to fix it for us: we want none. Come to the open meeting on Sunday and we will begin running things ourselves' }
    ] },

  /* ---------- Two cases that test a whole question ---------- */
  { id: 'c-q-bakers', use: 'check', tier: 'clean', setting: 'town', topic: 'bakers who want to run each bakery together', name: 'Bakers who want to run each bakery together',
    text: "From the newsletter of the Fennick bakers' union: 'The bakeries' owners keep the profit, and we bake. We stand with the bakers. Each bakery should belong to the people who bake in it, and the bakers should run it together.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['workers'], C2: ['none'] },
    cues: { C1: 'Each bakery should belong to the people who bake in it, and the bakers should run it together' },
    reason: { C1: 'The bakeries are to belong to the people who bake in them: {cue:C1}. Nothing is said about competing for customers, so this is the plain handover to the workers.' } },

  { id: 'c-q-shops', use: 'check', tier: 'clean', setting: 'money', topic: 'shop staff putting it to the voters', name: 'Shop staff putting it to the voters',
    text: "A statement from the Penny Lane shop workers' union: 'The chain that owns the shops keeps the profit, and we stand behind the counters. We would leave the shops with the chain, and tax its profits to pay for a minimum wage and sick pay. We will make our case to the voters at the next election and let them decide.'",
    outcome: 'socdem', route: { D1: ['class'], C1: ['keep'], C2: ['vote'] },
    cues: { C1: 'We would leave the shops with the chain, and tax its profits to pay for a minimum wage and sick pay', C2: 'We will make our case to the voters at the next election and let them decide' },
    reason: { C2: 'The change is to come through an election that the union can lose: {cue:C2}. The government stays, and the voters decide who runs it.' } },

  /* ---------- The cases the worked cards walk through ---------- */
  { id: 'c-w-power', use: 'teach', tier: 'clean', setting: 'town', topic: 'station staff who want a station in common ownership', name: 'The power-station leaflet',
    text: "From a leaflet by the Marrow Hill power-station staff: 'The company that owns the power station sells the power, and the staff keep it running, and we stand with the staff. The power station should be owned by the government, run for everyone, not for the company's shareholders.'",
    outcome: 'demsoc', route: { D1: ['class'], C1: ['public'], C2: ['none'] },
    cues: { D1: "The company that owns the power station sells the power, and the staff keep it running, and we stand with the staff", C1: "The power station should be owned by the government, run for everyone, not for the company's shareholders", C2: "run for everyone, not for the company's shareholders" } },

  { id: 'c-w-docks', use: 'teach', tier: 'misleading', setting: 'work', topic: 'a sum on the gap, and a league taking the docks', name: 'The dock party pamphlet',
    text: "From a pamphlet of the Orrin Docks workers' party: 'A docker is paid $70 for a day's work and unloads goods that earn the dock company $110 once the running costs are taken off. The $40 goes to the owners, and the owners and the dockers want opposite things from it. Every owner has to keep a gap like it, because that is how the arrangement works. Waiting for elections will not end it. The party will take the government by force, hold it, and allow no rival party. The docks will then belong to the government, run for everyone.'",
    outcome: 'ml', route: { D1: ['class'], C1: ['public'], C2: ['seize'] }, also: ['explain'],
    cues: { D1: "the owners and the dockers want opposite things from it", C1: 'The docks will then belong to the government, run for everyone', C2: 'The party will take the government by force, hold it, and allow no rival party' } }
]);

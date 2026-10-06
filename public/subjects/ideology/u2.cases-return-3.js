// Political Ideologies, Unit Two: fresh cases kept back for later days (Market socialism, Marxism). All texts are invented.

FC.cases('ideology', 'u2', [

  { id: 'c-ret-mk1', use: 'return', tier: 'varied', setting: 'housing', topic: 'roofers who want to own a roofing firm bidding for jobs',
    text: "From a vote of the Hale roofers: 'The firm that owns the roofing business takes the profit and sends us up the ladders, and we are with the roofers. The business should belong to the roofers, and should keep bidding for jobs against other roofing firms, set its own prices and go out of business if it loses money.'",
    outcome: 'mktsoc', route: { D1: ['class'], C1: ['market'], C2: ['none'] },
    cues: { D1: 'The firm that owns the roofing business takes the profit and sends us up the ladders, and we are with the roofers', C1: 'The business should belong to the roofers, and should keep bidding for jobs against other roofing firms, set its own prices and go out of business if it loses money', C2: 'go out of business if it loses money' },
    reason: { D1: 'The text sets the firm that owns the business against the roofers, and stands with the roofers: {cue:D1}.',
              C1: 'The business is to belong to the roofers and to keep competing for jobs and risk failing: {cue:C1}.',
              C2: 'The text says nothing about power or the government. Its last words are about the business failing: {cue:C2}.' },
    not: { outcome: 'anarch', why: 'Both give the business to the people who work in it. This text keeps it competing, and says nothing about getting rid of the government.' } },

  { id: 'c-ret-mx1', use: 'return', tier: 'varied', setting: 'housing', topic: 'a talk to bricklayers on what a builder keeps',
    text: "From a talk to the Garrow bricklayers' lodge: 'A bricklayer is paid $75 for a day and lays walls that add $125 to the price of a house, once the bricks are paid for. The $50 goes to the builder's owners. This is not the greed of one builder. Every owner has to keep a gap like it, because that is how the arrangement works. The talk is for the bricklayers.'",
    outcome: 'marx', route: { D1: ['class'], C1: ['explain'], C2: ['none'] },
    cues: { D1: ["The $50 goes to the builder's owners", 'The talk is for the bricklayers'], C1: 'Every owner has to keep a gap like it, because that is how the arrangement works', C2: 'The talk is for the bricklayers' },
    reason: { D1: 'The text sets the bricklayers against the owners who take the gap, and is written for the bricklayers: {cue:D1}.',
              C1: 'The text explains how owners gain, as the way the arrangement works for every owner: {cue:C1}. It asks for nothing to be done with the building firm.',
              C2: 'The text says nothing about power or the government. It says who the talk is for: {cue:C2}.' },
    not: { outcome: 'classonly', why: 'The text does more than complain about one builder: it says why every owner gains. A text that only complained would be {o:classonly}.' } }
]);

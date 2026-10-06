// Wealth Preservation, Unit Three: fresh cases held back for later days, part four: a loan the lender could use.
// Field guide: see u3.cases-return-1.js.

FC.cases('wealth', 'u3', [

  /* ---------- Borrow modestly, on safe terms ---------- */
  { id: 'w3-x-del-1', use: 'return', tier: 'clean', setting: 'work', topic: 'shares bought on a loan with a sell rule',
    text: "Ellen, 44, owns shares worth $500,000, bought partly with a $320,000 margin loan from her brokerage. The contract says the brokerage may sell her shares without warning if the loan is ever more than 70% of their value. Today the loan is 64%.",
    outcome: 'deleverage', route: { D1: ['shock'], S1: ['riskyloan'] },
    cues: { D1: 'the brokerage may sell her shares without warning if the loan is ever more than 70% of their value',
            S1: 'the brokerage may sell her shares without warning if the loan is ever more than 70% of their value' },
    reason: { D1: 'A loan could force a sale of shares that are most of what she owns: {cue:D1}.',
              S1: 'The lender’s power is in the contract: {cue:S1}. $320,000 ÷ 0.7 is about $457,000, so a fall of under 9% in the shares would let the brokerage sell.' },
    not: { outcome: 'safe', why: 'A safe loan could not be acted on at the lender’s choice. This one can, and the margin before the brokerage acts is small.' },
    wouldChange: 'If the loan were $100,000 with no right for the brokerage to sell, it would be {a:S1.madesafe}.' },

  { id: 'w3-x-del-2', use: 'return', tier: 'varied', setting: 'property', topic: 'two apartment buildings and a rate reset',
    text: "Dimitri, 58, owns two apartment buildings worth $1,500,000 and owes $1,250,000 on them. The loan’s rate moves with the prime rate and was reset last month from 4% to 8%. The rents are $110,000 a year.",
    outcome: 'deleverage', route: { D1: ['shock'], S1: ['riskyloan'] },
    cues: { D1: 'owes $1,250,000 on them',
            S1: ['owes $1,250,000 on them', 'The loan’s rate moves with the prime rate and was reset last month from 4% to 8%'] },
    reason: { D1: 'A loan could force a sale of the buildings, most of what he owns: {cue:D1}. $1,250,000 out of $1,500,000 is 83%.',
              S1: 'The loan is large against the buildings, and the rate can jump: {cue:S1}. Interest on $1,250,000 went from $50,000 a year to $100,000, out of rents of $110,000.' },
    not: { outcome: 'safe', why: 'A loan against property can be safe, but a safe one is small and fixed. This one is 83% of the value, and its rate has doubled.' },
    wouldChange: 'If he owed $300,000 at a rate fixed for fifteen years, it would be {a:S1.madesafe}.' },

  { id: 'w3-x-del-3', use: 'return', tier: 'varied', setting: 'retirement', topic: 'a house loan callable on notice',
    text: "Gerhard, 68, owns a house worth $600,000, which is most of what he has, and owes $450,000 on it. The loan agreement lets the lender demand the money back at any time with three months’ notice.",
    outcome: 'deleverage', route: { D1: ['shock'], S1: ['riskyloan'] },
    cues: { D1: 'owes $450,000 on it',
            S1: 'The loan agreement lets the lender demand the money back at any time with three months’ notice' },
    reason: { D1: 'A loan could force a sale of the house, most of what he has: {cue:D1}. $450,000 out of $600,000 is 75%.',
              S1: 'The lender holds the power: {cue:S1}. Whether Gerhard pays on time makes no difference to it.' },
    not: { outcome: 'safe', why: 'A safe loan cannot be demanded back while it is paid. This one can be, on three months’ notice, however well he pays.' },
    wouldChange: 'If the agreement said the lender could not demand the money back while he paid, and the loan were $120,000, it would be {a:S1.madesafe}.' },

  { id: 'w3-x-del-4', use: 'return', tier: 'misleading', setting: 'business', topic: 'a father’s company shares used as security', echo: 'w3-h-sup-1',
    text: "Hamza, 47, owns 40% of the shares in his father’s construction company, worth $800,000, which is most of what he has. His father runs the company, and Hamza has no part in it. Hamza borrowed $500,000 against his shares, and the lender may demand the money back if their value falls by 15%.",
    outcome: 'deleverage', route: { D1: ['shock'], S1: ['riskyloan'] },
    cues: { D1: 'Hamza borrowed $500,000 against his shares',
            S1: 'the lender may demand the money back if their value falls by 15%' },
    reason: { D1: 'A loan could force a sale of the shares, most of what he has: {cue:D1}. $500,000 out of $800,000 is 63%.',
              S1: 'The lender holds the power: {cue:S1}. A 15% fall takes $800,000 to $680,000, and $500,000 is then 74% of it.' },
    not: { outcome: 'supports', why: 'A company and a loan against its shares bring back a business owner with a gap. But Hamza does not run the company: his father does.' },
    wouldChange: 'If Hamza ran the company himself, it would be {a:S1.ownrun}.' }
]);

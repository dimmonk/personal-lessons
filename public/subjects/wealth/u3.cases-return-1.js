// Wealth Preservation, Unit Three: fresh stories held back for later days: two for each name, one for each of its scheduled returns. A due name returns as a story the learner has not seen, asked as a whole question, beside a story of the name they most often take it for.
// Every case carries its full route (the first question, then this unit's one question). cues[STEP] is the exact phrase in the text
// that decides that step; segments are the tappable pieces for "tap the words" prompts, and note is shown if that piece is tapped in error.

FC.cases('wealth', 'u3', [

  /* ---------- Sell down on a schedule ---------- */
  { id: 'w3-x-div-1', use: 'return', tier: 'clean', setting: 'family', topic: 'brewery shares from a grandfather',
    text: "Bernadette, 63, owns shares worth $510,000 in the regional brewery her grandfather helped to found, which is most of the $600,000 she has. She has never worked there, and nothing stops her selling them.",
    outcome: 'diversify', route: { D1: ['shock'], S1: ['freeheld'] },
    cues: { D1: 'owns shares worth $510,000 in the regional brewery her grandfather helped to found, which is most of the $600,000 she has',
            S1: ['She has never worked there', 'nothing stops her selling them'] },
    reason: { D1: 'One company’s shares are most of what she has: {cue:D1}. $510,000 out of $600,000 is 85%.',
              S1: 'She is free to sell and takes no part in running the company: {cue:S1}.' },
    not: { outcome: 'hedge', why: 'Shares that came down a family are sometimes tied by a rule. Here nothing stops her, so there is no rule to find.' } },

  { id: 'w3-x-div-4', use: 'return', tier: 'misleading', setting: 'retirement', topic: 'monthly sales to live on from one old employer’s shares', echo: 'w3-h-hdg-1',
    also: ['timing'],
    text: "Doug, 62, retired this year. $480,000 of his $560,000 is shares in the engineering company where he worked as an engineer, and he can sell them at any time. He sells $2,500 of them each month to live on, with no cash set aside. This year the company’s price has fallen by 30%.",
    outcome: 'diversify', route: { D1: ['shock'], S1: ['freeheld'] },
    cues: { D1: '$480,000 of his $560,000 is shares in the engineering company where he worked as an engineer',
            S1: ['where he worked as an engineer', 'he can sell them at any time'] },
    reason: { D1: 'One company’s shares are most of what he has: {cue:D1}. Selling shares each month in a fall looks like a story about falling prices, but when a story shows both, the answer is {a:D1.shock}.',
              S1: 'He worked there as an employee and can sell at any time: {cue:S1}. He did not run it, and nothing stops a sale.' },
    not: { outcome: 'supports', why: 'He worked at the company, which can sound like a business he runs. He was an engineer there, not its owner or its head.' } },

  /* ---------- Cap the loss without selling ---------- */
  { id: 'w3-x-hdg-1', use: 'return', tier: 'clean', setting: 'business', topic: 'a studio sold for the buyer’s shares',
    text: "Mina, 35, sold her design studio to a software company and was paid $350,000 in its shares, which is most of the $400,000 she has. The sale agreement says she may not sell any of them for two years.",
    outcome: 'hedge', route: { D1: ['shock'], S1: ['blocked'] },
    cues: { D1: 'was paid $350,000 in its shares, which is most of the $400,000 she has',
            S1: 'she may not sell any of them for two years' },
    reason: { D1: 'One company’s shares are most of what she has: {cue:D1}. $350,000 out of $400,000 is 88%.',
              S1: 'An agreement stops her selling for a set time: {cue:S1}.' },
    not: { outcome: 'diversify', why: 'The shares are most of what she has, and she does not run the company. But she is not free to sell, and selling in steps needs that freedom.' } },

  { id: 'w3-x-hdg-4', use: 'return', tier: 'misleading', setting: 'health', topic: 'a founder’s shares after the company went public', echo: 'w3-h-div-1',
    text: "Dr. Hallett, 57, owns $600,000 of shares in the medical-device company she helped to found, which is most of the $680,000 she has. She left the company’s board years ago and has no say in running it. The company’s rules, set when it sold shares to the public last year, say that she may not sell any of hers until the end of next year.",
    outcome: 'hedge', route: { D1: ['shock'], S1: ['blocked'] },
    cues: { D1: 'owns $600,000 of shares in the medical-device company she helped to found, which is most of the $680,000 she has',
            S1: 'she may not sell any of hers until the end of next year' },
    reason: { D1: 'One company’s shares are most of what she has: {cue:D1}. $600,000 out of $680,000 is 88%.',
              S1: 'A rule stops her selling for a set time: {cue:S1}. That she has no say in running the company is true, but it does not decide the answer.' },
    not: { outcome: 'diversify', why: 'She does not run the company, which fits shares you can sell. But she cannot sell: the rules stop her until the end of next year.' } },

  /* ---------- Put the three supports in place ---------- */
  { id: 'w3-x-sup-1', use: 'return', tier: 'clean', setting: 'business', topic: 'a bakery with a short reserve',
    text: "Carlos, 49, runs the bakery he built, worth $540,000, which is most of the $610,000 he owns. $55,000 is in a 401(k) fund that holds thousands of companies, and $15,000 is in savings against the $36,000 a year his household spends. No bank holds his shares in the bakery as security.",
    outcome: 'supports', route: { D1: ['shock'], S1: ['ownrun'] },
    cues: { D1: 'worth $540,000, which is most of the $610,000 he owns',
            S1: '$15,000 is in savings against the $36,000 a year his household spends' },
    reason: { D1: 'A business he runs is most of what he owns: {cue:D1}. $540,000 out of $610,000 is 89%.',
              S1: 'One safety net is missing: {cue:S1}. $15,000 ÷ $36,000 is about five months, and {t:threesupports} needs several years.' },
    not: { outcome: 'safe', why: 'The 401(k) is spread out and no bank holds the shares, which is two of the three. The savings are five months, not years, and one gap is enough.' } },

  { id: 'w3-x-sup-4', use: 'return', tier: 'misleading', setting: 'work', topic: 'a software firm and a loan in March', echo: 'w3-h-saf-1',
    text: "Isla, 46, runs the software company she founded, worth $900,000, which is most of the $1,700,000 she owns. $500,000 is in funds that hold thousands of companies and $300,000 is in savings, which covers her household’s $50,000 a year for six years. Her accountant says she is well protected. In March the company borrowed $250,000, and the bank holds Isla’s shares in it as security.",
    outcome: 'supports', route: { D1: ['shock'], S1: ['ownrun'] },
    cues: { D1: 'worth $900,000, which is most of the $1,700,000 she owns',
            S1: 'the bank holds Isla’s shares in it as security' },
    reason: { D1: 'A business she runs is most of what she owns: {cue:D1}. $900,000 out of $1,700,000 is 53%.',
              S1: 'Her savings and her funds look like Hugo’s, and her accountant says she is covered. But one of the three has gone: {cue:S1}.' },
    not: { outcome: 'safe', why: 'Six years of savings and funds spread over thousands of companies look like a safe business. But a bank now holds her shares as security, and one gap is enough.' } },

  /* ---------- Safe as it stands ---------- */
  { id: 'w3-x-saf-2', use: 'return', tier: 'varied', setting: 'property', topic: 'a leased guesthouse with high coverage',
    text: "Percy, 66, owns a seaside guesthouse building worth $700,000, which he leases to a hotel operator, and has $200,000 in savings. His landlord insurance pays up to $5,000,000 for harm to guests, and his insurer’s inspector says the largest demand that a guest’s injury could lead to is $2,000,000.",
    outcome: 'safe', route: { D1: ['shock'], S1: ['madesafe'] },
    cues: { D1: 'the largest demand that a guest’s injury could lead to is $2,000,000',
            S1: ['His landlord insurance pays up to $5,000,000 for harm to guests', 'the largest demand that a guest’s injury could lead to is $2,000,000'] },
    reason: { D1: 'One claim could reach what he owns: {cue:D1}. $2,000,000 is more than the $900,000 he has in all.',
              S1: 'The building could bring {t:claim}, and the insurance is far above it: {cue:S1}. $5,000,000 is two and a half times the largest demand, so nothing would reach his savings.' },
    not: { outcome: 'insure', why: 'One claim could come, and it could be larger than everything he owns. But the insurance is two and a half times the largest claim, so there is no gap.' } },

  { id: 'w3-x-saf-4', use: 'return', tier: 'misleading', setting: 'home', topic: 'a fixed loan on a house, and a scare in the news', echo: 'w3-h-del-1',
    text: "Ottilie, 61, owns a house worth $900,000, which is most of what she owns, and owes $200,000 on it. This week the news says that mortgage rates have jumped from 3% to 7%, and her neighbor has told her she will be ruined. Her own rate is fixed at 4% for another fourteen years, and the bank cannot demand the money back while she pays the $1,150 due each month.",
    outcome: 'safe', route: { D1: ['shock'], S1: ['madesafe'] },
    cues: { D1: 'owns a house worth $900,000, which is most of what she owns, and owes $200,000 on it',
            S1: ['Her own rate is fixed at 4% for another fourteen years', 'the bank cannot demand the money back while she pays the $1,150 due each month'] },
    reason: { D1: 'A house with a loan on it is most of what she owns: {cue:D1}.',
              S1: 'The headline is about other people’s loans, and hers is out of its reach: {cue:S1}. $200,000 is 22% of the house.' },
    not: { outcome: 'deleverage', why: 'A jump in rates sounds like a loan whose rate can jump. But her rate is fixed for fourteen years and the bank cannot demand the money back.' } },

  /* ---------- Insure the big loss ---------- */
  { id: 'w3-x-ins-1', use: 'return', tier: 'clean', setting: 'family', topic: 'a hot tub and teenage parties',
    text: "Hamid, 50, owns a house worth $620,000 and has $180,000 in savings. His teenage daughters hold big parties in the backyard, where there is a hot tub. His insurance pays up to $250,000 if a guest is hurt, and a lawyer says a serious accident in the hot tub could lead to a demand for $2,000,000.",
    outcome: 'insure', route: { D1: ['shock'], S1: ['bigclaim'] },
    cues: { D1: 'a serious accident in the hot tub could lead to a demand for $2,000,000',
            S1: ['His insurance pays up to $250,000 if a guest is hurt', 'a serious accident in the hot tub could lead to a demand for $2,000,000'] },
    reason: { D1: 'One claim could reach everything he owns: {cue:D1}. $2,000,000 is more than twice the $800,000 he has in all.',
              S1: 'The hot tub could bring {t:claim}, and the insurance has a limit: {cue:S1}. $2,000,000 less $250,000 leaves $1,750,000 uncovered.' },
    not: { outcome: 'safe', why: 'He has insurance, which can make it look looked after. But $250,000 is far below the $2,000,000 a lawyer says could come.' } },

  { id: 'w3-x-ins-4', use: 'return', tier: 'misleading', setting: 'property', topic: 'six rental houses in one name and a wiring fire', echo: 'w3-h-ent-1',
    also: ['onename'],
    text: "Faisal, 55, owns six rental houses and the house he lives in, all in his own name, worth $2,000,000 together. A lawyer says a fire caused by faulty wiring in the oldest rental could lead to demands for $3,000,000 from the tenants who were hurt. His landlord insurance pays up to $600,000 for all such claims.",
    outcome: 'insure', route: { D1: ['shock'], S1: ['bigclaim'] },
    cues: { D1: 'a fire caused by faulty wiring in the oldest rental could lead to demands for $3,000,000 from the tenants who were hurt',
            S1: ['a fire caused by faulty wiring in the oldest rental could lead to demands for $3,000,000 from the tenants who were hurt', 'His landlord insurance pays up to $600,000 for all such claims'] },
    reason: { D1: 'One claim could reach everything he owns: {cue:D1}. $3,000,000 is more than the $2,000,000 he has in all.',
              S1: 'One fire could bring {t:claim} far bigger than the insurance: {cue:S1}. $3,000,000 less $600,000 leaves $2,400,000 uncovered, and when a story shows both this and properties in one name, the claim comes first.' },
    not: { outcome: 'entity', why: 'Six rentals and a home in one name is what several properties in one name look like, and it is true here. But {t:claim} far bigger than the insurance comes first.' } },

  /* ---------- Separate companies ---------- */
  { id: 'w3-x-ent-1', use: 'return', tier: 'clean', setting: 'property', topic: 'eight rental condos in three towns, all in one name',
    text: "Zoltan, 60, owns eight rental condos in three towns, and the house he lives in, all in his own name. The condos are worth $150,000 each and the house $400,000. Any tenant who is badly hurt could bring a claim against him.",
    outcome: 'entity', route: { D1: ['shock'], S1: ['onename'] },
    cues: { D1: 'all in his own name',
            S1: ['all in his own name', 'Any tenant who is badly hurt could bring a claim against him'] },
    reason: { D1: 'One claim could reach everything he owns: {cue:D1}. Together that is $1,600,000.',
              S1: 'Several properties could each bring {t:claim}, and they are all in one name: {cue:S1}. One claim on one $150,000 condo could reach the other seven and his home.' },
    not: { outcome: 'insure', why: 'Nothing says what any insurance pays or how big {t:claim} could be. The story shows only how everything is held.' } },

  { id: 'w3-x-ent-4', use: 'return', tier: 'misleading', setting: 'work', topic: 'a company for the practice and none for the condos', echo: 'w3-h-exc-ins',
    text: "Khalid, 50, an accountant, owns two condos that he rents out and the house he lives in, worth $900,000 in all. He set up a company last year, but it is for his accounting practice. The condos and the house are all in his own name, and a tenant who is hurt in either condo could bring a claim.",
    outcome: 'entity', route: { D1: ['shock'], S1: ['onename'] },
    cues: { D1: 'The condos and the house are all in his own name',
            S1: ['The condos and the house are all in his own name', 'a tenant who is hurt in either condo could bring a claim'] },
    reason: { D1: 'One claim could reach everything he owns: {cue:D1}. Together that is $900,000.',
              S1: 'The properties are all in one name: {cue:S1}. His company holds only the practice, so {t:claim} on a condo could reach the other condo and his house.' },
    not: { outcome: 'safe', why: 'He has a company, which can sound like properties held apart. But it holds his accounting practice, not the condos, which are in his own name.' } },

  /* ---------- Borrow modestly ---------- */
  { id: 'w3-x-del-1', use: 'return', tier: 'clean', setting: 'work', topic: 'shares bought on a loan with a sell rule',
    text: "Ellen, 44, owns shares worth $500,000, bought partly with a $320,000 margin loan from her brokerage. The contract says the brokerage may sell her shares without warning if the loan is ever more than 70% of their value. Today the loan is 64%.",
    outcome: 'deleverage', route: { D1: ['shock'], S1: ['riskyloan'] },
    cues: { D1: 'the brokerage may sell her shares without warning if the loan is ever more than 70% of their value',
            S1: 'the brokerage may sell her shares without warning if the loan is ever more than 70% of their value' },
    reason: { D1: 'A loan could force a sale of shares that are most of what she owns: {cue:D1}.',
              S1: 'The lender’s power is in the contract: {cue:S1}. $320,000 ÷ 0.7 is about $457,000, so a fall of under 9% in the shares would let the brokerage sell.' },
    not: { outcome: 'safe', why: 'With a safe loan the lender cannot act when it likes. Here it can, and the room before it acts is small.' } },

  { id: 'w3-x-del-4', use: 'return', tier: 'misleading', setting: 'business', topic: 'a father’s company shares used as security', echo: 'w3-h-sup-1',
    text: "Hamza, 47, owns 40% of the shares in his father’s construction company, worth $800,000, which is most of what he has. His father runs the company, and Hamza has no part in it. Hamza borrowed $500,000 against his shares, and the lender may demand the money back if their value falls by 15%.",
    outcome: 'deleverage', route: { D1: ['shock'], S1: ['riskyloan'] },
    cues: { D1: 'Hamza borrowed $500,000 against his shares',
            S1: 'the lender may demand the money back if their value falls by 15%' },
    reason: { D1: 'A loan could force a sale of the shares, most of what he has: {cue:D1}. $500,000 out of $800,000 is 63%.',
              S1: 'The lender holds the power: {cue:S1}. A 15% fall takes $800,000 to $680,000, and $500,000 is then 74% of it.' },
    not: { outcome: 'supports', why: 'A company and a loan against its shares sound like a business owner with a gap. But Hamza does not run the company: his father does.' } }
]);

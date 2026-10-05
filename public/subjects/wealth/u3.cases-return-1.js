// Wealth Preservation, Unit Three: fresh cases held back for later days (lesson standard E9, V44), part one: one holding that the
// person is free to sell and does not run, and one that is not allowed to be sold yet. Four for each name, one for each of its
// scheduled returns (an action subject adds the fourth, at about twelve weeks). A due name returns as a case the learner has not
// seen, asked as a whole route, beside a case of the name they most often take it for. Field guide: see u3.cases-drill-1.js.

FC.cases('wealth', 'u3', [

  /* ---------- Sell down on a schedule ---------- */
  { id: 'w3-x-div-1', use: 'return', tier: 'clean', setting: 'family', topic: 'brewery shares from a grandfather',
    text: "Bernadette, 63, owns shares worth £510,000 in the regional brewery her grandfather helped to found, which is most of the £600,000 she has. She has never worked there, and nothing stops her selling them.",
    outcome: 'diversify', route: { D1: ['shock'], S1: ['freeheld'] },
    cues: { D1: 'owns shares worth £510,000 in the regional brewery her grandfather helped to found, which is most of the £600,000 she has',
            S1: ['She has never worked there', 'nothing stops her selling them'] },
    reason: { D1: 'One company’s shares are most of what she has: {cue:D1}. £510,000 out of £600,000 is 85%.',
              S1: 'She is free to sell and takes no part in running the company: {cue:S1}.' },
    not: { outcome: 'hedge', why: 'Shares that came down a family are sometimes tied by a rule. Here nothing stops her, so there is no rule to point to.' },
    wouldChange: 'If the family agreement barred any sale for ten years, it would be {a:S1.blocked}.' },

  { id: 'w3-x-div-2', use: 'return', tier: 'varied', setting: 'retirement', topic: 'a hotel building run by a management company',
    text: "Walter, 74, owns a hotel building worth £1,100,000, which is most of the £1,250,000 he has. A management company runs the hotel under a contract, and the contract lets Walter sell the building whenever he wishes.",
    outcome: 'diversify', route: { D1: ['shock'], S1: ['freeheld'] },
    cues: { D1: 'owns a hotel building worth £1,100,000, which is most of the £1,250,000 he has',
            S1: ['A management company runs the hotel under a contract', 'the contract lets Walter sell the building whenever he wishes'] },
    reason: { D1: 'One property is most of what he has: {cue:D1}. £1,100,000 out of £1,250,000 is 88%.',
              S1: 'Someone else runs it, and he may sell: {cue:S1}. Both facts together are what to point to.' },
    not: { outcome: 'supports', why: 'A hotel is a business, which brings to mind an owner who runs it. Walter does not: a management company does.' },
    wouldChange: 'If Walter ran the hotel himself, with £10,000 in savings, it would be {a:S1.ownrun}.' },

  { id: 'w3-x-div-3', use: 'return', tier: 'varied', setting: 'work', topic: 'a mother’s haulage company shares',
    text: "Salma, 41, is an accountant. Her mother left her 30% of the shares in a haulage company, worth £390,000, which is most of the £470,000 she has. Managers run the company, and nothing in its rules stops her selling her shares.",
    outcome: 'diversify', route: { D1: ['shock'], S1: ['freeheld'] },
    cues: { D1: 'worth £390,000, which is most of the £470,000 she has',
            S1: ['Managers run the company', 'nothing in its rules stops her selling her shares'] },
    reason: { D1: 'One company’s shares are most of what she has: {cue:D1}. £390,000 out of £470,000 is 83%.',
              S1: 'Managers run it, and its rules let her sell: {cue:S1}.' },
    not: { outcome: 'hedge', why: 'A rule in a company’s papers could stop a sale. This case says there is none.' },
    wouldChange: 'If the rules said no shareholder could sell for five years, it would be {a:S1.blocked}.' },

  { id: 'w3-x-div-4', use: 'return', tier: 'misleading', setting: 'retirement', topic: 'monthly sales to live on from one old employer’s shares', echo: 'w3-h-hdg-1',
    also: ['timing'],
    text: "Doug, 62, retired this year. £480,000 of his £560,000 is shares in the engineering company where he worked as an engineer, and he can sell them at any time. He sells £2,500 of them each month to live on, with no cash set aside. This year the company’s price has fallen by 30%.",
    outcome: 'diversify', route: { D1: ['shock'], S1: ['freeheld'] },
    cues: { D1: '£480,000 of his £560,000 is shares in the engineering company where he worked as an engineer',
            S1: ['where he worked as an engineer', 'he can sell them at any time'] },
    reason: { D1: 'One company’s shares are most of what he has: {cue:D1}. £480,000 out of £560,000 is 86%. Selling shares each month in a fall looks like a case about a fall in prices, and the case does show both. When a case shows both, the answer is {a:D1.shock}.',
              S1: 'He worked there as an employee and can sell at any time: {cue:S1}. He did not run it, and nothing stops a sale.' },
    not: { outcome: 'supports', why: 'He worked at the company, which can bring to mind a business he runs. He was an engineer there, not its owner or its head.' },
    wouldChange: 'If the shares were locked for two years, it would be {a:S1.blocked}.' },

  /* ---------- Cap the loss without selling ---------- */
  { id: 'w3-x-hdg-1', use: 'return', tier: 'clean', setting: 'business', topic: 'a studio sold for the buyer’s shares',
    text: "Mina, 35, sold her design studio to a software company and was paid £350,000 in its shares, which is most of the £400,000 she has. The sale agreement says she may not sell any of them for two years.",
    outcome: 'hedge', route: { D1: ['shock'], S1: ['blocked'] },
    cues: { D1: 'was paid £350,000 in its shares, which is most of the £400,000 she has',
            S1: 'she may not sell any of them for two years' },
    reason: { D1: 'One company’s shares are most of what she has: {cue:D1}. £350,000 out of £400,000 is 88%.',
              S1: 'An agreement stops her selling for a set time: {cue:S1}.' },
    not: { outcome: 'diversify', why: 'The shares are one company’s and most of what she has, and she does not run it. But she is not free to sell, and a schedule of sales needs that freedom.' },
    wouldChange: 'If the agreement set no limit, it would be {a:S1.freeheld}.' },

  { id: 'w3-x-hdg-2', use: 'return', tier: 'varied', setting: 'work', topic: 'airline shares held back each year',
    text: "Piotr, 42, is a pilot at an airline that pays part of his salary in its shares. The airline holds each year’s shares for four years before he may sell them. He has £260,000 of them waiting, which is most of the £310,000 he has.",
    outcome: 'hedge', route: { D1: ['shock'], S1: ['blocked'] },
    cues: { D1: 'He has £260,000 of them waiting, which is most of the £310,000 he has',
            S1: 'The airline holds each year’s shares for four years before he may sell them' },
    reason: { D1: 'One company’s shares are most of what he has: {cue:D1}. £260,000 out of £310,000 is 84%.',
              S1: 'A rule holds the shares back for a set time: {cue:S1}.' },
    not: { outcome: 'diversify', why: 'Shares paid as salary can be sold in some schemes. Here the airline’s rule holds each year’s shares for four years, so he is not free to sell.' },
    wouldChange: 'If each year’s shares were his to sell at once, it would be {a:S1.freeheld}.' },

  { id: 'w3-x-hdg-3', use: 'return', tier: 'varied', setting: 'family', topic: 'family tea shares under a ten-year bar',
    text: "Anjali, 29, was given £180,000 of shares in her family’s tea company when she turned 21, and they are most of the £210,000 she has. The family agreement bars any member from selling for ten years from the day of the gift.",
    outcome: 'hedge', route: { D1: ['shock'], S1: ['blocked'] },
    cues: { D1: 'was given £180,000 of shares in her family’s tea company when she turned 21, and they are most of the £210,000 she has',
            S1: 'The family agreement bars any member from selling for ten years from the day of the gift' },
    reason: { D1: 'One company’s shares are most of what she has: {cue:D1}. £180,000 out of £210,000 is 86%.',
              S1: 'An agreement bars any sale for a set time: {cue:S1}. A gift can come with a rule, and the rule is what decides.' },
    not: { outcome: 'diversify', why: 'A gift of shares that a person does not run is often free to sell. This one comes with a ten-year bar, so she is not free.' },
    wouldChange: 'If the agreement had no bar, it would be {a:S1.freeheld}.' },

  { id: 'w3-x-hdg-4', use: 'return', tier: 'misleading', setting: 'health', topic: 'a founder’s shares after the company went public', echo: 'w3-h-div-1',
    text: "Dr Hallett, 57, owns £600,000 of shares in the medical-device company she helped to found, which is most of the £680,000 she has. She left the company’s board years ago and has no say in running it. The company’s rules, set when it sold shares to the public last year, say that she may not sell any of hers until the end of next year.",
    outcome: 'hedge', route: { D1: ['shock'], S1: ['blocked'] },
    cues: { D1: 'owns £600,000 of shares in the medical-device company she helped to found, which is most of the £680,000 she has',
            S1: 'she may not sell any of hers until the end of next year' },
    reason: { D1: 'One company’s shares are most of what she has: {cue:D1}. £600,000 out of £680,000 is 88%.',
              S1: 'A rule stops her selling for a set time: {cue:S1}. That she has no say in running the company is true, and it is not what decides the answer.' },
    not: { outcome: 'diversify', why: 'She has no part in running the company, as with {t:holding} she is free to sell. But she is not free to sell, because the rules stop her until the end of next year.' },
    wouldChange: 'If the rules let her sell now, it would be {a:S1.freeheld}.' }
]);

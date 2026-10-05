// Wealth Preservation, Unit Three: cases shown inside cards, part three (several properties or businesses in one name, a loan the
// lender could use, the two exceptions, the check on the key's question, and the two whole cases). Field guide: see u3.cases-teach-1.js.

FC.cases('wealth', 'u3', [

  /* ---------- The word "a limited company" (no name is asked of this case) ---------- */
  { id: 'w3-h-t-company', use: 'teach', tier: 'clean', setting: 'property', topic: 'two flats, one owned through a company', name: 'Ana and Bo',
    text: "Ana and Bo each own a flat worth £250,000 that they rent out, and each also owns a house worth £500,000. Ana owns her flat in her own name. Bo’s flat belongs to a company he set up, which has £20,000 in its bank account; Bo owns the company, and his house is in his own name. In each flat a tenant is badly hurt in a fall on the stairs. Each tenant wins £400,000 from the owner, and each owner’s insurance pays £100,000 of it, which leaves £300,000 to find." },

  /* ---------- Separate companies for each property or business ---------- */
  { id: 'w3-h-ent-1', use: 'teach', tier: 'clean', setting: 'property', topic: 'six flats, a shop and a home in one name', name: 'Chioma’s properties',
    text: "Chioma, 56, owns six flats that she rents out, a shop and her own home. Every one of them is in her own name, and so is £60,000 in savings. The flats are worth £200,000 each, the shop £250,000 and the home £390,000, which is £1,900,000 in all. Each flat has a tenant, and so does the shop, and any of them could be hurt on the premises and bring a claim.",
    outcome: 'entity', route: { D1: ['shock'], S1: ['onename'] },
    cues: { D1: 'Every one of them is in her own name, and so is £60,000 in savings',
            S1: ['Every one of them is in her own name', 'any of them could be hurt on the premises and bring a claim'] } },

  { id: 'w3-h-ent-2', use: 'teach', tier: 'clean', setting: 'business', topic: 'a café, a bike shop and a gym in one name', name: 'Ewan’s three businesses',
    text: "Ewan, 49, owns a café, a bike shop and a climbing gym, each started in his own name and not through a company. The café is worth £170,000, the bike shop £120,000 and the gym £280,000. Each has customers and staff, and an injury at any of them could bring a claim. His house, worth £450,000, and his £80,000 of savings are in his name too.",
    outcome: 'entity', route: { D1: ['shock'], S1: ['onename'] },
    cues: { D1: 'each started in his own name and not through a company',
            S1: ['each started in his own name and not through a company', 'an injury at any of them could bring a claim'] },
    segments: [
      { text: 'Ewan, 49, owns a café, a bike shop and a climbing gym, each started in his own name and not through a company.' },
      { text: ' The café is worth £170,000, the bike shop £120,000 and the gym £280,000.',
        note: 'That shows how much each business is worth. It does not show whose name it is held in.' },
      { text: ' Each has customers and staff, and an injury at any of them could bring a claim.',
        note: 'That shows that each business could bring {t:claim}. It is half of the answer. The words asked for show whose name they are held in.' },
      { text: ' His house, worth £450,000, and his £80,000 of savings are in his name too.',
        note: 'That shows what {t:claim} could reach. The words asked for are the ones that show how the businesses are held.' }
    ] },

  { id: 'w3-h-ent-chk', use: 'check', tier: 'clean', setting: 'retirement', topic: 'rented houses, all in one name', name: 'Gil and the student houses',
    text: "Gil, 68, retired from building. He owns four houses that he rents out to students, and the house he lives in, all in his own name. Together they are worth £1,300,000, and any tenant who is badly hurt could bring a claim against him.",
    outcome: 'entity', route: { D1: ['shock'], S1: ['onename'] },
    cues: { S1: ['all in his own name', 'any tenant who is badly hurt could bring a claim against him'] },
    reason: { S1: 'Gil owns several properties, and every one is in his own name, with {t:claim} possible on each: {cue:S1}. A demand on one house could reach the other three and his own home, £1,300,000 in all. The case does not say what any insurance pays, so the comparison of {t:claim} with the insurance is not what the case shows.' } },

  { id: 'w3-h-la-ie-a', use: 'teach', tier: 'clean', setting: 'property', topic: 'one flat and a limit on cover', name: 'Maureen, one flat',
    text: "Maureen, 58, owns one flat that she rents out, worth £220,000, and lives in a house worth £480,000. A lawyer says that a tenant badly hurt on the flat’s stairs could win £1,200,000, and her landlord’s insurance pays up to £250,000.",
    outcome: 'insure', route: { D1: ['shock'], S1: ['bigclaim'] },
    cues: { S1: ['could win £1,200,000, and her landlord’s insurance pays up to £250,000'] } },

  { id: 'w3-h-la-ie-b', use: 'teach', tier: 'clean', setting: 'property', topic: 'five flats in one name', name: 'Maureen, five flats',
    text: "Maureen, 58, owns five flats that she rents out, worth £220,000 each, and lives in a house worth £480,000. All of them are in her own name. Any of the tenants could be hurt on the premises and bring a claim, and nothing has been claimed so far.",
    outcome: 'entity', route: { D1: ['shock'], S1: ['onename'] },
    cues: { S1: ['All of them are in her own name', 'Any of the tenants could be hurt on the premises and bring a claim'] } },

  { id: 'w3-h-exc-ins', use: 'teach', tier: 'misleading', setting: 'property', topic: 'five flats and a dangerous stair', name: 'Kwame and the old stairs', also: ['onename'],
    text: "Kwame, 59, owns five flats and the house he lives in, all in his own name, worth £1,400,000 together. A lawyer who looked at the stairs in the oldest flat says that a tenant badly hurt in a fall there could win £2,000,000. Kwame’s landlord insurance pays up to £300,000 on any one claim.",
    outcome: 'insure', route: { D1: ['shock'], S1: ['bigclaim'] },
    cues: { D1: 'could win £2,000,000',
            S1: ['a tenant badly hurt in a fall there could win £2,000,000', 'Kwame’s landlord insurance pays up to £300,000 on any one claim'] },
    segments: [
      { text: 'Kwame, 59, owns five flats and the house he lives in, all in his own name, worth £1,400,000 together.',
        note: 'That is what makes the case look like several properties in one name, and it is true. The question is what could take most of it, and {t:claim} that the insurance cannot meet comes first.' },
      { text: ' A lawyer who looked at the stairs in the oldest flat says that a tenant badly hurt in a fall there could win £2,000,000.' },
      { text: ' Kwame’s landlord insurance pays up to £300,000 on any one claim.',
        note: 'That is the other half of the comparison, and it matters only because of the sentence before it. The words that settle the case are the ones that show the size of the claim.' }
    ] },

  /* ---------- Borrow modestly, on safe terms ---------- */
  { id: 'w3-h-del-1', use: 'teach', tier: 'clean', setting: 'work', topic: 'shares bought with a broker’s loan', name: 'Ian and the broker’s loan',
    text: "Ian, 54, owns shares worth £600,000. £350,000 of that is borrowed from his broker, and the shares are the broker’s security for it. The contract says that if the loan ever becomes more than 60% of what the shares are worth, Ian must pay in more money within two days, or the broker will sell some of his shares.",
    outcome: 'deleverage', route: { D1: ['shock'], S1: ['riskyloan'] },
    cues: { D1: 'or the broker will sell some of his shares',
            S1: 'if the loan ever becomes more than 60% of what the shares are worth, Ian must pay in more money within two days, or the broker will sell some of his shares' } },

  { id: 'w3-h-del-2', use: 'teach', tier: 'clean', setting: 'property', topic: 'a block of flats and a rising rate', name: 'Sunil and the rising rate',
    text: "Sunil, 47, owns a block of flats worth £1,000,000, and owes £800,000 on it. The loan’s rate follows the bank’s base rate, and it has just gone from 3% to 7%. The rents bring in £70,000 a year.",
    outcome: 'deleverage', route: { D1: ['shock'], S1: ['riskyloan'] },
    cues: { D1: 'owes £800,000 on it',
            S1: ['The loan’s rate follows the bank’s base rate, and it has just gone from 3% to 7%', 'owes £800,000 on it'] },
    segments: [
      { text: 'Sunil, 47, owns a block of flats worth £1,000,000, and owes £800,000 on it.',
        note: 'That shows how large the loan is next to what it is borrowed against, which is part of the picture. The words asked for show how the lender’s side of the loan can get worse.' },
      { text: ' The loan’s rate follows the bank’s base rate, and it has just gone from 3% to 7%.' },
      { text: ' The rents bring in £70,000 a year.',
        note: 'That shows what the flats earn. It does not show what could make the loan harder to carry.' }
    ] },

  { id: 'w3-h-del-chk', use: 'check', tier: 'clean', setting: 'retirement', topic: 'a loan due in full after five years', name: 'Maribel and the five-year loan',
    text: "Maribel, 66, owns a flat worth £500,000 and a £60,000 pension. She owes £420,000 on the flat. The bank can change the rate every six months, and the loan must be repaid in full at the end of five years.",
    outcome: 'deleverage', route: { D1: ['shock'], S1: ['riskyloan'] },
    cues: { S1: ['The bank can change the rate every six months'] },
    segments: [
      { text: 'Maribel, 66, owns a flat worth £500,000 and a £60,000 pension. She owes £420,000 on the flat.',
        note: 'That shows the size of the loan, 84% of the flat. The words asked for show the bank’s power to change the terms.' },
      { text: ' The bank can change the rate every six months' },
      { text: ', and the loan must be repaid in full at the end of five years.',
        note: 'That is a second way the lender could cause trouble. The words asked for are the ones about the rate.' }
    ],
    reason: { S1: 'The bank can change the rate every six months, so the cost of the loan can jump, and the loan is large against the flat: £420,000 out of £500,000 is 84%. Either is enough to point to.' } },

  { id: 'w3-h-la-ds2-a', use: 'teach', tier: 'clean', setting: 'home', topic: 'a large loan on a flat', name: 'Jon, £400,000 owed',
    text: "Jon, 45, owns a flat worth £480,000 and owes £400,000 on it. The rate follows the bank’s base rate, and the bank has the right to ask for more money to be put up if the flat’s value falls.",
    outcome: 'deleverage', route: { D1: ['shock'], S1: ['riskyloan'] },
    cues: { S1: ['The rate follows the bank’s base rate', 'the bank has the right to ask for more money to be put up if the flat’s value falls'] } },

  { id: 'w3-h-la-ds2-b', use: 'teach', tier: 'clean', setting: 'home', topic: 'a small loan on a flat', name: 'Jon, £150,000 owed',
    text: "Jon, 45, owns a flat worth £480,000 and owes £150,000 on it. The rate is fixed for fifteen years, and the bank cannot demand the money back as long as he makes the monthly payments.",
    outcome: 'safe', route: { D1: ['shock'], S1: ['madesafe'] },
    cues: { S1: ['The rate is fixed for fifteen years', 'the bank cannot demand the money back as long as he makes the monthly payments'] } },

  { id: 'w3-h-exc-sup', use: 'teach', tier: 'misleading', setting: 'business', topic: 'tyre shops and a demand clause', name: 'Reza and the tyre shops', also: ['riskyloan'],
    text: "Reza, 52, runs a small chain of tyre shops worth £900,000, which is most of the £1,100,000 he owns. Two years ago he borrowed £200,000 from a bank to open a new shop. The loan agreement says the bank can demand the money back if the takings in any three months fall below £60,000, and that the bank may take his shares in the company if he cannot repay it. His savings are £15,000 and his household spends £36,000 a year; the rest of what he owns is £185,000 in funds that hold thousands of companies.",
    outcome: 'supports', route: { D1: ['shock'], S1: ['ownrun'] },
    cues: { D1: 'worth £900,000, which is most of the £1,100,000 he owns',
            S1: ['runs a small chain of tyre shops', 'the bank may take his shares in the company if he cannot repay it', 'His savings are £15,000 and his household spends £36,000 a year'] },
    segments: [
      { text: 'Reza, 52, runs a small chain of tyre shops worth £900,000, which is most of the £1,100,000 he owns.' },
      { text: ' Two years ago he borrowed £200,000 from a bank to open a new shop. The loan agreement says the bank can demand the money back if the takings in any three months fall below £60,000, and that the bank may take his shares in the company if he cannot repay it.',
        note: 'That is what makes the case look like a loan that the lender could use to force a sale, and it is true. But the loan is against his shares in a business he runs, and that is one of {t:threesupports}, so it belongs to this answer.' },
      { text: ' His savings are £15,000 and his household spends £36,000 a year; the rest of what he owns is £185,000 in funds that hold thousands of companies.',
        note: 'That shows a second support that is missing: £15,000 covers about five months. It is not what settles which answer this is.' }
    ] }
]);

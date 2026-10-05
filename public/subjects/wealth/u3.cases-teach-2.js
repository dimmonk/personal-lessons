// Wealth Preservation, Unit Three: cases shown inside cards, part two (a business the person runs, the one that is already made
// safe, and a claim bigger than the insurance). Field guide: see u3.cases-teach-1.js.

FC.cases('wealth', 'u3', [

  /* ---------- The word "the three supports" (no name is asked of this case) ---------- */
  { id: 'w3-h-t-supports', use: 'teach', tier: 'clean', setting: 'business', topic: 'a printing firm with every support', name: 'Lucía’s printing firm',
    text: "Lucía, 50, runs the printing firm her father started. It is worth £900,000. Her other money is £360,000: £270,000 in funds that hold thousands of companies, and £90,000 in savings. She and her family spend £30,000 a year. The loan on her house is secured on the house, and no bank holds her shares in the firm as security." },

  /* ---------- Put the three supports in place ---------- */
  { id: 'w3-h-sup-1', use: 'teach', tier: 'clean', setting: 'business', topic: 'a roofing firm and a lorry loan', name: 'Femi and the roofing firm',
    text: "Femi, 46, runs the roofing firm he started twenty years ago. It is worth £480,000, which is most of the £560,000 he owns. The other £80,000 is a van worth £66,000 and £14,000 in a savings account. His family spends £36,000 a year. Two years ago he borrowed £90,000 to buy a lorry, and the bank holds his shares in the firm as security.",
    outcome: 'supports', route: { D1: ['shock'], S1: ['ownrun'] },
    cues: { D1: 'It is worth £480,000, which is most of the £560,000 he owns',
            S1: ['The other £80,000 is a van worth £66,000 and £14,000 in a savings account', 'His family spends £36,000 a year', 'the bank holds his shares in the firm as security'] } },

  { id: 'w3-h-sup-2', use: 'teach', tier: 'clean', setting: 'health', topic: 'a vet practice with one other holding', name: 'Naomi and the vet practice',
    text: "Naomi, 52, owns and runs a veterinary practice worth £620,000, which is most of the £910,000 she owns. Her household spends £30,000 a year, and £90,000 of her savings is set aside to cover it, which is three years. She has no loan against the practice. The rest, £200,000, is a part-share in a pet-food factory that sells mostly to vets.",
    outcome: 'supports', route: { D1: ['shock'], S1: ['ownrun'] },
    cues: { D1: 'worth £620,000, which is most of the £910,000 she owns',
            S1: 'The rest, £200,000, is a part-share in a pet-food factory that sells mostly to vets' },
    segments: [
      { text: 'Naomi, 52, owns and runs a veterinary practice worth £620,000, which is most of the £910,000 she owns.',
        note: 'That shows she runs a business and that it is most of what she owns. The words asked for show what is missing around it.' },
      { text: ' Her household spends £30,000 a year, and £90,000 of her savings is set aside to cover it, which is three years. She has no loan against the practice.',
        note: 'Those are two of {t:threesupports}, and both are in place. The words asked for show the third, which is not.' },
      { text: ' The rest, £200,000, is a part-share in a pet-food factory that sells mostly to vets.' }
    ] },

  { id: 'w3-h-sup-chk', use: 'check', tier: 'clean', setting: 'work', topic: 'a garage with little set aside', name: 'Dmitri and the garage',
    text: "Dmitri, 63, owns and runs the garage he opened, worth £550,000, which is most of the £600,000 he owns. He has £5,000 in the bank, and the rest, £45,000, is tools and a van. His household spends £28,000 a year. He has never borrowed against the garage.",
    outcome: 'supports', route: { D1: ['shock'], S1: ['ownrun'] },
    cues: { S1: ['He has £5,000 in the bank, and the rest, £45,000, is tools and a van', 'His household spends £28,000 a year'] },
    reason: { S1: 'Dmitri runs the garage, and it is most of what he owns. The other money is not spread across investments, and the bank balance covers about two months of his spending: {cue:S1}. At least one of {t:threesupports} is missing, which is all this answer needs, even though the loan support is in place.' } },

  { id: 'w3-h-la-ds-a', use: 'teach', tier: 'clean', setting: 'business', topic: 'a removals company handed to a manager', name: 'Tariq, no longer running it',
    text: "Tariq, 56, founded a removals company. Last year he handed the day-to-day running to a new manager, and he now takes no part in running it. His shares in it are worth £500,000, which is most of what he has, and his other money is £40,000 in savings. Nothing stops him selling them.",
    outcome: 'diversify', route: { D1: ['shock'], S1: ['freeheld'] },
    cues: { S1: ['he now takes no part in running it', 'Nothing stops him selling them'] } },

  { id: 'w3-h-la-ds-b', use: 'teach', tier: 'clean', setting: 'business', topic: 'a removals company still run by its founder', name: 'Tariq, still running it',
    text: "Tariq, 56, founded a removals company and still runs it every day. It is worth £500,000, which is most of what he has. His other money is £40,000 in savings, and his household spends £35,000 a year.",
    outcome: 'supports', route: { D1: ['shock'], S1: ['ownrun'] },
    cues: { S1: ['still runs it every day', 'His other money is £40,000 in savings, and his household spends £35,000 a year'] } },

  /* ---------- Safe as it stands ---------- */
  { id: 'w3-h-saf-1', use: 'teach', tier: 'clean', setting: 'family', topic: 'a family timber yard with every support', name: 'Hugo and the timber yard',
    text: "Hugo, 57, runs the family timber yard, worth £800,000, which is most of the £1,150,000 he owns. He has £250,000 in funds that hold thousands of companies and £100,000 in savings. His household spends £33,000 a year, so the savings cover three years. No bank holds his shares in the yard as security.",
    outcome: 'safe', route: { D1: ['shock'], S1: ['madesafe'] },
    cues: { D1: 'worth £800,000, which is most of the £1,150,000 he owns',
            S1: ['£250,000 in funds that hold thousands of companies', 'the savings cover three years', 'No bank holds his shares in the yard as security'] } },

  { id: 'w3-h-saf-2', use: 'teach', tier: 'clean', setting: 'home', topic: 'a flat with a small fixed loan', name: 'Beatriz and the flat',
    text: "Beatriz, 44, owns a flat worth £400,000, which is most of what she owns apart from a £60,000 pension. She owes £150,000 on it. The rate is fixed for fifteen years, and the bank cannot demand the money back as long as she pays the £900 due each month. Her pay after tax is £3,100 a month.",
    outcome: 'safe', route: { D1: ['shock'], S1: ['madesafe'] },
    cues: { D1: 'owns a flat worth £400,000, which is most of what she owns apart from a £60,000 pension',
            S1: ['The rate is fixed for fifteen years', 'the bank cannot demand the money back as long as she pays the £900 due each month'] },
    segments: [
      { text: 'Beatriz, 44, owns a flat worth £400,000, which is most of what she owns apart from a £60,000 pension. She owes £150,000 on it.',
        note: 'That shows how much rests on one flat and how much is owed on it. It does not yet show whether the loan could be used against her.' },
      { text: ' The rate is fixed for fifteen years, and the bank cannot demand the money back as long as she pays the £900 due each month.' },
      { text: ' Her pay after tax is £3,100 a month.',
        note: 'That shows she can afford the payments. The words asked for are about the terms of the loan itself.' }
    ] },

  { id: 'w3-h-saf-chk', use: 'check', tier: 'clean', setting: 'health', topic: 'a pharmacy with reserves', name: 'Wanjiru and the pharmacy',
    text: "Wanjiru, 49, owns and runs a pharmacy worth £400,000, which is most of the £700,000 she owns. £210,000 is in funds that hold thousands of companies and £90,000 is in savings, and her household spends £30,000 a year. The pharmacy has no loans.",
    outcome: 'safe', route: { D1: ['shock'], S1: ['madesafe'] },
    cues: { S1: ['£210,000 is in funds that hold thousands of companies and £90,000 is in savings', 'her household spends £30,000 a year', 'The pharmacy has no loans'] },
    reason: { S1: 'Wanjiru runs a business that is most of what she owns, which is the situation of the answer before this one. The difference is in the words: {cue:S1}. The savings are three years of spending, the rest is spread, and nothing is borrowed against the pharmacy. All three supports are in place, so nothing is missing.' } },

  { id: 'w3-h-la-ss-a', use: 'teach', tier: 'clean', setting: 'work', topic: 'a bakery with no loan', name: 'Alma, no loan',
    text: "Alma, 48, runs the bakery she opened, worth £500,000, which is most of the £800,000 she owns. £150,000 is in funds that hold thousands of companies and £150,000 in savings, and her household spends £40,000 a year, which is more than three years. No bank holds her shares in the bakery as security.",
    outcome: 'safe', route: { D1: ['shock'], S1: ['madesafe'] },
    cues: { S1: ['No bank holds her shares in the bakery as security'] } },

  { id: 'w3-h-la-ss-b', use: 'teach', tier: 'clean', setting: 'work', topic: 'a bakery with a loan on its shares', name: 'Alma, a loan on the shares',
    text: "Alma, 48, runs the bakery she opened, worth £500,000, which is most of the £800,000 she owns. £150,000 is in funds that hold thousands of companies and £150,000 in savings, and her household spends £40,000 a year, which is more than three years. Last year she borrowed £120,000 for new ovens, and the bank holds her shares in the bakery as security.",
    outcome: 'supports', route: { D1: ['shock'], S1: ['ownrun'] },
    cues: { S1: ['the bank holds her shares in the bakery as security'] } },

  /* ---------- Insure the big loss ---------- */
  { id: 'w3-h-ins-1', use: 'teach', tier: 'clean', setting: 'home', topic: 'a swimming pool and a cap on cover', name: 'Hari and the pool',
    text: "Hari, 53, owns a house worth £700,000 and has £250,000 in savings and a pension. His house has a swimming pool, and the neighbours’ children often swim in it. His home insurance pays up to £500,000 if someone is hurt on his property. A lawyer he knows says that a serious injury to a child can lead to a demand for £2,000,000 or more.",
    outcome: 'insure', route: { D1: ['shock'], S1: ['bigclaim'] },
    cues: { D1: 'a serious injury to a child can lead to a demand for £2,000,000 or more',
            S1: ['His home insurance pays up to £500,000 if someone is hurt on his property', 'a serious injury to a child can lead to a demand for £2,000,000 or more'] } },

  { id: 'w3-h-ins-2', use: 'teach', tier: 'clean', setting: 'family', topic: 'a teenage driver', name: 'Alicia and her son’s car',
    text: "Alicia, 47, has just added her seventeen-year-old son to her car insurance. The policy pays up to £1,000,000 if the car harms other people. A lawyer she knows says that a crash that leaves a young person unable to work for life can lead to a demand for £5,000,000. Alicia owns a house worth £500,000 and has £150,000 in savings.",
    outcome: 'insure', route: { D1: ['shock'], S1: ['bigclaim'] },
    cues: { D1: 'can lead to a demand for £5,000,000',
            S1: ['The policy pays up to £1,000,000 if the car harms other people', 'a crash that leaves a young person unable to work for life can lead to a demand for £5,000,000'] },
    segments: [
      { text: 'Alicia, 47, has just added her seventeen-year-old son to her car insurance.',
        note: 'That is what could bring {t:claim}. It does not show how big {t:claim} could be next to the insurance.' },
      { text: ' The policy pays up to £1,000,000 if the car harms other people.',
        note: 'That is the insurance she holds. It is only half of the comparison the question asks for.' },
      { text: ' A lawyer she knows says that a crash that leaves a young person unable to work for life can lead to a demand for £5,000,000.' },
      { text: ' Alicia owns a house worth £500,000 and has £150,000 in savings.',
        note: 'That is what {t:claim} could reach. It is not the words that show how big the claim could be.' }
    ] },

  { id: 'w3-h-ins-chk', use: 'check', tier: 'clean', setting: 'property', topic: 'a holiday cottage and steep stairs', name: 'Rob and the holiday cottage',
    text: "Rob, 60, owns a holiday cottage worth £450,000 and has £200,000 in savings. His landlord’s insurance pays up to £400,000 if a guest is hurt. A guest who falls on the steep stairs and cannot work again could ask for £1,800,000.",
    outcome: 'insure', route: { D1: ['shock'], S1: ['bigclaim'] },
    cues: { S1: ['His landlord’s insurance pays up to £400,000 if a guest is hurt', 'A guest who falls on the steep stairs and cannot work again could ask for £1,800,000'] },
    reason: { S1: 'The cottage could bring {t:claim}, and the insurance has a limit: {cue:S1}. £1,800,000 less £400,000 leaves £1,400,000, more than the £650,000 Rob owns in all.' } },

  { id: 'w3-h-la-is-a', use: 'teach', tier: 'clean', setting: 'home', topic: 'a dog and a low cover limit', name: 'Dana, cover of £250,000',
    text: "Dana, 51, owns a house worth £650,000 and a large dog that visitors often meet. Her home insurance pays up to £250,000 if the dog hurts someone, and a lawyer says a serious bite to a child’s face can lead to a demand for £1,500,000.",
    outcome: 'insure', route: { D1: ['shock'], S1: ['bigclaim'] },
    cues: { S1: ['pays up to £250,000 if the dog hurts someone', 'can lead to a demand for £1,500,000'] } },

  { id: 'w3-h-la-is-b', use: 'teach', tier: 'clean', setting: 'home', topic: 'a dog and a high cover limit', name: 'Dana, cover of £2,500,000',
    text: "Dana, 51, owns a house worth £650,000 and a large dog that visitors often meet. Her home insurance pays up to £2,500,000 if the dog hurts someone, and a lawyer says a serious bite to a child’s face can lead to a demand for £1,500,000.",
    outcome: 'safe', route: { D1: ['shock'], S1: ['madesafe'] },
    cues: { S1: ['pays up to £2,500,000 if the dog hurts someone', 'can lead to a demand for £1,500,000'] } }
]);

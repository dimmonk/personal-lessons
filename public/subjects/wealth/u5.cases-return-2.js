// Wealth Preservation, Unit Five: fresh cases kept back for later days (second file: the two tax names, four cases each).
// Every tax case says whether the estate is above or below the tax-free limit and uses 40% for the part above it.
// Field guide: see u5.cases-drill-1.js.

FC.cases('wealth', 'u5', [

  /* ---------- Give some away each year ---------- */
  { id: 'h-x-gifting-1', use: 'return', tier: 'varied', setting: 'property', topic: 'a couple with a vacation house and surplus income',
    text: "Rosario and Kai, 75 and 77, own their home and a vacation house worth $8,000,000 together, with $37,000,000 in investments. Their investments pay them $700,000 a year more than they spend. Their wills, forms and powers of attorney were renewed in the summer, and nothing they own is expected to change much in value. Their accountant has warned them that the estate tax when they die would run into millions. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { D1: 'Their accountant has warned them that the estate tax when they die would run into millions', H1: ['worth $8,000,000 together, with $37,000,000 in investments', 'Their investments pay them $700,000 a year more than they spend'] },
    reason: { D1: 'The case is about the tax at their deaths: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'The case shows the estate above the limit and money to spare: {cue:H1}. $45,000,000 is far above the limit for a couple, and every $1,000,000 above it costs $400,000. Their papers are current and nothing is about to rise sharply.' },
    not: { outcome: 'simple', why: 'Their papers are current, which is part of {o:simple}. But the estate is far above the limit and they have money they do not need.' } },

  { id: 'h-x-gifting-2', use: 'return', tier: 'varied', setting: 'business', topic: 'the proceeds of a sold catering firm',
    text: "Delphine, 66, sold her catering business last year for $25,000,000, and the money is in the bank. She also owns a house worth $2,000,000. The money earns her about $900,000 a year, and she spends about $300,000. Her will, forms and power of attorney were renewed in the spring, and nothing she owns is expected to change much in value. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and Delphine would like to know what her two sons would receive.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { D1: 'Delphine would like to know what her two sons would receive', H1: ['sold her catering business last year for $25,000,000', 'The money earns her about $900,000 a year, and she spends about $300,000'] },
    reason: { D1: 'The case is about what her sons would receive after the tax: {cue:D1}. No charge, loan, fall in prices or bill is in it.',
              H1: 'The case shows the estate above the limit and money to spare: {cue:H1}. $27,000,000 is far above the limit, and every $1,000,000 above it costs $400,000. Her income is $600,000 a year more than she spends, and the business, which might have been something to grow, has been sold.' },
    not: { outcome: 'trust', why: 'A business is in the case, but it has been sold for cash. Nothing she holds is expected to rise sharply.' } },

  { id: 'h-x-gifting-3', use: 'return', tier: 'varied', setting: 'family', topic: 'a bachelor’s savings and nieces and nephews',
    text: "Teodor, 84, is a bachelor with $30,000,000 in funds and savings, and nothing else. The income from them is $1,200,000 a year and he spends about $300,000. He wants his four nieces and nephews to receive what he leaves. His will, forms and power of attorney were renewed in March, and nothing he owns is expected to change much in value. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { D1: 'He wants his four nieces and nephews to receive what he leaves', H1: ['$30,000,000 in funds and savings', 'The income from them is $1,200,000 a year and he spends about $300,000'] },
    reason: { D1: 'The case is about who will receive what he leaves: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'The case shows the estate above the limit and money to spare: {cue:H1}. $30,000,000 is far above the limit, and every $1,000,000 above it costs $400,000. He has $900,000 a year more than he spends, and his papers are current.' },
    not: { outcome: 'simple', why: 'His papers are current, but the estate is far above the limit and he has money he does not need.' } },

  { id: 'h-x-gifting-4', use: 'return', tier: 'varied', setting: 'work', topic: 'a retired doctor with a large income surplus',
    text: "Dr. Mbeki, 70, is a retired doctor. His house is worth $3,000,000 and his investments come to $25,000,000. They pay him $900,000 a year and he spends about $400,000. His will, forms and power of attorney were renewed last year, he has three grown children who get on well, and nothing he owns is expected to change much in value. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and his lawyer has asked whether he has thought about the tax.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { D1: 'his lawyer has asked whether he has thought about the tax', H1: ['His house is worth $3,000,000 and his investments come to $25,000,000', 'They pay him $900,000 a year and he spends about $400,000'] },
    reason: { D1: 'The case is about the tax at his death: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'The case shows the estate above the limit and money to spare: {cue:H1}. $28,000,000 is far above the limit, and every $1,000,000 above it costs $400,000. He has $500,000 a year more than he spends. His children get on well, so nothing is about the people.' },
    not: { outcome: 'simple', why: 'His papers are current and his children get on well, so nothing is wrong with the papers or the people. But the estate is far above the limit and he has money he does not need.' } },

  /* ---------- Move it out of the estate before it grows ---------- */
  { id: 'h-x-trust-1', use: 'return', tier: 'varied', setting: 'home', topic: 'paintings before a museum show',
    text: "Hanne, 82, owns twelve paintings by an artist who was her friend, worth $2,000,000 together. A major museum has announced a retrospective of the artist's work next year, and a dealer says that after similar shows prices have risen about tenfold. Her house and savings come to $3,000,000, and her will, forms and power of attorney are current. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and Hanne wants to know what her niece would receive.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { D1: 'Hanne wants to know what her niece would receive', H1: 'a dealer says that after similar shows prices have risen about tenfold' },
    reason: { D1: 'The case is about what her niece would receive after the tax: {cue:D1}. No charge, loan, fall in prices or bill is in it.',
              H1: 'Something she holds is expected to rise sharply: {cue:H1}. $2,000,000 could become $20,000,000, and her estate, $5,000,000 now and below the limit, would become $23,000,000, far above it, where every $1,000,000 costs $400,000 in tax.' },
    not: { outcome: 'gifting', why: 'Her estate is below the limit today, so gifts would have no tax to reduce, and nothing says she has money to spare. What the case shows is a rise that is expected.' } },

  { id: 'h-x-trust-2', use: 'return', tier: 'varied', setting: 'property', topic: 'mineral rights and a lithium survey',
    text: "Rebecca, 62, owns the mineral rights under her land, worth $500,000. A survey has found lithium there, and a mining company says it would pay $30,000,000 for the rights if it gets a permit next year. Her house and savings come to $2,000,000, and her will, forms and power of attorney were renewed in the winter. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and Rebecca has asked her lawyer what her son would receive when she dies.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { D1: 'Rebecca has asked her lawyer what her son would receive when she dies', H1: 'a mining company says it would pay $30,000,000 for the rights if it gets a permit next year' },
    reason: { D1: 'The case is about what her son would receive after the tax: {cue:D1}. No charge, loan, fall in prices or bill is in it.',
              H1: 'Something she holds is expected to rise sharply: {cue:H1}. $500,000 would become $30,000,000, and her estate, $2,500,000 now and below the limit, would become $32,000,000, far above it, where every $1,000,000 costs $400,000 in tax.' },
    not: { outcome: 'gifting', why: 'The estate above the limit is in the case once the rise comes, but nothing says she has money to spare, and the rise is the larger problem.' } },

  { id: 'h-x-trust-3', use: 'return', tier: 'varied', setting: 'health', topic: 'shares in a biotech firm before trial results',
    text: "Leila, 49, is a doctor who owns shares worth $1,000,000 in a biotech firm. Its drug trial results are due in June, and if they are positive, analysts expect the shares to be worth about $25,000,000. Her house and savings come to $2,000,000, and her will, forms and power of attorney are current. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and Leila has wondered what would happen to the shares if she died.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { D1: 'Leila has wondered what would happen to the shares if she died', H1: 'if they are positive, analysts expect the shares to be worth about $25,000,000' },
    reason: { D1: 'The case is about what would happen to the shares if she died: {cue:D1}. No charge, loan or bill is in it, and the trial is a fact about one firm.',
              H1: 'Something she holds is expected to rise sharply, if the results are good: {cue:H1}. $1,000,000 would become $25,000,000, and her estate, $3,000,000 now and below the limit, would become $27,000,000, far above it, where every $1,000,000 costs $400,000 in tax.' },
    not: { outcome: 'gifting', why: 'Her estate is below the limit today, so gifts would have no tax to reduce, and nothing says she has money to spare. What the case shows is a rise that is expected.' },
    wouldChange: 'If the results came out negative, the shares would fall, and the case would be {a:H1.inorder}.' },

  { id: 'h-x-trust-4', use: 'return', tier: 'varied', setting: 'business', topic: 'a chain of bars before an offer',
    text: "Bartolomeo, 64, owns a chain of five bars worth $2,000,000. A hospitality group has told him it will make an offer of $30,000,000 for the chain once the lease on the main bar is renewed, which is expected next month. His house and savings come to $2,000,000, and his will, forms and power of attorney were renewed last year. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and he has asked an accountant what the tax would be.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { D1: 'he has asked an accountant what the tax would be', H1: 'A hospitality group has told him it will make an offer of $30,000,000 for the chain once the lease on the main bar is renewed' },
    reason: { D1: 'The case is about what the tax would be when he dies: {cue:D1}. Nothing comes out every year, and the bars are a business he owns outright, with no claim or loan in the case.',
              H1: 'Something he holds is expected to rise sharply: {cue:H1}. $2,000,000 would become $30,000,000, and his estate, $4,000,000 now and below the limit, would become $32,000,000, far above it, where every $1,000,000 costs $400,000 in tax.' },
    not: { outcome: 'gifting', why: 'After the offer the estate would be far above the limit. But nothing says he has money to spare, and the offer is the larger thing.' } }
]);

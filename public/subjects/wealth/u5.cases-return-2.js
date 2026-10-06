// Wealth Preservation, Unit Five: fresh cases kept back for later days (second file: the two tax names, two cases each).
// Every tax case says whether the estate is above or below the tax-free limit and uses 40% for the part above it.
// Field guide: see u5.cases-drill-1.js.

FC.cases('wealth', 'u5', [
  /* Give some away each year */

  { id: 'h-x-gifting-1', use: 'return', tier: 'varied', setting: 'property', topic: 'a couple with a vacation house and surplus income',
    text: "Rosario and Kai, 75 and 77, own their home and a vacation house worth $8,000,000 together, with $37,000,000 in investments. Their investments pay them $700,000 a year more than they spend. Their wills, forms and powers of attorney were renewed in the summer, and nothing they own is expected to change much in value. Their accountant has warned them that the estate tax when they die would run into millions. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { D1: 'Their accountant has warned them that the estate tax when they die would run into millions', H1: ['worth $8,000,000 together, with $37,000,000 in investments', 'Their investments pay them $700,000 a year more than they spend'] },
    reason: { D1: 'The case is about the tax at their deaths: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'The case shows the estate above the limit and money to spare: {cue:H1}. $45,000,000 is far above the limit for a couple, and every $1,000,000 above it costs $400,000. Their papers are current and nothing is about to rise sharply.' },
    not: { outcome: 'simple', why: 'Their papers are current, which is part of {o:simple}. But the estate is far above the limit and they have money they do not need.' } },

  { id: 'h-x-gifting-3', use: 'return', tier: 'varied', setting: 'family', topic: 'a bachelor’s savings and nieces and nephews',
    text: "Teodor, 84, is a bachelor with $30,000,000 in funds and savings, and nothing else. The income from them is $1,200,000 a year and he spends about $300,000. He wants his four nieces and nephews to receive what he leaves. His will, forms and power of attorney were renewed in March, and nothing he owns is expected to change much in value. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { D1: 'He wants his four nieces and nephews to receive what he leaves', H1: ['$30,000,000 in funds and savings', 'The income from them is $1,200,000 a year and he spends about $300,000'] },
    reason: { D1: 'The case is about who will receive what he leaves: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'The case shows the estate above the limit and money to spare: {cue:H1}. $30,000,000 is far above the limit, and every $1,000,000 above it costs $400,000. He has $900,000 a year more than he spends, and his papers are current.' },
    not: { outcome: 'simple', why: 'His papers are current, but the estate is far above the limit and he has money he does not need.' } },

  /* Move it out of the estate before it grows */

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
    not: { outcome: 'gifting', why: 'The estate above the limit is in the case once the rise comes, but nothing says she has money to spare, and the rise is the larger problem.' } }
]);

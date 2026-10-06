// Wealth Preservation, Unit Five: cases shown inside cards, part one (the two paper terms, the first two names and their look-alike pair).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// A case that only carries a term card (use 'teach', no route) is not asked anything.
// route is { D1: [option], H1: [option] }: the answer to the key's first question, then to this unit's question.
// cues.H1 is the exact phrase in the text that decides the question (or a list of phrases); the app marks it, always in the same style.
// segments are the tappable pieces for "tap the words" prompts; note is shown if that piece is tapped in error.
// reason is the reason for this case's answer; not names the nearest wrong name (a ledger neighbor) and says why it fails here.
// People and firms are invented. Every case says whether an estate is above or below the federal estate tax's tax-free limit,
// which changes every year, and uses 40% for the part above it.

FC.cases('wealth', 'u5', [

  /* ---------- The two papers the first name is built on (nothing is asked of them) ---------- */
  { id: 't-benform', use: 'teach', tier: 'clean', setting: 'family', topic: 'a 401(k) form and a will which never met', name: 'Nuala and the 401(k) form',
    text: "Nuala, 45, pays into a 401(k) at work, run by an investment company. When she joined, she filled out a form for the company with one thing on it: who should receive the money if she dies. She wrote her husband's name. Ten years later she wrote a will, which leaves everything she owns to her two children. The company has never seen the will." },

  { id: 't-poa', use: 'teach', tier: 'clean', setting: 'health', topic: 'a stroke and an account in one name', name: 'Rashid and the stroke',
    text: "Rashid, 63, runs his own money: he pays the bills, moves savings between accounts and signs the forms. One morning he has a stroke. He survives, but for months he cannot speak or sign his name. His wife wants to pay the mortgage from his savings account. The bank will not let her: the account is in his name alone, and he never signed anything that says she may act for him." },

  /* ---------- The first name: update the basic paperwork ---------- */
  { id: 'm-edith', use: 'teach', tier: 'clean', setting: 'family', topic: 'a will which names a husband who has died', name: 'Edith and the old will',
    text: "Edith is 71. In 2008 she wrote a will that leaves everything she owns to her husband, Leo, and names nobody else. Leo died four years ago. She has not looked at the will since.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { H1: ['a will that leaves everything she owns to her husband, Leo', 'Leo died four years ago'] } },

  { id: 'a-mirela', use: 'teach', tier: 'clean', setting: 'property', topic: 'a condo in one name and no will',  name: 'Mirela and the condo',
    text: "Mirela is 55. She and her partner of twenty years never married, and the condo they live in is in her name alone. She has never written a will.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { H1: 'She has never written a will.' },
    segments: [
      { text: 'Mirela is 55. She and her partner of twenty years never married, and the condo they live in is in her name alone. ', note: 'That tells you who she is and what she owns. The question asks for the words that show what is wrong with the papers.' },
      { text: 'She has never written a will.' }
    ] },

  { id: 'c-aoife', use: 'check', tier: 'clean', setting: 'home', topic: 'a will written before a marriage', name: 'Aoife’s will',
    text: "Aoife, 34, wrote a will at 28 that leaves everything to her sister. Last year she married Dev, and they bought a condo together. She has not changed the will.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { H1: 'Last year she married Dev, and they bought a condo together. She has not changed the will.' },
    segments: [
      { text: 'Aoife, 34, wrote a will at 28 that leaves everything to her sister. ', note: 'That is the paper and the person it names. It is half of what the question asks for: the other half is what has happened in her life since.' },
      { text: 'Last year she married Dev, and they bought a condo together. She has not changed the will.' }
    ],
    reason: { H1: 'The will was written before a marriage and has not been touched since: {cue:H1}. It names her sister and not the husband she now has, and the condo they bought together is a new thing the will never had to deal with.' },
    not: { outcome: 'simple', why: 'The case does show a will, but it does not show a current one. A paper written before a marriage no longer matches her life, so one of the papers is out of date.' } },

  /* ---------- The second name: nothing more needed ---------- */
  { id: 'm-anselm', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a couple whose papers were all renewed', name: 'Anselm and Marit',
    text: "Anselm and Marit are both 68 and retired. Their house and savings come to $410,000, and their two children get on well. Last spring they rewrote both wills, renewed the beneficiary forms on both 401(k)s and signed new powers of attorney naming each other. Everything they own is far below the tax-free limit for estate tax. At a seminar a man told them that every couple their age needs a family trust to save estate tax.",
    outcome: 'simple', route: { D1: ['handover'], H1: ['inorder'] },
    cues: { H1: ["Last spring they rewrote both wills, renewed the beneficiary forms on both 401(k)s and signed new powers of attorney naming each other", 'Their house and savings come to $410,000'] } },

  { id: 'a-nasir', use: 'teach', tier: 'clean', setting: 'work', topic: 'a young man’s papers, and a friend’s trust', name: 'Nasir and the offer of a family trust',
    text: "Nasir is 38, single, with no children. He has $70,000 in savings and a condo with a mortgage, and nothing else. In January he wrote a will leaving everything to his sister, changed the beneficiary form on his 401(k) to name her, and signed a power of attorney naming her. Everything he owns is far below the tax-free limit for estate tax. His accountant mentioned that a friend of hers had set up a trust for her mother, and asked whether Nasir had thought of one.",
    outcome: 'simple', route: { D1: ['handover'], H1: ['inorder'] },
    cues: { H1: 'In January he wrote a will leaving everything to his sister, changed the beneficiary form on his 401(k) to name her, and signed a power of attorney naming her' },
    segments: [
      { text: 'Nasir is 38, single, with no children. He has $70,000 in savings and a condo with a mortgage, and nothing else. ', note: 'That is how much he has and who might receive it. The question asks for the words that show the state of his papers.' },
      { text: 'In January he wrote a will leaving everything to his sister, changed the beneficiary form on his 401(k) to name her, and signed a power of attorney naming her' },
      { text: '. Everything he owns is far below the tax-free limit for estate tax. His accountant mentioned that a friend of hers had set up a trust for her mother, and asked whether Nasir had thought of one.', note: 'That is the size of his estate against the tax and a remark about someone else. It does not show what is wrong or right with Nasir’s own papers.' }
    ] },

  { id: 'c-fenella', use: 'check', tier: 'clean', setting: 'family', topic: 'a widow’s renewed papers and a letter from a firm', name: 'Fenella and the letter',
    text: "Fenella, 66, was widowed last year. She has a house and savings worth $280,000. After her husband died she rewrote her will, which leaves everything equally to her two children, changed the beneficiary form on her IRA to name them, and signed a power of attorney naming her son. Her children talk on the phone every Sunday. A letter arrived from a firm offering a 'full estate protection review' for $2,400.",
    outcome: 'simple', route: { D1: ['handover'], H1: ['inorder'] },
    cues: { H1: ["After her husband died she rewrote her will, which leaves everything equally to her two children, changed the beneficiary form on her IRA to name them, and signed a power of attorney naming her son", 'a house and savings worth $280,000'] },
    reason: { H1: 'The case shows each paper brought up to date after the one thing in her life that changed: {cue:H1}. $280,000 is far below the tax-free limit, so no estate tax would come out, and the children talk every Sunday, so nothing here is about the people. The letter is an offer, and the case gives it no problem to answer.' },
    not: { outcome: 'basicdocs', why: 'A will, a form and {t:poa} are all in the case, and each was brought up to date after the husband died. Nothing is missing, and nothing names someone it should no longer name.' } },

  /* ---------- The look-alike pair: papers out of date, or papers current ---------- */
  { id: 'la-form-stale', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a 401(k) form which still names a former husband',
    text: "Rosalind is 59. She divorced six years ago, and since then she has lived in a condo worth $180,000, with $200,000 in savings. Her estate is far below the tax-free limit for estate tax. The beneficiary form on her 401(k) still names her former husband as the person who is to receive it if she dies.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { H1: 'The beneficiary form on her 401(k) still names her former husband as the person who is to receive it if she dies' } },

  { id: 'la-form-current', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'papers renewed the month after a divorce',
    text: "Rosalind is 59. She divorced six years ago, and since then she has lived in a condo worth $180,000, with $200,000 in savings. Her estate is far below the tax-free limit for estate tax. The month after the divorce she changed the beneficiary form on her 401(k) to name her daughter, rewrote her will and signed a power of attorney naming her daughter.",
    outcome: 'simple', route: { D1: ['handover'], H1: ['inorder'] },
    cues: { H1: "The month after the divorce she changed the beneficiary form on her 401(k) to name her daughter, rewrote her will and signed a power of attorney naming her daughter" } }
]);

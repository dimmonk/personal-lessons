// Wealth Preservation, Unit Five: fresh cases kept back for later days (first file: the paper name and the leave-alone name, four
// cases each: three scheduled returns, and the fourth at about twelve weeks, which an action subject adds).
// A due name returns as a case the learner has not seen, beside a case of the name they most often take it for.
// Field guide: see u5.cases-drill-1.js.

FC.cases('wealth', 'u5', [

  /* ---------- Update the basic paperwork ---------- */
  { id: 'h-x-papers-1', use: 'return', tier: 'varied', setting: 'family', topic: 'a single mother of young children with no will',
    text: "Ngozi, 38, is a single mother of two children under five, and has never written a will. Nobody is named to look after the children if she dies. Her condo and savings come to $210,000. Her estate is far below the tax-free limit for estate tax.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { D1: 'Nobody is named to look after the children if she dies', H1: 'has never written a will' },
    reason: { D1: 'The case is about what would happen to the children and the money if she died: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'One of the three papers does not exist: she {cue:H1}. The estate is far below the limit, so tax is not the problem.' },
    not: { outcome: 'simple', why: 'No paper is shown current. The case shows that the will does not exist.' } },

  { id: 'h-x-papers-2', use: 'return', tier: 'varied', setting: 'business', topic: 'a firm’s bank form naming a partner who left',
    text: "Tobias, 60, runs a printing firm worth $240,000. The form on the firm's bank account, which says who is to receive the money in it if he dies, names his business partner Wim, who left the firm four years ago and moved away. Tobias's will is current, and his sons work in the firm and get on well.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { D1: 'which says who is to receive the money in it if he dies', H1: 'names his business partner Wim, who left the firm four years ago and moved away' },
    reason: { D1: 'The case is about who would receive the money in the account if he died: {cue:D1}. No charge, loan, fall in prices or bill is in it.',
              H1: 'A form names someone it should no longer name: it {cue:H1}. The will is current, but the form is a separate paper and usually decides for its own account.' },
    not: { outcome: 'simple', why: 'The will is current, which is one paper. The form is another, and it names a man who left the firm four years ago.' } },

  { id: 'h-x-papers-3', use: 'return', tier: 'varied', setting: 'family', topic: '{t:poa} naming an estranged son',
    text: "Eamon, 74, signed a power of attorney in 2012 naming his elder son. Since a quarrel four years ago the two have not spoken, and Eamon has said he would never want him handling his money. He has not changed the paper. His will and forms are current.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { D1: 'would never want him handling his money', H1: 'signed a power of attorney in 2012 naming his elder son. Since a quarrel four years ago the two have not spoken' },
    reason: { D1: 'The case is about who would act for Eamon: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'A paper names someone it should no longer name: he {cue:H1}. If Eamon could not act, the son he does not want would be the one to.' },
    not: { outcome: 'governance', why: 'The quarrel is a risk in a person and is in the case. But the case shows a paper that names someone it should not, and the papers come first.' } },

  { id: 'h-x-papers-4', use: 'return', tier: 'varied', setting: 'health', topic: 'an operation next month and no power of attorney',
    text: "Dalia, 47, is single, and her closest relative lives overseas. She has just been told that she needs an operation under general anesthesia next month. Her will is current. She has never signed a power of attorney, and all her accounts are in her name alone.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { D1: 'she needs an operation under general anesthesia next month', H1: 'She has never signed a power of attorney, and all her accounts are in her name alone' },
    reason: { D1: 'The case is about a time when she could not act for herself: {cue:D1}. Nothing comes out every year, and no price, loan or bill is mentioned.',
              H1: 'One of the three papers does not exist: {cue:H1}. If something went wrong with the operation, nobody could act on her accounts.' },
    not: { outcome: 'simple', why: 'Her will is current, which is one paper, but {t:poa} does not exist.' } },

  /* ---------- Nothing more needed ---------- */
  { id: 'h-x-simple-1', use: 'return', tier: 'varied', setting: 'family', topic: 'newly married, papers written after the wedding',
    text: "Kit and Remy, 34 and 36, married last year, and a baby is due in the spring. Their condo and savings come to $310,000. After the wedding they each wrote a will leaving everything to the other and then to the baby, changed the beneficiary forms on their 401(k)s, and signed powers of attorney naming each other. An insurance agent has said that they need an 'estate plan'. Their estate is far below the tax-free limit for estate tax.",
    outcome: 'simple', route: { D1: ['handover'], H1: ['inorder'] },
    cues: { D1: "An insurance agent has said that they need an 'estate plan'", H1: ["After the wedding they each wrote a will leaving everything to the other and then to the baby, changed the beneficiary forms on their 401(k)s, and signed powers of attorney naming each other", 'Their condo and savings come to $310,000'] },
    reason: { D1: 'The case is about what would happen to their money if one of them died, and the agent’s remark is what raises it: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'Every paper was written after the wedding: {cue:H1}. $310,000 is far below the limit, so the tax is $0, and nothing here is about a person. The plan is something to buy, and the case gives it no problem.' },
    not: { outcome: 'basicdocs', why: 'The papers are all in the case, and they were written after the marriage and with the baby in mind. Nothing is missing.' },
    wouldChange: 'If the wills had been written before the wedding and not changed, the case would be {a:H1.papers}.' },

  { id: 'h-x-simple-2', use: 'return', tier: 'varied', setting: 'business', topic: 'a plumbing firm with two sons who get on',
    text: "Nuno, 55, owns a plumbing firm worth $180,000, and his house and savings come to $200,000. His two sons work in the firm and get on well. His will leaves it to them equally, and he renewed the will, the forms and a power of attorney naming his wife after the boys finished their training. A stranger on a business forum has told him that every owner needs a family holding company. His estate is far below the tax-free limit for estate tax.",
    outcome: 'simple', route: { D1: ['handover'], H1: ['inorder'] },
    cues: { D1: 'A stranger on a business forum has told him that every owner needs a family holding company', H1: ['he renewed the will, the forms and a power of attorney naming his wife after the boys finished their training', 'His two sons work in the firm and get on well'] },
    reason: { D1: 'The case is about what would happen to the firm when he dies, and the stranger’s remark is what raises it: {cue:D1}. Nothing comes out every year, and nothing is held in one thing a lawsuit could reach.',
              H1: 'All three papers were renewed, and the sons get on: {cue:H1}. $380,000 is far below the limit, so the tax is $0, and nothing is expected to rise sharply. A family company would cost money every year to answer a problem the case does not show.' },
    not: { outcome: 'basicdocs', why: 'A will, forms and {t:poa} are all in the case, and all were renewed after the boys finished their training. Nothing is missing, and the sons get on well.' } },

  { id: 'h-x-simple-3', use: 'return', tier: 'varied', setting: 'retirement', topic: 'an estate far under the limit and a granddaughter’s advice',
    text: "Ottilie, 77, is a widow, and her house and savings come to $480,000. Her will, forms and power of attorney were all renewed in the fall. Her granddaughter, who has just read an article, tells her she should give money away now to beat the tax at death. Her estate is far below the tax-free limit for estate tax. Nothing Ottilie owns is expected to change much in value, and her pension pays her just what she spends.",
    outcome: 'simple', route: { D1: ['handover'], H1: ['inorder'] },
    cues: { D1: 'she should give money away now to beat the tax at death', H1: ['Her will, forms and power of attorney were all renewed in the fall', 'her house and savings come to $480,000'] },
    reason: { D1: 'The case is about the tax at her death, and the granddaughter’s advice raises it: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'The papers are current and the estate is far below the limit: {cue:H1}. $480,000 is far under the tax-free limit, so the tax would be $0. Her pension pays her just what she spends, so nothing is spare.' },
    not: { outcome: 'gifting', why: 'Gifts reduce a tax bill, and here there is none. The estate is far below the limit and nothing is spare. Her granddaughter’s advice answers a problem the case does not have.' },
    wouldChange: 'If her estate were $30,000,000 and her investments paid her $500,000 more than she spent, the case would be {a:H1.bigestate}.' },

  { id: 'h-x-simple-4', use: 'return', tier: 'varied', setting: 'health', topic: 'papers written in the hospital by a man recovering',
    text: "Sidney, 59, has been treated for cancer and is now recovering. While he was in the hospital he rewrote his will, which leaves his $120,000 to his sister, changed the beneficiary form on his 401(k) to name her, and signed a power of attorney naming her. A lawyer's advert says that everyone who has been ill needs 'legacy planning'. His estate is far below the tax-free limit for estate tax.",
    outcome: 'simple', route: { D1: ['handover'], H1: ['inorder'] },
    cues: { D1: "A lawyer's advert says that everyone who has been ill needs 'legacy planning'", H1: ['While he was in the hospital he rewrote his will, which leaves his $120,000 to his sister, changed the beneficiary form on his 401(k) to name her, and signed a power of attorney naming her'] },
    reason: { D1: 'The case is about what would happen to his money if he died, and the advert raises it: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'He brought each paper up to date when it mattered: {cue:H1}. $120,000 is far below the limit, so the tax is $0, and nothing here is about a person.' },
    not: { outcome: 'basicdocs', why: 'All three papers are in the case, and he renewed each of them while he was ill. Nothing is missing and nothing names someone it should not.' } }
]);

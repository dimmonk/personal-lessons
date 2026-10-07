// Wealth Preservation, Unit Five: fresh cases kept back for later days (first file: the paper name and the leave-alone name, two cases each).
// A due name returns as a case the learner has not seen, beside a case of the name they most often take it for.
// Field guide: see u5.cases-drill-1.js.

FC.cases('wealth', 'u5', [
  /* Update the basic paperwork */

  { id: 'h-x-papers-1', use: 'return', tier: 'varied', setting: 'family', topic: 'a single mother of young children with no will',
    text: "Ngozi, 38, is a single mother of two children under five, and has never written a will. Nobody is named to look after the children if she dies. Her condo and savings come to $210,000. Her estate is far below the tax-free limit for estate tax.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { D1: 'Nobody is named to look after the children if she dies', H1: 'has never written a will' },
    reason: { D1: 'This story is about what would happen to the children and the money if she died: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'One of the three papers does not exist: she {cue:H1}. The estate is far below the limit, so tax is not the problem.' },
    not: { outcome: 'simple', why: 'The story shows no current paper: she has no will at all.' } },

  { id: 'h-x-papers-4', use: 'return', tier: 'varied', setting: 'health', topic: 'an operation next month and no power of attorney',
    text: "Dalia, 47, is single, and her closest relative lives overseas. She has just been told that she needs an operation under general anesthesia next month. Her will is current. She has never signed a power of attorney, and all her accounts are in her name alone.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { D1: 'she needs an operation under general anesthesia next month', H1: 'She has never signed a power of attorney, and all her accounts are in her name alone' },
    reason: { D1: 'This story is about a time when she could not act for herself: {cue:D1}. Nothing comes out every year, and no price, loan or bill is mentioned.',
              H1: 'One of the three papers does not exist: {cue:H1}. If something went wrong in the operation, nobody could act on her accounts.' },
    not: { outcome: 'simple', why: 'Her will is current, which is one paper, but she has no power of attorney.' } },

  /* Nothing more needed */

  { id: 'h-x-simple-2', use: 'return', tier: 'varied', setting: 'business', topic: 'a plumbing firm with two sons who get on',
    text: "Nuno, 55, owns a plumbing firm worth $180,000, and his house and savings come to $200,000. His two sons work in the firm and get on well. His will leaves it to them equally, and he renewed the will, the forms and a power of attorney naming his wife after the boys finished their training. A stranger on a business forum has told him that every owner needs a family holding company. His estate is far below the tax-free limit for estate tax.",
    outcome: 'simple', route: { D1: ['handover'], H1: ['inorder'] },
    cues: { D1: 'A stranger on a business forum has told him that every owner needs a family holding company', H1: ['he renewed the will, the forms and a power of attorney naming his wife after the boys finished their training', 'His two sons work in the firm and get on well'] },
    reason: { D1: 'This story is about what happens to the firm when he dies, and the stranger’s remark is what raises it: {cue:D1}. Nothing comes out every year, and nothing is held in one thing a lawsuit could reach.',
              H1: 'All three papers were renewed, and the sons get on: {cue:H1}. $380,000 is far below the limit, and a family company would cost money every year to fix a problem the story does not show.' },
    not: { outcome: 'basicdocs', why: 'A will, forms and {t:poa} are all there, and all were renewed after the boys finished their training. Nothing is missing, and the sons get on well.' } },

  { id: 'h-x-simple-3', use: 'return', tier: 'varied', setting: 'retirement', topic: 'an estate far under the limit and a granddaughter’s advice',
    text: "Ottilie, 77, is a widow, and her house and savings come to $480,000. Her will, forms and power of attorney were all renewed in the fall. Her granddaughter, who has just read an article, tells her she should give money away now to beat the tax at death. Her estate is far below the tax-free limit for estate tax. Nothing Ottilie owns is expected to change much in value, and her pension pays her just what she spends.",
    outcome: 'simple', route: { D1: ['handover'], H1: ['inorder'] },
    cues: { D1: 'she should give money away now to beat the tax at death', H1: ['Her will, forms and power of attorney were all renewed in the fall', 'her house and savings come to $480,000'] },
    reason: { D1: 'This story is about the tax at her death, and the granddaughter’s advice is what raises it: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'The papers are current and the estate is far below the limit: {cue:H1}. At $480,000 the tax would be $0, and her pension pays just what she spends, so nothing is spare.' },
    not: { outcome: 'gifting', why: 'Gifts cut a tax bill, and here there is none. Her granddaughter’s advice fixes a problem the story does not have.' } }
]);

// Wealth Preservation, Unit Five: drill cases for stage one (the key's answers are shown, the learner gives the name) and stage three
// (the first answer is shown, the learner answers the key's question and gives the name). None of these appears in a card.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for this case and says why it fails. Every tax case says whether the estate is above or below
// the tax-free limit and uses 40% for the part above it. Field guide: see u5.cases-teach-1.js.

FC.cases('wealth', 'u5', [

  /* ---------- Stage one: name ---------- */
  { id: 'h-n-widow', use: 'drill', tier: 'clean', setting: 'home', topic: 'a life insurance form naming a dead husband',
    text: "Odette, 64, is a widow and owns her condo outright. Her husband died last year. The form on her life insurance still names him as the person to be paid if she dies, and she has not changed it. She rewrote her will after the funeral.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { H1: 'The form on her life insurance still names him as the person to be paid if she dies' },
    reason: { H1: 'One of the three papers names someone who has died: {cue:H1}. Her will is current, but the form is {t:benform}, a paper separate from the will, and it usually decides for its own account, so the will does not make it safe.' },
    not: { outcome: 'simple', why: 'The will was rewritten, which is one paper. But the form names a man who has died, so not every paper is current.' } },

  { id: 'h-n-couple', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'a couple whose papers are new and a bank’s package',
    text: "Imogen and Dirk, both 70, have a house and savings that come to $390,000, and two grown children who share an apartment. Four months ago they rewrote their wills, changed the beneficiary forms on both 401(k)s and signed new powers of attorney naming each other, and then their son. Their estate is far below the tax-free limit for estate tax. A bank manager has suggested a 'protection package' for $1,800.",
    outcome: 'simple', route: { D1: ['handover'], H1: ['inorder'] },
    cues: { H1: 'Four months ago they rewrote their wills, changed the beneficiary forms on both 401(k)s and signed new powers of attorney naming each other, and then their son' },
    reason: { H1: 'All three papers were renewed lately: {cue:H1}. $390,000 is far below the tax-free limit, so the tax is $0, and nothing here is about the children. The package is an offer, and the case gives it nothing to answer.' },
    not: { outcome: 'basicdocs', why: 'A will, a form and {t:poa} are all in the case, and all were renewed four months ago. Nothing is missing and nothing names someone it should no longer name.' } },

  { id: 'h-n-heirloom', use: 'drill', tier: 'clean', setting: 'family', topic: 'a family house and a widower’s surplus',
    text: "Lionel, 79, is a widower. His house, which has been in his family for three generations, is worth $4,000,000, and he has $28,000,000 in funds and savings. His income is $900,000 a year and he spends about $500,000. His will, forms and power of attorney were renewed last fall. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit. He has four grandchildren, and nothing he owns is expected to change much in value.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { H1: ['His income is $900,000 a year and he spends about $500,000', 'is worth $4,000,000, and he has $28,000,000 in funds and savings'] },
    reason: { H1: 'The case shows the estate above the limit and money to spare: {cue:H1}. $32,000,000 is far above the limit, and every $1,000,000 above it costs $400,000. His income is $400,000 a year more than he spends, and nothing is expected to rise sharply.' },
    not: { outcome: 'simple', why: 'His papers are current, which is part of {o:simple}. But the estate is far above the limit, so the tax is a real sum, and he has money he does not need.' } },

  { id: 'h-n-orchard', use: 'drill', tier: 'clean', setting: 'property', topic: 'an orchard a warehouse company wants',
    text: "Marisol, 57, owns an orchard worth $1,000,000. A logistics company has told her it wants to build a warehouse on land like hers, and has offered $40,000,000 for the orchard if the county approves, a decision due next year. Her house and investments come to $5,000,000, and her will, forms and power of attorney were renewed in the winter. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { H1: 'has offered $40,000,000 for the orchard if the county approves, a decision due next year' },
    reason: { H1: 'Something she holds is expected to rise sharply: {cue:H1}. $1,000,000 would become $40,000,000, and her estate, $6,000,000 now and below the limit, would become $45,000,000, far above it, where every $1,000,000 costs $400,000 in tax.' },
    not: { outcome: 'gifting', why: 'The estate above the limit is in the case once the rise comes, but the rise is the larger thing: $39,000,000 of new value, most of it taxed. Yearly gifts could not touch it.' } },

  { id: 'h-n-clinic', use: 'drill', tier: 'varied', setting: 'business', topic: 'a will written before twin sons were born',
    text: "Dr. Okafor, 55, owns a dental clinic worth $450,000 and has savings of $60,000. He wrote his will the year his first daughter was born, and it leaves everything to her. Since then his twin sons have been born. He has not changed the will.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { H1: 'it leaves everything to her. Since then his twin sons have been born. He has not changed the will' },
    reason: { H1: 'The will was written before a birth and never changed: {cue:H1}. It would leave everything to one child and nothing to the other two.' },
    not: { outcome: 'governance', why: 'A family is involved, but nothing here shows a risk in a person. What it shows is a paper written before a birth.' } },

  { id: 'h-n-fiancee', use: 'drill', tier: 'varied', setting: 'family', topic: 'a grandson about to marry who plans to put money in a house',
    text: "Elspeth, 72, will leave $480,000 to her grandson Callum, 24. Callum is to marry in June, and has told his grandmother that he will put whatever he receives into a house that will be in his fiancee's name alone. Elspeth's will, forms and power of attorney were renewed in January. Her estate is far below the tax-free limit for estate tax.",
    outcome: 'governance', route: { D1: ['handover'], H1: ['people'] },
    cues: { H1: "Callum is to marry in June, and has told his grandmother that he will put whatever he receives into a house that will be in his fiancee's name alone" },
    reason: { H1: 'The case shows a risk in the person who will receive the money: {cue:H1}. An heir about to marry has said he will put all of it where it would not be his. The papers are current and $480,000 is far below the limit, so neither is the problem.' },
    not: { outcome: 'basicdocs', why: 'All three papers were renewed in January, so no paper is missing or out of date. The case is about what a person will do.' } },

  /* ---------- Stage three: finish (the first answer is shown) ---------- */
  { id: 'h-f-pilot', use: 'drill', tier: 'varied', setting: 'work', topic: 'an insurance form naming a mother who has died',
    text: "Ruaridh, 45, flies long-haul and is away for weeks at a time. The form on his employer's life insurance, which says who is to be paid if he dies, still names his mother. She died last winter. He has not named anyone else.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { D1: 'which says who is to be paid if he dies', H1: 'still names his mother. She died last winter' },
    reason: { D1: 'The case is about who would be paid when he dies: {cue:D1}. Nothing comes out of his money every year, no one thing is most of it, and no bill or fall in prices is mentioned.',
              H1: 'One of the papers names someone who has died: {cue:H1}. Nobody else is named, so the form would pay a person who cannot receive it.' },
    not: { outcome: 'simple', why: 'The form is in the case, but it is not current: it names someone who has died.' } },

  { id: 'h-f-neighbors', use: 'drill', tier: 'varied', setting: 'home', topic: 'neighbors who say a condo will be lost to tax',
    text: "Beryl and Anton, 66 and 69, have a condo and savings worth $340,000 and no children. Last March they rewrote their wills, which leave everything to each other and then to a cousin, changed the beneficiary forms on their IRAs to match, and signed powers of attorney naming each other. Their neighbors keep saying that the condo will be lost to tax when they die. Their estate is far below the tax-free limit for estate tax.",
    outcome: 'simple', route: { D1: ['handover'], H1: ['inorder'] },
    cues: { D1: 'the condo will be lost to tax when they die', H1: ["Last March they rewrote their wills, which leave everything to each other and then to a cousin, changed the beneficiary forms on their IRAs to match, and signed powers of attorney naming each other", 'a condo and savings worth $340,000'] },
    reason: { D1: 'The case is about what happens to the condo when they die: {cue:D1}. Nothing in it comes out every year, and nothing is held in one thing or falls due on a date.',
              H1: 'All three papers were renewed: {cue:H1}. $340,000 is far below the tax-free limit, so the tax would be $0, and the neighbors’ remark does not change that. Nothing here is about the people.' },
    not: { outcome: 'gifting', why: 'The estate is far below the limit, so there is no tax to reduce, and nothing is said about money they could spare.' } }
]);

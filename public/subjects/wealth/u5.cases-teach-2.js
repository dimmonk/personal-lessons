// Wealth Preservation, Unit Five: cases shown inside cards, part two (the word estate, the third name, and its look-alike pair with
// the second). Field guide: see u5.cases-teach-1.js. Every tax case uses the same invented rule: the country takes 40% of whatever a
// person leaves above £500,000.

FC.cases('wealth', 'u5', [

  /* ---------- The word the tax names are built on (nothing is asked of it) ---------- */
  { id: 't-estate', use: 'teach', tier: 'clean', setting: 'family', topic: 'adding up what a widow will leave', name: 'Everything Ruth leaves',
    text: "Ruth, 80, is a widow. She owns a house worth £700,000, £350,000 in savings and shares worth £150,000, and she owes nothing. The country takes 40% of whatever a person leaves above £500,000. She will leave everything to her two children." },

  /* ---------- The third name: give some away each year ---------- */
  { id: 'm-harold', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a widower whose savings only grow', name: 'Harold’s savings',
    text: "Harold is 78 and a widower. His house is worth £700,000 and his savings come to £450,000, so his estate is £1,150,000. His pension pays him £34,000 a year and he spends about £28,000, so the savings grow every year and he has never touched them. His will, forms and power of attorney were all renewed last year. The country takes 40% of whatever a person leaves above £500,000. He has three grandchildren, and nothing he owns is expected to change much in value.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { H1: ['so his estate is £1,150,000', 'he spends about £28,000, so the savings grow every year and he has never touched them', 'nothing he owns is expected to change much in value'] } },

  { id: 'a-gwen', use: 'teach', tier: 'clean', setting: 'property', topic: 'a couple with a rented flat and spare income', name: 'Gwen and Hugo',
    text: "Gwen and Hugo, both 72, own their home and a flat they rent out, and have £300,000 in savings: £1,650,000 in all. The rent and their pensions bring in £62,000 a year, and they spend about £40,000. Their wills and forms were renewed last year. The country takes 40% of whatever a person leaves above £500,000. They have two children, and nothing they own is expected to change much in value.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { H1: ['£1,650,000 in all', 'The rent and their pensions bring in £62,000 a year, and they spend about £40,000'] },
    segments: [
      { text: 'Gwen and Hugo, both 72, own their home and a flat they rent out, and have £300,000 in savings: £1,650,000 in all. ', note: 'That shows how large the estate is. The question asks what shows that they have more than they need.' },
      { text: 'The rent and their pensions bring in £62,000 a year, and they spend about £40,000' },
      { text: '. Their wills and forms were renewed last year. The country takes 40% of whatever a person leaves above £500,000. They have two children, and nothing they own is expected to change much in value.', note: 'That shows the papers are in order, what the tax is, and that nothing is expected to jump in value. None of it shows how much they have to spare.' }
    ] },

  { id: 'c-quentin', use: 'check', tier: 'clean', setting: 'home', topic: 'a widower with a large house and a pension surplus', name: 'Quentin’s house',
    text: "Quentin is 81 and a widower. His house is worth £900,000, and he has £600,000 in savings. His income is £48,000 a year and he spends about £30,000. His will, forms and power of attorney were all renewed in the spring. The country takes 40% of whatever a person leaves above £500,000. Nothing he owns is expected to change much in value.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { H1: ['His house is worth £900,000, and he has £600,000 in savings', 'His income is £48,000 a year and he spends about £30,000'] },
    reason: { H1: 'The case shows the estate above the limit and money to spare: {cue:H1}. £900,000 and £600,000 make £1,500,000, which is £1,000,000 above the limit, so the tax at 40% would be £400,000. His income is £18,000 a year more than he spends. His papers are current, and nothing he owns is expected to rise sharply.' },
    not: { outcome: 'simple', why: 'His papers are current, which is part of {o:simple}. But the estate is far above the limit and he has money he does not need, so something in the case could go wrong at the handover.' } },

  /* ---------- The look-alike pair: an estate above the limit, or below it ---------- */
  { id: 'la-estate-high', use: 'teach', tier: 'clean', setting: 'family', topic: 'a widower’s estate above the limit',
    text: "Ellis is 74 and a widower. His house and savings come to £1,200,000, and his pension pays him £20,000 a year more than he spends. His will, forms and power of attorney are all current. The country takes 40% of whatever a person leaves above £500,000. Nothing he owns is expected to change much in value.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { H1: ['His house and savings come to £1,200,000, and his pension pays him £20,000 a year more than he spends'] } },

  { id: 'la-estate-low', use: 'teach', tier: 'clean', setting: 'family', topic: 'a widower’s estate below the limit',
    text: "Ellis is 74 and a widower. His house and savings come to £430,000, and his pension pays him just what he spends. His will, forms and power of attorney are all current. The country takes 40% of whatever a person leaves above £500,000. Nothing he owns is expected to change much in value.",
    outcome: 'simple', route: { D1: ['handover'], H1: ['inorder'] },
    cues: { H1: ['His house and savings come to £430,000, and his pension pays him just what he spends'] } }
]);

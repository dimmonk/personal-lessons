// Wealth Preservation, Unit Five: cases shown inside cards, part two (the word estate, and the first tax name). Field guide: see u5.cases-teach-1.js.
// Every tax case says whether the estate is above or below the tax-free limit and uses 40% for the part above it.

FC.cases('wealth', 'u5', [
  /* The word the tax names are built on (nothing is asked of it) */

  { id: 't-estate', use: 'teach', tier: 'clean', setting: 'family', topic: 'adding up what a widow will leave', name: 'Everything Ruth leaves',
    text: "Ruth, 80, is a widow. She owns a house worth $4,000,000, $21,000,000 in investments and shares in her family's firm worth $5,000,000, and she owes nothing. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit. She will leave everything to her two children." },

  /* Give some away each year */

  { id: 'm-harold', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a widower whose savings only grow', name: 'Harold’s savings',
    text: "Harold is 78 and a widower. His house is worth $3,000,000 and his investments come to $37,000,000, so his estate is $40,000,000, well above the tax-free limit. His investments pay him $1,000,000 a year and he spends about $600,000, so the savings grow every year and he has never touched them. His will, forms and power of attorney were all renewed last year. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit. He has three grandchildren, and nothing he owns is expected to change much in value.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { H1: ['so his estate is $40,000,000, well above the tax-free limit', 'he spends about $600,000, so the savings grow every year and he has never touched them', 'nothing he owns is expected to change much in value'] } },

  { id: 'c-quentin', use: 'check', tier: 'clean', setting: 'home', topic: 'a widower with a large house and an income surplus', name: 'Quentin’s house',
    text: "Quentin is 81 and a widower. His house is worth $5,000,000, and he has $25,000,000 in investments. His income is $800,000 a year and he spends about $400,000. His will, forms and power of attorney were all renewed in the spring. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit. Nothing he owns is expected to change much in value.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { H1: ['His house is worth $5,000,000, and he has $25,000,000 in investments', 'His income is $800,000 a year and he spends about $400,000'] },
    reason: { H1: 'The case shows the estate above the limit and money to spare: {cue:H1}. $5,000,000 and $25,000,000 make $30,000,000, far above the limit, so every $1,000,000 above it would cost $400,000. His income is $400,000 a year more than he spends. His papers are current, and nothing he owns is expected to rise sharply.' },
    not: { outcome: 'simple', why: 'His papers are current, which is part of {o:simple}. But the estate is far above the limit and he has money he does not need, so something in the case could go wrong at the handover.' } }
]);

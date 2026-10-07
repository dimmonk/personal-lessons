// Wealth Preservation, Unit Five: fresh cases kept back for later days (third file: the people name, two cases).
// Field guide: see u5.cases-drill-1.js.

FC.cases('wealth', 'u5', [
  /* Family rules for the money */

  { id: 'h-x-people-1', use: 'return', tier: 'varied', setting: 'family', topic: 'a son in debt who is to be paid in one sum',
    text: "Alfred, 69, will leave $400,000 to his son Piers, 31, in one payment. Piers has twice borrowed against his car to pay gambling debts, and has asked his father for money to cover a third. Alfred's will, forms and power of attorney were renewed in the spring. His estate is far below the tax-free limit for estate tax.",
    outcome: 'governance', route: { D1: ['handover'], H1: ['people'] },
    cues: { D1: 'will leave $400,000 to his son Piers, 31, in one payment', H1: 'Piers has twice borrowed against his car to pay gambling debts, and has asked his father for money to cover a third' },
    reason: { D1: 'This story is about who will get the money, and how: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'A person who will get the money has a pattern: {cue:H1}. $400,000 in one payment would arrive with nothing between it and that pattern.' },
    not: { outcome: 'basicdocs', why: 'All three papers were renewed in the spring, so none is missing or out of date. The story is about what a person has done with money.' } },

  { id: 'h-x-people-2', use: 'return', tier: 'varied', setting: 'home', topic: 'a house left jointly to a second wife and two children who do not meet',
    text: "Gordon, 72, is on his second marriage and has two children from his first. His will leaves the house, worth $350,000, to his wife and his two children together. The children and his wife have not been in the same room since the wedding. His will, forms and power of attorney were renewed last year. His estate is far below the tax-free limit for estate tax.",
    outcome: 'governance', route: { D1: ['handover'], H1: ['people'] },
    cues: { D1: 'His will leaves the house, worth $350,000, to his wife and his two children together', H1: 'The children and his wife have not been in the same room since the wedding' },
    reason: { D1: 'This story is about who will get the house: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'Control of the house will pass to people who cannot agree: {cue:H1}. Three people will own it together, and nothing shows how they would decide to live in it, rent it or sell it.' },
    not: { outcome: 'basicdocs', why: 'Every paper was renewed last year, and they already take the remarriage into account. What is in question is people who will not meet.' } }
]);

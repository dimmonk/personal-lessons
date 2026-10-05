// Wealth Preservation, Unit Five: fresh cases kept back for later days (third file: the people name, four cases).
// Every tax case uses the same invented rule: the country takes 40% of whatever a person leaves above £500,000.
// Field guide: see u5.cases-drill-1.js.

FC.cases('wealth', 'u5', [

  /* ---------- Family rules for the money ---------- */
  { id: 'h-x-people-1', use: 'return', tier: 'varied', setting: 'family', topic: 'a son in debt who is to be paid in one sum',
    text: "Alfred, 69, will leave £400,000 to his son Piers, 31, in one payment. Piers has twice borrowed against his car to pay gambling debts, and has asked his father for money to cover a third. Alfred's will, forms and power of attorney were renewed in the spring. The country takes 40% of whatever a person leaves above £500,000.",
    outcome: 'governance', route: { D1: ['handover'], H1: ['people'] },
    cues: { D1: 'will leave £400,000 to his son Piers, 31, in one payment', H1: 'Piers has twice borrowed against his car to pay gambling debts, and has asked his father for money to cover a third' },
    reason: { D1: 'The case is about who will receive the money and how: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'The case shows a risk in the person who will receive the money: {cue:H1}. £400,000 in one payment would arrive with nothing between it and a pattern the case shows. The papers are current and £400,000 is below the line.' },
    not: { outcome: 'basicdocs', why: 'All three papers were renewed in the spring, so no paper is missing or out of date. The case is about what a person has done with money.' } },

  { id: 'h-x-people-2', use: 'return', tier: 'varied', setting: 'home', topic: 'a house left jointly to a second wife and two children who do not meet',
    text: "Gordon, 72, is on his second marriage and has two children from his first. His will leaves the house, worth £350,000, to his wife and his two children together. The children and his wife have not been in the same room since the wedding. His will, forms and power of attorney were renewed last year. The country takes 40% of whatever a person leaves above £500,000.",
    outcome: 'governance', route: { D1: ['handover'], H1: ['people'] },
    cues: { D1: 'His will leaves the house, worth £350,000, to his wife and his two children together', H1: 'The children and his wife have not been in the same room since the wedding' },
    reason: { D1: 'The case is about who will receive the house: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'Control of the house will pass to people who cannot agree: {cue:H1}. Three people will own it together, and nothing here shows how they would decide to live in it, rent it or sell it. The papers are current and the estate is below the line.' },
    not: { outcome: 'basicdocs', why: 'Every paper was renewed last year, so none is out of date. A remarriage is in the case, but the papers already take account of it. What is in question is people who will not meet.' } },

  { id: 'h-x-people-3', use: 'return', tier: 'varied', setting: 'business', topic: 'a garden centre left to a daughter who runs it and a son who will sell',
    text: "Nadine, 69, owns a garden centre worth £450,000 and wants her daughter, who has run it for ten years, to carry on. Her will leaves it equally to the daughter and to the daughter's brother, who lives abroad, has never worked in it, and has told her he will sell as soon as he can. A friend has suggested a family trust. Her will, forms and power of attorney were renewed last year. The country takes 40% of whatever a person leaves above £500,000.",
    outcome: 'governance', route: { D1: ['handover'], H1: ['people'] },
    cues: { D1: 'Her will leaves it equally to the daughter and to the daughter\'s brother', H1: 'the daughter\'s brother, who lives abroad, has never worked in it, and has told her he will sell as soon as he can' },
    reason: { D1: 'The case is about who will receive the garden centre: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'Control will pass to two people who want different things: {cue:H1}. The daughter wants to carry on and her brother will sell, and they own it equally. The papers are current and £450,000 is below the line.' },
    not: { outcome: 'trust', why: 'A family trust has been suggested, and a trustee could be one of the rules. But the case has no tax to answer and nothing expected to rise. What it shows is two people who want different things.' } },

  { id: 'h-x-people-4', use: 'return', tier: 'varied', setting: 'property', topic: 'a daughter who has just separated and will put money into a joint house',
    text: "Reuben, 66, will leave £380,000 to his daughter Tamsin, 38. Tamsin has just separated from her husband, and has said that she will put whatever she receives into the house they own together, 'to keep things fair'. Reuben's will, forms and power of attorney were renewed last year. The country takes 40% of whatever a person leaves above £500,000.",
    outcome: 'governance', route: { D1: ['handover'], H1: ['people'] },
    cues: { D1: 'Reuben, 66, will leave £380,000 to his daughter Tamsin, 38', H1: "Tamsin has just separated from her husband, and has said that she will put whatever she receives into the house they own together" },
    reason: { D1: 'The case is about who will receive the money: {cue:D1}. Nothing comes out every year, and nothing is held in one thing.',
              H1: 'The case shows a risk in the person who will receive the money: {cue:H1}. An heir in a failing marriage has said she will put all of it where it would be shared with her husband. The papers are current and the estate is below the line.' },
    not: { outcome: 'basicdocs', why: 'All three papers were renewed last year, so no paper is missing or out of date. The case is about what an heir has said she will do.' } }
]);

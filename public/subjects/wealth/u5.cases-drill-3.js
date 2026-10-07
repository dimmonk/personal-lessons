// Wealth Preservation, Unit Five: drill cases for the second stage, continued (one more clean case, then two varied ones). Field guide: see u5.cases-drill-1.js.

FC.cases('wealth', 'u5', [
  { id: 'h-r-woodland', use: 'drill', tier: 'clean', setting: 'property', topic: 'a hillside a wind-farm company wants',
    text: "Alberto, 66, owns a hillside worth $500,000. A wind-farm company is surveying it and says that if it gets approval it would pay $25,000,000. His house and investments come to $5,000,000, and his will, forms and power of attorney were renewed last year. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and Alberto has asked what that would mean for his daughters.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { D1: 'Alberto has asked what that would mean for his daughters', H1: 'says that if it gets approval it would pay $25,000,000' },
    reason: { D1: 'This story is about what his daughters would get and what the tax would take: {cue:D1}. No fee, loan, fall in prices or bill is in it.',
              H1: 'Something he holds is about to shoot up in value, from $500,000 to $25,000,000: {cue:H1}. The usual way to move it out of the estate is {t:trustword}.' },
    not: { outcome: 'gifting', why: 'The estate is above the limit once the rise comes, but nothing says he has money to spare, and the rise is the bigger thing.' } },

  /* Varied */

  { id: 'h-r-twins', use: 'drill', tier: 'varied', setting: 'business', topic: 'a bar left to twins, one running it, one abroad',
    text: "Dilys, 73, owns a bar worth $420,000, which is nearly all she has. Her will leaves it equally to her twin daughters, and her will, forms and power of attorney were renewed last year. Bronwen runs the bar with her. Carys lives abroad and has said she wants her half in cash, now. The two have not agreed on anything about the bar for three years.",
    outcome: 'governance', route: { D1: ['handover'], H1: ['people'] },
    cues: { D1: 'Her will leaves it equally to her twin daughters', H1: 'Carys lives abroad and has said she wants her half in cash, now. The two have not agreed on anything about the bar for three years' },
    reason: { D1: 'This story is about who will get the bar: {cue:D1}. Nothing comes out every year, and nothing is held in one thing that a lawsuit or loan could reach.',
              H1: 'Control will pass to two people who cannot agree: {cue:H1}. One wants the bar kept running and the other wants her half in cash.' },
    not: { outcome: 'basicdocs', why: 'All three papers were renewed last year. What this story raises is two people who want different things.' } },

  { id: 'h-r-surgeon', use: 'drill', tier: 'varied', setting: 'health', topic: 'patents with a license forecast',
    text: "Dr. Alvarez, 52, is a surgeon who has invented a surgical tool. His patents are worth $1,000,000 today. A manufacturer has signed a license that, by its own forecast, would pay about $40,000,000 over five years. His house and investments come to $3,000,000, his will, forms and power of attorney are current, and he has been asking what would be left for his children. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { D1: 'he has been asking what would be left for his children', H1: 'A manufacturer has signed a license that, by its own forecast, would pay about $40,000,000 over five years' },
    reason: { D1: 'This story is about what would be left for his children after the tax: {cue:D1}. No fee, loan, fall in prices or bill is in it.',
              H1: 'Something he holds is about to shoot up in value: {cue:H1}. The forecast is the manufacturer’s own, so it is not certain, but $1,000,000 could become $40,000,000, taking his estate far above the limit.' },
    not: { outcome: 'governance', why: 'Nothing here is about a person. It is about the tax on a sum that could grow very large.' } }
]);

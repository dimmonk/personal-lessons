// Wealth Preservation, Unit Five: drill cases for the first stage (the question alone, on a new case). None of these appears in a card.
// reason[STEP] is the reason tied to the marked words; it is shown after the answer, decisive sentence first.
// not names the most tempting wrong name for this case and says why it fails. Every tax case says whether the estate is above or below the tax-free limit and uses 40% for the part above it. Field guide: see u5.cases-teach-1.js.

FC.cases('wealth', 'u5', [
  /* The question alone */

  { id: 'h-p-flatsale', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'a widower with the money from a sold building',
    text: "Barnaby, 83, is a widower. He has sold his apartment building for $25,000,000 and moved in with his daughter, and the money is in the bank. It earns him $900,000 a year and he spends about $150,000. His will, forms and power of attorney were renewed last summer. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit. Nothing he owns is expected to change much in value.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { H1: ['the money is in the bank', 'It earns him $900,000 a year and he spends about $150,000'] },
    reason: { H1: 'The case shows {t:estate} above the limit and money to spare: {cue:H1}. $25,000,000 is far above the limit, and every $1,000,000 above it costs $400,000. He has $750,000 a year more than he spends, and his papers are current.' },
    not: { outcome: 'simple', why: 'His papers are current, which is part of {o:simple}. But the estate is far above the limit and he has money he does not need.' } },

  { id: 'h-p-modest', use: 'drill', tier: 'clean', setting: 'home', topic: 'a widow with a condo below the limit',
    text: "Gladys, 83, is a widow and lives in the condo she owns, worth $290,000. Her pension pays her just what she spends. Her will, forms and power of attorney were renewed last summer. Her estate is far below the tax-free limit for estate tax. Nothing she owns is expected to change much in value.",
    outcome: 'simple', route: { D1: ['handover'], H1: ['inorder'] },
    cues: { H1: ['Her will, forms and power of attorney were renewed last summer', 'worth $290,000. Her pension pays her just what she spends'] },
    reason: { H1: 'All three papers are current and the estate is far below the limit: {cue:H1}. $290,000 is far under the tax-free limit, so the tax is $0, and she has nothing to spare to give away.' },
    not: { outcome: 'gifting', why: 'Gifts reduce a tax bill, and here there is no tax bill: the estate is far below the limit. Her pension pays her just what she spends, so there is nothing spare.' } },

  { id: 'h-p-shares', use: 'drill', tier: 'varied', setting: 'work', topic: 'shares in a startup with a big order',
    text: "Anneliese, 61, owns shares worth $1,000,000 in a startup that makes water filters. A charity foundation has signed a letter promising to buy 10,000 filters a month, and the founders say the shares could be worth $30,000,000 in four years. Her house and investments come to $4,000,000, and her will, forms and power of attorney are current. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { H1: 'the founders say the shares could be worth $30,000,000 in four years' },
    reason: { H1: 'Something she holds is expected to rise sharply: {cue:H1}. $1,000,000 would become $30,000,000, and her estate, $5,000,000 now and below the limit, would become $34,000,000, far above it, where every $1,000,000 costs $400,000 in tax.' },
    not: { outcome: 'governance', why: 'Nothing here is about a person: no heir is at risk and nobody is quarrelling. It is about a sum that could grow and the tax on it.' } },

  { id: 'h-p-farm', use: 'drill', tier: 'varied', setting: 'property', topic: 'a farm left to three children who disagree',
    text: "Rufus, 77, will leave his farm, worth $350,000, equally to his three children, who all live far away. Two of them want to sell it. The third wants to farm it, and has said he will not move out of the farmhouse whatever the others say. Rufus's will, forms and power of attorney are current, and the estate is below the tax-free limit.",
    outcome: 'governance', route: { D1: ['handover'], H1: ['people'] },
    cues: { H1: 'Two of them want to sell it. The third wants to farm it, and has said he will not move out of the farmhouse whatever the others say' },
    reason: { H1: 'Control will pass to people who cannot agree: {cue:H1}. The three will own it equally, so a sale needs all of them, and one has said he will not go. The papers are current and the estate is below the limit.' },
    not: { outcome: 'trust', why: 'There is no tax in the case, and nothing is expected to rise sharply. A trustee could hold the farm, but what the case is about is the people who cannot agree.' } }
]);

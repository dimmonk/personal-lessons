// Wealth Preservation, Unit Five: drill cases for stage two (the key's question alone, on a new case) and the first half of stage four
// (the whole route, no help: the clean and varied groups). Every question is asked in stage four, starting with the key's first
// question, so every route case carries marked words and a reason for D1 too. Field guide: see u5.cases-drill-1.js.

FC.cases('wealth', 'u5', [

  /* ---------- Stage two: the key's question alone ---------- */
  { id: 'h-p-flatsale', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'a widower with the money from a sold building',
    text: "Barnaby, 83, is a widower. He has sold his apartment building for $25,000,000 and moved in with his daughter, and the money is in the bank. It earns him $900,000 a year and he spends about $150,000. His will, forms and power of attorney were renewed last summer. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit. Nothing he owns is expected to change much in value.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { H1: ['the money is in the bank', 'It earns him $900,000 a year and he spends about $150,000'] },
    reason: { H1: 'The case shows the estate above the limit and money to spare: {cue:H1}. $25,000,000 is far above the limit, and every $1,000,000 above it costs $400,000. He has $750,000 a year more than he spends, and his papers are current.' },
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
    not: { outcome: 'trust', why: 'There is no tax in the case, and nothing is expected to rise sharply. A trustee could hold the farm, but what the case is about is the people who cannot agree.' } },

  /* ---------- Stage four: the whole route, no help (clean) ---------- */
  { id: 'h-r-lease', use: 'drill', tier: 'clean', setting: 'family', topic: 'a will which names a brother who has died to carry it out',
    text: "Joaquim, 68, wrote a will so that his two sons would receive his house after his death. It names his brother as the person who is to carry it out. His brother died two years ago, and Joaquim has not named anyone else.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { D1: 'wrote a will so that his two sons would receive his house after his death', H1: 'names his brother as the person who is to carry it out. His brother died two years ago' },
    reason: { D1: 'The case is about who will receive his house and who will act after his death: {cue:D1}. Nothing in it comes out every year, and no price, loan or bill is mentioned.',
              H1: 'The will names someone who has died: {cue:H1}. Nobody else is named to carry it out, so on the day there is nobody to do it.' },
    not: { outcome: 'simple', why: 'A will is in the case, but one thing in it no longer fits: the person named to carry it out has died. So not every paper is current.' } },

  { id: 'h-r-retired', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'a divorced teacher’s renewed papers and a salesman’s call',
    text: "Lorenzo, 61, a retired teacher, is divorced, with one daughter, 30. His condo and savings come to $260,000. In the spring he rewrote his will in her favor, changed the beneficiary form on his 401(k) to name her, and signed a power of attorney naming her. A salesman has phoned to say he 'must' protect his estate from the IRS. His estate is far below the tax-free limit for estate tax.",
    outcome: 'simple', route: { D1: ['handover'], H1: ['inorder'] },
    cues: { D1: "A salesman has phoned to say he 'must' protect his estate from the IRS", H1: ['In the spring he rewrote his will in her favor, changed the beneficiary form on his 401(k) to name her, and signed a power of attorney naming her', 'His condo and savings come to $260,000'] },
    reason: { D1: 'The case is about what would happen to his money when he dies, and the salesman’s call is the only thing raising it: {cue:D1}. Nothing here comes out every year, and nothing is held in one thing.',
              H1: 'Every paper was renewed this spring: {cue:H1}. $260,000 is far below the tax-free limit, so the tax is $0, and nothing here is about his daughter. The call is a sale, and the case gives it no problem to answer.' },
    not: { outcome: 'gifting', why: 'Gifts reduce a tax bill, and the estate is far below the limit, so there is no tax bill. Nothing is said about money he could spare.' },
    wouldChange: 'If his will still named his former wife, the case would be {a:H1.papers}.' },

  { id: 'h-r-pension', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'a widower’s income surplus and grandchildren',
    text: "Chidi, 74, is a widower with a house worth $2,000,000 and $26,000,000 in investments. His investments pay him $500,000 a year more than he spends. His will, forms and power of attorney were renewed in June, and he has four grandchildren. Nothing he owns is expected to change much in value. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and Chidi would like to know what his family would receive.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { D1: 'Chidi would like to know what his family would receive', H1: ['a house worth $2,000,000 and $26,000,000 in investments', 'His investments pay him $500,000 a year more than he spends'] },
    reason: { D1: 'The case is about what Chidi’s family would receive after he dies: {cue:D1}. No charge, loan, fall in prices or bill is in it.',
              H1: 'The case shows the estate above the limit and money to spare: {cue:H1}. $28,000,000 is far above the limit, and every $1,000,000 above it costs $400,000. His papers are current and nothing is about to rise sharply.' },
    not: { outcome: 'simple', why: 'His papers are current, but the estate is far above the limit and he has money he does not need.' } },

  { id: 'h-r-woodland', use: 'drill', tier: 'clean', setting: 'property', topic: 'a hillside a wind-farm company wants',
    text: "Alberto, 66, owns a hillside worth $500,000. A wind-farm company is surveying it and says that if it gets approval it would pay $25,000,000. His house and investments come to $5,000,000, and his will, forms and power of attorney were renewed last year. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and Alberto has asked what that would mean for his daughters.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { D1: 'Alberto has asked what that would mean for his daughters', H1: 'says that if it gets approval it would pay $25,000,000' },
    reason: { D1: 'The case is about what his daughters would receive and what the tax would take: {cue:D1}. No charge, loan, fall in prices or bill is in it.',
              H1: 'Something he holds is expected to rise sharply: {cue:H1}. $500,000 would become $25,000,000, and his estate, $5,500,000 now and below the limit, would become $30,000,000, far above it, where every $1,000,000 costs $400,000 in tax.' },
    not: { outcome: 'gifting', why: 'The estate above the limit is in the case once the rise comes, but nothing says he has money to spare, and the rise is the larger thing.' } },

  /* ---------- Stage four: the whole route, no help (varied) ---------- */
  { id: 'h-r-twins', use: 'drill', tier: 'varied', setting: 'business', topic: 'a bar left to twins, one running it, one abroad',
    text: "Dilys, 73, owns a bar worth $420,000, which is nearly all she has. Her will leaves it equally to her twin daughters, and her will, forms and power of attorney were renewed last year. Bronwen runs the bar with her. Carys lives abroad and has said she wants her half in cash, now. The two have not agreed on anything about the bar for three years.",
    outcome: 'governance', route: { D1: ['handover'], H1: ['people'] },
    cues: { D1: 'Her will leaves it equally to her twin daughters', H1: 'Carys lives abroad and has said she wants her half in cash, now. The two have not agreed on anything about the bar for three years' },
    reason: { D1: 'The case is about who will receive the bar: {cue:D1}. Nothing comes out every year, and nothing is held in one thing that a lawsuit or loan could reach.',
              H1: 'Control will pass to two people who cannot agree: {cue:H1}. One wants the bar kept running and the other wants her half in cash. The papers are current and the estate is below the limit.' },
    not: { outcome: 'basicdocs', why: 'All three papers were renewed last year. What the case raises is two people who want different things.' } },

  { id: 'h-r-surgeon', use: 'drill', tier: 'varied', setting: 'health', topic: 'patents with a license forecast',
    text: "Dr. Alvarez, 52, is a surgeon who has invented a surgical tool. His patents are worth $1,000,000 today. A manufacturer has signed a license that, by its own forecast, would pay about $40,000,000 over five years. His house and investments come to $3,000,000, his will, forms and power of attorney are current, and he has been asking what would be left for his children. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit.",
    outcome: 'trust', route: { D1: ['handover'], H1: ['growth'] },
    cues: { D1: 'he has been asking what would be left for his children', H1: 'A manufacturer has signed a license that, by its own forecast, would pay about $40,000,000 over five years' },
    reason: { D1: 'The case is about what would be left for his children after the tax: {cue:D1}. No charge, loan, fall in prices or bill is in it.',
              H1: 'Something he holds is expected to rise sharply: {cue:H1}. The forecast is the manufacturer’s own, so it is an expectation and not a certainty, but it is in the case. $1,000,000 could become $40,000,000, and his estate, below the limit today, would be far above it, where every $1,000,000 costs $400,000 in tax.' },
    not: { outcome: 'governance', why: 'Nothing here is about a person. It is about the tax on a sum that could grow very large.' }  }
]);

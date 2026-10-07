// Wealth Preservation, Unit Five: drill cases for the second stage (the whole path, no help), the clean cases. Every question is asked in this stage, starting with the first,
// so every case here carries marked words and a reason for D1 too. Field guide: see u5.cases-drill-1.js.

FC.cases('wealth', 'u5', [
  /* The whole path, no help (clean) */

  { id: 'h-r-lease', use: 'drill', tier: 'clean', setting: 'family', topic: 'a will which names a brother who has died to carry it out',
    text: "Joaquim, 68, wrote a will so that his two sons would receive his house after his death. It names his brother as the person who is to carry it out. His brother died two years ago, and Joaquim has not named anyone else.",
    outcome: 'basicdocs', route: { D1: ['handover'], H1: ['papers'] },
    cues: { D1: 'wrote a will so that his two sons would receive his house after his death', H1: 'names his brother as the person who is to carry it out. His brother died two years ago' },
    reason: { D1: 'This story is about who will get his house and who will act after his death: {cue:D1}. Nothing in it comes out every year, and no price, loan or bill is mentioned.',
              H1: 'The will names someone who has died: {cue:H1}. Nobody else is named to carry it out, so on the day there is nobody to do it.' },
    not: { outcome: 'simple', why: 'A will is there, but the person named to carry it out has died, so not every paper is current.' } },

  { id: 'h-r-retired', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'a divorced teacher’s renewed papers and a salesman’s call',
    text: "Lorenzo, 61, a retired teacher, is divorced, with one daughter, 30. His condo and savings come to $260,000. In the spring he rewrote his will in her favor, changed the beneficiary form on his 401(k) to name her, and signed a power of attorney naming her. A salesman has phoned to say he 'must' protect his estate from the IRS. His estate is far below the tax-free limit for estate tax.",
    outcome: 'simple', route: { D1: ['handover'], H1: ['inorder'] },
    cues: { D1: "A salesman has phoned to say he 'must' protect his estate from the IRS", H1: ['In the spring he rewrote his will in her favor, changed the beneficiary form on his 401(k) to name her, and signed a power of attorney naming her', 'His condo and savings come to $260,000'] },
    reason: { D1: 'This story is about what happens to his money when he dies, and the salesman’s call is the only thing that raises it: {cue:D1}. Nothing here comes out every year, and nothing is held in one thing.',
              H1: 'Every paper was renewed this spring, so the will, {t:benform} and {t:poa} are all current: {cue:H1}. $260,000 is far below the limit, and the call is only a sale with no problem to fix.' },
    not: { outcome: 'gifting', why: 'Gifts cut a tax bill, and the estate is far below the limit, so there is none. Nothing is said about money he could spare.' } },

  { id: 'h-r-pension', use: 'drill', tier: 'clean', setting: 'retirement', topic: 'a widower’s income surplus and grandchildren',
    text: "Chidi, 74, is a widower with a house worth $2,000,000 and $26,000,000 in investments. His investments pay him $500,000 a year more than he spends. His will, forms and power of attorney were renewed in June, and he has four grandchildren. Nothing he owns is expected to change much in value. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and Chidi would like to know what his family would receive.",
    outcome: 'gifting', route: { D1: ['handover'], H1: ['bigestate'] },
    cues: { D1: 'Chidi would like to know what his family would receive', H1: ['a house worth $2,000,000 and $26,000,000 in investments', 'His investments pay him $500,000 a year more than he spends'] },
    reason: { D1: 'This story is about what Chidi’s family would get after he dies: {cue:D1}. No fee, loan, fall in prices or bill is in it.',
              H1: 'His estate is $28,000,000, far above the limit, and he has $500,000 a year to spare: {cue:H1}. His papers are current and nothing is about to shoot up in value.' },
    not: { outcome: 'simple', why: 'His papers are current, but the estate is far above the limit and he has money he does not need.' } }
]);

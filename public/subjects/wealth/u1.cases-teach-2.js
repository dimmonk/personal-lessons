// Wealth Preservation, Unit One: cases shown inside cards, part two (the third family and its look-alike pair and exception, then
// the fourth family and its look-alike pair). Field guide: see u1.cases-teach-1.js.

FC.cases('wealth', 'u1', [

  /* ---------- The third family: one thing most of it depends on ---------- */
  { id: 'w-employer', use: 'teach', tier: 'clean', setting: 'work', topic: 'most of the money in the employer’s shares', name: 'Karim and the company shares',
    text: "Karim, 45, has $500,000 in all. $350,000 of it is shares in the company he works for, which he has built up over twenty years. The rest is in a savings account and a small 401(k).",
    route: { D1: ['shock'] },
    cues: { D1: '$350,000 of it is shares in the company he works for' } },

  { id: 'w-farm', use: 'teach', tier: 'clean', setting: 'business', topic: 'a lawsuit after a farm accident', name: 'Siobhan’s farm',
    text: "Siobhan owns a farm. The land, the house and the machinery are all in her own name, and so is $300,000 of savings, about $1,400,000 in all. Last month a worker was badly hurt on the farm. His lawyer is demanding $2,000,000, and Siobhan’s insurance pays up to $500,000.",
    route: { D1: ['shock'] },
    cues: { D1: 'His lawyer is demanding $2,000,000, and Siobhan’s insurance pays up to $500,000' },
    segments: [
      { text: 'Siobhan owns a farm. The land, the house and the machinery are all in her own name, and so is $300,000 of savings, about $1,400,000 in all.', note: 'That is what she has. It tells you how big the money is, and the question asks what could take most of it.' },
      { text: 'Last month a worker was badly hurt on the farm.', note: 'That is how it started. The question asks for the part that could take most of the money.' },
      { text: 'His lawyer is demanding $2,000,000, and Siobhan’s insurance pays up to $500,000' }
    ] },

  { id: 'w-loan', use: 'check', tier: 'clean', setting: 'home', topic: 'a brokerage’s margin loan that can be called in',
    text: "Paul owns shares worth $500,000. He bought some of them with a $300,000 margin loan from his brokerage. The brokerage’s contract says it can demand the loan back at any time, and Paul would have to sell shares to repay it.",
    route: { D1: ['shock'] },
    cues: { D1: 'The brokerage’s contract says it can demand the loan back at any time' },
    segments: [
      { text: 'Paul owns shares worth $500,000.', note: 'That is what he has. It tells you how big the money is, not what could take it.' },
      { text: 'He bought some of them with a $300,000 margin loan from his brokerage.', note: 'That is where the loan comes from. A loan alone does not decide it: what matters is whether the lender can force a sale.' },
      { text: 'The brokerage’s contract says it can demand the loan back at any time' },
      { text: ', and Paul would have to sell shares to repay it', note: 'That is what would happen. The words that give the lender the power come before it.' }
    ],
    reason: { D1: 'The case shows a lender who could force a sale: {cue:D1}. $300,000 borrowed against $500,000 of shares means that a demand for repayment would make Paul sell much of what he owns, whatever he thought of the price that day.' },
    not: { outcome: 'timing', why: 'No bill on a date and no living costs are mentioned. What puts the money at risk is one lender with the right to force a sale, and it could use that right whether or not prices have fallen.' } },

  /* ---------- The look-alike pair: one thing, or a fall in prices ---------- */
  { id: 'w-la-one', use: 'teach', tier: 'clean', setting: 'work', topic: 'one company and a lost contract',
    text: "Lars has $500,000. $350,000 of it is shares in the company where he works. Last month a rival won the company's biggest contract, and its price fell by 40%. Prices of other companies did not move.",
    route: { D1: ['shock'] },
    cues: { D1: ['$350,000 of it is shares in the company where he works', 'Prices of other companies did not move'] } },

  { id: 'w-la-market', use: 'teach', tier: 'clean', setting: 'family', topic: 'a down payment in a falling market',
    text: "Lars has $500,000, all of it in funds that hold shares in thousands of companies. He must pay $120,000 for a house on March 1, four months away, and prices across the whole market are down 25% this year.",
    route: { D1: ['timing'] },
    cues: { D1: ['He must pay $120,000 for a house on March 1, four months away', 'prices across the whole market are down 25% this year'] } },

  /* ---------- The exception: bills paid in a fall, from one company ---------- */
  { id: 'w-exc-retired', use: 'teach', tier: 'misleading', setting: 'retirement', topic: 'bills paid from one company’s shares in a fall', name: 'Marguerite',
    also: ['timing'],
    text: "Marguerite, 71, retired from a company where she spent thirty years. Of her $600,000, $510,000 is still shares in that company. She sells $2,000 of them each month to live on, and she has no cash set aside. This year the company's price has fallen by 45%.",
    route: { D1: ['shock'] },
    cues: { D1: 'Of her $600,000, $510,000 is still shares in that company' },
    segments: [
      { text: 'Marguerite, 71, retired from a company where she spent thirty years. ', note: 'That tells you who she is and where she worked. The question asks for how much of her money rests on it.' },
      { text: 'Of her $600,000, $510,000 is still shares in that company' },
      { text: ". She sells $2,000 of them each month to live on, and she has no cash set aside. This year the company's price has fallen by 45%.", note: 'That is the half of the case that looks like a fall in prices. The words that settle it are the ones before: how much of her money is in one company.' }
    ] },

  /* ---------- The fourth family: the handover to other people ---------- */
  { id: 'w-exwife', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a life insurance form that names a first wife', name: 'Gerald and the old form',
    text: "Gerald is 68. He has life insurance through his job that would pay $300,000. The form he signed with the insurer twenty years ago names his first wife as the person who should receive it if he dies. He married again fifteen years ago, and has never changed the form.",
    route: { D1: ['handover'] },
    cues: { D1: ['names his first wife as the person who should receive it if he dies', 'has never changed the form'] } },

  { id: 'w-estate', use: 'teach', tier: 'clean', setting: 'family', topic: 'tax on a large estate', name: 'Walter’s estate',
    text: "Walter, 82, is a widower. His house and investments come to $40,000,000, and he needs only a small part of that to live on. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and he is far above it. His will is up to date.",
    route: { D1: ['handover'] },
    cues: { D1: 'The federal estate tax takes 40% of whatever a person leaves above a tax-free limit' },
    segments: [
      { text: 'Walter, 82, is a widower. His house and investments come to $40,000,000, and he needs only a small part of that to live on. ', note: 'That is how much he has. It is the size of the money, and the question asks what is at stake when it changes hands.' },
      { text: 'The federal estate tax takes 40% of whatever a person leaves above a tax-free limit' },
      { text: ', and he is far above it. His will is up to date.', note: 'That says how far above the limit he is, and that his papers are in order. The words that say what could be taken at his death are before it.' }
    ] },

  { id: 'w-heirs', use: 'check', tier: 'clean', setting: 'family', topic: 'heirs who do not speak to each other',
    text: "Sunita, 74, has a will that leaves her $700,000 equally to her three children. Two of them have not spoken to each other for six years. Everything in her will is up to date.",
    route: { D1: ['handover'] },
    cues: { D1: 'Two of them have not spoken to each other for six years' },
    segments: [
      { text: 'Sunita, 74, has a will that leaves her $700,000 equally to her three children. ', note: 'That is who gets what. It is half of the handover, and the question asks what could go wrong with it.' },
      { text: 'Two of them have not spoken to each other for six years' },
      { text: '. Everything in her will is up to date.', note: 'That shows the papers are in order. It does not say what could go wrong, and the words that do are before it.' }
    ],
    reason: { D1: 'The case shows a risk in the people who will receive the money: {cue:D1}. The money is to be shared equally, so two of the three will have to deal with each other over it. The papers are in order, and nothing comes out every year or rests on one thing.' },
    not: { outcome: 'erosion', why: 'Nothing comes out of the money every year in the case. What it raises is how the people who inherit will deal with one another, and that arises once, after her death.' } },

  /* ---------- The look-alike pair: the handover, or something taken out every year ---------- */
  { id: 'w-la-estate', use: 'teach', tier: 'clean', setting: 'family', topic: 'tax on what a widow leaves',
    text: "Joan, 79, has $30,000,000. The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and Joan will leave all of hers to her children when she dies.",
    route: { D1: ['handover'] },
    cues: { D1: 'The federal estate tax takes 40% of whatever a person leaves above a tax-free limit, and Joan will leave all of hers to her children when she dies' } },

  { id: 'w-la-yearly', use: 'teach', tier: 'clean', setting: 'family', topic: 'a fund’s charge on a widow’s money',
    text: "Joan, 79, has $30,000,000. Every year the firm that runs her fund takes 1.4% of it, $420,000, and she has done nothing about it.",
    route: { D1: ['erosion'] },
    cues: { D1: 'Every year the firm that runs her fund takes 1.4% of it, $420,000' } }
]);

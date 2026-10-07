// Wealth Preservation, Unit One: cases shown inside cards, part one (the five word cards, the first family, the second family and
// their look-alike pair).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// A gate unit's cases carry route: { D1: [option] } and no outcome: the answer to the first question is the name.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one family share a topic.
// cues.D1 is the exact phrase in the text that decides the first question (or a list of phrases); the app marks it, always in the
// same style. segments are the tappable pieces for "tap the words" prompts; note is shown if that piece is tapped in error.
// reason.D1 is the reason for this case's answer. not names the nearest wrong family (a ledger neighbor) and says why it fails
// here. also lists an answer the case shows as well as its own, which loses to its own by a tie-break in the key.
// A case that only carries a word card (use 'teach', no route) is not asked anything.

FC.cases('wealth', 'u1', [

  { id: 'w-t-pot', use: 'teach', tier: 'clean', setting: 'family', topic: 'adding up what Nadia owns', name: 'Nadia’s total',
    text: "Nadia is 52. She has $40,000 in a savings account, $150,000 in her 401(k), a condo worth $220,000 with nothing owed on it, and a one-fifth share of her brother's bakery, which the family values at $60,000. She also earns $5,000 a month." },

  { id: 'w-t-fund', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'one purchase of five hundred companies', name: 'Lena and the fund',
    text: "Lena puts $10,000 into one fund that holds shares in 500 companies. Each year the company that runs the fund takes 0.2% for doing so, $20. In a bad year the price of the fund falls by 20%, because most of what is in it has fallen." },

  { id: 'w-t-bond', use: 'teach', tier: 'clean', setting: 'family', topic: 'a loan to a government with a set payout', name: 'Omar’s loan',
    text: "Omar lends $1,000 to a government for five years. Each year it pays him $30 in interest, and at the end it repays his $1,000. In the third year, if he wanted to sell the loan to someone else, the price might be $950 on one day and $1,040 on another." },

  { id: 'w-t-mix', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a half-and-half plan that moved', name: 'Hana’s split',
    text: "Hana chose to keep her money half in shares and half in bonds. That was twelve years ago. Since then shares have done well, and today $300,000 of her $400,000 is in shares and $100,000 is in bonds. She retires in three years." },

  { id: 'w-t-claim', use: 'teach', tier: 'clean', setting: 'business', topic: 'a lawyer’s letter after a fall on ice', name: 'Mick’s letter',
    text: "Mick runs a small moving company. A delivery driver slips on ice in his yard and breaks her leg. Her lawyer writes to Mick, saying that the yard was not safe and that he must pay $400,000 for her injury, her lost pay and her pain. Mick's insurance pays up to $250,000 for an accident like this." },

  { id: 'w-fee', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a 401(k) fund’s yearly charge', name: 'Colin and the 401(k)',
    text: "Colin is 54. He has $200,000 in a fund in his 401(k), and for twenty years he has never read the yearly statement. This year he reads it and finds that the fund takes 1.7% of the money in it every year for running it, whether prices rose or fell.",
    route: { D1: ['erosion'] },
    cues: { D1: 'the fund takes 1.7% of the money in it every year for running it, whether prices rose or fell' } },

  { id: 'w-spendout', use: 'check', tier: 'clean', setting: 'home', topic: 'a yearly sum to live on',
    text: "Hal retired at 65 with $500,000. Every year he takes $25,000 out of it to spend on living, and he is now 69. His statement shows the balance is about the same as the day he retired.",
    route: { D1: ['erosion'] },
    cues: { D1: 'Every year he takes $25,000 out of it to spend on living' },
    segments: [
      { text: 'Hal retired at 65 with $500,000.', note: 'That is how much he has. The question asks what comes out of it.' },
      { text: 'Every year he takes $25,000 out of it to spend on living' },
      { text: ', and he is now 69. His statement shows the balance is about the same as the day he retired.', note: 'That only says where his money stands now. What comes out is in the sentence before.' }
    ],
    reason: { D1: 'It is $25,000 gone every year, and Hal spends it on living.' },
    not: { outcome: 'timing', why: 'Nothing says prices fell or a bill is due on a date. All it shows is a sum that leaves every year.' } },

  { id: 'w-couple-fall', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'monthly bills paid by selling shares in a fall', name: 'Pete and Jean',
    text: "Pete and Jean are both 67. Everything they own is $400,000 in shares and funds, and every month they sell about $1,700 of them to pay their bills. They have no cash set aside. This spring prices fell by 30%.",
    route: { D1: ['timing'] },
    cues: { D1: ['every month they sell about $1,700 of them to pay their bills', 'They have no cash set aside', 'This spring prices fell by 30%'] } },

  { id: 'w-drifted', use: 'check', tier: 'clean', setting: 'work', topic: 'a mix that drifted before retirement',
    text: "Greg, 58, chose to keep his $360,000 in 60% shares and 40% bonds. After years of rises it is 78% shares and 22% bonds. He plans to stop work in two years.",
    route: { D1: ['timing'] },
    cues: { D1: 'After years of rises it is 78% shares and 22% bonds' },
    segments: [
      { text: 'Greg, 58, chose to keep his $360,000 in 60% shares and 40% bonds.', note: 'That is the plan he chose. The question also needs what the split is now.' },
      { text: 'After years of rises it is 78% shares and 22% bonds' },
      { text: '. He plans to stop work in two years.', note: 'That is when he will need the money, which makes a fall matter. But what a fall would hit is in the words before it.' }
    ],
    reason: { D1: 'He chose 60% in shares and it is now 78%, so a fall would take more than he planned.' },
    not: { outcome: 'erosion', why: 'Nothing comes out every year, and no fee or tax is mentioned. All it shows is a split that has moved from its plan.' } },

  { id: 'w-la-fee', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'an adviser’s yearly charge on a retired couple',
    text: "Greta and Sam are retired and have $300,000. Every December their adviser's firm takes 1.1% of it, $3,300, however the funds did that year.",
    route: { D1: ['erosion'] },
    cues: { D1: "Every December their adviser's firm takes 1.1% of it, $3,300, however the funds did that year" } },

  { id: 'w-la-fall', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'a retired couple selling funds in a fall',
    text: "Greta and Sam are retired and have $300,000. They pay their bills by selling about $1,500 of their funds each month, with nothing set aside in cash, and this year prices are down 25%.",
    route: { D1: ['timing'] },
    cues: { D1: ['selling about $1,500 of their funds each month, with nothing set aside in cash', 'prices are down 25%'] } }
]);

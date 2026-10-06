// Wealth Preservation, Unit Two: cases shown inside cards, part one (two word cases, the charge for picking investments,
// and the charge that is worth paying).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// setting is one of subject.settings (an area of life); topic is the story, and no two cases of one name share a topic.
// cues[STEP] is the exact phrase in the text that decides that step (or a list of phrases); the app marks it, always in the
// same style. segments are the tappable pieces for "tap the words" prompts; note is shown if that piece is tapped in error.
// reason[STEP] is the reason for this case's answer to that question, written where the case is asked.

FC.cases('wealth', 'u2', [

  /* ---------- Two cases that carry a word and no name (no name is asked of either) ---------- */
  { id: 'e-t-compound', use: 'teach', tier: 'clean', setting: 'home', topic: 'a sum which grows annually', name: 'The $100,000 that grew',
    text: "Jo puts $100,000 into a fund and leaves it alone. Say it grows 4% a year. After one year it is worth $104,000. In the second year the 4% is worked out on $104,000, not on $100,000, so it adds $4,160 and the fund is worth $108,160." },

  { id: 'e-t-index', use: 'teach', tier: 'clean', setting: 'work', topic: 'two funds, one list', name: 'Two funds, one list',
    text: "Two funds each hold shares in about 500 companies. In the first, a team of managers meets every week to decide which shares to buy and which to sell, and the fund charges 1.1% a year. The second holds every company on a published list of about 500 of the largest companies in the US, in the same proportions as the list, and buys or sells only when the list changes. It charges 0.1% a year." },

  /* ---------- A yearly charge for picking investments ---------- */
  { id: 'e-m-fee', use: 'teach', tier: 'clean', setting: 'work', topic: 'an IRA with two layers of charges', name: 'Mara and the two charges',
    text: "Mara, 46, has $250,000 in an IRA, all of it in one fund where managers pick the shares. The fund charges 1.2% a year. Her adviser's firm, which recommended the fund and has done nothing else for her since, takes another 0.8% a year. Together that is 2% of the pot, $5,000, every year. A fund that simply holds every company on a published list of the largest companies charges 0.1% a year, $250 on the same money.",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { E1: "The fund charges 1.2% a year. Her adviser's firm, which recommended the fund and has done nothing else for her since, takes another 0.8% a year" } },

  { id: 'e-a-fee', use: 'teach', tier: 'clean', setting: 'retirement', topic: 'an adviser’s January charge on a retired teacher', name: 'Rosa’s January letter',
    text: "Rosa, 66, retired last year with $310,000. An adviser chose her funds and takes 1% of her pot every January, $3,100, for what the yearly letter calls 'selecting the right funds for you'. The funds take 1.1% on top. She has not heard from the adviser since the first meeting.",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { E1: "takes 1% of her pot every January, $3,100, for what the yearly letter calls 'selecting the right funds for you'" },
    segments: [
      { text: 'Rosa, 66, retired last year with $310,000.', note: 'That is what she has. It tells you how big the money is, and the question asks for what comes out of it and what it pays for.' },
      { text: "An adviser chose her funds and takes 1% of her pot every January, $3,100, for what the yearly letter calls 'selecting the right funds for you'. The funds take 1.1% on top." },
      { text: 'She has not heard from the adviser since the first meeting.', note: 'That tells you the adviser does nothing else for her. It is true, and it matters, but the words that show what the charge pays for are in the sentence before.' }
    ] },

  { id: 'e-c-fee', use: 'check', tier: 'clean', setting: 'business', topic: 'a bank fund for a contractor’s savings', name: 'Dev and the bank’s fund',
    text: "Dev owns a small construction company and keeps $180,000 of his savings in a fund at his bank. The fund's managers choose the shares, and the bank takes 1.6% of the money in it every year. The bank's yearly letter says the charge is 'for selecting the investments' and lists nothing else.",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { E1: "The bank's yearly letter says the charge is 'for selecting the investments' and lists nothing else" },
    segments: [
      { text: 'Dev owns a small construction company and keeps $180,000 of his savings in a fund at his bank.', note: 'That is what he has. It does not say what comes out of it or what that pays for.' },
      { text: "The fund's managers choose the shares, and the bank takes 1.6% of the money in it every year.", note: 'That shows the charge is taken every year. It does not yet say what the charge pays for, and the question is about what it pays for.' },
      { text: "The bank's yearly letter says the charge is 'for selecting the investments' and lists nothing else" }
    ],
    reason: { E1: "The bank's own letter says what the 1.6% pays for: {cue:E1}. Choosing investments is the one thing it names, and no other work is listed. It is far more than the 0.1% {t:fund} that simply follows a published list charges." },
    not: { outcome: 'nocut', why: 'The case shows no work that the charge pays for and that would not otherwise get done, and the charge is not a set price: it is a percentage of the money, so it grows when the money does.' } },

  /* ---------- Nothing to cut back (the charge that pays for real work) ---------- */
  { id: 'e-m-nocut', use: 'teach', tier: 'clean', setting: 'family', topic: 'a planner’s flat yearly price', name: 'Kamal and his planner',
    text: "Kamal, 58, pays his planner $3,000 a year, a flat price agreed in writing that has not changed in five years, though his pot has doubled in that time. For it the planner prepares his tax return, checks that his will and forms are current, and updates his spending plan, none of which Kamal would do himself. The planner takes no commission, and Kamal's money is in index funds.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { E1: "$3,000 a year, a flat price agreed in writing that has not changed in five years, though his pot has doubled in that time. For it the planner prepares his tax return, checks that his will and forms are current, and updates his spending plan, none of which Kamal would do himself" } },

  { id: 'e-a-nocut', use: 'teach', tier: 'clean', setting: 'work', topic: 'income investments sitting in the IRA', name: 'Ben’s two accounts',
    text: "Ben, 52, has $50,000 in an IRA and $50,000 in an ordinary brokerage account. The IRA holds a bond fund that pays out $2,400 of interest a year, and Ben pays no tax on it. The brokerage account holds a fund of shares that pays out about $500 a year, and he pays $75 tax on that. Both accounts charge very little.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { E1: "The IRA holds a bond fund that pays out $2,400 of interest a year, and Ben pays no tax on it. The brokerage account holds a fund of shares that pays out about $500 a year" },
    segments: [
      { text: 'Ben, 52, has $50,000 in an IRA and $50,000 in an ordinary brokerage account.', note: 'That is what he has. It does not show which account holds which investment, and that is what settles this case.' },
      { text: "The IRA holds a bond fund that pays out $2,400 of interest a year, and Ben pays no tax on it. The brokerage account holds a fund of shares that pays out about $500 a year, and he pays $75 tax on that." },
      { text: 'Both accounts charge very little.', note: 'That tells you no charge is taking much. It is true, but it is not the words that show why the tax here is already as low as it can be.' }
    ] },

  { id: 'e-c-nocut', use: 'check', tier: 'varied', setting: 'health', topic: 'a flat fee for managing a parent’s money in an illness', name: 'Omar and the care manager',
    text: "Omar's father has dementia and $400,000. Omar pays a specialist $4,200 a year, a flat price, to manage his father's care payments, claim the benefits he is owed and keep the legal forms in order. Omar says doing it himself would take most of his weekends. The price would be the same if the money were $800,000.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { E1: "pays a specialist $4,200 a year, a flat price, to manage his father's care payments, claim the benefits he is owed and keep the legal forms in order" },
    reason: { E1: "The $4,200 is a flat price that stays the same however much money there is, and it pays for named work that would not otherwise get done: {cue:E1}. $4,200 is about 1% of $400,000, and the size of a charge on its own does not decide this." },
    not: { outcome: 'feecore', why: 'The charge does not pay for choosing investments. It pays for work Omar would otherwise have to do himself, at a price that does not move when the money does.' } },

  /* ---------- The look-alike pair: the same firm, the same $3,000, two kinds of charge ---------- */
  { id: 'e-l-fee-a', use: 'teach', tier: 'clean', setting: 'family', topic: 'a firm’s percentage of a sister’s pot', name: 'Gwen and the firm',
    text: "Gwen, 60, has $300,000 with a firm of advisers. The firm takes 1% of it each year, $3,000, to choose her funds, and has done nothing else for her since the day it chose them.",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { E1: 'takes 1% of it each year, $3,000, to choose her funds, and has done nothing else for her since the day it chose them' } },

  { id: 'e-l-fee-b', use: 'teach', tier: 'clean', setting: 'family', topic: 'a firm’s flat price for a sister’s work', name: 'Ann and the same firm',
    text: "Gwen's sister Ann, 60, has $300,000 with the same firm. It takes $3,000 a year from her too, a flat price that does not move when her money does. For it the firm prepares her tax return, reviews her will and her forms, and updates her plan each spring. Her money is in index funds.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { E1: 'a flat price that does not move when her money does. For it the firm prepares her tax return, reviews her will and her forms, and updates her plan each spring' } }
]);

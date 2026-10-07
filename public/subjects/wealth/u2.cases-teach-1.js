// Wealth Preservation, Unit Two: cases shown inside cards, part one (the word for a fund nobody picks, the charge for picking investments,
// and the charge that is worth paying).
// use: 'teach' = shown in a card with its reasoning; 'check' = asked between cards. Neither may appear in the drill.
// cues[STEP] is the exact phrase in the text that decides that step; the app marks it. segments are the tappable pieces for "tap the words"
// prompts; note is shown if that piece is tapped in error. reason[STEP] is the reason for this case's answer, written where the case is asked.

FC.cases('wealth', 'u2', [

  /* ---------- A fund where nobody picks the investments ---------- */
  { id: 'e-t-index', use: 'teach', tier: 'clean', setting: 'work', topic: 'two funds, one list', name: 'Two funds, one list',
    text: "Two funds each hold shares in about 500 companies. In the first, a team of managers meets every week to decide which shares to buy and which to sell, and the fund charges 1.1% a year. The second holds every company on a published list of about 500 of the largest companies in the US, in the same proportions as the list, and buys or sells only when the list changes. It charges 0.1% a year." },

  /* ---------- A yearly charge for picking investments ---------- */
  { id: 'e-m-fee', use: 'teach', tier: 'clean', setting: 'work', topic: 'an IRA with two layers of charges', name: 'Mara and the two fees',
    text: "Mara, 46, has $250,000 in an IRA, all of it in one fund where managers pick the shares. The fund charges 1.2% a year. Her adviser's firm, which recommended the fund and has done nothing else for her since, takes another 0.8% a year. Together that is 2% of the pot, $5,000, every year. A fund that simply holds every company on a published list of the largest companies charges 0.1% a year, $250 on the same money.",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { E1: "The fund charges 1.2% a year. Her adviser's firm, which recommended the fund and has done nothing else for her since, takes another 0.8% a year" } },

  { id: 'e-c-fee', use: 'check', tier: 'clean', setting: 'business', topic: 'a bank fund for a contractor’s savings', name: 'Dev and the bank’s fund',
    text: "Dev owns a small construction company and keeps $180,000 of his savings in a fund at his bank. The fund's managers choose the shares, and the bank takes 1.6% of the money in it every year. The bank's yearly letter says the fee is 'for selecting the investments' and lists nothing else.",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { E1: "The bank's yearly letter says the fee is 'for selecting the investments' and lists nothing else" },
    segments: [
      { text: 'Dev owns a small construction company and keeps $180,000 of his savings in a fund at his bank.', note: 'These words only say what Dev owns. They do not say what comes out of it or what that pays for.' },
      { text: "The fund's managers choose the shares, and the bank takes 1.6% of the money in it every year.", note: 'These words show the fee is taken every year. They do not say what the fee pays for.' },
      { text: "The bank's yearly letter says the fee is 'for selecting the investments' and lists nothing else" }
    ],
    reason: { E1: "The bank's own letter says what the 1.6% pays for, and it names only picking: {cue:E1}." },
    not: { outcome: 'nocut', why: 'The story shows no work that the fee pays for and that would not otherwise get done. The fee is a percentage of the money, not a set price, so it grows when the money does.' } },

  { id: 'e-c-step', use: 'check', tier: 'clean', setting: 'home', topic: 'a bank’s two layers of charges', name: 'Yuki and her bank',
    text: "Yuki, 41, has $140,000 in funds her bank's adviser picked. The funds take 1.4% a year, and the bank adds 0.6% a year for choosing them. The bank has done nothing else for her. Index funds that follow published lists charge about 0.1% a year.",
    outcome: 'feecore', route: { D1: ['erosion'], E1: ['picking'] },
    cues: { E1: 'The funds take 1.4% a year, and the bank adds 0.6% a year for choosing them. The bank has done nothing else for her' },
    reason: { E1: 'Two fees, 2% together, come out of {t:pot} every year, and the story says what they pay for: {cue:E1}. Picking is the one job named, and {t:indexfund} does without it for about 0.1%.' },
    not: { outcome: 'nocut', why: 'No work that would not otherwise get done is shown. The fee is a percentage of the money, not a set price.' } },

  /* ---------- Nothing to cut back (the charge that pays for real work) ---------- */
  { id: 'e-m-nocut', use: 'teach', tier: 'clean', setting: 'family', topic: 'a planner’s flat yearly price', name: 'Kamal and his planner',
    text: "Kamal, 58, pays his planner $3,000 a year, a flat price agreed in writing that has not changed in five years, though his pot has doubled in that time. For it the planner prepares his tax return, checks that his will and forms are current, and updates his spending plan, none of which Kamal would do himself. The planner takes no commission, and Kamal's money is in index funds.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { E1: "$3,000 a year, a flat price agreed in writing that has not changed in five years, though his pot has doubled in that time. For it the planner prepares his tax return, checks that his will and forms are current, and updates his spending plan, none of which Kamal would do himself" } },

  { id: 'e-c-nocut', use: 'check', tier: 'varied', setting: 'health', topic: 'a flat fee for managing a parent’s money in an illness', name: 'Omar and the care manager',
    text: "Omar's father has dementia and $400,000. Omar pays a specialist $4,200 a year, a flat price, to manage his father's care payments, claim the benefits he is owed and keep the legal forms in order. Omar says doing it himself would take most of his weekends. The price would be the same if the money were $800,000.",
    outcome: 'nocut', route: { D1: ['erosion'], E1: ['nomore'] },
    cues: { E1: "pays a specialist $4,200 a year, a flat price, to manage his father's care payments, claim the benefits he is owed and keep the legal forms in order" },
    reason: { E1: "It is a flat price for work Omar would otherwise do himself: {cue:E1}. Its size, about 1% of $400,000, does not decide it." },
    not: { outcome: 'feecore', why: 'This fee does not pay for picking investments. It pays for work Omar would otherwise do himself, at a price that stays put when the money changes.' } },

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

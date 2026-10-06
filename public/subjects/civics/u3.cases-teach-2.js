// Civics, Unit Three: cases shown inside cards, part two (money, the money pair, the spending-bill exception, and the
// vote on a person or an agreement). See u3.cases-teach-1.js for the field guide.

FC.cases('civics', 'u3', [

  /* ---------- The power of the purse ---------- */
  { id: 'p-barrier', use: 'teach', tier: 'clean', setting: 'community', topic: 'a flood barrier left unfunded', name: 'The flood barrier',
    text: "A river town floods almost every spring. The President announced a flood barrier for the town, and the federal engineers have their plans ready. But the spending bill the House and the Senate passed this year has no money for the barrier, so no work can start.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { C1: 'the spending bill the House and the Senate passed this year has no money for the barrier' } },

  { id: 'p-schools', use: 'teach', tier: 'clean', setting: 'learning', topic: 'funds to repair school buildings', name: 'The school repairs',
    text: "Many school buildings are over sixty years old, and some roofs leak. On Tuesday the House voted $200 million for repairs to old school buildings, and on Thursday the Senate voted for the same amount.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { C1: 'the House voted $200 million for repairs to old school buildings, and on Thursday the Senate voted for the same amount' },
    segments: [
      { text: 'Many school buildings are over sixty years old, and some roofs leak', note: 'That is why the money is wanted. It says nothing about what Congress decided.' },
      { text: 'On Tuesday the House voted $200 million for repairs to old school buildings, and on Thursday the Senate voted for the same amount' }
    ] },

  { id: 'k-rangers', use: 'check', tier: 'clean', setting: 'leisure', topic: 'funds cut for park rangers', name: 'The park rangers',
    text: "The national parks have more visitors every year, and rangers say they are short of staff. The House and the Senate passed a spending bill that cuts the money for park rangers by a third.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { C1: 'a spending bill that cuts the money for park rangers by a third' },
    reason: { C1: 'The bill is {cue:C1}. Congress is deciding how much money the government may spend on something, and cutting it is one of the ways to decide. Nobody has banned the rangers: there is less money to pay them.' },
    not: { outcome: 'enumerated', why: 'The bill is a law, and every law is passed by both chambers. But it is not a law on one of the listed matters such as a tax. What it settles is how much the government may spend.' } },

  /* ---------- The look-alike pair: one clinic scheme, raising the money and spending it ---------- */
  { id: 'l-clinic-tax', use: 'teach', tier: 'clean', setting: 'health', topic: 'a tax to pay for clinics',
    name: 'The clinic tax',
    text: "Rural clinics need help to stay open. The House and the Senate passed a bill that puts a small tax on every bottle of bottled water, to raise money for rural clinics.",
    outcome: 'enumerated', route: { D1: ['congress'], C1: ['listed'] },
    cues: { C1: 'a bill that puts a small tax on every bottle of bottled water' } },

  { id: 'l-clinic-money', use: 'teach', tier: 'clean', setting: 'health', topic: 'a grant of funds for clinics',
    name: 'The clinic grants',
    text: "Rural clinics need help to stay open. The House and the Senate passed a bill that gives $90 million to the federal health office for grants to rural clinics.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { C1: 'a bill that gives $90 million to the federal health office for grants to rural clinics' } },

  /* ---------- The exception: a spending bill that is also a law on a listed matter ---------- */
  { id: 'x-mailfunds', use: 'teach', tier: 'misleading', setting: 'work', topic: 'funds for new mail trucks', name: 'The mail trucks',
    also: ['listed'],
    text: "Mail trucks are old, and they often break down. The House and the Senate passed a bill that gives the postal service $400 million to buy new mail trucks.",
    outcome: 'purse', route: { D1: ['congress'], C1: ['money'] },
    cues: { C1: '$400 million to buy new mail trucks' },
    segments: [
      { text: 'Mail trucks are old, and they often break down', note: 'That is why the bill exists. It is not what the bill decides.' },
      { text: 'The House and the Senate passed a bill that gives the postal service $400 million to buy new mail trucks' }
    ] },

  /* ---------- Advice and consent ---------- */
  { id: 'c-parks', use: 'teach', tier: 'clean', setting: 'work', topic: 'a new head for the national parks', name: 'The head of the parks',
    text: "The President chose a new head for the federal agency that runs the national parks. The Senate held two days of hearings, and on Thursday it voted 61 to 38 to approve her.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { C1: 'The Senate held two days of hearings, and on Thursday it voted 61 to 38 to approve her' } },

  { id: 'c-lake', use: 'teach', tier: 'clean', setting: 'world', topic: 'a treaty on a shared lake', name: 'The lake treaty',
    text: "After two years of talks, the President signed a treaty with a neighboring country on how both countries use a shared lake. The treaty binds nobody yet. On Tuesday the Senate voted 71 to 27 to approve it.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { C1: 'the Senate voted 71 to 27 to approve it' },
    segments: [
      { text: 'After two years of talks, the President signed a treaty with a neighboring country on how both countries use a shared lake', note: 'That is the President’s part, and it came first. It is how the matter reached the Senate, not the vote.' },
      { text: 'The treaty binds nobody yet', note: 'That says why a vote is still needed. It is not the vote itself.' },
      { text: 'On Tuesday the Senate voted 71 to 27 to approve it' }
    ] },

  { id: 'k-taxhead', use: 'check', tier: 'clean', setting: 'money', topic: 'a new head for the tax office', name: 'The head of the tax office',
    text: "The President chose a new head for the federal tax office. On Wednesday the Senate voted 58 to 41 to approve her, and she starts work on Monday.",
    outcome: 'confirm', route: { D1: ['congress'], C1: ['approve'] },
    cues: { C1: 'the Senate voted 58 to 41 to approve her' },
    reason: { C1: 'The President put a person forward for a top job, and the Senate voted on her: {cue:C1}. She does not start work until the vote is yes.' },
    not: { outcome: 'impeach', why: 'A vote in the Senate about a person is all the two names have in common. Here nobody is accused of anything, and the woman does not yet hold the job.' } }
]);

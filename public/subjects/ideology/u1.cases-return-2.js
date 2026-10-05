// Political Ideologies, Unit One: fresh cases held back for later days (lesson standard E9, V44), part two.
// Field guide: see u1.cases-drill-1.js. Every text here is invented.

FC.cases('ideology', 'u1', [

  /* ---------- rights and fair treatment for everyone ---------- */
  { id: 'i-ret-rights-evict', use: 'return', tier: 'clean', setting: 'housing', topic: 'a hearing before an eviction',
    text: "Nobody should be evicted without a hearing. Every tenant, whoever they are and whatever they pay, is owed a fair process before their home is taken.",
    route: { D1: ['rights'] },
    cues: { D1: ['Every tenant, whoever they are and whatever they pay, is owed a fair process before their home is taken'] },
    reason: { D1: 'The text puts first what every tenant is owed: {cue:D1}.' },
    not: { outcome: 'class', why: 'Tenants are named, but the text does not sort anyone into workers and owners or take a side between them. It says what every tenant is owed.' },
    wouldChange: 'If the text had said that tenants and landlords want opposite things and that it stands with the tenants, it would be {a:D1.class}.' },

  { id: 'i-ret-rights-queue', use: 'return', tier: 'varied', setting: 'health', topic: 'one queue for every patient',
    text: "Disabled and non-disabled patients wait in the same queue for the same clinic, which sounds fair and leaves the disabled behind. Fair treatment for every patient means changing how the queue works.",
    route: { D1: ['rights'] },
    cues: { D1: ['which sounds fair and leaves the disabled behind', 'Fair treatment for every patient means changing how the queue works'] },
    reason: { D1: 'The text puts first what every patient is owed, and says rules that treat all alike can still leave a group behind: {cue:D1}.' },
    not: { outcome: 'none', why: 'The text is about how a queue works, but it says that fair treatment is owed to every patient, and that is what it puts first.' },
    wouldChange: 'If the text had only said that the clinic works by appointment and where to book, it would be {a:D1.none}.' },

  { id: 'i-ret-rights-trial', use: 'return', tier: 'misleading', setting: 'town', topic: 'a fair trial owed to strangers', echo: 'i-speech-nation',
    text: "Whatever flag a person was born under, a fair trial is owed to them in this country. The country that keeps that promise to strangers is the one worth being proud of.",
    route: { D1: ['rights'] },
    cues: { D1: ['a fair trial is owed to them in this country', 'keeps that promise to strangers'] },
    reason: { D1: 'The text says what every person is owed, whatever flag they were born under: {cue:D1}.' },
    not: { outcome: 'nation', why: 'The country and pride in it are named, which is what the second answer looks for. But the text does not put one people first. It says a fair trial is owed to strangers too.' },
    wouldChange: 'If the text had said that only members of the one people of this country are owed a fair trial, it would be {a:D1.nation}.' },

  /* ---------- no side named ---------- */
  { id: 'i-ret-none-office', use: 'return', tier: 'clean', setting: 'schooling', topic: 'a school office closed for training',
    text: "The school office will be closed on 12 March for staff training. Letters for the head teacher can be left in the box by the gate. Normal hours resume on the 13th.",
    route: { D1: ['none'] },
    cues: { D1: ['The school office will be closed on 12 March for staff training', 'Letters for the head teacher can be left in the box by the gate'] },
    reason: { D1: 'The text says how one practical matter will be handled: {cue:D1}. It speaks for no side.' },
    not: { outcome: 'rights', why: 'The notice is about a school, but it does not say that anyone is owed anything. It says when the office is closed and where to leave a letter.' },
    wouldChange: 'If the notice had said that every parent is owed a say in how the school is run, and that the closure took it away, it would be {a:D1.rights}.' },

  { id: 'i-ret-none-savings', use: 'return', tier: 'varied', setting: 'money', topic: 'interest on new savings accounts',
    text: "Savings accounts opened after 1 July will pay 3 percent interest on balances above £500. Existing accounts are not changed. Details are available at any branch.",
    route: { D1: ['none'] },
    cues: { D1: ['Savings accounts opened after 1 July will pay 3 percent interest on balances above £500', 'Existing accounts are not changed'] },
    reason: { D1: 'The text says how one practical matter will be handled: {cue:D1}. No people are set against owners and nothing is said to be owed to anyone.' },
    not: { outcome: 'class', why: 'A bank and its customers are in the background, and a text could take the customers’ side against the bank. This one only gives the terms.' },
    wouldChange: 'If the text had said that the bank’s owners keep the interest while the savers are left with nothing, and had stood with the savers, it would be {a:D1.class}.' },

  { id: 'i-ret-none-commissioner', use: 'return', tier: 'misleading', setting: 'borders', topic: 'a commissioner closes the crossings', echo: 'i-speech-nation',
    text: "By order of the Commissioner: border crossings are closed after dark. Soldiers will check every traveller. The Commissioner will decide when they reopen, and no appeal will be heard.",
    route: { D1: ['none'] },
    cues: { D1: ['border crossings are closed after dark', 'The Commissioner will decide when they reopen, and no appeal will be heard'] },
    reason: { D1: 'The text says who decides and how: {cue:D1}. It names no people it speaks for and no side.' },
    not: { outcome: 'nation', why: 'Borders, soldiers and a ruler who allows no appeal are what texts for the nation can sound like. But this text never says whom it speaks for.' },
    wouldChange: 'If the order had said that the borders are closed to keep the one people of this country whole, and that the people comes first, it would be {a:D1.nation}.' }
]);

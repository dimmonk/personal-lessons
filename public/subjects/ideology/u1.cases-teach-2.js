// Political Ideologies, Unit One: cases shown inside cards, part two (the third, fourth and fifth answers).
// Field guide: see u1.cases-teach-1.js. Every text here is invented.

FC.cases('ideology', 'u1', [

  /* ---------- The third answer: old ways of faith, family and custom ---------- */
  { id: 'i-trad-meet', use: 'teach', tier: 'clean', setting: 'faith', topic: 'a sermon at the harvest service', name: 'The harvest sermon',
    text: "From a sermon read at the harvest service in the village of Elmsley: 'Our grandparents kept the Sabbath, married in this church and raised their children in the faith, and they handed all of it down to us. The faith, the family and the old customs are what should guide how this country is run. Where they are set aside, there is nothing left to steer by.'",
    route: { D1: ['tradition'] },
    cues: { D1: ['they handed all of it down to us', 'The faith, the family and the old customs are what should guide how this country is run'] } },

  { id: 'i-trad-check', use: 'check', tier: 'clean', setting: 'town', topic: 'opening the market on Sundays',
    text: "Council Member Ashby opposes opening the town market on Sundays. 'Our town has always set Sunday aside for church and home. These customs were handed down to us, and they ought to decide how we run the town, whatever the stalls would earn.'",
    route: { D1: ['tradition'] },
    cues: { D1: 'These customs were handed down to us, and they ought to decide how we run the town' },
    reason: { D1: 'The text holds up customs from the past as what should guide the town: {cue:D1}. It sorts nobody by wages, and it speaks for no one people against others.' },
    not: { outcome: 'nation', why: 'Nothing here puts one people first. What the text puts first is the town’s customs, handed down.' } },

  /* ---------- The fourth answer: rights and fair treatment for everyone ---------- */
  { id: 'i-rights-meet', use: 'teach', tier: 'clean', setting: 'money', topic: 'a license to open a stall', name: 'The open-counter pamphlet',
    text: "From a pamphlet of the Open Counter Society: 'Nobody should need a license to open a stall or a barber's chair. Each person is owed the freedom to speak, to believe, to own and to trade as they choose, and that freedom comes before any plan anyone has for the country.'",
    route: { D1: ['rights'] },
    cues: { D1: ['Each person is owed the freedom to speak, to believe, to own and to trade as they choose', 'that freedom comes before any plan anyone has for the country'] } },

  { id: 'i-rights-check', use: 'check', tier: 'clean', setting: 'schooling', topic: 'one exam desk for every candidate',
    text: "The exam board seats every candidate at the same kind of desk for the same three hours. 'That sounds fair to everyone,' said a disability advocate, 'and it still shuts out students who cannot sit for three hours. Fair treatment for every student means changing the rule so that no group is left behind.'",
    route: { D1: ['rights'] },
    cues: { D1: 'Fair treatment for every student means changing the rule so that no group is left behind' },
    reason: { D1: 'The text puts first what every student is owed: {cue:D1}. It stands with no group against another.' },
    not: { outcome: 'class', why: 'The groups in this text are groups of students. Nobody is sorted by wages or by owning a business.' } },

  /* ---------- The fifth answer: no side named ---------- */
  { id: 'i-none-meet', use: 'teach', tier: 'clean', setting: 'housing', topic: 'an elevator out of service', name: 'The elevator notice',
    text: "A notice on the doors of Birch House: 'The elevator will be out of service from Monday, March 3 until Friday, March 14 while the motor is replaced. Residents who need help with the stairs should call the superintendent at the number below. Trash is collected on Thursdays as usual.'",
    route: { D1: ['none'] },
    cues: { D1: ['The elevator will be out of service from Monday, March 3 until Friday, March 14 while the motor is replaced', 'Residents who need help with the stairs should call the superintendent'] } },

  { id: 'i-none-check', use: 'check', tier: 'clean', setting: 'health', topic: 'new opening hours at a clinic',
    text: "From a sign at the Ash Road clinic: 'From the first of May the clinic opens at 8 instead of 9. Patients with an appointment before 9 should arrive after 8. The pharmacy hours do not change.'",
    route: { D1: ['none'] },
    cues: { D1: ['From the first of May the clinic opens at 8 instead of 9', 'Patients with an appointment before 9 should arrive after 8'] },
    reason: { D1: 'The text says how one practical matter will be handled: {cue:D1}. Nobody is sorted into sides.' },
    not: { outcome: 'rights', why: 'A clinic is about health care, but the sign never says every person is owed any care. It only says when the doors open.' } }
]);

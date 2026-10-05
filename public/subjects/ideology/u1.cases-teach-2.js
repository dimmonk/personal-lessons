// Political Ideologies, Unit One: cases shown inside cards, part two (the third, fourth and fifth answers).
// Field guide: see u1.cases-teach-1.js. Every text here is invented.

FC.cases('ideology', 'u1', [

  /* ---------- The third answer: old ways of faith, family and custom ---------- */
  { id: 'i-trad-meet', use: 'teach', tier: 'clean', setting: 'faith', topic: 'a sermon at the harvest service', name: 'The harvest sermon',
    text: "From a sermon read at the harvest service in the village of Elmsley: 'Our grandparents kept the Sabbath, married in this church and raised their children in the faith, and they handed all of it down to us. The faith, the family and the old customs are what should guide how this country is run. Where they are set aside, there is nothing left to steer by.'",
    route: { D1: ['tradition'] },
    cues: { D1: ['they handed all of it down to us', 'The faith, the family and the old customs are what should guide how this country is run'] } },

  { id: 'i-trad-again', use: 'teach', tier: 'clean', setting: 'schooling', topic: 'matches on a Sunday morning', name: 'The Sunday matches',
    text: "A parent writes to the school board: 'In our house Sunday morning is for church and for a long lunch with the grandparents, as it was for them and for their parents before them. A school that sets matches on Sundays is telling every home in this town that the old ways no longer count. They should count for more than the league table.'",
    route: { D1: ['tradition'] },
    cues: { D1: ['as it was for them and for their parents before them', 'They should count for more than the league table'] },
    segments: [
      { text: 'In our house Sunday morning is for church and for a long lunch with the grandparents, as it was for them and for their parents before them.', note: 'That shows ways handed down from the past, and it is half of what you point to. The other half is what the text does with them: it holds them up as what should guide.' },
      { text: 'A school that sets matches on Sundays is telling every home in this town that the old ways no longer count.', note: 'That says what the parent thinks the school is doing. It names the old ways as something that matters, and it has still to say what they should count for.' },
      { text: 'They should count for more than the league table' }
    ] },

  { id: 'i-trad-check', use: 'check', tier: 'clean', setting: 'town', topic: 'opening the market on Sundays',
    text: "Councillor Ashby opposes opening the town market on Sundays. 'Our town has always set Sunday aside for church and home. These customs were handed down to us, and they ought to decide how we run the town, whatever the stalls would earn.'",
    route: { D1: ['tradition'] },
    cues: { D1: 'These customs were handed down to us, and they ought to decide how we run the town' },
    reason: { D1: 'The text holds up customs from the past as what should guide the town: {cue:D1}. It sorts nobody by wages or by owning a business, and it does not speak for one people against others.' },
    not: { outcome: 'nation', why: 'Nothing here puts one people first. The text speaks of the town’s customs and of what was handed down, and that is the thing it puts first.' } },

  /* ---------- The fourth answer: rights and fair treatment for everyone ---------- */
  { id: 'i-rights-meet', use: 'teach', tier: 'clean', setting: 'money', topic: 'a licence to open a stall', name: 'The open-counter pamphlet',
    text: "From a pamphlet of the Open Counter Society: 'Nobody should need a licence to open a stall or a barber's chair. Each person is owed the freedom to speak, to believe, to own and to trade as they choose, and that freedom comes before any plan anyone has for the country.'",
    route: { D1: ['rights'] },
    cues: { D1: ['Each person is owed the freedom to speak, to believe, to own and to trade as they choose', 'that freedom comes before any plan anyone has for the country'] } },

  { id: 'i-rights-again', use: 'teach', tier: 'clean', setting: 'health', topic: 'a doctor and a school for every child', name: 'The speech about every child',
    text: "From a speech: 'Whatever your name or your bank balance, every child in this country is owed a doctor when they are ill and a school that will teach them. That is not a favour. It is what each person is owed, and a decent society puts it first.'",
    route: { D1: ['rights'] },
    cues: { D1: ['every child in this country is owed a doctor when they are ill and a school that will teach them', 'It is what each person is owed, and a decent society puts it first'] },
    segments: [
      { text: 'Whatever your name or your bank balance', note: 'That says it makes no difference who the child is. It is half of what you point to. The other half is what every child is said to be owed.' },
      { text: 'every child in this country is owed a doctor when they are ill and a school that will teach them' },
      { text: 'It is what each person is owed, and a decent society puts it first', note: 'That says that it is owed, and not what. The words that say what is owed are in the sentence before.' }
    ] },

  { id: 'i-rights-check', use: 'check', tier: 'clean', setting: 'schooling', topic: 'one exam desk for every candidate',
    text: "The exam board seats every candidate at the same kind of desk for the same three hours. 'That sounds fair to everyone,' said a disability advocate, 'and it still shuts out students who cannot sit for three hours. Fair treatment for every student means changing the rule so that no group is left behind.'",
    route: { D1: ['rights'] },
    cues: { D1: 'Fair treatment for every student means changing the rule so that no group is left behind' },
    reason: { D1: 'The text puts first what every student is owed, and says it plainly: {cue:D1}. It sets no working people against owners, it speaks for no one people against others, and it holds up nothing handed down from the past.' },
    not: { outcome: 'class', why: 'The groups in this text are groups of students, and nobody is sorted by wages or by owning a business.' } },

  /* ---------- The fifth answer: no side named ---------- */
  { id: 'i-none-meet', use: 'teach', tier: 'clean', setting: 'housing', topic: 'a lift out of service', name: 'The lift notice',
    text: "A notice on the doors of Birch House: 'The lift will be out of service from Monday 3 March until Friday 14 March while the motor is replaced. Residents who need help with the stairs should ring the caretaker on the number below. Rubbish is collected on Thursdays as usual.'",
    route: { D1: ['none'] },
    cues: { D1: ['The lift will be out of service from Monday 3 March until Friday 14 March while the motor is replaced', 'Residents who need help with the stairs should ring the caretaker'] } },

  { id: 'i-none-again', use: 'teach', tier: 'clean', setting: 'town', topic: 'who chairs the council', name: 'The town charter',
    text: "From the town charter of Brennick: 'The chair of the council is chosen by the full council each May. The chair may serve two terms and signs any contract above £50,000.' Copies of the charter are available at the library.",
    route: { D1: ['none'] },
    cues: { D1: ['The chair of the council is chosen by the full council each May', 'The chair may serve two terms and signs any contract above £50,000'] },
    segments: [
      { text: 'From the town charter of Brennick', note: 'That says where the words come from. It is not what the words say.' },
      { text: 'The chair of the council is chosen by the full council each May. The chair may serve two terms and signs any contract above £50,000.' },
      { text: 'Copies of the charter are available at the library', note: 'That says where to get the charter. It is practical too, but it is not the part that says who is in charge.' }
    ] },

  { id: 'i-none-check', use: 'check', tier: 'clean', setting: 'health', topic: 'new opening hours at a clinic',
    text: "From a sign at the Ash Road clinic: 'From the first of May the clinic opens at 8 instead of 9. Patients with an appointment before 9 should arrive after 8. The pharmacy hours do not change.'",
    route: { D1: ['none'] },
    cues: { D1: ['From the first of May the clinic opens at 8 instead of 9', 'Patients with an appointment before 9 should arrive after 8'] },
    reason: { D1: 'The text says how one practical matter will be handled: {cue:D1}. Nobody is sorted into sides, and nothing is held up as first.' },
    not: { outcome: 'rights', why: 'A clinic is about health care, but the sign does not say that every person is owed any care. It says when the doors open.' } }
]);

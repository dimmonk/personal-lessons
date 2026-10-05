// Political Ideologies, Unit Five: drill cases for the first stage (name). The key's answer is shown and the learner gives the
// name, so each case carries marked words and a reason for the unit's question, the first question too, and the nearest wrong name.
// All texts are invented. Cases are authored in groups of look-alikes: every case in a group shares a ledger entry with another.
// None of these appears in a card.

FC.cases('ideology', 'u5', [

  /* ---------- Clean ---------- */
  { id: 'i5-n-clib1', use: 'drill', tier: 'clean', setting: 'town', topic: 'a newspaper and what it may print',
    text: "From an editorial in the Calder Courier: 'Every person is free to print what they think and to read what they choose. The government should protect that freedom, punish those who break into a printing shop, and otherwise keep out of what is printed.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'Every person is free to print what they think and to read what they choose',
            R1: 'The government should protect that freedom, punish those who break into a printing shop, and otherwise keep out of what is printed' },
    reason: { D1: 'The text puts first what every person is free to do, print and read: {cue:D1}. It names no side against another.',
              R1: 'The government is to protect the freedom, punish a break-in and otherwise keep out: {cue:R1}. Nothing is to be given to anyone.' },
    not: { outcome: 'modlib', why: 'The text asks the government to give nothing. A text that asked it to give people a school, a doctor or help while out of work, as well as protecting rights, would be {o:modlib}.' } },

  { id: 'i5-n-modlib1', use: 'drill', tier: 'clean', setting: 'schooling', topic: 'a hot meal for every school child',
    text: "From a speech by the head of the Oakmead school board: 'Each child has the right to say what they think and to be heard. But a child who comes to school hungry cannot learn, and rights do not fill a lunch box. The government should give every child a free hot meal at school, and we should all pay for it through our taxes.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Each child has the right to say what they think and to be heard',
            R1: 'The government should give every child a free hot meal at school, and we should all pay for it through our taxes' },
    reason: { D1: 'The text puts first what each child has a right to: {cue:D1}. It names no side against another.',
              R1: 'The government is to give every child something, and everyone is to pay for it: {cue:R1}.' },
    not: { outcome: 'clib', why: 'The text does speak of rights, as {o:clib} does. But {o:clib} stops at protecting them. This text asks the government to give every child a meal.' } },

  { id: 'i5-n-idegal1', use: 'drill', tier: 'clean', setting: 'health', topic: 'a hospital with telephone-only booking',
    text: "From a letter by the Deaf Association of Corran to the hospital: 'The hospital books every appointment by telephone, in the same way for every patient. The rule treats everyone alike, and it leaves deaf patients unable to book at all. We ask the hospital to change the way it takes bookings until deaf patients are seen as often as hearing ones. Nobody here is asking to be put ahead of anyone.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'Nobody here is asking to be put ahead of anyone',
            R1: ['The rule treats everyone alike, and it leaves deaf patients unable to book at all',
                 'We ask the hospital to change the way it takes bookings until deaf patients are seen as often as hearing ones'] },
    reason: { D1: 'The text wants fair treatment for one group and says it wants no one put ahead: {cue:D1}.',
              R1: 'A rule that treats everyone alike is said to leave a group behind, and the text asks for it to change: {cue:R1}.' },
    not: { outcome: 'modlib', why: 'The text asks for no school, no doctor and no help for everyone. It names one booking method that treats everyone alike and leaves one group out, and asks for that to change.' } },

  /* ---------- Varied ---------- */
  { id: 'i5-n-clib2', use: 'drill', tier: 'varied', setting: 'money', topic: 'a baker who turns down a grant',
    text: "Idris Kane, who runs a small bakery, told the trade committee that he did not want the grant on offer. 'I am free to open when I like and to charge what I like, and so is every other baker. Keep the courts working and the roads open, and keep your grants.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'I am free to open when I like and to charge what I like, and so is every other baker',
            R1: 'Keep the courts working and the roads open, and keep your grants' },
    reason: { D1: 'He says what every baker is free to do, and puts it first: {cue:D1}.',
              R1: 'He asks the government for the courts and the roads and for nothing else, and turns down what it offers: {cue:R1}.' },
    not: { outcome: 'modlib', why: 'He talks of a grant, which is something the government gives. But he refuses it. A text that asked the government to give people a fair start would be {o:modlib}.' } },

  { id: 'i5-n-modlib2', use: 'drill', tier: 'varied', setting: 'money', topic: 'hidden fees and an adviser in every town',
    text: "From the newsletter of the Tilbrook Fair Dealing Group: 'Everyone is free to buy what they choose, and the government should protect that. Freedom to buy is not much use when the price hides a fee. We ask the government to make shops and lenders say the whole price up front, and to pay for an adviser in every town who can explain a contract to anyone who asks.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Everyone is free to buy what they choose, and the government should protect that',
            R1: 'We ask the government to make shops and lenders say the whole price up front, and to pay for an adviser in every town who can explain a contract to anyone who asks' },
    reason: { D1: 'The text puts first what everyone is free to do: {cue:D1}. It names no side against another.',
              R1: 'It asks for fair rules on shops and lenders and a paid adviser for anyone: {cue:R1}. That is more than protecting the freedom to buy.' },
    not: { outcome: 'clib', why: 'The text does ask the government to protect the freedom to buy, which is where {o:clib} would stop. It goes on to ask for rules on shops and a paid adviser for everyone.' } },

  { id: 'i5-n-idegal2', use: 'drill', tier: 'varied', setting: 'town', topic: 'a court summons in one language',
    text: "From a statement by the Valmere Newcomers' Circle: 'Every summons from the court is sent in the same way to every person: one language, one form. It says nothing about where anyone was born. But people who arrived from abroad this year cannot read it, and miss their hearings. A rule that treats every person alike has shut them out. We ask the court to change the form until newcomers answer their summonses as often as everyone else.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'until newcomers answer their summonses as often as everyone else',
            R1: ['A rule that treats every person alike has shut them out', 'We ask the court to change the form'] },
    reason: { D1: 'The text wants fair treatment for newcomers, and says when that will be so: {cue:D1}.',
              R1: 'A rule that treats every person alike is said to shut a group out, and the text asks for it to change: {cue:R1}.' },
    not: { outcome: 'clib', why: 'The text speaks of one form for every person, as {o:clib} might. But {o:clib} says the same rules for everyone are enough. This text says they have shut a group out.' } },

  /* ---------- Stage two: the question alone, on a new case (first half) ---------- */
  { id: 'i5-p-clib', use: 'drill', tier: 'clean', setting: 'borders', topic: 'selling across a river as well as at home',
    text: "At a trade meeting in Tarn Harbour, a trader said: 'Every one of us is free to sell across the river as well as at home. The government's work is to keep the bridge safe and the courts open. It should not decide what may be sold, or to whom.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'Every one of us is free to sell across the river as well as at home',
            R1: "The government's work is to keep the bridge safe and the courts open. It should not decide what may be sold, or to whom" },
    reason: { D1: 'The text puts first what each trader is free to do: {cue:D1}.',
              R1: 'The government is to keep a bridge safe and the courts open and to stay out of the rest: {cue:R1}.' },
    not: { outcome: 'modlib', why: 'The text asks the government to give nothing, only to keep a bridge and the courts. A text that asked it to give everyone a fair start would be {o:modlib}.' } },

  { id: 'i5-p-modlib', use: 'drill', tier: 'clean', setting: 'money', topic: 'a pension to live on',
    text: "From the Larkfield Pensioners' Fair Start Group: 'Each of us has the right to keep what we have saved, and the government must protect it. But a right to keep nothing is empty. We ask the government to pay a pension that everyone can live on, and everyone should pay in while they work.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Each of us has the right to keep what we have saved',
            R1: 'We ask the government to pay a pension that everyone can live on, and everyone should pay in while they work' },
    reason: { D1: 'The text puts first what each person has a right to keep: {cue:D1}.',
              R1: 'The government is to pay a pension for everyone, and everyone is to pay in: {cue:R1}.' },
    not: { outcome: 'clib', why: 'The text starts from protecting what people have saved, as {o:clib} does. It then asks the government to pay everyone a pension, which {o:clib} would not.' } },

  { id: 'i5-p-idegal', use: 'drill', tier: 'varied', setting: 'money', topic: 'a credit rule with ten years of history',
    text: "From a pamphlet by the Ostwick Migrants' Support Group: 'The credit union asks every applicant for ten years of credit history. The rule is the same for all, and it leaves out everyone who has only lived here a short time. A rule that treats everyone alike keeps them out of every loan. We ask for the credit rule to be changed until newcomers get loans as often as anyone.'",
    outcome: 'idegal', route: { D1: ['rights'], R1: ['rules'] },
    cues: { D1: 'until newcomers get loans as often as anyone',
            R1: ['A rule that treats everyone alike keeps them out of every loan', 'We ask for the credit rule to be changed'] },
    reason: { D1: 'The text wants fair treatment for newcomers, and says when that will be so: {cue:D1}.',
              R1: 'A rule that treats everyone alike is said to keep a group out, and the text asks for it to be changed: {cue:R1}.' },
    not: { outcome: 'modlib', why: 'The text asks for no help for everyone. It names one credit rule that treats everyone alike and keeps newcomers out, and asks for it to be changed.' } },

  { id: 'i5-p-modlib2', use: 'drill', tier: 'varied', setting: 'health', topic: 'a clinic bus to every village',
    text: "At the Westholm meeting on health, a nurse said: 'Everyone is free to see the doctor they choose, and the government must protect that. But a doctor two hours away is no choice at all. We ask the government to pay for a clinic bus to every village each week, and we should all pay for it.'",
    outcome: 'modlib', route: { D1: ['rights'], R1: ['start'] },
    cues: { D1: 'Everyone is free to see the doctor they choose, and the government must protect that',
            R1: 'We ask the government to pay for a clinic bus to every village each week, and we should all pay for it' },
    reason: { D1: 'The text puts first what everyone is free to do: {cue:D1}. It names no side against another.',
              R1: 'The government is to pay for something that reaches everyone, and everyone is to pay for it: {cue:R1}.' },
    not: { outcome: 'idegal', why: 'The text names a doctor too far away for anyone in a village, and asks the government to pay for a bus. It names no rule that treats everyone alike and leaves a group behind.' } }
]);

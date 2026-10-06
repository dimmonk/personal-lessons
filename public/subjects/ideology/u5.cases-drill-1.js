// Political Ideologies, Unit Five: drill cases, first stage (the question alone, on a new case). None of these appears in a card.
// Every text is invented. No person, party, country or event is real, and no text says what any real person believes.

FC.cases('ideology', 'u5', [
  { id: 'i5-p-clib', use: 'drill', tier: 'clean', setting: 'borders', topic: 'selling across a river as well as at home',
    text: "At a trade meeting in Tarn Harbor, a trader said: 'Every one of us is free to sell across the river as well as at home. The government's work is to keep the bridge safe and the courts open. It should not decide what may be sold, or to whom.'",
    outcome: 'clib', route: { D1: ['rights'], R1: ['leave'] },
    cues: { D1: 'Every one of us is free to sell across the river as well as at home',
            R1: "The government's work is to keep the bridge safe and the courts open. It should not decide what may be sold, or to whom" },
    reason: { D1: 'The text puts first what each trader is free to do: {cue:D1}.',
              R1: 'The government is to keep a bridge safe and the courts open and to stay out of the rest: {cue:R1}.' },
    not: { outcome: 'modlib', why: 'The text asks the government to give nothing, only to keep a bridge and the courts. A text that asked it to give everyone a fair start would be {o:modlib}.' } },

  { id: 'i5-p-modlib', use: 'drill', tier: 'clean', setting: 'money', topic: 'a pension to live on',
    text: "From the Larkfield Retirees' Fair Start Group: 'Each of us has the right to keep what we have saved, and the government must protect it. But a right to keep nothing is empty. We ask the government to pay a pension that everyone can live on, and everyone should pay in while they work.'",
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

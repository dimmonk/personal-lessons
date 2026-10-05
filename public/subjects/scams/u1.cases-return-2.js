// Scams, Unit One: fresh cases held back for later days, part two: a request for money and a request for facts about
// the person. Four for each kind. Field guide: see u1.cases-drill-1.js.
// These are also part of the bank that later units draw their earlier-unit items from.

FC.cases('scams', 'u1', [

  /* ---------- money ---------- */
  { id: 'g-ret-subs', use: 'return', tier: 'clean', setting: 'leisure', topic: 'choir subscriptions',
    text: "The treasurer of Ines's choir emails the members: 'Subscriptions for the spring term are £30. Please pay by bank transfer to the choir account by 15 January.'",
    route: { D1: ['money'] },
    cues: { D1: 'Please pay by bank transfer to the choir account by 15 January' },
    reason: { D1: 'The email asks each member to pay: {cue:D1}. A bank transfer is one of the ways of paying.' },
    not: { outcome: 'nothing', why: 'The size of the subscription is news, but the email goes on to ask each member to pay by a date, so it is more than a notice.' },
    wouldChange: 'If the email had only said that the spring subscriptions had been collected, it would ask for nothing, and it would be {a:D1.nothing}.' },

  { id: 'g-ret-newbank', use: 'return', tier: 'varied', setting: 'work', topic: 'a supplier with new bank details',
    text: "A supplier's email says: 'Our bank details have changed. Please pay this month's invoice of £2,340 into the new account below.'",
    route: { D1: ['money'] },
    cues: { D1: "Please pay this month's invoice of £2,340 into the new account below" },
    reason: { D1: 'The email asks the reader to pay an invoice into an account: {cue:D1}. The change of bank details is the reason it gives.' },
    not: { outcome: 'nothing', why: 'The first sentence is news, that the bank details have changed, but the email goes on to ask for a payment into the new account.' },
    wouldChange: 'If it had only said that the details had changed and that the invoice would follow next week, it would ask for nothing, and it would be {a:D1.nothing}.' },

  { id: 'g-ret-vet', use: 'return', tier: 'clean', setting: 'health', topic: 'a vet bill to pay at the desk',
    text: "The vet's receptionist tells Gary on the phone: 'The operation came to £420. Please pay by card at the desk when you collect her.'",
    route: { D1: ['money'] },
    cues: { D1: 'Please pay by card at the desk when you collect her' },
    reason: { D1: 'The receptionist tells Gary how to pay the £420: {cue:D1}. A card payment is one of the ways of paying.' },
    not: { outcome: 'nothing', why: 'Most of the call is a report of what happened, but it ends by telling him to pay, so it is more than news.' },
    wouldChange: 'If she had only said that the operation went well and that the dog could be collected at five, it would ask for nothing, and it would be {a:D1.nothing}.' },

  { id: 'g-ret-hospital', use: 'return', tier: 'varied', setting: 'relationships', topic: 'an online partner with a hospital bill',
    text: "A woman Zane has chatted to online for eight months writes: 'My daughter is in hospital abroad and the bill is £800. Please send it to this account today. I will repay you.'",
    route: { D1: ['money'] },
    cues: { D1: 'Please send it to this account today' },
    reason: { D1: 'The woman asks Zane to send money to an account: {cue:D1}. The hospital bill is the reason she gives.' },
    not: { outcome: 'details', why: 'For months she has asked about his life, which is the kind that asks for facts about you. Today she asks for money, and the answer is for what is asked right now.' },
    wouldChange: 'If she had only asked what he did at the weekends, it would be {a:D1.details}.' },

  /* ---------- facts about you ---------- */
  { id: 'g-ret-clinic', use: 'return', tier: 'clean', setting: 'health', topic: 'a clinic booking form',
    text: "Maeve books a blood test on the clinic's own website. The booking form asks her for her date of birth and her NHS number.",
    route: { D1: ['details'] },
    cues: { D1: 'asks her for her date of birth and her NHS number' },
    reason: { D1: 'The form asks Maeve to tell the clinic facts about herself: {cue:D1}. Nobody asks her to pay, sign in or install anything.' },
    not: { outcome: 'nothing', why: 'The form is about something that will happen, a blood test, but it asks her for facts about herself, so it is more than news.' },
    wouldChange: 'If the page had only said that her test was booked for Tuesday, it would ask for nothing, and it would be {a:D1.nothing}.' },

  { id: 'g-ret-hr', use: 'return', tier: 'varied', setting: 'work', topic: 'an HR email that wants papers',
    text: "An email that looks as if it is from the HR team says: 'For payroll we need a scan of your passport and a copy of a bank statement. Please reply today.'",
    route: { D1: ['details'] },
    cues: { D1: 'we need a scan of your passport and a copy of a bank statement' },
    reason: { D1: 'The email asks the reader to send papers about themselves: {cue:D1}. Nobody is asked to pay or to install anything.' },
    not: { outcome: 'money', why: 'It talks about payroll and a bank statement, but it asks for papers and not for a payment.' },
    wouldChange: 'If the email had asked the reader to pay a £25 payroll set-up fee, it would be {a:D1.money}.' },

  { id: 'g-ret-lonely', use: 'return', tier: 'varied', setting: 'relationships', topic: 'a stranger who asks about your home',
    text: "A man who messaged Priya after seeing her photo keeps asking: 'What does your family do? Do you live alone? What time do you usually get home?'",
    route: { D1: ['details'] },
    cues: { D1: 'What does your family do? Do you live alone? What time do you usually get home?' },
    reason: { D1: 'The man asks Priya to tell him about her family, her home and her day: {cue:D1}. They are questions about her life, and they count as a request for facts about you.' },
    not: { outcome: 'nothing', why: 'The messages are friendly and ask for no money and no password, so they can look like news. But they are questions about her.' },
    wouldChange: 'If he had only said that he liked her photo and hoped that she was well, he would ask nothing, and it would be {a:D1.nothing}.' },

  { id: 'g-ret-buspass', use: 'return', tier: 'clean', setting: 'government', topic: 'a bus pass application',
    text: "Mr Singh applies for a bus pass on Northway Council's own website. The online form asks him for his name, address and date of birth.",
    route: { D1: ['details'] },
    cues: { D1: 'asks him for his name, address and date of birth' },
    reason: { D1: 'The form asks Mr Singh to tell the council facts about himself: {cue:D1}. Nobody asks him to pay or sign in.' },
    not: { outcome: 'money', why: 'A bus pass may cost money, but this form asks only for facts about him. No payment is asked for here.' },
    wouldChange: 'If the form had asked him to pay £12 for the pass, it would be {a:D1.money}.' }
]);

// Scams, Unit One: fresh cases held back for later days, part two: a request for money and a request for facts about
// the person. Two for each kind. Field guide: see u1.cases-drill-1.js.

FC.cases('scams', 'u1', [
  { id: 'g-ret-newbank', use: 'return', tier: 'varied', setting: 'work', topic: 'a supplier with new bank account details',
    text: "A supplier's email says: 'Our bank account details have changed. Please pay this month's invoice of $2,340 into the new account below.'",
    route: { D1: ['money'] },
    cues: { D1: "Please pay this month's invoice of $2,340 into the new account below" },
    reason: { D1: 'The email asks the reader to pay an invoice into an account: {cue:D1}. The change of bank account details is the reason it gives.' },
    not: { outcome: 'nothing', why: 'The first sentence is news, that the bank account details have changed, but the email goes on to ask for a payment into the new account.' } },

  { id: 'g-ret-vet', use: 'return', tier: 'clean', setting: 'health', topic: 'a vet bill to pay at the desk',
    text: "The vet's receptionist tells Gary on the phone: 'The operation came to $420. Please pay by card at the desk when you collect her.'",
    route: { D1: ['money'] },
    cues: { D1: 'Please pay by card at the desk when you collect her' },
    reason: { D1: 'The receptionist tells Gary how to pay the $420: {cue:D1}. A card payment is one of the ways of paying.' },
    not: { outcome: 'nothing', why: 'Most of the call is a report of what happened, but it ends by telling him to pay, so it is more than news.' } },

  { id: 'g-ret-clinic', use: 'return', tier: 'clean', setting: 'health', topic: 'a clinic booking form',
    text: "Maeve books a blood test on the clinic's own website. The booking form asks her for her date of birth and her health insurance member ID.",
    route: { D1: ['details'] },
    cues: { D1: 'asks her for her date of birth and her health insurance member ID' },
    reason: { D1: 'The form asks Maeve to tell the clinic facts about herself: {cue:D1}. Nobody asks her to pay, sign in or install anything.' },
    not: { outcome: 'nothing', why: 'The form is about something that will happen, a blood test, but it asks her for facts about herself, so it is more than news.' } },

  { id: 'g-ret-hr', use: 'return', tier: 'varied', setting: 'work', topic: 'an HR email that wants papers',
    text: "An email that looks as if it is from the HR team says: 'For payroll we need a scan of your passport and a copy of a bank statement. Please reply today.'",
    route: { D1: ['details'] },
    cues: { D1: 'we need a scan of your passport and a copy of a bank statement' },
    reason: { D1: 'The email asks the reader to send papers about themselves: {cue:D1}. Nobody is asked to pay or to install anything.' },
    not: { outcome: 'money', why: 'It talks about payroll and a bank statement, but it asks for papers and not for a payment.' } }
]);

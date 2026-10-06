// Scams, Unit One: drill cases for the second stage (the question on whole cases, with no help), the clean ones.
// Some of these messages are real and some are copies: the answer is the same. Field guide: see u1.cases-drill-1.js.

FC.cases('scams', 'u1', [
  { id: 'g-dt-job', use: 'drill', tier: 'clean', setting: 'work', topic: 'a contract that needs details',
    text: "Jonas has applied for a job through the company's own careers page. Its email says: 'To prepare your contract, please reply with your date of birth and your home address.'",
    route: { D1: ['details'] },
    cues: { D1: 'please reply with your date of birth and your home address' },
    reason: { D1: 'The email asks Jonas to tell the company facts about himself: {cue:D1}. He is not asked to pay, sign in or install anything.' },
    not: { outcome: 'nothing', why: 'The email is about something that will happen, a contract, but it asks him to send facts about himself, so it is more than news.' } },

  { id: 'g-d-security', use: 'drill', tier: 'clean', setting: 'work', topic: 'a security update from the IT team',
    text: "The IT team emails the whole company: 'Please install the new security update from the Company Portal on your laptop by Friday.'",
    route: { D1: ['device'] },
    cues: { D1: 'install the new security update from the Company Portal on your laptop by Friday' },
    reason: { D1: 'The email asks everyone to install an update: {cue:D1}. That is a request about the laptop. Whether the email is really from the company is a different question, and this question looks only at what is asked.' },
    not: { outcome: 'access', why: 'The update is on the Company Portal, but nothing asks the staff for a password or a code. The request is to install something.' } },

  { id: 'g-a-reset', use: 'drill', tier: 'clean', setting: 'home', topic: 'a code sent when a password is reset',
    text: "Mina has forgotten her password. On the website's own sign-in page she presses 'Reset password'. The site texts her a code, and its page says: 'Type the code we sent you.'",
    route: { D1: ['access'] },
    cues: { D1: 'Type the code we sent you' },
    reason: { D1: 'The page asks Mina to type in a {t:code}: {cue:D1}. That is a request for a way into her account. She started it herself, and the first question does not ask about that.' },
    not: { outcome: 'device', why: 'Nothing is installed or opened on her phone. She is only asked to type a number into a page.' } },

  { id: 'g-m-giftcard', use: 'drill', tier: 'clean', setting: 'government', topic: 'a tax debt paid in gift cards',
    text: "A caller tells Walter that he is from the IRS. 'You owe $1,800 and the police will come today,' he says. 'Pay it now with gift cards from a store, and do not tell the staff why.'",
    route: { D1: ['money'] },
    cues: { D1: 'Pay it now with gift cards from a store, and do not tell the staff why' },
    reason: { D1: 'The caller orders Walter to pay: {cue:D1}. Gift cards are one of the ways of paying.' },
    not: { outcome: 'details', why: 'The caller gives a reason and a threat, but he does not ask Walter to tell him anything about himself.' } }
]);

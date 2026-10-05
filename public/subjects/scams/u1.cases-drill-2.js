// Scams, Unit One: drill cases for the second stage (the key's first question on whole cases, with no help), the clean
// and varied ones. The first group has a device, an account and a notice, the next groups pair the kinds that are
// easiest to mix up. Some of these messages are real and some are copies: the answer is the same, and which is which
// is for the questions that come after this one. Field guide: see u1.cases-drill-1.js.
// wouldChange says what would make it a different answer; it is shown after the feedback.

FC.cases('scams', 'u1', [

  /* ---------- clean ---------- */
  { id: 'g-d-cleanphone', use: 'drill', tier: 'clean', setting: 'home', topic: 'a phone said to be infected',
    text: "Reggie gets a text: 'Your phone is infected with 3 viruses. Install the Cleanphone app from this link to remove them.'",
    route: { D1: ['device'] },
    cues: { D1: 'Install the Cleanphone app from this link to remove them' },
    reason: { D1: 'The text asks Reggie to install an app on his phone: {cue:D1}. That is a request about the device, whatever the app turns out to be.' },
    not: { outcome: 'access', why: 'Nothing is asked of any account of his. What is asked is for something to be put on his phone.' },
    wouldChange: 'If the text had only said that his phone company would update the network on Tuesday, with nothing to install, it would be {a:D1.nothing}.' },

  { id: 'g-a-marketplace', use: 'drill', tier: 'clean', setting: 'shopping', topic: 'a buyer who wants a code',
    text: "A buyer on a marketplace messages Reza about his bike: 'Before I send the deposit I need to know you are real. A code is about to arrive on your phone. Please send it to me.'",
    route: { D1: ['access'] },
    cues: { D1: 'A code is about to arrive on your phone. Please send it to me' },
    reason: { D1: 'The buyer asks Reza to pass on a {t:code} that will arrive on his phone: {cue:D1}. That is a request for a way into an account of his.' },
    not: { outcome: 'money', why: 'The buyer is going to send money, but he asks Reza for nothing like that. He asks for a code.' },
    wouldChange: 'If the buyer had asked Reza to pay a fee before the deposit could be released, it would be {a:D1.money}.' },

  { id: 'g-n-library', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a reserved library book',
    text: "Northway Library texts Ingrid: 'The book you reserved is ready to collect from Monday. We will hold it for 7 days.'",
    route: { D1: ['nothing'] },
    cues: { D1: 'The book you reserved is ready to collect from Monday. We will hold it for 7 days' },
    reason: { D1: 'The text only tells Ingrid that her book is ready and how long it will be held: {cue:D1}. It asks for nothing and gives her no link, number or app.' },
    not: { outcome: 'access', why: 'It does not ask her to sign in to a library account or to give a code. If she does nothing, the book is simply held.' },
    wouldChange: 'If the text had said "sign in at this link to confirm your collection", she would be asked to sign in, and it would be {a:D1.access}.' },

  { id: 'g-m-school', use: 'drill', tier: 'clean', setting: 'home', topic: 'a school trip fee',
    text: "Joy's daughter's school sends a message through its app: 'The museum trip is £14. Please pay through the school payment app by Friday.'",
    route: { D1: ['money'] },
    cues: { D1: 'Please pay through the school payment app by Friday' },
    reason: { D1: 'The message asks parents to pay: {cue:D1}. A payment through an app is one of the ways of paying.' },
    not: { outcome: 'nothing', why: 'It begins as news about a trip, but it ends by asking parents to pay, so it is more than a notice.' },
    wouldChange: 'If it had only said that the trip was on Tuesday and that the fee had been taken from the school fund, it would ask for nothing, and it would be {a:D1.nothing}.' },

  { id: 'g-dt-job', use: 'drill', tier: 'clean', setting: 'work', topic: 'a contract that needs details',
    text: "Jonas has applied for a job through the company's own careers page. Its email says: 'To prepare your contract, please reply with your date of birth and your home address.'",
    route: { D1: ['details'] },
    cues: { D1: 'please reply with your date of birth and your home address' },
    reason: { D1: 'The email asks Jonas to tell the company facts about himself: {cue:D1}. He is not asked to pay, sign in or install anything.' },
    not: { outcome: 'nothing', why: 'The email is about something that will happen, a contract, but it asks him to send facts about himself, so it is more than news.' },
    wouldChange: 'If the email had asked him to pay a £30 fee to prepare the contract, it would be {a:D1.money}.' },

  { id: 'g-n-statement', use: 'drill', tier: 'clean', setting: 'money', topic: 'a statement ready in the bank’s own app',
    text: "Halbrook Bank adds a notice to Wanjiru's own banking app: 'Your statement for September is ready. It is in the Statements section of this app.'",
    route: { D1: ['nothing'] },
    cues: { D1: 'Your statement for September is ready. It is in the Statements section of this app' },
    reason: { D1: 'The notice only tells Wanjiru that her statement is ready and where it is: {cue:D1}. She is already inside her own app, so nothing new is offered, and nothing is asked.' },
    not: { outcome: 'access', why: 'It does not ask her to sign in: she is already in the app. It only says where the statement is.' },
    wouldChange: 'If it had said "sign in at this link to see your statement", it would ask for a sign-in, and it would be {a:D1.access}.' },

  { id: 'g-d-security', use: 'drill', tier: 'clean', setting: 'work', topic: 'a security update from the IT team',
    text: "The IT team emails the whole company: 'Please install the new security update from the Company Portal on your laptop by Friday.'",
    route: { D1: ['device'] },
    cues: { D1: 'install the new security update from the Company Portal on your laptop by Friday' },
    reason: { D1: 'The email asks everyone to install an update: {cue:D1}. That is a request about the laptop. Whether the email is really from the company is a different question, and this question looks only at what is asked.' },
    not: { outcome: 'access', why: 'The update is on the Company Portal, but nothing asks the staff for a password or a code. The request is to install something.' },
    wouldChange: 'If the email had only said that the update would be installed automatically over the weekend, it would ask for nothing, and it would be {a:D1.nothing}.' },

  { id: 'g-a-reset', use: 'drill', tier: 'clean', setting: 'home', topic: 'a code sent when a password is reset',
    text: "Mina has forgotten her password. On the website's own sign-in page she presses 'Reset password'. The site texts her a code, and its page says: 'Type the code we sent you.'",
    route: { D1: ['access'] },
    cues: { D1: 'Type the code we sent you' },
    reason: { D1: 'The page asks Mina to type in a {t:code}: {cue:D1}. That is a request for a way into her account. She started it herself, and the first question does not ask about that.' },
    not: { outcome: 'device', why: 'Nothing is installed or opened on her phone. She is only asked to type a number into a page.' },
    wouldChange: 'If a caller had asked her to read the code out to him, the request would still be for the same thing, and it would still be {a:D1.access}.' },

  { id: 'g-m-giftcard', use: 'drill', tier: 'clean', setting: 'government', topic: 'a tax debt paid in gift cards',
    text: "A caller tells Walter that he is from the tax office. 'You owe £1,800 and the police will come today,' he says. 'Pay it now with gift cards from a shop, and do not tell the staff why.'",
    route: { D1: ['money'] },
    cues: { D1: 'Pay it now with gift cards from a shop, and do not tell the staff why' },
    reason: { D1: 'The caller orders Walter to pay: {cue:D1}. Gift cards are one of the ways of paying.' },
    not: { outcome: 'details', why: 'The caller gives a reason and a threat, but he does not ask Walter to tell him anything about himself.' },
    wouldChange: 'If the caller had asked only for Walter’s date of birth and address, "to find his file", it would be {a:D1.details}.' },

  { id: 'g-dt-survey', use: 'drill', tier: 'clean', setting: 'shopping', topic: 'a free gift that needs details',
    text: "A pop-up on a shopping site says: 'You've won a free gift! Enter your full name, home address, date of birth and your mother's maiden name to claim it.'",
    route: { D1: ['details'] },
    cues: { D1: "Enter your full name, home address, date of birth and your mother's maiden name" },
    reason: { D1: 'The pop-up asks the reader to tell the site facts about themselves: {cue:D1}. A prize is the reason it gives, and nobody is asked to pay.' },
    not: { outcome: 'money', why: 'Prizes often come with a fee, but this one asks for none. It asks only for facts about the reader.' },
    wouldChange: 'If it had asked for a £2.99 postage fee to claim the gift, it would be {a:D1.money}.' },

  /* ---------- varied ---------- */
  { id: 'g-d-bike', use: 'drill', tier: 'varied', setting: 'leisure', topic: 'a buyer who sends a file',
    text: "A stranger who wants to buy Kit's bike messages him: 'I will pay by the Swiftpay app. Download it from the link I have sent and open the file to get your money.'",
    route: { D1: ['device'] },
    cues: { D1: 'Download it from the link I have sent and open the file' },
    reason: { D1: 'The stranger asks Kit to download something and open it: {cue:D1}. The money he mentions is what Kit would get, not something Kit is asked to send.' },
    not: { outcome: 'money', why: 'The message is about a payment, but Kit is not asked to pay or send anything. He is asked to put an app on his device and open a file.' },
    wouldChange: 'If the stranger had said that he paid £450 for a £350 bike and asked Kit to send back £100, it would be {a:D1.money}.' },

  { id: 'g-m-cardsale', use: 'drill', tier: 'varied', setting: 'shopping', topic: 'a sofa buyer who overpaid',
    text: "A buyer for Fern's sofa messages her: 'I paid £450 by mistake. The price was £350. Please send the £100 back to me today.'",
    route: { D1: ['money'] },
    cues: { D1: 'Please send the £100 back to me today' },
    reason: { D1: 'The buyer asks Fern to send money: {cue:D1}. That a payment has been made is news, and the request that follows it is what the question looks at.' },
    not: { outcome: 'nothing', why: 'It starts with news, that a payment has arrived, but it goes on to ask Fern to send money, so it is more than a notice.' },
    wouldChange: 'If he had only said that he had paid the £350 and would collect the sofa on Saturday, it would ask for nothing, and it would be {a:D1.nothing}.' },

  { id: 'g-a-mail-locked', use: 'drill', tier: 'varied', setting: 'work', topic: 'a mailbox that is almost full',
    text: "An email at work says: 'Your mailbox is almost full. Sign in at office-mailbox.net with your work password to keep your mail.'",
    route: { D1: ['access'] },
    cues: { D1: 'Sign in at office-mailbox.net with your work password to keep your mail' },
    reason: { D1: 'The email asks the reader to sign in: {cue:D1}. That the mailbox is almost full is the reason it gives.' },
    not: { outcome: 'nothing', why: 'The email starts as news, that the mailbox is nearly full, but it goes on to ask the reader to sign in, so it is more than a notice.' },
    wouldChange: 'If it had only said that the mailbox was almost full and that old mail would be archived on Friday, it would ask for nothing, and it would be {a:D1.nothing}.' },

  { id: 'g-n-payslip', use: 'drill', tier: 'varied', setting: 'work', topic: 'a payslip that is ready',
    text: "The payroll team emails Lars: 'Your payslip for October is in the staff portal.'",
    route: { D1: ['nothing'] },
    cues: { D1: 'Your payslip for October is in the staff portal' },
    reason: { D1: 'The email tells Lars that his payslip is ready and where it is: {cue:D1}. The staff portal is somewhere he already goes, so nothing new is offered, and nothing is asked.' },
    not: { outcome: 'access', why: 'Reading the payslip would mean signing in to the portal, but the email does not ask him to. It only says where the payslip is.' },
    wouldChange: 'If it had said "sign in at this link to see your payslip", it would ask for a sign-in, and it would be {a:D1.access}.' },

  { id: 'g-dt-bank-call', use: 'drill', tier: 'varied', setting: 'money', topic: 'a caller who wants the card numbers',
    text: "A caller says that she is from Halbrook Bank. 'For security, please confirm your full card number, the expiry date and the three digits on the back.'",
    route: { D1: ['details'] },
    cues: { D1: 'please confirm your full card number, the expiry date and the three digits on the back' },
    reason: { D1: 'The caller asks for the numbers on a card: {cue:D1}. Those are facts that identify the cardholder, and he is asked to tell them to her. He is not asked to pay anything.' },
    not: { outcome: 'money', why: 'A card number can be used to take money, but the caller does not ask him to pay or send anything. She asks him to tell her facts about himself.' },
    wouldChange: 'If she had told him to move his savings to a "safe account" she would name, it would be {a:D1.money}.' }
]);

// Scams, Unit One: drill items for the first stage (the key's first question on its own, one case at a time, on clean
// cases) and the reverse items. Every drill case is new: none of them appears in a card. Each carries the words that
// decide the first question (cues.D1), the reason for its answer (reason.D1), and not: the nearest wrong answer, which
// shares a ledger entry with the right one, and why it fails here. Some cases are real messages and some are copies:
// the first question answers the same for both, so the drill does not say which is which.
// These cases, with the route-stage cases and the return cases, are the bank that later units draw their earlier-unit
// items from. A reverse item gives the kind and asks what you would expect to hear or find; every option is what one
// of the five kinds sounds like, and voice says which.

FC.cases('scams', 'u1', [

  /* ---------- something on your device beside a way into an account ---------- */
  { id: 'g-p-driver', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'an out-of-date video driver',
    text: "A pop-up on Wes's laptop says that his video driver is out of date: 'Click here to download and run the update.'",
    route: { D1: ['device'] },
    cues: { D1: 'Click here to download and run the update' },
    reason: { D1: 'The pop-up asks Wes to download something and run it on his laptop: {cue:D1}. That is a request about the device itself.' },
    not: { outcome: 'access', why: 'Nothing is asked of any account of his: no password, no code and no Allow. What is asked is for a program to be downloaded and run.' } },

  { id: 'g-p-bank-code', use: 'drill', tier: 'clean', setting: 'money', topic: 'a code asked for by the bank’s own app',
    text: "Isla is using Halbrook Bank's own app to move savings between her own accounts. The app asks: 'Enter the code we have just texted you.'",
    route: { D1: ['access'] },
    cues: { D1: 'Enter the code we have just texted you' },
    reason: { D1: 'The app asks Isla to type in a {t:code} that has just been sent to her: {cue:D1}. That is a request for a way into an account. She started the move herself, and the first question does not ask about that.' },
    not: { outcome: 'money', why: 'She is moving her own savings, so money is involved, but nobody asks her to pay or send anything. The app asks her for a code.' } },

  /* ---------- a way into an account beside a message that asks nothing ---------- */
  { id: 'g-p-photos', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a photo printer asking to see photos',
    text: "A photo-printing website asks Odile to link her cloud storage. Her cloud account shows a box: 'PrintCo would like to see your photos. Allow / Deny.'",
    route: { D1: ['access'] },
    cues: { D1: 'PrintCo would like to see your photos. Allow / Deny' },
    reason: { D1: 'The box asks Odile to press Allow so that an app can use her cloud account: {cue:D1}. It comes from a {t:permission}, and it is a request for a way into the account.' },
    not: { outcome: 'device', why: 'An app is named, but nothing is put on her phone or computer. The box comes from her cloud account and asks to let an app into it.' } },

  { id: 'g-p-flight', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a delayed flight',
    text: "Joss gets a text from the airline: 'Flight HB204 to Faro is delayed by 40 minutes. New departure time: 15.10. Gate details will show on the airport screens.'",
    route: { D1: ['nothing'] },
    cues: { D1: 'Flight HB204 to Faro is delayed by 40 minutes. New departure time: 15.10' },
    reason: { D1: 'The text only tells Joss what has changed: {cue:D1}. It asks him to do nothing and gives him no link, number or app.' },
    not: { outcome: 'details', why: 'It does not ask him to confirm his name, his booking or anything else about himself. It only gives him news.' } },

  /* ---------- money beside facts about you ---------- */
  { id: 'g-p-tickets', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'tickets for a club trip',
    text: "The secretary of Hugo's cycling club emails the members: 'Tickets for the away trip are £18 each. Please pay the treasurer by bank transfer by the 12th.'",
    route: { D1: ['money'] },
    cues: { D1: 'Please pay the treasurer by bank transfer by the 12th' },
    reason: { D1: 'The email asks each member to pay: {cue:D1}. A transfer is one of the ways of paying.' },
    not: { outcome: 'nothing', why: 'The price of the tickets is news, but the email goes on to ask every member to pay by a date, so it is not a message that only tells you something.' } },

  { id: 'g-p-passport', use: 'drill', tier: 'clean', setting: 'government', topic: 'a passport renewal form',
    text: "Mrs Khan is renewing her passport on the government website. The form asks for her date of birth and her place of birth.",
    route: { D1: ['details'] },
    cues: { D1: 'The form asks for her date of birth and her place of birth' },
    reason: { D1: 'The form asks Mrs Khan to tell the website facts about herself: {cue:D1}. Nothing in this case asks her to pay, sign in or install anything.' },
    not: { outcome: 'money', why: 'Renewing a passport usually costs money, but this form asks only for facts about her. No payment is asked for here.' } },

  /* ---------- money beside a message that asks nothing ---------- */
  { id: 'g-p-refund', use: 'drill', tier: 'clean', setting: 'shopping', topic: 'a refund that has been made',
    text: "Zuri's online shop emails her: 'We have refunded £24.99 to the card you paid with. It will show in your account in 3 to 5 days.'",
    route: { D1: ['nothing'] },
    cues: { D1: 'We have refunded £24.99 to the card you paid with' },
    reason: { D1: 'The email only tells Zuri that a refund has been made: {cue:D1}. It asks her for nothing, and it gives her no link, number or app.' },
    not: { outcome: 'money', why: 'The email is about money, but nobody is asked to pay or send any. The money is going to her.' } },

  { id: 'g-p-tunebox', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a music subscription that has ended',
    text: "Tunebox texts Evan: 'Your subscription has ended. Pay £9.99 at tunebox-renew.com to keep listening.'",
    route: { D1: ['money'] },
    cues: { D1: 'Pay £9.99 at tunebox-renew.com to keep listening' },
    reason: { D1: 'The text tells Evan to pay a sum at an address: {cue:D1}. The ending of his subscription is the reason it gives.' },
    not: { outcome: 'nothing', why: 'A subscription ending is news, and a notice of it could stand on its own. But the text goes on to tell him to pay, so it asks.' } },

  /* ---------- reverse items: one for each kind ---------- */
  { id: 'g-rev-device', use: 'drill', kind: 'reverse', outcome: 'device', expect: 'find',
    options: [
      { text: 'The caller told her to press a button so that he could watch her computer.', voice: 'device' },
      { text: 'The page asked him to type the number that had just come to his phone.', voice: 'access' },
      { text: 'The email asked her to send £340 into an account by Friday.', voice: 'money' },
      { text: 'The form asked for his date of birth and his address.', voice: 'details' },
      { text: 'The text said that the appointment had moved to Tuesday.', voice: 'nothing' }
    ],
    why: 'That detail is a request to let someone watch the computer. It is about the device itself, and nothing in it is asked of an account, of money or of facts about her.' },

  { id: 'g-rev-access', use: 'drill', kind: 'reverse', outcome: 'access', expect: 'hear',
    options: [
      { text: '"Download this program and I will fix it from here."', voice: 'device' },
      { text: '"Please type the six-digit number we have just texted you."', voice: 'access' },
      { text: '"Send £50 today and I will pay you back."', voice: 'money' },
      { text: '"Where do you live, and what do you do for work?"', voice: 'details' },
      { text: '"Your parcel will arrive tomorrow between 9 and 12."', voice: 'nothing' }
    ],
    why: 'It asks for a way into an account: a number to type in. Nothing is put on the device, and nobody is asked to pay or to tell anything about themselves.' },

  { id: 'g-rev-money', use: 'drill', kind: 'reverse', outcome: 'money', expect: 'find',
    options: [
      { text: 'The caller asked her to open the file that she had been sent.', voice: 'device' },
      { text: 'The site asked him to sign in with his password.', voice: 'access' },
      { text: 'He was told to pay the fee at an address in the message.', voice: 'money' },
      { text: 'The form asked for her passport number and her date of birth.', voice: 'details' },
      { text: 'The notice said that the bill would be taken by direct debit on the 1st.', voice: 'nothing' }
    ],
    why: 'That detail is a request to pay a fee. In the last option the payment is only mentioned as something that will happen, and nobody is asked to do anything.' },

  { id: 'g-rev-details', use: 'drill', kind: 'reverse', outcome: 'details', expect: 'hear',
    options: [
      { text: '"Install the update from this link."', voice: 'device' },
      { text: '"Press Allow so that the app can read your calendar."', voice: 'access' },
      { text: '"Pay the £2.50 handling fee at this link."', voice: 'money' },
      { text: '"Please send a photo of your passport and tell me your date of birth."', voice: 'details' },
      { text: '"The office will be closed on Monday."', voice: 'nothing' }
    ],
    why: 'It asks the reader to tell them about themselves: a photo of a passport and a date of birth. Nothing is paid, nothing is installed and no account is opened.' },

  { id: 'g-rev-nothing', use: 'drill', kind: 'reverse', outcome: 'nothing', expect: 'find',
    options: [
      { text: 'It asked him to open a file to see the delivery.', voice: 'device' },
      { text: 'It asked him to sign in to see the delivery.', voice: 'access' },
      { text: 'It asked him to pay a £1.99 fee for the delivery.', voice: 'money' },
      { text: 'It asked him to confirm his name and address for the delivery.', voice: 'details' },
      { text: 'It said that the delivery would arrive between 1 and 4, and asked for nothing.', voice: 'nothing' }
    ],
    why: 'The detail to look for is the absence of a request: it tells him when the delivery will come and asks him to do nothing. Each of the other four asks for something about the same delivery.' }
]);

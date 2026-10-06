// Scams, Unit One: drill cases for the first stage (the first question on its own, one case at a time, on clean cases).
// Every drill case is new: none of them appears in a card. Each carries the words that decide the question (cues.D1),
// the reason for its answer (reason.D1), and not: the nearest wrong answer, which shares a pair with the right one, and
// why it fails here. Some cases are real messages and some are copies: the question answers the same for both.
// These cases, with the second-stage cases and the return cases, are the bank that later units draw their earlier-unit
// items from.

FC.cases('scams', 'u1', [
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

  { id: 'g-p-photos', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a photo printer asking to see photos',
    text: "A photo-printing website asks Odile to link her cloud storage. Her cloud account shows a box: 'PrintCo would like to see your photos. Allow / Deny.'",
    route: { D1: ['access'] },
    cues: { D1: 'PrintCo would like to see your photos. Allow / Deny' },
    reason: { D1: 'The box asks Odile to press Allow so that an app can use her cloud account: {cue:D1}. It comes from a {t:permission}, and it is a request for a way into the account.' },
    not: { outcome: 'device', why: 'An app is named, but nothing is put on her phone or computer. The box comes from her cloud account and asks to let an app into it.' } },

  { id: 'g-p-flight', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'a delayed flight',
    text: "Joss gets a text from the airline: 'Flight HB204 to Faro is delayed by 40 minutes. New departure time: 3:10 p.m. Gate details will show on the airport screens.'",
    route: { D1: ['nothing'] },
    cues: { D1: 'Flight HB204 to Faro is delayed by 40 minutes. New departure time: 3:10 p.m.' },
    reason: { D1: 'The text only tells Joss what has changed: {cue:D1}. It asks him to do nothing and gives him no link, number or app.' },
    not: { outcome: 'details', why: 'It does not ask him to confirm his name, his booking or anything else about himself. It only gives him news.' } },

  { id: 'g-p-tickets', use: 'drill', tier: 'clean', setting: 'leisure', topic: 'tickets for a club trip',
    text: "The secretary of Hugo's cycling club emails the members: 'Tickets for the club trip are $18 each. Please pay the treasurer by Zelle by the 12th.'",
    route: { D1: ['money'] },
    cues: { D1: 'Please pay the treasurer by Zelle by the 12th' },
    reason: { D1: 'The email asks each member to pay: {cue:D1}. A transfer is one of the ways of paying.' },
    not: { outcome: 'nothing', why: 'The price of the tickets is news, but the email goes on to ask every member to pay by a date, so it is not a message that only tells you something.' } },

  { id: 'g-p-passport', use: 'drill', tier: 'clean', setting: 'government', topic: 'a passport renewal form',
    text: "Mrs. Khan is renewing her passport on the government website. The form asks for her date of birth and her place of birth.",
    route: { D1: ['details'] },
    cues: { D1: 'The form asks for her date of birth and her place of birth' },
    reason: { D1: 'The form asks Mrs. Khan to tell the website facts about herself: {cue:D1}. Nothing in this case asks her to pay, sign in or install anything.' },
    not: { outcome: 'money', why: 'Renewing a passport usually costs money, but this form asks only for facts about her. No payment is asked for here.' } }
]);

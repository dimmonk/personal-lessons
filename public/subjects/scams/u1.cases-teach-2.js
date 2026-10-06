// Scams, Unit One: cases shown inside cards, part two: the third kind (something on your device), the fourth kind
// (money), and the message that asks for two things at once. Field guide: see u1.cases-teach-1.js.
// also lists an answer the case shows as well as its own, which loses to its own by the tie-break in the question.

FC.cases('scams', 'u1', [
  { id: 'g-support-call', use: 'teach', tier: 'clean', setting: 'home', topic: 'a call about the router', name: 'The support call',
    text: "A man calls Diane and says he is from her internet company. 'Your router has been sending out errors,' he says. 'Please open your browser and download the repair program from the address I am about to read out. Then I can fix it from my end.'",
    route: { D1: ['device'] },
    cues: { D1: 'download the repair program from the address I am about to read out' } },

  { id: 'g-console-update', use: 'check', tier: 'clean', setting: 'leisure', topic: 'an update offered by a game console',
    text: "Kofi switches on his game console. A box appears: 'A system update is ready. Install now?' He has always updated the console this way.",
    route: { D1: ['device'] },
    cues: { D1: 'A system update is ready. Install now?' },
    reason: { D1: 'The box asks Kofi to install something on his console: {cue:D1}. A request to install something is a request about the device itself, whoever it comes from, so that is the answer to the first question. Whether it is the real console maker is a different question.' } },

  { id: 'g-installer', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'installing a photo editor',
    text: "Ravi has downloaded Pixelwise, a photo editor, from the maker's own website. He opens the installer, and a box says: 'Install Pixelwise on this computer? Do you want to allow this app to make changes to your device?' with Yes and No.",
    route: { D1: ['device'] },
    cues: { D1: 'Install Pixelwise on this computer' } },

  { id: 'g-allow-mail', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a photo editor asking to use an email account',
    text: "Ravi would rather use the web version. He opens Pixelwise Online, and his email account shows a box: 'Pixelwise Online would like to read and send mail for you. Allow / Cancel.'",
    route: { D1: ['access'] },
    cues: { D1: 'Pixelwise Online would like to read and send mail for you. Allow / Cancel' } },

  { id: 'g-rent', use: 'teach', tier: 'clean', setting: 'home', topic: 'the monthly rent', name: 'The rent email',
    text: "Dan's landlord emails him on the 25th: 'Hi Dan, October's rent of $850 is due on the 1st. Please pay it into the same account as usual.'",
    route: { D1: ['money'] },
    cues: { D1: "October's rent of $850 is due on the 1st. Please pay it into the same account as usual" } },

  { id: 'g-lend', use: 'check', tier: 'clean', setting: 'relationships', topic: 'a friend on a new number',
    text: "Gabi's friend Leon texts from a number she does not know: 'Hi Gabi, I dropped my phone in the lake and this is my new one. Can you send $300 to my sister's account today? I will explain later.'",
    route: { D1: ['money'] },
    cues: { D1: "Can you send $300 to my sister's account today" },
    segments: [
      { text: "Gabi's friend Leon texts from a number she does not know", note: 'That says where the text comes from. It does not say what it asks.' },
      { text: 'Hi Gabi, I dropped my phone in the lake and this is my new one', note: 'That is the story. The thing the text asks her to do comes after it.' },
      { text: "Can you send $300 to my sister's account today" },
      { text: 'I will explain later', note: 'That is a promise to explain. It is not what the text asks her to do.' }
    ],
    reason: { D1: 'The text asks Gabi to send money: {cue:D1}. The story about the phone is the reason it gives, and the promise to explain comes after the request. The words that answer the question are the ones that say what she is to send and where.' } },

  { id: 'g-refund-share', use: 'teach', tier: 'misleading', setting: 'money', topic: 'a refund that needs the screen shared', name: 'The refund call',
    also: ['money'],
    text: "A woman calls Harold and says she is from his broadband company. 'We owe you a refund of $48 for the outage,' she says. 'Press the Share button in this meeting app so that I can see your screen and put it through. Then you will need to send back the extra I put in by mistake.'",
    route: { D1: ['device'] },
    cues: { D1: 'Press the Share button in this meeting app so that I can see your screen' },
    segments: [
      { text: 'A woman calls Harold and says she is from his broadband company', note: 'That says who the caller claims to be. It does not say what she asks.' },
      { text: 'We owe you a refund of $48 for the outage', note: 'That is the reason she gives, and a refund sounds like money. But it is something she says she will give him, not something she asks him to do.' },
      { text: 'Press the Share button in this meeting app so that I can see your screen' },
      { text: 'Then you will need to send back the extra I put in by mistake', note: 'This does ask for money, and it is why the case looks like a request to pay. But it comes second, and when a message asks for two things, the answer is the earlier one in the list.' }
    ] },

  { id: 'g-sim-fee', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a reactivation fee for a SIM',
    text: "Pinecrest Mobile texts Joel: 'Your SIM will be switched off tomorrow. Pay a $1.99 reactivation fee at pinecrest-reconnect.com to keep your number.'",
    route: { D1: ['money'] },
    cues: { D1: 'Pay a $1.99 reactivation fee at pinecrest-reconnect.com' } },

  { id: 'g-sim-details', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a SIM that needs facts confirmed',
    text: "Pinecrest Mobile texts Joel: 'Your SIM will be switched off tomorrow. Confirm your full name, date of birth and card number at pinecrest-reconnect.com to keep your number. Nothing will be charged.'",
    route: { D1: ['details'] },
    cues: { D1: 'Confirm your full name, date of birth and card number at pinecrest-reconnect.com' } }
]);

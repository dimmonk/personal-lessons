// Scams, Unit One: cases shown inside cards, part two: the third kind (something on your device), the fourth kind
// (money), and the two messages that ask for two things at once. Field guide: see u1.cases-teach-1.js.
// also lists an answer the case shows as well as its own, which loses to its own by the key's tie-break.

FC.cases('scams', 'u1', [

  /* ---------- the third kind: something on your device ---------- */
  { id: 'g-support-call', use: 'teach', tier: 'clean', setting: 'home', topic: 'a call about the router', name: 'The support call',
    text: "A man calls Diane and says he is from her internet company. 'Your router has been sending out errors,' he says. 'Please open your browser and download the repair program from the address I am about to read out. Then I can fix it from my end.'",
    route: { D1: ['device'] },
    cues: { D1: 'download the repair program from the address I am about to read out' } },

  { id: 'g-attach', use: 'teach', tier: 'clean', setting: 'work', topic: 'an invoice sent as a file', name: 'The attached invoice',
    text: "An email reaches Omar at work: 'Hello, please see the attached invoice for last month. Open the file and click Enable Editing to see the amounts.'",
    route: { D1: ['device'] },
    cues: { D1: 'Open the file and click Enable Editing' },
    segments: [
      { text: 'An email reaches Omar at work', note: 'That says where it came from. It does not say what it asks.' },
      { text: 'Hello, please see the attached invoice for last month', note: 'That says what the file is meant to be. What the email asks Omar to do with it comes next.' },
      { text: 'Open the file and click Enable Editing' },
      { text: 'to see the amounts', note: 'That is the reason it gives for opening the file. The request is in the words before it.' }
    ] },

  { id: 'g-console-update', use: 'check', tier: 'clean', setting: 'leisure', topic: 'an update offered by a game console',
    text: "Kofi switches on his game console. A box appears: 'A system update is ready. Install now?' He has always updated the console this way.",
    route: { D1: ['device'] },
    cues: { D1: 'A system update is ready. Install now?' },
    reason: { D1: 'The box asks Kofi to install something on his console: {cue:D1}. A request to install something is a request about the device itself, whoever it comes from, so that is the answer to the first question. Whether it is the real console maker is a different question.' } },

  /* ---------- the look-alike pair: the same photo editor, a program or an account ---------- */
  { id: 'g-installer', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'installing a photo editor',
    text: "Ravi has downloaded Pixelwise, a photo editor, from the maker's own website. He opens the installer, and a box says: 'Install Pixelwise on this computer? Do you want to allow this app to make changes to your device?' with Yes and No.",
    route: { D1: ['device'] },
    cues: { D1: 'Install Pixelwise on this computer' } },

  { id: 'g-allow-mail', use: 'teach', tier: 'clean', setting: 'leisure', topic: 'a photo editor asking to use an email account',
    text: "Ravi would rather use the web version. He opens Pixelwise Online, and his email account shows a box: 'Pixelwise Online would like to read and send mail for you. Allow / Cancel.'",
    route: { D1: ['access'] },
    cues: { D1: 'Pixelwise Online would like to read and send mail for you. Allow / Cancel' } },

  /* ---------- the fourth kind: money ---------- */
  { id: 'g-rent', use: 'teach', tier: 'clean', setting: 'home', topic: 'the monthly rent', name: 'The rent email',
    text: "Dan's landlord emails him on the 25th: 'Hi Dan, October's rent of $850 is due on the 1st. Please pay it into the same account as usual.'",
    route: { D1: ['money'] },
    cues: { D1: "October's rent of $850 is due on the 1st. Please pay it into the same account as usual" } },

  { id: 'g-gift', use: 'teach', tier: 'clean', setting: 'work', topic: 'a manager who needs a transfer', name: 'The manager in a meeting',
    text: "Sunita's manager emails her: 'I am stuck in a meeting and cannot reach the bank. Please wire $2,000 to this account today for a supplier, and I will pay you back tonight.'",
    route: { D1: ['money'] },
    cues: { D1: 'Please wire $2,000 to this account today for a supplier' },
    segments: [
      { text: "Sunita's manager emails her", note: 'That says who the email claims to be from. It does not say what it asks.' },
      { text: 'I am stuck in a meeting and cannot reach the bank', note: 'That is the reason the email gives. What it asks Sunita to do comes next.' },
      { text: 'Please wire $2,000 to this account today for a supplier' },
      { text: 'I will pay you back tonight', note: 'That is a promise. It tells you what she would get afterwards. The request is the words before it.' }
    ] },

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

  /* ---------- the look-alike pair: the same gas bill, a notice and a demand ---------- */
  { id: 'g-gas-debit', use: 'teach', tier: 'clean', setting: 'money', topic: 'an automatic payment notice from the gas company',
    text: "Brightgas sends Amara a text: 'Your automatic payment of $64 will be taken from your account on November 1, as usual. You do not need to do anything.'",
    route: { D1: ['nothing'] },
    cues: { D1: 'Your automatic payment of $64 will be taken from your account on November 1, as usual. You do not need to do anything' } },

  { id: 'g-gas-overdue', use: 'teach', tier: 'clean', setting: 'money', topic: 'an overdue gas bill with a payment link',
    text: "Brightgas sends Amara a text: 'Your bill of $64 is overdue. Pay it today at brightgas-pay.com or your gas will be cut off.'",
    route: { D1: ['money'] },
    cues: { D1: 'Pay it today at brightgas-pay.com' } },

  /* ---------- exceptions: a message that asks for two things ---------- */
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

  { id: 'g-fine-signin', use: 'teach', tier: 'misleading', setting: 'government', topic: 'a parking ticket paid after signing in', name: 'The parking ticket',
    also: ['money'],
    text: "Lorna gets a text: 'Northway County: your parking ticket of $35 is overdue and will double on Friday. Sign in to your county account with your username and password at northway-fines.com to pay it.'",
    route: { D1: ['access'] },
    cues: { D1: 'Sign in to your county account with your username and password' },
    segments: [
      { text: 'Northway County: your parking ticket of $35 is overdue and will double on Friday', note: 'That is the reason the text gives, and it is about money. But it is the story. What the text asks Lorna to do comes next.' },
      { text: 'Sign in to your county account with your username and password at northway-fines.com' },
      { text: 'to pay it', note: 'This says what the sign-in is for, and it is why the case looks like a request to pay. But the thing she is told to do first is to sign in, and when a message asks for two things, the answer is the earlier one.' }
    ] },

  /* ---------- the look-alike pair: the same SIM, a fee and a list of facts ---------- */
  { id: 'g-sim-fee', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a reactivation fee for a SIM',
    text: "Pinecrest Mobile texts Joel: 'Your SIM will be switched off tomorrow. Pay a $1.99 reactivation fee at pinecrest-reconnect.com to keep your number.'",
    route: { D1: ['money'] },
    cues: { D1: 'Pay a $1.99 reactivation fee at pinecrest-reconnect.com' } },

  { id: 'g-sim-details', use: 'teach', tier: 'clean', setting: 'shopping', topic: 'a SIM that needs facts confirmed',
    text: "Pinecrest Mobile texts Joel: 'Your SIM will be switched off tomorrow. Confirm your full name, date of birth and card number at pinecrest-reconnect.com to keep your number. Nothing will be charged.'",
    route: { D1: ['details'] },
    cues: { D1: 'Confirm your full name, date of birth and card number at pinecrest-reconnect.com' } }
]);

// Scams, Unit One: fresh cases held back for later days (lesson standard E9, V44), part one: a request about the device
// and a request for a way into an account. Four for each kind, because this is an action subject: one for each of the
// four scheduled returns, the last of them about twelve weeks on. A kind that is due comes back as a case the learner
// has not seen, beside a case of the kind they most often take it for. Field guide: see u1.cases-drill-1.js.
// These are also part of the bank that later units draw their earlier-unit items from.

FC.cases('scams', 'u1', [

  /* ---------- something on your device ---------- */
  { id: 'g-ret-popup', use: 'return', tier: 'clean', setting: 'home', topic: 'a pop-up with a siren and a repair line',
    text: "A pop-up fills Iris's computer with a siren sound: 'Your computer has a serious fault. Call our repair line on 0800 555 0142 now.'",
    route: { D1: ['device'] },
    cues: { D1: 'Call our repair line on 0800 555 0142 now' },
    reason: { D1: 'A warning that says a device has a fault, and gives someone to ring to fix it, is a request about the device: {cue:D1}. The person who answers will want to put something on it or to watch it.' },
    not: { outcome: 'access', why: 'Nothing is asked of any account. The pop-up sends her to someone who will deal with her computer.' },
    wouldChange: 'If the pop-up had only said that an update would be installed tonight, and given no number, it would ask for nothing, and it would be {a:D1.nothing}.' },

  { id: 'g-ret-test', use: 'return', tier: 'varied', setting: 'work', topic: 'a coding test sent as a file',
    text: "A recruiter emails Colm: 'The next step is a coding test. Download the test file, open it and run it on your computer. You have 30 minutes.'",
    route: { D1: ['device'] },
    cues: { D1: 'Download the test file, open it and run it on your computer' },
    reason: { D1: 'The email asks Colm to download a file and run it: {cue:D1}. That is a request about his computer.' },
    not: { outcome: 'nothing', why: 'The first sentence only tells him about the next step in the process, but the email goes on to ask him to download and run a file.' },
    wouldChange: 'If the email had only said that the test would be on Thursday at 10, it would ask for nothing, and it would be {a:D1.nothing}.' },

  { id: 'g-ret-pharmacy', use: 'return', tier: 'clean', setting: 'health', topic: 'an app update in the pharmacy app',
    text: "The pharmacy's own app, which Ola installed last year, shows a box: 'A new version of this app is ready. Update now?'",
    route: { D1: ['device'] },
    cues: { D1: 'A new version of this app is ready. Update now?' },
    reason: { D1: 'The box asks Ola to install a new version of the app: {cue:D1}. A request to install something is a request about the device, whoever it comes from.' },
    not: { outcome: 'nothing', why: 'It tells her that a new version exists, but it asks her to update, so it is more than a notice.' },
    wouldChange: 'If the box had said that the app would update itself tonight, it would ask for nothing, and it would be {a:D1.nothing}.' },

  { id: 'g-ret-guard', use: 'return', tier: 'varied', setting: 'money', topic: 'a bank caller who wants an app installed',
    text: "A caller says that he is from Halbrook Bank's fraud team. 'To protect your account, please install the Halbrook Guard app from the address I will text you.'",
    route: { D1: ['device'] },
    cues: { D1: 'please install the Halbrook Guard app from the address I will text you' },
    reason: { D1: 'The caller asks the customer to install an app: {cue:D1}. He talks about protecting the account, but what he asks for is a program on her phone.' },
    not: { outcome: 'access', why: 'The caller talks about an account, but he does not ask for a password or a code. He asks for an app to be installed.' },
    wouldChange: 'If he had asked her to read out the code the bank had just texted her, it would be {a:D1.access}.' },

  /* ---------- a way into an account ---------- */
  { id: 'g-ret-overlay', use: 'return', tier: 'clean', setting: 'leisure', topic: 'an app asking to post in a game chat',
    text: "A game site shows Kit a box: 'Stream Overlay wants to post and read your chat for you. Allow / Cancel.'",
    route: { D1: ['access'] },
    cues: { D1: 'Stream Overlay wants to post and read your chat for you. Allow / Cancel' },
    reason: { D1: 'The box asks Kit to press Allow so that an app can use his gaming account: {cue:D1}. It is a {t:permission}, and the request is for a way into the account.' },
    not: { outcome: 'device', why: 'It names an app, but nothing is put on his computer. The box asks him to let an app into his gaming account.' },
    wouldChange: 'If the page had asked him to install a program called Stream Overlay on his computer, it would be {a:D1.device}.' },

  { id: 'g-ret-rebate', use: 'return', tier: 'varied', setting: 'government', topic: 'a rebate that needs a login',
    text: "A text reads: 'Northway Council: your council tax rebate is ready. Log in with your username and password at northway-rebate.com to claim it.'",
    route: { D1: ['access'] },
    cues: { D1: 'Log in with your username and password at northway-rebate.com to claim it' },
    reason: { D1: 'The text asks the reader to log in: {cue:D1}. The rebate is the reason it gives.' },
    not: { outcome: 'money', why: 'A rebate is money, but it is money coming to her, and nobody is asked to pay or send any. The text asks her to log in.' },
    wouldChange: 'If the text had only said that the rebate would be paid into her account on Friday, it would ask for nothing, and it would be {a:D1.nothing}.' },

  { id: 'g-ret-cousin', use: 'return', tier: 'varied', setting: 'relationships', topic: 'a cousin who sent a code by mistake',
    text: "A message from Cal's cousin says: 'I sent my login code to your number by mistake. Can you forward it to me?'",
    route: { D1: ['access'] },
    cues: { D1: 'Can you forward it to me?' },
    reason: { D1: 'The message asks Cal to send on a {t:code} that has arrived on his phone: {cue:D1}. That is a request for a way into an account.' },
    not: { outcome: 'money', why: 'It is a request to pass something on, but what is passed on is a code and not money.' },
    wouldChange: 'If the message had asked Cal to lend her £50, it would be {a:D1.money}.' },

  { id: 'g-ret-bankpage', use: 'return', tier: 'clean', setting: 'money', topic: 'signing in to see statements',
    text: "Sofia opens Halbrook Bank's own site, which she has bookmarked. The page says: 'Type your password to see your statements.'",
    route: { D1: ['access'] },
    cues: { D1: 'Type your password to see your statements' },
    reason: { D1: 'The page asks Sofia to type her password: {cue:D1}. That is a request for a way into her account. She went to the page herself, and the first question does not ask about that.' },
    not: { outcome: 'nothing', why: 'The page is about statements, which could be news, but it asks her to type her password, so it is more than a notice.' },
    wouldChange: 'If it had only said that her statements were ready in her own app, it would ask for nothing, and it would be {a:D1.nothing}.' }
]);

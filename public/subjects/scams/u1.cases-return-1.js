// Scams, Unit One: fresh cases held back for later days (lesson standard E9, V44), part one: a request about the device
// and a request for a way into an account. Two for each kind, because this is an action subject. A kind that is due
// comes back as a case the learner has not seen, beside a case of the kind they most often take it for. Field guide:
// see u1.cases-drill-1.js. These are also part of the bank that later units draw their earlier-unit items from.

FC.cases('scams', 'u1', [
  { id: 'g-ret-popup', use: 'return', tier: 'clean', setting: 'home', topic: 'a pop-up with a siren and a repair line',
    text: "A pop-up fills Iris's computer with a siren sound: 'Your computer has a serious fault. Call our repair line at (800) 555-0142 now.'",
    route: { D1: ['device'] },
    cues: { D1: 'Call our repair line at (800) 555-0142 now' },
    reason: { D1: 'A warning that says a device has a fault, and gives you someone to call, is a request about the device: {cue:D1}. The person who answers will want to put something on it or watch it.' },
    not: { outcome: 'access', why: 'Nothing is asked of any account. The pop-up sends her to someone who will deal with her computer.' } },

  { id: 'g-ret-guard', use: 'return', tier: 'varied', setting: 'money', topic: 'a bank caller who wants an app installed',
    text: "A caller says that he is from Halbrook Bank's fraud team. 'To protect your account, please install the Halbrook Guard app from the address I will text you.'",
    route: { D1: ['device'] },
    cues: { D1: 'please install the Halbrook Guard app from the address I will text you' },
    reason: { D1: 'The caller asks the customer to install an app: {cue:D1}. He talks about protecting the account, but he asks for a program on her phone.' },
    not: { outcome: 'access', why: 'He talks about an account, but he does not ask for a password or a code. He asks for an app to be installed.' } },

  { id: 'g-ret-overlay', use: 'return', tier: 'clean', setting: 'leisure', topic: 'an app asking to post in a game chat',
    text: "A game site shows Kit a box: 'Stream Overlay wants to post and read your chat for you. Allow / Cancel.'",
    route: { D1: ['access'] },
    cues: { D1: 'Stream Overlay wants to post and read your chat for you. Allow / Cancel' },
    reason: { D1: 'The box asks Kit to press Allow so that an app can use his gaming account: {cue:D1}. It is a {t:permission}.' },
    not: { outcome: 'device', why: 'It names an app, but nothing is put on his computer. The box asks to let an app into his gaming account.' } },

  { id: 'g-ret-cousin', use: 'return', tier: 'varied', setting: 'relationships', topic: 'a cousin who sent a code by mistake',
    text: "A message from Cal's cousin says: 'I sent my login code to your number by mistake. Can you forward it to me?'",
    route: { D1: ['access'] },
    cues: { D1: 'Can you forward it to me?' },
    reason: { D1: 'The message asks Cal to pass on a {t:code} that has come to his phone: {cue:D1}. A code is a way into an account.' },
    not: { outcome: 'money', why: 'It asks him to pass something on, but what is passed on is a code, not money.' } }
]);

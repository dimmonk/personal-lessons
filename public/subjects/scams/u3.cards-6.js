// Scams, Unit Three, close: the two cards that come after the drill. The recap prints the unit's part of the key and, for each
// name, what to point to, the question to ask and what to do; the lines here are what the learner carries.
// This is an action subject, so the unit ends with a plan card (lesson standard A11, P26). Field guide: see u3.cards-1.js.

FC.cards('scams', 'u3', [

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'This card puts the unit in one place.',
    carry: [
      'Put two questions to a request to sign in, to give a code or to press Allow: what am I asked to type or press, and did I start it? Point to the words that show each.',
      'When it came to you, a page that wants a password is {o:phishing}, a person who wants you to pass on a code is {o:codescam}, and a {t:permission} that wants you to press Allow for an app asking far more than its job is {o:appscam}. When you began it yourself and it asks no more than your task needs, it is {o:realsignin}.',
      'The page, the code and the {t:permission} can all be real, even in the scams. How a request looks, whose name is on it, and where it sits among your messages tell you nothing. Whether you started it tells you what you need.',
      'When you cannot say that you started it, stop, and start again from an app, an address or a number that you already had. That is {t:check}, and a real company never minds it.',
      'If you have already given something away: change the password at once; call the company at once about a code; and remove the app for an Allow, because changing the password does not take it away.'
    ] },

  { id: 'plan-access', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This card is for what you will do about it, and it is yours to fill in or to leave.',
    intro: [
      'A plan is one line: if I see this, then I will do that. The moment a request arrives is the worst moment to think of what to do, and the best moment to do something you decided in advance. Use one of the lines below, change it, or write your own. Nothing is saved until you press the button.'
    ],
    cues: [
      { cue: 'a message, a call or a pop-up that I did not ask for sends me to a page that wants a password',
        then: 'close it, and sign in only by opening the app myself or typing the address myself' },
      { cue: 'someone who contacted me asks me to read out or send on a code that has just come to my phone',
        then: 'say no and end the call or the chat, and then call the company at a number I already had' },
      { cue: 'a permission screen asks me to press Allow for an app that came to me, or for much more than its job needs',
        then: 'press Cancel, and if I ever pressed Allow, remove the app in my account\'s list of connected apps' },
      { cue: 'a sign-in, a code or an Allow that I started myself, from an app or an address I already had',
        then: 'go ahead, because this is the real thing' }
    ] }
]);

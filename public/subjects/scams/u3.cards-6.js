// Scams, Unit Three, part four (second half): the three cards that close the unit after the drill. The recap prints the unit's part
// of the key and, for each name, what to point to, the question to ask and what to do; the lines here are what the learner carries.
// This is an action subject, so the unit ends with a plan card (lesson standard A11, P26). Field guide: see u3.cards-1.js.

FC.cards('scams', 'u3', [

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the key\'s two questions on your own. This card puts the unit in one place, in the key\'s words.',
    carry: [
      'Put two questions to a request to sign in, to give a code or to press Allow: what am I asked to type or press, and did I start it? Point to the words that show each. If you cannot point, you do not have an answer yet.',
      'When it came to you, a page that wants a password is {o:phishing}, a person who wants you to pass on a code is {o:codescam}, and a {t:permission} that wants you to press Allow for an app asking far more than its job is {o:appscam}. When you began it yourself and it asks no more than your task needs, it is {o:realsignin}.',
      'The page, the code and the {t:permission} can all be real, and they are real in the scams too. How a request looks, whose name is on it, and where it sits among your messages tell you nothing. Whether you started it tells you what you need, and you can answer that at the moment.',
      'When you cannot say that you started it, stop, and start again from an app, an address or a number that you already had. That is {t:check}, and a real company never minds it.',
      'When a page asks for a password and then for a code, the key takes the password.',
      'If you have already given something away: change a password at once; ring the company at once about a code; and remove the app for an Allow, because changing the password does not take it away.'
    ] },

  { id: 'transfer', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the four names is one step. Noticing the moment to ask the two questions is a separate step, and only you know where those moments are in your own life.',
      'Pick one of the four and name an occasion of your own: something you received, something someone said to you, or something you almost did. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'realsignin', occasion: 'Something you did yourself in the last week that needed a password, a code or an Allow.' },
      { outcome: 'phishing', occasion: 'A message that told you to sign in to unlock, confirm or claim something, and gave you a link to do it.' },
      { outcome: 'codescam', occasion: 'A call or a message that asked you to read out or pass on a code that had just come to your phone.' },
      { outcome: 'appscam', occasion: 'An app, a quiz or an offer that asked to connect to your email, your calendar or your photos.' }
    ],
    places: ['At home', 'At work', 'On my phone', 'On a call'] },

  { id: 'plan-access', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'The unit has taught you to name a request to sign in, to give a code or to press Allow. This card is for what you will do about it, and it is yours to fill in or to leave.',
    intro: [
      'A plan is one line: if I see this, then I will do that. It is worth writing down because the moment a request arrives is the worst moment to think of what to do, and the best moment to do something you decided in advance.',
      'The lines below are examples to start from. You can use one, change it, or write your own two lines. Nothing is saved until you press the button.'
    ],
    cues: [
      { cue: 'a message, a call or a pop-up that I did not ask for sends me to a page that wants a password',
        then: 'close it, and sign in only by opening the app myself or typing the address myself' },
      { cue: 'someone who contacted me asks me to read out or send on a code that has just come to my phone',
        then: 'say no and end the call or the chat, and then ring the company on a number I already had' },
      { cue: 'a permission screen asks me to press Allow for an app that came to me, or for much more than its job needs',
        then: 'press Cancel, and if I ever pressed Allow, remove the app in my account\'s list of connected apps' },
      { cue: 'a sign-in, a code or an Allow that I started myself, from an app or an address I already had',
        then: 'go ahead, because this is the real thing' }
    ] }
]);

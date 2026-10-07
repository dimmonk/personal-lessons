// Scams, Unit Three, part one: the opening card and the real sign-in, which the three scams copy, so it comes first.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, a bold action and one
// short sentence of why), then the name, then what to do on the spot (act: steps too). Lesson standard section 20.

FC.cards('scams', 'u3', [

  { id: 'orient', kind: 'orient',
    h: 'A way into your account: yours, or a copy of it',
    canDo: [
      'Before you type a password, read out a code or press Allow, check two things: what exactly you are being asked for, and whether you started it. Scammers copy things you do every day, and most people who get caught skip this check.'
    ],
    everyday: [
      'You sign in to your email. A code arrives when you pay online. An app asks whether it may see your photos. You do these things many times a week, and each is normal.',
      'A scam does not break in. It gets you to hand over the way in yourself, and it makes the request look like the ones you already do. The page can be a copy, the code can be real, and the {t:permission} can come from your own email provider. So the way it looks will not tell you. Two questions will: what is it asking you to type or press, and did you start it?'
    ],
    map: { branch: 'access' } },

  /* ---------- the real one first ---------- */
  { id: 'meet-realsignin', kind: 'meet', outcome: 'realsignin',
    link: 'Scammers copy something you do every day, so the real thing comes first.',
    case: 'ac-energy', mark: 'A2',
    explain: [
      'Marta opened an app that was already on her phone, because she wanted to see her electricity use. It asked for her email address and password, and nothing else. She started it, using {t:already}, and she typed her password into the same app she opened.',
      'That is the whole test. How the page looks and whose logo is on it tell you nothing, because a copy can look exactly the same, whether it is a sign-in page, a code or a {t:permission} with an Allow button. The one thing a copy cannot have is that you started it.',
      'A real one can still come with a message, as long as the message answers something you did: a link to choose a new password after you tap "Forgot password", or a code after you start to sign in.'
    ],
    spot: [
      { do: 'Ask what you were doing before this appeared: Marta wanted to see her electricity use.', why: 'The real thing answers something you set out to do.' },
      { do: 'Find where you started from: the energy app that was already on her phone.', why: 'A link in a message is never a place you started from.' },
      { do: 'Check what it asks for: her email address and password, nothing more.', why: 'A real request asks only for what the job needs.' }
    ],
    feature: { step: 'A2', option: 'fits' },
    name: [
      'This is {o:realsignin}, and nothing is wrong. It comes in the same three forms as the scams: a password typed into a site or app you opened, a {t:code} you asked for, and an Allow for an app you went looking for.'
    ],
    act: [
      { do: 'Ask yourself: did I start this, and from where?', why: 'The answer is in your own memory, so you need nobody\'s help.' },
      { do: 'If you can say where you started from, go ahead.', why: 'You started it, so it is the real thing.' },
      { do: 'If you cannot, close the page, then open the app or type the address yourself.', why: 'If it was real, it will be waiting for you there.' }
    ] },

  { id: 'check-realsignin', kind: 'check', after: 'realsignin',
    case: 'ac-calendar',
    ask: { type: 'phrase', step: 'A2', say: 'Which words show that Zainab started this herself? Tap them.',
           answer: "She searches her phone's app store for the club's app and opens it" } }
]);

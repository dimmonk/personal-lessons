// Scams, Unit Three, part one: the opening card and the real sign-in, which the three scams copy, so it comes first.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// This is an action subject, so each meet card says what to do on the spot (`act`).

FC.cards('scams', 'u3', [

  { id: 'orient', kind: 'orient',
    h: 'A way into your account: yours, or a copy of it',
    canDo: [
      'After this unit you can look at a request to sign in, to give a code, or to press Allow, and say which of four things it is: one that you started yourself, or one of three scams that copy it. You will be able to point to the words that show which, and to say what to do at the moment you see it.'
    ],
    everyday: [
      'You already do this many times a week. You sign in to your email. A code arrives when you pay online. An app asks whether it may see your photos. Each is a request for a way into something of yours, and each is normal.',
      'A scam does not need to break in. It needs you to hand over the way in yourself, and it makes the request look like the ones you already do. The page can be a copy, the code can be a real one, and the {t:permission} can come from your own email provider. So what tells you is two things: what you are asked to type or press, and whether you started it.'
    ],
    map: { branch: 'access' } },

  /* ---------- the real one first ---------- */
  { id: 'meet-realsignin', kind: 'meet', outcome: 'realsignin',
    link: 'Three scams copy something you do every day. The real thing comes first.',
    case: 'ac-energy', mark: 'A2',
    strip: [
      'There is one person, Marta, and one app that was already on her phone.',
      'She chose to open it, because she wanted to look at her electricity use.',
      'It asks for what a sign-in needs, her email address and her password, and nothing more.',
      'She types them into the same app that she opened.'
    ],
    explain: [
      'Two things make this real, and both are things Marta did. She started it: nothing was sent to her and nothing led her there, because she used {t:already}, an app that was on her phone before anything arrived. And the app asks only what a sign-in needs.',
      'How the page looks and whose logo is at the top are not on that list. A copy can look exactly the same, whether it is a sign-in page, a code or a {t:permission} with an Allow button. The one thing a copy cannot have is that you started it.',
      'A real one can come with a message, as long as the message answers something you did: a link to choose a new password after you tap "Forgot password", or a code after you start to sign in.'
    ],
    feature: { step: 'A2', option: 'fits' },
    name: [
      'The name for this is {o:realsignin}. "Real" here means that nothing is wrong. It comes in the same three forms as the scams: a password typed into a site or an app you opened, a {t:code} you asked for, and an Allow for an app you went looking for.'
    ],
    act: [
      'You do not need anyone\'s help to know which it is: the answer is in your own memory. If you can say that you started it, and where from, go ahead. If you cannot, close the page, open the app or type the address yourself, and sign in from there. If it was real, it will be waiting.'
    ] },

  { id: 'check-realsignin', kind: 'check', after: 'realsignin',
    case: 'ac-calendar',
    ask: { type: 'phrase', step: 'A2', say: 'Which words show that Zainab started this herself? Tap them.',
           answer: "She searches her phone's app store for the club's app and opens it" } }
]);

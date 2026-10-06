// Scams, Unit Three, part one: the opening card and the real sign-in. Part one of the unit is about a password typed into a page;
// the real sign-in comes first, so that the learner meets the real thing before any copy of it.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not contain:
// the reminder of Unit One, the preview map, the heading of a meet card, "what you must be able to point to", the key's question
// and answer on a meet card, the "also called" sentence, the stem of every commit prompt, and the heading of an again or portrait card.
// This is an action subject, so every portrait says what to do when you meet the name (`act`), on the spot, as steps.

FC.cards('scams', 'u3', [

  { id: 'orient', kind: 'orient',
    h: 'A way into your account: yours, or a copy of it',
    canDo: [
      'After this unit you can look at a request to sign in, to give a code, or to press Allow, and say which of four things it is: one that you started yourself, or one of three scams that copy it. You will be able to point to the words that show which, and to say what to do at the moment you see it.'
    ],
    everyday: [
      'You already do this many times a week. You sign in to your email. A code arrives when you pay for something online. An app asks whether it may see your photos. Each of these is a request for a way into something of yours, and each is normal.',
      'A scam does not need to break into anything. It needs you to hand over the way in yourself, and it makes the request look just like the ones you already do. The page can be a copy, the code can be a real one, and the {t:permission} can come from your own email provider. So the request to sign in tells you nothing by itself about whether you are safe. What tells you is two things: what you are being asked to type or press, and whether you started it.',
      'This unit teaches those two questions. You can answer both at the moment the request appears, from the page, the call or the {t:permission} in front of you and from your own memory of what you were doing. You do not need to know who is behind it. You cannot know that at that moment, and that is why the questions never ask.'
    ],
    add: [
      'Three ideas from Unit One are used all the way through, and are restated here in a line each so that you do not have to look back. {t:already} means {means:already}. {t:check} means {means:check}. A {t:code} is {means:code}. A {t:permission} is {means:permission}.',
      'The unit starts with the real thing, because the three scams are copies of it and are easier to see once you know what they copy. Then it takes the three scams in the order of what each one asks you to type or press: a password, a code, and an Allow.'
    ],
    map: { branch: 'access' } },

  /* ---------- the real one first ---------- */
  { id: 'meet-realsignin', kind: 'meet', outcome: 'realsignin',
    link: 'The last card said that three scams copy something you do every day. The thing they copy comes first, because it is the one you meet most often, and the one that must never be mistaken for a scam.',
    case: 'ac-energy', mark: 'A2',
    strip: [
      'There is one person, Marta, and one app that was already on her phone.',
      'She chose to open it, because she wanted to look at her electricity use.',
      'It asks for what a sign-in needs, her email address and her password, and nothing more.',
      'She types them into the same app that she opened.'
    ],
    explain: [
      'What you are shown is a sign-in that the person started. Marta wanted something, so she opened an app that was already on her phone, was asked to show that it was her, and did. Nothing in it is strange and nothing in it is hidden. If she had not signed in, she could not have gotten what she came for.',
      'Two things make it what it is, and both are things Marta did, not things she was shown. The first is that she started it: nothing was sent to her and nothing led her there. She used {t:already}, an app that was on her phone before anything arrived. The second is that the app asks only what a sign-in needs, an email address and a password, and nothing beyond that.',
      'Notice what is not on that list. How the page looks is not on it, and neither is whose name or logo is at the top. A copy of a sign-in page can look exactly the same, and so can a copy of a code or of a {t:permission} with an Allow button. The one thing a copy cannot have is that you started it.',
      'It is a kind of its own because anyone who treats every request to sign in as suspect either stops using the safe ones or stops paying attention to any of them. The real one has a name so that "nothing is wrong here" can be said as exactly as "this is a copy". It comes in the same three forms as the scams: a password typed into a site or an app you opened, a {t:code} you asked for and typed into the same site, and an Allow, on a {t:permission}, for an app you went looking for.'
    ],
    feature: { step: 'A2', option: 'fits' },
    name: [
      'The name for this is {o:realsignin}. "Real" here means that nothing is wrong: it is what it looks like. The name covers all three forms, and the rest of the unit shows each of them next to the copy that is made from it.'
    ] },

  { id: 'again-realsignin', kind: 'again', outcome: 'realsignin',
    link: 'Marta\'s sign-in gave you what to point to, from one case: {needs:realsignin}. Here is a second case with a different story. This time what is typed is not a password.',
    first: 'ac-energy', second: 'ac-checkout', step: 'A2',
    instruction: 'Find what the two cases share. Ignore the story (an energy bill, a pair of boots) and ignore what is typed. Look at one thing only: which words show how the person came to the page?',
    prompt: { kind: 'phrase', answer: "He goes to the store's website by typing its address, fills his basket and pays by card" },
    shared: [
      'Marta typed a password into an app. Imran typed a code into a payment page. What is typed is different, and the store even sent him a message, a text with a code in it. None of that makes it a copy, because in both cases the person started it: Marta opened an app she already had, and Imran typed the store\'s address himself.',
      'The code that arrived on Imran\'s phone came because of what he did. A message that answers something you did is different from a message that arrives first. The question that separates them is {q:A2}, and in both cases the answer is {a:A2.fits}. That is what {o:realsignin} names.'
    ] },

  { id: 'lens', kind: 'lens',
    h: 'The story never decides the answer',
    link: 'The last card asked you to ignore the story: an energy bill, a pair of boots. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: a bank, a streaming service, a work email, a photo offer. The layer underneath is what the request asks you to type or press, and whether you started it.',
      'The four names belong to the layer underneath. Each of them can turn up in any story: a bank can be the real thing or the name on a copy, and so can a streaming service. A calm story can hide a copy and an alarming one can be real.',
      'From here on, the cases change their stories on purpose. Two more things change as well, and neither decides anything: how well the message is written, and how the page looks. A copy can be exact in every detail. What it cannot change is whether you started it.'
    ],
    fixed: ['what the request asks you to type or press, and whether you started it, which are the questions: {q:A1} and {q:A2}'],
    varies: ['the company or service named', 'how alarming it sounds', 'how well it is written', 'how the page looks', 'whether it comes as a text, an email or a call'] },

  { id: 'portrait-realsignin', kind: 'portrait', outcome: 'realsignin',
    link: 'You know what to point to for {o:realsignin}. This card fills in the rest of the picture, so that you can spot it in real life, where nobody marks the words for you.',
    typical: [
      'You decided to do something, and a sign-in, a code or an Allow was the step your own task needed.',
      'The place you did it was one you already had: an app on your phone, an address you typed or saved, a bill or card with the number on it. Marta\'s app and Imran\'s typed address are both that.',
      'It asks only what the task needs. A sign-in needs an email address or a username and a password. Approving a card payment needs a code. A calendar app needs your calendar.',
      'It can come with a message, as long as the message answers something you did. A link to choose a new password arrives after you tap "forgot password". A code arrives after you start to sign in. They come because of you, and they come within a minute or two of what you did.',
      'Nobody is hurrying you. A real one loses nothing if you close it and start again from your own app.'
    ],
    not: [
      'Looking like a normal sign-in is not enough. A copy looks like a normal sign-in too, and that is what makes it work. Nor is it the same as a message that has no link in it: a real password reset has a link. What decides it is whether you started it, and whether it asks only what your task needs.',
      'And a request that you did not start is not {o:realsignin} even if the company it names is real. You may well have an account there. A real company can be named in a copy.'
    ],
    wild: ['"Enter the code we have just sent you."', '"Sign in to see your usage."', '"Would you like to allow this app to see your calendar?"', '"Choose a new password."', '"Confirm that it is you."'],
    self: 'You do it several times a day: opening your phone, paying online, installing an app, signing in at work. All of those are the real thing. The habit that protects you is not to refuse them but to know, each time, that you started it and from where.',
    ask: '"Did I begin this myself, and was it through an app, an address or a number that I had before?" If both answers are yes, and it asks no more than my task needs, it is the real thing.',
    act: [
      'At the moment, you do not need anyone\'s help to know which it is: the answer is in your own memory. If you can say that you started it, and where you started from, go ahead and type the password or the code, or press Allow.',
      'If you cannot say it, because you found yourself on the page by tapping a link in a message, do not carry on. Close the page, open the app yourself or type the address yourself, and sign in from there. If it was real, it will be waiting for you.'
    ] },

  { id: 'check-realsignin', kind: 'check', after: 'realsignin',
    case: 'ac-calendar',
    ask: { type: 'phrase', step: 'A2', say: 'Which words show that Zainab started this herself? Tap them.',
           answer: "She searches her phone's app store for the club's app and opens it" } }
]);

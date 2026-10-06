// Scams, Unit Two, part one (first half): the opening card and the first name, the real installation. This is an ACTION
// subject and a BRANCH unit: the key's first question already gave the answer for everything in this unit (a request about
// your device), and the unit teaches the one question that gives each request its name. Cards are structured data, not HTML.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading of a meet
// card, "what you must be able to point to", the key's question and answer on a meet card, the "also called" sentence, the
// stem of every commit prompt, and the heading of an again or portrait card. Key wording is never typed here: tokens are
// filled in from key.js.

FC.cards('scams', 'u2', [

  { id: 'orient', kind: 'orient',
    h: 'A request about your phone or your computer, and four things it can be',
    canDo: [
      'After this unit you can take a request to install something, to open a file, or to let someone watch your phone or computer, and say which of four things it is: three scams, and one that is real: software that you chose and fetched yourself. You will be able to point to the words in it that show which one, and to say what to do on the spot.',
      'The request can come as a pop-up, a phone call, a text, an email or a download that you went and found yourself. Where it comes from does not change the answer to the first question, which you already know: all of them are {a:D1.device}. This unit starts there, and teaches the one question that gives each of them its name.'
    ],
    everyday: [
      'You have probably met all four. A page fills your laptop with a siren and a phone number. An email from a firm you have never heard of, with a file attached. A caller who says that you are owed a refund and needs a minute to see your computer. And, on an ordinary day, a program that you decided to download from its maker’s website.',
      'On the surface they are alike. A box asks you to allow something, and a message or a helpful person wants you to go ahead. Three of the four are scams. One is perfectly fine, and a learner who treats it as a scam stops installing anything, including the updates that keep a device safe. So this unit teaches both halves: how to spot the three, and how to recognize the one that is real.',
      'It teaches you where to look. It is not at the box that appears, not at the name of the program, and not at what is installed. It is at how the request came to you, and that is something you know at the moment you are asked, before you press anything.'
    ],
    add: 'This part has one question, not two or three: how a request reached you is enough to give each of the four its name, and there is nothing else that you could still ask before it is too late. The cards say why. Where something comes up that you cannot know until afterwards, they say so, and they say what to do about it.',
    map: { branch: 'device' } },

  /* ---------- Real installation ---------- */
  { id: 'meet-realinstall', kind: 'meet', outcome: 'realinstall',
    link: 'You have the first question, and its answer for everything in this unit. The first of the four names to look at is the one that is not a scam, because you need to recognize it before you learn what the three scams copy.',
    case: 'dv-video-app', mark: 'I1',
    strip: [
      'There is one person, Priya, and one program that she wants: a video-calling program for her team.',
      'She decided to get it herself, and she went to the maker’s own website by typing its address, so the address was hers before anything else happened.',
      'She downloads the file and runs it, and her computer shows a box asking whether to allow changes. That box appears for every installation.',
      'Nobody called her, messaged her or emailed her about it. Nobody is on a call with her.'
    ],
    explain: [
      'What you are shown is software that a person chose and fetched. It counts as the real thing and has a name of its own, because the scams in this unit are copies of it. A scam that wants you to install something has to look like the ordinary business of getting software.',
      'Two parts of the case carry the whole idea. The first is where Priya went: to the maker’s own website, by an address that she typed. That is {t:already}: an address that was hers before any message could reach her. The same would be true of a program that she found in the app store that came with her phone, or at an address that she had saved. The second is who started it. Priya did. Nobody had contacted her, so nobody had a reason to hurry her or to tell her what to click.',
      'Notice what is not part of the idea. The box that asks whether to allow changes is a normal part of installing a program, and it appears for every one, including the harmful ones, so it tells you nothing either way. Nor does it matter that the program is well known. What matters is how Priya came to be standing at the download button.'
    ],
    feature: { step: 'I1', option: 'own' },
    name: 'The name for this is {o:realinstall}. The words mean what they say: the installation is real, because you chose the software and fetched it yourself. Nothing is wrong in a case of this name. It has a name on purpose: without one, every installation would look like something to fear.' },

  { id: 'again-realinstall', kind: 'again', outcome: 'realinstall',
    link: 'The last card gave you what to point to, from one case: {needs:realinstall}. Here is a second case with a different story. This one is on a phone.',
    first: 'dv-video-app', second: 'dv-phone-store', step: 'I1',
    instruction: 'Find what the two cases share. Ignore the story (a video-calling program on a computer, a running app on a phone) and ignore the kind of device. Look at one thing only: where the person went to get the software.',
    prompt: { kind: 'phrase', answer: 'opens the app store that came with it' },
    shared: [
      'Priya and Marcus each decided that they wanted some software. Each went to a place that was theirs: Priya typed the maker’s address herself, and Marcus opened the app store that came with his phone. Neither was sent anywhere by a message or a caller, and nobody contacted either of them.',
      'The two stories share nothing else. A website and an app store look different, and one is a computer and the other a phone, but both are {t:already} for the person using them. That is what {o:realinstall} names.'
    ] },

  { id: 'lens', kind: 'lens',
    h: 'The program, the box and the company never decide the answer',
    link: 'The last card asked you to ignore the story. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: a video-calling program, a running app, a package, a bank, a router. The layer underneath is how the request reached the person: through something they already had, or through a message, a call, a pop-up or a search.',
      'The question is about the layer underneath: {q:I1} The same program can be fetched by one person and sent to another, and the box on the computer is the same box either way. So the box, the name of the program and the name of the company tell you nothing.',
      'Three more things change on purpose from here. Sometimes the story is alarming and the case is real. Sometimes the story is dull and the case is a scam. And sometimes two cases share the same person and the same program, and differ only in how the request arrived. When that happens, the shared story is there to show you that it tells you nothing.'
    ],
    fixed: ['how the request reached the person, which is the question: {q:I1}'],
    varies: ['the program or the problem', 'the company named', 'how alarming it sounds', 'the kind of device', 'whether the box on the computer looks official'] },

  { id: 'portrait-realinstall', kind: 'portrait', outcome: 'realinstall',
    link: 'You know what to point to. This card fills in the rest of the picture, so that you can spot {o:realinstall} in real life, where nobody marks the words for you.',
    typical: [
      'You decided to get the software before anything else happened. The wish came from you: a task, a hobby, a new gadget.',
      'You started it through something that was yours already: the maker’s website through an address that you typed or had saved, your device’s app store or its own update menu, or the help desk number printed on your bill, contract or card. You did not follow a link in a message, and you did not call a number from a page.',
      'Nobody contacted you about it. No call, no text, no email and no pop-up came first, and nobody is on the line telling you what to click.',
      'Your computer shows its usual box asking whether to allow changes, and for a small program it may add that the publisher is not yet known. Those boxes appear for every installation, real or harmful, so they are no evidence in either direction.',
      'It does what you expected and no more. Nobody appears afterwards, and nothing asks for money or a code. If you called a help desk, the helper may ask to see your device to fix the fault you called about. That is fine, because you started the call.'
    ],
    not: [
      'A real program is not the same thing as {o:realinstall}. A program can be well known and still reach you in a way that makes the case a scam: a real company’s name on an installer that was emailed to you, or on a number that you found in an ad. The name here is for the way you came to it, not for the program.',
      'And a harmful program is not made safe by a familiar name or by the box that asks whether to allow changes. The question is not what the software is. It is whether you set out to get it and went to the company yourself.'
    ],
    wild: ['"I\'ll download it from their website."', '"Let me find it in the app store."', '"It\'s asking whether to allow changes, which it always does."', '"I typed the address in myself."'],
    self: 'You do this every few weeks: a new app, a game, an update that you chose to get. It is the ordinary thing that every request in this unit is copying.',
    ask: '"Did I set out to get this, and did I go to the company myself, through an address, an app store, an update menu or a number that I already had?" If so, and nobody contacted me, it is {o:realinstall}.',
    act: [
      'Go ahead. Nothing needs to be done differently for {o:realinstall}.',
      'Keep to the way that you came. For the next update, use the same app store or the same saved address, and not a link in an email or a pop-up.',
      'Stop at once if something changes in the middle: a phone call that you did not start, a person who asks to see your device after contacting you first, or a request for a code. At that point it is no longer this name, and you start again with the question {q:I1}'
    ] },

  { id: 'check-realinstall', kind: 'check', after: 'realinstall',
    case: 'dv-c-printer',
    ask: { type: 'phrase', step: 'I1', say: 'Which words show how Ed came to the program? Tap them.',
           answer: "He types the printer maker's web address into his browser" } }
]);

// Scams, Unit Two, part two (first half): one word that the third name leans on, the third name (someone offering to fix a
// problem with your device), the first wrong idea a beginner brings about it, and the first named exception. The scam is told
// as it really unfolds, step by step, and the cards say which steps you could still refuse. Field guide: see u2.cards-1.js.

FC.cards('scams', 'u2', [

  /* ---------- a word the third name leans on ---------- */
  { id: 'term-searchad', kind: 'term', term: 'searchad',
    h: 'The first result on a search page may be an ad',
    link: 'The first two names were about software that you fetched and a file that was sent to you. The third depends on a word that you have to know before you meet it, and that is easy to miss on a search page.',
    case: 'dv-t-searchad',
    plain: [
      'Look at what Rosa did. Her dryer stopped, and she did what most people do: she searched for the company’s repair number and called the first one on the page. It was not the company’s number. The first result carried the small label “Ad”, and anyone can pay for that place. The company’s own website, lower down and without a label, listed a different number. Rosa had typed the company’s name herself, so it felt as if she had gone to the company. She had not: she had gone to whoever paid for the top of the page.',
      'So there are two kinds of result on a search page: the ones that the search found, and the ads above them that someone bought. A scammer can buy one, put the company’s name and logo on it, and give their own phone number. The ad can look exactly like the company’s own result.',
      'This fits what you already know about {t:already}. A number or an address from the results of a search was not yours before you searched, so it does not count, even though you chose what to type. The ad has a name of its own, below.'
    ],
    after: 'From here on, a result marked “Ad” or “Sponsored” is not one of the things that you already had, however well it matches the company that you wanted. The numbers and addresses that you can rely on are the ones from your bill, your card or your contract, and an address that you type in yourself or saved before.' },

  /* ---------- Tech-support scam ---------- */
  { id: 'meet-techsupport', kind: 'meet', outcome: 'techsupport',
    link: 'In the first two names nobody was talking to the person: a program was fetched, or a file was sent. The last two are different, because a person is on the line. The first of them begins with a warning, and the warning gives the person someone to call.',
    case: 'dv-popup-alarm', mark: 'I1',
    strip: [
      'There is one person, Joan, reading the news on her laptop.',
      'A page fills the whole window with a loud alarm and says that her computer is infected. It tells her not to switch it off, and to call a number now.',
      'The page will not close when she presses the X. She calls the number.',
      'The man who answers says that he is a technician. He asks her to open a web page and type in a code, so that he can see her computer and take the problem away.',
      'Nothing was wrong with her computer before the page appeared.'
    ],
    explain: [
      'Here is the scam as it really unfolds. First, a page fills the browser with an alarm and a phone number. It is only a web page: it knows nothing about Joan’s computer, and the alarm and the red color are there to frighten her. The X does not close it because the page was built to look as if it controls the machine. Second, Joan calls the number. Third, the man asks her to open a web page and type in a code, which lets him see her computer and perhaps move things on it: that is {t:screenshare}. Fourth, he shows her ordinary lists that every computer has, such as lists of warnings and error messages, and describes them as proof that her computer has been broken into. Fifth, he offers a fix, a “protection plan” for a few hundred dollars, to be paid by gift card or wire transfer, or he asks to see her bank so that he can check that no money has left. And he can stay on her computer after the call ends.',
      'Now ask which of those steps Joan could still have refused. The first step happened to her: she did nothing. At the second step she chose to call. At the third she was asked to let him in. Everything after the third, the lists, the plan to buy and the bank, can only be known once she has let him in, and by then someone else controls what she sees. So the moment when she can stop with nothing lost is before she calls, or at the latest when she is asked to let him in. The question can be answered at that moment, from the page alone: a warning that gives her someone to call to fix her device is already the answer.',
      'A warning that gives you someone to call counts as part of this answer, even before the technician asks for anything, because the person you reach will ask. A call, a message or an ad counts in the same way: any of them can offer to fix a problem that you did not know you had.'
    ],
    feature: { step: 'I1', option: 'support' },
    name: 'The name for this is {o:techsupport}. Technical support is a real service, and the name is for a scam that uses the idea of it, so that you will let someone into your device. Nothing was wrong with Joan’s computer: the problem was made up.' },

  { id: 'again-techsupport', kind: 'again', outcome: 'techsupport',
    link: 'The siren page gave you what to point to for {o:techsupport}, from one case: {needs:techsupport}. Here is a second case with a different story. This one is a message, and the device is a store register.',
    first: 'dv-popup-alarm', second: 'dv-shop-till', step: 'I1',
    instruction: 'Find what the two cases share. Ignore the story (a news page, a store register) and ignore whether the warning comes as a page or as a message. Look at one thing only: what is offered to the person in return for calling.',
    prompt: { kind: 'phrase', answer: 'Call our repair team at (800) 555-0191 and we will fix them for you today' },
    shared: [
      'Joan and Gareth each saw a warning that said their device had a problem, and each was given a number and someone who would fix it. Each called. Each was then asked by the person who answered to install something, or to let that person reach the device.',
      'The page and the message look different, and one device is a laptop and the other a tablet. What they share is that the device was reported as broken by something that wants you to call, and then someone offered to repair it. That is what {o:techsupport} names. Nothing was wrong with either device.'
    ] },

  { id: 'portrait-techsupport', kind: 'portrait', outcome: 'techsupport',
    link: 'You know what to point to. This card fills in the rest of the picture, so that you can spot {o:techsupport} in real life, where nobody marks the words for you.',
    typical: [
      'It starts with a problem that you did not know about: an alarm, a lock, an infection, errors, a failing disk. The problem is announced by something that has no way of knowing, such as a web page, a text or a stranger on the phone.',
      'It gives you someone to call, or someone calls you. The number is theirs. A warning from the software that is really on your device does not tell you to call a stranger.',
      'The person who answers is calm, helpful and in no hurry to get off the phone. They sound like a real technician because they do what a real technician would do first: they ask to see your device.',
      'They ask you to install something, or to open a web page and type in a code, which lets them see or control the device. Then they show you ordinary technical lists as proof.',
      'They sell something: a repair, a protection plan, a year of cover, paid for in a way that cannot be undone. Or they ask to see your bank so that they can check it.',
      'It can be the way in to something worse. Whoever can watch your device can see your bank and your passwords as you type them, and what they install can stay on after the call.'
    ],
    not: [
      'A real problem with your device is not this name. If your own laptop is slow and you call the company at the number printed on your bill or contract, you started it, you used a number that you already had, and nobody made up the problem. Even if the helper asks to see your device, that is {o:realinstall}, because the call was yours.',
      'And a warning is not this name unless it gives you someone to call who will fix the device. A real security program shows its warnings in its own window and does not ask you to call anyone.'
    ],
    wild: ['"Your computer is infected. Do not switch it off."', '"Call this number now to remove the threat."', '"We have detected errors coming from your computer."', '"I can fix it from here. I just need to see your computer."', '"Your phone has been hacked. Call support."'],
    self: 'It reaches you when you are doing something ordinary: reading the news, searching for a company’s helpline, answering the phone at dinner. It is a copy of a service that you may really use.',
    ask: '"Who told me there was a problem, and could they have known?" A page, a text or a stranger on the phone has no way to know, so a warning that comes with someone to call is {o:techsupport}.',
    act: [
      'Do not call the number, and do not press anything on the page. Calling is the step that gives them a person to work on.',
      'Close the page. If it will not close, close the browser through your computer’s own menu or the taskbar, or hold the power button until the device switches off. Nothing is lost, because the page was only a web page.',
      'If you have already called and been asked to install something or to let them see your device, say no and put the phone down.',
      'If you want to be sure, use {t:check}: call the company at the number on your bill or contract, and ask whether anything is wrong. Do not use a number from a page, a message or a {t:searchad}.'
    ] },

  { id: 'check-techsupport', kind: 'check', after: 'techsupport',
    case: 'dv-c-walt-call',
    ask: { type: 'option', step: 'I1', among: ['own', 'file', 'support'] } },

  /* ---------- a wrong idea about a warning that will not close ---------- */
  { id: 'refute-closing', kind: 'refute', about: 'techsupport',
    h: 'A wrong idea: "a warning that will not close must be real"',
    link: 'The siren page would not close when Joan pressed the X, and many people take that as a sign that a warning is real.',
    idea: '"The warning would not go away, even when I pressed the X, so it must be coming from my own computer."',
    verdict: 'This is wrong.',
    right: [
      'A web page can fill the window, play a sound and ignore the X. It is built to. Everything in it, the alarm, the red color and the phone number, was put there by whoever made the page, and a page can show whatever it likes. It knows nothing about your computer.',
      'A warning from the software that is really on your device comes from that software, in its own window. It does not give you a phone number to call, and it does not tell you to call a stranger. To get rid of a page that will not close, close the browser through your computer’s own menu or the taskbar, or hold the power button. That harms nothing.',
      'So whether a warning will close tells you nothing either way. What tells you is what it asks you to do. A warning that gives you someone to call to fix your device is the answer for {o:techsupport}, and you can say so before you call.'
    ],
    testedBy: ['dv-claim-wontclose'] },

  /* ---------- the first named exception: you went looking yourself ---------- */
  { id: 'exc-searched', kind: 'exception', ledger: 'techsupport~realinstall', looksLike: 'realinstall', is: 'techsupport',
    h: 'When you went looking yourself',
    link: 'Every case of {o:techsupport} so far began with something that came to the person: a page, a text or a call. Here is a case that did not. The person went looking herself, and it feels like {o:realinstall}.',
    case: 'dv-search-broadband',
    setup: 'Ivy typed the company’s name herself, and she called a number that she found for herself, with no pop-up and no stranger calling first. That is how {o:realinstall} looks: you went to the company. Yet this case is {o:techsupport}.',
    prompt: { kind: 'phrase', answer: "calls the number at the top of the results, the one with a small 'Ad' label beside it" },
    because: [
      'Ask where the number came from. It did not come from Ivy’s bill, her contract or the box that the router came in. It came from the results of a search, and the top place on a search page can be bought. The small label “Ad” says that someone paid for it. Anyone can buy that place, a scammer included, and give it the company’s name.',
      'That is the point of {t:searchad}. Ivy chose the words that she searched for, and that made it feel like her own visit. But a number from a search was not hers before she searched: it is not {t:already}. It was shown to her by whoever paid for the page. So in the end she was reached by an offer to fix a problem, and that is {o:techsupport}.',
      'Notice how small the difference is. If Ivy had called the number on her bill, the call would have been hers. What separates the two calls is where the number came from.'
    ],
    take: 'In this unit, a number or an address that comes from a search page does not count as one that you already had. If you need a company’s helpline, use the number on your bill, your contract or your card.' },

  /* ---------- the second named exception: a real helper asks to see your device ---------- */
  { id: 'exc-helpdesk', kind: 'exception', ledger: 'techsupport~realinstall', looksLike: 'techsupport', is: 'realinstall',
    h: 'When a real helper asks to see your device',
    link: 'The last card showed a case that felt like {o:realinstall} and was {o:techsupport}. Here is the opposite: a case that sounds exactly like {o:techsupport}, and is the real thing.',
    case: 'dv-helpdesk-call',
    setup: 'A helper offers to look at a problem and asks Kemal to share his device. That is what {o:techsupport} sounds like. Yet this case is {o:realinstall}.',
    prompt: { kind: 'phrase', answer: "finds the company's number on his last bill and calls it" },
    because: [
      'Ask who started the call, and where the number came from. Kemal did, and the number came from his own bill, which was his before he had any problem. Nobody warned him, nobody called him first, and nobody made the problem up: the slow broadband was his own. That is {t:already}, and it is what {o:realinstall} needs.',
      'The request is the same in both: share your device. Real help desks do work this way, so being asked is no sign of a scam. What separates the two calls is how each began. If a page, a text or a caller had come to Kemal first, or if he had taken the number from a result marked “Ad”, the same words would be {o:techsupport}.'
    ],
    take: 'So the question is not what the helper asks for. It is who started the call, and whether the number was yours before you needed it. A number from your bill, your contract, your card or the company’s own saved website is; a number that came from a page, a message, a call or a {t:searchad} is not.' }
]);

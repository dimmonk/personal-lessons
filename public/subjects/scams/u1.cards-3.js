// Scams, Unit One, part two (second half): the word that the third kind leans on, the third kind of message
// (something put on, opened on or shown from your phone or computer), and its look-alike pair with the second kind.
// Field guide: see u1.cards-1.js.

FC.cards('scams', 'u1', [

  { id: 'term-screenshare', kind: 'term', term: 'screenshare',
    h: 'Letting someone watch what you are doing',
    link: 'The next kind of message is about your phone or computer itself, and one of the things it can ask for is hard to picture until you have seen it.',
    case: 'g-t-share',
    plain: [
      'Jo’s laptop would not connect to the office printer, so she rang the company help desk on the number printed on her work badge. The helper asked her to open a meeting app and press a button that shares what is on her laptop with him. From then on he could see everything Jo could see, at the same moment, and he could move things on it if she let him.',
      'That is useful: it is how many real help desks work. It is also a very large thing to hand over. Anyone who can watch your computer can read your email and your bank pages as you open them, and may be able to take over the mouse. You are trusting the person completely, for as long as it lasts.',
      'It happens through an app, or through a code that you type in, and it lasts until you stop it.'
    ] },

  { id: 'meet-device', kind: 'meet', family: 'device',
    link: 'You now have the word you need. So far you have met a message that asks nothing, and a message that asks for a way into an account. The third kind asks for something to do with your phone or computer itself.',
    case: 'g-support-call', mark: 'D1',
    strip: [
      'There is one person, Diane, and one caller who says he is from her internet company.',
      'The caller says there is a problem: her router is sending out errors.',
      'He asks her to download a program from an address he will read out, so that he can fix it from his end.',
      'Nothing is asked of her accounts, her money or facts about her. What is asked is for something to go onto her computer.',
      'A program put there by someone else can do whatever that someone has built it to do.'
    ],
    explain: [
      'What you are shown is a request to put something on a device: here, a program, downloaded on the strength of a phone call. That is all a message of this kind is made of: one phone or computer, and a request to install, open or share something that reaches into it.',
      'The request can take three forms, and the key counts all three as one kind. You can be asked to install a program or an app. You can be asked to open or run a file, such as an attachment. Or you can be asked to let someone watch or control your device from far away, which is {t:screenshare}. The key also counts a warning that says your device has a problem and gives you someone to ring to fix it, because the person you reach will ask for one of the three.',
      'It is a kind of its own because of how far it reaches. Once a program is installed, or someone can watch your device, the risk is no longer one account but everything the device holds. They can read your accounts, copy your passwords as you type them, and stay on the device after the call has ended.',
      'Here again the story does not decide it. Diane’s caller might be a real engineer, and the case would be the same. What decides it is the request: a program to download.'
    ],
    feature: { step: 'D1', option: 'device' },
    name: [
      'The key’s answer, and the name of this kind, is {a:D1.device}. After this answer the key asks a further question that gives a finer name: the name of a kind of scam, or of the real thing that the scams copy.'
    ] },

  { id: 'again-device', kind: 'again', family: 'device',
    link: 'The last card gave you what to point to for {a:D1.device}, from one case: {needs:device}. Here is a second case with a different story. This one is an email, and nobody is on the phone.',
    first: 'g-support-call', second: 'g-attach', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the story (a phone call, an invoice) and ignore the difference between a program and a file. Look at one thing only: which words ask the person to run something on their own computer?',
    prompt: { kind: 'phrase', answer: 'Open the file and click Enable Editing' },
    shared: [
      'Both messages ask the person to run something on their own computer. In the first it is a program from a website, and in the second it is a file in an email. In both, whatever is in the program or the file gets to act on everything the computer holds.',
      'One came as a call and the other as an email, and one is a program and the other a file. None of that is what the question asks. It asks what the request is for, and both requests are for something to be run on the device. That is what {a:D1.device} names.'
    ] },

  { id: 'portrait-device', kind: 'portrait', family: 'device',
    link: 'You know what to point to for {a:D1.device}. This card fills in the rest of the picture, so that you can spot it in real life.',
    typical: [
      'There is a phone or computer of yours, and something is to be put on it, opened on it or shown from it.',
      'The request is for one of three things: install a program or an app; open or run a file; or let someone watch or control your device from far away.',
      'It is often wrapped in a problem: an error, an infection, an update that must be done, a refund to be sorted out, a document you must open to see an invoice.',
      'It can come as a call, a text, an email with a file, or a pop-up that gives you a number to ring. It can also come from nobody in particular: your own phone offers to install an update.',
      'What gets installed or opened can keep working long after the message is gone.'
    ],
    not: [
      'It is not a request for a password or a code on its own. If nothing is to be installed, opened or shared, and you are only asked to type something into a page, that is {a:D1.access}.',
      'It is not always a scam. Updates, work software and a helper at the other end of a phone line are all everyday requests of this kind. The request is the same when it is not fine, and that is why the answer to this question cannot say which it is.'
    ],
    wild: ['"Please download this program so I can fix it from here."', '"Open the attached file and click Enable Editing."', '"Press Share so that I can see your screen."', '"Your computer is infected. Call this number now."', '"An update is ready. Install now?"'],
    self: 'Updates on your phone and your games console, work software that your employer pushes out, a helper on the end of a phone line: these are everyday requests of this kind, and most of them are fine.',
    ask: '"Is anything being put on my phone or computer, opened on it, or shown from it?" If it is, the key’s answer is the one for a request about your device.' },

  { id: 'check-device', kind: 'check', after: 'device',
    case: 'g-console-update',
    ask: { type: 'option', step: 'D1', among: ['nothing', 'access', 'device'] } },

  { id: 'look-device-access', kind: 'lookalike', ledger: 'device~access',
    link: 'You have now met three kinds. The last pair was a notice and a copy of it. This pair is harder, because in both cases a box asks you to allow something, and the two boxes can look much alike.',
    cases: ['g-installer', 'g-allow-mail'],
    instruction: 'Both cases are about Ravi and a photo editor. Compare one thing: what would pressing the button do, put a program on his computer or let an app use his account?',
    prompt: { kind: 'which', option: 'D1.device', answer: 'g-installer' },
    difference: [
      'In Case A Ravi has a program file from the maker’s website, and the box asks him to install it on his computer. The words "allow this app to make changes to your device" are the computer’s way of asking whether he is sure. The request is to put a program on his device. The key’s answer is {a:D1.device}.',
      'In Case B he is using the web version, and the box comes from his email account and asks him to allow an app to read and send his mail. Nothing is put on his computer. The request is for the app to be let into an account. The key’s answer is {a:D1.access}.',
      'Both boxes say "allow", and both name the same app. What they ask is different: one puts something onto the device, and the other opens an account to an app.'
    ] }
]);

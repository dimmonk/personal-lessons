// Scams, Unit One, part two: the word the third kind leans on, the third kind of message (something put on, opened on
// or shown from your phone or computer), and its look-alike pair with the second kind. Field guide: see u1.cards-1.js.

FC.cards('scams', 'u1', [

  { id: 'term-screenshare', kind: 'term', term: 'screenshare',
    h: 'Letting someone watch what you are doing',
    link: 'The next kind of message is about your phone or computer itself, and one thing it can ask for is hard to picture until you have seen it.',
    case: 'g-t-share',
    plain: [
      'Jo’s laptop would not connect to the office printer, so she called the company help desk at the number on her work badge. The helper asked her to open a meeting app and press a button that shares her screen. From then on he could see everything Jo could see, at the same moment, and could move things on it if she let him.',
      'That is how many real help desks work, and it is also a very large thing to hand over. Anyone who can watch your computer can read your email and your bank pages as you open them. It lasts until you stop it.'
    ] },

  { id: 'meet-device', kind: 'meet', family: 'device',
    link: 'The third kind asks for something to do with your phone or computer itself.',
    case: 'g-support-call', mark: 'D1',
    strip: [
      'There is one person, Diane, and one caller who says he is from her internet company.',
      'He says her router is sending out errors, and asks her to download a program from an address he will read out, so that he can fix it from his end.',
      'Nothing is asked of her accounts, her money or facts about her. What is asked is for something to go onto her computer.'
    ],
    explain: [
      'What you are shown is a request to put something on a device: here, a program downloaded on the strength of a phone call. The request can take three forms, and all three are one kind. You can be asked to install a program or an app. You can be asked to open or run a file, such as an attachment. Or you can be asked to let someone watch or control your device from far away, which is {t:screenshare}. A warning that says your device has a problem and gives you someone to call counts too, because the person you reach will ask for one of the three.',
      'It is a kind of its own because of how far it reaches. Once a program is installed, or someone can watch your device, the risk is no longer one account but everything the device holds, and it can last after the call has ended.',
      'Diane’s caller might be a real engineer and the case would be the same. What decides it is the request: a program to download.'
    ],
    feature: { step: 'D1', option: 'device' },
    name: 'The answer is {a:D1.device}.' },

  { id: 'check-device', kind: 'check', after: 'device',
    case: 'g-console-update',
    ask: { type: 'option', step: 'D1', among: ['nothing', 'access', 'device'] } },

  { id: 'look-device-access', kind: 'lookalike', ledger: 'device~access',
    link: 'In both of these, a box asks you to allow something, and the two boxes can look much alike.',
    cases: ['g-installer', 'g-allow-mail'],
    instruction: 'Both cases are about Ravi and a photo editor. Compare one thing: what would pressing the button do, put a program on his computer or let an app use his account?',
    prompt: { kind: 'which', option: 'D1.device', answer: 'g-installer' },
    difference: [
      'In Case A Ravi has a program file from the maker’s website, and the box asks him to install it on his computer. The request is to put a program on his device. The answer is {a:D1.device}.',
      'In Case B he is using the web version, and the box comes from his email account and asks him to allow an app to read and send his mail. Nothing is put on his computer. The request is for the app to be let into an account. The answer is {a:D1.access}.',
      'Both boxes say "allow", and both name the same app. What they ask is different: one puts something onto the device, and the other opens an account to an app.'
    ] }
]);

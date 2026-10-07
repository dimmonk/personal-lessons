// Scams, Unit One, part two: the word the third kind leans on, the third kind of message (something put on, opened on
// or shown from your phone or computer), and its look-alike pair with the second kind. Field guide: see u1.cards-1.js.

FC.cards('scams', 'u1', [

  { id: 'term-screenshare', kind: 'term', term: 'screenshare',
    h: 'Letting someone watch what you are doing',
    link: 'The next answer is about your phone or computer itself. One request there is hard to picture until you have seen it.',
    case: 'g-t-share',
    plain: [
      'Many real help desks work this way, and it is a lot to hand over. From the moment Jo pressed the button, the helper could see everything she saw, including her email and her bank pages whenever she opened them, until she stopped it.'
    ] },

  /* ---------- Third: something on your device ---------- */
  { id: 'meet-device', kind: 'meet', family: 'device',
    link: 'Third: a request about your phone or computer itself.',
    case: 'g-support-call', mark: 'D1',
    explain: [
      'Diane’s caller says her router has a fault, and asks her to download a program from an address he reads out. That is a request about her computer itself. It can come in three ways: to install a program or an app, to open or run a file such as an attachment, or to let someone watch or control your device from far away ({t:screenshare}).',
      'This reaches further than any other answer. Once a program is installed, or someone can watch your screen, the risk is not one account but everything on the device, and it can last after the call ends.'
    ],
    spot: [
      { do: 'Look for a program to install, a file to open or a screen to share: Diane is told to download a repair program.', why: 'Those are the three requests about a device.' },
      { do: 'Look for an offer to fix your device: a man calls Diane about her router.', why: 'The person you reach will ask you to install something or share your screen.' },
      { do: 'Look at what is not asked: no password, no money, no facts about Diane.', why: 'Then what is left is something going onto her computer.' }
    ],
    feature: { step: 'D1', option: 'device' },
    name: 'This is {a:D1.device}. The caller could even be a real engineer, and the answer would be the same.' },

  { id: 'check-device', kind: 'check', after: 'device',
    case: 'g-console-update',
    ask: { type: 'option', step: 'D1', among: ['nothing', 'access', 'device'] } },

  { id: 'look-device-access', kind: 'lookalike', ledger: 'device~access',
    link: 'In both of these, a box asks you to allow something, and the two boxes look alike.',
    cases: ['g-installer', 'g-allow-mail'],
    instruction: 'Both stories are about Ravi and a photo editor. Compare one thing: would pressing the button put a program on his computer, or let an app into his account?',
    prompt: { kind: 'which', option: 'D1.device', answer: 'g-installer' },
    difference: [
      'In Story A, Ravi has the program file from the maker’s website, and the box asks him to install it on his computer. That puts a program on his device. That is {a:D1.device}.',
      'In Story B, he uses the web version, and the box comes from his email account and asks to let an app read and send his mail. Nothing goes onto his computer: an app is let into an account. That is {a:D1.access}.',
      'Both boxes say “allow” and name the same app. One puts something on the device. The other opens an account to an app.'
    ] }
]);

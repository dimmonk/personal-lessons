// Scams, Unit Two, part one (first half): the opening card and the first name, the real installation. This is an ACTION
// subject and a BRANCH unit: the key's first question already gave the answer for everything in this unit (a request about
// your device), and the unit teaches the one question that gives each request its name. Cards are structured data, not HTML.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading of a meet
// card, the key's question and answer on a meet card, the "also called" sentence, the stem of every commit prompt, and the
// heading of an again or portrait card. Key wording is never typed here: tokens are filled in from key.js.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, an action and one short
// sentence of why), then the name, then what to do (act: steps too). Lesson standard section 20.

FC.cards('scams', 'u2', [

  { id: 'orient', kind: 'orient',
    h: 'Before you install, open or share anything, check how it started',
    canDo: 'Before you install something, open a file or press Share, check how the request reached you. It is always one of four things: three scams, and one real thing. You can tell which before you press anything.',
    everyday: [
      'A red page fills your laptop with a siren and a phone number. An email from a firm you have never heard of has a file attached. A caller says you are owed a refund and needs a minute to see your computer. And on an ordinary day, you download a program from its maker’s website.',
      'Three of these are scams. One is fine, and treating it as a scam would stop you installing the updates that keep your device safe. The box that appears and the name of the program tell you nothing. How the request reached you does, and you already know that before you press anything.'
    ],
    map: { branch: 'device' } },

  /* ---------- Real installation ---------- */
  { id: 'meet-realinstall', kind: 'meet', outcome: 'realinstall',
    link: 'Start with the one that is not a scam, so you know what the scams copy.',
    case: 'dv-video-app', mark: 'I1',
    explain: [
      'Priya chose the program herself and typed the maker’s own web address. That is {t:already}: an address that was hers before anyone could message her. Your phone’s app store counts too. Because she started it, nobody was there to hurry her or tell her what to click.'
    ],
    spot: [
      { do: 'Find who started it: Priya did, because her team needed a program.', why: 'Anything you choose to get begins with you wanting it.' },
      { do: 'Find where she went: the maker’s own address, which she typed herself.', why: 'The maker’s website, your app store and your device’s own update menu were yours before any message came.' },
      { do: 'Check that nobody contacted her first: nobody called or messaged her.', why: 'A person who contacts you first is the one steering.' },
      { do: 'Ignore the box asking whether to allow changes.', why: 'It appears for every installation, harmful ones too.' }
    ],
    feature: { step: 'I1', option: 'own' },
    name: 'This is {o:realinstall}. Nothing is wrong here. It has a name so that you do not treat every installation as a threat.',
    act: [
      { do: 'Go ahead.', why: 'You did everything right.' },
      { do: 'For the next update, use the same app store or the same saved address.', why: 'A link in an email or a pop-up is not the same thing.' },
      { do: 'If a call you did not start comes in the middle, stop and ask again: {q:I1}', why: 'Then someone else has started steering.' }
    ] },

  { id: 'check-realinstall', kind: 'check', after: 'realinstall',
    case: 'dv-c-printer',
    ask: { type: 'phrase', step: 'I1', say: 'Which words show how Ed came to the program? Tap them.',
           answer: "He types the printer maker's web address into his browser" } }
]);

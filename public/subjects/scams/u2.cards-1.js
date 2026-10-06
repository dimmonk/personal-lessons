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
    canDo: 'After this unit you can take a request to install something, to open a file, or to let someone see your phone or computer, and say which of four things it is: three scams, and one that is real, software you chose and fetched yourself. You can point to the words that show which one, and say what to do on the spot.',
    everyday: [
      'You have probably met all four. A page fills your laptop with a siren and a phone number. An email with a file attached, from a firm you have never heard of. A caller who says that you are owed a refund and needs a minute to see your computer. And, on an ordinary day, a program that you decided to download from its maker’s website.',
      'Three of the four are scams. One is fine, and treating it as a scam would stop you installing the updates that keep a device safe. What tells them apart is not the box that appears or the name of the program. It is how the request came to you, and you know that before you press anything.'
    ],
    map: { branch: 'device' } },

  /* ---------- Real installation ---------- */
  { id: 'meet-realinstall', kind: 'meet', outcome: 'realinstall',
    link: 'The first of the four is the one that is not a scam. You need to recognize it before you learn what the scams copy.',
    case: 'dv-video-app', mark: 'I1',
    strip: [
      'Priya wants a video-calling program for her team.',
      'She types the maker’s own web address herself, downloads the file and runs it. Her computer shows a box asking whether to allow changes. That box appears for every installation.',
      'Nobody called, messaged or emailed her about it.'
    ],
    explain: [
      'Priya chose the software and went to the maker’s own website, at an address that she typed. That is {t:already}: an address that was hers before any message could reach her. The app store that came with your phone counts the same way. And because Priya started it, nobody had a reason to hurry her or to tell her what to click.',
      'The box asking whether to allow changes tells you nothing either way: it appears for every installation, harmful ones too.'
    ],
    feature: { step: 'I1', option: 'own' },
    name: 'The name for this is {o:realinstall}. Nothing is wrong in a case of this name. It has a name so that every installation does not look like something to fear.',
    act: 'Go ahead. For the next update, use the same app store or the same saved address, not a link in an email or a pop-up. If something changes in the middle, such as a phone call that you did not start, stop and ask again: {q:I1}' },

  { id: 'check-realinstall', kind: 'check', after: 'realinstall',
    case: 'dv-c-printer',
    ask: { type: 'phrase', step: 'I1', say: 'Which words show how Ed came to the program? Tap them.',
           answer: "He types the printer maker's web address into his browser" } }
]);

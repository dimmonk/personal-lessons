// Scams, Unit Two, part two (first half): one word that the third name leans on, the third name (someone offering to fix a
// problem with your device), and the two named exceptions between it and the real installation. The scam is told
// as it really unfolds, step by step, and the cards say which steps you could still refuse. Field guide: see u2.cards-1.js.

FC.cards('scams', 'u2', [

  /* ---------- a word the third name leans on ---------- */
  { id: 'term-searchad', kind: 'term', term: 'searchad',
    h: 'The first result on a search page may be an ad',
    link: 'The next scam depends on one thing that is easy to miss on a search page.',
    case: 'dv-t-searchad',
    plain: [
      'Rosa called the number in the result marked “Ad”. Anyone can pay for that spot, so it was not the company’s number: the company’s own website, lower down, listed a different one.',
      'A scammer can buy the top spot, use the company’s name and put in their own phone number. A number from search results was not yours before you searched, so it is not {t:already}, even though you typed the search yourself.'
    ],
    after: 'From now on, a result marked “Ad” or “Sponsored” does not count. Trust the numbers on your bill, your card or your contract, and addresses you typed or saved before.' },

  /* ---------- Tech-support scam ---------- */
  { id: 'meet-techsupport', kind: 'meet', outcome: 'techsupport',
    link: 'In the first two, nobody was talking to you. In the last two, a person is on the line. This one starts with a warning that gives you someone to call.',
    case: 'dv-popup-alarm', mark: 'I1',
    explain: [
      'The page is only a web page. It knows nothing about Joan’s computer, and the alarm is there to frighten her. It will not close because it was built to look as if it controls the machine. A real warning comes from your device’s own software, in that software’s own window, and does not send you to a stranger’s phone number.',
      'Once she calls, it goes step by step. He has her share her screen ({t:screenshare}), shows her ordinary lists that every computer has as “proof”, and sells her a “protection plan” paid by gift card or wire transfer. Joan could refuse at any step until she lets him in. After that, everything happens on a screen someone else controls.'
    ],
    spot: [
      { do: 'Find the warning: a red page and an alarm saying her computer is infected.', why: 'A web page cannot know anything about your computer.' },
      { do: 'Find who it tells you to call: “Support” at (800) 555-0188.', why: 'A real warning does not send you to a stranger’s number.' },
      { do: 'Notice that the page will not close when she presses the X.', why: 'It is built to look as if it controls the machine.' },
      { do: 'Find what the man on the phone wants: to see her screen.', why: 'That is the way in, and it is what the page was for.' }
    ],
    feature: { step: 'I1', option: 'support' },
    name: 'This is {o:techsupport}. Real technical support exists, and the scam copies it so that you will let someone into your device. The problem was made up.',
    act: [
      { do: 'Do not call the number, and do not press anything on the page.', why: 'Every button is part of the trick.' },
      { do: 'If it will not close, close the browser from your computer’s own menu, or hold the power button.', why: 'Nothing is lost.' },
      { do: 'If you already called and were asked to install something or share your screen, say no and hang up.', why: 'Refusing now costs you nothing.' },
      { do: 'To be sure, use {t:check}: call the company at the number on your bill, never one from a page, a message or a {t:searchad}.', why: 'That number was yours before the page appeared.' }
    ] },

  { id: 'check-techsupport', kind: 'check', after: 'techsupport',
    case: 'dv-c-walt-call',
    ask: { type: 'option', step: 'I1', among: ['own', 'file', 'support'] } },

  /* ---------- the two named exceptions between this name and the real installation ---------- */
  { id: 'exc-searched', kind: 'exception', ledger: 'techsupport~realinstall', looksLike: 'realinstall', is: 'techsupport',
    h: 'When you went looking yourself',
    link: 'Here the person went looking herself, so it feels like {o:realinstall}.',
    case: 'dv-search-broadband',
    setup: 'Ivy typed the company’s name herself and called a number she found herself, with no pop-up and no stranger calling first. Yet this is {o:techsupport}.',
    prompt: { kind: 'phrase', answer: "calls the number at the top of the results, the one with a small 'Ad' label beside it" },
    because: [
      'The number came from a search, not from Ivy’s bill, her contract or the box her router came in. The top spot on a search page can be bought, and the small “Ad” label says someone paid for it. So the number was not hers before she searched, and it is not {t:already}, even though she chose the words. Had she called the number on her bill, the call would have been hers.'
    ],
    take: 'A number or an address from a search page is not one you already had. Use the one on your bill, your contract or your card.' },

  { id: 'exc-helpdesk', kind: 'exception', ledger: 'techsupport~realinstall', looksLike: 'techsupport', is: 'realinstall',
    h: 'When a real helper asks to see your device',
    link: 'Now the opposite: a call that sounds just like {o:techsupport} and is the real thing.',
    case: 'dv-helpdesk-call',
    setup: 'A helper offers to look at a problem and asks Kemal to share his screen. That is what {o:techsupport} sounds like. Yet this is {o:realinstall}.',
    prompt: { kind: 'phrase', answer: "finds the company's number on his last bill and calls it" },
    because: [
      'Kemal made the call, to a number from his own bill that was his before he had any problem. Nobody warned him or called him first. That is {t:already}, and it is what {o:realinstall} needs. Real help desks do ask to see your screen, so being asked is no sign of a scam.'
    ],
    take: 'What the helper asks for does not decide it. Who made the call, and where the number came from, does.' }
]);

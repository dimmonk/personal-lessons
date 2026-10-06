// Scams, Unit Two, part two (first half): one word that the third name leans on, the third name (someone offering to fix a
// problem with your device), and the two named exceptions between it and the real installation. The scam is told
// as it really unfolds, step by step, and the cards say which steps you could still refuse. Field guide: see u2.cards-1.js.

FC.cards('scams', 'u2', [

  /* ---------- a word the third name leans on ---------- */
  { id: 'term-searchad', kind: 'term', term: 'searchad',
    h: 'The first result on a search page may be an ad',
    link: 'The next name leans on a word that is easy to miss on a search page.',
    case: 'dv-t-searchad',
    plain: [
      'Rosa called the number in the result marked “Ad”. Anyone can pay for that place, so it was not the company’s number: the company’s own website, lower down, listed a different one.',
      'A scammer can buy the top place, put the company’s name on it and give their own phone number. A number or an address from the results of a search was not yours before you searched, so it is not {t:already}, even though you typed the search yourself.'
    ],
    after: 'From here on, a result marked “Ad” or “Sponsored” does not count. The numbers you can rely on are the ones on your bill, your card or your contract, and addresses that you typed or saved before.' },

  /* ---------- Tech-support scam ---------- */
  { id: 'meet-techsupport', kind: 'meet', outcome: 'techsupport',
    link: 'In the first two names nobody was talking to you. In the last two a person is on the line. The first begins with a warning that gives you someone to call.',
    case: 'dv-popup-alarm', mark: 'I1',
    strip: [
      'Joan is reading the news on her laptop.',
      'A page fills the window with a loud alarm, says that her computer is infected and tells her to call a number now. The X does not close it. She calls.',
      'A man says that he is a technician. He asks her to open a web page and type in a code, so that he can see her computer.',
      'Nothing was wrong with her computer before the page appeared.'
    ],
    explain: [
      'The page is only a web page: it knows nothing about Joan’s computer, and the alarm is there to frighten her. It will not close because it was built to look as if it controls the machine. A real warning from the software on your device comes in that software’s own window and never tells you to call a stranger.',
      'The scam then runs step by step. She calls. He has her share her screen ({t:screenshare}). He shows her ordinary lists that every computer has, as “proof”. He sells a “protection plan”, paid by gift card or wire transfer, or asks to see her bank. And he can stay on her computer after the call. Joan could refuse at any step up to letting him in, and everything after that happens on a screen that someone else controls. So the answer is there at the start: a page, call, message or ad is offering to repair a problem that you did not know you had.'
    ],
    feature: { step: 'I1', option: 'support' },
    name: 'The name for this is {o:techsupport}. Real technical support exists, and the scam copies it so that you will let someone into your device. The problem was made up.',
    act: [
      'Do not call the number and do not press anything on the page. If it will not close, close the browser from your computer’s own menu, or hold the power button. Nothing is lost.',
      'If you have already called and been asked to install something or to let them see your device, say no and hang up. To be sure, use {t:check}: call the company at the number on your bill, never a number from a page, a message or a {t:searchad}.'
    ] },

  { id: 'check-techsupport', kind: 'check', after: 'techsupport',
    case: 'dv-c-walt-call',
    ask: { type: 'option', step: 'I1', among: ['own', 'file', 'support'] } },

  /* ---------- the two named exceptions between this name and the real installation ---------- */
  { id: 'exc-searched', kind: 'exception', ledger: 'techsupport~realinstall', looksLike: 'realinstall', is: 'techsupport',
    h: 'When you went looking yourself',
    link: 'Here a person went looking herself, so it feels like {o:realinstall}.',
    case: 'dv-search-broadband',
    setup: 'Ivy typed the company’s name herself and called a number that she found for herself, with no pop-up and no stranger calling first. Yet this case is {o:techsupport}.',
    prompt: { kind: 'phrase', answer: "calls the number at the top of the results, the one with a small 'Ad' label beside it" },
    because: [
      'The number did not come from Ivy’s bill, her contract or the box that the router came in. It came from a search, and the top place on a search page can be bought: the small label “Ad” says that someone paid for it. A number from a search was not hers before she searched, so it is not {t:already}, even though she chose the words. If she had called the number on her bill, the call would have been hers.'
    ],
    take: 'A number or an address from a search page does not count as one that you already had. Use the one on your bill, your contract or your card.' },

  { id: 'exc-helpdesk', kind: 'exception', ledger: 'techsupport~realinstall', looksLike: 'techsupport', is: 'realinstall',
    h: 'When a real helper asks to see your device',
    link: 'Here is the opposite: a call that sounds exactly like {o:techsupport} and is the real thing.',
    case: 'dv-helpdesk-call',
    setup: 'A helper offers to look at a problem and asks Kemal to share his device. That is what {o:techsupport} sounds like. Yet this case is {o:realinstall}.',
    prompt: { kind: 'phrase', answer: "finds the company's number on his last bill and calls it" },
    because: [
      'Kemal started the call, at a number from his own bill that was his before he had any problem. Nobody warned him or called him first, and the slow broadband was his own. That is {t:already}, and it is what {o:realinstall} needs. Real help desks do ask to see your device, so being asked is no sign of a scam.'
    ],
    take: 'The question is not what the helper asks for. It is who started the call, and where the number came from.' }
]);

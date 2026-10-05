// Scams, Unit Four, part one (second half): the pig-butchering scam and the pair that it makes with the romance scam.
// Field guide: see u4.cards-1.js.

FC.cards('scams', 'u4', [

  /* ---------- Pig-butchering scam ---------- */
  { id: 'meet-pigbutcher', kind: 'meet', outcome: 'pigbutcher',
    link: 'Daniel and Elena wanted money for trouble of their own. The next name starts in the same way, with someone you have only ever known through messages, but it ends in a different request: to invest, in a platform that your new friend has chosen for you.',
    case: 'm-pig-wrongnumber', mark: 'M2',
    strip: [
      'Lena has never met Kai. He began as a wrong-number text, and they have chatted every day for weeks.',
      'He showed her a trading app and told her to download it.',
      'She put in £200, saw it grow, and took out £100: the app paid out, once.',
      'Now he asks her to put £6,000 into the same app, with a promise that her profits will triple.',
      'The money is to go into the app. Kai does not say that it is for any trouble of his own.'
    ],
    explain: [
      'Follow the money. In Ana’s case it was to go to Daniel’s side, to pay for his daughter’s hospital. Here it is to go into an app, and Kai says nothing about any trouble of his own. He says that the app will make Lena richer.',
      'The key has two questions about money, and this case shows why. Its first question, what the request says the money is for, gives the same answer here as it gave for Ana, because in both the money comes from, or goes through, a person you know only online. What separates the two cases is the second question, the one at the foot of this card: what the request asks you to do with the money.',
      'The app is not a real market. The profits it shows her are numbers that the scam puts on the page, and the £100 that she took out was paid to her on purpose, to prove that it works. A small amount that comes out is the cheapest part of the scam. It makes the large deposit feel safe.',
      'Everything in that sequence can be seen at the moment of the request: the wrong number, the weeks of chat, the app, the small win, and above all the request itself, to put £6,000 into an app that someone she knows only online showed her. What follows, when Lena tries to take her profit out, only shows afterwards, and by then the money has gone. The key does not use it.'
    ],
    feature: { step: 'M2', option: 'site' },
    name: 'The name for this is {o:pigbutcher}. It comes from the way the scam is run: a person is fed with attention and small wins for weeks, like an animal fattened before the end, and then everything is taken. The word is crude, and it is the one you will see in news reports.' },

  { id: 'again-pigbutcher', kind: 'again', outcome: 'pigbutcher',
    link: 'The wrong-number text gave you what to point to: {needs:pigbutcher}. Here it is again with no wrong number and no surveyor: a friend request, and a cryptocurrency platform that a relative runs.',
    first: 'm-pig-wrongnumber', second: 'm-pig-crypto', step: 'M2',
    instruction: 'Find what the two cases share. Ignore the story (a wrong number, a friend request, a surveyor, a jeweller). Look at one thing only: where the money is to go.',
    prompt: { kind: 'phrase', answer: "Open the platform's premium account with £3,000" },
    shared: [
      'In both cases the money is to go into a site or an app that someone else showed the person: Kai’s trading app, Priya’s cryptocurrency platform. In both, a small first deposit seemed to work, and the request is for a much larger one. In both, the person asking has been a voice in messages for weeks and has never been met.',
      'The stories share nothing else, so neither the currency nor the name of the platform matters. Where the money is to go decides it, and that is what {o:pigbutcher} names.'
    ] },

  { id: 'portrait-pigbutcher', kind: 'portrait', outcome: 'pigbutcher',
    link: 'What you point to is the site or the app that someone you have never met showed you. This card fills in the rest of the picture.',
    typical: [
      'It starts like {o:romance}: a text from a stranger who says it was a wrong number, a friend request, a message on a site for professionals, a match on a dating app. The first weeks are friendly conversation, and nothing is asked for.',
      'Then the new friend mentions a trading platform, a cryptocurrency site or a foreign-exchange app. They show screenshots of profits and offer to guide you, often saying that a relative runs it or that it is not open to everyone.',
      'A small deposit goes in and the app shows growth. A small withdrawal works. That is bait: it costs the scammer very little, and it is the best proof they could give you that the app is real.',
      'Larger deposits follow, with pressure to keep up: an offer that ends on Friday, a friend who says your family would only try to stop you.',
      'When you try to take out the large sum, the app asks for a fee, a tax or a deposit first. Paying it unlocks nothing. Another charge follows, and then silence.',
      'Which of this can you see when the request arrives? The friend you have never met, the app they showed you and the request to put money into it are all in front of you on the day. The refused withdrawal only comes afterwards, so the key does not use it.'
    ],
    not: [
      'Not every site that handles investments is this name. A real one is a site you reached yourself, whose firm you can look up on the regulator’s own register, and whose owner did not first make friends with you.',
      'A friend whom you know in person telling you about the fund they use is outside the key. The name needs both parts: someone you know only through messages, and a site or an app that they showed you.'
    ],
    wild: ['"Sorry, wrong number. But you sound nice."', '"My uncle runs the platform. I can get you in."', '"You can withdraw any time. I did it last week."', '"Do not tell your family. They would only try to stop you."', '"The offer closes on Friday."'],
    self: 'It arrives by text from a number you do not know, as a friend request, as a message on a site for professionals or after a match on a dating app. It is often reported in the news as a “crypto” scam.',
    ask: '"Did someone I have never met show me where to put this money?"',
    act: [
      'Put nothing into any site or app that someone you know only online showed you, however well it seems to be working.',
      'Look the firm up yourself. Type in the address of your country’s financial regulator, or use a bookmark you made before, and search its register for the firm’s name. If it is not there, or you are only told that it is registered, do not go on.',
      'A small withdrawal that worked proves nothing. It is how this scam is run.',
      'Talk to someone who knows you in person before you move any money. If you have been asked to keep it secret, that is the answer.',
      'If you have already deposited money, do not pay a fee or a tax to take it out. Ring your bank on the number on your card.'
    ] },

  { id: 'check-pigbutcher', kind: 'check', after: 'pigbutcher',
    case: 'm-pig-check',
    ask: { type: 'phrase', step: 'M2', say: 'Which words tell Dev where the money is to go? Tap them.', answer: 'Move your savings into it this week' } },

  { id: 'look-pigbutcher-romance', kind: 'lookalike', ledger: 'pigbutcher~romance',
    link: 'You have met both names. They are easy to mix up: in both, someone you have never met asks for a large sum, and the same person often does one after the other. This card puts them side by side.',
    cases: ['m-theo-app', 'm-theo-surgery'],
    instruction: 'Both cases are about Mara and Theo, and in both he asks for £3,000. Compare one thing: where the money is to go.',
    prompt: { kind: 'which', option: 'M2.site', answer: 'm-theo-app' },
    difference: [
      'In Case A the £3,000 is to go into a trading app that Theo showed her. It is not for any trouble of his. The key’s answer is {a:M2.site}, and the case is {o:pigbutcher}.',
      'In Case B the £3,000 is to pay for something of Theo’s own: his sister’s operation. It goes into an account to pay for his trouble, and nothing is invested. The money is for trouble that he says is his, and the case is {o:romance}.',
      'The amount, the man and the months of messages are the same in both. What differs is what the money is for.'
    ] }
]);

// Scams, Unit Four, first half of the names: the opening card, someone you know only online, and money that is waiting or lost.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints the preview map, the heading of a meet
// card, what to point to, the "also called" sentence and the stem of every commit prompt, so this file does not contain them.

FC.cards('scams', 'u4', [

  { id: 'orient', kind: 'orient',
    h: 'Money: what is the request for, and what does it ask you to do with it?',
    canDo: 'After this unit you can take a request for money, however it reaches you, and say which of nine things it is: eight kinds of scam, and the real request that they copy. You will be able to point to the words that show it, and to say what to do next, before any money leaves your account.',
    everyday: [
      'You already meet these. A text says that a package is waiting and a small fee must be paid. Your builder emails an invoice. Someone you have only ever met online is in trouble. A caller says that you owe tax. A buyer for your old bike pays you too much. Every one of them asks for money, and every one of them can be real or can be a copy.',
      'This unit starts from {a:D1.money}, because money sent by wire transfer, in cash, in gift cards or in crypto is usually very hard to get back. There are two questions here: what the request says the money is for, and what it asks you to do with it.',
      'One of the nine names is not a scam. The real request to pay has a name of its own, because real requests come with the same reasons as the copies: a bill, a fine, a deal. A person who suspects every request soon stops checking any of them.'
    ],
    add: 'What makes a request real is not how it looks. It is whether it holds up when you contact the person or the company yourself, through {t:already}. That is what {t:check} means.',
    map: { branch: 'money' } },

  /* ---------- Romance scam ---------- */
  { id: 'meet-romance', kind: 'meet', outcome: 'romance',
    link: 'Nine names, and the first is the slowest of all: money asked for by someone you have never met.',
    case: 'm-romance-engineer', mark: 'M1',
    strip: [
      'Ana has never met Daniel. She knows him only through a dating site, where he has written to her every day for eight months.',
      'His daughter is in a hospital abroad and will not be treated until $4,200 is paid. He asks Ana to send it today, into an account.'
    ],
    explain: [
      'It did not arrive as a bill, a prize or a threat. It arrived from a person, after eight months in which he asked for nothing. That is the method, and it takes time on purpose: the scammer is warm and attentive every day, there is always a reason why the video call does not work, and then comes an emergency that is far away, urgent, and something only Ana can fix.',
      'What Ana could point to on the day: Daniel is someone she knows only through messages, and the money is for trouble that he says is his own.'
    ],
    feature: { step: 'M1', option: 'online' },
    name: 'The name for this is {o:romance}. The relationship is the tool: the money is asked for in the name of a partner who has become real to the person who pays.',
    act: [
      'Send nothing today, however urgent it sounds.',
      'Ask for a live video call that they start now. If it fails again, or there is a new reason why not, that is your answer.',
      'Tell someone who knows you in person. If you were told to keep it secret, that is the answer too.'
    ] },

  { id: 'check-romance', kind: 'check', after: 'romance',
    case: 'm-romance-check',
    ask: { type: 'phrase', step: 'M1', say: 'Which words say what Craig is being asked to pay for? Tap them.',
           answer: 'My phone and wallet were taken in Lisbon, and my bank has blocked my card' } },

  /* ---------- Pig-butchering scam ---------- */
  { id: 'meet-pigbutcher', kind: 'meet', outcome: 'pigbutcher',
    link: 'The next name starts the same way, with someone you know only through messages, but it ends in a different request: to invest.',
    case: 'm-pig-wrongnumber', mark: 'M2',
    strip: [
      'Lena has never met Kai. He began as a wrong-number text, and they have chatted every day for weeks.',
      'He showed her a trading app. She put in $200, saw it grow, and took out $100: the app paid out, once.',
      'Now he asks her to put $6,000 into the same app, with a promise that her profits will triple.'
    ],
    explain: [
      'In Ana’s case the money went to Daniel, for his trouble. Here it goes into an app that Kai showed her, and he says nothing about trouble of his own. Both start with someone known only online, so the first question gives the same answer. The second question, what the request asks you to do with the money, tells them apart.',
      'The app is not a real market. The profits are numbers that the scam puts on the page, and the $100 she took out was paid on purpose, to prove that it works. A small amount that comes out makes the large deposit feel safe. Later, when she tries to take her profit out, the app will ask for a fee or a tax first. That is still this name.'
    ],
    feature: { step: 'M2', option: 'site' },
    name: 'The name for this is {o:pigbutcher}. A person is fed with attention and small wins for weeks, like an animal fattened before the end. The word is crude, and it is the one you will see in news reports.',
    act: [
      'Put nothing into any site or app that someone you know only online showed you, however well it seems to be working.',
      'Look the firm up yourself: type in the address of a regulator, such as FINRA BrokerCheck (brokercheck.finra.org), and search its register for the firm’s name. If it is not there, stop.',
      'Never pay a fee or a tax to take money out. Call your bank at the number on your card.'
    ] },

  { id: 'check-pigbutcher', kind: 'check', after: 'pigbutcher',
    case: 'm-pig-check',
    ask: { type: 'phrase', step: 'M2', say: 'Which words tell Dev where the money is to go? Tap them.', answer: 'Move your savings into it this week' } },

  { id: 'look-pigbutcher-romance', kind: 'lookalike', ledger: 'pigbutcher~romance',
    link: 'These two are easy to mix up: in both, someone you have never met asks for a large sum.',
    cases: ['m-theo-app', 'm-theo-surgery'],
    instruction: 'Both cases are about Mara and Theo, and in both he asks for $3,000. Compare one thing: where the money is to go.',
    prompt: { kind: 'which', option: 'M2.site', answer: 'm-theo-app' },
    difference: [
      'In Case A the $3,000 is to go into a trading app that Theo showed her, and nothing is said about any trouble of his. The answer is {a:M2.site}, and the case is {o:pigbutcher}.',
      'In Case B the $3,000 is to pay for his sister’s operation. The money is for trouble that he says is his, and the case is {o:romance}.'
    ] },

  /* ---------- Advance-fee scam ---------- */
  { id: 'meet-advancefee', kind: 'meet', outcome: 'advancefee',
    link: 'A different reason to pay: money that is said to be waiting for you.',
    case: 'm-adv-lottery', mark: 'M1',
    strip: [
      'Marta has never entered a competition. The email says that her address was drawn, and that she has won $250,000.',
      'Before any of it reaches her, she must pay $340 by wire transfer, to an account that the email gives.'
    ],
    explain: [
      'Two things are in this email, and they need each other: money that is said to be waiting, and a payment that she must make before any of it reaches her. The prize is made up, so the $340 is the only real money in the story, and it goes to the scammer. They call it insurance, handling, a tax or a release code. What never changes is that you pay before you receive.',
      'It does not have to be a prize: a grant, a loan, an inheritance or a refund can be the bait. A person who pays once is usually told that something else has come up, and asked for a second fee, then a third.'
    ],
    feature: { step: 'M1', option: 'prize' },
    name: 'The name for this is {o:advancefee}. “Advance” means ahead of time: the fee is paid before the money arrives, and the money never does.',
    act: [
      'Pay nothing. A real prize, grant or inheritance does not need you to pay a stranger first, and you cannot win a drawing that you did not enter.',
      'To find out whether you are really owed something, contact the organization yourself, at a number or in an app that you already had, not through the message.',
      'Do not reply. A reply tells the sender that a person reads this address.'
    ] },

  { id: 'check-advancefee', kind: 'check', after: 'advancefee',
    case: 'm-adv-check',
    ask: { type: 'option', step: 'M1', among: ['online', 'prize'] } },

  /* ---------- Recovery scam ---------- */
  { id: 'meet-recovery', kind: 'meet', outcome: 'recovery',
    link: 'The last name was money that you were never owed. The next is money that you did have, and lost.',
    case: 'm-rec-trading', mark: 'M1',
    strip: [
      'Malik lost $3,000 to a fake trading website in March, and told nobody.',
      'An email now offers to get that money back: “We have traced the money you lost”. There is a fee of $450, to be paid first by wire transfer.'
    ],
    explain: [
      'This is money Malik really had and really lost, and a person who has been robbed wants it back more than almost anything. How does the sender know? Often the people who took the first payment keep a list of those who paid, or sell it, or come back themselves. Someone who has paid once is the best target there is.',
      'Real help with a loss exists: your bank, the police, a regulated attorney. They do not contact you first with a guarantee, and they do not ask for a fee by transfer to a personal account before they start.'
    ],
    feature: { step: 'M1', option: 'lost' },
    name: 'The name for this is {o:recovery}. “Recovery” means getting something back, and the scam is a fee for a recovery that does not happen.',
    act: [
      'Pay nothing and do not reply. Anyone who contacts you first about your loss is a warning in itself.',
      'Report the loss to your bank at the number on your card, and to the FTC at ReportFraud.ftc.gov. They are the real places to get help, and they do not charge you or contact you first.',
      'If you went looking for help and found a firm through a search, remember that the top result may be an ad. Anyone can buy that place.'
    ] },

  { id: 'check-recovery', kind: 'check', after: 'recovery',
    case: 'm-rec-check',
    ask: { type: 'option', step: 'M1', among: ['online', 'prize', 'lost'] } },

  { id: 'look-advancefee-recovery', kind: 'lookalike', ledger: 'advancefee~recovery',
    link: 'Both end with a fee in advance. Here they are with the same man and the same sum.',
    cases: ['m-imran-owed', 'm-imran-lost'],
    instruction: 'Both cases are about Imran, $6,000 and a $150 release fee. Compare one thing: where the money comes from that is said to be waiting.',
    prompt: { kind: 'which', option: 'M1.lost', answer: 'm-imran-lost' },
    difference: [
      'In Case A the $6,000 is compensation that Imran never claimed. It was never his. The answer is {a:M1.prize}, and the case is {o:advancefee}.',
      'In Case B the $6,000 is money that Imran really had and lost, to a fake insurance broker, and the email says that it has been recovered. The answer is {a:M1.lost}, and the case is {o:recovery}.'
    ] }
]);

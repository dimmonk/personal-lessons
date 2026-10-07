// Scams, Unit Four, first half of the names: the opening card, someone you know only online, and money that is waiting or lost.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js. The app prints the preview map, the heading of a meet
// card, what to look for, the "also called" sentence and the stem of every commit prompt, so this file does not contain them.
// A meet card: the story first, then the idea (explain), then how to spot it (spot: numbered steps, an action with its example
// built in and one short sentence of why), then the name, then what to do (act: steps) (lesson standard section 20).

FC.cards('scams', 'u4', [

  { id: 'orient', kind: 'orient',
    h: 'Before you pay, find out which of nine requests this is',
    canDo: 'Before you hand money to anyone, you can tell which of nine things the request is: eight scams, or the one real request that they copy. Then you know what to do on the spot, before any money leaves your account.',
    everyday: [
      'A text says a package is waiting and you owe $2.99. Your builder emails a bill with a new bank account. A man you only know online needs money for his daughter in the hospital. A caller says you owe tax. A buyer for your old bike pays you too much. Every one asks for money, and every one could be real or fake.',
      'Money sent by wire transfer, in cash, in gift cards or in crypto is very hard to get back, so the time to be careful is before you send it. Two questions do the work: what does the request say the money is for, and what does it ask you to do with it?',
      'One of the nine is not a scam. A real bill, fine or deal has a name too, because someone who suspects every request soon stops checking any of them.'
    ],
    add: 'Looking real does not make a request real, and looking odd does not make it fake. The test that works on every one is {t:check}: contact the person or company yourself, through {t:already}.',
    map: { branch: 'money' } },

  /* ---------- Romance scam ---------- */
  { id: 'meet-romance', kind: 'meet', outcome: 'romance',
    link: 'First, the slowest scam of all: money asked for by someone you have never met.',
    case: 'm-romance-engineer', mark: 'M1',
    explain: [
      'Ana has never met Daniel. For eight months he wrote to her every day and asked for nothing. Then came an emergency, far away and urgent, that only she could fix. The warm months are the method, and they take time on purpose.',
      'Notice what never happens: every time Ana asks for a video call, the connection fails or he has to go.'
    ],
    spot: [
      { do: 'Check how you know them: Daniel is a name on a dating site, and Ana has never seen him on a live call.', why: 'Someone you only know through messages could be anyone.' },
      { do: 'Find what the money is for: his daughter’s hospital bill.', why: 'In this scam the emergency is always theirs, never yours.' },
      { do: 'Notice the hurry: “send it today”.', why: 'A hurry stops you from thinking and from asking anyone.' }
    ],
    feature: { step: 'M1', option: 'online' },
    name: 'The name for this is {o:romance}. The relationship is the tool: the money is asked for in the name of a partner who feels real.',
    act: [
      { do: 'Send nothing today, however urgent it sounds.', why: 'A scammer needs you to act before you think.' },
      { do: 'Ask for a live video call that they start now.', why: 'A real partner can do it in a minute, and a scammer always has a new excuse.' },
      { do: 'Tell someone who knows you in person.', why: 'If you were told to keep it secret, that is your answer too.' }
    ] },

  { id: 'check-romance', kind: 'check', after: 'romance',
    case: 'm-romance-check',
    ask: { type: 'phrase', step: 'M1', say: 'Which words say what Craig is being asked to pay for? Tap them.',
           answer: 'My phone and wallet were taken in Lisbon, and my bank has blocked my card' } },

  /* ---------- Pig-butchering scam ---------- */
  { id: 'meet-pigbutcher', kind: 'meet', outcome: 'pigbutcher',
    link: 'The next scam starts the same way, with someone you only know online, but the money goes into an app.',
    case: 'm-pig-wrongnumber', mark: 'M2',
    explain: [
      'Kai began as a wrong-number text, and he and Lena have chatted every day for weeks. He showed her a trading app. She put in $200, watched it grow and took out $100. That payout was real, and it was on purpose: a small amount that comes out makes the big deposit feel safe.',
      'The app is not a real market. The profits are just numbers the scammer puts on the page. When Lena tries to take her profit out, it will ask for a fee or a tax first, and that is still this scam.'
    ],
    spot: [
      { do: 'Check how you know them: Kai is a stranger who texted a wrong number.', why: 'Someone you only know online is where both of these scams begin.' },
      { do: 'Find where the money is to go: “Put in $6,000” into the app Kai showed her.', why: 'Here the money goes into a site, not to the person.' },
      { do: 'Look at the proof: she took out $100 and it worked.', why: 'A small payout is bait, so the big deposit feels safe.' }
    ],
    feature: { step: 'M2', option: 'site' },
    name: 'The name for this is {o:pigbutcher}. You are fed with attention and small wins, like an animal before the end, and the word is the one the news uses.',
    act: [
      { do: 'Put nothing into any site or app that someone you only know online showed you.', why: 'It can look as if it works, because it is built to.' },
      { do: 'Look the firm up yourself in a regulator’s register, such as FINRA BrokerCheck (brokercheck.finra.org).', why: 'A firm that is not listed is a reason to stop.' },
      { do: 'Never pay a fee or a tax to take money out.', why: 'That fee is the scammer’s next move.' },
      { do: 'If you have already paid, call your bank at the number on your card.', why: 'Some transfers can be recalled in the first hours.' }
    ] },

  { id: 'check-pigbutcher', kind: 'check', after: 'pigbutcher',
    case: 'm-pig-check',
    ask: { type: 'phrase', step: 'M2', say: 'Which words tell Dev where the money is to go? Tap them.', answer: 'Move your savings into it this week' } },

  { id: 'look-pigbutcher-romance', kind: 'lookalike', ledger: 'pigbutcher~romance',
    link: 'Both ask someone you have never met for a large sum, and here the same man asks in two ways.',
    cases: ['m-theo-app', 'm-theo-surgery'],
    instruction: 'Both stories are about Mara and Theo, and in both he asks for $3,000. Compare one thing: where the money is to go.',
    prompt: { kind: 'which', option: 'M2.site', answer: 'm-theo-app' },
    difference: [
      'In Story A the $3,000 goes into a trading app that Theo showed her, and he mentions no trouble of his own. That is {a:M2.site}, so the name is {o:pigbutcher}.',
      'In Story B the $3,000 pays for his sister’s operation. That is trouble he says is his, so the name is {o:romance}.',
      'Where the money goes decides it, not how warm Theo sounds.'
    ] },

  /* ---------- Advance-fee scam ---------- */
  { id: 'meet-advancefee', kind: 'meet', outcome: 'advancefee',
    link: 'A different reason to pay: money that is said to be waiting for you.',
    case: 'm-adv-lottery', mark: 'M1',
    explain: [
      'Marta never entered a competition, yet the email says she won $250,000. The prize is made up. The only real money in the story is the $340 she is told to pay first, and it goes to the scammer.',
      'It does not have to be a prize: a grant, a loan, an inheritance or a refund can be the bait. The fee may be called insurance, handling, tax or a release code. If you pay once, you are usually told something else has come up, and asked for a second fee.'
    ],
    spot: [
      { do: 'Ask whether you entered or applied: Marta never entered a drawing.', why: 'Nobody gives away money to people who never asked for it.' },
      { do: 'Find the money said to be waiting: $250,000.', why: 'Big, easy money is the bait.' },
      { do: 'Find the fee you must pay first: $340 by wire transfer.', why: 'Paying before you receive is the whole scam.' }
    ],
    feature: { step: 'M1', option: 'prize' },
    name: 'The name for this is {o:advancefee}. “Advance” means ahead of time: you pay first, and the money never comes.',
    act: [
      { do: 'Pay nothing.', why: 'A real prize, grant or inheritance never needs a fee paid to a stranger first.' },
      { do: 'To find out whether you are really owed something, contact the organization yourself, through {t:already}.', why: 'A number or link in the message leads to the scammer.' },
      { do: 'Do not reply.', why: 'A reply tells the sender a real person reads this address.' }
    ] },

  { id: 'check-advancefee', kind: 'check', after: 'advancefee',
    case: 'm-adv-check',
    ask: { type: 'option', step: 'M1', among: ['online', 'prize'] } },

  /* ---------- Recovery scam ---------- */
  { id: 'meet-recovery', kind: 'meet', outcome: 'recovery',
    link: 'The last scam offered money you were never owed. This one offers money you had, and lost.',
    case: 'm-rec-trading', mark: 'M1',
    explain: [
      'Malik lost $3,000 to a fake trading website and told nobody. Now an email says it has traced his money and will get it back for a $450 fee. Someone who has been robbed wants the money back more than almost anything, and the sender knows it. Often the people who took the first payment keep a list of everyone who paid, or sell it.',
      'Real help exists: your bank, the police, a licensed attorney. They do not contact you first, they do not promise a result, and they do not ask you to pay by transfer to a personal account before they start.'
    ],
    spot: [
      { do: 'Check that you lost the money: Malik lost $3,000 in March.', why: 'The offer only works on people who were robbed.' },
      { do: 'Notice who made contact: the email came to him.', why: 'Real help does not chase you.' },
      { do: 'Find the fee that comes first: $450 by wire transfer.', why: 'A fee up front, for a result nobody can promise, is the whole scam.' }
    ],
    feature: { step: 'M1', option: 'lost' },
    name: 'The name for this is {o:recovery}. “Recovery” means getting something back; here the fee is real, and the recovery is not.',
    act: [
      { do: 'Pay nothing, and do not reply.', why: 'Anyone who contacts you first about your loss is a warning in itself.' },
      { do: 'Report the loss to your bank at the number on your card, and to the FTC at ReportFraud.ftc.gov.', why: 'They are the real places to get help, and they do not charge you.' },
      { do: 'If you looked for help through a search, do not trust the top result.', why: 'It may be a paid ad, and a scammer can buy that place.' }
    ] },

  { id: 'check-recovery', kind: 'check', after: 'recovery',
    case: 'm-rec-check',
    ask: { type: 'option', step: 'M1', among: ['online', 'prize', 'lost'] } },

  { id: 'look-advancefee-recovery', kind: 'lookalike', ledger: 'advancefee~recovery',
    link: 'Both end with a fee paid in advance, and here they come with the same man and the same sum.',
    cases: ['m-imran-owed', 'm-imran-lost'],
    instruction: 'Both stories are about Imran, $6,000 and a $150 release fee. Compare one thing: where the money that is said to be waiting comes from.',
    prompt: { kind: 'which', option: 'M1.lost', answer: 'm-imran-lost' },
    difference: [
      'In Story A the $6,000 is compensation that Imran never claimed. It was never his, so that is {a:M1.prize} and the name is {o:advancefee}.',
      'In Story B the $6,000 is money Imran really had and lost to a fake insurance broker, and the email says it has been found. That is {a:M1.lost}, so the name is {o:recovery}.',
      'Ask where the money came from: out of nowhere, or your own money that was taken.'
    ] }
]);

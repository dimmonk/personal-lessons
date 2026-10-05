// Scams, Unit Four, part two: the two names about money that is waiting for you or was lost, the look-alike pair they make, and
// the two exceptions that belong to part two. Field guide: see u4.cards-1.js.

FC.cards('scams', 'u4', [

  /* ---------- Advance-fee scam ---------- */
  { id: 'meet-advancefee', kind: 'meet', outcome: 'advancefee',
    link: 'Part one was about people you know only online. Part two is about a different reason to pay: money that is said to be waiting for you.',
    case: 'm-adv-lottery', mark: 'M1',
    strip: [
      'Marta has never entered a competition. The email says that her address was drawn, and that she has won £250,000.',
      'The money is said to be waiting for her.',
      'Before any of it reaches her, she must pay £340 by bank transfer, to an account that the email gives.',
      'The fee is called insurance and handling, and the prize is promised within 24 hours of the fee arriving.'
    ],
    explain: [
      'Two things are in this email, and they need each other. The first is money that is said to be waiting for Marta. The second is a payment that she must make before any of it reaches her. Without the first she would not pay, and without the second there would be nothing for the scam to take.',
      'The prize is made up. Marta never entered a draw, so there is nothing to collect, and the £340 is the only real money in the story. It goes to the scammer. They call it insurance, handling, a tax, a courier charge or a release code, and the name changes from one email to the next. What never changes is that you are asked to pay before you receive.',
      'Why would anyone pay? Because the fee is small beside the prize, and because the email makes the payment feel like one step in a process and not a risk. A person who pays once is usually told that something else has come up, and asked for a second fee, and then a third.'
    ],
    feature: { step: 'M1', option: 'prize' },
    name: 'The name for this is {o:advancefee}. “Advance” means ahead of time: the fee is paid in advance, before the money arrives, and the money never does.' },

  { id: 'again-advancefee', kind: 'again', outcome: 'advancefee',
    link: 'The first case gave you what to point to: {needs:advancefee}. Here it is again with no prize draw: a loan that was approved after a single form.',
    first: 'm-adv-lottery', second: 'm-adv-loan', step: 'M1',
    instruction: 'Find what the two cases share. Ignore the story (a prize draw, a loan). Look at one thing only: what is said to be waiting for the person.',
    prompt: { kind: 'phrase', answer: 'Congratulations, your loan of £5,000 is approved' },
    shared: [
      'In both cases money is said to be waiting for the person: a prize of £250,000, a loan of £5,000. In both it does not reach them until they have paid a fee, called a handling fee or an insurance deposit. And in both the fee is small beside what is promised, and is to go by bank transfer to an account that the sender gives.',
      'One of the two people had applied for something and the other had entered nothing, and that makes no difference. A loan, a grant, a refund, a payout, an inheritance: whatever is said to be waiting, the same thing is asked, and that is what {o:advancefee} names.'
    ] },

  { id: 'portrait-advancefee', kind: 'portrait', outcome: 'advancefee',
    link: 'What you point to is money that is said to be waiting, and a fee that comes first. This card fills in the rest of the picture.',
    typical: [
      'It starts with good news from someone you have not dealt with: you have won a draw that you never entered, a relative you never knew has left you money, you have been selected for a grant, your loan is approved, a refund is waiting.',
      'It reaches you by email, text, letter, social media or phone. The paperwork can look official: logos, reference numbers, a signature, a certificate.',
      'There is always a payment to make first: insurance, a handling fee, a tax, a courier or customs charge, a legal fee, a release code. It is asked for by bank transfer, vouchers or crypto, to an account that the sender gives.',
      'After you pay, there is another fee under another name: a problem at customs, a tax that has just been found. It goes on for as long as you pay.',
      'It works because the fee is small beside the prize, and because after the first payment stopping feels like throwing it away.',
      'Which of this can you see when the request arrives? The money that is said to be waiting and the fee that comes first are both in the message. The second fee, and the third, only come after you have paid.'
    ],
    not: [
      'A fee for a real service that you arranged is not this name: a solicitor’s fee for a sale that you started, or a lender’s charge on an agreement that you signed. A real lender takes its charges from the loan, or sets them in an agreement that you have in your hands.',
      'This name needs money that you are told is waiting for you, and a payment that you must make first, to someone who contacted you.'
    ],
    wild: ['"You have won £250,000 in a draw of email addresses."', '"A relative you never knew has left you a large inheritance."', '"Your loan is approved. Pay the insurance deposit to release it."', '"You have been selected for a grant."'],
    self: 'It reaches you in your inbox and your junk folder, by text, in a letter and on social media. It can find people at a hard moment: behind with bills, looking for a loan, or looking for work.',
    ask: '"Am I being asked to pay before money that is said to be mine reaches me, and did I enter, apply for or arrange it?"',
    act: [
      'Pay nothing. A real prize, grant or inheritance does not need you to pay a stranger first, and you cannot win a draw that you did not enter.',
      'If you did apply for a loan, look at the lender’s own agreement and the number on it. A real lender takes its charges from the loan or from your repayments, and does not ask for vouchers or a transfer to a personal account before it pays.',
      'If you want to know whether you are really owed something, contact the organisation yourself, on a number or in an app that you already had, and not through the message.',
      'Do not reply. A reply tells the sender that a person reads this address.',
      'Ask yourself who you would be paying, and how you would find them again afterwards.'
    ] },

  { id: 'check-advancefee', kind: 'check', after: 'advancefee',
    case: 'm-adv-check',
    ask: { type: 'option', step: 'M1', among: ['online', 'prize'] } },

  /* ---------- Recovery scam ---------- */
  { id: 'meet-recovery', kind: 'meet', outcome: 'recovery',
    link: 'The last name was about money that you were never owed. The next is about money that you did have, and lost.',
    case: 'm-rec-trading', mark: 'M1',
    strip: [
      'Malik lost £3,000 to a fake trading website in March.',
      'An email now offers to get that money back: “We have traced the money you lost”.',
      'Malik told nobody about the loss, so only the people who took the money should know about it.',
      'There is a fee of £450, to be paid in advance by bank transfer.'
    ],
    explain: [
      'What is different from the last name is where the money comes from. This is not money that Malik was never owed. It is money he really had and really lost. A person who has been robbed wants it back more than almost anything, and that is the opening.',
      'How does the sender know? Often because the people who took the first payment keep a list of those who paid, or sell it to others. Sometimes they are the same people, coming back to the same person a second time. Someone who has paid once has shown that they will pay, so they are the best target there is.',
      'The email promises a result: the money traced, a lawyer or a regulator on the case, “no recovery, no fee”. And it asks for a fee in advance, called a retainer, a release fee or an administration charge. If Malik pays it, nothing is recovered.',
      'Real help with a loss exists: your bank, the police, and a regulated solicitor. They do not contact you first with a guarantee, and they do not ask for a fee by transfer to a personal account before they start.'
    ],
    feature: { step: 'M1', option: 'lost' },
    name: 'The name for this is {o:recovery}. “Recovery” means getting something back, and the scam is a fee for a recovery that does not happen.' },

  { id: 'again-recovery', kind: 'again', outcome: 'recovery',
    link: 'Malik’s email gave you what to point to: {needs:recovery}. Here it is again after a different loss, and with a different way in: this time the person found the firm herself.',
    first: 'm-rec-trading', second: 'm-rec-tickets', step: 'M1',
    instruction: 'Find what the two cases share. Ignore the story (a trading website, concert tickets) and how the firm was found. Look at one thing only: what the firm says it can do about the money that was lost.',
    prompt: { kind: 'phrase', answer: 'could get her money back' },
    shared: [
      'In both cases the person has already lost money, and then someone says that they can get it back. Malik was contacted by email, and Grace went looking and rang the top advert. In both, the firm talks about tracing, courts and a result, and asks for a fee in advance: £450, £600.',
      'It makes no difference whether the firm found the person or the person found the firm. What matters is the offer to get back money that was lost, and the fee that comes first. That is what {o:recovery} names.'
    ] },

  { id: 'portrait-recovery', kind: 'portrait', outcome: 'recovery',
    link: 'What you point to is a loss, an offer to get the money back, and a fee that comes first. This card fills in the rest of the picture.',
    typical: [
      'It comes after a loss. A first scam took the money, and this one arrives weeks or months later, by email, text or social media message, or as a firm that you found yourself.',
      'Where do they find you? Often from a list. People who have lost money to a scam are on lists that are sold between criminals, and the people who took the first payment sometimes come back themselves.',
      'The pitch is a result: your money has been traced, a court order is on its way, they work with the regulator, they are lawyers, they have special tools for tracing crypto. It is often “no recovery, no fee”.',
      'A fee comes first: a retainer, a release fee, an administration charge, a tax. It is asked for by bank transfer or in crypto.',
      'After you pay there is another reason for another fee, and then silence. Some people are contacted again by a third firm.',
      'Which of this can you see on the day? The loss, the offer to get the money back and the fee that comes first are all in the message. What follows only shows afterwards.'
    ],
    not: [
      'Help with a loss that you looked for in the right place is not this name: your bank, the police, or a regulated solicitor who agrees fees with you in writing.',
      'This name needs a fee in advance for a recovery that someone offers you, or that you found through an advert.'
    ],
    wild: ['"We have traced the money you lost."', '"No recovery, no fee."', '"We work with the regulator and the courts."', '"A small release fee will unlock your funds."'],
    self: 'It is the scam that follows another scam, so it can reach people at a low point: a month after the loss, or a year. It can also reach people who have told nobody, which is part of why it works.',
    ask: '"Did someone offer to get back money that I lost, and do they want a fee before they begin?"',
    act: [
      'Pay nothing, and do not reply. Anyone who contacts you first about your loss is a warning in itself.',
      'Report the loss to your bank on the number on your card, and to the police or to your country’s fraud-reporting service. They are the real places to get help, and they do not charge you or contact you first with an offer.',
      'If you went looking for help and found a firm through a search, remember that the top result may be an advert. Anyone can buy that place.',
      'Tell someone you trust. Being embarrassed is what this scam relies on.',
      'If you have already paid, tell your bank at once, and expect to be contacted again.'
    ] },

  { id: 'check-recovery', kind: 'check', after: 'recovery',
    case: 'm-rec-check',
    ask: { type: 'option', step: 'M1', among: ['online', 'prize', 'lost'] } },

  { id: 'look-advancefee-recovery', kind: 'lookalike', ledger: 'advancefee~recovery',
    link: 'You have met both names, and both end with a fee in advance. This card puts them side by side, with the same man and the same sum.',
    cases: ['m-imran-owed', 'm-imran-lost'],
    instruction: 'Both cases are about Imran, £6,000 and a £150 release fee. Compare one thing: where the money comes from that is said to be waiting.',
    prompt: { kind: 'which', option: 'M1.lost', answer: 'm-imran-lost' },
    difference: [
      'In Case A the £6,000 is compensation that Imran never claimed. It was never his, and nothing was ever taken from him. The key’s answer is {a:M1.prize}, and the case is {o:advancefee}.',
      'In Case B the £6,000 is money that Imran really had and really lost, to a fake insurance broker. The email says that it has been recovered. The key’s answer is {a:M1.lost}, and the case is {o:recovery}.',
      'The fee, the sum and the man are the same. What differs is where the waiting money comes from: money that was never his, or money that was taken from him.'
    ] },

  { id: 'exc-recovery-prize', kind: 'exception', ledger: 'advancefee~recovery', looksLike: 'advancefee', is: 'recovery',
    h: 'A refund that is held for you, and was lost',
    link: 'The pair you have just seen was tidy: one email about money that was never owed, one about money that was lost. Real messages are not always so tidy. Here is one that sounds like both.',
    case: 'm-exc-refundheld',
    setup: 'The text says that a refund is being held for Frances, and money that is held for you is what {a:M1.prize} sounds like. Yet the key’s answer for this case is {a:M1.lost}.',
    prompt: { kind: 'phrase', answer: 'paid £2,000 to an online shop that turned out not to exist' },
    because: [
      'Look at where the £2,000 comes from. Frances paid it to a shop that did not exist, and her bank could not get it back. The text offers her that same money. So the case shows both things: money that is waiting for her, and money that she lost.',
      'The key gives such a case the answer about the loss. The reason is what the sender is doing. Someone who knows about your loss and offers to return it is going after you a second time, and what protects you is what protects you against {o:recovery}: no fee, and contact only through {t:already}.'
    ],
    take: 'The key decides it this way on purpose. In life the two overlap, and the line could be drawn in another place. The key picks one answer so that two people using it reach the same name, and each can say why.' },

  { id: 'exc-site-fee', kind: 'exception', ledger: 'pigbutcher~advancefee', looksLike: 'advancefee', is: 'pigbutcher',
    h: 'A tax to take your profit out',
    link: 'The names in this part have one thing in common: a fee that comes first. Here is a case with a fee that comes first and that is not the name you would expect.',
    case: 'm-exc-withdrawtax',
    setup: 'The app makes Gareth pay a tax before he can take his money out, and a fee that must be paid before money reaches you is what {o:advancefee} usually sounds like. Yet the key’s answer for this case is {a:M2.site}, and the name is {o:pigbutcher}.',
    prompt: { kind: 'phrase', answer: 'A woman called Nina, whom he has chatted to for three months and never met, showed him the app' },
    because: [
      'Ask where Gareth’s money is. He has put £8,000 into a trading app that Nina, a woman he has never met, showed him. The tax is asked for by the app, to let him take his money out of it. So the case shows both things: a site that someone he knows only online showed him, and a fee that must be paid before money reaches him.',
      'The key gives such a case the answer about the site. The fee is how the scam is run once the money is in, and it only exists because the site came first.'
    ],
    take: 'The fee does not go away, and it is not forgotten. It does not decide the answer, because the site is the thing that all of it depends on.' }
]);

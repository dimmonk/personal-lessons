// Scams, Unit Four, part three (last piece) and the start of part four: the overpayment scam and its pair with the real request,
// then the key's two questions about money, each with a check. Field guide: see u4.cards-1.js.

FC.cards('scams', 'u4', [

  /* ---------- Overpayment scam ---------- */
  { id: 'meet-overpayment', kind: 'meet', outcome: 'overpayment',
    link: 'The last of the four copies is the only one in which the money comes to you first.',
    case: 'm-over-bike', mark: 'M1',
    strip: [
      'Rafa is selling something, so he is the one who expects to be paid.',
      'A buyer takes the bike at once, without haggling, and £800 arrives in Rafa’s account: twice the price.',
      'The buyer says that it was a typing slip, and asks Rafa to send the £400 difference to a courier’s account.',
      'Rafa is being asked to send money out, and to someone other than the buyer.'
    ],
    explain: [
      'This is what makes this name different from all the others in this part. The money has arrived. Rafa can see £800 in his account, and all that he is asked to do is to give back what he was never owed. It feels like honesty.',
      'But the £800 is not what it seems. It may be a payment that is reversed a few days later, a card payment made with a stolen card, a transfer that the bank recalls, or a cheque that bounces. Rafa’s £400 goes out for real, and at once. When the buyer’s payment disappears, Rafa has lost the £400, and the bike too if he has handed it over.',
      'There is a fair way for a buyer who really overpaid to put it right. They ask their own bank to reverse the payment, or they ask for all of it back to the account it came from, and then pay again. They do not ask for a second payment to somebody else, and a courier’s account is somebody else.',
      'You can see the shape of this on the day. A deal is under way, a payment arrives that is more than the price, and you are asked to send some of it back or on. What you cannot see on the day is that the payment will be reversed. That only shows afterwards, so the key leaves it out.'
    ],
    feature: { step: 'M1', option: 'deal' },
    name: 'The name for this is {o:overpayment}. The buyer pays over the price, and the scam is in what you are asked to do with the extra.' },

  { id: 'again-overpayment', kind: 'again', outcome: 'overpayment',
    link: 'The bike gave you what to point to: {needs:overpayment}. Here it is again with no bike and no goods at all: a piano teacher who is paid for lessons.',
    first: 'm-over-bike', second: 'm-over-tutor', step: 'M1',
    instruction: 'Find what the two cases share. Ignore the story (a bike, piano lessons). Look at one thing only: the deal that the money is part of.',
    prompt: { kind: 'phrase', answer: 'A parent, Mrs Okafor, pays her £600 for ten lessons that cost £300' },
    shared: [
      'In both cases the person has something to be paid for, a bike or ten lessons, and the other side pays twice the price. In both, the other side calls it a slip and asks for the extra to be sent on to someone else’s account: a courier’s, a husband’s. In both, the person is asked to send money out of an account while the other side’s payment is not yet certain.',
      'A bike and piano lessons share nothing else. A deal that you are in, a payment that is more than the price, and a request to send some of it back or on, is what {o:overpayment} names.'
    ] },

  { id: 'portrait-overpayment', kind: 'portrait', outcome: 'overpayment',
    link: 'What you point to is a payment that is more than the price, and a request to send some of it on. This card fills in the rest of the picture.',
    typical: [
      'It happens when you are selling something online, or taking payment for a service: a bike, a sofa, a phone, a room, lessons, a booking.',
      'The buyer is quick and easy. They do not haggle, do not ask about the item and want it at once.',
      'A payment arrives, and it is too much: double the price or more. A message says that it was a mistake: an extra zero, a slip by an assistant, a wrong box.',
      'You are asked to send the difference back, or on, to a different account: a courier, a relative, a “shipping agent”. Sometimes you are asked to be quick, because a courier is on the way.',
      'Days later the buyer’s payment disappears: a stolen card, a transfer recalled, a cheque that bounces. Your payment does not. You have lost the money, and often the item as well.',
      'Which of this can you see on the day? The deal, the payment that is too large and the request to send some of it on are all there. The payment that later disappears can only be seen afterwards, and the key does not use it.'
    ],
    not: [
      'A buyer who really overpays by accident is not this name until they ask you to make a second payment to somebody else. A real buyer puts it right by asking their bank to reverse the payment, or by asking for all of it back to the account it came from. They do not need a courier’s account, or yours, to be the way it is done.',
      'A buyer who pays the right price and asks for nothing back is not asking you to do anything at all.'
    ],
    wild: ['"Oops, I typed an extra zero."', '"Please send the difference to my courier."', '"My assistant paid the wrong amount. Can you send the extra on?"', '"Send the rest to my shipping agent, and he will collect it."'],
    self: 'It can reach anyone who sells something on a marketplace or a small-ads site, rents out a room or takes bookings. It tends to start with a buyer who is quick and unusually easy.',
    ask: '"Has someone paid me more than the price, and asked me to send some of it back or on?"',
    act: [
      'Send nothing, and hand over nothing. Do not send the difference, and do not release the item.',
      'If the payment really was a mistake, tell the buyer to ask their own bank to reverse it, or to ask for all of it back to the account it came from, and then to pay the right amount again.',
      'Never pay a second person, such as a courier or a shipping agent that the buyer names.',
      'A payment showing in your account is not yet yours. Ask your bank when it has cleared for good, which can be days after it first shows, and wait for that before you send or hand over anything.',
      'Tell the marketplace or the site where you listed the item.'
    ] },

  { id: 'check-overpayment', kind: 'check', after: 'overpayment',
    case: 'm-over-check',
    ask: { type: 'option', step: 'M1', among: ['online', 'prize', 'lost', 'bill', 'official', 'deal'] } },

  { id: 'look-overpayment-realpayment', kind: 'lookalike', ledger: 'overpayment~realpayment',
    link: 'You have met both names. This pair is about the same camera changing hands at the same price. This card puts them side by side.',
    cases: ['m-camera-sold', 'm-camera-bought'],
    instruction: 'Both cases are about Isla and a camera that costs £600. Compare one thing: what she is asked to do with the money.',
    prompt: { kind: 'which', option: 'M2.agreed', answer: 'm-camera-bought' },
    difference: [
      'In Case A Isla is selling the camera. The buyer pays £1,000 and asks her to send the extra £400 on to a friend’s account. She is being asked to send money out of her account to someone other than the buyer. The case is {o:overpayment}.',
      'In Case B Isla is buying a camera, at the price that she agreed with the seller in the app’s chat. She pays it through the marketplace’s own button, in an app that she has used for years, which holds the money until the camera arrives. She found the way to pay through a way she already had, and nothing is hurried or hidden. The key’s answer is {a:M2.agreed}, and the case is {o:realpayment}.',
      'It is the same camera at the same price. What differs is whether she is asked to send money where a stranger says, or to pay in the way that she already used.'
    ] },

  { id: 'look-overpayment-refundscam', kind: 'lookalike', ledger: 'overpayment~refundscam',
    link: '{o:overpayment} has a look-alike in another part of the key: {o:refundscam}, which you met in an earlier unit. In both, too much money is said to have reached you, and you are asked to send the difference back. This card puts them side by side.',
    cases: ['m-aziz-sale', 'm-aziz-refund'],
    instruction: 'Both cases are about Aziz, and in both £200 too much is said to have reached him. Compare one thing: what he is asked to do before any money is sent.',
    prompt: { kind: 'which', option: 'D1.device', answer: 'm-aziz-refund' },
    difference: [
      'In Case A Aziz is selling something, a buyer says that they paid too much, and he is asked to send the difference to an account. Nothing is asked of his phone or his computer. The key’s answer to the first question is {a:D1.money}, and the case is {o:overpayment}.',
      'In Case B a caller says that a refund was too large, and asks Aziz to install a support tool so that the caller can watch his phone while he sends the difference back. The first thing that he is asked to do is to put something on his device, and the key’s answer to the first question is {a:D1.device}. The case is {o:refundscam}.',
      'The story is the same: too much money, and a difference to send back. What differs is what comes first. When a request asks for something on your device and for money, the key takes the device, because once someone can watch your phone they can do far more than take the £200.'
    ] },

  /* ---------- The key's first question about money ---------- */
  { id: 'q-m1', kind: 'question', step: 'M1',
    h: 'The first question about money: what is it for?',
    link: 'You have now met all nine names, and the key’s questions have been at the foot of each card, one answer at a time. This card puts the first question, and its six answers, in one place, as the key shows them, and says why the key asks it.',
    decides: [
      'The reason is what the sender chooses to show you, so it is the first thing that the key looks at, and the six answers are the reasons that real requests and scams actually use. Some of them are shared: a real request and several scams give the same ordinary reason, a bill, a fine or a deal, and that is why a second question is needed.',
      'Notice what the question asks and what it does not. It asks what the request says the money is for. It does not ask what you think it is really for, or whether the reason is true. You do not need to know that. You only need to read the reason that is given.'
    ],
    how: [
      'Find the sentence in the request that gives the reason for paying. It is often near the start, before the amount. Then ask which of the six answers describes it, and put your finger on the words.',
      'Three of the six answers leave one name straight away: someone you know only online (two names), money waiting for you, and money you lost. The other three, a bill, an official and a deal, each leave several names, because the real request and some of the copies give the same reasons. For those the second question does the work.',
      'You can answer this at the moment the request arrives, from the request itself. You do not need to know whether it is a scam.'
    ],
    whenBoth: [
      'Sometimes a request seems to give two reasons at once, and the key has an order for three of them. Money that you lost comes before money that is waiting for you: a refund that is held for you after a scam is {a:M1.lost}. Money that is waiting for you comes before an official: a tax refund that needs a fee is {a:M1.prize}. And someone you know only online comes before a deal: a sale or an investment offered to you by a person you have never met is {a:M1.online}.',
      'A sale is not a threat. A hurried buyer who wants a payment sent back, in secret, is still part of a deal, so the answer is {a:M1.deal} and the name is {o:overpayment}. A caller who threatens you with an official’s power is {o:fakeofficial}. The first of these two has a deal in it, and the second has a threat.'
    ] },

  { id: 'check-m1', kind: 'check', after: 'M1',
    case: 'm-chk-m1',
    ask: { type: 'step', step: 'M1' } },

  /* ---------- The key's second question about money ---------- */
  { id: 'q-m2', kind: 'question', step: 'M2',
    h: 'The second question about money: what does it ask you to do with it?',
    link: 'The first question left one name, or a few. This card puts the second question, and its eight answers, in one place, as the key shows them, and says why the key asks it.',
    decides: [
      'When the first question leaves more than one name, the reason cannot tell them apart, because they share it. What each one asks you to do with the money can. A bill from someone you pay looks the same whether it is real or a copy, and what differs is whether it asks you to pay what you agreed, to details that hold up, or to pay into new details that arrived in a message.',
      'That is why this question is the one that separates the real request from its copies. {o:invoicefraud}, {o:fakelink} and {o:overpayment} can all start with the same kind of bill or deal. They end in three different requests: pay into new details, pay on a link, and send some of it back.'
    ],
    how: [
      'Find the sentence that says what you are to do with the money. The eight answers are: invest it in a platform, pay for someone’s emergency, pay a fee first, pay into new details, pay on a link, pay at once and in secret, send some back, and pay what was agreed. Then put your finger on the words.',
      'Seven of the eight answers can be given from the request alone, at the moment it arrives. The last one, the answer for a real request, needs one more thing from you: you must contact them yourself, through {t:already}, and see that the request holds up. That is {t:check}. Until you have done it, you cannot give that answer. This is not a flaw in the key. It is what contacting them is for.',
      'What the question never asks is what happens after you pay: a withdrawal that is refused, a buyer’s payment that disappears, a second fee. Those are often the first sign that people notice, and by then the money has gone. The key asks only for what the request itself shows.'
    ],
    whenBoth: [
      'Hurry and secrecy turn up in most money scams, so many requests show a hurry together with something more specific: a fee, a link, a trading app, an emergency, a payment to send back. The key gives the more specific one. {a:M2.rush} is the answer only when nothing more specific shows, which is why it belongs to {o:fakeofficial} and to nothing else.',
      'A fee on a link goes to the fee, and a fee to take money out of a trading app goes to the app. Each pair below can look alike, and each has one question that separates it.'
    ] },

  { id: 'check-m2', kind: 'check', after: 'M2',
    case: 'm-chk-m2',
    ask: { type: 'step', step: 'M2' } }
]);

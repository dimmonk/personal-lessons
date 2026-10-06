// Scams, Unit Four, the two questions about money, one whole case, and the cards that close the unit after the drill (the recap
// and the plan: this is an action subject, so lesson standard A11 and P26 call for a plan card).
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('scams', 'u4', [

  /* ---------- The first question about money ---------- */
  { id: 'q-m1', kind: 'question', step: 'M1',
    h: 'The first question about money: what is it for?',
    link: 'You have met all nine names. This card puts the first question, and its six answers, in one place.',
    decides: [
      'It asks what the request says the money is for, not whether that is true. You only need to read the reason that is given.',
      'Some reasons are shared: a real request and several scams give the same ordinary reason, a bill, a fine or a deal. That is why a second question is needed.'
    ],
    how: [
      'Find the sentence that gives the reason for paying. It is often near the start, before the amount. Then ask which of the six answers describes it, and put your finger on the words.',
      'Three answers leave one name right away: someone you know only online (two names), money waiting for you, and money you lost. The other three, a bill, an official and a deal, each leave several names, so the second question does the work.'
    ],
    whenBoth: [
      'Sometimes a request seems to give two reasons at once, and there is an order. Money that you lost comes before money that is waiting for you: a refund that is held for you after a scam is {a:M1.lost}. Money that is waiting for you comes before an official: a tax refund that needs a fee is {a:M1.prize}, so it is {o:advancefee}, not {o:fakeofficial}. And someone you know only online comes before a deal.',
      'A sale is not a threat. A hurried buyer who wants a payment sent back, in secret, is still part of a deal, so the answer is {a:M1.deal} and the name is {o:overpayment}. A caller who threatens you with an official’s power is {o:fakeofficial}.',
      'The very first question comes before both of these. If you are asked to install something, to let someone watch your screen, or to read out a code, the request is not about money, whatever else is said. A “refund” that starts with installing a support tool is {o:refundscam}, not {o:overpayment}. A bank caller who wants a code read out is {o:codescam}, not {o:fakeofficial}.'
    ] },

  { id: 'check-m1', kind: 'check', after: 'M1',
    case: 'm-chk-m1',
    ask: { type: 'step', step: 'M1' } },

  /* ---------- The second question about money ---------- */
  { id: 'q-m2', kind: 'question', step: 'M2',
    h: 'The second question about money: what does it ask you to do with it?',
    link: 'The first question leaves one name, or a few. This card puts the second question, and its eight answers, in one place.',
    decides: [
      'When the first question leaves more than one name, the reason cannot tell them apart, because they share it. What each asks you to do with the money can. A bill from someone you pay looks the same whether it is real or a copy. What differs is whether it asks you to pay what you agreed, to details that hold up, or to pay into new details that arrived in a message.',
      'That is why this question separates the real request from its copies. {o:invoicefraud}, {o:fakelink} and {o:overpayment} can all start with the same kind of bill or deal, and they end in three different requests: pay into new details, pay on a link, and send some of it back.'
    ],
    how: [
      'Find the sentence that says what you are to do with the money, and put your finger on the words.',
      'Seven of the eight answers can be given from the request alone, when it arrives. The last one, the real request, needs one more thing from you: contact them yourself, through {t:already}, and see that the request holds up. That is {t:check}.'
    ],
    whenBoth: [
      'Hurry and secrecy turn up in most money scams, so a request often shows a hurry together with something more specific: a fee, a link, a trading app, an emergency, a payment to send back. The more specific one is the answer. {a:M2.rush} is the answer only when nothing more specific shows, which is why it belongs to {o:fakeofficial} and to nothing else. A hurry with a link is {o:fakelink}.',
      'A fee on a link goes to the fee, so it is {o:advancefee}. A fee to take money out of a trading app goes to the app, so it is {o:pigbutcher}.'
    ] },

  { id: 'check-m2', kind: 'check', after: 'M2',
    case: 'm-chk-m2',
    ask: { type: 'step', step: 'M2' } },

  /* ---------- One whole case ---------- */
  { id: 'worked-cottage', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'Before the drill, watch one case run from the top, in the order that the questions are asked. In this one the request is real, and the questions work in the same way.',
    case: 'm-w-cottage',
    steps: [
      { step: 'D1',
        reason: 'The email asks Ruth to pay a deposit: {cue:D1}. Nothing earlier in the list is asked of her, so the answer is {a:D1.money}.' },
      { step: 'M1',
        reason: 'The deposit is part of a booking that she made herself: {cue:M1}. That is a deal that she is in, so the answer is {a:M1.deal}.' },
      { step: 'M2',
        reason: 'The deposit is to go to the account named on her booking confirmation, which she already had, and the figures are the ones on the website that she found herself: {cue:M2}. The email invites her to call the owner. Nobody hurries her or asks her to keep it quiet. So the answer is {a:M2.agreed}.' }
    ],
    hold: {
      neighbor: 'invoicefraud',
      prompt: { kind: 'reason',
        lead: 'The email gives bank account details to pay into, and bank account details in an email are what {o:invoicefraud} is made of.',
        choices: [
          { id: 'a', text: 'It asks her to pay money into a bank account.',
            note: 'True, and it is why the case can look like {o:invoicefraud}. But a real request and a copy both ask for money to go into an account, so this does not separate them.' },
          { id: 'b', text: 'The account is the one named on her booking confirmation, which she already had, and nothing in the email says that anything has changed.' },
          { id: 'c', text: 'It comes from the owner whose website she visited.',
            note: 'True, but a copy can use the sender’s name as well, so it does not settle which of the two this is.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:invoicefraud} you must be able to point to this: {needs:invoicefraud}. There are no new details here. The account is the one that she was given when she booked, so the one thing that the copy is made of is missing.',
        '{test:invoicefraud~realpayment} Here nothing has changed, so the answer is {a:M2.agreed}, and the case is {o:realpayment}. A real request is as much an answer as a scam is.'
      ]
    },
    impression: {
      resembles: 'm-real-rent', first: 'm-inv-builder',
      text: [
        'Now a second look: does this case look like one you know? It brings back Hana’s rent reminder, and also Joe’s landscaper email, which was {o:invoicefraud}, because both give bank details in a message.',
        'When the likeness points the wrong way, go back to the questions and find the words in the case that answer them: {cue:M2}. Nothing here has changed, so the answer stands.'
      ]
    } },

  /* ---------- after the drill ---------- */
  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the questions on your own. This card puts the unit in one place.',
    carry: [
      'Before any name, put your finger on the words that show what the request says the money is for, and then on the words that show what it asks you to do with the money.',
      'A real request and its copy can use the same story, the same bill and the same words. What separates them is what the request asks you to do with the money, and whether it holds up when you contact them yourself, through {t:already}. That is {t:check}, and it works on every name here.',
      'Hurry, secrecy and a payment that cannot be undone turn up in most of the scams. They are a reason to stop, and they do not decide the name: the more specific answer does.',
      'When a request is real, pay it in the normal way. {o:realpayment} is a name here because treating every bill as a scam is a mistake of its own.',
      'On the spot, nearly every time: do not pay yet, and contact them yourself. If you have already paid, call your bank at once, at the number on your card: a transfer can sometimes be recalled in the first hours.'
    ] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This card is for what you will do about a request, and it is yours to fill in or to leave.',
    intro: [
      'A plan is one line: if I see this, then I will do that. The moment a request arrives is the worst moment to think of what to do, so decide in advance.',
      'The lines below are examples to start from. You can use one, change it, or write your own two lines.'
    ],
    cues: [
      { cue: 'someone I know only online asks me for money, or to put money into a site or an app',
        then: 'not send anything that day, ask for a live video call, and tell a friend or relative who knows me in person' },
      { cue: 'a message says that money is waiting for me, or that my lost money can be recovered, and asks me to pay a fee first',
        then: 'not pay, and contact the organization myself, at a number or in an app that I already had' },
      { cue: 'a message tells me that someone’s bank account details have changed',
        then: 'call them at a number that I already had before I pay anything, and not use any number in the message' },
      { cue: 'a text asks me to pay a small charge on a link',
        then: 'not tap it, and open the company’s own app, or type in its address, to see whether the charge is there' },
      { cue: 'someone who says that they are an official, or from my bank, tells me to pay at once and tell no one',
        then: 'hang up, and call them at the number on my card, my bill or my letter' },
      { cue: 'a buyer pays me more than the price and asks me to send some of it on',
        then: 'send nothing, and ask them to have their own bank reverse it' },
      { cue: 'a request for money that I agreed to, from someone I already deal with, to details that I was given at the start',
        then: 'pay it in the normal way, and keep the confirmation' }
    ] }
]);

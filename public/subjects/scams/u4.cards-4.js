// Scams, Unit Four, the two questions about money, one whole story, and the cards that close the unit after the drill (the recap
// and the plan: this is an action subject, so lesson standard A11 and P26 call for a plan card).
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('scams', 'u4', [

  /* ---------- The first question about money ---------- */
  { id: 'q-m1', kind: 'question', step: 'M1',
    h: 'The first question about money: what is it for?',
    link: 'You have met all nine. Here is the first question, with its six answers, in one place.',
    decides: [
      'This question asks what the request says the money is for, not whether that is true. Read the reason it gives.',
      'Some reasons are shared: a real request and several scams give the same ordinary reason, such as a bill, a fine or a deal. That is why there is a second question.'
    ],
    how: [
      { do: 'Find the sentence that gives the reason for paying.', why: 'It is often near the start, before the amount.' },
      { do: 'Pick the answer that fits it, and put your finger on the words.', why: 'If you cannot find the words, you do not have an answer yet.' },
      { do: 'See how many names are left.', why: 'The first three answers leave one or two names, and the last three leave several, so the second question finishes the job.' }
    ],
    whenBoth: [
      'Sometimes a request seems to give two reasons at once. Use this order. Money you lost comes before money waiting for you: a refund held for you after a scam is {a:M1.lost}. Money waiting for you comes before an official: a tax refund that needs a fee is {a:M1.prize}, so it is {o:advancefee}, not {o:fakeofficial}. Someone you know only online comes before a deal.',
      'A sale is not a threat. A hurried buyer who wants a payment sent back, in secret, is still part of a deal, so the answer is {a:M1.deal} and the name is {o:overpayment}. A caller who threatens you with an official’s power is {o:fakeofficial}.',
      'The very first question comes before both of these. If you are asked to install something, let someone watch your screen, or read out a code, it is not about money, whatever else is said. A “refund” that starts with installing a support tool is {o:refundscam}, not {o:overpayment}. A bank caller who wants a code read out is {o:codescam}, not {o:fakeofficial}.'
    ] },

  { id: 'check-m1', kind: 'check', after: 'M1',
    case: 'm-chk-m1',
    ask: { type: 'step', step: 'M1' } },

  /* ---------- The second question about money ---------- */
  { id: 'q-m2', kind: 'question', step: 'M2',
    h: 'The second question about money: what does it ask you to do with it?',
    link: 'The first question leaves one name, or a few. Here is the second question, with its eight answers, in one place.',
    decides: [
      'When the first question leaves several names, they share the same reason, so the reason cannot separate them. What the request asks you to do with the money can. A bill from someone you pay looks the same whether it is real or a copy. What differs is where you are told to send the money.',
      'That is why this question tells the real request from its copies. {o:invoicefraud}, {o:fakelink} and {o:overpayment} can all start with the same bill or deal, and they end in three different requests: pay into new details, pay on a link, and send some of it back.'
    ],
    how: [
      { do: 'Find the sentence that says what you are to do with the money.', why: 'Everything else is the story around it.' },
      { do: 'Pick the answer that fits those words.', why: 'Seven of the eight can be given from the message alone, before you do anything.' },
      { do: 'For the real request, contact them yourself, through {t:already}.', why: 'The message alone cannot show that it is real, and this is {t:check}.' }
    ],
    whenBoth: [
      'Hurry and secrecy turn up in most of these scams, so a request often shows a hurry together with something more specific: a fee, a link, a trading app, an emergency, a payment to send back. The more specific one wins. {a:M2.rush} is the answer only when nothing more specific shows, which is why it belongs to {o:fakeofficial} and to nothing else. A hurry with a link is {o:fakelink}.',
      'A fee on a link goes to the fee, so it is {o:advancefee}. A fee to take money out of a trading app goes to the app, so it is {o:pigbutcher}.'
    ] },

  { id: 'check-m2', kind: 'check', after: 'M2',
    case: 'm-chk-m2',
    ask: { type: 'step', step: 'M2' } },

  /* ---------- One whole story ---------- */
  { id: 'worked-cottage', kind: 'worked',
    h: 'One whole story, from the first question to the name',
    link: 'Before the drill, watch one story worked from the top, in the order the questions are asked. This one is real, and the questions work the same way.',
    case: 'm-w-cottage',
    steps: [
      { step: 'D1',
        reason: 'The email asks Ruth to pay a deposit: {cue:D1}.' },
      { step: 'M1',
        reason: 'The deposit is part of a booking she made herself: {cue:M1}. That is a deal she is in.' },
      { step: 'M2',
        reason: 'The deposit goes to the account on her booking confirmation, and the figures match the website she found herself: {cue:M2}. Nobody hurries her, and she can call the owner.' }
    ],
    hold: {
      neighbor: 'invoicefraud',
      prompt: { kind: 'reason',
        lead: 'The email gives bank account details to pay into, and so does {o:invoicefraud}.',
        choices: [
          { id: 'a', text: 'It asks her to pay money into a bank account for the booking.',
            note: 'True, but a real request and a copy both ask for that.' },
          { id: 'b', text: 'The account is the one on her booking confirmation, and nothing says it changed.' },
          { id: 'c', text: 'It comes from the same owner whose website she found herself.',
            note: 'True, but a copy can use the sender’s name too.' }
        ],
        answer: 'b' },
      reason: [
        'To call it {o:invoicefraud} you would have to see this: {needs:invoicefraud}. Here nothing has changed: the account is the one she was given when she booked.',
        '{test:invoicefraud~realpayment} For Ruth it is the account she already had, so the answer is {a:M2.agreed} and the name is {o:realpayment}. A real request is as much an answer as a scam.'
      ]
    },
    impression: {
      resembles: 'm-real-rent', first: 'm-inv-builder',
      text: [
        'A second look: does this story remind you of one you know? It brings back Hana’s rent reminder, and also Joe’s landscaper email, which was {o:invoicefraud}, because both give bank details in a message.',
        'When a likeness and the answer disagree, go back to the questions and find the words that answer them: {cue:M2}. Nothing here has changed, so the answer stands.'
      ]
    } },

  /* ---------- after the drill ---------- */
  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the questions on your own. Here is the unit in one place.',
    carry: [
      'Before you use a name, find the words that show what the request says the money is for, and then the words that show what it asks you to do with it.',
      'A real request and its copy can use the same story, the same bill and the same words. What separates them is what the request asks you to do with the money, and whether it holds up when you contact them yourself, through {t:already}. That is {t:check}, and it works on every name here.',
      'Hurry, secrecy and a payment that cannot be undone turn up in most of these scams. They are a reason to stop, but they do not decide the name. The more specific answer does.',
      'When a request is real, pay it the normal way. Treating every bill as a scam is a mistake too, which is why {o:realpayment} has a name.',
      'On the spot, nearly every time: do not pay yet, and contact them yourself. If you have already paid, call your bank at once, at the number on your card, because a transfer can sometimes be recalled in the first hours.'
    ] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This card is about what you will do when a request arrives, and it is yours to fill in or to leave.',
    intro: [
      'A plan is one line: if I see this, then I will do that. The moment a request arrives is the worst time to decide what to do, so decide now.',
      'These lines are examples to start from. You can use one, change it, or write your own two lines.'
    ],
    cues: [
      { cue: 'someone I only know online asks me for money, or to put money into a site or an app',
        then: 'not send anything that day, ask for a live video call, and tell a friend or relative who knows me in person' },
      { cue: 'a message says that money is waiting for me, or that my lost money can be recovered, and asks me to pay a fee first',
        then: 'not pay, and contact the organization myself, through a number or an app that I already had' },
      { cue: 'a message tells me that someone’s bank account details have changed',
        then: 'call them at a number that I already had before I pay anything, and not use any number in the message' },
      { cue: 'a text asks me to pay a small charge on a link',
        then: 'not tap it, and open the company’s own app, or type in its address, to see whether the charge is there' },
      { cue: 'someone who says they are an official, or from my bank, tells me to pay at once and tell no one',
        then: 'hang up, and call them at the number on my card, my bill or my letter' },
      { cue: 'a buyer pays me more than the price and asks me to send some of it on',
        then: 'send nothing, and ask them to have their own bank reverse it' },
      { cue: 'a request for money that I agreed to, from someone I already deal with, to details that I was given at the start',
        then: 'pay it the normal way, and keep the confirmation' }
    ] }
]);

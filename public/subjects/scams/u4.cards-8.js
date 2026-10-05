// Scams, Unit Four, part four: the three whole cases, and the three cards that close the unit after the drill (the recap, the
// learner's own occasion, and the plan: this is an action subject, so lesson standard A11 and P26 call for a plan card).
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('scams', 'u4', [

  { id: 'worked-invoice', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the nine names and the key’s two questions about money. Before the drill, watch three cases being run from the top, in the order that the key asks. You are not asked anything until the end of each.',
    case: 'm-w-invoice',
    steps: [
      { step: 'D1',
        reason: 'The email asks Noor to pay: {cue:D1}. It asks for no program, no file, no sign-in and no facts about her, so nothing earlier in the key’s list applies. The key’s answer is {a:D1.money}.' },
      { step: 'M1',
        reason: 'The request is about something that she already pays for: {cue:M1}. That is a bill from someone she already pays, so the key’s answer is {a:M1.bill}. This is the answer that three names share, which is why a second question is needed.' },
      { step: 'M2',
        reason: 'Now ask what the email asks her to do with the money: {cue:M2}. The account is not the one that she has always paid. That is {a:M2.newdetails}, and one name is left: {o:invoicefraud}. Nothing in it is hurried or threatening, and that is why it is easy to miss.' }
    ],
    hold: {
      neighbour: 'realpayment',
      prompt: { kind: 'reason',
        lead: 'The invoice is for the right work and the right amount, from the supplier’s usual address, so it can look like a real request.',
        choices: [
          { id: 'a', text: 'The invoice is for the amount that Noor expects, and it comes from the usual address.',
            note: 'True, and it is why the case can look like {o:realpayment}. But a copy can send the right amount from a thread that it has got into, so these do not settle which of the two this is.' },
          { id: 'b', text: 'It tells her to pay into an account that is not the one she has paid into every month, and it arrived by message.' },
          { id: 'c', text: 'No deadline is given.',
            note: 'True, and a real request gives you time. But a copy that wants to look routine does the same, so it does not settle it.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:realpayment} you must be able to point to this: {needs:realpayment}. The details are the part of that which the email does not satisfy: they are new, and they came in a message. Everything else about the case would fit a real request, and that is exactly why the copy works.',
        'It is the question from Tessa’s two invoices. {test:invoicefraud~realpayment} Here the account has changed, so the key’s answer is {a:M2.newdetails}. Whether the change is real is not something that the email can tell her. She finds that out by ringing the supplier on a number from the contract.'
      ]
    },
    impression: {
      resembles: 'm-inv-builder',
      text: [
        'The key has given its answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the landscaper’s email: the usual thread, the usual signature, and one line about a new bank.',
        'Here the key and the likeness agree, so the answer stands. The key’s questions come first, because they make you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the key’s questions and find the words in the case that answer them. The third whole case shows how.'
      ]
    } },

  { id: 'worked-cottage', kind: 'worked',
    h: 'A second whole case, where the request is real',
    link: 'The compost supplier was a copy. Not every case is. In this one the request is real, and the key’s questions are asked in exactly the same way.',
    case: 'm-w-cottage',
    steps: [
      { step: 'D1',
        reason: 'The email asks Ruth to pay a deposit: {cue:D1}. Nothing earlier in the key’s list is asked of her, so the key’s answer is {a:D1.money}.' },
      { step: 'M1',
        reason: 'The deposit is part of a booking that she made herself: {cue:M1}. That is a deal that she is in, so the key’s answer is {a:M1.deal}.' },
      { step: 'M2',
        reason: 'She has checked what she can without anyone’s help. The deposit is to go to the account named on her booking confirmation, which she already had, and the figures are the ones on the website that she found herself: {cue:M2}. The email also invites her to ring the owner. Nobody hurries her and nobody asks her to keep it quiet. So the key’s answer is {a:M2.agreed}.' }
    ],
    hold: {
      neighbour: 'invoicefraud',
      prompt: { kind: 'reason',
        lead: 'The email gives bank details to pay into, and bank details in an email are what the first whole case turned on.',
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
        'It is the question from Tessa’s two invoices. {test:invoicefraud~realpayment} Here nothing has changed, so the key’s answer is {a:M2.agreed}, and the case is {o:realpayment}. A real request is as much an answer of the key as a scam is, and saying so is the key doing its job.'
      ]
    },
    impression: {
      resembles: 'm-real-rent',
      text: [
        'Now take a second look: does this case look like one you know? It should bring back Hana’s rent reminder: a payment that is due, an account that she was given at the start, and a number to ring.',
        'Here the key and the likeness agree, so the answer stands. Notice that the likeness points to the real thing as readily as to a copy. That is the reason the key’s questions come first.'
      ]
    } },

  { id: 'worked-sofa', kind: 'worked',
    h: 'A third whole case, where the story points the wrong way',
    link: 'The first case was clean, and the second was real. In this third case the most noticeable thing in the story is not the thing that decides it. Watch which words each question picks out.',
    case: 'm-w-sofa',
    steps: [
      { step: 'D1',
        reason: 'The buyer asks Imogen to send money: {cue:D1}. Nothing earlier in the key’s list is asked of her, so the key’s answer is {a:D1.money}.' },
      { step: 'M1',
        reason: 'The money is part of a sale that she is making: {cue:M1}. That is a deal she is in, so the key’s answer is {a:M1.deal}. There is no official, no prize, no loss and no stranger who showed her a site. The person behind the request is a buyer.' },
      { step: 'M2',
        reason: 'This is the question that matters. The buyer has paid twice the price and asks her to send the extra to someone else’s account: {cue:M2}. That is the answer {a:M2.sendback}. The text also says today, by transfer, and do not tell your bank. Those words are a hurry, a payment that cannot be undone, and a secret, which is what the answer {a:M2.rush} sounds like. When a request shows both, the key gives the more specific answer, and the more specific one is the payment to send back.' }
    ],
    hold: {
      neighbour: 'fakeofficial',
      prompt: { kind: 'reason',
        lead: 'The text is hurried and secret and about a payment that cannot be undone, which is how the tax caller sounded.',
        choices: [
          { id: 'a', text: 'It says to send the money today, by transfer, and not to tell the bank.',
            note: 'True, and it is why the case can look like {o:fakeofficial}. But hurry and secrecy turn up in many scams, so they cannot settle which of the two this is.' },
          { id: 'b', text: 'It says that the buyer paid twice the price, and asks for the extra to be sent to someone else’s account.' },
          { id: 'c', text: 'It comes from a buyer, and not from an official or a bank.',
            note: 'True, and it is what the first question settles. It does not say what the request asks you to do with the money, which is the question that separates these two.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:fakeofficial} you must be able to point to this: {needs:fakeofficial}. There is no official here, and no fine, debt or danger. The sender is a buyer, and the money is part of a sale. A hurry and a secret are there, but they are only part of what that name needs.',
        'The question that separates the two is the one from the first question card. {test:fakeofficial~overpayment} Here the money is part of a deal that Imogen is in, and the buyer asks her to send some back. So the key’s answer is {a:M2.sendback}, and the name is {o:overpayment}.'
      ]
    },
    impression: {
      resembles: 'm-over-bike', first: 'm-off-tax',
      text: [
        'Now the second look: does this case look like one you know? A buyer who hurries you, tells you to keep a payment from your bank and wants a transfer today may bring back the tax caller first, and that case was {o:fakeofficial}. So here the likeness and the key seem to disagree.',
        'When that happens, go back to the key’s questions and find the words in the case that answer them. They are {cue:M2}. The tax caller has nothing like them: there was no deal and no payment from the other side. The bike with a typing slip does: someone had paid twice the price, and asked for the difference to be sent on. So the case this one really looks like is Rafa’s bike, and the key’s answer stands.'
      ]
    } },

  /* ---------- after the drill ---------- */
  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the key on your own. This card puts the unit in one place, in the key’s words.',
    carry: [
      'Before any name, put your finger on the words that show what the request says the money is for, and then on the words that show what it asks you to do with the money. If you cannot point to them, you do not yet have an answer.',
      'A real request and its copy can use the same story, the same bill and the same words. What separates them is not how they look. It is what the request asks you to do with the money, and whether it holds up when you contact them yourself, through {t:already}. That is what {t:check} means, and it works on every name in this unit.',
      'Hurry, secrecy and a payment that cannot be undone turn up in most of the scams. They are a reason to stop, and they do not decide the name: the key gives the more specific answer whenever there is one.',
      'Everything that the key asks can be seen when the request arrives. What happens after you pay (a refused withdrawal, a buyer’s payment that disappears, a second fee) is how many people notice, and by then the money has gone.',
      'When a request is a real one, the right thing to do is to pay it in the normal way. {o:realpayment} is a name in the key because treating every bill as a scam is a mistake of its own.',
      'What to do on the spot is the same in nearly every name: do not pay yet, and contact them yourself.'
    ] },

  { id: 'transfer', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the nine names is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your own life.',
      'Pick one of the nine and name an occasion of your own: something you received, something someone said to you, or something that you almost did. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'romance', occasion: 'A friendly message from someone you have only met online, in which money, a favour or a problem of theirs came up.' },
      { outcome: 'pigbutcher', occasion: 'A message from someone you do not know, or only know online, about investing, trading or crypto.' },
      { outcome: 'advancefee', occasion: 'An email, text or letter that said you had won, inherited or been approved for something, and then asked you to pay.' },
      { outcome: 'recovery', occasion: 'An offer to get back money that you, or someone you know, had lost.' },
      { outcome: 'invoicefraud', occasion: 'An email about a bill that you pay, in which new bank details were mentioned.' },
      { outcome: 'fakeofficial', occasion: 'A call or a message from a tax office, a bank or an official that was hurried or threatening.' },
      { outcome: 'fakelink', occasion: 'A text about a parcel, a toll, a fine or a subscription that asked you to pay a small charge on a link.' },
      { outcome: 'overpayment', occasion: 'A buyer who paid you more than the price, or who asked you to send some of your money on to someone else.' },
      { outcome: 'realpayment', occasion: 'The last request for money that you paid without worry, and what made it ordinary: a bill, rent, a booking.' }
    ],
    places: ['At home', 'At work', 'On my phone', 'On a call'] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'The unit has taught you to name what a request asks of you. This card is for what you will do about it, and it is yours to fill in or to leave.',
    intro: [
      'A plan is one line: if I see this, then I will do that. It is worth writing down because the moment a request arrives is the worst moment to think of what to do, and the best moment to do something that you decided in advance.',
      'The lines below are examples to start from. You can use one, change it, or write your own two lines. Nothing is saved until you press the button.'
    ],
    cues: [
      { cue: 'someone I know only online asks me for money, or to put money into a site or an app',
        then: 'not send anything that day, ask for a live video call, and tell a friend or relative who knows me in person' },
      { cue: 'a message says that money is waiting for me, or that my lost money can be recovered, and asks me to pay a fee first',
        then: 'not pay, and contact the organisation myself, on a number or in an app that I already had' },
      { cue: 'a message tells me that someone’s bank details have changed',
        then: 'ring them on a number that I already had before I pay anything, and not use any number in the message' },
      { cue: 'a text asks me to pay a small charge on a link',
        then: 'not tap it, and open the company’s own app, or type in its address, to see whether the charge is there' },
      { cue: 'someone who says that they are an official, or from my bank, tells me to pay at once and tell no one',
        then: 'hang up, and ring them on the number on my card, my bill or my letter' },
      { cue: 'a buyer pays me more than the price and asks me to send some of it on',
        then: 'send nothing, and ask them to have their own bank reverse it' },
      { cue: 'a request for money that I agreed to, from someone I already deal with, to details that I was given at the start',
        then: 'pay it in the normal way, and keep the confirmation' }
    ] }
]);

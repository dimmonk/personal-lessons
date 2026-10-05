// Scams, Unit One, part four: the key's first question as a question, the check on it, the two worked cases, and
// the three cards that close the unit after the drill (the recap, the learner's own occasion, and the plan: this
// is an action subject, so lesson standard A11 and P26 call for a plan card).
// The app prints, on the question card: the question, what it is for, each answer with when it is given, why it
// decides, and for every pair already compared the question that separates it and the key's tie-break.

FC.cards('scams', 'u1', [

  /* ---------- the key's first question, as a question ---------- */
  { id: 'q-gate', kind: 'question', step: 'D1',
    h: 'The question you have been answering all along',
    link: 'Since the delivery update you have seen the question at the foot of each new kind, with one answer under it. This card puts the question and its five answers in one place, and says why it is asked before anything else.',
    decides: [
      'A message can only be judged on what it asks. If you start with who it says it is from, or how worried it sounds, you are looking at what the sender chose to show you. What it asks you to do is what you would actually be doing, and it tells you what you could lose.',
      'That is why this question comes first, before any finer name, and why every case in this subject starts with it.',
      'In this unit it is the only question, so its answer is the name. In the rest of the subject, each of the first four answers is followed by a further question, and that question leads to a finer name. The fifth answer is followed by nothing. On the way to a name you give answers: this first answer, and then the answers to the questions after it. Once there are two answers, two things are marked separately: the name you give a message, and the answers you gave on the way to it. A right name reached by a wrong answer to this first question counts as a miss, which is why the first question gets a whole unit of practice.'
    ],
    how: [
      'Read the whole message before you answer, the last sentence included. The request is often at the end, after the reason it gives.',
      'Then go down the list in order, and stop at the first answer that the message shows.',
      'First, look for {a:D1.device}: {needs:device}. If the message shows that, this is the answer, whatever else it asks.',
      'Second, look for {a:D1.access}: {needs:access}.',
      'Third, look for {a:D1.money}: {needs:money}.',
      'Fourth, look for {a:D1.details}: {needs:details}.',
      'If the message shows none of those four, what is left is {a:D1.nothing}: {needs:nothing}.',
      'Whichever answer you give, put your finger on the words that show it. If you cannot point to a request, you do not have an answer yet.'
    ],
    whenBoth: 'Some messages ask for two things at once. You have met two of them: the refund call asked Harold to let a stranger watch his device and then to send money back, and the council text asked Lorna to sign in and then to pay. Every message gets one answer, and the order of the list is how it is chosen: the earlier answer wins. Each pair below has a question that tells it apart.' },

  { id: 'check-gate', kind: 'check', after: 'D1',
    case: 'g-council-bins',
    ask: { type: 'step', step: 'D1' } },

  /* ---------- two whole cases, watched ---------- */
  { id: 'worked-leaving', kind: 'worked',
    h: 'A whole case, from the question to the answer',
    link: 'You have the five kinds and the question about them. Before the drill, watch two cases being run from the top. You are not asked anything until the end of each.',
    case: 'g-leaving',
    steps: [
      { step: 'D1',
        reason: [
          'The card that put the question in one place taught an order: look first for something to put on a device, then a way into an account, then money, then facts about the person, and if none of them is there, nothing. The email asks for no program, no file and no sign-in, so the first two do not apply.',
          'Now look for money. It is here: {cue:D1}. That is a request to send money, with a date and an account. Neither of the two earlier answers is there, so the answer is the one for money.',
          'The rest of the email, a collection for a leaving present, is the story. It makes the request sound friendly and ordinary, and it may well be. The question looks at what is asked, and what is asked is £20.'
        ] }
    ],
    hold: {
      neighbour: 'nothing',
      prompt: { kind: 'reason',
        lead: 'The first sentence of the email only tells the team that a collection is happening, so the case can look like a message that tells you something.',
        choices: [
          { id: 'a', text: 'The email tells the team that a collection for Jo’s present is happening.',
            note: 'True, and it is why the case can look like {a:D1.nothing}. But a message that tells you something and then asks you to send money has asked, and the asking is what the question looks at.' },
          { id: 'b', text: 'It goes on to ask each person to send £20 to an account by Friday.' },
          { id: 'c', text: 'It comes from a colleague whom the team knows.',
            note: 'True, and it says who the email is from. It is not a request, so it does not separate the two answers you are choosing between.' }
        ],
        answer: 'b' },
      reason: [
        'For {a:D1.nothing} you must be able to point to this: {needs:nothing}. The first sentence is news. The second sentence is not: it asks every reader to send money to an account by a date. As soon as a request appears, the message is no longer one that only tells you something.',
        'It is the question from the gas bill. {test:money~nothing} Here the message asks for money, so the answer is {a:D1.money}.'
      ]
    },
    impression: {
      resembles: 'g-rent',
      text: [
        'You have your answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the rent email. There too, someone you know asked you to put an amount into an account by a date.',
        'Here the questions and the likeness agree, so the answer stands. The question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-statement', kind: 'worked',
    h: 'A second whole case, where the opening points the wrong way',
    link: 'The leaving present was a clean case: one thing was being asked. In this second case the first thing you notice is not the thing that decides it. Read to the end before you answer.',
    case: 'g-statement',
    steps: [
      { step: 'D1',
        reason: [
          'The text opens like a notice: the statement is ready to view. If it ended there, it would only be telling Chidi something.',
          'It does not end there. Read on: {cue:D1}. That is a request to pay a sum at an address today, with a reason to hurry. The message has stopped being news and has become a demand.',
          'Nothing in it asks for a program, a file, a sign-in or facts about Chidi, so the earlier answers do not apply. The answer is the one for money.'
        ] }
    ],
    hold: {
      neighbour: 'nothing',
      prompt: { kind: 'reason',
        lead: 'The text opens with a statement that is ready to view, so the case can look like a message that tells you something.',
        choices: [
          { id: 'a', text: 'It opens with news: the summer statement is ready to view.',
            note: 'True, and it is why the case can look like {a:D1.nothing}. If the text ended there, that would be the answer. It does not end there.' },
          { id: 'b', text: 'It ends by telling Chidi to pay £79 at an address today, to keep his line open.' },
          { id: 'c', text: 'It comes from his broadband company, and the name of the company is correct.',
            note: 'True, and it says who the text claims to be from. It is not a request, so it does not separate the two answers you are choosing between.' }
        ],
        answer: 'b' },
      reason: [
        'For {a:D1.nothing} you must be able to point to this: {needs:nothing}. The statement being ready is news. The last sentence is a request for money, and a request that comes with its own address to pay at is the thing a message that only tells you something does not have.',
        'This is the choice made with the gas bill. Both the notice and the demand were about the same bill, and what separated them was whether anyone asked for money. Here the text has both, a notice and then a demand, and the demand is the part that the question is about. The answer is {a:D1.money}.'
      ]
    },
    impression: {
      resembles: 'g-gift', first: 'g-delivery',
      text: [
        'Now the second look: does this case look like one you know? A company writing to say that something is ready may bring back the delivery update first, and that case was {a:D1.nothing}. So here the likeness and the questions seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:D1}. The delivery update has nothing like them: it ended after the news. The manager in a meeting has: an amount, an address and a day to pay by. So the case this one really looks like is the manager’s, and the answer stands.'
      ]
    } },

  /* ---------- after the drill ---------- */
  { id: 'recap-gate', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own. This card puts the unit in one place.',
    carry: [
      'Before any name, ask what the message asks you to do right now, and point to the words that show it. If you cannot point to a request, you do not have an answer yet.',
      'The answer is not a verdict. Each of the five kinds can be real or a copy. The answer says what you are being asked for. Telling a real message from a copy is the job of the questions that come after this one, and of {t:check}.',
      'A message that only tells you something is {a:D1.nothing}. It does not need an answer from you, and treating it as a threat is a mistake too.',
      'A number, a link or an app that came with the message is never {t:already}, even when you are the one who dials it or taps it.',
      'How a message looks, who it says it is from, and how well it is written do not change the answer.',
      'When a message asks for two things, the answer is the earlier one in the list: something on your device, then a way into an account, then money, then facts about you.',
      'Every case in this subject starts with this question. Your answer to it is the first of your answers on the way to a name.'
    ] },

  { id: 'transfer-gate', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the five kinds is one step. Noticing the moment to ask the question is a separate step, and only you know where those moments are in your own life.',
      'Pick one of the five and name an occasion of your own: something you received, something someone said to you, or something you almost did. The lines under each kind are there to jog your memory.'
    ],
    prompts: [
      { family: 'device', occasion: 'The last time a phone or a computer, a caller or a message asked you to install something, update something or open a file.' },
      { family: 'access', occasion: 'The last time a website sent you a code, asked you to sign in, or an app asked to connect to one of your accounts.' },
      { family: 'money', occasion: 'A request for money that reached you in the last month: a bill, a collection, a fee, a favour for a friend.' },
      { family: 'details', occasion: 'A form, a call or a chat in which you were asked about yourself.' },
      { family: 'nothing', occasion: 'A message that told you something and asked for nothing: a delivery, an appointment, a notice from your bank.' }
    ],
    places: ['At home', 'At work', 'On my phone', 'On a call'] },

  { id: 'plan-gate', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'The unit has taught you to name what a message asks. This card is for what you will do about it, and it is yours to fill in or to leave.',
    intro: [
      'A plan is one line: if I see this, then I will do that. It is worth writing down because the moment a message arrives is the worst moment to think of what to do, and the best moment to do something you decided in advance.',
      'The lines below are examples to start from. You can use one, change it, or write your own two lines. Nothing is saved until you press the button.'
    ],
    cues: [
      { cue: 'a request to put something on my phone or computer, to open a file, or to let someone watch my device',
        then: 'stop, and not do it until I have called the company on a number I already had' },
      { cue: 'a message that came to me asking me to sign in, give a code or press Allow',
        then: 'not use anything it gives me, and open the site or the app myself, from an address I already had' },
      { cue: 'a message asking me to pay or send money',
        then: 'not pay on the spot, and call the person or the company first, on a number I already had' },
      { cue: 'a message, or a stranger, asking me about myself',
        then: 'not answer until I know who is asking, and call them on a number I already had to find out' },
      { cue: 'a message that only tells me something',
        then: 'read it and leave it alone, and use my own app or my own number if I want to follow it up' }
    ] }
]);

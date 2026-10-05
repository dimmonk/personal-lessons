// Scams, Unit Two, part three: the key's question as a question, the check on it, the two worked cases, and the three cards
// that close the unit after the drill (the recap, the learner's own occasion, and the plan: this is an action subject, so
// lesson standard A11 and P26 call for a plan card).
// The app prints, on the question card: the question, what it is for, each answer with when it is given and the name it
// leads to, why it decides, and for every pair already compared the question that separates it and the key's tie-break.
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('scams', 'u2', [

  /* ---------- the key's question, as a question ---------- */
  { id: 'q-how', kind: 'question', step: 'I1',
    h: 'The question you have been answering all along',
    link: 'Since the video-calling program you have seen the question at the foot of each new name, with one answer under it. This card puts the question and its four answers in one place, and says what the question can and cannot tell you.',
    decides: [
      'Four requests can be word for word the same: a box that asks whether to allow changes, a person who wants to see your device, a program to run. The same program can be fetched by you or sent to you. So nothing about the program, the box, the company named or the story decides the name. What decides it is how the request came to you, and that is something you know at the moment you are asked, before you install, open or share anything.',
      'It is also the only question that this part asks, and the reason is worth saying. The things that would tell the four apart afterwards are all things you can see only when it is too late: a file that runs quietly and shows nothing, a technician’s ordinary-looking lists, a balance on a page that someone else is controlling. A question about those could be answered only after the harm. So the question is about the one thing that you can know at the start, and every request gets its name from that.'
    ],
    how: [
      'Ask who started it. If you did, ask where you went: to the maker’s own website through an address that you typed or had saved, or to your device’s app store. That is the answer for {o:realinstall}, and for nothing else. If something came to you, ask what it was. A file or a link in a message, with nobody on the phone, is the file answer, and it leads to {o:malware}. A warning, a call, a message or an advert that offers to fix a problem with your device is the support answer, and it leads to {o:techsupport}. A caller whose reason is money, a refund owed to you or a danger to your bank account, is the refund answer, and it leads to {o:refundscam}.',
      'Put your finger on the words that show it: where you went, what arrived, what was offered. If you cannot point, you do not have an answer yet.',
      'You do not need to wait for what happens next. If the answer is not the one for software that you fetched yourself, the next step is the same whichever of the three it turns out to be: stop, and use {t:check}. The questions that could only be answered afterwards are not asked, because by then the harm is done.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that separates it. Where a case shows two answers at once, the answer is the one named in the line under the pair.' },

  { id: 'check-how', kind: 'check', after: 'I1',
    case: 'dv-c-update-menu',
    ask: { type: 'step', step: 'I1' } },

  /* ---------- two whole cases, watched ---------- */
  { id: 'worked-wage', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the four names and the question about them. Before you run a case yourself, watch two being run from the top, in the order the questions are asked. You are not asked anything until the end of each.',
    case: 'dv-w-wage',
    steps: [
      { step: 'D1',
        reason: [
          'The email asks Ahmed to open a file: {cue:D1}. That is a request to open a file on his computer, so the answer is the one for something on a device. Nothing in it asks for a password, a code, money or facts about him, so the later answers do not apply.',
          'The story, a wage slip, is what makes it feel ordinary. The question looks at what is asked, and what is asked is to open a file.'
        ] },
      { step: 'I1',
        reason: [
          'Now ask how it came to him. It arrived by email, from an address that he does not know: {cue:I1}. He went nowhere, so it is not software that he fetched. Nobody is on a call with him, and nobody offers to fix anything or to refund anything.',
          'So the answer is the one for a file in a message. At the moment he is asked, with the email open, that is all he needs to know. He does not need to see what the file would do.'
        ] }
    ],
    hold: {
      neighbour: 'realinstall',
      prompt: { kind: 'reason',
        lead: 'When Ahmed opens the file, his computer will show the same box that every installation shows, so the case can look like software that a person chose.',
        choices: [
          { id: 'a', text: 'When the file runs, the computer will ask whether to allow changes.',
            note: 'True, and it is why the case can look like {o:realinstall}. But that box appears for every installation, real or harmful, so it cannot tell you which this is.' },
          { id: 'b', text: 'The file arrived in an email from an address Ahmed does not know, and he did not ask for it.' },
          { id: 'c', text: 'The email says it is about his pay, which is an ordinary thing to be emailed about.',
            note: 'True, and it is the reason he may open it. It tells you what the email claims to be about, not how it came to him.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:realinstall} you must be able to point to this: {needs:realinstall}. Ahmed did not decide to get any program, and he went nowhere to fetch one. The file came to him, and a reason to run it came with it.',
        'It is the question from Lena and her photo editor. {test:malware~realinstall} Here the file arrived in a message from an address he does not know, so the answer is {a:I1.file}.'
      ]
    },
    impression: {
      resembles: 'dv-invoice-file',
      text: [
        'You have your answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the invoice file: an email from an address nobody knows, a reason to open a file, and a name that ends like a program.',
        'Here the questions and the likeness agree, so the answer stands. The question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one that you prefer. Go back to the question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-form', kind: 'worked',
    h: 'A second whole case, where the story points the wrong way',
    link: 'The wage slip was a clean case: one thing was going on, and nothing in the story pulled the other way. In this second case the most noticeable thing in the story is not the thing that decides it. Watch which words each question picks out.',
    case: 'dv-w-form',
    steps: [
      { step: 'D1',
        reason: [
          'The man asks Mara to open a file and run it: {cue:D1}. That is a request to run a file on her device, so the answer is the one for something on a device.',
          'A refund is mentioned, and so is money, but nobody asks Mara to pay or send anything. And where a request asks for two things, the answer is the earlier one in the list, and something on a device comes before money.'
        ] },
      { step: 'I1',
        reason: [
          'Now ask how it came to her. A man is on the phone with her: {cue:I1}. He says that she is owed money, and he asks her to run a file and let him watch while he puts the money back. So the reason given is a refund, and a person is on the line.',
          'The file does arrive in an email, and that is why the case can look like a file in a message. But that answer is for the case where nobody is on a call with you. Here someone is, so the answer is the one for a refund.'
        ] }
    ],
    hold: {
      neighbour: 'malware',
      prompt: { kind: 'reason',
        lead: 'An email with a file to open and run arrives as the man speaks, so the case can look like a file in a message.',
        choices: [
          { id: 'a', text: 'A file arrives by email, and Mara is told to open and run it.',
            note: 'True, and it is why the case can look like {o:malware}. But a file in a message is the answer only when nobody is on a call with you, so it cannot settle this one.' },
          { id: 'b', text: 'A man is on the phone with her, saying that he owes her a refund, while she is told to run the file.' },
          { id: 'c', text: 'He says that he is from her phone company.',
            note: 'True, and it says who he claims to be. It is not a request, so it does not separate the two answers.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:malware} you must be able to point to this: {needs:malware}. The file did arrive in a message, but the case also has a person on a call with her, and that person is the one asking her to run it. As soon as someone is with you, a file is not the answer.',
        'It is the question from the refund call to Hal. {test:malware~refundscam} Here someone is on the line, saying that a refund is owed, so the answer is {a:I1.refund}.'
      ]
    },
    impression: {
      resembles: 'dv-energy-refund', first: 'dv-invoice-file',
      text: [
        'Now the second look: does this case look like one you know? A form to open and run, sent by email, may bring back the invoice file first, and that case was {o:malware}. So here the likeness and the questions seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:I1}. The invoice file has nothing like them: nobody was on the phone, and nobody spoke of money owed. The energy refund has: a caller, a refund owed, and a request to watch the device. So the case this one really looks like is the energy refund, and the answer stands.'
      ]
    } },

  /* ---------- after the drill ---------- */
  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the questions on your own. This card puts the unit in one place.',
    carry: [
      'Before any name, answer the first question: what is it asking me to do? For all four names in this unit the answer is the same, {a:D1.device}.',
      'Then ask how it came to you, and put your finger on the words that show it: where you went, what arrived, what was offered. If you cannot point, you do not have an answer yet.',
      'You can answer it at the moment you are asked. Do not wait to see what a file does or what a technician shows you: those can be known only afterwards, and by then it is too late to refuse.',
      'The box that asks whether to allow changes, the name of the company and the name of the program do not change the answer. A number or an address from the results of a search, or from a {t:searchad}, is not {t:already}.',
      'When a call shows a fault and a refund together, the answer is the refund. Whichever of the three it is, the next step for anything that came to you is the same: stop, and use {t:check}.',
      '{o:realinstall} is one of the four, and you need to be able to say it. Treating every installation as a scam is a mistake of its own.'
    ] },

  { id: 'transfer', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the four names is one step. Noticing the moment to ask the question is a separate step, and only you know where those moments are in your own life.',
      'Pick one of the four and name an occasion of your own: something you received, something someone said to you, or something you almost did. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'realinstall', occasion: 'The last program or app that you chose to get yourself, and where you went to get it.' },
      { outcome: 'malware', occasion: 'A file or a link in an email, a text or a chat that you were not expecting: an invoice, a parcel, a photo.' },
      { outcome: 'techsupport', occasion: 'A warning, a call or a search result that said something was wrong with a phone or a computer, and gave you someone to ring.' },
      { outcome: 'refundscam', occasion: 'A call or a message about a refund, a double charge or your bank account, from a company that you really deal with.' }
    ],
    places: ['At home', 'At work', 'On my phone', 'On a call'] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'The unit has taught you to name how a request came to you. This card is for what you will do about it, and it is yours to fill in or to leave.',
    intro: [
      'A plan is one line: if I see this, then I will do that. It is worth writing down because the moment a pop-up fills your window, or a caller asks to see your computer, is the worst moment to think of what to do, and the best moment to do something that you decided in advance.',
      'The lines below are examples to start from. You can use one, change it, or write your own two lines. Nothing is saved until you press the button.'
    ],
    cues: [
      { cue: 'a warning on my device that gives me a number to ring',
        then: 'not ring it, close the page or the browser, and ring the company on the number on my bill if I want to be sure' },
      { cue: 'a caller or a message that says I am owed a refund, or that my bank account needs attention, and wants to see my device',
        then: 'end the call, and ring the company or my bank myself, on the number on my bill or my card' },
      { cue: 'a file or a link in a message that I did not ask for, with a reason to open it',
        then: 'not open it, and ask the sender myself, through a way I already had' },
      { cue: 'a phone number or a link at the top of a search page, marked “Ad”',
        then: 'not use it, and use the number on my bill or an address that I have saved' },
      { cue: 'software that I want',
        then: 'get it only from the maker’s website through an address that I type or have saved, or from my device’s app store' }
    ] }
]);

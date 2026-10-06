// Scams, Unit Two, part three: the key's question as a question, the check on it, the worked case, and the two cards
// that close the unit after the drill (the recap and the plan: this is an action subject, so lesson standard A11 and P26
// call for a plan card).
// The app prints, on the question card: the question, what it is for, each answer with when it is given and the name it
// leads to, why it decides, and for every pair already compared the question that separates it and the key's tie-break.
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('scams', 'u2', [

  /* ---------- the question, as a question ---------- */
  { id: 'q-how', kind: 'question', step: 'I1',
    h: 'The question you have been answering all along',
    link: 'This card puts the question and its four answers in one place.',
    decides: [
      'The program, the box, the company named and the story do not decide the name: the same program can be fetched by you or sent to you. The things that would tell the four apart afterward, a file that runs quietly, a technician’s ordinary-looking lists, a balance on a page that someone else controls, can be seen only after the harm.'
    ],
    how: [
      'Ask who started it. If you did, and you went to the maker’s own website or your device’s app store, it is {o:realinstall}. If something came to you, ask what it was. A file or a link in a message, with nobody on the phone, is {o:malware}. A warning, call, message or ad that offers to fix a problem with your device is {o:techsupport}. A caller whose reason is money, a refund owed to you or a danger to your bank account, is {o:refundscam}.',
      'Put your finger on the words that show it: where you went, what arrived, what was offered. If you cannot point, you do not have an answer yet.',
      'If it is not the one that you fetched yourself, the next step is the same whichever scam it turns out to be: stop, and use {t:check}.'
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that separates it. Where a case shows two answers at once, the answer is the one named in the line under the pair.' },

  { id: 'check-how', kind: 'check', after: 'I1',
    case: 'dv-c-update-menu',
    ask: { type: 'step', step: 'I1' } },

  /* ---------- a whole case, watched ---------- */
  { id: 'worked-form', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'Before you run a case yourself, watch one being run from the top. In this one the most noticeable thing in the story is not the thing that decides it. You are not asked anything until the end.',
    case: 'dv-w-form',
    steps: [
      { step: 'D1',
        reason: 'The man asks Mara to open a file and run it: {cue:D1}. That is a request about her device. A refund is mentioned, but nobody asks her to pay or send anything.' },
      { step: 'I1',
        reason: 'Now ask how it came to her. A man is on the phone with her: {cue:I1}. He says that she is owed money, and asks her to run a file while he watches. The file does arrive in an email, which is why the case can look like a file in a message. But that answer is for when nobody is on a call with you. Here someone is, and the reason is a refund.' }
    ],
    hold: {
      neighbor: 'malware',
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
        'For {o:malware} you must be able to point to this: {needs:malware}. The file did arrive in a message, but a person on a call is the one asking her to run it. As soon as someone is with you, a file is not the answer.',
        '{test:malware~refundscam} Here someone is on the line, saying that a refund is owed, so the answer is {a:I1.refund}.'
      ]
    },
    impression: {
      resembles: 'dv-energy-refund', first: 'dv-invoice-file',
      text: [
        'Now the second look: does this case look like one you know? A form to run, sent by email, may bring back the invoice file first, and that case was {o:malware}. When the likeness and the questions disagree, go back to the question and find the words that answer it. They are {cue:I1}.',
        'The invoice file has nothing like them: nobody was on the phone, and nobody spoke of money owed. The energy refund has: a caller, a refund owed, and a request to watch the device. So the case that this one really looks like is the energy refund, and the answer stands.'
      ]
    } },

  /* ---------- after the drill ---------- */
  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'This card puts the unit in one place.',
    carry: [
      'Ask how it came to you, and put your finger on the words that show it: where you went, what arrived, what was offered. You can answer it before you install, open or share anything. Do not wait to see what a file does or what a technician shows you.',
      'The box that asks whether to allow changes, the name of the company and the name of the program do not change the answer. A number or an address from the results of a search, or from a {t:searchad}, is not {t:already}.',
      'When a call shows a fault and a refund together, the answer is the refund. For anything that came to you, the next step is the same: stop, and use {t:check}.',
      '{o:realinstall} is one of the four. Treating every installation as a scam is a mistake of its own.'
    ] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This card is for what you will do about it, and it is yours to fill in or to leave.',
    intro: [
      'A plan is one line: if I see this, then I will do that. Decide it now, because the moment a pop-up fills your window or a caller asks to see your computer is the worst moment to think. The lines below are examples to start from: use one, change it, or write your own.'
    ],
    cues: [
      { cue: 'a warning on my device that gives me a number to call',
        then: 'not call it, close the page or the browser, and call the company at the number on my bill if I want to be sure' },
      { cue: 'a caller or a message that says I am owed a refund, or that my bank account needs attention, and wants to see my device',
        then: 'end the call, and call the company or my bank myself, at the number on my bill or my card' },
      { cue: 'a file or a link in a message that I did not ask for, with a reason to open it',
        then: 'not open it, and ask the sender myself, through a way I already had' },
      { cue: 'a phone number or a link at the top of a search page, marked “Ad”',
        then: 'not use it, and use the number on my bill or an address that I have saved' },
      { cue: 'software that I want',
        then: 'get it only from the maker’s website through an address that I type or have saved, or from my device’s app store' }
    ] }
]);

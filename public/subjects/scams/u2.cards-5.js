// Scams, Unit Two, part three: the key's question as a question, the check on it, the worked story, and the two cards
// that close the unit after the drill (the recap and the plan: this is an action subject, so lesson standard A11 and P26
// call for a plan card).
// The app prints, on the question card: the question, each answer with when it is given and the name it leads to, why it
// decides, and for every pair already compared the question that separates it and the key's tie-break.
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('scams', 'u2', [

  /* ---------- the question, as a question ---------- */
  { id: 'q-how', kind: 'question', step: 'I1',
    h: 'The question to ask every time',
    link: 'Here is the question and its four answers in one place.',
    decides: [
      'The program, the box, the company named and the story do not decide it, because the same program can be fetched by you or sent to you. The signs that come later (a file that runs quietly, a technician’s “proof”, a balance on a page someone else controls) show up only after the harm.'
    ],
    how: [
      { do: 'Ask who started it.', why: 'If you did, from the maker’s own website or your app store, it is {o:realinstall}.' },
      { do: 'If it came to you, look for a person on the phone.', why: 'A file or a link in a message, with nobody on the phone, is {o:malware}.' },
      { do: 'If someone is on the phone, listen to the reason they give.', why: 'A problem with your device is {o:techsupport}, and a refund or your bank account is {o:refundscam}.' },
      { do: 'Find the exact words that show it: where you went, what arrived, what was offered.', why: 'If you cannot find them, you do not have an answer yet.' },
      { do: 'If you did not fetch it yourself, stop and use {t:check}.', why: 'The next step is the same whichever scam it turns out to be.' }
    ],
    whenBoth: 'Sometimes two answers both seem to fit. Each pair below has one question that separates it. If a story shows two at once, use the answer named under the pair.' },

  { id: 'check-how', kind: 'check', after: 'I1',
    case: 'dv-c-update-menu',
    ask: { type: 'step', step: 'I1' } },

  /* ---------- a whole story, watched ---------- */
  { id: 'worked-form', kind: 'worked',
    h: 'One whole story, where the file points the wrong way',
    link: 'Watch one story worked through. The first thing you notice is not what decides it, so read to the end.',
    case: 'dv-w-form',
    steps: [
      { step: 'D1',
        reason: 'The man asks Mara to open a file and run it: {cue:D1}. That is a request about her device. A refund is mentioned, but nobody asks her to pay or send anything.' },
      { step: 'I1',
        reason: 'Now ask how this started. A man is on the phone with her: {cue:I1}. He says she is owed money and asks her to run a file while he watches. The file does arrive in an email, which is why it can look like {a:I1.file}. But that answer is for when nobody is on the phone. Here someone is, and his reason is a refund.' }
    ],
    hold: {
      neighbor: 'malware',
      prompt: { kind: 'reason',
        lead: 'A file arrives by email, so this can look like {o:malware}. What decides it?',
        choices: [
          { id: 'a', text: 'A file arrives by email, and Mara is told to open and run it.',
            note: 'True, and it is why this looks like {o:malware}. But a file in a message is the answer only when nobody is on the phone.' },
          { id: 'b', text: 'A man is on the phone with her, saying he owes her a refund.' },
          { id: 'c', text: 'The man says he is calling from her phone company.',
            note: 'True, but it says only who he claims to be. It is not what he asks her to do.' }
        ],
        answer: 'b' },
      reason: [
        'To be {o:malware}, it would need this: {needs:malware}. The file did arrive in a message, but a person on the phone is the one asking her to run it. Once someone is on the line, a file is not the answer.',
        '{test:malware~refundscam} Here someone is on the line, saying a refund is owed, so the answer is {a:I1.refund}.'
      ]
    },
    impression: {
      resembles: 'dv-energy-refund', first: 'dv-invoice-file',
      text: [
        'A second look: does this remind you of a story you know? A form to run, sent by email, may bring back the invoice file, which was {o:malware}.',
        'When a likeness and the answer disagree, go back to the words that answer the question: {cue:I1}. The invoice file has nothing like them: nobody was on the phone, and nobody spoke of money owed. The energy refund has: a caller, a refund owed, and a request to watch the screen. So this story really looks like the energy refund, and the answer stands.'
      ]
    } },

  /* ---------- after the drill ---------- */
  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You can now tell all four apart on your own.',
    carry: [
      'Before you install, open or share anything, ask how it started and find the words that show it: where you went, what arrived, what was offered. Do not wait to see what a file does or what a technician shows you.',
      'The “allow changes” box, the company’s name and the program’s name do not change the answer. A number or an address from search results, or from a {t:searchad}, is not {t:already}.',
      'When a call shows a fault and a refund together, the answer is the refund. For anything that came to you, the next step is the same: stop, and use {t:check}.',
      '{o:realinstall} is one of the four. Treating every installation as a scam is a mistake too.'
    ] },

  { id: 'plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This card is for what you will do about it. Fill it in, or leave it.',
    intro: [
      'A plan is one line: if I see this, then I will do that. Decide it now, because the moment a pop-up fills your window or a caller asks to see your computer is the worst moment to think. These are examples to start from: use one, change it, or write your own.'
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

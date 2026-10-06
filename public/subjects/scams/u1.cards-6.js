// Scams, Unit One, part three: the first question as a question, the check on it, the one worked case, and the two
// cards that close the unit after the drill (the recap, and the plan: this is an action subject, so lesson standard A11
// and P26 call for a plan card).
// The app prints, on the question card: the question, what it is for, each answer with when it is given, why it
// decides, and for every pair already compared the question that separates it and the tie-break.
// Four pairs have no look-alike card of their own: the ledger names this card (or the worked case) as the one that
// teaches them (taughtIn).

FC.cards('scams', 'u1', [

  /* ---------- the first question, as a question ---------- */
  { id: 'q-gate', kind: 'question', step: 'D1',
    h: 'The question you have been answering all along',
    link: 'This card puts the question and its five answers in one place.',
    decides: [
      'If you start with who a message says it is from, or how worried it sounds, you are looking at what the sender chose to show you. What it asks you to do is what you would actually be doing.'
    ],
    how: [
      'Read the whole message before you answer, the last sentence included. The request is often at the end, after the reason it gives. Then go down the list in order, and stop at the first answer that the message shows.',
      'First, look for {a:D1.device}: {needs:device}.',
      'Second, look for {a:D1.access}: {needs:access}.',
      'Third, look for {a:D1.money}: {needs:money}.',
      'Fourth, look for {a:D1.details}: {needs:details}.',
      'If the message shows none of those four, what is left is {a:D1.nothing}: {needs:nothing}.',
      'Whichever answer you give, put your finger on the words that show it. If you cannot point to a request, you do not have an answer yet.'
    ],
    whenBoth: 'Some messages ask for two things at once: the refund call asked Harold to let a stranger watch his device and then to send money back. Every message gets one answer, and the earlier answer in the list wins. Each pair below has a question that tells it apart.' },

  { id: 'check-gate', kind: 'check', after: 'D1',
    case: 'g-council-bins',
    ask: { type: 'step', step: 'D1' } },

  /* ---------- one whole case, watched ---------- */
  { id: 'worked-statement', kind: 'worked',
    h: 'A whole case, where the opening points the wrong way',
    link: 'Watch one case run from the question to the answer. The first thing you notice in it is not the thing that decides it. Read to the end before you answer.',
    case: 'g-statement',
    steps: [
      { step: 'D1',
        reason: [
          'The text opens like a notice: the statement is ready to view. If it ended there, it would only be telling Chidi something.',
          'It does not end there. Read on: {cue:D1}. That is a request to pay a sum at an address today, with a reason to hurry. The message has stopped being news and has become a demand. Nothing in it asks for a program, a file, a sign-in or facts about Chidi, so the earlier answers do not apply. The answer is the one for money.'
        ] }
    ],
    hold: {
      neighbor: 'nothing',
      prompt: { kind: 'reason',
        lead: 'The text opens with a statement that is ready to view, so the case can look like a message that tells you something.',
        choices: [
          { id: 'a', text: 'It opens with news: the summer statement is ready to view.',
            note: 'True, and it is why the case can look like {a:D1.nothing}. If the text ended there, that would be the answer. It does not end there.' },
          { id: 'b', text: 'It ends by telling Chidi to pay $79 at an address today, to keep his line open.' },
          { id: 'c', text: 'It comes from his broadband company, and the name of the company is correct.',
            note: 'True, and it says who the text claims to be from. It is not a request, so it does not separate the two answers you are choosing between.' }
        ],
        answer: 'b' },
      reason: [
        'For {a:D1.nothing} you must be able to point to this: {needs:nothing}. The statement being ready is news. The last sentence is a request for money, with its own address to pay at, and a message that only tells you something has no such thing.',
        'A notice and a demand can be about the same bill. What separates them is whether anyone asks you to pay. {test:money~nothing} Here the text has both, and the demand is the part the question is about. The answer is {a:D1.money}.'
      ]
    },
    impression: {
      resembles: 'g-rent', first: 'g-delivery',
      text: [
        'Now a second look: does this case look like one you know? A company writing to say that something is ready may bring back the delivery update, which was {a:D1.nothing}. So the likeness and the question seem to disagree.',
        'When that happens, go back to the question and find the words that answer it: {cue:D1}. The delivery update ended after the news. The rent email did not: it had an amount, an address and a day to pay by. So the case this one really looks like is the rent email, and the answer stands.'
      ]
    } },

  /* ---------- after the drill ---------- */
  { id: 'recap-gate', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own.',
    carry: [
      'Before anything else, ask what the message asks you to do right now, and point to the words that show it. If you cannot point to a request, you do not have an answer yet.',
      'The answer is not a verdict. Each of the five kinds can be real or a copy. How a message looks, who it says it is from and how well it is written do not change the answer. Telling a real message from a copy is a job for what comes next, and for {t:check}.',
      'A message that only tells you something is {a:D1.nothing}. Treating it as a threat is a mistake too.',
      'A number, a link or an app that came with the message is never {t:already}, even when you are the one who dials it or taps it.',
      'When a message asks for two things, the answer is the earlier one in the list: something on your device, then a way into an account, then money, then facts about you.'
    ] },

  { id: 'plan-gate', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This card is for what you will do about it, and it is yours to fill in or to leave.',
    intro: [
      'A plan is one line: if I see this, then I will do that. The moment a message arrives is the worst moment to think of what to do, and the best moment to do something you decided in advance. The lines below are examples to start from: use one, change it, or write your own. Nothing is saved until you press the button.'
    ],
    cues: [
      { cue: 'a request to put something on my phone or computer, to open a file, or to let someone watch my device',
        then: 'stop, and not do it until I have called the company at a number I already had' },
      { cue: 'a message that came to me asking me to sign in, give a code or press Allow',
        then: 'not use anything it gives me, and open the site or the app myself, from an address I already had' },
      { cue: 'a message asking me to pay or send money',
        then: 'not pay on the spot, and call the person or the company first, at a number I already had' },
      { cue: 'a message, or a stranger, asking me about myself',
        then: 'not answer until I know who is asking, and call them at a number I already had to find out' },
      { cue: 'a message that only tells me something',
        then: 'read it and leave it alone, and use my own app or my own number if I want to follow it up' }
    ] }
]);

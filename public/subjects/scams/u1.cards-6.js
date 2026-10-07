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
    h: 'The one question to ask first',
    link: 'Here is the question and its five answers in one place.',
    decides: [
      'Skip this question and you end up judging how real a message looks, which is the one thing a scam is built to get right.'
    ],
    how: [
      { do: 'Read the whole message, last sentence included.', why: 'The request is often at the end, after the reason it gives.' },
      { do: 'First look for {a:D1.device}.', why: 'It reaches everything on your phone or computer.' },
      { do: 'Next look for {a:D1.access}.', why: 'It reaches what the account holds, money included.' },
      { do: 'Next look for {a:D1.money}.', why: 'Money is usually gone once it is sent.' },
      { do: 'Next look for {a:D1.details}.', why: 'Facts about you get used later.' },
      { do: 'If none of those four is there, it is {a:D1.nothing}.', why: 'Then nothing is being asked.' },
      { do: 'Find the exact words that show your answer.', why: 'If you cannot find them, you do not have an answer yet.' }
    ],
    whenBoth: 'Some messages ask for two things at once: the refund call asked Harold to let a stranger watch his screen and then to send money back. Each message gets one answer, and the one higher in the list wins. The test for each pair is below.' },

  { id: 'check-gate', kind: 'check', after: 'D1',
    case: 'g-council-bins',
    ask: { type: 'step', step: 'D1' } },

  /* ---------- one whole message, worked ---------- */
  { id: 'worked-statement', kind: 'worked',
    h: 'One whole message, where the opening points the wrong way',
    link: 'Watch one message worked through. The first thing you notice is not what decides it, so read to the end.',
    case: 'g-statement',
    steps: [
      { step: 'D1',
        reason: [
          'The text opens like a notice: the statement is ready to view. If it stopped there, it would only be news.',
          'It does not stop there: {cue:D1}. That asks Chidi to pay at an address, today. No program, file, sign-in or facts about him are asked for, so the answers higher in the list do not apply.'
        ] }
    ],
    hold: {
      neighbor: 'nothing',
      prompt: { kind: 'reason',
        lead: 'The text opens with a statement that is ready to view, so it can look like {a:D1.nothing}. What decides it?',
        choices: [
          { id: 'a', text: 'It opens with news: the summer statement is ready to view.',
            note: 'True, and it is why this looks like {a:D1.nothing}. If the text stopped there, that would be the answer.' },
          { id: 'b', text: 'It ends by telling Chidi to pay $79 at an address today.' },
          { id: 'c', text: 'It names his broadband company, and the name is correct.',
            note: 'True, but that says who the text claims to be from. It does not say what it asks.' }
        ],
        answer: 'b' },
      reason: [
        'The statement being ready is news. The last sentence asks Chidi to pay, with an address to pay at. A message that only tells you something has no such thing.',
        'A notice and a demand can be about the same bill. The test is whether anyone asks you to pay. Here the text has both, and the demand wins: {a:D1.money}.'
      ]
    },
    impression: {
      resembles: 'g-rent', first: 'g-delivery',
      text: [
        'A second look: does this remind you of a story you know? A company writing to say something is ready may bring back the delivery update, which was {a:D1.nothing}.',
        'When a likeness and the answer disagree, go back to the words that answer the question: {cue:D1}. The delivery update stopped after the news. This text did not: it had an amount, an address and a day to pay by, like the rent email. So the answer stands.'
      ]
    } },

  /* ---------- after the drill ---------- */
  { id: 'recap-gate', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own.',
    carry: [
      'Before you tap, call, pay or reply, find the words that show what the message asks you to do. If you cannot find a request, you do not have an answer yet.',
      'The answer is not a verdict. Each of the five can be real or a copy, and how a message looks, who it says it is from and how well it is written change nothing. Telling real from copy is the job of what comes next, and of {t:check}.',
      'A message that only tells you something is {a:D1.nothing}. Treating it as a threat is a mistake too.',
      'A number, a link or an app that came with the message is never {t:already}, even when you are the one who dials or taps it.',
      'When a message asks for two things, the one higher in the list wins: your device, then an account, then money, then facts about you.'
    ] },

  { id: 'plan-gate', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This card is yours to fill in or to leave.',
    intro: [
      'A plan is one line: if I see this, I will do that. The moment a message arrives is the worst time to decide what to do, so decide now. The lines below are examples. Use one, change it, or write your own. Nothing is saved until you press the button.'
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

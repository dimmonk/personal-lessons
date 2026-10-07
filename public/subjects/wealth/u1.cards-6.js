// Wealth Preservation, Unit One, part four: the key's first question as a question, one whole case, and the two cards that
// close the unit after the drill. This is an action subject (subject.action is true), so the unit ends with a plan card
// (lesson standard A11, P26). The app prints, on the question card: the question, what it is for, each answer with when it is
// given, why it decides, and for every pair already compared the question that separates it and the key's tie-break.
// Three pairs of families have no look-alike card of their own: the ledger names the question card as the one that teaches them
// (taughtIn). Field guide: see u1.cards-1.js.

FC.cards('wealth', 'u1', [

  /* ---------- The key's first question, as a question ---------- */
  { id: 'q-gate', kind: 'question', step: 'D1',
    h: 'The question to ask before anything else',
    link: 'This card puts the question and its five answers in one place.',
    decides: [
      'Get this wrong and you fix the wrong thing. Take a yearly fee for a fall in prices and you go looking for what to sell and when, when the real problem is a sum that leaves whatever prices do. A fix answers one particular way of losing money, so you need to know which one first.'
    ],
    how: [
      { do: 'Read to the end before you answer.', why: 'The day, or the one thing that matters, is often in the last sentence.' },
      { do: 'Look in the words for each of the four problems, one at a time.', why: 'For each, you must be able to find the words that show it.' },
      { do: 'Found none? The answer is {a:D1.none}, and you stop.', why: 'A problem that is not in the words is one you invented.' },
      { do: 'Put your finger on the words that show your answer: the sum and how often, the day and what the money is held in, the one thing and how much of everything it is, the death or the paper.', why: 'If you cannot find them, you do not have an answer yet.' }
    ],
    whenBoth: 'Some stories show two answers at once, and one of the two wins. Three pairs have no card of their own, and each is easy to mix up: {a:D1.none} and {a:D1.erosion}, {a:D1.handover} and {a:D1.erosion}, {a:D1.none} and {a:D1.shock}. The test for each pair is printed below.' },

  /* ---------- One whole story, watched ---------- */
  { id: 'worked-reunion', kind: 'worked',
    h: 'One whole story, where the loudest thing points the wrong way',
    link: 'Watch one story worked through. The first thing you notice is not what decides it, so read to the end.',
    case: 'w-wk-2',
    steps: [
      { step: 'D1',
        reason: [
          'The story opens with a loud fall: 30%, $102,000 off a $340,000 401(k), and a man asking whether to sell everything. If it stopped there, you might think it was {a:D1.timing}.',
          'It does not stop there: {cue:D1}. A fall only does harm when something has to be sold or paid on the day, and nothing is waiting for Ronan’s money: his pay covers the bills, and he has seven years before he stops work. None of the other three shows up either, so the answer is {a:D1.none}.'
        ] }
    ],
    hold: {
      neighbor: 'timing',
      prompt: { kind: 'reason',
        lead: 'Ronan’s 401(k) has fallen by 30% and he wants to sell, so this can look like {a:D1.timing}. What decides it?',
        choices: [
          { id: 'a', text: 'His 401(k) has fallen by 30%, which is $102,000 off the total.',
            note: 'True, and it is why this looks like {a:D1.timing}. But a fall shows up in {a:D1.timing} and {a:D1.none} alike, so it cannot tell you which this is.' },
          { id: 'b', text: 'He draws nothing from it, his pay covers his bills, and retirement is seven years away.' },
          { id: 'c', text: 'Ronan is worried, and he wants to sell everything before it gets worse.',
            note: 'True, and worry is what makes it feel urgent. But how worried someone is does not show what the money must pay for.' }
        ],
        answer: 'b' },
      reason: [
        'For {a:D1.timing} you would need to find this: {needs:timing}. The fall and the shares are there, but nothing is waiting for the money: no bills are paid from it, no bill falls due, and no plan has drifted.',
        'This is the question from Ines’s story. {test:none~timing} Here nothing is needed from the 401(k) for seven years, so the answer is {a:D1.none}. Whether Ronan should sell is a different question, and the story gives him no reason to.'
      ]
    },
    impression: {
      resembles: 'w-saver', first: 'w-couple-fall',
      text: [
        'A second look: does this remind you of a story you know? A fall of 30% and a worried man may bring back Pete and Jean, whose story was {a:D1.timing}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words that answer it: {cue:D1}. Pete and Jean sold shares every month to pay their bills, with nothing set aside. Ronan’s story is the opposite. The story this one really looks like is Aisha’s, who would not touch her 401(k) for thirty years, so the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-gate', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own.',
    carry: [
      'Before you fix anything, ask what could lose the money, and find the words that show it. If you cannot find them, you do not have an answer yet.',
      'The answer tells you where to look. It does not say something is wrong: a fee can pay for real work.',
      'A fall in prices only hurts money that something is waiting for: bills, living costs, or a mix that has drifted. Money that nothing is waiting for can wait for prices to come back.',
      'A story where all the papers are in order is still {a:D1.handover}. {a:D1.none} is for a story that raises none of the four: if you cannot find the words, do not invent them, and do not buy a fix for a problem that is not there.',
      'The question is about {t:pot}, everything someone has built up and wants to keep, never about the pay that arrives each month.'
    ] },

  { id: 'plan-gate', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This last card is optional, and it is the only one that asks you to decide something. If you want to, write one line you can keep.',
    intro: 'A plan is one sentence in two parts: what you will notice, and what you will then do. The lines below are examples to start from. You can change them or write your own, and nothing is saved until you press the button.',
    cues: [
      { cue: 'someone offers me a product or a fix for my money', then: 'I ask what could lose my money that it protects me from, and I ask for the numbers.' },
      { cue: 'a statement or a letter about my money arrives', then: 'I find the words that say what comes out of it every year, and I write the figure down.' },
      { cue: 'I will need a sum of money on a certain date', then: 'I check what it is held in, and what that could do before the date.' },
      { cue: 'someone tells me I should do something about my money', then: 'I ask which of the five answers I can find in my own money, and if the answer is none, I leave it alone.' }
    ] }
]);

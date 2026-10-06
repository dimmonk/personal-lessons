// Wealth Preservation, Unit One, part four: the key's first question as a question, one whole case, and the two cards that
// close the unit after the drill. This is an action subject (subject.action is true), so the unit ends with a plan card
// (lesson standard A11, P26). The app prints, on the question card: the question, what it is for, each answer with when it is
// given, why it decides, and for every pair already compared the question that separates it and the key's tie-break.
// Three pairs of families have no look-alike card of their own: the ledger names the question card as the one that teaches them
// (taughtIn). Field guide: see u1.cards-1.js.

FC.cards('wealth', 'u1', [

  /* ---------- The key's first question, as a question ---------- */
  { id: 'q-gate', kind: 'question', step: 'D1',
    h: 'The question you have been answering all along',
    link: 'This card puts the question and its five answers in one place.',
    decides: [
      'Get the answer wrong and you ask the wrong questions next, however carefully. Take a yearly charge for a fall in prices and you look for what to sell and when, when you should have looked for a sum that comes out whatever prices do. That is why this question comes first, before any finer name and before any cure: a cure answers one particular way of losing money, and until you know which, there is nothing for it to answer.'
    ],
    how: [
      'Read the whole case, the last sentence included: the day, or the one thing that matters, is often there. Then look in the words for each of the four things the question asks about, one at a time, and ask whether you can point to the words that show it. If you can point to none, the answer is {a:D1.none}, and you stop.',
      'Whichever answer you give, put your finger on the words that show it: the sum that comes out and how often, the day and what the money is held in, the one thing and how much of everything it is, the death or the paper. If you cannot point, you do not have an answer yet.'
    ],
    whenBoth: 'Some cases show two answers at once, and one of the two wins. Three pairs have no case of their own here, and each is easy to mix up: {a:D1.none} and {a:D1.erosion}, {a:D1.handover} and {a:D1.erosion}, {a:D1.none} and {a:D1.shock}. The test for each pair is printed below.' },

  /* ---------- One whole case, watched ---------- */
  { id: 'worked-reunion', kind: 'worked',
    h: 'A whole case, where the loudest thing points the wrong way',
    link: 'Watch one case run from the question to the answer. The first thing you notice in it is not the thing that decides it. Read to the end before you answer.',
    case: 'w-wk-2',
    steps: [
      { step: 'D1',
        reason: [
          'The case opens with a loud fall: 30%, $102,000 off a $340,000 401(k), and a man asking whether to sell everything. If the case ended there, you might think it was about a fall in prices.',
          'It does not end there. Read on: {cue:D1}. A fall only does harm when something has to be sold or paid on the day. Ronan draws nothing, his pay covers the bills, and he has seven years before he stops work. Nothing is waiting for the money, and none of the other three can be pointed to either. That leaves {a:D1.none}.'
        ] }
    ],
    hold: {
      neighbor: 'timing',
      prompt: { kind: 'reason',
        lead: 'Ronan’s 401(k) has fallen by 30% and he wants to sell, so the case can look like {a:D1.timing}.',
        choices: [
          { id: 'a', text: 'The 401(k) has fallen by 30%, which is $102,000.',
            note: 'True, and it is why the case can look like {a:D1.timing}. But a fall turns up in {a:D1.timing} and in {a:D1.none} alike, so it cannot tell you which of the two this is.' },
          { id: 'b', text: 'Ronan draws nothing from the 401(k), his pay covers his bills, and he will not stop work for seven years.' },
          { id: 'c', text: 'Ronan is worried, and wants to sell.',
            note: 'True, and worry is what makes it feel urgent. But how worried someone is does not show what the money must pay for, and that is what decides it.' }
        ],
        answer: 'b' },
      reason: [
        'For {a:D1.timing} you must be able to point to this: {needs:timing}. The fall is there, and so are the shares, but nothing is waiting for the money: no bills are paid from it, no bill falls due, and no plan has drifted. A fall that catches nothing raises nothing.',
        'It is the question from Ines. {test:none~timing} Here nothing is needed from the 401(k) for seven years, so the answer is {a:D1.none}. Whether Ronan should sell is a different question, and the case gives him no reason to say yes.'
      ]
    },
    impression: {
      resembles: 'w-saver', first: 'w-couple-fall',
      text: [
        'Now a second look: does this case look like one you know? A fall of 30% and a man worried about his money may bring back Pete and Jean first, and Pete and Jean’s case was {a:D1.timing}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it: {cue:D1}. Pete and Jean sold shares every month to pay their bills, with nothing set aside. Ronan’s case has the opposite. The case this one really looks like is Aisha’s, who would not touch her 401(k) for thirty years, and the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-gate', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own.',
    carry: [
      'Before any cure, ask what could lose the money, and point to the words in the case that show it. If you cannot point, you do not have an answer yet.',
      'The answer tells you where to look. It does not say that something is wrong: a charge can pay for real work.',
      'A fall in prices does harm only to money that something is waiting for: bills, living costs, or a mix that has moved. Money that nothing is waiting for can wait for prices to come back.',
      'A case in which the papers are all in order is still a case about {a:D1.handover}. {a:D1.none} is for a case that raises none of the four: if you cannot point to words that raise one, do not invent them, and do not buy a cure for a problem the case does not have.',
      'The question is about {t:pot}, everything someone has built up and wants to keep, and never about the pay that arrives each month.'
    ] },

  { id: 'plan-gate', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This last card is optional, and it is the only one that asks you to decide something. If you want to, write one line you can keep.',
    intro: 'A plan is one sentence in two parts: what you will notice, and what you will then do. The lines below are examples to start from. You can change them or write your own, and nothing is saved until you press the button.',
    cues: [
      { cue: 'someone offers me a product or a structure', then: 'I ask what could lose my money that it answers, and I ask for that in numbers.' },
      { cue: 'a statement or a letter about my money arrives', then: 'I find the words that say what comes out of it every year, and I write the figure down.' },
      { cue: 'I will need a sum of money on a certain date', then: 'I check what it is held in, and what that could do before the date.' },
      { cue: 'someone tells me I should do something about my money', then: 'I ask which of the five answers I can point to in my own case, and if the answer is none, I leave it alone.' }
    ] }
]);

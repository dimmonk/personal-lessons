// Wealth Preservation, Unit One, part four: the key's first question as a question, the two worked cases, and the three cards that
// close the unit after the drill. This is an action subject (subject.action is true), so the unit ends with a plan card
// (lesson standard A11, P26). The app prints, on the question card: the question, what it is for, each answer with when it is
// given, why it decides, and for every pair already compared the question that separates it.
// Field guide: see u1.cards-1.js.

FC.cards('wealth', 'u1', [

  /* ---------- The key's first question, as a question ---------- */
  { id: 'q-gate', kind: 'question', step: 'D1',
    h: 'The question you have been answering all along',
    link: 'Since the pension fund you have seen the question at the foot of each new answer, with one answer under it. This card puts the question and its five answers in one place, and says why it is asked before anything else.',
    decides: [
      'A case can only be answered on what it is made of. If you take a yearly charge for a fall in prices, you look for what to sell and when, and what you should have looked for is a sum that comes out whatever prices do. If you take a sound case for one of the four, you go looking for a problem the case does not have. Getting the answer wrong means asking the wrong questions next, however carefully you ask them.',
      'That is why this question comes first, before any finer name, and why every case in this subject starts with it. In this subject it also comes before any cure. A cure answers one particular way of losing money, and until you know which way you are looking at, you have nothing for the cure to answer.',
      'In this unit it is the only question, so its answer is the name. In the rest of the subject, each of the first four answers is followed by one more question, which leads to a finer name and says what to do. The fifth answer is followed by nothing. The answers you give on the way to a name are kept: this first answer, and then the answer to the next question. Once there are two answers, two things are marked separately: the name you give a case, and your answers on the way to it. A right name reached by a wrong answer to this first question counts as a miss, which is why the first question gets a whole unit of practice.'
    ],
    how: [
      'Read the whole case before you answer, the last sentence included. The last sentence is often where the day is, or where the one thing that matters is. Then look in the words for each of the four things the question asks about, one at a time, and ask whether you can point to the words that show it.',
      '{a:D1.erosion}: {needs:erosion}.',
      '{a:D1.timing}: {needs:timing}.',
      '{a:D1.shock}: {needs:shock}.',
      '{a:D1.handover}: {needs:handover}.',
      'If you can point to the words for exactly one, that is the answer. If you can point to words for two, a rule says which answer wins, and the two rules are below. If you can point to none, the answer is {a:D1.none}: {needs:none}. Then you stop, and the case is finished.',
      'Whichever answer you give, put your finger on the words that show it: the sum that comes out and how often, the day and what the money is held in, the one thing and how much of everything it is, the death or the paper, or the words that tie the case to money simply being kept. If you cannot point, you do not have an answer yet.'
    ],
    whenBoth: 'Some cases show two of the five at once. You have met two. In Marguerite’s case, bills paid in a fall were made out of one company, and the answer was {a:D1.shock}. In Carl and Una’s case, a fall had made a fixed yearly sum too big, and the answer was {a:D1.erosion}. In both, {a:D1.timing} gave way. Every case gets one answer, and that is how it is chosen. There is one more case of the second kind: a planned sale to put a split back, where the tax on the sale is the problem and new money paid in could do the same job. It is not in this unit’s cases, and it is enough for now to know that it exists. Each pair below has been set side by side earlier in this unit, and each has one question that separates it.' },

  { id: 'check-gate', kind: 'check', after: 'D1',
    case: 'w-kind',
    ask: { type: 'step', step: 'D1' } },

  /* ---------- Two whole cases, watched ---------- */
  { id: 'worked-employer', kind: 'worked',
    h: 'A whole case, from the question to the answer',
    link: 'You have the five answers and the question about them. Before the drill, watch two cases being run from the top. You are not asked anything until the end of each.',
    case: 'w-wk-1',
    steps: [
      { step: 'D1',
        reason: [
          'The unit taught a way to answer this question: look in the words for each of the four things it asks about, and see how many you can point to. Nothing in this case comes out every year: no charge, no tax, no sum spent. No bill falls due on a date, and no living costs are paid from the money. Nothing is said about a death, a will or a form. Beth does not expect to need any of the money for twenty years.',
          'What the case does show is this: {cue:D1}. £560,000 out of £700,000 is 80%, and it is all in one company, which Beth has worked for since she was twenty-four. That is what you point to for {a:D1.shock}.',
          'The last sentence does something different. The company’s price has fallen 35%, which is £196,000 off £560,000, or 28% of everything she has. It tells you how much one thing can take. It does not tell you the answer, because that fall belongs to one company, and prices elsewhere have hardly moved.'
        ] }
    ],
    hold: {
      neighbour: 'timing',
      prompt: { kind: 'reason',
        lead: 'The company’s price has fallen, so the case can look like a case about prices falling.',
        choices: [
          { id: 'a', text: 'The company’s price has fallen by 35% this year.',
            note: 'True, and it is why the case can look like {a:D1.timing}. But a fall in a price turns up in both answers, so it cannot tell you which of the two this is.' },
          { id: 'b', text: 'Most of what Beth has, £560,000 of £700,000, is in one company, and prices elsewhere have hardly moved.' },
          { id: 'c', text: 'Beth has worked for the company for twenty-eight years.',
            note: 'True, and it explains why so much is in one place. But how long she has worked there does not decide between the two answers.' }
        ],
        answer: 'b' },
      reason: [
        'For {a:D1.timing} you must be able to point to this: {needs:timing}. Beth’s case has a fall, and her money is in shares, but nothing in it catches her out: she does not need the money for twenty years, no bill is due, and no plan has drifted. Her case is about what one company can do to the money, whatever the rest of the market is doing.',
        'It is the question from Lars. {test:shock~timing} Here one thing could do the damage while every other price stayed where it is, so the answer is {a:D1.shock}.'
      ]
    },
    impression: {
      resembles: 'w-employer',
      text: [
        'You have the answer. Now take a second look of a different kind: does this case look like one you know? It should bring back Karim. There too most of the money, 70%, was shares in the company where he worked.',
        'Here the answer and the likeness agree, so it stands. The question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-reunion', kind: 'worked',
    h: 'A second whole case, where the loudest thing points the wrong way',
    link: 'Beth’s was a clean case: one thing was going on in it. In this second case the first thing you notice is not the thing that decides it. Read to the end before you answer.',
    case: 'w-wk-2',
    steps: [
      { step: 'D1',
        reason: [
          'The case opens with a loud fall: 30%, £102,000 off a £340,000 pension, and a man asking whether to sell everything. If the case ended there, you might think it was about a fall in prices.',
          'It does not end there. Read on: {cue:D1}. A fall only does harm when something has to be sold or paid on the day. Ronan draws nothing, his pay covers the bills, and he has seven years before he stops work. Nothing is waiting for the money.',
          'Put the other three to it as well. Nothing comes out of the pension every year in the case. No one thing is most of it. Nothing is said about a death, a will or a form. None of the four can be pointed to, and that leaves the fifth answer.'
        ] }
    ],
    hold: {
      neighbour: 'timing',
      prompt: { kind: 'reason',
        lead: 'Ronan’s pension has fallen by 30% and he wants to sell, so the case can look like {a:D1.timing}.',
        choices: [
          { id: 'a', text: 'The pension has fallen by 30%, which is £102,000.',
            note: 'True, and it is why the case can look like {a:D1.timing}. But a fall turns up in {a:D1.timing} and in {a:D1.none} alike, so it cannot tell you which of the two this is.' },
          { id: 'b', text: 'Ronan draws nothing from the pension, his pay covers his bills, and he will not stop work for seven years.' },
          { id: 'c', text: 'Ronan is worried, and wants to sell.',
            note: 'True, and worry is what makes it feel urgent. But how worried someone is does not show what the money must pay for, and that is what decides it.' }
        ],
        answer: 'b' },
      reason: [
        'For {a:D1.timing} you must be able to point to this: {needs:timing}. The fall is there, and so are the shares, but nothing is waiting for the money: no bills are paid from it, no bill falls due, and no plan has drifted. A fall that catches nothing raises nothing.',
        'It is the question from Ines. {test:none~timing} Here nothing is needed from the pension for seven years, so the answer is {a:D1.none}. Whether Ronan should sell is a different question, and the case gives him no reason to say yes.'
      ]
    },
    impression: {
      resembles: 'w-saver', first: 'w-couple-fall',
      text: [
        'Now the second look: does this case look like one you know? A fall of 30% and a man worried about his money may bring back Pete and Jean first, and Pete and Jean’s case was {a:D1.timing}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:D1}. Pete and Jean’s case had nothing like them: they sold shares every month to pay their bills, with nothing set aside. Ronan’s case has the opposite. The case this one really looks like is Aisha’s, who would not touch her pension for thirty years, and the answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'recap-gate', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now answered the first question on your own. This card puts the unit in one place.',
    carry: [
      'Before any cure, ask what could lose the money, and point to the words in the case that show it. If you cannot point, you do not have an answer yet.',
      'The answer tells you where to look. It does not say that something is wrong. A charge can pay for real work, and a loan can be a safe one. What to do about it, if anything, comes from the questions that follow.',
      'A fall in prices does harm only to money that something is waiting for: bills, living costs, or a mix that has moved. Money that nothing is waiting for can wait for prices to come back.',
      'When a fall shows up beside one company that is most of the money, the answer is {a:D1.shock}. When it shows up beside a fixed yearly sum taken from money that has shrunk, the answer is {a:D1.erosion}.',
      'A case in which the papers are all in order is still a case about {a:D1.handover}. {a:D1.none} is for a case that raises none of the four.',
      '{a:D1.none} is a real answer, and a common one. If you cannot point to words that raise one of the four, do not invent them, and do not buy a cure for a problem the case does not have.',
      'The question is about {t:pot}, everything someone has built up and wants to keep, and never about the pay that arrives each month.',
      'Every case in this subject starts with this question. Your answer to it is the first of your answers on the way to a name.'
    ] },

  { id: 'transfer-gate', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the five answers is one step. Noticing the moment to ask the question is a separate step, and only you know where those moments are in your life.',
      'Pick one of the five and name an occasion of your own: something you read, something you were offered, or something you did. The lines under each answer are there to jog your memory.'
    ],
    prompts: [
      { family: 'erosion', occasion: 'A statement, a charge or a tax bill you have never read, or a sum you take out of your money every month.' },
      { family: 'timing', occasion: 'Money you will need on a date, or every month, and what it is held in.' },
      { family: 'shock', occasion: 'The one thing that is most of what you, or someone you know, has: an employer’s shares, a property, a business, a loan.' },
      { family: 'handover', occasion: 'Your will, and the forms held by your pension company or your bank, and the last time you checked whom they name.' },
      { family: 'none', occasion: 'Money you are only keeping, about which someone has told you that you should do something.' }
    ],
    places: ['At home', 'At work', 'In the news', 'In my own head'] },

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

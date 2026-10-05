// Wealth Preservation, Unit Three, part four (second half): the key's question as a question, the two worked cases, and the three
// cards that close the unit after the drill. This is an action subject (subject.action is true), so the unit ends with a plan card
// (lesson standard A11, P26). Field guide: see u3.cards-1.js.

FC.cards('wealth', 'u3', [

  /* ---------- The key's question, as a question ---------- */
  { id: 'w3-q-shock', kind: 'question', step: 'S1',
    h: 'The question you have been answering all along',
    link: 'Since the first case you have seen the key’s question at the foot of each new answer, with one answer under it. This card puts the question and its seven answers in one place, as the key shows them, and says why the key asks it.',
    decides: [
      'There are seven answers because the first answer, {a:D1.shock}, is true of very different cases, and what to do about them is different. Selling suits the person who is free to sell and does not run the company, and it does nothing for the person who cannot sell. More insurance suits a gap between {t:claim} and the cover, and does nothing for a loan. Companies suit properties in one name, and do nothing for a loan against shares. Getting the answer wrong means buying a cure for a problem the case does not have.',
      'The question looks at what the case shows about the one thing, in three parts: what it is (shares, a property, a business, {t:claim}, a loan), what the person can do about it (sell it, run it, insure it), and what stands round it already. The seventh answer is the part that says it is already safe, and it is as much an answer as the others.',
      'You have met each answer with a case and with a name. The names say what to do, and one of them says to do nothing.'
    ],
    how: [
      'Read the case to the end, then ask what the one thing is. Put your finger on the words that say what it is, and on the words that say what the person can do about it or what stands round it. Then find the answer whose words you can point to.',
      'Two steps help. First, ask whether the person runs it. If they run a business, the answers are the two about a business: one with a support missing, or the one that says it is safe. If they do not, ask whether they are free to sell. Second, for {t:claim} or a loan, ask whether the case shows a gap ({t:claim} bigger than the cover, a loan the lender could use) or shows the gap already closed.',
      'If you cannot point to the words, you do not have an answer yet.'
    ],
    whenBoth: 'Two pairs of answers can both seem to fit one case, and the key has a rule for each. A demand bigger than the insurance wins over properties in one name. A business the person runs with a support missing wins over a loan the lender could use, because a loan against a business’s shares is one of {t:threesupports}. Each pair has been put side by side earlier in this unit.' },

  { id: 'w3-check-shock', kind: 'check', after: 'S1',
    case: 'w3-h-q-chk',
    ask: { type: 'step', step: 'S1' } },

  /* ---------- Two whole cases, watched ---------- */
  { id: 'w3-worked-solar', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the seven answers and the key’s question about them. Before you run a case yourself, watch two being run from the top, in the order the key asks. You are not asked anything until the end of each.',
    case: 'w3-h-wk-1',
    steps: [
      { step: 'D1',
        reason: [
          'Nothing in this case comes out of the money every year, nothing is due on a date, and nothing is said about a death or a will. What the case shows is this: {cue:D1}. £360,000 out of £420,000 is 86%, all in one company. That is what you point to for {a:D1.shock}.',
          'The six years of wages paid in shares may make you think of a rule on selling. It does not belong to this question. The first question asks only what the one thing is.'
        ] },
      { step: 'S1',
        reason: [
          'Now ask what Elena can do about it. {cue:S1}. She left the company, so she takes no part in running it, and its rules do not stop her selling. Both facts are in the case, and both together are what you point to for {a:S1.freeheld}.',
          'Shares paid as wages can suggest a rule against selling. The case says the opposite: nothing in the company’s rules stops her.'
        ] }
    ],
    hold: {
      neighbour: 'hedge',
      prompt: { kind: 'reason',
        lead: 'The shares were paid as part of Elena’s wages over six years, so the case can look like one about shares she is not allowed to sell.',
        choices: [
          { id: 'a', text: 'The shares were paid to her as part of her wages.',
            note: 'True, and it is why the case can look like {a:S1.blocked}. But where the shares came from does not show whether a rule stops her selling them.' },
          { id: 'b', text: 'Nothing in the company’s rules stops her selling the shares, and she has left the company.' },
          { id: 'c', text: 'The shares are worth £360,000, most of what she has.',
            note: 'True, and it is the reason the first question gave its answer. It is true of both answers, so it cannot say which of the two this is.' }
        ],
        answer: 'b' },
      reason: [
        'For {a:S1.blocked} you must be able to point to this: {needs:hedge}. Elena’s case has shares paid as part of wages, but it says that nothing in the rules stops her selling them. A rule is the whole of that answer, and here it is missing.',
        'It is the question from Ruth. {test:diversify~hedge} Here nothing stops her, so the key’s answer is {a:S1.freeheld}, and the name is {o:diversify}.'
      ]
    },
    impression: {
      resembles: 'w3-h-div-1',
      text: [
        'The key has given its answer. Now take a second look of a different kind: does this case look like one you know? It should bring back Meena and the bus shares: one company that is most of what the person has, nothing in the way of selling, and no part in running it.',
        'Here the key and the likeness agree, so the answer stands. The key’s questions come first, because they make you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the key’s question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'w3-worked-brewery', kind: 'worked',
    h: 'A second whole case, where the loudest thing points the wrong way',
    link: 'Elena’s was a clean case: one thing was going on in it. In this second case the first thing you notice is not the thing that decides it. Watch which words each question picks out.',
    case: 'w3-h-wk-2',
    steps: [
      { step: 'D1',
        reason: [
          'What the case gives you is this: {cue:D1}. £1,400,000 out of £2,000,000 is 70%, in one business that Greta runs. That is the first answer, {a:D1.shock}, as in the cases of Hugo and Femi.',
          'A friend’s warning opens the case, in loud words: “a fire or a bad year, and you are finished”. A warning is not a fact about the money. The first question looks only at what the case shows.'
        ] },
      { step: 'S1',
        reason: [
          'Now ask what stands round the business. Greta has {cue:S1}. The funds are £420,000 spread across thousands of companies, the savings are £180,000 against £30,000 a year, which is six years, and no bank holds her shares as security. All of {t:threesupports} are in place.',
          'Nothing is missing, so nothing needs doing. The key’s answer is {a:S1.madesafe}.'
        ] }
    ],
    hold: {
      neighbour: 'supports',
      prompt: { kind: 'reason',
        lead: 'Greta runs the brewery, and it is most of what she owns, so the case can look like a business with a support missing.',
        choices: [
          { id: 'a', text: 'Greta runs the brewery, and it is worth £1,400,000 of the £2,000,000 she owns.',
            note: 'True, and it is why the case can look like {a:S1.ownrun}. But that is true of the safe version and of the unsafe one alike, so it cannot say which this is.' },
          { id: 'b', text: 'A friend told her to sell half and buy funds.',
            note: 'True, but it is a friend’s opinion. It is not something the case shows about her money.' },
          { id: 'c', text: 'Her savings cover six years of spending, her other money is spread over funds, and no bank holds her shares as security.' }
        ],
        answer: 'c' },
      reason: [
        'For {a:S1.ownrun} you must be able to point to this: {needs:supports}. Greta runs the brewery and it is most of what she owns, and that is as far as the likeness goes. Not one of {t:threesupports} is missing: she has six years of spending, funds that hold thousands of companies, and no loan on her shares.',
        'It is the question from Alma. {test:supports~safe} Here nothing has gone from the three, so the key’s answer is {a:S1.madesafe}, and the name is {o:safe}. Selling half the brewery would cost tax and fees and part of her work, and it would not make any of the three stronger.'
      ]
    },
    impression: {
      resembles: 'w3-h-saf-1', first: 'w3-h-sup-1',
      text: [
        'Now the second look: does this case look like one you know? A business owner with most of what she has in the business, and a friend who says it is dangerous, may bring back Femi first, and Femi’s case was {a:S1.ownrun}. So here the likeness and the key seem to disagree.',
        'When that happens, go back to the key’s question and find the words in the case that answer it. They are {cue:S1}. Femi’s case had nothing like them: his savings covered five months, nothing was spread, and a bank held his shares. Greta’s case has the opposite. The case this one really looks like is Hugo’s, and the key’s answer stands.'
      ]
    } },

  /* ---------- After the drill ---------- */
  { id: 'w3-recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the key on your own. This card puts the unit in one place, in the key’s words.',
    carry: [
      'Before you reach for a fix, say what the one thing is and what the person can do about it, and point to the words in the case that show it. If you cannot point, you do not have an answer yet.',
      'The first answer, {a:D1.shock}, says where to look. It does not say that anything needs doing. Of the seven answers to this unit’s question, one says that nothing does.',
      'A large holding is not enough on its own. Whether the person can sell it, and whether they run it, decide between {o:diversify}, {o:hedge} and {o:supports}.',
      'A business the person runs is made safe by all of {t:threesupports}. One missing is a gap, and the loan against the shares is the one a lender can use.',
      'A demand is about two numbers: what it could be, and what the insurance pays. {o:insure} is for a gap between them. The same insurance well above the claim is {o:safe}.',
      'Several properties in one name are about reach. {o:entity} is for the reach of {t:claim}. Companies cost money, and are worth it only where the saving is larger.',
      'A loan is about what the lender may do: ask for the money back or for more, change the rate, or lend against nearly all of the value. A small loan, at a fixed rate, that cannot be demanded back while it is paid is {o:safe}.',
      'Two of these can both show in one case, and the key chooses. A demand bigger than the insurance wins over properties in one name. A business the person runs wins over a loan against its shares.',
      'Saying that it is already safe is as much an answer as the rest, and it saves the cost of a fix for a problem the case does not have.'
    ] },

  { id: 'w3-transfer', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the seven answers is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the seven and name an occasion of your own: something you own, hold, owe or were offered. The lines under each answer are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'diversify', occasion: 'Shares or a building that you hold and do not run, and that are a large part of what you have.' },
      { outcome: 'hedge', occasion: 'Shares from a job or a scheme that you are not yet allowed to sell, and the date they are released.' },
      { outcome: 'supports', occasion: 'A business that you, or someone you know, runs, and what stands round it: savings, other investments, and any loan against it.' },
      { outcome: 'insure', occasion: 'The policies on your home, your car or a property you let, and the largest claim anyone could make.' },
      { outcome: 'entity', occasion: 'Two or more properties or businesses held in the same name, and whose name that is.' },
      { outcome: 'deleverage', occasion: 'A loan, and what the lender is allowed to do if prices or rates move.' },
      { outcome: 'safe', occasion: 'A time when someone told you to fix something, and you could point to why it was already looked after.' }
    ],
    places: ['At home', 'At work', 'In the news', 'In my own head'] },

  { id: 'w3-plan', kind: 'plan', optional: true,
    h: 'A plan, if you want one',
    link: 'This last card is optional, and it is the only one that asks you to decide something. If you want to, write one line you can keep.',
    intro: 'A plan is one sentence in two parts: what you will notice, and what you will then do. The lines below are examples to start from. You can change them or write your own, and nothing is saved until you press the button.',
    cues: [
      { cue: 'someone says that most of what I have is in one thing and I should do something about it', then: 'I ask first whether I can sell it, whether I run it, and what already stands round it, and I write the numbers down before I agree to anything.' },
      { cue: 'someone offers me insurance, a company or a loan', then: 'I ask what gap it closes, in numbers, and what it costs each year.' },
      { cue: 'a loan agreement or a share scheme arrives', then: 'I find the words that say what the lender may do, or when I may sell, and I write down the date and the sum before I sign.' },
      { cue: 'I am told that my money is safe', then: 'I ask what makes it so, in numbers: the years of spending set aside, the limit of the insurance, whose name holds each property, what the loan lets the bank do.' },
      { cue: 'someone tells me to fix something that is already safe', then: 'I leave it alone, write down the numbers that show it is safe, and set a date to check them again.' }
    ] }
]);

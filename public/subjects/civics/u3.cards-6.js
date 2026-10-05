// Civics, Unit Three, part five: the two worked cases, and the two cards that close the unit after the drill.
// Civics is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('civics', 'u3', [

  { id: 'worked-barbers', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the five names and the question about them. Before you run a case yourself, watch two being run from the top, in the order they are asked. You are not asked anything until the end of each.',
    case: 'w-barbers',
    steps: [
      { step: 'D1',
        reason: 'The case ends on a vote by lawmakers of the whole country: {cue:D1}. No office, no judge and no state decides anything in it, and the barbers’ complaint is only the reason the bill exists. So the answer to its first question is {a:D1.congress}.' },
      { step: 'C1',
        reason: 'What Congress does is pass a law, and what the law is about is the hours barbers may work: {cue:C1}. Run the two tests. Is the matter on the Constitution’s list? The working hours of barbers are not one of the matters the list holds, so the matter is for the states to decide. The second test is never reached: a matter outside the list is enough.' }
    ],
    hold: {
      neighbour: 'enumerated',
      prompt: { kind: 'reason',
        lead: 'A law that both chambers passed is what you point to for {o:enumerated} too, so the case can look like {o:enumerated}.',
        choices: [
          { id: 'a', text: 'Both the House and the Senate voted for the bill.',
            note: 'True, and it is why the case can look like {o:enumerated}. But every law has been through both chambers, so the votes cannot tell the two names apart.' },
          { id: 'b', text: 'The hours barbers work are not one of the matters the Constitution lists for Congress.' },
          { id: 'c', text: 'The bill reaches barbers in every state.',
            note: 'True, but how far a law reaches does not tell you whether Congress may pass it. A tax on airline tickets reaches every state too.' }
        ],
        answer: 'b' },
      reason: [
        'For {o:enumerated} you must be able to point to this: {needs:enumerated}. In this case the matter is not on the list, so that line does not hold.',
        'It is the question from the two post-office bills. {test:enumerated~beyondcong} Here the matter is not on the list, so the answer is {a:C1.barred}.'
      ]
    },
    impression: {
      resembles: 'b-reading',
      text: [
        'The questions have given their answer. Now take a second look of a different kind: does this case look like one you know? It should bring back the book list: a law about something people do in their own state, passed by both chambers, on a matter that is not on the list.',
        'Here the questions and the likeness agree, so the answer stands. The question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-mint', kind: 'worked',
    h: 'A second whole case, where the story points the wrong way',
    link: 'The barbers’ hours were a clean case: one thing was going on, and nothing in the story pulled the other way. In this second case the most noticeable thing in the story is not the thing that decides it. Watch which words each question picks out.',
    case: 'w-mint',
    steps: [
      { step: 'D1',
        reason: 'The case ends on a vote by lawmakers of the whole country: {cue:D1}. The President is expected to sign it, but a signature does not change whose decision it was, so the answer to its first question is {a:D1.congress}.' },
      { step: 'C1',
        reason: 'Congress passed a bill, and what the bill does is give money: {cue:C1}. The government can spend only what Congress has voted, so Congress is deciding whether the government may spend. The bill is also about coins, and money and coins are on the Constitution’s list, so the case shows both a law on a listed matter and a decision about money. When a case shows both, the answer is {a:C1.money}.' }
    ],
    hold: {
      neighbour: 'enumerated',
      prompt: { kind: 'reason',
        lead: 'The bill is about coins, which are on the Constitution’s list, so the case can look like {o:enumerated}.',
        choices: [
          { id: 'a', text: 'The bill is about the mint and its coins.',
            note: 'True, and it is why the case can look like {o:enumerated}. But the bill’s subject fits both names, so it cannot settle which of the two this is.' },
          { id: 'b', text: 'The bill gives $120 million, and the government can spend only what Congress has voted.' },
          { id: 'c', text: 'The President is expected to sign the bill.',
            note: 'True, but that is how the matter goes on after Congress has decided. It does not change what Congress did.' }
        ],
        answer: 'b' },
      reason: [
        'A bill about a listed matter is a law on that matter, and on its own that would point to {o:enumerated}. But the case shows more: Congress is deciding whether the government may spend $120 million. A bill that spends is a law, so it always shows both. When a case shows both, the answer is {a:C1.money}.',
        '{o:enumerated} is for a law that does something else on a listed matter, such as setting a price or a tax, and spends no money. Compare the mail trucks.'
      ]
    },
    impression: {
      resembles: 'p-barrier', first: 'e-coins',
      text: [
        'Now the second look: does this case look like one you know? A bill about coins may bring back the one-dollar coin first, and that case was {o:enumerated}. So here the likeness and the questions seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are {cue:C1}. The one-dollar-coin bill changed which coin is made and said nothing about money to spend. This one gives money to buy presses. So the case this one really looks like is the flood barrier: the whole case turns on whether money may be spent, and the answer stands.'
      ]
    } },

  { id: 'recap-congress', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the questions on your own. This card puts the unit in one place.',
    carry: [
      'Say what Congress does, and point to the words in the case that show it. If you cannot point, you do not have an answer yet.',
      'The story never decides. Nor does the vote: every law has been through both chambers, and a law can pass every vote and still be {o:beyondcong}.',
      'For a law there are two tests: is the matter on the Constitution’s list, and does the law take a right away? Hold the matter against the list, and look for a right.',
      'A bill that spends money is a law too. When a case shows both, the answer is the money, {o:purse}.',
      'Two Senate votes can look alike. One is on a person or a {t:treaty} that the President put forward, {o:confirm}. The other is on a charge against someone who already holds the job, {o:impeach}. And {o:impeach} covers the charge as well as the trial, so a story that stops at the vote in the House has not told you the official is gone.'
    ] },

  { id: 'transfer-congress', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the five names is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the five and name an occasion of your own: somewhere you heard it, or somewhere you said it. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'enumerated', occasion: 'The last time a tax, a coin or the post office changed, and someone said that Congress passed it.' },
      { outcome: 'beyondcong', occasion: 'A law you heard described as going too far: into what your state or town decides, or into what you may say, believe or do.' },
      { outcome: 'purse', occasion: 'A programme, a park or a service that was cut, closed or funded, in the news or in your own town.' },
      { outcome: 'confirm', occasion: 'A judge, an ambassador or the head of an office whose approval by the Senate you read about.' },
      { outcome: 'impeach', occasion: 'A time you heard that an official was “impeached” or that a trial was set, and what you took it to mean.' }
    ],
    places: ['In the news', 'At home', 'At work', 'In my town or state'] }
]);

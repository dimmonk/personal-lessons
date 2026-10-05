// Psychology, Unit Three, part five: the two worked cases, and the two cards that close the unit after the drill.
// Psychology is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('psychology', 'u3', [

  { id: 'worked-hike', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'You have the five names and the key’s question about them. Before you run a case yourself, watch two being run from the top, in the order the key asks. You are not asked anything until the end of each.',
    case: 'w-hike',
    steps: [
      { step: 'D1',
        reason: 'What the case gives you is what one person does to another, and it is about the other person: {cue:D1}. Raf is not reasoning about a choice of his own, and the case does not stretch across years or places.' },
      { step: 'T1',
        reason: 'Look first at how early it starts, and then at what happens to it. Both halves are in the case: {cue:T1} The first is the flood, in her first week: far more praise, lifts and fares than a week of knowing someone would explain. The second is the pulling back, once Hollie says she cannot lend him the £200: ten days of silence, and then a remark in front of the group.' }
    ],
    hold: {
      neighbour: 'ordexchange',
      prompt: { kind: 'reason',
        lead: 'Raf was friendly and generous, and he asked a friend for a loan. A generous friend asking for a loan can look like {o:ordexchange}.',
        choices: [
          { id: 'a', text: 'Raf was friendly and generous, as people often are with a new friend.',
            note: 'True, and it is why the case can look like {o:ordexchange}. But friendliness on its own is not enough: the name needs the pulling back too.' },
          { id: 'b', text: 'Raf asked to borrow £200 and Hollie said no.',
            note: 'True, and it comes just before the pulling back. But a refused loan on its own is something people take well or badly. It does not show attention being poured on and then withdrawn.' },
          { id: 'c', text: 'The attention was far more than a week would explain, and it was pulled back and turned critical once Hollie said no.' }
        ],
        answer: 'c' },
      reason: [
        'For {o:ordexchange} the case must show none of the four. Here it shows one: {needs:lovebomb}. Raf’s friendliness does not settle it, because it is only the first half.',
        'It is the question from the two neighbours, Dan and Eli. {test:lovebomb~ordexchange} Here the attention is pulled back, so the key’s answer is {a:T1.floodpull}.'
      ]
    },
    impression: {
      resembles: 'l-wedding',
      text: [
        'The key has given its answer. Now take a second look of a different kind: does this case look like one you know? It should bring back Priya and Callum, the first month: a flood of attention at the start, and then one "no" and the attention is gone.',
        'Here the key and the likeness agree, so the answer stands. The key’s question comes first, because it makes you point at words in the case. The likeness is only a second look. When the two disagree, do not pick the one you prefer. Go back to the key’s question and find the words in the case that answer it. The second whole case shows how.'
      ]
    } },

  { id: 'worked-booking', kind: 'worked',
    h: 'A second whole case, where the story points the wrong way',
    link: 'The walking group was a clean case: one thing was going on, and nothing in the story pulled the other way. In this second case the most noticeable thing in the story is not the thing that decides it. Watch which words each question picks out.',
    case: 'w-booking',
    steps: [
      { step: 'D1',
        reason: 'What the case gives you is one person raising something with another that has happened between them, and the other answering: {cue:D1}. The case is not someone defending a view or a choice of their own, and it does not stretch across years.' },
      { step: 'T1',
        reason: 'The clerk has the booking emails, so the case shows that Kai did it, and she raises it. In answer he does all three in one reply, and the case says this is the first time it has come up. The marked words are: {cue:T1} He denies it ("I never booked it twice"), attacks her ("you are always muddled", "you lose things"), and plays the one wronged ("I am sick of being picked on").' }
    ],
    hold: {
      neighbour: 'gaslight',
      prompt: { kind: 'reason',
        lead: 'Kai tells Pia that she has it wrong and that she is always muddled. That sounds like telling someone their memory cannot be trusted, so the case can look like it belongs to the first name.',
        choices: [
          { id: 'a', text: 'Kai tells Pia she has it wrong and that she is always muddled about dates.',
            note: 'True, and it is why the case can look like {o:gaslight}. But a denial and a remark about someone’s memory only fit that name when the denial comes back for weeks or months. Here nothing says it has.' },
          { id: 'b', text: 'Pia has the booking emails.',
            note: 'True, but both names need something that really happened, so it cannot tell you which of the two this is.' },
          { id: 'c', text: 'This is the first time the booking has come up, and Kai answers with a denial, an attack and playing the one wronged, all in one reply.' }
        ],
        answer: 'c' },
      reason: [
        'For {o:gaslight} you must be able to point to this: {needs:gaslight}. The case says the opposite about time: it is the first time the booking has come up, and nothing shows Pia doubting her memory.',
        'It is the question from Ravi and Lena and the dent. {test:gaslight~darvo} Here it is one exchange with three parts, so the key’s answer is {a:T1.reverse}.'
      ]
    },
    impression: {
      resembles: 'd-till', first: 'g-repair',
      text: [
        'Now the second look: does this case look like one you know? "You have got that wrong" and "you are always muddled" may bring back Tess and the car repair first, and Tess’s case was {o:gaslight}. So here the likeness and the key seem to disagree.',
        'When that happens, go back to the key’s question and find the words in the case that answer it. They are: {cue:T1} Tess’s case has months of denial and a person who doubts her memory. This case has one reply with three parts. The case it really looks like is Marek’s at the bar: someone raised something he did, and he denied it, attacked, and said he was the one being picked on. So the key’s answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now run the key on your own. This card puts the unit in one place, in the key’s words.',
    carry: [
      'Say what is done to the other person, and point to the words in the case that show it. If you cannot point, you do not have an answer yet.',
      'Most cases are {o:ordexchange}. Start there, and give one of the other names only when you can point to all that it needs. How upset anyone is does not decide it, and neither does how kind or unkind the words sound.',
      'Some names need time or two halves. {o:gaslight} needs something that really happened, a denial that comes back over weeks or months, and the other person doubting their memory. {o:lovebomb} needs the flood and the pulling back. {o:darvo} needs one exchange with all three parts, and the case showing that the person did it. {o:projection} needs the case to show the accuser doing it, and nothing to show the other person doing it.',
      'The key names what is done, never what kind of person did it and never what they meant. The same person can do one of these on Monday and have {o:ordexchange} on Tuesday.',
      'The key sorts a short account of what was said or done. It cannot tell you whether you are safe. If you think someone is controlling you, or you are afraid of them, talk to someone you trust or to a professional. That is not something a key can settle.'
    ] },

  { id: 'transfer', kind: 'transfer',
    h: 'Where would you meet this?',
    link: 'The last step is yours, and nothing on this card is marked.',
    ask: [
      'Knowing the five names is one step. Noticing the moment to use one is a separate step, and only you know where those moments are in your life.',
      'Pick one of the five and name an occasion of your own: somewhere you heard it, or somewhere you said it. The lines under each name are there to jog your memory.'
    ],
    prompts: [
      { outcome: 'gaslight', occasion: 'A time someone told you, more than once, that something you clearly remember did not happen.' },
      { outcome: 'darvo', occasion: 'A time you raised something with someone and ended up apologising for raising it.' },
      { outcome: 'lovebomb', occasion: 'A new friend, job or group where everything was wonderful at first and then changed.' },
      { outcome: 'projection', occasion: 'Something you were accused of that fitted the person accusing you better than it fitted you.' },
      { outcome: 'ordexchange', occasion: 'The last row you had that was only a row.' }
    ],
    places: ['At home', 'At work', 'With friends', 'In my own head'] }
]);

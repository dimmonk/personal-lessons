// Psychology, Unit Three, part two (close): the worked case, and the card that closes the unit after the drill.
// Psychology is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('psychology', 'u3', [

  { id: 'worked-booking', kind: 'worked',
    h: 'A whole case, from the first question to the name',
    link: 'Before you run a case yourself, watch one being run from the top, in the order the questions are asked. In this case the most noticeable thing in the story is not the thing that decides it. You are not asked anything until the end.',
    case: 'w-booking',
    steps: [
      { step: 'D1',
        reason: 'What the case gives you is one person raising something with another that has happened between them, and the other answering: {cue:D1}. The case is not someone defending a view or a choice of their own, and it does not stretch across years.' },
      { step: 'T1',
        reason: 'The clerk has the booking emails, so the case shows that Kai did it, and she raises it. In answer he does all three in one reply, and the case says this is the first time it has come up. The marked words are: {cue:T1} He denies it ("I never booked it twice"), attacks her ("you are always muddled", "you lose things"), and plays the one wronged ("I am sick of being picked on").' }
    ],
    hold: {
      neighbor: 'gaslight',
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
        'It is the question that tells the first two names apart. {test:gaslight~darvo} Here it is one exchange with three parts, so the answer is {a:T1.reverse}.'
      ]
    },
    impression: {
      resembles: 'd-till', first: 'g-repair',
      text: [
        'Now the second look: does this case look like one you know? "You have got that wrong" and "you are always muddled" may bring back Tess and the car repair first, and Tess’s case was {o:gaslight}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words in the case that answer it. They are: {cue:T1} Tess’s case has months of denial and a person who doubts her memory. This case has one reply with three parts. The case it really looks like is Marek’s at the bar: someone raised something he did, and he denied it, attacked, and said he was the one being picked on. So the answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You have now gone from the first question to the name on your own. This card puts the unit in one place.',
    carry: [
      'Say what is done to the other person, and point to the words in the case that show it. If you cannot point, you do not have an answer yet.',
      'Most cases are {o:ordexchange}. Start there, and give one of the other names only when you can point to all that it needs. How upset anyone is does not decide it, and neither does how kind or unkind the words sound.',
      'Some names need time or two halves. {o:gaslight} needs something that really happened, a denial that comes back over weeks or months, and the other person doubting their memory. {o:lovebomb} needs the flood and the pulling back. {o:darvo} needs one exchange with all three parts, and the case showing that the person did it. {o:projection} needs the case to show the accuser doing it, and nothing to show the other person doing it.',
      'The names are for what is done, never for what kind of person did it or what they meant. The same person can do one of these on Monday and have {o:ordexchange} on Tuesday.',
      'The questions sort a short account of what was said or done. They cannot tell you whether you are safe. If you think someone is controlling you, or you are afraid of them, talk to someone you trust or to a professional. That is not something a set of questions can settle.'
    ] }
]);

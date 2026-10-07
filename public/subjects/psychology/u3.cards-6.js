// Psychology, Unit Three, part two (close): the worked story, and the card that closes the unit after the drill.
// Psychology is not an action subject (subject.action is false), so the unit has no plan card (lesson standard A11, P26).
// The app prints the stem of each hold-back prompt ("Why is this X and not Y? ...") and the heading of the second look.

FC.cards('psychology', 'u3', [

  { id: 'worked-booking', kind: 'worked',
    h: 'One whole story, step by step',
    link: 'Watch one story worked through from the top. The loudest thing in it is not what decides it, so you are asked nothing until the end.',
    case: 'w-booking',
    steps: [
      { step: 'D1',
        reason: 'Pia is raising something with Kai: {cue:D1}. Nobody is defending a choice of their own, and the story does not stretch across years.' },
      { step: 'T1',
        reason: 'The booking emails show Kai did it, and Pia raises it. In one reply he denies it (“I never booked it twice”), attacks her (“you are always muddled”) and plays the one wronged (“I am sick of being picked on”). This is the first time it has come up.' }
    ],
    hold: {
      neighbor: 'gaslight',
      prompt: { kind: 'reason',
        lead: 'Kai tells Pia she has it wrong and is always muddled. That sounds like telling someone their memory cannot be trusted, so this can look like {o:gaslight}. What decides it?',
        choices: [
          { id: 'a', text: 'Kai tells Pia she has it wrong and that she is always muddled about dates.',
            note: 'True, and it is why this looks like {o:gaslight}. But that name needs the denial to come back for weeks or months, and nothing says it has.' },
          { id: 'b', text: 'Pia has the booking emails that show the venue was booked twice.',
            note: 'True, but both names need something real, so it cannot tell you which this is.' },
          { id: 'c', text: 'The first time it comes up, Kai answers with a denial, an attack and “I am sick of being picked on”.' }
        ],
        answer: 'c' },
      reason: [
        'For {o:gaslight}, the denial must come back for weeks or months. This story says the opposite: it is the first time the booking has come up, and nothing shows Pia doubting her memory.',
        'One question tells these two apart: {test:gaslight~darvo} Here it is one conversation with three parts, so the answer is {o:darvo}.'
      ]
    },
    impression: {
      resembles: 'd-till', first: 'g-repair',
      text: [
        'A second look: does this remind you of a story you know? “You have got that wrong” and “you are always muddled” may bring back Tess and the car repair, which was {o:gaslight}. So here the likeness and the answer seem to disagree.',
        'When that happens, go back to the question and find the words that answer it: {cue:T1} Tess had months of denial and doubted her own memory. This story is one reply with three parts, and the story it really matches is Marek’s at the bar. Someone raised something he did, and he denied it, attacked and said he was the one being picked on, so the answer stands.'
      ]
    } },

  { id: 'recap', kind: 'recap',
    h: 'What to carry away',
    link: 'You can now go from the first question to the name on your own.',
    carry: [
      'Say what was done to the other person, and find the words in the story that show it. If you cannot find them, you do not have an answer yet.',
      'Most stories are {o:ordexchange}. Start there, and give another name only when everything it needs is in the story. How upset anyone is does not decide it, and neither does how kind or unkind the words sound.',
      'Four names need more than the words. {o:gaslight} needs something real, a denial that keeps coming back for weeks or months, and the other person doubting their memory. {o:lovebomb} needs the flood and the pulling back. {o:darvo} needs one conversation with all three parts, and the story showing the person did it. {o:projection} needs the accuser to be doing it, and nothing showing the other person doing it.',
      'The names describe what was done, never what kind of person did it or what they meant. The same person can do one of these on Monday and have {o:ordexchange} on Tuesday.',
      'These questions sort a short account of what was said or done. They cannot tell you whether you are safe. If you think someone is controlling you, or you are afraid of them, talk to someone you trust or to a professional.'
    ] }
]);

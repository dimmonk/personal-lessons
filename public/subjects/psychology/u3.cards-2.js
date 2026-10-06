// Psychology, Unit Three, part one (second half): the second name, and the first tie-break.

FC.cards('psychology', 'u3', [

  /* ---------- Turning the blame around ---------- */
  { id: 'meet-darvo', kind: 'meet', outcome: 'darvo',
    link: 'In the first name the denial comes back for months. The second is a different thing: it happens in one exchange, and the person is answering something that has just been raised with them.',
    case: 'd-till', mark: 'T1',
    strip: [
      'Joy raises something with Marek: the register was short, and the camera shows him taking two bills. So the case shows he did it.',
      'In answer he denies it: "That\'s not true."',
      'He attacks the person who raised it: "You were forty minutes late on Tuesday and nobody said a word to you."',
      'And he presents himself as the one wronged: "I\'m the one being picked on here."'
    ],
    explain: [
      'When someone raises something you did, the honest answers keep the conversation on it: you say sorry, or explain, or, if you did not do it, say so. Marek denies it, though the case shows he did. Then he attacks Joy, so that the subject is now her lateness. Then he says he is the one being picked on. By the end, the thing she raised has gone, and she is the one on the defensive.',
      'All three parts are needed, and the case must show that he really did it. A person who is wrongly accused can deny it, be angry, and say they are being picked on, and that is not this. One exchange is enough: it does not have to be repeated, which is the difference from {o:gaslight}.'
    ],
    feature: { step: 'T1', option: 'reverse' },
    name: 'The name for this is {o:darvo}. The blame starts with Marek and, by the end of the exchange, it has been turned around onto Joy. The name is for an exchange with all three parts, in which the case shows he did it. One or two of the three parts is not enough.' },

  { id: 'check-darvo', kind: 'check', after: 'darvo',
    case: 'd-check',
    ask: { type: 'option', step: 'T1', among: ['denymemory', 'reverse'] } },

  /* ---------- The first tie-break ---------- */
  { id: 'exc-memory', kind: 'exception', looksLike: 'darvo', is: 'gaslight', ledger: 'gaslight~darvo',
    h: 'When a case shows both',
    link: 'These two names are easy to mix up, because both have a person denying that something happened. In a real case the same person can deny, attack and play the one wronged, and do it month after month. Here is one.',
    case: 'invoices',
    setup: 'Look at what Kit does when Hana raises the unpaid invoices: he denies it, he attacks her ("you are always looking for someone to blame"), and he says he is the one who gets treated like a thief. That is all three parts, which is what you point to for {o:darvo}. Yet this case is {o:gaslight}.',
    prompt: { kind: 'phrase', answer: 'Every month since, when Hana raises the unpaid invoices, Kit does the same three things in one go.' },
    because: [
      'Ask how often. Kit does not do this once. He does it every month, about something the signed sheet shows really happened, and Hana has started to doubt her own memory: she photographs every document, and she has asked her accountant, "Am I making this up?" That is what you point to for {o:gaslight}.',
      'When the denial of what happened comes back over weeks or months until the other person doubts their memory, the three parts of {o:darvo} are just how it is said each time. They do not make a second thing.'
    ],
    take: 'The choice is made in advance, for every case alike. In life the two overlap, and people who study them do not all draw the line in the same place. Each case gets one name, and where a case shows both it takes the one that lasts longer, so that two people using these questions reach the same answer and can each say why.' }
]);

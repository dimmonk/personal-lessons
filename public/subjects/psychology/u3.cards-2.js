// Psychology, Unit Three, part one (second half): the second name, and the first tie-break.

FC.cards('psychology', 'u3', [

  /* ---------- Turning the blame around ---------- */
  { id: 'meet-darvo', kind: 'meet', outcome: 'darvo',
    link: 'Next: someone is asked about something they did, and all of it happens in one conversation.',
    case: 'd-till', mark: 'T1',
    explain: [
      'When someone raises something you did, the honest answers stay on it: you say sorry, you explain, or, if you did not do it, you say so. Marek does none of these. He denies it, though the camera shows he did it. Then he attacks Joy, so now the talk is about her lateness. Then he says he is the one being picked on.',
      'By the end, what Joy raised is gone and she is the one on the defensive. One conversation is enough: unlike {o:gaslight}, it does not have to come back.'
    ],
    spot: [
      { do: 'Check he really did it: the camera shows him taking two bills.', why: 'Someone wrongly accused may deny and get angry too, so those alone prove nothing.' },
      { do: 'Find the denial: “That’s not true.”', why: 'It is the first of three things, all in reply to being asked.' },
      { do: 'Find the attack on the person who raised it: “You were forty minutes late on Tuesday.”', why: 'The talk turns from what he did to what she did.' },
      { do: 'Find him playing the one wronged: “I’m the one being picked on here.”', why: 'Now he is the victim and she is the problem.' }
    ],
    feature: { step: 'T1', option: 'reverse' },
    name: 'This is {o:darvo}: the blame starts with Marek and ends up on Joy. It needs all three, and the story must show he did it.' },

  { id: 'check-darvo', kind: 'check', after: 'darvo',
    case: 'd-check',
    ask: { type: 'option', step: 'T1', among: ['denymemory', 'reverse'] } },

  /* ---------- The first tie-break ---------- */
  { id: 'exc-memory', kind: 'exception', looksLike: 'darvo', is: 'gaslight', ledger: 'gaslight~darvo',
    h: 'When a story shows both',
    link: 'These two are easy to mix up, because in both the person denies that something happened. In real life the same person can deny, attack and play the one wronged, month after month. Here is one.',
    case: 'invoices',
    setup: 'Look at what Kit does when Hana raises the unpaid invoices: he denies it, he attacks her (“you are always looking for someone to blame”), and he says he is the one who gets treated like a thief. That is all three parts of {o:darvo}. Yet this story is {o:gaslight}.',
    prompt: { kind: 'phrase', answer: 'Every month since, when Hana raises the unpaid invoices, Kit does the same three things in one go.' },
    because: [
      'Ask how often. Kit does this every month, about something the signed sheet shows really happened, and Hana has started to doubt herself: she photographs every document and has asked her accountant, “Am I making this up?” That is {o:gaslight}.',
      'When the denial comes back for weeks or months until the other person doubts their memory, the deny, attack and play-the-victim are just how Kit says it each time. They do not make a second thing.'
    ],
    take: 'Real life overlaps, and experts do not all draw this line in the same place. Here each story gets one name, so that two people asking the same questions reach the same answer. When a story shows both, take the one that lasts longer.' }
]);

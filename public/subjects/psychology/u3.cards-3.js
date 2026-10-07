// Psychology, Unit Three, part two (first half): accusing someone of what you do yourself, and the second tie-break.

FC.cards('psychology', 'u3', [

  /* ---------- Projection ---------- */
  { id: 'meet-projection', kind: 'meet', outcome: 'projection',
    link: 'Third: an accusation that fits the accuser better than the person accused.',
    case: 'p-expenses', mark: 'T1',
    explain: [
      'Some accusations are fair: the person really did it, and the accuser says so. Dana’s is the other way round. The finance records show that she is the one padding her claims, and Omar’s claim matches his receipts to the dollar.',
      'People can do this without a plan. Seeing your own fault in someone else can be easier than seeing it in yourself. Dana may not know where her words come from, but Omar has still been called a cheat by the person who is cheating.'
    ],
    spot: [
      { do: 'Find the accusation: “People like him always inflate their claims.”', why: 'One person is saying another does something wrong.' },
      { do: 'Check who the story shows doing it: Dana, for months.', why: 'Trust the records, not the accuser’s word.' },
      { do: 'Check the person accused: Omar’s claim matches his receipts.', why: 'If nothing shows Omar doing it, the accusation has nothing behind it.' },
      { do: 'Check that nobody raised anything with Dana first.', why: 'If someone had, her answer might be {o:darvo} instead.' }
    ],
    feature: { step: 'T1', option: 'ownfault' },
    name: 'This is {o:projection}: throwing your own fault onto someone else.' },

  { id: 'check-projection', kind: 'check', after: 'projection',
    case: 'p-check',
    ask: { type: 'option', step: 'T1', among: ['denymemory', 'reverse', 'ownfault'] } },

  /* ---------- The second tie-break ---------- */
  { id: 'exc-own', kind: 'exception', looksLike: 'projection', is: 'darvo', ledger: 'darvo~projection',
    h: 'When a story shows both',
    link: 'These two are easy to mix up, because in both the person who attacks is guilty of what they say. Sometimes an answer to being asked also accuses the other person of what the speaker did. Here is one.',
    case: 'carshare',
    setup: 'Look at Gareth’s answer: he says Beth never pays into anything, but the sheet shows he is the one who has not paid, and that Beth has paid every month. An accusation that fits the accuser and not the person accused is {o:projection}. Yet this story is {o:darvo}.',
    prompt: { kind: 'phrase', answer: 'She asks Gareth why nothing has gone in from him since March.' },
    because: [
      'Look at where the story starts. Beth asks Gareth about the fund, and Gareth answers with a denial, an attack, and “I’m being accused”. That is all three parts, said in answer.',
      'The accusation inside his attack does fit his own fault, but it is part of his answer. He did not start it: it comes after Beth raised the fund.'
    ],
    take: 'Real life overlaps, and experts do not all draw this line in the same place. Here each story gets one name, so that two people asking the same questions reach the same answer. When a story shows both, take the one where the person is answering something raised with them.' }
]);

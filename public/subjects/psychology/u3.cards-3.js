// Psychology, Unit Three, part two (first half): accusing someone of what you do yourself, and the second tie-break.

FC.cards('psychology', 'u3', [

  /* ---------- Projection ---------- */
  { id: 'meet-projection', kind: 'meet', outcome: 'projection',
    link: 'The first two names are about a denial: of what happened, or of what the person did. The third is an accusation, and what matters about an accusation is who the case shows doing the thing the accuser is talking about.',
    case: 'p-expenses', mark: 'T1',
    strip: [
      'Dana accuses Omar of something: of fiddling claims. "People like him always inflate their claims."',
      'The case shows that Dana is the one doing exactly that: she has padded her own claims for months.',
      'Nothing in the case shows Omar doing it: his claim is for exactly the amounts on his receipts.',
      'Nobody raised anything with Dana first. The accusation is where the case starts.'
    ],
    explain: [
      'An accusation is often fair: the person really did the thing, the accuser says so, and the case shows it. Dana’s is different. What she says about Omar describes what Dana does herself. People can do this without any plan: when someone does something they do not want to see in themselves, it can be easier to see it in someone else, and to feel quite sure, and to say it.',
      'The question is not whether Dana knows what she is doing. Omar has been called a fiddler of claims, to the person who looks after the money, by someone whose own claims show she is one. That is what is done to him, whether or not Dana knows where the words came from.'
    ],
    feature: { step: 'T1', option: 'ownfault' },
    name: 'The name for this is {o:projection}. To project something is to throw it outwards, and the name is for throwing your own fault out onto someone else. It is used here for an accusation that fits the person who makes it, and does not fit the person it is made against.' },

  { id: 'check-projection', kind: 'check', after: 'projection',
    case: 'p-check',
    ask: { type: 'option', step: 'T1', among: ['denymemory', 'reverse', 'ownfault'] } },

  /* ---------- The second tie-break ---------- */
  { id: 'exc-own', kind: 'exception', looksLike: 'projection', is: 'darvo', ledger: 'darvo~projection',
    h: 'When a case shows both',
    link: 'These two are easy to mix up, because in both the person who attacks is guilty of what they say. In a real case the attack that comes in answer can also be an accusation of what the speaker did. Here is one.',
    case: 'carshare',
    setup: 'Look at Gareth’s answer: he says Beth never pays into anything, and the sheet shows that he is the one who has not paid, and that Beth has paid every month. That is an accusation that fits the person making it and does not fit the person it is made against, which is what you point to for {o:projection}. Yet this case is {o:darvo}.',
    prompt: { kind: 'phrase', answer: 'She asks Gareth why nothing has gone in from him since March.' },
    because: [
      'Look at where the case starts. Beth asks Gareth about the fund, and Gareth answers: he denies it, he attacks her, and he says he is the one being accused. That is all three parts, in answer to being raised with.',
      'The accusation inside his attack does fit his own fault, but it is part of the answer. It is not a separate accusation that he started: it comes after Beth has raised the fund.'
    ],
    take: 'The choice is made in advance, for every case alike. In life the two overlap, and people who study them do not all draw the line in the same place. Each case gets one name, and where a case shows both it takes the one in which the person is answering something raised with them, so that two people using these questions reach the same answer and can each say why.' }
]);

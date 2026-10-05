// Psychology, Unit Three, part two (first half): accusing someone of what you do yourself, its look-alike pair with turning the blame around,
// the second tie-break, and the wrong idea that the key must ask what the speaker knows.

FC.cards('psychology', 'u3', [

  /* ---------- Projection ---------- */
  { id: 'meet-projection', kind: 'meet', outcome: 'projection',
    link: 'The first two names are about a denial: of what happened, or of what the person did. The third is an accusation, and what matters about an accusation is who the case shows doing the thing the accuser is talking about.',
    case: 'p-expenses', mark: 'T1',
    strip: [
      'Dana accuses Omar of something: of fiddling claims. "People like him always fiddle their claims."',
      'The case shows that Dana is the one doing exactly that: she has padded her own claims for months.',
      'Nothing in the case shows Omar doing it: his claim is for exactly the amounts on his receipts.',
      'Nobody raised anything with Dana first. The accusation is where the case starts.'
    ],
    explain: [
      'An accusation is something one person says to another about them. Often it is fair: the person really did the thing, the accuser says so, and the case shows it. Then the accusation is about the other person, and it is true.',
      'Dana’s is different. The case shows who does what: Dana pads claims, and Omar does not. What she says about Omar describes what Dana does herself. People can do this without any plan. When someone does something they do not want to see in themselves, it can be easier to see it in someone else, and to feel quite sure, and to say it.',
      'The key does not ask whether Dana knows what she is doing. It asks what is done to the other person, as the case shows it. Omar has been called a fiddler of claims, to the person who looks after the money, by someone whose own claims show she is one. That is what is done to him, whether or not Dana knows where the words came from.'
    ],
    feature: { step: 'T1', option: 'ownfault' },
    name: 'The name for this is {o:projection}. To project something is to throw it outwards, and the name is for throwing your own fault out onto someone else. It is used here for an accusation that fits the person who makes it, and does not fit the person it is made against.' },

  { id: 'again-projection', kind: 'again', outcome: 'projection',
    link: 'The expense claims gave you what to point to: {needs:projection}. Here is a second case with a completely different story.',
    first: 'p-expenses', second: 'p-rumour', step: 'T1',
    instruction: 'Find what the two cases share. Ignore the story (expense claims, service charges). Look at one thing only: whether the case shows the person who makes the accusation doing what they accuse the other of.',
    prompt: { kind: 'phrase', answer: "When Sue mentions that she is moving away, Femi, who has been telling neighbours who is behind with their service charges, tells the chairman: 'Sue's been gossiping about people's money. I wouldn't tell her a thing.'" },
    shared: [
      'In both cases one person accuses another, and the case shows the accuser doing the very thing: Dana pads claims and accuses Omar of fiddling them; Femi passes on who owes money and accuses Sue of gossiping about people’s money. In both, nothing in the case shows the person accused doing it. Omar’s claim matches his receipts, and nobody else has heard Sue say anything.',
      'One story is about expenses, the other about gossip. The stories share nothing, so this is not about money or about gossip. It holds wherever one person accuses another and the case points back at the accuser. That is what {o:projection} names.'
    ] },

  { id: 'portrait-projection', kind: 'portrait', outcome: 'projection',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:projection} in real life, where nobody marks the words for you.',
    typical: [
      'The accusation is about something the person does or feels: lying, being late, hiding things, being jealous, being disloyal, gossiping. The thing accused of is whatever the accuser is doing or feeling.',
      'It often comes with little or no evidence, or with evidence that is not about the person accused. "People like him always fiddle their claims" is about a type of person. It is not about anything Omar’s claim shows.',
      'It tends to come first. Nobody has raised anything with the accuser: the accusation is where the case starts. That is the difference from {o:darvo}, where the attack comes in answer.',
      'The accuser is often quite sure, and may be sincere. They honestly see the thing in the other person, which is part of why it can sound convincing. The key does not ask about sincerity.',
      'It can come back in new forms, and the person accused often ends up defending themselves against something they never did.'
    ],
    not: 'An accusation is not {o:projection} just because the accuser is not perfect. If the case shows that the person accused did the thing, the accusation is fair, even when the accuser has done the same. And an accusation with nothing showing the accuser doing it is not {o:projection} either: the name needs the case to show both halves. People are often wrong about each other without it being this.',
    wild: ['"You are the one who is jealous."', '"You are hiding something."', '"People like you always cheat."', '"I do not trust you with money."', '"You are always on your phone."'],
    self: 'You may catch it in yourself when you feel sure about someone else’s bad motive with nothing to go on, in an area where you know you are weak.',
    ask: '"What does the case show about the person making the accusation, and what does it show about the person accused?" If the accuser is doing it and nothing shows the other person doing it, that is the name.' },

  { id: 'check-projection', kind: 'check', after: 'projection',
    case: 'p-check',
    ask: { type: 'option', step: 'T1', among: ['denymemory', 'reverse', 'ownfault'] } },

  /* ---------- The second look-alike pair ---------- */
  { id: 'look-darvo-projection', kind: 'lookalike', ledger: 'darvo~projection',
    link: 'Both names have an attack in them, and in both the person who attacks is guilty of what they say. That makes them easy to mix up. This card puts them side by side.',
    cases: ['books-raised', 'books-unasked'],
    instruction: 'Both cases are about Ed, Nell and the club’s petty cash. Compare one thing: did someone raise something with Ed first, so that he is answering it, or did the accusation come from Ed, with nobody having asked him anything?',
    prompt: { kind: 'which', option: 'T1.reverse', answer: 'books-raised' },
    difference: [
      'In Case A, Nell has asked Ed about the missing £60, and the receipt book shows he took it. The attack ("you are the one who never hands in receipts") comes in answer, with a denial and with Ed as the one wronged ("after all I have done for this club"). The key’s answer is {a:T1.reverse}, and the case is {o:darvo}.',
      'In Case B, nobody has asked Ed anything. He says, unprompted, that Nell has been dipping into the tin. The book shows Ed took the £60, and shows every one of Nell’s receipts handed in on time. The key’s answer is {a:T1.ownfault}, and the case is {o:projection}.',
      'In both cases Ed goes for Nell about something Ed did. What differs is where the case starts: with Nell raising it, or with Ed.'
    ] },

  /* ---------- The second tie-break ---------- */
  { id: 'exc-own', kind: 'exception', looksLike: 'projection', is: 'darvo', ledger: 'darvo~projection',
    h: 'When a case shows both',
    link: 'The last card separated the pair with two tidy cases. In a real case the attack that comes in answer can also be an accusation of what the speaker did. Here is one.',
    case: 'carshare',
    setup: 'Look at Gareth’s answer: he says Beth never pays into anything, and the sheet shows that he is the one who has not paid, and that Beth has paid every month. That is an accusation that fits the person making it and does not fit the person it is made against, which is what you point to for {o:projection}. Yet this case is {o:darvo}.',
    prompt: { kind: 'phrase', answer: 'She asks Gareth why nothing has gone in from him since March.' },
    because: [
      'Look at where the case starts. Beth asks Gareth about the fund, and Gareth answers: he denies it, he attacks her, and he says he is the one being accused. That is all three parts, in answer to being raised with.',
      'The accusation inside his attack does fit his own fault, but it is part of the answer. It is not a separate accusation that he started: it comes after Beth has raised the fund, and it is one of the three parts of the reply.'
    ],
    take: 'The key decides it this way on purpose, and it is worth knowing that this is the key’s decision. In life the two overlap, and people who study them do not all draw the line in the same place. The key gives each case one name, and where a case shows both it gives the one in which the person is answering something raised with them, so that two people using it reach the same answer and can each say why.' },

  { id: 'refute-meant', kind: 'refute', about: 'projection',
    h: 'A wrong idea: "He does not even know, so she is not doing anything to him"',
    link: 'The picture of {o:projection} said that the key does not ask what the speaker knows. Many people find that hard to accept, and this card is about why the key does it that way.',
    idea: '"She honestly believes it. She does not mean to hurt him. So she is not doing anything to him."',
    verdict: 'This is wrong.',
    right: [
      'What a person believes, and what they mean, are things inside their head. A case does not show them. It shows only what the person says and does. So the key never asks about them. Its question is: {q:T1}',
      'An accusation is something one person says to another. Whether the accuser knows where it comes from, it is said to the other person, in front of whoever hears it, and it lands on them. Omar is called a fiddler of claims whether or not Dana knows that she is one herself.',
      'So "she honestly believes it" and "she is doing this to him" can both be true. Look at what the case shows: the accusation, the accuser doing exactly that, and nothing showing the other person doing it. That is enough for {o:projection}, without any reading of her mind.'
    ],
    testedBy: ['claim-meant'] }
]);

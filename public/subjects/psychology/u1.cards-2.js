// Psychology, Unit One, part two: the second kind (something one person does to another), the first look-alike
// pair, and the exception that carries the key's first tie-break.
// The app prints "how to tell them apart", the side-by-side table and the key's tie-break; none of them is typed here.

FC.cards('psychology', 'u1', [

  /* ---------- The second kind: something one person does to another ---------- */
  { id: 'meet-tactic', kind: 'meet', family: 'tactic',
    link: 'The first kind had one person at its centre, and anyone else in the case was only listening. In the second kind there are two people, and you need both of them.',
    case: 'g-deadline', mark: 'D1',
    strip: [
      'There are two people: Carla and Ben.',
      'Carla says something to Ben about what happened between them: that she never agreed to the date.',
      'Then she says something to Ben about Ben: that he is the disorganised one.',
      'The case shows where that leaves Ben. He came with a question, and he goes away checking himself.',
      'It is one conversation. Nothing is said about other years or other people.'
    ],
    explain: [
      'This case is not made of one person’s reasons. Carla is not weighing a choice, and she is not explaining to anyone what she thinks. What she says is pointed at Ben: first at what the two of them agreed, then at what he is like. And the case shows what that does to him. He arrived with a fair question and he leaves doubting his own calendar.',
      'That is what this second kind is made of. There are two people. One of them says or does something to the other. And what is said or done is about that other person, or about something that has passed between the two. To look at a case like this you have to keep both people in view. Try the test from the first kind: take Ben out. There is nothing left to look at.',
      'As with the first kind, the kind is not a verdict. Most of what people say and do to each other is fair: a friend who cancels and apologises, a colleague who says "I remember it differently", a manager who gives praise. All of those are this kind too. Whether what Carla said was a fair defence or something worse is a separate question. The key asks it later, and this unit does not teach it. Here you are only saying what there is to look at: what she said to him, and where it left him.'
    ],
    feature: { step: 'D1', option: 'tactic' },
    name: 'The key’s answer, and so the name of the kind, is {a:D1.tactic}. "Another" means another person: the one it is said or done to. This unit calls that person the other person. "Does" covers saying as well as doing, because words said to someone are something done to them.' },

  { id: 'again-tactic', kind: 'again', family: 'tactic',
    link: 'The deadline gave you what to point to: {needs:tactic}. Here it is again, a long way from any office, and this time what is said sounds like love, not like an attack.',
    first: 'g-deadline', second: 'g-flatmates', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the story (a late report, a new relationship) and ignore the tone (an accusation, a compliment). Look at one thing only: what does one person say or do to the other?',
    prompt: { kind: 'phrase', answer: 'asked her to stop seeing her old flatmates so much' },
    shared: [
      'In both cases there are two people, and one of them says something to the other that is about the other person or about the two of them. Carla tells Ben what he is like. Felix tells Dana what she is to him, and asks her to see less of her friends.',
      'In both, the case shows where it leaves the other person. Ben checks his calendar. Dana stops going to the flat.',
      'One of these sounds like an attack and the other sounds like love. That makes no difference to the kind. Both are something said to a person, about that person, and both have to be looked at with two people in view. That is what {a:D1.tactic} names.'
    ] },

  { id: 'portrait-tactic', kind: 'portrait', family: 'tactic',
    link: 'As with the first kind, what you point to is not the whole picture. Here is the rest of {a:D1.tactic}.',
    typical: [
      'There are two people in view, and you need both. One says or does something. The other is the person it is said or done to.',
      'What is said or done is about the other person (what they did, what they remember, what they are like, how much they are loved), or about what has happened between the two.',
      'The case usually shows where it leaves the other person: what they now believe, doubt, feel or do. That is often the clearest thing in the case, and a good place to start reading.',
      'It can be one conversation, or it can go on for months. What makes it this kind is that it stays between these two people.',
      'It can be fair or unfair, gentle or cruel. Praise, an apology and an honest "I remember it differently" are this kind. So is being told that you imagined something you saw.'
    ],
    not: [
      'A second person in the story does not make a case this kind. Leila’s sister was only listening, and nothing was said about her.',
      'And a person in a bad mood is not, for that reason, doing something to you. Someone who is short with everyone in the office on a bad day has not said or done anything about any one of them.'
    ],
    wild: ['"That never happened."', '"You’re the one who always..."', '"After everything I’ve done for you."', '"Nobody else would put up with you."', '"I got that wrong, and I’m sorry."'],
    self: 'In your own life this is the kind you are in the middle of, on one side or the other: the conversation you replay on the way home, the message you read three times, the thing you said to someone that you would not want said to you.',
    ask: '"What exactly was said or done to the other person, and where did it leave them?" Answer with what happened, before you reach for any word for it.' },

  { id: 'check-tactic', kind: 'check', after: 'tactic',
    case: 'g-phonecall',
    ask: { type: 'option', step: 'D1', among: ['reasoning', 'tactic'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-reasoning-tactic', kind: 'lookalike', ledger: 'reasoning~tactic',
    link: 'You have now met two kinds on their own. They are easy to mix up, because in both a person may be explaining themselves, and there may be someone else in the room. This card puts them side by side.',
    cases: ['g-birthday-brother', 'g-birthday-wife'],
    instruction: 'Both cases are about Dev and the birthday he forgot. Compare one thing: who his words are about, and who they are said to.',
    prompt: { kind: 'which', option: 'D1.tactic', answer: 'g-birthday-wife' },
    difference: [
      'In Case A Dev is explaining something he did, and the explanation is about Dev: his month at work. His brother is only listening. Take the brother away and the case is unchanged: a man giving a reason for his own mistake. The key’s answer is {a:D1.reasoning}.',
      'In Case B the same man, about the same forgotten birthday, says something to his wife about his wife: that she is too sensitive, and what she "always" does. The case shows where it leaves her: apologising for having been hurt. Take her away and nothing is left. The key’s answer is {a:D1.tactic}.',
      'So the same person, about the same forgotten birthday, can give you two different kinds of case. What separates them is not how bad it sounds. It is who the words are about and who they are said to.'
    ] },

  { id: 'exc-blame', kind: 'exception', ledger: 'reasoning~tactic', looksLike: 'reasoning', is: 'tactic',
    h: 'A reason that is about the other person',
    link: 'The last card kept the two kinds tidy: in Case A Dev’s words were about himself, and in Case B they were about his wife. Real cases are often less tidy. A person can give a reason for something they did, and make that reason out of the person they are talking to.',
    case: 'g-shouting',
    setup: 'Marta gives a reason for something she did: she shouted, and here is why. A reason for something the person did is what you point to for {a:D1.reasoning}. Yet the key’s answer for this case is {a:D1.tactic}.',
    prompt: { kind: 'phrase', answer: 'because you never listen' },
    because: [
      'Marta’s reason is not about Marta. It is about Kofi, and she says it to him. A reason for your own act that is made out of the other person, and handed to them, does two jobs at once. It explains you, and it tells them what they are like.',
      'The case shows the second job being done. Kofi does not spend the evening thinking about the shouting. He spends it asking whether he ever listens. The question on the table has changed from what Marta did to what Kofi is like.',
      'So this case shows both kinds at once: a person’s reason for her own act, and something said to another person about him. When a case shows both, the key has to choose one answer, and it chooses the second kind.'
    ],
    take: [
      'It is worth knowing that this is the key’s decision. In life, explaining yourself and blaming someone else run into each other all the time, and nobody can draw a sharp line between them. The key gives each case one answer, so that two people using it reach the same one and can each say why.',
      'It chooses this way round for a reason. The key’s later question about {a:D1.tactic} looks at what was said or done to the other person, and that is what Kofi would want someone to look at. If the case were given the answer {a:D1.reasoning}, Kofi would be left out of what the key looks at.'
    ] }
]);

// Psychology, Unit Three, part one (second half): the second name, the first look-alike pair, and the first tie-break.

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
      'When someone raises something you did, you have some honest answers. You can say sorry, or explain, or, if you did not do it, say so. Each of these keeps the conversation on the thing that was raised.',
      'Marek does something else. He denies it, which would be fine if he had not done it, but the case shows he did. Then he attacks Joy, so that the subject is now Joy’s lateness. Then he says he is the one being picked on, so that Joy, who raised a real problem, has become the person who did wrong. By the end of the exchange, the thing she raised has gone, and she is the one on the defensive.',
      'All three parts are needed, and all three come in answer to being raised with. And notice what the case must also show: that he really did it. A person who is wrongly accused can deny it, be angry, and say they are being picked on, and that is not this. The thing denied has to be something the case shows they did.',
      'This needs only one exchange. It does not have to be repeated. That is the difference from {o:gaslight}, which is about a denial coming back for months.'
    ],
    feature: { step: 'T1', option: 'reverse' },
    name: 'The name for this is {o:darvo}. The name says what happens to the blame: it starts with Marek and, by the end of the exchange, it has been turned around onto Joy. The name is for an exchange with all three parts, in which the case shows he did it. One or two of the three parts is not enough.' },

  { id: 'again-darvo', kind: 'again', outcome: 'darvo',
    link: 'The missing register money gave you what to point to: {needs:darvo}. Here is a second case with a completely different story.',
    first: 'd-till', second: 'd-phone', step: 'T1',
    instruction: 'Find what the two cases share. Ignore the story (a bar, a marriage). Look at one thing only: what the person says back when the other raises it.',
    prompt: { kind: 'phrase', answer: "'Those aren't what you think,' Paolo says, 'and I never said I'd stopped seeing her. Do you know how controlling it is to go through someone's phone? Everyone says so. I work all week for this family, and now I'm put on trial in my own kitchen.'" },
    shared: [
      'In both cases something was raised with the person, and the case shows they did it: the camera for Marek, and the messages for Paolo. In both, the person answers with the same three things: a denial ("That\'s not true", "I never said I\'d stopped seeing her"), an attack on the person who raised it ("you were late", "how controlling you are"), and a claim to be the one wronged ("I\'m the one being picked on", "I\'m put on trial"). In both, it all comes in one exchange.',
      'One story is a bar and the other a marriage; one person took money and the other kept a secret. The stories share nothing, so this is not about workplaces, marriages or money. It holds wherever the case shows the person did something, someone raises it, and in answer the person denies it, attacks the one who raised it, and plays the one wronged. That is what {o:darvo} names.'
    ] },

  { id: 'portrait-darvo', kind: 'portrait', outcome: 'darvo',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:darvo} in real life, where nobody marks the words for you.',
    typical: [
      'It always comes in answer to something. Someone has raised a real problem, and the reply is where the case turns. Without the raising, there is nothing to deny.',
      'The attack is usually about something else. It goes for a different fault of the person who raised it ("you were late"), or for their motives ("you are always looking for someone to blame"), or for the way they raised it ("how dare you accuse me"). Sometimes what it says is even true. That does not matter. What matters is that it moves the attention away from what was raised.',
      'Playing the one wronged is often said as hurt: "I am the one who gets treated like a criminal", "after everything I have done for you". The person who raised the problem ends up apologizing, or explaining why they raised it.',
      'It can be quiet, as well as loud. "Honestly, I am hurt that you would say that" is playing the one wronged in a calm, sad voice, and the denial and the attack can be in the same calm voice.',
      'It needs all three parts, in one reply or one conversation. A reply that is only a denial, or only anger, does not have the other parts yet.'
    ],
    not: 'An angry or defensive reply is not {o:darvo}. People who are wrongly accused deny it, are angry, and say they are being picked on, and they may be right to. A person who did it and says "yes, that was me, I am sorry" has not done it either. The name applies only when the case shows the person did what was raised, and they answer with all three.',
    wild: ['"That never happened."', '"You are the one who always does this."', '"How dare you accuse me."', '"After everything I have done for you."', '"I am the one being attacked here."'],
    self: 'You may catch it in yourself, in the middle of a row: someone has raised something you did, and you find you are reaching for something they did, instead of answering what they said.',
    ask: '"What was raised with the person, and does the case show they did it?" If it does, look for the three parts of the answer, and for whether the attention ended up somewhere else.' },

  { id: 'check-darvo', kind: 'check', after: 'darvo',
    case: 'd-check',
    ask: { type: 'option', step: 'T1', among: ['denymemory', 'reverse'] } },

  /* ---------- The first look-alike pair ---------- */
  { id: 'look-gaslight-darvo', kind: 'lookalike', ledger: 'gaslight~darvo',
    link: 'You have met both names on their own. Both have a person denying that something happened, so they are easy to mix up. This card puts them side by side.',
    cases: ['dent-months', 'dent-once'],
    instruction: 'Both cases are about Ravi, his wife Lena and a dent in the car. Compare one thing: is this one exchange, in which Lena is asked about it and answers with a denial, an attack and playing the one wronged? Or is it the same denial coming back over months, until Ravi starts to doubt his memory?',
    prompt: { kind: 'which', option: 'T1.reverse', answer: 'dent-once' },
    difference: [
      'In Case A the denial is not given once. In the weeks after March, and for months, Lena says the dent was there already, that it was never her, and that Ravi invents things. By July Ravi has stopped raising it and has asked a neighbor whether he is going mad. The answer is {a:T1.denymemory}, and the case is {o:gaslight}.',
      'In Case B it is one dinner. Ravi raises it, and in answer Lena denies it, goes for his lateness with the children, and says she is the one being accused after being up since five. That is all three parts in one exchange, and nothing is repeated for months. The answer is {a:T1.reverse}, and the case is {o:darvo}.',
      'The two cases share the same dent, the same two people and a denial. What differs is whether it is one exchange with three parts, or one denial that keeps coming back until the other person doubts themselves.'
    ] },

  /* ---------- The first tie-break ---------- */
  { id: 'exc-memory', kind: 'exception', looksLike: 'darvo', is: 'gaslight', ledger: 'gaslight~darvo',
    h: 'When a case shows both',
    link: 'The last card separated the pair with two tidy cases. Real cases are often less tidy: the same person denies, attacks and plays the one wronged, and does it month after month. Here is one.',
    case: 'invoices',
    setup: 'Look at what Kit does when Hana raises the unpaid invoices: he denies it, he attacks her ("you are always looking for someone to blame"), and he says he is the one who gets treated like a thief. That is all three parts, which is what you point to for {o:darvo}. Yet this case is {o:gaslight}.',
    prompt: { kind: 'phrase', answer: 'Every month since, when Hana raises the unpaid invoices, Kit does the same three things in one go.' },
    because: [
      'Ask how often. Kit does not do this once. He does it every month, about something the signed sheet shows really happened, and Hana has started to doubt her own memory: she photographs every document, and she has asked her accountant, "Am I making this up?" That is what you point to for {o:gaslight}.',
      'When the denial of what happened comes back over weeks or months until the other person doubts their memory, the three parts of {o:darvo} are just how it is said each time. They do not make a second thing.'
    ],
    take: 'The answer is chosen this way on purpose, and it is worth knowing that the choice is made in advance, for every case alike. In life the two overlap, and people who study them do not all draw the line in the same place. Each case gets one name, and where a case shows both it takes the one that lasts longer, so that two people using these questions reach the same answer and can each say why.' }
]);

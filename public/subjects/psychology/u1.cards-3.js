// Psychology, Unit One, part three: the third kind (a lasting way someone is), its look-alike pair with the
// second kind, and the exception that carries the key's second tie-break.

FC.cards('psychology', 'u1', [

  /* ---------- The third kind: a lasting way someone is ---------- */
  { id: 'meet-pattern', kind: 'meet', family: 'pattern',
    link: 'The first two kinds can both be seen in a single conversation. The third cannot: it needs far more than a conversation to show it, and people are quick to claim it on far less.',
    case: 'g-moira', mark: 'D1',
    strip: [
      'There is one person: Moira.',
      'There is a long stretch of time: twenty years.',
      'There is more than one place: three firms, family holidays, shared flats.',
      'There is more than one relationship: colleagues, two brothers, old friends.',
      'The same thing runs through all of it: when something goes wrong, it was somebody else.'
    ],
    explain: [
      'No single moment is shown here. You are not told about one meeting or one argument. You are given a long view, the sort you only get by knowing someone for years, or by hearing from several people who each know a different part of their life. What the case is made of is a person across time: the same way of acting, turning up again in different years, in different places and with different people.',
      'The years, the places and the relationships each do a job. The years show that it is not a bad patch. The places show that it is not one job or one household bringing it out. The relationships show that it is not one other person bringing it out. When a case has all three, what is left to explain what you see is the person: it is no longer the week, the workplace or the other party.',
      'This is the largest claim of the four kinds, because it is a claim about a whole person and not about one thing they said or did. That is why it needs the most to point to, and why this answer is given only when the case itself shows all of it.'
    ],
    feature: { step: 'D1', option: 'pattern' },
    name: [
      'The answer, and the name of the kind, is {a:D1.pattern}. "Lasting" is the word that matters. It means years, and it means in more than one part of the person’s life. "A way someone is" can be anything: generous, blunt, anxious, unable to admit a mistake. The name does not say the way is a bad one. Whether a way of being does any harm is something a later question asks about.',
      'This answer is also not a diagnosis. A diagnosis is a named medical or psychological condition, and only a trained professional can give one, after a long assessment of the person. The answer does something different: it says what a case shows. A case can show years, places and relationships without anyone having diagnosed anything.'
    ] },

  { id: 'again-pattern', kind: 'again', family: 'pattern',
    link: 'Moira’s case gave you what to point to: {needs:pattern}. Here is a second case, about something quite different from blame.',
    first: 'g-moira', second: 'g-rings', step: 'D1',
    instruction: 'Find what the two cases share. Ignore what each person does (blaming others, ringing until people answer). Look at one thing only: how much of the person’s life does the case show?',
    prompt: { kind: 'phrase', answer: 'she does it now, at thirty-four, with her husband and with the people on her team at work' },
    shared: [
      'Both cases are a long view of one person. Moira: twenty years, three firms, brothers and friends. Jess: from seventeen to thirty-four, at home and at work, with a boyfriend, flatmates, a husband and a team.',
      'What the two women do has nothing in common. One never admits a mistake. The other cannot bear an unanswered message. What the cases share is their shape, and it is the shape you were told to point to: {needs:pattern}.',
      'So this kind is not about any particular behaviour. Whatever the behaviour is, the case has to show it lasting and spreading across a life. That is what {a:D1.pattern} names.'
    ] },

  { id: 'portrait-pattern', kind: 'portrait', family: 'pattern',
    link: 'You know what to point to for {a:D1.pattern}. This card fills in the rest, and says how rarely you really have it.',
    typical: [
      'The case is a long view. It covers years, and it usually says so: "for ten years", "since her teens", "in every job he has had".',
      'It names more than one place or more than one relationship: work and home, partners and friends, this firm and the last one.',
      'The same way of acting runs through all of it. The details change from year to year. What the person does stays recognisable.',
      'Often nobody in the case is doing anything at this moment. It reads like a summary, because it is one.',
      'You rarely have this much from what you have seen yourself. It comes from knowing someone a long time, or from several people who each know a different part of their life.',
      'It is not always a bad thing. Someone who has been generous, shy or blunt for thirty years, everywhere and with everyone, is this kind too.'
    ],
    not: [
      'A strong impression is not years. One evening can be so striking that it feels like the whole person, and it is still one evening.',
      'Nor is the word "always" the same as years in the case. "You always do this", said in a row, is one person’s claim about another, made in one evening. The case itself has to show the years, the places and the relationships.'
    ],
    wild: ['"He’s always been like that."', '"She was the same at school."', '"Ask anyone who has worked with him."', '"Every relationship, the same story."', '"Thirty years, and he has never once..."'],
    self: 'In your own life you have this much to go on about very few people: yourself, your family, friends of many years. About most of the people you are tempted to sum up, you have an evening, or a few months in one office.',
    ask: '"How long have I seen this, in how many places, and with how many people?" If the honest answer is "once", "only at work" or "only with me", you do not have this kind yet.' },

  { id: 'check-pattern', kind: 'check', after: 'pattern',
    case: 'g-borrower',
    ask: { type: 'option', step: 'D1', among: ['reasoning', 'tactic', 'pattern'] } },

  /* ---------- The second look-alike pair ---------- */
  { id: 'look-tactic-pattern', kind: 'lookalike', ledger: 'tactic~pattern',
    link: 'The second and third kinds are easily mixed up, and usually in one direction: a person sees one thing done to someone and decides what the doer is like. This card puts the two side by side.',
    cases: ['g-credit-friday', 'g-credit-years'],
    instruction: 'Both cases are about Paul taking the credit for someone else’s work. Compare one thing: does the case stay between two people, or does it follow one person through years, places and relationships?',
    prompt: { kind: 'which', option: 'D1.pattern', answer: 'g-credit-years' },
    difference: [
      'In Case A you are shown one episode between two people. Paul does something to Gina: he takes her idea. Then he says something to her about her: she must be confused. You see where it leaves her, wondering. Nothing in the case goes outside the two of them, and nothing goes back further than Friday. The answer is {a:D1.tactic}.',
      'In Case B Gina does not appear, and nobody is having a conversation. The case follows Paul: every job, two firms in his thirties, a sister back in his school days, a football club. The answer is {a:D1.pattern}.',
      'Case A can be true without Case B. A person can do this once, to one colleague, in one bad week of a long working life. So Case A on its own never lets you say what Paul is like. It lets you say what Paul did to Gina, which is already a good deal, and is the thing Gina needs looked at.'
    ] },

  { id: 'exc-years', kind: 'exception', ledger: 'tactic~pattern', looksLike: 'tactic', is: 'pattern',
    h: 'One evening, and then the years behind it',
    link: 'In the last card each case showed one kind only. Some cases start as one evening between two people and then go on to show you the years. In a case like that the answer has to be either {a:D1.pattern} or another one. Here is one, and it is decided the same way every time one turns up.',
    case: 'g-phone',
    setup: 'The case opens on one evening: Mia accuses Aaron and goes through his phone. That is two people, and something one of them does to the other, so it shows what you point to for {a:D1.tactic}. Yet the answer for this case is {a:D1.pattern}.',
    prompt: { kind: 'phrase', answer: 'She did the same to the two partners before him' },
    because: [
      'The first half of the case is one evening between two people, and if it stopped there the answer would be {a:D1.tactic}. The second half changes what the case is made of. It leaves Aaron behind and follows Mia: two earlier partners, friends when she was fifteen, colleagues at her last job.',
      'Now check it against what you must be able to point to for {a:D1.pattern}: {needs:pattern}. The years are there, from fifteen to now. The places are there, home and work. The relationships are there: partners, friends, colleagues. And it is the same thing in each.',
      'So the case shows both kinds: something done to another person on one evening, and the same thing running through years. Every case gets one answer, and for a case like this the choice has been made.'
    ],
    take: [
      'This too is decided in advance, and here is the reason for it. {a:D1.tactic} is a claim about one evening or one relationship. {a:D1.pattern} is a claim about a person. A case that supports the larger claim is not fully described by the smaller one.',
      'The evening with Aaron does not vanish. It becomes one of the occasions that make up the long view. And notice what did the work: the last sentence of the case. Without it you would have one evening, and one evening is never enough for this answer, however bad the evening was.'
    ] }
]);

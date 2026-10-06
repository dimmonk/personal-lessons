// Psychology, Unit Three, part two (second half) and part three (first half): the fourth name, and the ordinary exchange.
// The ordinary exchange is taught as a name like the others, with its own cards, because it is the answer most cases get.

FC.cards('psychology', 'u3', [

  /* ---------- Love-bombing ---------- */
  { id: 'meet-lovebomb', kind: 'meet', outcome: 'lovebomb',
    link: 'The first three names happen in a reply, or inside a story that is already running. The fourth starts at the very beginning of a relationship, and has two halves, which may be weeks apart.',
    case: 'l-wedding', mark: 'T1',
    strip: [
      'Early on there is far more attention than the relationship so far would explain: by the second date Callum has called Priya "the one", and by the fourth he has bought her a coat and is texting forty times a day.',
      'Later the attention is pulled back: when Priya says she needs a weekend to herself, he goes silent for four days.',
      'And it turns critical: he writes, "I thought you were different from the others who put themselves first."',
      'The pulling back follows her setting a limit.'
    ],
    explain: [
      'Attention is a good thing. People who are keen on each other give praise, gifts and time, and a quick friendship is not a fault. So the first half, on its own, says nothing is wrong.',
      'What matters is the size and the speed, set against how long the two have known each other, and then what happens to the attention. Callum’s is far more than a few dates could explain, and it comes with a hidden condition: it lasts while Priya does what he wants. When she asks for a weekend alone, it goes, and it comes back as criticism.',
      'That is why both halves are needed. The flood on its own is a keen friend. The pulling back on its own is a relationship that has cooled. Together, a person has first been made to feel very special and then made to feel they have lost it for saying no, and the natural response is to work to get it back.',
      'The question is not whether Callum planned it. It is what is done to the other person, as the case shows it, and here the case shows both halves.'
    ],
    feature: { step: 'T1', option: 'floodpull' },
    name: 'The name for this is {o:lovebomb}. A "bomb" is a great deal arriving all at once, and here it is praise and attention. The name is for a case with both halves: the flood early on and the pulling back later. It does not need a romance. It can be a friend, a mentor or a boss.' },

  { id: 'again-lovebomb', kind: 'again', outcome: 'lovebomb',
    link: 'The first month gave you what to point to: {needs:lovebomb}. Here is a second case with a completely different story.',
    first: 'l-wedding', second: 'l-mentor', step: 'T1',
    instruction: 'Find what the two cases share. Ignore the story (dating, a workplace). Look at one thing only: what happens to the attention once the other person turns something down.',
    prompt: { kind: 'phrase', answer: "In her third month she turned down an invitation to cover his weekend shift. For the next two weeks Greg stopped speaking to her at lunch, copied her manager into small errors in her work, and said, 'I thought you were someone I could count on.'" },
    shared: [
      'In both cases there is, early on, far more attention than the time would explain: forty texts a day and a coat, or a whole department told she is the best hire in years and a client list handed over within a month. And in both, once the person turns something down, the attention is pulled back: four days of silence, or two weeks of no lunches and small errors reported. In both it turns into a remark that the person has let someone down: "I thought you were different", "I thought you were someone I could count on".',
      'One story is a date and the other is an office. The stories share nothing, so this is not about romance or about work. It holds wherever far more attention than the relationship would explain comes first, and is later pulled back. That is what {o:lovebomb} names.'
    ] },

  { id: 'portrait-lovebomb', kind: 'portrait', outcome: 'lovebomb',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:lovebomb} in real life, where nobody marks the words for you.',
    typical: [
      'The first half comes fast. The person is told they are special, rare, or the only one who understands, and plans for the future arrive early.',
      'The attention is often gifts, time and constant messages: things that are hard to refuse and that make the person feel they owe something back.',
      'The pulling back often follows a limit: a no, a weekend trip, a night in. It does not always, but it often does.',
      'The criticism that comes with it compares the person with how they were: "you have changed", "I thought you were different". The person is made to feel they have lost something, and often tries hard to earn it back.',
      'It can happen in a friendship, between a mentor and a junior, in a group, as well as in a romance.'
    ],
    not: 'Warm early attention is not {o:lovebomb}. People who like each other quickly are common, and a person who stays warm when the other says no is simply warm. And a relationship that cools is not it either, unless the case shows the earlier flood. Both halves are needed, and the flood has to be more than the time so far would explain.',
    wild: ['"I have never felt like this about anyone."', '"You are perfect."', '"We should move in together."', 'Later: "I thought you were different."', 'Later: "You have changed."'],
    self: 'You may meet it in a new friendship, job or group where everything is wonderful and fast, and then one "no" changes the temperature.',
    ask: '"How much attention is this, compared with how long we have known each other, and what happens to it when I say no?"' },

  { id: 'check-lovebomb', kind: 'check', after: 'lovebomb',
    case: 'l-check',
    ask: { type: 'option', step: 'T1', among: ['denymemory', 'reverse', 'ownfault', 'floodpull'] } },

  /* ---------- An ordinary exchange ---------- */
  { id: 'meet-ordexchange', kind: 'meet', outcome: 'ordexchange',
    link: 'The four names so far each need things in the case. The fifth name is for the many cases where none of them is there. It is the one you will use most.',
    case: 'o-bins', mark: 'T1',
    strip: [
      'There are two people, and something one says to the other: Priya complains about the trash.',
      'The other answers it plainly: Sam says "You\'re right, I forgot" and offers to fix it.',
      'Nothing is denied that really happened, and nothing comes back over months.',
      'Nobody attacks back and nobody plays the one wronged.',
      'No attention is poured on and withdrawn, and no accusation is made that fits the person making it.'
    ],
    explain: [
      'Most of what people say to each other is not one of the four. People complain, disagree, defend themselves, forget things, get annoyed, say sharp words, apologize, and say kind ones. Priya is cross, and she says so. Sam answers. That is all there is.',
      'It is tempting, once you have learned four names for things people do to each other, to look for one of them in everything. That is a mistake the questions are built to stop. The fifth answer is there so that you can say, as exactly as you can say what is going on elsewhere, that none of the four is.',
      'Notice what "ordinary" does not mean. It does not mean polite, fair or kind. A person can be rude, unfair and wrong, and it is still {o:ordexchange} in this sense, because none of the four is in the case. And it does not mean nobody was hurt. How upset anyone was is not what is asked. The question is what was done to the other person, and here the answer is: what it looks like, and nothing more.'
    ],
    feature: { step: 'T1', option: 'plain' },
    name: 'The name for this is {o:ordexchange}. An "exchange" is something said or done between two people, and "ordinary" says that none of the four is in it. It is the name for a case where none of the four things is happening, and it is used as exactly as the other four.' },

  { id: 'again-ordexchange', kind: 'again', outcome: 'ordexchange',
    link: 'The trash case gave you what to point to: {needs:ordexchange}. Here is a second case with a completely different story.',
    first: 'o-bins', second: 'o-review', step: 'T1',
    instruction: 'Find what the two cases share. Ignore the story (trash, a draft). Look at one thing only: how the second person answers the first.',
    prompt: { kind: 'phrase', answer: "Isla says, 'I disagree. I think it needs the detail, but show me which parts you would cut.'" },
    shared: [
      'In both cases one person tells the other something unwelcome: a complaint, some blunt feedback. In both, the other person answers it straight. Sam agrees, and Isla disagrees and offers to look at the detail. One agrees and one disagrees, and that makes no difference. In both, nothing is denied that really happened, nothing repeats, nobody attacks back or plays the one wronged, no attention is poured on and withdrawn, and no accusation fits the accuser.',
      'A disagreement is not a sign that something is wrong. Two people who say what they think to each other, and answer what was said, are doing what people ordinarily do. That is what {o:ordexchange} names.'
    ] },

  { id: 'portrait-ordexchange', kind: 'portrait', outcome: 'ordexchange',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can recognize {o:ordexchange} in real life, where nobody marks the words for you.',
    typical: [
      'It covers a wide range: a complaint, a disagreement, a defense, an apology, a refusal, praise, an angry word, a joke that lands badly.',
      'The reply fits what was said. If the first person says "you forgot the trash", the reply is about the trash: it agrees, disagrees, explains or says sorry.',
      'Feelings can run high. Someone can shout and still be in this answer, if none of the four is in the case.',
      'A person who is wrongly accused can look as if they are doing something when they deny it, get angry and say they are being picked on. The case shows they did not do it, so the denial is true.',
      'A fair accusation from someone who does it too is still fair. If the case shows the person accused doing it, it does not matter that the accuser does it as well.',
      'Warm early praise that stays warm when the other person says no is simply warmth.'
    ],
    not: 'It does not mean nothing wrong happened. A person can be unkind, wrong or careless and the case can still be {o:ordexchange}. It means that none of the four things is in the case.',
    wild: ['"You\'re right, I forgot."', '"I disagree, and here is why."', '"That\'s not fair, and I\'m annoyed."', '"I wasn\'t there. Check the camera."', '"Well done, that was good."'],
    self: 'Most of what you meet this week will be this. The test is whether you can point to any of the four in the words of the case. If you cannot, say so.',
    ask: '"Can I point to any of the four things in the words of this case?" If not, the answer is this one, however upset anyone is.' },

  { id: 'check-ordexchange', kind: 'check', after: 'ordexchange',
    case: 'o-check',
    ask: { type: 'option', step: 'T1', among: ['denymemory', 'reverse', 'ownfault', 'floodpull', 'plain'] } },

  { id: 'refute-everywhere', kind: 'refute', about: 'ordexchange',
    h: 'A wrong idea: "Once you know the four, you see them everywhere"',
    link: 'You now have all five names. The idea on this card is the most common mistake made with the first four, and it is the reason the fifth exists.',
    idea: '"Now I know the four, I can see them everywhere. If someone upsets me, it is probably one of them."',
    verdict: 'This is wrong.',
    right: [
      'Being upset tells you that something happened to you. It does not tell you which of the five it was. The question never mentions how upset anyone was, whether it was meant, or what kind of person did it. It asks only what is done to the other person, as the case shows it.',
      'Most of what upsets us is {o:ordexchange}: a sharp word, an unfair complaint, a refusal, a person being defensive. Treating it as one of the four has a cost. It turns an argument that could be talked about into an accusation that cannot be, and it makes the cases where one of the four is really there harder to hear.',
      'Before you use any of the four names, point to what that name needs. If you cannot point to it in the words of the case, the answer is {a:T1.plain}.'
    ],
    testedBy: ['claim-everywhere'] }
]);

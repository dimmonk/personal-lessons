// Psychology, Unit Three, part two (second half): the fourth name, and the ordinary exchange.
// The ordinary exchange is taught as a name like the others, with its own cards, because it is the answer most cases get.

FC.cards('psychology', 'u3', [

  /* ---------- Love-bombing ---------- */
  { id: 'meet-lovebomb', kind: 'meet', outcome: 'lovebomb',
    link: 'The first three names happen in a reply, or inside a story that is already running. The fourth starts at the very beginning of a relationship, and has two halves, which may be weeks apart.',
    case: 'l-wedding', mark: 'T1',
    strip: [
      'Early on there is far more attention than the relationship so far would explain: by the second date Callum has called Priya "the one", and by the fourth he has bought her a coat and is texting forty times a day.',
      'Later the attention is pulled back: when Priya says she needs a weekend to herself, he goes silent for four days.',
      'And it turns critical: he writes, "I thought you were different from the others who put themselves first."'
    ],
    explain: [
      'Attention is a good thing. People who are keen on each other give praise, gifts and time, and a quick friendship is not a fault. So the first half, on its own, says nothing is wrong. What matters is the size and the speed, set against how long the two have known each other, and then what happens to the attention. Callum’s lasts while Priya does what he wants. When she asks for a weekend alone, it goes, and it comes back as criticism.',
      'That is why both halves are needed. The flood on its own is a keen friend. The pulling back on its own is a relationship that has cooled. Together, a person has first been made to feel very special and then made to feel they have lost it for saying no, and the natural response is to work to get it back.'
    ],
    feature: { step: 'T1', option: 'floodpull' },
    name: 'The name for this is {o:lovebomb}. A "bomb" is a great deal arriving all at once, and here it is praise and attention. The name is for a case with both halves: the flood early on and the pulling back later. It does not need a romance. It can be a friend, a mentor or a boss.' },

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
      'Nothing is denied that really happened, nobody attacks back or plays the one wronged, no attention is poured on and withdrawn, and no accusation is made that fits the person making it.'
    ],
    explain: [
      'Most of what people say to each other is not one of the four. People complain, disagree, defend themselves, forget things, get annoyed, say sharp words, apologize, and say kind ones. Priya is cross, and she says so. Sam answers. That is all there is.',
      'It is tempting, once you have learned four names for things people do to each other, to look for one of them in everything. That is a mistake the questions are built to stop. "Ordinary" does not mean polite, fair or kind, and it does not mean nobody was hurt. A person can be rude, unfair and wrong, and it is still {o:ordexchange}, because none of the four is in the case. How upset anyone was is not what is asked.'
    ],
    feature: { step: 'T1', option: 'plain' },
    name: 'The name for this is {o:ordexchange}. An "exchange" is something said or done between two people, and "ordinary" says that none of the four is in it. It is used as exactly as the other four.' },

  { id: 'check-ordexchange', kind: 'check', after: 'ordexchange',
    case: 'o-check',
    ask: { type: 'option', step: 'T1', among: ['denymemory', 'reverse', 'ownfault', 'floodpull', 'plain'] } }
]);

// Statistical Claims, Unit One, part one: the opening card and the first answer (who or what the figure was worked out from).
// This is the subject's gate unit (lesson standard A15): a card that would carry `outcome` in a branch unit carries `family`,
// and a family's name is its answer to the key's first question, printed by {a:S1.<family>}.
// Key wording is never typed here: tokens are filled in from key.js. The app prints, and this file therefore does not
// contain: the preview map, the heading of a meet card, "what you must be able to point to", the key's question and answer
// on a meet card, the stem of every commit prompt, and the heading of an again or portrait card.
// Words this unit keeps to one meaning each: claim (what someone says with a number in it), figure (the number or numbers
// in a claim), part (one of the four steps a claim is built from), case (the app's word for one example).

FC.cards('stats', 'u1', [

  { id: 'orient-claim', kind: 'orient',
    h: 'Before you believe a number: which part of the claim could mislead you?',
    canDo: 'After this unit you can read a claim made with numbers, such as a headline, an ad or a message a friend forwards, and say where the trouble in it starts, or that there is none. You will be able to point to the words that show it, and to say why it is not one of the other answers. The claim can be about a café, a hospital, a school, your street, or something you are about to share.',
    everyday: [
      'You meet claims like these every week. A headline says, "Nine in ten parents want school to start later." A message in the neighborhood group says, "Burglaries on our road are up 200%!" An ad says, "People who take our vitamin catch fewer colds." Each one puts a number in front of you and wants you to believe something, share it, or act on it.',
      'A number on its own proves nothing. A claim made with numbers is built in steps, and each step can be sound or unsound. First, some people or things are counted. Then the count is read as showing something real. Then it is set beside something, so that you can tell whether it is big or small. And sometimes the claim goes further and says that one thing caused another. Each step rests on the ones before it. If an early step is wrong, nothing built on it can be relied on: ten parents stopped outside one school entrance tell you nothing about parents in general, however carefully the later steps are done.',
      'Most people do not check any of this. They check whether the number sounds big, or whether they like it. This unit teaches the first question about every claim: which of its parts goes wrong first. It also teaches that sometimes the answer is that none of them does.'
    ],
    add: [
      'Four words are used all the way through, so here they are once. A claim is what someone says with a number in it. A figure is the number, or the numbers, in a claim: a share, an average, a count. A case is the app’s word for one example: a claim as someone might say it to you, with whatever the speaker tells you about where the figure came from, in a few sentences. The questions are a short list that you put to a claim, always in the same order. Each answer narrows down what is wrong with it, until one name is left.',
      'This unit teaches the first question and nothing after it. That question sorts a claim into one of five answers, and in this unit the answer is the name. Four of the answers name a part of a claim that fails. The fifth says that no part does, and that is a result in its own right: a claim can be sound, and being able to say so is as much a part of the skill as finding what is wrong. Everything else in the subject starts from the answer to this first question.'
    ],
    map: { branch: 'gate' } },

  /* ---------- The first answer: the people or things the figure was worked out from ---------- */
  { id: 'meet-counted', kind: 'meet', family: 'counted',
    link: 'Start with the first part of a claim, because every other part rests on it: the people or things that the figure was worked out from.',
    case: 'gate-golf', mark: 'S1',
    strip: [
      'There is a figure: 45 out of 50, which is nine in ten.',
      'There is a group the figure was worked out from: the 50 people the reporter happened to ask.',
      'They were found in one place at one time: outside the golf club, on a Saturday morning.',
      'There is a group the claim is about: the townspeople, which means everyone who lives in the town.',
      'The claim speaks for the second group, and the figure comes only from the first.'
    ],
    explain: [
      'The sum is fine. Forty-five out of fifty is nine in ten, and if the reporter asked the same fifty people again she would very likely hear the same answers. Nothing is wrong with the arithmetic, and nothing is wrong with what the people said.',
      'What is wrong is who is in the figure. People standing outside a golf club on a Saturday morning are mostly people who play golf, and people who play golf are more likely than most to want another course. So the figure may be a true picture of golfers and still tell you very little about the town. The claim says "townspeople". The figure comes from people who were in a particular place, found by where the reporter chose to stand.',
      'This is the first thing to check in any claim made with numbers, because every later check depends on it. Before you ask what the figure means, ask who or what it was worked out from, and whether they are a fair picture of the group the claim is about. If they are not, the figure can be exactly right for the people in it and still be unable to support what the claim says. The same holds for things: a figure worked out from some shops, some hospitals or some years is a figure about those, and the claim has to stay with them.',
      'There are two ways the people or things can fail, and the line below holds both. The first is the one in this case: they are not a fair picture of the group the claim is about. The second is that there are so few of them that luck alone could move the figure a long way: if three people out of four say yes, a fifth person could change "three in four" to "four in five". The next card shows that one.'
    ],
    feature: { step: 'S1', option: 'counted' },
    name: [
      'In this unit the answer is also the name of the kind: {a:S1.counted}. In every claim in this subject, this is the part you look at first. "Counted" means that a person, a thing or a place is included in the figure, whether anyone literally counted heads or the figure is an average or a share.',
      'The people or things in the figure do not have to be everyone. A group can be a fair picture of a bigger group without being all of it. What matters is whether anyone was favoured, or left out, in a way that could move the figure.'
    ] },

  { id: 'again-counted', kind: 'again', family: 'counted',
    link: 'The golf club gave you what to point to, from one case: {needs:counted}. Here is a second case with a completely different story, and this time the trouble is the second way the first question allows: too few.',
    first: 'gate-golf', second: 'gate-windows', step: 'S1',
    instruction: 'Find what the two cases share. Ignore the story (a golf course, a window firm) and ignore how large the claim sounds. Look at one thing only: what is the figure worked out from, and does that stand for the group the claim speaks for?',
    prompt: { kind: 'phrase', answer: 'On his first four calls with a new opening line, three people agreed to a visit' },
    shared: [
      'In both cases there is a figure, and in both the figure is correct for the people it was worked out from. The reporter really heard 45 yeses out of 50, and Jonas really got three visits from four calls.',
      'In both the claim says more than the figure can. The reporter’s claim is about a whole town and her figure comes from one place on one morning. Jonas’s claim is about "people" and his figure comes from four phone calls. One group is the wrong group and the other is too small a group, and both are about who is in the figure.',
      'The two stories share nothing else. So this is not about golf or about windows. It holds wherever a claim speaks for more than the people or things it was worked out from can show. That is what {a:S1.counted} names.'
    ] },

  { id: 'lens-claim', kind: 'lens',
    h: 'The story does not decide which part goes wrong',
    link: 'The last card asked you to ignore the story. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: a golf club, a window firm, a hospital, a school. The layer underneath is how the claim is put together: who or what the figure was worked out from, what the figure counts, what it is set beside, and what the claim says caused what. So far you have met one thing that can go wrong in that layer. There are three more, and a fifth answer for a claim in which none of them goes wrong.',
      'The parts belong to the layer underneath. A claim about a hospital can go wrong in any of them, and so can a claim about a school. A claim about a hospital can also hold. The story tells you nothing about which.',
      'From here on, the cases change their stories on purpose. Sometimes two cases share the same people and the same topic and differ only underneath. When that happens, the shared story is there to show you that it decides nothing.',
      'Two more things change on purpose: how large or surprising the number is, and whether you would like the claim to be true. A huge number can be sound and a modest one can rest on nothing, so neither tells you the answer. And a claim you agree with is run through the same question as one you do not.'
    ],
    fixed: ['how the claim is put together, which is what the first question asks about: {q:S1}'],
    varies: ['the topic', 'the people', 'how large or surprising the number is', 'whether you would like it to be true', 'whether anything is wrong at all'] },

  { id: 'portrait-counted', kind: 'portrait', family: 'counted',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {a:S1.counted} in real life, where nobody marks the words for you.',
    typical: [
      'There is a figure, and somewhere in the account you are told, or can work out, where the people or things in it came from: who answered, which ones were kept, which place or day they were found in.',
      'The claim speaks for more than the figure does. "Townspeople" for a few golfers. "All our customers" for the ones who wrote in. "Works every time" for three tries.',
      'The sum is usually correct. Worked out again from the same people, it would give the same figure. The trouble is not the arithmetic.',
      'Often someone is missing for a reason that is tied to the answer: the ones who left, the ones who never replied, the ones nobody could reach. What is missing is not a random handful. It leans the figure one way.',
      'It can also be so few people or things that luck alone could shift the figure, however fairly they were gathered.'
    ],
    not: [
      'It is not the same as the figure being wrong. The figure can be exactly right for the people in it. The trouble is what it is used to say.',
      'And the people or things do not have to be everyone. A group can be a fair picture of a bigger group without being all of it. What the answer turns on is whether anyone was favoured or left out in a way that could move the figure.'
    ],
    wild: ['"We asked our customers, and 95% said..."', '"Every one of our graduates says..."', '"Everyone I know is voting for..."', '"In the first week, three out of four..."', '"All the winners had one thing in common."'],
    self: 'In your own life it is the figure you build from the people around you: "everyone I know thinks so", "all my friends loved it". The people you know are a group that you did not pick, and they tend to be like you.',
    ask: '"Who or what is this figure worked out from, and how did they come to be in it?" If you can say, and they look like a fair picture of the group the claim speaks for, go on to the next part. If you cannot say, you do not have an answer yet.' },

  { id: 'check-counted', kind: 'check', after: 'counted',
    case: 'gate-funds',
    ask: { type: 'phrase', step: 'S1', say: 'Which words show what the figure was worked out from, and what is missing from it? Tap them.',
           answer: 'The firm lists the 8 funds it still runs, and it closed 12 others in those years.' } }
]);

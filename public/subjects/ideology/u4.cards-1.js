// Political Ideologies, Unit Four, part one: the opening card and the first name (a text that holds up old ways and asks for
// what is still there to be kept).
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of the earlier questions, the preview map, the heading of a
// meet card, "what you must be able to point to", the key's question and answer on a meet card, the "also called" sentence, the stem
// of every commit prompt, and the heading of an again or portrait card.

FC.cards('ideology', 'u4', [

  { id: 'orient-ways', kind: 'orient',
    h: 'Old ways: keep them, or bring them back?',
    canDo: 'After this unit you can read a short text that holds up the old ways of faith, home life and custom, and give it one of two names, by pointing to the words in it that tell you. You will also be able to say why it is not the name it looks most like, whether that is a name that goes with putting a nation first, or one that goes with the side of working people. The text can be a parish newsletter, a speech about a school, a few lines from a pamphlet about an old law, a post, or a letter to a town council.',
    everyday: [
      'You already hear this talked about. A neighbor says the village should "keep its traditions". Someone else says a new law "destroyed our way of life". A columnist calls one politician "reactionary" and another "just conservative", and neither says what they mean. The two words are often used as if they were the same, or as if one were praise and the other an insult.',
      'They are not the same thing, and they can be told apart. Unit One taught the first question, and every text in this unit gets one answer to it: {a:D1.tradition}. That answer is a place to start, and it leaves two names open. One kind of text wants what is still there kept, and wants any change to come slowly. Another says that something has been lost, that its loss was a wrong, and asks for it to be given back. They are given different names, and one more question tells them apart.',
      'That question is {q:T1} You answer it by pointing at words in the text, as you did in Unit One. It is the only question that comes after Unit One’s, so the answer you give to it is also the name you end with.'
    ],
    add: 'Every text in this unit is invented. The countries, towns, laws and groups in them do not exist, and no text says what any real person or party believes. Real people and parties say different things in different places, so this course reads one short text at a time and gives no verdict on whoever wrote it.',
    map: { branch: 'tradition' } },        // the preview map is drawn from the key, with plain words beside each label

  /* ---------- The first name: what is still there is to be kept ---------- */
  { id: 'meet-conserv', kind: 'meet', outcome: 'conserv',      // heading is the outcome's plain words, from the key
    link: 'Unit One gave every text that holds up old ways the same answer, and left two names open. This unit splits that answer, and the first name to see is for a text that asks for what is still there to stay.',
    case: 'i4-meet-conserv', mark: 'T1',
    strip: [
      'Something from the past is named, and it is still there: a walk round the village, with a blessing, which the grandparents walked and the children still walk.',
      'The text says it should carry on. "Keep the walk."',
      'It allows that something may have to change, because a new road cuts across the walk’s path. It asks for the change to be slow, a step at a time, with the old walkers asked first.',
      'Nothing is said to have been torn down, and nothing is asked to come back. The walk is still being walked.'
    ],
    explain: [
      'In Unit One this text gets the answer {a:D1.tradition}: it names a custom and a faith handed down, and says they should guide how the village plans its years. That answer leaves two names open, and this card is about the question that chooses between them: {q:T1}',
      'Look at what the text asks. The walk is still walked. Nobody has stopped it. So the text is not asking for anything to be brought back. It is asking that what is there stay there, and that if anything must change, it changes slowly and with the people it touches asked first.',
      'The idea behind this kind of text is that what has been handed down has been tested by many people over many years, and that anything new is risky until it has been tried. People who think this need not want everything to stay as it is. They accept that some change will come. What they ask for is a slow pace, and a say for the people it touches. People who disagree say that going slowly can be a way of never changing, and that some old ways should be dropped. Whether the old ways are good is argued over, and no side is taken here. The answer goes by what the text asks for.',
      'Notice what is not being asked. It is not asking whether the faith is true or the walk is a good custom. It is asking what the text wants done with the old ways it holds up. Here the text wants them kept.'
    ],
    feature: { step: 'T1', option: 'keep' },
    name: 'The name for this is {o:conserv}. The word comes from "conserve", which means to keep safe. It is used here for the one thing you just saw: a text that holds up old ways, wants them kept, and wants any change to come slowly. It is a plain description of what a text asks for, and it is neither praise nor blame.' },

  { id: 'again-conserv', kind: 'again', outcome: 'conserv',
    link: 'The boundary walk gave you what to point to from one case: {needs:conserv}. Here is a second case in a different setting: a row of old almshouses, and a letter to a town council.',
    first: 'i4-meet-conserv', second: 'i4-again-conserv', step: 'T1',
    instruction: 'Find what the two cases share. Ignore the story (a walk round a village, a row of almshouses). Look at one thing only: what the text wants done with the old way it holds up.',
    prompt: { kind: 'phrase', answer: 'Keep the almshouses as they are' },
    shared: [
      'Both texts name ways handed down: a blessing walked round the village, and the care of the old at home and in the almshouses. Both say these ways should guide. Both ask for them to be kept, and both allow that something may have to change, and ask that it be slow, a step at a time, with the people it touches asked first. Neither says that anything has been lost for good, and neither asks for anything to be given back.',
      'The two stories share nothing else. So this holds wherever a text holds up old ways, wants what is there kept, and wants any change slow. That is what {o:conserv} names.'
    ] },

  { id: 'lens-ways', kind: 'lens',
    h: 'The story never decides the answer',
    link: 'The last card asked you to ignore the story. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every text in this unit has two layers. The top layer is the story: a walk round a village, a school, a guild, a hospital ward, a market. The layer underneath is what the text wants done with the old ways it holds up.',
      'The two names belong to the layer underneath. The same story can carry either of them. A text about a school can ask for the school to stay as it is, or for it to be given back to the church; a text about a market can do the same. Nothing in the story tells you which.',
      'Two other things change on purpose, and they tell you nothing either. One is how warm or how angry a text sounds: a gentle text can ask for an order to be brought back, and a sharp one can ask only for a custom to be kept. The other is whether you agree with it.',
      'From here on, some cases will share a story and differ only underneath. When that happens, the shared story is there to show you that it decides nothing.'
    ],
    fixed: ['what the text wants done with the old ways it holds up, which is what the question asks about: {q:T1}'],
    varies: ['the topic', 'the people', 'how warm or how angry the text sounds', 'whether you agree with it', 'how much of the old order is still there'] },

  { id: 'portrait-conserv', kind: 'portrait', outcome: 'conserv',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:conserv} where nobody marks the words for you.',
    typical: [
      'Something from the past is named, and it is still there: a custom still kept, a school still teaching its prayer, a Sunday still set aside. The text is about keeping it going.',
      'It is said to have been handed down, and its age is part of the reason given: "our grandparents did it", "it has stood three hundred years", "we have always done it this way".',
      'Change is allowed. A text of this kind does not insist that nothing may ever change. It says how change should come: slowly, a step at a time, with a reason for each step and the people it touches asked first.',
      'The tone is often calm. A text may mourn something that has gone and still ask only that what is left be looked after. Sadness about a loss is not a request to bring it back.',
      'The reason given is often that what has lasted has been tested by time, and that anything new should be tried a little at a time before it is trusted.'
    ],
    not: [
      'Liking the past is not enough. A text that only mentions a custom, without holding it up as what should guide, has not given the first answer yet, and this question is not asked of it.',
      'Wanting old ways kept is also not the same as asking for an old order to be put back. If the text says that something has gone, that its going was a wrong, and that it should come back, the answer changes, and so does the name. That is the other name in this unit.'
    ],
    wild: ['"Let’s not throw away what has served us."', '"Make haste slowly."', '"We should keep what we have and mend it as we go."', '"Change is fine, but not all at once."', '"Our grandparents did it this way, and for good reason."'],
    self: 'In your own life it is the household custom that everyone agrees to keep, the club or congregation whose members say "let us not change things too fast", or the argument about whether to alter the hours of a school or a shop that have never changed.',
    ask: '"What is still there that the text wants kept, and has anything that has gone been asked back?" If you can say the first and the answer to the second is no, this is the name to look at.' },

  { id: 'check-conserv', kind: 'check', after: 'conserv',
    case: 'i4-check-conserv',
    ask: { type: 'phrase', step: 'T1', say: 'Which part of this case says what the text wants done with the old way it holds up? Tap it.',
           answer: 'Keep it, and if the opening hours must change, change them slowly and ask the shopkeepers first' } }
]);

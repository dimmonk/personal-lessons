// Psychology, Unit One, part one: the opening card and the first kind (one person's reasoning).
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// This is a gate unit (lesson standard A15): a card that would carry `outcome` in a branch unit carries `family`,
// and the family's name is its answer to the key's first question, printed by {a:D1.<family>}.
// The app prints, and this file therefore does not contain: the preview map, the heading of a meet card,
// "what you must be able to point to", the key's question and answer on a meet card, the stem of every commit
// prompt, and the heading of an again or portrait card.

FC.cards('psychology', 'u1', [

  { id: 'orient-kind', kind: 'orient',
    h: 'Before any name: what kind of thing are you looking at?',
    canDo: 'After this unit you can read a short account of something a person said or did, and say which of four kinds of thing it shows. You will be able to point to the words that tell you, and to say why it is not one of the other three. The account can be about a colleague, a relative, a stranger in a news story, or you.',
    everyday: [
      "You already do a rough version of this every week. A friend describes a row with her partner and you think, 'He's manipulating her.' A colleague talks about himself for the whole of lunch and someone mutters, 'He is so full of himself.' Your brother is short with everyone at dinner and your mother says, 'He's just a bad-tempered person.'",
      'Each of those is a label reached in one jump, and the three are not even about the same thing. The first is about what one person is doing to another. The second is about what a man is like across his whole life, said on the strength of one lunch. The third may be about nothing more than a bad week. If you mix these up, you are wrong before you have chosen a word: you have described one lunch as a whole person, or a hard week as a character.',
      'So before any label, there is an earlier question: what kind of thing is in front of you? This unit teaches that question.'
    ],
    add: [
      'One word is used all the way through, so here it is once. A case is a short account of something a person said or did: a few sentences, the sort of thing a friend tells you or you read in a message. You put a short list of questions to a case, always in the same order. Each answer narrows down what the case can be, until one name is left.',
      'This unit teaches the first question and nothing after it. That question sorts a case into one of four kinds, and in this unit the kind is the name. The labels people use in daily life, such as the three above, are finer than these four kinds, and this unit does not teach any of them. Three of the four kinds lead on to a further question, taught in a later unit, and that question gives a finer name. The fourth kind does not: when the answer is {a:D1.none}, there is nothing more to ask, and that is a result in its own right. Everything else in the subject starts from the answer to this first question.'
    ],
    map: { branch: 'gate' } },              // a gate unit's preview map is the gate itself, drawn from the key

  /* ---------- The first kind: one person's reasoning ---------- */
  { id: 'meet-reasoning', kind: 'meet', family: 'reasoning',     // heading is the family's plain words, from the key
    link: 'Start with the first of the four kinds: a person telling you what they have decided, and why.',
    case: 'g-job', mark: 'D1',
    strip: [
      'There is one person at the center: Leila.',
      'There is a choice, and it is hers: whether to take the job.',
      'There are her reasons, in her own words: the pay on one side, the train and her children on the other.',
      'Her sister is there, but only to listen. Nothing is said about the sister, and nothing is done to her.',
      'Nothing is said about other years or other parts of Leila’s life. This is one choice.'
    ],
    explain: [
      'What you are shown is one decision and the thinking behind it. Leila has a choice to make, and the case gives you her reasons and where she comes out. That is all a case of this kind is made of: one person, something that is theirs, and the reasons they give for it.',
      'The something that is theirs can be one of three things: a choice they are making (as Leila is), a view they hold about what is true, or something they have already done. Reasons are not only sentences with "because" in them. A person can also be handed a fact and show their reasoning by what they do with it: they change their mind, or they explain why the fact does not count. That counts too, and the line you will see below includes it.',
      'Notice two things the kind does not depend on. It does not depend on whether the reasoning is any good. Leila’s reasons look reasonable. Someone else might talk themselves into a bad choice with reasons that only sound good. Both are the same kind of thing, because in both, the reasoning is what there is to judge.',
      'It also does not depend on who is listening. Leila’s sister hears every word, but if Leila had written the same words in a diary instead, nothing in the case would change. When you can take the listener away and the case is still whole, you are looking at this first kind.'
    ],
    feature: { step: 'D1', option: 'reasoning' },
    name: 'In this unit the answer is also the name of the kind: {a:D1.reasoning}. "Reasoning" means the thinking a person does to reach a view or a choice, to defend it, or to change it. The word does not say the thinking is good. Careful reasoning and self-serving reasoning (reasoning arranged to suit the person doing it) are both reasoning.' },

  { id: 'again-reasoning', kind: 'again', family: 'reasoning',
    link: 'The last card gave you what to point to, from one case: {needs:reasoning}. Here is a second case with a completely different story, and this time the person is defending a view, not making a choice.',
    first: 'g-job', second: 'g-street', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the story (a job, a street). Look at one thing only: is the case made of one person’s reasons for something they think or have decided?',
    prompt: { kind: 'phrase', answer: "Figures don't tell you what it feels like to walk home at night" },
    shared: [
      'Both cases are made of the same thing: one person, something that is theirs (a choice for Leila, a view for Pavel), and the reasons they give. Leila weighs the pay against the train and decides. Pavel is shown a fact that goes against his view and gives a reason for setting it aside.',
      'One of them may be reasoning well and the other badly. That is a question for another day. Here the point is that in both cases the reasoning is what there is to look at. Nobody is doing anything to anybody: Pavel’s daughter brings a fact, as Leila’s sister listened, and the case is about what he does with it.',
      'The two stories share nothing else. So this is not about jobs or about crime. It holds wherever one person gives reasons for a view, a choice or something they did. That is what {a:D1.reasoning} names.'
    ] },

  { id: 'lens-kind', kind: 'lens',
    h: 'The story does not decide the kind',
    link: 'The last card asked you to ignore the story. That instruction holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: a job, a street, a marriage, an office. The layer underneath is what the case is made of. So far you have met one thing a case can be made of: one person’s reasons. There are three more to come.',
      'The four kinds belong to the layer underneath. A case about a marriage can be any of the four, and so can a case about an office. The story tells you nothing about the kind.',
      'From here on, the cases change their stories on purpose. Sometimes two cases will share the same people and the same story and differ only underneath. When that happens, the shared story is there to show you that it decides nothing.',
      'One more thing changes on purpose: how bad the behavior sounds. An ugly remark and a gentle one can be the same kind of thing, and something that sounds alarming can turn out to be the kind with nothing in it to name. The kind is not a verdict on anyone. It only says what there is to look at.'
    ],
    fixed: ['what the case is made of, which is what the question asks about: {q:D1}'],
    varies: ['the topic', 'the people', 'how bad it sounds', 'whether you like the person', 'whether anything is wrong at all'] },

  { id: 'portrait-reasoning', kind: 'portrait', family: 'reasoning',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {a:D1.reasoning} in real life, where nobody marks the words for you.',
    typical: [
      'There is a view, a choice or an act, and it belongs to the person in the case: what they think is true, what they have decided, or what they did.',
      'There are reasons. You hear "because", "so", "but" or "that’s why", or you watch the person take a fact in or wave it away.',
      'Anyone else in the case is there to listen, to ask, or to bring a fact. If you took them out, the case would still be whole.',
      'It is one piece of thinking: this view, this choice, this occasion. A case of this kind does not tell you how the person usually thinks.',
      'The reasoning can be careful or careless, honest or self-serving. All of those are this kind. Sorting good reasoning from bad comes after this question, and needs questions of its own.'
    ],
    not: 'Saying how you feel is not reasoning. "I’m exhausted" and "I’m furious about it" give no reasons and defend nothing. For this kind there has to be a view, a choice or an act, and something offered in support of it or done with the facts about it.',
    wild: ['"I know, but..."', '"The way I see it..."', '"It made sense at the time."', '"I’ve thought about it, and I’m staying."', '"That doesn’t prove anything."'],
    self: 'In your own life it is the voice that explains your choices to you: why you bought it, why you stayed, why you were right in that argument.',
    ask: '"What is the view or the choice here, and what reasons are being given for it?" If you can say both in one sentence, the reasoning is the thing to look at.' },

  { id: 'check-reasoning', kind: 'check', after: 'reasoning',
    case: 'g-car',
    ask: { type: 'phrase', step: 'D1', say: 'Which part of this case gives a person’s reasons for a choice of her own? Tap it.',
           answer: 'The repair was $300, and a new one would cost me $200 a month' } }
]);

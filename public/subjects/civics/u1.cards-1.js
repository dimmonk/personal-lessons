// Civics, Unit One, part one: the opening card and the first family (lawmakers voting).
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// This is a gate unit (lesson standard A15): a card that would carry `outcome` in a branch unit carries `family`,
// and the family's name is its answer to the key's first question, printed by {a:D1.<family>}.
// The app prints, and this file therefore does not contain: the preview map, the heading of a meet card,
// "what you must be able to point to", the key's question and answer on a meet card, the stem of every commit
// prompt, and the heading of an again or portrait card.
// "federal" is used by the key and is not a declared term (a term "federal" would forbid "the Federalist Papers" everywhere):
// the orient card explains it, and the card for the second family explains it again where it is first needed.

FC.cards('civics', 'u1', [

  { id: 'orient-kind', kind: 'orient',
    h: 'Before any rule or ruling: whose decision is it?',
    canDo: 'After this unit you can read a short news item or an everyday story about a rule, a law or a ruling, and say whose decision it ends on: {plain:congress}; {plain:president}; {plain:courts}; or {plain:states}. You will be able to point to the words that tell you, and to say why it is not one of the other three.',
    everyday: [
      "You already hear this kind of story every week. 'The government has changed the rules on bringing food into the country.' 'The government has put a new fee on passports.' 'The government will not let the building go ahead.' Each of them says 'the government' and leaves out which one.",
      'That matters, because there are many. There is the government of the whole country, with its lawmakers, its President, its offices and its judges. There is the government of your state. There is the government of your city or county. A law that Congress, the lawmakers of the whole country, passed is changed by Congress passing a new one. A rule made by an office that carries out the laws can be challenged in court. A rule your city made can be overruled by your state. So knowing whose decision a story ends on tells you where to look, whom to ask and what can happen next.',
      'Real stories also tend to name more than one of them: a law, the office that applies it, a judge asked to rule on it. If you take the one named first, you can be wrong before you have chosen anything. So before you ask what a rule is, or whether it is allowed, there is an earlier question: whose decision is the story about? This unit teaches that question.'
    ],
    add: [
      'Two words are used all the way through, so here they are once. A case is a short account of a decision, or of a request for one: a few sentences, in the form of a news item or of something a friend tells you. And federal means belonging to the government of the whole country, as against the government of one state or city: a federal law applies in every state.',
      'Every case is put the same short list of questions, always in the same order, and each answer narrows down what the case can be, until one name is left. This unit teaches the first question and nothing after it. That question sorts a case into one of four kinds, and in this unit the kind is the name. All four lead on to further questions, taught in later units, and those give finer names. Nothing in this unit asks for them. The question is worded with care, because most stories name several parts of government. It asks about the last decision in the story, or the one the story asks someone to make. What came before is how the matter got there.'
    ],
    map: { branch: 'gate' } },              // a gate unit's preview map is the gate itself, drawn from the key

  /* ---------- The first family: lawmakers voting ---------- */
  { id: 'meet-congress', kind: 'meet', family: 'congress',     // heading is the kind's plain words, from the key
    link: 'Start with the first of the four kinds: lawmakers voting. It is the clearest kind of decision, because a vote is something you can point to.',
    case: 'c-bicycle', mark: 'D1',
    strip: [
      'There is a bill, which is a proposed law, about a tax: the tax on imported bicycle parts.',
      'There are two groups of lawmakers: the House of Representatives and the Senate. Each has voted on the bill, one last month and one on Thursday.',
      'The last thing in the case is the Senate’s vote, and the bill passed.',
      'Nobody else decides anything. No office, no judge, and no state or city appears.',
      'The bike shops that wanted the tax lowered are only the reason the bill exists.'
    ],
    explain: [
      'What you are shown is a vote, and it is the whole case. Bike shops complain, a bill is written, and the lawmakers vote on it. The decision is theirs, and it is the last thing that happens. That is all a case of this kind is made of: a vote in the House, in the Senate or in both, as the last decision, or as the one the case asks for.',
      'The lawmakers of the whole country are called Congress. Congress has two chambers, the House of Representatives and the Senate, and a bill that is to become a law has to pass in both. The people who sit in the Senate are called senators. Congress’s votes are not only on laws. It also votes on how much money the government may spend, on whether to approve a person the President has chosen for a top job or an agreement the President has signed with another country, and on charging an official with serious misconduct, or trying the charge. Later units teach what each of those is. Here they all count for the same reason: lawmakers are voting.',
      'Notice two things the answer does not depend on. It does not depend on whether the vote has already happened: a case that ends by asking the Senate to vote has no decision yet, but the decision it asks for is the Senate’s. And it does not depend on whether you think the law is a good one. A good law and a bad one are voted on by the same people.'
    ],
    feature: { step: 'D1', option: 'congress' },
    name: 'The answer, and so the name of the kind, is {a:D1.congress}. “Lawmakers” are the people who vote on laws, and “Congress” is the name for the lawmakers of the whole country. The last words of the answer tell you where to look: a vote in one of those two places.' },

  { id: 'again-congress', kind: 'again', family: 'congress',
    link: 'The bicycle-parts case gave you what to point to: {needs:congress}. Here is a second case with a different story, and this time the vote is about student loans.',
    first: 'c-bicycle', second: 'c-loans', step: 'D1',
    instruction: 'Find what the two cases share. Ignore the story (a tax, student loans). Look at one thing only: whose decision does each case end on?',
    prompt: { kind: 'phrase', answer: 'the Senate voted for the same bill' },
    shared: [
      'Both cases end with lawmakers voting on a bill. In the first, the House voted last month and the Senate voted on Thursday. In the second, the House voted on Monday and the Senate on Wednesday. In both, a group outside, bike shops or students, had asked for something, and the vote was the answer to it.',
      'The two stories share nothing else. One is about a tax and the other about loans. So this is not about taxes or loans. It holds wherever the last decision in a case is a vote in the House, the Senate or both. That is what {a:D1.congress} names.'
    ] },

  { id: 'lens-kind', kind: 'lens',
    h: 'The story does not decide the answer',
    link: 'The last card asked you to ignore the story. That holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: a tax, a doll, a fence, a parking ticket. The layer underneath is who makes the last decision. So far you have met one thing the last decision can be: a vote by lawmakers of the whole country. There are three more to come.',
      'The four kinds belong to the layer underneath. The same story can end in any of the four. A tax can be voted on in the House, collected by an office, argued over in front of a judge, or set by a state. The story tells you nothing about the kind.',
      'From here on, the cases change their stories on purpose. Sometimes two cases will share the same people and the same story and differ only in who decides last. When that happens, the shared story is there to show you that it decides nothing.',
      'One more thing changes on purpose: how many parts of government a case names. Many cases name two or three: a law, the office that applies it, a judge asked to rule on it. The question asks about the last decision, or the one the case asks for. What comes before it is how the matter reached it, and it can sound more important than it is. Whether you agree with the decision, or like the people who made it, is not part of the question either.'
    ],
    fixed: ['who makes the last decision, which is what the question asks about: {q:D1}'],
    varies: ['the topic', 'the people', 'how important it sounds', 'whether you agree with the decision', 'how many parts of government the case names'] },

  { id: 'portrait-congress', kind: 'portrait', family: 'congress',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {a:D1.congress} in real life, where nobody marks the words for you.',
    typical: [
      'There is a vote, and it is by lawmakers: in the House, in the Senate or in both. The words you hear are “voted”, “passed”, “approved”, “the bill”, “the Senate”, “the House”.',
      'The vote can be on a law, on money, on a person the President has chosen, on an agreement the President has signed with another country, or on charging an official with serious misconduct, or trying the charge. All of them count.',
      'The vote may have happened, or it may be what the case asks for: “has asked the Senate to vote”, “the bill now goes to the House”, “the Senate will vote next month”.',
      'Other parts of government may be in the story: the President who chose someone, the office that will spend the money. They are how the matter got there. They are not the vote.',
      'It can be about something good or something bad. It is the vote that makes it this kind.'
    ],
    not: [
      'A person who is only called a lawmaker is not enough. A senator who talks about a bill on television has not voted. For this kind there has to be a vote, or a request that lawmakers vote.',
      'And lawmakers of one state, or of a city, are not Congress. A state’s legislature votes on bills much as Congress does, but it belongs to one state and decides for that state alone. That is a different kind, the one for {plain:states}.'
    ],
    wild: ['"The Senate voted to..."', '"The House passed it."', '"The bill now goes to the Senate."', '"Congress has approved the money."', '"Lawmakers are voting on it this week."'],
    self: 'In your own life you meet this kind in the news, whenever a vote has just happened or is about to: a bill about taxes, about a program, about a person who is up for a job. Whenever someone says a vote is coming, ask whose vote it is.',
    ask: '"Is the last thing in the story a vote by lawmakers, or a request that they vote?" If it is, and the lawmakers sit in the House or the Senate, the answer is {a:D1.congress}.' },

  { id: 'check-congress', kind: 'check', after: 'congress',
    case: 'k-farmers',
    ask: { type: 'phrase', step: 'D1', say: 'Which part of this case is the last decision, made by lawmakers of the whole country? Tap it.',
           answer: 'the Senate voted to give them $2 billion in help, and the bill now goes to the House' } }
]);

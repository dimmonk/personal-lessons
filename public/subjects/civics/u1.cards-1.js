// Civics, Unit One, part one: the opening card and the first family (lawmakers voting).
// A quick lesson (lesson standard section 19): one meet card and one check for each family, and nothing else for it.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// This is a gate unit (lesson standard A15): a card that would carry `outcome` in a branch unit carries `family`,
// and the family's name is its answer to the key's first question, printed by {a:D1.<family>}.
// The app prints, and this file therefore does not contain: the preview map, the heading of a meet card,
// "what you must be able to point to", the key's question and answer on a meet card, the stem of every commit
// prompt, and the heading of an again or portrait card.
// "federal" is used by the key and is not a declared term (a term "federal" would forbid "the Federalist Papers" everywhere):
// the orient card explains it.

FC.cards('civics', 'u1', [

  { id: 'orient-kind', kind: 'orient',
    h: 'Before any rule or ruling: whose decision is it?',
    canDo: 'After this unit you can read a short news item or an everyday story about a rule, a law or a ruling, and say whose decision it ends on: {plain:congress}; {plain:president}; {plain:courts}; or {plain:states}. You will be able to point to the words that tell you, and to say why it is not one of the other three.',
    everyday: [
      "You already hear this kind of story every week. 'The government has changed the rules on bringing food into the country.' 'The government has put a new fee on passports.' 'The government will not let the building go ahead.' Each of them says 'the government' and leaves out which one.",
      'That matters, because there are many: the government of the whole country, with its lawmakers, its President, its offices and its judges; the government of your state; the government of your city or county. Knowing whose decision a story ends on tells you where to look, whom to ask and what can happen next.',
      'Real stories also tend to name more than one of them: a law, the office that applies it, a judge asked to rule on it. If you take the one named first, you can be wrong before you have chosen anything. So the first question is: whose decision is the story about?'
    ],
    add: [
      'Two words are used all the way through. A case is a short account of a decision, or of a request for one: a few sentences, in the form of a news item or of something a friend tells you. And federal means belonging to the government of the whole country, as against the government of one state or city: a federal law applies in every state.',
      'The question asks about the last decision in the story, or the one the story asks someone to make. What came before is how the matter got there.'
    ],
    map: { branch: 'gate' } },              // a gate unit's preview map is the gate itself, drawn from the key

  /* ---------- The first family: lawmakers voting ---------- */
  { id: 'meet-congress', kind: 'meet', family: 'congress',     // heading is the kind's plain words, from the key
    link: 'The first of the four kinds: lawmakers voting. It is the clearest kind of decision, because a vote is something you can point to.',
    case: 'c-bicycle', mark: 'D1',
    strip: [
      'There is a bill, which is a proposed law, about a tax: the tax on imported bicycle parts.',
      'Two groups of lawmakers, the House of Representatives and the Senate, have each voted on it. The last thing in the case is the Senate’s vote, and the bill passed.',
      'Nobody else decides anything. No office, no judge, and no state or city appears. The bike shops that wanted the tax lowered are only the reason the bill exists.'
    ],
    explain: [
      'What you are shown is a vote, and it is the whole case. Bike shops complain, a bill is written, and the lawmakers vote on it. The decision is theirs, and it is the last thing that happens.',
      'The lawmakers of the whole country are called Congress. It has two chambers, the House of Representatives and the Senate, and a bill has to pass in both to become a law. Congress’s votes are not only on laws. It also votes on how much money the government may spend, on whether to approve a person the President has chosen for a top job or an agreement the President has signed with another country, and on charging an official with serious misconduct, or trying the charge. Here they all count for the same reason: lawmakers are voting.',
      'It does not matter whether the vote has already happened: a case that ends by asking the Senate to vote has no decision yet, but the decision it asks for is the Senate’s.'
    ],
    feature: { step: 'D1', option: 'congress' },
    name: 'The kind is {a:D1.congress}. “Lawmakers” are the people who vote on laws, and “Congress” is the name for the lawmakers of the whole country. The last words of the answer tell you where to look: a vote in one of those two places.' },

  { id: 'check-congress', kind: 'check', after: 'congress',
    case: 'k-farmers',
    ask: { type: 'phrase', step: 'D1', say: 'Which part of this case is the last decision, made by lawmakers of the whole country? Tap it.',
           answer: 'the Senate voted to give them $2 billion in help, and the bill now goes to the House' } }
]);

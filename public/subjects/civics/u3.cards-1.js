// Civics, Unit Three, part one (first half): the opening card and the first name.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading
// of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the
// "also called" sentence, the stem of every commit prompt, and the heading of an again or portrait card.
// "Congress" alone is not a line of the key, so it may be typed. The names of the five things, and the words "treaty"
// and "agency", are printed by token.

FC.cards('civics', 'u3', [

  { id: 'orient', kind: 'orient',
    h: 'Congress is in the news: what did it do?',
    canDo: 'After this unit you can read a short news item or an everyday story in which Congress does something, and say which of five things it is: {plain:enumerated}; {plain:beyondcong}; {plain:purse}; {plain:confirm}; or {plain:impeach}. You will be able to point to the words that tell you, and to say why it is not one of the other four.',
    everyday: [
      'You already read this sort of story every week. “Congress passed a new law on airline tickets.” “Congress cut the money for the programme.” “The Senate approved the President’s choice.” “The House voted to charge a judge.” “A court says Congress went too far.” Each of them says that Congress did something, and each is a different thing.',
      'The first unit taught you the key’s first question: whose decision does the case end on? When the answer is Congress, one question is left, and this unit teaches it. It is the question about what Congress does. Congress does more than pass laws. It also decides how much money the government may spend. The Senate votes on people the President has chosen and on agreements the President has signed. And the two chambers can charge an official with serious misconduct, and try the charge.',
      'Laws need one word more. A law that has passed every vote is not always a law Congress was allowed to pass. The Constitution, the founding set of rules for the country, gives Congress a list of matters it may make laws about, and it protects some rights that no law may take away. So for a law there is a second thing to look at beyond the vote: whether the Constitution lets Congress pass it. That is why one of the five things is a law Congress was allowed to pass and another is a law it was not.'
    ],
    add: 'Two words are used all the way through. A bill is a proposed law, and it becomes a law when both chambers have passed it and the President has signed it. The chambers are the House of Representatives and the Senate, the two groups of lawmakers that make up Congress.',
    map: { branch: 'congress' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- Enumerated power ---------- */
  { id: 'meet-enumerated', kind: 'meet', outcome: 'enumerated',     // heading is the outcome's plain words, from the key
    link: 'You know the key’s answer to its first question: {a:D1.congress}. This unit asks what Congress does. Start with the commonest thing, passing a law, and with the case where the law is one the Constitution lets Congress pass.',
    case: 'e-airfare', mark: 'C1',
    strip: [
      'Congress passes a law: the House and the Senate have both voted for the bill.',
      'The law is about a tax: ten dollars on every airline ticket.',
      'Taxes are one of the matters the Constitution lists for Congress.',
      'Nothing in the law takes away anyone’s right to speak, to worship, to publish or to gather.',
      'The need for airport repairs is only the reason the bill exists.'
    ],
    explain: [
      'What you are shown is a law, passed by the House and by the Senate, about a tax. Airports need repairs, and the bill makes the people who fly pay part of the cost. The repairs tell you why the bill exists. What Congress did is pass a law, and what the law is about is a tax.',
      'Here is the new thing. A law is not allowed just because both chambers voted for it. The Constitution is the founding set of rules for the whole country, and in the part called Article I it lists the matters Congress may make laws about. Congress has only the powers the Constitution gives it, and what is not on the list is for the states to decide. Taxing is on the list. The key spells out the answer: it is the answer when {when:C1.listed}.',
      'There is a second limit. The Constitution also protects some rights: to speak, to worship, to publish and to gather peacefully. Congress may not pass a law that takes one of them away, even on a matter that is on the list. The tax on tickets takes none of them away, so Congress was allowed to pass it.'
    ],
    feature: { step: 'C1', option: 'listed' },
    name: 'The name for this is {o:enumerated}. “Enumerated” is an old word for “counted off, one by one”: the Constitution counts off Congress’s powers in a list, and a power on that list is an enumerated power. The word “power” has its everyday meaning: something Congress is allowed to do.' },

  { id: 'again-enumerated', kind: 'again', outcome: 'enumerated',
    link: 'The ticket-tax case gave you what to point to: {needs:enumerated}. Here is a second case with a completely different story.',
    first: 'e-airfare', second: 'e-coins', step: 'C1',
    instruction: 'Find what the two cases share. Ignore the story (a tax on tickets, a one-dollar coin). Look at one thing only: what the law is about, and whether it takes anything away from anyone.',
    prompt: { kind: 'phrase', answer: 'a bill that stops the printing of the one-dollar note and makes a one-dollar coin in its place' },
    shared: [
      'In both cases Congress passed a law, with both chambers voting for it. In both, the law is about a matter on the Constitution’s list: a tax in the first, money and coins in the second. And in both, the law takes no right away from anyone.',
      'The two stories share nothing else. So this is not about taxes or about coins. It holds wherever Congress passes a law on a listed matter and takes no right away. That is what {o:enumerated} names.'
    ] },

  { id: 'lens', kind: 'lens',
    h: 'The story never decides the answer',
    link: 'The last card asked you to ignore the story. That holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: a tax, a school, a flood barrier, a judge. The layer underneath is what Congress does. The five names belong to the layer underneath. The same story can carry any of them: a tax can be passed by Congress as a law, and the money it raises can be voted out to a programme; a judge can be approved by the Senate and, years later, be charged by the House.',
      'From here on, the cases change their stories on purpose. Sometimes two cases share a story and differ only in what Congress does. When that happens, the shared story is there to show you that it decides nothing.',
      'One more thing changes on purpose: who else is in the case. The President, an office that carries out laws, a judge and a state may all appear. The first question of the key has already been asked, and its answer is Congress. These people are how the matter reached Congress, and the question now is what Congress does. Whether you agree with it, or like the people who did it, is not part of the question either.'
    ],
    fixed: ['what Congress does, which is what the key asks about: {q:C1}'],
    varies: ['the topic', 'the people', 'how big the matter is', 'whether you think the law or the decision is a good one', 'who else appears in the case'] },

  { id: 'portrait-enumerated', kind: 'portrait', outcome: 'enumerated',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:enumerated} in real life, where nobody marks the words for you.',
    typical: [
      'There is a law, and Congress passed it: both chambers voted for the bill. The words you hear are “the bill passed”, “the House and the Senate approved it”, “the new law sets”.',
      'The law is about a matter on the Constitution’s list, and the story often makes that plain with one word: a tax, a coin, the post office, a loan the government takes out, citizenship, the army or the navy, a federal court, trade across state lines or with other countries.',
      'The law can be huge or tiny, and a good idea or a bad one. Neither tells you the name.',
      'The President may have signed it, or may be about to. A signature does not change whose decision it was: a law that passed both chambers stays Congress’s, as the first unit taught.',
      'People often call it by what it does and not by its name: “the new tax”, “the coin law”. The name only says that Congress had the power to pass it.'
    ],
    not: 'A law having passed is not enough for this name. The matter has to be one on the Constitution’s list, and the law has to take no right away. A law that fails either test is not this name, however many votes it got.',
    wild: ['“Congress passed a law requiring…”', '“Under its power to tax…”', '“Under its power over trade between the states.”', '“The new law sets…”', '“The bill passed both chambers.”'],
    self: 'In your own life you meet this whenever a federal tax, a coin, the post office or a rule about becoming a citizen changes. Someone in Congress voted for it, and the Constitution lists the matter.',
    ask: '“What is this law about, and is that on the Constitution’s list? Does it take away anyone’s right to speak, to worship, to publish or to gather peacefully?” If the matter is on the list and no right is taken away, the key’s answer is {a:C1.listed}.' },

  { id: 'check-enumerated', kind: 'check', after: 'enumerated',
    case: 'k-courts',
    ask: { type: 'phrase', step: 'C1', say: 'Which part of this case is the law Congress passed, and the matter it is about? Tap it.',
           answer: 'a bill that adds four judges to that court' } }
]);

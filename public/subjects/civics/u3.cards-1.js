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
      'You already read this sort of story every week. “Congress passed a new law on airline tickets.” “Congress cut the money for the program.” “The Senate approved the President’s choice.” “The House voted to charge a judge.” “A court says Congress went too far.” Each says that Congress did something, and each is a different thing.',
      'When the answer to the first question is Congress, one question is left, and this unit teaches it: what does Congress do? It passes laws, but a law that passed every vote is not always one Congress was allowed to pass. The Constitution, the founding set of rules for the country, lists the matters Congress may make laws about, and it protects some rights that no law may take away. Congress also decides how much money the government may spend, the Senate votes on people and agreements the President puts forward, and the two chambers can charge an official with serious misconduct.'
    ],
    add: 'Two words are used all the way through. A bill is a proposed law, and it becomes a law when both chambers have passed it and the President has signed it. The chambers are the House of Representatives and the Senate, the two groups of lawmakers that make up Congress.',
    map: { branch: 'congress' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- Enumerated power ---------- */
  { id: 'meet-enumerated', kind: 'meet', outcome: 'enumerated',     // heading is the outcome's plain words, from the key
    link: 'The answer to the first question is {a:D1.congress}. Now ask what Congress does. Start with the commonest thing: passing a law the Constitution lets it pass.',
    case: 'e-airfare', mark: 'C1',
    strip: [
      'Congress passes a law: the House and the Senate have both voted for the bill.',
      'The law is about a tax: ten dollars on every airline ticket.',
      'Taxes are one of the matters the Constitution lists for Congress.',
      'Nothing in the law takes away anyone’s right to speak, to worship, to publish or to gather.',
      'The need for airport repairs is only the reason the bill exists.'
    ],
    explain: [
      'What you are shown is a law, passed by both chambers, about a tax. The airport repairs tell you why the bill exists. What Congress did is pass a law, and what the law is about is a tax. A law is not allowed just because both chambers voted for it. The Constitution lists the matters Congress may make laws about, and what is not on the list is for the states to decide. Taxing is on the list. This is the answer when {when:C1.listed}.',
      'There is a second limit. The Constitution also protects some rights: to speak, to worship, to publish and to gather peacefully. Congress may not pass a law that takes one of them away, even on a listed matter. The tax on tickets takes none of them away, so Congress was allowed to pass it.'
    ],
    feature: { step: 'C1', option: 'listed' },
    name: 'The name for this is {o:enumerated}. “Enumerated” is an old word for “counted off, one by one”: the Constitution counts off Congress’s powers in a list.' },

  { id: 'check-enumerated', kind: 'check', after: 'enumerated',
    case: 'k-courts',
    ask: { type: 'phrase', step: 'C1', say: 'Which part of this case is the law Congress passed, and the matter it is about? Tap it.',
           answer: 'a bill that adds four judges to that court' } }
]);

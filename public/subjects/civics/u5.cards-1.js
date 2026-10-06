// Civics, Unit Five, part one (first half): the opening card and the first name, a judge asked whether a law is allowed.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading
// of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the
// "also called" sentence, and the stem of every commit prompt.

FC.cards('civics', 'u5', [

  { id: 'orient', kind: 'orient',
    h: 'A judge has been asked something. What?',
    canDo: 'After this unit you can read a short news item or an everyday story that ends with a judge deciding, or with someone asking a judge to decide, and say which of four things the judge is asked to do. You will be able to point to the words that show it, and to say why it is not one of the other three.',
    everyday: [
      "You have heard stories like these. 'A judge has said the town cannot enforce its new rule.' 'The judge said the law does not cover scooters.' 'A judge turned down the request to lower the bus fare.' 'The judge ruled that the police should have asked permission before they searched the car.' In every one of them a judge is deciding something. It is not the same something each time.",
      'Unit One taught the first question, and its answer for every story like these: {a:D1.courts}. This unit teaches the next question, which asks what the judge is asked to do. It has four answers, and each leads to one name. The question is the same for a judge in a court of the whole country and for a judge in a court of one state.'
    ],
    map: { branch: 'courts' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- A judge asked whether a law is allowed ---------- */
  { id: 'meet-review', kind: 'meet', outcome: 'review',     // heading is the outcome's plain words, from the key
    link: 'The first of the four is the one that makes the news most often. It is a judge looking at a law the lawmakers made and being asked whether they were allowed to make it.',
    case: 'r-leaflets', mark: 'J1',
    strip: [
      'There is a law: a town rule that nobody may hand out leaflets in the main square.',
      'It has harmed someone: Marisol was fined $50 for handing out leaflets about a school vote.',
      'Marisol did not pay and keep quiet. She brought a case, and told the judge that the rule goes against the right to speak that the Constitution protects.',
      'The last thing in the case is a question put to a judge: does the rule fit the Constitution?'
    ],
    explain: [
      'The Constitution is the law of the land: the written rules that sit above every other law in the country, and that protect rights such as the right to speak, to worship, to publish and to gather peacefully. A town can make rules, and so can a state or Congress. But if one of those rules clashes with the Constitution, the rule cannot stand.',
      'A judge can lay the rule and the Constitution side by side and say whether they fit. The judge is not asked whether the rule is a good idea, only whether it clashes. If it clashes, the judge refuses to apply it, and the town can no longer use it. If it does not, the rule stays, and Marisol pays.',
      'Two things have to be there before a judge will do this. There has to be a law, or something the government did under a law. And there has to be a person it has actually harmed, who brings a real case. Marisol was fined, so she was harmed. A judge does not rule on a law just because somebody wonders whether it is allowed, and does not give advice about a law in advance.'
    ],
    feature: { step: 'J1', option: 'check' },
    name: 'The name for this is {o:review}. "Judicial" means having to do with judges, and a "review" is a second look: the judge looks again at a law the lawmakers made, to see whether it fits the Constitution.' },

  { id: 'check-review', kind: 'check', after: 'review',
    case: 'r-gate',
    ask: { type: 'phrase', step: 'J1', say: 'Which part of this case shows what the person asks the judge about the law? Tap it.',
           answer: 'the law takes away the right to gather peacefully' } }
]);

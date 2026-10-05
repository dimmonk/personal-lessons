// Civics, Unit Five, part one (first half): the opening card and the first name, a judge asked whether a law is allowed.
// Cards are structured data, not HTML. A text field is one paragraph (a string) or several (an array of strings).
// Key wording is never typed here: tokens are filled in from key.js.
// The app prints, and this file therefore does not contain: the reminder of Unit One, the preview map, the heading
// of a meet card, "what you must be able to point to", the key's question and answer on a meet card, the
// "also called" sentence, the stem of every commit prompt, and the heading of an again or portrait card.

FC.cards('civics', 'u5', [

  { id: 'orient', kind: 'orient',
    h: 'A judge has been asked something. What?',
    canDo: 'After this unit you can read a short news item or an everyday story that ends with a judge deciding, or with someone asking a judge to decide, and say which of four things the judge is asked to do. You will be able to point to the words that show it, and to say why it is not one of the other three.',
    everyday: [
      "You have heard stories like these. 'A judge has said the town cannot enforce its new rule.' 'The judge said the law does not cover scooters.' 'A judge turned down the request to lower the bus fare.' 'The judge ruled that the police should have asked permission before they searched the car.' In every one of them a judge is deciding something. It is not the same something each time.",
      'Unit One taught the key’s first question, and its answer for every story like these: {a:D1.courts}. That answer is only a start. A judge may be asked about a law, about a price, about a person on trial or about a single word, and each of those needs its own name. This unit teaches the next question, which asks what the judge is asked to do. It has four answers, and each leads to one name. The question is the same for a judge in a court of the whole country and for a judge in a court of one state.'
    ],
    map: { branch: 'courts' } },         // the preview map is drawn from the key, with plain words beside each label

  /* ---------- A judge asked whether a law is allowed ---------- */
  { id: 'meet-review', kind: 'meet', outcome: 'review',     // heading is the outcome's plain words, from the key
    link: 'The first of the four is the one that makes the news most often, and the one people find most surprising. It is a judge looking at a law the lawmakers made and being asked whether they were allowed to make it.',
    case: 'r-leaflets', mark: 'J1',
    strip: [
      'There is a law: a town rule that nobody may hand out leaflets in the main square.',
      'It has harmed someone: Marisol was fined $50 for handing out leaflets about a school vote.',
      'Marisol did not pay and keep quiet. She brought a case, and told the judge that the rule goes against the right to speak that the Constitution protects.',
      'The last thing in the case is a question put to a judge: does the rule fit the Constitution?',
      'Nobody is asking the judge what would make a better rule.'
    ],
    explain: [
      'The Constitution is the law of the land: the written rules that sit above every other law in the country, and that protect rights such as the right to speak, to worship, to publish and to gather peacefully. A town can make rules, and so can a state or Congress. But if one of those rules clashes with the Constitution, the rule cannot stand.',
      'Who finds out whether it clashes? Not the town: it made the rule and believes it is fine. Not Marisol: she wants the answer to go her way. A judge can lay the rule and the Constitution side by side and say whether they fit. That is what Marisol asked for. If the judge finds that they clash, the judge refuses to apply the rule, and the town can no longer use it. If they do not clash, the rule stays, and Marisol pays.',
      'Two things have to be there before a judge will do this. There has to be a law, or something the government did under a law. And there has to be a person it has actually harmed, who brings a real case. Marisol was fined, so she was harmed. A judge does not rule on a law just because somebody wonders whether it is allowed, and does not give advice about a law in advance.'
    ],
    feature: { step: 'J1', option: 'check' },
    name: 'The name for this is {o:review}. "Judicial" means having to do with judges, and a "review" is a second look: the judge looks again at a law the lawmakers made, to see whether it fits the Constitution.' },

  { id: 'again-review', kind: 'again', outcome: 'review',
    link: 'The leaflet case gave you what to point to: {needs:review}. Here is a second case, with a different story and a different right.',
    first: 'r-leaflets', second: 'r-paper', step: 'J1',
    instruction: 'Find what the two cases share. Ignore the story (leaflets, a newspaper) and ignore which right it is. Look at one thing only: what the person asks the judge about the rule.',
    prompt: { kind: 'phrase', answer: 'the law takes away the freedom to publish' },
    shared: [
      'In both cases there is a rule that a lawmaking body made: a town’s, a state’s. In both, someone was fined under it, so someone was actually harmed. And in both, the person did not simply pay. Each asked a judge to say that the rule clashes with something the Constitution protects: the right to speak in one case, the right to publish in the other.',
      'The two stories share nothing else. One is about leaflets and the other about a newspaper, and one rule is a town’s and the other a state’s. So this is not about speech, or the press, or towns. It holds wherever a person harmed by a law asks a judge to say that it breaks the Constitution. That is what {o:review} names.'
    ] },

  { id: 'lens', kind: 'lens',
    h: 'The story never decides the answer',
    link: 'The last card asked you to ignore the story. That holds for the whole unit, so here it is once in full.',
    body: [
      'Every case in this unit has two layers. The top layer is the story: a fine, a school, a swimming pool, a bus fare, a trial. The layer underneath is what the judge is asked to do.',
      'The four names belong to the layer underneath. The same story can reach a judge in four different ways. A rule about signs can be taken to a judge because someone says it breaks the Constitution, because someone wants to know whether a certain sign counts, or because someone wants a different rule. The story tells you nothing about which.',
      'Two more things change on purpose. Some cases sound as if they are about the Constitution, with words like "rights" and "freedom", and the judge is still not asked about it. And some cases have a person accused of a crime, and the judge is still not asked about how that person was treated. What counts is the request put to the judge.',
      'Whether you agree with what the judge is asked to do, or with what the judge decides, is not part of the question either.'
    ],
    fixed: ['what the judge is asked to do, which is what the key asks about: {q:J1}'],
    varies: ['the topic', 'the people', 'how serious it sounds', 'whether the Constitution is mentioned', 'whether anyone is accused of a crime'] },

  { id: 'portrait-review', kind: 'portrait', outcome: 'review',
    link: 'You now know what to point to. This card fills in the rest of the picture, so that you can spot {o:review} in real life, where nobody marks the words for you.',
    typical: [
      'There is a law, or something an office or an official did under a law, and a person it has harmed. The harm is real and particular: a fine, a charge, being refused something. A person who merely dislikes a law has not been harmed in this way.',
      'The person says that the law, or what was done under it, breaks the Constitution. The case usually names the clash: a right the law takes away, such as the right to speak, to worship, to publish or to gather peacefully.',
      'The judge compares the law with the Constitution. If they clash, the judge refuses to apply the law, which is called striking it down, and the town, the state or Congress can no longer use it.',
      'The Constitution does not say in words that a judge may do this. The Supreme Court claimed the power in 1803, and judges have used it ever since.',
      'It starts only when someone brings it. Someone has to be harmed first, and then bring a case. A judge does not go looking for laws to check.'
    ],
    not: 'Being unhappy with a law is not enough, and neither is a law that seems unfair or unwise. The judge is not asked whether the law is a good idea. The judge is asked whether it clashes with the Constitution. And a person who has not been harmed cannot bring the question: a court will not rule on a law just because someone wonders about it.',
    wild: ['"The court struck it down."', '"The judge ruled the law unconstitutional."', '"The law violates the First Amendment."', '"They are taking the town to court over the rule."'],
    self: 'In your own life you meet it as a news item about a rule that a court has set aside, or when a rule you live under is taken to court by someone it has fined.',
    ask: '"Who has been harmed by this law, and what does the Constitution say that they claim it breaks?" If nobody has been harmed, nobody can bring the question, and a judge will not answer it.' },

  { id: 'check-review', kind: 'check', after: 'review',
    case: 'r-gate',
    ask: { type: 'phrase', step: 'J1', say: 'Which part of this case shows what the person asks the judge about the law? Tap it.',
           answer: 'the law takes away the right to gather peacefully' } },

  { id: 'refute-strike', kind: 'refute', about: 'review',
    h: 'A wrong idea about what a judge can do to a law',
    link: 'The last cards said that a judge can refuse to apply a law that clashes with the Constitution. That is easily stretched into something much bigger, and the bigger idea is wrong.',
    idea: '"The Supreme Court can strike down any law it disagrees with."',
    verdict: 'This is wrong.',
    right: [
      'A judge is not asked whether a law is a good idea, and the judge’s own opinion of it does not count. The judge is asked whether the law clashes with the Constitution. A law can be unwise, unfair or unpopular and still not clash with it, and then the judge has no power to set it aside.',
      'There are two more limits. There has to be a real case, brought by someone the law has actually harmed. And the one question the judge answers is whether the law fits the Constitution. So the correct sentence is this: a court can set a law aside only if it breaks the Constitution, and only in a real case.',
      'So before you use the name {o:review}, point to the person who was harmed and to what they say the law breaks. If all you can point to is that somebody dislikes the law, you do not have it.'
    ],
    testedBy: ['claim-disagree'] }
]);

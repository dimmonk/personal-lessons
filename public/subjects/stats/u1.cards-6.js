// Statistical Claims, Unit One, part six (first half): the key's tie-break, taught as three named exceptions, and a second wrong idea.
// When a claim goes wrong in more than one part, the key gives the earlier part: each later answer yields to every earlier one
// (key.js, yieldsTo). Each exception below is a claim of cause, the last part, that has a problem in an earlier part, so that
// its surface points to "What it says caused what" and the key's answer is the earlier part. The app prints the tie-break.

FC.cards('stats', 'u1', [

  /* ---------- The tie-break, as three exceptions ---------- */
  { id: 'exc-finishers', kind: 'exception', ledger: 'counted~cause', looksLike: 'cause', is: 'counted',
    h: 'A claim of cause, built on the ones who stayed',
    link: 'You now know five answers and how to tell the neighbours apart. Real claims are less tidy than the pairs you have seen. A claim can say that one thing caused another, and be built on a figure that has gone wrong in the very first part.',
    case: 'gate-finishers',
    setup: 'The gym says its program makes people lose weight, and the case shows another way to explain the result: the members who dropped out are the ones who were not losing weight. A claim of cause, with another way for the same result, is what you point to for {a:S1.cause}. Yet the key’s answer for this case is {a:S1.counted}.',
    prompt: { kind: 'phrase', answer: 'the 140 members who finished all 12 weeks' },
    because: [
      'Look at who the 15 pounds is the average of: the 140 members who finished. The 360 who left are not in it. People leave a weight-loss program mostly because it is not working for them, so the figure leaves out the very ones the claim most needs to hear from. That is a trouble with who is in the figure, and in the key it comes first.',
      'The case shows both. It has a claim that the program made people lose weight, and it has a figure built from the ones who stayed. When a case shows both, the key has to choose one answer, and it chooses the earlier part: {a:S1.counted}. A claim of cause built on those figures inherits their trouble. You cannot ask what else could explain a result until you know that the result comes from a fair picture of everyone who started.'
    ],
    take: [
      'It is worth knowing that this is the key’s decision. In real life the two troubles run together, and nobody could draw a line between them that every expert would accept. The key gives each case one answer, so that two people using it reach the same one and can each say why.',
      'It chooses the earlier part for a reason. Everything after the first part rests on it. Once the people are put right, with all 500 members counted, the claim of cause may still go wrong, and the key will then name that. The key names the first part that fails; it does not say that the later parts are fine.'
    ] },

  { id: 'exc-bonus', kind: 'exception', ledger: 'measure~cause', looksLike: 'cause', is: 'measure',
    h: 'A claim of cause, on a figure the agents could push',
    link: 'The gym’s claim of cause was built on the wrong people. A claim of cause can also be built on a figure that has stopped counting what it is read as showing.',
    case: 'gate-bonus',
    setup: 'The manager says the bonus improved service. A claim of cause is what you point to for {a:S1.cause}, and the case shows another way to explain the result. Yet the key’s answer for this case is {a:S1.measure}.',
    prompt: { kind: 'phrase', answer: 'a bonus for every call closed in under four minutes' },
    because: [
      'The figure is calls handled per hour, and the agents are paid for closing calls quickly. A call closed in three minutes counts the same whether or not the caller got help. So the agents can raise the figure by ending calls sooner, whether or not service got any better. The figure no longer measures what the manager reads it as showing, and the callers who are cut off are what that looks like.',
      'The case also has a claim of cause: the bonus improved service. So it shows two answers. When it does, the key chooses the earlier part, and what the figure counts comes before what the claim says caused what: {a:S1.measure}. A claim of cause cannot be sound if the figure it rests on could have risen without the real thing moving.'
    ],
    take: 'Here the two are tied closely. The bonus is the cause the manager names, and it is also what moved the figure. The key answers with the earlier part because it asks what the figure counts before it asks what made the figure move. Until the figure counts what it is read as showing, there is no result to explain.' },

  { id: 'exc-advert', kind: 'exception', ledger: 'compare~cause', looksLike: 'cause', is: 'compare',
    h: 'A claim of cause, on a percentage with no numbers',
    link: 'One more case of the same kind. A claim of cause can be built on a percentage whose numbers are missing, and the claim is so confident that it is easy to miss that the percentage has not been read yet.',
    case: 'gate-advert',
    setup: 'The shop owner says the ad worked, and the case shows another way for the sales to have risen. A claim of cause, with another way for the same result, is what you point to for {a:S1.cause}. Yet the key’s answer for this case is {a:S1.compare}.',
    prompt: { kind: 'phrase', answer: 'She does not say what the sales were before.' },
    because: [
      '"Up 300%" is a percentage of what sales were before, and the case does not say what that was. If the shop sold $100 a week, it now sells $400. If it sold $10,000 a week, it now sells $40,000. Without the real numbers under the percentage you cannot tell whether the change is large or tiny. That is the third part of the claim: what the figure is set beside.',
      'The case also says that the ad worked, and it gives another way for the sales to have risen: the street fair. So it shows two answers, and the key goes by the earlier part: {a:S1.compare}. The reason is the same as before. A claim about what caused a rise cannot be judged until you know how big the rise was.'
    ],
    take: 'If the shop had said what it sold before and after (say $2,000 a week, and now $8,000), the third part would be put right and the claim would go on to the fourth. The street fair would then be the trouble, and the answer would be {a:S1.cause}. The key names the first part that goes wrong. It never says that the parts after it are fine.' },

  /* ---------- A second wrong idea: a problem means the claim is false ---------- */
  { id: 'refute-false', kind: 'refute', about: 'S1',
    h: 'A wrong idea: "If something is wrong with the claim, the claim is false"',
    link: 'Each of the last three cards ended with a claim that had something wrong in it. People often take one step further, and the step is wrong.',
    idea: '"Their poll only asked people outside the golf club. So the claim is wrong: the town does not want a new golf course."',
    verdict: 'This is wrong.',
    right: [
      'Finding a problem with how a figure was put together tells you what the figure cannot show. It does not tell you the opposite. The town may well want a new golf course. The reporter asked the wrong people, so her figure cannot show it either way.',
      'That is what the key’s answer says: where the claim first goes wrong, and so what you would need to see before you could rely on it. It never says "this is false". A claim can be true and badly supported, or false and well supported by a figure that was carefully made, and each of those is a different thing to check.',
      'So when you find a problem, say what the figure cannot show, and say what you would need to see. For the golf club, that is a figure from people picked from the whole town. Then you have said something true, whether or not the town wants the course.'
    ],
    testedBy: ['gate-claim-lie'] }
]);

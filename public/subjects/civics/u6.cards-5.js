// Civics, Unit Six, part four: the exception "a city's own sidewalk", the look-alike pair that crosses into another
// branch (told apart by the key's first question), and the second question.
// A pair that crosses a branch names the other branch's name by its plain words, never by the name: the name belongs to the
// unit that teaches it, and the ledger prints it.

FC.cards('civics', 'u6', [

  { id: 'exc-councilmag', kind: 'exception', ledger: 'localgov~protected', looksLike: 'localgov', is: 'protected',
    h: 'A city’s own sidewalk, and a right that stops it',
    link: 'A city controls its own streets and what is done on them. Here is a case that sounds exactly like that.',
    case: 'u6-councilmag',
    setup: 'This looks like {o:localgov}: a city council decides who may set up on its own sidewalks, and newsstands stand on them. A city’s power over its sidewalks is real. Yet the answer for this case is {a:S2.right}, and the case is {o:protected}.',
    prompt: { kind: 'phrase', answer: 'newsstands may not sell the magazine that makes fun of the mayor' },
    because: [
      'The council is using a real power. If it had said that newsstands must stand six feet from the corner, a rule about where, the case would be {o:localgov}. But the rule it made is about what may be sold: it bans a magazine because the magazine makes fun of the mayor. That takes away the right to publish, and a state has no power to take away a right, so it had none to hand down to the city.'
    ],
    take: 'A matter can sound local. Always put the second question as well: what else covers it, and does the rule take away a right?' },

  { id: 'look-protected-beyondcong', kind: 'lookalike', ledger: 'protected~beyondcong',
    h: 'The same rally ban, made by Congress and by a city',
    link: 'A right can stop a rule whoever made it. Here is the same story with Congress as the maker.',
    cases: ['u6-rally-congress', 'u6-rally-city'],
    instruction: 'Both cases are about a ban on any group holding a political rally in a public park. Compare one thing: who made the rule.',
    prompt: { kind: 'which', option: 'D1.states', answer: 'u6-rally-city' },
    difference: [
      'In Case A both chambers of Congress passed a law. The first answer is {a:D1.congress}, so the questions of this unit are not the ones to ask. The case has the name for {plain:beyondcong}. The right to gather peacefully stops this law too.',
      'In Case B a city council made the rule. The first answer is {a:D1.states}, and the right stops the rule. The answer to the second question is {a:S2.right}, and the case is {o:protected}.',
      'The ban and the right are the same in both, so only who made the rule, the first question, tells the two names apart.'
    ] },

  /* ---------- The second question ---------- */
  { id: 'q-else', kind: 'question', step: 'S2',
    h: 'The second question: what else covers the matter',
    link: 'You have seen this question at the end of each card. Here it is with its four answers in one place.',
    decides: [
      'Six pairs of names have no card of their own, and this question alone separates all of them: {o:police} and {o:concurrent}, {o:police} and {o:protected}, {o:localgov} and {o:preempted}, {o:localgov} and {o:concurrent}, {o:preempted} and {o:protected}, and {o:concurrent} and {o:protected}. The list below puts each pair side by side. With {o:police} or {o:localgov}, the difference is whether anything else covers the matter at all, a federal law or a right. Between {o:preempted} and {o:protected} the rule is stopped in both, by a federal law in one and by a right in the other. Between {o:concurrent} and {o:protected} the rule stands in one and does not in the other.'
    ],
    how: [
      'Start with the matter: what is the rule about? Does a federal law cover it? If none is named, check whether the matter is on the list of federal powers from the first name: if it is not, nothing federal covers it, and the answer may be {a:S2.nothing}. If a federal law is named, does it shut the states out, or does it set a minimum and leave them room? And whichever the answer, does the rule take away a right to speak, to worship, to publish or to gather peacefully?',
      'A federal law in the story is not enough. It has to cover the same matter. A story can mention Congress or a federal tax in passing and then go on to a rule about something else. Then the answer is {a:S2.nothing}, and the name is {o:police} or {o:localgov}, depending on who made the rule.'
    ] },

  { id: 'check-else', kind: 'check', after: 'S2',
    case: 'u6-c-schools',
    ask: { type: 'step', step: 'S2' } }
]);

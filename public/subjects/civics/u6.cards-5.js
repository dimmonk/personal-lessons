// Civics, Unit Six, part four: the rest of the fifth name, its look-alike pairs (two inside this branch, one exception,
// and three that cross into another branch and are told apart by the key's first question), and the second question.
// A pair that crosses a branch names the other branch's name by its plain words, never by the name: the name belongs to the
// unit that teaches it, and the ledger prints it.

FC.cards('civics', 'u6', [

  { id: 'portrait-protected', kind: 'portrait', outcome: 'protected',
    link: 'What you point to is a right that the rule takes away. This card fills in the rest of the picture, so that you can spot {o:protected} in real life.',
    typical: [
      'The rule takes away something specific: people’s ability to speak, to worship, to publish or to gather peacefully.',
      'It usually aims at what people say or believe, or at who may say it: a ban on a topic, a permit that a government may refuse because of the message, an approval of the words in advance.',
      'It makes no difference who made the rule: a state, a city, a town or a county. The right binds all of them.',
      'It makes no difference whether a federal law is in the story. The rule is stopped by the right, not by a federal law.',
      'A person who is punished under such a rule can go to court, and a judge can be asked whether the rule breaks the Constitution.',
      'Rights have edges. A neutral rule about when and where an event happens, such as a noise limit, is generally allowed. Only a rule that aims at what is said or believed takes away the right.'
    ],
    not: [
      'A rule that is only unpopular, or only strict, takes away no right. A rule about when and where an event happens, and the same for every event, is not of this kind.',
      'And a federal law that stops a state’s rule is a different name from a right that stops it. In one a federal law covers the matter, and in the other a right does.'
    ],
    wild: ['“It violates the First Amendment.”', '“You can’t be punished for saying that.”', '“The state can’t make that illegal.”', '“They can’t ban a newspaper.”'],
    self: 'In your own life it is what lets you say what you think about your mayor, join a march, publish a newsletter or worship where you choose, whichever city or state you live in. These rights are for everyone here, not only for citizens.',
    ask: '“Does this rule take away a right to speak, to worship, to publish or to gather peacefully?” If so, and the rule is a state’s, a city’s or a county’s, the name is {o:protected}.' },

  { id: 'check-protected', kind: 'check', after: 'protected',
    case: 'u6-c-gather',
    ask: { type: 'option', step: 'S2', among: ['onlyrule', 'floor', 'right'] } },

  { id: 'look-police-protected', kind: 'lookalike', ledger: 'police~protected',
    h: 'A licence to sell food, an approval to hand out a newspaper',
    link: 'A state may make rules on a great many matters, and a right stops it on some. This card puts a rule of each side by side.',
    cases: ['u6-stall-licence', 'u6-stall-paper'],
    instruction: 'Both cases are about a state saying who may use a public sidewalk: to sell food, to hand out a newspaper. Compare one thing: whether the rule takes away a right.',
    prompt: { kind: 'which', option: 'S2.right', answer: 'u6-stall-paper' },
    difference: [
      'In Case A the rule is about who may run a food stall. Selling food is a business, and a state may license businesses. Nothing about speech, worship, publishing or gathering is touched, and the case names no federal law, so the case is {o:police}.',
      'In Case B the rule lets the governor’s office approve what a newspaper says before it may be handed out. That takes away the right to publish. The key’s answer is {a:S2.right}, and the case is {o:protected}.',
      'Both rules are about who may use the same sidewalk, so you cannot tell them apart by the place. The difference is whether the rule takes away a right.'
    ] },

  { id: 'exc-councilmag', kind: 'exception', ledger: 'localgov~protected', looksLike: 'localgov', is: 'protected',
    h: 'A city’s own sidewalk, and a right that stops it',
    link: 'A few cards ago you read that a city controls its own streets and what is done on them. Here is a case that sounds exactly like that.',
    case: 'u6-councilmag',
    setup: 'This looks like {o:localgov}: a city council decides who may set up on its own sidewalks, and newsstands stand on them. A city’s power over its sidewalks is real. Yet the key’s answer for this case is {a:S2.right}, and the case is {o:protected}.',
    prompt: { kind: 'phrase', answer: 'newsstands may not sell the magazine that makes fun of the mayor' },
    because: [
      'The council is using a real power. If it had said that newsstands must stand six feet from the corner, a rule about where, the case would be {o:localgov}. But the rule it made is about what may be sold: it bans a magazine because the magazine makes fun of the mayor. That takes away the right to publish.',
      'A city’s power over its sidewalks does not reach so far. The state handed the city power over the sidewalks, but a state has no power to take away a right, so it had none to hand down.'
    ],
    take: 'Your first look at a story gives you its matter, and the matter can sound local. Always put the second question as well: what else covers it, and does the rule take away a right?' },

  { id: 'look-protected-beyondcong', kind: 'lookalike', ledger: 'protected~beyondcong',
    h: 'The same rally ban, made by Congress and by a city',
    link: 'A right can stop a rule whoever made it. The last cards showed rules of a state and of a city stopped by a right. Here is the same story with Congress as the maker.',
    cases: ['u6-rally-congress', 'u6-rally-city'],
    instruction: 'Both cases are about a ban on any group holding a political rally in a public park. Compare one thing: who made the rule.',
    prompt: { kind: 'which', option: 'D1.states', answer: 'u6-rally-city' },
    difference: [
      'In Case A both chambers of Congress passed a law. The key’s first answer is {a:D1.congress}, so the questions of this unit are not the ones to ask. The case belongs to the branch for Congress, and its name is the one for {plain:beyondcong}. The right to gather peacefully is what stops this law too.',
      'In Case B a city council made the rule. The key’s first answer is {a:D1.states}, and the right stops the rule. The key’s answer to the second question is {a:S2.right}, and the case is {o:protected}.',
      'The ban and the right are the same in both cases, so you cannot tell the two names apart by what the rule says or by which right is involved. You can only tell by who made the rule, which is the key’s first question.'
    ] },

  { id: 'look-protected-trialrights', kind: 'lookalike', ledger: 'protected~trialrights',
    h: 'A right against the police, and a right against a council',
    link: 'Both of these names say that a right in the Constitution protects a person against a government. They are told apart in the same way: by the key’s first question.',
    cases: ['u6-silence-lawyer', 'u6-council-criticism'],
    instruction: 'In both cases a person has a right that a government has to respect. Compare one thing: what the story ends on. Does it end with a judge being asked, or with a rule made by a state, a city or a county?',
    prompt: { kind: 'which', option: 'D1.states', answer: 'u6-council-criticism' },
    difference: [
      'In Case A the story ends with a lawyer asking a judge to keep out what a man said in questioning. A judge is being asked, so the key’s first answer is {a:D1.courts}. The right is one of the steps the Constitution promises an accused person, and the name is the one for {plain:trialrights}.',
      'In Case B the story ends with a council’s rule. Nobody has asked a judge anything. The key’s first answer is {a:D1.states}, the right at stake is the right to speak, and the case is {o:protected}.',
      'A right is in both cases, and in both it is a right against government. What separates them is whose decision the story ends on.'
    ] },

  { id: 'look-police-beyondcong', kind: 'lookalike', ledger: 'police~beyondcong',
    h: 'The same barbers’ hours, set by a state and by Congress',
    link: 'One more pair crosses into another branch. It is about a matter that belongs to the states, set by a state in one case and by Congress in the other.',
    cases: ['u6-barber-congress', 'u6-barber-state'],
    instruction: 'Both cases are about the hours barbers may cut hair: from eight in the morning to six in the evening. Compare one thing: who made the rule.',
    prompt: { kind: 'which', option: 'D1.states', answer: 'u6-barber-state' },
    difference: [
      'In Case A Congress passed a law. The key’s first answer is {a:D1.congress}. The hours barbers work are not among the powers the Constitution lists for Congress, so the matter is kept by the states, and the case has the name for {plain:beyondcong}.',
      'In Case B the legislature of one state passed a law. The key’s first answer is {a:D1.states}. The matter is the state’s to decide, nothing else covers it, and the case is {o:police}.',
      'The matter is the same in both cases, and it is a matter for the states. A state may make the rule. Congress may not. So the same words get different names depending on who made the rule.'
    ] },

  /* ---------- The second question ---------- */
  { id: 'q-else', kind: 'question', step: 'S2',
    h: 'The second question, and what else covers the matter',
    link: 'At the end of each of the last cards you saw this question with one answer. This card puts the question and its four answers in one place, as the key shows them, and says why the key asks it.',
    decides: [
      'This question gives most of the names. Whoever made the rule, a state, a city, a town or a county, the name depends on what else covers the same matter: nothing at all; a federal law that makes itself the only rule; a federal law with space for the states; or a right. So the same rule can get any of four names on four different sets of facts, and each of the four can come from either kind of maker.',
      'Five pairs of names have no card of their own, and this question alone separates all of them: {o:police} and {o:concurrent}, {o:localgov} and {o:preempted}, {o:localgov} and {o:concurrent}, {o:preempted} and {o:protected}, and {o:concurrent} and {o:protected}. The list printed below puts each pair side by side with the question that tells them apart. With {o:police} or {o:localgov}, the difference is whether anything else covers the matter at all. Between {o:preempted} and {o:protected} the rule is stopped in both, by a federal law in one and by a right in the other. Between {o:concurrent} and {o:protected} the rule stands in one and does not in the other.'
    ],
    how: [
      'Start with the matter: what is the rule about? Then ask whether a federal law covers the same matter. If none is named, check whether the matter is one of the federal powers listed when the first name was taught: if it is not, nothing federal covers it, and the answer may be {a:S2.nothing}. If a federal law is named, does it say that it is the only rule, or does it say that it is a minimum or leave room for the states? And whichever the answer, does the rule take away a right to speak, to worship, to publish or to gather peacefully?',
      'A federal law in the story is not enough. It has to cover the same matter. A story can mention Congress, a federal office or a federal tax in passing, and then go on to a rule about something else. In that case the answer is {a:S2.nothing}, and the name is {o:police} or {o:localgov}, depending on who made the rule.'
    ],
    whenBoth: 'Sometimes the story names a federal law and it is not clear whether it covers the same matter. Ask what the federal law is about, and what the state’s or the city’s rule is about. If they are about different matters, the federal law is only background.' },

  { id: 'check-else', kind: 'check', after: 'S2',
    case: 'u6-c-schools',
    ask: { type: 'step', step: 'S2' } }
]);

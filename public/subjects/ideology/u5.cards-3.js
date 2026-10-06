// Political Ideologies, Unit Five, part three: the word the third name leans on, and the third name (rules said to hold some groups back).

FC.cards('ideology', 'u5', [

  { id: 'term-equity', kind: 'term', term: 'equity',
    h: 'The same rules for everyone, and a result that is not the same',
    link: 'Before the third name, there is one word that texts of its kind often use. It is easier to see in a case first.',
    case: 'i5-term-steps',
    plain: [
      'The clerk is telling the truth: the rules are exactly the same for each person. Yet Rafael cannot get up the stair, so a rule that is the same for everyone does not let him in. One answer is that the rules are the same for everyone, so nothing is wrong. Another is that Rafael should be treated differently, on purpose, so that the result comes out fair. The council does that: it builds a ramp at the side door.'
    ],
    after: [
      'A rule can treat everyone alike and still leave one person outside. Looking at the result, and changing how people are treated until it is fair, is {t:equity}. People argue about when that is the right thing to do. This card only gives you the word, so that you can see when a text asks for it.'
    ] },

  { id: 'meet-idegal', kind: 'meet', outcome: 'idegal',
    link: 'Two names so far, and both are content with rules that treat everyone alike. The third is not. Here is a text that says a rule which is the same for everyone has left a group behind.',
    case: 'i5-idegal-meet', mark: 'R1',
    strip: [
      'There is a rule that is the same for every child: one paper, one day, one room in the city. No rule names the hill villages.',
      'The results are not the same for every group: in ten years no child from the villages has passed.',
      'The text says that this rule is what has left the villages behind, because the only bus reaches the city after the test begins.',
      'It asks for the rules to be changed, with a test day in the villages, until results come out as fair for the villages as for the city.',
      'It says in so many words that nobody is to be placed above anybody.'
    ],
    explain: [
      'This text is a complaint about a rule, and the complaint is not about unkindness. Nobody wrote the test to keep the villages out. The text says that this is the trouble: a rule that is the same for everyone can still lead to results that are not the same across groups, when the groups do not start from the same place. A bus that does not reach the test is not written in any rule, and it decides who passes.',
      'So the text asks for something the first two names do not. The first would say the test is fair because it is the same for all. The second would pay for a bus or a tutor for any child who needs one, and would not say the test itself is at fault. This text says the test is at fault and wants the rules changed. That is asking for {t:equity}: treating groups differently where that is needed, so that results come out fair. The text need not use the word.'
    ],
    feature: { step: 'R1', option: 'rules' },
    name: 'The name for this is {o:idegal}. "Group" because the text is about groups of people, here the people of some villages. "Equality" because what the text asks for is equal results across groups, with no group placed above another.' },

  { id: 'check-idegal', kind: 'check', after: 'idegal',
    case: 'i5-idegal-check',
    ask: { type: 'option', step: 'R1', among: ['leave', 'start', 'rules'] } }
]);

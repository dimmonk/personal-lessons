// Political Ideologies, Unit Five, part three (first half): the word the third name leans on, and the third name
// (rules said to hold some groups back).

FC.cards('ideology', 'u5', [

  /* ---------- A word the third name is built on ---------- */
  { id: 'term-equity', kind: 'term', term: 'equity',
    h: 'The same rules for everyone, and a result that is not the same',
    link: 'Before the third name, there is one word that texts of its kind often use. It is easier to see in a case first.',
    case: 'i5-term-steps',
    plain: [
      'The clerk at the Fennmoor town hall says that anyone may come in and apply, and that the rules are exactly the same for each person. That is true. It is also true that Rafael, who uses a wheelchair, cannot get up the stair, so a rule that is the same for everyone does not let him in.',
      'There are two things a person could say about that. The first is that the rules are the same for everyone, so nothing is wrong. The second is that Rafael should be treated differently, on purpose, so that the result comes out fair, and the council does that: it builds a ramp at the side door. Only the people who need the ramp will use it. One person is treated differently from the others, for a reason, and that is how the result is made fair.'
    ],
    after: [
      'Notice the two things being compared: what the rules say, and what comes out. A rule can treat everyone alike and still leave one person outside. The second way of seeing it looks at the result, and changes how people are treated until the result is fair.',
      'People argue, often sharply, about when that is the right thing to do and when it is not. This card does not take a side. It gives you the word, so that you can see when a text asks for it.'
    ] },

  /* ---------- Group equality ---------- */
  { id: 'meet-idegal', kind: 'meet', outcome: 'idegal',
    link: 'Two names so far, and both of them are content with rules that treat everyone alike. The third is not. You have just seen at the town hall how a rule that is the same for everyone can still leave someone outside. Here is a text that says so about a school test.',
    case: 'i5-idegal-meet', mark: 'R1',
    strip: [
      'There is a rule that is the same for every child: one paper, one day, one room in the city. No rule names the hill villages.',
      'The results are not the same for every group: in ten years no child from the villages has passed.',
      'The text says that this rule is what has left the villages behind, because the only bus reaches the city after the test begins.',
      'It asks for the rules to be changed, with a test day in the villages, until results come out as fair for the villages as for the city.',
      'It says in so many words that nobody is to be placed above anybody.'
    ],
    explain: [
      'What this text is made of is a complaint about a rule, and the complaint is not about unkindness. Nobody wrote the test to keep the villages out. This rule treats every child alike. The text says that this is the trouble: a rule that is the same for everyone can still lead to results that are not the same across groups, when the groups do not stand in the same place to begin with. A bus that does not reach the test is not written in any rule, and it decides who passes.',
      'So the text asks for something that neither of the first two names asks for. The first would say the test is fair because it is the same for all. The second would pay for a bus or a tutor for any child who needs one, and would not say that the test itself is at fault. This text says the test is at fault, and wants the rules changed: not the same rules for everyone, but whatever rules give fair results across groups.',
      'That is where the word you have just met comes in. A text of this kind is asking for {t:equity}: treating groups differently where that is needed, so that results come out fair. It need not use the word.',
      'Notice the last sentence of the letter. It says that nobody is to be placed above anybody. That matters for the name: the text wants results fair across groups, and it ranks no group higher than another. A text that placed one people above the others would be answering the first question differently.',
      'People argue, often sharply, about whether rules should be changed in this way, and no side is taken here. The question is what the text says: whether it names rules that leave a group behind, and wants them changed.'
    ],
    feature: { step: 'R1', option: 'rules' },
    name: 'The name for this is {o:idegal}. "Group" because the text is about groups of people: here, the people of some villages. "Equality" because what the text asks for is results that are equal across groups, with no group placed above another.' },

  { id: 'again-idegal', kind: 'again', outcome: 'idegal',
    link: 'The hill-villages letter gave you what to point to from one case: {needs:idegal}. Here is a second case with a different story. This time the test is for work on a dock, and the group is women.',
    first: 'i5-idegal-meet', second: 'i5-idegal-again', step: 'R1',
    instruction: 'Find what the two cases share. Ignore the story (a school test, a dock hiring test) and the group (hill villages, women). Look at one thing only: which words say what the text wants done about the rules?',
    prompt: { kind: 'phrase', answer: 'The authority should change both rules until hiring comes out fair across men and women' },
    shared: [
      'Both texts describe rules that are the same for everyone: one test paper, one lifting test with one bar weight. Both say that no rule names the group. Both say that the group is nevertheless left behind: no child from the villages has passed, almost no woman has been taken on. Both name the rules as the cause, and both ask for the rules to be changed until results are fair across groups. And both say that nobody is to be placed above anybody.',
      'The two stories share nothing else. One is a school and the other a dock; one group is a set of villages and the other is women. So this holds wherever a text says that rules which treat everyone alike leave a group behind, and asks for them to change. That is what {o:idegal} names.'
    ] },

  { id: 'portrait-idegal', kind: 'portrait', outcome: 'idegal',
    link: 'What you point to is a rule that treats everyone alike, said to leave a group behind, and the request for it to change. Here is the rest of the picture, so that you can spot {o:idegal} where nobody marks the words for you.',
    typical: [
      'It names a group of people: by where they come from, by sex, by disability or by race. And it names a rule or a habit, and says that it treats everyone alike.',
      'It talks about results as well as rules. Look for numbers, or for words like "almost no", "year after year" and "as often as": the text compares how one group fares with how others do.',
      'It says a rule leaves the group behind without anyone intending it. "Nobody wrote it to keep us out" is a common line. The complaint is about what a rule does, not about who wrote it.',
      'It asks for the rules or habits to be changed, and not only for the group to be given help. The target is what the rules say.',
      'It may use the word {t:equity}, but it need not.',
      'It does not place one group above another. A text that placed one group above others would answer the first question differently.'
    ],
    not: [
      'Naming a group is not enough. A text can name a group and ask for nothing more than the same help for everyone: that is not this name. What you point to is a rule that treats everyone alike, said to leave the group behind, and the request for it to change.',
      'Wanting fairness is not enough either. All three names in this unit want fairness. They disagree about what it takes.'
    ],
    wild: ['"The rules are the same for everyone, and that is the problem."', '"Nobody meant to keep us out, and we are still kept out."', '"Fair rules do not always give fair results."', '"Look at who actually gets in."', '"Treating everyone the same is not the same as treating everyone fairly."'],
    self: 'In your own life it is the argument over a rule that looks fair and is said to work out unevenly: an entry test, a form, an opening time, a hiring process. It is the sentence "that is the same for everyone" followed by "and yet".',
    ask: '"Which rule is said to leave which group behind, what result would count as fair, and does the text place any group above another?" If a rule is named, a group is named, and the request is for the rules to change, you have this name.' },

  { id: 'check-idegal', kind: 'check', after: 'idegal',
    case: 'i5-idegal-check',
    ask: { type: 'option', step: 'R1', among: ['leave', 'start', 'rules'] } }
]);

// Political Ideologies, Unit Five, part three: the word the third name leans on, and the third name (rules said to hold some groups back).

FC.cards('ideology', 'u5', [

  { id: 'term-equity', kind: 'term', term: 'equity',
    h: 'When the same rules leave someone out',
    link: 'Before the third answer, one word you will need. A story first.',
    case: 'i5-term-steps',
    plain: [
      'The clerk is telling the truth: the rules are exactly the same for each person. But Rafael cannot get up the stair, so the same rules do not get him in. The council fixes it by treating him differently, on purpose: a ramp at the side door.'
    ],
    after: [
      'A rule can treat everyone alike and still leave one person outside. Looking at the result, and treating people differently until it is fair, is {t:equity}. People argue about when that is the right thing to do. This card only gives you the word, so you can spot when a text asks for it.'
    ] },

  { id: 'meet-idegal', kind: 'meet', outcome: 'idegal',
    link: 'The first two answers are happy with rules that treat everyone alike. This one is not: it says a rule that is the same for everyone has left a group behind.',
    case: 'i5-idegal-meet', mark: 'R1',
    explain: [
      'Nobody wrote this test to keep the villages out. It is the same paper, day and room for every child. But the only bus reaches the city after the test begins, so in ten years no child from the villages has passed. A rule that treats everyone alike can still give very different results when people do not start from the same place.',
      'The first answer would call the test fair because it is the same for all. The second would pay for a bus or a tutor and leave the test alone. These parents say the test itself is the problem and ask for it to change. That is asking for {t:equity}, though the letter never uses the word.'
    ],
    spot: [
      { do: 'Find what is the same for everyone: one paper, one day, one room in the city.', why: 'It names no group, so it looks fair.' },
      { do: 'Find the group with different results: no child from the villages has passed in ten years.', why: 'The unfairness shows in the results.' },
      { do: 'Check that it blames the rules: "Rules that treat every child alike have left our children behind."', why: 'Blaming the rules is what sets this answer apart.' },
      { do: 'Find what it asks for: change the rules, with a test day held in the villages.', why: 'The ask is a changed rule, not a gift.' }
    ],
    feature: { step: 'R1', option: 'rules' },
    name: 'This is {o:idegal}. "Group" because the text is about groups of people, and "equality" because it asks for fair results across groups, with no group placed above another.' },

  { id: 'check-idegal', kind: 'check', after: 'idegal',
    case: 'i5-idegal-check',
    ask: { type: 'option', step: 'R1', among: ['leave', 'start', 'rules'] } }
]);

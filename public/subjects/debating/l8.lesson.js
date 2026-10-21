// Debating, lesson 8, replies that work against you (part 8 of the plan's ten lessons; the plan's "the bad moves" was reshaped). The plan's four moves were mocking, calling someone
// stupid, fact-dumping and the invented story. The invented story and the long chain of steps were already taught in lessons 4 and 5 and a restatement with something added in lesson 6;
// "stupid" as a label has no test and the research note makes no claim about ability, so the lesson takes what Aristotle's account does give: a slight (Rhetoric II.2, II.3: mocking,
// jeering and contempt anger people, and calm comes toward those who do not mock; an old account, never tested in a talk like yours). So the lesson is the look-alike practice (P12) in your
// own writing, and a second pass on the earlier lessons (P22): three replies to the same last line, and one works against you. Plan: docs/subjects/debating/plan.md.
FC.lesson('debating', {
  id: 'l8', part: '8', title: 'Replies that work against you', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-21', change: 'First version. The plan\'s "bad moves" were reshaped: the invented story, the long chain and the restatement with something added were already taught, and calling someone stupid has no test behind it (the research note makes no claim about ability), so the lesson takes Aristotle\'s account of a slight and practises telling the five moves from fair replies, in three replies to one last line.' }],
  why: [
    'You are telling your neighbor Carl why the street should have speed bumps. He says bumps slow down the ambulances. Two replies come to mind. One is "Spare me. You would say anything to avoid a bump." The other is "The town report says a bump adds about ten seconds to an ambulance run." One of them works against you.',
    'In about fifteen minutes you will learn five ways a reply works against you, most of them from the earlier talks, and how to check a draft before you send it.'
  ],
  flow: [
    { title: 'Aimed at the person, or at the point',
      show: [
        { kind: 'prose', text: [
          'Aristotle writes that people grow angry at those who laugh, mock or jeer at them, and at those who show contempt for what they care about. He says they grow calmer toward those who do not mock. So a line that looks down on the person is a slight: a joke at their expense, "of course you would say that", "only a fool thinks...", or polite words that still say they cannot see straight.',
          'A blunt line aimed at their point is not a slight: "That number is wrong. Here is the page." Calling someone stupid belongs here because it is contempt; we make no claim about whether anyone is or is not. Aristotle\'s account is old and nobody tested it in a talk like yours.'] }
      ] },
    { title: 'Four more ways a reply works against you',
      show: [
        { kind: 'prose', text: [
          'Too many steps in a row: Aristotle says hearers cannot take in a long chain of reasoning. Five links is our limit, not his.',
          'A start they do not accept: Aristotle says reasoning from a starting point people do not grant fails to win them. If they said they do not trust a number, do not build on it.',
          'A story stretched past what happened: a published comment on the personal-experience studies warns that a false story would earn more respect than facts, and Aristotle says not to make people believe what is wrong.',
          'A restatement with something added: they would not accept it. Saying a view back fairly is advice from experts, not a tested finding.'] }
      ] },
    { title: 'Check your draft',
      show: [
        { kind: 'prose', text: [
          'Read your draft as the other person would. Is any line about them and not about their point? Count the steps. Put each line about a story beside what happened. Put each line of a restatement beside their words. Does it begin from something they have said they do not accept? This check is ours.',
          'A reply can be blunt, warm, long or short and be fine, and a calm or friendly reply can still do one of these five things. Tone does not decide it; the five things do.'] }
      ] },
    { worked: 'w8-carl' },
    { set: { items: ['a8-lou', 'a8-rita', 'a8-ed'], order: 'listed' } },
    { set: { items: ['b8-walt', 'b8-ana', 'b8-nora', 'b8-drew', 'b8-bea'], order: 'shuffle' } }
  ],
  check: {
    items: ['c8-roy', 'c8-hana', 'c8-max', 'c8-pam', 'c8-gus', 'c8-kit', 'c8-dee', 'c8-mo'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});

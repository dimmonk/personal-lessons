// Debating, lesson 2, why people dig in (part 2 of the plan's ten lessons). A way of deciding, not facts to recall: when someone resists, read what the disagreement is about (a fact
// someone could check, a view about a group or a policy, or the two mixed) and use the move the studies back (the correction; a true story; each on its own part). One decision a
// question, the move and the studies given in the feedback (docs/research/debating.md, F2 to F5). What to do after someone agrees and drops it is not graded: no source read says.
// Reading a fact against a view is the lesson's reading of the studies and the lesson says so. Plan: docs/subjects/debating/plan.md.
FC.lesson('debating', {
  id: 'l2', part: '2', title: 'Why people dig in', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-21', change: 'First version, rebuilt after six failed reviews. The practice is one decision a question: read what the disagreement is about (a fact someone could check, a view about a group or a policy, or the two mixed). The same three readings are each right in some scenes, belonging to a side is written into fact and view scenes alike, and the move and the studies are given in the feedback. What to do after someone agrees and then drops it is a plainly labeled suggestion in the teaching and is not graded. Arguing in a group improves reasoning is added as the counterweight; no claim about ability or numeracy; own facet so the results show what was taught.' }],
  why: [
    'Your uncle shares a false figure about crime in your town. You send him the county\'s own report. He calls it a smear and shares the figure again. It looks as if the report made him dig in, as if correcting him made him believe the figure even more. What the disagreement is really about decides your next move.',
    'In about fifteen minutes you will learn to tell a fact from a view, what the studies say to do about each, and how rarely a correction makes people believe the claim more.'
  ],
  flow: [
    { title: 'Is it a fact or a view?',
      show: [
        { kind: 'prose', text: [
          'A fact is something someone could check: a figure, a date, a notice. A view is how someone feels about a group or a policy. People defend both, often for the side they belong to, so work out what the disagreement is about, not whether they have a side.',
          'Sometimes the two are mixed: "I don\'t want it here, and it costs $2 million." Then take the checkable part and the view as two separate things.'] }
      ] },
    { title: 'A fact: give the correction',
      show: [
        { kind: 'prose', text: [
          'Researchers tried to make corrections backfire, so that people believed the false claim more, on 52 issues, including issues that split people sharply by side, with over 10,000 people. They found none that did, so backfire is rare at most. People who read a correction usually moved toward the facts, at least somewhat, even when they were defending a side. These were surveys, not live talks.',
          'The move often did not last. Nothing we read says what to do after someone agrees and then goes back to the old claim. Our own suggestion, untested: do not push the same correction again on the spot, and come back another day.'] }
      ] },
    { title: 'A view: tell a true story',
      show: [
        { kind: 'prose', text: [
          'In a US door-to-door test on immigration, trained canvassers, people whose job is to talk with voters, only gave arguments to some voters. Their attitudes did not change on average. Where the talk also swapped stories, attitudes against immigrants went down a little and stayed down at least four months. Two tests on transgender rights found the same small drop. In a later video-chat test, the story did the work and careful listening added nothing.',
          'A story sounds like this: "My neighbor Ana moved here from Peru twelve years ago. When her shop flooded, the whole street helped carry things out." One real person, short, no lecture.',
          'These tests used trained canvassers with strangers, on two topics. For other views they are the nearest evidence, not proof. Splitting fact from view is our reading.'] }
      ] },
    { title: 'Why people hold on, and arguing is not useless',
      show: [
        { kind: 'prose', text: [
          'A well-known theory says a person with an opinion to defend treats the other side\'s arguments as things to rebut from the start. That does not make a correction useless, since people defending a side still moved toward one.',
          'The same theory finds that when people share a goal of getting the answer right, arguing in a group tends to improve their reasoning. So arguing is not the trouble. Having a side to defend changes how an argument is received.'] }
      ] },
    { title: 'Back to your uncle',
      show: [
        { kind: 'prose', text: [
          'The crime figure is a fact someone could check, so the correction was the right move, even though he defends his group. His angry reply does not show backfire. If he turns to how he feels about those people, that is a view, and then a true story is the move.'] }
      ] },
    { worked: 'w2-uncle' },
    { set: { items: ['a2-bus', 'a2-church', 'a2-ray', 'a2-town'], order: 'listed' } },
    { set: { items: ['b2-poll', 'b2-fee', 'b2-lanes', 'b2-path', 'b2-walt'], order: 'shuffle' } }
  ],
  check: {
    items: ['c2-ed', 'c2-pam', 'c2-rule', 'c2-law', 'c2-shelter', 'c2-dan', 'c2-both', 'c2-bus'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});

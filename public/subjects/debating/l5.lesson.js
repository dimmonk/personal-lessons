// Debating, lesson 5, what a true story gets you (part 5 of the plan's ten lessons). The plan's first title, "Why a fact alone fails, and a story helps", was changed: lesson 2 already
// teaches that a correction usually moves people at least somewhat on a checkable fact and that arguments alone had no average effect on attitudes, so this lesson takes what lesson 2
// leaves open. (1) What a true story gets you: a hearing, a small move or neither, read from their last lines (docs/research/debating.md, F5: the story tests measured shifts in surveys,
// some weeks and months later; F6: the personal-experience studies measured respect and set persuasion aside). (2) Keep every line true (F6: a published comment warns that a false personal
// story earns more respect than facts; F9: do not make people believe what is wrong). The rule to check each line is the lesson's own, said so. Plan: docs/subjects/debating/plan.md.
FC.lesson('debating', {
  id: 'l5', part: '5', title: 'What a true story gets you', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-21', change: 'First version. The plan\'s "why a fact alone fails" was dropped because lesson 2 and the corrected research already say a correction works somewhat on a checkable fact; this lesson reads what a true story got (a hearing, a small move or neither) and checks your own story line by line against what happened.' }],
  why: [
    'You tell your neighbor Pam about the winter your brother slept in his car. She says, "I am sorry that happened to Lee. I mean it. I still don\'t want a shelter on our street." The story got you something real. It did not change her mind.',
    'In about fifteen minutes you will learn what a true story did in the studies, how to tell a hearing from a changed mind, and how to check that every line of your story is true.'
  ],
  flow: [
    { title: 'What a true story did in the studies',
      show: [
        { kind: 'prose', text: [
          'In US field tests, trained canvassers (people trained to talk with voters) talked with strangers about immigration. Arguments alone had no average effect on attitudes, meaning how people felt about immigrants and immigration policy. When the talk also swapped stories, attitudes against immigrants dropped a little, and the drop was still there four months later. Two more tests, on transgender rights, found a small drop too. The authors say not to overstate the size.',
          'In a later video-chat test, the story did the work. The canvasser who listened carefully was seen more favorably, but the listening added no persuasion to the story.',
          'These were trained canvassers and strangers, on two topics. Nothing shows the same for an argument in a family.'] }
      ] },
    { title: 'A hearing is not a changed mind',
      show: [
        { kind: 'prose', text: [
          'In 15 studies on moral disagreements (disputes about right and wrong, such as how to treat people in need), people respected an opposing view more when it was backed by personal experience, most of all when the experience was about the issue and involved harm. Those studies measured respect. They put aside whether anyone was persuaded. Nothing here says the same holds for other kinds of disagreement, so the practice uses moral ones.',
          'So when someone listens to your story, check what you got from their last lines. Sorting a reply into these three is our reading, not a finding. A hearing: they show they took in the story itself ("I am sorry that happened", "that is heavy") and their view stays. A small move: part of their view shifts, even if they keep a reservation. Neither: a flat "okay", a change of subject, or an argument that ignores your story. If any part of their view shifted, call it a move, even if they were polite too.',
          'The talk is all you can see. The studies measured shifts in surveys, some of them weeks or months later, so "neither" in the room does not show the story failed.'] }
      ] },
    { title: 'Keep every line true',
      show: [
        { kind: 'prose', text: [
          'A story, as we use the word, is one real person and short; the studies add that it works best when it is about the issue and has harm in it: "My brother Lee lost his job in January and slept in his car for three weeks."',
          'A published comment on the personal-experience studies warns that a false personal story would earn more respect than facts. An invented story can earn the respect, and it is a lie. Aristotle puts the same limit on persuading: do not make people believe what is wrong.',
          'So tell only what happened. Before you tell it, check each line against what you know: a number made bigger, a night you were not there, an ending you did not see. If a line fails, cut it or fix it. That rule is ours, not a finding.'] }
      ] },
    { worked: 'w5-pam' },
    { set: { items: ['a5-move', 'a5-neither', 'a5-hearing'], order: 'listed' } },
    { set: { items: ['b5-hearing', 'b5-move', 'b5-neither', 'b5-t1', 'b5-t2', 'b5-t3'], order: 'shuffle' } }
  ],
  check: {
    items: ['c5-neither', 'c5-move', 'c5-hearing', 'c5-hearing2', 'c5-t1', 'c5-t2', 'c5-t3', 'c5-t4'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});

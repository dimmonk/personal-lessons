// Debating, lesson 9, checking your own side (part 9 of the plan's ten lessons). Mercier and Sperber 2011 (read in full on 2026-10-21, docs/research/debating.md, F3): people judge arguments
// well when they have no axe to grind, but when they have an opinion to defend they look mainly for arguments for it and treat the other side's as things to rebut; in a much-cited test
// people rated studies with almost the same method as better done when the conclusion matched their view; people who disagree with a conclusion spend more time hunting for flaws and find
// some; with a claim that is not theirs, people find counterarguments quickly; looking for flaws in one's own reasons is an acquired skill and in most discussions it is easier to let the
// other person find them. The counterweight is stated: a commentary reports lab experiments in which the one-sided bias showed even when people argued a side they disagreed with, and readers
// rated arguments better when the writer met the other side's points; groups that disagree but want the right answer do well. The practice is one decision: in a note that sets its own test,
// tap the line that stops using it, or say none does (the lesson's own way of making the check visible). Showing your reasons to someone with nothing at stake is the lesson's
// inference, untested, said so and not graded. Plan: docs/subjects/debating/plan.md.
FC.lesson('debating', {
  id: 'l9', part: '9', title: 'Checking your own side', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-21', change: 'First version, on the full text of the review of reasoning research that the plan cited at second hand. The practice is one decision: in a note that sets its own test and applies it to two sources, tap the line that stops using it, or say none does. The check that someone with nothing at stake should look at your reasons is marked as our inference and is not graded.' }],
  why: [
    'You are for the four-day week, and you write a friend a note about two reports. Report A says output fell and asked 40 workers. You write that it is too small to count. Report B says output held and asked 45 workers. You write that it is a solid study. Same size, two verdicts.',
    'In about fifteen minutes you will learn what research says about reasoning for your own side, one check you can run on your own note, and one more thing that nobody has tested.'
  ],
  flow: [
    { title: 'Reasoning for your own side',
      show: [
        { kind: 'prose', text: [
          'Researchers who reviewed the studies of how people reason found something lopsided. People are good at judging an argument that is not theirs, when they have nothing riding on it. But people with an opinion to defend look mainly for arguments for it, and treat the other side\'s arguments as things to answer back.',
          'In a much-cited test, people who favored or opposed the death penalty read two studies with almost the same method. They rated the study that agreed with them as better done. People who disagree with a conclusion also spend more time hunting for counterarguments to it. With a claim that is not theirs, people find counterarguments quickly.'] }
      ] },
    { title: 'Where that is not the whole picture',
      show: [
        { kind: 'prose', text: [
          'The same researchers say groups of people who disagree but want the right answer do well, and that people judge fairly when they have no stake in the answer. A researcher who ran lab experiments, quoted in a published comment, found that the one-sided habit showed even when people argued a side they did not hold, and that readers rated an argument better when the writer met the other side\'s points and answered them.',
          'The researchers also say that looking for flaws in your own reasons is a skill that has to be learned, and that in most discussions it is easier to let the other person find them. That line is about the person you are arguing with. Asking someone with no stake is our own step beyond it.'] }
      ] },
    { title: 'A check you can run',
      show: [
        { kind: 'prose', text: [
          'Write down the test you used on the report or story you doubt. Then hold the one you like to the same test. If it passes only because "this one is different", the test has changed. Two sources may get different verdicts when they really differ on what the test measures: a study of 12 cities against a study of one.',
          'That check is ours, and nobody has tested it. So is this: show your reasons to someone with nothing riding on it, and have them name the weakest one. It follows from the finding that people judge fairly with no stake in the answer.',
          'Holding both sides to one test does not make the test a good one. "Throw out any study paid for by a group that wants an answer" is even-handed and can still throw out good evidence. This check finds uneven scrutiny, nothing more.'] }
      ] },
    { worked: 'w9-note' },
    { set: { items: ['a9-pool', 'a9-vape', 'a9-light'], order: 'listed' } },
    { set: { items: ['b9-soda', 'b9-bike', 'b9-nurse', 'b9-lunch', 'b9-toll'], order: 'shuffle' } }
  ],
  check: {
    items: ['c9-zone', 'c9-hours', 'c9-leaf', 'c9-vape', 'c9-stadium', 'c9-camera', 'c9-post', 'c9-road'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});

// Debating, lesson 6, restating, and asking for the reason (part 6 of the plan's ten lessons). Reshaped on the evidence (docs/research/debating.md, F5, F7, F8, read again in full on
// 2026-10-21): a large field test of listening (Santoro et al. 2025, read in full) found that closely listening to a person made them like and trust the canvasser more and feel less
// defensive and added nothing to a story's effect on their attitudes, so listening is taught for how the other person sees you and not as a way to persuade. Restating their view
// fairly is practice-based advice (Rapoport's rules as Dennett lists them; no test of restating alone was found), and the receptive wording that a written-reply test rated better
// (Yeomans et al. 2020, full text) is a rating of replies read online. Asking how a policy would work lowered rated understanding and extremity in some tests and not in all, and only
// on issues judged by what happens (Sloman and Vives 2022); street epistemology has only stories behind it (Meyer et al. 2024). The practice is two decisions, each its own question:
// what their view rests on (the lesson's own reading, said so) and whether a restatement says only what they said (the lesson's own check, said so). Plan: docs/subjects/debating/plan.md.
FC.lesson('debating', {
  id: 'l6', part: '6', title: 'Restating, and asking for the reason', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-21', change: 'First version, on the full text of a large field test of listening (it added no persuasion to a story but got liking, trust and less defensiveness), the written-reply test of receptive wording, and the tests of explaining how a policy works. The plan\'s "how sure are you?" question was dropped: its only support is one survey and a method with stories behind it. The practice reads what a view rests on and checks a restatement against what was said.' }],
  why: [
    'Your coworker Dana is against moving the team to a four-day week. "Same work in less time," she says. "Deadlines slip, and the rest of us cover for whoever is off." You could argue back. You could say her worry back to her, and then put a question about how it would work.',
    'In about fifteen minutes you will learn what listening got in a large field test, how to check that your restatement says only what they said, and when "How would that work?" has a study behind it.'
  ],
  flow: [
    { title: 'What listening got in a large field test',
      show: [
        { kind: 'prose', text: [
          'In a US field test, trained people whose job is talking with voters had 1,485 video chats with strangers who opposed in-state college tuition for undocumented immigrants. Some of them listened closely: they put follow-up questions about the person\'s view, nodded, kept eye contact and did not judge. Some also told a story about an undocumented immigrant.',
          'People who were listened to liked the listener more, felt more understood and were less defensive. But listening added nothing to the story\'s effect on their attitudes. The story changed attitudes with or without it, and five weeks later the difference was zero.',
          'The limits: one topic, one-time chats with strangers, and a story as the only way of persuading. The test did not look at whether listening helps a fact or an argument.'] }
      ] },
    { title: 'Say their view back, fairly',
      show: [
        { kind: 'prose', text: [
          'Experts on conflict advise saying the other person\'s view back so clearly and fairly that they would accept it. A well-known list of four steps for criticizing someone fairly puts it first. We found no test of saying a view back by itself, so this is advice, not a finding.',
          'A fair restatement says what they said and adds nothing. Adding looks like a motive they never gave, a stronger word than theirs ("everyone" for "most"), or a claim they did not make. That check is ours.',
          'A test of written replies points the same way on wording. People told to say what they understood ("I see your point"), to find a point of agreement, to soften claims and to avoid "no" and "wrong" were rated, by readers on the other side of the issue, as better partners and more persuasive. Those were ratings of replies read online, not changes of mind.'] }
      ] },
    { title: 'The question "How would that work?"',
      show: [
        { kind: 'prose', text: [
          'Another move is to have the person explain, step by step, how their idea would work. In some tests, people asked to explain how a policy works rated their own understanding lower and took less extreme positions. Some repeats of those tests did not work. One group of tests found the drop only for issues people judge by what happens, and not for issues they hold as a rule whatever happens.',
          'So this is a move to try, not a proven one. A different move, having people reflect on their own reasons, lowered belief on average in an online survey, but not among people with a strong belief in conspiracy theories. A popular method built on questions like these has only stories behind it.'] }
      ] },
    { title: 'What their view rests on',
      show: [
        { kind: 'prose', text: [
          'Before you put the question, check what the view rests on. Try this test: would they keep the view if the thing they fear did not happen? If not, it rests on what they think would happen, and the question has something to work on. If they would keep it, it is a line they will not cross, and the tests give no reason to expect the question to loosen it. If the dispute is a figure or a date, it is a plain fact: give the correction.',
          'Sorting a view into these three is our reading, not a finding.'] }
      ] },
    { worked: 'w6-dana' },
    { worked: 'w6-pam' },
    { set: { items: ['a6-hal', 'a6-tom', 'a6-priya'], order: 'listed' } },
    { set: { items: ['b6-lou', 'b6-jo', 'b6-sam', 'b6-maria', 'b6-ken'], order: 'shuffle' } }
  ],
  check: {
    items: ['c6-ray', 'c6-meg', 'c6-walt', 'c6-ana', 'c6-gus', 'c6-nia', 'c6-rosa', 'c6-lee'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});

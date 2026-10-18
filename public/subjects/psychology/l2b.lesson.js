// Psychology, lesson 2b, anchors and hindsight (part 2b). NOT in the owner's course: a practical addition from judgment research. The way of thinking is
// the field's: with a number, ask where your own estimate came from before you take theirs (anchoring: Tversky and Kahneman 1974; Strack and Mussweiler
// 1997; experts too: Northcraft and Neale 1987); with a past decision, ask what could be known then (hindsight: Fischhoff 1975; its close relative,
// outcome bias: Baron and Hershey 1988). The five questions are restated by what they ask; Questions 1 and 2 are settled by the kind of story, so the
// work is in 3 to 5. Anchoring is set beside its fair twin on the teaching screens; the worked story is answered question by question; the practice runs each name beside its
// twin in the same sentences, then mixes all the names with two from lesson 2; the check names eight new stories. Plan: docs/subjects/psychology/plan.md.
FC.lesson('psychology', {
  id: 'l2b', part: '2b', title: 'Anchors and hindsight', rev: 1, status: 'draft',
  history: [{ rev: 1, date: '2026-10-18', change: 'First version, a practical addition to the owner\'s course: anchoring and hindsight, each against its fair twin, and the response to each (Tversky and Kahneman 1974; Strack and Mussweiler 1997; Northcraft and Neale 1987; Fischhoff 1975; Baron and Hershey 1988).' }],
  why: [
    'A recruiter says, "We start people at $52,000," and the $75,000 you planned to name suddenly feels greedy. A friend\'s shop closes, and you say you always knew, though you cheered at the opening.',
    'In about 18 minutes: two slants, each beside its fair twin, and what to do about each. In the check, a story counts as right only when every answer is right.'
  ],
  flow: [
    { title: 'The five questions, on numbers and the past',
      show: [
        { kind: 'prose', text: [
          'The five questions from before: 1. What is going on? 2. One moment, or the same shape over and over? 3. What does it do for them? 4. What is the nearest look-alike, and what one detail separates them? 5. What would prove this read wrong?',
          'Most stories today are one person judging one number or one past event, once. For those, Questions 1 and 2 are settled, and the work is in 3 to 5.',
          'A name needs its telltale signs together. The names: anchoring and hindsight, new today; the five from before for a mind talking itself into something; "ordinary", when the facts show a normal reason; and "too little to tell", when the facts are too few to see what is going on.'] }
      ] },
    { title: 'Anchoring: the first number sticks',
      show: [
        { kind: 'prose', text: [
          'People watched a wheel stop on a random number, then estimated something unrelated. Their estimates followed the wheel: people start from the number they are handed and do not move far enough from it, partly because it brings to mind reasons that fit it (Strack and Mussweiler 1997). A listing price pulled real estate agents as much as students (Northcraft and Neale 1987).',
          'The fair twin is a fair reference price: a number backed by facts. Question 4: what backs the number? Question 5: would a different first number change your estimate?'] },
        { kind: 'pair',
          a: { kind: 'prose', text: 'A used truck is listed at $18,000. Teo thought $12,000 was fair, and offered $16,000 "to meet in the middle."' },
          b: { kind: 'prose', text: 'A used truck is listed at $18,000. Teo found four like it that sold last month for $17,500 to $18,500, and offered $17,000.' },
          compare: 'First, the listing pulled Teo from his own figure. Second, real sales back it: a fair reference price.' }
      ] },
    { title: 'Hindsight: "I knew it all along"',
      show: [
        { kind: 'prose', text: [
          'Some people were told how a historical event ended. They rated that ending far likelier than people not told, without noticing. A close relative, outcome bias, judges a decision only by how it turned out (Baron and Hershey 1988); both go under hindsight here, since the fix is the same.',
          'The fair twins: a prediction recorded beforehand, and criticism the facts of the day backed. Question 4: what could be known then?'] },
        { kind: 'pair',
          a: { kind: 'prose', text: 'The coach called a pass, the play that had worked all season. It was intercepted. "Terrible call," said Dale.' },
          b: { kind: 'prose', text: 'Before the game Dale texted, "If they pass late, it gets picked off." It was intercepted. "Terrible call," he said.' },
          compare: 'First, judged by the ending. Second, a prediction recorded beforehand.' }
      ] },
    { title: 'The telltale signs, and what to do',
      show: [
        { kind: 'prose', text: [
          ...psyRows(['anchoring', 'hindsight']),
          'What to do. Anchoring: make your own estimate from the facts before you hear theirs, and name it first when you can. Hindsight: judge by what could be known then, and write predictions down. Ordinary: nothing to fix. Too little to tell: find out more.',
          'The wrong idea: "A random number would never fool me." Experts are moved too. Write your own figure down first.'] }
      ] },
    { worked: 'w2b-salary' },
    { set: { items: [['h2b-jacket', 'h2b-limit'], ['h2b-picnic', 'h2b-forecast'], ['h2b-furnace', 'h2b-warned']], order: 'listed' } },
    { set: { items: ['h2b-sprint', 'h2b-riddle', 'h2b-flop', 'h2b-bread', 'h2b-tip', 'h2b-airport', 'h2b-flight', 'h2b-coffee'], order: 'shuffle' } }
  ],
  check: {
    items: ['k2b-listing', 'k2b-pumpkin', 'k2b-brakes', 'k2b-breach', 'k2b-hiker', 'k2b-closed', 'k2b-suv', 'k2b-office'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});

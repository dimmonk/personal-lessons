// Debating, lesson 4, character, emotion, argument (part 4 of the plan's ten lessons). Aristotle's three means of persuasion (docs/research/debating.md, F9: Rhetoric I.1 and I.2 and II.1
// to II.3, read in full): the speaker's character, shown in what the speaker says (good sense, honest character, goodwill); the hearer's frame of mind (people judge differently when
// pleased and friendly than when pained and hostile); and the argument itself (few steps, from what the hearers accept). He does not rank them, and his advice is a philosopher's
// analysis for speeches, not a tested method. The practice is one decision: what the other person's last reply puts in question (the lesson's own way of reading a reply, said so in
// the teaching), asked as one of three, as a pair when the reply is about two, and, for arguments, too long to follow, started from something they do not accept, or neither. What to say
// next is written against a model line and never scored. Plan: docs/subjects/debating/plan.md.
FC.lesson('debating', {
  id: 'l4', part: '4', title: 'Character, emotion, argument', rev: 2, status: 'draft',
  history: [{ rev: 1, date: '2026-10-21', change: 'First version, on Aristotle\'s Rhetoric (I.1, I.2, II.1 to II.3, read in full): the three means, what builds trust (good sense, honesty, goodwill, shown in what is said), how feelings change judgment and what calms or angers, and a short argument from what the hearer accepts. The practice reads what the other person\'s reply puts in question; the writing of the next line is not scored.' },
    { rev: 2, date: '2026-10-21', change: 'After the third learner review: the "neither" answer now reads "Neither: the reply is about something else", and a practice question was added in which "neither" goes with a reply that questions the speaker (and a long You-line), so "neither" no longer always comes with a feeling.' }],
  why: [
    'At a block meeting you give your neighbor Carl reasons for a $15 fee increase. He answers, "Funny, coming from someone who has lived here two years." You could give him another reason. It would not land, because his reply was not about your reasons.',
    'In about fifteen minutes you will learn Aristotle\'s three things that persuade, how to tell which one a reply is about, and what makes an argument easy to follow.'
  ],
  flow: [
    { title: 'Three things that persuade',
      show: [
        { kind: 'prose', text: [
          'About 2,300 years ago Aristotle listed three things that persuade a listener. He worked them out by thinking, not by experiment, and for speeches to crowds and courts. Using them in a talk with a neighbor is our step beyond him.',
          'Trust: whether they can trust you. "We believe good men more fully and more readily than others," he says. Feeling: how they feel right now, since people judge differently when they are pleased and friendly than when they are pained and hostile. Argument: the reasons you give, not the whole disagreement.',
          'He does not rank them. He calls the argument the substance of persuading, and says character may almost be called the most effective means. He adds a limit: do not make people believe what is wrong.'] }
      ] },
    { title: 'Trust comes from what you say',
      show: [
        { kind: 'prose', text: [
          'Aristotle names three things that make a listener trust a speaker: good sense, honest character, and goodwill toward the listener. He says this must come from what you say, not from what people think of you before you speak. So a good name from before you spoke does not do it alone.',
          'Good sense sounds like "I checked three years of numbers, and one year is missing." Honesty sounds like "That part cuts against my side." Goodwill sounds like "I want this to work for your street too." These lines are examples we built on his three.'] }
      ] },
    { title: 'Feelings change what people accept',
      show: [
        { kind: 'prose', text: [
          'Aristotle says the same thing looks different to an angry person and a friendly one. He says people grow angry when they are slighted, as when someone mocks or jeers at them. He says they grow calm toward someone who is serious when they are serious, who does not mock, and who admits a fault and is sorry.',
          'This is a philosopher\'s account of people he watched. Nobody tested it in an argument with a neighbor.'] }
      ] },
    { title: 'A short argument, from what they accept',
      show: [
        { kind: 'prose', text: [
          'Aristotle says an argument should have few steps. A fact everyone knows can be left out, since the listener adds it. A long chain is hard to follow, and an argument that begins from something people do not accept does not win them. He gives no number of steps. In the practice, two steps is fine and five or six in a row is too many.',
          'The fact must really be known. "Everyone knows output jumps 30 percent" is not a known fact if the listener does not grant it, and then it is a start they do not accept.',
          'A short one: "The drains flooded our street twice last year. The fee pays to clear them." Two steps, both things a neighbor can check or already knows.'] }
      ] },
    { title: 'Read their last reply',
      show: [
        { kind: 'prose', text: [
          'Before you answer, read their last reply and check what it is about: whether they can trust you, how they feel, or the argument. Then answer that one. Aristotle named the three. Reading a reply this way is our method, and nobody has tested it.',
          'A reply can be about two of them, and then you name both. Tone does not tell you. A calm reply can say how someone feels, an angry one can go at a single step, and a friendly one can question you.',
          'When your argument did not land, the reply may show why: too long to follow, or started from something they do not accept. Or it may be about something else, and then the argument was not the trouble.'] }
      ] },
    { worked: 'w4-carl' },
    { worked: 'w4-build' },
    { worked: 'w4-pair' },
    { set: { items: ['a4-ravi', 'a4-walt', 'a4-beth'], order: 'listed' } },
    { set: { items: ['b4-joy', 'b4-lu', 'b4-mike', 'b4-long', 'b4-start', 'b4-neither'], order: 'shuffle' } }
  ],
  check: {
    items: ['c4-trust', 'c4-feeling', 'c4-arg', 'c4-p1', 'c4-p2', 'c4-long', 'c4-start', 'c4-neither'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});

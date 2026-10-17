// Ideology, lesson 2, story, democracy, end state (part 2). From the owner's own course (Lesson 1, Questions 3 to 5; Lesson 4, the horseshoe error; Drill 1.2): the three
// questions and why each is asked (Question 4 with its six answers), with the look-alikes side by side (democratic socialist against Leninist, conservative against fascist,
// reborn against restored), then the error of judging by methods: which methods travel, and what mass mobilization separates. One passage is worked question by question; Question 3, 4 and 5 are practised in turn, then the horseshoe pair of Drill 1.2; the check asks eight
// new passages. Plan: docs/subjects/ideology/plan.md.
FC.lesson('ideology', {
  id: 'l2', part: '2', title: 'Story, democracy, end state', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-17', change: 'First version, on the owner\'s own course: Questions 3 to 5 and the horseshoe error.' }],
  why: [
    'Two movements can agree on who owns the factories and still be enemies. Three more questions find the difference.',
    'In about fifteen minutes you will learn them, and the trap of judging a movement by its rallies and its police. The check is eight passages with one to three questions each; a passage counts when every answer on it is right, and seven of eight pass.'
  ],
  flow: [
    { title: 'Question 3, what drives history',
      show: [
        { kind: 'prose', text: [
          'Question 3 is the engine of the story: what makes history move? A fight over wealth between classes. A nation\'s fall and rebirth. A struggle between races. Freedom spreading. A divine or traditional order. Or a pure people sold out by an elite. A list of jobs to do names no engine: the answer is "the words do not say".'] },
        { kind: 'pair',
          a: { kind: 'prose', text: '“The owners take what the workers make. That has always been the fight.”' },
          b: { kind: 'prose', text: '“Honest people built this country, and a gang of insiders sold it.”' },
          compare: 'Both blame a few at the top. The first says history is a fight over wealth; the second, that a pure people was betrayed, with no owners and no class.' }
      ] },
    { title: 'Question 4, elections: six answers, and "the words do not say"',
      show: [
        { kind: 'prose', text: [
          'Question 4 is what the words want done with elections and the constitution. It has six answers, and a seventh choice for words that give none: "the words do not say".',
          'Keep them and widen them: use the vote to change more, such as moving businesses into public hands. Defend them: leave elections and courts as they are, or bring back an older order. Go beyond them: a party rules for the workers. Abolish them for a leader or a movement. Keep the vote but attack the courts, the press and the civil service. Do away with the state altogether: "We will not capture it, we will dissolve it."',
          'Listen for who rules and for whom: a party "for the workers", or a leader who "is the nation\'s will".'] },
        { kind: 'pair',
          a: { kind: 'prose', text: '“The mines and mills will belong to the public. We will win the vote first, and leave voters free to turn us out.”' },
          b: { kind: 'prose', text: '“The mines and mills will belong to the public. One party will rule in the workers\' name. Elections can wait.”' },
          compare: 'The same public ownership, opposite answers to Question 4. The first keeps elections and uses them; the second puts a party in charge.' },
      ] },
    { title: 'Question 5, where it ends',
      show: [
        { kind: 'prose', text: [
          'Question 5 is where the words want things to end. Some end states are a finish line: no classes and no state. Some are a return: a reborn nation, or a restored old order. A racial order is a fixed ranking of races. Some never finish: open competition, or equal results between groups. Rebirth builds something new; restoration wants the old order exactly as it was.'] },
      ] },
    { title: 'Never judge by methods: the horseshoe error',
      show: [
        { kind: 'prose', text: [
          'One-party rule, a leader cult, secret police, censorship, repression and violence are methods that travel: parties of the left, movements of the right and plain dictators all use them. What tells fascism from a dictator who only wants quiet is its own marks, met in part 4: a leader who claims to be the nation\'s will, state bodies in place of free unions, a doctrine of purifying struggle and mass mobilization. Mobilization never tells a movement of the right from a party of the left, which mobilizes too.',
          'When the methods match, go back to Question 1 and Question 2. Naming still waits for the telltale answers.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: '“One party, one leader, rallies in every square. The mills now belong to the state, for the working class.”' },
          b: { kind: 'prose', text: '“One party, one leader, rallies in every square. The owners keep their mills but build what the state orders, for the nation.”' },
          compare: 'The methods are the same word for word. Questions 1 and 2 differ: the state owning for a class, against directed owners for the nation.' }
      ] },
    { worked: 'l2-w-rise' },
    { set: { items: ['l2-s-fall', 'l2-s-none', 'l2-s-race', 'l2-s-free', 'l2-s-design', ['l2-s-owners', 'l2-s-insiders']], order: 'shuffle' } },
    { set: { items: [['l2-d-vote', 'l2-d-party'], ['l2-d-keep', 'l2-d-leader'], 'l2-d-courts'], order: 'shuffle', mix: { from: ['l1'], share: 0.2 } } },
    { set: { items: ['l2-e-classless', 'l2-e-open', ['l2-e-newnation', 'l2-e-oldways']], order: 'shuffle', mix: { from: ['l1'], share: 0.2 } } },
    { set: { items: [['l2-h-star', 'l2-h-flag'], 'l2-h-bare'], order: 'shuffle', mix: { from: ['l1'], share: 0.2 } } }
  ],
  check: {
    items: ['l2-k-betrayed', 'l2-k-rise', 'l2-k-ballot', 'l2-k-founders', 'l2-k-fade', 'l2-k-contest', 'l2-k-farm', 'l2-k-mill'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});

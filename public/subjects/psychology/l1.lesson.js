// Psychology, lesson 1, the five questions (part 1). The way of thinking first, from the owner's own course: the five questions and why each is
// asked, then Question 1 (what is going on) and Question 2 (one moment or a lasting pattern) in depth, with the situation checked before the
// character; the one naming rule of the subject; one story worked question by question; Question 1 practised on stories with two look-alikes side by
// side, then Question 2 with the course's two denials side by side, then both on one story; the check asks eight new stories.
// Plan: docs/subjects/psychology/plan.md.
FC.lesson('psychology', {
  id: 'l1', part: '1', title: 'The five questions', rev: 2, status: 'draft',
  history: [{ rev: 1, date: '2026-10-11', change: 'First version, the pilot "What did they do?".' }, { rev: 2, date: '2026-10-18', change: 'First version, on the owner\'s own course: the five questions before any story, and the one rule for giving a name.' }],
  why: [
    'A friend says her ex is "a narcissist". A coworker calls a disagreement "gaslighting". How unpleasant it sounds will not tell you if they are right. Five questions will.',
    'In about twenty minutes you will learn the five and use the first two on real stories. In the check, a story counts as right only when both answers are right.'
  ],
  flow: [
    { title: 'Five questions, before any name',
      show: [
        { kind: 'prose', text: [
          'Put these to any story, in order. The name comes last.',
          '1. What is going on: a mind talking itself into something, a move made on someone, a lasting way someone is, or an ordinary reaction? This decides which names to look among.',
          '2. One moment, or the same shape over and over? This separates a bad day from a pattern.',
          '3. What does it do for them: ease a clash between what they did and what they believe, keep admiration coming, keep someone from leaving, get out of blame? Things that look the same can do different jobs.',
          '4. What is the nearest look-alike, and what one detail separates them? Naming the detail stops you naming by feel.',
          '5. What would prove this read wrong? If nothing could, it is a verdict, not a read.',
          'Today you practice 1 and 2. Questions 3 to 5 do their work later, when two names look alike.'] }
      ] },
    { title: 'Question 1, what is going on',
      show: [
        { kind: 'prose', text: [
          'A mind talking itself into something: reasoning toward what you want to believe. "It was on sale, so it was a good buy", about a coat she never wears. Nobody else is acted on.',
          'A move made on someone: something done to another person in one exchange, like denying a promise and blaming them for being disorganized.',
          'A lasting way someone is: the story is about how a person is with everyone, at work and at home, over years.',
          'An ordinary reaction or slip: a fair response, or a normal mistake. Not everything needs a name.',
          'A lasting way is made of many moves, so the two look alike. One exchange is a move; years of the same thing with everyone is a lasting way.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: 'At Tuesday\'s meeting, he took credit for your idea in front of the boss.' },
          b: { kind: 'prose', text: 'For eight years, at three jobs, he has taken credit for whatever his team does.' },
          compare: 'The same act. The first is one exchange, a move; the second is what he is like everywhere, for years, a lasting way.' }
      ] },
    { title: 'Question 2, one moment or a pattern: the situation first',
      show: [
        { kind: 'prose', text: [
          'Everyone gets defensive, makes excuses and wants attention sometimes. A pattern is the same shape over and over, for months or years. One bad season can explain almost anything; a shape that keeps coming back is about the person.',
          'Look at the situation before the character. When we snap, it was a hard week; when they snap, it is who they are. So look first for grief, illness, a new job, no sleep. A reaction to a hard time is not a pattern.',
          'The four answers: a reaction to a hard time; once or twice, with no pattern (the story says it is rare); over and over, for months or years; or the story does not say (one scene, nothing about other times).',
          '"You always do this", said in an argument, is a claim, not a record. Count only what the story shows.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: 'The week his father died, he snapped at a waiter over a cold coffee.' },
          b: { kind: 'prose', text: 'For twenty years he has snapped at waiters, cashiers and assistants, in every city he has lived in.' },
          compare: 'The same act. The first is a reaction to a hard time; the second comes back over and over, for years.' },
        { kind: 'pair',
          a: { kind: 'prose', text: 'Your sister forgot to call you back. She always calls back within the hour.' },
          b: { kind: 'prose', text: 'Your new neighbor did not wave back this morning.' },
          compare: 'The first says it is rare: once or twice, with no pattern. The second is one scene with nothing about other times: the story does not say.' }
      ] },
    { title: 'The one rule for giving a name',
      show: [
        { kind: 'prose', text: [
          'Later you give a name, but only when the story shows that name\'s telltale signs together, written out as each name is taught. A lasting way someone is also needs years and many people: one person or one bad season can explain almost anything. Otherwise the answer is "too little to tell": a right answer, not a dodge.',
          'Two answers that sound alike. "Ordinary": the facts in the story show a normal reason for it (stress, a fair point, a slip that was put right). "Too little to tell": the facts are too few to see what is going on at all, so you find out more before naming anything.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: 'At a party, a man you just met talked about himself for twenty minutes.' },
          b: { kind: 'prose', text: 'For twenty years, with everyone, he has turned every talk to himself and gone cold on anyone who outshines him.' },
          compare: 'The first is too little to tell: one evening, one sign. The second shows signs together, for years, with everyone: now a name can be tested, once you know the names.' },
        { kind: 'prose', text: [
          'How much you dislike someone never counts. "Toxic", "narc" and "sociopath" are insults, not names. Names here are guesses to test, never a diagnosis of anyone, yourself included.'] }
      ] },
    { worked: 'w1-genius' },
    { set: { items: ['q1-swore', 'q1-deadline', 'q1-father', 'q1-reviews', ['q1-degree', 'q1-blame'], ['q1-dinner', 'q1-cousin']], order: 'shuffle' } },
    { set: { items: ['q2-surgery', 'q2-teacher', ['q2-late', 'q2-unsaid'], ['q2-deny-stress', 'q2-deny-decade']], order: 'shuffle' } },
    { set: { items: ['b-interrupt', 'b-funeral', 'b-diet', 'b-promise'], order: 'shuffle' } }
  ],
  check: {
    items: ['k-boss', 'k-move', 'k-phone', 'k-friend', 'k-text', 'k-bills', 'k-chef', 'k-newjob'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});

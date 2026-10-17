// Ideology, lesson 5b, today's two (part 5b). The two composite formations of the owner's course, each with its five answers: national populism (told from fascism by Question 4
// and by four absences) and identity-egalitarianism (told from Nazism by the direction check, from Marxism by ownership), then the thin populism that names nothing alone. One speech
// is worked question by question, then the look-alikes in pairs; the check names eight new passages. Plan: docs/subjects/ideology/plan.md.
FC.lesson('ideology', {
  id: 'l5b', part: '5b', title: 'Today\'s two', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-17', change: 'First version, split from the look-alikes lesson: national populism and identity-egalitarianism, each with its five answers, the two most often misnamed.' }],
  why: [
    'Two movements are argued about most today, and mislabeled most: a nation-first populism, and a politics of fixing unequal results between groups.',
    'In about twelve minutes you will learn each one\'s five answers, and tell the first from fascism and the second from Nazism.'
  ],
  flow: [
    { title: 'National populism, with its five answers',
      show: [
        { kind: 'prose', text: [
          'National populism is a thin populism fastened to a national host. Question 1: private owners, directed toward national goals with tariffs and the screening of foreign buyers (the mild end of "directed", which fascism also uses). Question 2: the real people and the nation against a cosmopolitan elite ("cosmopolitan" and "globalists" are the speaker\'s words for an elite said to care more about the world or foreign money than about home). Question 3: the nation was sold out from above and outside. Question 4: it works inside elections but attacks the courts, the press and the civil service as unrepresentative, without abolishing the vote. Question 5: a sovereign, united nation, restored.',
          'It lacks four things fascism has: a rebirth myth, a leader who replaces elections, a marching mass movement, and a cult of purifying violence. Directed owners do not separate the two; these four, and the vote, do.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: '“The establishment sold us out. Vote for us, and vote us out if we fail.”' },
          b: { kind: 'prose', text: '“Parliament is a stage. We do not want votes. The nation will be reborn.”' },
          compare: 'Both rage at the elite. Question 4 splits them: the first keeps the vote.' }
      ] },
    { title: 'Identity-egalitarianism, with its five answers',
      show: [
        { kind: 'prose', text: [
          'Question 1: markets largely accepted. Question 2: identity groups such as race and gender, in the egalitarian direction, the ranking unjust and to be undone. Question 3: neutral-looking rules keep old disadvantage. Question 4: keep elections and widen them. Question 5: equal outcomes between groups, with no fixed end.',
          'It is not Marxism: class and ownership are not its root. It is not classical liberalism: it says equal rules are not enough. It is not Nazism, which calls the rank natural. Listen for structural, systemic, equity. Scholars dispute whether it grew from the Marxist tradition or on its own; the questions classify it either way.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: '“Barriers rooted in race keep producing unequal outcomes. Find them and tear them down.”' },
          b: { kind: 'prose', text: '“Each race has its rightful rank. Keep the racial order.”' },
          compare: 'Both are about race. The first calls the ranking unjust and to be undone; the second, natural and to be kept.' }
      ] },
    { title: 'Populism alone names nothing, and the two rows',
      show: [
        { kind: 'prose', text: [
          'The people against an elite, with nothing more, is too little to tell. The host shows in the nation, the owners and the vote.',
          ...ideoRows(['natpop', 'idegal'])] }
      ] },
    { worked: 'l5b-w-natpop' },
    { set: { items: [['l5b-natpop-1', 'l5b-fascism-1'], ['l5b-natpop-2', 'l5b-fascism-2']], order: 'shuffle' } },
    { set: { items: [['l5b-thin', 'l5b-host']], order: 'shuffle', mix: { from: ['l1', 'l2', 'l3', 'l4', 'l5'], share: 0.2 } } },
    { set: { items: [['l5b-idegal-1', 'l5b-nazism-1'], ['l5b-idegal-2', 'l5b-class-gap']], order: 'shuffle', mix: { from: ['l1', 'l2', 'l3', 'l4', 'l5'], share: 0.2 } } }
  ],
  check: {
    items: ['l5b-k-natpop', 'l5b-k-natpop2', 'l5b-k-fascism', 'l5b-k-idegal', 'l5b-k-idegal2', 'l5b-k-nazism', 'l5b-k-thin', 'l5b-k-marx'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});

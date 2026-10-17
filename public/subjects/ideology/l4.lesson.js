// Ideology, lesson 4, fascism and Nazism (part 4), from the owner's Lesson 3 (Fascism). The way of thinking first: the working definition, the cluster of marks
// and the marks against the methods any dictatorship uses (mobilization separates fascism from a quiet dictator, never from Leninism), then fascism told from Nazism and from reaction,
// conservative from reactionary, and the "Nazis were socialists" claim settled by Question 1 and Question 2. One whole passage worked question by question; the marks against
// methods (the course's Drill 3.1); the look-alikes in pairs; the name trap with the course's Drill 3.2; the check names six passages and sorts two features.
// Plan: docs/subjects/ideology/plan.md.
FC.lesson('ideology', {
  id: 'l4', part: '4', title: 'Fascism and Nazism', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-17', change: 'First version, on the owner\'s own course: the working definition, the cluster of marks, the four things fascism is told from, and the claim that the Nazis were socialists.' }],
  why: [
    'Fascism is the most abused word on the list. It is thrown at anyone harsh, and it also fits some things exactly.',
    'In about fourteen minutes you will learn what it means, the marks to look for together, and what it is told apart from: Nazism, an ordinary dictatorship, reaction and conservatism.'
  ],
  flow: [
    { title: 'What fascism is, and the cluster of marks',
      show: [
        { kind: 'prose', text: [
          'Fascism is a mass movement against liberals and against Marxists. Its core story: the nation has decayed or been humiliated, and will be reborn through unity, discipline and often violence. A leader is said to be the people\'s will, and each person serves the nation as one body.',
          'No one mark decides, so look for several together:',
          '1. A lost golden age and a nation to be reborn.',
          '2. An enemy both weak and about to win.',
          '3. Praise of action and violence.',
          '4. A leader who is the people\'s will, with elections for show.',
          '5. Mass mobilization.',
          '6. Class struggle thrown out for national unity.',
          '7. Corporatism: employers and workers organized into bodies the state recognizes. Its strong form, the state directing owners and ending free unions, is fascism\'s (national populism may too).',
          '8. War as proof of strength.',
          'It is a family resemblance, not a checklist.'] }
      ] },
    { title: 'Marks and methods: what any dictatorship does',
      show: [
        { kind: 'prose', text: [
          'A plain dictator wants power and quiet. Censorship, banned parties, torture, repression and a bare leader cult are methods any dictatorship uses.',
          'Fascism\'s own marks separate it from that: a leader who claims to BE the nation\'s will, so parliaments are theater; compulsory state bodies replacing free unions while owners keep their firms (corporatism); mass mobilization, such as a uniformed youth movement; and a doctrine of purifying struggle.',
          'Mobilization never separates fascism from Leninism, which mobilizes too. Violence alone is a method; violence praised as purifying the nation is a mark.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: '“Stay home, stay quiet, and the army will keep order.”' },
          b: { kind: 'prose', text: '“Every child into the youth movement, to serve the reborn nation.”' },
          compare: 'The first wants quiet, as any dictator might. The second demands that everyone join in: a mark of fascism.' }
      ] },
    { title: 'Fascism, Nazism, reaction and conservatism',
      show: [
        { kind: 'prose', text: [
          'Nazism is fascism with biological race, a natural rank, in place of the nation-state as the unit, with hatred of Jews at its center and killing whole peoples as policy.',
          'A reactionary wants back an old order that is gone. A conservative keeps what still stands and changes it slowly. A fascist wants something new, made through national rebirth, and will smash the old elites.',
          ...ideoRows(['fascism', 'nazism', 'conservative', 'reactionary'])] },
        { kind: 'pair',
          a: { kind: 'prose', text: '“The crown and the church must return. We seek restoration, not revolution.”' },
          b: { kind: 'prose', text: '“Sweep the old lords away. We will forge a new people out of the ruin.”' },
          compare: 'The first brings back the old order: reaction. The second breaks it to make something new: fascism.' }
      ] },
    { title: '"The Nazis were socialists": Question 1 and Question 2 settle it',
      show: [
        { kind: 'prose', text: 'Some say "The Nazis were socialists" because the party\'s name had "Socialist" in it. That claim is wrong, and the questions show it. Question 1: ownership stayed private, and the regime directed private industry, banned free unions and destroyed workers\' parties. Question 2: the unit was race, built against class, and Marxism was the declared enemy. A party\'s name is marketing; the answers decide.' }
      ] },
    { worked: 'w4-rebirth' },
    { set: { items: [['l4-m-press', 'l4-m-youth'], ['l4-m-ban', 'l4-m-purify'], ['l4-m-torture', 'l4-m-labor'], 'l4-m-will'], order: 'shuffle' } },
    { set: { items: [['l4-n-reborn', 'l4-n-blood'], ['l4-r-restore', 'l4-r-new']], order: 'listed', mix: { from: ['l1', 'l2', 'l3'], share: 0.2 } } },
    { set: { items: [['l4-c-keep', 'l4-c-back'], ['l4-s-name', 'l4-s-drill'], 'l4-p-soil'], order: 'listed', mix: { from: ['l1', 'l2', 'l3'], share: 0.2 } } }
  ],
  check: {
    items: ['l4-k-vote', 'l4-k-cadets', 'l4-k-race', 'l4-k-front', 'l4-k-leader', 'l4-k-heirs', 'l4-k-oldorder', 'l4-k-quiet'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});

// Ideology, lesson 1, the five questions (part 1). The way of thinking first, from the owner's own course: the five questions and why each is
// asked, then Question 1 and Question 2 in depth (the fourth answer to Question 1 explained, and the direction check for race); the one naming rule of the
// subject with the telltale answers of the families met so far; one case worked question by question; Question 2 practised on quotes with the two race
// passages side by side, then Question 1 with the welfare passages that change no owner, then both on one passage; the check asks eight new passages.
// Plan: docs/subjects/ideology/plan.md.
FC.lesson('ideology', {
  id: 'l1', part: '1', title: 'The five questions', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-17', change: 'First version, on the owner\'s own course: the five questions before any passage, and the one rule for naming a family.' }],
  why: [
    'Someone calls a plan "socialist", or a movement "fascist". Tone will not tell you if they are right. Five questions will.',
    'In about fifteen minutes you will learn the five, use two on real quotes, and try the rule for naming an ideology. In the check, a passage with two questions counts as right only when both answers are right.'
  ],
  flow: [
    { title: 'Five questions place almost any ideology',
      show: [
        { kind: 'prose', text: [
          'Put these to any passage, in order. The name comes last.',
          '1. Who owns, or should own, the businesses and farms: private owners, the state, the workers, or private owners directed by the state?',
          '2. Who is the story about: a class, the nation, a race or identity group, the individual, tradition or faith, or the people against an elite?',
          '3. What drives history: a fight between classes, a nation falling and being reborn, freedom spreading, and so on.',
          '4. What does it want done with elections: keep them, go beyond them, abolish them, or defend them?',
          '5. Where should it all end: a classless society, a reborn nation, a restored old order, or never?'] }
      ] },
    { title: 'Question 1, who owns: ownership, not taxes',
      show: [
        { kind: 'prose', text: [
          'Question 1 is who would own the factories, farms, banks and railways. Read for "owned by", "taken into", "handed to", "stay private". Taxes, benefits and rules do not change the owner: taxing banks to pay for school meals leaves them private. If the words never say who owns, the answer is "the words do not say".',
          'Private owners, directed by the state, is the answer most often missed. The owners keep their firms, but the state steers what they make toward national goals: at the mild end with tariffs (taxes on foreign goods), help for chosen industries and screening of foreign buyers; at the strong end with orders on what to make and charge, and strikes banned.',
          'Fascism and national populism both do this, so it names neither alone. Questions 3 and 4 split them.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: '“The bosses keep their factories and decide what to make and what to charge.”' },
          b: { kind: 'prose', text: '“The bosses keep their factories, but the state tells each one what to make and what to charge.”' },
          compare: 'The factories stay private in both. In the first the owners decide; in the second the state steers them.' }
      ] },
    { title: 'Question 2, who the story is about, and the direction check',
      show: [
        { kind: 'prose', text: [
          'One answer points; it does not name. Class points toward the Marxist family, the nation toward nationalism and fascism, the individual toward classical liberalism. If no actor is named, the answer is "the words do not say".',
          'Race and identity need one more check, the direction. A rank called natural and to be kept is Nazism. A rank called unjust and to be undone is identity-egalitarianism. Same noun, opposite families. The mirror mistake is as bad: a natural rank is not just old-fashioned conservatism.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: '“Nature gave every race a fixed station, high or low.”' },
          b: { kind: 'prose', text: '“Some rules look neutral and still keep one group down.”' },
          compare: 'Both are about race. The first calls the rank natural; the second, unjust.' }
      ] },
    { title: 'The one rule for naming: only on the telltale answers',
      show: [
        { kind: 'prose', text: [
          'In the end you name a family, but only when the passage shows its telltale answers together. Otherwise say "too little to tell" and what you would need to see: a right answer, not a way out. A party\'s name or a harsh tone never counts.',
          'The families met so far:',
          ...ideoRows(['marxism', 'nazism', 'idegal', 'liberal', 'fascism'])] }
      ] },
    { worked: 'w1-manifesto' },
    { set: { items: ['u-blood', 'u-reborn', 'u-sold-out', 'u-fathers', ['u-rank-keep', 'u-rank-undo']], order: 'shuffle' } },
    { set: { items: ['o-plan', 'o-councils', 'o-directed', ['o-childcare', 'o-right']], order: 'shuffle' } },
    { set: { items: ['b-steel', 'b-free', 'b-industry', 'b-elite'], order: 'shuffle' } }
  ],
  check: {
    items: ['k-farms', 'k-shop', 'k-coop', 'k-soil', 'k-hiring', 'k-tax', 'k-throne', 'k-plants'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});

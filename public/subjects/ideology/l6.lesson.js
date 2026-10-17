// Ideology, lesson 6, the mixed drill (part 6). The order (Questions 1 and 2 first) with the whole table of telltale answers, the four checks (direction, methods, names, too little to
// tell), and the owner's Lesson 5 passages: one worked, six answered with Question 1 and Question 2 first, one alone, each with the course's falsifier shown after the answer. The
// check is twelve new passages, family only, with the course's hard discriminations, ten right to pass. The last screen is the course's honest caveats. Plan: docs/subjects/ideology/plan.md.
FC.lesson('ideology', {
  id: 'l6', part: '6', title: 'The mixed drill', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-17', change: 'First version, on the owner\'s own course: Lesson 5 and "Scoring your own reasoning", with the full table of telltale answers and the honest caveats.' }],
  why: [
    'Out in the world a quote does not come labeled with the question it needs. You start with the right question, pick the family, and sometimes say the words are not enough.',
    'In about fourteen minutes you will hold the whole table, practice on mixed passages, then try twelve new ones on your own. The check has one question on each of the twelve, the family, and ten right pass.'
  ],
  flow: [
    { title: 'The order, and the whole table',
      show: [
        { kind: 'prose', text: [
          'Put the five questions in order: who owns, who the story is about, what drives history, what to do with elections, where it ends. Questions 1 and 2 sort most passages fastest; the rest settle the close calls. Then name a family only on its telltale answers, or say too little to tell:',
          ...ideoRows(['marxism', 'leninism', 'demsoc', 'socdem', 'anarchism', 'marketsoc', 'fascism', 'nazism', 'liberal', 'conservative', 'reactionary', 'natpop', 'idegal'])] }
      ] },
    { title: 'Three checks before you name',
      show: [
        { kind: 'prose', text: [
          'Race or identity: is the rank natural and to be kept, or unjust and to be undone? Methods are not content: a leader cult, secret police, censorship and violence appear in every dictatorship, and mobilization separates fascism from a quiet dictator, never from Leninism. Names are marketing: check the name against the answers. A right label reached by tone is luck, so check your reasons against the telltale answers too.'] }
      ] },
    { title: 'Too little to tell: say it, and say what you would need',
      show: [
        { kind: 'prose', text: 'When the passage does not show a family\'s telltale answers, say so and name what would settle it. Do not use it as a way out: when the answers are there, name the family.' },
        { kind: 'pair',
          a: { kind: 'prose', text: '“Ordinary families are tired of being talked down to by those in charge. We stand with them.”' },
          b: { kind: 'prose', text: '“Ordinary families are tired of being talked down to by those in charge. Our nation comes first: foreign buyers will be screened, and the voters will decide whether we stay.”' },
          compare: 'The first gives a people and an elite and nothing more: too little to tell. The second adds the nation, directed owners and the vote, so it can be placed.' }
      ] },
    { worked: 'w6-front' },
    { set: { items: [['l6-p1', 'l6-p5'], ['l6-p2', 'l6-p6'], 'l6-p4'], order: 'shuffle' } },
    { set: { items: ['l6-p11', 'l6-p12', 'l6-p9'], order: 'shuffle', mix: { from: ['l1', 'l2', 'l3', 'l4', 'l5', 'l5b'], share: 0.2 } } },
    { title: 'What this cannot do',
      show: [
        { kind: 'prose', text: [
          'These words are also used as weapons: people throw "fascist" and "socialist" to condemn, not to describe. Describing and condemning are different jobs.',
          'Fascism\'s definition is contested. Some scholars stress the rebirth myth, some the stages, some a list of family traits, and some limit the word to interwar Europe. Whether identity-egalitarianism grew from the Marxist tradition or on its own is disputed too.',
          'Applying all this to living parties is contested ground. The questions tell you what to look for, not a verdict. Non-Western, religious and expert-rule systems are only lightly covered.'] }
      ] }
  ],
  check: {
    items: ['k6-name', 'k6-method', 'k6-altar', 'k6-sector', 'k6-proud', 'k6-labor', 'k6-floor', 'k6-valley', 'k6-thin', 'k6-ballot', 'k6-first', 'k6-audit'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 10 } }]
  }
});

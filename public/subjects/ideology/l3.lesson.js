// Ideology, lesson 3, the socialist family (part 3). From the owner's own course, Lesson 2: the core test (who owns, not who taxes), then Question 4 (elections),
// then the six branches told apart by their answers to Question 1 and Question 4, in look-alike pairs, then the platforms that are not socialist at all.
// One platform is worked question by question; the practice runs Marxism against Marxism–Leninism, democratic socialism against social democracy,
// anarchism against Leninism and against market socialism, and the free-market platforms; the check names eight new platforms. Plan: docs/subjects/ideology/plan.md.
FC.lesson('ideology', {
  id: 'l3', part: '3', title: 'The socialist family', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-17', change: 'First version, on the owner\'s own course (Lesson 2 and Drills 2.1 and 2.2): ownership, not taxes; the six branches by who owns and what they want done with elections.' }],
  why: [
    'The word "socialist" gets thrown at almost any plan with taxes in it. Most such plans are not.',
    'In about fourteen minutes you will learn one test, who owns the businesses, and one more question, about elections. Together they tell six branches apart.'
  ],
  flow: [
    { title: 'Socialism means who owns, not who taxes',
      show: [
        { kind: 'prose', text: [
          'Socialism means the community owns the businesses and farms, as the state or as the workers. If the owners stay private and the government taxes them to pay for services, that is social democracy, a welfare state, not socialism. "The government does a thing, so it is socialist" is the common mistake: every state builds roads. Check Question 1.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: '“We will tax the banks and pay for free childcare. The banks stay private.”' },
          b: { kind: 'prose', text: '“The banks will be taken into public ownership.”' },
          compare: 'Only the second changes who owns.' }
      ] },
    { title: 'Marxism, and Marxism–Leninism: the class or the party',
      show: [
        { kind: 'prose', text: [
          'Marxism explains more than it plans. Workers make more value than they are paid, the owner keeps the rest, and the system breeds its own crises. The end is no classes and no state. Marxism–Leninism adds a plan to seize and hold power: a small disciplined party rules for the workers, and the state takes the industries.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: '“One class lives on what the other produces.”' },
          b: { kind: 'prose', text: '“One party will govern for the workers until the new society is ready.”' },
          compare: 'The first explains how one class lives on another. In the second the party acts.' }
      ] },
    { title: 'Democratic socialism, and social democracy',
      show: [
        { kind: 'prose', text: [
          'Democratic socialism is real public ownership of the main industries, won through elections and kept inside the rules. Social democracy keeps private owners and limits them with welfare, workers\' rights and taxes: never who owns the factory. Many call social democracy "socialism"; this course uses the ownership test.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: '“We keep private firms. We tax the rich to pay for free college and higher pensions.”' },
          b: { kind: 'prose', text: '“We will win the election and put the main industries into public ownership.”' },
          compare: 'Both use elections. Question 1 splits them.' }
      ] },
    { title: 'Anarchism, and market socialism',
      show: [
        { kind: 'prose', text: [
          'Anarchism is socialist economics with the state as an enemy too: workers\' councils or unions own and run everything, with no state or party above them (through unions it is called syndicalism). Market socialism puts firms in social hands, owned by their own workers or by society, then lets them compete at real prices. Socially owned firms competing in markets are market socialism, not democratic socialism. Democratic socialism is public ownership of the main industries, won through elections.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: '“Councils of workers will run the mills. No parliament, no minister and no party will give them orders.”' },
          b: { kind: 'prose', text: '“Each firm belongs to its workers. Firms still compete for customers at market prices.”' },
          compare: 'Both give the firms to the workers. Only the first throws out the state.' }
      ] },
    { title: 'The telltale answers of this family, and what is not socialist',
      show: [
        { kind: 'prose', text: [
          ...ideoRows(['marxism', 'leninism', 'demsoc', 'socdem', 'anarchism', 'marketsoc']),
          'Not socialist: private owners, with fewer rules and lower taxes. Marxism needs only the class story, no plan. If the words never show a branch\'s answers, say too little to tell.'] }
      ] },
    { worked: 'l3-w-grid' },
    { set: { items: [['l3-c-tax', 'l3-c-buy'], 'l3-c-right'], order: 'listed' } },
    { set: { items: [['l3-m-wages', 'l3-m-party']], order: 'listed' } },
    { set: { items: [['l3-d-rate', 'l3-d-vote'], ['l3-d-floor', 'l3-d-grid']], order: 'listed', mix: { from: ['l1', 'l2'], share: 0.2 } } },
    { set: { items: [['l3-a-council', 'l3-a-vanguard'], ['l3-a-docks', 'l3-a-market']], order: 'listed' } },
    { set: { items: ['l3-n-drill', ['l3-n-cut', 'l3-n-floor']], order: 'listed', mix: { from: ['l1', 'l2'], share: 0.2 } } }
  ],
  check: {
    items: ['l3-k-socdem', 'l3-k-demsoc', 'l3-k-lenin', 'l3-k-anarchy', 'l3-k-marx', 'l3-k-market', 'l3-k-liberal', 'l3-k-state'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});

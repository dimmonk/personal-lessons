// Ideology, lesson 5, look-alikes and false friends (part 5). The false friends of the owner's course first, kept to what changes an answer: words for how power is
// used, words with two meanings, and the liberal, progressive and conservative words; then what a text about fair treatment wants the government to do (a shortcut, said so).
// One case is worked question by question, then Drill 4.1 recast as claims to test, the words with two meanings in pairs, the liberal and fair-treatment passages. A word or claim
// that shows no family's telltale answers is "too little to tell". National populism and identity-egalitarianism, "today's two", are the next lesson. The check names eight new passages.
// Plan: docs/subjects/ideology/plan.md.
FC.lesson('ideology', {
  id: 'l5', part: '5', title: 'Look-alikes and false friends', rev: 1, status: 'live',
  history: [{ rev: 1, date: '2026-10-17', change: 'First version, on the owner\'s own course: the false friends and the fair-treatment question before any passage.' }],
  why: [
    'Some words sound like ideologies but answer none of the five questions: "authoritarian", "statist", "liberal".',
    'In about twelve minutes you will sort these words, and learn that a claim or a word that shows no family\'s telltale answers earns "too little to tell".'
  ],
  flow: [
    { title: 'Words for how power is used decide nothing',
      show: [
        { kind: 'prose', text: [
          'Authoritarianism is how power is held: in few hands, with no one able to remove them. Almost any ideology can do it.',
          'Totalitarianism is how far the state reaches into life: a degree of control, not a content.',
          'Statism is only a large state, not socialism.',
          'Technocracy is rule by experts: it says who decides, not who owns.',
          'Populism, the pure people against a corrupt elite, is too thin to name alone; it needs a host.',
          'None of them answers Question 1 or Question 2, so none of them names a family.'] }
      ] },
    { title: 'Words with two meanings',
      show: [
        { kind: 'prose', text: [
          'Communism is either Marx\'s end state with no classes and no state (Marxism), or the 20th-century party-states (Marxism–Leninism). Say which.',
          'Corporatism does not mean companies ruling. It means employers and workers organized into bodies the state recognizes. The strong form has the state directing the owners and free unions ended, which fascism does and national populism may too; some Catholic and social-democratic systems keep free unions. Even the strong form is one mark, not a name. Nationalism is putting the nation first. Fascism needs far more.'] },
        { kind: 'pair',
          a: { kind: 'prose', text: '“Each trade answers to a state board that tells it what to produce. Unions may not strike.”' },
          b: { kind: 'prose', text: '“Bosses and union leaders sit down once a year to agree pay, as the law allows, and strikes stay legal.”' },
          compare: 'Both are recognized bodies. Only the first has the state directing the owners.' }
      ] },
    { title: 'Liberal, progressive, conservative',
      show: [
        { kind: 'prose', text: [
          'In American speech "liberal" often means taxes paying for services with business left private, which sorts with social democracy. Answer the questions, not the word. Progressivism is reform toward more equality through laws, with firms private: not socialism, and not technocracy.',
          ...ideoRows(['liberal', 'conservative'])] }
      ] },
    { title: 'Fair treatment: a shortcut with three answers',
      show: [
        { kind: 'prose', text: [
          'When a text is about fairness, find what it wants the government to do. Stay out, with the same rules for all: classical liberalism. Pay for a fair start, with taxes for schools, childcare and health care, then leave the market alone: social democracy. Change a rule that looks the same for everyone but gives one group worse results: identity-egalitarianism.',
          'It is a shortcut, and each answer has relatives, so the five questions still decide.'] }
      ] },
    { worked: 'w5-sweden' },
    { set: { items: ['l5-sweden', 'l5-health', 'l5-militants', 'l5-busy-state', 'l5-borders'], order: 'shuffle' } },
    { set: { items: [['l5-comm-end', 'l5-comm-state'], ['l5-corp-state', 'l5-corp-free'], 'l5-techno', 'l5-auth', 'l5-total'], order: 'shuffle', mix: { from: ['l1', 'l2', 'l3', 'l4'], share: 0.2 } } },
    { set: { items: [['l5-liberal-classic', 'l5-liberal-us'], 'l5-conserv', 'l5-fair-out', 'l5-fair-start', 'l5-fair-rule'], order: 'shuffle', mix: { from: ['l1', 'l2', 'l3', 'l4'], share: 0.2 } } }
  ],
  check: {
    items: ['l5-k-us-liberal', 'l5-k-stay-out', 'l5-k-conserv', 'l5-k-fair-rule', 'l5-k-reach', 'l5-k-techno', 'l5-k-corp', 'l5-k-comm'],
    feedback: 'at-end', order: 'shuffle',
    pass: [{ right: { min: 7 } }]
  }
});

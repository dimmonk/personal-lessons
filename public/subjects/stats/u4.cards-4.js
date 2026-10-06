// Statistical Claims, Unit Four, part two (second half): the look-alike pair between a new tool and more looking, the question, and its check.
// The other two pairs between the three names (people working on the figure beside each of the others) are taught on the question card.

FC.cards('stats', 'u4', [

  { id: 'look-defshift-detection', kind: 'lookalike', ledger: 'defshift~detection',
    link: 'The second name and the third can be taken for each other. In both, a count of what was found rose and the people did not change. This card shows what separates them.',
    cases: ['meas-lab-analyzer', 'meas-lab-more'],
    instruction: 'Both claims come from the same lab and give the same figure: vitamin D deficiency "tripled", from 20 people found to 60. Compare one thing: whether what counts as a find was decided by a different tool, or by the same tool used on more people.',
    prompt: { kind: 'which', option: 'M1.looked', answer: 'meas-lab-more' },
    difference: [
      'In Case A the lab tested 1,000 people in each year and replaced its analyzer in March with a new one that reads about 4 points lower on the same blood. A person is called deficient below 20, so a reading 4 points lower puts more people under the line. The 1,000 tested last year gave 20 found; the 1,000 tested this year gave 60. What counts as a find changed with the tool. The second answer is {a:M1.newrule}, and the case is {o:defshift}.',
      'In Case B the lab used the same analyzer and the same line of 20 for five years, and tested 3,000 people this year instead of 1,000. That is 2 found in every 100 tested in both years: 20 in 1,000 and 60 in 3,000. The tool and the line are the same, and there was more testing. The second answer is {a:M1.looked}, and the case is {o:detection}.'
    ] },

  /* ---------- The key's question ---------- */
  { id: 'q-measure', kind: 'question', step: 'M1',
    h: 'The question you have been answering all along',
    link: 'Since the delivery bonus you have seen the question at the foot of each new name, with one answer under it. This card puts the question and its three answers in one place, and says why it is asked.',
    decides: [
      'The question asks what moved the figure. Each answer sends you to a different check, and a check made for one answer is no use for another. For {o:proxy}, you look for a count that nobody is judged on. For {o:defshift}, you look for the figure counted both ways in the same period. For {o:detection}, you divide the number found by the number looked at.'
    ],
    how: [
      'Read the whole claim, the last sentence too, because the sentence that says how the figure is made is often at the end. Then look for the words that fit each answer in turn, always in this order: who is paid or ranked on the figure and also makes it; what changed in how it is counted; how much looking there was at each end.',
      'First, look for {o:proxy}: {needs:proxy}. Second, look for {o:defshift}: {needs:defshift}. Third, look for {o:detection}: {needs:detection}.'
    ],
    whenBoth: 'Sometimes two answers seem to fit. Each pair below has one question that separates it.' },

  { id: 'check-measure', kind: 'check', after: 'M1',
    case: 'meas-step-counter',
    ask: { type: 'step', step: 'M1' } }
]);

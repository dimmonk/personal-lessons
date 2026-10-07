// Statistical Claims, Unit Four, part two (second half): the look-alike pair between a new tool and more looking, the question, and its check.
// The other two pairs between the three names (people working on the figure beside each of the others) are taught on the question card.

FC.cards('stats', 'u4', [

  { id: 'look-defshift-detection', kind: 'lookalike', ledger: 'defshift~detection',
    link: 'These two get mixed up because in both a count of what was found went up, and the people looked at may be the same. This card shows what separates them.',
    cases: ['meas-lab-analyzer', 'meas-lab-more'],
    instruction: 'Both stories come from the same lab and give the same figure: vitamin D deficiency “tripled”, from 20 people found to 60. Compare one thing: did a different tool decide what counts as a find, or the same tool used on more people?',
    prompt: { kind: 'which', option: 'M1.looked', answer: 'meas-lab-more' },
    difference: [
      'In Story A the lab tested 1,000 people each year, but this year’s new analyzer reads about 4 points lower on the same blood. A person is called deficient below 20, so the lower reading puts more people under the line: 20 found, then 60. The tool changed what counts as a find. That is {o:defshift}.',
      'In Story B the lab used the same analyzer and the same line for five years, but tested 3,000 people instead of 1,000. That is 2 found in every 100 tested both years: 20 in 1,000, then 60 in 3,000. Same tool, more testing. That is {o:detection}.'
    ] },

  /* ---------- The key's question ---------- */
  { id: 'q-measure', kind: 'question', step: 'M1',
    h: 'The question you have been answering all along',
    link: 'Since the delivery bonus you have asked the same question after each new name. Here it is with its three answers in one place.',
    decides: [
      'So the check is different each time, and a check for one is no use for another. For {o:proxy}, look for a count that nobody is judged on. For {o:defshift}, look for the figure counted both ways in the same period. For {o:detection}, divide the number found by the number looked at.'
    ],
    how: [
      { do: 'Read the whole claim, the last sentence too.', why: 'The sentence that says how the figure is made is often at the end.' },
      { do: 'First look for {o:proxy}: someone paid or ranked on the figure who also makes it.', why: 'If the people who make the figure gain from it, doubt it first.' },
      { do: 'Next look for {o:defshift}: a definition or a tool that changed on a date.', why: 'A change on a date can move the figure on its own.' },
      { do: 'Then look for {o:detection}: more tests, more cameras or an easier way to report.', why: 'More looking finds more, even when nothing more is happening.' },
      { do: 'None of the three? Believe the move: {o:meas_ok}.', why: 'Then only the real thing could have moved the figure.' },
      { do: 'Find the exact words that show your answer.', why: 'If you cannot find them, you do not have an answer yet.' }
    ],
    whenBoth: 'Some claims look like two of these at once, such as a new phone system and a bonus on short calls. Each pair below has one question that separates it.' },

  { id: 'check-measure', kind: 'check', after: 'M1',
    case: 'meas-step-counter',
    ask: { type: 'step', step: 'M1' } }
]);

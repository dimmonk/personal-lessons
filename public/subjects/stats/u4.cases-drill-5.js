// Statistical Claims, Unit Four: the claims of the last stage. A claim is something a person might say that uses a name wrongly, or reasons in one of the unit's ways.
// The fault is shown after the learner commits, and the claim put right is always the last thing shown.

FC.cases('stats', 'u4', [

  { id: 'm4-claim-demo', use: 'claim',
    text: '"Every agent hit the 95% target this month, so our service has never been better."',
    ask: { type: 'option', step: 'M1', answer: 'pushed' },
    fault: 'The agents are paid on the figure, and the claim does not say who counts it. If they record it themselves, they can reach 95% without any better service.',
    corrected: 'Every agent hit the 95% target this month. That is {o:proxy}: a figure the agents are paid on and could raise without better service. To say the service has improved, I would need a count that nobody is paid on, such as customers’ own reports of whether their problem was solved.' },

  { id: 'm4-claim-ufo', use: 'claim',
    text: '"Sightings of strange lights in the sky have tripled since the film came out. Something is going on up there."',
    ask: { type: 'missing', name: 'detection' },
    fault: 'A film makes more people look up, and more people know where to report, so the number of reports rises with the looking. That says nothing about what happened in the sky.',
    corrected: 'Sightings of strange lights in the sky have tripled since the film came out. That is {o:detection}: a count of what people found, and many more people are looking. To say there are more lights, I would need a count made with the same amount of looking at both ends.' },

  { id: 'm4-claim-complaints', use: 'claim',
    text: '"Complaints fell from 600 to 400 once the bank started logging only the written ones. Customers are clearly happier."',
    ask: { type: 'option', step: 'M1', answer: 'newrule' },
    fault: 'The claim itself says what changed: the bank counted every complaint before and counts only written ones now. Of last year’s 600, 250 were phone and in-person complaints that this year’s count would not log.',
    corrected: 'Complaints fell from 600 to 400 once the bank started logging only the written ones. That is {o:defshift}. To say customers are happier, I would need the complaints counted the same way in both years: 350 written last year against 400 this year.' },

  { id: 'm4-claim-cheated', use: 'claim',
    text: '"The factory\'s output rose 20% after the bonus began, so the workers must have cheated."',
    ask: { type: 'missing', name: 'proxy' },
    fault: 'A bonus and a rise do not show gaming: the workers also need a way to raise the figure without making more, and the claim gives none. If someone else counts the output on the shipping dock, the bonus may simply have worked.',
    corrected: 'The factory\'s output rose 20% after the bonus began. That is {o:proxy} only if the workers record the output themselves, or could raise the count without making more. If a count on the dock shows 20% more finished goods leaving, the rise is real.' }
]);

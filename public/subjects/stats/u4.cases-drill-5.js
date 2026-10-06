// Statistical Claims, Unit Four: the claims of the last stage. A claim is something a person might say that uses a name wrongly, or reasons in one of the unit's ways.
// The fault is shown after the learner commits, and the claim put right is always the last thing shown.

FC.cases('stats', 'u4', [

  { id: 'm4-claim-demo', use: 'claim',
    text: '"Every agent hit the 95% target this month, so our service has never been better."',
    ask: { type: 'option', step: 'M1', answer: 'pushed' },
    fault: 'The claim reads the figure as the service. The agents are paid on the figure, and nothing in the claim says how it is counted or who counts it. If the agents record it themselves, they can reach 95% by recording it, with no better service behind it.',
    corrected: 'Every agent hit the 95% target this month. That is {a:M1.pushed}: a figure the agents are paid on and could raise without better service. To say the service has improved, I would need a count that nobody is paid on, such as customers’ own reports of whether the problem was solved.' },

  { id: 'm4-claim-ufo', use: 'claim',
    text: '"Sightings of strange lights in the sky have tripled since the film came out. Something is going on up there."',
    ask: { type: 'missing', name: 'detection' },
    fault: 'The claim reads a rise in the number of sightings as more lights in the sky. A film makes more people look up, and more people know where to report what they see, so the number of reports rises with the looking. It says nothing about what happened in the sky.',
    corrected: 'Sightings of strange lights in the sky have tripled since the film came out. That is a count of what people found when they looked, and many more people are looking. For it to show more lights, I would need to see the count among a fixed number of people looking, or a count made with the same effort at both ends.' },

  { id: 'm4-claim-complaints', use: 'claim',
    text: '"Complaints fell from 600 to 400 once the bank started logging only the written ones. Customers are clearly happier."',
    ask: { type: 'option', step: 'M1', answer: 'newrule' },
    fault: 'The claim itself says what changed. The bank counted every complaint before and counts only written ones now, so the two figures count different things. Written complaints were 350 of the 600 last year, so on the old count nothing fell: the figure of 600 includes 250 that this year’s count would not log.',
    corrected: 'Complaints fell from 600 to 400 once the bank started logging only the written ones. That is {a:M1.newrule}. To say customers are happier, I would need the complaints counted the same way in both years: 350 written complaints last year against 400 this year.' },

  { id: 'm4-claim-cheated', use: 'claim',
    text: '"The factory\'s output rose 20% after the bonus began, so the workers must have cheated."',
    ask: { type: 'missing', name: 'proxy' },
    fault: 'A bonus and a rise do not show gaming. The name needs a way for the workers to raise the figure without making more, and the claim does not give one. If the output is counted by someone else on the shipping dock, the rise may be the workers making more, and the bonus may simply have worked.',
    corrected: 'The factory\'s output rose 20% after the bonus began. That is {a:M1.pushed} only if the workers record the output themselves, or could raise the count without making more. If an outside count shows 20% more finished goods leaving the dock, the rise is real.' }
]);

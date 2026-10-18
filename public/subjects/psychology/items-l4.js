// Psychology, lesson 4, confidence or narcissism: the worked story and the stories of the practice and the check. The test of the lesson is what happens
// to a person's regard for other people once their confidence is tested; a pattern name needs the three main signs (grand picture, need for
// admiration, little empathy) together, for years, with many people; fewer is traits. Question 1 is not asked: every story here is about how someone
// is. Question 2 is asked where it decides. The response follows from the name, so it is taught, not asked. Drill 3.1 and 3.2 of the owner's course
// are reworded (the passed-over promotion, the one-sign talker, the marathon, the boastful interview as a taught wrong idea); the rest are invented,
// and no real person is described. Two mixed-in stories ask what lessons 2 and 3 asked. The stories not used in the lesson wait for the review.
(() => {
  const S = 'narcissism', C = spec => psyCase({ strand: S, names: PSY_NAMES.l4, ...spec });
  FC.items('psychology', [
    // ----- the worked story: span, name -----
    C({ id: 'w4-passed', story: 'Passed over again for team lead, Garrett tells anyone who will listen that the company "isn\'t ready for someone like him" and that the man who got it will fail by spring. He opens every meeting by going over his own wins, and sulks if nobody praises them. When a coworker\'s mother died, he complained about covering her shifts. People at two companies say he has been this way for eleven years.',
      asks: { span: 'years', name: 'grandiose' },
      steps: [
        { id: 'q2', does: 'Question 2. One moment, or over and over? Check the situation first.', working: 'No loss, illness or crisis is named that would explain it. "Eleven years", at two companies, with many coworkers. Question 2: over and over, for months or years.', ask: 'span' },
        { id: 'name', does: 'Name it. What happened to his regard for others when his confidence was tested, and are the three main signs there?', working: 'Passed over, his regard fell: he wishes the winner failure. The three main signs show together: a grand picture ("someone like him"), a need for admiration (the recaps, the sulking), little empathy (the grieving coworker). It cracks outward. Question 4, the look-alike: plain ambition, which would still wish the winner well. Question 5, wrong if: years of fairness toward people who beat him. Grandiose.', ask: 'name' }],
      reason: 'Years, many people, the three main signs together, an outward crack: grandiose. A guess to test, never a diagnosis.' }),

    // ----- set 1, guided: two look-alike pairs, asked back to back -----
    C({ id: 'n4-photo-held', story: 'For fifteen years Fern has told couples she is the best wedding photographer in the state, and she charges like it. When a couple posted a one-star review saying she missed their first kiss, she called them, apologized and refunded half. When she is booked, she sends couples to a rival.',
      asks: { span: 'years', name: 'healthy' },
      reason: 'Fifteen years of the same boast (Question 2), yet tested by a bad review, her regard held: she owned the miss and helps a rival. Steady self-esteem. Healthy. Wrong if, in private, she trashes the couple.' }),
    C({ id: 'n4-photo-fell', story: 'For fourteen years Lucian has told couples he is "an artist, not a vendor", and expects every one of them to rave about him online. When a couple asked about their missing first-kiss photos, he called them "peasants" in a public post. Assistants at three studios have quit over how he treats them.',
      asks: { span: 'years', name: 'grandiose' },
      reason: 'Fourteen years, many people (Question 2). A grand picture, a need to be raved about, no empathy, and an outward strike when tested. Grandiose. Fern made the same boast, but her regard held.' }),
    C({ id: 'n4-award-years', story: 'For sixteen years, at three schools, Mr. Pruitt has privately believed he is the only real teacher in the building and that no principal has ever seen it. He applies for nothing, so no one can judge him, and sulks for weeks when a review does not praise him. When a younger teacher won the district award, he called it politics and stopped speaking to her, even while her father was in the hospital.',
      asks: { span: 'years', name: 'vulnerable' },
      reason: 'Sixteen years, three schools (Question 2). A hidden grand picture, a need for praise, no empathy for her father\'s illness, and an inward crack, as withdrawal. Vulnerable.' }),
    C({ id: 'n4-award-divorce', story: 'The spring his wife left, Mr. Abbott sulked when a younger teacher won the district award and skipped her party. Colleagues of twenty years call him generous. By fall he had written her a note of congratulations and was helping coach her debate team.',
      asks: { span: 'situation', name: 'ordinary' },
      reason: 'The situation first: a divorce explains a bad spring (Question 2, a reaction to a hard time), and twenty years of warmth plus the repair show his regard came back. Ordinary. Mr. Pruitt had sixteen years of it.' }),

    // ----- set 2, alone: every name of the lesson, shuffled, and two from earlier lessons -----
    C({ id: 'n4-headnurse', story: 'Passed over for head nurse, Inez said she still thinks she was the stronger pick. Then she spent a week teaching the new head nurse the scheduling system, and gave the toast at her welcome party.',
      asks: { name: 'healthy' },
      reason: 'Confident even after losing, and her regard for the winner held. Healthy. Thinking you were the better pick is not a sign; cutting the winner down would be.' }),
    C({ id: 'n4-compliments', story: 'All his adult life, Wendell has fished for compliments: every post, every dinner, "Did you see what I did?" He sulks for an evening if nobody notices. He also drives a neighbor to dialysis every week and has never forgotten a grandchild\'s birthday.',
      asks: { span: 'years', name: 'traits' },
      reason: 'Over and over for years (Question 2), but only one main sign, the need for admiration. The dialysis drives show empathy, and no grand picture is shown. Traits: watch, do not name.' }),
    C({ id: 'n4-firstweek', story: 'Your new coworker, three days into the job, told you over coffee that she was "the best hire this year".',
      asks: { span: 'unsaid', name: 'too-little' },
      need: 'Months of how she takes correction, how she treats other people\'s wins, and how she treats people who can do nothing for her.',
      reason: 'One line in her first days: the story does not say what she is like over time (Question 2). Too few facts to see anything. Too little to tell.' }),
    C({ id: 'n4-marathon', story: 'Marisol mentioned she was proud of finishing her first marathon. A friend rolled her eyes and said, "That is such a narcissistic thing to say."',
      asks: { span: 'unsaid', name: 'ordinary' },
      reason: 'One remark; the story does not say more (Question 2). Pride in something she did, nobody put down: a normal reason, nothing to name. No critic or rival tests her, so not healthy; the facts are enough, so not too little. Ordinary.' }),
    C({ id: 'n4-gigs', story: 'Since her twenties, at every job and in every friend group, Delphine has talked about the famous people she will soon sing with, and goes icy if friends miss a show or fail to gush. When a friend\'s husband lost his job, she asked why the friend could not still fly to her show. When a reviewer called her singing flat, she demanded his editor fire him.',
      asks: { name: 'grandiose' },
      reason: 'Since her twenties, every setting. A grand picture, a need for gushing, little empathy (the friend\'s husband), and rage outward at the reviewer. Grandiose.' }),
    C({ id: 'n4-wife', story: 'For twenty years, through two marriages and four jobs, Lyle has felt that nobody sees how much more he understands than they do. He seldom says it; he goes quiet and hurt when his ideas are not praised. When his wife was promoted, he said she "got lucky with a soft boss". When she was sick last winter, he said it had been hard on him.',
      asks: { name: 'vulnerable' },
      reason: 'Twenty years, many people. A hidden grand picture, hurt when not praised, envy, little empathy, turned inward as resentment. Vulnerable.' }),
    C({ id: 'm4-seasons', strand: 'self-justification', names: PSY_NAMES.l2, story: '"I have watched six seasons of this show, so I have to finish the seventh," Noelle says, though everyone says it is terrible and she has not enjoyed an episode in a year.',
      asks: { name: 'sunk' },
      reason: 'The reason points back at what is spent ("six seasons"), not forward at what the next step is worth. Sunk cost.' }),
    C({ id: 'm4-stain', strand: 'thinking-traps', names: PSY_NAMES.l3, story: 'A water stain the size of a coin appeared on the ceiling. "The roof is caving in, and we will lose the house," Odile tells her husband. No roofer has looked at it yet.',
      asks: { name: 'catastrophe' },
      reason: 'One small sign became the worst outcome, taken as certain. Catastrophizing. Wrong if a roofer finds real damage; then it is a fair worry.' }),

    // ----- the check: eight new stories, each in a new situation with a different test or set of signs from the practice -----
    C({ id: 'k4-motion', story: 'Sergei, a trial lawyer known for bold talk, lost a motion after a junior associate had warned him his argument was weak. Next morning he told the team, "She was right and I was wrong," and had her argue the appeal.',
      asks: { name: 'healthy' },
      reason: 'Bold talk fits his job. Tested by a fair criticism that proved right, he owned it and gave her the spotlight: his regard held. Healthy.' }),
    C({ id: 'k4-salon', story: 'For fifteen years, in two cities, Thaddeus has told every client he is "the best stylist on the coast", and expects regulars to post about him. When a younger stylist down the street won a regional award, he told clients she had bought it, posted a fake one-star review of her shop, and asked why nobody had nominated him.',
      asks: { name: 'grandiose' },
      reason: 'Fifteen years, two cities. A grand picture, a need to be posted about, envy, and a cruel strike outward at a rival\'s win. Grandiose.' }),
    C({ id: 'k4-notes', story: 'Since his teens, at school, at work and at home, Linus has believed he is far smarter than anyone gives him credit for, and most nights wants his wife to tell him whether people at work "see what I do". When his manager gave him mild, fair notes on a report, he felt humiliated for days, wrote a furious email he never sent, and has avoided her since. He has never once asked his wife about her own job.',
      asks: { span: 'years', name: 'vulnerable' },
      reason: 'Years, many settings (Question 2). A hidden grand picture, a hunger for praise, little interest in his wife, and shame and anger at fair notes that turn inward, into avoidance. Vulnerable.' }),
    C({ id: 'k4-plans', story: 'For twelve years, Bettina has rearranged agreed group plans to suit herself: the beach trip moved to her week, the dinner moved to her side of town, the best room in the shared cabin taken without asking.',
      asks: { span: 'years', name: 'traits' },
      reason: 'Over and over, for years (Question 2), but one sign, entitlement: no grand picture, no need for praise, no cruelty shown. Traits.' }),
    C({ id: 'k4-sister', story: 'Your sister has been seeing Kellan for three weeks. She says he talks a lot about his startup, picked the restaurant both times, and once checked his phone while she told a story. She wants to know if he is a narcissist.',
      asks: { name: 'too-little' },
      need: 'Months of how he treats her and others: how he takes criticism, other people\'s wins, people who can do nothing for him.',
      reason: 'Three weeks, told second-hand, and each detail has an everyday reason. Too few facts to see a pattern or rule one out. Too little to tell.' }),
    C({ id: 'k4-launch', story: 'Asked by her boss why the launch slipped, Leticia said the deadline was never realistic, and showed the March email where she had warned him. A coworker later called her "so arrogant".',
      asks: { span: 'unsaid', name: 'ordinary' },
      reason: 'One exchange; the story does not say more (Question 2). She made a fair point, backed it with the email, and no one is put down: a normal reason, not a sign. Ordinary.' }),
    C({ id: 'k4-grammar', story: 'For twenty years, at work and at family dinners, Emmett has steered every talk to the books he has read, then waited for someone to say how well-read he is.',
      asks: { name: 'traits' },
      reason: 'Years, many settings, one sign, a need for admiration: no grand picture, no cruelty or coldness shown. Traits.' }),
    C({ id: 'k4-chili', story: 'Harriet brags that she makes the best chili in the county. When her neighbor\'s chili beat hers at the fair, she laughed, asked for the recipe, and printed it in the church cookbook under the neighbor\'s name.',
      asks: { name: 'healthy' },
      reason: 'A big claim, and when a rival beat her, she was glad for the winner and gave her the credit: her regard held. Healthy.' }),

    // ----- held back for the review on later days -----
    C({ id: 'r4-band', story: 'For a decade, in every band he has led, Rocco has called himself the only real talent and made the others thank him from the stage. He fired a drummer the week her baby was born, for missing one practice.',
      asks: { span: 'years', name: 'grandiose' },
      reason: 'Ten years, many bandmates (Question 2). A grand picture, a need to be thanked, no empathy for the new mother, aimed outward. Grandiose.' }),
    C({ id: 'r4-gloomy', story: 'Since college, in every office and friend group, Mabel has quietly believed she is meant for far more than anyone gives her. She never pitches an idea, but goes cold for weeks when someone else\'s is praised. When her roommate\'s mother died, she complained the apartment was "so gloomy now".',
      asks: { span: 'years', name: 'vulnerable' },
      reason: 'Years, many settings (Question 2). A hidden grand picture, cold envy of praise, no empathy for her roommate, turned inward. Vulnerable.' }),
    C({ id: 'r4-lecture', story: 'Professor Lund tells everyone he is the best teacher in the department. When a student caught a math error on the board, he said, "You\'re right, thank you," fixed it, and credited her at the next lecture.',
      asks: { name: 'healthy' },
      reason: 'A big claim, and when a student corrected him, his regard held. Healthy.' })
  ]);
})();

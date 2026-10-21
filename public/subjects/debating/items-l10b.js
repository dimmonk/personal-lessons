// Debating, lesson 10: mixed live exchanges, the check and the questions that wait for the review. The check is the plan's real-world test: twelve new exchanges, none shown in
// the practice and none from lessons 1 to 9, each asking the one decision it calls for from lessons 1 to 9, in a mixed order. The pass mark (10 of 12) is the plan's own and has no
// source; it is labeled ours in the lesson and in docs/research/debating.md. Nothing in the answers rests on tone, length, position or a repeating pattern: the polite line can be
// the dig, the blunt one can be the answer, the friendly one can question you, and the note that ends against its writer can be the one that keeps its test. The three that wait for the
// review ask what the check leaves out (why an argument did not land, a restatement line by line, and a story line by line). The people and their lines are invented.
(() => {
  const X = dbMixed;
  FC.items('debating', [
    // ----- the check: twelve new exchanges -----
    X('c10-movie', { dialogue: 'shift' }, [dbSetup('Two neighbors, Amara and Ivo, are talking over the fence about whether the park should show movies on Friday nights.'), dbTalk(
      ['s1', 'Amara: "The park should show movies on Fridays. Families have nothing else to do on those nights."'],
      ['s2', 'Ivo: "It shouldn\'t. The last one was loud, and it ran past eleven."'],
      ['s3', 'Amara: "It ended at ten. I checked the permit."'],
      ['s4', 'Ivo: "Then I\'ll stop objecting if you keep the speakers facing away from the street."'],
      ['s5', 'Amara: "Speakers facing the trees, and no more objections from you. Deal."'])],
    dbChangeAsks('s4', 'bargain', { persuade: 'They stop arguing about whether the park should show movies. Each now says what they will give up.' }), ['s4'],
    'It starts as persuading: Amara says the park should show movies and Ivo says it should not, each with reasons. Ivo\'s offer to stop objecting if the speakers face away from the street turns it into a trade, and Amara\'s "Deal" settles the split. From that line it is bargaining. The six kinds are Walton and Krabbe\'s; the cues are ours.'),
    X('c10-permit', { dialogue: 'ask' }, [dbSetup('Yusuf has just moved into an apartment and walks into the building office.'), dbTalk(
      ['s1', 'Yusuf: "Hi, I\'m in the second-floor unit. How do I get a parking permit?"'],
      ['s2', 'Clerk: "Fill in the form at the desk. It\'s $35 for the year."'],
      ['s3', 'Yusuf: "Does it cover a second car?"'],
      ['s4', 'Clerk: "No, each car needs its own. The form has a space for each plate."'])],
    [dbKindAsk('ask', 'by-topic', { bargain: 'Yusuf is not trading anything. He wants an answer, and the clerk gives the price and the rule.', persuade: 'Neither holds a claim the other doubts. Yusuf lacks an answer and the clerk gives it.' })], ['s1', 's3'],
    'Yusuf lacks something, how to get a permit, and the clerk is believed to have it and tells him. Nobody doubts a claim and nobody trades. One person wants the answer and the other gives it: asking. The six kinds are Walton and Krabbe\'s; the cues are ours.'),
    X('c10-hunt', { disagreement: 'view' }, [dbSetup('Your uncle Bram hunts every fall. The county is voting on whether to require lead-free shot near wetlands, and you told him you are for it.'), dbTalk(
      ['s1', 'Bram: "It\'s one more rule from people who have never held a shotgun."'],
      ['s2', 'You: "The rule only covers the wetland areas, not the fields."'],
      ['s3', 'Bram: "They look down on hunters and always have. First the wetlands, then everything."'])],
    [dbReadAsk('view')], ['s1', 's3'],
    `Bram disputes no figure and no date. He says how he feels about the people behind the rule and what he thinks they will do next. ${DB_MIX.view}`),
    X('c10-meet', { move: 'change' }, [dbSetup('You and your coworker Orla are texting about whether to move the weekly team meeting from Friday to Monday.'), dbThread('Orla (a coworker)', 'Wednesday',
      ['s1', 'I\'d move it to Monday. Half the team is out on Fridays.', true],
      ['s2', 'That\'s so thoughtful of you. You always have such neat ideas, don\'t you? Just like your desk.'])],
    [dbMoveAsk('change', { continue: 'Orla does not answer what you said about Fridays. Her reply is a dig at you.', leave: 'Orla is not threatening you or blocking you, and you have not yet tried changing the subject.' }), dbCueAsk('s2')], ['s2'],
    `Orla is polite in her words and answers nothing about Fridays; her reply is about you. ${DB_MIX.change}`),
    X('c10-mailbox', { move: 'leave' }, [dbSetup('You and your neighbor Hettie are at the mailboxes. Her sprinklers have soaked your driveway for the third morning in a row.'), dbTalk(
      ['s1', 'You: "Your sprinklers soaked my driveway again. Can we adjust them?"'],
      ['s2', 'Hettie: "You people move in and think you own the street."'],
      ['s3', 'You: "I don\'t think we\'ll settle this by the mailboxes. Did the pothole on Alder get patched?"'],
      ['s4', 'Hettie: "Don\'t change the subject. Typical of you, running to the board over a sprinkler."'],
      ['s5', 'You: "I\'m only asking about the sprinklers."'])],
    [dbMoveAsk('leave', { change: 'You already changed the subject once, and Hettie came straight back at you.', continue: 'Hettie has not answered your request. She has gone after you twice.' }), dbCueAsk('s3', 's4')], ['s3', 's4'],
    `You changed the subject (your line), and Hettie came straight back at you (hers). ${DB_MIX.leave}`),
    X('c10-pantry', { means: 'trust' }, [dbSetup('You posted a plan on your neighborhood forum to open the church food pantry on Saturdays too. Your neighbor Greta replied.'), dbPost('Eastside Neighbors forum',
      ['s1', 'You: Two Saturday shifts would let working families come. The hall is free, and eleven volunteers have said yes.'],
      ['s2', 'Greta K.: That\'s interesting. Have you ever actually run a pantry yourself?'])],
    [dbMeansAsk('trust', { argument: 'Greta does not question the shifts, the hall or the volunteers. She questions you.', feeling: 'Greta says nothing about how she feels. She questions you.' })], ['s2'],
    `Greta is friendly, and her question is about whether you have run a pantry, which is about you. ${DB_MIX.trust}`),
    X('c10-organ', { result: 'hearing' }, [dbSetup('Your friend Miles is against making organ donation automatic unless a person opts out. You tell him about your sister, which is true.'), dbTalk(
      ['s1', 'You: "She waited four years for a kidney, and in the fourth year she was on dialysis three days a week."'],
      ['s2', 'Miles: "Four years on dialysis. That is a lot for one family to carry. I just don\'t want the state deciding what happens to my body after I die."'])],
    [dbResultAsk('hearing', { neither: 'Miles answers the story. He says four years on dialysis is a lot for one family to carry.', move: 'Nothing in Miles\'s view shifts. He keeps his objection.' })], ['s2'],
    `Miles repeats what your sister went through, calls it a lot to carry, and keeps his objection. ${DB_MIX.hearing}`),
    X('c10-field', { rest: 'line' }, [dbSetup('Your friend Sadie is on the PTA and is against letting a burger chain put its name on the school sports field. You are for it.'), dbThread('Sadie (a friend)', 'Friday',
      ['s1', 'The sponsorship brings in $9,000 a year for the music room.', true],
      ['s2', 'Fine, say it brings in $20,000. I still don\'t want a burger chain\'s name on our field. It isn\'t what a school is for.'])],
    [dbRestAsk('line', { result: 'Sadie does not say what she thinks would happen. She grants a bigger number and keeps her view.', figure: 'Sadie does not dispute the figure. She grants a bigger one.' })], ['s2'],
    `Sadie grants a bigger result than yours and keeps her view anyway. ${DB_MIX.line}`),
    X('c10-share', { experience: 'story' }, [dbSetup('Your coworker Rafe is against a law that would give workers paid time off to vote. You are for it. You could tell any one of these three true things.'), dbTalk(
      ['s1', 'Rafe: "Why do you care about this one so much?"'])],
    [dbShareAsk([
      ['The year your boss let you leave early on election day, and you voted on your way home.', true],
      ['The year your car was towed from your apartment lot while you were at work, and the fee was $300.', 'chose-unrelated'],
      ['A state report on how many workers in the state say they could not get time off to vote.', 'chose-statistic']])], [],
    `Leaving early to vote is about time off to vote, with no harm in it; the towed car has a cost but is not about voting; the state report is a fact. ${DB_MIX.plain}`),
    X('c10-reply', { problem: 'stretched' }, [dbSetup('Your neighbor Cyrus is against lowering the speed limit on Pine to 25. You are for it. What happened: a car hit your dog on Pine last spring, her leg broke and healed in six weeks, and the driver stopped, gave you his number and paid half the $400 vet bill. You do not know how fast he was going.'), dbTalk(
      ['s1', 'Cyrus: "A lower limit is just a way to write tickets. Why do you care?"'])],
    [dbBadAsk([
      ['A driver hit my dog on Pine last spring and never stopped. Her leg took six weeks to heal, and I paid the whole $400 vet bill myself, so I know what this costs.', true],
      ['A car hit my dog on Pine last spring and broke her leg. It took six weeks to heal, and half of the $400 vet bill was mine. I would not wish that fright on anyone.'],
      ['A car hit my dog on Pine last spring, and I don\'t know how fast it was going. Her leg took six weeks to heal, and I want drivers to slow down on that street.']])], ['s1'],
    `The reply that says the driver never stopped and that you paid the whole bill says more than happened; he stopped and paid half. The others stay inside the facts, one of them with more feeling. ${DB_MIX.stretched}`),
    X('c10-note', { standard: 'same' }, [dbSetup('You are against the new roundabout on Third. Study A (crashes fell) followed the intersection for two years. Study B (crashes did not fall) followed it for one year. You wrote this note to a friend.'), dbEvenNote(null,
      ['s1', 'My rule: I only count a study that followed the intersection for at least two years.'],
      ['s2', 'Study A (crashes fell) followed it for two years, so I am counting it.'],
      ['s3', 'Study B (crashes did not fall) followed it for one year, so I am not counting it.'],
      ['s4', 'So the one study I am counting says crashes fell.'])],
    [dbEvenAsk(null)], [],
    `Study A followed the intersection for two years and Study B for one, so the note's own rule counts A and puts B aside, even though A is the study the writer likes least. ${DB_MIX.same}`),
    X('c10-porch', { build: 'start' }, [dbSetup('You want your neighbor Elsa to back a rule that every porch gets a light at night.'), dbTalk(
      ['s1', 'You: "Burglaries on this street doubled last year. Porch lights stop people from trying doors after dark, and the city will give us the bulbs for free if we all sign up by March."'],
      ['s2', 'Elsa: "Doubled isn\'t the number I have. The police log shows three last year and four this year, so I don\'t see what we are fixing."'])],
    [dbBuildAsk('start', { length: 'Elsa does not say she lost you or cannot follow. She disputes the opening number.', neither: 'Elsa goes at the opening claim, the burglary figure.' })], ['s1', 's2'],
    `Elsa rejects the claim your argument began from, that burglaries doubled. ${DB_MIX.start}`),

    // ----- three that wait for the review -----
    X('r10-supply', { build: 'length' }, [dbSetup('You want your coworker Mabel to back a plan to keep the supply closet locked.'), dbTalk(
      ['s1', 'You: "The closet loses forty dollars of tape a month, and that adds up over a year, and a year of that is a line the boss notices, and the boss then cuts our supply budget, and we run out of pens, so lock it."'],
      ['s2', 'Mabel: "I got lost at the budget cut. How do we get from the tape to the pens?"'])],
    [dbBuildAsk('length')], ['s1', 's2'],
    `Mabel says she got lost at the budget cut, after five steps from tape to pens. ${DB_MIX.length}`),
    X('r10-lane', { restated: 'added' }, [dbSetup('Your neighbor Hugo said: "I\'m fine with the new bus lane. What I\'m against is losing the parking in front of my shop, because my customers come by car and they won\'t walk two blocks in January." You plan to say it back:'), dbRestated('s4',
      ['s1', 'You are fine with the new bus lane.'],
      ['s2', 'You are against losing the parking in front of your shop.'],
      ['s3', 'You think your customers come by car and won\'t walk two blocks in January.'],
      ['s4', 'And you would rather the lane were not on your street at all.'])],
    [dbRestateAsk('s4')], ['s4'],
    `Hugo never said he wants the lane off his street; he said he is fine with it. That line is a motive you added. ${DB_MIX.added}`),
    X('r10-father', { telling: 'invented' }, [dbSetup('Your father, Hugo, drove a delivery truck for nineteen years. In 2021 a back injury ended his job. The company paid him six weeks of pay and no more. He found night work as a guard four months later. You were in college and sent him $100 a month. You plan to tell this story to a coworker who is against extending job protection to injured workers.'), dbDraft('s4',
      ['s1', 'My father drove a delivery truck for nineteen years.'],
      ['s2', 'In 2021 a back injury ended his job.'],
      ['s3', 'The company paid him six weeks of pay and no more.'],
      ['s4', 'He found night work four months later, and I knew he was ashamed to take it.'])],
    [dbTrueAsk('s4')], ['s4'],
    `The facts say he found night work four months later; they say nothing of shame. ${DB_MIX.invented}`)
  ]);
})();

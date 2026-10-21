// Debating, lesson 1: what kind of conversation is this? Every talk is a short, everyday one (work, family, neighbors, roommates); the learner names what the talk is for,
// by the cue the lesson teaches: what it started from, what each person is trying to get, and what would count as done. The six kinds are Walton and Krabbe's six primary
// kinds of dialogue (docs/research/debating.md, F1); a talk that changes kind is asked by the line where it changes and what it becomes. Every talk holds its own cue, so one
// answer holds, and the cues are written in different words from talk to talk so no word gives the answer away. The people and the lines are invented.
// Items a lesson does not name wait for the review.
(() => {
  const S = 'kinds-of-talk';
  const K = dialogue => ({ dialogue });
  FC.items('debating', [
    // ----- the worked talk -----
    { id: 'w1-offsite', strand: S, facets: K('decide'),
      blocks: [dbSetup('Priya, Mark and Dee run the same team. The team offsite is next month, and the three of them have to pick the date by Friday.'), dbTalk(
        ['s1', 'Priya: "The 12th or the 19th. Which suits the team better?"'],
        ['s2', 'Mark: "The 19th. Three people have school events on the 12th."'],
        ['s3', 'Dee: "The 19th is the day before the audit, though. Everyone will be thinking about that instead."'],
        ['s4', 'Priya: "Then the 12th, and we check with the three with school events whether they can still make it."'])],
      asks: [dbKindAsk('decide', 'by-topic')],
      steps: [
        { id: 'start', does: 'Check what the talk started from.', working: 'A date has to be picked by Friday, and all three of them have to live with it. That is a choice to make together.', ask: 'kind' },
        { id: 'want', does: 'Check what each person is trying to get.', working: 'Nobody is trying to win. Each names a reason that bears on what is best for the team.' },
        { id: 'done', does: 'Check what would count as finished.', working: 'A date. Priya has just put one forward and a way to check it, so the talk is on track.' }],
      deciding: ['s1', 's4'],
      reason: 'The talk started from a choice the three share, and each line weighs the options for the team. Nobody holds a claim that the others doubt, and nobody is after a bigger share.' },

    // ----- group 1: two pairs, the same topic in two kinds of talk -----
    { id: 'a1-bump-claim', strand: S, facets: K('persuade'),
      blocks: [dbSetup('Lena and Tom, two neighbors, are talking over the fence about whether speed bumps slow cars down.'), dbTalk(
        ['s1', 'Lena: "They work. The city put one on Alder and the cars slowed down."'],
        ['s2', 'Tom: "They slow down at the bump and speed up right after. I don\'t think they work."'],
        ['s3', 'Lena: "Then why did the complaints stop?"'],
        ['s4', 'Tom: "People gave up complaining. That is not the same thing."'])],
      asks: [dbKindAsk('persuade', 'by-topic', { decide: 'They are not choosing anything. They disagree about what is true, and each gives reasons for their side of it.' })],
      deciding: ['s1', 's2'],
      reason: 'Lena says speed bumps work and Tom says they do not. Each holds a claim the other doubts and answers the other\'s reasons.' },
    { id: 'a1-bump-choice', strand: S, facets: K('decide'),
      blocks: [dbSetup('Lena and Tom sit on their street committee. The city will pay for one speed bump this year, and the committee must choose Alder or Birch by Friday.'), dbTalk(
        ['s1', 'Lena: "We have one speed bump to place. Alder gets the speeders, and Birch has the school crossing."'],
        ['s2', 'Tom: "Both matter. How do we compare them?"'],
        ['s3', 'Lena: "Let\'s score both streets on speed, kids and traffic."'],
        ['s4', 'Tom: "Fine. Whichever scores higher gets the bump."'])],
      asks: [dbKindAsk('decide', 'by-topic', { persuade: 'They do not disagree about a claim. A choice has to be made, and both are looking for the best answer for the street.' })],
      deciding: ['s2', 's3'],
      reason: 'The talk started from a choice the committee must make by Friday. Neither holds a claim to defend: they work out how to compare the streets and agree on a way to pick, so it is deciding together.' },
    { id: 'a1-parking-deal', strand: S, facets: K('bargain'),
      blocks: [dbSetup('Nia and Kim share an apartment with one parking space. They both want it on weekdays.'), dbTalk(
        ['s1', 'Nia: "I\'ll take weekdays if you get it every weekend."'],
        ['s2', 'Kim: "Weekends I\'m away anyway. Give me Thursday and Friday and it\'s a deal."'],
        ['s3', 'Nia: "Thursday, not Friday. I need Friday for the early shift."'],
        ['s4', 'Kim: "Fine. Thursdays and weekends."'])],
      asks: [dbKindAsk('bargain', 'by-topic', { decide: 'They are not weighing what is best for both. Each wants the space and gives up a day to get one.' })],
      deciding: ['s1', 's3'],
      reason: 'Both want the same space, so their wants compete. Each trades a day for a day until both can live with the split.' },
    { id: 'a1-parking-fight', strand: S, facets: K('quarrel'),
      blocks: [dbSetup('Nia and Kim share an apartment with one parking space.'), dbTalk(
        ['s1', 'Nia: "You parked in my spot again. Typical."'],
        ['s2', 'Kim: "Your spot? You still owe me for the electric bill."'],
        ['s3', 'Nia: "Oh, here we go. At least I pay for things with my own money."'],
        ['s4', 'Kim: "Right. Your mother\'s money."'])],
      asks: [dbKindAsk('quarrel', 'by-topic', { bargain: 'The parking space comes up, but nobody offers a trade. Each line hits at the other person and nothing is answered.' })],
      deciding: ['s3', 's4'],
      reason: 'Each line goes after the other person or an old hurt, and no one answers a point or makes an offer. The space is only where it started.' },

    // ----- group 2: all six kinds, and talks that change -----
    { id: 'b1-water', strand: S, facets: K('inquire'),
      blocks: [dbSetup('Water is pooling where two backyards meet. Omar and Beth, the neighbors, walk out to look.'), dbTalk(
        ['s1', 'Omar: "I don\'t know where it\'s coming from. Could it be my downspout?"'],
        ['s2', 'Beth: "Maybe. Or the slope along the fence. Let\'s run the hose and see which way the water goes."'],
        ['s3', 'Omar: "Good idea. If it\'s mine, I\'ll fix it."'])],
      asks: [dbKindAsk('inquire', 'by-topic', { persuade: 'Neither one holds a claim the other doubts. Both say they do not know and plan a test.' })],
      deciding: ['s1', 's2'],
      reason: 'Neither knows the cause, and both want to learn it. They plan a test together instead of defending a guess.' },
    { id: 'b1-expenses', strand: S, facets: K('ask'),
      blocks: [dbSetup('Sam started at the company on Monday. Dev has worked there for six years.'), dbTalk(
        ['s1', 'Sam: "Do you know how the expense reports work here? I paid for the train ticket myself."'],
        ['s2', 'Dev: "You upload the receipt in the finance portal by the 5th. They pay you back in about ten days."'],
        ['s3', 'Sam: "Thanks. Does it matter if the receipt is a photo?"'],
        ['s4', 'Dev: "A photo is fine."'])],
      asks: [dbKindAsk('ask', 'by-topic', { inquire: 'Dev already knows the answer. The talk is for Sam to get it from him, not for the two to find it out together.' })],
      deciding: ['s1', 's2'],
      reason: 'Sam does not know and turns to someone who does. Dev tells him, and the talk is finished when Sam has what he asked for.' },
    { id: 'b1-roof', strand: S, facets: K('persuade'),
      blocks: [dbSetup('Two cousins, Eli and Sue, are arguing in loud voices at a picnic about whether the old oak was healthy before the storm brought it down.'), dbTalk(
        ['s1', 'Eli: "It was rotten inside. Any tree man could see it!"'],
        ['s2', 'Sue: "It had full leaves in June. Rotten trees don\'t leaf out!"'],
        ['s3', 'Eli: "They do if the rot is in the trunk!"'],
        ['s4', 'Sue: "The city inspected it in March and passed it!"'])],
      asks: [dbKindAsk('persuade', { quarrel: 'by-volume' }, { quarrel: 'They are loud, but each line is about the tree, and each answers the other\'s reasons. Nobody is hitting at the other person.' })],
      deciding: ['s1', 's2'],
      reason: 'Eli says the oak was rotten and Sue says it was healthy. Each holds a claim the other doubts and gives reasons, loudly. The shouting does not change the kind.' },
    { id: 'b1-house', strand: S, facets: K('decide'),
      blocks: [dbSetup('Three siblings own their late mother\'s house together. They have until June to choose between keeping it, renting it or selling it, and they are going through the options together.'), dbTalk(
        ['s1', 'Ana: "Keeping it costs us about $4,000 a year in taxes and upkeep."'],
        ['s2', 'Ben: "Renting would cover that, but someone has to manage it. Selling would net about $210,000 split three ways."'],
        ['s3', 'Cal: "So we are weighing money against work against keeping Mom\'s things. Let\'s score the three options on those, and vote Thursday."'],
        ['s4', 'Ana: "Fine. I\'ll make the table."'])],
      asks: [dbKindAsk('decide', 'by-topic', { persuade: 'Nobody is trying to win the others over to a claim. All three are weighing the options for the group and agree on how to choose.' })],
      deciding: ['s2', 's3'],
      reason: 'The talk started from a choice the three share, with options on the table. Each option is weighed for the group, and Cal lays out how they will pick.' },
    { id: 'b1-shift', strand: S, facets: K('shift'),
      blocks: [dbSetup('Hal and his daughter Bea are choosing a new thermostat. They have to buy one this week.'), dbTalk(
        ['s1', 'Bea: "The smart one or the plain one. Which do you want?"'],
        ['s2', 'Hal: "Before we pick, what would the smart one cost to install?"'],
        ['s3', 'Bea: "The store quoted $90 for the install, on top of the $180."'],
        ['s4', 'Hal: "Then the plain one. That settles it."'])],
      asks: dbChangeAsks('s2', 'ask', { decide: 'The talk has not moved on to a decision yet. Hal has stopped to get a fact from Bea.' }),
      deciding: ['s2'],
      reason: 'It starts as deciding together. Hal\'s question is for Bea, who knows the quote, so after that line it is asking. That helps the decision, which needs the number.' },
    { id: 'b1-cabin', strand: S, facets: K('shift'),
      blocks: [dbSetup('You and your brother Joe have to decide this month whether to sell the family cabin, and you are texting about it.'), dbThread('Joe (your brother)', 'Saturday',
        ['s1', 'We have to decide this month whether to sell the cabin. Taxes went up $3,000 and we barely use it. What do you think?'],
        ['s2', 'We use it every summer. Could we rent it out some weeks to cover the taxes?', true],
        ['s3', 'That\'s a fair idea. Who would manage it?'],
        ['s4', 'Dad always said you didn\'t care about the family stuff.', true],
        ['s5', 'You haven\'t visited Dad in a year, so don\'t lecture me.'])],
      asks: dbChangeAsks('s4', 'quarrel', { decide: 'Both of them are still on the cabin until that line. After it, the lines are about who is the worse son.' }),
      deciding: ['s4'],
      reason: 'It starts as deciding together: a choice about the cabin, with a rental idea on the table. Your line about Dad is a hit at your brother and not a reason about the cabin. From there it is a quarrel, and the choice is stuck.' }
  ]);
  // the check: eight new talks, none shown in the practice
  FC.items('debating', [
    { id: 'c1-thermostat', strand: S, facets: K('persuade'),
      blocks: [dbSetup('Over coffee, Hal and his daughter Bea disagree about smart thermostats. Hal has no plans to buy one.'), dbTalk(
        ['s1', 'Hal: "They don\'t save anything. It is marketing."'],
        ['s2', 'Bea: "The electric company ran a study. Their own numbers show about eight percent less on the bill."'],
        ['s3', 'Hal: "Their numbers. They want you to feel good about the bill."'],
        ['s4', 'Bea: "It was a hundred homes, and they paid for none of the thermostats."'])],
      asks: [dbKindAsk('persuade', 'by-topic', { decide: 'They are not choosing a thermostat. They disagree about whether smart thermostats save money.' })],
      deciding: ['s1', 's2'],
      reason: 'Hal says they save nothing and Bea says they save money. Each holds a claim the other doubts and gives reasons.' },
    { id: 'c1-vendor', strand: S, facets: K('decide'),
      blocks: [dbSetup('Three coworkers have to choose a caterer for the party on the 20th.'), dbTalk(
        ['s1', 'Rosa: "Two quotes. Green Plate is cheaper. Salt and Pepper has more vegetarian options."'],
        ['s2', 'Jun: "Five of the guests don\'t eat meat, so the vegetarian options matter most."'],
        ['s3', 'Kai: "Agreed, but Green Plate\'s site says they can add two vegetarian dishes. Let\'s put that in the comparison."'],
        ['s4', 'Rosa: "I\'ll add it to the table, and we pick tomorrow."'])],
      asks: [dbKindAsk('decide', 'by-topic', { bargain: 'No one is trying to get a better share for themselves. The three are choosing what is best for the party.' })],
      deciding: ['s1', 's4'],
      reason: 'A choice has to be made by the 20th, and all three share it. They weigh the options for the group and plan how to settle it.' },
    { id: 'c1-swap', strand: S, facets: K('bargain'),
      blocks: [dbSetup('Ana wants Saturday off. Lou wants to leave early on Monday.'), dbTalk(
        ['s1', 'Ana: "Can you cover my Saturday shift? I\'ll open for you on Monday if you do."'],
        ['s2', 'Lou: "I can do Saturday. But Monday I need to leave by two."'],
        ['s3', 'Ana: "I can close at two on Monday if you do Saturday."'],
        ['s4', 'Lou: "Done. Saturday for me, Monday early for you."'])],
      asks: [dbKindAsk('bargain', 'by-topic', { decide: 'They are not weighing what is best for both of them. Each wants a day off and gives up another to get it.' })],
      deciding: ['s1', 's3'],
      reason: 'Each wants something that costs the other, and they trade one shift for another until both can live with it.' },
    { id: 'c1-wifi', strand: S, facets: K('inquire'),
      blocks: [dbSetup('Roommates Paz and Alex notice the wifi drops in the evening.'), dbTalk(
        ['s1', 'Paz: "Why does it keep dropping at night? No idea."'],
        ['s2', 'Alex: "Me neither. Could be the neighbors\' network, or the router overheating."'],
        ['s3', 'Paz: "Let\'s write down the times for a week. That should show a pattern."'],
        ['s4', 'Alex: "I\'ll put a note up on the fridge."'])],
      asks: [dbKindAsk('inquire', 'by-topic', { persuade: 'Neither claims to know the cause, so there is nothing to argue for yet. They plan to find out.' })],
      deciding: ['s1', 's3'],
      reason: 'Nobody knows the cause, and both want to learn it. They plan a way to find out instead of defending a guess.' },
    { id: 'c1-noise', strand: S, facets: K('ask'),
      blocks: [dbSetup('Mira\'s car makes a noise. Her neighbor Walt is a retired mechanic.'), dbTalk(
        ['s1', 'Mira: "Walt, my car goes thump-thump when I turn left. Do you know what that is?"'],
        ['s2', 'Walt: "Probably a worn CV joint. Does it get worse at low speed?"'],
        ['s3', 'Mira: "Yes, in parking lots."'],
        ['s4', 'Walt: "That\'s the joint. A shop can replace it in an hour."'])],
      asks: [dbKindAsk('ask', 'by-topic', { inquire: 'Walt puts questions too, but only to answer Mira\'s question. He is the one who knows.' })],
      deciding: ['s1', 's4'],
      reason: 'Mira does not know and turns to someone she thinks does. Walt\'s questions are for giving her the answer, and she leaves with it.' },
    { id: 'c1-dinner', strand: S, facets: K('quarrel'),
      blocks: [dbSetup('At Thanksgiving, Gary and his brother-in-law Pete are talking politics.'), dbTalk(
        ['s1', 'Gary: "People like you have ruined this country."'],
        ['s2', 'Pete: "Funny. People like you can\'t hold a job for two years."'],
        ['s3', 'Gary: "At least I don\'t live off my wife\'s paycheck."'],
        ['s4', 'Pete: "Say that again, tough guy."'])],
      asks: [dbKindAsk('quarrel', 'by-topic', { persuade: 'The subject was politics, but within two lines nobody gives a reason. Each line is aimed at the other man.' })],
      deciding: ['s2', 's3'],
      reason: 'Politics is only where it started. Each line goes at the other man\'s job or marriage, and no one answers a point.' },
    { id: 'c1-chores', strand: S, facets: K('shift'),
      blocks: [dbSetup('Roommates Lou and Ana are dividing the chores.'), dbTalk(
        ['s1', 'Lou: "I\'ll do the dishes all week if you take out the trash and the recycling."'],
        ['s2', 'Ana: "Deal. But you do the bathroom on Saturdays."'],
        ['s3', 'Lou: "Fine, bathroom on Saturday."'],
        ['s4', 'Ana: "Honestly, it\'s the same every time with you. You do one thing and want a medal."'],
        ['s5', 'Lou: "Right, because you never notice anything I do."'])],
      asks: dbChangeAsks('s4', 'quarrel', { bargain: 'The trades stopped at "Fine, bathroom on Saturday." After Ana\'s line, nobody offers a chore or wants one.' }),
      deciding: ['s4'],
      reason: 'It starts as bargaining: chores for chores until both agree. Ana\'s line is about what Lou is like, not about a chore, and Lou hits back. A hit at the person in the middle of a deal blocks the deal: it is a quarrel from there.' },
    { id: 'c1-lane', strand: S, facets: K('shift'),
      blocks: [dbSetup('Two coworkers, Mina and Greg, serve on the committee that must recommend by Thursday whether to keep or remove the new bike lane. At lunch they are arguing about whether it was worth building.'), dbTalk(
        ['s1', 'Greg: "The new bike lane was a waste of $200,000."'],
        ['s2', 'Mina: "It carries about fifteen hundred riders a week. That is a lot for one street."'],
        ['s3', 'Greg: "Counted when? Summer?"'],
        ['s4', 'Mina: "Fair. We have to recommend keep or remove by Thursday. Let\'s list the costs and the ridership for both options."'],
        ['s5', 'Greg: "OK. I\'ll list the costs, you list the ridership, and we recommend on Thursday."'])],
      asks: dbChangeAsks('s4', 'decide', { persuade: 'Up to Greg\'s question they are arguing over a claim. After Mina\'s line about the recommendation they are picking one together.' }),
      deciding: ['s4'],
      reason: 'It starts as persuading: a claim, a number and a question about the number. Mina\'s line about the recommendation turns it to the choice they share, keep or remove, and both start listing what the choice needs. From there it is deciding together.' }
  ]);
  // items the lesson does not name: they wait for the review
  FC.items('debating', [
    { id: 'r1-holiday', strand: S, facets: K('bargain'),
      blocks: [dbSetup('Two sisters, Nell and Pru, both want to host one of the two big holidays this year.'), dbTalk(
        ['s1', 'Nell: "I\'ll host Thanksgiving if you host Christmas."'],
        ['s2', 'Pru: "I\'d rather have Christmas every year. You could have Thanksgiving every year."'],
        ['s3', 'Nell: "Every year is too much. Let\'s trade off: you take Christmas this year and Thanksgiving next."'],
        ['s4', 'Pru: "Fine, we switch every year."'])],
      asks: [dbKindAsk('bargain', 'by-topic', { decide: 'They are not weighing what is best for the family. Each wants the same holiday and gives up something to get it.' })],
      deciding: ['s1', 's3'],
      reason: 'Both want the same holidays, so their wants compete. They trade until both can live with the split.' },
    { id: 'r1-coach', strand: S, facets: K('persuade'),
      blocks: [dbSetup('Two parents, Ira and Jo, are watching a practice and talking about the coach.'), dbTalk(
        ['s1', 'Ira: "The coach plays favorites. His own son starts every game."'],
        ['s2', 'Jo: "His son is the best player on the team. The stats are posted on the wall."'],
        ['s3', 'Ira: "Posted by him, though."'],
        ['s4', 'Jo: "The league keeps its own stats too. Look them up."'])],
      asks: [dbKindAsk('persuade', 'by-topic', { inquire: 'Each parent already holds a claim, and each gives reasons for it. Nobody says they do not know.' })],
      deciding: ['s1', 's2'],
      reason: 'Ira says the coach plays favorites and Jo says he does not. Each holds a claim the other doubts and gives reasons.' },
    { id: 'r1-blame', strand: S, facets: K('shift'),
      blocks: [dbSetup('Two coworkers, Sol and Kit, are trying to work out why last night\'s report failed.'), dbTalk(
        ['s1', 'Sol: "I don\'t see an error in the data. Could the template have changed?"'],
        ['s2', 'Kit: "Maybe. Let\'s compare it with last week\'s file."'],
        ['s3', 'Sol: "It was you, wasn\'t it? You always rush the upload."'],
        ['s4', 'Kit: "And you never check anything until it breaks."'])],
      asks: dbChangeAsks('s3', 'quarrel', { inquire: 'Until Sol\'s second line, both are looking for the cause. After it, the lines are about each other.' }),
      deciding: ['s3'],
      reason: 'It starts as finding out together: neither knows the cause and they plan a comparison. Sol\'s line blames Kit for what he is always like, and Kit hits back. From there it is a quarrel.' }
  ]);
})();

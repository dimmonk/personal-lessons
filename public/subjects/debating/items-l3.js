// Debating, lesson 3: your goal, and when to leave. Every question is a talk in progress, told from your side. You pick keep going, change the subject or leave, tap the line of the
// talk that decides it, and then do the part the move calls for: a fair aim (keep going), the words (change the subject or step out) or the first act (leave a thread or a room).
// The rule of thumb, marked in the lesson as a judgement call (docs/research/debating.md, section 4): keep going while the other person answers your point, question or offer,
// however blunt; change the subject once when the lines hit at you or an old hurt and nothing is answered; leave when they threaten you or block your way, when you changed the
// subject and they came back at you, or when several people are going at you at once. The feedback uses only what the rule uses. The decisive line is first, middle or last
// in the talk, the tone of the other person does not give the move away (a smiling threat, a blunt answer), and no case is a couple or a close relationship. The people and
// their lines are invented. Items a lesson does not name wait for the review.
(() => {
  const S = 'when-to-stop';
  const M = move => ({ move });
  // the aim: the next small step the other person has just offered or asked for; the three others are written as modestly and are not on offer
  const aim = (right, ...wrong) => dbAimAsk([[right, true], ...wrong.map(w => [w, 'aimed-for-win'])]);
  // the words for a change of subject: say that you will not settle it and turn to something else; the others carry a jab, argue it again, or step out
  const change = (topic, jab, again) => dbSayAsk([[`We won\'t settle this today. ${topic}`, true], [`We won\'t settle this today. ${jab}`, 'parting-shot'], [`We won\'t settle this until you hear this once more. ${again}`, 'wrong-line'], ['We won\'t settle this today, so I\'m going to step out now.', 'wrong-line']], 'Which line do you say?');
  // the words for stepping out: plain, no jab; the others carry a jab, argue it once more first, or change the subject again
  const out = (plain, jab, again, drift) => dbSayAsk([[plain, true], [jab, 'parting-shot'], [again, 'wrong-line'], [drift, 'wrong-line']], 'Which line do you say?');
  // the first act when you cannot just walk away from a thread or a room
  const act = (right, ...wrong) => dbPick('act', 'What do you do first?', [[right, true], ...wrong.map(w => [w, 'wrong-act'])]);
  FC.items('debating', [
    // ----- the worked talk -----
    { id: 'w3-fee', strand: S, facets: M('continue'),
      blocks: [dbSetup('You and Wayne, neighbors on the homeowners\' board, are talking in the parking lot after a meeting. Wayne does not want the $15 fee increase.'), dbTalk(
        ['s1', 'You: "The fund covers two years of repairs, and the roof is eighteen years old. Do you have a different number?"'],
        ['s2', 'Wayne: "Show me the fund\'s number and I\'ll look at it."'])],
      asks: [dbMoveAsk('continue')],
      steps: [
        { id: 'kind', does: 'Name the kind of talk.', working: 'Wayne holds a claim, that the fee should not go up, and you hold the opposite. You are persuading each other.' },
        { id: 'move', does: 'Look at the last lines and pick the move.', working: 'Wayne answers your question and says what he would look at. He is still answering, so keep going.', ask: 'move' },
        { id: 'aim', does: 'Pick a fair aim.', working: 'The next small step Wayne has offered: he reads the fund\'s number. Not that he gives in today.' }],
      deciding: ['s2'],
      reason: 'Wayne answers your question and says he will look at the number. While the other person answers, keep going, and aim for the step he has offered.' },

    // ----- group 1 -----
    { id: 'a3-weekends', strand: S, facets: M('continue'),
      blocks: [dbSetup('You and Ken work at a clinic and are talking about who covers weekends.'), dbTalk(
        ['s1', 'You: "I think we should rotate weekends. It\'s unfair that you and I always cover them."'],
        ['s2', 'Ken: "Rotating means a new hire covers alone with no training. What if we pair each new hire with one of us for the first month?"'],
        ['s3', 'You: "Good point. Let me check the schedule."'])],
      asks: [dbMoveAsk('continue', { change: 'Nobody is hitting at anyone. Ken has just answered your point with a reason and a proposal.', leave: 'Nobody is threatening you or blocking you, and Ken has just answered your point.' }), dbCueAsk('s2'),
        aim('You and Ken settle how to pair each new hire for the first month.', 'You and Ken settle who covers the coming Saturday.', 'Ken looks at the clinic\'s hiring numbers.', 'You look at the staff list for the new hires.')],
      deciding: ['s2'],
      reason: 'Ken answers your point with a reason and a proposal, so keep going. The fair aim is the step he just offered, working out the pairing, and not his agreement to your rotation.' },
    { id: 'a3-digs', strand: S, facets: M('change'),
      blocks: [dbSetup('You and your sister Rita are talking about how to split the cost of the holiday dinner.'), dbTalk(
        ['s1', 'You: "I think we should each pay a third."'],
        ['s2', 'Rita: "Typical. You and your calculator."'])],
      asks: [dbMoveAsk('change', { continue: 'Rita did not answer your point. Her line is about what you are always like. Explaining the thirds again would answer a question nobody is asking.', leave: 'Nobody has threatened you or blocked you, and you have not yet tried changing the subject.' }), dbCueAsk('s2'),
        change('What time are you getting there on Thursday?', 'Pay your own share, then, and keep quiet.', 'Here is how the thirds add up.')],
      deciding: ['s2'],
      reason: 'Rita does not answer the split. Her line is a dig and says nothing about the split. Nobody has threatened you, and you have not tried a change of subject, so change it once, saying what you are doing, with no jab.' },
    { id: 'a3-dave', strand: S, facets: M('leave'),
      blocks: [dbSetup('Dave, a neighbor, comes over to your fence.'), dbTalk(
        ['s1', 'Dave: "You\'re a lazy slob, and everybody on this street knows it."'],
        ['s2', 'You: "Anyway, did you get the notice about trash day?"'],
        ['s3', 'Dave: "Trash day? No wonder nobody on this street likes you."'])],
      asks: [dbMoveAsk('leave', { change: 'You already changed the subject once, and Dave came straight back at you.', continue: 'Dave has not answered anything you said. He has gone after you twice.' }), dbCueAsk('s2', 's3'),
        out('I\'m done with this conversation now, so I\'m going to go.', 'I\'m done with this, since you can\'t say one decent thing.', 'I\'m done, but first let me say what I do around here.', 'I\'m done with this, so have you seen the streetlights?')],
      deciding: ['s2', 's3'],
      reason: 'You tried to change the subject (your line) and Dave came straight back at you (his line). That is the sign to leave, with a plain line and no last word.' },
    { id: 'a3-internet', strand: S, facets: M('continue'),
      blocks: [dbSetup('You and your roommate Kim are choosing an internet plan. The faster plan costs $90 a month, and you both have to agree how to split it.'), dbTalk(
        ['s1', 'You: "I\'d take the faster plan if I pay $50 and you pay $40."'],
        ['s2', 'Kim: "I\'ll pay $40 if you cover the first month\'s install fee."'],
        ['s3', 'You: "Let me look at what the install costs."'])],
      asks: [dbMoveAsk('continue'), dbCueAsk('s2'),
        aim('You and Kim settle who covers the install fee.', 'You and Kim settle which month the plan starts.', 'Kim reads the plan\'s contract terms.', 'You look at what the slower plan costs.')],
      deciding: ['s2'],
      reason: 'Kim answers your offer with an offer of her own, so keep going. The fair aim is the step on the table, the install fee, and not a better split for you.' },

    // ----- group 2 -----
    { id: 'b3-nia', strand: S, facets: M('continue'),
      blocks: [dbSetup('You and your neighbor Nia disagree about whether you may build a six-foot fence in your back yard.'), dbTalk(
        ['s1', 'You: "I think six feet is allowed for a back yard."'],
        ['s2', 'Nia: "That\'s wrong. The ordinance says four feet. Look it up, it\'s on the town site."'])],
      asks: [dbMoveAsk('continue', { change: 'Nia is sharp, but she answers your claim with a reason and tells you where to check it.', leave: 'Nia is sharp, not threatening or blocking you.' }), dbCueAsk('s2'),
        aim('You and Nia both read what the ordinance says.', 'You and Nia both measure the back-yard fence line.', 'Nia reads the neighbors\' fence permits.', 'You look at photos of other six-foot fences.')],
      deciding: ['s2'],
      reason: 'Nia is blunt, but she answers your claim with a reason and a place to check it. Bluntness is fine while she answers, so keep going, and aim for the step she offered, reading the ordinance.' },
    { id: 'b3-vic', strand: S, facets: M('change'),
      blocks: [dbSetup('You and your coworker Vic are talking at lunch about who should lead the next project.'), dbTalk(
        ['s1', 'You: "I think Dana should lead it. She has run two like it."'],
        ['s2', 'Vic: "Spoken like the boss\'s favorite."'])],
      asks: [dbMoveAsk('change', { continue: 'Vic did not answer what you said about Dana. His line is a dig at you.', leave: 'Vic has not threatened you or blocked you, and you have not tried changing the subject.' }), dbCueAsk('s2'),
        change('Did you see the new lunch menu?', 'Maybe you should listen to someone besides yourself.', 'Dana has run two like it, and here they are.')],
      deciding: ['s2'],
      reason: 'Vic skips your reason about Dana and takes a dig at you. Nobody is threatening you and you have not tried a change of subject, so change it once.' },
    { id: 'b3-pile', strand: S, facets: M('leave'),
      blocks: [dbSetup('You posted a comment on the "Parents of Oak Street School" page about the new pickup line.'), dbPost('Parents of Oak Street School page',
        ['s1', 'You: I think the new pickup line makes sense. It is safer than the old one.'],
        ['s2', 'Carrie M.: Of course you do. Some of us have jobs.'],
        ['s3', 'Bill R.: Typical. These people never think past themselves.'])],
      asks: [dbMoveAsk('leave', { change: 'Two people are going at you at once on a page others can read. A change of subject will not turn both of them.', continue: 'Neither of them answers your point about safety. Both go after you.' }), dbCueAsk('s2', 's3'),
        act('Stop replying and close the thread.', 'Answer each of them in turn with the district\'s safety report.', 'Post a joke to lighten the thread.', 'Urge the other parents to take your side.')],
      deciding: ['s2', 's3'],
      reason: 'Two people reply at once, and both go after you instead of your point. When several people are at you, leave the thread, which online means to stop replying.' },
    { id: 'b3-boat', strand: S, facets: M('continue'),
      blocks: [dbSetup('You and your brother-in-law Tom are deciding whether to sell the family boat.'), dbTalk(
        ['s1', 'Tom: "I think you\'re wrong. It costs $3,000 a year and we use it twice."'],
        ['s2', 'You: "Twice because of the engine repairs last year. What would a normal year look like?"'],
        ['s3', 'Tom: "Fine, that\'s fair. Maybe four times. Still not enough, in my view."'])],
      asks: [dbMoveAsk('continue', { change: 'Tom is blunt, but he answers you and has just moved from twice to four times.', leave: 'Tom is blunt, but he is not threatening or blocking you, and he has just given ground.' }), dbCueAsk('s3'),
        aim('You and Tom agree what a normal year of use looks like.', 'You and Tom agree what the boat is worth.', 'Tom looks at last year\'s repair bills.', 'You look at what a mooring costs.')],
      deciding: ['s3'],
      reason: 'Tom is blunt, but he answers your point and gives ground, from twice to four times. Keep going, and aim for the step that is open, agreeing what a normal year looks like.' },
    { id: 'b3-door', strand: S, facets: M('leave'),
      blocks: [dbSetup('In the break room, you are about to go out when Marcus steps in front of the door.'), dbTalk(
        ['s1', 'Marcus: "You\'re not leaving until you admit you lied about the schedule."'],
        ['s2', 'You: "I\'d like to talk about this later."'])],
      asks: [dbMoveAsk('leave', { change: 'Marcus is blocking your way. A new subject does not open the door.', continue: 'Marcus is blocking your way out, and the schedule no longer matters.' }), dbCueAsk('s1'),
        act('Stop arguing about the schedule, and call out to the people in the next room.', 'Explain the schedule again until he steps aside.', 'Say you lied, so that he steps aside.', 'Wait quietly until he gets tired of standing there.')],
      deciding: ['s1'],
      reason: 'Marcus will not let you out until you say what he wants. A person blocking your way is a reason to leave. You may not be able to walk past him, so leaving here means stopping the argument and calling to the people nearby.' }
  ]);
  // the check: eight new talks, none shown in the practice
  FC.items('debating', [
    { id: 'c3-vendor', strand: S, facets: M('continue'),
      blocks: [dbSetup('You and Priscilla are choosing a vendor for your team. Priscilla wants the cheaper one, which costs $9,000 less.'), dbTalk(
        ['s1', 'You: "The cheaper one missed two deadlines last year. Do you know why?"'],
        ['s2', 'Priscilla: "I didn\'t know that. Send me the dates."'],
        ['s3', 'You: "I\'ll pull them up now."'])],
      asks: [dbMoveAsk('continue', { change: 'Priscilla has answered your point and asked for the dates.', leave: 'Priscilla is not hitting at you, threatening you or blocking you. She is asking for the dates.' }), dbCueAsk('s2'),
        aim('Priscilla reads the two missed deadlines.', 'Priscilla reads the cheaper vendor\'s references.', 'You read the pricier vendor\'s contract.', 'Priscilla looks at the team\'s budget.')],
      deciding: ['s2'],
      reason: 'Priscilla answers your point and wants the dates, so keep going. The fair aim is the step she asked for, reading the dates, and not her agreement.' },
    { id: 'c3-rent', strand: S, facets: M('continue'),
      blocks: [dbSetup('Your sister Lisa and you are texting about your mother\'s rent, which went up $300 a month. Lisa has said she can cover $150 a month.'), dbThread('Lisa (your sister)', 'Friday',
        ['s1', 'I can cover $150 too if you take her to her appointments.', true],
        ['s2', 'Appointments are two mornings a week. Could I take one and you take one?'],
        ['s3', 'Works for me. Which morning do you want?', true])],
      asks: [dbMoveAsk('continue', { change: 'Lisa answers your offer with a counter-offer. Nothing in the thread is a dig.', leave: 'Nothing in the thread is a threat, and Lisa is still answering your offer.' }), dbCueAsk('s2'),
        aim('You and Lisa settle how the two mornings are split.', 'You and Lisa settle who calls the landlord.', 'Lisa looks at your mother\'s other costs.', 'You look at the appointment times.')],
      deciding: ['s2'],
      reason: 'Lisa answers your offer with a counter-offer, so keep going. The fair aim is the step on the table, how the two mornings are split.' },
    { id: 'c3-timeline', strand: S, facets: M('continue'),
      blocks: [dbSetup('You and your manager, Dana, are reviewing your project plan. Dana has said she thinks your timeline is unrealistic.'), dbTalk(
        ['s1', 'You: "Our last two tests took three weeks. Why six?"'],
        ['s2', 'Dana: "Those two were small. This one has twice the parts. Tell me what you\'d cut."'])],
      asks: [dbMoveAsk('continue', { change: 'Dana is blunt, but she gives a reason and puts a question to you.', leave: 'Dana is blunt, not threatening or blocking you. She is giving a reason.' }), dbCueAsk('s2'),
        aim('You tell Dana what you would cut.', 'You tell Dana what the last two tests cost.', 'Dana reads the plan\'s test list.', 'You look at the staffing for the tests.')],
      deciding: ['s2'],
      reason: 'Dana is blunt, but she answers your question with a reason and wants to know what you would cut, so keep going. The fair aim is the step she asked for.' },
    { id: 'c3-gus', strand: S, facets: M('change'),
      blocks: [dbSetup('You see your neighbor Gus at the mailbox. His leaf blower starts at 7 on Sunday mornings.'), dbTalk(
        ['s1', 'You: "Could the leaf blower wait until 9 on Sundays?"'],
        ['s2', 'Gus: "Ha. You people and your complaints. Never change."'])],
      asks: [dbMoveAsk('change', { continue: 'Gus did not answer your request, even though he said it with a laugh. His line is about what you people are like.', leave: 'Gus has not threatened you or blocked you, and you have not tried changing the subject.' }), dbCueAsk('s2'),
        change('Did you get the notice about trash day?', 'Maybe you should try minding your own yard.', 'Seven is early on a Sunday, and here is why.')],
      deciding: ['s2'],
      reason: 'Gus does not answer your request and says what you people are like, with a laugh. A friendly tone does not change that. Nobody is threatening you, so change the subject once.' },
    { id: 'c3-cousin', strand: S, facets: M('change'),
      blocks: [dbSetup('At a family dinner you have made your point about leaf blowers twice. Your cousin has not answered it either time.'), dbTalk(
        ['s1', 'You: "I still think the town should limit them."'],
        ['s2', 'Cousin: "Says the guy who sits at a desk all day."'])],
      asks: [dbMoveAsk('change', { continue: 'Your cousin has not answered your point three times running, and the third answer is a dig at your job.', leave: 'Your cousin has not threatened you or blocked you, and you have not yet tried changing the subject.' }), dbCueAsk('s2'),
        change('How was your trip?', 'Maybe you should talk, given how you spend your days.', 'Here is what the town report says.')],
      deciding: ['s2'],
      reason: 'Three times your cousin has skipped your point, and this time the answer is a dig at your job. Nobody is threatening you, so change the subject once.' },
    { id: 'c3-curt', strand: S, facets: M('leave'),
      blocks: [dbSetup('At the gas station, a man you know slightly, Curt, sees your bumper sticker.'), dbTalk(
        ['s1', 'Curt: "That sticker. You people are idiots."'],
        ['s2', 'You: "Is it supposed to rain tomorrow, do you think?"'],
        ['s3', 'Curt: "Don\'t change the subject. You\'re the one who\'s a joke."'])],
      asks: [dbMoveAsk('leave', { change: 'You already changed the subject once, and Curt came straight back at you.', continue: 'Curt has not answered anything you said. He has gone after you twice.' }), dbCueAsk('s2', 's3'),
        out('I\'m leaving this talk here, so I\'ll say goodbye.', 'I\'m leaving this, and your truck is the only joke.', 'I\'m leaving, but first let me explain the sticker.', 'I\'m leaving this, so how is your truck running?')],
      deciding: ['s2', 's3'],
      reason: 'You tried to change the subject (your line) and Curt came straight back at you (his line). That is the sign to leave, with a plain line and no last word.' },
    { id: 'c3-meeting', strand: S, facets: M('leave'),
      blocks: [dbSetup('At a staff meeting you suggest a change to the break schedule.'), dbTalk(
        ['s1', 'You: "I suggest we stagger the breaks so the desk is always covered."'],
        ['s2', 'Pat: "Here she goes again. Nobody asked you."'],
        ['s3', 'Lou: "Sit down and let the adults talk."'])],
      asks: [dbMoveAsk('leave', { change: 'Two people are at you at once in front of the meeting. A change of subject will not turn both.', continue: 'Neither of them answers your suggestion. Both go after you.' }), dbCueAsk('s2', 's3'),
        act('Say you will pick it up another time, and walk out of the room.', 'Answer each of them in turn with the staffing numbers.', 'Make a joke to lighten the room.', 'Urge the others in the room to take your side.')],
      deciding: ['s2', 's3'],
      reason: 'Two people go at you at once, and neither answers your suggestion. When several people are at you, leave, which in a room means saying so plainly and stepping out.' },
    { id: 'c3-voss', strand: S, facets: M('leave'),
      blocks: [dbSetup('You are in your landlord\'s office to talk about your deposit. Mr. Voss is smiling.'), dbTalk(
        ['s1', 'Mr. Voss: "Of course we can talk about it later, friend. But the door stays locked until you sign this form. I\'m sure you understand."'],
        ['s2', 'You: "I\'d rather leave now."'],
        ['s3', 'Mr. Voss: "Sign first, and then we\'ll see."'])],
      asks: [dbMoveAsk('leave', { change: 'Mr. Voss has locked the door. A new subject does not open it.', continue: 'Mr. Voss is blocking your way out. The deposit is no longer the point.' }), dbCueAsk('s1'),
        act('Stop talking about the deposit, and phone someone to say you are locked in.', 'Sign the form so that he opens the door.', 'Explain your deposit again until he unlocks the door.', 'Wait quietly until he decides to unlock the door.')],
      deciding: ['s1'],
      reason: 'He says the door stays locked until you sign. A person who blocks your way is a reason to leave, however friendly the tone. Leaving here means stopping the deposit talk and phoning someone outside.' }
  ]);
  // items the lesson does not name: they wait for the review
  FC.items('debating', [
    { id: 'r3-plan', strand: S, facets: M('continue'),
      blocks: [dbSetup('You and your coworker Abel are talking about how to schedule the launch. Abel has said he thinks your plan is wrong.'), dbTalk(
        ['s1', 'You: "Which part of the plan do you think is wrong?"'],
        ['s2', 'Abel: "The order. You have testing after the announcement. Tell me why that works."'])],
      asks: [dbMoveAsk('continue', { change: 'Abel is blunt, but he answers you and puts a question back.', leave: 'Abel is not threatening you or blocking you. He is giving a reason.' }), dbCueAsk('s2'),
        aim('You explain to Abel why the testing order works.', 'You walk Abel through the launch budget.', 'Abel reads last year\'s launch notes.', 'You look at the announcement date.')],
      deciding: ['s2'],
      reason: 'Abel is blunt, but he answers your question and puts one back. While he answers, keep going, and aim for the step he asked for.' },
    { id: 'r3-cook', strand: S, facets: M('change'),
      blocks: [dbSetup('At a neighborhood cookout, you are talking with your neighbor Hal about the new parking rules.'), dbTalk(
        ['s1', 'You: "The new rule means no parking on the street overnight. I think that is fair for the plow."'],
        ['s2', 'Hal: "Of course you think so. You never had a car you could be proud of."'])],
      asks: [dbMoveAsk('change', { continue: 'Hal did not answer your point about the plow. His line is about your car.', leave: 'Hal has not threatened you or blocked you, and you have not yet tried changing the subject.' }), dbCueAsk('s2'),
        change('Have you tried the potato salad?', 'At least my car starts in the morning.', 'The plow needs the street clear, and here is how.')],
      deciding: ['s2'],
      reason: 'Hal skips your reason and goes after you. Nobody is threatening you and you have not tried a change of subject, so change it once.' },
    { id: 'r3-back', strand: S, facets: M('leave'),
      blocks: [dbSetup('You are in line at the hardware store when the man behind you starts in about your truck.'), dbTalk(
        ['s1', 'Man: "That truck is a gas hog. People like you are the problem."'],
        ['s2', 'You: "Do you know if they have the paint in the back?"'],
        ['s3', 'Man: "Stop dodging. You know I am right."'])],
      asks: [dbMoveAsk('leave', { change: 'You already changed the subject once, and he came straight back at you.', continue: 'He has not answered anything you said. He has gone after you twice.' }), dbCueAsk('s2', 's3'),
        out('I\'m going to step out of this talk now, thanks.', 'I\'m going to step away, and you should walk instead.', 'I\'m going to step away, after I explain why I drive it.', 'I\'m going to step away, and is the paint aisle on the left?')],
      deciding: ['s2', 's3'],
      reason: 'You tried to change the subject (your line) and he came straight back at you (his line). That is the sign to leave, with a plain line and no last word.' }
  ]);
})();

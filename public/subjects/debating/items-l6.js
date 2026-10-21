// Debating, lesson 6: restating, and asking for the reason. Two decisions, each a question of its own, in a talk the learner reads. (1) What their view rests on, read from their words:
// what they think would happen, a line they will not cross (they grant the result and keep the view), or a figure or date someone could check. The reading is the lesson's own and
// is graded; the move is in the feedback (docs/research/debating.md, F7 and F8: explaining how a policy works lowered rated understanding and extremity on issues judged by what
// happens and not on issues held as a rule, with repeats that failed; Santoro et al. 2025: listening got liking and less defensiveness and added no persuasion to a story). (2) A
// restatement of their words, line by line: tap the line that says more than they said (a motive, a stronger word, a claim they never made), or say nothing is added; the rule to
// say it back fairly is Rapoport's as Dennett lists it (practice-based, no test of restating alone found). Tone never gives the answer away: a line that is held can be granted
// politely and a result can be angry, and every restatement has four lines whether or not one of them adds something. The people and their lines are invented. Items a lesson does not name wait for the review.
(() => {
  const S = 'fair-listening';
  const REASON = {
    result: 'Their view is built on what they think would happen, and nothing in their words says they would keep it if that did not happen. That is where "How would that work, step by step?" has something to work on. In the tests, explaining lowered people\'s rating of their own understanding, and how extreme they were, on issues judged by what happens; some repeats of the tests failed. Say their worry back first.',
    line: 'The result does not move them: they grant it or pass it by and keep the view, so it rests on a line they will not cross. In the one group of tests that split the two, explaining did not lower views held that way, and we found no test of a move that does. Saying it back shows you heard them; in a large field test, listening got liking and less defensiveness, not a changed mind.',
    figure: 'The disagreement is about a figure or a date that someone could check, so there is nothing to explain step by step. Give the correction and show where it comes from, as you learned for facts.',
    fair: 'Every line says what they said and nothing more, so the restatement is fair. That check is ours; experts advise saying a view back so fairly that the person would accept it.',
    added: 'The line says more than they said, and a restatement that adds something is not one they would accept. That check is ours; experts advise saying a view back so fairly that the person would accept it.'
  };
  // what their view rests on: `right` is result, line or figure; `cue` names the deciding words
  const K = (id, right, setup, lines, deciding, cue, then) => ({ id, strand: S, facets: { rest: right },
    blocks: [dbSetup(setup), dbTalk(...lines)], asks: [dbRestAsk(right, then)], deciding, reason: `${cue} ${REASON[right]}` });
  // a restatement of their words; `badId` is the line that says more than they said (none: nothing is added)
  const R = (id, badId, quote, lines, cue) => ({ id, strand: S, facets: { restated: badId ? 'added' : 'fair' },
    blocks: [dbSetup(quote), dbRestated(badId, ...lines)], asks: [dbRestateAsk(badId)], deciding: badId ? [badId] : [], reason: `${cue} ${REASON[badId ? 'added' : 'fair']}` });
  const said = (who, words) => [`Your ${who} said:`, `"${words}"`, 'You plan to say it back:'];
  FC.items('debating', [
    // ----- two worked talks: what a view rests on, and a restatement -----
    { id: 'w6-dana', strand: S, facets: { rest: 'result' },
      blocks: [dbSetup('Your coworker Dana is against moving the team to a four-day week.'), dbTalk(
        ['s1', 'You: "Other offices that tried it kept their output."'],
        ['s2', 'Dana: "Same work in less time. Deadlines slip, and the rest of us end up covering for whoever is off."'])],
      asks: [dbRestAsk('result')],
      steps: [
        { id: 'read', does: 'Read how they back their view.', working: 'Dana says what would happen: deadlines slip and the rest of the team covers. She gives no figure to check, and she does not wave your point away.', ask: 'rest' },
        { id: 'test', does: 'Try the test: would they keep the view if it turned out fine?', working: 'If deadlines did not slip, her worry would be gone. So the view rests on what she thinks would happen.' },
        { id: 'move', does: 'Say it back, then put the question.', working: 'Say it back: "Your worry is that it is the same work, and the team ends up covering." Then put the question: "How would that work on a Thursday when someone is off?"' }],
      deciding: ['s2'],
      reason: `Dana says what would happen and offers nothing she would hold whatever happened. ${REASON.result}` },
    { id: 'w6-pam', strand: S, facets: { restated: 'added' },
      blocks: [dbSetup(said('neighbor Pam', 'I am not against helping people. I am against a shelter on our street, because the one on Elm made the park unsafe at night, and nobody asked the neighbors.')), dbRestated('s4',
        ['s1', 'You are not against helping people.'],
        ['s2', 'You think the one on Elm made the park unsafe at night.'],
        ['s3', 'You think the neighbors should have been asked.'],
        ['s4', 'And you would rather it were out of sight, somewhere else.'])],
      asks: [dbRestateAsk('s4')],
      steps: [
        { id: 'lay', does: 'Lay their words beside your lines.', working: 'Pam named three things: she is not against helping people, the one on Elm made the park unsafe at night, and nobody asked the neighbors.' },
        { id: 'find', does: 'Find the line with something they did not say.', working: 'The last line says Pam wants the shelter out of sight. She never said so; it is a motive you added.', ask: 'restated' },
        { id: 'cut', does: 'Cut it.', working: 'Say back the first three lines. If Pam says "Yes, that is it," you have it.' }],
      deciding: ['s4'],
      reason: `Pam never said she wants it out of sight, so that line is a motive you added. ${REASON.added}` },

    // ----- group 1 -----
    K('a6-hal', 'line', 'Your neighbor Hal is against selling the old church building to the town for a clinic.', [
      ['s1', 'You: "The clinic would see four hundred patients a month."'],
      ['s2', 'Hal: "I am sure it would. It is still a church, and I will not be the one to turn it into an office."']], ['s2'],
      'Hal grants the four hundred patients and keeps his view.',
      { result: 'Hal does not say the clinic would fail or do harm. He grants what it would do.', figure: 'Hal does not dispute the four hundred or any other number.' }),
    R('a6-tom', null, said('neighbor Tom', 'Starting school at 8:30 means the buses cannot make two trips in the morning. The district would have to buy more buses, and that money comes out of the music program. I would rather keep the start at 8:00.'), [
      ['s1', 'At an 8:30 start, the buses cannot make two trips.'],
      ['s2', 'So the district would have to buy more buses.'],
      ['s3', 'You expect that money to come out of the music program.'],
      ['s4', 'You would rather keep the start at 8:00.']],
      'Each line is something Tom said.'),
    K('a6-priya', 'figure', 'Your coworker Priya says the parking fee at the garage is out of hand.', [
      ['s1', 'You: "It went from $90 to $110 a month."'],
      ['s2', 'Priya: "No. It is $180 now. It is on my pay stub, so look."']], ['s2'],
      'Priya disputes the number and points to a pay stub.'),

    // ----- group 2 -----
    K('b6-lou', 'result', 'Your sister Lou is against letting the landlord add a fifth floor to the building next door.', [
      ['s1', 'You: "The city already approved the plans."'],
      ['s2', 'Lou: "A fifth floor blocks the light on the whole block, and the street parking is gone by spring."']], ['s2'],
      'Lou says what a fifth floor would do to the light and the parking.'),
    K('b6-jo', 'line', 'Your friend Jo is against letting a casino open in town.', [
      ['s1', 'You: "It would bring three hundred jobs."'],
      ['s2', 'Jo: "Three hundred jobs, fine. A town should not make its money from other people\'s losses."']], ['s2'],
      'Jo grants the three hundred jobs and keeps the view.'),
    K('b6-sam', 'figure', 'Your coworker Sam is upset about the new shift schedule.', [
      ['s1', 'You: "Nobody lost overtime under it."'],
      ['s2', 'Sam: "I did. The March payroll sheet says twelve hours and April says four."']], ['s2'],
      'Sam disputes the claim with two numbers from payroll sheets.'),
    R('b6-maria', 's1', said('friend Maria', 'Most of the parents I know signed the petition, and it has about four hundred names. I think the district should take another look at the bus lines before it votes.'), [
      ['s1', 'Everyone in the district signed the petition.'],
      ['s2', 'The petition has about four hundred names.'],
      ['s3', 'You want the district to look at the bus lines again.'],
      ['s4', 'You want that done before it votes.']],
      'Maria said "most of the parents I know", and the first line says everyone in the district.'),
    R('b6-ken', 's3', said('uncle Ken', 'I do not mind the camera on Main. What bothers me is that the money goes to the general fund and not to the road, and the city will not say how much it brings in.'), [
      ['s1', 'You do not mind the camera on Main.'],
      ['s2', 'What bothers you is where the money goes.'],
      ['s3', 'You think someone is pocketing it.'],
      ['s4', 'The city will not say how much it brings in.']],
      'Ken said nothing about anyone pocketing money.'),

    // ----- the check: eight new talks, none shown in the practice -----
    K('c6-ray', 'result', 'Your uncle Ray is against closing Main Street to cars on weekends.', [
      ['s1', 'You: "Other towns did it and the shops did fine."'],
      ['s2', 'Ray: "Close it and the diner loses its lunch crowd, and the folks who cannot walk far stop coming downtown."']], ['s2'],
      'Ray says what closing the street would do to the diner and to who comes downtown.'),
    K('c6-meg', 'line', 'Your coworker Meg is against the company testing job applicants for drugs.', [
      ['s1', 'You: "The test stopped two accidents at other plants."'],
      ['s2', 'Meg: "Nobody should have to hand over that part of their life to get a job. That is the end of it for me."']], ['s2'],
      'Meg says nothing about the accidents and keeps her view whatever the test does.'),
    K('c6-walt', 'figure', 'Your neighbor Walt says the town meeting on the fee was never announced.', [
      ['s1', 'You: "The notice went out on the 3rd."'],
      ['s2', 'Walt: "It went out on the 13th. The date is stamped on mine."']], ['s2'],
      'Walt disputes the date and points to the stamp.'),
    K('c6-ana', 'result', 'Your cousin Ana is against turning the school gym into an overnight shelter.', [
      ['s1', 'You: "The shelter would only run November to March."'],
      ['s2', 'Ana: "Parents will pull their kids out. Then enrollment drops and the school is closed in three years."']], ['s2'],
      'Ana says what parents would do and where it ends.'),
    R('c6-gus', 's2', said('neighbor Gus', 'I am not against yard work. The blowers start at seven on Saturday, my daughter is sleeping then, and I have asked twice.'), [
      ['s1', 'You are not against yard work.'],
      ['s2', 'You have been putting up with it for months.'],
      ['s3', 'The blowers start at seven on Saturday, when your daughter is asleep.'],
      ['s4', 'You have already asked twice.']],
      'Gus never said how long it has been going on.'),
    R('c6-nia', null, said('coworker Nia', 'Under the new rule, overtime starts after forty hours. I work four ten-hour days, so I would lose the extra pay I get now for the tenth hour each day. I would rather keep the current rule.'), [
      ['s1', 'Under the new rule, overtime starts after forty hours.'],
      ['s2', 'You work four ten-hour days.'],
      ['s3', 'You would lose the extra pay you get now for the tenth hour of each day.'],
      ['s4', 'You would rather keep the current rule.']],
      'Each line is something Nia said.'),
    R('c6-rosa', 's3', said('friend Rosa', 'The bus fare is going up again, the third time in four years. I know the budget is tight, but riders like me are the ones who pay.'), [
      ['s1', 'The fare is going up for the third time in four years.'],
      ['s2', 'You know the budget is tight.'],
      ['s3', 'Riders like you pay more than anyone else in the county.'],
      ['s4', 'Riders like you are the ones who pay.']],
      'Rosa said riders are the ones who pay, and nothing about riders paying more than anyone else in the county.'),
    R('c6-lee', 's4', said('coworker Lee', 'Free lunch for everyone costs the district two million dollars. I would put that money toward the kids who need it, and let the others bring a lunch.'), [
      ['s1', 'Free lunch for everyone costs two million dollars.'],
      ['s2', 'You would put that money toward the kids who need it.'],
      ['s3', 'You would let the others bring a lunch.'],
      ['s4', 'The district tried that plan last year and it failed.']],
      'Lee said nothing about the district having tried a plan.')
  ]);
  // items the lesson does not name: they wait for the review
  FC.items('debating', [
    K('r6-paul', 'line', 'Your friend Paul is against selling the family farm to a developer.', [
      ['s1', 'You: "They offered double the market price."'],
      ['s2', 'Paul: "Double the price, I know. It stays in the family."']], ['s2'],
      'Paul grants the price and keeps his view.'),
    K('r6-ines', 'result', 'Your coworker Ines is against opening the office on Saturdays.', [
      ['s1', 'You: "It would be voluntary."'],
      ['s2', 'Ines: "Voluntary turns into expected, expected turns into overtime, and half the team is gone by spring."']], ['s2'],
      'Ines says what voluntary Saturdays would turn into.'),
    R('r6-vera', 's3', said('neighbor Vera', 'I would rather the town fix the old pool than build a new one. The old one only needs a roof. I also like that it is close to the school.'), [
      ['s1', 'You would rather the town fix the old pool than build a new one.'],
      ['s2', 'The old one only needs a roof.'],
      ['s3', 'You think the people who want a new pool are being wasteful.'],
      ['s4', 'You like that it is close to the school.']],
      'Vera said nothing about anyone being wasteful.')
  ]);
})();

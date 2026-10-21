// Debating, lesson 4: character, emotion, argument. Every question is a short, real-looking exchange, and one decision: what the other person's last reply puts in question. The three
// answers are Aristotle's three means of persuasion (docs/research/debating.md, F9): whether they can trust you (good sense, honesty, goodwill, shown in what you say), how they feel
// (their frame of mind changes what they will accept), or the argument itself (short, from what they already accept). A reply that is about two of these is asked as a pair, and an
// argument that did not land is asked as too long, started from something they do not accept, or neither. The cue is always in the reply; tone never gives it away (a calm reply that
// states a feeling, an angry reply that questions a step, a friendly reply that questions you). The reading is graded; what to say next is written against a model line and never scored,
// because nothing tests it. The people and their lines are invented. Items a lesson does not name wait for the review.
(() => {
  const S = 'three-means';
  const REASON = {
    trust: 'The reply is about you: your sense, your honesty or whether you are on their side. More reasons would skip it. Aristotle says trust is built by what the speaker says, so the next line has to show good sense, honesty or goodwill.',
    feeling: 'The reply says how they feel, and says nothing against your reasons. Aristotle says people judge differently when pained or hostile than when pleased and friendly, so reasons will not be weighed fairly yet. What calms, in his account: being taken seriously, no mocking, a sorry where you owe one. That is a philosopher\'s account, not a tested method.',
    argument: 'The reply goes at the reasons, a step or a number, and says nothing about you or about how they feel. The answer is the argument: a step or two, from something they already accept.',
    'trust-feeling': 'One part questions you, and the other says how they feel. The trust part and the feeling part each need their own answer, and the argument is not in question.',
    'trust-argument': 'One part questions you, and the other goes at the reasons. The reply says nothing of how they feel.',
    'feeling-argument': 'One part says how they feel, and the other goes at the reasons. The reply does not question you.',
    length: 'The reply says the steps were too many to follow. Aristotle says a long chain of reasoning is hard to follow, so an argument should have few steps.',
    start: 'The reply refuses where the argument began. Aristotle says reasoning from a starting point people do not accept fails to win them. Start from something they already grant.',
    neither: 'The argument was short and began from something they would grant, and the reply does not go at it. It is about something else.'
  };
  const M = means => ({ means });
  // a single reading: the facet value is the means
  const one = (id, means, setup, lines, deciding, cue, write, then) => ({ id, strand: S, facets: M(means),
    blocks: [dbSetup(setup), dbTalk(...lines)], asks: [dbMeansAsk(means, then), ...(write ? [dbWriteAsk(write)] : [])], deciding, reason: `${cue} ${REASON[means]}` });
  // a reply about two things: the facet value is 'two'
  const two = (id, pair, setup, lines, deciding, cue, then) => ({ id, strand: S, facets: M('two'),
    blocks: [dbSetup(setup), dbTalk(...lines)], asks: [dbPairAsk(pair, then)], deciding, reason: `${cue} ${REASON[pair]}` });
  // the argument that did not land: the facet value is the build
  const built = (id, right, setup, lines, deciding, cue, then) => ({ id, strand: S, facets: { build: right },
    blocks: [dbSetup(setup), dbTalk(...lines)], asks: [dbBuildAsk(right, then)], deciding, reason: `${cue} ${REASON[right]}` });
  FC.items('debating', [
    // ----- the worked exchange: the hook of the lesson -----
    { id: 'w4-carl', strand: S, facets: M('trust'),
      blocks: [dbSetup('At a block meeting you give your neighbor Carl reasons for a $15 fee increase. You moved here two years ago.'), dbTalk(
        ['s1', 'You: "The fund covers two years of repairs, the roof is eighteen years old, and a leak costs three times what a patch does."'],
        ['s2', 'Carl: "Funny, coming from someone who has lived here two years. What would you know?"'])],
      asks: [dbMeansAsk('trust')],
      steps: [
        { id: 'read', does: 'Read their last line.', working: 'Carl says nothing about the fund, the roof or the patch. He wants to know what you know, and he brings up the two years.', ask: 'means' },
        { id: 'name', does: 'Say which of the three it is about.', working: 'It is about you: whether he can trust your sense of the place. He states no feeling, and he does not touch your reasons.' },
        { id: 'answer', does: 'Answer that one.', working: 'Another reason would skip his question. Show good sense and honesty in what you say, such as: "Two years is short, so I asked Dot, who has been on the board twenty. Will you check the repair log with me?"' }],
      deciding: ['s2'],
      reason: `Carl wants to know what you know and brings up how long you have lived there. ${REASON.trust}` },

    // ----- two more worked exchanges: an argument that did not land, and a reply about two things -----
    { id: 'w4-build', strand: S, facets: { build: 'length' },
      blocks: [dbSetup('You want your neighbor Rosa to back a crosswalk on Elm Street.'), dbTalk(
        ['s1', 'You: "Cars go 40 on Elm, so kids cross in gaps, and kids in gaps get hit, and a hit brings a lawsuit, and a lawsuit sends the bill to us, so vote yes on a crosswalk."'],
        ['s2', 'Rosa: "Hang on, I lost you at the lawsuit. Where are we now?"'])],
      asks: [dbBuildAsk('length')],
      steps: [
        { id: 'read', does: 'Read what the reply goes at.', working: 'Rosa does not reject a claim and does not talk about herself. She says she lost you at the lawsuit.', ask: 'build' },
        { id: 'check', does: 'Check the two ways an argument fails.', working: 'Too long: the chain runs from speed to kids to a hit to a lawsuit to a bill. Starts from something she does not accept: she names no claim she rejects. So it is too long.' },
        { id: 'fix', does: 'Cut it down.', working: 'Keep what carries the weight: "Cars go 40 and kids cross in gaps. A crosswalk is the cheap fix."' }],
      deciding: ['s1', 's2'],
      reason: `Rosa says she lost you at the lawsuit. ${REASON.length}` },
    { id: 'w4-pair', strand: S, facets: M('two'),
      blocks: [dbSetup('Your coworker Cleo questions the sales figure you quoted.'), dbTalk(
        ['s1', 'You: "Sales rose six percent last quarter."'],
        ['s2', 'Cleo: "You are on commission, so of course you say that. And you never said which quarter you are comparing to."'])],
      asks: [dbPairAsk('trust-argument')],
      steps: [
        { id: 'first', does: 'Read the first part.', working: 'Cleo says you are on commission, so of course you say that. That is about you: whether you are honest.' },
        { id: 'second', does: 'Read the second part.', working: 'She says you never said which quarter. That goes at the figure. She states no feeling.', ask: 'means' },
        { id: 'answer', does: 'Answer each part.', working: 'Answer the trust part: "Fair, I am on commission, so here is the report to check." Then the argument: "Compared with the same quarter last year."' }],
      deciding: ['s2'],
      reason: `Cleo says you are on commission, and then says you never named the quarter. ${REASON['trust-argument']}` },

    // ----- group 1: one reading each -----
    one('a4-ravi', 'trust', 'You tell your coworker Ravi that the new scheduling software will save the team time. Your friend Sam works for the company that makes it.', [
      ['s1', 'You: "It cuts the weekly schedule from three hours to one."'],
      ['s2', 'Ravi, grinning: "Ha. Did Sam get you a nice commission?"']], ['s2'],
      'Ravi grins, but his question is whether you are honest.',
      'Fair question. Sam works there, and I get nothing from it. Check the trial week yourself.',
      { argument: 'Ravi does not touch the three hours or the one hour. He brings up Sam.', feeling: 'Ravi is grinning and states no feeling of his own.' }),
    one('a4-walt', 'feeling', 'You and your brother-in-law Walt are talking about the school levy at a barbecue.', [
      ['s1', 'You: "The levy is about $60 a year for most homes."'],
      ['s2', 'Walt: "Rough week, and my head is nowhere near the levy. Can we leave it?"']], ['s2'],
      'Walt calmly says how he feels and says nothing about the $60.',
      'Sounds like a heavy week. We can leave the levy for another day.',
      { argument: 'Walt does not question the $60 or any step. He says how he is.', trust: 'Walt does not question you. He talks about his own week.' }),
    one('a4-beth', 'argument', 'Your neighbor Beth is against the new bike lane. You tell her it will not slow the cars.', [
      ['s1', 'You: "The city\'s test found the same travel times."'],
      ['s2', 'Beth: "I don\'t see how one test on one street settles it. Which street, and which month?"']], ['s2'],
      'Beth sounds sharp, but her questions are about the test.',
      'It was Main Street, in March, and the travel times matched. Here is the page.',
      { feeling: 'Beth sounds sharp, but she states no feeling of her own. Her questions are about the test.', trust: 'Beth does not question you. She questions the test.' }),

    // ----- group 2: mixed in, with pairs and arguments that did not land -----
    one('b4-joy', 'trust', 'You suggest a weekly chore chart to your roommate Joy.', [
      ['s1', 'You: "Let\'s rotate the dishes every week."'],
      ['s2', 'Joy: "Whose side are you on, anyway?"']], ['s2'],
      'Joy wants to know whose side you are on.',
      'I am on your side. Which jobs feel unfair to you?'),
    two('b4-lu', 'feeling-argument', 'You tell your sister Lu that the town ordinance rules out the fence she wants.', [
      ['s1', 'You: "The ordinance says no fence over four feet."'],
      ['s2', 'Lu: "I am so upset I am shaking. Besides, it says four feet on the street side, not the back."']], ['s2'],
      'Lu says how she feels, and then goes at what the ordinance says.'),
    one('b4-mike', 'feeling', 'You teased your friend Mike about his old truck while talking about a car-share plan.', [
      ['s1', 'You: "Your truck is a museum piece, Mike. The car-share would cost you less."'],
      ['s2', 'Mike: "My face is still burning from the joke. Give me a minute before we go on."']], ['s2'],
      'Mike says his face is still burning from your joke.',
      'That crack was unfair, and I am sorry. Take your minute.'),
    built('b4-long', 'length', 'You want your neighbor Hugh to back the $40 stormwater fee.', [
      ['s1', 'You: "The fee pays for drains, drains stop flooding, flooding cracks asphalt, cracked asphalt costs the city repairs, repairs drain the same fund, so the fee ends up saving money."'],
      ['s2', 'Hugh: "Sorry, you went from drains to asphalt to the fund and I lost where we are."']], ['s1', 's2'],
      'Hugh says he lost where you were.'),
    built('b4-start', 'start', 'You want your coworker Nora to approve the rollout of the new billing software.', [
      ['s1', 'You: "The pilot at the Dayton site ran flawlessly, so there is no reason our rollout will be rough. Billing will be fine, and everyone will be trained by April."'],
      ['s2', 'Nora: "That Dayton pilot crashed twice in its first week, from what I read."']], ['s1', 's2'],
      'Nora says the pilot you rely on crashed twice.')
  ]);
  // the check: eight new exchanges, none shown in the practice
  FC.items('debating', [
    one('c4-trust', 'trust', 'You tell your friend Lou that restaurants should stop adding the tip for big groups. You have never worked in a restaurant.', [
      ['s1', 'You: "Customers feel tricked when a tip shows up on the bill."'],
      ['s2', 'Lou: "Not exactly your field, is it? Why should anyone here take your word?"']], ['s2'],
      'Lou says it is not your field and wonders why anyone should take your word.'),
    one('c4-feeling', 'feeling', 'You and your sister Kay disagree about selling Dad\'s truck.', [
      ['s1', 'You: "It is worth about $9,000, and it sits in the driveway."'],
      ['s2', 'Kay: "Ugh. Everything about Dad\'s truck makes my chest tight. Can we drop it?"']], ['s2'],
      'Kay says her chest is tight and wants to drop it.'),
    one('c4-arg', 'argument', 'You tell Ms. Ortiz, a library board member, that evening hours would bring in more readers.', [
      ['s1', 'You: "Two branches that opened late saw more visits."'],
      ['s2', 'Ms. Ortiz: "Two branches is a small sample. Did visits rise because of the hours, or because both stand near new apartments?"']], ['s2'],
      'Ms. Ortiz questions the two branches and what else changed.'),
    two('c4-p1', 'trust-argument', 'Your coworker Ana questions the budget numbers you shared.', [
      ['s1', 'You: "Here is the budget. Spending rose four percent."'],
      ['s2', 'Ana: "The table skips last year entirely. And the vendor pays you, so of course you like it."']], ['s2'],
      'Ana says the table skips a year, and then says the vendor pays you.'),
    two('c4-p2', 'trust-feeling', 'You tell your uncle Rob that a teen curfew lowered break-ins in two towns.', [
      ['s1', 'You: "Two towns saw break-ins fall after a curfew."'],
      ['s2', 'Rob: "You don\'t even have kids. And I am too angry about this to hear another word."']], ['s2'],
      'Rob says you have no kids, and then says he is too angry to listen.'),
    built('c4-long', 'length', 'You are explaining to your aunt Vi why her library branch should stay open.', [
      ['s1', 'You: "People read here, reading raises scores, scores raise home values, values bring in taxes, taxes pay for the branch, so the branch pays for itself."'],
      ['s2', 'Vi: "Mm. Where did the taxes come in again? I have lost the thread."']], ['s1', 's2'],
      'Vi says she has lost the thread at the taxes.'),
    built('c4-start', 'start', 'You are telling your friend Tom to skip the extended warranty on his new washer.', [
      ['s1', 'You: "Those warranties are all scams, because the company pockets the fee and never pays a claim. So skip the plan on your new washer and keep the money."'],
      ['s2', 'Tom: "My brother-in-law got his washer fixed free under one. So no."']], ['s1', 's2'],
      'Tom says a warranty paid for his brother-in-law\'s washer, which breaks "never pays a claim".'),
    built('c4-neither', 'neither', 'You tell your neighbor Mr. Lang the drain fee is worth $40.', [
      ['s1', 'You: "The drains flooded our street twice last year, and the fee pays to clear them before the next storm. That is $40 to keep water out of basements."'],
      ['s2', 'Mr. Lang: "I can\'t talk about this tonight. My basement flooded and I am still sick over it."']], ['s2'],
      'Mr. Lang says his basement flooded and he is still sick over it.')
  ]);
  // items the lesson does not name: they wait for the review
  FC.items('debating', [
    one('r4-feeling', 'feeling', 'You made a joke about your friend Gus\'s father while arguing about the neighborhood cleanup.', [
      ['s1', 'You: "Your dad would have skipped the cleanup too."'],
      ['s2', 'Gus: "Give me a second. That joke about my dad stung."']], ['s2'],
      'Gus says your joke stung.'),
    two('r4-pair', 'feeling-argument', 'You tell your brother Tim that the bus fare is going up 25 cents.', [
      ['s1', 'You: "The fare goes up 25 cents next month."'],
      ['s2', 'Tim: "I am still shaking from the layoff news. And 25 cents on what? You never said the old fare."']], ['s2'],
      'Tim says he is shaking, and then wants to know what the 25 cents is added to.'),
    built('r4-build', 'length', 'You are telling your friend Drew to take the train to the game.', [
      ['s1', 'You: "Parking costs $30, traffic adds an hour, an hour means we miss the start, missing the start means missing the first inning, so the train wins."'],
      ['s2', 'Drew: "Wait, which of those is the reason we are taking the train?"']], ['s1', 's2'],
      'Drew cannot tell which of the links is the reason.')
  ]);
})();

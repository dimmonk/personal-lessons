// Debating, lesson 2: why people dig in. Every question is a short, real-looking exchange in which someone resists, and one decision: what the disagreement is about. The three readings
// are always the same three (a fact that someone could check; a view about a group or a policy; the two mixed), each is right in some scenes, and belonging to a side is written into
// fact scenes and view scenes alike, so no word gives the answer. The move comes in the feedback, with the studies as the reasons: the correction for a checkable fact, even from
// someone defending a side (Wood and Porter's issues that split people by side); a true story for a view (Kalla and Broockman's attitude tests); both for a mix, each on its own part
// (docs/research/debating.md, F2 to F5). "Accepted and then dropped" is not graded: no source read says what to do then. The people and their lines are invented.
// Items a lesson does not name wait for the review.
(() => {
  const S = 'why-dig-in';
  const R = (read, setup, lines, deciding, cue, id) => ({ id, strand: S, facets: { disagreement: read }, blocks: [dbSetup(setup), dbTalk(...lines)], asks: [dbReadAsk(read)], deciding, reason: `${cue} ${REASON[read]}` });
  const REASON = {
    fact: 'The move is the correction, even when the person belongs to a side. In the studies, including on issues that split people sharply by side, people who read a correction usually moved toward it, at least somewhat, and none of 52 issues showed a correction making people believe the claim more. The studies suggest a small move, though they were surveys and not live talks.',
    view: 'The move is a true story about someone affected, in place of more argument. In the door-to-door tests on immigration, arguments alone had no average effect, and conversations that added a story lowered attitudes against immigrants a little for at least four months. Two more tests, on transgender rights, found the same small drop. Where the topic was not tested, this is the nearest evidence, not proof.',
    both: 'Answer the two parts separately: the correction for the part that can be checked, and a true story for the view. The correction is backed by the studies of corrections (a small move, at least somewhat); the story by the door-to-door tests on immigration and transgender rights (arguments alone had no average effect, a story lowered attitudes a little). Where the topic was not tested, the story is the nearest evidence, not proof.'
  };
  FC.items('debating', [
    // ----- the worked scene: the hook of the lesson -----
    { id: 'w2-uncle', strand: S, facets: { disagreement: 'fact' },
      blocks: [dbSetup('Your uncle has shared posts from the same group about immigration for years. This week he shared a false figure about crime in your town. You sent him the county\'s own crime report.'), dbTalk(
        ['s1', 'Uncle: "Everybody in our group knows those numbers are right. That report is a smear."'],
        ['s2', 'Then he shared the figure again.'])],
      asks: [dbReadAsk('fact')],
      steps: [
        { id: 'split', does: 'Split what it is about.', working: 'The crime figure is a fact you can check against the county report. He is defending his group, but the argument is over a figure, not over how he feels about people.', ask: 'read' },
        { id: 'backfire', does: 'Rule out backfire.', working: 'Backfire is a correction making people believe the false claim more. Researchers tried to cause it on 52 issues, with over 10,000 people, including issues that split people sharply by side. They found none that did. One angry reply is not evidence that yours did.' },
        { id: 'move', does: 'Pick the move.', working: 'For a fact, the move is still the correction. People usually moved toward it at least somewhat. If he turns to how he feels about those people, that is a view, and then a true story is the move with evidence.' }],
      deciding: ['s1'],
      reason: REASON.fact },

    // ----- group 1 -----
    R('fact', 'Lou keeps going to the old stop for the 14 bus. You have seen the city notice.', [
      ['s1', 'Lou: "The 14 stops on Main. It always has."'],
      ['s2', 'You: "The city notice says it moved to Elm Street last month. Here it is."'],
      ['s3', 'Lou: "I haven\'t seen any notice. Show me where it says that."']], ['s3'], 'Lou disputes a notice you can show him.', 'a2-bus'),
    R('view', 'You are talking with your sister Kim about transgender rights.', [
      ['s1', 'You: "Here is a study that found the policy did not hurt anyone."'],
      ['s2', 'Kim: "I don\'t care what the numbers say. It feels wrong to me, and my church teaches the same."']], ['s2'], 'Kim answers with how she feels, not with a figure.', 'a2-church'),
    R('fact', 'Your cousin Ray has argued against the new immigration bill for years. You sent him the cost estimate from a neutral agency.', [
      ['s1', 'Ray: "That estimate is spin. The real cost is triple."'],
      ['s2', 'Ray: "Everybody who follows this knows it."']], ['s1'], 'The dispute is over a cost figure, which can be checked, even though the bill is a policy.', 'a2-ray'),
    R('both', 'You are talking with your uncle about your town.', [
      ['s1', 'Uncle: "Those people are ruining this town, and everybody knows crime is up 40 percent since they came."'],
      ['s2', 'You: "The county report shows crime is flat."']], ['s1'], 'He mixes a figure that can be checked (up 40 percent) with a view about "those people".', 'a2-town'),

    // ----- group 2 -----
    R('view', 'Josh and Ellen are talking about immigration. Ellen brings a table of numbers.', [
      ['s1', 'Ellen: "Here are the numbers on who actually comes in."'],
      ['s2', 'Josh: "I don\'t want to see a table. I don\'t want more of them in this country, period."']], ['s2'], 'Josh refuses the table and states what he wants for the country.', 'b2-poll'),
    R('fact', 'Mo tells his neighbor Ben that the association fee is going up because of a new roof.', [
      ['s1', 'Ben: "I thought the fee was going down. Where did you see that?"'],
      ['s2', 'Mo: "It\'s in the board minutes."'],
      ['s3', 'Ben: "The board always fudges those. Send them and I\'ll check the arithmetic."']], ['s1', 's3'], 'Ben disputes a fee and offers to check the arithmetic.', 'b2-fee'),
    R('view', 'You are talking with your coworker Tess about the proposed bike lanes on Main Street.', [
      ['s1', 'You: "The city\'s study found the lanes would not slow traffic."'],
      ['s2', 'Tess: "I don\'t care about the study. Bike lanes are a waste of a good street, and that is that."']], ['s2'], 'Tess gives her judgment of the lanes and puts the study aside.', 'b2-lanes'),
    R('both', 'Josh is talking with his neighbor about a bike path planned for their street.', [
      ['s1', 'Josh: "I don\'t want it here. It just isn\'t right for this neighborhood. And it costs $2 million, I read it."'],
      ['s2', 'Neighbor: "The city\'s plan says $400,000."']], ['s1'], 'Josh gives a view ("isn\'t right") and a cost that can be checked ($2 million).', 'b2-path'),
    R('fact', 'You are talking with your neighbor Walt, who is active in his union local, about the county\'s numbers.', [
      ['s1', 'You: "The county says 412 people used the shelter last year."'],
      ['s2', 'Walt: "Those county numbers are made up. The real count was under 200."']], ['s2'], 'Walt disputes a count, which can be checked, in the name of his local.', 'b2-walt')
  ]);
  // the check: eight new exchanges, none shown in the practice
  FC.items('debating', [
    R('fact', 'Carol\'s brother Ed has defended his side of a political issue for years. She hands him a report.', [
      ['s1', 'Carol: "The report says the budget went up 4 percent, not 14."'],
      ['s2', 'Ed: "Reports like that are always slanted. It went up 14."']], ['s2'], 'Ed disputes a percentage in a report.', 'c2-ed'),
    R('view', 'Isaac wants to talk with his neighbor Pam about transgender policy.', [
      ['s1', 'Isaac: "A stack of studies says the policy works fine."'],
      ['s2', 'Pam: "Studies don\'t matter to me. I think the policy is wrong, and nothing you read me will change that."']], ['s2'], 'Pam states what she thinks of the policy and puts the studies aside.', 'c2-pam'),
    R('both', 'You are talking with a coworker, Dee, about a new immigration rule.', [
      ['s1', 'Dee: "That rule is wrong, plain and simple, and the data show it pushed unemployment up 5 points."'],
      ['s2', 'You: "The labor department table shows no change."']], ['s1'], 'Dee gives a view ("wrong, plain and simple") and a figure that can be checked (5 points).', 'c2-rule'),
    R('fact', 'Mira tells her friend Jo, a strong supporter of one party, that a new law has taken effect.', [
      ['s1', 'Jo: "That law can\'t have passed. They never had the votes."'],
      ['s2', 'Mira: "It is in the state register, dated last week. Here."']], ['s1'], 'Jo disputes whether a law passed, which the register settles.', 'c2-law'),
    R('view', 'Rosa lives near a lot where the town wants to build a shelter. She is talking with a neighbor.', [
      ['s1', 'Neighbor: "The town\'s report says nearby crime does not rise."'],
      ['s2', 'Rosa: "I don\'t want it on our street. It is not right for this neighborhood, report or no report."']], ['s2'], 'Rosa says what she wants for the street and what is "right" for it.', 'c2-shelter'),
    R('fact', 'Your coworker Dan speaks for the union at every meeting. You show him a number from the contract.', [
      ['s1', 'You: "The contract costs $1,800 per member."'],
      ['s2', 'Dan: "That is management\'s number. It is $2,600. The union checked."']], ['s2'], 'Dan disputes a dollar figure, which can be checked.', 'c2-dan'),
    R('both', 'Rosa is talking with a neighbor about the same shelter.', [
      ['s1', 'Rosa: "Shelter on our street? No. It isn\'t right. And the town\'s report is made up: there were 12 break-ins near the last one."'],
      ['s2', 'Neighbor: "The police log shows two."']], ['s1'], 'Rosa gives a view ("it isn\'t right") and a count that can be checked (12 break-ins).', 'c2-both'),
    R('view', 'Bea is talking with a neighbor about the school district\'s plan to bus children across town.', [
      ['s1', 'Neighbor: "The district\'s study says the bus rides average 20 minutes."'],
      ['s2', 'Bea: "I don\'t care how long. It is wrong to send our kids across town, and I will not be argued out of it."']], ['s2'], 'Bea says it is wrong and puts the figure aside.', 'c2-bus')
  ]);
  // items the lesson does not name: they wait for the review
  FC.items('debating', [
    R('view', 'Your brother-in-law Cal is talking with you about the immigration bill.', [
      ['s1', 'You: "The bill\'s own text says something different from the flyer."'],
      ['s2', 'Cal: "I don\'t care what it says. I do not want more people coming in, and I never will."']], ['s2'], 'Cal states what he wants and puts the text aside.', 'r2-cal'),
    R('fact', 'Deb tells her coworker that the deadline moved to the 15th.', [
      ['s1', 'Coworker: "I have it down as the 30th. Who said the 15th?"'],
      ['s2', 'Deb: "The project lead, in this morning\'s email."'],
      ['s3', 'Coworker: "I haven\'t opened it yet. Let me read it."']], ['s3'], 'The dispute is over a date an email settles.', 'r2-deadline'),
    R('both', 'Hal is talking with a friend about the new tax on sugary drinks.', [
      ['s1', 'Hal: "It is a cruel tax on poor people, and it has cost the city 300 jobs already."'],
      ['s2', 'Friend: "The jobs report shows no job loss."']], ['s1'], 'Hal gives a view ("cruel") and a count that can be checked (300 jobs).', 'r2-tax')
  ]);
})();

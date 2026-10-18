// Psychology, lesson 2, a mind talking itself into something: the worked story and the stories of the practice and the check. Each is told apart by
// what came first (an act, an answer, the evidence), how the evidence is treated, and which way the reason points. The worked story is the owner's
// course Drill 2.1 (3), reworded so the answer is fixed before anything is done; the vegan sauce in the check is its Drill 2.1 (1); the rest are
// invented, and no real person is described. One story per shape: the check uses shapes the practice never showed (dissonance by the belief sliding,
// confirmation by asking only those who agree and by no longer looking at what goes against it, motivated reasoning to keep a habit, sunk cost in a relationship, a change
// of mind about a person). Two stories on the five questions are mixed into the last set. Stories not used in the lesson wait for the review.
(() => {
  const S = 'self-justification', E = 'five-questions';
  const ACTS = ['choose', 'same-bar', 'decide-test', 'forward', 'support', 'find-out'];
  const C = spec => psyCase({ strand: S, names: PSY_NAMES.l2, acts: ACTS, ...spec });
  const E1 = spec => psyCase({ strand: E, ...spec });
  FC.items('psychology', [
    // ----- the worked story: the answer picked before anything was done -----
    C({ id: 'w2-nephew', story: 'Before the job on her team was even posted, Rachel told her husband it should go to her nephew: "He needs a break." When six applications came in, she opened his first and spent the evening writing down every reason he was the best fit. Nobody has been hired yet.',
      asks: { kind: 'reasoning', name: 'motivated' },
      steps: [
        { id: 'q1', does: 'Question 1. What is going on?', working: 'Rachel is reasoning toward an answer she wants. Nobody has been hired, told or acted on yet. Question 1: a mind talking itself into something.', ask: 'kind' },
        { id: 'q3', does: 'What came first, the nearest look-alike, and what would prove the read wrong. Then name it.', working: 'What came first: the answer, "it should go to her nephew", before the job was posted, because she wants it. Then the looking, which hunts for reasons. Look-alike: dissonance, which needs an act first and a story after; nothing has been done yet. Answer, then looking: motivated reasoning. It would be wrong if she had written down what the job needs before reading, and judged all six by it.', ask: 'name' }],
      reason: 'The answer was picked before the job was even posted, because she wants it, and the reading hunted for reasons. Answer, then looking: motivated reasoning. No act has happened, so it cannot be dissonance.' }),

    // ----- guided: act first beside answer first, then two standards -----
    C({ id: 'p-dinner', story: 'Bridget has told her kids for years that phones stay off at dinner. Last night she answered three work emails at the table. This morning she said, "Work does not count. That is my job, not scrolling."',
      asks: { name: 'dissonance' },
      reason: 'The act came first and broke her own rule; the story came after to excuse it, and the rule still stands. Act, then story: dissonance.' }),
    C({ id: 'p-denver', story: 'The minute Wren heard her favorite band was playing Denver in June, she decided the family vacation would be Denver. That night she wrote a list of reasons Denver beats the beach for the kids.',
      asks: { name: 'motivated' },
      reason: 'The answer ("Denver") came first, because she wants the concert, then a hunt for reasons. Answer, then looking: motivated reasoning. Bridget, just before, had the act first and the story after.' }),
    C({ id: 'p-shirt', story: 'Tobias has believed for years that his lucky shirt helps his bowling team. He brings up every win he wore it for. When they lose with him in it, he says the lanes were oily that night.',
      asks: { name: 'confirmation' },
      reason: 'A belief already held, and two standards: wins count as proof, losses are explained away. Confirmation bias.' }),

    // ----- which way the reason points; then ordinary beside too little to tell -----
    C({ id: 'p-buffet', story: 'At the buffet, Greta was full after one plate. She went back for two more: "It was $38 a person. I am getting my money\'s worth." She felt sick all evening.',
      asks: { name: 'sunk' },
      reason: 'Her reason points back at the $38, which is spent whether she eats or not. Forward, more food only made her sick. Sunk cost.' }),
    C({ id: 'p-basement', story: 'Nolan has spent $9,000 finishing his basement himself. Two contractors told him the rest would cost $25,000 and add $10,000 to the house\'s value. He stopped work, and told his wife a quote under $10,000 would have kept him going.',
      asks: { name: 'revision' },
      reason: 'The quotes came first and his plan moved; he can say what would have moved him the other way. An honest change of mind.' }),
    C({ id: 'p-store', story: 'Ivy\'s brother has worked at the same hardware store for eight years, and says he plans to stay.',
      asks: { name: 'too-little' },
      need: 'His own reason for staying: whether it points back at the years ("I have put in too much to leave") or forward (he likes the work, the pay is fair).',
      reason: 'Too few facts: no reason of his is given at all, and eight years in one job can be a fine choice. Too little to tell.' }),
    C({ id: 'p-thermo', story: 'Two roommates disagree about the thermostat. One wants 68 to save on the bill, the other wants 72 because she is cold. They split the difference at 70.',
      asks: { name: 'ordinary' },
      reason: 'The facts show normal reasons on both sides (the bill, the cold) and a fair settlement. Ordinary. Ivy\'s story, just before, gave no reason at all.' }),

    // ----- the last set: every name, shuffled, with two stories on the five questions -----
    C({ id: 'p-card', story: 'Thea calls herself careful with money. Last month she put a $900 TV on a 29% credit card. When her sister sent her an article on card debt, Thea said, "Those sites just want to sell you their own card."',
      asks: { name: 'dissonance' },
      reason: 'The act clashes with how she sees herself, and when the bad news arrives she jabs at its source. Act, then the clash eased: dissonance.' }),
    C({ id: 'p-quiet', story: 'Silas has thought for a year that Paloma, on his team, is lazy. When she is quiet in meetings, he says she has checked out. When she stays late, he says she is making up for wasted time.',
      asks: { name: 'confirmation' },
      reason: 'A belief already held, and every sign read to fit it, even staying late. Confirmation bias.' }),
    C({ id: 'p-shop', story: 'Ray wants the oil-change shop to pay for the new noise in his car. Before any mechanic had looked, he had decided it was their fault. Only then did he go through the shop\'s receipt, line by line, for anything they had touched near the engine.',
      asks: { name: 'motivated', act: 'decide-test' },
      reason: 'The answer ("their fault") came before anyone looked, because he wants them to pay. One-sided reading too, but the answer came first: motivated reasoning. The fix: name what would change his mind before looking.' }),
    C({ id: 'p-feature', story: 'Vince\'s team has spent eighteen months on a new app feature that customers ignored in every test. At the planning meeting he says, "We have put eighteen months into this. We have to launch it."',
      asks: { name: 'sunk' },
      reason: 'His reason points back at the eighteen months, spent either way. Nothing points forward: customers ignore it. Sunk cost.' }),
    C({ id: 'p-vitamin', story: 'Zoe swore by vitamin C at the first sniffle. Her doctor walked her through the large studies: no fewer colds. She stopped buying it, and told her mom a good study showing fewer colds would bring her back.',
      asks: { name: 'revision', act: 'support' },
      reason: 'The evidence came first and her belief moved, and she can say what would move her back. An honest change of mind: nothing to fix.' }),
    C({ id: 'p-potluck', story: 'Bea forgot the dessert she had promised for the potluck. "Oh no, I am so sorry," she said, and picked up a pie on the way.',
      asks: { name: 'ordinary' },
      reason: 'The facts show a normal slip, owned and put right. Ordinary: nothing to fix.' }),
    C({ id: 'p-coffee', story: 'Quentin told his wife the new coffee place beats the old one, and he has gone there every morning since.',
      asks: { name: 'too-little', act: 'find-out' },
      need: 'How he got there: whether he tried both fairly, and what he does with a bad cup at the new place or a good one at the old.',
      reason: 'Too few facts: one opinion, with nothing about how he weighed anything. Too little to tell, so find out more before naming it.' }),
    E1({ id: 'e-gas', story: 'On the first night of the trip, when Hollis asked his brother to split the gas money, his brother told the whole table that Hollis "always ruins vacations".',
      asks: { kind: 'move' },
      reason: 'Aimed at Hollis, in one exchange, to get out of paying. Question 1: a move made on someone, not a mind talking itself into something.' }),
    E1({ id: 'e-hospital', story: 'The week her daughter was in the hospital, Renee missed two deadlines and cried in a meeting. Her boss says it is the first time in nine years.',
      asks: { kind: 'ordinary', span: 'situation' },
      reason: 'A child in the hospital, and the first time in nine years (Question 2: a reaction to a hard time). A fair reaction (Question 1: ordinary).' }),
    E1({ id: 'e-complaints', story: 'For a decade, with every boss, coworker and neighbor he has had, Wallace has filed a formal complaint within a month of meeting them.',
      asks: { kind: 'pattern', span: 'years' },
      reason: 'Many people (Question 1: a lasting way someone is), for a decade (Question 2: over and over, for months or years).' }),

    // ----- the check: eight stories in shapes the practice never showed -----
    C({ id: 'k-sauce', story: 'Simone has been vegan for six years. Since she started sharing her roommate\'s cheese pizza on Fridays, she has begun telling friends that being vegan is "really about meat, not dairy".',
      asks: { name: 'dissonance' },
      reason: 'The act (the pizza) clashed with her belief, and the belief slid to fit what she does. Act first, then the clash eased: dissonance.' }),
    C({ id: 'k-choir', story: 'Margo has been sure for two years that the new choir director is ruining the choir. When she wants to know how a concert went, she checks with the three singers who quit over him, never the twenty who stayed.',
      asks: { name: 'confirmation' },
      reason: 'A belief already held, and evidence sought only where it will agree. No answer picked on the spot for something she wants, no act to excuse: confirmation bias.' }),
    C({ id: 'k-steak', story: 'Barnaby does not want to give up steak. A week before his cholesterol test, he decided cholesterol numbers do not matter, and spent the weekend gathering articles that say so to show his doctor.',
      asks: { name: 'motivated' },
      reason: 'The answer ("they do not matter") was picked first, because he wants to keep his steak, and the looking came after to back it. Motivated reasoning.' }),
    C({ id: 'k-sixyears', story: 'Lila has been with her boyfriend for six years. They fight most nights, want different cities and different futures, and she says she is unhappy. "I cannot throw away six years," she tells her sister.',
      asks: { name: 'sunk', act: 'forward' },
      reason: 'Her reason points back at the six years; everything forward (the fights, the different futures) points the other way. Sunk cost: judge the next year on its own worth.' }),
    C({ id: 'k-email', story: 'Ezra was sure his coworker had taken credit for his report, and had been cold to her for a week. Then he saw her email naming him as the author to the whole department. He apologized for the cold week.',
      asks: { name: 'revision' },
      reason: 'The evidence came, and his belief moved with it, and he acted on it. An honest change of mind.' }),
    C({ id: 'k-vote', story: 'Ted changed his vote on the budget halfway through the meeting.',
      asks: { name: 'too-little' },
      need: 'What changed his vote: new numbers shown in the meeting, or only who was in the room, and whether he can say what moved him.',
      reason: 'Too few facts: nothing about what moved him. A changed vote can be an honest change of mind or something else. Too little to tell.' }),
    C({ id: 'k-house', story: 'Delia lost the bidding on a house she loved. She was glum all evening, told her husband, "That one hurt," and was back looking at listings on Saturday.',
      asks: { name: 'ordinary' },
      reason: 'The facts show a normal letdown, felt and moved past. Ordinary: nothing to fix.' }),
    C({ id: 'k-metric', story: 'Gordon has said for two years that his store\'s loyalty program pays off. When its sign-ups fell last quarter, he stopped checking them, and he still quotes the repeat-visit numbers, which went up, at every meeting.',
      asks: { name: 'confirmation' },
      reason: 'A belief already held: the number that fits is quoted, the one against it is never looked at again. Confirmation bias.' }),

    // ----- held back for the review on later days -----
    C({ id: 'r-tip', story: 'Arlo calls himself a big tipper. He left nothing at the diner on Sunday, then told his friend, "The service was slow anyway."',
      asks: { name: 'dissonance' },
      reason: 'The act broke his own picture of himself, and an excuse came after. Act first, then the clash eased: dissonance.' }),
    C({ id: 'r-cat', story: 'Ines wants her roommate\'s cat gone. Before reading anything, she decided her rash was a cat allergy, then searched "cat allergy rash" and sent her roommate three articles.',
      asks: { name: 'motivated' },
      reason: 'The answer came first, because she wants the cat gone, and the search hunted for backing. Answer, then looking: motivated reasoning.' }),
    C({ id: 'r-rower', story: 'Oscar bought a $1,200 rowing machine. It hurts his back, and he would rather run. "I paid too much for it to go jogging instead," he says, and rows every morning.',
      asks: { name: 'sunk' },
      reason: 'His reason points back at the $1,200, spent either way. Forward, it hurts his back. Sunk cost.' }),
    C({ id: 'r-ev', story: 'Joaquin was sure electric cars were a fad. After driving one for a month for work and adding up what charging cost him, he put one on his shortlist.',
      asks: { name: 'revision' },
      reason: 'His own month of evidence came first, and his belief moved with it. An honest change of mind.' })
  ]);
})();

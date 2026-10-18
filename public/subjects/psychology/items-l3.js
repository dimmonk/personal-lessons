// Psychology, lesson 3, traps in your own head: the worked story and the stories of the practice and the check. NOT in the owner's course: a practical
// addition from cognitive therapy (Beck 1979; Burns 1980): catch the thought in its own words, test it against the facts; a trap (catastrophizing, mind
// reading, all-or-nothing) fails the test and is let go, a fair worry passes it and gets a plan. Every story gives the person's own thought in quotes
// with the facts around it, so only the facts decide; each inner pair puts the same thought over two sets of facts. Question 1 answers "a mind talking
// itself into something" for every story here, so it is not asked. The response is asked where it is a real choice (a fair worry, ordinary, too little
// to tell, and the trap of each pair and two in the check). One story of lesson 2 is mixed in (strand self-justification). The r3- stories wait for
// the review. All stories are invented and describe no real person.
(() => {
  const T = 'thinking-traps', J = 'self-justification';
  const C = spec => psyCase({ strand: T, names: PSY_NAMES.l3, acts: PSY_ACTS.l3, ...spec });
  const R = spec => psyCase({ strand: J, names: PSY_NAMES.l2, ...spec });
  FC.items('psychology', [
    // ----- the worked story -----
    C({ id: 'w3-boss', story: '“She said, ‘Can we talk tomorrow?’ That\'s it. I\'m getting fired,” Carmen thinks on the drive home. Her last review was good, and her boss has called short talks like this before, about schedules.',
      asks: { name: 'catastrophe' },
      steps: [
        { id: 'name', does: 'Catch the thought, test it, then name it.', working: 'The thought, in her words: “I\'m getting fired.” The test. Evidence for it: one sentence. Evidence against it: a good review, and earlier talks about schedules. The likeliest outcome is a talk about schedules. The thought fails the test: one small sign has become the worst outcome, taken as certain. Catastrophizing. Question 4, the nearest look-alike: a fair worry would need facts behind it, such as a warning or layoffs. Question 5, what would prove it wrong: the talk itself. So she lets the thought go; there is nothing real to plan for yet.', ask: 'name' }],
      reason: 'One sentence became firing, taken as certain, and the facts point the other way. Catastrophizing: test the thought and let it go. A fair worry would have facts behind it.' }),

    // ----- set 1: the same thought over two sets of facts -----
    C({ id: 't3-car-trap', story: '“The engine is dying, and I need this car for work,” Hal thinks. The car rattled once this morning, on a bumpy road. It passed inspection last month.',
      asks: { name: 'catastrophe', act: 'test-thought' },
      reason: 'One rattle on a rough road became a dying engine, taken as certain, against a fresh inspection. Catastrophizing: test the thought. With weeks of rattling and a mechanic\'s warning, the same words would be a fair worry.' }),
    C({ id: 't3-car-fair', story: '“The engine is dying, and I need this car for work,” Theo thinks. It has rattled for a month, louder each week. The warning light came on yesterday, and the mechanic said it may not last the month.',
      asks: { name: 'fairworry', act: 'plan' },
      reason: 'A month of rattling, a warning light and a mechanic back the thought, so it passes the test. A fair worry: plan a repair quote, savings, a ride to work. With one rattle and a fresh inspection, it would be catastrophizing.' }),
    C({ id: 't3-room-trap', story: '“My roommate is fed up with me,” Nadia thinks. Her roommate has said little for two days and stays in her room. She has three finals this week.',
      asks: { name: 'mindread', act: 'test-thought' },
      reason: 'Sure of what her roommate thinks, with no word from her, and finals explain the quiet. Mind reading: test the thought; she can simply check with her roommate. Had the roommate said it, it would be a fair worry.' }),
    C({ id: 't3-room-fair', story: '“My roommate is fed up with me,” Tamsin thinks. Her roommate left a note on the sink: “Third time asking. Please do your dishes.”',
      asks: { name: 'fairworry', act: 'plan' },
      reason: 'The roommate said it in her own words, so the thought passes the test. A fair worry: plan to do the dishes and agree on a routine. With no word from her, it would be mind reading.' }),

    // ----- set 2: everything mixed, on your own -----
    C({ id: 't3-meeting', story: '“He thinks my idea is stupid,” Celia thinks after presenting, because one coworker sat with his arms folded the whole time. He sits that way in most meetings.',
      asks: { name: 'mindread' },
      reason: 'Sure of what he thinks from folded arms alone, a habit of his. Mind reading. Had he said it, it would be a fair worry.' }),
    C({ id: 't3-diet', story: '“I\'ve blown it. I never stick to anything,” Odette thinks after one donut on day three of her diet. “Might as well eat the whole box.”',
      asks: { name: 'allnothing' },
      reason: 'One donut became “blown it” and “never”: one slip turned into total failure. All-or-nothing. She predicts no disaster, so it is not catastrophizing.' }),
    C({ id: 't3-train', story: '“I\'m going to miss my sister\'s wedding,” Arturo thinks when his train stops outside the city for twenty minutes. It is ten in the morning, the wedding is at four, and the rest of the trip takes two hours.',
      asks: { name: 'catastrophe' },
      reason: 'A twenty-minute stop became missing the wedding, taken as certain, with six hours to spare. Catastrophizing. The likeliest outcome is arriving early.' }),
    C({ id: 't3-stats', story: '“I\'m going to fail statistics,” Esther thinks. She has scored 40, 45 and 38 out of 100 on the three tests so far, and the final is in two weeks.',
      asks: { name: 'fairworry', act: 'plan' },
      reason: 'Three low scores back the thought, so it passes the test. A fair worry, with two weeks to act: plan tutoring, office hours, a study schedule.' }),
    C({ id: 't3-nerves', story: '“I\'m so nervous about Monday,” Gwen tells her roommate the night before her new job. “New people, new everything.” She lays out her clothes and goes to bed early.',
      asks: { name: 'ordinary', act: 'support' },
      reason: 'Nerves before something new are normal. The thought predicts no disaster and reads no one\'s mind. Ordinary: nothing to fix, give it time and kindness.' }),
    C({ id: 't3-late', story: '“I can\'t stop thinking about tomorrow,” Ruth texts a friend at midnight. She says nothing more.',
      asks: { name: 'too-little', act: 'find-out' },
      need: 'What tomorrow holds, what she fears will happen, and the facts around it.',
      reason: 'One line, no context: the facts are too few to see what is going on. It could be nerves, a trap or a fair worry. Too little to tell: find out more before naming anything.' }),
    R({ id: 't3-ref', story: 'Victor is sure the referees are against his team. Every bad call against them he replays three times and posts online as proof. The bad calls that went his team\'s way he calls “close enough”.',
      asks: { name: 'confirmation' },
      reason: 'Calls that fit his belief get replayed and posted; calls against it get waved off. Confirmation bias: one standard for one side, a softer one for the other.' }),

    // ----- the check: new stories -----
    C({ id: 'k3-drive', story: '“I\'ve failed, and I\'ll have to wait months to retake it,” Kenji thinks halfway through his driving test, when the examiner frowns and writes something down. So far he has signaled every turn and stopped at every sign.',
      asks: { name: 'catastrophe' },
      reason: 'One frown became a failed test, taken as certain, against a clean drive so far. Catastrophizing.' }),
    C({ id: 'k3-taxletter', story: '“They\'re coming after me. I\'ll lose everything,” Lucy thinks when she finds a letter from the tax office in her mailbox. She has not opened it, and she filed on time.',
      asks: { name: 'catastrophe' },
      reason: 'An unopened letter became losing everything, taken as certain. Catastrophizing. The likeliest outcome is a routine notice; opening it is the test.' }),
    C({ id: 'k3-dad', story: '“Dad thinks I\'ve wasted my degree,” Rhea thinks when her father wants to know at dinner what her plans are now. He puts the same question to her brother every visit.',
      asks: { name: 'mindread' },
      reason: 'Sure of what her father thinks from a question he puts to everyone, with no word about the degree. Mind reading.' }),
    C({ id: 'k3-toast', story: '“I ruined the whole toast,” Felix thinks after he mixed up the couple\'s names in his first line. People laughed, he corrected himself, and he gave the rest as planned.',
      asks: { name: 'allnothing' },
      reason: 'One slip became “the whole toast ruined”, a verdict on all of it, not a forecast. All-or-nothing.' }),
    C({ id: 'k3-rent', story: '“I can\'t afford this apartment anymore,” Ada thinks. The landlord\'s letter says the rent goes up $400 in January. Her pay is not changing, and her budget has no room left.',
      asks: { name: 'fairworry', act: 'plan' },
      reason: 'The letter and her budget back the thought, so it passes the test. A fair worry: plan to talk to the landlord, cut costs, or look at other places.' }),
    C({ id: 'k3-mom', story: '“Mom can\'t keep living alone,” Luis thinks. His mother has fallen twice this month, and last week a neighbor found her stove left on.',
      asks: { name: 'fairworry', act: 'plan' },
      reason: 'Two falls and a stove left on back the thought. A fair worry: plan a doctor\'s visit, and talk with her and the family about help at home.' }),
    C({ id: 'k3-wife', story: '“You\'re catastrophizing again,” Jamal\'s wife tells him at breakfast. He has been reading work email since six and has barely touched his coffee.',
      asks: { name: 'too-little', act: 'find-out' },
      need: 'What he fears will happen at work, and the facts around it.',
      reason: 'Email and a cold coffee show he is busy or worried, but not his thought or the facts at work: too few to see what is going on, and her reaching for a name does not decide it. Too little to tell: find out what is on his mind.' }),
    C({ id: 'k3-rain', story: '“Oh, that\'s a shame,” Lorna thinks when rain cancels the street fair she had planned her Saturday around. She texts a friend about a movie instead.',
      asks: { name: 'ordinary', act: 'support' },
      reason: 'A brief, fair letdown, and she moves on. No outcome taken as certain, no one\'s mind read. Ordinary: nothing to fix.' }),

    // ----- held back for the review on later days -----
    C({ id: 'r3-cat', story: '“It\'s a brain tumor. I\'m going to die,” Owen thinks after an hour-long headache. He has spent ten hours at a screen today.',
      asks: { name: 'catastrophe' },
      reason: 'One headache became a fatal illness, taken as certain, after ten hours at a screen. Catastrophizing. If headaches keep coming, see a doctor.' }),
    C({ id: 'r3-mind', story: '“The new neighbors think we\'re too loud,” Kurt thinks when they shut their windows one evening. It is the first cold night of fall.',
      asks: { name: 'mindread' },
      reason: 'Sure of what the neighbors think from shut windows, on a cold night. Mind reading.' }),
    C({ id: 'r3-allnot', story: '“I always mess things up. There\'s no point going in now,” Mateo thinks after one wrong turn makes him two minutes late to an interview.',
      asks: { name: 'allnothing' },
      reason: 'One wrong turn became “always” and no point at all. All-or-nothing.' }),
    C({ id: 'r3-fair', story: '“I\'m going to be laid off,” Malik thinks. His manager told the team a layoff list is being made Friday, and his project was canceled this week.',
      asks: { name: 'fairworry', act: 'plan' },
      reason: 'A list being made and a canceled project back the thought. A fair worry: update the résumé, talk to his manager, save money.' }),
    C({ id: 'r3-ok', story: '“That stings,” Imani tells her sister when she hears she did not get the first job she applied for. She spends the evening watching a movie.',
      asks: { name: 'ordinary', act: 'support' },
      reason: 'A fair sting, with no outcome taken as certain. Ordinary: nothing to fix.' })
  ]);
})();

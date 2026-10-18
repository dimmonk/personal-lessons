// Psychology, lesson 2a, dissonance in depth: the worked story and the stories of the practice and the check. Every dissonance story is asked how the
// clash is eased (the `resolve` list: change the act, the straight way, or the four bending moves: a new reason, an attack on the source, making
// it small, the belief sliding to fit the act), and several what to do (say the contradiction to yourself, or talk to someone without attacking who they are). The
// failed prophecy is retold from Festinger, Riecken & Schachter (1956); the rest are invented, and no real person is described. One story from lesson 1
// (strand five-questions) and one from lesson 2 (strand self-justification) are mixed in. Stories not used in a lesson wait for the review.
(() => {
  const S = 'dissonance-depth';
  const C = spec => psyCase({ strand: S, names: PSY_NAMES.l2a, acts: PSY_ACTS.l2a, ...spec });
  const J = spec => psyCase({ strand: 'self-justification', names: PSY_NAMES.l2, ...spec });
  const F = spec => psyCase({ strand: 'five-questions', ...spec });
  FC.items('psychology', [
    // ----- the worked story: a failed prophecy, worked ask by ask -----
    C({ id: 'w2a-prophecy', story: 'Your aunt Rhonda\'s church group said the world would end on March 3. She quit her job and gave the group her savings. March 3 passed. The leader said their prayers had spared the world. Now Rhonda hands out the group\'s flyers every weekend. You want to talk with her.',
      asks: { name: 'dissonance', resolve: 'justify', act: 'face-saving' },
      steps: [
        { id: 'name', does: 'Find the clash, then name it.', working: 'Her act (job and savings given up) clashes with what March 3 showed. Question 3, what it does for her: she stays someone who chose wisely. Question 4, the look-alike: an honest change of mind would follow the evidence, which said "wrong". Dissonance.', ask: 'name' },
        { id: 'resolve', does: 'How is the clash eased?', working: 'Nothing changes; a new reason is added after the fact: "our prayers spared the world". Researchers saw this in a real group: it recruited harder after the miss.', ask: 'resolve' },
        { id: 'act', does: 'Pick the response.', working: '"How could you fall for that?" would harden it. Leave her a way out: "Good people got pulled into this." Question 5: if she weighed the miss and changed her mind, the read would be wrong.', ask: 'act' }],
      reason: 'A costly act, a clear miss, and a new reason added after it: dissonance, eased by justifying. Question the act, never the person.' }),

    // ----- set 1, guided: the answer first or the act first, asked back to back -----
    C({ id: 'd2a-college-mot', story: 'Before visiting a single campus, Brooke had decided her daughter would go to Brooke\'s own old college. Then she spent a week reading rankings, saving every one that put it on top.',
      asks: { name: 'motivated' },
      reason: 'Answer first, then looking: motivated reasoning. A decision made only in her head is not yet an act to excuse.' }),
    C({ id: 'd2a-college-dis', story: 'Hector talked his son into a small private college over the state school. This spring a news report ranked it near the bottom for jobs after graduation. "Those rankings are bought," Hector said. He had quoted them the year it ranked well.',
      asks: { name: 'dissonance', resolve: 'discredit' },
      reason: 'The act (talking his son into it) came first, then the bad news, then an attack on a source he trusted when it agreed. Act, then story: dissonance.' }),

    // ----- set 2, alone: the moves, with one story each from lessons 1 and 2 -----
    C({ id: 'd2a-pickup', story: 'Climate change is the issue you vote on. Last month you bought a huge gas-guzzling pickup, and mostly drive it to the office. "It doesn\'t matter. One truck is nothing next to the planet," you tell yourself.',
      asks: { name: 'dissonance', resolve: 'trivialize', act: 'choose' },
      reason: 'No new reason, only "it doesn\'t matter": trivializing. In yourself: say the contradiction plainly, then change the act or the belief.' }),
    C({ id: 'd2a-offers', story: 'Megan had two job offers she rated about equal, one in Phoenix and one in Seattle. She took Phoenix. A month later she tells friends the Seattle job was "a dead end with a cold team," though she had no complaints about either at the time. "Classic dissonance," her brother says.',
      asks: { name: 'dissonance', resolve: 'change-belief' },
      reason: 'After a close choice, her view of the job she turned down slid to fit what she did, with nothing new learned. Her brother has it right this time, but the facts decide: dissonance, the belief sliding.' }),
    J({ id: 'd2a-movie', story: 'Forty minutes into a movie he hates, with an hour to go, Jorge says, "I\'ve come this far. I might as well finish it."',
      asks: { name: 'sunk' },
      reason: 'The reason points back at the forty minutes spent, not forward at whether the next hour is worth it. Sunk cost.' }),
    F({ id: 'd2a-loans', story: 'For nine years your cousin has asked friends, coworkers and neighbors for loans, each time with a new hard-luck story, and has paid none of them back.',
      asks: { kind: 'pattern', span: 'years' },
      reason: 'Friends, coworkers and neighbors, many people (Question 1: a lasting way someone is), for nine years (Question 2: over and over, for months or years).' }),

    // ----- set 3: all the names, shuffled -----
    C({ id: 'd2a-mlm', story: 'Your friend Bianca has spent $4,000 on stock for a skin-care selling business and calls herself a smart businesswoman. You show her the company\'s own report: most sellers earn under $100 a year. "Lawyers write those to scare people," she says.',
      asks: { name: 'dissonance', resolve: 'discredit', act: 'face-saving' },
      reason: 'The report clashes with "smart businesswoman", so the source is attacked: dissonance. Leave her self-image standing: "These companies fool smart people."' }),
    C({ id: 'd2a-meds', story: 'Paula always said store-brand medicine was junk. Money was tight, so she bought store-brand allergy pills. The label showed the same ingredient and dose, and the pharmacist said the law requires them to work the same. "I was wrong about these," she said.',
      asks: { name: 'revision' },
      reason: 'Evidence moved the belief: the label and the pharmacist. An honest change of mind. With no evidence, it would be the belief sliding.' }),
    C({ id: 'd2a-sickday', story: 'Darnell tells his kids lying is never OK. Friday he told his boss he was sick so he could go to a ballgame. It ate at him all weekend. Monday he told his boss the truth and took the day as vacation.',
      asks: { name: 'ordinary', resolve: 'change-act' },
      reason: 'No new evidence and no new belief: he fixed the act instead of excusing it. The straight way: ordinary, nothing to fix.' }),
    C({ id: 'd2a-doctor', story: 'Your coworker\'s mother always said she would never get the shingles shot. Last month she changed her mind. "Classic dissonance," your coworker says.',
      asks: { name: 'too-little' },
      need: 'What changed her mind (new facts, or nothing new), and whether she had already had the shot before her view changed.',
      reason: 'A belief moved, but the story shows neither what moved it nor whether an act came first. Too little to tell.' }),
    C({ id: 'd2a-husky', story: 'You do not want the knee surgery your doctor advised. For a second opinion, you book the one surgeon a friend says "never operates on anyone."',
      asks: { name: 'motivated', act: 'decide-test' },
      reason: 'You picked the source sure to give the answer you want: motivated reasoning. Say first what would change your mind, and pick a surgeon who could say either.' }),

    // ----- the check: eight new stories -----
    C({ id: 'k2a-tasting', story: 'Lou paid $400 for a famous tasting menu. It was mostly foam, and he left hungry. "The chef keeps portions small so you can taste the wine. That was the whole idea," he told his wife.',
      asks: { name: 'dissonance', resolve: 'justify' },
      reason: 'A big cost, a let-down, and a new reason added after it ("small so you can taste the wine"), while he still thinks he chose well. He does not say it does not matter. Dissonance, eased by justifying.' }),
    C({ id: 'k2a-mayor', story: 'Your brother-in-law campaigned hard for the mayor, who was just charged with taking bribes. At dinner he says, "It was a few thousand dollars. In a city budget, that is pocket change." You want to talk it over without a fight.',
      asks: { name: 'dissonance', resolve: 'trivialize', act: 'face-saving' },
      reason: 'His act (campaigning) clashes with the news, and he makes it small: "pocket change". Dissonance. Do not make him defend himself: "Lots of us backed him; nobody saw this coming."' }),
    C({ id: 'k2a-ring', story: 'Gwen was sure her son\'s friend had taken her ring, and told the boy\'s mother so. A week later she found the ring in the sink drain. She called the mother that night to apologize.',
      asks: { name: 'revision' },
      reason: 'New evidence, the ring in the drain, moved her belief: an honest change of mind. The apology follows from it.' }),
    C({ id: 'k2a-calls', story: 'Nadia thinks of herself as a loyal friend. She noticed she had let her best friend\'s last three calls go to voicemail since she started dating someone new. She called back that night, apologized, and they now talk every Sunday.',
      asks: { name: 'ordinary', resolve: 'change-act' },
      reason: 'No new evidence came in and her belief is the same; she changed the act, with no excuse. The straight way: ordinary, nothing to fix.' }),
    C({ id: 'k2a-partner', story: 'Sheila prides herself on being a sharp judge of people. Her partner of ten years was caught stealing from their business. "He must have had a family emergency," she says. There is no sign of one.',
      asks: { name: 'dissonance', resolve: 'justify' },
      reason: 'The theft threatens "I am a good judge", her self-image, so a reason with no evidence is added and nothing changes. Dissonance, eased by justifying (Aronson: the bigger the threat to the self, the stronger the drive).' }),
    C({ id: 'k2a-stadium', story: 'A council member wanted the new stadium. When the study said it would lose money, she had it redone with a new question: "Will it bring visitors downtown?"',
      asks: { name: 'motivated' },
      reason: 'Her answer was fixed, so the question was changed until it could say yes. Answer first, then looking: motivated reasoning. Wanting the stadium is not yet an act to excuse.' }),
    C({ id: 'k2a-divorce', story: 'A man at your gym left his wife in May after twelve years. Waiting for a bench, he mentions that they had grown apart.',
      asks: { name: 'too-little' },
      need: 'Whether leaving clashes with something he believes, and whether "grown apart" was his view before he left or only after.',
      reason: 'One scene, no context: an act and a reason, but no belief it clashes with and no sign the reason came only after. "Grown apart" may simply be true. Too little to tell.' }),
    C({ id: 'k2a-union', story: 'Ricky and Sean started at the plant the same week, both unsure about the union. Ricky signed a card as a favor; Sean refused to sign. Two years later Ricky says holdouts sell out their coworkers, Sean says unions protect lazy workers, and they no longer speak.',
      asks: { name: 'dissonance', resolve: 'change-belief' },
      reason: 'Both were unsure; one small step each, and now each holds a firm view the other way, with nothing new learned. Their beliefs slid to fit what they did: the pyramid of choice (Tavris & Aronson 2007).' }),

    // ----- held back for the review on later days -----
    C({ id: 'r2a-hazing', story: 'Your son Trevor\'s college rowing team made new members swim in ice water at 5 a.m. for a month. Now a senior, he tells you, "It builds trust. The ones who quit were weak anyway." You worry about the new kids.',
      asks: { name: 'dissonance', resolve: 'justify', act: 'face-saving' },
      reason: 'A painful way in makes the group feel worth it, so he adds reasons and changes nothing: dissonance, eased by justifying. Raise the new kids without calling him cruel, so he can change his view without feeling a fool.' }),
    C({ id: 'r2a-wedding', story: 'Janelle always called big weddings a waste of money. Hers cost $45,000. "It\'s once in a lifetime, so it doesn\'t really count," she says.',
      asks: { name: 'dissonance', resolve: 'trivialize' },
      reason: 'The act clashes with her belief, and the clash is made small: "doesn\'t really count". Dissonance, eased by trivializing.' }),
    C({ id: 'r2a-coin', story: 'Doug put $15,000 into a digital coin at its peak. It is down 70 percent. "I was never in it for the money. I believe in the technology," he says.',
      asks: { name: 'dissonance', resolve: 'justify' },
      reason: 'A loss clashes with "I invest wisely", and a new reason appears after it. Dissonance, eased by justifying.' }),
    C({ id: 'r2a-coach', story: 'Your friend Tara has spent two years and $20,000 on a coaching program that promised she would be rich. She is still behind on rent. When you bring it up, she says, "People like you think small."',
      asks: { name: 'dissonance', resolve: 'discredit', act: 'face-saving' },
      reason: 'A costly act and a clear result, and the person bringing the news is attacked. Dissonance. Leave her a way out that does not make her the fool.' }),
    C({ id: 'r2a-software', story: 'The night before the meeting, Liz had decided the new office software was a mistake. In the morning she asked the help desk for one thing: the list of its bugs.',
      asks: { name: 'motivated' },
      reason: 'The answer came first, and the looking was aimed at backing it. Motivated reasoning.' })
  ]);
})();

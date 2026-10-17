// Ideology, lesson 5, look-alikes and false friends: the worked case and the passages of the practice and the check. The owner's Drill 4.1 recast as claims to test (a claim
// is named only when the passage shows the family's telltale answers, items-shape.js, so a bare claim is "too little to tell"), the words with two meanings in pairs, the liberal
// and conservative words, and what a text about fair treatment wants the government to do (a shortcut; the five questions still decide). Totalitarianism is a degree of control,
// not a content, and says so. National populism and identity-egalitarianism are the next lesson (5b). The family question offers the names taught so far. The lines are invented
// for the lesson; no living politician or party is quoted.
(() => {
  const S = 'look-alikes', C = spec => ideoCase({ strand: S, families: IDEO_NAMES.l5, ...spec });
  const FAIR = { family: 'What does the text want the government to do about fair treatment? Name the ideology that answer fits.' };
  const CLAIM = { family: 'The speaker names an ideology. What do the words show?' };
  FC.items('ideology', [
    // ----- the worked case: a false friend, answered question by question -----
    C({ id: 'w5-sweden', who: 'A speaker at a town meeting.',
      quote: '“In the northern countries taxes take nearly half of income and pay for free school and hospitals. Almost every shop, farm and factory is privately owned. People there call it socialism.”',
      asks: { own: 'private', family: 'socdem' }, prompt: { family: 'The speaker says socialism. Which ideology do the words describe?' },
      steps: [
        { id: 'q1', does: 'Question 1. Find who would own the businesses.', working: '“Almost every shop, farm and factory is privately owned.” High taxes pay for services and leave the owners in place. Question 1: private owners.', ask: 'own' },
        { id: 'family', does: 'Check the telltale answers, then name the ideology.', working: 'Private ownership stays, with welfare paid by taxes: social democracy\'s answers. Socialism would change the owner.', ask: 'family' }],
      reason: 'Shops, farms and factories stay private (Question 1), and taxes pay for school and hospitals: social democracy, not socialism.' }),

    // ----- Drill 4.1 recast: claims to test -----
    C({ id: 'l5-sweden', who: 'A speaker at a town meeting.',
      quote: '“Look at the northern countries: taxes near half of income, free school, free hospital care, long paid leave. The shops, farms and factories are still privately owned. That is what socialism looks like.”',
      asks: { own: 'private', family: 'socdem' }, prompt: { family: 'The speaker says socialism. Which ideology do the words describe?' },
      reason: 'The shops, farms and factories “are still privately owned” (Question 1: private owners). High taxes paying for services leave the owner unchanged, so this is social democracy, not socialism.' }),
    C({ id: 'l5-health', quote: '“Giving every family a doctor paid for by taxes is pure Marxism.”', asks: { family: 'too-little' }, prompt: CLAIM,
      reason: 'Marxism is an analysis of capitalism and class, not a list of public services. Nothing here shows class as the unit or class conflict as the engine. The words also never say who owns the clinics, and never say the market stays, which social democracy would show. Too little to tell.' }),
    C({ id: 'l5-militants', quote: '“Those people who smash windows and shout down speakers are the same as the Nazi street gangs. Violence in the street is exactly what fascism is.”',
      asks: { family: 'too-little' }, prompt: CLAIM,
      reason: 'Violence and militancy are methods, and every kind of movement has used them. Fascism is told by what it wants: a nation reborn, a leader in place of elections, class struggle thrown out. The words show none of that. Too little to tell.' }),
    C({ id: 'l5-busy-state', quote: '“This government taxes heavily, writes rules for every industry and employs an army of inspectors. That is fascism.”',
      asks: { family: 'too-little' }, prompt: CLAIM,
      reason: 'A large, active state is a dial, called statism, not a doctrine. Nothing here shows who owns (Question 1) or whom the story is about (Question 2), and none of fascism\'s answers appear, so nothing backs the claim. But no other family shows either: too little to tell.' }),
    C({ id: 'l5-borders', quote: '“Every country decides who crosses its borders. We will do the same and put our own citizens\' jobs first.”',
      asks: { unit: 'nation', family: 'too-little' },
      reason: 'The story is the nation (Question 2), but that is all the words give. Border control exists in every state, and nothing here shows a rebirth story or a leader in place of elections. Nationalism alone is not fascism: too little to tell.' }),

    // ----- words with two meanings, in pairs -----
    C({ id: 'l5-comm-end', who: 'From a pamphlet, invented.',
      quote: '“Class has divided every society, and the long fight between owners and workers will end only when the state withers away, class divisions vanish and money is needless. That final society is what we mean by communism.”',
      asks: { family: 'marxism' },
      reason: 'The “long fight between owners and workers” ending as “class divisions vanish” and the state “withers away”: communism here is Marx\'s end state, told in classes. Marxism.' }),
    C({ id: 'l5-comm-state', quote: '“The Communist Party holds all power. Every factory and farm belongs to the state, and the party leads the workers because the workers cannot lead themselves.”',
      asks: { family: 'leninism' },
      reason: 'The state owns every factory and farm and a party leads the workers: the party-state, Marxism–Leninism.' }),
    C({ id: 'l5-corp-state', quote: '“Owners keep their firms, but every industry will join one body of the state. The body orders what each firm makes and fixes its prices. Independent unions and strikes end.”',
      asks: { own: 'directed' },
      reason: 'Owners keep their firms but the state body orders output and prices, and free unions end. Question 1: private owners, directed by the state. This is the strong form of corporatism, which fascism uses and national populism may too: one mark, not a name by itself.' }),
    C({ id: 'l5-corp-free', quote: '“Each year the employers\' association and the free unions will meet at one table, under a law that recognizes both, to agree wages and hours. Firms stay private, and strikes stay legal.”',
      asks: { own: 'private' },
      reason: 'Employers and workers are organized in bodies the law recognizes, but nobody directs the owners and strikes stay legal. Question 1: private owners. Corporatism by itself does not make fascism: read who directs whom.' }),
    C({ id: 'l5-techno', quote: '“Elected politicians are too slow and too swayed by voters. Panels of qualified experts should write the rules, and voters should not be able to overrule them.”',
      asks: { own: 'unsaid' },
      reason: 'The words say who should decide, qualified experts, but not who should own the businesses. Question 1: the words do not say. Technocracy is not an economic system.' }),
    C({ id: 'l5-auth', who: 'One feature of a regime.', quote: '“The president will rule by decree, close the papers that criticize him and ban every rival party.”',
      asks: { marker: 'method' },
      reason: 'Rule by decree, a closed press and banned parties show how power is held, not what it wants. Any dictatorship can do them. Authoritarianism is a method.' }),
    C({ id: 'l5-total', quote: '“The state will decide what children read, what artists paint, how families spend their evenings and what people may think.”',
      asks: { family: 'too-little' }, prompt: { family: 'Which ideology do these words show?' },
      reason: 'Reaching into family, art and thought is a degree of control, not a content. Totalitarianism says how far the state reaches, not which ideology it serves, and the words say nothing about who owns or whom the story is about. Too little to tell.' }),

    // ----- the liberal words -----
    C({ id: 'l5-liberal-classic', quote: '“Government should keep the peace, enforce contracts and protect every person\'s rights, and then leave people to run their own lives and their own businesses.”',
      asks: { family: 'liberal' },
      reason: 'A limited state that protects rights and contracts, and each person running their own business: the individual, private owners and a limited state. Classical liberalism.' }),
    C({ id: 'l5-liberal-us', quote: '“I\'m a liberal. I want the rich taxed to pay for childcare, college and health care for everyone. Businesses can stay private.”',
      asks: { family: 'socdem' }, prompt: { family: 'The speaker calls herself a liberal. Which ideology do the words fit?' },
      reason: 'Taxes on the rich pay for services, and “businesses can stay private” (Question 1). On this test that sorts with social democracy, which Americans often call liberal. The word does not decide it; the answers do.' }),
    C({ id: 'l5-conserv', quote: '“Institutions that have lasted earn our respect. Change what has to change, slowly, and test each reform against what has worked. Be wary of any plan drawn up from nothing.”',
      asks: { family: 'conservative' },
      reason: 'Keep what has lasted, change slowly and distrust redesign from nothing. That is conservatism. Fascism would smash the old order to build a new one, and reaction would bring back a lost one.' }),

    // ----- what a text about fair treatment wants the government to do -----
    C({ id: 'l5-fair-out', quote: '“Fair means the same rules for every person and no favors for anyone. People run their own lives and businesses; the government applies the rules evenly and then steps back.”',
      asks: { family: 'liberal' }, prompt: FAIR,
      reason: 'The same rules for every person, each running their own business, and a government that steps back: the individual, private owners, a limited state. Classical liberalism.' }),
    C({ id: 'l5-fair-start', quote: '“No child should start behind because of the family they were born into. Tax the wealthy to pay for good schools, free childcare and a doctor for every family. After that, let the market sort out the rest.”',
      asks: { family: 'socdem' }, prompt: FAIR,
      reason: 'Taxes pay for a fair start (schools, childcare, a doctor) and the market stays. The government should pay for a fair start. On this test that sorts with social democracy.' }),
    C({ id: 'l5-fair-rule', quote: '“The hiring test is the same for everyone, and it still screens out one group more than any other. A fair country finds rules like that and changes them so that every group does about as well.”',
      asks: { family: 'idegal' }, prompt: FAIR,
      reason: 'A rule that looks the same for everyone is blamed for an unjust rank between groups, and the fix is to change the rule. The government should change a rule: identity-egalitarianism.' }),

    // ----- the check: new passages, named or too little to tell -----
    C({ id: 'l5-k-us-liberal', quote: '“As a liberal, I think the wealthy should pay more so that every family gets health care and a good school. I do not want the government running the businesses, only making sure no one is left behind.”',
      asks: { family: 'socdem' },
      reason: 'Taxes on the wealthy pay for care and schools, and the government does not run the businesses (Question 1: private owners). Social democracy, whatever the speaker calls it.' }),
    C({ id: 'l5-k-stay-out', quote: '“The law should protect each person\'s freedom to work, trade and speak, and treat all alike. A government that hands out advantages, even kind ones, has stopped being fair.”',
      asks: { family: 'liberal' },
      reason: 'Each person\'s freedom to work and trade, one law for all, and no advantages handed out: the individual, private owners, a limited state. Classical liberalism.' }),
    C({ id: 'l5-k-conserv', quote: '“Our old guilds and village councils are imperfect, but they have kept the peace. Repair them where they fail; do not replace them with a plan drawn up from nothing.”',
      asks: { family: 'conservative' },
      reason: 'Inherited institutions kept and repaired step by step, with distrust of a plan from nothing: conservatism.' }),
    C({ id: 'l5-k-fair-rule', quote: '“The school funding formula treats every district alike, yet it leaves the schools most minority families attend behind. Redraw the formula until every group\'s schools do equally well.”',
      asks: { family: 'idegal' },
      reason: 'Groups divided by race are left behind by a rule that looks the same for all, and the fix is to redraw the rule: an unjust rank to undo. Identity-egalitarianism.' }),
    C({ id: 'l5-k-reach', quote: '“Every club, every school and every newspaper will answer to the state, and families will raise their children as the state directs.”',
      asks: { family: 'too-little' },
      reason: 'Control of clubs, schools, papers and families is a degree of reach, not a content, and many ideologies have tried it. Nothing shows who owns or whom the story is about: too little to tell.' }),
    C({ id: 'l5-k-techno', quote: '“Elections let amateurs steer the nation. A council of trained economists and engineers should decide, and the public should be free to complain but not to change what they decide.”',
      asks: { family: 'too-little' },
      reason: 'The words say who should decide, experts, and nothing about who owns or whom the story is about. Technocracy is a way of deciding, not an ideology: too little to tell.' }),
    C({ id: 'l5-k-corp', quote: '“Each trade will be gathered into a state board. The board fixes what every mill and shop may produce and bans strikes. The owners keep their property and their profit.”',
      asks: { family: 'too-little' },
      reason: 'Private owners directed by the state, with strikes banned, is the strong form of corporatism. But it is one mark, and fascism and national populism may both use it: nothing shows the nation, its rebirth or a leader who replaces elections. Too little to tell.' }),
    C({ id: 'l5-k-comm', quote: '“Our republic calls itself communist. The ruling committee names every factory director, the railways, mines and shops are state property, and the committee says it knows what the workers need better than they do.”',
      asks: { family: 'leninism' },
      reason: 'Railways, mines and shops are “state property” (Question 1: the state), and a committee that “knows what the workers need better than they do” rules for the class: communism in its second meaning, the party-state. Marxism–Leninism.' }),
    // ----- held back for the review on later days -----
    C({ id: 'l5-r-ussr', quote: '“One party, a leader cult and a secret police: the USSR and Nazi Germany were the same ideology.”', asks: { family: 'too-little' }, prompt: CLAIM,
      reason: 'Those are methods, and methods travel. They differed on Question 1 (the state against private owners directed by the state) and on Question 2 (class against race). Judging by method is the horseshoe error. The words show no one family: too little to tell.' }),
    C({ id: 'l5-r-conserv', quote: '“Our laws grew over centuries. Mend them carefully when they fail, keep what works, and do not tear down what you do not understand.”',
      asks: { family: 'conservative' },
      reason: 'Mend carefully, keep what works and do not tear down what you do not understand. Conservatism.' }),
    C({ id: 'l5-r-state', quote: '“Nothing here is stateless or classless yet. The ministries own every mill and mine, the Central Committee appoints the ministers, and the workers are told to wait while the committee builds the new society for them.”', asks: { family: 'leninism' },
      reason: 'The ministries “own every mill and mine” (Question 1: the state), and the Central Committee builds the new society “for them” while the workers “wait”: the party acts for the class, not the class itself. Marxism–Leninism, not Marx\'s stateless end state.' })
  ]);
})();

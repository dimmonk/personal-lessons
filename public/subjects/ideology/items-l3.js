// Ideology, lesson 3, the socialist family: the worked case, the passages of the practice and the check. The core test first (ownership, not taxes), then the six
// branches told apart by Question 1 (who owns) and Question 4 (elections): Marxism against Marxism–Leninism, social democracy against democratic socialism,
// anarchism against Leninism and against market socialism, then the plans that are not socialist at all and the words that leave the answer unsaid. Each branch is named
// only when the passage shows its telltale answers (items-shape.js): a class analysis is Marxism with the owners left unsaid, because Marxism is an analysis. The family
// question offers only the names this lesson teaches, and "not socialist" for a free-market plan. The drills are the owner's own course (Drills 2.1 and 2.2); Engels (1878)
// is public domain; the rest are invented for the lesson, and no living politician or party is quoted.
(() => {
  const S = 'socialist-family', C = spec => ideoCase({ strand: S, families: IDEO_NAMES.l3, ...spec });
  FC.items('ideology', [
    // ----- the worked case: Question 1, Question 4, then the name -----
    C({ id: 'l3-w-grid',
      quote: '“Our party will win a majority and bring the railways, the power grid and the big banks into public ownership. Every step will pass through parliament and the courts. If the voters turn us out, we will go.”',
      who: 'From an invented party platform.', asks: { own: 'state', democracy: 'fulfil', family: 'demsoc' },
      steps: [
        { id: 'q1', does: 'Question 1. Find who would own the businesses.', working: 'The railways, the power grid and the banks go “into public ownership”: the state would own them. Question 1: the state. That is socialism, since the owners change.', ask: 'own' },
        { id: 'q4', does: 'Question 4. Find what is wanted for elections.', working: 'The party will “win a majority”, every step “will pass through parliament and the courts”, and it will leave if the voters turn it out. It keeps elections and uses them. Question 4: keep them and widen them.', ask: 'democracy' },
        { id: 'name', does: 'Check the telltale answers, then name the branch.', working: 'Social ownership won through elections is democratic socialism\'s telltale. A party-run state would be Marxism–Leninism; private owners would be social democracy.', ask: 'family' }],
      reason: 'The big industries go into public ownership (Question 1: the state), won through votes and courts (Question 4: keep elections). Social ownership won by election is democratic socialism.' }),

    // ----- ownership, not taxes -----
    C({ id: 'l3-c-tax', quote: '“We will tax the biggest banks to pay for free dental care for every child. The banks stay in private hands.”', asks: { own: 'private', family: 'socdem' }, turns: 'own',
      reason: 'The banks “stay in private hands” (Question 1: private owners). A tax that pays for care is a welfare measure, so the name is social democracy, not socialism.' }),
    C({ id: 'l3-c-buy', quote: '“Parliament will vote to buy the biggest banks and run them under a public board. If voters dislike it, they can undo it at the next election.”', asks: { democracy: 'fulfil', family: 'demsoc' },
      reason: 'The banks are bought and run by a public board (Question 1: the state), and voters can undo it (Question 4: keep elections). The owner changes, and it is won by vote: democratic socialism.' }),
    C({ id: 'l3-c-right', quote: '“Healthcare is a human right and should not be a source of profit.”', asks: { family: 'too-little' },
      reason: 'The words say what healthcare should be, not who would own the hospitals. A state that only pays the bills is social democracy; a state that owns the hospitals is socialism. No branch\'s telltale answers show, so there is too little to tell. The next thing to find out is who would own the hospitals.' }),

    // ----- Marxism against Marxism–Leninism -----
    C({ id: 'l3-m-wages', quote: '“The owner and the worker are not two equals making a bargain. They are two classes with opposite interests, and the owner lives on what the worker makes beyond the wage. Every crisis shows that the system cannot cure itself.”', asks: { family: 'marxism' },
      reason: 'Two classes with opposite interests, owners living off workers, and a system that breaks itself: class is the unit and class conflict the engine. The words give no party and no plan for the owners, but Marxism is an analysis, so it needs none. That is Marxism.' }),
    C({ id: 'l3-m-party', quote: '“The workers cannot free themselves alone. Our party will take power in their name, put the mines and mills into state hands and rule until the new society is ready. Elections can wait.”', asks: { democracy: 'beyond', family: 'leninism' }, turns: 'democracy',
      reason: '“Elections can wait” (Question 4: go beyond them, a party rules for the workers). The mines and mills go “into state hands”. The party, not the class, is the one who acts: Marxism–Leninism.' }),

    // ----- democratic socialism against social democracy (the drills, then two more) -----
    C({ id: 'l3-d-rate', quote: '“We will raise the tax rate on the highest incomes to 62% and fund universal childcare and free college. Firms remain private.”', asks: { family: 'socdem' },
      reason: '“Firms remain private” (Question 1: private owners); the tax pays for services. Higher taxes and free services leave the owners in place: social democracy.' }),
    C({ id: 'l3-d-vote', quote: '“We will win a legislative majority and transfer the utilities, rail, and major banks into public ownership.”', asks: { democracy: 'fulfil', family: 'demsoc' },
      reason: 'Winning “a legislative majority” (Question 4: keep elections) is the way to “transfer the utilities, rail, and major banks into public ownership” (Question 1: the state). Democratic socialism.' }),
    C({ id: 'l3-d-floor', quote: '“The market stays and so do private firms. We will guarantee a living wage, a pension for all and a strong union law, and pay for them with taxes on profit.”', asks: { family: 'socdem' },
      reason: '“The market stays and so do private firms” (Question 1: private owners). Floors, pensions and union rights are what social democracy talks about, not who owns the factory.' }),
    C({ id: 'l3-d-grid', quote: '“Through the ballot box we will take the power grid and the rail into public hands. Every change will face the voters again at the next election.”', asks: { family: 'demsoc' },
      reason: 'The grid and the rail go “into public hands” (Question 1: the state), through “the ballot box” and “the voters again” (Question 4: keep elections). Democratic socialism.' }),

    // ----- anarchism against Leninism, and against market socialism -----
    C({ id: 'l3-a-council', quote: '“Federated worker councils will run the mills. We recognize no parliament and no state.”', asks: { democracy: 'dissolve', family: 'anarchism' }, turns: 'family',
      reason: '“Worker councils will run the mills” (Question 1: the workers); “no parliament and no state” (Question 4: do away with the state altogether). Worker ownership and no state: anarchism, here in its union form, syndicalism.' }),
    C({ id: 'l3-a-vanguard', quote: '“A party guiding the working class will rule for it while the change is made, and the mills and mines will pass to the state.”', asks: { family: 'leninism' },
      reason: '“A party … will rule for” the class, and the mills and mines “pass to the state”: a party rules for the class, with the state owning the businesses. The party, not the class, acts: Marxism–Leninism. An anarchist would refuse the party and the state as well.' }),
    C({ id: 'l3-a-docks', quote: '“The dockers\' union will take over the docks and the shipyards. Councils of workers will run them, linked from port to port, and there will be no state above them: no minister, no party.”', asks: { family: 'anarchism' },
      reason: 'Workers\' councils own and run the docks (Question 1: the workers), and “no state above them” is said outright. Worker ownership and no state: anarchism, here in its union form (syndicalism).' }),
    C({ id: 'l3-a-market', quote: '“Every firm will be owned by its own workers, who vote on how it is run. The firms will still compete for customers and sell at market prices.”', asks: { family: 'marketsoc' },
      reason: 'Each firm belongs to its workers (Question 1: the workers), as with the councils, but the firms “compete for customers and sell at market prices”, and nothing attacks the state. Worker-owned firms in a real market: market socialism.' }),

    // ----- not socialist -----
    C({ id: 'l3-n-drill', quote: '“We will deregulate labor markets and cut corporate tax to attract investment that lifts wages.”', asks: { family: 'notsoc' },
      reason: 'Business stays private, and the plan is fewer rules and lower taxes on it (Question 1: private owners). No socialist branch\'s answers show. It is not socialist; a plan like this belongs with the free-market family, classical liberalism, named in the first part.' }),
    C({ id: 'l3-n-cut', quote: '“Anyone should be free to start a business, name a price and hire whoever they like. We will cut the rules, cut the taxes, and sell off the state\'s bus company.”', asks: { family: 'notsoc' },
      reason: 'Businesses stay private, and the state sells what it owns (Question 1: private owners). The plan frees the market of rules and taxes, so no socialist branch fits. Social democracy leaves the owners alone too, but keeps the rules and the taxes.' }),
    C({ id: 'l3-n-floor', quote: '“Companies stay in private hands. We will give every worker paid sick leave, cap the price of rent and tax the largest fortunes more heavily.”', asks: { family: 'socdem' },
      reason: 'Companies “stay in private hands” (Question 1: private owners), and the plan limits the market with rights, a price cap and tax on fortunes. That is social democracy, the opposite of the free-market plan above.' }),

    // ----- the check: new platforms, named -----
    C({ id: 'l3-k-socdem', quote: '“Firms will stay private. We will build a national child benefit, double the sick pay, and raise the tax on the largest fortunes to pay for it.”', asks: { family: 'socdem' },
      reason: '“Firms will stay private” (Question 1: private owners); the plan is a benefit paid by taxes. Social democracy.' }),
    C({ id: 'l3-k-demsoc', quote: '“If we win this spring\'s election, the water companies and the largest insurers will be bought by the public. The voters will judge it at the next election.”', asks: { family: 'demsoc' },
      reason: 'The companies are bought by the public (Question 1: the state), and the voters judge it (Question 4: keep elections). Democratic socialism.' }),
    C({ id: 'l3-k-lenin', quote: '“A small, disciplined party of full-time organizers must seize the factories, put them in the state\'s hands and rule for the workers. The people will have their say when the work is done.”', asks: { democracy: 'beyond', family: 'leninism' }, turns: 'family',
      reason: 'The party seizes the factories, puts them “in the state\'s hands” and rules “for the workers”; the people\'s say waits (Question 4: go beyond elections). A party rules for the class, with the state owning the businesses: Marxism–Leninism.' }),
    C({ id: 'l3-k-anarchy', quote: '“No bosses and no government. The farm co-ops and the factory councils will deal with each other directly, and nobody will rule over them.”', asks: { family: 'anarchism' },
      reason: 'The farms and factories belong to co-ops and councils (Question 1: the workers), with “no government”. Worker ownership and no state: anarchism.' }),
    C({ id: 'l3-k-marx', quote: '“In every age a ruling group lives on the work of the group beneath it. Today\'s mill owners are the latest, and the way they organize work creates the very workers who will end their rule.”', asks: { family: 'marxism' },
      reason: 'History told as groups living on the work of others (class as the unit), and capitalism creating its own gravediggers (class conflict as the engine). There is no party and no plan for the owners, but Marxism is an analysis: Marxism.' }),
    C({ id: 'l3-k-market', quote: '“The shoe factory belongs to its workers, who share the profit by vote. It must still win customers against other makers, and its prices rise and fall with the market.”', asks: { family: 'marketsoc' },
      reason: 'The factory belongs to its workers (Question 1: the workers) and competes in a real market with real prices. Market socialism.' }),
    C({ id: 'l3-k-liberal', quote: '“Let people keep what they earn and trade freely. We will close the state\'s agencies, cut the tax on business, and let each person decide.”', asks: { family: 'notsoc' },
      reason: 'People keep what they earn and business is taxed less (Question 1: private owners), with a smaller state. No socialist branch fits: not socialist.' }),
    C({ id: 'l3-k-state', quote: '“The state will pay the inspectors who check our food, patrol the borders and fix the roads. Safe food and good roads are everybody\'s right.”', asks: { own: 'unsaid', family: 'too-little' },
      reason: 'Inspectors, border patrols and roads are things any government does. The words never say who would own the businesses (Question 1: the words do not say), and no branch\'s answers show, so there is too little to tell. A government doing a thing is not socialism.' }),

    // ----- held back for the review on later days -----
    C({ id: 'l3-r-lenin', quote: '“The working class cannot free itself alone. Give us a party of full-time revolutionaries, and it will take the state, hold it for the workers and make the factories the state\'s.”', asks: { family: 'leninism' },
      reason: 'A party of revolutionaries takes and holds the state “for the workers” and makes the factories “the state\'s”: a party rules for the class, with the state owning the businesses. The party is the actor: Marxism–Leninism.' }),
    C({ id: 'l3-r-wither', quote: '“The state exists to hold one class down. Once classes are gone, the state has nothing left to rule: it is not ‘abolished’, it withers away.”', who: 'After Friedrich Engels, Anti-Dühring, 1878.', asks: { family: 'marxism' },
      reason: 'The state is a tool of one class over another, and it ends because classes end: class as the unit and the engine, with a classless and stateless end. That is Marxism. An anarchist would attack the state now instead of waiting for it to wither.' }),
    C({ id: 'l3-r-pension', quote: '“Every mill and shop stays private. We will pay every retired person a pension from taxes on profit, and give every worker a union.”', asks: { family: 'socdem' },
      reason: '“Every mill and shop stays private” (Question 1: private owners); the plan is a pension from taxes and union rights. Social democracy.' })
  ]);
})();

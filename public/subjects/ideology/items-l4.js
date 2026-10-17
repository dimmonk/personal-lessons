// Ideology, lesson 4, fascism and Nazism: the worked case and the passages of the practice and the check. First the owner's own Drill 3.1, seven features of a regime, each
// asked whether it separates fascism from an ordinary dictatorship (the course's key: a uniformed compulsory youth movement, the doctrine of purifying struggle, state bodies
// in place of free unions with the owners kept, a leader who says he is the people's will; censorship, torture and banned parties are methods any dictatorship uses), then fascism against
// Nazism (the nation or the race as the unit), against reaction and conservatism, then the "Nazis were socialists" claim settled by Question 1 and Question 2 (with the course's
// Drill 3.2), then a whole passage. Mass mobilization separates fascism from an ordinary dictatorship and never from Leninism (lesson 2 says so), and violence or a leader cult alone
// is a method. The family question offers the names taught so far. The lines of the course are the owner's; the rest are invented for the lesson, and no living politician or
// party is quoted.
(() => {
  const S = 'fascism', C = spec => ideoCase({ strand: S, families: IDEO_NAMES.l4, ...spec });
  const M = spec => C({ who: 'One feature of a regime.', ...spec });
  FC.items('ideology', [
    // ----- the worked case: the whole cluster, answered in order -----
    C({ id: 'w4-rebirth',
      quote: '“Our nation was great once. Weak parliaments and foreign ideas dragged it down. It will be reborn. The leader knows what the people want, so there is no need for votes, and every young person will march in the movement. Class war is a foreign poison. The owners keep their factories, and they answer to the state.”',
      asks: { own: 'directed', unit: 'nation', story: 'rebirth', democracy: 'abolish', family: 'fascism' },
      steps: [
        { id: 'q1', does: 'Question 1. Find who would own the businesses.', working: '“The owners keep their factories, and they answer to the state”: private owners, directed by the state.', ask: 'own' },
        { id: 'q2', does: 'Question 2. Find who the story is about.', working: 'Class war is “a foreign poison”: the nation.', ask: 'unit' },
        { id: 'q3', does: 'Question 3. Find what drives history.', working: '“Great once”, “dragged it down”, “It will be reborn”: decline and rebirth, the core of fascism.', ask: 'story' },
        { id: 'q4', does: 'Question 4. Find what it wants done with elections.', working: '“No need for votes”: abolish them for a leader.', ask: 'democracy' },
        { id: 'fam', does: 'Check the telltale answers, then name the family.', working: 'The nation, its decline and rebirth, and a leader who replaces elections: fascism\'s telltale answers, with a marching youth and class war thrown out as the rest of the cluster.', ask: 'family' }],
      reason: 'The cluster is all here: the rebirth story, the nation as one body, a leader in place of votes, young people marching, class war rejected, private firms answering to the state. Fascism.' }),

    // ----- the marks of fascism against the methods of any dictatorship (the course, Drill 3.1, one feature quoted each) -----
    M({ id: 'l4-m-press', quote: '“From today every newspaper prints what the ministry sends it, and nothing else.”', asks: { marker: 'method' },
      reason: 'Censorship of the press is a method that almost every dictatorship uses. It does not separate fascism from an ordinary dictatorship.' }),
    M({ id: 'l4-m-youth', quote: '“Every child will join the National Youth at ten, wear its uniform and march in its rallies. Membership is not optional.”', asks: { marker: 'marker' },
      reason: 'A uniformed youth movement that every child must join is mass mobilization: “march in its rallies”. A plain dictator wants quiet; fascism demands that people take part.' }),
    M({ id: 'l4-m-ban', quote: '“All parties but one are banned. The others may not meet or print.”', asks: { marker: 'method' },
      reason: 'A ban on opposition parties is a method of every one-party rule, from the left or the right. It does not separate fascism from an ordinary dictatorship.' }),
    M({ id: 'l4-m-purify', quote: '“This generation is soft and degenerate. Only struggle will purify it, and out of that struggle the nation will be reborn.”', asks: { marker: 'marker' },
      reason: 'A generation called degenerate and purified by “struggle”, so that the nation is “reborn”, joins the cult of struggle to decline and rebirth. That separates fascism from a quiet dictator. Violence alone would be a method.' }),
    M({ id: 'l4-m-torture', quote: '“Prisoners who will not name their friends are tortured until they do.”', asks: { marker: 'method' },
      reason: 'Torture of political prisoners is a method found in almost any dictatorship. It carries almost no weight for naming the ideology.' }),
    M({ id: 'l4-m-labor', quote: '“The free unions are dissolved. Workers and bosses sit together in state bodies, and the bosses still own their firms.”', asks: { marker: 'marker' },
      reason: 'Private firms kept (“still own their firms”) but run through “state bodies”, with the free unions “dissolved”, is the strong form of corporatism. It separates fascism from an ordinary dictatorship, which leaves owners and unions alone.' }),
    M({ id: 'l4-m-will', quote: '“Parliament cannot speak for the people. I do not need their votes, because I am what the nation wills, and each of you is a cell in its body.”', asks: { marker: 'marker' },
      reason: 'A leader who says he already is the nation\'s will, with each person a cell in its body, so parliament is for show, is the leader principle joined to the nation as one body. A leader cult alone is a method; this claim separates fascism from an ordinary dictatorship.' }),

    // ----- fascism against Nazism: the nation or the race as the unit -----
    C({ id: 'l4-n-reborn', quote: '“Our nation was humiliated by weak men and foreign treaties. Through discipline and sacrifice it will be reborn, and each of us is a cell in its body. Our leader is its will, so we need no votes.”', asks: { family: 'fascism' },
      reason: 'The unit is “our nation”, humiliated and to be “reborn”, with each person a cell in its body and a leader who is its will in place of votes. No race is named: fascism.' }),
    C({ id: 'l4-n-blood', quote: '“Our race is the nation, and its blood must stay pure. Nature ranks the races, and the lower ones are a poison in the body, which will be cleansed.”', asks: { unit: 'race-rank', family: 'nazism' },
      reason: 'The unit is race, and the rank is natural and to be kept: “nature ranks the races”, “its blood must stay pure” (Question 2: race as a natural rank). Race in place of the nation-state is Nazism.' }),

    // ----- fascism against reaction, and conservative against reactionary -----
    C({ id: 'l4-r-restore', quote: '“The hereditary seats and the church courts were swept away by clever men, and the country has been restless ever since. Put the lords back in their seats and the priests in their courts. We seek restoration, not revolution.”', asks: { end: 'restored', family: 'reactionary' },
      reason: '“We seek restoration, not revolution”: the lords and the church courts that were swept away are to come back (Question 5: a restored old order). An order that is gone, brought back, is reaction, not fascism.' }),
    C({ id: 'l4-r-new', quote: '“The old lords and the old church are husks. We will sweep them away, and out of the nation\'s ruin it will be born again as a new people, hard and united, under one leader who needs no parliament.”', asks: { family: 'fascism' },
      reason: 'The old lords and church are to be swept away, and the nation “born again as a new people” out of its “ruin”, under one leader who needs no parliament: decline and rebirth, and a leader in place of elections. Something new, willing to smash old elites: fascism.' }),
    C({ id: 'l4-c-keep', quote: '“Our courts, our schools and our parishes have served us well. Mend them where they leak, but do not tear them down for a theory.”', asks: { family: 'conservative' },
      reason: 'The courts, schools and parishes already exist and are to be mended, slowly. Keeping what is here and distrusting a grand plan is conservatism.' }),
    C({ id: 'l4-c-back', quote: '“The republic was a mistake. The crown must return, with the old ranks it swept away, and what was lost must be brought back.”', asks: { family: 'reactionary' },
      reason: 'The republic is to be undone and what “was lost” brought back. Wanting back what is gone, not keeping what exists, is reaction.' }),

    // ----- "the Nazis were socialists": Question 1 and Question 2, not the name -----
    C({ id: 'l4-s-name', quote: '“Our party is the People\'s Socialist Workers\' Party. Every owner keeps his works but answers to the state. Free unions are banned and strikes are a crime. The blood of our race stands above any class, and nature ranks the races.”', asks: { own: 'directed', family: 'nazism' },
      reason: '“Every owner keeps his works but answers to the state” (Question 1: private owners, directed by the state), and “the blood of our race stands above any class” with nature ranking the races (Question 2: race as a natural rank, against class). A name with “Socialist” in it changes neither answer: Nazism.' }),
    C({ id: 'l4-s-drill', quote: '“The banks are nationalized and private inheritance is abolished, in the name of the workers taking back what capital stole. The party rules for the workers, runs mass rallies and a leader cult, and shoots dissidents.”', asks: { unit: 'class', family: 'leninism' },
      reason: 'The banks pass to the state in the name of the workers against capital (Questions 1 and 2: the state, class). Rallies, a leader cult and shooting dissidents are methods that travel; mobilization never tells fascism from Leninism. A party ruling for the class, with the state owning, is Marxism–Leninism, not fascism.' }),

    // ----- a whole passage -----
    C({ id: 'l4-p-soil', quote: '“Comfortable men and borrowed ideas have betrayed the homeland. Ballots will not save it. Follow the one Leader who knows its will, and it will be born again, strong enough that your children will be proud to die for it.”', asks: { unit: 'nation', democracy: 'abolish', family: 'fascism' },
      reason: 'The homeland is the actor (Question 2: the nation), betrayed and then “born again”, and “ballots will not save it” while one Leader knows its will (Question 4: abolish). Decline and rebirth, and a leader who replaces elections: fascism.' }),

    // ----- the check: new passages -----
    M({ id: 'l4-k-vote', quote: '“Elections are canceled until further notice. Soldiers hold the radio station and the post office.”', asks: { marker: 'method' },
      reason: 'Canceled elections and soldiers on the radio station are how any army takes and holds power. A method, not a mark of one ideology.' }),
    M({ id: 'l4-k-cadets', quote: '“Every school day opens with the nation\'s march. On Saturdays all boys over twelve drill in the youth brigade, to serve the reborn nation, and parents who object are shamed in the town square.”', asks: { marker: 'marker' },
      reason: 'Boys drilling in a youth brigade for the reborn nation, with objecting parents shamed, is mass mobilization: people must take part. That separates fascism from a plain dictator who wants quiet.' }),
    C({ id: 'l4-k-race', quote: '“History is a war between races, and ours is the master race, by nature. Its blood must be kept pure, and our Leader will clear the weaker races from its soil.”', asks: { family: 'nazism' },
      reason: 'Race is the unit and a natural rank (“the master race, by nature”, “blood must be kept pure”), with a Leader to clear the others. Race as the natural rank is Nazism.' }),
    C({ id: 'l4-k-front', quote: '“The National Workers\' Front will hold power on behalf of the working class. The mines, the railways and the banks are now the state\'s, and the owners are finished as a class.”', asks: { family: 'leninism' },
      reason: 'Mines, railways and banks go to the state, and the story is the working class against the owners (Question 2: class). The party holds power for the class: Marxism–Leninism. “National” in the name does not change the answers.' }),
    C({ id: 'l4-k-leader', quote: '“We were great, and soft men sold us out. The Leader, who is the voice of our people, will bring the nation to its rebirth. Every worker will wear the movement\'s colors and march with it. There will be no more votes: his word is enough. Strikes are treason, and the factory owners will answer to the Leader\'s council.”', asks: { family: 'fascism' },
      reason: '“Great”, “sold us out”, “its rebirth” (decline and rebirth), the Leader as the people\'s voice with “no more votes” (a leader who replaces elections), workers marching in the movement, strikes ended and owners answering to the council. A cluster: fascism.' }),
    C({ id: 'l4-k-heirs', quote: '“We are the heirs of what our grandfathers built: the courts, the church and the local councils. Reform them one careful step at a time, and distrust anyone with a grand plan to remake society.”', asks: { family: 'conservative' },
      reason: 'The courts, church and councils exist and are to be improved “one careful step at a time”. Keeping what is here and doubting a grand plan is conservatism, not reaction and not fascism.' }),
    C({ id: 'l4-k-oldorder', quote: '“Before the revolution every man had his lord and his priest, and was the better for it. Undo the revolution, bring back the lords and the priests, and give the old order its place again.”', asks: { family: 'reactionary' },
      reason: '“Undo the revolution, bring back the lords and the priests”: an order that is gone is to come back, with no rebirth through struggle and no mass movement. Reaction.' }),
    C({ id: 'l4-k-quiet', quote: '“The generals have taken the ministries. Shops and banks open as usual; any march or meeting is banned until further notice.”', asks: { family: 'too-little' },
      reason: 'A seizure of power that wants quiet is an ordinary dictatorship. Nothing shows a rebirth story, a nation as one body or a leader who replaces elections, so no family\'s telltale answers appear: too little to tell.' }),

    // ----- held back for the review on later days -----
    M({ id: 'l4-r-rally', quote: '“Each year the whole town gathers in uniform on the great field to swear loyalty to the movement and the nation\'s rebirth, and families who stay away are visited.”', asks: { marker: 'marker' },
      reason: 'A whole town in uniform at a rally for the nation\'s rebirth, with absent families visited, is mass mobilization: taking part is demanded. That separates fascism from a plain dictator.' }),
    M({ id: 'l4-r-spies', quote: '“A net of informers reports on every neighbor, and the secret police read the post.”', asks: { marker: 'method' },
      reason: 'Informers and a secret police are methods of control that every kind of dictatorship uses. They do not name the ideology.' }),
    C({ id: 'l4-r-pure', quote: '“Our race rises or falls by its blood, and nature has placed it above the rest. When the weaker races are gone from our soil, the nation will be born again, pure.”', asks: { unit: 'race-rank', family: 'nazism' },
      reason: 'Race by blood is the unit, a natural rank (“nature has placed it above the rest”), and the weaker races are to go (Question 2: race as a natural rank). Nazism, which is fascism with race in place of the nation-state.' })
  ]);
})();

// Ideology, lesson 5b, today's two: the worked case and the passages of the practice and the check. The two composite formations of the owner's course, each with its five answers:
// national populism against fascism (Question 4 and the four absences decide: the vote is kept, with the courts, the press and the civil service attacked) and identity-egalitarianism
// against Nazism (the direction check), with the thin populism that names nothing alone and the egalitarian reading told from Marxism. A national populist passage shows the people
// and the nation against an elite inside elections; one that shows less is too little to tell. The lines are invented for the lesson; no living politician or party is quoted.
(() => {
  const S = 'todays-two', C = spec => ideoCase({ strand: S, ...spec });
  FC.items('ideology', [
    // ----- the worked case: a look-alike of fascism, answered question by question -----
    C({ id: 'l5b-w-natpop', who: 'A campaign speech, invented.',
      quote: '“The people who work and pay have been sold out by a small circle in the courts, the press and the ministries. We will take those back for the nation. Firms will stay private but will build what this nation needs, and foreign buyers will be screened. We will win it at the ballot box, and the voters can throw us out if we fail.”',
      asks: { own: 'directed', unit: 'people', democracy: 'majority', family: 'natpop' },
      steps: [
        { id: 'q1', does: 'Question 1. Find who would own the businesses.', working: '“Firms will stay private but will build what this nation needs.” Owners keep their firms and the state points them at national goals. Question 1: private owners, directed by the state.', ask: 'own' },
        { id: 'q2', does: 'Question 2. Find who the story is about.', working: '“The people who work and pay” and “the nation” against “a small circle”. Question 2: the people against an elite.', ask: 'unit' },
        { id: 'q4', does: 'Question 4. Find what is wanted for elections.', working: 'The courts, the press and the ministries are attacked, but the vote stays: “win it at the ballot box”, “the voters can throw us out”. Question 4: keep the vote, attack the courts, the press and the civil service. Fascism would replace elections.', ask: 'democracy' },
        { id: 'family', does: 'Check the telltale answers, then name the ideology.', working: 'The people and the nation against an elite, inside elections: national populism. None of the four things fascism adds is here.', ask: 'family' }],
      reason: 'Directed private firms (Question 1), the people and the nation against an elite (Question 2) and a vote kept while the courts, press and ministries are attacked (Question 4): national populism.' }),

    // ----- national populism against fascism -----
    C({ id: 'l5b-natpop-1', quote: '“A narrow clique in the courts and the newspapers has cheated the citizens who work and pay. We will clear that circle out of the courts and the ministries, bring industry home behind tariffs and put the big treaties to a vote. If we fail, throw us out at the next election.”',
      asks: { unit: 'people', democracy: 'majority', family: 'natpop' },
      reason: '“Throw us out at the next election”: the vote is kept, while the courts and ministries are attacked (Question 4). With the people against an elite and industry brought home, that is national populism.' }),
    C({ id: 'l5b-fascism-1', quote: '“The parliament is a stage for talkers. Our leader is the will of the nation, so we do not want votes; we want obedience. A humiliated nation will be reborn, marching in step.”',
      asks: { democracy: 'abolish', family: 'fascism' },
      reason: '“We do not want votes”: a leader who is “the will of the nation” replaces elections (Question 4: abolish them), and the nation is to be reborn. Fascism.' }),
    C({ id: 'l5b-natpop-2', quote: '“Take back control of our borders and our laws from the globalists and the establishment, for the people who built this country. Firms stay private, but we will steer industry with tariffs and state contracts toward what this country needs. We will seek the voters\' mandate, and seek it again.”',
      asks: { own: 'directed', family: 'natpop' },
      reason: '“Firms stay private”, but tariffs and state contracts steer industry (Question 1: private owners, directed by the state, at the mild end). “Globalists and the establishment” against the people who built the country, borders and laws, all pursued by seeking “the voters\' mandate”, and seeking it again, inside elections. None of fascism\'s four extras: national populism.' }),
    C({ id: 'l5b-fascism-2', quote: '“Our youth will march in uniform, our columns will fill the squares, and the weak will be purged by struggle. Our Leader\'s word will replace the vote, and through blood and discipline the nation will be reborn.”',
      asks: { family: 'fascism' },
      reason: 'Uniformed youth, marching columns, purifying struggle, a Leader who replaces the vote and a nation reborn: the marks national populism lacks. Fascism.' }),

    // ----- the thin populism that names nothing alone -----
    C({ id: 'l5b-thin', quote: '“The honest majority has been betrayed by those at the top. We will give the country back to them.”',
      asks: { family: 'too-little' },
      reason: 'A people and an elite and nothing more: no word on who owns, on the nation or on elections. Populism is a thin idea that needs a host. Too little to tell. What you would need: who counts as the people, who the elite is, and what happens to ownership.' }),
    C({ id: 'l5b-host', quote: '“The honest majority has been betrayed by those at the top. Firms stay private, but foreign buyers will be screened and the nation\'s interest comes first. We will win the power to do it at the ballot box.”',
      asks: { family: 'natpop' },
      reason: 'A nation-first line alone shows too little, but here the honest majority is pitted against an elite that betrayed it, private firms are steered by screening foreign buyers (Question 1), and the power is sought “at the ballot box” (Question 4). That people-against-an-elite story inside elections is what shows the host: national populism.' }),

    // ----- identity-egalitarianism against Nazism, and against Marxism -----
    C({ id: 'l5b-idegal-1', quote: '“Race and gender still decide who gets ahead, because rules that read the same for everyone keep leaving the same groups behind. Institutions must find those rules and tear them down, and keep going until outcomes are equitable.”',
      asks: { unit: 'identity-equal', family: 'idegal' },
      reason: 'Race and gender are the units, and the groups left behind are an unjust rank to “tear them down”: the egalitarian direction (Question 2). Identity-egalitarianism.' }),
    C({ id: 'l5b-nazism-1', quote: '“Each race has its nature and its rightful rank. Blood decides who belongs to the people. Parliament will end, and the Leader will keep the racial order.”',
      asks: { unit: 'race-rank', family: 'nazism' },
      reason: 'Race again, but the rank is called natural and to be kept: “keep the racial order” (Question 2). Nazism, the opposite direction.' }),
    C({ id: 'l5b-idegal-2', quote: '“Hiring panels, housing loans and school discipline each look neutral and still leave some groups behind. We will audit the rules, publish the gaps by race and gender, and change what produces them.”',
      asks: { unit: 'identity-equal', family: 'idegal' },
      reason: 'Race and gender are the units, and the gaps are an unjust rank to undo: “change what produces them”. Markets and ownership are left alone. Identity-egalitarianism.' }),
    C({ id: 'l5b-class-gap', quote: '“The gaps between groups will close when the workers own the mills and the owning class is gone. Race and gender are tools the owners use to divide us.”',
      asks: { family: 'marxism' },
      reason: 'Class is the root and owners against workers the engine; race and gender are only tools the owners use. Where the egalitarian reading leaves ownership alone, this one puts it first: Marxism.' }),

    // ----- the check: new passages -----
    C({ id: 'l5b-k-natpop', quote: '“The capital has stopped listening to the towns, and the judges and officials there answer to nobody. We will bring them under the people\'s will, rebuild our mills with state help, keep out foreign takeovers, and let the voters decide whether we stay.”',
      asks: { democracy: 'majority', family: 'natpop' },
      reason: 'The towns, the people, against officials and judges in the capital, with state help for mills and foreign takeovers kept out. The vote is kept (“let the voters decide”) while the courts and officials are attacked (Question 4). National populism, not fascism.' }),
    C({ id: 'l5b-k-natpop2', quote: '“For too long a cosmopolitan class, more at home abroad than here, has run our country against the ordinary people who live in it. We will protect our borders and our industries, and seek a mandate from those people at the next election.”',
      asks: { family: 'natpop' },
      reason: 'The ordinary people and the nation against a “cosmopolitan class”, an elite said to be more at home abroad, borders and industries protected, and a mandate sought “at the next election”. The people and the nation against an elite, pursued inside elections: national populism.' }),
    C({ id: 'l5b-k-fascism', quote: '“The old parties are rotten and the nation is dying. One movement, one leader, one will. Our columns will march until the nation is born again.”',
      asks: { democracy: 'abolish', family: 'fascism' },
      reason: '“One movement, one leader, one will” replaces the parties (Question 4: abolish them), with marching columns and a nation “born again”. Fascism.' }),
    C({ id: 'l5b-k-idegal', quote: '“The city clears snow from the main roads first and the side streets last, the same rule in every district. The side streets are where most Black families live, and buses stop running there for days. The plowing order must be redrawn until every district is served equally well.”',
      asks: { family: 'idegal' },
      reason: 'A group divided by race is left behind by a rule that is “the same rule in every district”, and the fix is to redraw the rule “until every district is served equally well”: an unjust rank to undo. Identity-egalitarianism.' }),
    C({ id: 'l5b-k-idegal2', quote: '“Formal equality is not enough. Where hospitals, courts and banks treat people the same on paper and still leave one group, by race or gender, worse off, we must change how they work until the outcomes are fair.”',
      asks: { family: 'idegal' },
      reason: 'Equal treatment on paper that still leaves a group, by race or gender, worse off is called unjust, and the answer is to change how institutions work. Identity-egalitarianism.' }),
    C({ id: 'l5b-k-nazism', quote: '“Our people is one blood, and nature ranks the peoples. The state exists to guard that blood from mixing, and the Leader\'s word replaces every vote.”',
      asks: { family: 'nazism' },
      reason: 'Belonging by “one blood”, with nature ranking the peoples, is a natural rank to keep, and the Leader\'s word replaces the vote. Nazism.' }),
    C({ id: 'l5b-k-thin', quote: '“Our leaders have forgotten who they work for. The ordinary people will have their say, and we are the ones who will give it to them.”',
      asks: { family: 'too-little' },
      reason: 'The ordinary people against leaders, and no word on who owns, on the nation or on how the say is given. Populism is a thin idea that needs a host: too little to tell.' }),
    C({ id: 'l5b-k-marx', quote: '“Women and minorities are paid less because the owners profit from dividing workers. End the owning class, and the divisions end with it.”',
      asks: { family: 'marxism' },
      reason: 'Owners profiting from dividing workers, and the remedy is ending the owning class: class is the unit and class conflict the engine. Marxism, not identity-egalitarianism, which leaves ownership alone.' }),

    // ----- held back for the review on later days -----
    C({ id: 'l5b-r-natpop', quote: '“The establishment has let our industry leave and our borders go unguarded, and the officials in the ministries will not obey the voters. Give us your vote, and we will bring the jobs home, take back our laws and put those officials in their place. If we do not deliver, vote us out.”',
      asks: { democracy: 'majority', family: 'natpop' },
      reason: '“Give us your vote” and “vote us out”: the ballot is kept, while the officials in the ministries are attacked (Question 4). The nation and the people against the establishment, with industry brought home: national populism.' }),
    C({ id: 'l5b-r-thin', quote: '“The people who do the real work are tired of being lectured by those at the top. We are their voice.”',
      asks: { family: 'too-little' },
      reason: 'The people against those at the top, and nothing more: no word on who owns or what is wanted. Populism is a thin idea that needs a host. Too little to tell.' }),
    C({ id: 'l5b-r-idegal', quote: '“A fair country measures who gets the loans, the jobs and the places at school, by race and by gender. Wherever one group is shut out by a rule that looks neutral, the rule changes.”',
      asks: { unit: 'identity-equal', family: 'idegal' },
      reason: 'Race and gender are the units, and a group shut out by a rule that looks neutral is an unjust rank to undo (Question 2). Identity-egalitarianism.' })
  ]);
})();

// Ideology, lesson 2, story, democracy, end state: the worked case and the passages of the practice and the check. Question 3 (what drives history) is practised first,
// with the people-sold-out passage beside the class-conflict one, then Question 4 (elections), with the two look-alike pairs the course names (democratic socialist against Leninist,
// conservative against fascist), then Question 5 (the end state), with the reborn nation beside the restored old order, then the horseshoe error: the course's Drill 1.2, two movements
// with the same methods, told apart by Question 1 and Question 2. Quoted lines are from the owner's course and from Marx and Engels (1848) and Engels (1878, public domain); the rest
// are invented for the lesson, and no living politician or party is quoted.
(() => {
  const S = 'story-democracy-end', C = spec => ideoCase({ strand: S, ...spec });
  FC.items('ideology', [
    // ----- the worked case: the three questions, answered in order -----
    C({ id: 'l2-w-rise',
      quote: '“We were a great people once, and soft men let the nation rot. Parliament only talks. One movement and one leader will act, and the nation will rise again, whole and proud, for a thousand years.”',
      asks: { story: 'rebirth', democracy: 'abolish', end: 'reborn' },
      steps: [
        { id: 'q3', does: 'Question 3. Find what drives history.', working: 'A great people once, soft men who let the nation “rot”, and a nation that will “rise again”: a fall, then a rebirth. Question 3: the nation\'s decline and rebirth.', ask: 'story' },
        { id: 'q4', does: 'Question 4. Find what the words want done with elections.', working: '“Parliament only talks. One movement and one leader will act”: the parliament is pushed aside for a leader and a movement. Question 4: abolish elections for a leader or a movement.', ask: 'democracy' },
        { id: 'q5', does: 'Question 5. Find where things end up.', working: '“Rise again, whole and proud, for a thousand years”: a nation reborn that lasts for good. Question 5: a reborn, eternal nation.', ask: 'end' }],
      reason: 'A fall and then “rise again” (Question 3: decline and rebirth), parliament pushed aside for “one movement and one leader” (Question 4: abolish), a nation “whole and proud, for a thousand years” (Question 5: reborn). Those three answers together are fascism\'s.' }),

    // ----- Question 3: what drives history -----
    C({ id: 'l2-s-owners', quote: '“The mill owners grew fat while the mill hands went hungry. It has always been so: the rich and the working poor, in one long fight.”', asks: { story: 'class-conflict' },
      reason: 'The engine is “one long fight” between “the rich and the working poor”, owners against workers. Question 3: class conflict over wealth.' }),
    C({ id: 'l2-s-insiders', quote: '“The people who work and pay were robbed by a gang of insiders who care nothing for them. Take the country back from them.”', asks: { story: 'sold-out' },
      reason: 'A pure people, “the people who work and pay”, robbed by “a gang of insiders”, and no owners, wages or class named. Question 3: a people sold out by an elite, the story populism tells.' }),
    C({ id: 'l2-s-fall', quote: '“Once we were feared and admired. Then we grew soft, and our enemies laughed. But a nation can be born again, and ours will rise.”', asks: { story: 'rebirth' },
      reason: 'A proud past, a fall (“grew soft”) and a nation “born again”. Question 3: the nation\'s decline and rebirth.' }),
    C({ id: 'l2-s-race', quote: '“The races of the earth are locked in a fight for room to live. Every war and every empire is that fight, and only the strongest blood will win it.”', asks: { story: 'racial-struggle' },
      reason: 'History is a fight between races for room to live, won by “the strongest blood”. Question 3: a struggle between races.' }),
    C({ id: 'l2-s-free', quote: '“Every age has made more people free: to speak, to worship, to choose their work and their neighbors. Our job is to carry that on.”', asks: { story: 'liberty' },
      reason: 'The story is freedom reaching “more people” age after age. Question 3: freedom spreading to more people.' }),
    C({ id: 'l2-s-design', quote: '“The world has an order that God laid down, and a country is healthy when its laws and customs follow it. Trouble comes when people forget.”', asks: { story: 'order' },
      reason: 'Trouble comes when people leave “an order that God laid down”. Question 3: a divine or traditional order.' }),
    C({ id: 'l2-s-none', quote: '“We will fix the potholes on Main Street, cut the bus fares and open the library on Sundays.”', asks: { story: 'unsaid' },
      reason: 'A list of jobs: no fight, no fall, no order named as what drives history. Question 3: the words do not say.' }),

    // ----- Question 4: elections and the constitution -----
    // a pair: the same public ownership, opposite answers to Question 4
    C({ id: 'l2-d-vote', quote: '“Public ownership of the railways and the big banks is our aim. We will win it by law, at the polls, and if the voters turn against us, we will go.”', asks: { democracy: 'fulfil' },
      reason: 'The aim is reached “by law, at the polls”, and the voters may “turn against us”. Question 4: keep elections and widen what they can do, here to change who owns the railways and banks.' }),
    C({ id: 'l2-d-party', quote: '“Public ownership of the railways and the big banks is our aim. The party will take power for the workers and keep it; the old elections and courts will be put aside.”', asks: { democracy: 'beyond' },
      reason: 'The same public ownership, but “the party will take power … and keep it” and elections are “put aside”. Question 4: go beyond elections, to rule by a party. With the state as owner, as here, that pattern gets a name later.' }),
    // a pair: the same love of country, opposite answers to Question 4
    C({ id: 'l2-d-keep', quote: '“Our courts and our vote have outlasted wars and kings. We would defend them, mend them where they leak, and leave the rest alone.”', asks: { democracy: 'restore' },
      reason: '“Defend them, mend them”: the courts and the vote are kept as they are. Question 4: defend the constitutional order, the answer of anyone who wants it kept as it is. Alone it names no family.' }),
    C({ id: 'l2-d-leader', quote: '“Votes and courts are tools of the weak. There will be one movement, and its leader\'s word will be the word of the nation.”', asks: { democracy: 'abolish' },
      reason: 'Votes and courts are scorned and “one movement” with a leader speaks for the nation. Question 4: abolish elections for a leader and a movement. With a rebirth story this is fascism\'s answer; alone it names nothing.' }),
    C({ id: 'l2-d-courts', quote: '“Keep the vote, and keep voting. But the judges, the newspapers and the civil servants who stand in the way of what voters chose must be brought under the people\'s control.”', asks: { democracy: 'majority' },
      reason: 'The vote stays (“keep voting”), while the judges, newspapers and civil servants are attacked. Question 4: keep the vote, but attack the courts, the press and the civil service. It is the answer of a family met later; alone it names nothing.' }),
    C({ id: 'l2-d-none', quote: '“Rents are too high and wages too low. Something has to be done.”', asks: { democracy: 'unsaid' },
      reason: 'A complaint with no word on elections, courts or how the change would be made. Question 4: the words do not say.' }),

    // ----- Question 5: the end state -----
    C({ id: 'l2-e-classless', quote: '“In place of the old bourgeois society, with its classes and class antagonisms, we shall have an association, in which the free development of each is the condition for the free development of all.” And Engels: “The state is not ‘abolished’. It withers away.”', who: 'Marx and Engels, The Communist Manifesto, 1848; Engels, 1878.', asks: { end: 'classless' },
      reason: 'A society with no “classes and class antagonisms”, and a state that “withers away”. Question 5: a society with no classes and no state.' }),
    C({ id: 'l2-e-race', quote: '“We are building a world where each race has its own land and its own rank, fixed by blood, and no one will ever mix them or move them.”', asks: { end: 'racial-order' },
      reason: 'Each race kept in its “own rank, fixed by blood”, for good. Question 5: a racial order.' }),
    C({ id: 'l2-e-open', quote: '“No side should ever win this argument for good. Free people and free firms will keep competing, and where that leads is not ours to say.”', asks: { end: 'open' },
      reason: 'No side wins “for good” and the result is “not ours to say”. Question 5: open competition with no end point.' }),
    C({ id: 'l2-e-equal', quote: '“We want every group to end up with about the same share of jobs, homes and degrees. We will count the results each year and keep changing the rules until they match.”', asks: { end: 'equitable' },
      reason: 'The aim is “about the same share” for “every group”, checked by counting “the results each year”. Question 5: equal outcomes between groups, with no fixed final picture.' }),
    // a pair: both look back, but one builds a new nation and the other brings the old one back
    C({ id: 'l2-e-newnation', quote: '“What came before is dead and we do not want it back. Out of the nation\'s will we are forging a new nation, hard and proud, that will never fall again.”', asks: { end: 'reborn' },
      reason: '“We do not want it back”, but a “new nation … that will never fall again”. Question 5: a reborn, eternal nation. Fascism gives this answer, but one answer does not name it.' }),
    C({ id: 'l2-e-oldways', quote: '“What came before was good, and we want it back: the king, the church, and the village as our grandfathers knew them.”', asks: { end: 'restored' },
      reason: '“We want it back”: the king, the church and the village “as our grandfathers knew them”. Question 5: a restored old order. Reaction gives this answer, but one answer does not name it.' }),

    // ----- the horseshoe error: the same methods, told apart by Question 1 and Question 2 (the course\'s Drill 1.2) -----
    C({ id: 'l2-h-star', quote: '“One party, one Leader, a parade in every town. The secret police will find any who speak against us. The farms and factories are the state\'s now, taken from the landlords and bosses for those who work them.”', asks: { own: 'state', unit: 'class' },
      reason: 'The parade, the Leader and the secret police are methods and decide nothing. Question 1: “the state\'s now”. Question 2: landlords and bosses against “those who work them”, class. A party that rules for the workers, with the state owning, is the pattern of Marxism–Leninism.' }),
    C({ id: 'l2-h-flag', quote: '“One party, one Leader, a parade in every town. The secret police will find any who speak against us. The owners keep their factories, but they build what the nation needs, as the state orders. There are no classes here, only countrymen.”', asks: { own: 'directed', unit: 'nation' },
      reason: 'The same methods as the other, so they decide nothing. Question 1: “the owners keep their factories”, but “as the state orders”, directed. Question 2: “no classes here, only countrymen”, the nation. Both answers differ from the other passage; the methods do not. Naming waits for the questions still to come.' }),
    C({ id: 'l2-h-bare', quote: '“One party. One Leader. A face on every wall and an ear at every door. That is how this country will be run.”', asks: { own: 'unsaid', unit: 'unsaid' },
      reason: 'Only methods: one party, a leader cult, an ear at every door. parties of the left, movements of the right and plain dictators all use them, so they do not answer Question 1 or Question 2: the words do not say.' }),
    C({ id: 'l2-r-market', quote: '“The Leader\'s portrait hangs in every office, and only his party may stand for office. But he has sold the state\'s firms to private buyers, and his message to every citizen is: you are on your own, free to buy, sell and keep what you earn.”', asks: { own: 'private', unit: 'individual' },
      reason: 'A leader cult and one party, yet Question 1: “sold the state\'s firms to private buyers”, and Question 2: “you are on your own, free to buy, sell and keep what you earn”, the individual. Harsh rule decides nothing. These are not the answers of Leninism or fascism.' }),

    // ----- the check: new passages -----
    C({ id: 'l2-k-betrayed', quote: '“The farmers, the nurses and the drivers carried this country, and the people in the capital sold it out from under them.”', asks: { story: 'sold-out' },
      reason: 'The carrying people against “the people in the capital” who “sold it out”. Question 3: a people sold out by an elite.' }),
    C({ id: 'l2-k-rise', quote: '“Thirty years of parties talking have left the nation on its knees. The movement will end them all, and the Leader will raise the nation up again.”', asks: { story: 'rebirth', democracy: 'abolish', end: 'reborn' },
      reason: 'A nation “on its knees” raised “up again” (Question 3: decline and rebirth), the parties ended for “the movement” and “the Leader” (Question 4: abolish), and the nation raised again as the end state (Question 5: a reborn nation).' }),
    C({ id: 'l2-k-ballot', quote: '“Bosses and workers want opposite things, and always have. So win the elections, pass the laws, and hand the mills to the people who work in them.”', asks: { story: 'class-conflict', democracy: 'fulfil' },
      reason: '“Bosses and workers want opposite things” (Question 3: class conflict), and the way is to “win the elections, pass the laws” (Question 4: keep elections and widen what they do).' }),
    C({ id: 'l2-k-founders', quote: '“The founders left us a sound constitution. Our job is to keep it from being torn up by every new fashion.”', asks: { democracy: 'restore' },
      reason: '“Keep it from being torn up”: the constitution is kept. Question 4: defend the constitutional order.' }),
    C({ id: 'l2-k-fade', quote: '“When the classes are gone there will be nothing left for a state to do, and it will fade away. Then everyone will work for everyone.”', asks: { end: 'classless' },
      reason: 'The classes “are gone” and the state “will fade away”. Question 5: a society with no classes and no state.' }),
    C({ id: 'l2-k-contest', quote: '“There will never be a final winner. People, firms and ideas will keep competing, and the contest is the point.”', asks: { end: 'open' },
      reason: '“never be a final winner” and “the contest is the point”. Question 5: open competition with no end point.' }),
    C({ id: 'l2-k-farm', quote: '“Rallies every week, the Leader\'s face on every wall, and the party in every office. The land has been taken from the landlords and is now run by the state for the peasants who work it.”', asks: { own: 'state', unit: 'class' },
      reason: 'Rallies, a leader cult and a party in every office are methods. Question 1: land “run by the state”. Question 2: landlords against “the peasants who work it”, class, and the party rules for them.' }),
    C({ id: 'l2-k-mill', quote: '“Rallies every week, the Leader\'s face on every wall, and the party in every office. The mill owners keep their mills, but they work to the state\'s orders, for the good of the nation.”', asks: { own: 'directed', unit: 'nation' },
      reason: 'The same methods as the other, so they decide nothing. Question 1: owners “keep their mills” but “work to the state\'s orders”, directed. Question 2: “the good of the nation”, the nation, which the Leader speaks for.' }),

    // ----- held back for the review on later days -----
    C({ id: 'l2-r-order', quote: '“The reformers broke the order our fathers kept, and the troubles began. Rebuild the parish and the old ways, and the peace will come back.”', asks: { story: 'order', end: 'restored' },
      reason: 'The troubles began when “the order our fathers kept” was broken (Question 3: a traditional order), and the answer is to “rebuild the parish and the old ways” (Question 5: a restored old order).' }),
    C({ id: 'l2-r-councils', quote: '“No parliament, no president: the councils of workers in each town will decide everything, and the party will guide the councils.”', asks: { democracy: 'beyond' },
      reason: 'Parliament and president are dropped for “the councils of workers” guided by “the party”. Question 4: go beyond elections, to rule by a party or council.' }),
    C({ id: 'l2-r-singing', quote: '“Every morning the whole town gathers to sing for the Leader, and the secret police keep a file on everyone. Trust the Leader.”', asks: { own: 'unsaid', unit: 'unsaid' },
      reason: 'Only methods: mass singing, a leader cult and secret police. They fit many regimes, so they answer neither Question 1 nor Question 2: the words do not say.' })
  ]);
})();

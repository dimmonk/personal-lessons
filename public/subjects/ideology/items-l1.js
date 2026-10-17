// Ideology, lesson 1, the five questions: the worked case and the passages of the practice and the check. Question 2 (who the story is about) is practised
// first, with the two race passages side by side for the direction check, then Question 1 (who owns), with the welfare passages that do not change who owns,
// then both on one passage. Quoted lines are from the owner's course and from Marx and Engels (1848, public domain); the rest are invented for the
// lesson, and no living politician or party is quoted. The practice is cut to what fits the minutes the first screen states; the lines not used in it wait for the review.
(() => {
  const S = 'five-questions', C = spec => ideoCase({ strand: S, families: IDEO_NAMES.l1, ...spec });
  FC.items('ideology', [
    // ----- the worked case: both questions, answered in order -----
    C({ id: 'w1-manifesto', who: 'Marx and Engels, The Communist Manifesto, 1848.',
      quote: '“The history of all hitherto existing society is the history of class struggles.” And: “The proletariat will use its political supremacy to wrest, by degree, all capital from the bourgeoisie, to centralise all instruments of production in the hands of the State.”',
      asks: { own: 'state', unit: 'class', family: 'marxism' },
      steps: [
        { id: 'q1', does: 'Question 1. Find who would own the businesses.', working: '“All instruments of production in the hands of the State”: the factories and land go to the state. Question 1: the state.', ask: 'own' },
        { id: 'q2', does: 'Question 2. Find who the story is about.', working: 'History is “the history of class struggles”, and the actors are the proletariat (the workers) against the bourgeoisie (the owners). Question 2: class.', ask: 'unit' },
        { id: 'name', does: 'Check the telltale answers, then name the family.', working: 'Class is the unit and class struggle the engine: that is Marxism\'s telltale. No party that rules is shown, so nothing more is named.', ask: 'family' }],
      reason: 'The state takes “all instruments of production”, so Question 1 is the state; history is “class struggles”, so Question 2 is class. Class as the unit and class conflict as the engine are the telltale of Marxism. A party that rules would add Marxism–Leninism, which comes later.' }),

    // ----- Question 2: who the story is about -----
    C({ id: 'u-blood', quote: '“Each people has the rank that its blood gives it. A people that has forgotten its blood and soil has already begun to die.”', asks: { unit: 'race-rank' },
      reason: '“The rank that its blood gives it” makes the people a matter of descent, a fixed natural rank to be kept. Question 2: race as a natural rank, which is Nazism\'s unit.' }),
    C({ id: 'u-reborn', quote: '“The nation, humiliated and betrayed, will be reborn through discipline and will.”', asks: { unit: 'nation' },
      reason: 'The actor is the nation, humiliated and to be reborn. Question 2: the nation. A rebirth story is one mark of fascism, but one mark does not name it.' }),
    C({ id: 'u-judge', quote: '“Each person is the best judge of their own interest, and the state exists to protect that judgment.”', asks: { unit: 'individual' },
      reason: 'The unit is each person and their own judgment; the state serves the individual. Question 2: the individual. That points toward classical liberalism, which also needs private ownership and a limited state.' }),
    C({ id: 'u-no-country', quote: '“The working men have no country.”', who: 'Marx and Engels, 1848.', asks: { unit: 'class' },
      reason: 'Class is put above nation: workers belong to their class, not to a country. Question 2: class.' }),
    C({ id: 'u-fathers', quote: '“Our laws come from God and from our fathers. What they handed down is not ours to remake to suit the fashions of the day.”', asks: { unit: 'tradition' },
      reason: 'Authority comes from God and inherited custom, not from a class, a nation or each person\'s choice. Question 2: tradition or faith.' }),
    C({ id: 'u-sold-out', quote: '“Everyday folk keep the lights on and pay the bills, and a distant elite has sold them out.”', asks: { unit: 'people' },
      reason: 'The story is everyday folk against a distant elite, with no class, race or program named. Question 2: the people against an elite. Alone, that names no family.' }),
    // the two race passages, asked back to back: the same noun, opposite directions
    C({ id: 'u-rank-keep', quote: '“Each race has its own nature and its rightful place, and a healthy country keeps that order instead of mixing what nature made separate.”', asks: { unit: 'race-rank' },
      reason: 'Race is the unit, and the rank is called natural and to be kept: “its rightful place”. That direction points to Nazism.' }),
    C({ id: 'u-rank-undo', quote: '“Rules that look neutral keep producing unequal results by race. Fairness means finding those barriers and taking them down.”', asks: { unit: 'identity-equal' },
      reason: 'Race is the unit again, but the rank is called unjust and to be undone: “taking them down”. That direction points to identity-egalitarianism, the opposite family: Nazism keeps the rank, this undoes it.' }),

    // ----- Question 1: who owns -----
    C({ id: 'o-sell', quote: '“We will sell every state-run firm and cut the taxes on business. A company belongs to the people who build it.”', asks: { own: 'private' },
      reason: 'The state sells what it runs and business stays with its builders. Question 1: private owners.' }),
    C({ id: 'o-plan', quote: '“The railways, the mines and the banks will be taken into state ownership and run under one national plan.”', asks: { own: 'state' },
      reason: 'The main industries are “taken into state ownership”. Question 1: the state.' }),
    C({ id: 'o-councils', quote: '“Each mill will belong to the people who work in it, run by a council they elect. There will be no bosses and no state above them.”', asks: { own: 'workers' },
      reason: 'The mills belong to the people who work in them, run by their own councils, with no state owner. Question 1: the workers.' }),
    C({ id: 'o-directed', quote: '“Firms will stay in private hands, but the government will tell each industry what to make for the nation, and strikes will end.”', asks: { own: 'directed' },
      reason: 'Owners keep their firms, but the state directs what they make and strikes end: the strong end of directing. Question 1: private owners, directed by the state. Fascism and national populism both do this, so this answer never names either by itself.' }),
    C({ id: 'o-childcare', quote: '“We will tax big estates to pay for free school lunches and free bus passes. The mills and shops stay private.”', asks: { own: 'private' },
      reason: 'Taxes pay for services, and the mills and shops “stay private”: nothing changes hands. Question 1: private owners. A welfare state is not social ownership.' }),
    C({ id: 'o-right', quote: '“Nobody should go without heat in winter. We will pay the winter fuel bill for every household that cannot.”', asks: { own: 'unsaid' },
      reason: 'The words say who pays a bill, not who owns the power plants or the fuel companies. Paying for a service and owning the firm that sells it are different things. Question 1: the words do not say.' }),

    // ----- both questions on one passage -----
    C({ id: 'b-steel', quote: '“The steelworks will be handed to the workers who run its furnaces. For a century the owners grew rich on their labor; that is over.”', asks: { own: 'workers', unit: 'class' },
      reason: 'The works go “to the workers who run its furnaces” (Question 1: the workers), and the story is owners growing rich on workers\' labor (Question 2: class).' }),
    C({ id: 'b-free', quote: '“Leave people free to buy, sell and hire as they choose. No government knows a person\'s business better than that person does.”', asks: { own: 'private', unit: 'individual', family: 'liberal' },
      reason: 'Buying, selling and hiring stay free (Question 1: private), the judge is each person (Question 2: the individual), and a government that knows less than the person keeps back. Those are the telltale answers of classical liberalism.' }),
    C({ id: 'b-industry', quote: '“Private industry will serve the reborn nation. The owners stay in charge of their works, but the state fixes what each of them produces.”', asks: { own: 'directed', unit: 'nation', family: 'too-little' },
      reason: 'The owners stay in charge of their works but the state fixes what each produces (Question 1: directed), and the story is the reborn nation (Question 2: the nation). Fascism and national populism both fit that pair, and nothing here says what is wanted for elections, so there is too little to tell.',
      need: 'What the words want done with elections (Question 4, next time): a leader who replaces them, or a vote that stays.' }),
    C({ id: 'b-elite', quote: '“The ordinary folk of this country have been ignored for too long by the people at the top.”', asks: { own: 'unsaid', unit: 'people' },
      reason: 'Nothing about who owns anything (Question 1: the words do not say); the story is ordinary folk against the people at the top (Question 2: the people against an elite).' }),

    // ----- the check: new passages, both questions -----
    C({ id: 'k-farms', quote: '“Every large farm will be taken by the state and worked under the five-year plan. The landlords\' day is done.”', asks: { own: 'state', unit: 'class' },
      reason: 'Farms “taken by the state” (Question 1: the state); landlords against those who work the land (Question 2: class).' }),
    C({ id: 'k-shop', quote: '“A shopkeeper who risks her savings has earned the right to keep what she makes. Government should protect her, not tax her into giving up.”', asks: { own: 'private', unit: 'individual' },
      reason: 'She keeps what she makes (Question 1: private) and the argument is made for her as one person (Question 2: the individual).' }),
    C({ id: 'k-coop', quote: '“The bakeries of the city will be run as co-operatives, owned by the bakers, each with one vote.”', asks: { own: 'workers' },
      reason: 'Owned by the bakers, one vote each (Question 1: the workers). The words do not say who the story is about, so only Question 1 can be answered here.' }),
    C({ id: 'k-soil', quote: '“Our blood is our destiny. Those who are not of our blood can never be of our people, and the peoples of the world have their fixed places, high and low, by birth.”', asks: { own: 'unsaid', unit: 'race-rank' },
      reason: 'Nothing on ownership (Question 1: the words do not say); belonging decided by blood, with peoples ranked “high and low, by birth”, a natural rank to keep (Question 2: race as a natural rank).' }),
    C({ id: 'k-hiring', quote: '“Hiring that looks blind still shuts out women and minorities. We will change the rules until the results are fair to every group.”', asks: { own: 'unsaid', unit: 'identity-equal' },
      reason: 'Nothing on who owns the firms (Question 1: the words do not say); groups shut out by rules, a rank to be undone (Question 2: identity groups, as an unjust rank).' }),
    C({ id: 'k-tax', quote: '“Banks stay private, but they will pay a new tax that funds free school meals for every child.”', asks: { own: 'private' },
      reason: 'Banks “stay private”; a tax funds meals (Question 1: private owners). A tax that pays for a service is a welfare measure, not social ownership.' }),
    C({ id: 'k-throne', quote: '“The king and the church held this land together for a thousand years. We were fools to throw them away.”', asks: { own: 'unsaid', unit: 'tradition' },
      reason: 'Nothing on ownership (Question 1: the words do not say); king and church, an inherited order (Question 2: tradition or faith).' }),
    C({ id: 'k-plants', quote: '“The power plants stay in private hands, but every one of them will produce what the national council orders, at the price it fixes.”', asks: { own: 'directed' },
      reason: 'Private hands, but the council orders the output and fixes the price (Question 1: private owners, directed by the state).' }),

    // ----- held back for the review on later days -----
    C({ id: 'r-guild', quote: '“The old guilds and the parish kept every trade in its proper place. Bring them back, and the young will know who they are.”', asks: { own: 'unsaid', unit: 'tradition' },
      reason: 'Nothing on who owns the trades (Question 1: the words do not say); the guilds and the parish, an inherited order (Question 2: tradition or faith).' }),
    C({ id: 'r-mines', quote: '“The mines will be owned by the nation and run by the state coal board. The private owners will be paid for them once, and that is the end of it.”', asks: { own: 'state', unit: 'unsaid' },
      reason: 'Owned by the nation, run by a state board (Question 1: the state); no class, race or people is named as the story\'s actor (Question 2: the words do not say).' }),
    C({ id: 'r-wages', quote: '“Every worker produces more than he is paid. The rest goes to the owner, and that is how the system works, not a few bad bosses.”', asks: { own: 'unsaid', unit: 'class' },
      reason: 'The words describe how owners gain from workers, but not who should own the firms (Question 1: the words do not say); the story is owners against workers (Question 2: class).' })
  ]);
})();

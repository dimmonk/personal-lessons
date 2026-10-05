// Political Ideologies, Unit One: drill cases, third stage (whole routes, misleading cases) and the faulty claims.
// A misleading case is one in which the most noticeable thing in the story is not what decides it. echo names a teaching case of
// a different answer whose story the case is built to bring back, so that the likeness and the key can be seen to disagree.
// also lists an answer the case shows as well as its own, which loses to its own by a tie-break in the key.
// Field guide: see u1.cases-drill-1.js.

FC.cases('ideology', 'u1', [

  /* ---------- misleading: the words point one way and the question another ---------- */
  { id: 'i-m-class', use: 'drill', tier: 'misleading', setting: 'town', topic: 'stallholders at the county show', echo: 'i-speech-nation',
    text: "The county show is the pride of this country, and the stallholders who set it up at four each morning are paid by the hour to make the show's owners rich. The owners and the stallholders are on opposite sides of the fence, and this letter is written from the stallholders' side.",
    route: { D1: ['class'] },
    cues: { D1: ["The owners and the stallholders are on opposite sides of the fence, and this letter is written from the stallholders' side"] },
    reason: { D1: 'The text opens with the country and then splits the people at the show into stallholders and owners, and stands with the first: {cue:D1}.' },
    not: { outcome: 'nation', why: '“The pride of this country” is only where the story is set. The text speaks for no one people. It speaks for the stallholders against the owners.' },
    wouldChange: 'If the letter had said that owners and stallholders alike are one people and that the show belongs to the country, it would be {a:D1.nation}.' },

  { id: 'i-m-nation', use: 'drill', tier: 'misleading', setting: 'work', topic: 'a foreman, a boss and a labourer under one flag', echo: 'i-whouse',
    text: "In a healthy country the foreman and the boss and the labourer share one flag, and whoever tells them they are enemies is the enemy of the whole people. We are one body, and we will keep it whole.",
    route: { D1: ['nation'] },
    cues: { D1: ['In a healthy country the foreman and the boss and the labourer share one flag', 'We are one body, and we will keep it whole'] },
    reason: { D1: 'The text names the foreman, the boss and the labourer only to put them on one side, and it speaks for the whole people: {cue:D1}.' },
    not: { outcome: 'class', why: 'Workers and a boss are named, which is what the first answer looks for. But the text stands with none of them against the others. It says they are one.' },
    wouldChange: 'If the text had said that the labourer and the boss are on opposite sides and had stood with the labourer, it would be {a:D1.class}.' },

  { id: 'i-m-none1', use: 'drill', tier: 'misleading', setting: 'town', topic: 'a bus lane called a name', echo: 'i-whouse',
    text: "At the council meeting Councillor Drake called the new bus-lane plan 'communism on wheels'. The plan paints a bus lane on Mill Road for £40,000 and starts in March. The council votes on Tuesday.",
    route: { D1: ['none'] },
    cues: { D1: ['The plan paints a bus lane on Mill Road for £40,000 and starts in March', 'The council votes on Tuesday'] },
    reason: { D1: 'The text says how one practical matter will be handled: {cue:D1}. The councillor throws a name at the plan, and a name thrown at a plan does not make the plan speak for a side.' },
    not: { outcome: 'class', why: '“Communism on wheels” is a name people use for working people against owners, but nothing in the plan, or in anything the councillor says about it, sets workers against owners.' },
    wouldChange: 'If the plan had been a call for the people who drive the buses to take the depot from its owners, it would be {a:D1.class}.' },

  { id: 'i-m-trad', use: 'drill', tier: 'misleading', setting: 'faith', topic: 'a country made one by the faith of grandmothers', echo: 'i-speech-nation',
    also: ['nation'],
    text: "Our country is one people, and the faith of our grandmothers is what made it one. A flag without that faith is a rag. Let the old prayers, not the newest fashions, guide what we do.",
    route: { D1: ['tradition'] },
    cues: { D1: ['A flag without that faith is a rag. Let the old prayers, not the newest fashions, guide what we do'] },
    reason: { D1: 'The text asks that the old prayers guide what is done: {cue:D1}.' },
    not: { outcome: 'nation', why: '“Our country is one people” is in the text, and on its own it would be the second answer. But the text says that the faith is what made the people one, and asks that old prayers guide what is done. When a case shows both, the answer is {a:D1.tradition}.' },
    wouldChange: 'If the text had said nothing of faith and asked only that the people come first, it would be {a:D1.nation}.' },

  { id: 'i-m-rights', use: 'drill', tier: 'misleading', setting: 'work', topic: 'workers and owners each owed something', echo: 'i-whouse',
    text: "Every worker is owed a safe workplace, and every owner is owed a fair contract. A government that breaks either promise has broken it for every one of us. What each person is owed does not depend on which side of the counter they stand.",
    route: { D1: ['rights'] },
    cues: { D1: ['Every worker is owed a safe workplace, and every owner is owed a fair contract', 'What each person is owed does not depend on which side of the counter they stand'] },
    reason: { D1: 'The text says what each person is owed, and says it does not depend on being a worker or an owner: {cue:D1}.' },
    not: { outcome: 'class', why: 'Workers and owners are both named, which is what the first answer looks for. But the text stands with neither. It says each is owed something, and puts that first.' },
    wouldChange: 'If the text had said that owners are owed nothing and that the workers should have the profit, it would be {a:D1.class}.' },

  { id: 'i-m-none2', use: 'drill', tier: 'misleading', setting: 'town', topic: 'a chairman who decides everything', echo: 'i-speech-nation',
    text: "The Chairman has spoken on the radio: 'I alone decide who may stand for the council, and I alone decide who may speak at its meetings. Those who obey will find me generous. The Chairman's word stands.' Seven councillors were replaced last week.",
    route: { D1: ['none'] },
    cues: { D1: ['I alone decide who may stand for the council, and I alone decide who may speak at its meetings', "The Chairman's word stands"] },
    reason: { D1: 'The text says who holds power and how they keep it: {cue:D1}. It speaks for no people and no side.' },
    not: { outcome: 'nation', why: 'A ruler who silences others is what texts for the nation can sound like. But this text never says whom it speaks for. It only says who decides.' },
    wouldChange: 'If the Chairman had said that he alone speaks for the one people of this country and that the people comes first, it would be {a:D1.nation}.' },

  { id: 'i-m-class2', use: 'drill', tier: 'misleading', setting: 'faith', topic: 'a chapel and the mill that took its hours', echo: 'i-trad-meet',
    also: ['tradition'],
    text: "Our grandmothers kept the Sabbath and the chapel supper, and those ways should guide this town. The mill's owners now rota us on Sundays and keep the extra profit. The people who work the shifts and the people who own the mill are on opposite sides, and this notice is on the side of the shifts.",
    route: { D1: ['class'] },
    cues: { D1: ["The mill's owners now rota us on Sundays and keep the extra profit", 'The people who work the shifts and the people who own the mill are on opposite sides, and this notice is on the side of the shifts'] },
    reason: { D1: 'The text names the mill’s owners and the people who work the shifts, and takes the side of the shifts: {cue:D1}.' },
    not: { outcome: 'tradition', why: 'Old ways are in the text: the Sabbath and the chapel supper, held up as the guide. On its own that would be the third answer. But the text also sets the people who work against the owners, and when a case shows both, the answer is {a:D1.class}.' },
    wouldChange: 'If the notice had stopped after its first sentence, it would be {a:D1.tradition}.' },

  { id: 'i-m-nation2', use: 'drill', tier: 'misleading', setting: 'money', topic: 'a fair deal for all, and the people first', echo: 'i-rights-meet',
    also: ['rights'],
    text: "Nobody should be cheated out of what they have earned, and I will say so to anyone. But this country is one people, and the first call on its money is its own people, before any outsider's. That is what the nation owes itself.",
    route: { D1: ['nation'] },
    cues: { D1: ['this country is one people, and the first call on its money is its own people'] },
    reason: { D1: 'The text puts one people first: {cue:D1}.' },
    not: { outcome: 'rights', why: 'Something owed to everyone is in the text, and on its own it would be the fourth answer. But the text then says that its own people come first, and when a case shows both, the answer is {a:D1.nation}.' },
    wouldChange: 'If the text had stopped after its first sentence, it would be {a:D1.rights}.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'i-claim-demo', use: 'claim',
    text: "\"The leaflet says the cleaners and drivers won the national minimum wage from their employers. It says 'national', so it must be putting the nation first.\"",
    ask: { type: 'option', step: 'D1', answer: 'class' },
    fault: 'The claim finds the word “national” and stops. Here the word only says that the wage is the same everywhere. What the leaflet shows is cleaners and drivers on one side and their employers on the other, and a leaflet standing with the first.',
    corrected: 'The leaflet says the cleaners and drivers won the wage from their employers. It puts the people who work on one side and their employers on the other, and stands with the first. That is {a:D1.class}.' },

  { id: 'i-claim-insult', use: 'claim',
    text: '"The councillor called the new bus lane communism on wheels, so the plan must be a communist plan."',
    context: 'The plan paints a bus lane on Mill Road for £40,000 and starts in March.',
    ask: { type: 'option', step: 'D1', answer: 'none' },
    fault: 'The claim takes a name that was thrown as an insult and treats it as a description. The words the councillor threw tell you what he thinks of the plan. They do not tell you what the plan says. An {t:ideology} begins from someone or something put first, and the plan puts no one first.',
    corrected: 'The councillor called the plan “communism on wheels”. The plan only says where a lane will be painted, what it will cost and when it starts. The answer is {a:D1.none}. A name thrown at a plan is an insult until the plan itself says something that fits the name.' },

  { id: 'i-claim-race', use: 'claim',
    text: '"A speech that says housing rules leave one race behind is no different from a pamphlet that ranks the races, because both talk about race."',
    context: 'The speech says that rules which treat every applicant alike still leave one race at the back of the queue, and asks for fair treatment for every applicant.',
    ask: { type: 'option', step: 'D1', answer: 'rights' },
    fault: 'The claim treats the word “race” as if it were all that either text says. The two texts point opposite ways. One places a people above the others. The other places no one above anyone, and says that rules which treat everyone alike can still leave a group behind.',
    corrected: 'The speech says that rules which treat every applicant alike still leave one group behind, and asks for fair treatment for every applicant. That is {a:D1.rights}. A pamphlet that ranks the races puts its own people above the rest, and that is {a:D1.nation}. The two share a noun and nothing else.' },

  { id: 'i-claim-faith', use: 'claim',
    text: '"The newsletter calls the village one people and then asks the parish to be run by the Sunday bells, the harvest feast and the old prayers. It says one people, so it must be putting the nation first."',
    ask: { type: 'option', step: 'D1', answer: 'tradition' },
    fault: 'The claim stops at the first words that sound like the second answer. The newsletter does call the village one people. But what it asks the parish to be run by is the bells, the feast and the old prayers, and when a text shows both, the answer is {a:D1.tradition}.',
    corrected: 'The newsletter calls the village one people, and asks for the parish to be run by the Sunday bells, the harvest feast and the old prayers. Those are ways handed down, held up as the guide, so the answer is {a:D1.tradition}.' },

  { id: 'i-claim-owner', use: 'claim',
    text: '"The leaflet blames the mill owners for the closing and stands with the people who worked there, so it must be a communist leaflet."',
    ask: { type: 'option', step: 'D1', answer: 'class' },
    fault: 'The claim jumps from what the leaflet shows to a name. All the leaflet shows is workers on one side and owners on the other, with the leaflet standing with the workers. Texts that want very different things can begin like that, so the beginning cannot settle a name.',
    corrected: 'The leaflet blames the mill owners for the closing and stands with the people who worked there. At this point the answer is {a:D1.class}, and it is only the first answer. A name needs more of the text than this.' }
]);

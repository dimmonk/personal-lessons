// Political Ideologies, Unit Three: the drill cases of stage three (the first answer is shown; the learner answers the unit's
// questions and gives the name) and the faulty claims of the last stage. None of these appears in a card.
// A claim is something a person might say that uses a name wrongly, or reasons in one of the unit's ways. ask.type 'missing':
// "what would you need to see before this name could be used?" (the choices are the key's "what you must be able to point to"
// lines). ask.type 'option': the key's question is asked of the claim itself. The fault is shown after the learner commits, and
// the claim put right is always the last thing shown. Every text is invented.

FC.cases('ideology', 'u3', [

  /* ---------- Stage three: the first answer is shown; the learner answers the unit's questions and gives the name ---------- */
  { id: 'n-fn-nat', use: 'drill', tier: 'clean', setting: 'health', topic: 'a vaccination campaign',
    text: "The health minister of Tolvar: 'The whole country, from the farms to the cities, will line up for this campaign, because a healthy people is a strong country. The committee will report to parliament in October, and any member may question it.'",
    outcome: 'nationalism', route: { D1: ['nation'], N1: ['whole'], N2: ['keep'] },
    cues: { D1: 'a healthy people is a strong country',
            N1: 'The whole country, from the farms to the cities, will line up for this campaign',
            N2: 'The committee will report to parliament in October, and any member may question it' },
    reason: { D1: 'The text puts one people first, and a strong country with it: {cue:D1}.',
              N1: 'The minister speaks for the whole country, farms and cities alike, as one: {cue:N1}.',
              N2: 'The committee reports to parliament and any member may question it: {cue:N2}. The text leaves parliament its say.' },
    not: { outcome: 'natpop', why: '{o:natpop} would set the country\'s ordinary people against a few at the top. Nobody in the text is named as the other side.' } },

  { id: 'n-fn-natpop', use: 'drill', tier: 'clean', setting: 'town', topic: 'a language missing on the radio',
    text: "From the platform of the Hearth list: 'The editors of the national radio, who answer to no one, have dropped our songs and our language from the airwaves. Our culture should be heard on our radio. Elect us in June and we will bring it back.'",
    outcome: 'natpop', route: { D1: ['nation'], N1: ['elitenation'], N2: ['keep'] },
    cues: { D1: 'Our culture should be heard on our radio',
            N1: ['The editors of the national radio, who answer to no one, have dropped our songs and our language from the airwaves', 'Our culture should be heard on our radio'],
            N2: 'Elect us in June and we will bring it back' },
    reason: { D1: 'The text puts one people first, marked out by its songs and its language: {cue:D1}.',
              N1: 'It sets the country\'s listeners against a few at the top, the editors "who answer to no one", and wants the country\'s own culture put first: {cue:N1}.',
              N2: 'The remedy is an election: {cue:N2}.' },
    not: { outcome: 'nationalism', why: '{o:nationalism} would speak for everyone in the country with nobody named as the other side. This text names the editors.' } },

  { id: 'n-fn-fasc', use: 'drill', tier: 'varied', setting: 'health', topic: 'an order to every hospital',
    text: "Order from the Leader's office: 'The nation is one body and the hospitals are its organs. Doctors who criticize the Leader's health plan are dismissed, and the medical journals that print them are closed. Every nurse and doctor will carry out the plan or answer for it.'",
    outcome: 'fasc', route: { D1: ['nation'], N1: ['whole'], N2: ['aside'] },
    cues: { D1: 'The nation is one body and the hospitals are its organs',
            N1: 'The nation is one body and the hospitals are its organs',
            N2: "Doctors who criticize the Leader's health plan are dismissed, and the medical journals that print them are closed" },
    reason: { D1: 'The order puts the nation first and speaks of it as one: {cue:D1}.',
              N1: 'It speaks for the whole nation as a single body: {cue:N1}. Nobody inside it is named as the enemy, and nobody is ranked by blood.',
              N2: 'Critics are dismissed and journals closed: {cue:N2}. That takes away the say of those who disagree.' },
    not: { outcome: 'nationalism', why: '{o:nationalism} would speak for the whole nation in the same way and leave critics and journals alone. Here they are removed.' } },

  { id: 'n-fn-nazi', use: 'drill', tier: 'varied', setting: 'work', topic: 'a notice about jobs at the shipyard',
    text: "Notice from the Crown of Ash, a movement in Merrow: 'Every job in the shipyard will go first to a man of the high blood. The lower peoples are fit for the hardest work and no more. The Crown will be put to the voters on the fourth.'",
    outcome: 'nazi', route: { D1: ['nation'], N1: ['blood'], N2: ['keep'] },
    cues: { D1: 'Every job in the shipyard will go first to a man of the high blood',
            N1: 'The lower peoples are fit for the hardest work and no more',
            N2: 'The Crown will be put to the voters on the fourth' },
    reason: { D1: 'The notice puts one people first, marked out by its blood: {cue:D1}.',
              N1: 'It sorts peoples into high and lower by blood: {cue:N1}. Its own people is above the rest.',
              N2: 'The Crown goes to the voters: {cue:N2}. The vote is left in place, and for this name that changes nothing: the ranking has already decided it.' },
    not: { outcome: 'pop', why: '{o:pop} draws one line only, between ordinary people and a few at the top. This notice draws a line by blood between peoples, higher and lower.' } },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'n-claim-demo', use: 'claim',
    text: '"He says we are all one people. That is fascism."',
    ask: { type: 'missing', name: 'fasc' },
    fault: 'The claim finds the first half of what {o:fasc} needs and stops there. Speaking for everyone as one people is what {o:nationalism} does too. It is one answer to the first question, and it is shared by the names that leave elections alone.',
    corrected: 'He says we are all one people. That is the answer {a:N1.whole}, which {o:nationalism} and {o:fasc} share. It becomes {o:fasc} only if he also wants elections, other parties or critics done away with, so that one voice is left.' },

  { id: 'n-claim-borders', use: 'claim',
    text: '"Anyone who wants strong borders is a fascist."',
    context: 'The speaker says the country should decide who crosses its borders. She asks the voters for a mandate to change the law, and says the other parties are free to stand against her.',
    ask: { type: 'option', step: 'N2', answer: 'keep' },
    fault: 'The claim takes a view about borders and treats it as the whole of a name. What a text wants for its borders is not what the second question asks. The speaker asks the voters for a mandate and leaves the other parties free to stand against her.',
    corrected: 'The speaker wants the country to decide who crosses its borders, and she leaves elections and other parties in place. That is the answer {a:N2.keep}. Nothing in the text pushes the vote aside, so nothing in it is {o:fasc}.' },

  { id: 'n-claim-lots', use: 'claim',
    text: '"Fascism is when the government does a lot."',
    context: 'A leader proposes that the government build railways, run the hospitals and decide what the factories make. He says the plan will go to parliament, and that voters can remove him at the next election.',
    ask: { type: 'option', step: 'N2', answer: 'keep' },
    fault: 'How much a government does is not an answer to any of these questions. The leader wants a great deal done, and he leaves parliament and the voters their say.',
    corrected: 'The leader wants the government to do a great deal, and he says the plan goes to parliament and that voters can remove him. That is the answer {a:N2.keep}. What decides {o:fasc} is what a text would do about the vote and about its critics, and not how big a government it asks for.' },

  { id: 'n-claim-socialist', use: 'claim',
    text: '"She says a small group at the top is robbing ordinary people, so she must be a socialist."',
    context: 'The speaker says the ministers and bankers have robbed the country\'s ordinary people for years, and asks everyone to vote them out. She says nothing about who should own the farms, factories, shops and banks.',
    ask: { type: 'option', step: 'N1', answer: 'eliteonly' },
    fault: 'The claim treats anger at an {t:elite} as if it were a view about owning businesses. The speaker blames those at the top and stops there, and she says nothing about who should own anything.',
    corrected: 'The speaker sets ordinary people against a few at the top, the ministers and bankers, and adds nothing: no borders, culture or industry to put first, and no plan for the businesses. That is the answer {a:N1.eliteonly}, which leads to {o:pop}. A name that is about owning the businesses needs working people set against those who own them.' },

  { id: 'n-claim-nazieco', use: 'claim',
    text: '"The pamphlet says the government should run the railways and the mines, so it must be socialist."',
    context: 'The pamphlet says the government should run the railways and the mines. It also says people are born into peoples, that the first blood is higher than the later peoples, and that the first blood should rule them.',
    ask: { type: 'option', step: 'N1', answer: 'blood' },
    fault: 'The claim looks at what the pamphlet wants done with the railways and the mines and ignores whom it speaks for. The pamphlet ranks peoples by blood, and that is read first. The question about owning the businesses is not asked of a text that does not set working people against those who own them.',
    corrected: 'The pamphlet ranks peoples by blood, with its own on top. That is the answer {a:N1.blood}, which leads to {o:nazi}. What it wants done with the railways and the mines is not a question put to this text, and the word "socialist" in anyone\'s description changes nothing it reads.' },

  { id: 'n-claim-horseshoe', use: 'claim',
    text: '"A pamphlet that says the working class must take power and ban every rival party is just the same as the fascist pamphlet, because both ban rival parties."',
    context: 'The first pamphlet takes the side of the workers against the owners, and says the workers must take power, ban every rival party, and never give it up. The second speaks of one nation with one will, and says rival parties must be closed.',
    ask: { type: 'option', step: 'D1', answer: 'class' },
    fault: 'The claim compares what the two pamphlets would do and skips what each one is for. They give different answers to the first question, and the questions that follow it depend on that answer. A shared method does not make two texts the same.',
    corrected: 'The first pamphlet takes the side of the workers against the owners, and the first answer for it is {a:D1.class}. The second speaks for one nation, and its answer is {a:D1.nation}. Both ban rival parties, which is a method shared by many dictatorships. The names come from whom each text speaks for, and the two speak for different people.' }
]);

// Psychology, Unit Four, parts three and four: the two look-alike pairs for clinging to people, then the fourth name
// (being at the centre of attention) with its three look-alike pairs.

FC.cards('psychology', 'u4', [

  { id: 'look-narcvuln-borderline', kind: 'lookalike', ledger: 'narcvuln~borderline',
    link: 'Both of these can look like a person who feels let down by a friend. This card puts a case of each side by side.',
    cases: ['pa-isla', 'pa-kai'],
    instruction: 'In both cases a close friend cannot come to the birthday dinner. Compare one thing: what each person does about it. Does the person pull away, or reach for the friend and then attack her?',
    prompt: { kind: 'which', option: 'P1.clings', answer: 'pa-kai' },
    difference: [
      'In Case A Isla replies "No problem", goes silent for three months and keeps count of what she is owed. She does not reach for the friend at all. The answer is {a:P1.overlooked}, and the case is {o:narcvuln}.',
      'In Case B Kai sends thirty messages that night, offers to cancel the dinner so that she will not feel left out, then tells their friends that she is "the cruellest person he knew", and apologises the next morning. The answer is {a:P1.clings}, and the case is {o:borderline}.',
      'Both people are hurt, and in both it has cost friendships. What separates them is the direction. Isla pulls back and resents. Kai goes towards the friend, and when that fails attacks her, and then goes towards her again.'
    ] },

  { id: 'look-narcgrand-borderline', kind: 'lookalike', ledger: 'narcgrand~borderline',
    link: 'Anger when someone seems about to leave is in both of these names. Here are two people whose husbands have each said that they may go.',
    cases: ['pa-ruth', 'pa-dani'],
    instruction: 'In both cases a husband says he is thinking of leaving. Compare one thing: does she try to keep him, or does she run him down and let him go?',
    prompt: { kind: 'which', option: 'P1.clings', answer: 'pa-dani' },
    difference: [
      'In Case A Ruth tells her husband that he would never find anyone as good as her and that his friends laugh at him behind his back, and then does not speak to him for a week. She has never once asked him to stay. The answer is {a:P1.above}, and the case is {o:narcgrand}.',
      'In Case B Dani begs her husband to stay, promises to change everything about herself and hides what he would need to drive away. When he asks for a night at his brother’s she calls him "a liar who never loved her", throws his clothes into the street, and then rings him seven times that night to say she is sorry. The answer is {a:P1.clings}, and the case is {o:borderline}.',
      'Both women are angry. The difference is which way the anger goes. Ruth’s anger pushes him away: she needs to be above him, and she does not try to keep him. Dani’s anger comes from the fear of his going, and within hours she is going towards him again.'
    ] },

  /* ---------- Histrionic personality ---------- */
  { id: 'meet-histrionic', kind: 'meet', outcome: 'histrionic',
    link: 'The names so far were about people who need others to treat them as special, or to stay. This one is about attention itself.',
    case: 'pa-marguerite', mark: 'P1',
    strip: [
      'There are years and more than one place: every job she has had, her sister’s wedding, her father’s funeral.',
      'She puts herself at the centre of attention: every story told as if on a stage, the first to arrive and the last to leave.',
      'When attention goes to someone else, her display gets bigger: a colleague is applauded, and she tells the story of her terrible week until the room turns back.',
      'It keeps costing: her sister has stopped inviting her to small gatherings.'
    ],
    explain: [
      'What matters here is not what Marguerite wants from other people. In the two narcissisms, the person needs to be treated as special: to be above. Marguerite does not need anyone below her. She needs to be looked at. Any attention will do, as long as it is on her.',
      'You can see it in how she tells a story: as if on a stage, with a voice that shakes and eyes that fill. And you can see it most clearly when the attention leaves her. A colleague is applauded, and the room’s attention has gone. Marguerite says nothing unkind about her. She gives a bigger performance, until the room comes back.',
      'The feelings are usually real. The person is not necessarily pretending. The feelings are large, they shift fast, and they get larger when attention gets smaller.',
      'And it keeps costing. Her sister has stopped inviting her to small gatherings. Take away the years and the cost, and what you have is a lively, dramatic person, which is an ordinary thing to be. The name is for the case where it is how someone has been for years, and it keeps costing.'
    ],
    feature: { step: 'P1', option: 'centre' },
    name: 'The name for this is {o:histrionic}. "Histrionic" comes from an old word for an actor, and means theatrical. "Personality" means how a person usually is. So the name says: a theatrical way of being, which has lasted.' },

  { id: 'again-histrionic', kind: 'again', outcome: 'histrionic',
    link: 'Marguerite gave you what to point to: {needs:histrionic}. Here is a second case, a man in a school staff room and not a woman at a party.',
    first: 'pa-marguerite', second: 'pa-jasper', step: 'P1',
    instruction: 'The marked words in the first case are three different things: how she puts herself at the centre, what she does when attention goes to someone else, and what it has cost. Find the words in this case that match the middle one: what the person does when attention goes to someone else. Ignore the setting (a party, a staff room).',
    prompt: { kind: 'phrase', answer: 'When a new teacher was praised by the head at a staff meeting, Jasper announced that he had a headache so bad he might have to go home, and then spent ten minutes describing it until the meeting was about him' },
    shared: [
      'Marguerite and Jasper each put themselves at the centre in every group: stories told as if on a stage, the biggest stories and the loudest ties. Each answers attention going to someone else with a bigger display: a long, tearful story, a headache described for ten minutes until the meeting was about him. And in each case it has lasted and it has cost: a sister who stops inviting her, a colleague who asks to be elsewhere.',
      'A guest and a teacher, a woman and a man. So this is not about parties, staff rooms or gender. It holds wherever a person puts themselves at the centre of attention and makes the displays bigger when attention goes elsewhere. That is what {o:histrionic} names.'
    ] },

  { id: 'portrait-histrionic', kind: 'portrait', outcome: 'histrionic',
    link: 'You know what to point to. This card fills in the rest of the picture, and says what the name does not mean.',
    typical: [
      'The person is often warm, lively and good company at first. They can be the best person at a party.',
      'Their feelings are expressed in large, quick, theatrical ways, and they shift quickly.',
      'They want attention of any kind. They do not need to be above anyone. They need to be looked at.',
      'When attention goes elsewhere, the display gets bigger: more tears, a worse story, a sudden illness.',
      'They are often easy to sway, and eager to please whoever is in the room.',
      'Over time it wears people out. Friends stop inviting them and colleagues sit elsewhere, and the person may truly not know why.'
    ],
    not: [
      'Being outgoing, dramatic or emotional is not this name. Many people tell big stories, dress boldly and cry easily at films, and nothing is wrong. The name needs the years, the bigger displays when attention leaves, and the cost.',
      'A big display on one occasion is not it either. Someone who cries at a farewell party has had a feeling.'
    ],
    wild: ['"You won’t believe what happened to me!"', '"I’m devastated, I can’t even talk about it."', '"Everyone, look at this!"'],
    self: 'You have probably been in a room where someone could not bear to see the attention go somewhere else, and you may have been that person for a minute yourself, at a dinner. The name is for the person it is true of for years and everywhere.',
    ask: '"What does this person do when the attention goes to someone else, and what has it cost them over the years?"' },

  { id: 'check-histrionic', kind: 'check', after: 'histrionic',
    case: 'pa-tilly',
    ask: { type: 'option', step: 'P1', among: ['above', 'steady', 'overlooked', 'clings', 'centre'] } },

  { id: 'look-borderline-histrionic', kind: 'lookalike', ledger: 'borderline~histrionic',
    link: 'Both of these have big feelings, and big feelings are what people usually notice first. This card shows what separates them.',
    cases: ['pa-mira', 'pa-orla'],
    instruction: 'In both cases a flatmate is leaving. Compare one thing: who each person’s display is for. Is it for the one who is leaving, or for the whole room?',
    prompt: { kind: 'which', option: 'P1.clings', answer: 'pa-mira' },
    difference: [
      'In Case A Mira clings to the flatmate, says that she would be nothing without her, and the next week tells the others that she was selfish. One person, who seems to be leaving, is the point, and the feeling swings from adoring her to attacking her. The answer is {a:P1.clings}, and the case is {o:borderline}.',
      'In Case B Orla stands on a chair and speaks to the whole room, and when another guest is applauded for a song she sings louder over the end of it. The room is the point, and no one person has to stay. She does not attack anyone. The answer is {a:P1.centre}, and the case is {o:histrionic}.',
      'The tears are the same in both. What differs is who the display is aimed at, and whether it turns into an attack on the person who seems to be leaving.'
    ] },

  { id: 'look-narcgrand-histrionic', kind: 'lookalike', ledger: 'narcgrand~histrionic',
    link: 'Both of these want the room’s attention and take it over wherever they go. This card shows what separates them.',
    cases: ['pa-felix', 'pa-bea'],
    instruction: 'In both cases a colleague has just been applauded after a talk. Compare one thing: what each person does to that colleague, and what each does for himself or herself.',
    prompt: { kind: 'which', option: 'P1.centre', answer: 'pa-bea' },
    difference: [
      'In Case A Felix tells the manager that she was "all slides and no substance" and that she would never have been asked if he had not trained her. He runs the colleague down, so that he stays above her. Four colleagues have changed teams. The answer is {a:P1.above}, and the case is {o:narcgrand}.',
      'In Case B Bea says nothing against the colleague. She tells the whole table about a dreadful week, until they are all listening to her. Four colleagues have stopped sitting near her. The answer is {a:P1.centre}, and the case is {o:histrionic}.',
      'Both people take the room. Felix wants to be treated as better than the person who was applauded, and runs her down. Bea wants the attention and nothing else, and puts on a bigger display.'
    ] },

  { id: 'look-histrionic-ordpersonality', kind: 'lookalike', ledger: 'histrionic~ordpersonality',
    link: 'Drama alone is the thing most often mistaken for this name. Here are two people who are dramatic in everything they do.',
    cases: ['pa-sofia', 'pa-tito'],
    instruction: 'Both are dramatic in everything, at every event, in every village. Compare one thing: what the drama has cost.',
    prompt: { kind: 'which', option: 'P1.centre', answer: 'pa-sofia' },
    difference: [
      'In Case A Sofia says that her heart is racing and she needs to sit down when the raffle winner is announced, until the stall-holders gather round her. The committee has stopped asking her to help, and two neighbours cross the road. The answer is {a:P1.centre}, and the case is {o:histrionic}.',
      'In Case B Tito leads the cheering and buys the winner a drink. The committee asks him to introduce the raffle every year, and the neighbours he made twenty years ago still come to his parties. The answer is {a:P1.steady}, and the case is {o:ordpersonality}.',
      'Both are as theatrical as each other. A theatrical way of being is common and ordinary, and a person can be as dramatic as Tito and have no repeated cost at all. What turns it into {o:histrionic} is the bigger display when the attention goes elsewhere, and what it has cost.'
    ] }
]);

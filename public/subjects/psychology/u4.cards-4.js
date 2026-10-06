// Psychology, Unit Four, part two (first half): the fourth name (being at the center of attention) and its two look-alike pairs.

FC.cards('psychology', 'u4', [

  /* ---------- Histrionic personality ---------- */
  { id: 'meet-histrionic', kind: 'meet', outcome: 'histrionic',
    link: 'The names so far were about people who need others to treat them as special, or to stay. This one is about attention itself.',
    case: 'pa-marguerite', mark: 'P1',
    strip: [
      'There are years and more than one place: every job she has had, her sister’s wedding, her father’s funeral.',
      'She puts herself at the center of attention: every story told as if on a stage, the first to arrive and the last to leave.',
      'When attention goes to someone else, her display gets bigger: a colleague is applauded, and she tells the story of her terrible week until the room turns back.',
      'It keeps costing: her sister has stopped inviting her to small gatherings.'
    ],
    explain: [
      'In the two narcissisms the person needs to be treated as special: to be above. Marguerite does not need anyone below her. She needs to be looked at. Any attention will do, as long as it is on her.',
      'You can see it most clearly when the attention leaves her. A colleague is applauded, and Marguerite says nothing unkind about her. She gives a bigger performance, until the room comes back. The feelings are usually real: large, quick to shift, and larger when attention gets smaller.',
      'And it keeps costing. Her sister has stopped inviting her to small gatherings.'
    ],
    feature: { step: 'P1', option: 'center' },
    name: 'The name for this is {o:histrionic}. "Histrionic" comes from an old word for an actor, and means theatrical. So the name says: a theatrical way of being, which has lasted.' },

  { id: 'check-histrionic', kind: 'check', after: 'histrionic',
    case: 'pa-tilly',
    ask: { type: 'option', step: 'P1', among: ['above', 'steady', 'overlooked', 'clings', 'center'] } },

  { id: 'look-borderline-histrionic', kind: 'lookalike', ledger: 'borderline~histrionic',
    link: 'Both of these have big feelings, and big feelings are what people usually notice first. This card shows what separates them.',
    cases: ['pa-mira', 'pa-orla'],
    instruction: 'In both cases a roommate is leaving. Compare one thing: who each person’s display is for. Is it for the one who is leaving, or for the whole room?',
    prompt: { kind: 'which', option: 'P1.clings', answer: 'pa-mira' },
    difference: [
      'In Case A Mira clings to the roommate, says that she would be nothing without her, and the next week tells the others that she was selfish. One person, who seems to be leaving, is the point, and the feeling swings from adoring her to attacking her. The answer is {a:P1.clings}, and the case is {o:borderline}.',
      'In Case B Orla stands on a chair and speaks to the whole room, and when another guest is applauded for a song she sings louder over the end of it. The room is the point, and no one person has to stay. She does not attack anyone. The answer is {a:P1.center}, and the case is {o:histrionic}.',
      'The tears are the same in both. What differs is who the display is aimed at, and whether it turns into an attack on the person who seems to be leaving.'
    ] },

  { id: 'look-histrionic-ordpersonality', kind: 'lookalike', ledger: 'histrionic~ordpersonality',
    link: 'Drama alone is the thing most often mistaken for this name. Here are two people who are dramatic in everything they do.',
    cases: ['pa-sofia', 'pa-tito'],
    instruction: 'Both are dramatic in everything, at every event, in every village. Compare one thing: what the drama has cost.',
    prompt: { kind: 'which', option: 'P1.center', answer: 'pa-sofia' },
    difference: [
      'In Case A Sofia says that her heart is racing and she needs to sit down when the raffle winner is announced, until the vendors gather around her. The committee has stopped asking her to help, and two neighbors cross the road. The answer is {a:P1.center}, and the case is {o:histrionic}.',
      'In Case B Tito leads the cheering and buys the winner a drink. The committee asks him to introduce the raffle every year, and the neighbors he made twenty years ago still come to his parties. The answer is {a:P1.steady}, and the case is {o:ordpersonality}.',
      'Both are as theatrical as each other. What turns it into {o:histrionic} is the bigger display when the attention goes elsewhere, and what it has cost.'
    ] }
]);

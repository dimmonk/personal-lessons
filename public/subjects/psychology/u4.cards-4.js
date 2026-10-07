// Psychology, Unit Four, part two (first half): the fourth name (being at the center of attention) and its two look-alike pairs.

FC.cards('psychology', 'u4', [

  /* ---------- Histrionic personality ---------- */
  { id: 'meet-histrionic', kind: 'meet', outcome: 'histrionic',
    link: 'The names so far were about needing to be special, or needing someone to stay. This one is about attention itself.',
    case: 'pa-marguerite', mark: 'P1',
    explain: [
      'Dennis needed to be above others. Marguerite does not need anyone below her. She needs to be looked at, and any attention will do as long as it is on her.',
      'You see it best when the attention leaves her. A colleague is applauded, and Marguerite says nothing unkind. She puts on a bigger show until the room turns back. The feelings are usually real: big, and quick to change.'
    ],
    spot: [
      { do: 'Check the years and places: every job she has had, her sister’s wedding, her father’s funeral.', why: 'It happens even at events that are not about her.' },
      { do: 'See how she acts: every story told as if on a stage, first to arrive and last to leave.', why: 'She puts herself at the center.' },
      { do: 'Watch what she does when attention goes elsewhere: a colleague is applauded, and she tells the story of her terrible week until the room turns back.', why: 'Her show gets bigger, and she does not run anyone down.' },
      { do: 'Look for the cost: her sister has stopped inviting her to small gatherings.', why: 'The show keeps wearing people out.' }
    ],
    feature: { step: 'P1', option: 'center' },
    name: 'This is {o:histrionic}. “Histrionic” comes from an old word for an actor, so it means theatrical.' },

  { id: 'check-histrionic', kind: 'check', after: 'histrionic',
    case: 'pa-tilly',
    ask: { type: 'option', step: 'P1', among: ['above', 'steady', 'overlooked', 'clings', 'center'] } },

  { id: 'look-borderline-histrionic', kind: 'lookalike', ledger: 'borderline~histrionic',
    link: 'Both have big feelings, and big feelings are what people notice first. Here is what separates them.',
    cases: ['pa-mira', 'pa-orla'],
    instruction: 'In both stories a roommate is leaving. Compare one thing: who the display is for. Is it for the one who is leaving, or for the whole room?',
    prompt: { kind: 'which', option: 'P1.clings', answer: 'pa-mira' },
    difference: [
      'In Story A, Mira clings to her roommate, says she would be nothing without her, and the next week tells the others that she was selfish. All of it is aimed at one person who seems to be leaving, and it swings from adoring her to attacking her. That is {o:borderline}.',
      'In Story B, Orla stands on a chair and speaks to the whole room, and when another guest is applauded she sings louder over the end of it. The room is the audience, and she attacks no one. That is {o:histrionic}.',
      'The tears are the same. What differs is who the display is aimed at, and whether it turns into an attack on the person who seems to be leaving.'
    ] },

  { id: 'look-histrionic-ordpersonality', kind: 'lookalike', ledger: 'histrionic~ordpersonality',
    link: 'Drama alone is what people most often mistake for this one. Here are two people who are dramatic in everything they do.',
    cases: ['pa-sofia', 'pa-tito'],
    instruction: 'Both are dramatic at every event, in every village. Compare one thing: what the drama has cost.',
    prompt: { kind: 'which', option: 'P1.center', answer: 'pa-sofia' },
    difference: [
      'In Story A, Sofia says her heart is racing and she needs to sit down when the raffle winner is announced, until the vendors gather around her. The committee has stopped asking her to help, and two neighbors cross the road. That is {o:histrionic}.',
      'In Story B, Tito leads the cheering and buys the winner a drink. The committee asks him to introduce the raffle every year, and his old neighbors still come to his parties. That is {o:ordpersonality}.',
      'Both are just as theatrical. What turns it into {o:histrionic} is the bigger show when the attention goes elsewhere, and the cost.'
    ] }
]);

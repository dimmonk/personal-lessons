// Political Ideologies, Unit Four: drill cases for the first stage. None of these appears in a card.
// This stage asks this unit's question alone. Every case carries `not`: the nearest wrong name and why it fails here.
// Every text is invented. The places, laws and groups in them do not exist.

FC.cases('ideology', 'u4', [

  /* ---------- Stage two: this unit's question alone, on a new case ---------- */
  { id: 'i4-p-choir', use: 'drill', tier: 'varied', setting: 'faith', topic: 'a chapel choir of nine voices',
    text: "From a chapel newsletter: 'The chapel choir has shrunk from forty voices to nine, and we are sorry for it. But the nine sing the old hymns as they were sung when our grandparents were young, and those hymns should guide our worship. We ask the chapel to look after the choir that is left, and to try new music only a little at a time.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'those hymns should guide our worship', T1: ['We ask the chapel to look after the choir that is left, and to try new music only a little at a time'] },
    reason: { T1: 'The text is sorry that the choir has shrunk, but what it asks for is {cue:T1}. It asks that what is left be kept, and that change be slow. It does not ask for the forty voices back.' },
    not: { outcome: 'react', why: 'The text is sad about a loss, which can look like the other name. But sadness is not a request. It does not call the loss a wrong, and it asks for nothing to be put back.' } },

  { id: 'i4-p-seats', use: 'drill', tier: 'clean', setting: 'town', topic: 'the old seats of an upper hall',
    text: "From a speech by the Varne Council of Rank: 'In the old days the seats of the Upper Hall were held by the heads of the oldest houses, each in his place by birth. The Constitution Act gave the seats to the vote and left the old houses outside the door. That was a wrong against the order of this country. That order should guide us, so return the seats of the Upper Hall to the houses that held them.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['That order should guide us'], T1: ['That was a wrong against the order of this country', 'return the seats of the Upper Hall to the houses that held them'] },
    reason: { T1: 'The old seats are gone, the text calls their loss a wrong, and it asks for them to be returned: {cue:T1}.' },
    not: { outcome: 'conserv', why: 'The old order is not still in place to be kept. The text says it was taken, and asks for it to be put back.' } },

]);

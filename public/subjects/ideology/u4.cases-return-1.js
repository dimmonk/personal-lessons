// Political Ideologies, Unit Four: fresh cases kept back for later days (three for each name, one for each scheduled return).
// A name that is due returns as a case the learner has not seen, run as a whole route, so every case carries marked words and a
// reason for both questions, and `not`: the nearest wrong name and why it fails here.
// Every text is invented. The places, laws and groups in them do not exist.

FC.cases('ideology', 'u4', [

  /* ---------- Keeping what is still there ---------- */
  { id: 'i4-ret-founders', use: 'return', tier: 'varied', setting: 'schooling', topic: 'a founders’ day walk to the old well',
    text: "From the Lowmoor school newsletter: 'Each year on Founders' Day the whole school walks to the old well and the head reads out the names of those who built it, as has been done since the school began. That custom should guide how the school keeps its year. Keep Founders' Day. If the schedule has to change, change it a term at a time, and ask the older students' parents first.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'That custom should guide how the school keeps its year', T1: ["Keep Founders' Day", "change it a term at a time, and ask the older students' parents first"] },
    reason: { D1: 'The text holds up a custom handed down, the walk to the well, as what should guide: {cue:D1}.',
              T1: 'The walk is still made, and the text asks for it to stay and for the schedule to change a term at a time: {cue:T1}.' },
    not: { outcome: 'react', why: 'Nothing has been taken away, so nothing is asked back. The walk to the well is still made each year.' } },

  { id: 'i4-ret-stalls', use: 'return', tier: 'varied', setting: 'work', topic: 'market stalls passed on by a handshake',
    text: "From the Saltgate market traders' paper: 'Our stalls have gone to the next trader on the old terms, a handshake and a year's apprenticeship, for longer than the market has had a roof. That old way of passing on a stall should guide how the market is run. Keep it. If the council wants a register of stalls, let it be brought in slowly, one row at a time, with the traders asked.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'That old way of passing on a stall should guide how the market is run', T1: ['Keep it', 'let it be brought in slowly, one row at a time, with the traders asked'] },
    reason: { D1: 'The text holds up an old way of passing on stalls as what should guide: {cue:D1}.',
              T1: 'The old way is still used, and the text asks for it to stay and for any register to come slowly: {cue:T1}.' },
    not: { outcome: 'react', why: 'The old terms are still in use, so nothing has gone and nothing is asked back.' } },

  { id: 'i4-ret-funeral', use: 'return', tier: 'varied', setting: 'faith', topic: 'a bell rung for each year of a life',
    text: "From the Orrel Dale burial board: 'When someone dies in the dale the bell is rung once for each year of their life, and the neighbors carry the coffin to the church on foot. That custom should guide how the burial board is run. Keep it. If the lane must be closed for repairs, let the board change the route in small steps and ask the bearers first.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'That custom should guide how the burial board is run', T1: ['Keep it', 'let the board change the route in small steps and ask the bearers first'] },
    reason: { D1: 'The text holds up a custom handed down, the bell and the walk to the church, as what should guide: {cue:D1}.',
              T1: 'The custom is still kept, and the text asks for it to stay and for the path to change in small steps: {cue:T1}.' },
    not: { outcome: 'react', why: 'The custom has not been taken away, so nothing is asked back. The lane closing is a repair, not something torn down.' } },

  /* ---------- Bringing back what has gone ---------- */
  { id: 'i4-ret-wardens', use: 'return', tier: 'varied', setting: 'town', topic: 'six wardens abolished by a municipal act',
    text: "From a speech to the Gannet Quay burgesses: 'For seven hundred years the six wardens of Gannet Quay held the keys of the town and answered to the old charter. The Municipal Act abolished the wardens and gave the keys to a clerk. That was a wrong against the town's charter. The old charter should guide us, so repeal the Act, give the wardens their keys back and seat all six again.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['The old charter should guide us'], T1: ["That was a wrong against the town's charter", 'repeal the Act, give the wardens their keys back and seat all six again'] },
    reason: { D1: 'The text holds up an old order, the charter and its six wardens, as what should guide: {cue:D1}.',
              T1: 'The wardens are gone, the text calls their abolition a wrong, and it asks for them to be seated again: {cue:T1}.' },
    not: { outcome: 'conserv', why: 'The wardens are not still in place to be kept. An act abolished them, and the text asks for them to be put back.' } },

  { id: 'i4-ret-barns', use: 'return', tier: 'varied', setting: 'money', topic: 'church tithe barns sold by an act',
    text: "From a pamphlet by the Tithe Barn Society: 'For five hundred years the church of the Kell Valley held the tithe barns and gave out grain in the hungry months. The Property Act sold the barns to private buyers. That was a wrong done to the poor of the valley. The old giving of grain should guide how this valley is fed, so buy the barns back, return them to the church and let it give out grain again.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['The old giving of grain should guide how this valley is fed'], T1: ['That was a wrong done to the poor of the valley', 'buy the barns back, return them to the church and let it give out grain again'] },
    reason: { D1: 'The text holds up the church’s old giving of grain as what should guide: {cue:D1}.',
              T1: 'The barns have been sold, the text calls that a wrong, and it asks for them to be bought back and returned to the church: {cue:T1}.' },
    not: { outcome: 'conserv', why: 'The old giving of grain is not being kept. The barns were sold, and the text asks for them to be returned.' } },

  { id: 'i4-ret-bells', use: 'return', tier: 'varied', setting: 'faith', topic: 'a cathedral bell tower and its chapter',
    text: "From a letter by the Friends of Lenmoor Cathedral: 'For nine hundred years the cathedral bells of Lenmoor rang the hours for the whole city, and the cathedral chapter owned the tower. The City Property Act took the tower from the chapter. That was a wrong, and the city has lost something by it. The old ringing of the hours should guide how the city keeps its time, so give the tower back to the chapter and let it ring the hours again.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['The old ringing of the hours should guide how the city keeps its time'], T1: ['That was a wrong, and the city has lost something by it', 'give the tower back to the chapter and let it ring the hours again'] },
    reason: { D1: 'The text holds up the old ringing of the hours as what should guide the city: {cue:D1}.',
              T1: 'The chapter has lost the tower, the text calls that a wrong, and it asks for the tower to be given back: {cue:T1}.' },
    not: { outcome: 'conserv', why: 'The text holds up an old custom, but the chapter no longer holds the tower. Nothing is being kept, and the text asks for the tower to be returned.' } }
]);

// Political Ideologies, Unit Four: fresh cases kept back for later days (one for each name).
// A name that is due returns as a case the learner has not seen, run as a whole route, so every case carries marked words and a
// reason for both questions, and `not`: the nearest wrong name and why it fails here.
// Every text is invented. The places, laws and groups in them do not exist.

FC.cases('ideology', 'u4', [

  /* ---------- Keeping what is still there ---------- */
  { id: 'i4-ret-founders', use: 'return', tier: 'varied', setting: 'schooling', topic: 'a founders’ day walk to the old well',
    text: "From the Lowmoor school newsletter: 'Each year on Founders' Day the whole school walks to the old well and the head reads out the names of those who built it, as has been done since the school began. That custom should guide how the school keeps its year. Keep Founders' Day. If the schedule has to change, change it a term at a time, and ask the older students' parents first.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'That custom should guide how the school keeps its year', T1: ["Keep Founders' Day", "change it a term at a time, and ask the older students' parents first"] },
    reason: { D1: 'It holds up a custom handed down, the walk to the well, as its guide: {cue:D1}.',
              T1: 'The walk is still made, and the text asks to keep it and change the schedule a term at a time: {cue:T1}.' },
    not: { outcome: 'react', why: 'Nothing has been taken away, so nothing is asked back. The walk to the well is still made each year.' } },

  /* ---------- Bringing back what has gone ---------- */
  { id: 'i4-ret-wardens', use: 'return', tier: 'varied', setting: 'town', topic: 'six wardens abolished by a municipal act',
    text: "From a speech to the Gannet Quay burgesses: 'For seven hundred years the six wardens of Gannet Quay held the keys of the town and answered to the old charter. The Municipal Act abolished the wardens and gave the keys to a clerk. That was a wrong against the town's charter. The old charter should guide us, so repeal the Act, give the wardens their keys back and seat all six again.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['The old charter should guide us'], T1: ["That was a wrong against the town's charter", 'repeal the Act, give the wardens their keys back and seat all six again'] },
    reason: { D1: 'It holds up an old order, the charter and its six wardens, as its guide: {cue:D1}.',
              T1: 'The wardens are gone, the text calls that a wrong, and it asks for them to be seated again: {cue:T1}.' },
    not: { outcome: 'conserv', why: 'The wardens are not still in place to be kept. An act abolished them, and the text asks for them back.' } },

]);

// Political Ideologies, Unit Four: the misleading cases of the whole-case stage (no help).
// A misleading case is built so that its story brings back a named teaching case of another name (echo), or shows a second answer to
// the key's first question that gives way by the key's tie-break (also). The feedback says so, which is how the "does it look like a
// case you know?" second look is practiced.
// Every text is invented. The places, laws and groups in them do not exist.

FC.cases('ideology', 'u4', [

  /* ---------- Stage four, misleading: the whole route ---------- */
  { id: 'i4-r-flag', use: 'drill', tier: 'misleading', setting: 'borders', topic: 'a countryside club, its country and its customs', also: ['nation'], echo: 'i4-lk-nationalism-harbor',
    text: "From a speech to the Ferndale Countryside Club: 'We love this country and we are proud of it. But what makes it ours is the Sunday service, the village green and the old courtesies handed down to us, and those should guide how the country is run. Keep them. If laws must change, let them change slowly, a little at a time.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'what makes it ours is the Sunday service, the village green and the old courtesies handed down to us, and those should guide how the country is run', T1: ['Keep them', 'let them change slowly, a little at a time'] },
    reason: { D1: 'The text speaks of the country, but what it says should guide it is old ways handed down: {cue:D1}. When a text shows both, the answer is {a:D1.tradition}.',
              T1: 'The Sunday service, the green and the courtesies are still there, and the text asks to keep them and change laws slowly: {cue:T1}.' },
    not: { outcome: 'nationalism', why: 'The text is proud of the country, which can look like {o:nationalism}. But it holds up old ways as its guide, and asks only to keep them.' } },

  { id: 'i4-r-banner', use: 'drill', tier: 'misleading', setting: 'town', topic: 'a banner speech for one people and one crown', also: ['nation'],
    text: "From a banner speech in the kingdom of Torra: 'Torra is one people with one crown. The Convention that sat on the throne's empty seat and handed the nation to talkers did a wrong we will not forgive. The crown is the old order of Torra and should guide it. We say: put the king back on his throne, put the bishops back in the king's court, and let the Convention go home.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['The crown is the old order of Torra and should guide it'], T1: ['did a wrong we will not forgive', "put the king back on his throne, put the bishops back in the king's court"] },
    reason: { D1: 'The text speaks for one people, but what it says should guide the country is the crown, an old order: {cue:D1}. When a text shows both, the answer is {a:D1.tradition}.',
              T1: 'The throne is empty, the text calls what emptied it a wrong, and it asks for the king and the bishops back: {cue:T1}.' },
    not: { outcome: 'fasc', why: 'The text speaks for one people and wants the Convention sent home, which can look like {o:fasc}. But it holds up the crown, an old order, and asks for it back; no new leader or movement is named.' } },

  { id: 'i4-r-orchard', use: 'drill', tier: 'misleading', setting: 'town', topic: 'a lost orchard and a surviving cider pressing', echo: 'i4-lk-react-school',
    text: "From the Marsh End Gardeners' Circle: 'Forty years ago we lost the old orchard to the bypass, and not a year goes by without someone saying so. We will not ask for it back; it is gone. But the cider-pressing that survives, and the blessing of the last trees, should guide how the village marks the fall. We ask the village to keep them, and to change nothing about them in a hurry.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'the cider-pressing that survives, and the blessing of the last trees, should guide how the village marks the fall', T1: ['We will not ask for it back; it is gone', 'We ask the village to keep them, and to change nothing about them in a hurry'] },
    reason: { D1: 'It holds up two customs handed down, the pressing and the blessing, as its guide: {cue:D1}.',
              T1: 'It mourns the orchard, then says it will not ask for it back: {cue:T1}. It asks only to keep what survives and change slowly.' },
    not: { outcome: 'react', why: 'The text is sad about something lost, which can look like the other name. But it says it will not ask for the orchard back, and asks only to keep what survives.' } },

  { id: 'i4-r-calm', use: 'drill', tier: 'misleading', setting: 'schooling', topic: 'a calm request to reopen a village school', echo: 'i4-lk-conserv-school',
    text: "From a letter in the Penhallow Gazette, written calmly: 'There is no anger in this letter, and no hurry. The old village school of Penhallow, taught by the pastor's wife in the old way, was closed by the Schools Consolidation Act, and we hold that was a wrong done to the village. That old way of teaching should guide what Penhallow's children are taught. We ask only that, when the time is right, the Act be repealed, the school-house be reopened and the old way of teaching restored.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ["That old way of teaching should guide what Penhallow's children are taught"], T1: ['we hold that was a wrong done to the village', 'the Act be repealed, the school-house be reopened and the old way of teaching restored'] },
    reason: { D1: 'It holds up an old way of teaching as its guide: {cue:D1}.',
              T1: 'The school is closed, the text calls that a wrong, and it asks for the act to be repealed and the school reopened: {cue:T1}. How calmly it asks does not change what it asks for.' },
    not: { outcome: 'conserv', why: 'The calm tone can look like a wish to keep what is there. But the school is closed, and the text asks for it to be reopened.' } },

]);

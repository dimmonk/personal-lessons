// Political Ideologies, Unit Four: the misleading cases of stage four (the whole route, no help) and the faulty claims of the last stage.
// A misleading case is built so that its story brings back a named teaching case of another name (echo), or shows a second answer to
// the key's first question that gives way by the key's tie-break (also). The feedback says so, which is how the "does it look like a
// case you know?" second look is practised. A claim is something a person might say that uses a name wrongly, or reasons in one
// of the unit's ways; the fault is shown after the learner commits, and the claim put right is always the last thing shown.
// Every text is invented. The places, laws and groups in them do not exist.

FC.cases('ideology', 'u4', [

  /* ---------- Stage four, misleading: the whole route ---------- */
  { id: 'i4-r-flag', use: 'drill', tier: 'misleading', setting: 'borders', topic: 'a countryside club, its country and its customs', also: ['nation'], echo: 'i4-lk-nationalism-harbour',
    text: "From a speech to the Ferndale Countryside Club: 'We love this country and we are proud of it. But what makes it ours is the Sunday service, the village green and the old courtesies handed down to us, and those should guide how the country is run. Keep them. If laws must change, let them change slowly, a little at a time.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'what makes it ours is the Sunday service, the village green and the old courtesies handed down to us, and those should guide how the country is run', T1: ['Keep them', 'let them change slowly, a little at a time'] },
    reason: { D1: 'The text speaks of the country, but what it says should guide the country is old ways handed down: {cue:D1}. When a text shows both that and one people put first, the answer is the old-ways one.',
              T1: 'The Sunday service, the green and the courtesies are still there, and the text asks for them to stay and for laws to change slowly: {cue:T1}.' },
    not: { outcome: 'nationalism', why: 'The text is proud of the country, which is what you point to for {o:nationalism}. But it holds up old ways as what should guide, and that answer comes first. It then asks for those ways to be kept, and for nothing to be put back.' },
    wouldChange: 'If the text left out the Sunday service, the green and the courtesies and spoke only of one proud people, the answer to {q:D1} would be {a:D1.nation}.' },

  { id: 'i4-r-banner', use: 'drill', tier: 'misleading', setting: 'town', topic: 'a banner speech for one people and one crown', also: ['nation'], echo: 'i4-lk-fasc-crown',
    text: "From a banner speech in the kingdom of Torra: 'Torra is one people with one crown. The Convention that sat on the throne's empty seat and handed the nation to talkers did a wrong we will not forgive. The crown is the old order of Torra and should guide it. We say: put the king back on his throne, put the bishops back in the king's court, and let the Convention go home.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['The crown is the old order of Torra and should guide it'], T1: ['did a wrong we will not forgive', "put the king back on his throne, put the bishops back in the king's court"] },
    reason: { D1: 'The text speaks for one people, but what it says should guide the country is the crown, an old order: {cue:D1}. When a text shows both, the answer is the old-ways one.',
              T1: 'The throne is empty, the text calls what put it so a wrong, and it asks for the king and the bishops to be put back: {cue:T1}.' },
    not: { outcome: 'fasc', why: 'The text speaks for one people and wants the Convention sent home, which can look like {o:fasc}. But what it holds up is the crown, an old order that it says was torn down, and it asks for that order back. It does not say that a new leader or movement will speak for everyone.' },
    wouldChange: 'If the text said nothing of a crown or any old order and asked for every party to be shut down so that one leader spoke for the whole people, the answer to {q:D1} would be {a:D1.nation}.' },

  { id: 'i4-r-orchard', use: 'drill', tier: 'misleading', setting: 'town', topic: 'a lost orchard and a surviving cider pressing', echo: 'i4-lk-react-school',
    text: "From the Marsh End Gardeners' Circle: 'Forty years ago we lost the old orchard to the bypass, and not a year goes by without someone saying so. We will not ask for it back; it is gone. But the cider-pressing that survives, and the blessing of the last trees, should guide how the village marks the autumn. We ask the parish to keep them, and to change nothing about them in a hurry.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'the cider-pressing that survives, and the blessing of the last trees, should guide how the village marks the autumn', T1: ['We will not ask for it back; it is gone', 'We ask the parish to keep them, and to change nothing about them in a hurry'] },
    reason: { D1: 'The text holds up two customs handed down, the pressing and the blessing, as what should guide the village: {cue:D1}.',
              T1: 'The text mourns the orchard and then says so plainly: {cue:T1}. It asks for what survives to be kept and for change to be slow, and it asks for nothing to be brought back.' },
    not: { outcome: 'react', why: 'The text is sad about something that has gone, which can look like the other name. But it says it will not ask for the orchard back, and what it asks for is that what survives be kept.' },
    wouldChange: 'If the text called the loss of the orchard a wrong and asked for the bypass to be pulled up and the orchard planted again, the answer would be {a:T1.restore}.' },

  { id: 'i4-r-calm', use: 'drill', tier: 'misleading', setting: 'schooling', topic: 'a calm request to reopen a village school', echo: 'i4-lk-conserv-school',
    text: "From a letter in the Penhallow Gazette, written calmly: 'There is no anger in this letter, and no hurry. The old village school of Penhallow, taught by the vicar's wife in the old way, was closed by the Schools Consolidation Act, and we hold that was a wrong done to the village. That old way of teaching should guide what Penhallow's children are taught. We ask only that, when the time is right, the Act be repealed, the school-house be reopened and the old way of teaching restored.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ["That old way of teaching should guide what Penhallow's children are taught"], T1: ['we hold that was a wrong done to the village', 'the Act be repealed, the school-house be reopened and the old way of teaching restored'] },
    reason: { D1: 'The text holds up an old way of teaching as what should guide: {cue:D1}.',
              T1: 'The school is closed, the text calls that a wrong, and it asks for the act to be repealed and the school reopened: {cue:T1}. How calmly it asks does not change what it asks for.' },
    not: { outcome: 'conserv', why: 'The calm tone and the patience can look like a wish to keep what is there. But the school is closed, and the text asks for it to be reopened. What it asks for is something put back.' },
    wouldChange: 'If the school were still open and the text asked only that it stay as it is, and that any change be slow, the answer would be {a:T1.keep}.' },

  /* ---------- Faulty claims: the first is worked for the learner; then commit first, the fault, the claim put right ---------- */
  { id: 'i4-claim-demo', use: 'claim',
    text: '"Her letter says the church school should keep teaching the old hymns. That is what reactionary means: she wants to go back."',
    ask: { type: 'missing', name: 'react' },
    fault: 'The claim points at the old hymns and at a wish to keep them, and stops there. Keeping something that is still there is not {o:react}. The name goes with the answer {a:T1.restore}, and for that the text must say an old order has gone, that its going was a wrong, and that it should be put back. In the claim the hymns are still taught, so nothing has gone.',
    corrected: 'Her letter says the church school should keep teaching the old hymns. If the hymns are still taught and she asks for them to stay, the answer is {a:T1.keep} and the name is {o:conserv}. It would be {o:react} only if the hymns had been taken out by a law she called a wrong, and she asked for the law to be undone.' },

  { id: 'i4-claim-values', use: 'claim',
    text: '"The letter says the old hymns are still sung every Sunday and should be kept, and that any change should be slow. So it must want the old order brought back."',
    ask: { type: 'option', step: 'T1', answer: 'keep' },
    fault: 'The claim gives the letter’s own words, and they answer the question the claim then gets wrong. The hymns are still sung, so nothing has gone. The letter asks for them to be kept and for change to be slow. The question asks what the text wants done with the old ways, and the answer to it is {a:T1.keep}, not a wish to bring an order back.',
    corrected: 'The letter says the old hymns are still sung every Sunday and should be kept, and that any change should be slow. Nothing has gone and nothing is asked back, so the answer to {q:T1} is {a:T1.keep}, and the name is {o:conserv}.' },

  { id: 'i4-claim-sad', use: 'claim',
    text: '"The newsletter says the chapel choir has dwindled and it is sad to see. It must want the old choir back, so it is reactionary."',
    ask: { type: 'missing', name: 'react' },
    fault: 'The claim treats sorrow as a request. Saying that something has gone, and that it is a pity, is not saying that its going was a wrong, and it is not asking for it to be put back. The name {o:react} needs both, and nothing in the claim says either.',
    corrected: 'The newsletter says the chapel choir has dwindled and it is sad to see. That alone is not enough for any name. If it asked only that the choir that is left be looked after, the answer would be {a:T1.keep}. It would be {o:react} only if it said the choir was wrongly broken up and asked for it to be brought back.' },

  { id: 'i4-claim-afraid', use: 'claim',
    text: '"Anyone who says the old ways should be kept is just afraid of change. That’s conservatism."',
    ask: { type: 'missing', name: 'conserv' },
    fault: 'The claim names a motive, fear, and no text can show that. What a text can show is what you point to for {o:conserv}: {needs:conserv}. A text may ask for old ways to be kept out of fear, or love, or habit, and nothing in the text tells which.',
    corrected: 'Someone says the old ways should be kept. That tells you only what they want. It is {o:conserv} if the text holds up ways handed down as what should guide, wants them kept and any change slow, and asks for nothing that has gone to be put back. Why they want it is a different question, and it is not asked here.' },

  { id: 'i4-claim-quarry', use: 'claim',
    text: '"The notice says it stands with those who cut the stone against those who own the quarry, and it asks for the old quarry songs to be kept. So it must be given the old-ways answer."',
    ask: { type: 'option', step: 'D1', answer: 'class' },
    fault: 'The claim reads one half of the notice and then reads the other half out of it. The notice does ask for the old songs to be kept, but it also sets working people against owners and takes the workers’ side. When a text shows both {a:D1.tradition} and {a:D1.class}, the answer is {a:D1.class}.',
    corrected: 'The notice stands with those who cut the stone against those who own the quarry, and asks for the old songs to be kept. It shows two answers to {q:D1}, and the answer is {a:D1.class}. The old songs are in the text, but the side the text takes is the workers’.' }
]);

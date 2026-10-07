// Political Ideologies, Unit Four: the clean cases of the whole-case stage (no help).
// Every question asked here carries marked words and a reason, so each case has cues and a reason for the first question too.
// Every text is invented. The places, laws and groups in them do not exist.

FC.cases('ideology', 'u4', [

  /* ---------- Stage four, clean: the whole route ---------- */
  { id: 'i4-r-bake', use: 'drill', tier: 'clean', setting: 'town', topic: 'a village bake day in a common oven',
    text: "From the Lower Marle parish newsletter: 'Every Saturday the village bakes its bread in the common oven, as it has since the parish was founded, and the neighbors share the loaves. That shared baking should guide how we plan the new village hall. Keep the oven in use. If the hall's kitchen must be modernized, let it be done in stages, and let the bakers say how fast.'",
    outcome: 'conserv', route: { D1: ['tradition'], T1: ['keep'] },
    cues: { D1: 'That shared baking should guide how we plan the new village hall', T1: ['Keep the oven in use', 'let it be done in stages, and let the bakers say how fast'] },
    reason: { D1: 'It holds up a custom handed down, the shared baking, as its guide: {cue:D1}.',
              T1: 'The baking still goes on, and the text asks to keep the oven and change the kitchen in stages: {cue:T1}.' },
    not: { outcome: 'react', why: 'The oven is in use today, so nothing is gone and nothing is asked back.' } },

  { id: 'i4-r-yard', use: 'drill', tier: 'clean', setting: 'faith', topic: 'a churchyard taken by the council',
    text: "From a letter to the Hobb Vale parish: 'For nine hundred years the dead of this vale were laid in the churchyard, and the parish kept it. The Cemeteries Act took the churchyard from the parish and gave it to the council. That was a wrong done to the living and the dead. The old keeping of the churchyard should guide how we lay our dead, so give the churchyard back to the parish and let the parish keep it as before.'",
    outcome: 'react', route: { D1: ['tradition'], T1: ['restore'] },
    cues: { D1: ['The old keeping of the churchyard should guide how we lay our dead'], T1: ['That was a wrong done to the living and the dead', 'give the churchyard back to the parish and let the parish keep it as before'] },
    reason: { D1: 'It holds up the parish’s old keeping of the churchyard as its guide: {cue:D1}.',
              T1: 'The parish has lost the churchyard, the text calls that a wrong, and it asks for it back: {cue:T1}.' },
    not: { outcome: 'conserv', why: 'The text holds up an old custom, but the churchyard is already lost. Nothing is being kept; it asks for the churchyard back.' } },

]);
